"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[2197,7959],{28619:function(t,e,o){o.r(e);var i=o(15671),n=o(43144),a=o(60136),r=o(29388),s=o(4942),c=o(72791),l=o(76863),u=o(48928),d=o(73978),p=o(58487),h=o(16398),g=o(80184),m=(0,l.ZP)(u.Z)((function(t){var e=t.theme;return(0,s.Z)({marginBottom:e.spacing(1),width:"210px"},e.breakpoints.down("sm"),{boxShadow:"none",borderBottom:"1px solid #ccc",borderRadius:0,margin:0,width:"100%",justifyContent:"left"})})),f=(0,l.ZP)(d.Z)((function(t){return{background:t.theme.palette.text.primary}})),b=function(t){(0,a.Z)(o,t);var e=(0,r.Z)(o);function o(){var t;(0,i.Z)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={open:!1,text:""},t}return(0,n.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.abstract,o=t.icon,i=t.onClick,n=t.title;return(0,g.jsx)(m,{onClick:i,children:(0,g.jsx)(p.Z,{children:(0,g.jsx)(h.Z,{avatar:(0,g.jsx)(f,{children:o}),title:n,subheader:e})})})}}]),o}(c.PureComponent);b.defaultProps={abstract:"Beskrivning saknas",title:"Titel saknas"},e.default=b},73151:function(t,e,o){o.r(e);var i=o(15671),n=o(43144),a=o(97326),r=o(60136),s=o(29388),c=o(72791),l=o(85286),u=o(54164),d=o(66788),p=o(35110),h=o(65514),g=o(4346),m=o(26191),f=o(28619),b=o(74599),v=o(80184),w=function(t){(0,r.Z)(o,t);var e=(0,s.Z)(o);function o(t){var n;(0,i.Z)(this,o),(n=e.call(this,t)).handleButtonClick=function(t){n.showWindow({hideOtherPluginWindows:!0,runCallback:!0}),n.props.app.globalObserver.publish("core.onlyHideDrawerIfNeeded")},n.showWindow=function(t){var e=t.hideOtherPluginWindows||!0,o=t.runCallback||!0;if(n.props.app.activeTool=n.type,n.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:n.type,activeMap:n.props.app.config.activeMap}),!0===n.state.windowVisible)return null;!0===e&&n.props.app.onWindowOpen((0,a.Z)(n)),n.setState({windowVisible:!0},(function(){!0===o&&"function"===typeof n.props.custom.onWindowShow&&n.props.custom.onWindowShow()}))},n.closeWindow=function(){n.type===n.props.app.activeTool&&(n.props.app.activeTool=void 0),n.setState({windowVisible:!1},(function(){"function"===typeof n.props.custom.onWindowHide&&n.props.custom.onWindowHide()}))},n.type=t.type.toLowerCase()||void 0,n.description=t.options.description||t.custom.description;var r=!1===n.props.app.config.mapConfig.map.clean&&(l.isMobile?t.options.visibleAtStartMobile:t.options.visibleAtStart)||!1;r&&n.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:n.type,activeMap:n.props.app.config.activeMap}),n.state={title:t.options.title||t.custom.title||"Unnamed plugin",color:t.options.color||t.custom.color||null,windowVisible:r},n.title=t.options.title||t.custom.title||"Unnamed plugin",n.width=t.options.width||t.custom.width||400,n.height=t.options.height||t.custom.height||"auto",n.position=t.options.position||t.custom.position||"left",t.app.registerWindowPlugin((0,a.Z)(n));var s="".concat(n.type,".showWindow");t.app.globalObserver.subscribe(s,(function(t){n.showWindow(t)}));var c="".concat(n.type,".closeWindow");return t.app.globalObserver.subscribe(c,(function(){n.closeWindow()})),n}return(0,n.Z)(o,[{key:"componentDidUpdate",value:function(t){t.custom.title!==this.props.custom.title&&this.setState({title:this.props.custom.title}),t.custom.color!==this.props.custom.color&&this.setState({color:this.props.custom.color})}},{key:"pluginIsWidget",value:function(t){return["left","right"].includes(t)}},{key:"renderWindow",value:function(t){var e=this.props.options.target;return"function"===typeof(null===t||void 0===t?void 0:t.render)?t.render():(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.default,{globalObserver:this.props.app.globalObserver,title:this.state.title,color:this.state.color,onClose:this.closeWindow,open:this.state.windowVisible,onResize:this.props.custom.onResize,onMaximize:this.props.custom.onMaximize,onMinimize:this.props.custom.onMinimize,draggingEnabled:this.props.custom.draggingEnabled,customPanelHeaderButtons:this.props.custom.customPanelHeaderButtons,resizingEnabled:this.props.custom.resizingEnabled,scrollable:this.props.custom.scrollable,allowMaximizedWindow:this.props.custom.allowMaximizedWindow,disablePadding:this.props.custom.disablePadding,width:this.width,height:this.height,position:this.position,mode:"window",layerswitcherConfig:this.props.app.config.mapConfig.tools.find((function(t){return"layerswitcher"===t.type})),children:c.cloneElement(this.props.children,{windowVisible:this.state.windowVisible})}),("toolbar"===e||this.pluginIsWidget(e))&&this.renderDrawerButton(),this.pluginIsWidget(e)&&this.renderWidgetButton("".concat(e,"-column")),"control"===e&&this.renderControlButton()]})}},{key:"renderDrawerButton",value:function(){return(0,u.createPortal)((0,v.jsx)(d.Z,{mdUp:this.pluginIsWidget(this.props.options.target),children:(0,v.jsxs)(p.ZP,{button:!0,divider:!0,selected:this.state.windowVisible,onClick:this.handleButtonClick,children:[(0,v.jsx)(h.Z,{children:this.props.custom.icon}),(0,v.jsx)(g.Z,{primary:this.title})]})}),document.getElementById("plugin-buttons"))}},{key:"renderWidgetButton",value:function(t){return(0,u.createPortal)((0,v.jsx)(d.Z,{mdDown:!0,children:(0,v.jsx)(f.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description})}),document.getElementById(t))}},{key:"renderControlButton",value:function(){return(0,u.createPortal)((0,v.jsx)(b.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description}),document.getElementById("plugin-control-buttons"))}},{key:"render",value:function(){return!0!==this.props.app.config.mapConfig.map.clean&&this.renderWindow(this.props.custom)}}]),o}(c.PureComponent);e.default=w},98648:function(t,e,o){o.r(e);var i=o(93433),n=o(29439),a=o(72791),r=o(98246),s=o(56650),c=o(75814),l=o(76863),u=o(28854),d=o(96580),p=o(13618),h=o(7168),g=o(81910),m=o(77959),f=o(80184),b=(0,l.ZP)(s.Z)((function(t){return{marginBottom:t.theme.spacing(1)}})),v=(0,l.ZP)(u.Z)((function(){return{minWidth:"unset",color:"unset",paddingLeft:7,paddingRight:7,paddingTop:6,paddingBottom:6}})),w=a.memo((function(t){var e=t.onClick,o=t.defaultTooltip,s=t.model,l=(0,r.Ds)().enqueueSnackbar,u=a.useState(!1),w=(0,n.Z)(u,2),y=w[0],Z=w[1],k=a.useState(o),C=(0,n.Z)(k,2),j=C[0],x=C[1],S=a.useState((0,f.jsx)(p.Z,{})),O=(0,n.Z)(S,2),E=O[0],P=O[1],A=(0,a.useCallback)((function(t){var e={};for(var o in t)e[o]=Number.isFinite(t[o])?t[o].toFixed(1):t[o];var n=[].concat((0,i.Z)(e.accuracy?["Nogranhet: ".concat(e.accuracy," m\n")]:[]),(0,i.Z)(e.altitude&&e.altitudeAccuracy?["H\xf6jd: ".concat(e.altitude," (+/- ").concat(e.altitudeAccuracy,") m\n")]:[]),(0,i.Z)(e.speed?["Hastighet: ".concat(e.speed," km/h\n")]:[]),(0,i.Z)(e.heading?["Riktning: ".concat(e.heading," rad\n")]:[])),r=(0,f.jsx)(a.Fragment,{children:n.map((function(t,e){return(0,f.jsx)("div",{style:{display:"block"},children:t},e)}))});x(r)}),[]),D=(0,a.useCallback)((function(t){switch(t){case"loading":P((0,f.jsx)(d.Z,{size:24}));break;case"on":P((0,f.jsx)(g.Z,{}));break;case"error":P((0,f.jsx)(h.Z,{})),x("Positionera: position ej tillg\xe4nglig");break;default:P((0,f.jsx)(p.Z,{})),x(o)}}),[o]),N=(0,a.useCallback)((function(t){1===t.code?l(m.LOCATION_DENIED_SNACK_MESSAGE,m.LOCATION_DENIED_SNACK_OPTIONS):l("Kunde inte fastst\xe4lla din plats. Felkod: ".concat(t.code,'. Detaljer: "').concat(t.message,'".'),{variant:"error"})}),[l]);return(0,a.useEffect)((function(){var t=s.localObserver.subscribe("geolocationChange",A),e=s.localObserver.subscribe("locationStatus",D),o=s.localObserver.subscribe("geolocationError",N);return function(){t.unsubscribe(),e.unsubscribe(),o.unsubscribe()}}),[s,A,D,N]),(0,f.jsx)(c.Z,{disableInteractive:!0,title:j,children:(0,f.jsx)(b,{children:(0,f.jsx)(v,{"aria-label":o,onClick:e,value:"check",selected:y,onChange:function(){y?s.disable():s.enable(),Z(!y)},children:E})})})}));e.default=w},72105:function(t,e,o){o.r(e);var i=o(1413),n=o(15671),a=o(43144),r=o(60136),s=o(29388),c=o(72791),l=o(54164),u=o(85194),d=o.n(u),p=o(81910),h=o(73151),g=o(99716),m=o(10294),f=o(98648),b=o(80184),v=function(t){(0,r.Z)(o,t);var e=(0,s.Z)(o);function o(t){var a;return(0,n.Z)(this,o),(a=e.call(this,t)).localObserver=d()(),a.model=new g.default((0,i.Z)((0,i.Z)({},a.props),{},{localObserver:a.localObserver})),a}return(0,a.Z)(o,[{key:"renderControlButton",value:function(){return(0,l.createPortal)((0,b.jsx)(f.default,{defaultTooltip:"Positionera: Visa min position i kartan",model:this.model}),document.getElementById("plugin-control-buttons"))}},{key:"render",value:function(){return(0,b.jsx)(h.default,(0,i.Z)((0,i.Z)({},this.props),{},{type:"Location",custom:{icon:(0,b.jsx)(p.Z,{}),title:"Positionera",description:"Visa min position i kartan",height:450,width:430,top:void 0,left:void 0,model:this.model,render:"control"===this.props.options.target?this.renderControlButton:null},children:(0,b.jsx)(m.default,{map:this.props.map,model:this.model})}))}}]),o}(c.PureComponent);e.default=v},99716:function(t,e,o){o.r(e);var i=o(15671),n=o(43144),a=o(73803),r=o(62652),s=o(29409),c=o(34951),l=o(5426),u=o(29868),d=o(75004),p=o(35201),h=o(64665),g=o(5400),m=o(66233),f=o(90927),b=function(){function t(e){var o=this;(0,i.Z)(this,t),this.handleGeolocationChange=function(t){o.localObserver.publish("geolocationChange",{accuracy:t.target.getAccuracy(),altitude:t.target.getAltitude(),altitudeAccuracy:t.target.getAltitudeAccuracy(),heading:t.target.getHeading(),speed:t.target.getSpeed()})},this.handleGeolocationError=function(t){o.localObserver.publish("locationStatus","error"),o.localObserver.publish("geolocationError",t)},this.handleGeolocationChangeAccuracy=function(t){o.accuracyFeature.setGeometry(t.target.getAccuracyGeometry())},this.handleGeolocationChangePosition=function(t){var e=t.target.getPosition();if(o.positionFeature.setGeometry(e?new s.Z(e):null),o.localObserver.publish("locationStatus","on"),o.zoomToLocation){var i=o.map.getView().getMaxZoom(),n=o.map.getView().getMinZoom(),a=Math.ceil(.5*(i-n));o.map.getView().animate({duration:2500,center:e,zoom:a}),o.zoomToLocation=!1}},this.toggleTracking=function(t){o.localObserver.publish("locationStatus",t?"loading":"off"),o.geolocation.setTracking(t),!1===t?(o.layer.getSource().clear(),o.zoomToLocation=!0):(o.layer.getSource().addFeature(o.accuracyFeature),o.layer.getSource().addFeature(o.positionFeature),setInterval((function(){o.flash(o.positionFeature)}),3e3))},this.flash=function(t){var e=3e3,i=Date.now(),n=t.getGeometry().clone(),a=o.layer.on("postrender",(function(t){var r=t.frameState.time-i;if(r>=e)(0,p.B)(a);else{var s=(0,d.getVectorContext)(t),c=r/e,l=25*(0,u.Vv)(c)+5,f=(0,u.Vv)(1-c),b=new h.ZP({image:new g.Z({radius:l,stroke:new m.Z({color:"rgba(255, 0, 0, "+f+")",width:.25+f})})});s.setStyle(b),s.drawGeometry(n),o.map.render()}}))},this.map=e.map,this.localObserver=e.localObserver,this.zoomToLocation=!0,this.source=new l.Z({wrapX:!1}),this.layer=new c.Z({source:this.source,layerType:"system",zIndex:5e3,name:"pluginLocation",caption:"Location layer"}),this.map.addLayer(this.layer),this.accuracyFeature=new r.Z,this.positionFeature=new r.Z,this.positionFeature.setStyle(new h.ZP({image:new g.Z({radius:6,fill:new f.Z({color:"#3399CC"}),stroke:new m.Z({color:"#fff",width:2})})})),this.geolocation=new a.Z({trackingOptions:{enableHighAccuracy:!0},projection:this.map.getView().getProjection()}),this.geolocation.on("change",this.handleGeolocationChange),this.geolocation.on("error",this.handleGeolocationError),this.geolocation.on("change:accuracyGeometry",this.handleGeolocationChangeAccuracy),this.geolocation.on("change:position",this.handleGeolocationChangePosition)}return(0,n.Z)(t,[{key:"enable",value:function(){this.toggleTracking(!0)}},{key:"disable",value:function(){this.toggleTracking(!1)}}]),t}();e.default=b},10294:function(t,e,o){o.r(e);var i=o(15671),n=o(43144),a=o(60136),r=o(29388),s=o(72791),c=o(98246),l=o(54871),u=o(72900),d=o(71770),p=o(21680),h=o(19773),g=o(24390),m=o(9827),f=o(60807),b=o(56650),v=o(91888),w=o(77959),y=o(80184),Z=function(t){(0,a.Z)(o,t);var e=(0,r.Z)(o);function o(){var t;(0,i.Z)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={loading:!1,track:!1,accuracy:void 0,altitude:void 0,altitudeAccuracy:void 0,heading:void 0,speed:void 0},t.locationDetails={accuracy:{id:0,label:"Precision (m)"},altitude:{id:1,label:"H\xf6jd (m. \xf6. h.)"},altitudeAccuracy:{id:2,label:"H\xf6jdprecision (m)"},heading:{id:3,label:"Riktning (rad)"},speed:{id:4,label:"Hastighet (m/s)"}},t.toggleTracking=function(e){var o=e.target.checked;o?t.model.enable():t.model.disable(),t.setState({track:o}),t.setState({loading:o})},t}return(0,n.Z)(o,[{key:"componentDidMount",value:function(){var t=this;this.map=this.props.map,this.model=this.props.model,this.model.localObserver.subscribe("geolocationChange",(function(e){var o=e.accuracy,i=e.altitude,n=e.altitudeAccuracy,a=e.heading,r=e.speed;t.setState({accuracy:o,altitude:i,altitudeAccuracy:n,heading:a,speed:r})})),this.model.localObserver.subscribe("locationStatus",(function(e){if("loading"===e)t.setState({loading:!0});else t.setState({loading:!1})})),this.model.localObserver.subscribe("geolocationError",(function(e){1===e.code?t.props.enqueueSnackbar(w.LOCATION_DENIED_SNACK_MESSAGE,w.LOCATION_DENIED_SNACK_OPTIONS):t.props.enqueueSnackbar("Kunde inte fastst\xe4lla din plats. Felkod: ".concat(e.code,'. Detaljer: "').concat(e.message,'".'),{variant:"error"})}))}},{key:"renderLocationDetails",value:function(){var t=this;return!1===this.state.track?null:(0,y.jsx)(b.Z,{children:(0,y.jsxs)(p.Z,{children:[(0,y.jsx)(m.Z,{children:(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(g.Z,{children:"Egenskap"}),(0,y.jsx)(g.Z,{align:"right",children:"V\xe4rde"})]})}),(0,y.jsx)(h.Z,{children:Object.keys(this.locationDetails).map((function(e){var o=t.locationDetails[e];return(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(g.Z,{component:"th",scope:"row",children:o.label}),(0,y.jsx)(g.Z,{align:"right",children:t.state[e]?t.state[e]:"\u2013"})]},o.id)}))})]})})}},{key:"render",value:function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.Z,{row:!0,children:(0,y.jsx)(u.Z,{control:(0,y.jsx)(d.Z,{checked:this.state.track,onChange:this.toggleTracking,value:"track"}),label:"Visa min position"})}),this.state.loading&&(0,y.jsx)(v.Z,{}),this.renderLocationDetails()]})}}]),o}(s.PureComponent);e.default=(0,c.RM)(Z)},77959:function(t,e,o){o.r(e),o.d(e,{LOCATION_DENIED_SNACK_MESSAGE:function(){return i},LOCATION_DENIED_SNACK_OPTIONS:function(){return n}});var i="Du beh\xf6ver till\xe5ta att applikationen visar din position. F\xf6r datorer: De flesta webbl\xe4sare har en l\xe5s-ikon i adressf\xe4ltet som du kan klicka p\xe5 f\xf6r att till\xe5ta Plats/Position.",n=Object.freeze({variant:"info",persist:!1,anchorOrigin:{vertical:"top",horizontal:"center"}})}}]);
//# sourceMappingURL=2197.6fad193d.chunk.js.map