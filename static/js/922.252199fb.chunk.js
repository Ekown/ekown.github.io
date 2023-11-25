"use strict";(self.webpackChunkekown_github_io=self.webpackChunkekown_github_io||[]).push([[922],{3741:function(e,t,s){s.d(t,{Z:function(){return r}});s(2791);var a="Title_title__mIQHK",i=s(184),n=function(e){return(0,i.jsx)("div",{className:a+" underline "+(e.inView?" underline-active ":""),children:(0,i.jsx)("h2",{className:"pt-3 mb-5",children:e.content})})};n.defaultProps={};var r=n},8922:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var a=s(1413),i=s(885),n=s(2791),r=s(9348),o="Projects_projects__KyVox",c=s(3741),d="ProjectCard_projectcard__X+w2c",l="CustomModal_CustomModal__P0f6F",p=s(5342),u=s(3360),m="CustomCarousel_CustomCarousel__LlRPz",f=s(2914),h=s(184),g=function(e){return(0,h.jsx)(f.Z,{fade:!0,controls:e.images.length>1,indicators:!1,className:m,"data-testid":"custom-carousel",children:e.images.map((function(e,t){return(0,h.jsx)(f.Z.Item,{style:{background:"url(".concat(e,") center center/cover")}},"carousel-image-"+t)}))})};g.defaultProps={};var b=g,x=function(e){var t=e.isOpen,s=e.onClose,a=e.content;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(p.Z,{dialogClassName:l,show:t,onHide:s,centered:!0,children:[(0,h.jsx)(b,{images:a.images}),(0,h.jsx)(p.Z.Header,{closeButton:!0,children:(0,h.jsxs)("div",{children:[(0,h.jsx)(p.Z.Title,{children:a.title}),(0,h.jsx)("div",{className:"tag",children:a.subtitle})]})}),(0,h.jsx)(p.Z.Body,{children:a.body}),(0,h.jsxs)(p.Z.Footer,{children:[a.site?(0,h.jsx)(u.Z,{variant:"primary",href:a.site,target:"_blank","data-testid":"site-button",children:"View Site"}):null,a.source?(0,h.jsx)(u.Z,{variant:"primary",href:a.source,target:"_blank","data-testid":"source-button",children:"View Source"}):null]})]})})};x.defaultProps={};var v=x,j=function(e){var t=(0,n.useState)(!1),s=(0,i.Z)(t,2),a=s[0],r=s[1],o={title:e.name,subtitle:e.type,body:e.description,images:e.photos,site:""!==e.site&&e.site,source:""!==e.source&&e.source};return(0,h.jsxs)("div",{className:d+" col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4","data-testid":"project-card",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"project-img",style:{background:"url(".concat(e.photos[0],") center center/cover")}}),(0,h.jsxs)("div",{className:"card-text overlay",children:[(0,h.jsx)("div",{children:(0,h.jsx)("strong",{"data-testid":"project-card-name",children:e.name})}),(0,h.jsx)("span",{"data-testid":"project-card-stack",children:e.stack.join(" / ")})]}),(0,h.jsx)("div",{className:"card-button overlay",onClick:function(){r(!0)},children:"SEE MORE"})]}),(0,h.jsx)(v,{isOpen:a,onClose:function(){r(!1)},content:o})]})};j.defaultProps={};var w=j,y=[{name:"The Wastelander",type:"Final Thesis / Game",photos:[s(1916),s(9166),s(840),s(4068),s(5722),s(3467)],site:"",source:"https://github.com/Ekown/The-Wastelander",stack:["C#","Unity Engine"],description:"\"The Wastelander\" is a 2D side-scrolling game developed using Unity and programmed in C#. The game's objective is to guide the player through various environmental puzzles that require proper waste disposal. The player's final score is determined by their performance in each puzzle, encouraging players to learn and implement sustainable waste management practices."},{name:"My Developer Portfolio",type:"Landing Page",photos:[s(1050),s(8738),s(5080)],site:"",source:"https://github.com/Ekown/ekown.github.io",stack:["React","JavaScript","HTML","CSS"],description:"This React-based developer portfolio website, hosted on Github pages, showcases personal details, skills, and experience. It also highlights several projects, demonstrating competence in various technologies. Mobile-responsive and optimized with SEO elements, it provides an excellent user experience."},{name:"BusinessName.com.au",type:"Business Registration Management",photos:[s(8941),s(3145),s(1772),s(1603)],site:"https://businessname.com.au/",source:"",stack:["Zend Express","JSX","CSS"],description:"BusinessName.com.au is a website that provides services for businesses in Australia, including business name registration, ABN application, and filing of business-related documents. The website is designed to be user-friendly and offers a range of resources and support for businesses of all sizes."},{name:"FPC SugarCRM",type:"Customer Relationship Management",photos:[s(1745),s(7909),s(6874),s(1229),s(8683)],site:"https://crmprod.fpc.com.au/",source:"",stack:["SugarCRM","PHP","JavaScript","Handlebars"],description:"A SugarCRM instance for Family Pet Care includes standard Sugar functionalities with additional features like an order wizard, pricebook management, products cataloging, and opportunity status tracking. It's designed to help the company manage its customer relationships more efficiently and streamline its sales process."},{name:"FPC Driver App",type:"Mobile App",photos:[s(1181),s(6915),s(7303),s(4477),s(9207)],site:"",source:"",stack:["Ionic","Angular","JavaScript","Lumen"],description:"The Family Pet Care mobile app, built using Ionic, Angular, and Capacitor, is designed for drivers in the field. The app enables simple order management, allows drivers to create orders, scan QR tags, and features a driver map to track orders in real-time. It's a cross-platform mobile app that is easy to use and helps streamline operations for Family Pet Care."},{name:"FPC Vet Portal",type:"Portal",photos:[s(1397)],site:"https://portal.lawnswood.com.au/",source:"",stack:["React","JSX","Lumen"],description:"The Family Pet Care portal site, built with React and Lumen, is designed for vet clients. The site provides a user-friendly interface for pet owners to access their pet's medical records, schedule appointments, and communicate with their vet. It's a secure and efficient way for clients to manage their pet's health with Family Pet Care."}],C="ProjectFilters_projectfilters__KH2TB",k=["All","Angular","C#","CRM","React","Ionic","PHP"],P=function(e){var t=e.handleFilterClick,s=e.setShownProjects,a=(0,n.useState)(["All"]),r=(0,i.Z)(a,2),o=r[0],c=r[1];(0,n.useEffect)((function(){!function(){var e=y.filter((function(e){return!!o.includes("All")||o.every((function(t){return e.stack.some((function(e){return e.includes(t)}))}))}));s(e)}()}),[o]);return(0,h.jsx)("div",{className:C,children:(0,h.jsx)("div",{className:"row mx-3",children:(0,h.jsx)("div",{className:"col-12",children:k.map((function(e,s){return(0,h.jsx)("button",{type:"button",className:"btn btn-outline-primary "+(0!==o.length&&o.includes(e)?"active":""),onClick:function(){return s=e,t(),void c((function(){return[s]}));var s},children:e},"project-filter-"+s)}))})})})},_=function(){var e=(0,n.useState)(!1),t=(0,i.Z)(e,2),s=t[0],d=t[1],l=(0,n.useState)(y),p=(0,i.Z)(l,2),u=p[0],m=p[1],f=(0,r.YD)({threshold:.1,triggerOnce:!1}),g=(0,i.Z)(f,2),b=g[0],x=g[1];(0,n.useEffect)((function(){x&&(document.title="Eron Tancioco | Projects",d(!0))}),[x]);return(0,h.jsx)("section",{children:(0,h.jsxs)("div",{className:o+" container",name:"Projects",ref:b,children:[(0,h.jsx)(c.Z,{content:"projects",inView:s}),(0,h.jsx)(P,{handleFilterClick:function(){m([])},setShownProjects:m}),(0,h.jsx)("div",{className:"row","data-testid":"project-cards",children:0!==u.length?u.map((function(e,t){return(0,h.jsx)(w,(0,a.Z)({},e),"project-"+t)})):"No project with the selected filter..."})]})})};_.defaultProps={};var S=_},8941:function(e,t,s){e.exports=s.p+"static/media/bnm-1.75e1c485b76df2ecfdc9.png"},3145:function(e,t,s){e.exports=s.p+"static/media/bnm-2.1287b5df8721b79abd8d.png"},1772:function(e,t,s){e.exports=s.p+"static/media/bnm-3.fd6cd43e20fe6a3c27ab.png"},1603:function(e,t,s){e.exports=s.p+"static/media/bnm-4.00d782cf657b0061c186.png"},1181:function(e,t,s){e.exports=s.p+"static/media/fpc-mobile-1.4c8748e4074264b58b53.png"},6915:function(e,t,s){e.exports=s.p+"static/media/fpc-mobile-2.45395fc370b0a179084a.png"},7303:function(e,t,s){e.exports=s.p+"static/media/fpc-mobile-3.483c895eccc5236f944f.png"},4477:function(e,t,s){e.exports=s.p+"static/media/fpc-mobile-4.8c55338d7f80973540be.png"},9207:function(e,t,s){e.exports=s.p+"static/media/fpc-mobile-5.eeedc241a920dd4f237b.png"},1397:function(e,t,s){e.exports=s.p+"static/media/portal-1.75d7d4087097b361a37e.png"},1050:function(e,t,s){e.exports=s.p+"static/media/portfolio-1.3c3f52c5a943753a0796.png"},8738:function(e,t,s){e.exports=s.p+"static/media/portfolio-2.386c28784ec1cbabb5c0.png"},5080:function(e,t,s){e.exports=s.p+"static/media/portfolio-3.495bdb80e5c1c0cfc377.png"},1745:function(e,t,s){e.exports=s.p+"static/media/sugar-1.9f0d284f6dae3a7da495.png"},7909:function(e,t,s){e.exports=s.p+"static/media/sugar-2.5ecd614a07116f6eaa2b.png"},6874:function(e,t,s){e.exports=s.p+"static/media/sugar-3.8016ff76615dbfb9800e.png"},1229:function(e,t,s){e.exports=s.p+"static/media/sugar-4.172ab06db7badcd26754.png"},8683:function(e,t,s){e.exports=s.p+"static/media/sugar-5.ea70263bd16fff85c160.png"},1916:function(e,t,s){e.exports=s.p+"static/media/wastelanders-1.942e3e3689bb428d79e4.png"},9166:function(e,t,s){e.exports=s.p+"static/media/wastelanders-2.8e58097f0bcedb692af3.png"},840:function(e,t,s){e.exports=s.p+"static/media/wastelanders-3.2f45505b3528dcd80d74.png"},4068:function(e,t,s){e.exports=s.p+"static/media/wastelanders-4.68ce77d39bcf8b45d631.png"},5722:function(e,t,s){e.exports=s.p+"static/media/wastelanders-5.e808c39f7ddb6e5ad3c5.png"},3467:function(e,t,s){e.exports=s.p+"static/media/wastelanders-6.626bbc910278e3a28b21.png"}}]);
//# sourceMappingURL=922.252199fb.chunk.js.map