import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import cslx from "clsx";
import { SnackbarProvider } from "notistack";
import Observer from "react-event-observer";

import AppModel from "./../models/AppModel.js";
import Window from "./Window.js";
import CookieNotice from "./CookieNotice";
import Introduction from "./Introduction";
import Alert from "./Alert";
import PluginWindows from "./PluginWindows";

import Zoom from "../controls/Zoom";
import Rotate from "../controls/Rotate";
import ScaleLine from "../controls/ScaleLine";
import Attribution from "../controls/Attribution.js";
import MapCleaner from "../controls/MapCleaner";
import MapResetter from "../controls/MapResetter";
import MapSwitcher from "../controls/MapSwitcher";
import Information from "../controls/Information";
import PresetLinks from "../controls/PresetLinks";

import DrawerToggleButtons from "../components/Drawer/DrawerToggleButtons";

import {
  Backdrop,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Tooltip
} from "@material-ui/core";

import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MapIcon from "@material-ui/icons/Map";
import MenuBookIcon from "@material-ui/icons/MenuBook";

// A global that holds our windows, for use see components/Window.js
document.windows = [];

const DRAWER_WIDTH = 250;

const styles = theme => {
  return {
    map: {
      zIndex: 1,
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    flexBox: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      pointerEvents: "none"
    },
    windowsContainer: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    pointerEventsOnChildren: {
      "& > *": {
        pointerEvents: "auto"
      }
    },
    header: {
      zIndex: theme.zIndex.appBar,
      height: theme.spacing(8),
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      [theme.breakpoints.down("xs")]: {
        zIndex: 3
      }
    },
    main: {
      zIndex: 2,
      flex: 1,
      display: "flex"
    },
    leftColumn: {
      flex: 1
    },
    rightColumn: {
      marginTop: theme.spacing(-8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      flex: 0,
      [theme.breakpoints.down("xs")]: {
        marginTop: 0
      }
    },
    controlsColumn: {
      flex: 0,
      display: "flex",
      flexDirection: "column",
      marginTop: theme.spacing(-8),
      [theme.breakpoints.down("xs")]: {
        marginTop: 0
      }
    },
    footer: {
      zIndex: 3,
      display: "flex",
      justifyContent: "flex-end",
      height: 25,
      "& > *": {
        marginLeft: theme.spacing(1)
      }
    },
    drawerHeader: {
      width: DRAWER_WIDTH,
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 2),
      ...theme.mixins.toolbar,
      justifyContent: "space-between"
    },
    logo: {
      maxHeight: 35
    },
    backdrop: {
      zIndex: theme.zIndex.drawer - 1 // Carefully selected to be above Window but below Drawer
    },
    widgetItem: {
      width: "220px"
    },
    // IMPORTANT: shiftedLeft definition must be the last one, as styles are applied in that order via JSS
    shiftedLeft: {
      left: DRAWER_WIDTH
    }
  };
};

/**
 * The main React Component of Hajk. Rendered by index.js.
 *
 * @class App
 * @extends {React.PureComponent}
 */
class App extends React.PureComponent {
  static propTypes = {
    /** List of plugins that has been activated in this instance of Hajk */
    activeTools: PropTypes.array.isRequired,
    /** CSS class declarations used in this component */
    classes: PropTypes.object.isRequired,
    /** Contains activeMap, layersConfig as well as objects that hold appConfig and mapConfig*/
    config: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const drawerPermanentFromLocalStorage =
      window.localStorage.getItem("drawerPermanent") !== null
        ? window.localStorage.getItem("drawerPermanent") === "true"
          ? true
          : false
        : null;

    this.state = {
      alert: false,
      drawerButtons: [],
      loading: false,
      mapClickDataResult: {},

      // Drawer-related states
      // If cookie for "drawerPermanent" is not null, use it to control Drawer visibility,
      // else fall back to value from config, or finally don't show Drawer.
      drawerVisible:
        drawerPermanentFromLocalStorage !== null
          ? drawerPermanentFromLocalStorage
          : props.config.mapConfig.map.drawerVisible || false,

      // To check whether drawer is permanent, first take a look at the cookie.
      // If cookie is not null, use it to show/hide Drawer.
      // If cookie however is null, fall back to the values from config.
      // Finally, fall back to "false" if no cookie or config is found.
      drawerPermanent:
        drawerPermanentFromLocalStorage !== null
          ? drawerPermanentFromLocalStorage
          : (props.config.mapConfig.map.drawerVisible &&
              props.config.mapConfig.map.drawerPermanent) ||
            false,
      drawerMouseOverLock: false
    };
    this.globalObserver = new Observer();
    this.appModel = new AppModel(props.config, this.globalObserver);
  }

  componentDidMount() {
    var promises = this.appModel
      .createMap()
      .addLayers()
      .loadPlugins(this.props.activeTools);
    Promise.all(promises).then(() => {
      this.setState({
        tools: this.appModel.getPlugins()
      });

      // Tell Drawer to add a button for the map tools
      this.globalObserver.publish("core.addDrawerToggleButton", {
        value: "plugins",
        ButtonIcon: MapIcon,
        caption: "Kartverktyg",
        order: 2
      });
      this.globalObserver.publish("core.addDrawerToggleButton", {
        value: "document",
        ButtonIcon: MenuBookIcon,
        caption: "Översiktsplan",
        order: 1
      });

      // Tell everyone that we're done loading (in case someone listens)
      this.globalObserver.publish("core.appLoaded");
    });
    this.bindHandlers();
  }

  componentDidCatch(error) {
    console.error(error);
  }

  bindHandlers() {
    this.globalObserver.subscribe("core.mapClick", mapClickDataResult => {
      this.appModel.highlight(false);
      this.setState({
        mapClickDataResult: mapClickDataResult
      });
    });

    this.globalObserver.subscribe("core.alert", message => {
      this.setState({
        alert: true,
        alertMessage: message
      });
    });

    this.globalObserver.subscribe("core.hideDrawer", () => {
      if (this.state.drawerPermanent) {
        console.log("In hideDrawer, Drawer is permanent. Unpermannenting.");
        this.togglePermanent();
      } else {
        this.state.drawerVisible &&
          !this.state.drawerPermanent &&
          this.setState({ drawerVisible: false });
      }
    });

    this.globalObserver.subscribe("core.drawerContent", v => {
      console.log("Drawer content changed to value: ", v);
      if (v !== null) {
        console.log("Showing Drawer");
        this.setState({ drawerVisible: true });
      } else {
        console.log("Hiding Drawer");
        // this.setState({ drawerVisible: false });
        this.globalObserver.publish("core.hideDrawer");
      }
    });

    this.globalObserver.subscribe("core.addDrawerToggleButton", button => {
      const newState = [...this.state.drawerButtons, button];
      this.setState({ drawerButtons: newState });
    });

    this.appModel
      .getMap()
      .getLayers()
      .getArray()
      .forEach(layer => {
        layer.on("change:visible", evt => {
          let layer = evt.target;
          if (
            this.state.mapClickDataResult &&
            Array.isArray(this.state.mapClickDataResult.features)
          ) {
            this.state.mapClickDataResult.features.forEach(feature => {
              if (feature.layer === layer) {
                let o = { ...this.state.mapClickDataResult };
                o.features = o.features.filter(f => f !== feature);
                this.setState({
                  mapClickDataResult: o
                });
              }
            });
          }
        });
      });
  }

  renderInfoclickWindow() {
    const infoclickConfig = this.props.config.mapConfig.tools.find(
      t => t.type === "infoclick"
    );

    if (infoclickConfig === undefined) {
      return null;
    }

    const open =
      this.state.mapClickDataResult &&
      this.state.mapClickDataResult.features &&
      this.state.mapClickDataResult.features.length > 0
        ? true
        : false;
    const features =
      this.state.mapClickDataResult && this.state.mapClickDataResult.features;

    const { title, position, width, height } = infoclickConfig.options;

    return (
      <Window
        globalObserver={this.globalObserver}
        title={title || "Infoclick"}
        open={open}
        position={position || "right"}
        mode="window"
        width={width || 400}
        height={height || 300}
        features={features}
        map={this.appModel.getMap()}
        onDisplay={feature => {
          this.appModel.highlight(feature);
        }}
        onClose={() => {
          this.appModel.highlight(false);
          this.setState({
            mapClickDataResult: undefined
          });
        }}
      />
    );
  }

  /**
   * Flip the @this.state.drawerPermanent switch, then preform some
   * more work to ensure the OpenLayers canvas has the correct
   * canvas size.
   *
   * @memberof App
   */
  togglePermanent = e => {
    console.log("In togglePermanent: ", e);
    this.setState({ drawerPermanent: !this.state.drawerPermanent }, () => {
      // Viewport size has changed, hence we must tell OL
      // to refresh canvas size.
      this.appModel.getMap().updateSize();

      // If Drawer has been "(un)permanented", our #windows-container size has changed.
      // To ensure that our Windows still are inside the container, we dispach an
      // event that all Windows subscribe to.
      this.globalObserver.publish("core.drawerToggled");

      // Save current state of drawerPermanent to LocalStorage, so app reloads to same state
      window.localStorage.setItem(
        "drawerPermanent",
        this.state.drawerPermanent
      );

      // If user clicked on Toggle Permanent and the result is,
      // that this.state.drawerPermanent===false, this means that we
      // have exited the permanent mode. In this case, we also
      // want to ensure that Drawer is hidden (otherwise we would
      // just "un-permanent" the Drawer, but it would still be visible).
      this.state.drawerPermanent === false &&
        this.globalObserver.publish("core.hideDrawer");
    });
  };

  handleMouseEnter = e => {
    this.setState({ drawerMouseOverLock: true });
  };

  handleMouseLeave = e => {
    this.setState({ drawerMouseOverLock: false });
  };

  renderSearchPlugin() {
    const searchPlugin = this.appModel.plugins.search;
    if (searchPlugin) {
      return (
        <searchPlugin.component
          map={searchPlugin.map}
          app={searchPlugin.app}
          options={searchPlugin.options}
        />
      );
    } else {
      return null;
    }
  }

  renderInformationPlugin() {
    const c = this.appModel.config.mapConfig.tools.find(
      t => t.type === "information"
    );

    return (
      c !== undefined &&
      c.hasOwnProperty("options") && <Information options={c.options} />
    );
  }

  isString(s) {
    return s instanceof String || typeof s === "string";
  }

  render() {
    const { classes, config } = this.props;

    // If clean===true, some components won't be rendered below
    const clean = config.mapConfig.map.clean;

    const defaultCookieNoticeMessage = this.isString(
      this.props.config.mapConfig.map.defaultCookieNoticeMessage
    )
      ? this.props.config.mapConfig.map.defaultCookieNoticeMessage
      : undefined;

    const defaultCookieNoticeUrl = this.isString(
      this.props.config.mapConfig.map.defaultCookieNoticeUrl
    )
      ? this.props.config.mapConfig.map.defaultCookieNoticeUrl
      : undefined;

    return (
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <>
          <CookieNotice
            globalObserver={this.globalObserver}
            defaultCookieNoticeMessage={defaultCookieNoticeMessage}
            defaultCookieNoticeUrl={defaultCookieNoticeUrl}
          />
          <Alert
            open={this.state.alert}
            message={this.state.alertMessage}
            parent={this}
            title="Meddelande"
          />
          <div
            id="appBox"
            className={cslx(classes.flexBox, {
              [classes.shiftedLeft]: this.state.drawerPermanent
            })}
          >
            <header
              id="header"
              className={cslx(classes.header, classes.pointerEventsOnChildren)}
            >
              {clean === false && (
                <DrawerToggleButtons
                  drawerButtons={this.state.drawerButtons}
                  globalObserver={this.globalObserver}
                />
              )}
              {clean === false && this.renderSearchPlugin()}
            </header>
            <main className={classes.main}>
              <div
                id="left-column"
                className={cslx(
                  classes.leftColumn,
                  classes.pointerEventsOnChildren
                )}
              ></div>
              <div
                id="right-column"
                className={cslx(
                  classes.rightColumn,
                  classes.pointerEventsOnChildren
                )}
              ></div>

              <div
                id="controls-column"
                className={cslx(
                  classes.controlsColumn,
                  classes.pointerEventsOnChildren
                )}
              >
                <Zoom map={this.appModel.getMap()} />
                <div id="plugin-control-buttons"></div>
                <Rotate map={this.appModel.getMap()} />
                {clean === false && <MapSwitcher appModel={this.appModel} />}
                {clean === false && <MapCleaner appModel={this.appModel} />}
                {clean === false && <PresetLinks appModel={this.appModel} />}
                {clean === false && this.renderInformationPlugin()}
                {clean === true && (
                  <MapResetter
                    mapConfig={this.appModel.config.mapConfig}
                    map={this.appModel.getMap()}
                  />
                )}
              </div>
            </main>
            <footer
              className={cslx(classes.footer, classes.pointerEventsOnChildren)}
            >
              <ScaleLine map={this.appModel.getMap()} />
              <Attribution map={this.appModel.getMap()} />
            </footer>
          </div>
          <div
            id="map"
            className={cslx(classes.map, {
              [classes.shiftedLeft]: this.state.drawerPermanent
            })}
          ></div>
          <div
            id="windows-container"
            className={cslx(
              classes.pointerEventsOnChildren,
              classes.windowsContainer,
              {
                [classes.shiftedLeft]: this.state.drawerPermanent
              }
            )}
          >
            {this.renderInfoclickWindow()}
            <PluginWindows
              plugins={this.appModel.getBothDrawerAndWidgetPlugins()}
            />
          </div>
          <Drawer
            open={this.state.drawerVisible}
            // NB: we can't simply toggle between permanent|temporary,
            // as the temporary mode unmounts element from DOM and
            // re-mounts it the next time, so we would re-rendering
            // our plugins all the time.
            variant="persistent"
          >
            <div className={classes.drawerHeader}>
              <img
                alt="Logo"
                className={classes.logo}
                src={config.mapConfig.map.logo}
              />
              {/** Hide Lock button in mobile mode - there's not screen estate to permanently lock Drawer on mobile viewports*/}
              <Hidden smDown>
                <Tooltip
                  title={
                    (this.state.drawerPermanent ? "Lås upp" : "Lås fast") +
                    " verktygspanelen"
                  }
                >
                  <IconButton
                    aria-label="pin"
                    onClick={this.togglePermanent}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                  >
                    {this.state.drawerPermanent ? (
                      this.state.drawerMouseOverLock ? (
                        <LockOpenIcon />
                      ) : (
                        <LockIcon />
                      )
                    ) : this.state.drawerMouseOverLock ? (
                      <LockIcon />
                    ) : (
                      <LockOpenIcon />
                    )}
                  </IconButton>
                </Tooltip>
              </Hidden>
            </div>
            <Divider />
            <div id="plugin-buttons" />
          </Drawer>
          <Backdrop
            open={this.state.drawerVisible && !this.state.drawerPermanent}
            className={classes.backdrop}
            onClick={e => {
              console.log("Got an onClick on Backdrop", e);
              this.globalObserver.publish("core.hideDrawer");
            }}
          />
          <Introduction
            experimentalIntroductionEnabled={
              this.appModel.config.appConfig.experimentalIntroductionEnabled
            }
            experimentalIntroductionSteps={
              this.appModel.config.appConfig.experimentalIntroductionSteps
            }
            globalObserver={this.globalObserver}
          />
        </>
      </SnackbarProvider>
    );
  }
}

export default withStyles(styles)(App);
