"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[1674,4711,1960],{21960:function(n,e,t){t.r(e),t.d(e,{flattenChaptersTree:function(){return o},getStringArray:function(){return i},hasSubMenu:function(){return a},splitAndTrimOnCommas:function(){return c}});var r=t(93433),u=t(1413),c=function(n){return n.split(",").map((function(n){return n.trim()}))},i=function(n){return c(n).join(" ").split(" ")},a=function(n){return n.menu&&n.menu.length>0},o=function n(e){return e.reduce((function(e,t){if(t.header){var c=(0,u.Z)({},t);c.chapters=[],e=[].concat((0,r.Z)(e),[c])}return t.chapters&&t.chapters.length>0?[].concat((0,r.Z)(e),(0,r.Z)(n(t.chapters))):e}),[])}},54711:function(n,e,t){t.r(e),t.d(e,{getNormalizedMenuState:function(){return l}});var r=t(4942),u=t(1413),c=t(93433),i=t(72791),a=t(21960),o=function n(e){return e.reduce((function(e,t){return(0,a.hasSubMenu)(t)&&(e=[].concat((0,c.Z)(e),(0,c.Z)(n(t.menu)))),[].concat((0,c.Z)(e),[t.id])}),[])},l=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],f=e.reduce((function(e,f){return(f=(0,u.Z)((0,u.Z)({},f),{parentId:t,level:a,menuItemIds:[],allChildren:[],allParents:l,itemRef:i.createRef()})).menu&&f.menu.length>0&&(f.allChildren=[].concat((0,c.Z)(f.allChildren),(0,c.Z)(o(f.menu))),f.menuItemIds=[].concat((0,c.Z)(f.menuItemIds),(0,c.Z)(f.menu.map((function(n){return n.id})))),e=(0,u.Z)((0,u.Z)({},e),n(f.menu,f.id,a+1,[].concat((0,c.Z)(l),[f.id])))),(0,u.Z)((0,u.Z)({},e),(0,r.Z)({},f.id,f))}),{});return Object.values(f).forEach((function(n){delete n.menu})),f}}}]);
//# sourceMappingURL=1674.cf632f0b.chunk.js.map