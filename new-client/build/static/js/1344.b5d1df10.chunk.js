"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[1344],{71344:function(t,e,n){n.r(e);var r=n(15671),i=n(43144),o=n(60136),a=n(29388),s=n(72791),l=n(76863),c=n(53245),p=n(56650),u=n(15185),h=n(80184),f=(0,l.ZP)(c.Z)((function(t){t.theme;return{zIndex:4}})),d=(0,l.ZP)(p.Z)((function(t){t.theme;return{maxWidth:"400px",background:"white"}})),m=(0,l.ZP)("div")((function(t){t.theme;return{padding:"15px",overflow:"auto"}})),v=function(t){(0,o.Z)(n,t);var e=(0,a.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={panelPosition:!1,placement:"right-start"},t.close=function(e){var n=t.props.onClose;n&&n()},t}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.globalObserver&&this.props.globalObserver.subscribe("core.toolbarExpanded",(function(e){t.setState({placement:"right"},(function(){t.setState({placement:"right-start"})}))}))}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.anchorEl,r=t.open,i=this.state.placement;void 0===r&&(r=!1);var o=r?"no-transition-popper":null;return(0,h.jsx)(f,{id:o,open:r,anchorEl:n,placement:i,children:(0,h.jsxs)(d,{children:[(0,h.jsx)(u.default,{title:this.props.title,onClose:this.close,maximizable:!1,onMaximize:function(){},onMinimize:function(){}}),(0,h.jsx)(m,{children:e})]})})}}]),n}(s.Component);e.default=v}}]);
//# sourceMappingURL=1344.b5d1df10.chunk.js.map