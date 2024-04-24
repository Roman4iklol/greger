"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[361,6127],{28619:function(t,e,n){n.r(e);var o=n(15671),i=n(43144),r=n(60136),s=n(29388),a=n(4942),l=n(72791),c=n(76863),p=n(48928),u=n(73978),d=n(58487),h=n(16398),m=n(80184),g=(0,c.ZP)(p.Z)((function(t){var e=t.theme;return(0,a.Z)({marginBottom:e.spacing(1),width:"210px"},e.breakpoints.down("sm"),{boxShadow:"none",borderBottom:"1px solid #ccc",borderRadius:0,margin:0,width:"100%",justifyContent:"left"})})),f=(0,c.ZP)(u.Z)((function(t){return{background:t.theme.palette.text.primary}})),w=function(t){(0,r.Z)(n,t);var e=(0,s.Z)(n);function n(){var t;(0,o.Z)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={open:!1,text:""},t}return(0,i.Z)(n,[{key:"render",value:function(){var t=this.props,e=t.abstract,n=t.icon,o=t.onClick,i=t.title;return(0,m.jsx)(g,{onClick:o,children:(0,m.jsx)(d.Z,{children:(0,m.jsx)(h.Z,{avatar:(0,m.jsx)(f,{children:n}),title:i,subheader:e})})})}}]),n}(l.PureComponent);w.defaultProps={abstract:"Beskrivning saknas",title:"Titel saknas"},e.default=w},73151:function(t,e,n){n.r(e);var o=n(15671),i=n(43144),r=n(97326),s=n(60136),a=n(29388),l=n(72791),c=n(85286),p=n(54164),u=n(66788),d=n(35110),h=n(65514),m=n(4346),g=n(26191),f=n(28619),w=n(74599),b=n(80184),v=function(t){(0,s.Z)(n,t);var e=(0,a.Z)(n);function n(t){var i;(0,o.Z)(this,n),(i=e.call(this,t)).handleButtonClick=function(t){i.showWindow({hideOtherPluginWindows:!0,runCallback:!0}),i.props.app.globalObserver.publish("core.onlyHideDrawerIfNeeded")},i.showWindow=function(t){var e=t.hideOtherPluginWindows||!0,n=t.runCallback||!0;if(i.props.app.activeTool=i.type,i.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:i.type,activeMap:i.props.app.config.activeMap}),!0===i.state.windowVisible)return null;!0===e&&i.props.app.onWindowOpen((0,r.Z)(i)),i.setState({windowVisible:!0},(function(){!0===n&&"function"===typeof i.props.custom.onWindowShow&&i.props.custom.onWindowShow()}))},i.closeWindow=function(){i.type===i.props.app.activeTool&&(i.props.app.activeTool=void 0),i.setState({windowVisible:!1},(function(){"function"===typeof i.props.custom.onWindowHide&&i.props.custom.onWindowHide()}))},i.type=t.type.toLowerCase()||void 0,i.description=t.options.description||t.custom.description;var s=!1===i.props.app.config.mapConfig.map.clean&&(c.isMobile?t.options.visibleAtStartMobile:t.options.visibleAtStart)||!1;s&&i.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:i.type,activeMap:i.props.app.config.activeMap}),i.state={title:t.options.title||t.custom.title||"Unnamed plugin",color:t.options.color||t.custom.color||null,windowVisible:s},i.title=t.options.title||t.custom.title||"Unnamed plugin",i.width=t.options.width||t.custom.width||400,i.height=t.options.height||t.custom.height||"auto",i.position=t.options.position||t.custom.position||"left",t.app.registerWindowPlugin((0,r.Z)(i));var a="".concat(i.type,".showWindow");t.app.globalObserver.subscribe(a,(function(t){i.showWindow(t)}));var l="".concat(i.type,".closeWindow");return t.app.globalObserver.subscribe(l,(function(){i.closeWindow()})),i}return(0,i.Z)(n,[{key:"componentDidUpdate",value:function(t){t.custom.title!==this.props.custom.title&&this.setState({title:this.props.custom.title}),t.custom.color!==this.props.custom.color&&this.setState({color:this.props.custom.color})}},{key:"pluginIsWidget",value:function(t){return["left","right"].includes(t)}},{key:"renderWindow",value:function(t){var e=this.props.options.target;return"function"===typeof(null===t||void 0===t?void 0:t.render)?t.render():(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g.default,{globalObserver:this.props.app.globalObserver,title:this.state.title,color:this.state.color,onClose:this.closeWindow,open:this.state.windowVisible,onResize:this.props.custom.onResize,onMaximize:this.props.custom.onMaximize,onMinimize:this.props.custom.onMinimize,draggingEnabled:this.props.custom.draggingEnabled,customPanelHeaderButtons:this.props.custom.customPanelHeaderButtons,resizingEnabled:this.props.custom.resizingEnabled,scrollable:this.props.custom.scrollable,allowMaximizedWindow:this.props.custom.allowMaximizedWindow,disablePadding:this.props.custom.disablePadding,width:this.width,height:this.height,position:this.position,mode:"window",layerswitcherConfig:this.props.app.config.mapConfig.tools.find((function(t){return"layerswitcher"===t.type})),children:l.cloneElement(this.props.children,{windowVisible:this.state.windowVisible})}),("toolbar"===e||this.pluginIsWidget(e))&&this.renderDrawerButton(),this.pluginIsWidget(e)&&this.renderWidgetButton("".concat(e,"-column")),"control"===e&&this.renderControlButton()]})}},{key:"renderDrawerButton",value:function(){return(0,p.createPortal)((0,b.jsx)(u.Z,{mdUp:this.pluginIsWidget(this.props.options.target),children:(0,b.jsxs)(d.ZP,{button:!0,divider:!0,selected:this.state.windowVisible,onClick:this.handleButtonClick,children:[(0,b.jsx)(h.Z,{children:this.props.custom.icon}),(0,b.jsx)(m.Z,{primary:this.title})]})}),document.getElementById("plugin-buttons"))}},{key:"renderWidgetButton",value:function(t){return(0,p.createPortal)((0,b.jsx)(u.Z,{mdDown:!0,children:(0,b.jsx)(f.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description})}),document.getElementById(t))}},{key:"renderControlButton",value:function(){return(0,p.createPortal)((0,b.jsx)(w.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description}),document.getElementById("plugin-control-buttons"))}},{key:"render",value:function(){return!0!==this.props.app.config.mapConfig.map.clean&&this.renderWindow(this.props.custom)}}]),n}(l.PureComponent);e.default=v},10361:function(t,e,n){n.r(e);var o=n(1413),i=n(15671),r=n(43144),s=n(60136),a=n(29388),l=n(72791),c=n(11640),p=n(57012),u=n(73151),d=n(59413),h=n(1447),m=n(5777),g=n(96127),f=n(94777),w=n(98246),b=n(88014),v=n(80184),k=function(t){(0,s.Z)(n,t);var e=(0,a.Z)(n);function n(){var t;(0,i.Z)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).snackbarKey=null,t.shouldShowDocumentOnStart=function(){return!!t.props.options.documentOnStart},t.scrollInDocument=function(e){var n=t.props,o=n.localObserver,i=n.model,r=n.document;e?o.publish("scroll-to-chapter",i.getHeaderRef(r,e)):o.publish("scroll-to-top",i.getHeaderRef(r,e))},t.showHeaderInDocument=function(e){var n=e.documentName,o=e.headerIdentifier,i=t.props.enqueueSnackbar;n&&t.props.showDocument(n).then((function(){t.scrollInDocument(o)}),(function(){i("Kunde inte \xf6ppna dokumentet",{variant:"warning"}),console.warn("Could not fetch document, link to document probably reference a document not present in panelmenu")}))},t.displayMaplinkLoadingBar=function(){var e=t.props.enqueueSnackbar;t.snackbarKey=e("Kartan laddar... ",{variant:"information",persist:!0,preventDuplicate:!0,transitionDuration:{enter:0,exit:0},anchorOrigin:{vertical:"bottom",horizontal:"center"}})},t.closeMaplinkLoadingBar=function(){(0,t.props.closeSnackbar)(t.snackbarKey)},t.togglePrintWindow=function(){t.setState({showPrintWindow:!t.state.showPrintWindow})},t.handleInfoClickRequest=function(e){var n=document.createElement("span");n.innerHTML=e.payload.replace(/\\/g,"");var o=n.getElementsByTagName("a")[0];o?e.resolve((0,v.jsx)(f.CustomLink,{localObserver:t.props.localObserver,aTag:o,bottomMargin:!1})):(console.error("Could not render DocumentHandler link for payload:",e.payload),e.resolve((0,v.jsx)("b",{children:"Could not render DocumentHandler link"})))},t.bindSubscriptions=function(){var e=t.props,n=e.localObserver;e.app.globalObserver.subscribe("core.info-click-documenthandler",t.handleInfoClickRequest),n.subscribe("set-active-document",t.showHeaderInDocument),n.subscribe("maplink-loading",t.displayMaplinkLoadingBar),n.subscribe("map-animation-complete",t.closeMaplinkLoadingBar)},t.isModelReady=function(){return!!t.props.model},t.componentDidUpdate=function(e,n){var o=t.props.localObserver;e.model!==t.props.model&&t.isModelReady()&&(t.bindSubscriptions(),t.shouldShowDocumentOnStart()&&o.publish("set-active-document",{documentName:t.props.options.documentOnStart,headerIdentifier:null}))},t.getDocumentViewer=function(){var e=t.props,n=e.documentWindowMaximized,i=e.document;return(0,v.jsx)(d.default,(0,o.Z)({documentWindowMaximized:n,activeDocument:i,togglePrintWindow:t.togglePrintWindow},t.props))},t}return(0,r.Z)(n,[{key:"render",value:function(){var t=this.props,e=t.options,n=t.localObserver,i=t.documentWindowMaximized,r=t.document,s=t.togglePrintWindow,a=t.onWindowHide,l=t.showPrintWindow,d=t.customTheme,f=t.onMinimize,w=t.onMaximize,k=this.isModelReady(),y=e.enablePrint?[{icon:(0,v.jsx)(b.Z,{}),description:"\xd6ppna utskrift",onClickCallback:s}]:[];return(0,v.jsx)(u.default,(0,o.Z)((0,o.Z)({},this.props),{},{type:"DocumentViewer",custom:{icon:(0,v.jsx)(m.Z,{}),title:(null===r||void 0===r?void 0:r.documentTitle)||e.windowTitle||"Documents",color:(null===r||void 0===r?void 0:r.documentColor)||"#ffffff",customPanelHeaderButtons:y,description:"En kort beskrivning som visas i widgeten",height:e.height||"auto",width:e.width||600,scrollable:!1,onMinimize:f,onMaximize:w,onWindowHide:a,draggingEnabled:!1,resizingEnabled:!1,allowMaximizedWindow:!1},children:null!=r&&k?l?(0,v.jsx)(h.default,(0,o.Z)({customTheme:d,activeDocument:r,documentWindowMaximized:i,togglePrintWindow:s,localObserver:n,options:this.props.options},this.props)):d?(0,v.jsx)(c.Z,{injectFirst:!0,children:(0,v.jsx)(p.Z,{theme:d,children:this.getDocumentViewer()})}):this.getDocumentViewer():(0,v.jsx)(g.default,{})}))}}]),n}(l.PureComponent);e.default=(0,w.RM)(k)},96127:function(t,e,n){n.r(e);var o=n(15671),i=n(43144),r=n(60136),s=n(29388),a=n(72791),l=n(45953),c=n(96580),p=n(80184),u=function(t){(0,r.Z)(n,t);var e=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,p.jsx)(l.ZP,{alignItems:"center",justifyContent:"center",container:!0,sx:{height:"100%"},children:(0,p.jsx)(c.Z,{justify:"center",sx:{height:"100%"}})})}}]),n}(a.PureComponent);e.default=u}}]);
//# sourceMappingURL=361.f9226acd.chunk.js.map