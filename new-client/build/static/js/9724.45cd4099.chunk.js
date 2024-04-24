"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[9724],{24673:function(t,e,i){var r=i(11752),a=i(61120),n=i(43144),s=i(15671),o=i(60136),l=i(29388),u=i(68789),h=i(25326),c=i(53803),d=i(55736),v=i(96661),_=i(2177),f="translatestart",p="translating",g="translateend",y=function(t){(0,o.Z)(i,t);var e=(0,l.Z)(i);function i(t,r,a,n,o){var l;return(0,s.Z)(this,i),(l=e.call(this,t)).features=r,l.coordinate=a,l.startCoordinate=n,l.mapBrowserEvent=o,l}return(0,n.Z)(i)}(h.ZP),m=function(t){(0,o.Z)(i,t);var e=(0,l.Z)(i);function i(t){var r,a;if((0,s.Z)(this,i),t=t||{},(r=e.call(this,t)).on,r.once,r.un,r.lastCoordinate_=null,r.startCoordinate_=null,r.features_=void 0!==t.features?t.features:null,t.layers&&!r.features_)if("function"===typeof t.layers)a=t.layers;else{var n=t.layers;a=function(t){return n.includes(t)}}else a=v.uX;return r.layerFilter_=a,r.filter_=t.filter&&!r.features_?t.filter:v.uX,r.hitTolerance_=t.hitTolerance?t.hitTolerance:0,r.condition_=t.condition?t.condition:_.Bx,r.lastFeature_=null,r.addChangeListener(c.Z.ACTIVE,r.handleActiveChanged_),r}return(0,n.Z)(i,[{key:"handleDownEvent",value:function(t){if(!t.originalEvent||!this.condition_(t))return!1;if(this.lastFeature_=this.featuresAtPixel_(t.pixel,t.map),!this.lastCoordinate_&&this.lastFeature_){this.startCoordinate_=t.coordinate,this.lastCoordinate_=t.coordinate,this.handleMoveEvent(t);var e=this.features_||new u.Z([this.lastFeature_]);return this.dispatchEvent(new y(f,e,t.coordinate,this.startCoordinate_,t)),!0}return!1}},{key:"handleUpEvent",value:function(t){if(this.lastCoordinate_){this.lastCoordinate_=null,this.handleMoveEvent(t);var e=this.features_||new u.Z([this.lastFeature_]);return this.dispatchEvent(new y(g,e,t.coordinate,this.startCoordinate_,t)),this.startCoordinate_=null,!0}return!1}},{key:"handleDragEvent",value:function(t){if(this.lastCoordinate_){var e=t.coordinate,i=e[0]-this.lastCoordinate_[0],r=e[1]-this.lastCoordinate_[1],a=this.features_||new u.Z([this.lastFeature_]);a.forEach((function(t){var e=t.getGeometry();e.translate(i,r),t.setGeometry(e)})),this.lastCoordinate_=e,this.dispatchEvent(new y(p,a,e,this.startCoordinate_,t))}}},{key:"handleMoveEvent",value:function(t){var e=t.map.getViewport();this.featuresAtPixel_(t.pixel,t.map)?(e.classList.remove(this.lastCoordinate_?"ol-grab":"ol-grabbing"),e.classList.add(this.lastCoordinate_?"ol-grabbing":"ol-grab")):e.classList.remove("ol-grab","ol-grabbing")}},{key:"featuresAtPixel_",value:function(t,e){return e.forEachFeatureAtPixel(t,function(t,e){if(this.filter_(t,e)&&(!this.features_||this.features_.getArray().includes(t)))return t}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_})}},{key:"getHitTolerance",value:function(){return this.hitTolerance_}},{key:"setHitTolerance",value:function(t){this.hitTolerance_=t}},{key:"setMap",value:function(t){var e=this.getMap();(0,r.Z)((0,a.Z)(i.prototype),"setMap",this).call(this,t),this.updateState_(e)}},{key:"handleActiveChanged_",value:function(){this.updateState_(null)}},{key:"updateState_",value:function(t){var e=this.getMap(),i=this.getActive();e&&i||(e=e||t)&&e.getViewport().classList.remove("ol-grab","ol-grabbing")}}]),i}(d.Z);e.Z=m},81019:function(t,e,i){var r=i(15671),a=i(43144),n=i(60136),s=i(29388),o=i(66842),l=i(10561),u=i(37130),h=i(22357),c=i(14046),d=i(43122),v=function(t){(0,n.Z)(i,t);var e=(0,s.Z)(i);function i(t){var a;return(0,r.Z)(this,i),t=t||{},(a=e.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,interpolate:t.interpolate,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition,zDirection:t.zDirection})).params_=t.params||{},a.hidpi_=void 0===t.hidpi||t.hidpi,a.tmpExtent_=(0,u.createEmpty)(),a.setKey(a.getKeyForParams_()),a}return(0,a.Z)(i,[{key:"getKeyForParams_",value:function(){var t=0,e=[];for(var i in this.params_)e[t++]=i+"-"+this.params_[i];return e.join("/")}},{key:"getParams",value:function(){return this.params_}},{key:"getRequestUrl_",value:function(t,e,i,r,a,n){var s=this.urls;if(s){var o,u=a.getCode().split(/:(?=\d+$)/).pop();if(n.SIZE=e[0]+","+e[1],n.BBOX=i.join(","),n.BBOXSR=u,n.IMAGESR=u,n.DPI=Math.round(n.DPI?n.DPI*r:90*r),1==s.length)o=s[0];else o=s[(0,h.$W)((0,d.vp)(t),s.length)];var c=o.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return(0,l.B)(c,n)}}},{key:"getTilePixelRatio",value:function(t){return this.hidpi_?t:1}},{key:"updateParams",value:function(t){Object.assign(this.params_,t),this.setKey(this.getKeyForParams_())}},{key:"tileUrlFunction",value:function(t,e,i){var r=this.getTileGrid();if(r||(r=this.getTileGridForProjection(i)),!(r.getResolutions().length<=t[0])){1==e||this.hidpi_||(e=1);var a=r.getTileCoordExtent(t,this.tmpExtent_),n=(0,c.Pq)(r.getTileSize(t[0]),this.tmpSize);1!=e&&(n=(0,c.bA)(n,e,this.tmpSize));var s={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};return Object.assign(s,this.params_),this.getRequestUrl_(t,n,a,e,i,s)}}}]),i}(o.Z);e.Z=v}}]);
//# sourceMappingURL=9724.45cd4099.chunk.js.map