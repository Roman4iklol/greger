"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[8551,8860],{28619:function(e,t,i){i.r(t);var r=i(15671),n=i(43144),o=i(60136),a=i(29388),s=i(4942),l=i(72791),c=i(76863),u=i(48928),p=i(73978),g=i(58487),h=i(16398),d=i(80184),m=(0,c.ZP)(u.Z)((function(e){var t=e.theme;return(0,s.Z)({marginBottom:t.spacing(1),width:"210px"},t.breakpoints.down("sm"),{boxShadow:"none",borderBottom:"1px solid #ccc",borderRadius:0,margin:0,width:"100%",justifyContent:"left"})})),v=(0,c.ZP)(p.Z)((function(e){return{background:e.theme.palette.text.primary}})),f=function(e){(0,o.Z)(i,e);var t=(0,a.Z)(i);function i(){var e;(0,r.Z)(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={open:!1,text:""},e}return(0,n.Z)(i,[{key:"render",value:function(){var e=this.props,t=e.abstract,i=e.icon,r=e.onClick,n=e.title;return(0,d.jsx)(m,{onClick:r,children:(0,d.jsx)(g.Z,{children:(0,d.jsx)(h.Z,{avatar:(0,d.jsx)(v,{children:i}),title:n,subheader:t})})})}}]),i}(l.PureComponent);f.defaultProps={abstract:"Beskrivning saknas",title:"Titel saknas"},t.default=f},73151:function(e,t,i){i.r(t);var r=i(15671),n=i(43144),o=i(97326),a=i(60136),s=i(29388),l=i(72791),c=i(85286),u=i(54164),p=i(66788),g=i(35110),h=i(65514),d=i(4346),m=i(26191),v=i(28619),f=i(74599),y=i(80184),w=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;(0,r.Z)(this,i),(n=t.call(this,e)).handleButtonClick=function(e){n.showWindow({hideOtherPluginWindows:!0,runCallback:!0}),n.props.app.globalObserver.publish("core.onlyHideDrawerIfNeeded")},n.showWindow=function(e){var t=e.hideOtherPluginWindows||!0,i=e.runCallback||!0;if(n.props.app.activeTool=n.type,n.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:n.type,activeMap:n.props.app.config.activeMap}),!0===n.state.windowVisible)return null;!0===t&&n.props.app.onWindowOpen((0,o.Z)(n)),n.setState({windowVisible:!0},(function(){!0===i&&"function"===typeof n.props.custom.onWindowShow&&n.props.custom.onWindowShow()}))},n.closeWindow=function(){n.type===n.props.app.activeTool&&(n.props.app.activeTool=void 0),n.setState({windowVisible:!1},(function(){"function"===typeof n.props.custom.onWindowHide&&n.props.custom.onWindowHide()}))},n.type=e.type.toLowerCase()||void 0,n.description=e.options.description||e.custom.description;var a=!1===n.props.app.config.mapConfig.map.clean&&(c.isMobile?e.options.visibleAtStartMobile:e.options.visibleAtStart)||!1;a&&n.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:n.type,activeMap:n.props.app.config.activeMap}),n.state={title:e.options.title||e.custom.title||"Unnamed plugin",color:e.options.color||e.custom.color||null,windowVisible:a},n.title=e.options.title||e.custom.title||"Unnamed plugin",n.width=e.options.width||e.custom.width||400,n.height=e.options.height||e.custom.height||"auto",n.position=e.options.position||e.custom.position||"left",e.app.registerWindowPlugin((0,o.Z)(n));var s="".concat(n.type,".showWindow");e.app.globalObserver.subscribe(s,(function(e){n.showWindow(e)}));var l="".concat(n.type,".closeWindow");return e.app.globalObserver.subscribe(l,(function(){n.closeWindow()})),n}return(0,n.Z)(i,[{key:"componentDidUpdate",value:function(e){e.custom.title!==this.props.custom.title&&this.setState({title:this.props.custom.title}),e.custom.color!==this.props.custom.color&&this.setState({color:this.props.custom.color})}},{key:"pluginIsWidget",value:function(e){return["left","right"].includes(e)}},{key:"renderWindow",value:function(e){var t=this.props.options.target;return"function"===typeof(null===e||void 0===e?void 0:e.render)?e.render():(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.default,{globalObserver:this.props.app.globalObserver,title:this.state.title,color:this.state.color,onClose:this.closeWindow,open:this.state.windowVisible,onResize:this.props.custom.onResize,onMaximize:this.props.custom.onMaximize,onMinimize:this.props.custom.onMinimize,draggingEnabled:this.props.custom.draggingEnabled,customPanelHeaderButtons:this.props.custom.customPanelHeaderButtons,resizingEnabled:this.props.custom.resizingEnabled,scrollable:this.props.custom.scrollable,allowMaximizedWindow:this.props.custom.allowMaximizedWindow,disablePadding:this.props.custom.disablePadding,width:this.width,height:this.height,position:this.position,mode:"window",layerswitcherConfig:this.props.app.config.mapConfig.tools.find((function(e){return"layerswitcher"===e.type})),children:l.cloneElement(this.props.children,{windowVisible:this.state.windowVisible})}),("toolbar"===t||this.pluginIsWidget(t))&&this.renderDrawerButton(),this.pluginIsWidget(t)&&this.renderWidgetButton("".concat(t,"-column")),"control"===t&&this.renderControlButton()]})}},{key:"renderDrawerButton",value:function(){return(0,u.createPortal)((0,y.jsx)(p.Z,{mdUp:this.pluginIsWidget(this.props.options.target),children:(0,y.jsxs)(g.ZP,{button:!0,divider:!0,selected:this.state.windowVisible,onClick:this.handleButtonClick,children:[(0,y.jsx)(h.Z,{children:this.props.custom.icon}),(0,y.jsx)(d.Z,{primary:this.title})]})}),document.getElementById("plugin-buttons"))}},{key:"renderWidgetButton",value:function(e){return(0,u.createPortal)((0,y.jsx)(p.Z,{mdDown:!0,children:(0,y.jsx)(v.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description})}),document.getElementById(e))}},{key:"renderControlButton",value:function(){return(0,u.createPortal)((0,y.jsx)(f.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description}),document.getElementById("plugin-control-buttons"))}},{key:"render",value:function(){return!0!==this.props.app.config.mapConfig.map.clean&&this.renderWindow(this.props.custom)}}]),i}(l.PureComponent);t.default=w},48551:function(e,t,i){i.r(t);var r=i(1413),n=i(15671),o=i(43144),a=i(60136),s=i(29388),l=i(72791),c=i(73151),u=i(88014),p=i(71008),g=i(28860),h=i(85194),d=i.n(h),m=i(80184),v=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).onWindowShow=function(){r.localObserver.publish("showPreviewLayer")},r.onWindowHide=function(){r.localObserver.publish("hidePreviewLayer")},r.localObserver=d()(),r.exportModel=new g.default({map:e.map,app:e.app,localObserver:r.localObserver,options:e.options}),r}return(0,o.Z)(i,[{key:"render",value:function(){return(0,m.jsx)(c.default,(0,r.Z)((0,r.Z)({},this.props),{},{type:"Export",custom:{icon:(0,m.jsx)(u.Z,{}),title:"Exportera",description:"Exportera kartan till andra format",height:"dynamic",width:315,onWindowShow:this.onWindowShow,onWindowHide:this.onWindowHide},children:(0,m.jsx)(p.default,{model:this.exportModel,localObserver:this.localObserver})}))}}]),i}(l.PureComponent);t.default=v},28860:function(e,t,i){i.r(t);var r=i(15671),n=i(43144),o=i(34951),a=i(5426),s=i(64665),l=i(66233),c=i(90927),u=i(18029),p=i(5400),g=i(37130),h=i(56957),d=i(62652),m=i(57707),v=i(70328),f=i(2421),y=i(92245),w=i(24673),x=i(15678),S=i(81019),b=i(68789),k=i(25806),P=function(e){return/^#/.test(e)?e:"#"+e.match(/\d+(\.\d+)?/g).splice(0,3).map((function(e){var t=parseInt(e,10).toString(16);return parseInt(e)<16&&(t="0"+t),t})).join("")},Z=function(){function e(t){(0,r.Z)(this,e),this.map=t.map,this.app=t.app,this.localObserver=t.localObserver,this.exportUrl=t.options.exportUrl,this.scales=this.validateScales(t.options.scales),this.copyright="\xa9 Lantm\xe4teriverket i2009/00858",this.autoScale=!1,this.instruction="",this.addPreviewLayer()}return(0,n.Z)(e,[{key:"validateScales",value:function(e){return"string"==typeof e&&/(\d+)(,\s*\d+)*/.test(e)?e.split(",").map((function(e){return Number(e)})):[250,500,1e3,2500,5e3,1e4,25e3,5e4,1e5,25e4]}},{key:"addPreviewLayer",value:function(){this.previewLayer=new o.Z({source:new a.Z,layerType:"system",zIndex:5e3,name:"pluginExport",caption:"Export plugin",style:new s.ZP({stroke:new l.Z({color:"rgba(0, 0, 0, 0.7)",width:2}),fill:new c.Z({color:"rgba(255, 145, 20, 0.4)"})})}),this.map.addLayer(this.previewLayer)}},{key:"removePreview",value:function(){this.previewFeature=void 0,this.previewLayer.getSource().clear(),this.map.removeInteraction(this.translate)}},{key:"getPreviewFeature",value:function(){return this.previewFeature}},{key:"getPreviewCenter",value:function(){var e=this.getPreviewFeature().getGeometry().getExtent();return(0,g.getCenter)(e)}},{key:"addPreview",value:function(e,t,i){var r=25.4/.28,n=t.width/r/39.37*e/2*1,o=t.height/r/39.37*e/2*1,a=[[[i[0]-n,i[1]-o],[i[0]-n,i[1]+o],[i[0]+n,i[1]+o],[i[0]+n,i[1]-o],[i[0]-n,i[1]-o]]],s=new d.Z({geometry:new h.ZP(a)});this.removePreview(),this.previewFeature=s,this.previewLayer.getSource().addFeature(s),this.translate=new w.Z({features:new b.Z([s])}),this.map.addInteraction(this.translate)}},{key:"findWMS",value:function(){var e=this;return this.map.getLayers().getArray().filter((function(e){return(e instanceof m.Z||e instanceof v.Z)&&(e.getSource()instanceof f.Z||e.getSource()instanceof y.Z)&&e.getVisible()})).map((function(t,i){var r="string"===typeof t.getSource().getParams().LAYERS?t.getSource().getParams().LAYERS.split(","):t.getSource().getParams().LAYERS;return{url:t.getSource().get("url"),layers:r,zIndex:i,workspacePrefix:null,coordinateSystemId:e.map.getView().getProjection().getCode().split(":")[1]}}))}},{key:"findVector",value:function(){function e(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function t(t){var i=/rgb(a)?\((\d+), (\d+), (\d+)(, [\d.]+)?\)/.exec(t);if(null!==i){var r=parseInt(i[2]),n=parseInt(i[3]),o=parseInt(i[4]);return parseInt(i[5])?null:"#"+e(r)+e(n)+e(o)}return null}function i(e){function i(e){var i=e.join(", ");return t("rgba(".concat(i,")"))}if(!e)return null;Array.isArray(e)&&(2===e.length&&(e=e[1]),1===e.length&&(e=e[0]));var r,n="#FC345C",o=.5,a="#FC345C",s=3,l="round",c="solid",g=10,h="#FC345C",d="",m="16",v="#FFFFFF",f="#000000";return e.getText&&e.getText()&&e.getText().getFont&&e.getText().getFont()&&(m=e.getText().getFont().match(/\d+/)[0]),e.getText&&e.getText()&&e.getText().getFill&&e.getText().getFill()&&("string"===typeof e.getText().getFill().getColor()?v=e.getText().getFill().getColor():Array.isArray(e.getText().getFill().getColor())&&(v=i(e.getText().getFill().getColor()))),e.getText&&e.getText()&&e.getText().getStroke&&e.getText().getStroke()&&("string"===typeof e.getText().getFill().getColor()?f=e.getText().getStroke().getColor():Array.isArray(e.getText().getStroke().getColor())&&(f=i(e.getText().getStroke().getColor()))),v&&/^rgb/.test(v)&&(v=t(v)),f&&(f=/^rgb\(/.test(f)?t(f):null),e.getFill&&e.getFill()&&e.getFill().getColor()&&(P(e.getFill().getColor())?(n=P(e.getFill().getColor()),r=e.getFill().getColor(),o=parseFloat(r.match(/\d+(\.\d+)?/g).splice(3,1)[0])):Array.isArray(e.getFill().getColor())&&(n=i(e.getFill().getColor()),o=e.getFill().getColor()[e.getFill().getColor().length-1])),e.getFill&&e.getStroke()&&(P(e.getStroke().getColor())?a=P(e.getStroke().getColor()):Array.isArray(e.getStroke().getColor())&&(a=i(e.getStroke().getColor())),s=e.getStroke().getWidth()||3,l=e.getStroke().getLineCap()||"round",c=e.getStroke().getLineDash()?12===e.getStroke().getLineDash()[0]?"dash":"dot":"solid"),e.getImage&&e.getImage()&&(e.getImage()instanceof u.Z&&(d=e.getImage().getSrc()),e.getImage()instanceof p.Z&&(g=e.getImage().getRadius(),h=P(e.getImage().getFill().getColor()))),{fillColor:n,fillOpacity:o,strokeColor:a,strokeOpacity:1,strokeWidth:s,strokeLinecap:l,strokeDashstyle:c,pointRadius:g,pointFillColor:h,pointSrc:d,labelAlign:"cm",labelOutlineColor:"white",labelOutlineWidth:3,fontSize:m,fontColor:v,fontBackColor:f}}function r(e,t){switch(t){case"Point":return[e];case"LineString":return e;case"Polygon":return e[0];case"MultiPolygon":return e[0][0];case"Circle":return[e[0],e[1]]}}var n=this.previewLayer.getSource().getFeatures()[0].getGeometry().getExtent();return this.map.getLayers().getArray().filter((function(e){return e instanceof o.Z&&e.getVisible()&&"pluginExport"!==e.get("name")})).map((function(e){return function(e,t){function n(e){var t="";return e.getProperties()&&"Text"===e.getProperties().type?t=e.getProperties().description?e.getProperties().description:e.getProperties().name?e.getProperties().name:"":(e.getStyle&&Array.isArray(e.getStyle())&&e.getStyle()[1]&&e.getStyle()[1].getText()&&e.getStyle()[1].getText().getText()&&(t=e.getStyle()[1].getText().getText()),e.getStyle&&e.getStyle()&&e.getStyle().getText&&e.getStyle().getText()&&(t=e.getStyle().getText().getText()),t)}return{features:e.map((function(e){var o,a=e.getGeometry().getType(),s=e.getGeometry(),l=null;if(!e.getStyle()&&t){var c=t.getStyle()(e)[0];e.setStyle(c)}return o="Circle"===a?r([s.getCenter(),[s.getRadius(),0]],"Circle"):r(s.getCoordinates(),a),"MultiPolygon"===a&&(l=s.getCoordinates()[0].slice(1,s.getCoordinates()[0].length)),{type:a,attributes:{text:n(e),style:i(e.getStyle())},coordinates:o,holes:l}}))}}(e.getSource().getFeaturesInExtent(n),e)})).filter((function(e){return e.features.length>0}))}},{key:"findWMTS",value:function(){return this.map.getLayers().getArray().filter((function(e){return e.getSource()instanceof x.Z&&e.getVisible()})).map((function(e){var t=e.getSource();return{url:Array.isArray(t.getUrls())?t.getUrls()[0]:t.get("url"),axisMode:"natural"}}))}},{key:"findArcGIS",value:function(){return this.map.getLayers().getArray().filter((function(e){return e.getSource()instanceof S.Z&&e.getVisible()})).map((function(e){var t=e.getSource().get("url"),i=e.get("extent")||[],r=[],n=e.get("projection");return"string"===typeof e.getSource().getParams("params").LAYERS&&(r=e.getSource().getParams("params").LAYERS.replace("show:","").split(",")),"string"===typeof n&&(n=n.replace("EPSG:","")),{url:t,layers:r,spatialReference:n,extent:{left:i[0],bottom:i[1],right:i[2],top:i[3]}}}))}},{key:"exportPDF",value:function(e,t){var i=this.previewLayer.getSource().getFeatures()[0].getGeometry().getExtent(),r=i[0],n=i[2],o=i[1],a=i[3],s=this.exportUrl,l={wmsLayers:[],vectorLayers:[],size:null,resolution:e.resolution,bbox:null};l.vectorLayers=this.findVector()||[],l.wmsLayers=this.findWMS()||[],l.wmtsLayers=this.findWMTS()||[],l.arcgisLayers=this.findArcGIS()||[],l.size=[parseInt(e.size.width*e.resolution),parseInt(e.size.height*e.resolution)],l.bbox=[r,n,o,a],l.orientation=e.orientation,l.format=e.format,l.scale=e.scale,(0,k.hfetch)(s,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:JSON.stringify(l)})}).then((function(e){e.text().then((function(e){t&&t(e)}))})).catch((function(e){alert("Det gick inte att exportera kartan. "+e),console.error(e)}))}},{key:"resolutionToScale",value:function(e,t){return t*e*39.37}},{key:"getMap",value:function(){return this.map}}]),e}();t.default=Z},71008:function(e,t,i){i.r(t);var r=i(15671),n=i(43144),o=i(60136),a=i(29388),s=i(72791),l=i(76863),c=i(98246),u=i(81898),p=i(56650),g=i(43595),h=i(61091),d=i(45953),m=i(91888),v=i(40508),f=i(63818),y=i(3395),w=i(11814),x=i(37130),S=i(80184),b=(0,l.ZP)(u.Z)((function(e){return{marginBottom:e.theme.spacing(2)}})),k=(0,l.ZP)(p.Z)((function(e){return{opacity:1,transition:"opacity 2s ease-in",marginBottom:e.theme.spacing(2)}})),P=function(e){(0,o.Z)(i,e);var t=(0,a.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).setFormat=function(e){n.setState({selectFormat:e.target.value})},n.setResolution=function(e){n.setState({selectResolution:e.target.value})},n.setScale=function(e){n.setState({selectScale:e.target.value})},n.setCenter=function(e){n.setState({center:e})},n.setManualScale=function(e){var t=e.target.value.startsWith("1:")?e.target.value.split(":")[1]:e.target.value;n.setState({manualScale:t})},n.setOrientation=function(e){n.setState({selectOrientation:e.target.value})},n.exportPDF=function(e){n.setState({url:!1,loading:!0});var t={size:n.getPaperMeasures(),format:n.getFormat(),orientation:n.getOrientation(),scale:n.getScale(),resolution:n.getResolution()};n.props.model.exportPDF(t,(function(e){var t={loading:!1};".pdf"===e.trimEnd().substr(-4)?t.url=e:n.props.enqueueSnackbar("Utskriften kunde inte skapas. Prova med l\xe4gre uppl\xf6sning, mindre omr\xe5de eller f\xe4rre lager i kartan.",{variant:"error"}),n.setState(t)}))},n.resolutions=[72,96,150,200,300],n.paperFormats=["A2","A3","A4"],n.state={selectFormat:"A4",selectOrientation:"S",selectScale:e.model.scales[Math.floor(e.model.scales.length/2)],manualScale:"10000",selectResolution:"72",center:e.model.getPreviewFeature()?e.model.getPreviewCenter():e.model.map.getView().getCenter(),loading:!1,previewLayerVisible:!1},e.localObserver.subscribe("showPreviewLayer",(function(){n.setState({previewLayerVisible:!0}),n.addPreview(e.model.map)})),e.localObserver.subscribe("hidePreviewLayer",(function(){n.setState({previewLayerVisible:!1}),n.removePreview()})),n}return(0,n.Z)(i,[{key:"getPaperMeasures",value:function(){var e=this,t=function(t){switch(t){case"A4":return{width:"L"===e.getOrientation()?297:210,height:"L"===e.getOrientation()?210:297};case"A3":return{width:"L"===e.getOrientation()?420:297,height:"L"===e.getOrientation()?297:420};case"A2":return{width:"L"===e.getOrientation()?594:420,height:"L"===e.getOrientation()?420:594};default:return{width:0,height:0}}};return{width:t(this.getFormat()).width/25.4,height:t(this.getFormat()).height/25.4}}},{key:"getPreviewPaperMeasures",value:function(){var e=this.getPaperMeasures(),t=25.4/.28;return{width:e.width*t,height:e.height*t}}},{key:"getScale",value:function(){return"other"===this.state.selectScale?Number.isNaN(Number(this.state.manualScale))?0:this.state.manualScale:this.state.selectScale}},{key:"getResolution",value:function(){return this.state.selectResolution}},{key:"getOrientation",value:function(){return this.state.selectOrientation}},{key:"getFormat",value:function(){return this.state.selectFormat}},{key:"removePreview",value:function(){this.props.model.removePreview()}},{key:"addPreview",value:function(e){var t=this.getScale(),i=this.getPreviewPaperMeasures(),r=this.props.model.getPreviewFeature()?(0,x.getCenter)(this.props.model.getPreviewFeature().getGeometry().getExtent()):e.getView().getCenter();this.props.model.addPreview(t,i,r);var n=void 0;switch(t){case"250":case"500":n=6;break;case"1000":n=5;break;case"2500":n=4;break;case"5000":n=3;break;case"10000":n=2;break;case"25000":case"50000":n=1;break;case"100000":case"250000":n=0;break;default:n=e.getView().getZoom()}this.props.model.autoScale&&n<e.getView().getZoom()&&e.getView().setZoom(n)}},{key:"render",value:function(){var e=this,t=this.props.model.scales.map((function(e,t){return(0,S.jsxs)("option",{value:e,children:["1:",e]},t)})),i=this.resolutions.map((function(t,i){return"A2"===e.state.selectFormat?300!==t?(0,S.jsx)("option",{value:t,children:t},i):(0,S.jsx)("option",{value:t,disabled:!0,children:t},i):(0,S.jsx)("option",{value:t,children:t},i)})),r=this.paperFormats.map((function(t,i){return"300"===e.state.selectResolution?"A2"!==t?(0,S.jsx)("option",{value:t,children:t},i):(0,S.jsx)("option",{value:t,disabled:!0,children:t},i):(0,S.jsx)("option",{value:t,children:t},i)}));return!0===this.state.previewLayerVisible?this.addPreview(this.props.model.map):this.removePreview(),(0,S.jsxs)(d.ZP,{container:!0,children:[this.state.loading&&(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsx)(k,{children:(0,S.jsx)(m.Z,{})})}),(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsxs)(b,{fullWidth:!0,children:[(0,S.jsx)(v.Z,{variant:"standard",htmlFor:"paper-size-native-helper",children:"Pappersstorlek"}),(0,S.jsx)(f.Z,{onChange:this.setFormat,value:this.state.selectFormat,input:(0,S.jsx)(g.Z,{name:"format",id:"paper-size-native-helper"}),children:r})]})}),(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsxs)(b,{fullWidth:!0,children:[(0,S.jsx)(v.Z,{variant:"standard",htmlFor:"orientation-native-helper",children:"Orientering"}),(0,S.jsxs)(f.Z,{onChange:this.setOrientation,value:this.state.selectOrientation,input:(0,S.jsx)(g.Z,{name:"orientation",id:"orientation-native-helper"}),children:[(0,S.jsx)("option",{value:"P",children:"st\xe5ende"}),(0,S.jsx)("option",{value:"L",children:"liggande"})]})]})}),(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsxs)(b,{fullWidth:!0,children:[(0,S.jsx)(v.Z,{variant:"standard",htmlFor:"scale-native-helper",children:"Skala"}),(0,S.jsxs)(f.Z,{onChange:this.setScale,value:this.state.selectScale,input:(0,S.jsx)(g.Z,{name:"scale",id:"scale-native-helper"}),children:[t,(0,S.jsx)("option",{value:"other",children:"Annan skala"},"other")]})]})}),"other"===this.state.selectScale&&(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsx)(b,{fullWidth:!0,children:(0,S.jsx)(g.Z,{type:"text",onChange:this.setManualScale,value:this.state.manualScale})})}),(0,S.jsx)(d.ZP,{item:!0,xs:12,children:(0,S.jsxs)(b,{fullWidth:!0,children:[(0,S.jsx)(v.Z,{variant:"standard",htmlFor:"resolution-native-helper",children:"Uppl\xf6sning"}),(0,S.jsx)(f.Z,{value:this.state.selectResolution,onChange:this.setResolution,input:(0,S.jsx)(g.Z,{name:"resolution",id:"resolution-native-helper"}),children:i})]})}),(0,S.jsx)(b,{fullWidth:!0,children:(0,S.jsxs)(h.Z,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.exportPDF,children:[(0,S.jsx)(w.Z,{sx:{marginRight:1}})," Skapa PDF"]})}),this.state.url&&(0,S.jsx)(b,{fullWidth:!0,children:(0,S.jsxs)(h.Z,{variant:"contained",fullWidth:!0,target:"_blank",href:this.state.url,children:[(0,S.jsx)(y.Z,{sx:{marginRight:1}})," Ladda ner"]})})]})}}]),i}(s.PureComponent);t.default=(0,c.RM)(P)}}]);
//# sourceMappingURL=8551.5ee7cba3.chunk.js.map