(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[634],{759:function(e,r,i){!function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(r){var i=r.string.search(/[\t ]+?$/);if(!r.sol()||0===i)return r.skipToEnd(),("error "+(e[r.string.charAt(0)]||"")).replace(/ $/,"");var t=e[r.peek()]||r.skipToEnd();return-1===i?r.skipToEnd():r.pos=i,t}}})),e.defineMIME("text/x-diff","diff")}(i(10))}}]);
//# sourceMappingURL=634.66cfd50e.chunk.js.map