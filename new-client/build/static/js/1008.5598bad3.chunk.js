"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[1008],{71008:function(e,t,r){r.r(t);var a=r(15671),n=r(43144),i=r(60136),o=r(29388),s=r(72791),l=r(76863),c=r(98246),u=r(81898),d=r(56650),h=r(43595),v=r(61091),m=r(45953),f=r(91888),p=r(40508),g=r(63818),b=r(3395),Z=r(11814),x=r(37130),w=r(80184),P=(0,l.ZP)(u.Z)((function(e){return{marginBottom:e.theme.spacing(2)}})),j=(0,l.ZP)(d.Z)((function(e){return{opacity:1,transition:"opacity 2s ease-in",marginBottom:e.theme.spacing(2)}})),S=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).setFormat=function(e){n.setState({selectFormat:e.target.value})},n.setResolution=function(e){n.setState({selectResolution:e.target.value})},n.setScale=function(e){n.setState({selectScale:e.target.value})},n.setCenter=function(e){n.setState({center:e})},n.setManualScale=function(e){var t=e.target.value.startsWith("1:")?e.target.value.split(":")[1]:e.target.value;n.setState({manualScale:t})},n.setOrientation=function(e){n.setState({selectOrientation:e.target.value})},n.exportPDF=function(e){n.setState({url:!1,loading:!0});var t={size:n.getPaperMeasures(),format:n.getFormat(),orientation:n.getOrientation(),scale:n.getScale(),resolution:n.getResolution()};n.props.model.exportPDF(t,(function(e){var t={loading:!1};".pdf"===e.trimEnd().substr(-4)?t.url=e:n.props.enqueueSnackbar("Utskriften kunde inte skapas. Prova med l\xe4gre uppl\xf6sning, mindre omr\xe5de eller f\xe4rre lager i kartan.",{variant:"error"}),n.setState(t)}))},n.resolutions=[72,96,150,200,300],n.paperFormats=["A2","A3","A4"],n.state={selectFormat:"A4",selectOrientation:"S",selectScale:e.model.scales[Math.floor(e.model.scales.length/2)],manualScale:"10000",selectResolution:"72",center:e.model.getPreviewFeature()?e.model.getPreviewCenter():e.model.map.getView().getCenter(),loading:!1,previewLayerVisible:!1},e.localObserver.subscribe("showPreviewLayer",(function(){n.setState({previewLayerVisible:!0}),n.addPreview(e.model.map)})),e.localObserver.subscribe("hidePreviewLayer",(function(){n.setState({previewLayerVisible:!1}),n.removePreview()})),n}return(0,n.Z)(r,[{key:"getPaperMeasures",value:function(){var e=this,t=function(t){switch(t){case"A4":return{width:"L"===e.getOrientation()?297:210,height:"L"===e.getOrientation()?210:297};case"A3":return{width:"L"===e.getOrientation()?420:297,height:"L"===e.getOrientation()?297:420};case"A2":return{width:"L"===e.getOrientation()?594:420,height:"L"===e.getOrientation()?420:594};default:return{width:0,height:0}}};return{width:t(this.getFormat()).width/25.4,height:t(this.getFormat()).height/25.4}}},{key:"getPreviewPaperMeasures",value:function(){var e=this.getPaperMeasures(),t=25.4/.28;return{width:e.width*t,height:e.height*t}}},{key:"getScale",value:function(){return"other"===this.state.selectScale?Number.isNaN(Number(this.state.manualScale))?0:this.state.manualScale:this.state.selectScale}},{key:"getResolution",value:function(){return this.state.selectResolution}},{key:"getOrientation",value:function(){return this.state.selectOrientation}},{key:"getFormat",value:function(){return this.state.selectFormat}},{key:"removePreview",value:function(){this.props.model.removePreview()}},{key:"addPreview",value:function(e){var t=this.getScale(),r=this.getPreviewPaperMeasures(),a=this.props.model.getPreviewFeature()?(0,x.getCenter)(this.props.model.getPreviewFeature().getGeometry().getExtent()):e.getView().getCenter();this.props.model.addPreview(t,r,a);var n=void 0;switch(t){case"250":case"500":n=6;break;case"1000":n=5;break;case"2500":n=4;break;case"5000":n=3;break;case"10000":n=2;break;case"25000":case"50000":n=1;break;case"100000":case"250000":n=0;break;default:n=e.getView().getZoom()}this.props.model.autoScale&&n<e.getView().getZoom()&&e.getView().setZoom(n)}},{key:"render",value:function(){var e=this,t=this.props.model.scales.map((function(e,t){return(0,w.jsxs)("option",{value:e,children:["1:",e]},t)})),r=this.resolutions.map((function(t,r){return"A2"===e.state.selectFormat?300!==t?(0,w.jsx)("option",{value:t,children:t},r):(0,w.jsx)("option",{value:t,disabled:!0,children:t},r):(0,w.jsx)("option",{value:t,children:t},r)})),a=this.paperFormats.map((function(t,r){return"300"===e.state.selectResolution?"A2"!==t?(0,w.jsx)("option",{value:t,children:t},r):(0,w.jsx)("option",{value:t,disabled:!0,children:t},r):(0,w.jsx)("option",{value:t,children:t},r)}));return!0===this.state.previewLayerVisible?this.addPreview(this.props.model.map):this.removePreview(),(0,w.jsxs)(m.ZP,{container:!0,children:[this.state.loading&&(0,w.jsx)(m.ZP,{item:!0,xs:12,children:(0,w.jsx)(j,{children:(0,w.jsx)(f.Z,{})})}),(0,w.jsx)(m.ZP,{item:!0,xs:12,children:(0,w.jsxs)(P,{fullWidth:!0,children:[(0,w.jsx)(p.Z,{variant:"standard",htmlFor:"paper-size-native-helper",children:"Pappersstorlek"}),(0,w.jsx)(g.Z,{onChange:this.setFormat,value:this.state.selectFormat,input:(0,w.jsx)(h.Z,{name:"format",id:"paper-size-native-helper"}),children:a})]})}),(0,w.jsx)(m.ZP,{item:!0,xs:12,children:(0,w.jsxs)(P,{fullWidth:!0,children:[(0,w.jsx)(p.Z,{variant:"standard",htmlFor:"orientation-native-helper",children:"Orientering"}),(0,w.jsxs)(g.Z,{onChange:this.setOrientation,value:this.state.selectOrientation,input:(0,w.jsx)(h.Z,{name:"orientation",id:"orientation-native-helper"}),children:[(0,w.jsx)("option",{value:"P",children:"st\xe5ende"}),(0,w.jsx)("option",{value:"L",children:"liggande"})]})]})}),(0,w.jsx)(m.ZP,{item:!0,xs:12,children:(0,w.jsxs)(P,{fullWidth:!0,children:[(0,w.jsx)(p.Z,{variant:"standard",htmlFor:"scale-native-helper",children:"Skala"}),(0,w.jsxs)(g.Z,{onChange:this.setScale,value:this.state.selectScale,input:(0,w.jsx)(h.Z,{name:"scale",id:"scale-native-helper"}),children:[t,(0,w.jsx)("option",{value:"other",children:"Annan skala"},"other")]})]})}),"other"===this.state.selectScale&&(0,w.jsx)(m.ZP,{item:!0,xs:12,children:(0,w.jsx)(P,{fullWidth:!0,children:(0,w.jsx)(h.Z,{type:"text",onChange:this.setManualScale,value:this.state.manualScale})})}),(0,w.jsx)(m.ZP,{item:!0,xs:12,children:(0,w.jsxs)(P,{fullWidth:!0,children:[(0,w.jsx)(p.Z,{variant:"standard",htmlFor:"resolution-native-helper",children:"Uppl\xf6sning"}),(0,w.jsx)(g.Z,{value:this.state.selectResolution,onChange:this.setResolution,input:(0,w.jsx)(h.Z,{name:"resolution",id:"resolution-native-helper"}),children:r})]})}),(0,w.jsx)(P,{fullWidth:!0,children:(0,w.jsxs)(v.Z,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.exportPDF,children:[(0,w.jsx)(Z.Z,{sx:{marginRight:1}})," Skapa PDF"]})}),this.state.url&&(0,w.jsx)(P,{fullWidth:!0,children:(0,w.jsxs)(v.Z,{variant:"contained",fullWidth:!0,target:"_blank",href:this.state.url,children:[(0,w.jsx)(b.Z,{sx:{marginRight:1}})," Ladda ner"]})})]})}}]),r}(s.PureComponent);t.default=(0,c.RM)(S)},3395:function(e,t,r){var a=r(64836);t.Z=void 0;var n=a(r(45649)),i=r(80184),o=(0,n.default)((0,i.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.Z=o},11814:function(e,t,r){var a=r(64836);t.Z=void 0;var n=a(r(45649)),i=r(80184),o=(0,n.default)((0,i.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}),"PictureAsPdf");t.Z=o},91888:function(e,t,r){r.d(t,{Z:function(){return H}});var a=r(30168),n=r(63366),i=r(87462),o=r(72791),s=r(28182),l=r(94419),c=r(52554),u=r(12065),d=r(49853),h=r(74142),v=r(76863),m=r(67254),f=r(21217);function p(e){return(0,f.Z)("MuiLinearProgress",e)}(0,r(75878).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g,b,Z,x,w,P,j,S,k,y,C,F,L=r(80184),M=["className","color","value","valueBuffer","variant"],O=(0,c.F4)(j||(j=g||(g=(0,a.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),R=(0,c.F4)(S||(S=b||(b=(0,a.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),z=(0,c.F4)(k||(k=Z||(Z=(0,a.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),N=function(e,t){return"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(t,"Bg")]:"light"===e.palette.mode?(0,u.$n)(e.palette[t].main,.62):(0,u._j)(e.palette[t].main,.5)},V=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat((0,d.Z)(r.color))],t[r.variant]]}})((function(e){var t=e.ownerState,r=e.theme;return(0,i.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:N(r,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),A=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var r=e.ownerState;return[t.dashed,t["dashedColor".concat((0,d.Z)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme,a=N(r,t.color);return(0,i.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.iv)(y||(y=x||(x=(0,a.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),z)),B=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat((0,d.Z)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&(0,c.iv)(C||(C=w||(w=(0,a.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),O)})),I=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat((0,d.Z)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:N(r,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&(0,c.iv)(F||(F=P||(P=(0,a.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),R)})),H=o.forwardRef((function(e,t){var r=(0,m.Z)({props:e,name:"MuiLinearProgress"}),a=r.className,o=r.color,c=void 0===o?"primary":o,u=r.value,v=r.valueBuffer,f=r.variant,g=void 0===f?"indeterminate":f,b=(0,n.Z)(r,M),Z=(0,i.Z)({},r,{color:c,variant:g}),x=function(e){var t=e.classes,r=e.variant,a=e.color,n={root:["root","color".concat((0,d.Z)(a)),r],dashed:["dashed","dashedColor".concat((0,d.Z)(a))],bar1:["bar","barColor".concat((0,d.Z)(a)),("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&"barColor".concat((0,d.Z)(a)),"buffer"===r&&"color".concat((0,d.Z)(a)),("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,l.Z)(n,p,t)}(Z),w=(0,h.Z)(),P={},j={bar1:{},bar2:{}};if("determinate"===g||"buffer"===g)if(void 0!==u){P["aria-valuenow"]=Math.round(u),P["aria-valuemin"]=0,P["aria-valuemax"]=100;var S=u-100;"rtl"===w.direction&&(S=-S),j.bar1.transform="translateX(".concat(S,"%)")}else 0;if("buffer"===g)if(void 0!==v){var k=(v||0)-100;"rtl"===w.direction&&(k=-k),j.bar2.transform="translateX(".concat(k,"%)")}else 0;return(0,L.jsxs)(V,(0,i.Z)({className:(0,s.default)(x.root,a),ownerState:Z,role:"progressbar"},P,{ref:t},b,{children:["buffer"===g?(0,L.jsx)(A,{className:x.dashed,ownerState:Z}):null,(0,L.jsx)(B,{className:x.bar1,ownerState:Z,style:j.bar1}),"determinate"===g?null:(0,L.jsx)(I,{className:x.bar2,ownerState:Z,style:j.bar2})]}))}))},63818:function(e,t,r){var a=r(87462),n=r(63366),i=r(72791),o=r(28182),s=r(94419),l=r(94045),c=r(50040),u=r(90529),d=r(99305),h=r(43595),v=r(67254),m=r(5294),f=r(80184),p=["className","children","classes","IconComponent","input","inputProps","variant"],g=["root"],b=(0,f.jsx)(h.Z,{}),Z=i.forwardRef((function(e,t){var r=(0,v.Z)({name:"MuiNativeSelect",props:e}),h=r.className,Z=r.children,x=r.classes,w=void 0===x?{}:x,P=r.IconComponent,j=void 0===P?d.Z:P,S=r.input,k=void 0===S?b:S,y=r.inputProps,C=(0,n.Z)(r,p),F=(0,u.Z)(),L=(0,c.Z)({props:r,muiFormControl:F,states:["variant"]}),M=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},m.f,t)}((0,a.Z)({},r,{classes:w})),O=(0,n.Z)(w,g);return(0,f.jsx)(i.Fragment,{children:i.cloneElement(k,(0,a.Z)({inputComponent:l.ZP,inputProps:(0,a.Z)({children:Z,classes:O,IconComponent:j,variant:L.variant,type:void 0},y,k?k.props.inputProps:{}),ref:t},C,{className:(0,o.default)(M.root,k.props.className,h)}))})}));Z.muiName="Select",t.Z=Z}}]);
//# sourceMappingURL=1008.5598bad3.chunk.js.map