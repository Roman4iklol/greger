"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[6567],{36567:function(r,n,e){e.r(n);var a=e(15671),t=e(43144),o=e(60136),i=e(29388),s=e(72791),l=e(54164),c=e(98246),u=e(60788),d=e(91888),f=e(40464),b=e(8440),v=e(39571),m=e(77248),p=e(61091),h=e(80184),g=function(r){(0,o.Z)(e,r);var n=(0,i.Z)(e);function e(){return(0,a.Z)(this,e),n.apply(this,arguments)}return(0,t.Z)(e,[{key:"render",value:function(){var r=this.props,n=r.cancelPrint,e=r.open,a=r.saveAsType;return(0,l.createPortal)((0,h.jsxs)(u.Z,{disableEscapeKeyDown:!0,open:e,children:[(0,h.jsx)(d.Z,{}),(0,h.jsxs)(f.Z,{children:["Din ","".concat(a)," skapas"]}),(0,h.jsx)(b.Z,{children:(0,h.jsxs)(v.Z,{children:["Det h\xe4r kan ta en stund, speciellt om du har valt ett stort format (A2-A3) och h\xf6g uppl\xf6sning (>72 dpi). Men n\xe4r allt \xe4r klart kommer"," ","".concat(a),"-filen att laddas ner till din dator.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"Om du inte vill v\xe4nta l\xe4ngre kan du avbryta utskriften genom att trycka p\xe5 knappen nedan."]})}),(0,h.jsx)(m.Z,{children:(0,h.jsx)(p.Z,{variant:"contained",onClick:n,children:"Avbryt"})})]}),document.getElementById("root"))}}]),e}(s.PureComponent);n.default=(0,c.RM)(g)},91888:function(r,n,e){e.d(n,{Z:function(){return O}});var a=e(30168),t=e(63366),o=e(87462),i=e(72791),s=e(28182),l=e(94419),c=e(52554),u=e(12065),d=e(49853),f=e(74142),b=e(76863),v=e(67254),m=e(21217);function p(r){return(0,m.Z)("MuiLinearProgress",r)}(0,e(75878).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var h,g,Z,y,k,w,C,x,P,S,j,B,I=e(80184),M=["className","color","value","valueBuffer","variant"],q=(0,c.F4)(C||(C=h||(h=(0,a.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),L=(0,c.F4)(x||(x=g||(g=(0,a.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),D=(0,c.F4)(P||(P=Z||(Z=(0,a.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),R=function(r,n){return"inherit"===n?"currentColor":r.vars?r.vars.palette.LinearProgress["".concat(n,"Bg")]:"light"===r.palette.mode?(0,u.$n)(r.palette[n].main,.62):(0,u._j)(r.palette[n].main,.5)},N=(0,b.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(r,n){var e=r.ownerState;return[n.root,n["color".concat((0,d.Z)(e.color))],n[e.variant]]}})((function(r){var n=r.ownerState,e=r.theme;return(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:R(e,n.color)},"inherit"===n.color&&"buffer"!==n.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===n.variant&&{backgroundColor:"transparent"},"query"===n.variant&&{transform:"rotate(180deg)"})})),z=(0,b.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(r,n){var e=r.ownerState;return[n.dashed,n["dashedColor".concat((0,d.Z)(e.color))]]}})((function(r){var n=r.ownerState,e=r.theme,a=R(e,n.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===n.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.iv)(S||(S=y||(y=(0,a.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),D)),A=(0,b.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(r,n){var e=r.ownerState;return[n.bar,n["barColor".concat((0,d.Z)(e.color))],("indeterminate"===e.variant||"query"===e.variant)&&n.bar1Indeterminate,"determinate"===e.variant&&n.bar1Determinate,"buffer"===e.variant&&n.bar1Buffer]}})((function(r){var n=r.ownerState,e=r.theme;return(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===n.color?"currentColor":(e.vars||e).palette[n.color].main},"determinate"===n.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===n.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(r){var n=r.ownerState;return("indeterminate"===n.variant||"query"===n.variant)&&(0,c.iv)(j||(j=k||(k=(0,a.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),q)})),F=(0,b.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(r,n){var e=r.ownerState;return[n.bar,n["barColor".concat((0,d.Z)(e.color))],("indeterminate"===e.variant||"query"===e.variant)&&n.bar2Indeterminate,"buffer"===e.variant&&n.bar2Buffer]}})((function(r){var n=r.ownerState,e=r.theme;return(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==n.variant&&{backgroundColor:"inherit"===n.color?"currentColor":(e.vars||e).palette[n.color].main},"inherit"===n.color&&{opacity:.3},"buffer"===n.variant&&{backgroundColor:R(e,n.color),transition:"transform .".concat(4,"s linear")})}),(function(r){var n=r.ownerState;return("indeterminate"===n.variant||"query"===n.variant)&&(0,c.iv)(B||(B=w||(w=(0,a.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),L)})),O=i.forwardRef((function(r,n){var e=(0,v.Z)({props:r,name:"MuiLinearProgress"}),a=e.className,i=e.color,c=void 0===i?"primary":i,u=e.value,b=e.valueBuffer,m=e.variant,h=void 0===m?"indeterminate":m,g=(0,t.Z)(e,M),Z=(0,o.Z)({},e,{color:c,variant:h}),y=function(r){var n=r.classes,e=r.variant,a=r.color,t={root:["root","color".concat((0,d.Z)(a)),e],dashed:["dashed","dashedColor".concat((0,d.Z)(a))],bar1:["bar","barColor".concat((0,d.Z)(a)),("indeterminate"===e||"query"===e)&&"bar1Indeterminate","determinate"===e&&"bar1Determinate","buffer"===e&&"bar1Buffer"],bar2:["bar","buffer"!==e&&"barColor".concat((0,d.Z)(a)),"buffer"===e&&"color".concat((0,d.Z)(a)),("indeterminate"===e||"query"===e)&&"bar2Indeterminate","buffer"===e&&"bar2Buffer"]};return(0,l.Z)(t,p,n)}(Z),k=(0,f.Z)(),w={},C={bar1:{},bar2:{}};if("determinate"===h||"buffer"===h)if(void 0!==u){w["aria-valuenow"]=Math.round(u),w["aria-valuemin"]=0,w["aria-valuemax"]=100;var x=u-100;"rtl"===k.direction&&(x=-x),C.bar1.transform="translateX(".concat(x,"%)")}else 0;if("buffer"===h)if(void 0!==b){var P=(b||0)-100;"rtl"===k.direction&&(P=-P),C.bar2.transform="translateX(".concat(P,"%)")}else 0;return(0,I.jsxs)(N,(0,o.Z)({className:(0,s.default)(y.root,a),ownerState:Z,role:"progressbar"},w,{ref:n},g,{children:["buffer"===h?(0,I.jsx)(z,{className:y.dashed,ownerState:Z}):null,(0,I.jsx)(A,{className:y.bar1,ownerState:Z,style:C.bar1}),"determinate"===h?null:(0,I.jsx)(F,{className:y.bar2,ownerState:Z,style:C.bar2})]}))}))}}]);
//# sourceMappingURL=6567.c9954b35.chunk.js.map