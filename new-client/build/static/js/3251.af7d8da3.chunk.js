"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[3251],{86083:function(e,t,n){n.r(t);var r=n(93433),i=n(1413),l=n(15671),o=n(43144),c=n(97326),a=n(60136),s=n(29388),u=n(66274),d=n(99359),p=n(72791),Z=n(45629),f=n(75396),m=n(80184),h=(0,d.Z)("getSubMenuItems"),v=(0,d.Z)("renderMenuItem"),b=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,l.Z)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).getMenuItemType=function(t,n){return(0,m.jsx)(f.default,(0,i.Z)((0,i.Z)({},e.props),{},{type:n,menu:t.menu,icon:t.icon,id:t.id,level:t.level,color:t.color,title:t.title,itemRef:t.itemRef,subMenuItems:(0,u.Z)((0,c.Z)(e),h)[h](t),expanded:t.expandedSubMenu,colored:t.colored,selected:t.selected}))},Object.defineProperty((0,c.Z)(e),h,{writable:!0,value:function(t){return t.menuItemIds.reduce((function(t,n){var i=Object.values(e.props.items).find((function(e){return e.id===n}));return i.menuItemIds.length>0&&(t=[].concat((0,r.Z)(t),(0,r.Z)((0,u.Z)((0,c.Z)(e),h)[h](i)))),[].concat((0,r.Z)(t),[i])}),[])}}),Object.defineProperty((0,c.Z)(e),v,{writable:!0,value:function(t){return t.menuItemIds&&t.menuItemIds.length>0?e.getMenuItemType(t,"submenu"):t.document?e.getMenuItemType(t,"document"):t.link?e.getMenuItemType(t,"link"):t.maplink?e.getMenuItemType(t,"maplink"):void 0}}),e}return(0,o.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.items,r=t.level;return(0,m.jsx)(Z.Z,{style:{position:"static"},disablePadding:!0,id:"panellist_".concat(r),role:"navigation",component:"nav",children:Object.values(n).filter((function(e){return e.level===r})).map((function(t){return(0,m.jsx)(p.Fragment,{children:(0,u.Z)(e,v)[v](t,t.id)},t.id)}))})}}]),n}(p.PureComponent);t.default=b},75396:function(e,t,n){n.r(t);var r=n(1413),i=n(15671),l=n(43144),o=n(97326),c=n(60136),a=n(29388),s=n(66274),u=n(99359),d=n(72791),p=n(76863),Z=n(9933),f=n(20409),m=n(35110),h=n(74244),v=n(4346),b=n(65514),g=n(22885),j=n(86083),y=n(81131),x=n(95573),I=n(80184),M=(0,p.ZP)(b.Z)((function(e){return{minWidth:e.theme.spacing(3)}})),k=(0,p.ZP)(b.Z)((function(e){return{".MuiListItemIcon-root":{minWidth:e.theme.spacing(4)}}})),P=(0,p.ZP)(m.ZP)((function(e){var t=e.theme;return{overflowWrap:"break-word",".MuiListItem-root":{borderLeft:"".concat(t.spacing(1)," solid ").concat(t.palette.background.paper),"&.Mui-selected":{borderLeftColor:t.palette.action.selected},"&.Mui-selected:hover":{borderLeftColor:t.palette.action.selected},"&:hover":{borderColor:t.palette.action.hover}}}})),w=(0,u.Z)("getListTitle"),O=(0,u.Z)("getCollapseIcon"),C=(0,u.Z)("getListIcon"),L=(0,u.Z)("hasSubMenu"),T=(0,u.Z)("handleMenuButtonClick"),S=(0,u.Z)("getMenuItemStyle"),R=function(e){(0,c.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return e=t.call.apply(t,[this].concat(l)),Object.defineProperty((0,o.Z)(e),w,{writable:!0,value:function(){var t=e.props.title;return(0,I.jsx)(v.Z,{children:t})}}),Object.defineProperty((0,o.Z)(e),O,{writable:!0,value:function(){var t=e.props,n=t.title;return t.expanded?(0,I.jsxs)(k,{children:[!n&&(0,I.jsx)("span",{style:x.Z,children:"Minimera submeny"}),(0,I.jsx)(g.Z,{})]}):(0,I.jsxs)(k,{children:[!n&&(0,I.jsx)("span",{style:x.Z,children:"Maximera submeny"}),(0,I.jsx)(y.Z,{})]})}}),Object.defineProperty((0,o.Z)(e),C,{writable:!0,value:function(){var t=e.props,n=t.title,r=t.icon;return(0,I.jsxs)(M,{children:[!n&&(0,I.jsx)("span",{style:x.Z,children:r.descriptiveText}),(0,I.jsx)(f.Z,{style:{fontSize:r.fontSize},children:r.materialUiIconName})]})}}),Object.defineProperty((0,o.Z)(e),L,{writable:!0,value:function(){var t=e.props.subMenuItems;return t&&t.length>0}}),Object.defineProperty((0,o.Z)(e),T,{writable:!0,value:function(t,n){e.props.localObserver.publish("".concat(t,"-clicked"),n)}}),Object.defineProperty((0,o.Z)(e),S,{writable:!0,value:function(){var t=e.props,n=t.theme,r=t.level,i=t.color,l=t.colored,c=(0,s.Z)((0,o.Z)(e),L)[L]();return l?{paddingLeft:n.spacing(1+3*r),borderLeft:"".concat(n.spacing(1)," solid ").concat(i),paddingRight:c?0:n.spacing(1)}:{paddingLeft:n.spacing(1+3*r),paddingRight:c?0:n.spacing(1)}}}),e}return(0,l.Z)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.type,i=t.selected,l=t.subMenuItems,o=t.expanded,c=t.icon,a=t.level,u=t.title,d=t.id,p=(0,s.Z)(this,L)[L]();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(P,{divider:!0,selected:i,button:!0,ref:this.props.itemRef,size:"small",disableGutters:!0,"aria-controls":p?"submenu_".concat(d):null,"aria-expanded":o,onClick:function(){(0,s.Z)(e,T)[T](n,d)},sx:(0,s.Z)(this,S)[S](),children:[c?(0,s.Z)(this,C)[C]():null,u&&(0,s.Z)(this,w)[w](),p&&(0,s.Z)(this,O)[O]()]}),p&&(0,I.jsx)(h.Z,{id:"submenu_".concat(d),in:o,timeout:200,children:(0,I.jsx)(j.default,(0,r.Z)((0,r.Z)({},this.props),{},{level:a+1,items:l}))})]})}}]),n}(d.PureComponent);t.default=(0,Z.b)(R)}}]);
//# sourceMappingURL=3251.af7d8da3.chunk.js.map