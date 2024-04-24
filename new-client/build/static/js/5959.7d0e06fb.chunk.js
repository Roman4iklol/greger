"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[5959,5931,4769],{5931:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(15671),a=r(43144),i=r(97326),l=r(60136),s=r(29388),u=r(66274),o=r(99359),c=r(75742),d=r(75004),p=(0,o.Z)("container"),f=(0,o.Z)("divider"),v=(0,o.Z)("range"),Z=(0,o.Z)("addEvents"),h=(0,o.Z)("getPosition"),g=(0,o.Z)("prerenderLeft"),m=(0,o.Z)("prerenderRight"),y=(0,o.Z)("postrender"),b=(0,o.Z)("unsetLayers"),x=function(e){(0,l.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;(0,n.Z)(this,r);var a=document.createElement("div"),l=document.createElement("div");l.className="ol-side-by-side-divider";var s=document.createElement("input");return s.type="range",s.min=0,s.max=1,s.step="any",s.value=.5,s.className="ol-side-by-side-range",e=t.call(this,{element:a}),Object.defineProperty((0,i.Z)(e),y,{value:C}),Object.defineProperty((0,i.Z)(e),h,{value:L}),Object.defineProperty((0,i.Z)(e),Z,{value:j}),Object.defineProperty((0,i.Z)(e),p,{writable:!0,value:null}),Object.defineProperty((0,i.Z)(e),f,{writable:!0,value:null}),Object.defineProperty((0,i.Z)(e),v,{writable:!0,value:null}),Object.defineProperty((0,i.Z)(e),g,{writable:!0,value:function(t){var r=t.context,n=e.getMap().getSize(),a=(0,u.Z)((0,i.Z)(e),h)[h](),l=(0,d.getRenderPixel)(t,[0,0]),s=(0,d.getRenderPixel)(t,[a,0]),o=(0,d.getRenderPixel)(t,[a,n[1]]),c=(0,d.getRenderPixel)(t,[0,n[1]]);r.save(),r.beginPath(),r.moveTo(l[0],l[1]),r.lineTo(s[0],s[1]),r.lineTo(o[0],o[1]),r.lineTo(c[0],c[1]),r.closePath(),r.clip()}}),Object.defineProperty((0,i.Z)(e),m,{writable:!0,value:function(t){var r=t.context,n=e.getMap().getSize(),a=(0,u.Z)((0,i.Z)(e),h)[h](),l=(0,d.getRenderPixel)(t,[a,0]),s=(0,d.getRenderPixel)(t,[n[0],0]),o=(0,d.getRenderPixel)(t,n),c=(0,d.getRenderPixel)(t,[a,n[1]]);r.save(),r.beginPath(),r.moveTo(l[0],l[1]),r.lineTo(s[0],s[1]),r.lineTo(o[0],o[1]),r.lineTo(c[0],c[1]),r.closePath(),r.clip()}}),Object.defineProperty((0,i.Z)(e),b,{writable:!0,value:function(){e.getMap().getLayers().getArray().filter((function(e){return!0===e.get("isLeftCompareLayer")||!0===e.get("isRightCompareLayer")})).forEach((function(t){t.set("visible",!1,!0),!0===t.get("isLeftCompareLayer")?(t.set("isLeftCompareLayer",!1),t.un("prerender",(0,u.Z)((0,i.Z)(e),g)[g])):(t.set("isRightCompareLayer",!1),t.un("prerender",(0,u.Z)((0,i.Z)(e),m)[m])),t.un("postrender",(0,u.Z)((0,i.Z)(e),y)[y])}))}}),(0,u.Z)((0,i.Z)(e),p)[p]=a,(0,u.Z)((0,i.Z)(e),f)[f]=l,(0,u.Z)((0,i.Z)(e),v)[v]=s,e}return(0,a.Z)(r,[{key:"updateClip",value:function(){(0,u.Z)(this,f)[f].style.left=(0,u.Z)(this,h)[h]()+"px",this.getMap().render()}},{key:"setCompareLayers",value:function(e,t){(0,u.Z)(this,b)[b](),e.set("visible",!0,!0),e.set("isLeftCompareLayer",!0),e.on("prerender",(0,u.Z)(this,g)[g]),e.on("postrender",(0,u.Z)(this,y)[y]),t.set("visible",!0,!0),t.set("isRightCompareLayer",!0),t.on("prerender",(0,u.Z)(this,m)[m]),t.on("postrender",(0,u.Z)(this,y)[y])}},{key:"remove",value:function(){(0,u.Z)(this,b)[b]();try{(0,u.Z)(this,p)[p].removeChild((0,u.Z)(this,f)[f]),(0,u.Z)(this,p)[p].removeChild((0,u.Z)(this,v)[v])}catch(e){}}},{key:"open",value:function(){(0,u.Z)(this,p)[p].appendChild((0,u.Z)(this,f)[f]),(0,u.Z)(this,p)[p].appendChild((0,u.Z)(this,v)[v]),(0,u.Z)(this,Z)[Z]()}}]),r}(c.Z);function j(){var e=this;(0,u.Z)(this,v)[v].addEventListener("input",(function(){e.updateClip()}))}function L(){var e=(0,u.Z)(this,v)[v].value,t=42*(.5-e);return this.getMap().getSize()[0]*Number(e)+t}function C(e){e.context.restore()}},55959:function(e,t,r){r.r(t);var n=r(29439),a=r(72791),i=r(61091),l=r(94162),s=r(8771),u=r(44646),o=r(19737),c=r(98246),d=r(24769),p=r(5931),f=r(80184);t.default=function(e){var t=(0,a.useState)(""),r=(0,n.Z)(t,2),v=r[0],Z=r[1],h=(0,a.useState)(""),g=(0,n.Z)(h,2),m=g[0],y=g[1],b=(0,a.useState)([]),x=(0,n.Z)(b,2),j=x[0],L=x[1],C=(0,a.useState)([]),P=(0,n.Z)(C,2),k=P[0],R=P[1],T=(0,a.useRef)(),w=(0,a.useRef)(),O=(0,c.Ds)(),S=O.closeSnackbar,V=O.enqueueSnackbar,E=a.useRef(null);(0,a.useEffect)((function(){var t=e.map.getAllLayers(),r=t.filter((function(e){return"base"===e.get("layerType")})).map((function(e){return{id:e.ol_uid,label:e.get("caption")}}));if(e.options.showNonBaseLayersInSelect){var n=t.filter((function(e){return["layer","group"].includes(e.get("layerType"))})).map((function(e){return{id:e.ol_uid,label:e.get("caption")}}));L(n)}R(r)}),[e.map,e.options.showNonBaseLayersInSelect]),(0,a.useEffect)((function(){T.current=new p.default,e.map.addControl(T.current)}),[e.map]),(0,a.useEffect)((function(){e.app.globalObserver.on("core.drawerToggled",(function(){T.current.updateClip()}))}),[e.app.globalObserver]),(0,a.useEffect)((function(){if(""===v||""===m){var t;null===(t=w.current)||void 0===t||t.setVisible(!0),T.current.remove(),S(E.current)}else{var r,n=e.map.getAllLayers().find((function(e){return e.ol_uid===v})),a=e.map.getAllLayers().find((function(e){return e.ol_uid===m}));w.current=e.map.getAllLayers().find((function(e){return!0===e.getVisible()&&"base"===e.get("layerType")})),null===(r=w.current)||void 0===r||r.setVisible(!1),T.current.open(),T.current.setCompareLayers(n,a),S(E.current),E.current=V("Avsluta j\xe4mf\xf6ringsl\xe4get genom att trycka p\xe5 knappen",{variant:"default",persist:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"},action:function(e){return(0,f.jsx)(i.Z,{variant:"contained",color:"error",onClick:function(){z(),S(e)},children:"Sluta j\xe4mf\xf6ra"})}})}}),[v,m,e.map,S,V]);var z=function(){var e;T.current.remove(),null===(e=w.current)||void 0===e||e.setVisible(!0),Z(""),y("")};return(0,f.jsx)(u.default,{options:e.options,map:e.map,app:e.app,type:"LayerComparer",defaults:{icon:(0,f.jsx)(o.Z,{}),title:"Lagerj\xe4mf\xf6rare",description:"J\xe4mf\xf6r lager sida vid sida",headerText:"J\xe4mf\xf6r lager sida vid sida",buttonText:"J\xe4mf\xf6r",primaryButtonVariant:"contained",abortText:"Nollst\xe4ll & st\xe4ng",onAbort:z},children:(0,f.jsxs)(l.Z,{spacing:2,children:[(0,f.jsxs)(s.Z,{icon:(0,f.jsx)(o.Z,{}),variant:"info",children:["V\xe4lj tv\xe5 lager att j\xe4mf\xf6ra och tryck p\xe5 ",(0,f.jsx)("i",{children:"J\xe4mf\xf6r"}),"."]}),(0,f.jsx)(d.default,{setter:Z,value:v,counterValue:m,baseLayers:k,layers:j,label:"V\xe4nster sida"}),(0,f.jsx)(d.default,{setter:y,value:m,counterValue:v,baseLayers:k,layers:j,label:"H\xf6ger sida"})]})})}},24769:function(e,t,r){r.r(t);r(72791);var n=r(50228),a=r(81898),i=r(40508),l=r(63381),s=r(35702),u=r(63360),o=r(80184);t.default=function(e){var t=e.setter,r=e.value,c=e.counterValue,d=e.baseLayers,p=e.layers,f=e.label;return(0,o.jsx)(n.Z,{sx:{minWidth:120},children:(0,o.jsxs)(a.Z,{fullWidth:!0,children:[(0,o.jsx)(i.Z,{id:"layer-1-label",children:f}),(0,o.jsxs)(l.Z,{labelId:"layer-1-label",id:"layer-1-select",label:"Lager 1",value:r,onChange:function(e){return function(e,t){e(t)}(t,e.target.value)},children:[(0,o.jsx)(s.Z,{value:"",children:"Inget lager valt"}),d.length>0&&p.length>0&&(0,o.jsx)(u.Z,{children:"Bakgrundslager"}),d.map((function(e,t){return(0,o.jsx)(s.Z,{value:e.id,disabled:e.id===c,children:e.label},t)})),d.length>0&&p.length>0&&(0,o.jsx)(u.Z,{children:"Lager"}),p.map((function(e,t){return(0,o.jsx)(s.Z,{value:e.id,children:e.label},t)}))]})]})})}},19737:function(e,t,r){var n=r(64836);t.Z=void 0;var a=n(r(45649)),i=r(80184),l=(0,a.default)((0,i.jsx)("path",{d:"M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"Compare");t.Z=l}}]);
//# sourceMappingURL=5959.7d0e06fb.chunk.js.map