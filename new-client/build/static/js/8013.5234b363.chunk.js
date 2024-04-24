"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[8013],{28619:function(t,o,i){i.r(o);var e=i(15671),n=i(43144),s=i(60136),r=i(29388),p=i(4942),l=i(72791),a=i(76863),c=i(48928),d=i(73978),u=i(58487),h=i(16398),m=i(80184),w=(0,a.ZP)(c.Z)((function(t){var o=t.theme;return(0,p.Z)({marginBottom:o.spacing(1),width:"210px"},o.breakpoints.down("sm"),{boxShadow:"none",borderBottom:"1px solid #ccc",borderRadius:0,margin:0,width:"100%",justifyContent:"left"})})),g=(0,a.ZP)(d.Z)((function(t){return{background:t.theme.palette.text.primary}})),v=function(t){(0,s.Z)(i,t);var o=(0,r.Z)(i);function i(){var t;(0,e.Z)(this,i);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=o.call.apply(o,[this].concat(s))).state={open:!1,text:""},t}return(0,n.Z)(i,[{key:"render",value:function(){var t=this.props,o=t.abstract,i=t.icon,e=t.onClick,n=t.title;return(0,m.jsx)(w,{onClick:e,children:(0,m.jsx)(u.Z,{children:(0,m.jsx)(h.Z,{avatar:(0,m.jsx)(g,{children:i}),title:n,subheader:o})})})}}]),i}(l.PureComponent);v.defaultProps={abstract:"Beskrivning saknas",title:"Titel saknas"},o.default=v},73151:function(t,o,i){i.r(o);var e=i(15671),n=i(43144),s=i(97326),r=i(60136),p=i(29388),l=i(72791),a=i(85286),c=i(54164),d=i(66788),u=i(35110),h=i(65514),m=i(4346),w=i(26191),g=i(28619),v=i(74599),f=i(80184),b=function(t){(0,r.Z)(i,t);var o=(0,p.Z)(i);function i(t){var n;(0,e.Z)(this,i),(n=o.call(this,t)).handleButtonClick=function(t){n.showWindow({hideOtherPluginWindows:!0,runCallback:!0}),n.props.app.globalObserver.publish("core.onlyHideDrawerIfNeeded")},n.showWindow=function(t){var o=t.hideOtherPluginWindows||!0,i=t.runCallback||!0;if(n.props.app.activeTool=n.type,n.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:n.type,activeMap:n.props.app.config.activeMap}),!0===n.state.windowVisible)return null;!0===o&&n.props.app.onWindowOpen((0,s.Z)(n)),n.setState({windowVisible:!0},(function(){!0===i&&"function"===typeof n.props.custom.onWindowShow&&n.props.custom.onWindowShow()}))},n.closeWindow=function(){n.type===n.props.app.activeTool&&(n.props.app.activeTool=void 0),n.setState({windowVisible:!1},(function(){"function"===typeof n.props.custom.onWindowHide&&n.props.custom.onWindowHide()}))},n.type=t.type.toLowerCase()||void 0,n.description=t.options.description||t.custom.description;var r=!1===n.props.app.config.mapConfig.map.clean&&(a.isMobile?t.options.visibleAtStartMobile:t.options.visibleAtStart)||!1;r&&n.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:n.type,activeMap:n.props.app.config.activeMap}),n.state={title:t.options.title||t.custom.title||"Unnamed plugin",color:t.options.color||t.custom.color||null,windowVisible:r},n.title=t.options.title||t.custom.title||"Unnamed plugin",n.width=t.options.width||t.custom.width||400,n.height=t.options.height||t.custom.height||"auto",n.position=t.options.position||t.custom.position||"left",t.app.registerWindowPlugin((0,s.Z)(n));var p="".concat(n.type,".showWindow");t.app.globalObserver.subscribe(p,(function(t){n.showWindow(t)}));var l="".concat(n.type,".closeWindow");return t.app.globalObserver.subscribe(l,(function(){n.closeWindow()})),n}return(0,n.Z)(i,[{key:"componentDidUpdate",value:function(t){t.custom.title!==this.props.custom.title&&this.setState({title:this.props.custom.title}),t.custom.color!==this.props.custom.color&&this.setState({color:this.props.custom.color})}},{key:"pluginIsWidget",value:function(t){return["left","right"].includes(t)}},{key:"renderWindow",value:function(t){var o=this.props.options.target;return"function"===typeof(null===t||void 0===t?void 0:t.render)?t.render():(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(w.default,{globalObserver:this.props.app.globalObserver,title:this.state.title,color:this.state.color,onClose:this.closeWindow,open:this.state.windowVisible,onResize:this.props.custom.onResize,onMaximize:this.props.custom.onMaximize,onMinimize:this.props.custom.onMinimize,draggingEnabled:this.props.custom.draggingEnabled,customPanelHeaderButtons:this.props.custom.customPanelHeaderButtons,resizingEnabled:this.props.custom.resizingEnabled,scrollable:this.props.custom.scrollable,allowMaximizedWindow:this.props.custom.allowMaximizedWindow,disablePadding:this.props.custom.disablePadding,width:this.width,height:this.height,position:this.position,mode:"window",layerswitcherConfig:this.props.app.config.mapConfig.tools.find((function(t){return"layerswitcher"===t.type})),children:l.cloneElement(this.props.children,{windowVisible:this.state.windowVisible})}),("toolbar"===o||this.pluginIsWidget(o))&&this.renderDrawerButton(),this.pluginIsWidget(o)&&this.renderWidgetButton("".concat(o,"-column")),"control"===o&&this.renderControlButton()]})}},{key:"renderDrawerButton",value:function(){return(0,c.createPortal)((0,f.jsx)(d.Z,{mdUp:this.pluginIsWidget(this.props.options.target),children:(0,f.jsxs)(u.ZP,{button:!0,divider:!0,selected:this.state.windowVisible,onClick:this.handleButtonClick,children:[(0,f.jsx)(h.Z,{children:this.props.custom.icon}),(0,f.jsx)(m.Z,{primary:this.title})]})}),document.getElementById("plugin-buttons"))}},{key:"renderWidgetButton",value:function(t){return(0,c.createPortal)((0,f.jsx)(d.Z,{mdDown:!0,children:(0,f.jsx)(g.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description})}),document.getElementById(t))}},{key:"renderControlButton",value:function(){return(0,c.createPortal)((0,f.jsx)(v.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description}),document.getElementById("plugin-control-buttons"))}},{key:"render",value:function(){return!0!==this.props.app.config.mapConfig.map.clean&&this.renderWindow(this.props.custom)}}]),i}(l.PureComponent);o.default=b},48013:function(t,o,i){i.r(o);var e=i(1413),n=i(15671),s=i(43144),r=i(60136),p=i(29388),l=i(72791),a=i(73151),c=i(86830),d=i(10841),u=i(85194),h=i.n(u),m=i(88014),w=i(80184),g=function(t){(0,r.Z)(i,t);var o=(0,p.Z)(i);function i(t){var e,s,r,p,l,a,d,u,m;return(0,n.Z)(this,i),(m=o.call(this,t)).dims={a0:[1189,841],a1:[841,594],a2:[594,420],a3:[420,297],a4:[297,210],a5:[210,148]},m.dpis=[72,150,300],m.paperFormats=Object.keys(m.dims),m.scales=[100,250,500,1e3,2500,5e3,1e4,25e3,5e4,1e5,2e5,5e5],m.onWindowShow=function(){m.localObserver.publish("showPrintPreview")},m.onWindowHide=function(){m.localObserver.publish("hidePrintPreview")},(null===t||void 0===t||null===(e=t.options)||void 0===e||null===(s=e.scales)||void 0===s?void 0:s.split(",").length)>1?t.options.scales=t.options.scales.replace(/\s/g,"").split(","):t.options.scales=m.scales,(null===t||void 0===t||null===(r=t.options)||void 0===r||null===(p=r.dpis)||void 0===p?void 0:p.split(",").length)>1?t.options.dpis=t.options.dpis.replace(/\s/g,"").split(",").map((function(t){return parseInt(t)})):t.options.dpis=m.dpis,(null===t||void 0===t||null===(l=t.options)||void 0===l||null===(a=l.paperFormats)||void 0===a?void 0:a.split(",").length)>1?t.options.paperFormats=t.options.paperFormats.replace(/\s/g,"").split(",").map((function(t){return t.toLowerCase()})):t.options.paperFormats=m.paperFormats,t.options.logoMaxWidth="number"===typeof(null===(d=t.options)||void 0===d?void 0:d.logoMaxWidth)?t.options.logoMaxWidth:40,t.options.northArrow=t.options.northArrow||"/north_arrow.png",t.options.crossOrigin=(null===(u=t.app.config.mapConfig.map)||void 0===u?void 0:u.crossOrigin)||"anonymous",m.localObserver=h()(),m.printModel=new c.default({localObserver:m.localObserver,map:t.map,options:t.options,dims:m.dims,mapConfig:t.app.config.mapConfig.map}),m}return(0,s.Z)(i,[{key:"render",value:function(){return(0,w.jsx)(a.default,(0,e.Z)((0,e.Z)({},this.props),{},{type:"Print",custom:{icon:(0,w.jsx)(m.Z,{}),title:"Skriv ut",description:"Skapa en PDF av kartan",height:"dynamic",width:350,onWindowShow:this.onWindowShow,onWindowHide:this.onWindowHide},children:(0,w.jsx)(d.default,{model:this.printModel,options:this.props.options,localObserver:this.localObserver,scales:this.props.options.scales,visibleAtStart:this.props.options.visibleAtStart,dims:this.dims})}))}}]),i}(l.PureComponent);o.default=g}}]);
//# sourceMappingURL=8013.5234b363.chunk.js.map