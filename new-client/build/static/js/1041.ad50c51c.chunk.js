"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[1041],{31041:function(e,t,r){r.r(t);var n=r(1413),o=r(15671),i=r(43144),a=r(60136),s=r(29388),c=r(72791),u=r(76863),d=r(74567),l=r(4565),f=r(80184),v=(0,u.ZP)("div")((function(e){var t=e.theme;return{color:t.palette.error.contrastText,background:t.palette.error.main,marginTop:"15px",borderRadius:t.shape.borderRadius,padding:"5px"}})),p=(0,u.ZP)(l.Z)((function(e){return{color:e.theme.palette.text.primary}})),g=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(e){var i;return(0,o.Z)(this,r),(i=t.call(this,e)).state={comment:"",saveError:"",validationError:"",form:[],displayPlace:!1,activePage:0,direction:"right"},i.saveError=function(e){i.setState({saveError:e||"Fel - din kommentar gick inte att spara."})},i.abort=function(){i.props.onClose()},i.state=(0,n.Z)((0,n.Z)({},i.state),{},{form:e.form}),e.model.observer.subscribe("abort",(function(){i.abort()})),e.model.observer.subscribe("reset",(function(){i.setState({activePage:-1},(function(){i.setState({activePage:0})}))})),i}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){this.props.model.serviceConfig||this.setState({configurationError:!0})}},{key:"renderSaveError",value:function(){return this.state.saveError?(0,f.jsx)(v,{children:this.state.saveError}):null}},{key:"render",value:function(){var e=this,t=this.state,r=t.activePage,n=t.direction,o=this.props,i=o.form,a=o.serviceConfig;return this.state.configurationError?(0,f.jsx)(p,{children:"N\xf6dv\xe4ndig konfiguration saknas. Verktyget kan inte anv\xe4ndas f\xf6r tillf\xe4llet."}):i.sort((function(e,t){return e.order===t.order?0:e.order>t.order?1:-1})).map((function(t,o){return r===t.order&&(0,f.jsx)(d.default,{serviceConfig:a,model:e.props.model,active:r===t.order,numPages:i.length,page:t,direction:n,options:e.props.options,onNextPage:function(){e.setState({activePage:r+1,direction:"left"})},onPrevPage:function(){e.setState({activePage:r-1,direction:"right"})}},o)}))}}]),r}(c.Component);t.default=g}}]);
//# sourceMappingURL=1041.ad50c51c.chunk.js.map