(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[699],{834:function(t,r,e){!function(t){"use strict";t.defineMode("troff",(function(){var t={};function r(r){if(r.eatSpace())return null;var e=r.sol(),n=r.next();if("\\"===n)return r.match("fB")||r.match("fR")||r.match("fI")||r.match("u")||r.match("d")||r.match("%")||r.match("&")?"string":r.match("m[")?(r.skipTo("]"),r.next(),"string"):r.match("s+")||r.match("s-")?(r.eatWhile(/[\d-]/),"string"):r.match("(")||r.match("*(")?(r.eatWhile(/[\w-]/),"string"):"string";if(e&&("."===n||"'"===n)&&r.eat("\\")&&r.eat('"'))return r.skipToEnd(),"comment";if(e&&"."===n){if(r.match("B ")||r.match("I ")||r.match("R "))return"attribute";if(r.match("TH ")||r.match("SH ")||r.match("SS ")||r.match("HP "))return r.skipToEnd(),"quote";if(r.match(/[A-Z]/)&&r.match(/[A-Z]/)||r.match(/[a-z]/)&&r.match(/[a-z]/))return"attribute"}r.eatWhile(/[\w-]/);var a=r.current();return t.hasOwnProperty(a)?t[a]:null}function e(t,e){return(e.tokens[0]||r)(t,e)}return{startState:function(){return{tokens:[]}},token:function(t,r){return e(t,r)}}})),t.defineMIME("text/troff","troff"),t.defineMIME("text/x-troff","troff"),t.defineMIME("application/x-troff","troff")}(e(10))}}]);
//# sourceMappingURL=699.f987a3ad.chunk.js.map