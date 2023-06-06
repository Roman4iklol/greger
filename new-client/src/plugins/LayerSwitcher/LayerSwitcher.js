import React from "react";
import propTypes from "prop-types";
import BaseWindowPlugin from "../BaseWindowPlugin";

import LayersIcon from "@mui/icons-material/Layers";

import LayerSwitcherView from "./LayerSwitcherView.js";
import LayerSwitcherModel from "./LayerSwitcherModel.js";
import Observer from "react-event-observer";

export default class LayerSwitcher extends React.PureComponent {
  static propTypes = {
    app: propTypes.object.isRequired,
    map: propTypes.object.isRequired,
    options: propTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.localObserver = Observer();

    this.layerSwitcherModel = new LayerSwitcherModel({
      map: props.map,
      app: props.app,
      observer: this.localObserver,
    });
  }

  render() {
    return (
      <BaseWindowPlugin
        {...this.props}
        type="LayerSwitcher"
        custom={{
          icon: <LayersIcon />,
          title: "plugins.layerSwitcher.title",
          description: "plugins.layerSwitcher.description",
          height: "auto",
          width: 400,
        }}
      >
        <LayerSwitcherView
          app={this.props.app}
          map={this.props.map}
          model={this.layerSwitcherModel}
          observer={this.localObserver}
          options={this.props.options}
        />
      </BaseWindowPlugin>
    );
  }
}
