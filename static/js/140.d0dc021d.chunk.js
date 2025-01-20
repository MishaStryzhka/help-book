"use strict";(self.webpackChunkhelp_book=self.webpackChunkhelp_book||[]).push([[140],{4140:(e,s,n)=>{n.r(s),n.d(s,{default:()=>te});var t=n(8536),r=n(2791),i=n(4270),o=n(3934),a=n(4705),l=n(2559),d=n(8454),c=n(9631),x=n(6341),h=n(5379),g=n(4217),p=n(634),u=n(6355),j=n(1087);const m=e=>{switch(e){case"A":return"#59c959";case"B":return"#ecd950";case"C":return"#ff5151";case"A/B":return"linear-gradient(-8deg, #ecd950 45%, #59c959 55%)";default:return"#e0e0e0"}};var f=n(8014);const y=(e,s)=>{const n=/^([a-zA-Z]+)(\d+)$/,[,t,r]=e.name.match(n)||[],[,i,o]=s.name.match(n)||[],a=t.localeCompare(i);return 0!==a?a:parseInt(r,10)-parseInt(o,10)};var C=n(6856),b=n(184);const S=e=>{let{filters:s,isGridView:n}=e;const{search:t,typeCars:i,drivingStyle:o,hasAirConditioner:a,hasFridge:l,hasHeating:S,hasSoundProofed:v}=s,[w,k]=(0,r.useState)([]),[I,H]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{const e=(0,c.hJ)(d.db,"cars"),s=(0,c.cf)(e,(e=>{const s=e.docs.map((e=>({id:e.id,...e.data()}))).filter((e=>{const s=e.name.includes(t),n=!i||e.type===i,r=!o||e.drivingStyle===o,d=!a||!0===e.hasAirConditioner,c=!l||!0===e.hasFridge,x=!S||!0===e.hasHeating,h=!v||!0===e.hasSoundProofed;return s&&n&&d&&c&&r&&x&&h}));k(s),H(!1)}));return()=>s()}),[i,o,a,l,t,S,v]),n?(0,b.jsx)(x.r,{pb:4,w:"100%",templateColumns:{base:"repeat(4, 1fr)",md:"repeat(6, 1fr)",xl:"repeat(10, 1fr)"},gap:{base:1,md:6,xl:2},flex:1,overflow:"auto",className:"no-scrollbar",children:w.sort(((e,s)=>y(e,s))).map((e=>(0,b.jsx)(j.rU,{to:"/cars/".concat(e.id),children:(0,b.jsxs)(h.k,{w:"100%",flexDirection:"column",alignItems:"center",justify:"space-between",gap:1,p:{base:0,md:3},borderWidth:1,borderRadius:"md",boxShadow:"md",bg:m(e.drivingStyle),children:[(0,b.jsx)(g.x,{fontWeight:"bold",fontSize:14,children:e.name}),(0,b.jsxs)(p.x,{display:"flex",gap:1,children:[(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(u.l51,{color:e.hasAirConditioner?"green":"red"})}),"hasHeating"in e&&(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(f.$b7,{color:e.hasHeating?"green":"red"})}),(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(u.FSC,{color:e.hasFridge?"green":"red"})}),"hasSoundProofed"in e&&(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(C.HvK,{color:e.hasSoundProofed?"green":"red"})})]})]})},e.id)))}):(0,b.jsx)(x.r,{pb:4,w:"100%",templateColumns:{base:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},gap:{base:3,md:6},flex:1,overflow:"auto",className:"no-scrollbar",children:w.sort(((e,s)=>y(e,s))).map((e=>(0,b.jsx)(j.rU,{to:"/cars/".concat(e.id),children:(0,b.jsxs)(h.k,{w:"100%",alignItems:"center",justify:"space-between",gap:4,p:{base:1,md:3},borderWidth:1,borderRadius:"md",boxShadow:"md",bg:m(e.drivingStyle),children:[(0,b.jsx)(g.x,{fontWeight:"bold",fontSize:"lg",children:e.name}),(0,b.jsxs)(p.x,{display:"flex",gap:1,children:[(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(u.l51,{color:e.hasAirConditioner?"green":"red"})}),"hasHeating"in e&&(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(f.$b7,{color:e.hasHeating?"green":"red"})}),(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(u.FSC,{color:e.hasFridge?"green":"red"})}),"hasSoundProofed"in e&&(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(C.HvK,{color:e.hasSoundProofed?"green":"red"})}),(0,b.jsx)(p.x,{display:"flex",alignItems:"center",px:1,children:(0,b.jsx)(g.x,{fontSize:22,children:e.drivingStyle})})]})]})},e.id)))})};var v=n(5660),w=n(6511),k=n(4295),I=n(1091),H=n(9271),A=n(7186),P=n(5908),F=n(2571),z=n(6486),O=n(7769),T=n(9168),R=n(71),E=n(8906),M=n(9848),B=n(8052),V=n(70);const W=e=>{let{isOpenFilterMobMenu:s,setIsOpenFilterMobMenu:n,search:t,setSearch:r,typeCars:i,setTypeCars:o,hasAirConditioner:a,setHasAirConditioner:l,hasFridge:d,setHasFridge:c,setIsOpenModalAddCar:x,isGridView:g,setIsGridView:j,hasHeating:m,setHasHeating:y,hasSoundProofed:S,setHasSoundProofed:W,setIsOpenModalScan:G}=e;const _=e=>{o(e)};return(0,b.jsxs)(h.k,{gap:2,position:"sticky",zIndex:"2",paddingBottom:"10px",bg:"#fff",children:[(0,b.jsx)(v.h,{color:"#6da305",icon:(0,b.jsx)(R.Y0M,{}),onClick:()=>G(!0),"aria-label":"Open Modal Add Cars",position:"relative"}),(0,b.jsxs)(w.B,{children:[(0,b.jsx)(k.Z,{pointerEvents:"none",children:(0,b.jsx)(R.eaK,{color:"gray.300"})}),(0,b.jsx)(I.I,{w:{base:"100%",md:"300px",xl:"500px"},value:t,onChange:e=>{r(e.target.value.toUpperCase())},placeholder:"Search"})]}),(0,b.jsx)(B.Z,{isGridView:g,setIsGridView:j}),(0,b.jsxs)(p.x,{display:{base:"flex",xl:"none"},gap:2,children:[(0,b.jsx)(v.h,{icon:s?(0,b.jsx)(u.s$2,{}):(0,b.jsx)(u.ulB,{}),onClick:()=>{n(!s)},"aria-label":"Open Filter Menu",position:"relative"}),(0,b.jsx)(v.h,{bg:"#6da305",color:"white",_hover:{bg:"#5c8e04"},icon:(0,b.jsx)(E.d,{}),onClick:()=>x(!0),"aria-label":"Open Modal Add Cars",position:"relative"})]}),(0,b.jsx)(p.x,{display:{base:"none",xl:"block"},children:(0,b.jsxs)(h.k,{gap:4,align:"center",children:[(0,b.jsxs)(H.v,{children:[(0,b.jsx)(A.j,{as:P.z,rightIcon:(0,b.jsx)(M.v,{}),w:"80px",children:i||"Type"}),(0,b.jsxs)(F.q,{minW:"80px",children:[(0,b.jsx)(z.s,{onClick:()=>_(""),children:"Type"}),V.TYPES_CAR.map(((e,s)=>(0,b.jsx)(z.s,{onClick:()=>_(e),children:e},s)))]})]}),(0,b.jsxs)(h.k,{align:"center",children:[(0,b.jsx)(O.J,{as:u.l51,boxSize:5,mr:2,color:a?"green.500":"gray.500"}),(0,b.jsx)(T.r,{colorScheme:"green",isChecked:a,onChange:()=>l(!a)})]}),(0,b.jsxs)(h.k,{align:"center",children:[(0,b.jsx)(O.J,{as:f.$b7,boxSize:5,mr:2,color:m?"green.500":"gray.500"}),(0,b.jsx)(T.r,{colorScheme:"green",isChecked:m,onChange:()=>y(!m)})]}),(0,b.jsxs)(h.k,{align:"center",children:[(0,b.jsx)(O.J,{as:u.FSC,boxSize:5,mr:2,color:d?"green.500":"gray.500"}),(0,b.jsx)(T.r,{colorScheme:"green",isChecked:d,onChange:()=>c(!d)})]}),(0,b.jsxs)(h.k,{align:"center",children:[(0,b.jsx)(O.J,{as:C.HvK,boxSize:5,mr:2,color:S?"green.500":"gray.500"}),(0,b.jsx)(T.r,{colorScheme:"green",isChecked:S,onChange:()=>W(!S)})]}),(0,b.jsx)(P.z,{leftIcon:(0,b.jsx)(E.d,{}),bg:"#6da305",color:"white",_hover:{bg:"#5c8e04"},onClick:()=>x(!0),children:"p\u0159idat auto"})]})})]})};var G=n(9335),_=n(5739),D=n(6443),J=n(1709),K=n(9370),N=n(6790),X=n(4164);const Z=e=>{let{imageSrc:s,annotations:n}=e;const[t,i]=(0,r.useState)([]),o=(0,r.useRef)(null);console.log("carList",t),(0,r.useEffect)((()=>{const e=o.current;e&&(e.style.position="relative",e.style.display="inline-block")}),[]),(0,r.useEffect)((()=>{n&&n.length>0&&(async()=>{try{console.log("annotations",n);const e=await Promise.all(n.map((async e=>{const s=e.description.replace(/\s+/g,""),n=await(0,l.getCarByName)(s);return n?{data:n,annotation:e}:null})));i(e.filter((e=>null!==e)))}catch(e){console.error("Error fetching car data:",e)}})()}),[n]);return(0,b.jsxs)(p.x,{ref:o,children:[(0,b.jsx)("img",{src:s,alt:"Annotated",style:{maxWidth:"100%",maxHeight:"100%",display:"block",borderRadius:"8px"}}),t.map(((e,s)=>{var n,t;console.log("car",e);const r=null===e||void 0===e||null===(n=e.annotation)||void 0===n||null===(t=n.boundingPoly)||void 0===t?void 0:t.vertices;if(!r)return(0,b.jsx)("div",{},s);const i=r[0].x,o=r[0].y,a=r[1].x-r[0].x,l=r[2].y-r[0].y,d=(e=>{const s=e[1].x-e[0].x,n=e[1].y-e[0].y;return 180*Math.atan2(n,s)/Math.PI})(r);return(0,b.jsx)(j.rU,{to:"/cars/".concat(e.data.id),children:(0,b.jsx)(p.x,{position:"absolute",left:"".concat(i,"px"),top:"".concat(o,"px"),width:"".concat(a,"px"),height:"".concat(l,"px"),transform:"rotate(".concat(d,"deg)"),background:"rgba(255, 255, 255, 0.8)",border:"2px solid ".concat(m(e.data.drivingStyle)),padding:"8px",borderLeftRadius:"8px",borderBottomRightRadius:"8px",zIndex:10,bg:"transparent",children:(0,b.jsxs)(h.k,{w:"fit-content",alignItems:"center",justify:"space-between",gap:1,position:"absolute",top:"-28px",right:"-2px",bg:m(e.data.drivingStyle),p:"3px",borderTopRadius:"3px",children:[(0,b.jsxs)(g.x,{fontWeight:"bold",fontSize:14,children:[e.data.name," (",e.data.drivingStyle,")"]}),(0,b.jsxs)(p.x,{display:"flex",gap:1,children:[(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(u.l51,{color:e.data.hasAirConditioner?"green":"red"})}),"hasHeating"in e.data&&(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(f.$b7,{color:e.data.hasHeating?"green":"red"})}),(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(u.FSC,{color:e.data.hasFridge?"green":"red"})}),"hasSoundProofed"in e.data&&(0,b.jsx)(p.x,{display:"flex",alignItems:"center",children:(0,b.jsx)(C.HvK,{color:e.data.hasSoundProofed?"green":"red"})})]})]})})},s)}))]},"132")};var $=n(97),q=n.n($);const U=e=>{let{onRecognized:s}=e;const n=(0,r.useRef)(null),[t,i]=(0,r.useState)(null),[o,a]=(0,r.useState)(null);return(0,b.jsx)(h.k,{justify:"center",align:"center",height:{base:"calc(100vh - 140px)",md:"calc(100vh - 110px)"},position:"relative",children:t?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z,{imageSrc:t,annotations:o}),(0,b.jsx)("button",{onClick:()=>i(null),style:{position:"absolute",bottom:"10px",width:"50px",height:"50px",borderRadius:"30px",backgroundColor:"gray",boxShadow:"0px 0px 5px 2px #fff inset"}})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(q(),{audio:!1,ref:n,videoConstraints:{facingMode:"environment"},screenshotFormat:"image/jpeg",style:{maxWidth:"100%",maxHeight:"100%",borderRadius:"8px"}}),(0,b.jsx)("button",{onClick:async()=>{const e=n.current.getScreenshot();i(e);try{var t;const n=await fetch("https://vision.googleapis.com/v1/images:annotate?key=".concat("AIzaSyAwEsPlXORwj3zcWO0nI0aC5SpnmgBuhVU"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({requests:[{image:{content:e.split(",")[1]},features:[{type:"TEXT_DETECTION"}]}]})}),r=await n.json();console.log("result",r);const[i,...o]=null===r||void 0===r||null===(t=r.responses[0])||void 0===t?void 0:t.textAnnotations,l=o?o.map((e=>"".concat(e.description,", "))):"\u0422\u0435\u043a\u0441\u0442 \u043d\u0435 \u0440\u043e\u0437\u043f\u0456\u0437\u043d\u0430\u043d\u043e";console.log("detectedText",l),a(o),s(l)}catch(r){console.error("Error with Vision API:",r),alert("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0440\u043e\u0437\u043f\u0456\u0437\u043d\u0430\u0432\u0430\u043d\u043d\u0456 \u0442\u0435\u043a\u0441\u0442\u0443.")}},style:{position:"absolute",bottom:"10px",width:"50px",height:"50px",borderRadius:"30px",backgroundColor:"gray"}})]})})},Y=e=>{let{isOpen:s,onClose:n}=e;const[t,i]=(0,r.useState)([]);return(0,r.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""})),[]),(0,X.createPortal)((0,b.jsxs)(G.u_,{motionPreset:"slideInBottom",isOpen:s,onClose:n,size:"full",isCentered:!0,scrollBehavior:"inside",children:[(0,b.jsx)(_.Z,{}),(0,b.jsxs)(D.h,{mt:20,borderTopRadius:20,children:[(0,b.jsxs)(J.x,{children:["Real-Time OCR Scanner Text: ",t]}),(0,b.jsx)(K.o,{}),(0,b.jsx)(N.f,{p:0,h:"100%",children:(0,b.jsx)(U,{onRecognized:e=>{i((s=>[...s,e]))}})})]})]}),document.getElementById("modalScan"))};var L=n(7689),Q=n(4315),ee=n(3215);const se=n(8842).E.create(p.x),ne=e=>{let{isOpen:s,onClose:n,typeCars:t,setTypeCars:i,drivingStyle:o,setDrivingStyle:a,hasAirConditioner:l,setHasAirConditioner:d,hasFridge:c,setHasFridge:x,hasHeating:h,setHasHeating:g,hasSoundProofed:u,setHasSoundProofed:j}=e;const[m,f]=(0,r.useState)(0),y=(0,r.useRef)();(0,r.useEffect)((()=>{const e=e=>{y.current&&!y.current.contains(e.target)&&n()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[n]);return(0,b.jsx)(p.x,{display:{base:"block",xl:"none"},ref:y,children:(0,b.jsxs)(se,{initial:{top:"-100%"},animate:s?{top:"40px"}:{top:"-100%"},style:{pointerEvents:s?"auto":"none"},overflow:"hidden",position:"absolute",top:"40px",left:"0",width:"100%",bg:"white",zIndex:"1",boxShadow:"md",p:s?4:0,onTouchStart:e=>{f(e.touches[0].clientY)},onTouchEnd:e=>{const s=e.changedTouches[0].clientY;m-s>50&&n()},transition:{top:{duration:.6},opacity:{duration:.8}},children:[(0,b.jsxs)(Q.g,{align:"start",spacing:4,children:[(0,b.jsxs)(H.v,{children:[(0,b.jsx)(A.j,{as:P.z,rightIcon:(0,b.jsx)(M.v,{}),w:"100%",children:t||"Typ auta:"}),(0,b.jsxs)(F.q,{w:"100%",children:[(0,b.jsx)(z.s,{w:"100%",onClick:()=>i(""),children:"V\u0161e"}),V.TYPES_CAR.map(((e,s)=>(0,b.jsx)(z.s,{onClick:()=>i(e),children:e},s)))]})]}),(0,b.jsxs)(H.v,{children:[(0,b.jsx)(A.j,{as:P.z,rightIcon:(0,b.jsx)(M.v,{}),w:"100%",children:o||"Styl j\xedzdy:"}),(0,b.jsxs)(F.q,{w:"100%",children:[(0,b.jsx)(z.s,{w:"100%",onClick:()=>a(""),children:"V\u0161e"}),(0,b.jsx)(z.s,{w:"100%",onClick:()=>a("A"),children:"A"}),(0,b.jsx)(z.s,{w:"100%",onClick:()=>a("B"),children:"B"}),(0,b.jsx)(z.s,{w:"100%",onClick:()=>a("C"),children:"C"}),(0,b.jsx)(z.s,{w:"100%",onClick:()=>a("A/B"),children:"A/B"}),(0,b.jsx)(z.s,{w:"100%",onClick:()=>a("0"),children:"0"})]})]}),(0,b.jsx)(ee.X,{name:"hasAirConditioner",isChecked:l,onChange:()=>{d((e=>!e))},children:"Klimatizace"}),(0,b.jsx)(ee.X,{name:"hasHeating",isChecked:h,onChange:()=>{g((e=>!e))},children:"Topen\xed:"}),(0,b.jsx)(ee.X,{name:"hasFridge",isChecked:c,onChange:()=>x((e=>!e)),children:"Vestavba (ledni\u010dka)"}),(0,b.jsx)(ee.X,{name:"hasSoundProofed",isChecked:u,onChange:()=>j((e=>!e)),children:"Odhlu\u010dn\u011bn\xe9"})]}),(0,b.jsx)(P.z,{bgColor:"#6da305",color:"white",mt:4,w:"100%",onClick:n,children:"Pou\u017e\xedt filtry"})]})})},te=()=>{const[e,s]=(0,r.useState)(!1),[n,d]=(0,r.useState)(!1),[c,x]=(0,r.useState)(!1),[h,g]=(0,r.useState)(""),[p,u]=(0,r.useState)(""),[j,m]=(0,r.useState)(!1),[f,y]=(0,r.useState)(!1),[C,v]=(0,r.useState)(""),[w,k]=(0,r.useState)(!1),[I,H]=(0,r.useState)(!1),[A,P]=(0,r.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.q,{children:(0,b.jsx)("title",{children:"Cars"})}),(0,b.jsx)(L.j3,{}),(0,b.jsxs)(t.W,{w:"100%",maxW:{base:"100%",md:"95vw",xl:"80vw"},p:0,position:"relative",height:"calc(100% - 65px)",display:"flex",flexDirection:"column",overflow:"hidden",children:[(0,b.jsx)(ne,{isOpen:e,onClose:()=>s(!1),typeCars:p,setTypeCars:u,drivingStyle:C,setDrivingStyle:v,hasAirConditioner:j,setHasAirConditioner:m,hasFridge:f,setHasFridge:y,hasHeating:I,setHasHeating:H,hasSoundProofed:A,setHasSoundProofed:P}),(0,b.jsx)(W,{isOpenFilterMobMenu:e,setIsOpenFilterMobMenu:s,search:h,setSearch:g,typeCars:p,setTypeCars:u,drivingStyle:C,setDrivingStyle:v,hasAirConditioner:j,setHasAirConditioner:m,hasFridge:f,setHasFridge:y,setIsOpenModalAddCar:d,isGridView:w,setIsGridView:k,hasHeating:I,setHasHeating:H,hasSoundProofed:A,setHasSoundProofed:P,setIsOpenModalScan:x}),(0,b.jsx)(S,{filters:{search:h,typeCars:p,drivingStyle:C,hasAirConditioner:j,hasHeating:I,hasFridge:f,hasSoundProofed:A},isGridView:w})]}),n&&(0,b.jsx)(o.Z,{isOpen:n,onClose:()=>d(!1),children:(0,b.jsx)(a.Z,{onSubmit:async e=>{await(0,l.addsNewCar)(e),d(!1)}})}),c&&(0,b.jsx)(Y,{isOpen:c,onClose:()=>x(!1)})]})}}}]);
//# sourceMappingURL=140.d0dc021d.chunk.js.map