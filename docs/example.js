!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=7)}([function(t,n,e){var r=e(5);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(8).default)("9debf61c",r,!1,{})},function(t,n){t.exports=Vue},function(t,n,e){window,t.exports=function(t){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=16)}([function(t,n){var e=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports={default:e(17),__esModule:!0}},function(n,e){n.exports=t},function(t,n,e){var r=e(2),o=e(0),i=e(19),u=e(21),c=e(8),a=function(t,n,e){var s,f,l,p=t&a.F,d=t&a.G,v=t&a.S,h=t&a.P,g=t&a.B,m=t&a.W,y=d?o:o[n]||(o[n]={}),b=y.prototype,_=d?r:v?r[n]:(r[n]||{}).prototype;for(s in d&&(e=n),e)(f=!p&&_&&void 0!==_[s])&&c(y,s)||(l=f?_[s]:e[s],y[s]=d&&"function"!=typeof _[s]?e[s]:g&&f?i(l,r):m&&_[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[s]=l,t&a.R&&b&&!b[s]&&u(b,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(29),o=e(38);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(11),o=e(12);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(12);t.exports=function(t){return Object(r(t))}},function(t,n,e){t.exports={default:e(41),__esModule:!0}},function(t,n,e){"use strict";e.r(n),e.d(n,"VueTinymce",function(){return r});var r=e(44).default,o=void 0;function i(t){o?console.warn("[VueTinymce] already installed. Vue.use(VueTinymce) should be called only once."):(o=t).component(r.name,r)}r.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(t,n,e){e(18),t.exports=e(0).Object.assign},function(t,n,e){var r=e(7);r(r.S+r.F,"Object",{assign:e(28)})},function(t,n,e){var r=e(20);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(22),o=e(27);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(23),o=e(24),i=e(26),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(4)&&!e(1)(function(){return 7!=Object.defineProperty(e(25)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(3),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){"use strict";var r=e(9),o=e(39),i=e(40),u=e(14),c=e(11),a=Object.assign;t.exports=!a||e(1)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r})?function(t,n){for(var e=u(t),a=arguments.length,s=1,f=o.f,l=i.f;a>s;)for(var p,d=c(arguments[s++]),v=f?r(d).concat(f(d)):r(d),h=v.length,g=0;h>g;)l.call(d,p=v[g++])&&(e[p]=d[p]);return e}:a},function(t,n,e){var r=e(8),o=e(10),i=e(31)(!1),u=e(34)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(10),o=e(32),i=e(33);t.exports=function(t){return function(n,e,u){var c,a=r(n),s=o(a.length),f=i(u,s);if(t&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(13),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(13),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(35)("keys"),o=e(37);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=e(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(36)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!0},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){e(42),t.exports=e(0).Object.keys},function(t,n,e){var r=e(14),o=e(9);e(43)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(7),o=e(0),i=e(1);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){"use strict";e.r(n);var r=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"vue-tinymce-comp",attrs:{id:"vue-tinymce-"+this.id}},[n("textarea",{ref:"editor",attrs:{name:"vue-tinymce-content-"+this.id}})])};r._withStripped=!0;var o=e(5),i=e.n(o),u=e(15),c=e.n(u),a=e(6),s=e.n(a),f=function(t,n,e,r,o,i,u,c){var a,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=[],s._compiled=!0),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,n){return a.call(n),f(t,n)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:s}}({name:"VueTinymce",mixins:[],components:{},props:{id:{type:String,default:"1"},content:{type:String,required:!0},updateEvent:{type:String,default:"MouseOut"},url:{type:String,default:"https://cdn.jsdelivr.net/npm/tinymce@latest"},config:{type:Object,default:function(){return{}}}},data:function(){return{editor:null}},computed:{},watch:{config:{handler:"init",immediate:!0,deep:!0},content:{handler:"setContent",immediate:!0}},created:function(){},mounted:function(){},beforeDestroy:function(){this.destroy()},methods:{init:function(){var t=this;this.destroy();var n={};"[object Object]"===Object.prototype.toString.call(this.config)&&c()(this.config).length&&(n=i()(n,this.config)),!1!==n.language&&("[object String]"!==Object.prototype.toString.call(n.language)&&(n.language="zh_CN"),"[object String]"!==Object.prototype.toString.call(n.language_url)&&(n.language_url="https://cdn.jsdelivr.net/npm/@panhezeng/vue-tinymce@latest/src/langs/"+n.language+".min.js"));var e={font_formats:"Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Courier New=courier new,courier;Helvetica=helvetica;Symbol=symbol;Times New Roman=times new roman,times;Verdana=verdana,geneva;"};if("zh_CN"===n.language&&(e.font_formats='微软雅黑="微软雅黑";苹方="苹方";宋体="宋体";黑体="黑体";仿宋="仿宋";楷体="楷体";隶书="隶书";幼圆="幼圆";'+e.font_formats,e.content_style='body, td, pre {font-family:"微软雅黑", "苹方", "宋体", Verdana, Arial, Helvetica, sans-serif;}'),n=i()({convert_urls:!1,branding:!1,theme_url:this.url+"/themes/modern/theme.min.js",skin_url:this.url+"/skins/lightgray",menubar:!1,fontsize_formats:"12px 13px 14px 15px 16px 18px 20px 24px",external_plugins:{},plugins:"code hr link textcolor colorpicker advlist lists contextmenu paste table image imagetools media preview",contextmenu:"selectall copy paste inserttable",toolbar1:"code | undo redo | fontsizeselect fontselect | blockquote hr | removeformat link unlink pastetext preview | image media",toolbar2:"bold italic underline strikethrough | forecolor backcolor | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist"},e,n),"[object String]"===Object.prototype.toString.call(n.plugins)){var r=n.plugins.match(/([\d\w]+)/gm);"[object Array]"===Object.prototype.toString.call(r)&&r.forEach(function(e){n.external_plugins[e]=t.url+"/plugins/"+e+"/plugin.min.js"})}delete n.plugins,this.$nextTick(function(){n.target=t.$refs.editor,n.init_instance_callback=function(n){"[object Function]"===Object.prototype.toString.call(t.config.init_instance_callback)&&t.config.init_instance_callback(n),t.editor=n,t.setContent(),n.on(t.updateEvent,t.contentChange)},s.a.init(n)})},destroy:function(){try{this.editor&&(this.editor.destroy(),this.editor=null),s.a.remove()}catch(t){}},setContent:function(){this.editor&&this.editor.getContent()!==this.content&&this.editor.setContent(this.content)},contentChange:function(t){this.editor&&this.$emit("update:content",this.editor.getContent())}}},r);f.options.__file="src/VueTinymce.vue",n.default=f.exports}]).VueTinymce}(e(3))},function(t,n){t.exports=tinymce},function(t,n,e){"use strict";var r=e(0);e.n(r).a},function(t,n,e){(t.exports=e(6)(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),n.push(u))}},n}},function(t,n,e){"use strict";e.r(n);var r=e(1),o=e.n(r),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("VueTinymce example")]),t._v(" "),e("button",{on:{click:function(n){t.show=!t.show}}},[t._v("点击加载移除编辑器，测试初始化和销毁：：："+t._s(t.show?"销毁":"加载"))]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("button",{on:{click:t.switchLanguage}},[t._v("点击切换语言，测试更新config")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),t.show?e("vue-tinymce",{attrs:{content:t.content,config:t.config},on:{"update:content":function(n){t.content=n}}}):t._e(),t._v(" "),e("h2",[t._v("output")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.content)}})],1)};i._withStripped=!0,e(2);var u={name:"App",data:function(){return{content:"init content",show:!0,locale:""}},computed:{config:function(){var t={};return"en"===this.locale&&(t={language:"en_CA"}),t}},created:function(){},methods:{switchLanguage:function(){this.locale?this.locale="":this.locale="en"}}};e(4);var c=function(t,n,e,r,o,i,u,c){var a,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=a):o&&(a=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,n){return a.call(n),f(t,n)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:s}}(u,i,[],!1,null,null,null);c.options.__file="example/components/App.vue";var a=c.exports;new o.a({el:"#app",render:function(t){return t(a)}})},function(t,n,e){"use strict";function r(t,n){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],u=i[0],c={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(c):e.push(r[u]={id:u,parts:[c]})}return e}e.r(n),e.d(n,"default",function(){return v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},u=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,a=0,s=!1,f=function(){},l=null,p="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,n,e,o){s=e,l=o||{};var u=r(t,n);return h(u),function(n){for(var e=[],o=0;o<u.length;o++){var c=u[o];(a=i[c.id]).refs--,e.push(a)}n?h(u=r(t,n)):u=[];for(o=0;o<e.length;o++){var a;if(0===(a=e[o]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}}function h(t){for(var n=0;n<t.length;n++){var e=t[n],r=i[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(m(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{var u=[];for(o=0;o<e.parts.length;o++)u.push(m(e.parts[o]));i[e.id]={id:e.id,refs:1,parts:u}}}}function g(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function m(t){var n,e,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(s)return f;r.parentNode.removeChild(r)}if(d){var o=a++;r=c||(c=g()),n=b.bind(null,r,o,!1),e=b.bind(null,r,o,!0)}else r=g(),n=function(t,n){var e=n.css,r=n.media,o=n.sourceMap;r&&t.setAttribute("media",r);l.ssrId&&t.setAttribute(p,n.id);o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}var y=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function b(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(n,o);else{var i=document.createTextNode(o),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(i,u[n]):t.appendChild(i)}}}]);