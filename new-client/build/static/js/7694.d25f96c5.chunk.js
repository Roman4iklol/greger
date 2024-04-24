"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[7694,9921,9909],{74390:function(e,t,n){n.r(t);var i=n(93433),r=n(1413),o=n(15861),a=n(15671),s=n(43144),l=n(97326),c=n(60136),u=n(29388),d=n(66274),h=n(99359),p=n(64687),f=n.n(p),v=n(72791),g=n(98246),m=n(76863),b=n(4565),x=n(75814),y=n(61091),Z=n(45953),k=n(91964),j=n(42618),z=n(25878),S=n(19924),w=n(77907),L=n(32791),C=n(16378),M=n(98937),T=n(2094),I=n(29823),V=n(16788),E=n(43214),P=n(61611),O=n(4976),F=n(80184),B=(0,m.ZP)("div")((function(e){var t=e.theme;return{paddingLeft:"0",borderBottom:"".concat(t.spacing(.2)," solid ").concat(t.palette.divider)}})),A=(0,m.ZP)("div")((function(e){e.theme;return{display:"flex",justifyContent:"space-between",marginTop:"0"}})),H=(0,m.ZP)("div")((function(){return{display:"flex",alignItems:"center",cursor:"pointer",float:"left",marginRight:"5px"}})),R=(0,m.ZP)("div")((function(e){e.theme;return{margin:"10px 45px"}})),U=(0,m.ZP)(b.Z)((function(e){return{cursor:"pointer",fontSize:e.theme.typography.pxToRem(15)}})),D=(0,m.ZP)("img")((function(e){var t=e.theme;return{width:t.typography.pxToRem(18),height:t.typography.pxToRem(18),marginRight:"5px"}})),N=(0,m.ZP)("div")((function(){return{display:"flex",alignItems:"center"}})),W=(0,m.ZP)("div")((function(){return{display:"flex",alignItems:"center",width:35,height:35,cursor:"pointer"}})),q=(0,m.ZP)("ul")((function(){return{padding:0,margin:0,listStyle:"none"}})),_=(0,h.Z)("showAttributeTable"),K=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var i;(0,a.Z)(this,n),(i=t.call(this,e)).zoomEndHandler=function(e){var t=i.props.model.olMap.getView().getZoom(),n=i.props.layer.getProperties(),r=t>n.minZoom&&t<=n.maxZoom,o=!1;return!0===i.minMaxZoomAlertOnToggleOnly?i.state.visible||r||"click"!==(null===e||void 0===e?void 0:e.type)||(o=!0):r||!i.state.zoomVisible&&i.state.visible||(o=!0),!0===o&&i.showZoomSnack(),i.setState({zoomVisible:r}),r},i.toggleVisible=function(e){var t=i.props.layer;if(i.isBackgroundLayer){if(document.getElementById("map").style.backgroundColor="#FFF",t.isFakeMapLayer)if("-2"===i.name)document.getElementById("map").style.backgroundColor="#000";else document.getElementById("map").style.backgroundColor="#FFF";else t.setVisible(!0);i.setState({visible:!0}),t.localObserver.publish("backgroundLayerChanged",i.name)}else{var n=!i.state.visible;i.setState({visible:n}),i.props.layer.setVisible(n),i.triggerZoomCheck(e,n)}},i.renderInfoButton=function(){return i.isInfoEmpty()?null:(0,F.jsx)(x.Z,{title:"Mer information om lagret",children:(0,F.jsx)(W,{children:i.state.infoVisible?(0,F.jsx)(S.Z,{onClick:i.toggleInfo}):(0,F.jsx)(z.Z,{onClick:i.toggleInfo,sx:{boxShadow:i.state.infoVisible?"rgb(204, 204, 204) 2px 3px 1px":"inherit",borderRadius:"100%"}})})})},i.renderMoreButton=function(){return(0,F.jsx)(x.Z,{title:"Fler inst\xe4llningar",children:(0,F.jsx)(W,{children:i.state.toggleSettings?(0,F.jsx)(I.Z,{onClick:i.toggleSettings}):(0,F.jsx)(T.Z,{onClick:i.toggleSettings})})})},i.openInformative=function(e){return function(t){i.props.onOpenChapter(e)}},i.toggleSettings=function(){i.setState({toggleSettings:!i.state.toggleSettings})},i.toggleInfo=function(){i.setState({infoVisible:!i.state.infoVisible})},i.getLayerToggler=function(){var e=i.state.visible?i.isBackgroundLayer?(0,F.jsx)(L.Z,{}):(0,F.jsx)(w.Z,{sx:{fill:function(e){return!i.state.zoomVisible&&i.state.visible?e.palette.warning.dark:""}}}):i.isBackgroundLayer?(0,F.jsx)(C.Z,{}):(0,F.jsx)(M.Z,{});return(0,F.jsx)(H,{children:e})},Object.defineProperty((0,l.Z)(i),_,{writable:!0,value:function(){var e=(0,o.Z)(f().mark((function e(){var t,n,o,a,s,c,u,d,h,p,v,g;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=i.props.layer.getSource().get("url").replace("wms","wfs"),n=i.props.layer.getSource().getParams(),o=n.LAYERS,a=t.includes("?")?"&":"?",s="".concat(t).concat(a,"service=WFS&version=1.0.0&request=GetFeature&typeName=").concat(o,"&maxFeatures=5000&outputFormat=application%2Fjson"),c="".concat(t).concat(a,"service=WFS&version=1.0.0&request=DescribeFeatureType&typeName=").concat(o,"&outputFormat=application%2Fjson"),e.next=8,fetch(s);case 8:return u=e.sent,e.next=11,u.json();case 11:return d=e.sent,e.next=14,fetch(c);case 14:return h=e.sent,e.next=17,h.json();case 17:p=e.sent,v=p.featureTypes.find((function(e){return e.typeName===o})).properties.filter((function(e){return!e.type.toLowerCase().includes("gml")})).map((function(e){return{field:e.name,headerName:e.name,type:"int"===e.localType?"number":e.localType,flex:1}})),g=d.features.map((function(e,t){return(0,r.Z)((0,r.Z)({},e.properties),{},{id:t})})),i.props.app.globalObserver.publish("core.showAttributeTable",{title:"".concat(i.caption," (").concat(o,")"),content:{columns:v,rows:g}}),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(0),console.error(e.t0),console.log((0,l.Z)(i)),i.props.enqueueSnackbar('Serverfel: attributtabellen f\xf6r lagret "'.concat(i.caption,'" kunde inte visas'),{variant:"error"});case 28:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}()});var s=e.layer,c=s.get("layerInfo");return i.isBackgroundLayer="base"===c.layerType,i.caption=c.caption,i.name=s.get("name"),i.legend=c.legend,i.legendIcon=c.legendIcon,i.infoTitle=c.infoTitle,i.infoText=c.infoText,i.infoUrl=c.infoUrl,i.infoUrlText=c.infoUrlText,i.infoOwner=c.infoOwner,i.localObserver=s.localObserver,i.showAttributeTableButton=c.showAttributeTableButton||!1,i.usesMinMaxZoom=i.layerUsesMinMaxZoom(),i.minMaxZoomAlertOnToggleOnly=s.get("minMaxZoomAlertOnToggleOnly"),i.state={visible:s.get("visible"),status:"ok",zoomVisible:!0,open:!1,toggleSettings:!1,infoVisible:!1},i.isBackgroundLayer&&s.localObserver.subscribe("backgroundLayerChanged",(function(e){e!==i.name&&(s.isFakeMapLayer||s.setVisible(!1),i.setState({visible:!1}))})),i}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e,t,n=this;null===(e=(t=this.props.layer).on)||void 0===e||e.call(t,"change:visible",(function(e){var t=!e.oldValue;n.setState({visible:t}),n.listenToZoomChange(t)})),this.state.visible&&this.triggerZoomCheck(null,this.state.visible),this.listenToZoomChange(this.state.visible),this.props.app.globalObserver.subscribe("layerswitcher.wmsLayerLoadStatus",(function(e){"loaderror"!==n.state.status&&n.name===e.id&&n.setState({status:e.status})}))}},{key:"layerUsesMinMaxZoom",value:function(){var e,t,n=this.props.layer.getProperties(),i=null!==(e=n.maxZoom)&&void 0!==e?e:0,r=null!==(t=n.minZoom)&&void 0!==t?t:0;return i>0&&i<1/0||r>0&&r<1/0}},{key:"listenToZoomChange",value:function(e){if(this.usesMinMaxZoom){var t="core.zoomEnd";e&&!this.zoomEndListener?this.zoomEndListener=this.props.app.globalObserver.subscribe(t,this.zoomEndHandler):this.zoomEndListener&&(this.props.app.globalObserver.unsubscribe(t,this.zoomEndListener),this.zoomEndListener=null)}}},{key:"showZoomSnack",value:function(){var e=this;this.zoomWarningSnack||(this.zoomWarningSnack=this.props.enqueueSnackbar('Lagret "'.concat(this.caption,'" visas endast vid specifika skalor.'),{variant:"warning",preventDuplicate:!0,onClose:function(){e.zoomWarningSnack=null}}))}},{key:"triggerZoomCheck",value:function(e,t){if(this.usesMinMaxZoom&&(this.zoomEndHandler(e),!1===t)){if(!this.zoomWarningSnack)return;this.props.closeSnackbar(this.zoomWarningSnack),this.zoomWarningSnack=null}}},{key:"renderStatusButton",value:function(){return"loaderror"===this.state.status&&(0,F.jsx)(x.Z,{disableInteractive:!0,title:"Lagret kunde inte laddas in. Kartservern svarar inte.",children:(0,F.jsx)(W,{children:(0,F.jsx)(k.Z,{})})})}},{key:"renderLegendImage",value:function(){var e=this.legend&&this.legend[0]&&this.legend[0].url?this.legend[0].url:"";return e?(0,F.jsx)("img",{width:"30",alt:"legend",src:e}):null}},{key:"isInfoEmpty",value:function(){var e=this.findChapters(this.name,this.props.chapters);return!(this.infoCaption||this.infoUrl||this.infoOwner||this.infoText||e.length>0)}},{key:"findChapters",value:function(e,t){var n=this,r=[];return Array.isArray(t)&&(r=t.reduce((function(t,r){return Array.isArray(r.layers)&&(r.layers.some((function(t){return t===e}))&&(t=[].concat((0,i.Z)(t),[r])),r.chapters.length>0&&(t=[].concat((0,i.Z)(t),(0,i.Z)(n.findChapters(e,r.chapters))))),t}),[])),r}},{key:"renderChapterLinks",value:function(e){var t=this;if(e&&e.length>0){var n=this.findChapters(this.name,e);return n.length>0?(0,F.jsxs)(R,{children:[(0,F.jsx)(b.Z,{children:"Inneh\xe5ll fr\xe5n denna kategori finns ben\xe4mnt i f\xf6ljande kapitel i \xf6versiktsplanen:"}),(0,F.jsx)(q,{children:n.map((function(e,n){return(0,F.jsx)("li",{children:(0,F.jsxs)(y.Z,{size:"small",onClick:t.openInformative(e),children:[e.header,(0,F.jsx)(j.Z,{sx:{marginLeft:1,fontSize:"16px"}})]})},n)}))})]}):null}return null}},{key:"toggle",value:function(){this.setState({open:!this.state.open})}},{key:"renderInfo",value:function(){return this.infoText?(0,F.jsxs)(R,{children:[(0,F.jsx)(b.Z,{variant:"subtitle2",children:this.infoTitle}),(0,F.jsx)(b.Z,{variant:"body2",dangerouslySetInnerHTML:{__html:this.infoText}})]}):null}},{key:"renderMetadataLink",value:function(){return this.infoUrl?(0,F.jsx)(R,{children:(0,F.jsx)("a",{href:this.infoUrl,target:"_blank",rel:"noopener noreferrer",children:this.infoUrlText||this.infoUrl})}):null}},{key:"renderOwner",value:function(){return this.infoOwner?(0,F.jsx)(R,{children:(0,F.jsx)(b.Z,{variant:"body2",dangerouslySetInnerHTML:{__html:this.infoOwner}})}):null}},{key:"renderDetails",value:function(){if(this.state.infoVisible)return(0,F.jsxs)("div",{children:[this.renderInfo(),this.renderMetadataLink(),this.renderOwner(),(0,F.jsx)("div",{children:this.renderChapterLinks(this.props.chapters||[])})]})}},{key:"renderLegendIcon",value:function(){return(0,F.jsx)(D,{alt:"Teckenf\xf6rklaring",src:this.legendIcon})}},{key:"render",value:function(){var e,t=this.props,n=t.layer,i=t.model,r=t.app,o=t.chapters,a=(null===(e=this.props.app.config.mapConfig.map)||void 0===e?void 0:e.cqlFilterVisible)||!1;return this.caption?"group"===n.get("layerType")?(0,F.jsx)(E.default,{appConfig:r.config.appConfig,mapConfig:r.config.mapConfig,layer:n,model:i,options:this.props.options,chapters:o,cqlFilterVisible:a,onOpenChapter:function(e){r.windows.find((function(e){return"informative"===e.type})).props.custom.open(e)}}):(0,F.jsxs)(B,{sx:{marginLeft:this.isBackgroundLayer?"0px":"45px"},children:[(0,F.jsxs)(A,{children:[(0,F.jsxs)(Z.ZP,{wrap:"nowrap",alignItems:"center",alignContent:"center",container:!0,onClick:this.toggleVisible.bind(this),children:[(0,F.jsx)(Z.ZP,{item:!0,children:this.getLayerToggler()}),this.legendIcon&&this.renderLegendIcon(),(0,F.jsx)(U,{children:this.caption})]}),(0,F.jsxs)(N,{children:[n.isFakeMapLayer?null:(0,F.jsx)(O.default,{layer:this.props.layer,enableDownloadLink:this.props.app.config.mapConfig.map.enableDownloadLink}),this.renderStatusButton(),this.renderInfoButton(),this.showAttributeTableButton&&(0,F.jsx)(x.Z,{title:"Visa lagrets attributtabell",children:(0,F.jsx)(W,{children:(0,F.jsx)(V.Z,{onClick:(0,d.Z)(this,_)[_]})})}),this.renderMoreButton()]})]}),(0,F.jsxs)("div",{children:[this.renderDetails(),this.state.toggleSettings&&this.state.infoVisible&&!this.isInfoEmpty()?(0,F.jsx)("hr",{}):null,n.isFakeMapLayer?null:(0,F.jsx)(P.default,{options:this.props.options,layer:n,toggled:this.state.toggleSettings,showOpacity:!0,showLegend:!0,cqlFilterVisible:a})]})]}):null}}]),n}(v.PureComponent);t.default=(0,g.RM)(K)},42618:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"}),"CallMade");t.Z=a},77907:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");t.Z=a},98937:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");t.Z=a},22007:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload");t.Z=a},85172:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.Z=a},5397:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.Z=a},2094:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.Z=a},32791:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonChecked");t.Z=a},43950:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.Z=a},19924:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle");t.Z=a},16788:function(e,t,n){var i=n(64836);t.Z=void 0;var r=i(n(45649)),o=n(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M19 7H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 2v2H9V9h10zm-6 6v-2h2v2h-2zm2 2v2h-2v-2h2zm-4-2H9v-2h2v2zm6-2h2v2h-2v-2zm-8 4h2v2H9v-2zm8 2v-2h2v2h-2zM6 17H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h-2V5H5v10h1v2z"}),"TableView");t.Z=a},38254:function(e,t,n){n.d(t,{Z:function(){return k}});var i=n(4942),r=n(63366),o=n(87462),a=n(72791),s=n(28182),l=n(94419),c=n(49853),u=n(4565),d=n(51211),h=n(90529),p=n(76863),f=n(21217);function v(e){return(0,f.Z)("MuiInputAdornment",e)}var g,m=(0,n(75878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=n(67254),x=n(80184),y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Z=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,c.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&(0,i.Z)({},"&.".concat(m.positionStart,"&:not(.").concat(m.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),k=a.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiInputAdornment"}),i=n.children,p=n.className,f=n.component,m=void 0===f?"div":f,k=n.disablePointerEvents,j=void 0!==k&&k,z=n.disableTypography,S=void 0!==z&&z,w=n.position,L=n.variant,C=(0,r.Z)(n,y),M=(0,h.Z)()||{},T=L;L&&M.variant,M&&!T&&(T=M.variant);var I=(0,o.Z)({},n,{hiddenLabel:M.hiddenLabel,size:M.size,disablePointerEvents:j,position:w,variant:T}),V=function(e){var t=e.classes,n=e.disablePointerEvents,i=e.hiddenLabel,r=e.position,o=e.size,a=e.variant,s={root:["root",n&&"disablePointerEvents",r&&"position".concat((0,c.Z)(r)),a,i&&"hiddenLabel",o&&"size".concat((0,c.Z)(o))]};return(0,l.Z)(s,v,t)}(I);return(0,x.jsx)(d.Z.Provider,{value:null,children:(0,x.jsx)(Z,(0,o.Z)({as:m,ownerState:I,className:(0,s.default)(V.root,p),ref:t},C,{children:"string"!==typeof i||S?(0,x.jsxs)(a.Fragment,{children:["start"===w?g||(g=(0,x.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,x.jsx)(u.Z,{color:"text.secondary",children:i})}))})}))}}]);
//# sourceMappingURL=7694.d25f96c5.chunk.js.map