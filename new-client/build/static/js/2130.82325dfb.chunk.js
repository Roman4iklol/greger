"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[2130],{72130:function(e,t,r){r.r(t);var i=r(4942),a=r(15671),n=r(43144),l=r(60136),s=r(29388),u=r(72791),o=r(76863),p=r(63381),h=r(35702),f=r(40508),c=r(81898),d=r(43595),m=r(61091),y=r(4565),Z=r(34951),g=r(25806),j=r(80184),v=(0,o.ZP)(c.Z)((function(e){return{margin:e.theme.spacing(1),minWidth:120}})),C=(0,o.ZP)(y.Z)((function(e){e.theme;return{fontWeight:500}})),b=function(e){(0,l.Z)(r,e);var t=(0,s.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).loadFeatureInfo=function(){var e=n.props.layer.getProperties(),t=e.url,r=e.featureType;(0,g.hfetch)(t+"?service=WFS&request=describeFeatureType&outputFormat=application/json&typename=".concat(r)).then((function(e){e.json().then((function(e){var t=e.featureTypes.find((function(e){return e.typeName===r}));if(t&&Array.isArray(t.properties)){var i=t.properties.filter((function(e){return"gml:Geometry"!==e.type})).map((function(e){return e.name}));n.setState({layerProperties:i})}}))}))},n.handleChange=function(e){n.setState((0,i.Z)({},e.target.name,e.target.value))},n.setFilter=function(e){n.props.layer.set("filterAttribute",n.state.filterAttribute),n.props.layer.set("filterComparer",n.state.filterComparer),n.props.layer.set("filterValue",n.state.filterValue),n.props.layer.getSource().refresh()},n.resetFilter=function(e){n.setState({filterAttribute:"",filterValue:"",filterComparer:""}),n.props.layer.set("filterAttribute",""),n.props.layer.set("filterComparer",""),n.props.layer.set("filterValue",""),n.props.layer.getSource().refresh()},n.state={filterAttribute:e.layer.get("filterAttribute")||"",filterValue:e.layer.get("filterValue")||"",filterComparer:e.layer.get("filterComparer")||"",layerProperties:[]},n.loadFeatureInfo(),n}return(0,n.Z)(r,[{key:"render",value:function(){return this.props.layer instanceof Z.Z?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(C,{variant:"subtitle2",children:"Filtrera inneh\xe5ll baserat p\xe5 attribut"}),(0,j.jsxs)(v,{children:[(0,j.jsx)(f.Z,{htmlFor:"attribute",children:"Attribut"}),(0,j.jsx)(p.Z,{value:this.state.filterAttribute,onChange:this.handleChange,inputProps:{name:"filterAttribute",id:"attribute"},children:this.state.layerProperties.map((function(e,t){return(0,j.jsx)(h.Z,{value:e,children:e},t)}))})]}),(0,j.jsxs)(v,{children:[(0,j.jsx)(f.Z,{htmlFor:"comparer",children:"J\xe4mf\xf6rare"}),(0,j.jsxs)(p.Z,{value:this.state.filterComparer,onChange:this.handleChange,inputProps:{name:"filterComparer",id:"comparer"},children:[(0,j.jsx)(h.Z,{value:"gt",children:"St\xf6rre \xe4n"}),(0,j.jsx)(h.Z,{value:"lt",children:"Mindre \xe4n"}),(0,j.jsx)(h.Z,{value:"eq",children:"Lika med"}),(0,j.jsx)(h.Z,{value:"not",children:"Skilt fr\xe5n"})]})]}),(0,j.jsx)(v,{children:(0,j.jsx)(d.Z,{value:this.state.filterValue,onChange:this.handleChange,placeholder:"Filterv\xe4rde",inputProps:{name:"filterValue","aria-label":"V\xe4rde"}})}),(0,j.jsx)(m.Z,{variant:"contained",color:"primary",onClick:this.setFilter,children:"Aktivera"}),(0,j.jsx)(m.Z,{onClick:this.resetFilter,children:"\xc5terst\xe4ll"})]}):null}}]),r}(u.PureComponent);t.default=b}}]);
//# sourceMappingURL=2130.82325dfb.chunk.js.map