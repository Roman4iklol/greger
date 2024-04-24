"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[7512,2564],{28619:function(t,e,r){r.r(e);var n=r(15671),i=r(43144),o=r(60136),a=r(29388),s=r(4942),u=r(72791),l=r(76863),c=r(48928),p=r(73978),d=r(58487),h=r(16398),m=r(80184),f=(0,l.ZP)(c.Z)((function(t){var e=t.theme;return(0,s.Z)({marginBottom:e.spacing(1),width:"210px"},e.breakpoints.down("sm"),{boxShadow:"none",borderBottom:"1px solid #ccc",borderRadius:0,margin:0,width:"100%",justifyContent:"left"})})),v=(0,l.ZP)(p.Z)((function(t){return{background:t.theme.palette.text.primary}})),b=function(t){(0,o.Z)(r,t);var e=(0,a.Z)(r);function r(){var t;(0,n.Z)(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={open:!1,text:""},t}return(0,i.Z)(r,[{key:"render",value:function(){var t=this.props,e=t.abstract,r=t.icon,n=t.onClick,i=t.title;return(0,m.jsx)(f,{onClick:n,children:(0,m.jsx)(d.Z,{children:(0,m.jsx)(h.Z,{avatar:(0,m.jsx)(v,{children:r}),title:i,subheader:e})})})}}]),r}(u.PureComponent);b.defaultProps={abstract:"Beskrivning saknas",title:"Titel saknas"},e.default=b},73151:function(t,e,r){r.r(e);var n=r(15671),i=r(43144),o=r(97326),a=r(60136),s=r(29388),u=r(72791),l=r(85286),c=r(54164),p=r(66788),d=r(35110),h=r(65514),m=r(4346),f=r(26191),v=r(28619),b=r(74599),g=r(80184),w=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(t){var i;(0,n.Z)(this,r),(i=e.call(this,t)).handleButtonClick=function(t){i.showWindow({hideOtherPluginWindows:!0,runCallback:!0}),i.props.app.globalObserver.publish("core.onlyHideDrawerIfNeeded")},i.showWindow=function(t){var e=t.hideOtherPluginWindows||!0,r=t.runCallback||!0;if(i.props.app.activeTool=i.type,i.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:i.type,activeMap:i.props.app.config.activeMap}),!0===i.state.windowVisible)return null;!0===e&&i.props.app.onWindowOpen((0,o.Z)(i)),i.setState({windowVisible:!0},(function(){!0===r&&"function"===typeof i.props.custom.onWindowShow&&i.props.custom.onWindowShow()}))},i.closeWindow=function(){i.type===i.props.app.activeTool&&(i.props.app.activeTool=void 0),i.setState({windowVisible:!1},(function(){"function"===typeof i.props.custom.onWindowHide&&i.props.custom.onWindowHide()}))},i.type=t.type.toLowerCase()||void 0,i.description=t.options.description||t.custom.description;var a=!1===i.props.app.config.mapConfig.map.clean&&(l.isMobile?t.options.visibleAtStartMobile:t.options.visibleAtStart)||!1;a&&i.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:i.type,activeMap:i.props.app.config.activeMap}),i.state={title:t.options.title||t.custom.title||"Unnamed plugin",color:t.options.color||t.custom.color||null,windowVisible:a},i.title=t.options.title||t.custom.title||"Unnamed plugin",i.width=t.options.width||t.custom.width||400,i.height=t.options.height||t.custom.height||"auto",i.position=t.options.position||t.custom.position||"left",t.app.registerWindowPlugin((0,o.Z)(i));var s="".concat(i.type,".showWindow");t.app.globalObserver.subscribe(s,(function(t){i.showWindow(t)}));var u="".concat(i.type,".closeWindow");return t.app.globalObserver.subscribe(u,(function(){i.closeWindow()})),i}return(0,i.Z)(r,[{key:"componentDidUpdate",value:function(t){t.custom.title!==this.props.custom.title&&this.setState({title:this.props.custom.title}),t.custom.color!==this.props.custom.color&&this.setState({color:this.props.custom.color})}},{key:"pluginIsWidget",value:function(t){return["left","right"].includes(t)}},{key:"renderWindow",value:function(t){var e=this.props.options.target;return"function"===typeof(null===t||void 0===t?void 0:t.render)?t.render():(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f.default,{globalObserver:this.props.app.globalObserver,title:this.state.title,color:this.state.color,onClose:this.closeWindow,open:this.state.windowVisible,onResize:this.props.custom.onResize,onMaximize:this.props.custom.onMaximize,onMinimize:this.props.custom.onMinimize,draggingEnabled:this.props.custom.draggingEnabled,customPanelHeaderButtons:this.props.custom.customPanelHeaderButtons,resizingEnabled:this.props.custom.resizingEnabled,scrollable:this.props.custom.scrollable,allowMaximizedWindow:this.props.custom.allowMaximizedWindow,disablePadding:this.props.custom.disablePadding,width:this.width,height:this.height,position:this.position,mode:"window",layerswitcherConfig:this.props.app.config.mapConfig.tools.find((function(t){return"layerswitcher"===t.type})),children:u.cloneElement(this.props.children,{windowVisible:this.state.windowVisible})}),("toolbar"===e||this.pluginIsWidget(e))&&this.renderDrawerButton(),this.pluginIsWidget(e)&&this.renderWidgetButton("".concat(e,"-column")),"control"===e&&this.renderControlButton()]})}},{key:"renderDrawerButton",value:function(){return(0,c.createPortal)((0,g.jsx)(p.Z,{mdUp:this.pluginIsWidget(this.props.options.target),children:(0,g.jsxs)(d.ZP,{button:!0,divider:!0,selected:this.state.windowVisible,onClick:this.handleButtonClick,children:[(0,g.jsx)(h.Z,{children:this.props.custom.icon}),(0,g.jsx)(m.Z,{primary:this.title})]})}),document.getElementById("plugin-buttons"))}},{key:"renderWidgetButton",value:function(t){return(0,c.createPortal)((0,g.jsx)(p.Z,{mdDown:!0,children:(0,g.jsx)(v.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description})}),document.getElementById(t))}},{key:"renderControlButton",value:function(){return(0,c.createPortal)((0,g.jsx)(b.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description}),document.getElementById("plugin-control-buttons"))}},{key:"render",value:function(){return!0!==this.props.app.config.mapConfig.map.clean&&this.renderWindow(this.props.custom)}}]),r}(u.PureComponent);e.default=w},57512:function(t,e,r){r.r(e);var n=r(1413),i=(r(72791),r(85194)),o=r.n(i),a=r(62553),s=r(73151),u=r(84863),l=r(2564),c=r(67061),p=r(80184);e.default=function(t){var e=o()(),r=new c.default({localObserver:e,map:t.map,options:t.options}),i=new l.default({localObserver:e,app:t.app,mapViewModel:r,options:t.options});return(0,p.jsx)(s.default,(0,n.Z)((0,n.Z)({},t),{},{type:"FmeServer",custom:{icon:(0,p.jsx)(a.Z,{}),title:"FME-server",description:"Best\xe4ll jobb fr\xe5n FME-server.",height:"dynamic",width:400,onWindowHide:function(){e.publish("view.toggleDrawMethod",""),e.publish("map.toggleDrawMethod","")}},children:(0,p.jsx)(u.default,{model:i,mapViewModel:r,options:t.options,localObserver:e})}))}},2564:function(t,e,r){r.r(e);var n=r(15861),i=r(43144),o=r(15671),a=r(66274),s=r(99359),u=r(64687),l=r.n(u),c=r(25806),p=(0,s.Z)("options"),d=(0,s.Z)("mapServiceBase"),h=(0,s.Z)("mapViewModel"),m=(0,s.Z)("activeUserEmail"),f=(0,s.Z)("createRequestUrlString"),v=(0,s.Z)("getParameterNameValueString"),b=(0,s.Z)("getStepSize"),g=(0,s.Z)("getParameterValue"),w=(0,s.Z)("getParametersToSend"),y=(0,s.Z)("makeRestApiOrder"),Z=(0,s.Z)("makeDataDownloadOrder"),P=(0,s.Z)("createGetParametersUrl"),O=(0,s.Z)("createSubmitProductRequestUrl"),S=(0,s.Z)("createDataDownloadUrl"),x=(0,s.Z)("createProductStatusUrl"),j=(0,i.Z)((function t(e){var r,i,s=this;(0,o.Z)(this,t),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),this.getActiveUserEmail=function(){return(0,a.Z)(s,m)[m]},this.getProduct=function(t,e){return 0===(null===t||void 0===t?void 0:t.length)||0===(null===e||void 0===e?void 0:e.length)?null:(0,a.Z)(s,p)[p].products.find((function(r){return r.group===t&&r.name===e}))},this.makeOrder=function(t,e,r,n){var i=s.getProduct(t,e);return""!==n&&i.promptForEmail?(0,a.Z)(s,Z)[Z](i,r,n):(0,a.Z)(s,y)[y](i,r)},Object.defineProperty(this,f,{writable:!0,value:function(t,e,r){var n="opt_servicemode=async&opt_responseformat=json&opt_requesteremail=".concat(r,"&");if(!s.noGeomAttributeSupplied(t)){var i=(0,a.Z)(s,h)[h].getAllFeaturesAsGeoJson();n+="".concat(t.geoAttribute,"=").concat(i,"&")}return e.forEach((function(t){n+="".concat((0,a.Z)(s,v)[v](t),"&")})),n}}),Object.defineProperty(this,v,{writable:!0,value:function(t){var e,r,n,i,o,a;switch(t.type){case"CHOICE":case"LOOKUP_CHOICE":case"STRING":case"TEXT":case"PASSWORD":return"".concat(t.name,"=").concat(null!==(e=null!==(r=t.value)&&void 0!==r?r:t.defaultValue)&&void 0!==e?e:"");case"LISTBOX":case"LOOKUP_LISTBOX":var u=null!==(n=null!==(i=t.value)&&void 0!==i?i:t.defaultValue)&&void 0!==n?n:[];return 0===u.length?"".concat(t.name,"="):"".concat(t.name,"=").concat(u.join(","));case"RANGE_SLIDER":var l=s.getRangeSliderValueAndStep(t).value;return"".concat(t.name,"=").concat(l);default:return null!==(o=null!==(a=t.value)&&void 0!==a?a:t.defaultValue)&&void 0!==o?o:""}}}),this.noGeomAttributeSupplied=function(t){return!t||!t.geoAttribute||""===t.geoAttribute||"none"===t.geoAttribute},Object.defineProperty(this,b,{writable:!0,value:function(t){return 0===t?1:Number("0.".concat("1".padStart(t,"0")))}}),this.getRangeSliderValueAndStep=function(t){var e,r=(0,a.Z)(s,b)[b](t.decimalPrecision);return{value:null!==(e=t.value)&&void 0!==e?e:s.getRangeSliderMinimum(t,r),step:r}},this.getRangeSliderMinimum=function(t,e){return t.minimumExclusive?t.minimum+e:t.minimum},this.getRangeSliderMaximum=function(t,e){return t.maximumExclusive?t.maximum-e:t.maximum},Object.defineProperty(this,g,{writable:!0,value:function(t){var e,r,n,i,o,a;switch(t.type){case"CHOICE":case"LOOKUP_CHOICE":case"STRING":case"TEXT":case"PASSWORD":return null!==(e=null!==(r=t.value)&&void 0!==r?r:t.defaultValue)&&void 0!==e?e:"";case"LISTBOX":case"LOOKUP_LISTBOX":return null!==(n=null!==(i=t.value)&&void 0!==i?i:t.defaultValue)&&void 0!==n?n:[];case"RANGE_SLIDER":var u=s.getRangeSliderValueAndStep(t).value;return u;default:return null!==(o=null!==(a=t.value)&&void 0!==a?a:t.defaultValue)&&void 0!==o?o:""}}}),Object.defineProperty(this,w,{writable:!0,value:function(t,e){var r=[];if(!s.noGeomAttributeSupplied(t)){var n=(0,a.Z)(s,h)[h].getAllFeaturesAsGeoJson();r.push({name:t.geoAttribute,value:n})}return e.forEach((function(t){var e=(0,a.Z)(s,g)[g](t);r.push({name:t.name,value:e})})),r}}),this.getParametersToRender=function(t,e,r){var n=s.getProduct(e,r);return n?t.filter((function(t){return t.name!==n.geoAttribute})):[]},this.getInfoUrl=function(t,e){var r,n=s.getProduct(t,e);return n&&null!==(r=n.infoUrl)&&void 0!==r?r:""},this.shouldPromptForEmail=function(t,e){var r=s.getProduct(t,e);return!!r&&r.promptForEmail},this.isValidEmail=function(t){if("string"!==typeof t)return!1;return/\S+@\S+\.\S+/.test(t)},this.getProductParameters=function(){var t=(0,n.Z)(l().mark((function t(e,r){var n,i,o,u;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s.getProduct(e,r)){t.next=3;break}return t.abrupt("return",{error:!0,parameters:[]});case 3:return i=(0,a.Z)(s,P)[P](n),t.prev=4,t.next=7,(0,c.hfetch)(i);case 7:return o=t.sent,t.next=10,o.json();case 10:return u=t.sent,t.abrupt("return",{error:!1,parameters:u});case 14:return t.prev=14,t.t0=t.catch(4),t.abrupt("return",{error:!0,parameters:[]});case 17:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e,r){return t.apply(this,arguments)}}(),Object.defineProperty(this,y,{writable:!0,value:function(){var t=(0,n.Z)(l().mark((function t(e,r){var n,i,o,u,p,d;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(0,a.Z)(s,w)[w](e,r),i=(0,a.Z)(s,O)[O](e),o=JSON.stringify({publishedParameters:n}),t.prev=3,t.next=6,(0,c.hfetch)(i,{method:"POST",body:o,credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 6:return p=t.sent,t.next=9,p.json();case 9:return d=t.sent,t.abrupt("return",{error:!1,jobId:null!==(u=d.id)&&void 0!==u?u:null});case 13:return t.prev=13,t.t0=t.catch(3),t.abrupt("return",{error:!0,jobId:null});case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e,r){return t.apply(this,arguments)}}()}),Object.defineProperty(this,Z,{writable:!0,value:function(){var t=(0,n.Z)(l().mark((function t(e,r,n){var i,o,u,p,d,h;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=(0,a.Z)(s,S)[S](e),o=(0,a.Z)(s,f)[f](e,r,n),t.prev=2,t.next=5,(0,c.hfetch)(i,{method:"POST",body:o,credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 5:return d=t.sent,t.next=8,d.json();case 8:return h=t.sent,t.abrupt("return",{error:!1,jobId:null!==(u=null===h||void 0===h||null===(p=h.serviceResponse)||void 0===p?void 0:p.jobID)&&void 0!==u?u:null});case 12:return t.prev=12,t.t0=t.catch(2),t.abrupt("return",{error:!0,jobId:null});case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,r,n){return t.apply(this,arguments)}}()}),this.getJobStatusById=function(){var t=(0,n.Z)(l().mark((function t(e){var r,n,i,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",{error:!0,status:null});case 2:return r=(0,a.Z)(s,x)[x](e),t.prev=3,t.next=6,(0,c.hfetch)(r);case 6:return i=t.sent,t.next=9,i.json();case 9:return o=t.sent,t.abrupt("return",{error:!1,status:null!==(n=null===o||void 0===o?void 0:o.status)&&void 0!==n?n:null});case 13:return t.prev=13,t.t0=t.catch(3),t.abrupt("return",{error:!0,status:null});case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}(),Object.defineProperty(this,P,{writable:!0,value:function(t){return"".concat((0,a.Z)(s,d)[d],"/fmeproxy/fmerest/v3/repositories/").concat(t.repository,"/items/").concat(t.workspace,"/parameters/")}}),Object.defineProperty(this,O,{writable:!0,value:function(t){return"".concat((0,a.Z)(s,d)[d],"/fmeproxy/fmerest/v3/transformations/submit/").concat(t.repository,"/").concat(t.workspace,"/")}}),Object.defineProperty(this,S,{writable:!0,value:function(t){return"".concat((0,a.Z)(s,d)[d],"/fmeproxy/fmedatadownload/").concat(t.repository,"/").concat(t.workspace,"/")}}),Object.defineProperty(this,x,{writable:!0,value:function(t){return"".concat((0,a.Z)(s,d)[d],"/fmeproxy/fmerest/v3/transformations/jobs/id/").concat(t,"/")}}),(0,a.Z)(this,p)[p]=e.options,(0,a.Z)(this,d)[d]=e.app.config.appConfig.mapserviceBase,(0,a.Z)(this,m)[m]=null!==(r=null===(i=e.app.config.userDetails)||void 0===i?void 0:i.mail)&&void 0!==r?r:"",(0,a.Z)(this,h)[h]=e.mapViewModel}));e.default=j}}]);
//# sourceMappingURL=7512.31b9d140.chunk.js.map