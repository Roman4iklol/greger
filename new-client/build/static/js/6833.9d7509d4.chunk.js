"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[6833,6968,6263,7279,1762,1468],{86968:function(e,t,a){a.r(t);a(72791);var n=a(76863),r=a(34257),l=a(50228),i=a(45953),o=a(4565),d=a(75814),s=a(56650),c=a(11601),h=a(43671),u=a(13609),k=a(91267),p=a(91762),m=a(7279),g=a(80184),f=(0,n.ZP)(h.Z)((function(){return{minHeight:35,"&.MuiAccordionSummary-root.Mui-expanded":{minHeight:35},"& .MuiAccordionSummary-content":{transition:"inherit !important",marginTop:0,marginBottom:0,"&.Mui-expanded":{marginTop:0,marginBottom:0}}}})),x=function(e){var t=e.color;return(0,g.jsx)(l.Z,{style:{height:"1.1rem",width:"1.1rem",backgroundColor:t,borderRadius:"10%",marginLeft:4,border:"#ffffff"===t.toLowerCase()?"1px solid black":null}})},y=function(e){var t=e.opacity,a=e.handleOpacityChange;return(0,g.jsx)(i.ZP,{item:!0,xs:12,children:(0,g.jsxs)(s.Z,{style:{padding:8,marginTop:8},children:[(0,g.jsx)(o.Z,{variant:"caption",children:"Opacitet: ".concat(Math.floor(100*t),"%")}),(0,g.jsx)(c.ZP,{size:"small",min:0,max:1,value:t,step:.01,onChange:a,valueLabelFormat:function(e){return"".concat(Math.floor(100*e),"%")},valueLabelDisplay:"auto"})]})})},j=function(e){var t=e.strokeWidth,a=e.handleStrokeWidthChange;return(0,g.jsx)(i.ZP,{item:!0,xs:12,children:(0,g.jsxs)(s.Z,{style:{padding:8,marginTop:8},children:[(0,g.jsx)(o.Z,{variant:"caption",children:"Linjebredd: ".concat(t,"px")}),(0,g.jsx)(c.ZP,{size:"small",min:1,max:5,value:t,step:.5,onChange:a,valueLabelFormat:function(e){return"".concat(e)},valueLabelDisplay:"auto"})]})})},v=function(e){var t,a="string"===typeof e.color?e.color:e.drawModel.getRGBAString(e.color);return(0,g.jsxs)(i.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,g.jsx)(o.Z,{variant:"button",children:e.title}),(0,g.jsxs)(i.ZP,{container:!0,item:!0,xs:4,justifyContent:"flex-end",alignItems:"center",children:[e.showOpacitySlider&&(0,g.jsx)(o.Z,{variant:"caption",children:"".concat("string"===typeof e.color?100:Math.floor(100*(null===(t=e.color)||void 0===t?void 0:t.a)||100),"%")}),"number"===typeof e.strokeWidth&&(0,g.jsx)(o.Z,{variant:"caption",children:"".concat(e.strokeWidth,"px")}),(0,g.jsx)(x,{color:a})]})]})};t.default=function(e){var t;return(0,g.jsxs)(u.Z,{size:"small",style:{marginBottom:8},children:[(0,g.jsx)(d.Z,{disableInteractive:!0,title:"Klicka h\xe4r f\xf6r att \xe4ndra ".concat(e.title.toLowerCase(),"."),children:(0,g.jsx)(f,{children:(0,g.jsx)(v,{title:e.title,color:e.color,showOpacitySlider:e.showOpacitySlider,strokeWidth:e.strokeWidth,drawModel:e.drawModel})})}),(0,g.jsx)(k.Z,{style:{maxWidth:"100%"},children:(0,g.jsxs)(i.ZP,{container:!0,children:[(0,g.jsx)(i.ZP,{item:!0,xs:12,children:(0,g.jsx)(r.e8,{colors:p.DRAW_COLORS,triangle:"hide",onChange:e.handleColorChange,styles:{default:{card:{maxWidth:"100%",background:"unset"}}},color:e.color})}),e.showOpacitySlider&&(0,g.jsx)(y,{handleOpacityChange:e.handleOpacityChange,opacity:isNaN(null===(t=e.color)||void 0===t?void 0:t.a)?1:e.color.a}),e.showStrokeWidthSlider&&(0,g.jsx)(j,{handleStrokeWidthChange:e.handleStrokeWidthChange,strokeWidth:e.strokeWidth}),e.showStrokeTypeSelector&&(0,g.jsx)(i.ZP,{item:!0,xs:12,style:{marginTop:8},children:(0,g.jsx)(m.default,{handleStrokeTypeChange:e.handleStrokeTypeChange,strokeType:e.strokeType})})]})})]})}},36833:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(1413),r=(a(72791),a(45953)),l=a(4565),i=a(59911),o=a(91762),d=a(86968),s=a(7279),c=a(80184);function h(e){var t=function(t){var a=t.target.value,r=o.STROKE_DASHES.get(a);e.setDrawStyle((0,n.Z)((0,n.Z)({},e.drawStyle),{},{strokeType:a,lineDash:r}))},a=function(t){e.setTextStyle((0,n.Z)((0,n.Z)({},e.textStyle),{},{size:parseInt(t.target.value)}))},h=function(t){e.setDrawStyle((0,n.Z)((0,n.Z)({},e.drawStyle),{},{strokeColor:t.rgb}))},u=function(t){e.setDrawStyle((0,n.Z)((0,n.Z)({},e.drawStyle),{},{fillColor:(0,n.Z)((0,n.Z)({},t.rgb),{},{a:e.drawStyle.fillColor.a})}))},k=function(t,a){e.setDrawStyle((0,n.Z)((0,n.Z)({},e.drawStyle),{},{fillColor:(0,n.Z)((0,n.Z)({},e.drawStyle.fillColor),{},{a:a})}))},p=function(t,a){e.setDrawStyle((0,n.Z)((0,n.Z)({},e.drawStyle),{},{strokeWidth:a}))},m=function(t){e.setTextStyle((0,n.Z)((0,n.Z)({},e.textStyle),{},{foregroundColor:t.hex}))},g=function(t){e.setTextStyle((0,n.Z)((0,n.Z)({},e.textStyle),{},{backgroundColor:t.hex}))};return(0,c.jsxs)(r.ZP,{container:!0,children:["LineString"===e.activeDrawType&&(0,c.jsxs)(r.ZP,{item:!0,xs:12,style:{marginTop:16},children:[(0,c.jsx)(r.ZP,{item:!0,xs:12,style:{marginBottom:4},children:(0,c.jsx)(l.Z,{align:"center",children:"Variant"})}),(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsx)(s.default,{handleStrokeTypeChange:t,strokeType:e.drawStyle.strokeType,includeContainer:!1})})]}),"Text"===e.activeDrawType&&(0,c.jsxs)(r.ZP,{item:!0,xs:12,style:{marginTop:16},children:[(0,c.jsx)(r.ZP,{item:!0,xs:12,style:{marginBottom:4},children:(0,c.jsx)(l.Z,{align:"center",children:"Textstorlek"})}),(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsx)(i.Z,{variant:"outlined",type:"number",size:"small",fullWidth:!0,value:e.textStyle.size,onChange:a})})]}),"Circle"===e.activeDrawType&&(e.isEdit?null:(0,c.jsxs)(r.ZP,{item:!0,xs:12,style:{marginTop:16},children:[(0,c.jsx)(r.ZP,{item:!0,xs:12,style:{marginBottom:4},children:(0,c.jsx)(l.Z,{align:"center",children:"Radie (m)"})}),(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsx)(i.Z,{variant:"outlined",type:"number",size:"small",fullWidth:!0,defaultValue:e.drawModel.getCircleRadius(),onChange:function(t){e.drawModel.setCircleRadius(t.target.value)}})})]})),(0,c.jsxs)(r.ZP,{item:!0,xs:12,style:{marginTop:16},children:[(0,c.jsx)(r.ZP,{item:!0,xs:12,style:{marginBottom:4},children:(0,c.jsx)(l.Z,{align:"center",children:"Utseende"})}),(0,c.jsx)(r.ZP,{item:!0,xs:12,children:function(){switch(e.activeDrawType){case"Arrow":return(0,c.jsx)(d.default,{title:"F\xe4rg",color:e.drawStyle.strokeColor,handleColorChange:h,drawModel:e.drawModel});case"LineString":return(0,c.jsx)(d.default,{title:"Bredd och f\xe4rg",showStrokeWidthSlider:!0,color:e.drawStyle.strokeColor,strokeWidth:e.drawStyle.strokeWidth,handleColorChange:h,handleStrokeWidthChange:p,drawModel:e.drawModel});case"Text":return(0,c.jsxs)(r.ZP,{container:!0,children:[(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsx)(d.default,{title:"F\xe4rg - f\xf6rgrund",color:e.textStyle.foregroundColor,handleColorChange:m,drawModel:e.drawModel})}),(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsx)(d.default,{title:"F\xe4rg - bakgrund",color:e.textStyle.backgroundColor,handleColorChange:g,drawModel:e.drawModel})})]});default:return(0,c.jsxs)(r.ZP,{container:!0,children:[(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsx)(d.default,{title:"Fyllnad",showOpacitySlider:!0,color:e.drawStyle.fillColor,handleColorChange:u,handleOpacityChange:k,drawModel:e.drawModel})}),(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsx)(d.default,{title:"Linje",showStrokeWidthSlider:!0,color:e.drawStyle.strokeColor,strokeWidth:e.drawStyle.strokeWidth,handleColorChange:h,handleStrokeWidthChange:p,drawModel:e.drawModel,showStrokeTypeSelector:!0,handleStrokeTypeChange:t,strokeType:e.drawStyle.strokeType})})]})}}()})]})]})}},7279:function(e,t,a){a.r(t);a(72791);var n=a(56650),r=a(45953),l=a(35702),i=a(4565),o=a(59911),d=a(75814),s=a(91762),c=a(80184);t.default=function(e){return(0,c.jsx)(n.Z,{style:{padding:!1!==e.includeContainer?8:0},elevation:!1!==e.includeContainer?3:0,children:(0,c.jsxs)(r.ZP,{container:!0,children:[!1!==e.includeContainer?(0,c.jsx)(r.ZP,{item:!0,xs:12,children:(0,c.jsx)(i.Z,{variant:"caption",children:"Linjetyp"})}):null,(0,c.jsx)(o.Z,{fullWidth:!0,id:"select-stroke-type",variant:"outlined",size:"small",select:!0,value:e.strokeType,onChange:e.handleStrokeTypeChange,children:s.STROKE_TYPES.map((function(e){return(0,c.jsx)(l.Z,{value:e.type,children:(0,c.jsx)(d.Z,{disableInteractive:!0,title:e.tooltip,children:(0,c.jsx)("span",{style:{width:"100%"},children:e.label})})},e.type)}))})]})})}},91762:function(e,t,a){a.r(t),a.d(t,{ACTIVITIES:function(){return h},AREA_MEASUREMENT_UNITS:function(){return b},DEFAULT_DRAW_STYLE_SETTINGS:function(){return C},DEFAULT_MEASUREMENT_SETTINGS:function(){return y},DEFAULT_TEXT_STYLE_SETTINGS:function(){return w},DRAW_COLORS:function(){return u},DRAW_TYPES:function(){return k},LENGTH_MEASUREMENT_UNITS:function(){return Z},MAX_LS_CHARS:function(){return v},MAX_REMOVED_FEATURES:function(){return p},MAX_SKETCHES:function(){return x},MEASUREMENT_PRECISIONS:function(){return T},PLUGIN_MARGIN:function(){return m},PROMPT_TEXTS:function(){return S},STORAGE_KEY:function(){return j},STROKE_DASHES:function(){return f},STROKE_TYPES:function(){return g}});var n=a(41286),r=a(27247),l=a(34311),i=a(40735),o=a(53329),d=a(12806),s=a(87122),c=a(80184),h=[{id:"ADD",tooltip:"L\xe4gg till nya objekt.",information:"L\xe4gg till objekt genom att rita i kartan. B\xf6rja med att v\xe4lja vilken typ av objekt du vill rita nedan.",icon:(0,c.jsx)(n.Z,{})},{id:"EDIT",tooltip:"Redigera existerande objekt.",information:"Redigera objekt du ritat tidigare genom att flytta noder, eller \xe4ndra f\xe4rg.",icon:(0,c.jsx)(l.Z,{})},{id:"MOVE",tooltip:"Flytta existerande objekt.",information:'Klicka p\xe5 det objekt i kartan som du vill flytta f\xf6r att aktivera "flytt-l\xe4ge". Dra sedan objektet till r\xe4tt plats.',icon:(0,c.jsx)(i.Z,{})},{id:"DELETE",tooltip:"Ta bort objekt.",information:"Klicka p\xe5 det rit-objekt som du vill ta bort, eller klicka p\xe5 knappen nedan f\xf6r att ta bort alla rit-objekt.",icon:(0,c.jsx)(r.Z,{})},{id:"SAVE",tooltip:"Spara ritade objekt.",information:"Beh\xf6ver du ta en paus? Spara det du har ritat och forts\xe4tt senare. T\xe4nk p\xe5 att enbart de objekt som syns i kartan sparas.",icon:(0,c.jsx)(o.Z,{})},{id:"UPLOAD",tooltip:"Ladda ned eller ladda upp ritade objekt.",information:"Importera eller exportera ritobjekt i .kml-format. Anv\xe4nd knapparna nedan, eller dra in en .KML-fil direkt till kartan.",icon:(0,c.jsx)(d.Z,{})},{id:"SETTINGS",tooltip:"\xc4ndra om objektens m\xe5tt ska synas etc.",information:"H\xe4r kan du \xe4ndra verktygets inst\xe4llningar.",icon:(0,c.jsx)(s.Z,{})}],u=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF","#354FAD"],k=[{type:"Circle",label:"Cirkel",tooltip:"Rita en cikel i kartan genom att klicka en g\xe5ng d\xe4r cikeln ska b\xf6rja, dra sedan till \xf6nskad storlek och sl\xe4pp."},{type:"LineString",label:"Linje",tooltip:"Rita en linje i kartan genom att klicka en g\xe5ng per nod, avlsuta med ett dubbelklick."},{type:"Rectangle",label:"Rektangel",tooltip:"Rita en rektangel i kartan genom att klicka en g\xe5ng d\xe4r rektangeln ska b\xf6rja, dra sedan till \xf6nskad storlek och sl\xe4pp."},{type:"Arrow",label:"Pil",tooltip:"Rita en pil i kartan genom att klicka en g\xe5ng per nod, avlsuta med ett dubbelklick."},{type:"Select",label:"V\xe4lj i kartan",tooltip:"Klicka p\xe5 ett existerande objekt i kartan och kopiera in det i ritlagret."},{type:"Polygon",label:"Polygon",tooltip:"Rita en polygon i kartan genom att klicka en g\xe5ng per nod, avlsuta med ett dubbelklick."},{type:"Point",label:"Punkt",tooltip:"Infoga en punkt i kartan genom att klicka d\xe4r du vill ha punkten."},{type:"Text",label:"Text",tooltip:"Infoga text i kartan genom att klicka d\xe4r du vill ha texten."}],p=4,m=10,g=[{type:"solid",label:"Heldragen",tooltip:"Heldragen linje."},{type:"dotted",label:"Punktad",tooltip:"Punktad linje."},{type:"dashed",label:"Streckad",tooltip:"Streckad linje."}],f=new Map([["solid",null],["dotted",[2,7]],["dashed",[12,7]]]),x=3,y={showText:!1,showArea:!1,showLength:!1,showPerimeter:!1,areaUnit:"AUTO",lengthUnit:"AUTO",precision:0},j="sketch",v=1e6,S={saveOverflow:"Objekten kunde inte sparas. Arbetsytan f\xf6r m\xe5nga objekt.",saveNoFeatures:"Kunde inte skapa arbetsyta, inga ritobjekt hittades.",saveSuccess:"Arbetsytan sparades utan problem.",CircleHelp:"Du kan skapa en cirkel genom att klicka med en best\xe4md radie, eller dra f\xf6r att f\xe5 en \xf6nskad radie.",LineStringHelp:"Skapa linjer genom att klicka p\xe5 en position f\xf6r varje nod, avsluta med dubbelklick.",RectangleHelp:"Skapa en rektangel genom att h\xe5lla v\xe4nsterklick med musen och dra \xf6ver en yta f\xf6r att f\xe5 en \xf6nskad storlek.",ArrowHelp:"En pil skapas genom att klicka p\xe5 en position f\xf6r varje nod, avsluta med dubbelklick.",SelectHelp:"Klicka p\xe5 ett existerande objekt i kartan och kopiera in det i ritlagret.",PolygonHelp:"Skapa en polygon genom att klicka p\xe5 en position f\xf6r varje nod, avsluta med dubbelklick.",PointHelp:"Klicka p\xe5 en position f\xf6r att infoga en punkt.",TextHelp:"Klicka p\xe5 en position f\xf6r att infoga text.",EDITHelp:"Klicka p\xe5 ett objekt f\xf6r att redigera dess utseende.",MOVEHelp:"Klicka p\xe5 ett objekt f\xf6r att f\xf6rflytta det.",DELETEHelp:"Klicka p\xe5 ett objekt f\xf6r att radera det fr\xe5n din skiss.",SAVEHelp:"H\xe4r kan du spara en arbetsyta f\xf6r att forts\xe4tta ditt arbete senare. F\xf6r att spara \xf6ver en \xe4ldre arbetsyta, ange samma namn."},b=[{type:"AUTO",name:"Automatisk"},{type:"M2",name:"Kvadratmeter (m\xb2)"},{type:"KM2",name:"Kvadratkilometer (km\xb2)"},{type:"HECTARE",name:"Hektar (ha)"}],Z=[{type:"AUTO",name:"Automatisk"},{type:"M",name:"Meter (m)"},{type:"KM",name:"Kilometer (km)"}],T=[{value:0,name:"0 decimaler"},{value:1,name:"1 decimal"},{value:2,name:"2 decimaler"},{value:3,name:"3 decimaler"}],C={strokeColor:{r:10,g:10,b:10,a:1},fillColor:{r:60,g:60,b:60,a:.3},strokeType:"solid",strokeWidth:1},w={foregroundColor:"#FFFFFF",backgroundColor:"#000000",size:14}},34311:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(45649)),l=a(80184),i=(0,r.default)((0,l.jsx)("path",{d:"M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"}),"FormatShapes");t.Z=i},12806:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(45649)),l=a(80184),i=(0,r.default)((0,l.jsx)("path",{d:"M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"}),"ImportExport");t.Z=i},40735:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(45649)),l=a(80184),i=(0,r.default)((0,l.jsx)("path",{d:"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"}),"OpenWith");t.Z=i},53329:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(45649)),l=a(80184),i=(0,r.default)((0,l.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.Z=i}}]);
//# sourceMappingURL=6833.9d7509d4.chunk.js.map