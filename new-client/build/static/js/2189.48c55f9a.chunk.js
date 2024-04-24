"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[2189],{15717:function(e,t,n){n.r(t);var r=n(93433),i=n(1413),o=n(15671),l=n(43144),u=n(60136),c=n(29388),s=n(72791),a=n(45629),d=n(47327),p=n(80184),h=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return(e=t.call.apply(t,[this].concat(u))).getMenuItemType=function(t,n){return(0,p.jsx)(d.default,(0,i.Z)((0,i.Z)({},e.props),{},{type:n,menu:t.menu,icon:t.icon,id:t.id,level:t.level,color:t.color,title:t.title,itemRef:t.itemRef,subMenuItems:e.getSubMenuItems(t),expanded:t.expandedSubMenu,colored:t.colored,selected:t.selected,chosenForPrint:t.chosenForPrint,handleTogglePrint:e.props.handleTogglePrint}))},e.getSubMenuItems=function(t){return t.menuItemIds.reduce((function(t,n){var i=Object.values(e.props.documentMenu).find((function(e){return e.id===n}));return i.menuItemIds.length>0&&(t=[].concat((0,r.Z)(t),(0,r.Z)(e.getSubMenuItems(i)))),[].concat((0,r.Z)(t),[i])}),[])},e.renderMenuItem=function(t,n){return t.menuItemIds&&t.menuItemIds.length>0?e.getMenuItemType(t,"submenu"):t.document?e.getMenuItemType(t,"document"):t.link?e.getMenuItemType(t,"link"):t.maplink?e.getMenuItemType(t,"maplink"):void 0},e}return(0,l.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.documentMenu,r=t.level;return(0,p.jsx)(a.Z,{sx:{width:"100%"},disablePadding:!0,children:Object.values(n).filter((function(e){return e.level===r})).map((function(t){return(0,p.jsx)(s.Fragment,{children:e.renderMenuItem(t,t.id)},t.id)}))})}}]),n}(s.Component);t.default=h},47327:function(e,t,n){n.r(t);var r=n(1413),i=n(15671),o=n(43144),l=n(97326),u=n(60136),c=n(29388),s=n(66274),a=n(99359),d=n(72791),p=n(76863),h=n(95573),m=n(9933),f=n(65514),g=n(35110),Z=n(4346),b=n(45473),v=n(74244),I=n(22885),M=n(81131),j=n(15717),x=n(80184),y=(0,p.ZP)(f.Z)((function(e){return{minWidth:e.theme.spacing(3)}})),P=(0,p.ZP)(f.Z)((function(e){return{".MuiListItemIcon-root":{minWidth:e.theme.spacing(4)}}})),k=(0,p.ZP)(g.ZP)((function(e){var t=e.theme;return{overflowWrap:"break-word",".MuiListItem-root":{borderLeft:"".concat(t.spacing(1)," solid ").concat(t.palette.background.paper),"&.Mui-selected":{borderLeftColor:t.palette.action.selected},"&.Mui-selected:hover":{borderLeftColor:t.palette.action.selected},"&:hover":{borderColor:t.palette.action.hover}}}})),w=(0,a.Z)("getListTitle"),C=(0,a.Z)("getCollapseIcon"),T=(0,a.Z)("hasSubMenu"),L=(0,a.Z)("handleMenuButtonClick"),O=(0,a.Z)("getMenuItemStyle"),R=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),Object.defineProperty((0,l.Z)(e),w,{writable:!0,value:function(){var t=e.props.title;return(0,x.jsx)(Z.Z,{children:t})}}),Object.defineProperty((0,l.Z)(e),C,{writable:!0,value:function(){var t=e.props,n=t.title;return t.expanded?(0,x.jsxs)(P,{children:[!n&&(0,x.jsx)("span",{style:h.Z,children:"Minimera submeny"}),(0,x.jsx)(I.Z,{})]}):(0,x.jsxs)(P,{children:[!n&&(0,x.jsx)("span",{style:h.Z,children:"Maximera submeny"}),(0,x.jsx)(M.Z,{})]})}}),Object.defineProperty((0,l.Z)(e),T,{writable:!0,value:function(){var t=e.props.subMenuItems;return t&&t.length>0}}),Object.defineProperty((0,l.Z)(e),L,{writable:!0,value:function(t,n){e.props.localObserver.publish("print-".concat(t,"-clicked"),n)}}),Object.defineProperty((0,l.Z)(e),O,{writable:!0,value:function(){var t=e.props,n=t.theme,r=t.level,i=t.color,o=t.colored,u=(0,s.Z)((0,l.Z)(e),T)[T]();return o?{paddingLeft:n.spacing(1+3*r),borderLeft:"".concat(n.spacing(.5)," solid ").concat(i),paddingRight:u?0:n.spacing(1)}:{paddingLeft:n.spacing(1+3*r),paddingRight:u?0:n.spacing(1)}}}),e}return(0,o.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.type,i=t.selected,o=t.subMenuItems,l=t.expanded,u=t.level,c=t.title,a=t.id,d=t.chosenForPrint,p=(0,s.Z)(this,T)[T]();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(k,{divider:!0,selected:i,button:!0,ref:this.props.itemRef,size:"small",disableGutters:!0,"aria-controls":p?"submenu_".concat(a):null,"aria-expanded":l,onClick:function(){(0,s.Z)(e,L)[L](n,a)},sx:(0,s.Z)(this,O)[O](),children:[(0,x.jsx)(y,{children:(0,x.jsx)(b.Z,{color:"primary",checked:d,onChange:function(t){e.props.handleTogglePrint(e.props.id)},onClick:function(e){return e.stopPropagation()},edge:"start",tabIndex:-1,disableRipple:!0})}),c&&(0,s.Z)(this,w)[w](),p&&(0,s.Z)(this,C)[C]()]}),p&&(0,x.jsx)(v.Z,{id:"submenu_".concat(a),in:l,timeout:200,children:(0,x.jsx)(j.default,(0,r.Z)((0,r.Z)({},this.props),{},{level:u+1,documentMenu:o,handleTogglePrint:this.props.handleTogglePrint}))})]})}}]),n}(d.PureComponent);t.default=(0,m.b)(R)}}]);
//# sourceMappingURL=2189.48c55f9a.chunk.js.map