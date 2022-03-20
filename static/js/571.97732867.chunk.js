/*! For license information please see 571.97732867.chunk.js.LICENSE.txt */
(self.webpackChunkekown_github_io=self.webpackChunkekown_github_io||[]).push([[571],{5571:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return G}});var t=r(181);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);s=!0);}catch(l){a=!0,i=l}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,n)||(0,t.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(2791);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function a(e,n){return a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},a(e,n)}var l=new Map,c=new WeakMap,u=0,f=void 0;function d(e){return Object.keys(e).sort().filter((function(n){return void 0!==e[n]})).map((function(n){return n+"_"+("root"===n?(r=e.root)?(c.has(r)||(u+=1,c.set(r,u.toString())),c.get(r)):"0":e[n]);var r})).toString()}function p(e,n,r,t){if(void 0===r&&(r={}),void 0===t&&(t=f),"undefined"===typeof window.IntersectionObserver&&void 0!==t){var i=e.getBoundingClientRect();return n(t,{isIntersecting:t,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var n=d(e),r=l.get(n);if(!r){var t,i=new Map,o=new IntersectionObserver((function(n){n.forEach((function(n){var r,o=n.isIntersecting&&t.some((function(e){return n.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=o),null==(r=i.get(n.target))||r.forEach((function(e){e(o,n)}))}))}),e);t=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:o,elements:i},l.set(n,r)}return r}(r),s=o.id,a=o.observer,c=o.elements,u=c.get(e)||[];return c.has(e)||c.set(e,u),u.push(n),a.observe(e),function(){u.splice(u.indexOf(n),1),0===u.length&&(c.delete(e),a.unobserve(e)),0===c.size&&(a.disconnect(),l.delete(s))}}var h=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function v(e){return"function"!==typeof e.children}var b=function(e){var n,r;function t(n){var r;return(r=e.call(this,n)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,n){e&&r.props.triggerOnce&&r.unobserve(),v(r.props)||r.setState({inView:e,entry:n}),r.props.onChange&&r.props.onChange(e,n)},r.state={inView:!!n.initialInView,entry:void 0},r}r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,a(n,r);var i=t.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,n=e.threshold,r=e.root,t=e.rootMargin,i=e.trackVisibility,o=e.delay,s=e.fallbackInView;this._unobserveCb=p(this.node,this.handleChange,{threshold:n,root:r,rootMargin:t,trackVisibility:i,delay:o},s)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!v(this.props)){var e=this.state,n=e.inView,r=e.entry;return this.props.children({inView:n,entry:r,ref:this.handleNode})}var t=this.props,i=t.children,a=t.as,l=t.tag,c=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(t,h);return o.createElement(a||l||"div",s({ref:this.handleNode},c),i)},t}(o.Component);function g(e){var n=void 0===e?{}:e,r=n.threshold,t=n.delay,i=n.trackVisibility,s=n.rootMargin,a=n.root,l=n.triggerOnce,c=n.skip,u=n.initialInView,f=n.fallbackInView,d=o.useRef(),h=o.useState({inView:!!u}),v=h[0],b=h[1],g=o.useCallback((function(e){void 0!==d.current&&(d.current(),d.current=void 0),c||e&&(d.current=p(e,(function(e,n){b({inView:e,entry:n}),n.isIntersecting&&l&&d.current&&(d.current(),d.current=void 0)}),{root:a,rootMargin:s,threshold:r,trackVisibility:i,delay:t},f))}),[Array.isArray(r)?r.toString():r,a,s,l,c,i,f,t]);(0,o.useEffect)((function(){d.current||!v.entry||l||c||b({inView:!!u})}));var m=[g,v.inView,v.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}b.displayName="InView",b.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var m="Profile_profile__WmhVH",y=r(184),x=function(){return(0,y.jsxs)("div",{className:m+" row mt-md-4",children:[(0,y.jsx)("div",{className:"col-8 offset-2 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-5 offset-lg-0 col-xl-5 mt-4",children:(0,y.jsx)("div",{className:"picture"})}),(0,y.jsx)("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 offset-lg-1 col-xl-6 text d-flex align-items-center",children:(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{children:"I was a Junior Software Engineer at "}),(0,y.jsx)("a",{href:"https://www.honcho.com.au",target:"_blank",rel:"noreferrer",children:"Honcho"}),(0,y.jsx)("span",{children:" in Pasay, Philippines. I have worked with different projects and technologies ranging from Zend to Angular. I handled both front-end and back-end tasks for the company. I have a thirst for knowledge and hunger for innovation. Let's make something new and exciting."})]})})]})};x.defaultProps={};var j=x,w="Experience_experience__D8RE5";function O(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){O(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function P(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var V=r(1694),S=r.n(V),C=["xxl","xl","lg","md","sm","xs"],I=o.createContext({prefixes:{},breakpoints:C});I.Consumer,I.Provider;function _(e,n){var r=(0,o.useContext)(I).prefixes;return e||r[n]||n}function E(e,n){var r=0;return o.Children.map(e,(function(e){return o.isValidElement(e)?n(e,r++):e}))}var M=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],A=["isChild"],H=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"];function R(e,n,r){var t=(e-n)/(r-n)*100;return Math.round(1e3*t)/1e3}function D(e,n){var r,t=e.min,i=e.now,o=e.max,s=e.label,a=e.visuallyHidden,l=e.striped,c=e.animated,u=e.className,f=e.style,d=e.variant,p=e.bsPrefix,h=P(e,M);return(0,y.jsx)("div",k(k({ref:n},h),{},{role:"progressbar",className:S()(u,"".concat(p,"-bar"),(r={},O(r,"bg-".concat(d),d),O(r,"".concat(p,"-bar-animated"),c),O(r,"".concat(p,"-bar-striped"),c||l),r)),style:k({width:"".concat(R(i,t,o),"%")},f),"aria-valuenow":i,"aria-valuemin":t,"aria-valuemax":o,children:a?(0,y.jsx)("span",{className:"visually-hidden",children:s}):s}))}var B=o.forwardRef((function(e,n){var r=e.isChild,t=P(e,A);if(t.bsPrefix=_(t.bsPrefix,"progress"),r)return D(t,n);var i=t.min,s=t.now,a=t.max,l=t.label,c=t.visuallyHidden,u=t.striped,f=t.animated,d=t.bsPrefix,p=t.variant,h=t.className,v=t.children,b=P(t,H);return(0,y.jsx)("div",k(k({ref:n},b),{},{className:S()(h,d),children:v?E(v,(function(e){return(0,o.cloneElement)(e,{isChild:!0})})):D({min:i,now:s,max:a,label:l,visuallyHidden:c,striped:u,animated:f,bsPrefix:d,variant:p},n)}))}));B.displayName="ProgressBar",B.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var T,L=B,U={html:"HTML",css:"CSS",js:"JS",php:"PHP",mysql:"MySQL",nodejs:"NodeJS",laravel:"Laravel",react:"React"},J=(O(T={},U.html,.9),O(T,U.js,.9),O(T,U.css,.9),O(T,U.mysql,.8),O(T,U.nodejs,.3),O(T,U.angular,.6),O(T,U.laravel,.6),T),W=r(9963),$=r.n(W);function q(e){if(e&&!(e<=0))return $()(e,1,33)?"info":$()(e,34,66)?"warning":$()(e,67,100)?"success":void 0}var Z=function(){var e=i((0,o.useState)(0),2),n=e[0],r=e[1],t=i(g({threshold:.5,triggerOnce:!0}),2),s=t[0],a=t[1],l=[];for(var c in function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=(0,o.useRef)();(0,o.useEffect)((function(){r.current=e}),[e]),(0,o.useEffect)((function(){var e=setInterval((function(){r.current()}),n);return function(){return clearInterval(e)}}),[n])}((function(){a&&n<100&&r((function(e){return e+1}))}),0),U){var u=U[c],f=J[u];if("number"===typeof f){f*=n;var d=(0,y.jsxs)("div",{className:"row",children:[(0,y.jsx)("div",{className:"col-2 progress-label",children:u}),(0,y.jsx)("div",{className:"col-10",children:(0,y.jsx)(L,{striped:!0,variant:q(f),now:f})})]},c);l.push(d)}}return(0,y.jsx)("div",{className:w,children:(0,y.jsx)("div",{className:"row",children:(0,y.jsxs)("div",{className:"col-12 tech-content",children:[(0,y.jsxs)("div",{className:"row legend-row",children:[(0,y.jsxs)("div",{className:"col-4 legend-col",children:[(0,y.jsx)("span",{className:"legend legend--b"}),(0,y.jsx)("span",{className:"legend-text",children:" - Beginner"})]}),(0,y.jsxs)("div",{className:"col-4 legend-col",children:[(0,y.jsx)("span",{className:"legend legend--i"}),(0,y.jsx)("span",{className:"legend-text",children:" - Intermediate"})]}),(0,y.jsxs)("div",{className:"col-4 legend-col",children:[(0,y.jsx)("span",{className:"legend legend--p"}),(0,y.jsx)("span",{className:"legend-text",children:" - Professional"})]})]}),(0,y.jsx)("div",{ref:s,children:l})]})})})};Z.defaultProps={};var z=Z,F="About_about__h8-vH",Q=function(){var e=i(g({threshold:.5,triggerOnce:!0}),2),n=e[0],r=e[1];return(0,y.jsxs)("div",{className:F+" container",name:"about",ref:n,children:[(0,y.jsx)("div",{className:"underline"+(r?" underline-active":""),children:(0,y.jsx)("div",{className:"title pt-3",children:"ABOUT"})}),(0,y.jsxs)("div",{className:"content",children:[(0,y.jsx)(j,{}),(0,y.jsx)(z,{})]})]})};Q.defaultProps={};var G=Q},1694:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)t.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(n,[]))||(e.exports=r)}()},7197:function(e,n,r){var t=r(7009).Symbol;e.exports=t},9066:function(e,n,r){var t=r(7197),i=r(1587),o=r(3581),s=t?t.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?i(e):o(e)}},5292:function(e){var n=Math.max,r=Math.min;e.exports=function(e,t,i){return e>=r(t,i)&&e<n(t,i)}},821:function(e,n,r){var t=r(6050),i=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(i,""):e}},1032:function(e,n,r){var t="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=t},1587:function(e,n,r){var t=r(7197),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=t?t.toStringTag:void 0;e.exports=function(e){var n=o.call(e,a),r=e[a];try{e[a]=void 0;var t=!0}catch(l){}var i=s.call(e);return t&&(n?e[a]=r:delete e[a]),i}},3581:function(e){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},7009:function(e,n,r){var t=r(1032),i="object"==typeof self&&self&&self.Object===Object&&self,o=t||i||Function("return this")();e.exports=o},6050:function(e){var n=/\s/;e.exports=function(e){for(var r=e.length;r--&&n.test(e.charAt(r)););return r}},9963:function(e,n,r){var t=r(5292),i=r(1495),o=r(2582);e.exports=function(e,n,r){return n=i(n),void 0===r?(r=n,n=0):r=i(r),e=o(e),t(e,n,r)}},8092:function(e){e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},3141:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},152:function(e,n,r){var t=r(9066),i=r(3141);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==t(e)}},1495:function(e,n,r){var t=r(2582),i=1/0;e.exports=function(e){return e?(e=t(e))===i||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},2582:function(e,n,r){var t=r(821),i=r(8092),o=r(152),s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=i(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var r=a.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):s.test(e)?NaN:+e}}}]);
//# sourceMappingURL=571.97732867.chunk.js.map