"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[2171],{92171:function(e,a,n){n.r(a);var t=n(29439),r=n(72791),l=n(50228),i=n(45629),s=n(99806),c=n(59744),u=n(81872),o=n(65209),d=n(80184);a.default=function(e){var a=e.app,n=e.map,f=(0,r.useState)(new Set(["layer","group","base"])),x=(0,t.Z)(f,2),Z=x[0],g=x[1],h=(0,r.useCallback)((function(){return n.getAllLayers().filter((function(e){return void 0===e.getZIndex()&&e.setZIndex(-2),!0===e.getVisible()&&Array.from(Z).includes(e.get("layerType"))})).sort((function(e,a){return a.getZIndex()-e.getZIndex()}))}),[Z,n]);(0,r.useEffect)((function(){a.globalObserver.subscribe("core.layerVisibilityChanged",(function(e){m(h())}))}),[a.globalObserver,h]);var p=(0,r.useState)(h()),y=(0,t.Z)(p,2),j=y[0],m=y[1];(0,r.useEffect)((function(){m(h())}),[Z,h]);var b=function(e,a){var n,t=e.getZIndex()||0,r=null;if(a>0){if(0===(r=h().filter((function(a){return a.getZIndex()>=t&&e!==a}))).length)return;n=r.pop()}else{if(0===(r=h().filter((function(a){return a.getZIndex()<=t&&e!==a}))).length)return;n=r.shift()}r.forEach((function(e){return e.setZIndex(e.getZIndex()+a)})),e.setZIndex(n.getZIndex()+a),m(h())};return(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(c.default,{app:a,filterList:Z,setFilterList:g,map:n}),(0,d.jsx)(u.Z,{sx:{pt:2},children:(0,d.jsx)(o.Z,{label:j.length.toString()+" "+(1===j.length?"AKTIVT LAGER":"AKTIVA LAGER")})}),(0,d.jsx)(i.Z,{children:j.map((function(e){return(0,d.jsx)(s.default,{changeOrder:b,layer:e},e.ol_uid)}))})]})}},99806:function(e,a,n){n.r(a),n.d(a,{default:function(){return S}});var t=n(29439),r=n(1413),l=n(72791),i=n(75814),s=n(75618),c=n(20409),u=n(35110),o=n(19978),d=n(65514),f=n(4346),x=n(11601),Z=n(13811),g=n(69861),h=n(3395),p=n(53717),y=n(23714),j=n(50224),m=n(3746),b=n(20165),v=n(84503),k=n(80184);function L(e){return(0,k.jsx)(i.Z,{title:"Lagret \xe4r klickbart i kartan",children:(0,k.jsx)(s.Z,(0,r.Z)((0,r.Z)({},e),{},{viewBox:"0 0 109.21 122.88",children:(0,k.jsx)("path",{d:"M86,122.31a5.57,5.57,0,0,1-.9.35,5.09,5.09,0,0,1-1,.18,5.46,5.46,0,0,1-1,0,6.77,6.77,0,0,1-1-.15,6,6,0,0,1-1-.36l0,0a5.51,5.51,0,0,1-.92-.53l0,0a6.41,6.41,0,0,1-.78-.69,5.19,5.19,0,0,1-.65-.87l-9.08-14.88-7.69,9a15.49,15.49,0,0,1-1.1,1.18c-.39.37-.78.71-1.18,1l-.08.06a12.19,12.19,0,0,1-1.2.82,9.66,9.66,0,0,1-1.24.63,6.91,6.91,0,0,1-1,.37,6.21,6.21,0,0,1-1,.22,7.55,7.55,0,0,1-1.06.07,7.19,7.19,0,0,1-1-.11,6.14,6.14,0,0,1-1.18-.35,5.42,5.42,0,0,1-1.06-.57,6.22,6.22,0,0,1-.92-.78l0,0a7.31,7.31,0,0,1-.75-1l-.11-.2-.09-.21L47.72,112l0-.17L40.91,43.26a4.52,4.52,0,0,1,0-1.33,4.3,4.3,0,0,1,.43-1.25,4.31,4.31,0,0,1,1.39-1.55l0,0a3.82,3.82,0,0,1,.9-.46,4.25,4.25,0,0,1,1-.24h0a4.31,4.31,0,0,1,1.29.05,4.67,4.67,0,0,1,1.25.44l.3.16c13.51,8.84,26.1,17.06,38.64,25.25l19,12.39a11.72,11.72,0,0,1,1,.72l0,0a8.78,8.78,0,0,1,.82.73l.06.07a7.41,7.41,0,0,1,.71.82,5.91,5.91,0,0,1,.57.87,6.42,6.42,0,0,1,.51,1.14,5.6,5.6,0,0,1,.26,1.17,5.44,5.44,0,0,1,0,1.21h0a6.59,6.59,0,0,1-.23,1.19,6.54,6.54,0,0,1-.94,1.88,6.41,6.41,0,0,1-.67.83,7.45,7.45,0,0,1-.82.76,10.42,10.42,0,0,1-1.16.83,12.92,12.92,0,0,1-1.34.7c-.47.21-1,.41-1.46.58a14.27,14.27,0,0,1-1.55.43h0c-2.77.54-5.53,1.21-8.27,1.87l-3.25.77,9,14.94a5.84,5.84,0,0,1,.46,1,5.59,5.59,0,0,1,.15,3.21l0,.1a5.53,5.53,0,0,1-.33.94,6.43,6.43,0,0,1-.51.89,5.62,5.62,0,0,1-.68.81,6,6,0,0,1-.82.67l-2,1.29A83,83,0,0,1,86,122.31ZM37.63,19.46a4,4,0,0,1-6.92,4l-8-14a4,4,0,0,1,6.91-4l8.06,14Zm-15,46.77a4,4,0,0,1,4,6.91l-14,8.06a4,4,0,0,1-4-6.91l14-8.06ZM20.56,39.84a4,4,0,0,1-2.07,7.72L3,43.36A4,4,0,0,1,5,35.64l15.53,4.2ZM82,41.17a4,4,0,0,1-4-6.91L92,26.2a4,4,0,0,1,4,6.91L82,41.17ZM63.46,20.57a4,4,0,1,1-7.71-2.06L59.87,3A4,4,0,0,1,67.59,5L63.46,20.57Zm20.17,96.36,9.67-5.86c-3.38-5.62-8.85-13.55-11.51-19.17a2.17,2.17,0,0,1-.12-.36,2.4,2.4,0,0,1,1.81-2.87c5.38-1.23,10.88-2.39,16.22-3.73a10.28,10.28,0,0,0,1.8-.58,6.11,6.11,0,0,0,1.3-.77,3.38,3.38,0,0,0,.38-.38.9.9,0,0,0,.14-.24l-.06-.18a2.15,2.15,0,0,0-.44-.53,5.75,5.75,0,0,0-.83-.63L47.06,45.75c2.11,21.36,5.2,44.1,6.45,65.31a6.28,6.28,0,0,0,.18,1,2.89,2.89,0,0,0,.26.62l.13.14a1,1,0,0,0,.29,0,2.76,2.76,0,0,0,.51-.17,5.71,5.71,0,0,0,1.28-.79,11.22,11.22,0,0,0,1.35-1.33c1.93-2.27,9.6-12.14,11.4-13.18a2.4,2.4,0,0,1,3.28.82l11.44,18.75Z"})}))})}function I(e){return(0,k.jsx)(i.Z,{title:"Lagret \xe4r inte klickbart i kartan",children:(0,k.jsxs)(s.Z,(0,r.Z)((0,r.Z)({},e),{},{viewBox:"0 0 109.21 122.88",children:[(0,k.jsx)("path",{d:"m86,122.31a5.57,5.57 0 0 1 -0.9,0.35a5.09,5.09 0 0 1 -1,0.18a5.46,5.46 0 0 1 -1,0a6.77,6.77 0 0 1 -1,-0.15a6,6 0 0 1 -1,-0.36l0,0a5.51,5.51 0 0 1 -0.92,-0.53l0,0a6.41,6.41 0 0 1 -0.78,-0.69a5.19,5.19 0 0 1 -0.65,-0.87l-9.08,-14.88l-7.69,9a15.49,15.49 0 0 1 -1.1,1.18c-0.39,0.37 -0.78,0.71 -1.18,1l-0.08,0.06a12.19,12.19 0 0 1 -1.2,0.82a9.66,9.66 0 0 1 -1.24,0.63a6.91,6.91 0 0 1 -1,0.37a6.21,6.21 0 0 1 -1,0.22a7.55,7.55 0 0 1 -1.06,0.07a7.19,7.19 0 0 1 -1,-0.11a6.14,6.14 0 0 1 -1.18,-0.35a5.42,5.42 0 0 1 -1.06,-0.57a6.22,6.22 0 0 1 -0.92,-0.78l0,0a7.31,7.31 0 0 1 -0.75,-1l-0.11,-0.2l-0.09,-0.21l-1.29,-3.49l0,-0.17l-6.81,-68.57a4.52,4.52 0 0 1 0,-1.33a4.3,4.3 0 0 1 0.43,-1.25a4.31,4.31 0 0 1 1.39,-1.55l0,0a3.82,3.82 0 0 1 0.9,-0.46a4.25,4.25 0 0 1 1,-0.24l0,0a4.31,4.31 0 0 1 1.29,0.05a4.67,4.67 0 0 1 1.25,0.44l0.3,0.16c13.51,8.84 26.1,17.06 38.64,25.25l19,12.39a11.72,11.72 0 0 1 1,0.72l0,0a8.78,8.78 0 0 1 0.82,0.73l0.06,0.07a7.41,7.41 0 0 1 0.71,0.82a5.91,5.91 0 0 1 0.57,0.87a6.42,6.42 0 0 1 0.51,1.14a5.6,5.6 0 0 1 0.26,1.17a5.44,5.44 0 0 1 0,1.21l0,0a6.59,6.59 0 0 1 -0.23,1.19a6.54,6.54 0 0 1 -0.94,1.88a6.41,6.41 0 0 1 -0.67,0.83a7.45,7.45 0 0 1 -0.82,0.76a10.42,10.42 0 0 1 -1.16,0.83a12.92,12.92 0 0 1 -1.34,0.7c-0.47,0.21 -1,0.41 -1.46,0.58a14.27,14.27 0 0 1 -1.55,0.43l0,0c-2.77,0.54 -5.53,1.21 -8.27,1.87l-3.25,0.77l9,14.94a5.84,5.84 0 0 1 0.46,1a5.59,5.59 0 0 1 0.15,3.21l0,0.1a5.53,5.53 0 0 1 -0.33,0.94a6.43,6.43 0 0 1 -0.51,0.89a5.62,5.62 0 0 1 -0.68,0.81a6,6 0 0 1 -0.82,0.67l-2,1.29a83,83 0 0 1 -8.62,5.17zm-48.37,-102.85a4,4 0 0 1 -6.92,4l-8,-14a4,4 0 0 1 6.91,-4l8.06,14l-0.05,0zm-15,46.77a4,4 0 0 1 4,6.91l-14,8.06a4,4 0 0 1 -4,-6.91l14,-8.06zm-2.07,-26.39a4,4 0 0 1 -2.07,7.72l-15.49,-4.2a4,4 0 0 1 2,-7.72l15.53,4.2l0.03,0zm61.44,1.33a4,4 0 0 1 -4,-6.91l14,-8.06a4,4 0 0 1 4,6.91l-14,8.06zm-18.54,-20.6a4,4 0 1 1 -7.71,-2.06l4.12,-15.51a4,4 0 0 1 7.72,2l-4.13,15.57zm20.17,96.36l9.67,-5.86c-3.38,-5.62 -8.85,-13.55 -11.51,-19.17a2.17,2.17 0 0 1 -0.12,-0.36a2.4,2.4 0 0 1 1.81,-2.87c5.38,-1.23 10.88,-2.39 16.22,-3.73a10.28,10.28 0 0 0 1.8,-0.58a6.11,6.11 0 0 0 1.3,-0.77a3.38,3.38 0 0 0 0.38,-0.38a0.9,0.9 0 0 0 0.14,-0.24l-0.06,-0.18a2.15,2.15 0 0 0 -0.44,-0.53a5.75,5.75 0 0 0 -0.83,-0.63l-54.93,-35.88c2.11,21.36 5.2,44.1 6.45,65.31a6.28,6.28 0 0 0 0.18,1a2.89,2.89 0 0 0 0.26,0.62l0.13,0.14a1,1 0 0 0 0.29,0a2.76,2.76 0 0 0 0.51,-0.17a5.71,5.71 0 0 0 1.28,-0.79a11.22,11.22 0 0 0 1.35,-1.33c1.93,-2.27 9.6,-12.14 11.4,-13.18a2.4,2.4 0 0 1 3.28,0.82l11.44,18.75l0,0.01z"}),(0,k.jsx)("line",{stroke:"#000",strokeWidth:"7",y2:"3.7693",x2:"105.56343",y1:"118.83671",x1:"3.92054"})]}))})}function S(e){var a=e.changeOrder,n=e.layer,r=l.useState(n.get("opacity")),s=(0,t.Z)(r,2),S=s[0],A=s[1];(0,l.useEffect)((function(){n.set("opacity",S)}),[n,S]);return(0,k.jsx)(u.ZP,{disablePadding:!0,children:(0,k.jsxs)(o.Z,{sx:{opacity:S>0?1:.38},disableRipple:!0,disableTouchRipple:!0,children:[(0,k.jsx)(d.Z,{children:(0,k.jsx)(i.Z,{title:function(e){switch(e.get("layerType")){case"layer":return"Lager";case"group":return"Grupplager";case"base":return"Bakgrundslager";default:return"Systemlager"}}(n),children:function(e){var a,n=(null===(a=e.get("layerInfo"))||void 0===a?void 0:a.infoclickIcon)||e.get("infoclickIcon");if(void 0!==n)return(0,k.jsx)(c.Z,{children:n});switch(e.get("layerType")){case"layer":return(0,k.jsx)(j.Z,{});case"group":return(0,k.jsx)(p.Z,{});case"base":return(0,k.jsx)(v.Z,{});default:return(0,k.jsx)(y.Z,{})}}(n)})}),(0,k.jsx)(d.Z,{children:"system"!==n.get("layerType")&&(function(e){return!0===e.get("queryable")||void 0!==e.layersInfo&&-1!==Object.values(e.layersInfo).findIndex((function(e){return!0===e.queryable}))}(n)?(0,k.jsx)(L,{}):(0,k.jsx)(I,{}))}),(0,k.jsx)(f.Z,{primary:n.get("caption"),secondary:(0,k.jsx)(x.ZP,{"aria-label":"Layer opacity",value:S,onChange:function(e,a){A(a)},size:"small",min:0,max:1,step:.01})}),(0,k.jsx)(i.Z,{title:(S>0?"D\xf6lj ":"Visa ")+"lager",children:(0,k.jsx)(Z.Z,{onClick:function(){A(0===S?1:0)},children:S>0?(0,k.jsx)(b.Z,{}):(0,k.jsx)(m.Z,{})})}),(0,k.jsx)(Z.Z,{disabled:0===S,onClick:function(){return a(n,1)},children:(0,k.jsx)(g.Z,{})}),(0,k.jsx)(Z.Z,{disabled:0===S,onClick:function(){return a(n,-1)},children:(0,k.jsx)(h.Z,{})})]})})}},59744:function(e,a,n){n.r(a),n.d(a,{default:function(){return j}});var t=n(1413),r=n(29439),l=n(72791),i=n(98246),s=n(42468),c=n(61091),u=n(79964),o=n(35702),d=n(65514),f=n(4346),x=n(81872),Z=n(8014),g=n(23714),h=n(53329),p=n(85172),y=n(80184);function j(e){var a=e.app,n=e.filterList,j=e.setFilterList,m=e.map,b=(0,i.Ds)().enqueueSnackbar,v=l.useState(null),k=(0,r.Z)(v,2),L=k[0],I=k[1],S=Boolean(L),A=function(){I(null)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c.Z,{"aria-controls":S?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":S?"true":void 0,onClick:function(e){I(e.currentTarget)},endIcon:(0,y.jsx)(p.Z,{}),children:"Fler alternativ"}),(0,y.jsxs)(u.Z,{anchorEl:L,open:S,onClose:A,children:[(0,y.jsxs)(o.Z,{onClick:function(){!function(){var e,n=m.getAllLayers().filter((function(e){return!0===e.getVisible()&&"system"!==e.get("layerType")})).map((function(e){return{i:e.get("name"),z:e.getZIndex(),o:e.getOpacity()}})),r=Array.isArray(a.config.userSpecificMaps)&&(null===(e=a.config.userSpecificMaps.find((function(e){return e.mapConfigurationName===a.config.activeMap})))||void 0===e?void 0:e.mapConfigurationTitle),l=(0,t.Z)({savedAt:new Date,numberOfLayers:n.length},r&&{mapName:r}),i={layers:n,metadata:l},c=s.default.get("layerswitcher");s.default.set("layerswitcher",(0,t.Z)((0,t.Z)({},c),{},{savedLayers:i})),b("".concat(l.numberOfLayers," lager sparades utan problem"),{variant:"success"})}(),A()},children:[(0,y.jsx)(d.Z,{children:(0,y.jsx)(h.Z,{fontSize:"small"})}),(0,y.jsx)(f.Z,{children:"Spara aktiva lager"})]}),(0,y.jsxs)(o.Z,{onClick:function(){!function(){try{var e=s.default._experimentalGet("layerswitcher.savedLayers"),a=e.metadata,n=e.layers;m.getAllLayers().filter((function(e){return"system"!==e.get("layerType")})).forEach((function(e){var a=n.find((function(a){return a.i===e.get("name")}));a?(e.setZIndex(a.z),e.setOpacity(a.o),e.setVisible(!0)):e.setVisible(!1)})),b("".concat(a.numberOfLayers," lager \xe5terst\xe4lldes fr\xe5n tidigare session"),{variant:"success"})}catch(t){b("Innan du kan \xe5terst\xe4lla m\xe5ste du spara dina befintliga lager f\xf6rst.")}}(),A()},children:[(0,y.jsx)(d.Z,{children:(0,y.jsx)(Z.Z,{fontSize:"small"})}),(0,y.jsx)(f.Z,{children:"\xc5terst\xe4ll sparade lager"})]}),(0,y.jsx)(x.Z,{}),(0,y.jsxs)(o.Z,{onClick:function(){n.has("system")?(n.delete("system"),j(new Set(n))):(n.add("system"),j(new Set(n))),A()},children:[(0,y.jsx)(d.Z,{children:(0,y.jsx)(g.Z,{fontSize:"small"})}),(0,y.jsx)(f.Z,{children:"".concat(n.has("system")?"D\xf6lj":"Visa"," systemlager")})]})]})]})}}}]);
//# sourceMappingURL=2171.d916a2b3.chunk.js.map