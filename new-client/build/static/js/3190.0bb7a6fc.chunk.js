"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[3190],{3190:function(e,t,n){n.r(t);var r=n(93433),i=n(15671),a=n(43144),s=n(60136),o=n(29388),c=n(72791),l=n(29823),p=n(3746),h=n(20165),u=n(5536),d=n(56650),f=n(45953),v=n(61091),y=n(13811),m=n(4565),g=n(42618),Z=n(76863),j=n(4407),k=n(80184),b=(0,Z.ZP)(d.Z)((function(e){var t=e.theme;return{marginRight:t.spacing(.5),border:"".concat(t.spacing(.1)," solid ").concat(t.palette.divider)}})),x=(0,Z.ZP)(f.ZP)((function(e){return{padding:e.theme.spacing(1)}})),C=(0,Z.ZP)(f.ZP)((function(e){return{paddingLeft:e.theme.spacing(.5)}})),O=(0,Z.ZP)("div")((function(e){return{padding:e.theme.spacing(.5)}})),L=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).setHidden=function(e){var t=e.target.getOpacity();r.setState({hidden:0===t})},r.setLayerOpacity=function(e){return function(t){r.setState({hidden:!r.state.hidden},(function(){e.setOpacity(r.state.hidden?0:1)}))}},r.setLayerVisibility=function(e){return function(t){e.get("visible")&&(e.setOpacity(1),r.props.app.globalObserver.publish("layerswitcher.hideLayer",e)),e.set("visible",!e.get("visible"))}},r.openInformative=function(e){r.props.app.windows.find((function(e){return"informative"===e.type})).props.custom.open(e)},r.handleClose=function(){r.setState({anchorEl:null,popoverOpen:!1})},r.state={hidden:0===e.layer.getOpacity(),anchorEl:null,popoverOpen:!1},r.chapters=r.findChapters(r.props.layer.get("name"),r.props.chapters),r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.props.layer.on("change:opacity",this.setHidden)}},{key:"componentWillUnmount",value:function(){this.props.layer.un("change:opacity",this.setHidden)}},{key:"isOverflow",value:function(e){if(!e)return!1;var t=e.scrollLeft++;return e.scrollLeft-- >t}},{key:"findChapters",value:function(e,t){var n=this;return t?t.reduce((function(t,i){return Array.isArray(i.layers)&&(i.layers.some((function(t){return t===e}))&&(t=[].concat((0,r.Z)(t),[i])),i.chapters.length>0&&(t=[].concat((0,r.Z)(t),(0,r.Z)(n.findChapters(e,i.chapters))))),t}),[]):[]}},{key:"renderChapterLinks",value:function(){var e=this;return this.chapters&&this.chapters.length>0&&this.chapters.length>0?(0,k.jsx)(O,{children:this.chapters.map((function(t,n){return(0,k.jsx)("div",{children:(0,k.jsxs)(v.Z,{size:"small",onClick:function(){e.setState({popoverOpen:!1}),e.openInformative(t)},children:[t.header,(0,k.jsx)(g.Z,{})]})},n)}))}):null}},{key:"renderChaptersPopover",value:function(e){this.setState({anchorEl:e,popoverOpen:!0})}},{key:"renderInformativeIcon",value:function(){var e=this;return this.props.chapters&&this.chapters&&this.chapters.length>0?(0,k.jsx)(y.Z,{size:"small",onClick:function(t){1===e.chapters.length?e.openInformative(e.chapters[0]):e.renderChaptersPopover(t.target)},children:(0,k.jsx)(u.Z,{})}):null}},{key:"render",value:function(){var e=this.props,t=e.layer,n=e.title,r=e.type,i=this.state.hidden;return(0,k.jsxs)(b,{square:"flat"===r,elevation:0,children:[(0,k.jsxs)(x,{container:!0,"data-type":"bread-crumb",justifyContent:"space-between",alignItems:"center",children:[(0,k.jsx)(f.ZP,{item:!0,children:(0,k.jsx)(y.Z,{size:"small",onClick:this.setLayerOpacity(t),"aria-label":"Visa/d\xf6lj lagret tillf\xe4lligt",children:i?(0,k.jsx)(h.Z,{}):(0,k.jsx)(p.Z,{})})}),this.renderInformativeIcon(),(0,k.jsx)(C,{item:!0,children:(0,k.jsx)(m.Z,{variant:"body2",noWrap:!0,children:n})}),(0,k.jsx)(f.ZP,{item:!0,children:(0,k.jsx)(y.Z,{size:"small",onClick:this.setLayerVisibility(t),"aria-label":"Ta bort lagret fr\xe5n kartan",children:(0,k.jsx)(l.Z,{})})})]}),(0,k.jsx)(j.ZP,{id:"simple-popper",open:this.state.popoverOpen,anchorEl:this.state.anchorEl,onClose:this.handleClose,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},children:this.renderChapterLinks()})]})}}]),n}(c.Component);t.default=L},42618:function(e,t,n){var r=n(64836);t.Z=void 0;var i=r(n(45649)),a=n(80184),s=(0,i.default)((0,a.jsx)("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"}),"CallMade");t.Z=s},3746:function(e,t,n){var r=n(64836);t.Z=void 0;var i=r(n(45649)),a=n(80184),s=(0,i.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=s}}]);
//# sourceMappingURL=3190.0bb7a6fc.chunk.js.map