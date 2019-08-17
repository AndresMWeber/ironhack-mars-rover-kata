!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UserList=t():e.UserList=t()}(window,function(){return function(e){var t=window.webpackHotUpdateUserList;window.webpackHotUpdateUserList=function(e,n){!function(e,t){if(w[e]&&b[e]){for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===v&&E()}}(e,n),t&&t(e,n)};var n,r=!0,o="f213959e7548f8f86caf",i=1e4,a={},s=[],c=[];function u(e){var t=S[e];if(!t)return j;function r(r){return t.hot.active?(S[r]?-1===S[r].parents.indexOf(e)&&S[r].parents.push(e):(s=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),j(r)}function o(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(t){j[e]=t}}}for(var i in j)Object.prototype.hasOwnProperty.call(j,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===d&&p("prepare"),v++,j.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===d&&(g[e]||_(e),0===v&&0===y&&E())}},r.t=function(e,t){return 1&t&&(e=r(e)),j.t(e,-2&t)},r}var l=[],d="idle";function p(e){d=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var f,h,m,y=0,v=0,g={},b={},w={};function k(e){return+e+""===e?+e:e}function O(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=j.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(i).then(function(e){if(!e)return p("idle"),null;b={},g={},w=e.c,m=e.h,p("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});return h={},_(0),"prepare"===d&&0===v&&0===y&&E(),t})}function _(e){w[e]?(b[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=j.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function E(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return P(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(k(n));e.resolve(t)}}function P(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,i,c,u;function l(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});0<r.length;){var o=r.pop(),i=o.id,a=o.chain;if((c=S[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<c.parents.length;s++){var u=c.parents[s],l=S[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),f(n[u],[i])):(delete n[u],t.push(u),r.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}function y(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")}t=t||{};var v={},g=[],b={};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var _;u=k(O);var E=!1,P=!1,I=!1,T="";switch((_=h[O]?l(u):{type:"disposed",moduleId:O}).chain&&(T="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+_.moduleId+T));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+T));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(E=new Error("Aborted because "+u+" is not accepted"+T));break;case"accepted":t.onAccepted&&t.onAccepted(_),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),I=!0;break;default:throw new Error("Unexception type "+_.type)}if(E)return p("abort"),Promise.reject(E);if(P)for(u in b[u]=h[u],f(g,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(v[u]||(v[u]=[]),f(v[u],_.outdatedDependencies[u]));I&&(f(g,[_.moduleId]),b[u]=y)}var C,R=[];for(r=0;r<g.length;r++)u=g[r],S[u]&&S[u].hot._selfAccepted&&b[u]!==y&&R.push({module:u,errorHandler:S[u].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var L,x,D=g.slice();0<D.length;)if(u=D.pop(),c=S[u]){var M={},A=c.hot._disposeHandlers;for(i=0;i<A.length;i++)(n=A[i])(M);for(a[u]=M,c.hot.active=!1,delete S[u],delete v[u],i=0;i<c.children.length;i++){var G=S[c.children[i]];G&&0<=(C=G.parents.indexOf(u))&&G.parents.splice(C,1)}}for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(c=S[u]))for(x=v[u],i=0;i<x.length;i++)L=x[i],0<=(C=c.children.indexOf(L))&&c.children.splice(C,1);for(u in p("apply"),o=m,b)Object.prototype.hasOwnProperty.call(b,u)&&(e[u]=b[u]);var H=null;for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(c=S[u])){x=v[u];var U=[];for(r=0;r<x.length;r++)if(L=x[r],n=c.hot._acceptedDependencies[L]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(x)}catch(n){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:x[r],error:n}),t.ignoreErrored||(H=H||n)}}}for(r=0;r<R.length;r++){var N=R[r];u=N.module,s=[u];try{j(u)}catch(r){if("function"==typeof N.errorHandler)try{N.errorHandler(r)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:r}),t.ignoreErrored||(H=H||n),H=H||r}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:r}),t.ignoreErrored||(H=H||r)}}return H?(p("fail"),Promise.reject(H)):(p("idle"),new Promise(function(e){e(g)}))}var S={};function j(t){if(S[t])return S[t].exports;var r=S[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);0<=n&&t._disposeHandlers.splice(n,1)},check:O,apply:P,status:function(e){if(!e)return d;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);0<=t&&l.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(c=s,s=[],c),children:[]};return e[t].call(r.exports,r,r.exports,u(t)),r.l=!0,r.exports}return j.m=e,j.c=S,j.d=function(e,t,n){j.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},j.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,t){if(1&t&&(e=j(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(j.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)j.d(n,r,function(t){return e[t]}.bind(null,r));return n},j.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(t,"a",t),t},j.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},j.p="",j.h=function(){return o},u(3)(j.s=3)}([function(e,t){var n=["moveForward","turnRight","turnLeft","moveBackward"],r={f:n[0],r:n[1],l:n[2],b:n[3]};e.exports={commandsLUT:r,runtimes:{0:"terminal",1:"html"},directionLUT:{N:[-1,0],E:[0,1],S:[1,0],W:[0,-1]},compass:{0:"N",1:"E",2:"S",3:"W"},validCommands:n}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observers=[],this.messageHistory=[]}return function(e,t,r){t&&n(e.prototype,t)}(e,[{key:"addObserver",value:function(e){this.observers.push(e)}},{key:"emit",value:function(e){this.messageHistory.push(e),this.observers.map(function(t){return t(e)})}}]),e}();function o(e,t,n,r){return[Math.floor(Math.random()*(n-e+1))+e,Math.floor(Math.random()*(r-t+1))+t][Math.random()<.5?0:1]}function a(e){return Math.floor(Math.random()*(e+1))}e.exports={Observable:r,arraySum:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2,r=Array();for(i=0;i<n;i++)r.push(e[i]+t[i]);return r},generateRandomNotInRange:o,generateRandomInt:a,removeFromString:function(e,t){return t.map(function(t){return e=e.split(t).join("")}),e},generatePositionInGrid:function(e,t,n){return[o(0,e,t,n),o(0,e,t,n)]},getFileTimestamp:function(){var e=new Date;return[e.getMonth()+1,e.getDate(),e.getFullYear()].join("-")+"_"+[e.getHours(),e.getMinutes(),e.getSeconds()].join("-")},compareNDArrays:function(e,t){var n;return e.forEach(function(e,r){return t.forEach(function(t){n=e===t})}),n},generatePseudoRandomName:function(){var e=["Edward","Craig","Brian","Logan","Mable","Willard","Copeland","Marcus","Alvarado","Clara","Moreno","Ronald","Gonzales","Veronica","Richards","Hattie","Glover","Roxanne","Henry"];return e[a(e.length-1)]}}},function(e,t){var n={BG_WIN:"#617B30",FG_WIN:"#84A140",HIGHLIGHT:"#D2E190",BORDER_WIN:"#B5CF49",INACTIVE:"#74923A",DARK_WIN:"#00af5f",PLAYER:"#98e85a",ENEMY:"#5f5f00"},r="sprite",o="[ ".concat(r," ]"),i="{".concat(n.PLAYER,"-fg}").concat("^","{/}"),a="{".concat(n.PLAYER,"-fg}").concat(">","{/}"),s="{".concat(n.PLAYER,"-fg}").concat("v","{/}"),c="{".concat(n.PLAYER,"-fg}").concat("<","{/}"),u="{".concat(n.ENEMY,"-fg}").concat("^","{/}"),l="{".concat(n.ENEMY,"-fg}").concat(">","{/}"),d="{".concat(n.ENEMY,"-fg}").concat("v","{/}"),p="{".concat(n.ENEMY,"-fg}").concat("<","{/}"),f={0:o.replace(r,u),1:o.replace(r,l),2:o.replace(r,d),3:o.replace(r,p)},h={0:o.replace(r,i),1:o.replace(r,a),2:o.replace(r,s),3:o.replace(r,c)},m={string:o.replace(r,"#"),undefined:o.replace(r," ")};e.exports={colors:n,gridSpriteRenderer:m,roverSpriteRenderer:f,playerSpriteRenderer:h,GRID_SPRITE_TEMPLATE:o,SPRITE:r}},function(e,t,n){var r=n(4).GameController,o=n(0).runtimes;n(10),new r(10,o[1]).start()},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=n(5).Board,u=n(7).HtmlUI,l=n(0),d=l.runtimes,p=l.commandsLUT,f=n(1),h=f.getFileTimestamp,m=f.Observable,y=f.generateRandomInt,v=function(){function e(t,n){var o;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(o=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}(this,i(e).call(this))).runtime=n,o.ui=new u(a(o)),o.simulation=o.runtime===d[0],o.gameOver=!1,o.turn=0,o.playerCommands=void 0,o.roverCommands=[],o.board=new c(t),o.board.addObserver(o.emit.bind(a(o))),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(e,m),function(e,t,n){t&&o(e.prototype,t)}(e,[{key:"start",value:function(e){var t=this;this.ui.start(),this.simulation&&(this.initializeCommands(e),this.emit("Player Commands list:"),this.playerCommands.map(function(e){return t.emit("    "+e)}))}},{key:"reset",value:function(){this.board.initialize()}},{key:"update",value:function(e){var t=p[0<arguments.length&&void 0!==e?e:void 0];if(t)try{this.notifyTurnStart(),this.board.tick(this.simulation&&this.playerCommands[this.turn]||t,this._generateRandomCommandList(this.board.rovers.length)),this.turn++,this.gameOver=this.simulation&&this.turn>=this.playerCommands.length,this.notifyTurnEnd()}catch(e){this.emit(e.message)}}},{key:"notifyTurnStart",value:function(){this.emit("TURN ".concat(this.turn+1,"    -    NUM CHARACTERS: ").concat(this.board.rovers.length+1))}},{key:"notifyTurnEnd",value:function(){this.emit("".concat("-".repeat(6*this.board.width)))}},{key:"onGameOver",value:function(){this.writeLogFile()}},{key:"addLogLine",value:function(e){this.messageHistory.push(e)}},{key:"writeLogFile",value:function(){var e="roverLog_".concat(h(),".log");this.messageHistory.map(function(e){Array.isArray(e)||(e=[e])}),this.emit("Successfully wrote history to file: ".concat(e))}},{key:"initializeCommands",value:function(e){this.playerCommands=this._parseCommands(e)}},{key:"_parseCommands",value:function(e){return e.trim().split("").map(function(e){return p[e]}).filter(function(e){return void 0!==e})}},{key:"_generateRandomCommandList",value:function(e){return Array.from({length:e},function(){return Object.values(p)[y(3)]})}}]),e}();e.exports={GameController:v}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=n(6).Rover,u=n(0),l=(u.commandsLUT,u.validCommands),d=n(2),p=d.GRID_SPRITE_TEMPLATE,f=d.SPRITE,h=n(1),m=h.Observable,y=h.compareNDArrays,v=h.generatePositionInGrid,g=h.generateRandomInt,b=h.generatePseudoRandomName,w=function(){function e(){var t,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:3,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:5;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(t=i(this,a(e).call(this))).width=8<=n&&n<=20?n+n%2:10,t.grid=t.generateEmptyGrid(),t.player=void 0,t.rovers=[],t.obstacles=[],t.initialize(r,o),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(e,m),function(e,t,n){t&&o(e.prototype,t)}(e,[{key:"generateEmptyGrid",value:function(){var e=this;return Array.from({length:this.width},function(){return Array.from({length:e.width},function(){})})}},{key:"generateTravelLogBoard",value:function(){var e=this.generateEmptyGrid();return this.rovers.concat([this.player]).map(function(t){t.ascii_override=p.replace(f,t.name[0]),t.travel_log.map(function(n){return e[n[0]][n[1]]=t})}),e}},{key:"occupiedPositions",value:function(){return this.obstacles.concat(this.rovers.map(function(e){return e.position})).concat([this.player.position])}},{key:"initialize",value:function(e,t){var n=this;this.player=new c("Starlord",[this.width/2,this.width/2],0,this),this.rovers=Array.from({length:e},function(){return new c(b(),n._generateRandomValidSpawnPoint(),g(3),n)}),this.obstacles=Array.from({length:t},function(){return n._generateRandomValidSpawnPoint()}),this.obstacles.map(function(e){return n.updateGridPosition(e)}),this.rovers.map(function(e){return n.updateGridPosition(e.position,e)})}},{key:"tick",value:function(e,t){var n=this;this.takeRoverTurn(this.player,e),this.rovers.map(function(e,r){return n.takeRoverTurn(e,t[r])})}},{key:"takeRoverTurn",value:function(e,t){if(!l.includes(t))throw new Error("Invalid rover command specified ".concat(t));this.clearGridPosition(e.position),e[t](),this.updateGridPosition(e.position,e)}},{key:"updateGridPosition",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:"obstacle";this.grid[e[0]][e[1]]=n}},{key:"clearGridPosition",value:function(e){this.grid[e[0]][e[1]]=void 0}},{key:"validMove",value:function(e){var t=this;if(e.forEach(function(e){if(t.width<=e||e<0)throw new Error("Out of bounds move.")}),void 0!==this.grid[e[0]][e[1]])throw new Error("Space is occupied.");return e}},{key:"_generateRandomValidSpawnPoint",value:function(){for(var e=v(this.width,this.player.position[0],this.player.position[1]),t=this.occupiedPositions();t.some(function(t){return y(t,e)});)return this._generateRandomValidSpawnPoint();return e}}]),e}();e.exports={Board:w}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(0),i=o.directionLUT,a=o.compass,s=n(2),c=s.playerSpriteRenderer,u=s.roverSpriteRenderer,l=n(1).arraySum,d=function(){function e(t,n,r,o){!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.name=t,this.position=n,this.travel_log=[n],this._direction=r,this.board=o}return function(e,t,n){t&&r(e.prototype,t)}(e,[{key:"report",value:function(e){this.board.emit("".concat(this.name,": ").concat(e))}},{key:"makeTurn",value:function(e){this._direction=this._remapDirectionLookup(this._direction+e),this.report("Made a turn: new direction is ".concat(this.direction," with position ").concat(this.position))}},{key:"turnLeft",value:function(){this.report("Turning left!"),this.makeTurn(-1)}},{key:"turnRight",value:function(){this.report("Turning right!"),this.makeTurn(1)}},{key:"moveForward",value:function(){this.report("Moving forward!"),this.move(this.direction)}},{key:"moveBackward",value:function(){this.report("Moving backward!"),this.move(a[this._remapDirectionLookup(this._direction+2)])}},{key:"move",value:function(e){this.report("Moving in direction ".concat(i[e]," while facing ").concat(this.direction," = ").concat(this.position));try{var t=l(this.position,i[e]);this.position=this.board.validMove(t)}catch(e){this.report("Illegal move attempted, staying put: ".concat(e.message))}finally{this.report("Final position is ".concat(this.position)),this.travel_log.push(this.position)}}},{key:"_remapDirectionLookup",value:function(e){var t=0;return e<0?t=4:3<e&&(t=-4),e+t}},{key:"ascii_sprite",get:function(){return"Starlord"===this.name?c[this._direction]:u[this._direction]}},{key:"x",get:function(){return this.position[1]}},{key:"y",get:function(){return this.position[0]}},{key:"direction",get:function(){return a[this._direction]}}]),e}();e.exports={Rover:d}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=n(8).UserInterface,l=n(1).removeFromString,d=n(9).directionLUT,p=n(2).gridSpriteRenderer,f=PIXI.Sprite,h=PIXI.AnimatedSprite,m={fontFamily:"Press Start 2P",fontSize:6,fill:"purple",align:"right"},y=function(){function e(t){var n;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?s(e):t}(this,a(e).call(this,t))).pause_delta=new Date,n.rovers=[],n.player=void 0,n.obstacles=[],n.spacing=32,n.firstRun=!0,n.pixiSprites={},n.app=new PIXI.Application({width:10*n.spacing,height:10*n.spacing,antialias:!0,transparent:!0,resolution:1}),n.smoothie=new Smoothie({engine:n.app,renderer:n.app.renderer,root:n.app.stage,fps:10,update:n.update.bind(s(n))}),document.getElementById("gameBoard").appendChild(n.app.view),n.messageLog=document.getElementById("messageLog"),n.bindScreenKeys(s(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(e,u),function(e,t,n){t&&i(e.prototype,t)}(e,[{key:"initializeImages",value:function(){PIXI.loader.add("../../media/images/mars.json").load(this.resourcesLoaded.bind(this))}},{key:"resourcesLoaded",value:function(){var e=this,t=PIXI.loader.resources["../../media/images/mars.json"].textures;this.app.stage.addChild(new PIXI.TilingSprite(t["Sand.png"],this.app.screen.width,this.app.screen.height));var n=this.gameController.board.player;this.player={object:n,sprites:{}},Object.values(d).map(function(r){var i=new h([0,1,2,3].map(function(e){return t["rover.player.".concat(r,".").concat(e,".png")]})),a=o(n.position,2),s=a[0],c=a[1];i.x=c*e.spacing,i.y=s*e.spacing,i.animationSpeed=.2,i.play(),e.app.stage.addChild(i),e.player.sprites[r]=i}),this.player.label=new PIXI.Text(this.player.object.name,m),this.player.label.anchor.set(.5,.5),this.app.stage.addChild(this.player.label),this.gameController.board.obstacles.map(function(n){var r=new f(t["Obstacle.png"]),i=o(n,2),a=i[0],s=i[1];r.x=s*e.spacing,r.y=a*e.spacing,e.app.stage.addChild(r),e.obstacles.push({object:n,sprite:r})}),this.gameController.board.rovers.map(function(n){var r={object:n,sprites:{}};Object.values(d).map(function(i){var a=new h([0,1,2,3].map(function(e){return t["rover.".concat(i,".").concat(e,".png")]})),s=o(n.position,2),c=s[0],u=s[1];a.x=u*e.spacing,a.y=c*e.spacing,e.app.stage.addChild(a),(r.sprites[i]=a).animationSpeed=.2,a.play()}),r.label=new PIXI.Text(r.object.name,Object.assign(m,{fill:"darkRed"})),r.label.anchor.set(.5,.5),e.app.stage.addChild(r.label),e.rovers.push(r)}),this.smoothie.start()}},{key:"start",value:function(){var e=this;document.addEventListener("DOMContentLoaded",function(){return e.initializeImages()})}},{key:"update",value:function(){this.paused||(this.preDraw(),this.drawGrid(),this.render(),this.postDraw(),this.isGameOver(),this.lastTurn=this.gameController.turn),this.firstRun=!1}},{key:"onGameOver",value:function(){return null}},{key:"render",value:function(){this.lastTurn!==this.gameController.turn&&this.renderGrid(this.gameController.board.grid)}},{key:"renderGrid",value:function(e){var t=this,n=e.map(function(e){return e.map(function(e){return t.renderGridSpace(e)})});return this.gameController.addLogLine(n.map(function(e){return l(e.join(" "),["{/}","{#5f5f00-fg}","{#98e85a-fg}"])})),n}},{key:"renderGridSpace",value:function(e){return p[r(e)]||e.ascii_override||e.ascii_sprite}},{key:"drawMessage",value:function(e){var t=document.createElement("P"),n=document.createTextNode(e);t.appendChild(n),this.messageLog.appendChild(t),this.messageLog.scrollTop=t.offsetTop}},{key:"drawGrid",value:function(){var e=this;this.rovers.concat([this.player]).map(function(t){Object.values(d).map(function(n){var r=t.object,o=t.sprites[n],i=t.label;d[r.direction]===n?o.visible=!0:o.visible=!1,o.x=r.x*e.spacing,o.y=r.y*e.spacing,i.x=o.x+e.spacing/2,i.y=o.y+e.spacing})})}},{key:"bindScreenKeys",value:function(e){var t=this;document.addEventListener("keydown",function(n){" "!=n.key&&"p"!=n.key||e.pause(),"w"==n.key&&t.gameController.update("f"),"a"==n.key&&t.gameController.update("l"),"s"==n.key&&t.gameController.update("b"),"d"==n.key&&t.gameController.update("r")})}}]),e}();e.exports={HtmlUI:y}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameController=t,this.paused=!1,this.timer=null,this.lastTurn=0,this.fps=1,this.updateInterval=1e3,this.gameController.addObserver(this.drawMessage.bind(this))}return function(e,t,r){t&&n(e.prototype,t)}(e,[{key:"start",value:function(){this.setTimer()}},{key:"setTimer",value:function(){this.timer||(this.timer=setInterval(this.update.bind(this),this.updateInterval/this.fps))}},{key:"update",value:function(){this.paused||(this.clearScreen(),this.preDraw(),this.drawGrid(),this.render(),this.postDraw(),this.isGameOver(),this.lastTurn=this.gameController.turn)}},{key:"pause",value:function(){this.paused=!this.paused}},{key:"onGameOver",value:function(){throw new Error("You have to implement the method gameOver!")}},{key:"isGameOver",value:function(){if(this.gameController.gameOver)return clearInterval(this.timer),this.timer=null,this.onGameOver(),this.gameController.addLogLine("TRAVEL MAP FOR ALL ROVERS:"),this.renderGrid(this.gameController.board.generateTravelLogBoard()),void this.gameController.onGameOver()}},{key:"render",value:function(){this.drawGrid()}},{key:"drawGrid",value:function(e){throw new Error("You have to implement the method drawGrid!")}},{key:"drawMessage",value:function(e){throw new Error("You have to implement the method notify!")}},{key:"preDraw",value:function(){this.gameController.update()}},{key:"postDraw",value:function(){this.lastTurn!==this.gameController.turn&&this.gameController.notifyTurnEnd()}},{key:"clearScreen",value:function(){return null}},{key:"bindScreenKeys",value:function(){throw new Error("You have to implement the method bindScreenKeys!")}}]),e}();e.exports={UserInterface:r}},function(e,t){e.exports={directionLUT:{N:"up",E:"right",S:"down",W:"left"}}},function(e,t,n){}]).default});