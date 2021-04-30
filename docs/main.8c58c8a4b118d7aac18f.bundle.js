!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,t){if(w[e]&&b[e]){for(var r in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(p[r]=t[r]);0==--m&&0===y&&k()}}(e,r),t&&t(e,r)};var r,n=!0,o="8c58c8a4b118d7aac18f",i={},a=[],c=[];function s(e){var t=j[e];if(!t)return x;function n(n){return t.hot.active?(j[n]?-1===j[n].parents.indexOf(e)&&j[n].parents.push(e):(a=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),a=[]),x(n)}function o(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(t){x[e]=t}}}for(var i in x)Object.prototype.hasOwnProperty.call(x,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,o(i));return n.e=function(e){return"ready"===l&&f("prepare"),y++,x.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===l&&(g[e]||R(e),0===y&&0===m&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),x.t(e,-2&t)},n}var u=[],l="idle";function f(e){l=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var d,p,h,v,m=0,y=0,g={},b={},w={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return n=e,f("check"),function(e){return e=e||1e4,new Promise((function(t,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,i=x.p+""+o+".hot-update.json";n.open("GET",i,!0),n.timeout=e,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===n.status)t();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(n.responseText)}catch(e){return void r(e)}t(e)}}}))}(1e4).then((function(e){if(!e)return f(_()?"ready":"idle"),null;b={},g={},w=e.c,h=e.h,f("prepare");var t=new Promise((function(e,t){d={resolve:e,reject:t}}));return p={},R(0),"prepare"===l&&0===y&&0===m&&k(),t}))}function R(e){w[e]?(b[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=x.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function k(){f("ready");var e=d;if(d=null,e)if(n)Promise.resolve().then((function(){return S(n)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&t.push(O(r));e.resolve(t)}}function S(t){if("ready"!==l)throw new Error("apply() is only allowed in ready status");return function t(n){var c,s,u,l,d;function m(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));0<n.length;){var o=n.pop(),i=o.id,a=o.chain;if((l=j[i])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<l.parents.length;c++){var s=l.parents[c],u=j[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),y(r[s],[i])):(delete r[s],t.push(s),n.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}_();var g={},b=[],E={},R=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var k in p)if(Object.prototype.hasOwnProperty.call(p,k)){var S;d=O(k);var P=!1,T=!1,I=!1,C="";switch((S=p[k]?m(d):{type:"disposed",moduleId:k}).chain&&(C="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+S.moduleId+C));break;case"declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+C));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(S),n.ignoreUnaccepted||(P=new Error("Aborted because "+d+" is not accepted"+C));break;case"accepted":n.onAccepted&&n.onAccepted(S),T=!0;break;case"disposed":n.onDisposed&&n.onDisposed(S),I=!0;break;default:throw new Error("Unexception type "+S.type)}if(P)return f("abort"),Promise.reject(P);if(T)for(d in E[d]=p[d],y(b,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,d)&&(g[d]||(g[d]=[]),y(g[d],S.outdatedDependencies[d]));I&&(y(b,[S.moduleId]),E[d]=R)}var M,A=[];for(s=0;s<b.length;s++)d=b[s],j[d]&&j[d].hot._selfAccepted&&E[d]!==R&&!j[d].hot._selfInvalidated&&A.push({module:d,parents:j[d].parents.slice(),errorHandler:j[d].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&delete installedChunks[e]}));for(var D,L,G=b.slice();0<G.length;)if(d=G.pop(),l=j[d]){var H={},N=l.hot._disposeHandlers;for(u=0;u<N.length;u++)(c=N[u])(H);for(i[d]=H,l.hot.active=!1,delete j[d],delete g[d],u=0;u<l.children.length;u++){var U=j[l.children[u]];U&&0<=(M=U.parents.indexOf(d))&&U.parents.splice(M,1)}}for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=j[d]))for(L=g[d],u=0;u<L.length;u++)D=L[u],0<=(M=l.children.indexOf(D))&&l.children.splice(M,1);for(d in f("apply"),void 0!==h&&(o=h,h=void 0),p=void 0,E)Object.prototype.hasOwnProperty.call(E,d)&&(e[d]=E[d]);var F=null;for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(l=j[d])){L=g[d];var B=[];for(s=0;s<L.length;s++)if(D=L[s],c=l.hot._acceptedDependencies[D]){if(-1!==B.indexOf(c))continue;B.push(c)}for(s=0;s<B.length;s++){c=B[s];try{c(L)}catch(t){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:L[s],error:t}),n.ignoreErrored||(F=F||t)}}}for(s=0;s<A.length;s++){var Y=A[s];d=Y.module,a=Y.parents,r=d;try{x(d)}catch(c){if("function"==typeof Y.errorHandler)try{Y.errorHandler(c)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:c}),n.ignoreErrored||(F=F||t),F=F||c}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:c}),n.ignoreErrored||(F=F||c)}}return F?(f("fail"),Promise.reject(F)):v?t(n).then((function(e){return b.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):(f("idle"),new Promise((function(e){e(b)})))}(t=t||{})}function _(){if(v)return p=p||{},v.forEach(P),!(v=void 0)}function P(t){Object.prototype.hasOwnProperty.call(p,t)||(p[t]=e[t])}var j={};function x(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:function(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:r!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);0<=t&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":(p={})[t]=e[t],f("ready");break;case"ready":P(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:E,apply:S,status:function(e){if(!e)return l;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);0<=t&&u.splice(t,1)},data:i[t]};return r=void 0,n}(t),parents:(c=a,a=[],c),children:[]};return e[t].call(n.exports,n,n.exports,s(t)),n.l=!0,n.exports}x.m=e,x.c=j,x.d=function(e,t,r){x.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,t){if(1&t&&(e=x(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(x.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)x.d(r,n,function(t){return e[t]}.bind(null,n));return r},x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,"a",t),t},x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},x.p="./",x.h=function(){return o},s(5)(x.s=5)}([function(e,t){var r=["moveForward","turnRight","turnLeft","moveBackward"],n={f:r[0],r:r[1],l:r[2],b:r[3]};e.exports={commandsLUT:n,runtimes:{0:"terminal",1:"html"},directionLUT:{N:[-1,0],E:[0,1],S:[1,0],W:[0,-1]},compass:{0:"N",1:"E",2:"S",3:"W"},validCommands:r}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observers=[],this.messageHistory=[]}return function(e,t,n){t&&r(e.prototype,t)}(e,[{key:"addObserver",value:function(e){this.observers.push(e)}},{key:"emit",value:function(e){this.messageHistory.push(e),this.observers.map((function(t){return t(e)}))}}]),e}();function o(e,t,r,n){return[Math.floor(Math.random()*(r-e+1))+e,Math.floor(Math.random()*(n-t+1))+t][Math.random()<.5?0:1]}function i(e){return Math.floor(Math.random()*(e+1))}e.exports={Observable:n,arraySum:function(e,t){for(var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2,n=[],o=0;o<r;o+=1)n.push(e[o]+t[o]);return n},generateRandomNotInRange:o,generateRandomInt:i,removeFromString:function(e,t){return t.map((function(t){return e=e.split(t).join("")})),e},generatePositionInGrid:function(e,t,r){return[o(0,e,t,r),o(0,e,t,r)]},getFileTimestamp:function(){var e=new Date;return"".concat([e.getMonth()+1,e.getDate(),e.getFullYear()].join("-"),"_").concat([e.getHours(),e.getMinutes(),e.getSeconds()].join("-"))},compareNDArrays:function(e,t){var r;return e.forEach((function(e){return t.forEach((function(t){r=e===t}))})),r},generatePseudoRandomName:function(){var e=["Edward","Craig","Brian","Logan","Mable","Willard","Copeland","Marcus","Alvarado","Clara","Moreno","Ronald","Gonzales","Veronica","Richards","Hattie","Glover","Roxanne","Henry"];return e[i(e.length-1)]}}},function(e,t,r){(t=r(8)(!1)).push([e.i,"",""]),e.exports=t},function(e,t){var r={BG_WIN:"#617B30",FG_WIN:"#84A140",HIGHLIGHT:"#D2E190",BORDER_WIN:"#B5CF49",INACTIVE:"#74923A",DARK_WIN:"#00af5f",PLAYER:"#98e85a",ENEMY:"#5f5f00"},n="sprite",o="[ ".concat(n," ]"),i="{".concat(r.PLAYER,"-fg}").concat("^","{/}"),a="{".concat(r.PLAYER,"-fg}").concat(">","{/}"),c="{".concat(r.PLAYER,"-fg}").concat("v","{/}"),s="{".concat(r.PLAYER,"-fg}").concat("<","{/}"),u="{".concat(r.ENEMY,"-fg}").concat("^","{/}"),l="{".concat(r.ENEMY,"-fg}").concat(">","{/}"),f="{".concat(r.ENEMY,"-fg}").concat("v","{/}"),d="{".concat(r.ENEMY,"-fg}").concat("<","{/}"),p={0:o.replace(n,u),1:o.replace(n,l),2:o.replace(n,f),3:o.replace(n,d)},h={0:o.replace(n,i),1:o.replace(n,a),2:o.replace(n,c),3:o.replace(n,s)},v={string:o.replace(n,"#"),undefined:o.replace(n," ")};e.exports={colors:r,gridSpriteRenderer:v,roverSpriteRenderer:p,playerSpriteRenderer:h,GRID_SPRITE_TEMPLATE:o,SPRITE:n}},function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e){var t=0;return e<0?t=4:3<e&&(t=-4),e+t}var i=r(0),a=i.directionLUT,c=i.compass,s=r(3),u=s.playerSpriteRenderer,l=s.roverSpriteRenderer,f=r(1).arraySum,d=function(){function e(t,r,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.position=r,this.travel_log=[r],this._direction=n,this.board=o}return function(e,t,r){t&&n(e.prototype,t)}(e,[{key:"report",value:function(e){this.board.emit("".concat(this.name,": ").concat(e))}},{key:"makeTurn",value:function(e){this._direction=o(this._direction+e),this.report("Made a turn: new direction is ".concat(this.direction," with position ").concat(this.position))}},{key:"turnLeft",value:function(){this.report("Turning left!"),this.makeTurn(-1)}},{key:"turnRight",value:function(){this.report("Turning right!"),this.makeTurn(1)}},{key:"moveForward",value:function(){this.report("Moving forward!"),this.move(this.direction)}},{key:"moveBackward",value:function(){this.report("Moving backward!"),this.move(c[o(this._direction+2)])}},{key:"move",value:function(e){this.report("Moving in direction ".concat(a[e]," while facing ").concat(this.direction," = require(").concat(this.position,")"));try{var t=f(this.position,a[e]);this.position=this.board.validMove(t)}catch(e){this.report("Illegal move attempted, staying put: ".concat(e.message))}finally{this.report("Final position is ".concat(this.position)),this.travel_log.push(this.position)}}},{key:"ascii_sprite",get:function(){return"Starlord"===this.name?u[this._direction]:l[this._direction]}},{key:"direction",get:function(){return c[this._direction]}}]),e}();e.exports={Rover:d}},function(e,t,r){"use strict";r.r(t),r(6),new(r(9).GameController)(10,r(0).runtimes[1]).start()},function(e,t,r){var n=r(7),o=r(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i=n(o,{insert:"head",singleton:!1});if(!o.locals||e.hot.invalidate){var a=o.locals;e.hot.accept(2,(function(){"string"==typeof(o=(o=r(2)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(a,o.locals)?(a=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,r){"use strict";var n,o,i=(o={},function(e){if(void 0===o[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}o[e]=t}return o[e]}),a=[];function c(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=r[s]||0,l="".concat(s," ").concat(u);r[s]=u+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:v(d,t),references:1}),n.push(l)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var p=null,h=0;function v(e,t){var r,n,o;if(t.singleton){var i=h++;r=p=p||u(t),n=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=u(t),n=function(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r,t),o=function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=c(r[n]);a[o].references--}for(var i=s(e,t),u=0;u<r.length;u++){var l=c(r[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}(n),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=r(10).Board,u=r(11).HtmlUI,l=r(0),f=l.runtimes,d=l.commandsLUT,p=r(1),h=p.getFileTimestamp,v=p.Observable,m=p.generateRandomInt,y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,v);var e=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=c(e);if(t){var i=c(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}(this,r)}}(t);function t(r,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=e.call(this)).runtime=n,o.ui=new u(a(o)),o.simulation=o.runtime===f[0],o.gameOver=!1,o.turn=0,o.playerCommands={},o.roverCommands=[],o.board=new s(r),o.board.addObserver(o.emit.bind(a(o))),o}return function(e,t,r){t&&o(e.prototype,t)}(t,[{key:"start",value:function(e){var t=this;this.ui.start(),this.simulation&&(this.initializeCommands(e),this.emit("Player Commands list:"),this.playerCommands.map((function(e){return t.emit("    ".concat(e))})))}},{key:"reset",value:function(){this.board.initialize()}},{key:"update",value:function(e){var t=d[e];if(t)try{this.notifyTurnStart(),this.board.tick(this.simulation&&this.playerCommands[this.turn]||t,function(e){return Array.from({length:e},(function(){return Object.values(d)[m(3)]}))}(this.board.rovers.length)),this.turn+=1,this.gameOver=this.simulation&&this.turn>=this.playerCommands.length}catch(e){this.emit(e.message)}}},{key:"notifyTurnStart",value:function(){this.emit("TURN ".concat(this.turn+1,"    -    NUM CHARACTERS: ").concat(this.board.rovers.length+1))}},{key:"notifyTurnEnd",value:function(){this.emit("".concat("-".repeat(6*this.board.width)))}},{key:"onGameOver",value:function(){this.writeLogFile()}},{key:"addLogLine",value:function(e){this.messageHistory.push(e)}},{key:"writeLogFile",value:function(){var e="roverLog_".concat(h(),".log");this.messageHistory.map((function(e){return Array.isArray(e)?e:[e]})),this.emit("Successfully wrote history to file: ".concat(e))}},{key:"initializeCommands",value:function(e){this.playerCommands=function(e){return e.trim().split("").map((function(e){return d[e]})).filter((function(e){return e}))}(e)}}]),t}();e.exports={GameController:y}},function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=c(e);if(t){var i=c(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=r(4).Rover,u=r(0).validCommands,l=r(3),f=l.GRID_SPRITE_TEMPLATE,d=l.SPRITE,p=r(1),h=p.Observable,v=p.compareNDArrays,m=p.generatePositionInGrid,y=p.generateRandomInt,g=p.generatePseudoRandomName,b=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,h);var e=a(t);function t(){var r,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:5;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=e.call(this)).width=8<=n&&n<=20?n+n%2:10,r.grid=r.generateEmptyGrid(),r.player=void 0,r.rovers=[],r.obstacles=[],r.initialize(o,i),r}return function(e,t,r){t&&o(e.prototype,t)}(t,[{key:"generateEmptyGrid",value:function(){var e=this;return Array.from({length:this.width},(function(){return Array.from({length:e.width},(function(){}))}))}},{key:"generateTravelLogBoard",value:function(){var e=this.generateEmptyGrid();return this.rovers.concat([this.player]).map((function(t){return t.ascii_override=f.replace(d,t.name[0]),t.travel_log.map((function(r){return e[r[0]][r[1]]=t}))})),e}},{key:"occupiedPositions",value:function(){return this.obstacles.concat(this.rovers.map((function(e){return e.position}))).concat([this.player.position])}},{key:"initialize",value:function(e,t){var r=this;this.player=new s("Starlord",[this.width/2,this.width/2],0,this),this.rovers=Array.from({length:e},(function(){return new s(g(),r._generateRandomValidSpawnPoint(),y(3),r)})),this.obstacles=Array.from({length:t},(function(){return r._generateRandomValidSpawnPoint()})),this.obstacles.map((function(e){return r.updateGridPosition(e)})),this.rovers.map((function(e){return r.updateGridPosition(e.position,e)}))}},{key:"tick",value:function(e,t){var r=this;this.takeRoverTurn(this.player,e),this.rovers.map((function(e,n){return r.takeRoverTurn(e,t[n])}))}},{key:"takeRoverTurn",value:function(e,t){if(!u.includes(t))throw new Error("Invalid rover command specified ".concat(t));this.clearGridPosition(e.position),e[t](),this.updateGridPosition(e.position,e)}},{key:"updateGridPosition",value:function(e,t){var r=1<arguments.length&&void 0!==t?t:"obstacle";this.grid[e[0]][e[1]]=r}},{key:"clearGridPosition",value:function(e){this.grid[e[0]][e[1]]=void 0}},{key:"validMove",value:function(e){var t=this;if(e.forEach((function(e){if(t.width<=e||e<0)throw new Error("Out of bounds move.")})),void 0!==this.grid[e[0]][e[1]])throw new Error("Space is occupied.");return e}},{key:"_generateRandomValidSpawnPoint",value:function(){for(var e=m(this.width,this.player.position[0],this.player.position[1]),t=this.occupiedPositions();t.some((function(t){return v(t,e)}));)return this._generateRandomValidSpawnPoint();return e}}]),t}();e.exports={Board:b}},function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=r(12).UserInterface,f=r(1).removeFromString,d=r(13),p=d.sprite,h=d.sprites,v=d.directionLUT,m=r(3).gridSpriteRenderer,y=r(4).Rover,g=new Map([["w","f"],["a","l"],["s","b"],["d","r"]]),b=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,l);var e=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?s(e):t}(this,r)}}(t);function t(r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=e.call(this,r)).pause_delta=new Date,n.canvas=document.getElementById("canvas"),n.context=n.canvas.getContext("2d"),n.canvas.height=320,n.canvas.width=320,n.firstRun=!0,n.loadedResources=0,n.images=[],n.spriteSourcesNum=Object.keys(h).length,n.sprites={},n.messageLog=document.getElementById("messageLog"),n.bindScreenKeys(s(n)),n}return function(e,t,r){t&&a(e.prototype,t)}(t,[{key:"initializeImages",value:function(){var e=this;Object.entries(h).forEach((function(t){var r=o(t,2),n=r[0],i=r[1],a=new Image;a.src=i.src,a.onload=e.resourcesLoaded.bind(e),e.images.push([n,i,a])}))}},{key:"resourcesLoaded",value:function(){var e=this;this.loadedResources+=1,this.loadedResources===this.spriteSourcesNum&&(this.images.forEach((function(t){var r=o(t,3),n=r[0],i=r[1],a=r[2];e.sprites[n]=p({context:e.context,width:i.width,height:i.height,x:0,y:0,image:a,numberOfFrames:i.frames})})),this.setTimer())}},{key:"start",value:function(){this.initializeImages()}},{key:"update",value:function(){this.paused||(this.clearScreen(),this.preDraw(),this.drawGrid(),this.render(),this.postDraw(),this.isGameOver(),this.lastTurn=this.gameController.turn),this.firstRun=!1,requestAnimationFrame(this.update.bind(this))}},{key:"onGameOver",value:function(){return null}},{key:"render",value:function(){var e=this;this.lastTurn!==this.gameController.turn&&this.renderGrid(this.gameController.board.grid),Object.keys(this.sprites).forEach((function(t){e.sprites[t].update()}))}},{key:"renderGrid",value:function(e){var t=this,r=e.map((function(e){return e.map((function(e){return t.renderGridSpace(e)}))}));return this.gameController.addLogLine(r.map((function(e){return f(e.join(" "),["{/}","{#5f5f00-fg}","{#98e85a-fg}"])}))),r}},{key:"renderGridSpace",value:function(e){return m[n(e)]||e.ascii_override||e.ascii_sprite}},{key:"drawMessage",value:function(e){var t=document.createElement("P"),r=document.createTextNode(e);t.appendChild(r),this.messageLog.appendChild(t),this.messageLog.scrollBy({y:12})}},{key:"drawGrid",value:function(){for(var e=this.gameController.board.grid,t=0;t<e.length;t+=1)for(var r=0;r<e.length;r+=1){var n,o=e[r][t],i=[32*t,32*r];this.firstRun&&this.sprites.sand.render(i),(null==o||null===(n=o.constructor)||void 0===n?void 0:n.name)&&(o instanceof y?this.drawRover(o,i):this.firstRun&&this.sprites.obstacle.render(i))}}},{key:"drawRover",value:function(e,t){var r=e.travel_log[e.travel_log.length-2]||t;r=r.map((function(e){return 32*e})).reverse(),this.context.clearRect(r[0],r[1],32,32),this.context.clearRect(t[0],t[1],32,32),this.sprites.sand.render(r),this.sprites.sand.render(t),this.sprites["rover-".concat("Starlord"===e.name?"player-":"").concat(v[e.direction])].render(t)}},{key:"clearScreen",value:function(){return null}},{key:"bindScreenKeys",value:function(e){var t=this;document.addEventListener("keydown",(function(r){var n=r.key;" "!==n&&"p"!==n||e.pause();var o=g.get(n);o&&t.gameController.update(o)}))}}]),t}();e.exports={HtmlUI:b}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameController=t,this.paused=!1,this.timer=null,this.lastTurn=0,this.fps=1,this.updateInterval=1e3,this.gameController.addObserver(this.drawMessage.bind(this))}return function(e,t,n){t&&r(e.prototype,t)}(e,[{key:"start",value:function(){this.setTimer()}},{key:"setTimer",value:function(){this.timer||(this.timer=setInterval(this.update.bind(this),this.updateInterval/this.fps))}},{key:"update",value:function(){this.paused||(this.clearScreen(),this.preDraw(),this.drawGrid(),this.render(),this.postDraw(),this.isGameOver(),this.lastTurn=this.gameController.turn)}},{key:"pause",value:function(){this.paused=!this.paused}},{key:"onGameOver",value:function(){throw new Error("You have to implement the method gameOver!")}},{key:"isGameOver",value:function(){this.gameController.gameOver&&(clearInterval(this.timer),this.timer=null,this.onGameOver(),this.gameController.addLogLine("TRAVEL MAP FOR ALL ROVERS:"),this.renderGrid(this.gameController.board.generateTravelLogBoard()),this.gameController.onGameOver())}},{key:"render",value:function(){this.drawGrid()}},{key:"drawGrid",value:function(){throw new Error("You have to implement the method drawGrid!")}},{key:"drawMessage",value:function(){throw new Error("You have to implement the method notify!")}},{key:"preDraw",value:function(){this.gameController.update()}},{key:"postDraw",value:function(){this.lastTurn!==this.gameController.turn&&this.gameController.notifyTurnEnd()}},{key:"clearScreen",value:function(){return null}},{key:"bindScreenKeys",value:function(){throw new Error("You have to implement the method bindScreenKeys!")}}]),e}();e.exports={UserInterface:n}},function(e,t,r){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i={"rover-u":{width:128,height:32,frames:4,src:r(14)},"rover-d":{width:128,height:32,frames:4,src:r(15)},"rover-r":{width:128,height:32,frames:4,src:r(16)},"rover-l":{width:128,height:32,frames:4,src:r(17)},"rover-player-u":{width:128,height:32,frames:4,src:r(18)},"rover-player-d":{width:128,height:32,frames:4,src:r(19)},"rover-player-r":{width:128,height:32,frames:4,src:r(20)},"rover-player-l":{width:128,height:32,frames:4,src:r(21)},obstacle:{width:32,height:32,frames:1,src:r(22)},sand:{width:32,height:32,frames:1,src:r(23)}};e.exports={sprites:i,sprite:function(e){var t={},r=0,o=0,i=e.ticksPerFrame||200,a=e.numberOfFrames||1;return t.context=e.context,t.width=e.width,t.height=e.height,t.image=e.image,t.update=function(){i<(o+=1)&&(o=0,r<a-1?r+=1:r=0)},t.render=function(){var e=n(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[0,0],2),o=e[0],i=e[1];t.context.beginPath(),t.context.drawImage(t.image,r*t.width/a,0,t.width/a,t.height,o,i,t.width/a,t.height),t.context.closePath()},t},directionLUT:{N:"u",E:"r",S:"d",W:"l"}}},function(e,t,r){e.exports=r.p+"images/Rover-Up.96142929d16ed4e0e2858e8d35f01ed0.png"},function(e,t,r){e.exports=r.p+"images/Rover-Down.954d8750d138e5ac7822bb7654b6a106.png"},function(e,t,r){e.exports=r.p+"images/Rover-Right.28b3d910de9cee7ad6c39b6364e75bce.png"},function(e,t,r){e.exports=r.p+"images/Rover-Left.9d2da03909cc0c3bffe1315863d34f98.png"},function(e,t,r){e.exports=r.p+"images/Rover-Player-Up.664e01c01c202245c82aed950d536238.png"},function(e,t,r){e.exports=r.p+"images/Rover-Player-Down.44e08c154411778919cc8b56271919e6.png"},function(e,t,r){e.exports=r.p+"images/Rover-Player-Right.8ffdf0dd4f13af85dd18bdb94e04f379.png"},function(e,t,r){e.exports=r.p+"images/Rover-Player-Left.c946bd73bd5ac66a1ab418194c06b3bd.png"},function(e,t,r){e.exports=r.p+"images/Obstacle.d80f44e5496efe4514e30665086a8a61.png"},function(e,t,r){e.exports=r.p+"images/Sand.3aec778768e47bdde9a2a11d5375cf4b.png"}]);