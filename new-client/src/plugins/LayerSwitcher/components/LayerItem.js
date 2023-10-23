import React, { useEffect, useState, useRef } from "react";

// Material UI components
import {
  Box,
  IconButton,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from "@mui/material";

import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

// Custom components
import LegendIcon from "./LegendIcon";
import LegendImage from "./LegendImage";
import LayerItemOptions from "./LayerItemOptions";
import LayerItemCollapse from "./LayerItemCollapse";

// Custom hooks
import useSnackbar from "../../../hooks/useSnackbar";

export default function LayerItem({
  layer,
  toggleIcon,
  clickCallback,
  isBackgroundLayer,
  draggable,
  toggleable,
  app,
  display,
  subLayersSection,
  visibleSubLayers,
  visibleSubLayersCaption,
  allSubLayersCaption,
  expandableSection,
  onSetZoomVisible,
}) {
  // WmsLayer load status, shows warning icon if !ok
  const [wmsLayerLoadStatus, setWmsLayerLoadStatus] = useState("ok");
  // State for layer zoom visibility
  const [zoomVisible, setZoomVisible] = useState(true);
  // Keep zoomend listener in state
  const [zoomEndListener, setZoomEndListener] = useState();
  // State that toggles legend collapse
  const [legendIsActive, setLegendIsActive] = useState(false);

  const visibleSubLayersCaptionRef = useRef(visibleSubLayersCaption);

  // Use the custom useSnackbar hook.
  const { addToSnackbar, removeFromSnackbar, displaySnackbar } = useSnackbar();

  useEffect(() => {
    visibleSubLayersCaptionRef.current = visibleSubLayersCaption;
  }, [visibleSubLayersCaption, visibleSubLayersCaptionRef.current]);

  useEffect(() => {
    // Check if the layer is currently visible.
    if (layer.get("visible")) {
      // Trigger zoom check.
      triggerZoomCheck(false, true);
      listenToZoomChange(layer.get("visible"));
    } else {
      // Remove the layer from the snackbar message.
      removeFromSnackbar(layer.get("caption"));
    }

    // Handler for zoom change event.
    const handleChange = () => {
      // Check if the layer is currently visible.
      if (layer.get("visible")) {
        // Trigger zoom check.
        triggerZoomCheck(false, true);
      }
    };

    // Subscribe to zoom changes.
    const zoomChangeSubscription = app.globalObserver.subscribe(
      "core.zoomEnd",
      handleChange
    );

    // Subscribe to layer load status.
    const loadStatusSubscription = app.globalObserver.subscribe(
      "layerswitcher.wmsLayerLoadStatus",
      (d) => {
        wmsLayerLoadStatus !== "loaderror" &&
          layer.get("name") === d.id &&
          setWmsLayerLoadStatus(d.status);
      }
    );

    // Call handleChange immediately.
    handleChange();

    // Clean up by unsubscribing when the component unmounts.
    return () => {
      app.globalObserver.unsubscribe("core.zoomEnd", zoomChangeSubscription);
      app.globalObserver.unsubscribe(
        "layerswitcher.wmsLayerLoadStatus",
        loadStatusSubscription
      );
    };
  }, [visibleSubLayers, layer.get("visible"), wmsLayerLoadStatus]);

  // This function listens to changes in the zoom level of the map and updates the layer accordingly.
  const listenToZoomChange = (shouldListen) => {
    // If the layer does not use min/max zoom levels, return early.
    if (!layerUsesMinMaxZoom()) return;

    // Define the event name to listen for.
    const eventName = "core.zoomEnd";

    // If we are listening for zoom changes and there is no existing listener, subscribe to the event.
    if (shouldListen && !zoomEndListener) {
      setZoomEndListener(
        app.globalObserver.subscribe(eventName, zoomEndHandler)
      );
    } else {
      // If we are not listening for zoom changes and there is an existing listener, unsubscribe from the event.
      if (zoomEndListener) {
        app.globalObserver.unsubscribe(eventName, zoomEndListener);
        setZoomEndListener(null);
      }
    }
  };

  const triggerZoomCheck = (click, visible) => {
    if (!layerUsesMinMaxZoom()) return;

    zoomEndHandler(click);

    if (visible === false) {
      // Remove the layer from the snackbar message.
      removeFromSnackbar(layer.get("caption"));
    }
  };

  /**
   * Handles the zoom end event and determines if the layer should be visible at the current zoom level.
   * @param {boolean} wasClicked - True if the zoom button was clicked, false otherwise.
   * @returns {boolean} - True if the layer is visible at the current zoom level, false otherwise.
   */
  const zoomEndHandler = (wasClicked) => {
    const zoom = app.map.getView().getZoom();
    const layerProperties = layer.getProperties();
    const layerIsZoomVisible =
      zoom > layerProperties.minZoom && zoom <= layerProperties.maxZoom;

    // Callback to parent component to update the zoom visibility state.
    if (typeof onSetZoomVisible === "function") {
      onSetZoomVisible(layerIsZoomVisible);
    }

    if (layer.get("visible")) {
      if (!layerIsZoomVisible) {
        // Check for group layers by checking if the prop `allSubLayersCaption` from GroupLayer is set.
        if (allSubLayersCaption && allSubLayersCaption.length > 0) {
          // Check if atleast one layer is visible.
          if (
            visibleSubLayersCaptionRef.current &&
            visibleSubLayersCaptionRef.current.length > 0
          ) {
            // To ensure that the message is updated correctly, we need to remove the sublayers that are not visible.
            const subLayersToRemove = allSubLayersCaption
              .filter(
                (item) =>
                  visibleSubLayersCaptionRef.current.includes(item) === false
              )
              .map((item) => item);

            removeFromSnackbar(subLayersToRemove);
            addToSnackbar(visibleSubLayersCaptionRef.current, false, true);
          } else {
            // Otherwise we remove all layers from the message.
            removeFromSnackbar(allSubLayersCaption);
          }
        } else {
          addToSnackbar(layer.get("caption"), false, true);
        }
      } else {
        if (allSubLayersCaption && allSubLayersCaption.length > 0) {
          // If no sublayers are visible, remove the layer captions from the message.
          removeFromSnackbar(allSubLayersCaption);
        } else {
          removeFromSnackbar(layer.get("caption"));
        }
      }
    }

    setZoomVisible(layerIsZoomVisible);
    return layerIsZoomVisible;
  };

  const layerUsesMinMaxZoom = () => {
    const lprops = layer.getProperties();
    const maxZ = lprops.maxZoom ?? 0;
    const minZ = lprops.minZoom ?? 0;
    return (maxZ > 0 && maxZ < Infinity) || (minZ > 0 && minZ < Infinity);
  };

  // Handles list item click
  const handleLayerItemClick = () => {
    // If a clickCallback is defined, call it.
    if (clickCallback) {
      removeFromSnackbar(layer.get("caption"));
      clickCallback();
      return;
    }

    // Check if layer is currently visible.
    const isVisible = layer.get("visible");

    // Toggle layer visibility.
    const newVisibility = !isVisible;
    layer.set("visible", newVisibility);

    if (isVisible && !newVisibility) {
      // Remove the layer from the snackbar message.
      removeFromSnackbar(layer.get("caption"));
    } else if (layer.get("layerType") !== "system") {
      // If the layer is not a system layer, trigger a zoom check.
      triggerZoomCheck(true, newVisibility);
    }
  };

  // Render method for legend icon
  const getIconFromLayer = () => {
    const layerLegendIcon =
      layer.get("layerInfo")?.legendIcon || layer.get("legendIcon");
    if (layerLegendIcon !== undefined) {
      return <LegendIcon url={layerLegendIcon} />;
    } else if (layer.get("layerType") === "system") {
      return <BuildOutlinedIcon sx={{ mr: "5px" }} />;
    }
    return renderLegendIcon();
  };

  const renderLegendIcon = () => {
    if (
      layer.get("layerType") === "group" ||
      layer.get("layerType") === "base" ||
      layer.isFakeMapLayer ||
      layer.get("layerType") === "system"
    ) {
      return null;
    }
    return (
      <Tooltip
        placement="left"
        title={
          legendIsActive ? "Dölj teckenförklaring" : "Visa teckenförklaring"
        }
      >
        <IconButton
          sx={{ p: 0.25, mr: "5px" }}
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            setLegendIsActive(!legendIsActive);
          }}
        >
          <FormatListBulletedOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    );
  };

  // Render method for checkbox icon
  const getLayerToggleIcon = () => {
    if (toggleIcon) {
      return toggleIcon;
    }
    return !layer.get("visible") ? (
      <CheckBoxOutlineBlankIcon />
    ) : layer.get("layerType") === "group" &&
      visibleSubLayersCaption.length !== layer.subLayers.length ? (
      <CheckBoxIcon sx={{ fill: "gray" }} />
    ) : (
      <CheckBoxIcon
        sx={{
          fill: (theme) =>
            !zoomVisible && layer.get("visible") && !visibleSubLayersCaption
              ? theme.palette.warning.dark
              : zoomVisible && layer.get("visible")
              ? theme.palette.primary
              : "",
        }}
      />
    );
  };

  /**
   * Render the load information component.
   * @instance
   * @return {external:ReactElement}
   */
  const renderStatusIcon = () => {
    return (
      wmsLayerLoadStatus === "loaderror" && (
        <IconButton disableRipple>
          <Tooltip
            disableInteractive
            title="Lagret kunde inte laddas in. Kartservern svarar inte."
          >
            <WarningAmberOutlinedIcon fontSize="small" />
          </Tooltip>
        </IconButton>
      )
    );
  };

  // Show layer details action
  const showLayerDetails = (e) => {
    e.stopPropagation();
    app.globalObserver.publish("setLayerDetails", { layer: layer });
  };

  return (
    <div className="layer-item" style={{ display: display }}>
      <ListItemButton
        disableRipple
        onClick={toggleable ? handleLayerItemClick : null}
        sx={{
          "&:hover .dragInidcatorIcon": {
            opacity: draggable ? 1 : 0,
          },
          p: 0,
          pl: draggable ? 2 : 1,
        }}
        dense
      >
        {draggable && (
          <IconButton
            edge="start"
            disableRipple
            sx={{
              px: 0,
              opacity: 0,
              transition: "opacity 200ms",
            }}
            className="dragInidcatorIcon"
          >
            <Tooltip title="Dra för att ändra ritordning">
              <DragIndicatorOutlinedIcon fontSize={"small"} />
            </Tooltip>
          </IconButton>
        )}
        {expandableSection && expandableSection}
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            alignItems: "center",
            py: 0.5,
            pr: 1,
            borderBottom: (theme) =>
              legendIsActive
                ? `${theme.spacing(0.2)} solid transparent`
                : `${theme.spacing(0.2)} solid ${theme.palette.divider}`,
          }}
        >
          {toggleable && (
            <IconButton
              sx={{ pl: expandableSection ? 0 : "5px" }}
              disableRipple
              size="small"
            >
              {getLayerToggleIcon()}
            </IconButton>
          )}
          {isBackgroundLayer && !toggleable ? (
            layer.isFakeMapLayer ? (
              <WallpaperIcon sx={{ mr: "5px", ml: draggable ? 0 : "16px" }} />
            ) : (
              <PublicOutlinedIcon
                sx={{ mr: "5px", ml: draggable ? 0 : "16px" }}
              />
            )
          ) : (
            getIconFromLayer()
          )}
          <ListItemText
            primary={layer.get("caption")}
            primaryTypographyProps={{
              fontWeight:
                layer.get("visible") && !draggable && !isBackgroundLayer
                  ? "bold"
                  : "inherit",
            }}
          />
          <ListItemSecondaryAction>
            {renderStatusIcon()}
            {isBackgroundLayer && !toggleable && !draggable ? (
              <IconButton
                size="small"
                disableTouchRipple
                disableFocusRipple
                disableRipple
              >
                <Tooltip title="Bakgrundskartan ligger låst längst ner i ritordningen">
                  <LockOutlinedIcon />
                </Tooltip>
              </IconButton>
            ) : null}
            {layer.isFakeMapLayer !== true &&
              layer.get("layerType") !== "system" && (
                <IconButton size="small" onClick={(e) => showLayerDetails(e)}>
                  <KeyboardArrowRightOutlinedIcon
                    sx={{
                      color: (theme) => theme.palette.grey[500],
                    }}
                  ></KeyboardArrowRightOutlinedIcon>
                </IconButton>
              )}
          </ListItemSecondaryAction>
        </Box>
      </ListItemButton>
      {layer.get("layerType") === "group" ||
      layer.get("layerType") === "base" ||
      layer.isFakeMapLayer ||
      layer.get("layerType") === "system" ? null : (
        <Box sx={{ pl: draggable ? 3.5 : 5.5 }}>
          <LegendImage
            layerItemDetails={{ layer: layer }}
            open={legendIsActive}
            subLayerIndex={null}
          ></LegendImage>
        </Box>
      )}
      {subLayersSection && subLayersSection}
    </div>
  );
}
