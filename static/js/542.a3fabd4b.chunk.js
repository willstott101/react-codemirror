(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[542],{894:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default="{# this is a comment #}\n{%- for item in li -%}\n  <li>{{ item.label }}</li>\n{% endfor -%}\n{{ item.sand == true and item.keyword == false ? 1 : 0 }}\n{{ app.get(55, 1.2, true) }}\n{% if app.get('_route') == ('_home') %}home{% endif %}\n{% if app.session.flashbag.has('message') %}\n  {% for message in app.session.flashbag.get('message') %}\n    {{ message.content }}\n  {% endfor %}\n{% endif %}\n{{ path('_home', {'section': app.request.get('section')}) }}\n{{ path('_home', {\n    'section': app.request.get('section'),\n    'boolean': true,\n    'number': 55.33\n  })\n}}\n{% include ('test.incl.html.twig') %}\n\n"}}]);
//# sourceMappingURL=542.a3fabd4b.chunk.js.map