"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[8355],{48355:function(e,t,n){n.r(t);var u=n(29439),l=n(72791),r=n(54164),a=n(49392),o=n(80184);t.default=function(e){var t=e.drawModel,n=e.localObserver,c=l.useState(null),s=(0,u.Z)(c,2),d=s[0],f=s[1],b=l.useCallback((function(e){"Text"===e.get("DRAW_METHOD")&&f(e)}),[]),i=l.useCallback((function(e){0===e.length?t.removeFeature(d):(d.set("USER_TEXT",e),t.refreshFeaturesTextStyle()),f(null)}),[t,d]),k=l.useCallback((function(){t.removeFeature(d),f(null)}),[t,d]);return l.useEffect((function(){return n.subscribe("drawModel.featureAdded",b),function(){n.unsubscribe("drawModel.featureAdded")}}),[t,n,b]),null!==d?(0,r.createPortal)((0,o.jsx)(a.default,{options:{text:"",prompt:!0,headerText:"Ange text",buttonText:"Ok",abortText:"Avbryt"},open:null!==d,onClose:i,onAbort:k}),document.getElementById("map")):null}}}]);
//# sourceMappingURL=8355.bd065c3f.chunk.js.map