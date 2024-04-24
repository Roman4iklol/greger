"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[3151,8619],{28619:function(t,e,o){o.r(e);var i=o(15671),n=o(43144),r=o(60136),s=o(29388),a=o(4942),l=o(72791),c=o(76863),u=o(48928),p=o(73978),d=o(58487),h=o(16398),f=o(80184),m=(0,c.ZP)(u.Z)((function(t){var e=t.theme;return(0,a.Z)({marginBottom:e.spacing(1),width:"210px"},e.breakpoints.down("sm"),{boxShadow:"none",borderBottom:"1px solid #ccc",borderRadius:0,margin:0,width:"100%",justifyContent:"left"})})),v=(0,c.ZP)(p.Z)((function(t){return{background:t.theme.palette.text.primary}})),g=function(t){(0,r.Z)(o,t);var e=(0,s.Z)(o);function o(){var t;(0,i.Z)(this,o);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={open:!1,text:""},t}return(0,n.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.abstract,o=t.icon,i=t.onClick,n=t.title;return(0,f.jsx)(m,{onClick:i,children:(0,f.jsx)(d.Z,{children:(0,f.jsx)(h.Z,{avatar:(0,f.jsx)(v,{children:o}),title:n,subheader:e})})})}}]),o}(l.PureComponent);g.defaultProps={abstract:"Beskrivning saknas",title:"Titel saknas"},e.default=g},73151:function(t,e,o){o.r(e);var i=o(15671),n=o(43144),r=o(97326),s=o(60136),a=o(29388),l=o(72791),c=o(85286),u=o(54164),p=o(66788),d=o(35110),h=o(65514),f=o(4346),m=o(26191),v=o(28619),g=o(74599),b=o(80184),w=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(t){var n;(0,i.Z)(this,o),(n=e.call(this,t)).handleButtonClick=function(t){n.showWindow({hideOtherPluginWindows:!0,runCallback:!0}),n.props.app.globalObserver.publish("core.onlyHideDrawerIfNeeded")},n.showWindow=function(t){var e=t.hideOtherPluginWindows||!0,o=t.runCallback||!0;if(n.props.app.activeTool=n.type,n.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:n.type,activeMap:n.props.app.config.activeMap}),!0===n.state.windowVisible)return null;!0===e&&n.props.app.onWindowOpen((0,r.Z)(n)),n.setState({windowVisible:!0},(function(){!0===o&&"function"===typeof n.props.custom.onWindowShow&&n.props.custom.onWindowShow()}))},n.closeWindow=function(){n.type===n.props.app.activeTool&&(n.props.app.activeTool=void 0),n.setState({windowVisible:!1},(function(){"function"===typeof n.props.custom.onWindowHide&&n.props.custom.onWindowHide()}))},n.type=t.type.toLowerCase()||void 0,n.description=t.options.description||t.custom.description;var s=!1===n.props.app.config.mapConfig.map.clean&&(c.isMobile?t.options.visibleAtStartMobile:t.options.visibleAtStart)||!1;s&&n.props.app.globalObserver.publish("analytics.trackEvent",{eventName:"pluginShown",pluginName:n.type,activeMap:n.props.app.config.activeMap}),n.state={title:t.options.title||t.custom.title||"Unnamed plugin",color:t.options.color||t.custom.color||null,windowVisible:s},n.title=t.options.title||t.custom.title||"Unnamed plugin",n.width=t.options.width||t.custom.width||400,n.height=t.options.height||t.custom.height||"auto",n.position=t.options.position||t.custom.position||"left",t.app.registerWindowPlugin((0,r.Z)(n));var a="".concat(n.type,".showWindow");t.app.globalObserver.subscribe(a,(function(t){n.showWindow(t)}));var l="".concat(n.type,".closeWindow");return t.app.globalObserver.subscribe(l,(function(){n.closeWindow()})),n}return(0,n.Z)(o,[{key:"componentDidUpdate",value:function(t){t.custom.title!==this.props.custom.title&&this.setState({title:this.props.custom.title}),t.custom.color!==this.props.custom.color&&this.setState({color:this.props.custom.color})}},{key:"pluginIsWidget",value:function(t){return["left","right"].includes(t)}},{key:"renderWindow",value:function(t){var e=this.props.options.target;return"function"===typeof(null===t||void 0===t?void 0:t.render)?t.render():(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.default,{globalObserver:this.props.app.globalObserver,title:this.state.title,color:this.state.color,onClose:this.closeWindow,open:this.state.windowVisible,onResize:this.props.custom.onResize,onMaximize:this.props.custom.onMaximize,onMinimize:this.props.custom.onMinimize,draggingEnabled:this.props.custom.draggingEnabled,customPanelHeaderButtons:this.props.custom.customPanelHeaderButtons,resizingEnabled:this.props.custom.resizingEnabled,scrollable:this.props.custom.scrollable,allowMaximizedWindow:this.props.custom.allowMaximizedWindow,disablePadding:this.props.custom.disablePadding,width:this.width,height:this.height,position:this.position,mode:"window",layerswitcherConfig:this.props.app.config.mapConfig.tools.find((function(t){return"layerswitcher"===t.type})),children:l.cloneElement(this.props.children,{windowVisible:this.state.windowVisible})}),("toolbar"===e||this.pluginIsWidget(e))&&this.renderDrawerButton(),this.pluginIsWidget(e)&&this.renderWidgetButton("".concat(e,"-column")),"control"===e&&this.renderControlButton()]})}},{key:"renderDrawerButton",value:function(){return(0,u.createPortal)((0,b.jsx)(p.Z,{mdUp:this.pluginIsWidget(this.props.options.target),children:(0,b.jsxs)(d.ZP,{button:!0,divider:!0,selected:this.state.windowVisible,onClick:this.handleButtonClick,children:[(0,b.jsx)(h.Z,{children:this.props.custom.icon}),(0,b.jsx)(f.Z,{primary:this.title})]})}),document.getElementById("plugin-buttons"))}},{key:"renderWidgetButton",value:function(t){return(0,u.createPortal)((0,b.jsx)(p.Z,{mdDown:!0,children:(0,b.jsx)(v.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description})}),document.getElementById(t))}},{key:"renderControlButton",value:function(){return(0,u.createPortal)((0,b.jsx)(g.default,{icon:this.props.custom.icon,onClick:this.handleButtonClick,title:this.title,abstract:this.description}),document.getElementById("plugin-control-buttons"))}},{key:"render",value:function(){return!0!==this.props.app.config.mapConfig.map.clean&&this.renderWindow(this.props.custom)}}]),o}(l.PureComponent);e.default=w},58487:function(t,e,o){o.d(e,{Z:function(){return w}});var i=o(4942),n=o(87462),r=o(63366),s=o(72791),a=o(28182),l=o(94419),c=o(67254),u=o(76863),p=o(21217);function d(t){return(0,p.Z)("MuiCardActionArea",t)}var h=(0,o(75878).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),f=o(60753),m=o(80184),v=["children","className","focusVisibleClassName"],g=(0,u.ZP)(f.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){var e,o=t.theme;return e={display:"block",textAlign:"inherit",width:"100%"},(0,i.Z)(e,"&:hover .".concat(h.focusHighlight),{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,i.Z)(e,"&.".concat(h.focusVisible," .").concat(h.focusHighlight),{opacity:(o.vars||o).palette.action.focusOpacity}),e})),b=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,e){return e.focusHighlight}})((function(t){var e=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}})),w=s.forwardRef((function(t,e){var o=(0,c.Z)({props:t,name:"MuiCardActionArea"}),i=o.children,s=o.className,u=o.focusVisibleClassName,p=(0,r.Z)(o,v),h=o,f=function(t){var e=t.classes;return(0,l.Z)({root:["root"],focusHighlight:["focusHighlight"]},d,e)}(h);return(0,m.jsxs)(g,(0,n.Z)({className:(0,a.default)(f.root,s),focusVisibleClassName:(0,a.default)(u,f.focusVisible),ref:e,ownerState:h},p,{children:[i,(0,m.jsx)(b,{className:f.focusHighlight,ownerState:h})]}))}))},16398:function(t,e,o){o.d(e,{Z:function(){return Z}});var i=o(4942),n=o(63366),r=o(87462),s=o(72791),a=o(28182),l=o(94419),c=o(4565),u=o(67254),p=o(76863),d=o(21217);function h(t){return(0,d.Z)("MuiCardHeader",t)}var f=(0,o(75878).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=o(80184),v=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(t,e){var o;return(0,r.Z)((o={},(0,i.Z)(o,"& .".concat(f.title),e.title),(0,i.Z)(o,"& .".concat(f.subheader),e.subheader),o),e.root)}})({display:"flex",alignItems:"center",padding:16}),b=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(t,e){return e.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),w=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(t,e){return e.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,p.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(t,e){return e.content}})({flex:"1 1 auto"}),Z=s.forwardRef((function(t,e){var o=(0,u.Z)({props:t,name:"MuiCardHeader"}),i=o.action,s=o.avatar,p=o.className,d=o.component,f=void 0===d?"div":d,Z=o.disableTypography,C=void 0!==Z&&Z,x=o.subheader,k=o.subheaderTypographyProps,M=o.title,P=o.titleTypographyProps,W=(0,n.Z)(o,v),j=(0,r.Z)({},o,{component:f,disableTypography:C}),N=function(t){var e=t.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,e)}(j),H=M;null==H||H.type===c.Z||C||(H=(0,m.jsx)(c.Z,(0,r.Z)({variant:s?"body2":"h5",className:N.title,component:"span",display:"block"},P,{children:H})));var B=x;return null==B||B.type===c.Z||C||(B=(0,m.jsx)(c.Z,(0,r.Z)({variant:s?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:B}))),(0,m.jsxs)(g,(0,r.Z)({className:(0,a.default)(N.root,p),as:f,ref:e,ownerState:j},W,{children:[s&&(0,m.jsx)(b,{className:N.avatar,ownerState:j,children:s}),(0,m.jsxs)(y,{className:N.content,ownerState:j,children:[H,B]}),i&&(0,m.jsx)(w,{className:N.action,ownerState:j,children:i})]}))}))},48928:function(t,e,o){o.d(e,{Z:function(){return v}});var i=o(87462),n=o(63366),r=o(72791),s=o(28182),a=o(94419),l=o(76863),c=o(67254),u=o(56650),p=o(21217);function d(t){return(0,p.Z)("MuiCard",t)}(0,o(75878).Z)("MuiCard",["root"]);var h=o(80184),f=["className","raised"],m=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),v=r.forwardRef((function(t,e){var o=(0,c.Z)({props:t,name:"MuiCard"}),r=o.className,l=o.raised,u=void 0!==l&&l,p=(0,n.Z)(o,f),v=(0,i.Z)({},o,{raised:u}),g=function(t){var e=t.classes;return(0,a.Z)({root:["root"]},d,e)}(v);return(0,h.jsx)(m,(0,i.Z)({className:(0,s.default)(g.root,r),elevation:u?8:void 0,ref:e,ownerState:v},p))}))}}]);
//# sourceMappingURL=3151.87f7e3e6.chunk.js.map