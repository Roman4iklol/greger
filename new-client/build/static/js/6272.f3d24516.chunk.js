"use strict";(self.webpackChunkhajk_client=self.webpackChunkhajk_client||[]).push([[6272,83,4673,6263,1762,1468],{20083:function(e,t,n){n.r(t);n(72791);var a=n(54164),i=n(60788),r=n(40464),o=n(8440),l=n(4565),s=n(77248),d=n(61091),c=n(80184);t.default=function(e){var t=e.open,n=e.handleConfirm,k=e.handleAbort,u=e.titleName,p=e.contentDescription,m=e.cancel,h=e.confirm;return(0,a.createPortal)((0,c.jsxs)(i.Z,{open:t,onClose:k,onMouseDown:function(e){e.stopPropagation()},children:[(0,c.jsx)(r.Z,{children:u}),(0,c.jsx)(o.Z,{children:(0,c.jsx)(l.Z,{children:p})}),(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(d.Z,{onClick:n,children:h}),(0,c.jsx)(d.Z,{onClick:k,variant:"contained",children:m})]})]}),document.getElementById("map"))}},84673:function(e,t,n){n.r(t);n(72791);var a=n(56650),i=n(4565),r=n(80184);t.default=function(e){var t=e.text;return(0,r.jsx)(a.Z,{style:{width:"100%",padding:8},children:(0,r.jsx)(i.Z,{align:"center",variant:"body2",children:t})})}},91762:function(e,t,n){n.r(t),n.d(t,{ACTIVITIES:function(){return k},AREA_MEASUREMENT_UNITS:function(){return E},DEFAULT_DRAW_STYLE_SETTINGS:function(){return T},DEFAULT_MEASUREMENT_SETTINGS:function(){return x},DEFAULT_TEXT_STYLE_SETTINGS:function(){return A},DRAW_COLORS:function(){return u},DRAW_TYPES:function(){return p},LENGTH_MEASUREMENT_UNITS:function(){return Z},MAX_LS_CHARS:function(){return j},MAX_REMOVED_FEATURES:function(){return m},MAX_SKETCHES:function(){return g},MEASUREMENT_PRECISIONS:function(){return y},PLUGIN_MARGIN:function(){return h},PROMPT_TEXTS:function(){return S},STORAGE_KEY:function(){return b},STROKE_DASHES:function(){return v},STROKE_TYPES:function(){return f}});var a=n(41286),i=n(27247),r=n(34311),o=n(40735),l=n(53329),s=n(12806),d=n(87122),c=n(80184),k=[{id:"ADD",tooltip:"L\xe4gg till nya objekt.",information:"L\xe4gg till objekt genom att rita i kartan. B\xf6rja med att v\xe4lja vilken typ av objekt du vill rita nedan.",icon:(0,c.jsx)(a.Z,{})},{id:"EDIT",tooltip:"Redigera existerande objekt.",information:"Redigera objekt du ritat tidigare genom att flytta noder, eller \xe4ndra f\xe4rg.",icon:(0,c.jsx)(r.Z,{})},{id:"MOVE",tooltip:"Flytta existerande objekt.",information:'Klicka p\xe5 det objekt i kartan som du vill flytta f\xf6r att aktivera "flytt-l\xe4ge". Dra sedan objektet till r\xe4tt plats.',icon:(0,c.jsx)(o.Z,{})},{id:"DELETE",tooltip:"Ta bort objekt.",information:"Klicka p\xe5 det rit-objekt som du vill ta bort, eller klicka p\xe5 knappen nedan f\xf6r att ta bort alla rit-objekt.",icon:(0,c.jsx)(i.Z,{})},{id:"SAVE",tooltip:"Spara ritade objekt.",information:"Beh\xf6ver du ta en paus? Spara det du har ritat och forts\xe4tt senare. T\xe4nk p\xe5 att enbart de objekt som syns i kartan sparas.",icon:(0,c.jsx)(l.Z,{})},{id:"UPLOAD",tooltip:"Ladda ned eller ladda upp ritade objekt.",information:"Importera eller exportera ritobjekt i .kml-format. Anv\xe4nd knapparna nedan, eller dra in en .KML-fil direkt till kartan.",icon:(0,c.jsx)(s.Z,{})},{id:"SETTINGS",tooltip:"\xc4ndra om objektens m\xe5tt ska synas etc.",information:"H\xe4r kan du \xe4ndra verktygets inst\xe4llningar.",icon:(0,c.jsx)(d.Z,{})}],u=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF","#354FAD"],p=[{type:"Circle",label:"Cirkel",tooltip:"Rita en cikel i kartan genom att klicka en g\xe5ng d\xe4r cikeln ska b\xf6rja, dra sedan till \xf6nskad storlek och sl\xe4pp."},{type:"LineString",label:"Linje",tooltip:"Rita en linje i kartan genom att klicka en g\xe5ng per nod, avlsuta med ett dubbelklick."},{type:"Rectangle",label:"Rektangel",tooltip:"Rita en rektangel i kartan genom att klicka en g\xe5ng d\xe4r rektangeln ska b\xf6rja, dra sedan till \xf6nskad storlek och sl\xe4pp."},{type:"Arrow",label:"Pil",tooltip:"Rita en pil i kartan genom att klicka en g\xe5ng per nod, avlsuta med ett dubbelklick."},{type:"Select",label:"V\xe4lj i kartan",tooltip:"Klicka p\xe5 ett existerande objekt i kartan och kopiera in det i ritlagret."},{type:"Polygon",label:"Polygon",tooltip:"Rita en polygon i kartan genom att klicka en g\xe5ng per nod, avlsuta med ett dubbelklick."},{type:"Point",label:"Punkt",tooltip:"Infoga en punkt i kartan genom att klicka d\xe4r du vill ha punkten."},{type:"Text",label:"Text",tooltip:"Infoga text i kartan genom att klicka d\xe4r du vill ha texten."}],m=4,h=10,f=[{type:"solid",label:"Heldragen",tooltip:"Heldragen linje."},{type:"dotted",label:"Punktad",tooltip:"Punktad linje."},{type:"dashed",label:"Streckad",tooltip:"Streckad linje."}],v=new Map([["solid",null],["dotted",[2,7]],["dashed",[12,7]]]),g=3,x={showText:!1,showArea:!1,showLength:!1,showPerimeter:!1,areaUnit:"AUTO",lengthUnit:"AUTO",precision:0},b="sketch",j=1e6,S={saveOverflow:"Objekten kunde inte sparas. Arbetsytan f\xf6r m\xe5nga objekt.",saveNoFeatures:"Kunde inte skapa arbetsyta, inga ritobjekt hittades.",saveSuccess:"Arbetsytan sparades utan problem.",CircleHelp:"Du kan skapa en cirkel genom att klicka med en best\xe4md radie, eller dra f\xf6r att f\xe5 en \xf6nskad radie.",LineStringHelp:"Skapa linjer genom att klicka p\xe5 en position f\xf6r varje nod, avsluta med dubbelklick.",RectangleHelp:"Skapa en rektangel genom att h\xe5lla v\xe4nsterklick med musen och dra \xf6ver en yta f\xf6r att f\xe5 en \xf6nskad storlek.",ArrowHelp:"En pil skapas genom att klicka p\xe5 en position f\xf6r varje nod, avsluta med dubbelklick.",SelectHelp:"Klicka p\xe5 ett existerande objekt i kartan och kopiera in det i ritlagret.",PolygonHelp:"Skapa en polygon genom att klicka p\xe5 en position f\xf6r varje nod, avsluta med dubbelklick.",PointHelp:"Klicka p\xe5 en position f\xf6r att infoga en punkt.",TextHelp:"Klicka p\xe5 en position f\xf6r att infoga text.",EDITHelp:"Klicka p\xe5 ett objekt f\xf6r att redigera dess utseende.",MOVEHelp:"Klicka p\xe5 ett objekt f\xf6r att f\xf6rflytta det.",DELETEHelp:"Klicka p\xe5 ett objekt f\xf6r att radera det fr\xe5n din skiss.",SAVEHelp:"H\xe4r kan du spara en arbetsyta f\xf6r att forts\xe4tta ditt arbete senare. F\xf6r att spara \xf6ver en \xe4ldre arbetsyta, ange samma namn."},E=[{type:"AUTO",name:"Automatisk"},{type:"M2",name:"Kvadratmeter (m\xb2)"},{type:"KM2",name:"Kvadratkilometer (km\xb2)"},{type:"HECTARE",name:"Hektar (ha)"}],Z=[{type:"AUTO",name:"Automatisk"},{type:"M",name:"Meter (m)"},{type:"KM",name:"Kilometer (km)"}],y=[{value:0,name:"0 decimaler"},{value:1,name:"1 decimal"},{value:2,name:"2 decimaler"},{value:3,name:"3 decimaler"}],T={strokeColor:{r:10,g:10,b:10,a:1},fillColor:{r:60,g:60,b:60,a:.3},strokeType:"solid",strokeWidth:1},A={foregroundColor:"#FFFFFF",backgroundColor:"#000000",size:14}},46272:function(e,t,n){n.r(t);var a=n(1413),i=n(29439),r=n(72791),o=n(76863),l=n(4565),s=n(61091),d=n(90069),c=n(13811),k=n(56650),u=n(45953),p=n(75814),m=n(59911),h=n(42419),f=n(27247),v=n(98246),g=n(91762),x=n(84673),b=n(20083),j=n(80184),S=(0,o.ZP)(k.Z)((function(e){var t=e.theme;return{width:"100%",padding:t.spacing(1),marginBottom:t.spacing(1),borderRight:"".concat(t.spacing(.5)," solid ").concat(t.palette.info.main),borderLeft:"".concat(t.spacing(.5)," solid ").concat(t.palette.info.main)}})),E=(0,o.ZP)("div")((function(e){var t=e.theme;return{color:"".concat(t.palette.error.main),fontSize:"11px",letterSpacing:"0.035rem",marginTop:"3px"}})),Z=function(e){var t=e.globalObserver;return(0,j.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(x.default,{text:"Det ser ut som att du har valt att inte till\xe5ta funktionella kakor. P\xe5 grund av detta s\xe5 kan du inte spara dina rit-objekt. Klicka nedan f\xf6r att \xe4ndra inst\xe4llningarna."})}),(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(s.Z,{fullWidth:!0,variant:"contained",onClick:function(){t.publish("core.showCookieBanner")},children:"Cookie-inst\xe4llningar"})})]})},y=function(e){var t=r.useState({truncatedSketchName:"",text:" ",show:!1}),n=(0,i.Z)(t,2),o=n[0],l=n[1],d=r.useState({disabled:!0,message:"Klicka f\xf6r att spara de ritobjekt som finns i kartan."}),c=(0,i.Z)(d,2),h=c[0],f=c[1],x=(0,v.Ds)().enqueueSnackbar,b=function(){var t=e.model.addCurrentSketchToStorage({title:e.sketchName}),n=t.status,i=t.message;e.setSavedSketches(e.model.getSketchesFromStorage()),e.setSketchName(""),l((0,a.Z)((0,a.Z)({},o),{},{text:" ",show:!1})),x(i,{variant:"FAILED"===n?"error":"success"})},S=function(){var t=e.savedSketches.some((function(t){return t.title.toLowerCase()===e.sketchName.toLowerCase()}));return l((0,a.Z)((0,a.Z)({},o),{},{truncatedSketchName:e.sketchName.length>15?e.sketchName.substring(0,15)+"...":e.sketchName,text:t?'Namnet upptaget. Ers\xe4tt arbetsyta "'.concat(o.truncatedSketchName,'"?'):" ",show:!!t})),t},Z=function(){return e.sketchName.length<4?f((0,a.Z)((0,a.Z)({},h),{},{disabled:!0,message:"Minst fyra tecken m\xe5ste anges f\xf6r att en arbetsyta ska kunna skapas."})):e.savedSketches.length>=g.MAX_SKETCHES&&!S()?f((0,a.Z)((0,a.Z)({},h),{},{disabled:!0,message:"Maximalt antal arbetsytor har sparats. Ta bort eller skriv \xf6ver en genom att ange ett av namnen i listan nedan."})):void f((0,a.Z)((0,a.Z)({},h),{},{disabled:!1,message:"Klicka f\xf6r att spara de ritobjekt som finns i kartan."}))};return(0,j.jsxs)(k.Z,{style:{padding:8},children:[(0,j.jsxs)(u.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:[(0,j.jsx)(u.ZP,{item:!0,xs:8,children:(0,j.jsx)(p.Z,{disableInteractive:!0,title:"Ange att namn s\xe5 att arbetsytan kan identifieras senare.",children:(0,j.jsx)(m.Z,{size:"small",variant:"outlined",style:{maxWidth:"100%"},onChange:function(t){e.setSketchName(t.target.value),Z()},onKeyUp:function(e){S(e.target.value),Z()},onKeyDown:function(e){"Enter"===e.key&&!h.disabled&&b()},value:e.sketchName})})}),(0,j.jsx)(u.ZP,{container:!0,item:!0,xs:3,justifyContent:"flex-end",children:(0,j.jsx)(p.Z,{disableInteractive:!0,title:h.message,children:(0,j.jsx)("span",{children:(0,j.jsx)(s.Z,{size:"small",variant:"contained",disabled:h.disabled,onClick:b,children:o.show?"Ers\xe4tt":"Spara"})})})})]}),(0,j.jsx)(E,{children:o.text})]})},T=function(e){var t,n=e.sketchInfo,a=e.handleRemoveClick,i=e.handleAddToMapClick;return(0,j.jsx)(d.Z,{in:!0,appear:!0,children:(0,j.jsx)(S,{children:(0,j.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,j.jsxs)(u.ZP,{item:!0,xs:8,children:[(0,j.jsx)(p.Z,{disableInteractive:!0,title:n.title,children:(0,j.jsx)(u.ZP,{item:!0,xs:12,sx:{overflow:"hidden",textOverflow:"ellipsis"},children:(0,j.jsx)(l.Z,{variant:"button",noWrap:!0,children:n.title})})}),(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(p.Z,{disableInteractive:!0,title:"Arbetsytan uppdaterades senast ".concat(n.date),children:(0,j.jsx)(l.Z,{variant:"caption",children:"Uppdaterad: ".concat(null===(t=n.date)||void 0===t?void 0:t.split(" ")[0])})})})]}),(0,j.jsxs)(u.ZP,{container:!0,item:!0,xs:4,justifyContent:"flex-end",children:[(0,j.jsx)(p.Z,{disableInteractive:!0,title:"Klicka f\xf6r att radera arbetsytan.",children:(0,j.jsx)(c.Z,{size:"small",onClick:a,children:(0,j.jsx)(f.Z,{})})}),(0,j.jsx)(p.Z,{disableInteractive:!0,title:"Klicka f\xf6r att l\xe4sa in objekten.",children:(0,j.jsx)(c.Z,{size:"small",onClick:i,children:(0,j.jsx)(h.Z,{})})})]})]})})})},A=function(e){var t=e.model,n=e.savedSketches,a=e.setSavedSketches,o=r.useState(null),s=(0,i.Z)(o,2),d=s[0],c=s[1];return(0,j.jsxs)(u.ZP,{container:!0,children:[(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(l.Z,{variant:"caption",children:0===n.length?"Inga sparade arbetsytor hittades.":"Sparade arbetsytor:"})}),(0,j.jsx)(u.ZP,{item:!0,xs:12,children:n.map((function(e){return(0,j.jsx)(T,{sketchInfo:e,handleAddToMapClick:function(){return function(e){t.addSketchToMap(e)}(e)},handleRemoveClick:function(){return function(e){c(e)}(e)}},e.id)}))}),(0,j.jsx)(b.default,{open:null!==d,titleName:"Radera arbetsyta",contentDescription:"\xc4r du s\xe4ker p\xe5 att du vill radera arbetsytan? Detta g\xe5r inte att \xe5ngra.",cancel:"Avbryt",confirm:"Radera",handleConfirm:function(){t.removeSketchFromStorage(d),a(n.filter((function(e){return!t.equalsIgnoringCase(e.title,d.title)}))),c(null)},handleAbort:function(){c(null)}})]})};t.default=function(e){var t=e.globalObserver,n=e.model,a=e.id,o=e.functionalCookiesOk,l=r.useState(""),s=(0,i.Z)(l,2),d=s[0],c=s[1],k=r.useState(n.getSketchesFromStorage()),p=(0,i.Z)(k,2),m=p[0],h=p[1],f=n.getActivityFromId(a);return o?(0,j.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(x.default,{text:f.information})}),(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(y,{model:n,sketchName:d,setSketchName:c,savedSketches:m,setSavedSketches:h})}),(0,j.jsx)(u.ZP,{item:!0,xs:12,children:(0,j.jsx)(A,{model:n,savedSketches:m,setSavedSketches:h})})]}):(0,j.jsx)(Z,{globalObserver:t})}},34311:function(e,t,n){var a=n(64836);t.Z=void 0;var i=a(n(45649)),r=n(80184),o=(0,i.default)((0,r.jsx)("path",{d:"M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"}),"FormatShapes");t.Z=o},12806:function(e,t,n){var a=n(64836);t.Z=void 0;var i=a(n(45649)),r=n(80184),o=(0,i.default)((0,r.jsx)("path",{d:"M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"}),"ImportExport");t.Z=o},40735:function(e,t,n){var a=n(64836);t.Z=void 0;var i=a(n(45649)),r=n(80184),o=(0,i.default)((0,r.jsx)("path",{d:"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"}),"OpenWith");t.Z=o},53329:function(e,t,n){var a=n(64836);t.Z=void 0;var i=a(n(45649)),r=n(80184),o=(0,i.default)((0,r.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.Z=o},90069:function(e,t,n){var a=n(87462),i=n(63366),r=n(72791),o=n(26752),l=n(74142),s=n(26780),d=n(57933),c=n(80184),k=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],u={entering:{transform:"none"},entered:{transform:"none"}},p=r.forwardRef((function(e,t){var n=(0,l.Z)(),p={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},m=e.addEndListener,h=e.appear,f=void 0===h||h,v=e.children,g=e.easing,x=e.in,b=e.onEnter,j=e.onEntered,S=e.onEntering,E=e.onExit,Z=e.onExited,y=e.onExiting,T=e.style,A=e.timeout,C=void 0===A?p:A,P=e.TransitionComponent,R=void 0===P?o.ZP:P,M=(0,i.Z)(e,k),H=r.useRef(null),I=(0,d.Z)(v.ref,t),N=(0,d.Z)(H,I),D=function(e){return function(t){if(e){var n=H.current;void 0===t?e(n):e(n,t)}}},L=D(S),w=D((function(e,t){(0,s.n)(e);var a=(0,s.C)({style:T,timeout:C,easing:g},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",a),e.style.transition=n.transitions.create("transform",a),b&&b(e,t)})),K=D(j),_=D(y),F=D((function(e){var t=(0,s.C)({style:T,timeout:C,easing:g},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),E&&E(e)})),z=D(Z);return(0,c.jsx)(R,(0,a.Z)({appear:f,in:x,nodeRef:H,onEnter:w,onEntered:K,onEntering:L,onExit:F,onExited:z,onExiting:_,addEndListener:function(e){m&&m(H.current,e)},timeout:C},M,{children:function(e,t){return r.cloneElement(v,(0,a.Z)({style:(0,a.Z)({transform:"scale(0)",visibility:"exited"!==e||x?void 0:"hidden"},u[e],T,v.props.style),ref:N},t))}}))}));t.Z=p}}]);
//# sourceMappingURL=6272.f3d24516.chunk.js.map