/*! For license information please see streamform.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Streamform=e():t.Streamform=e()}(self,(()=>(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var v="suspendedStart",d="suspendedYield",m="executing",y="completed",g={};function w(){}function b(){}function O(){}var S={};f(S,u,(function(){return this}));var E=Object.getPrototypeOf,P=E&&E(E(A([])));P&&P!==o&&i.call(P,u)&&(S=P);var x=O.prototype=w.prototype=Object.create(S);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(o,a,c,u){var l=h(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function k(t,e,n){var o=v;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=h(t,e,n);if("normal"===l.type){if(o=n.done?y:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function T(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=O,a(x,"constructor",{value:O,configurable:!0}),a(O,"constructor",{value:b,configurable:!0}),b.displayName=f(O,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},L(j.prototype),f(j.prototype,l,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(e,r,n){return(r=function(e){var r=function(e){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}return function(){if(!window.streamform){var t,n,i,a,c,u,l=null===(t=document.currentScript)||void 0===t?void 0:t.getAttribute("data-token"),s=(null===(n=document.currentScript)||void 0===n||null===(n=n.getAttribute("data-skip-patterns"))||void 0===n?void 0:n.split(","))||[],f=(null===(i=document.currentScript)||void 0===i||null===(i=i.getAttribute("data-mask-patterns"))||void 0===i?void 0:i.split(","))||[],p="false"!==(null===(a=document.currentScript)||void 0===a?void 0:a.getAttribute("data-auto-page-view")),h=function(t){var n,i,a,c,u="streamform_vid",l=t.token,s=null!==(n=t.apiHost)&&void 0!==n?n:"https://api.streamform.io",f=null!==(i=t.maskPatterns)&&void 0!==i?i:[],p=null!==(a=t.skipPatterns)&&void 0!==a?a:[],h=null!==(c=t.cookieOnIdentify)&&void 0!==c&&c,v=localStorage.getItem(u),d={},m=null,y=sessionStorage.getItem("streamform:referrer")?"":document.referrer;function g(t){return function(t,e){var r,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("1"===localStorage.getItem("streamform-do-not-track"))return Promise.resolve();var i=o({},e);return d.userId&&(i.visitorId=d.userId),v&&(i.visitorId=v),n&&null!==(r=navigator)&&void 0!==r&&r.sendBeacon?(navigator.sendBeacon(t,JSON.stringify(i)),Promise.resolve()):fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0})}("".concat(s,"/message"),o({token:l,deviceTimestamp:(new Date).toISOString(),device:{language:navigator.language||navigator.userLanguage,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}},t),!0)}function w(){if(m!==window.location.pathname){m=window.location.pathname;var t=O(window.location.pathname);if(t){y&&!y.includes(location.hostname)||(y=null);var e=function(){var t=new URLSearchParams(window.location.search),e={};return["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach((function(r){t.has(r)&&(e[r]=t.get(r))})),Object.keys(e).length>0?e:null}(),r={pathname:t+window.location.search,referrer:y,pageTitle:document.title};e&&(r.utmParams=e),g({eventName:"page",eventType:"navigation",origin:window.location.origin,page:r}),y&&(y=null,sessionStorage.setItem("streamform:referrer","set"))}}}function b(t,e){var r=O(window.location.pathname);r&&g({eventName:t,eventType:"track",origin:window.location.origin,page:{pathname:r+window.location.search,referrer:y,pageTitle:document.title},data:e})}function O(t){var e=p.map((function(t){return new RegExp("^".concat(t.replace(/\*/g,"[^/]+"),"$"))})),r=f.map((function(t){return new RegExp("^".concat(t.replace(/\*/g,"[^/]+"),"$"))}));if(e.some((function(e){return e.test(t)})))return null;for(var n=0;n<f.length;n++)if(r[n].test(t))return f[n];return t}return{track:b,page:w,identify:function(t){d=o(o({},d),t),g({eventType:"identify",origin:window.location.origin,data:d}).then(function(){var t,n=(t=e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,r.json();case 3:null!=(n=t.sent)&&n.visitorId&&(v=n.visitorId,h&&localStorage.setItem(u,v));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(t){return n.apply(this,arguments)}}())},enableAutoPageView:function(){var e,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t.autoPageView&&!r||(t.autoPageView=!0,e=history.pushState,history.pushState=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];e.apply(this,r),w()},addEventListener("popstate",w),"visible"!==document.visibilityState?document.addEventListener("visibilitychange",(function(){m||"visible"!==document.visibilityState||w()})):w(),document.addEventListener("click",(function(t){var e=t.target;if(e&&("INPUT"!==e.tagName&&"SELECT"!==e.tagName&&"TEXTAREA"!==e.tagName||"submit"===e.type)){for(;e&&(null===(r=e)||void 0===r||!r.hasAttribute("data-sf-event"));){var r;e=e.parentElement}if(e){var n=e.getAttribute("data-sf-event");if(n){for(var o={},i=0,a=Array.from(e.attributes);i<a.length;i++){var c=a[i];c.name.startsWith("data-sf-event-")&&c.value&&(o[c.name.slice(14)]=c.value)}if("FORM"===e.tagName)for(var u=0,l=Array.from(e.elements);u<l.length;u++){var s=l[u];"password"!==s.type&&s.name&&s.value&&(o[s.name]=s.value)}b(n,o)}}}})))},doNotTrack:function(){localStorage.setItem("streamform-do-not-track","1")}}}({token:l,skipPatterns:s,maskPatterns:f,autoPageView:p,apiHost:null===(c=document.currentScript)||void 0===c?void 0:c.getAttribute("data-api-host"),cookieOnIdentify:"true"===(null===(u=document.currentScript)||void 0===u?void 0:u.getAttribute("data-cookie-on-identify"))});window.streamform=h,p&&h.enableAutoPageView(!0)}}(),{}})()));