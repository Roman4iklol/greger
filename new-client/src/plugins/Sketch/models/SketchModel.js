import { ACTIVITIES, MAX_REMOVED_FEATURES } from "../constants";
import LocalStorageHelper from "../../../utils/LocalStorageHelper";
import GeoJSON from "ol/format/GeoJSON";

class SketchModel {
  #geoJSONParser;
  #storageKey;
  #dateTimeOptions;
  #drawModel;

  constructor(settings) {
    this.#geoJSONParser = new GeoJSON();
    this.#storageKey = "sketch";
    this.#dateTimeOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    this.#drawModel = settings.drawModel;
  }

  // Updates the removed features in the local-storage
  #setStoredRemovedFeatures = (removedFeatures) => {
    LocalStorageHelper.set(this.#storageKey, {
      ...LocalStorageHelper.get(this.#storageKey),
      removedFeatures: removedFeatures,
    });
  };

  // Returns the activity-object connected to the supplied id
  getActivityFromId = (id) => {
    return ACTIVITIES.find((activity) => {
      return activity.id === id;
    });
  };

  // Extracts the fill-style from the supplied feature-style
  #getFillStyle = (featureStyle) => {
    try {
      // Since we might be dealing with a style-array instead of a style-object
      // (in case of the special Arrow feature-type) we have to make sure to get
      // the actual base-style (which is located at position 0 in the style-array).
      const color = Array.isArray(featureStyle)
        ? featureStyle[0].getFill().getColor()
        : featureStyle.getFill().getColor();
      return { color };
    } catch (error) {
      console.error(`Failed to extract fill-style, ${error.message}`);
      return { color: null };
    }
  };

  // Extracts the stroke-style from the supplied feature-style
  #getStrokeStyle = (featureStyle) => {
    try {
      // Since we might be dealing with a style-array instead of a style-object
      // (in case of the special Arrow feature-type) we have to make sure to get
      // the actual base-style (which is located at position 0 in the style-array).
      const s = Array.isArray(featureStyle)
        ? featureStyle[0].getStroke()
        : featureStyle.getStroke();
      const color = s.getColor();
      const dash = s.getLineDash();
      const width = s.getWidth();
      return {
        color,
        dash,
        width,
      };
    } catch (error) {
      console.error(`Failed to extract stroke-style, ${error.message}`);
      return { color: null, dash: null, width: null };
    }
  };

  // Extracts and returns information about the feature style.
  #extractFeatureStyle = (feature) => {
    // Let's run this in a try-catch since we cannot be sure that a
    // real feature is supplied. (I.e. getStyle() etc. might not exist).
    try {
      const featureStyle = feature?.getStyle();
      // If no feature was supplied, or if we're unable to extract the style,
      // we return null.
      if (!featureStyle) {
        return { fillColor: null, strokeStyle: null };
      }
      // If we were able to extract the style we can continue by extracting
      // the fill- and stroke-style.
      const fillStyle = this.#getFillStyle(featureStyle);
      const strokeStyle = this.#getStrokeStyle(featureStyle);
      // And return an object containing them
      return { fillStyle, strokeStyle };
    } catch (error) {
      console.error(error);
      return { fillColor: null, strokeStyle: null };
    }
  };

  // Returns the current date and time on YYYY-MM-DD HH:MM:SS
  #getDateTimeString = () => {
    const date = new Date();
    return date.toLocaleString("default", this.#dateTimeOptions);
  };

  // Generates a random string that can be used as an ID.
  #generateRandomString = () => {
    return Math.random().toString(36).slice(2, 9);
  };

  // Returns the feature-style in a form that fits the feature-style-editor
  getFeatureStyle = (feature) => {
    try {
      // We're gonna need the base-style of the feature
      const featureBaseStyle = this.#extractFeatureStyle(feature);
      // Then we'll extract the text-settings. (These might be undefined, and
      // are only set if we are dealing with a text-feature).
      const featureTextStyle = feature.get("TEXT_SETTINGS");
      // Then we'll construct the feature-style-object and return it.
      return {
        strokeColor: this.#drawModel.parseRGBAString(
          featureBaseStyle?.strokeStyle.color
        ),
        lineDash: featureBaseStyle?.strokeStyle.dash,
        strokeWidth: featureBaseStyle?.strokeStyle.width,
        fillColor: this.#drawModel.parseRGBAString(
          featureBaseStyle?.fillStyle.color
        ),
        textForegroundColor: featureTextStyle?.foregroundColor,
        textBackgroundColor: featureTextStyle?.backgroundColor,
        textSize: featureTextStyle?.size,
      };
    } catch (error) {
      console.error(`Failed to get feature-style: Error: ${error}`);
      return null;
    }
  };

  // When a feature is removed, we should usually add it to the list of
  // removed features. However, there is one case where we should not!
  // If we've added a text-feature, and the user has chosen to abort the
  // input of text to apply to the feature, we make sure to remove it, and
  // that removed feature should not be shown in the list of removed features.
  featureShouldBeAddedToStorage = (feature) => {
    return !(
      feature.get("DRAW_METHOD") === "Text" && !feature.get("USER_TEXT")
    );
  };

  // We're gonna need to set some properties on the handled feature so that we can keep
  // track of it. (The "HANDLED_AT" prop will show the user at what time the feature was
  // removed, and the "HANDLED_ID" will be used if the user choses to restore the feature).
  decorateFeature = (feature) => {
    feature.set("EXTRACTED_STYLE", this.#extractFeatureStyle(feature));
    feature.set("HANDLED_AT", this.#getDateTimeString());
    feature.set("HANDLED_ID", this.#generateRandomString());
  };

  // Returns the earlier removed features which are stored in local-storage
  // If the first parameter is omitted, the method will return parsed OL-features,
  // otherwise, it will return the actual local-storage value.
  getRemovedFeaturesFromStorage = (returnType = "FEATURES") => {
    const inStorage = LocalStorageHelper.get(this.#storageKey);
    const storedFeatures = inStorage["removedFeatures"] || [];
    return returnType === "FEATURES"
      ? storedFeatures.map((parsedFeature) =>
          this.#geoJSONParser.readFeature(parsedFeature)
        )
      : storedFeatures;
  };

  // Updates the local-storage by adding the removed feature and potentially
  // removing old removed features. (We want to keep a maximum of MAX_REMOVED_FEATURES).
  addFeatureToStorage = (feature) => {
    const removedFeatures = this.getRemovedFeaturesFromStorage("STRINGS");
    const parsedFeature = this.#geoJSONParser.writeFeature(feature);
    this.#setStoredRemovedFeatures([
      parsedFeature,
      ...removedFeatures.slice(0, MAX_REMOVED_FEATURES - 1),
    ]);
  };

  // Updates the storage by removing the feature corresponding to the supplied id
  removeFeatureFromStorage = (id) => {
    const storedFeatures = this.getRemovedFeaturesFromStorage("STRINGS");
    this.#setStoredRemovedFeatures(
      storedFeatures.filter((f) => !f.includes(id))
    );
  };
}
export default SketchModel;
