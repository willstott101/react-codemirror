(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[197],{241:function(e,a){!function(e){var a=e.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,n){"string"==typeof a&&(a=[a]),a.forEach((function(a){!function(a,n){var t="doc-comment",r=e.languages[a];if(r){var o=r[t];if(!o){o=(r=e.languages.insertBefore(a,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[t]}if(o instanceof RegExp&&(o=r[t]={pattern:o}),Array.isArray(o))for(var i=0,s=o.length;i<s;i++)o[i]instanceof RegExp&&(o[i]={pattern:o[i]}),n(o[i]);else n(o)}}(a,(function(e){e.inside||(e.inside={}),e.inside.rest=n}))}))}}),a.addSupport(["java","javascript","php"],a)}(Prism)}}]);
//# sourceMappingURL=197.6170925c.chunk.js.map