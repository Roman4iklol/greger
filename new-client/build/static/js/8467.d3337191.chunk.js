"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[8467],{78467:function(e,t,i){i.r(t);var o=i(15671),n=i(43144),l=i(60136),a=i(29388),c=i(72791),s=i(76863),r=i(61091),d=i(27247),h=i(16426),v=i(21456),u=i(43526),p=i(64119),m=i(34311),g=i(4565),f=i(45953),x=i(80184),y=(0,s.ZP)(r.Z)((function(e){var t=e.selected,i=e.theme;return{borderTop:"".concat(i.spacing(.5)," solid transparent"),borderBottom:t?"".concat(i.spacing(.5)," solid ").concat(i.palette.secondary.main):"".concat(i.spacing(.5)," solid transparent")}})),k=function(e){(0,l.Z)(i,e);var t=(0,a.Z)(i);function i(e){var n;return(0,o.Z)(this,i),(n=t.call(this,e)).state={editFeature:void 0},n.props.observer.subscribe("feature-to-update-view",(function(e){n.setState({editFeature:e})})),n}return(0,n.Z)(i,[{key:"componentWillUnmount",value:function(){this.props.observer.unsubscribe("feature-to-update-view")}},{key:"changeTool",value:function(e,t){var i=this.props,o=i.model,n=i.activeTool;if(t&&n===t.toLowerCase())o.deactivateInteraction();else if(n!==e)switch(o.deactivateInteraction(),e){case"add":o.activateInteraction("add",t);break;case"remove":o.activateInteraction("remove");break;case"modify":o.activateInteraction("modify");break;case"move":o.activateInteraction("move")}else o.deactivateInteraction()}},{key:"onAddPointClicked",value:function(){this.props.model.layer.dragLocked=!0,this.props.toggleActiveTool("point"),this.changeTool("add",this.props.editSource.editMultiPoint?"MultiPoint":"Point")}},{key:"onAddLineClicked",value:function(){this.props.model.layer.dragLocked=!0,this.props.toggleActiveTool("linestring"),this.changeTool("add",this.props.editSource.editMultiLine?"MultiLineString":"LineString")}},{key:"onAddPolygonClicked",value:function(){this.props.model.layer.dragLocked=!0,this.props.toggleActiveTool("polygon"),this.changeTool("add",this.props.editSource.editMultiPolygon?"MultiPolygon":"Polygon")}},{key:"onRemoveClicked",value:function(){this.props.toggleActiveTool("remove"),this.changeTool("remove")}},{key:"onModifyClicked",value:function(){this.props.toggleActiveTool("modify"),this.changeTool("modify")}},{key:"onMoveClicked",value:function(){this.props.model.layer.dragLocked=!1,this.props.toggleActiveTool("move"),this.changeTool("move")}},{key:"render",value:function(){var e=this,t=this.props.editSource,i=this.state.editFeature;return!t||i?null:(0,x.jsxs)(f.ZP,{container:!0,spacing:1,children:[(0,x.jsx)(f.ZP,{item:!0,xs:12,children:(0,x.jsx)(g.Z,{children:"L\xe4gg till"})}),(0,x.jsx)(f.ZP,{item:!0,xs:4,children:(0,x.jsxs)(y,{variant:"contained",fullWidth:!0,disabled:!t.editPoint&&!t.editMultiPoint,onClick:function(){e.onAddPointClicked()},selected:"point"===this.props.activeTool,type:"button",title:"L\xe4gg till punkt",children:["Punkt",(0,x.jsx)(h.Z,{sx:{marginLeft:1}})]})}),(0,x.jsx)(f.ZP,{item:!0,xs:4,children:(0,x.jsxs)(y,{variant:"contained",fullWidth:!0,disabled:!t.editLine&&!t.editMultiLine,onClick:function(){e.onAddLineClicked()},type:"button",title:"L\xe4gg till linje",selected:"linestring"===this.props.activeTool,children:["Linje",(0,x.jsx)(u.Z,{sx:{marginLeft:1}})]})}),(0,x.jsx)(f.ZP,{item:!0,xs:4,children:(0,x.jsxs)(y,{variant:"contained",fullWidth:!0,disabled:!t.editPolygon&&!t.editMultiPolygon,onClick:function(){e.onAddPolygonClicked()},type:"button",title:"L\xe4gg till yta",selected:"polygon"===this.props.activeTool,children:["Yta",(0,x.jsx)(v.Z,{sx:{marginLeft:1}})]})}),(0,x.jsx)(f.ZP,{item:!0,xs:12,children:(0,x.jsx)(g.Z,{children:"Editera"})}),(0,x.jsx)(f.ZP,{item:!0,xs:4,children:(0,x.jsxs)(y,{variant:"contained",fullWidth:!0,onClick:function(){e.onMoveClicked()},type:"button",title:"Flytta geometri",selected:"move"===this.props.activeTool,children:["Flytta",(0,x.jsx)(p.Z,{sx:{marginLeft:1}})]})}),(0,x.jsx)(f.ZP,{item:!0,xs:4,children:(0,x.jsxs)(y,{variant:"contained",fullWidth:!0,onClick:function(){e.onRemoveClicked()},type:"button",title:"Ta bort geometri",selected:"remove"===this.props.activeTool,children:["Radera",(0,x.jsx)(d.Z,{sx:{marginLeft:1}})]})}),(0,x.jsx)(f.ZP,{item:!0,xs:4,children:(0,x.jsxs)(y,{variant:"contained",fullWidth:!0,onClick:function(){e.onModifyClicked()},type:"button",title:"\xc4ndra geometri",selected:"modify"===this.props.activeTool,children:["\xc4ndra",(0,x.jsx)(m.Z,{sx:{marginLeft:1}})]})})]})}}]),i}(c.Component);t.default=k},21456:function(e,t,i){var o=i(64836);t.Z=void 0;var n=o(i(45649)),l=i(80184),a=(0,n.default)((0,l.jsx)("path",{d:"M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"}),"BorderStyle");t.Z=a},34311:function(e,t,i){var o=i(64836);t.Z=void 0;var n=o(i(45649)),l=i(80184),a=(0,n.default)((0,l.jsx)("path",{d:"M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"}),"FormatShapes");t.Z=a},43526:function(e,t,i){var o=i(64836);t.Z=void 0;var n=o(i(45649)),l=i(80184),a=(0,n.default)((0,l.jsx)("path",{d:"M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z"}),"LinearScale");t.Z=a},16426:function(e,t,i){var o=i(64836);t.Z=void 0;var n=o(i(45649)),l=i(80184),a=(0,n.default)([(0,l.jsx)("circle",{cx:"7",cy:"14",r:"3"},"0"),(0,l.jsx)("circle",{cx:"11",cy:"6",r:"3"},"1"),(0,l.jsx)("circle",{cx:"16.6",cy:"17.6",r:"3"},"2")],"ScatterPlot");t.Z=a},64119:function(e,t,i){var o=i(64836);t.Z=void 0;var n=o(i(45649)),l=i(80184),a=(0,n.default)((0,l.jsx)("path",{d:"m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"}),"ZoomOutMap");t.Z=a}}]);
//# sourceMappingURL=8467.d3337191.chunk.js.map