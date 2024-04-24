"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[9716],{99716:function(t,e,i){i.r(e);var o=i(15671),n=i(43144),a=i(73803),r=i(62652),c=i(29409),s=i(34951),u=i(5426),l=i(29868),h=i(75004),g=i(35201),d=i(64665),p=i(5400),y=i(66233),v=i(90927),f=function(){function t(e){var i=this;(0,o.Z)(this,t),this.handleGeolocationChange=function(t){i.localObserver.publish("geolocationChange",{accuracy:t.target.getAccuracy(),altitude:t.target.getAltitude(),altitudeAccuracy:t.target.getAltitudeAccuracy(),heading:t.target.getHeading(),speed:t.target.getSpeed()})},this.handleGeolocationError=function(t){i.localObserver.publish("locationStatus","error"),i.localObserver.publish("geolocationError",t)},this.handleGeolocationChangeAccuracy=function(t){i.accuracyFeature.setGeometry(t.target.getAccuracyGeometry())},this.handleGeolocationChangePosition=function(t){var e=t.target.getPosition();if(i.positionFeature.setGeometry(e?new c.Z(e):null),i.localObserver.publish("locationStatus","on"),i.zoomToLocation){var o=i.map.getView().getMaxZoom(),n=i.map.getView().getMinZoom(),a=Math.ceil(.5*(o-n));i.map.getView().animate({duration:2500,center:e,zoom:a}),i.zoomToLocation=!1}},this.toggleTracking=function(t){i.localObserver.publish("locationStatus",t?"loading":"off"),i.geolocation.setTracking(t),!1===t?(i.layer.getSource().clear(),i.zoomToLocation=!0):(i.layer.getSource().addFeature(i.accuracyFeature),i.layer.getSource().addFeature(i.positionFeature),setInterval((function(){i.flash(i.positionFeature)}),3e3))},this.flash=function(t){var e=3e3,o=Date.now(),n=t.getGeometry().clone(),a=i.layer.on("postrender",(function(t){var r=t.frameState.time-o;if(r>=e)(0,g.B)(a);else{var c=(0,h.getVectorContext)(t),s=r/e,u=25*(0,l.Vv)(s)+5,v=(0,l.Vv)(1-s),f=new d.ZP({image:new p.Z({radius:u,stroke:new y.Z({color:"rgba(255, 0, 0, "+v+")",width:.25+v})})});c.setStyle(f),c.drawGeometry(n),i.map.render()}}))},this.map=e.map,this.localObserver=e.localObserver,this.zoomToLocation=!0,this.source=new u.Z({wrapX:!1}),this.layer=new s.Z({source:this.source,layerType:"system",zIndex:5e3,name:"pluginLocation",caption:"Location layer"}),this.map.addLayer(this.layer),this.accuracyFeature=new r.Z,this.positionFeature=new r.Z,this.positionFeature.setStyle(new d.ZP({image:new p.Z({radius:6,fill:new v.Z({color:"#3399CC"}),stroke:new y.Z({color:"#fff",width:2})})})),this.geolocation=new a.Z({trackingOptions:{enableHighAccuracy:!0},projection:this.map.getView().getProjection()}),this.geolocation.on("change",this.handleGeolocationChange),this.geolocation.on("error",this.handleGeolocationError),this.geolocation.on("change:accuracyGeometry",this.handleGeolocationChangeAccuracy),this.geolocation.on("change:position",this.handleGeolocationChangePosition)}return(0,n.Z)(t,[{key:"enable",value:function(){this.toggleTracking(!0)}},{key:"disable",value:function(){this.toggleTracking(!1)}}]),t}();e.default=f},73803:function(t,e,i){var o=i(11752),n=i(61120),a=i(43144),r=i(15671),c=i(60136),s=i(29388),u=i(25326),l=i(45957),h=i(5947),g=i(56957),d=i(42708),p=i(22357),y="accuracy",v="accuracyGeometry",f="altitude",k="altitudeAccuracy",m="heading",w="position",Z="projection",_="speed",T="tracking",b="trackingOptions",C=function(t){(0,c.Z)(i,t);var e=(0,s.Z)(i);function i(t){var o;return(0,r.Z)(this,i),(o=e.call(this,h.Z.ERROR)).code=t.code,o.message=t.message,o}return(0,a.Z)(i)}(u.ZP),A=function(t){(0,c.Z)(i,t);var e=(0,s.Z)(i);function i(t){var o;return(0,r.Z)(this,i),(o=e.call(this)).on,o.once,o.un,t=t||{},o.position_=null,o.transform_=d.gD,o.watchId_=void 0,o.addChangeListener(Z,o.handleProjectionChanged_),o.addChangeListener(T,o.handleTrackingChanged_),void 0!==t.projection&&o.setProjection(t.projection),void 0!==t.trackingOptions&&o.setTrackingOptions(t.trackingOptions),o.setTracking(void 0!==t.tracking&&t.tracking),o}return(0,a.Z)(i,[{key:"disposeInternal",value:function(){this.setTracking(!1),(0,o.Z)((0,n.Z)(i.prototype),"disposeInternal",this).call(this)}},{key:"handleProjectionChanged_",value:function(){var t=this.getProjection();t&&(this.transform_=(0,d.WO)((0,d.U2)("EPSG:4326"),t),this.position_&&this.set(w,this.transform_(this.position_)))}},{key:"handleTrackingChanged_",value:function(){if("geolocation"in navigator){var t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}}},{key:"positionChange_",value:function(t){var e=t.coords;this.set(y,e.accuracy),this.set(f,null===e.altitude?void 0:e.altitude),this.set(k,null===e.altitudeAccuracy?void 0:e.altitudeAccuracy),this.set(m,null===e.heading?void 0:(0,p.Yr)(e.heading)),this.position_?(this.position_[0]=e.longitude,this.position_[1]=e.latitude):this.position_=[e.longitude,e.latitude];var i=this.transform_(this.position_);this.set(w,i),this.set(_,null===e.speed?void 0:e.speed);var o=(0,g.iu)(this.position_,e.accuracy);o.applyTransform(this.transform_),this.set(v,o),this.changed()}},{key:"positionError_",value:function(t){this.dispatchEvent(new C(t))}},{key:"getAccuracy",value:function(){return this.get(y)}},{key:"getAccuracyGeometry",value:function(){return this.get(v)||null}},{key:"getAltitude",value:function(){return this.get(f)}},{key:"getAltitudeAccuracy",value:function(){return this.get(k)}},{key:"getHeading",value:function(){return this.get(m)}},{key:"getPosition",value:function(){return this.get(w)}},{key:"getProjection",value:function(){return this.get(Z)}},{key:"getSpeed",value:function(){return this.get(_)}},{key:"getTracking",value:function(){return this.get(T)}},{key:"getTrackingOptions",value:function(){return this.get(b)}},{key:"setProjection",value:function(t){this.set(Z,(0,d.U2)(t))}},{key:"setTracking",value:function(t){this.set(T,t)}},{key:"setTrackingOptions",value:function(t){this.set(b,t)}}]),i}(l.Z);e.Z=A}}]);
//# sourceMappingURL=9716.8f0d8226.chunk.js.map