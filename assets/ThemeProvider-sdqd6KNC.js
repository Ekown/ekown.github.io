import{g as p,r as i}from"./index-CtcKwBdl.js";var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var o={}.hasOwnProperty;function s(){for(var t="",r=0;r<arguments.length;r++){var e=arguments[r];e&&(t=a(t,f(e)))}return t}function f(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var e in t)o.call(t,e)&&t[e]&&(r=a(r,e));return r}function a(t,r){return r?t?t+" "+r:t+r:t}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(c);var x=c.exports;const v=p(x),l=["xxl","xl","lg","md","sm","xs"],m="xs",u=i.createContext({prefixes:{},breakpoints:l,minBreakpoint:m});function y(n,o){const{prefixes:s}=i.useContext(u);return n||s[o]||o}function A(){const{dir:n}=i.useContext(u);return n==="rtl"}export{A as a,v as c,y as u};
