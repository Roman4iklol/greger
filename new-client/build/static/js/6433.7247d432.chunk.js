"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[6433],{36433:function(e,t,n){n.r(t);var a=n(15671),i=n(43144),r=n(60136),o=n(29388),s=n(72791),l=n(76863),p=n(98246),c=n(50228),u=n(4565),d=n(80184),h=(0,l.ZP)("div")((function(){return{flex:1,position:"absolute !important",top:"42px",bottom:0,left:0,right:0}})),f=(0,l.ZP)("div")((function(e){return{color:e.theme.palette.common.white,position:"absolute",zIndex:1,top:"42px",left:0,background:"rgba(0, 0, 0, 0.7)",padding:"0px 3px",lineHeight:1.4,fontSize:"10px"}})),m=function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(e){var i;return(0,a.Z)(this,n),(i=t.call(this,e)).state={},i.model=i.props.model,i.app=i.props.app,i.localObserver=i.props.localObserver,i}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.localObserver.subscribe("changeImageDate",(function(t){e.setState({imageDate:t})}))}},{key:"componentWillUnmount",value:function(){this.props.model.deactivate()}},{key:"renderInfoText",value:function(){if(!this.props.displayPanorama)return(0,d.jsxs)(u.Z,{children:["Klicka i kartan f\xf6r att aktivera street view. ",(0,d.jsx)("br",{}),"F\xf6rstora f\xf6nstret genom att trycka p\xe5 symbolen i \xf6vre h\xf6gra h\xf6rnet."]})}},{key:"render",value:function(){return(0,d.jsxs)("div",{children:[this.renderInfoText(),(0,d.jsxs)(c.Z,{sx:{display:this.props.displayPanorama?"flex":"none"},children:[(0,d.jsx)(h,{id:"street-view-window"}),(0,d.jsx)(f,{id:"image-date",children:this.state.imageDate?this.state.imageDate:""})]})]})}}]),n}(s.PureComponent);t.default=(0,p.RM)(m)}}]);
//# sourceMappingURL=6433.7247d432.chunk.js.map