webpackJsonp([4],{339:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return r({},s.CALL_API,{endpoint:"/api/articles",method:"GET",types:[u.l,{type:u.m,payload:function(e,t,n){return n.json().then(function(e){return Object(f.normalize)(e,{articles:[p.a]})})}},u.k]})}function a(e){return r({},s.CALL_API,{endpoint:"/api/articles/"+e,method:"GET",types:[u.o,{type:u.p,payload:function(e,t,n){return n.json().then(function(e){return Object(f.normalize)(e,{article:p.a})})}},u.n]})}function i(e){return r({},s.CALL_API,{endpoint:"/api/articles",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e),types:[u.b,{type:u.c,payload:function(e,t,n){return n.json().then(function(e){return Object(f.normalize)(e,{article:p.a})})}},u.a]})}function c(e,t){return r({},s.CALL_API,{endpoint:"/api/articles/"+e,method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t),types:[u.i,{type:u.j,payload:function(e,t,n){return n.json().then(function(e){return Object(f.normalize)(e,{article:p.a})})}},u.h]})}function l(e){return{type:u.g,id:e}}t.e=o,t.d=a,t.a=i,t.c=c,t.b=l;var u=n(24),s=n(60),f=(n.n(s),n(152)),p=(n.n(f),n(151))},341:function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}n.d(t,"a",function(){return r});var o=n(1),a=(n.n(o),n(61)),i=(n.n(a),n(62)),c=(n.n(i),n(342)),l=(n.n(c),n(153)),u=n.n(l),s=("function"==typeof Symbol&&Symbol.iterator,function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),f=(Object.assign,function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}),p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},m=(Object.keys,function(e){function t(){return s(this,t),p(this,e.apply(this,arguments))}return f(t,e),t.prototype.render=function(){return null},t}(o.Component));m.displayName="Nothing";var b={fromESObservable:null,toESObservable:null},y={fromESObservable:function(e){return"function"==typeof b.fromESObservable?b.fromESObservable(e):e},toESObservable:function(e){return"function"==typeof b.toESObservable?b.toESObservable(e):e}}},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createChangeEmitter=function(){function e(){o===r&&(o=r.slice())}function t(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var n=!0;return e(),o.push(t),function(){if(n){n=!1,e();var r=o.indexOf(t);o.splice(r,1)}}}function n(){r=o;for(var e=r,t=0;t<e.length;t++)e[t].apply(e,arguments)}var r=[],o=r;return{listen:t,emit:n}}},347:function(e,t,n){"use strict";function r(e){var t={};return e.title||(t.title="Required."),e.excerpt||(t.excerpt="Required."),e.content||(t.content="Required."),t}var o=n(1),a=n.n(o),i=n(4),c=n.n(i),l=n(155),u=n(338),s=n(348),f=n.n(s),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(e){var t=e.input,n=e.label,r=e.type,o=e.element,i=e.rows,c=e.meta,l=c.touched,u=c.error;return a.a.createElement("div",{className:f.a.group},a.a.createElement("label",null,n),"input"===o?a.a.createElement("input",p({},t,{type:r,placeholder:n})):a.a.createElement("textarea",p({},t,{rows:i,placeholder:n})),l&&u&&a.a.createElement("div",{className:f.a.error},u))},b=function(e){var t=e.header,n=e.handleSubmit;return a.a.createElement("form",null,a.a.createElement("h2",{className:f.a.title},t),a.a.createElement(l.a,{component:m,element:"input",type:"text",name:"title",label:"Title"}),a.a.createElement(l.a,{component:m,element:"textarea",rows:3,name:"excerpt",label:"Excerpt"}),a.a.createElement(l.a,{component:m,element:"textarea",rows:5,name:"content",label:"Content"}),a.a.createElement("div",{className:f.a.button},a.a.createElement(u.a,{type:"submit",onClick:n},t)))};b.propTypes={header:c.a.string.isRequired,onSubmit:c.a.func.isRequired},t.a=Object(l.c)({form:"article",validate:r})(b)},348:function(e,t,n){var r=n(349);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(59)(r,o);r.locals&&(e.exports=r.locals)},349:function(e,t,n){t=e.exports=n(58)(!0),t.push([e.i,"._2F-Ky{text-align:center;font-size:2rem;color:#ed5565;font-weight:900}._2nR9f{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:1rem 0}._2nR9f>label{-ms-flex:1;flex:1;margin-right:1rem}._2nR9f>input,._2nR9f textarea{-ms-flex:3;flex:3}._3g5zx{text-align:center}._12lq7{-ms-flex:1;flex:1;color:#da4453}","",{version:3,sources:["C:/Projects/core-react/client/src/features/articles/components/C:/Projects/core-react/client/src/features/articles/components/ArticleForm.scss","C:/Projects/core-react/client/src/features/articles/components/C:/Projects/core-react/client/src/theme/_colors.scss"],names:[],mappings:"AAGA,QACE,kBACA,eACA,cACA,eAAgB,CACjB,QAGC,oBAAA,aACA,sBAAA,mBACA,aAAqB,CAHvB,cAMI,WAAA,OACA,iBAAyB,CAP7B,+BAWI,WAAA,MAAO,CACR,QAID,iBAAkB,CACnB,QAGC,WAAA,OACA,aC9B8B,CD+B/B",file:"ArticleForm.scss",sourcesContent:["@import '~Theme/variables';\r\n@import '~Theme/colors';\r\n\r\n.title {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: $grape-fruit-light-color;\r\n  font-weight: 900;\r\n}\r\n\r\n.group {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: $gutter / 2 0;\r\n\r\n  & > label {\r\n    flex: 1;\r\n    margin-right: $gutter / 2;\r\n  }\r\n\r\n  & > input, textarea {\r\n    flex: 3;\r\n  }\r\n}\r\n\r\n.button {\r\n  text-align: center;\r\n}\r\n\r\n.error {\r\n  flex: 1;\r\n  color: $grape-fruit-dark-color;\r\n}\r\n","$grape-fruit-light-color: #ED5565;\r\n$grape-fruit-dark-color: #DA4453;\r\n"],sourceRoot:""}]),t.locals={title:"_2F-Ky",group:"_2nR9f",button:"_3g5zx",error:"_12lq7"}},365:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),c=n.n(i),l=n(19),u=n(8),s=n(341),f=n(347),p=n(339),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){return c.a.createElement(f.a,{header:"New Article",onSubmit:this.props.createArticle})}}]),t}(i.PureComponent);t.default=Object(s.a)(u.e,Object(l.b)(null,function(e,t){return{createArticle:function(n){e(Object(p.a)(n)),t.history.push("/articles")}}}))(b)}});
//# sourceMappingURL=4.fd5d9516a18f99b17e2d.js.map