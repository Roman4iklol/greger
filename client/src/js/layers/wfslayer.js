var LayerModel = require('layers/layer');

module.exports = LayerModel.extend({

  defaults: {
    url: '',
    featureId: 'FID',
    serverType: 'geoserver',
    dataFormat: 'WFS',
    params: {
      service: '',
      version: '',
      request: '',
      typename: '',
      outputFormat: '',
      srsname: '',
      bbox: ''
    },
    showLabels: true
  },

  featureMap: {},

  reprojectFeatures: function (features, from, to) {
    if (Array.isArray(features)) {
      features.forEach(feature => {
        if (feature.getGeometry().getCoordinates) {
          let coords = feature.getGeometry().getCoordinates();
          try {
            switch (feature.getGeometry().getType()) {
              case 'Point':
                feature.getGeometry().setCoordinates(ol.proj.transform(coords, from, to));
                break;
              case 'LineString':
                feature.getGeometry().setCoordinates(coords.map(coord => ol.proj.transform(coord, from, to)));
                break;
              case 'Polygon':
                feature.getGeometry().setCoordinates([coords[0].map(coord => ol.proj.transform(coord, from, to))]);
                break;
            }
          } catch (e) {
            console.error('Coordinate transformation error.', e);
          }
        }
      });
    }
  },

  addFeatures: function (data, format) {
    var features = [],
      parser,
      to = this.get('olMap').getView().getProjection().getCode(),
      from = this.get('projection');

    if (format === 'wfs') {
      parser = new ol.format.WFS({
        gmlFormat: this.get('params').version === '1.0.0' ? new ol.format.GML2() : undefined
      });
    }

    if (format === 'geojson') {
      parser = new ol.format.GeoJSON();
    }

    if (parser) {
      features = parser.readFeatures(data);
    }

    if (to !== from) {
      this.reprojectFeatures(features, from, to);
    }

    this.get('source').addFeatures(features);
  },

  loadAJAX: function (url, format) {
    url = HAJK2.wfsProxy + url;
    $.get(url, (features) => {
      this.addFeatures(features, format || 'wfs');
    });
  },

  getStyle: function (feature, resolution) {
    const icon = this.get('icon');
    const fillColor = this.get('fillColor');
    const lineColor = this.get('lineColor');
    const lineStyle = this.get('lineStyle');
    const lineWidth = this.get('lineWidth');
    const symbolXOffset = this.get('symbolXOffset');
    const symbolYOffset = this.get('symbolYOffset');
    const rotation = 0.0;
    const align = this.get('labelAlign') || 'center';
    const baseline = this.get('labelBaseline') || 'alphabetic';
    const size = this.get('labelSize') || '12px';
    const offsetX = this.get('labelOffsetX') || 0;
    const offsetY = this.get('labelOffsetY') || 0;
    const weight = this.get('labelWeight') || 'normal';
    const font = weight + ' ' + size + ' ' + (this.get('labelFont') || 'Arial');
    const labelFillColor = this.get('labelFillColor') || '#000000';
    const outlineColor = this.get('labelOutlineColor') || '#FFFFFF';
    const outlineWidth = this.get('labelOutlineWidth') || 3;
    const labelAttribute = this.get('labelAttribute') || 'Name';
    const showLabels = this.get('showLabels');

    function getLineDash () {
      var scale = (a, f) => a.map(b => f * b),
        width = lineWidth,
        style = lineStyle,
        dash = [12, 7],
        dot = [2, 7]
        ;
      switch (style) {
        case 'dash':
          return width > 3 ? scale(dash, 2) : dash;
        case 'dot':
          return width > 3 ? scale(dot, 2) : dot;
        default :
          return undefined;
      }
    }

    function getFill () {
      return new ol.style.Fill({
        color: fillColor
      });
    }

    function getText () {
      return new ol.style.Text({
        textAlign: align,
        textBaseline: baseline,
        font: font,
        text: feature.get(labelAttribute),
        fill: new ol.style.Fill({
          color: labelFillColor
        }),
        stroke: new ol.style.Stroke({
          color: outlineColor,
          width: outlineWidth
        }),
        offsetX: offsetX,
        offsetY: offsetY,
        rotation: rotation
      });
    }

    function getText () {
      return new ol.style.Text({
        textAlign: align,
        textBaseline: baseline,
        font: font,
        text: feature ? feature.get(labelAttribute) : 'apa',
        fill: new ol.style.Fill({
          color: labelFillColor
        }),
        stroke: new ol.style.Stroke({
          color: outlineColor,
          width: outlineWidth
        }),
        offsetX: offsetX,
        offsetY: offsetY,
        rotation: rotation
      });
    }

    function getImage () {
      return icon === ''
        ? getPoint()
        : getIcon();
    }

    function getIcon () {
      return new ol.style.Icon({
        src: icon,
        scale: 1,
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        anchor: [
          symbolXOffset,
          symbolYOffset
        ]
      });
    }

    function getPoint () {
      return new ol.style.Circle({
        fill: getFill(),
        stroke: getStroke(),
        radius: 4
      });
    }

    function getStroke () {
      return new ol.style.Stroke({
        color: lineColor,
        width: lineWidth,
        lineDash: getLineDash()
      });
    }

    function getStyleObj () {
      var obj = {
        fill: getFill(),
        image: getImage(),
        stroke: getStroke()
      };
      if (showLabels) {
        obj.text = getText();
      }

      return obj;
    }

    return [new ol.style.Style(getStyleObj())];
  },

  initialize: function () {
    var source,
      layer;

    source = new ol.source.Vector({
      loader: (extent) => {
        if (this.get('dataFormat') === 'GeoJSON') {
          this.loadAJAX(this.get('url'), this.get('dataFormat').toLowerCase());
        } else {
          if (this.get('loadType') === 'jsonp') {
            this.loadJSON(this.createUrl(extent));
          }
          if (this.get('loadType') === 'ajax') {
            this.loadAJAX(this.createUrl(extent, true));
          }
        }
      },
      strategy: ol.loadingstrategy.all
    });

    layer = new ol.layer.Image({
      information: this.get('information'),
      caption: this.get('caption'),
      name: this.get('name'),
      visible: this.get('visible'),
      opacity: this.get('opacity'),
      queryable: this.get('queryable'),
      source: new ol.source.ImageVector({
        source: source,
        style: this.getStyle.bind(this)
      })
    });

    if (this.get('loadType') === 'jsonp') {
      global.window[this.get('callbackFunction')] = (response) => {
        this.addFeatures(response, 'geojson');
      };
    }

    // this.set("queryable", true);
    this.set('source', source);
    this.set('layer', layer);
    this.set('type', 'wfs');

    LayerModel.prototype.initialize.call(this);
  },

  createUrl: function (extent, ll) {
    var props = Object.keys(this.get('params')),
      url = this.get('url') + '?',
      version = this.get('params')['version'];

    for (let i = 0; i < props.length; i++) {
      let key = props[i];
      let value = '';

      if (key !== 'bbox') {
        value = this.get('params')[key];
        url += key + '=' + value;
      } else {
        // value = extent.join(',');
        // if (version !== "1.0.0") {
        //    value += "," + this.get("params")['srsname'];
        // }
      }

      if (i !== props.length - 1) {
        url += '&';
      }
    }

    return url;
  }
});
