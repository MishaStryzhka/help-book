"use strict";(self.webpackChunkhelp_book=self.webpackChunkhelp_book||[]).push([[370],{9370:(e,s,n)=>{n.r(s),n.d(s,{default:()=>R});var i=n(8536),r=n(2791),t=n(4270),a=n(7050),o=n(9642),l=n(2559),d=n(8454),c=n(9631),h=n(6341),x=n(5379),g=n(4217),j=n(634),p=n(6355),u=n(1087);const C=e=>{switch(e){case"A":return"#59c959";case"B":return"#ecd950";case"C":return"#ff5151";case"A/B":return"linear-gradient(-8deg, #ecd950 45%, #59c959 55%)";default:return"#e0e0e0"}};var m=n(8014);const f=(e,s)=>{const n=/^([a-zA-Z]+)(\d+)$/,[,i,r]=e.name.match(n)||[],[,t,a]=s.name.match(n)||[],o=i.localeCompare(t);return 0!==o?o:parseInt(r,10)-parseInt(a,10)};var y=n(6856),S=n(184);const b=e=>{let{filters:s,isGridView:n}=e;const{search:i,typeCars:t,drivingStyle:a,hasAirConditioner:o,hasFridge:l,hasHeating:b,hasSoundProofed:w}=s,[k,v]=(0,r.useState)([]),[H,I]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{const e=(0,c.hJ)(d.db,"cars"),s=(0,c.cf)(e,(e=>{const s=e.docs.map((e=>({id:e.id,...e.data()}))).filter((e=>{const s=e.name.includes(i),n=!t||e.type===t,r=!a||e.drivingStyle===a,d=!o||!0===e.hasAirConditioner,c=!l||!0===e.hasFridge,h=!b||!0===e.hasHeating,x=!w||!0===e.hasSoundProofed;return s&&n&&d&&c&&r&&h&&x}));v(s),I(!1)}));return()=>s()}),[t,a,o,l,i,b,w]),n?(0,S.jsx)(h.r,{pt:4,w:"100%",templateColumns:{base:"repeat(4, 1fr)",md:"repeat(6, 1fr)",xl:"repeat(10, 1fr)"},gap:{base:1,md:6,xl:2},children:k.sort(((e,s)=>f(e,s))).map((e=>(0,S.jsx)(u.rU,{to:"/cars/".concat(e.id),children:(0,S.jsxs)(x.k,{w:"100%",flexDirection:"column",alignItems:"center",justify:"space-between",gap:1,p:{base:0,md:3},borderWidth:1,borderRadius:"md",boxShadow:"md",bg:C(e.drivingStyle),children:[(0,S.jsx)(g.x,{fontWeight:"bold",fontSize:14,children:e.name}),(0,S.jsxs)(j.x,{display:"flex",gap:1,children:[(0,S.jsx)(j.x,{display:"flex",alignItems:"center",children:(0,S.jsx)(p.l51,{color:e.hasAirConditioner?"green":"red"})}),"hasHeating"in e&&(0,S.jsx)(j.x,{display:"flex",alignItems:"center",children:(0,S.jsx)(m.$b7,{color:e.hasHeating?"green":"red"})}),(0,S.jsx)(j.x,{display:"flex",alignItems:"center",children:(0,S.jsx)(p.FSC,{color:e.hasFridge?"green":"red"})}),"hasSoundProofed"in e&&(0,S.jsx)(j.x,{display:"flex",alignItems:"center",children:(0,S.jsx)(y.HvK,{color:e.hasSoundProofed?"green":"red"})})]})]})},e.id)))}):(0,S.jsx)(h.r,{pt:4,w:"100%",templateColumns:{base:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},gap:{base:3,md:6},children:k.sort(((e,s)=>f(e,s))).map((e=>(0,S.jsx)(u.rU,{to:"/cars/".concat(e.id),children:(0,S.jsxs)(x.k,{w:"100%",alignItems:"center",justify:"space-between",gap:4,p:{base:1,md:3},borderWidth:1,borderRadius:"md",boxShadow:"md",bg:C(e.drivingStyle),children:[(0,S.jsx)(g.x,{fontWeight:"bold",fontSize:"lg",children:e.name}),(0,S.jsxs)(j.x,{display:"flex",gap:1,children:[(0,S.jsx)(j.x,{display:"flex",alignItems:"center",children:(0,S.jsx)(p.l51,{color:e.hasAirConditioner?"green":"red"})}),"hasHeating"in e&&(0,S.jsx)(j.x,{display:"flex",alignItems:"center",children:(0,S.jsx)(m.$b7,{color:e.hasHeating?"green":"red"})}),(0,S.jsx)(j.x,{display:"flex",alignItems:"center",children:(0,S.jsx)(p.FSC,{color:e.hasFridge?"green":"red"})}),"hasSoundProofed"in e&&(0,S.jsx)(j.x,{display:"flex",alignItems:"center",children:(0,S.jsx)(y.HvK,{color:e.hasSoundProofed?"green":"red"})}),(0,S.jsx)(j.x,{display:"flex",alignItems:"center",px:1,children:(0,S.jsx)(g.x,{fontSize:22,children:e.drivingStyle})})]})]})},e.id)))})};var w=n(6511),k=n(4295),v=n(1091),H=n(5660),I=n(9271),A=n(7186),F=n(5908),P=n(2571),V=n(6486),z=n(7769),D=n(9168),O=n(71),E=n(8906),T=n(9848),G=n(7874),B=n(4315),X=n(3215),W=n(6092),J=n(203);const L=(0,n(8842).E)(j.x),M=e=>{let{typeCars:s,setTypeCars:n,drivingStyle:i,setDrivingStyle:t,hasAirConditioner:a,setHasAirConditioner:o,hasFridge:l,setHasFridge:d,hasHeating:c,setHasHeating:h,hasSoundProofed:x,setHasSoundProofed:u}=e;const{isOpen:C,onOpen:m,onClose:f}=(0,G.q)(),[y,b]=(0,r.useState)(0),w=(0,r.useRef)(),k=[s,i,a,l,c,x].filter(Boolean).length;(0,r.useEffect)((()=>{const e=e=>{w.current&&!w.current.contains(e.target)&&f()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[f]),(0,r.useEffect)((()=>(C?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"),()=>{document.body.classList.remove("no-scroll")})),[C]);return(0,S.jsxs)(j.x,{display:{base:"block",xl:"none"},ref:w,children:[(0,S.jsxs)(j.x,{position:"relative",children:[(0,S.jsx)(H.h,{icon:C?(0,S.jsx)(W.T,{}):(0,S.jsx)(p.ulB,{}),onClick:C?f:m,"aria-label":"Open Filter Menu",position:"relative"}),k>0&&(0,S.jsx)(j.x,{position:"absolute",top:"-5px",right:"-5px",fontSize:"10px",color:"white",bg:"red.500",borderRadius:"full",width:"15px",height:"15px",display:"flex",alignItems:"center",justifyContent:"center",children:k})]}),(0,S.jsxs)(L,{initial:{height:0,opacity:0},animate:C?{height:"auto",opacity:1}:{height:0,opacity:0},overflow:"hidden",position:"absolute",top:"60px",left:"0",width:"100%",bg:"white",zIndex:"overlay",boxShadow:"md",p:C?4:0,onTouchStart:e=>{console.log(e.touches[0].clientY),b(e.touches[0].clientY)},onTouchEnd:e=>{const s=e.changedTouches[0].clientY;y-s>50&&f()},transition:{height:{duration:.4},opacity:{duration:.8}},children:[(0,S.jsxs)(B.g,{align:"start",spacing:4,children:[(0,S.jsxs)(j.x,{w:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",ml:"auto",position:"relative",children:[(0,S.jsx)(g.x,{children:"Filtry: "}),(0,S.jsx)(H.h,{size:"md",icon:(0,S.jsx)(J.tGM,{}),onClick:()=>{n(""),t(""),o(null),d(null),h(null),u(null),f()},"aria-label":"Clear Filter",position:"relative"}),k>0&&(0,S.jsx)(j.x,{position:"absolute",top:"-5px",right:"-5px",fontSize:"10px",color:"white",bg:"red.500",borderRadius:"full",width:"15px",height:"15px",display:"flex",alignItems:"center",justifyContent:"center",children:k})]}),(0,S.jsxs)(I.v,{children:[(0,S.jsx)(A.j,{as:F.z,rightIcon:(0,S.jsx)(T.v,{}),w:"100%",children:s||"Typ auta:"}),(0,S.jsxs)(P.q,{w:"100%",children:[(0,S.jsx)(V.s,{w:"100%",onClick:()=>n(""),children:"V\u0161e"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>n("CDV"),children:"CDV"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>n("CD"),children:"CD"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>n("D"),children:"D"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>n("OV"),children:"OV"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>n("EXP"),children:"EXP"})]})]}),(0,S.jsxs)(I.v,{children:[(0,S.jsx)(A.j,{as:F.z,rightIcon:(0,S.jsx)(T.v,{}),w:"100%",children:i||"Styl j\xedzdy:"}),(0,S.jsxs)(P.q,{w:"100%",children:[(0,S.jsx)(V.s,{w:"100%",onClick:()=>t(""),children:"V\u0161e"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>t("A"),children:"A"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>t("B"),children:"B"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>t("C"),children:"C"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>t("A/B"),children:"A/B"}),(0,S.jsx)(V.s,{w:"100%",onClick:()=>t("0"),children:"0"})]})]}),(0,S.jsx)(X.X,{name:"hasAirConditioner",isChecked:a,onChange:()=>{o((e=>!e))},children:"Klimatizace"}),(0,S.jsx)(X.X,{name:"hasHeating",isChecked:c,onChange:()=>{h((e=>!e))},children:"Topen\xed:"}),(0,S.jsx)(X.X,{name:"hasFridge",isChecked:l,onChange:()=>d((e=>!e)),children:"Vestavba (ledni\u010dka)"}),(0,S.jsx)(X.X,{name:"hasSoundProofed",isChecked:x,onChange:()=>u((e=>!e)),children:"Odhlu\u010dn\u011bn\xe9"})]}),(0,S.jsx)(F.z,{bgColor:"#6da305",color:"white",mt:4,w:"100%",onClick:f,children:"Pou\u017e\xedt filtry"})]})]})},q=e=>{let{isGridView:s,setIsGridView:n}=e;return(0,S.jsx)(H.h,{icon:s?(0,S.jsx)(p.MJA,{}):(0,S.jsx)(p.uOL,{}),onClick:()=>n((e=>!e)),"aria-label":s?"\u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432 \u0442\u0440\u0438 \u0441\u0442\u043e\u0432\u043f\u0447\u0438\u043a\u0438":"\u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432 \u043e\u0434\u0438\u043d \u0441\u0442\u043e\u0432\u043f\u0447\u0438\u043a",colorScheme:"gray"})},K=e=>{let{search:s,setSearch:n,typeCars:i,setTypeCars:r,drivingStyle:t,setDrivingStyle:a,hasAirConditioner:o,setHasAirConditioner:l,hasFridge:d,setHasFridge:c,setIsOpenModalAddCar:h,isGridView:g,setIsGridView:u,hasHeating:C,setHasHeating:f,hasSoundProofed:b,setHasSoundProofed:G}=e;const B=e=>{r(e)};return(0,S.jsxs)(x.k,{gap:2,children:[(0,S.jsxs)(w.B,{children:[(0,S.jsx)(k.Z,{pointerEvents:"none",children:(0,S.jsx)(O.eaK,{color:"gray.300"})}),(0,S.jsx)(v.I,{w:{base:"100%",md:"300px",xl:"500px"},value:s,onChange:e=>{n(e.target.value.toUpperCase())},placeholder:"Search"})]}),(0,S.jsx)(q,{isGridView:g,setIsGridView:u}),(0,S.jsxs)(j.x,{display:{base:"flex",xl:"none"},gap:2,children:[(0,S.jsx)(M,{typeCars:i,setTypeCars:r,drivingStyle:t,setDrivingStyle:a,hasAirConditioner:o,setHasAirConditioner:l,hasFridge:d,setHasFridge:c,hasHeating:C,setHasHeating:f,hasSoundProofed:b,setHasSoundProofed:G}),(0,S.jsx)(H.h,{bg:"#6da305",color:"white",_hover:{bg:"#5c8e04"},icon:(0,S.jsx)(E.d,{}),onClick:()=>h(!0),"aria-label":"Open Modal Add Cars",position:"relative"})]}),(0,S.jsx)(j.x,{display:{base:"none",xl:"block"},children:(0,S.jsxs)(x.k,{gap:4,align:"center",children:[(0,S.jsxs)(I.v,{children:[(0,S.jsx)(A.j,{as:F.z,rightIcon:(0,S.jsx)(T.v,{}),w:"80px",children:i||"Type"}),(0,S.jsxs)(P.q,{minW:"80px",children:[(0,S.jsx)(V.s,{onClick:()=>B(""),children:"Type"}),(0,S.jsx)(V.s,{onClick:()=>B("CDV"),children:"CDV"}),(0,S.jsx)(V.s,{onClick:()=>B("CD"),children:"CD"}),(0,S.jsx)(V.s,{onClick:()=>B("D"),children:"D"}),(0,S.jsx)(V.s,{onClick:()=>B("OV"),children:"OV"}),(0,S.jsx)(V.s,{onClick:()=>B("EXP"),children:"EXP"})]})]}),(0,S.jsxs)(x.k,{align:"center",children:[(0,S.jsx)(z.J,{as:p.l51,boxSize:5,mr:2,color:o?"green.500":"gray.500"}),(0,S.jsx)(D.r,{colorScheme:"green",isChecked:o,onChange:()=>l(!o)})]}),(0,S.jsxs)(x.k,{align:"center",children:[(0,S.jsx)(z.J,{as:m.$b7,boxSize:5,mr:2,color:C?"green.500":"gray.500"}),(0,S.jsx)(D.r,{colorScheme:"green",isChecked:C,onChange:()=>f(!C)})]}),(0,S.jsxs)(x.k,{align:"center",children:[(0,S.jsx)(z.J,{as:p.FSC,boxSize:5,mr:2,color:d?"green.500":"gray.500"}),(0,S.jsx)(D.r,{colorScheme:"green",isChecked:d,onChange:()=>c(!d)})]}),(0,S.jsxs)(x.k,{align:"center",children:[(0,S.jsx)(z.J,{as:y.HvK,boxSize:5,mr:2,color:b?"green.500":"gray.500"}),(0,S.jsx)(D.r,{colorScheme:"green",isChecked:b,onChange:()=>G(!b)})]}),(0,S.jsx)(F.z,{leftIcon:(0,S.jsx)(E.d,{}),bg:"#6da305",color:"white",_hover:{bg:"#5c8e04"},onClick:()=>h(!0),children:"p\u0159idat auto"})]})})]})},R=()=>{const[e,s]=(0,r.useState)(!1),[n,d]=(0,r.useState)(""),[c,h]=(0,r.useState)(""),[x,g]=(0,r.useState)(!1),[j,p]=(0,r.useState)(!1),[u,C]=(0,r.useState)(""),[m,f]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),[k,v]=(0,r.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(t.q,{children:(0,S.jsx)("title",{children:"Cars"})}),(0,S.jsxs)(i.W,{w:"100%",maxW:{base:"100%",md:"95vw",xl:"80vw"},p:2,children:[(0,S.jsx)(K,{search:n,setSearch:d,typeCars:c,setTypeCars:h,drivingStyle:u,setDrivingStyle:C,hasAirConditioner:x,setHasAirConditioner:g,hasFridge:j,setHasFridge:p,setIsOpenModalAddCar:s,isGridView:m,setIsGridView:f,hasHeating:y,setHasHeating:w,hasSoundProofed:k,setHasSoundProofed:v}),(0,S.jsx)(b,{filters:{search:n,typeCars:c,drivingStyle:u,hasAirConditioner:x,hasHeating:y,hasFridge:j,hasSoundProofed:k},isGridView:m})]}),e&&(0,S.jsx)(a.Z,{isOpen:e,onClose:()=>s(!1),children:(0,S.jsx)(o.Z,{onSubmit:async e=>{await(0,l.addsNewCar)(e),s(!1)}})})]})}}}]);
//# sourceMappingURL=370.57605126.chunk.js.map