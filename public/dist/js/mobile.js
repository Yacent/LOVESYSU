var Zepto=function(){function a(a){return null==a?String(a):U[V.call(a)]||"object"}function b(b){return"function"==a(b)}function c(a){return null!=a&&a==a.window}function d(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function e(b){return"object"==a(b)}function f(a){return e(a)&&!c(a)&&Object.getPrototypeOf(a)==Object.prototype}function g(a){return"number"==typeof a.length}function h(a){return D.call(a,function(a){return null!=a})}function i(a){return a.length>0?x.fn.concat.apply([],a):a}function j(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function k(a){return a in G?G[a]:G[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function l(a,b){return"number"!=typeof b||H[j(a)]?b:b+"px"}function m(a){var b,c;return F[a]||(b=E.createElement(a),E.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),F[a]=c),F[a]}function n(a){return"children"in a?C.call(a.children):x.map(a.childNodes,function(a){return 1==a.nodeType?a:void 0})}function o(a,b,c){for(w in b)c&&(f(b[w])||Z(b[w]))?(f(b[w])&&!f(a[w])&&(a[w]={}),Z(b[w])&&!Z(a[w])&&(a[w]=[]),o(a[w],b[w],c)):b[w]!==v&&(a[w]=b[w])}function p(a,b){return null==b?x(a):x(a).filter(b)}function q(a,c,d,e){return b(c)?c.call(a,d,e):c}function r(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function s(a,b){var c=a.className,d=c&&c.baseVal!==v;return b===v?d?c.baseVal:c:void(d?c.baseVal=b:a.className=b)}function t(a){var b;try{return a?"true"==a||("false"==a?!1:"null"==a?null:/^0/.test(a)||isNaN(b=Number(a))?/^[\[\{]/.test(a)?x.parseJSON(a):a:b):a}catch(c){return a}}function u(a,b){b(a);for(var c=0,d=a.childNodes.length;d>c;c++)u(a.childNodes[c],b)}var v,w,x,y,z,A,B=[],C=B.slice,D=B.filter,E=window.document,F={},G={},H={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},I=/^\s*<(\w+|!)[^>]*>/,J=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,K=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,M=/([A-Z])/g,N=["val","css","html","text","data","width","height","offset"],O=["after","prepend","before","append"],P=E.createElement("table"),Q=E.createElement("tr"),R={tr:E.createElement("tbody"),tbody:P,thead:P,tfoot:P,td:Q,th:Q,"*":E.createElement("div")},S=/complete|loaded|interactive/,T=/^[\w-]*$/,U={},V=U.toString,W={},X=E.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Z=Array.isArray||function(a){return a instanceof Array};return W.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=X).appendChild(a),d=~W.qsa(e,b).indexOf(a),f&&X.removeChild(a),d},z=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},A=function(a){return D.call(a,function(b,c){return a.indexOf(b)==c})},W.fragment=function(a,b,c){var d,e,g;return J.test(a)&&(d=x(E.createElement(RegExp.$1))),d||(a.replace&&(a=a.replace(K,"<$1></$2>")),b===v&&(b=I.test(a)&&RegExp.$1),b in R||(b="*"),g=R[b],g.innerHTML=""+a,d=x.each(C.call(g.childNodes),function(){g.removeChild(this)})),f(c)&&(e=x(d),x.each(c,function(a,b){N.indexOf(a)>-1?e[a](b):e.attr(a,b)})),d},W.Z=function(a,b){return a=a||[],a.__proto__=x.fn,a.selector=b||"",a},W.isZ=function(a){return a instanceof W.Z},W.init=function(a,c){var d;if(!a)return W.Z();if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&I.test(a))d=W.fragment(a,RegExp.$1,c),a=null;else{if(c!==v)return x(c).find(a);d=W.qsa(E,a)}else{if(b(a))return x(E).ready(a);if(W.isZ(a))return a;if(Z(a))d=h(a);else if(e(a))d=[a],a=null;else if(I.test(a))d=W.fragment(a.trim(),RegExp.$1,c),a=null;else{if(c!==v)return x(c).find(a);d=W.qsa(E,a)}}return W.Z(d,a)},x=function(a,b){return W.init(a,b)},x.extend=function(a){var b,c=C.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){o(a,c,b)}),a},W.qsa=function(a,b){var c,e="#"==b[0],f=!e&&"."==b[0],g=e||f?b.slice(1):b,h=T.test(g);return d(a)&&h&&e?(c=a.getElementById(g))?[c]:[]:1!==a.nodeType&&9!==a.nodeType?[]:C.call(h&&!e?f?a.getElementsByClassName(g):a.getElementsByTagName(b):a.querySelectorAll(b))},x.contains=E.documentElement.contains?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b&&(b=b.parentNode);)if(b===a)return!0;return!1},x.type=a,x.isFunction=b,x.isWindow=c,x.isArray=Z,x.isPlainObject=f,x.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},x.inArray=function(a,b,c){return B.indexOf.call(b,a,c)},x.camelCase=z,x.trim=function(a){return null==a?"":String.prototype.trim.call(a)},x.uuid=0,x.support={},x.expr={},x.map=function(a,b){var c,d,e,f=[];if(g(a))for(d=0;d<a.length;d++)c=b(a[d],d),null!=c&&f.push(c);else for(e in a)c=b(a[e],e),null!=c&&f.push(c);return i(f)},x.each=function(a,b){var c,d;if(g(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},x.grep=function(a,b){return D.call(a,b)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){U["[object "+b+"]"]=b.toLowerCase()}),x.fn={forEach:B.forEach,reduce:B.reduce,push:B.push,sort:B.sort,indexOf:B.indexOf,concat:B.concat,map:function(a){return x(x.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return x(C.apply(this,arguments))},ready:function(a){return S.test(E.readyState)&&E.body?a(x):E.addEventListener("DOMContentLoaded",function(){a(x)},!1),this},get:function(a){return a===v?C.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return B.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return b(a)?this.not(this.not(a)):x(D.call(this,function(b){return W.matches(b,a)}))},add:function(a,b){return x(A(this.concat(x(a,b))))},is:function(a){return this.length>0&&W.matches(this[0],a)},not:function(a){var c=[];if(b(a)&&a.call!==v)this.each(function(b){a.call(this,b)||c.push(this)});else{var d="string"==typeof a?this.filter(a):g(a)&&b(a.item)?C.call(a):x(a);this.forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return x(c)},has:function(a){return this.filter(function(){return e(a)?x.contains(this,a):x(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!e(a)?a:x(a)},last:function(){var a=this[this.length-1];return a&&!e(a)?a:x(a)},find:function(a){var b,c=this;return b=a?"object"==typeof a?x(a).filter(function(){var a=this;return B.some.call(c,function(b){return x.contains(b,a)})}):1==this.length?x(W.qsa(this[0],a)):this.map(function(){return W.qsa(this,a)}):[]},closest:function(a,b){var c=this[0],e=!1;for("object"==typeof a&&(e=x(a));c&&!(e?e.indexOf(c)>=0:W.matches(c,a));)c=c!==b&&!d(c)&&c.parentNode;return x(c)},parents:function(a){for(var b=[],c=this;c.length>0;)c=x.map(c,function(a){return(a=a.parentNode)&&!d(a)&&b.indexOf(a)<0?(b.push(a),a):void 0});return p(b,a)},parent:function(a){return p(A(this.pluck("parentNode")),a)},children:function(a){return p(this.map(function(){return n(this)}),a)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(a){return p(this.map(function(a,b){return D.call(n(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return x.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=m(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var c=b(a);if(this[0]&&!c)var d=x(a).get(0),e=d.parentNode||this.length>1;return this.each(function(b){x(this).wrapAll(c?a.call(this,b):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){x(this[0]).before(a=x(a));for(var b;(b=a.children()).length;)a=b.first();x(a).append(this)}return this},wrapInner:function(a){var c=b(a);return this.each(function(b){var d=x(this),e=d.contents(),f=c?a.call(this,b):a;e.length?e.wrapAll(f):d.append(f)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=x(this);(a===v?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return x(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return x(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0 in arguments?this.each(function(b){var c=this.innerHTML;x(this).empty().append(q(this,a,b,c))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(b){var c=q(this,a,b,this.textContent);this.textContent=null==c?"":""+c}):0 in this?this[0].textContent:null},attr:function(a,b){var c;return"string"!=typeof a||1 in arguments?this.each(function(c){if(1===this.nodeType)if(e(a))for(w in a)r(this,w,a[w]);else r(this,a,q(this,b,c,this.getAttribute(a)))}):this.length&&1===this[0].nodeType?!(c=this[0].getAttribute(a))&&a in this[0]?this[0][a]:c:v},removeAttr:function(a){return this.each(function(){1===this.nodeType&&r(this,a)})},prop:function(a,b){return a=Y[a]||a,1 in arguments?this.each(function(c){this[a]=q(this,b,c,this[a])}):this[0]&&this[0][a]},data:function(a,b){var c="data-"+a.replace(M,"-$1").toLowerCase(),d=1 in arguments?this.attr(c,b):this.attr(c);return null!==d?t(d):v},val:function(a){return 0 in arguments?this.each(function(b){this.value=q(this,a,b,this.value)}):this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(a){if(a)return this.each(function(b){var c=x(this),d=q(this,a,b,c.offset()),e=c.offsetParent().offset(),f={top:d.top-e.top,left:d.left-e.left};"static"==c.css("position")&&(f.position="relative"),c.css(f)});if(!this.length)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(b,c){if(arguments.length<2){var d=this[0],e=getComputedStyle(d,"");if(!d)return;if("string"==typeof b)return d.style[z(b)]||e.getPropertyValue(b);if(Z(b)){var f={};return x.each(Z(b)?b:[b],function(a,b){f[b]=d.style[z(b)]||e.getPropertyValue(b)}),f}}var g="";if("string"==a(b))c||0===c?g=j(b)+":"+l(b,c):this.each(function(){this.style.removeProperty(j(b))});else for(w in b)b[w]||0===b[w]?g+=j(w)+":"+l(w,b[w])+";":this.each(function(){this.style.removeProperty(j(w))});return this.each(function(){this.style.cssText+=";"+g})},index:function(a){return a?this.indexOf(x(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?B.some.call(this,function(a){return this.test(s(a))},k(a)):!1},addClass:function(a){return a?this.each(function(b){y=[];var c=s(this),d=q(this,a,b,c);d.split(/\s+/g).forEach(function(a){x(this).hasClass(a)||y.push(a)},this),y.length&&s(this,c+(c?" ":"")+y.join(" "))}):this},removeClass:function(a){return this.each(function(b){return a===v?s(this,""):(y=s(this),q(this,a,b,y).split(/\s+/g).forEach(function(a){y=y.replace(k(a)," ")}),void s(this,y.trim()))})},toggleClass:function(a,b){return a?this.each(function(c){var d=x(this),e=q(this,a,c,s(this));e.split(/\s+/g).forEach(function(a){(b===v?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0];return a===v?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0];return a===v?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),c=this.offset(),d=L.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(x(a).css("margin-top"))||0,c.left-=parseFloat(x(a).css("margin-left"))||0,d.top+=parseFloat(x(b[0]).css("border-top-width"))||0,d.left+=parseFloat(x(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||E.body;a&&!L.test(a.nodeName)&&"static"==x(a).css("position");)a=a.offsetParent;return a})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()});x.fn[a]=function(e){var f,g=this[0];return e===v?c(g)?g["inner"+b]:d(g)?g.documentElement["scroll"+b]:(f=this.offset())&&f[a]:this.each(function(b){g=x(this),g.css(a,q(this,e,b,g[a]()))})}}),O.forEach(function(b,c){var d=c%2;x.fn[b]=function(){var b,e,f=x.map(arguments,function(c){return b=a(c),"object"==b||"array"==b||null==c?c:W.fragment(c)}),g=this.length>1;return f.length<1?this:this.each(function(a,b){e=d?b:b.parentNode,b=0==c?b.nextSibling:1==c?b.firstChild:2==c?b:null;var h=x.contains(E.documentElement,e);f.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!e)return x(a).remove();e.insertBefore(a,b),h&&u(a,function(a){null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||a.src||window.eval.call(window,a.innerHTML)})})})},x.fn[d?b+"To":"insert"+(c?"Before":"After")]=function(a){return x(a)[b](this),this}}),W.Z.prototype=x.fn,W.uniq=A,W.deserializeValue=t,x.zepto=W,x}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(a){function b(a){return a._zid||(a._zid=m++)}function c(a,c,f,g){if(c=d(c),c.ns)var h=e(c.ns);return(q[b(a)]||[]).filter(function(a){return!(!a||c.e&&a.e!=c.e||c.ns&&!h.test(a.ns)||f&&b(a.fn)!==b(f)||g&&a.sel!=g)})}function d(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function e(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function f(a,b){return a.del&&!s&&a.e in t||!!b}function g(a){return u[a]||s&&t[a]||a}function h(c,e,h,i,k,m,n){var o=b(c),p=q[o]||(q[o]=[]);e.split(/\s/).forEach(function(b){if("ready"==b)return a(document).ready(h);var e=d(b);e.fn=h,e.sel=k,e.e in u&&(h=function(b){var c=b.relatedTarget;return!c||c!==this&&!a.contains(this,c)?e.fn.apply(this,arguments):void 0}),e.del=m;var o=m||h;e.proxy=function(a){if(a=j(a),!a.isImmediatePropagationStopped()){a.data=i;var b=o.apply(c,a._args==l?[a]:[a].concat(a._args));return b===!1&&(a.preventDefault(),a.stopPropagation()),b}},e.i=p.length,p.push(e),"addEventListener"in c&&c.addEventListener(g(e.e),e.proxy,f(e,n))})}function i(a,d,e,h,i){var j=b(a);(d||"").split(/\s/).forEach(function(b){c(a,b,e,h).forEach(function(b){delete q[j][b.i],"removeEventListener"in a&&a.removeEventListener(g(b.e),b.proxy,f(b,i))})})}function j(b,c){return(c||!b.isDefaultPrevented)&&(c||(c=b),a.each(y,function(a,d){var e=c[a];b[a]=function(){return this[d]=v,e&&e.apply(c,arguments)},b[d]=w}),(c.defaultPrevented!==l?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(b.isDefaultPrevented=v)),b}function k(a){var b,c={originalEvent:a};for(b in a)x.test(b)||a[b]===l||(c[b]=a[b]);return j(c,a)}var l,m=1,n=Array.prototype.slice,o=a.isFunction,p=function(a){return"string"==typeof a},q={},r={},s="onfocusin"in window,t={focus:"focusin",blur:"focusout"},u={mouseenter:"mouseover",mouseleave:"mouseout"};r.click=r.mousedown=r.mouseup=r.mousemove="MouseEvents",a.event={add:h,remove:i},a.proxy=function(c,d){var e=2 in arguments&&n.call(arguments,2);if(o(c)){var f=function(){return c.apply(d,e?e.concat(n.call(arguments)):arguments)};return f._zid=b(c),f}if(p(d))return e?(e.unshift(c[d],c),a.proxy.apply(null,e)):a.proxy(c[d],c);throw new TypeError("expected function")},a.fn.bind=function(a,b,c){return this.on(a,b,c)},a.fn.unbind=function(a,b){return this.off(a,b)},a.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)};var v=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(a,b,c){return this.on(b,a,c)},a.fn.undelegate=function(a,b,c){return this.off(b,a,c)},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d,e,f){var g,j,m=this;return b&&!p(b)?(a.each(b,function(a,b){m.on(a,c,d,b,f)}),m):(p(c)||o(e)||e===!1||(e=d,d=c,c=l),(o(d)||d===!1)&&(e=d,d=l),e===!1&&(e=w),m.each(function(l,m){f&&(g=function(a){return i(m,a.type,e),e.apply(this,arguments)}),c&&(j=function(b){var d,f=a(b.target).closest(c,m).get(0);return f&&f!==m?(d=a.extend(k(b),{currentTarget:f,liveFired:m}),(g||e).apply(f,[d].concat(n.call(arguments,1)))):void 0}),h(m,b,e,d,c,j||g)}))},a.fn.off=function(b,c,d){var e=this;return b&&!p(b)?(a.each(b,function(a,b){e.off(a,c,b)}),e):(p(c)||o(d)||d===!1||(d=c,c=l),d===!1&&(d=w),e.each(function(){i(this,b,d,c)}))},a.fn.trigger=function(b,c){return b=p(b)||a.isPlainObject(b)?a.Event(b):j(b),b._args=c,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(b):a(this).triggerHandler(b,c)})},a.fn.triggerHandler=function(b,d){var e,f;return this.each(function(g,h){e=k(p(b)?a.Event(b):b),e._args=d,e.target=h,a.each(c(h,b.type||b),function(a,b){return f=b.proxy(e),e.isImmediatePropagationStopped()?!1:void 0})}),f},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){p(a)||(b=a,a=b.type);var c=document.createEvent(r[a]||"Events"),d=!0;if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),j(c)}}(Zepto),function(a){function b(b,c,d){var e=a.Event(c);return a(b).trigger(e,d),!e.isDefaultPrevented()}function c(a,c,d,e){return a.global?b(c||s,d,e):void 0}function d(b){b.global&&0===a.active++&&c(b,null,"ajaxStart")}function e(b){b.global&&!--a.active&&c(b,null,"ajaxStop")}function f(a,b){var d=b.context;return b.beforeSend.call(d,a,b)===!1||c(b,d,"ajaxBeforeSend",[a,b])===!1?!1:void c(b,d,"ajaxSend",[a,b])}function g(a,b,d,e){var f=d.context,g="success";d.success.call(f,a,g,b),e&&e.resolveWith(f,[a,g,b]),c(d,f,"ajaxSuccess",[b,d,a]),i(g,b,d)}function h(a,b,d,e,f){var g=e.context;e.error.call(g,d,b,a),f&&f.rejectWith(g,[d,b,a]),c(e,g,"ajaxError",[d,e,a||b]),i(b,d,e)}function i(a,b,d){var f=d.context;d.complete.call(f,b,a),c(d,f,"ajaxComplete",[b,d]),e(d)}function j(){}function k(a){return a&&(a=a.split(";",2)[0]),a&&(a==x?"html":a==w?"json":u.test(a)?"script":v.test(a)&&"xml")||"text"}function l(a,b){return""==b?a:(a+"&"+b).replace(/[&?]{1,2}/,"?")}function m(b){b.processData&&b.data&&"string"!=a.type(b.data)&&(b.data=a.param(b.data,b.traditional)),!b.data||b.type&&"GET"!=b.type.toUpperCase()||(b.url=l(b.url,b.data),b.data=void 0)}function n(b,c,d,e){return a.isFunction(c)&&(e=d,d=c,c=void 0),a.isFunction(d)||(e=d,d=void 0),{url:b,data:c,success:d,dataType:e}}function o(b,c,d,e){var f,g=a.isArray(c),h=a.isPlainObject(c);a.each(c,function(c,i){f=a.type(i),e&&(c=d?e:e+"["+(h||"object"==f||"array"==f?c:"")+"]"),!e&&g?b.add(i.name,i.value):"array"==f||!d&&"object"==f?o(b,i,d,c):b.add(c,i)})}var p,q,r=0,s=window.document,t=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,u=/^(?:text|application)\/javascript/i,v=/^(?:text|application)\/xml/i,w="application/json",x="text/html",y=/^\s*$/;a.active=0,a.ajaxJSONP=function(b,c){if(!("type"in b))return a.ajax(b);var d,e,i=b.jsonpCallback,j=(a.isFunction(i)?i():i)||"jsonp"+ ++r,k=s.createElement("script"),l=window[j],m=function(b){a(k).triggerHandler("error",b||"abort")},n={abort:m};return c&&c.promise(n),a(k).on("load error",function(f,i){clearTimeout(e),a(k).off().remove(),"error"!=f.type&&d?g(d[0],n,b,c):h(null,i||"error",n,b,c),window[j]=l,d&&a.isFunction(l)&&l(d[0]),l=d=void 0}),f(n,b)===!1?(m("abort"),n):(window[j]=function(){d=arguments},k.src=b.url.replace(/\?(.+)=\?/,"?$1="+j),s.head.appendChild(k),b.timeout>0&&(e=setTimeout(function(){m("timeout")},b.timeout)),n)},a.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:x,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},a.ajax=function(b){var c=a.extend({},b||{}),e=a.Deferred&&a.Deferred();for(p in a.ajaxSettings)void 0===c[p]&&(c[p]=a.ajaxSettings[p]);d(c),c.crossDomain||(c.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(c.url)&&RegExp.$2!=window.location.host),c.url||(c.url=window.location.toString()),m(c);var i=c.dataType,n=/\?.+=\?/.test(c.url);if(n&&(i="jsonp"),c.cache!==!1&&(b&&b.cache===!0||"script"!=i&&"jsonp"!=i)||(c.url=l(c.url,"_="+Date.now())),"jsonp"==i)return n||(c.url=l(c.url,c.jsonp?c.jsonp+"=?":c.jsonp===!1?"":"callback=?")),a.ajaxJSONP(c,e);var o,r=c.accepts[i],s={},t=function(a,b){s[a.toLowerCase()]=[a,b]},u=/^([\w-]+:)\/\//.test(c.url)?RegExp.$1:window.location.protocol,v=c.xhr(),w=v.setRequestHeader;if(e&&e.promise(v),c.crossDomain||t("X-Requested-With","XMLHttpRequest"),t("Accept",r||"*/*"),(r=c.mimeType||r)&&(r.indexOf(",")>-1&&(r=r.split(",",2)[0]),v.overrideMimeType&&v.overrideMimeType(r)),(c.contentType||c.contentType!==!1&&c.data&&"GET"!=c.type.toUpperCase())&&t("Content-Type",c.contentType||"application/x-www-form-urlencoded"),c.headers)for(q in c.headers)t(q,c.headers[q]);if(v.setRequestHeader=t,v.onreadystatechange=function(){if(4==v.readyState){v.onreadystatechange=j,clearTimeout(o);var b,d=!1;if(v.status>=200&&v.status<300||304==v.status||0==v.status&&"file:"==u){i=i||k(c.mimeType||v.getResponseHeader("content-type")),b=v.responseText;try{"script"==i?(1,eval)(b):"xml"==i?b=v.responseXML:"json"==i&&(b=y.test(b)?null:a.parseJSON(b))}catch(f){d=f}d?h(d,"parsererror",v,c,e):g(b,v,c,e)}else h(v.statusText||null,v.status?"error":"abort",v,c,e)}},f(v,c)===!1)return v.abort(),h(null,"abort",v,c,e),v;if(c.xhrFields)for(q in c.xhrFields)v[q]=c.xhrFields[q];var x="async"in c?c.async:!0;v.open(c.type,c.url,x,c.username,c.password);for(q in s)w.apply(v,s[q]);return c.timeout>0&&(o=setTimeout(function(){v.onreadystatechange=j,v.abort(),h(null,"timeout",v,c,e)},c.timeout)),v.send(c.data?c.data:null),v},a.get=function(){return a.ajax(n.apply(null,arguments))},a.post=function(){var b=n.apply(null,arguments);return b.type="POST",a.ajax(b)},a.getJSON=function(){var b=n.apply(null,arguments);return b.dataType="json",a.ajax(b)},a.fn.load=function(b,c,d){if(!this.length)return this;var e,f=this,g=b.split(/\s/),h=n(b,c,d),i=h.success;return g.length>1&&(h.url=g[0],e=g[1]),h.success=function(b){f.html(e?a("<div>").html(b.replace(t,"")).find(e):b),i&&i.apply(f,arguments)},a.ajax(h),this};var z=encodeURIComponent;a.param=function(a,b){var c=[];return c.add=function(a,b){this.push(z(a)+"="+z(b))},o(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b,c=[];return a([].slice.call(this.get(0).elements)).each(function(){b=a(this);var d=b.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=d&&"reset"!=d&&"button"!=d&&("radio"!=d&&"checkbox"!=d||this.checked)&&c.push({name:b.attr("name"),value:b.val()})}),c},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(a){"__proto__"in{}||a.extend(a.zepto,{Z:function(b,c){return b=b||[],a.extend(b,a.fn),b.selector=c||"",b.__Z=!0,b},isZ:function(b){return"array"===a.type(b)&&"__Z"in b}});try{getComputedStyle(void 0)}catch(b){var c=getComputedStyle;window.getComputedStyle=function(a){try{return c(a)}catch(b){return null}}}}(Zepto),window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),$.isFunction(window.define)&&define(function(a,b,c){c.exports=window.Zepto});


!function(a){function b(b,d){var i=b[h],j=i&&e[i];if(void 0===d)return j||c(b);if(j){if(d in j)return j[d];var k=g(d);if(k in j)return j[k]}return f.call(a(b),d)}function c(b,c,f){var i=b[h]||(b[h]=++a.uuid),j=e[i]||(e[i]=d(b));return void 0!==c&&(j[g(c)]=f),j}function d(b){var c={};return a.each(b.attributes||i,function(b,d){0==d.name.indexOf("data-")&&(c[g(d.name.replace("data-",""))]=a.zepto.deserializeValue(d.value))}),c}var e={},f=a.fn.data,g=a.camelCase,h=a.expando="Zepto"+ +new Date,i=[];a.fn.data=function(d,e){return void 0===e?a.isPlainObject(d)?this.each(function(b,e){a.each(d,function(a,b){c(e,a,b)})}):0 in this?b(this[0],d):void 0:this.each(function(){c(this,d,e)})},a.fn.removeData=function(b){return"string"==typeof b&&(b=b.split(/\s+/)),this.each(function(){var c=this[h],d=c&&e[c];d&&a.each(b||d,function(a){delete d[b?g(this):a]})})},["remove","empty"].forEach(function(b){var c=a.fn[b];a.fn[b]=function(){var a=this.find("*");return"remove"===b&&(a=a.add(this)),a.removeData(),c.call(this)}})}(window.Zepto),!function(a){var b={};b.cache={},a.tpl=function(a,c,d){var e=/[^\w\-\.:]/.test(a)?function(a,b){var c,d=[],f=[];for(c in a)d.push(c),f.push(a[c]);return new Function(d,e.code).apply(b||a,f)}:b.cache[a]=b.cache[a]||this.get(document.getElementById(a).innerHTML);return e.code=e.code||"var $parts=[]; $parts.push('"+a.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/(^|%>)[^\t]*/g,function(a){return a.replace(/'/g,"\\'")}).replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("$parts.push('")+"'); return $parts.join('');",c?e(c,d):e},a.adaptObject=function(b,c,d,e,f,g){var h=b;if("string"!=typeof d){var i=a.extend({},c,"object"==typeof d&&d),j=!1;a.isArray(h)&&h.length&&"script"==a(h)[0].nodeName.toLowerCase()?(h=a(a.tpl(h[0].innerHTML,i)).appendTo("body"),j=!0):a.isArray(h)&&h.length&&""==h.selector?(h=a(a.tpl(h[0].outerHTML,i)).appendTo("body"),j=!0):a.isArray(h)||(h=a(a.tpl(e,i)).appendTo("body"),j=!0)}return h.each(function(){var b=a(this),e=b.data("fz."+g);e||b.data("fz."+g,e=new f(this,a.extend({},c,"object"==typeof d&&d),j)),"string"==typeof d&&e[d]()})}}(window.Zepto),function(a,b){a.tapHandling=!1;var c=function(a){return a.off(".fz.tap")},d=function(c){return c.each(function(){function c(a){b(a.target).trigger("tap",[a,b(a.target).attr("href")]),a.stopPropagation()}function d(a){var b=a.originalEvent||a,c=b.touches||b.targetTouches;return c?[c[0].pageX,c[0].pageY]:null}function e(a){if(a.touches&&a.touches.length>1||a.targetTouches&&a.targetTouches.length>1)return!1;var b=d(a);j=b[0],i=b[1]}function f(a){if(!k){var b=d(a);b&&(Math.abs(i-b[1])>m||Math.abs(j-b[0])>m)&&(k=!0)}}function g(b){if(clearTimeout(h),h=setTimeout(function(){a.tapHandling=!1,k=!1},1e3),!(b.which&&b.which>1||b.shiftKey||b.altKey||b.metaKey||b.ctrlKey)){if(b.preventDefault(),k||a.tapHandling&&a.tapHandling!==b.type)return void(k=!1);a.tapHandling=b.type,c(b)}}var h,i,j,k,l=b(this),m=10;l.bind("touchstart.fz.tap MSPointerDown.fz.tap",e).bind("touchmove.fz.tap MSPointerMove.fz.tap",f).bind("touchend.fz.tap MSPointerUp.fz.tap",g).bind("click.fz.tap",g)})};if(b.event&&b.event.special)b.event.special.tap={add:function(){d(b(this))},remove:function(){c(b(this))}};else{var e=b.fn.on,f=b.fn.off;b.fn.on=function(a){return/(^| )tap( |$)/.test(a)&&(c(this),d(this)),e.apply(this,arguments)},b.fn.off=function(a){return/(^| )tap( |$)/.test(a)&&c(this),f.apply(this,arguments)}}b.fn.tap=function(a){this.on("tap",a)}}(this,Zepto),!function(a){function b(){return!1}function c(b){return a.adaptObject(this,e,b,d,f,"dialog")}var d='<div class="ui-dialog"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div><h4><%=title%></h4><div><%=content%></div></div></div><div class="ui-dialog-ft ui-btn-group"><% for (var i = 0; i < button.length; i++) { %><% if (i == select) { %><button type="button" data-role="button"  class="select" id="dialogButton<%=i%>"><%=button[i]%></button><% } else { %><button type="button" data-role="button" id="dialogButton<%=i%>"><%=button[i]%></div><% } %><% } %></div></div></div>',e={title:"",content:"",button:["确认"],select:0,allowScroll:!1,callback:function(){}},f=function(b,c,d){this.option=a.extend(e,c),this.element=a(b),this._isFromTpl=d,this.button=a(b).find('[data-role="button"]'),this._bindEvent(),this.toggle()};f.prototype={_bindEvent:function(){var b=this;b.button.on("tap",function(){var c=a(b.button).index(a(this)),d=a.Event("dialog:action");d.index=c,b.element.trigger(d),b.hide.apply(b)})},toggle:function(){this.element.hasClass("show")?this.hide():this.show()},show:function(){var c=this;c.element.trigger(a.Event("dialog:show")),c.element.addClass("show"),this.option.allowScroll&&c.element.on("touchmove",b)},hide:function(){var c=this;c.element.trigger(a.Event("dialog:hide")),c.element.off("touchmove",b),c.element.removeClass("show"),c._isFromTpl&&c.element.remove()}},a.fn.dialog=a.dialog=c}(window.Zepto),!function(a){function b(b){return a.adaptObject(this,d,b,c,e,"loading")}var c='<div class="ui-dialog ui-dialog-notice show"><div class="ui-dialog-cnt"><i class="ui-loading-bright"></i><p><%=content%></p></div></div>',d={content:"加载中..."},e=function(b,c,e){this.element=a(b),this._isFromTpl=e,this.option=a.extend(d,c),this.show()};e.prototype={show:function(){var b=a.Event("loading:show");this.element.trigger(b),this.element.show()},hide:function(){var b=a.Event("loading:hide");this.element.trigger(b),this.element.remove()}},a.fn.loading=a.loading=b}(window.Zepto),function(a){function b(b,c){this.wrapper="string"==typeof b?a(b)[0]:b,this.options={startX:0,startY:0,scrollY:!0,scrollX:!1,directionLockThreshold:5,momentum:!0,duration:300,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,eventPassthrough:!0,freeScroll:!1,bindToWrapper:!0,resizePolling:60,disableMouse:!1,disableTouch:!1,disablePointer:!1,tap:!0,click:!1,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var e in c)this.options[e]=c[e];if(this.options.role||this.options.scrollX!==!1||(this.options.eventPassthrough="horizontal"),"slider"===this.options.role){if(this.options.scrollX=!0,this.options.scrollY=!1,this.options.momentum=!1,this.scroller=a(".ui-slider-content")[0],a(this.scroller.children[0]).addClass("current"),this.currentPage=0,this.count=this.scroller.children.length,this.scroller.style.width=this.count+"00%",this.itemWidth=this.scroller.children[0].clientWidth,this.scrollWidth=this.itemWidth*this.count,this.options.indicator){for(var f='<ul class="ui-slider-indicators">',e=1;e<=this.count;e++)f+=1===e?'<li class="current">'+e+"</li>":"<li>"+e+"</li>";f+="</ul>",a(this.wrapper).append(f),this.indicator=a(".ui-slider-indicators")[0]}}else"tab"===this.options.role?(this.options.scrollX=!0,this.options.scrollY=!1,this.options.momentum=!1,this.scroller=a(".ui-tab-content")[0],this.nav=a(".ui-tab-nav")[0],a(this.scroller.children[0]).addClass("current"),a(this.nav.children[0]).addClass("current"),this.currentPage=0,this.count=this.scroller.children.length,this.scroller.style.width=this.count+"00%",this.itemWidth=this.scroller.children[0].clientWidth,this.scrollWidth=this.itemWidth*this.count):this.scroller=this.wrapper.children[0];if(this.scrollerStyle=this.scroller.style,this.translateZ=d.hasPerspective&&this.options.HWCompositing?" translateZ(0)":"",this.options.useTransition=d.hasTransition&&this.options.useTransition,this.options.useTransform=d.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?d.ease[this.options.bounceEasing]||d.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.useTransform===!1&&(this.scroller.style.position="relative"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable(),this.options.autoplay){var g=this;this.options.interval=this.options.interval||2e3,this.options.flag=setTimeout(function(){g._autoplay.apply(g)},g.options.interval)}}var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)},d=function(){function a(a){return d===!1?!1:""===d?a:d+a.charAt(0).toUpperCase()+a.substr(1)}var b={},c=document.createElement("div").style,d=function(){for(var a,b=["t","webkitT","MozT","msT","OT"],d=0,e=b.length;e>d;d++)if(a=b[d]+"ransform",a in c)return b[d].substr(0,b[d].length-1);return!1}();b.getTime=Date.now||function(){return(new Date).getTime()},b.extend=function(a,b){for(var c in b)a[c]=b[c]},b.addEvent=function(a,b,c,d){a.addEventListener(b,c,!!d)},b.removeEvent=function(a,b,c,d){a.removeEventListener(b,c,!!d)},b.prefixPointerEvent=function(a){return window.MSPointerEvent?"MSPointer"+a.charAt(9).toUpperCase()+a.substr(10):a},b.momentum=function(a,b,c,d,e,f){var g,h,i=a-b,j=Math.abs(i)/c;return f=void 0===f?6e-4:f,g=a+j*j/(2*f)*(0>i?-1:1),h=j/f,d>g?(g=e?d-e/2.5*(j/8):d,i=Math.abs(g-a),h=i/j):g>0&&(g=e?e/2.5*(j/8):0,i=Math.abs(a)+g,h=i/j),{destination:Math.round(g),duration:h}};var e=a("transform");return b.extend(b,{hasTransform:e!==!1,hasPerspective:a("perspective")in c,hasTouch:"ontouchstart"in window,hasPointer:window.PointerEvent||window.MSPointerEvent,hasTransition:a("transition")in c}),b.isBadAndroid=/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion),b.extend(b.style={},{transform:e,transitionTimingFunction:a("transitionTimingFunction"),transitionDuration:a("transitionDuration"),transitionDelay:a("transitionDelay"),transformOrigin:a("transformOrigin"),transitionProperty:a("transitionProperty")}),b.offset=function(a){for(var b=-a.offsetLeft,c=-a.offsetTop;a=a.offsetParent;)b-=a.offsetLeft,c-=a.offsetTop;return{left:b,top:c}},b.preventDefaultException=function(a,b){for(var c in b)if(b[c].test(a[c]))return!0;return!1},b.extend(b.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),b.extend(b.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(a){return a*(2-a)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(a){return Math.sqrt(1- --a*a)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(a){var b=4;return(a-=1)*a*((b+1)*a+b)+1}},bounce:{style:"",fn:function(a){return(a/=1)<1/2.75?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}},elastic:{style:"",fn:function(a){var b=.22,c=.4;return 0===a?0:1==a?1:c*Math.pow(2,-10*a)*Math.sin(2*(a-b/4)*Math.PI/b)+1}}}),b.tap=function(a,b){var c=document.createEvent("Event");c.initEvent(b,!0,!0),c.pageX=a.pageX,c.pageY=a.pageY,a.target.dispatchEvent(c)},b.click=function(a){var b,c=a.target;/(SELECT|INPUT|TEXTAREA)/i.test(c.tagName)||(b=document.createEvent("MouseEvents"),b.initMouseEvent("click",!0,!0,a.view,1,c.screenX,c.screenY,c.clientX,c.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),b._constructed=!0,c.dispatchEvent(b))},b}();b.prototype={_init:function(){this._initEvents()},_initEvents:function(a){var b=a?d.removeEvent:d.addEvent,c=this.options.bindToWrapper?this.wrapper:window;b(window,"orientationchange",this),b(window,"resize",this),this.options.click&&b(this.wrapper,"click",this,!0),this.options.disableMouse||(b(this.wrapper,"mousedown",this),b(c,"mousemove",this),b(c,"mousecancel",this),b(c,"mouseup",this)),d.hasPointer&&!this.options.disablePointer&&(b(this.wrapper,d.prefixPointerEvent("pointerdown"),this),b(c,d.prefixPointerEvent("pointermove"),this),b(c,d.prefixPointerEvent("pointercancel"),this),b(c,d.prefixPointerEvent("pointerup"),this)),d.hasTouch&&!this.options.disableTouch&&(b(this.wrapper,"touchstart",this),b(c,"touchmove",this),b(c,"touchcancel",this),b(c,"touchend",this)),b(this.scroller,"transitionend",this),b(this.scroller,"webkitTransitionEnd",this),b(this.scroller,"oTransitionEnd",this),b(this.scroller,"MSTransitionEnd",this),"tab"===this.options.role&&(b(this.nav,"touchend",this),b(this.nav,"mouseup",this),b(this.nav,"pointerup",this))},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight;var a=window.getComputedStyle(this.wrapper,null),b=a["padding-top"].replace(/[^-\d.]/g,""),c=a["padding-bottom"].replace(/[^-\d.]/g,""),e=a["padding-left"].replace(/[^-\d.]/g,""),f=a["padding-right"].replace(/[^-\d.]/g,""),g=window.getComputedStyle(this.scroller,null),h=g["margin-top"].replace(/[^-\d.]/g,""),i=g["margin-bottom"].replace(/[^-\d.]/g,""),j=g["margin-left"].replace(/[^-\d.]/g,""),k=g["margin-right"].replace(/[^-\d.]/g,"");this.scrollerWidth=this.scroller.offsetWidth+parseInt(e)+parseInt(f)+parseInt(j)+parseInt(k),this.scrollerHeight=this.scroller.offsetHeight+parseInt(b)+parseInt(c)+parseInt(h)+parseInt(i),("slider"===this.options.role||"tab"===this.options.role)&&(this.itemWidth=this.scroller.children[0].clientWidth,this.scrollWidth=this.itemWidth*this.count,this.scrollerWidth=this.scrollWidth),this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=d.offset(this.wrapper),this.resetPosition()},handleEvent:function(a){switch(a.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(a);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(a);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(a);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(a);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(a);break;case"keydown":this._key(a);break;case"click":a._constructed||(a.preventDefault(),a.stopPropagation())}},_start:function(a){if(!(1!=d.eventType[a.type]&&0!==a.button||!this.enabled||this.initiated&&d.eventType[a.type]!==this.initiated)){!this.options.preventDefault||d.isBadAndroid||d.preventDefaultException(a.target,this.options.preventDefaultException)||a.preventDefault();var b,c=a.touches?a.touches[0]:a;if(this.initiated=d.eventType[a.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=d.getTime(),this.options.useTransition&&this.isInTransition&&"slider"!==this.options.role&&"tab"!==this.options.role?(this.isInTransition=!1,b=this.getComputedPosition(),this._translate(Math.round(b.x),Math.round(b.y))):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=c.pageX,this.pointY=c.pageY,this.options.autoplay){var e=this;clearTimeout(this.options.flag),this.options.flag=setTimeout(function(){e._autoplay.apply(e)},e.options.interval)}event.stopPropagation()}},_move:function(b){if(this.enabled&&d.eventType[b.type]===this.initiated){this.options.preventDefault&&b.preventDefault();var c,e,f,g,h=b.touches?b.touches[0]:b,i=h.pageX-this.pointX,j=h.pageY-this.pointY,k=d.getTime();if(this.pointX=h.pageX,this.pointY=h.pageY,this.distX+=i,this.distY+=j,f=Math.abs(this.distX),g=Math.abs(this.distY),!(k-this.endTime>300&&10>f&&10>g)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=f>g+this.options.directionLockThreshold?"h":g>=f+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("tab"===this.options.role&&a(this.scroller).children("li").height("auto"),"vertical"==this.options.eventPassthrough)b.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);j=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)b.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);i=0}i=this.hasHorizontalScroll?i:0,j=this.hasVerticalScroll?j:0,c=this.x+i,e=this.y+j,(c>0||c<this.maxScrollX)&&(c=this.options.bounce?this.x+i/3:c>0?0:this.maxScrollX),(e>0||e<this.maxScrollY)&&(e=this.options.bounce?this.y+j/3:e>0?0:this.maxScrollY),this.directionX=i>0?-1:0>i?1:0,this.directionY=j>0?-1:0>j?1:0,this.moved=!0,this._translate(c,e),k-this.startTime>300&&(this.startTime=k,this.startX=this.x,this.startY=this.y)}}},_end:function(b){if(this.enabled&&d.eventType[b.type]===this.initiated){this.options.preventDefault&&!d.preventDefaultException(b.target,this.options.preventDefaultException)&&b.preventDefault();var c,e,f=(b.changedTouches?b.changedTouches[0]:b,d.getTime()-this.startTime),g=Math.round(this.x),h=Math.round(this.y),i=Math.abs(g-this.startX),j=(Math.abs(h-this.startY),0),k="";if(this.isInTransition=0,this.initiated=0,this.endTime=d.getTime(),this.resetPosition(this.options.bounceTime))return void("tab"===this.options.role&&a(this.scroller.children[this.currentPage]).siblings("li").height(0));if(this.scrollTo(g,h),this.moved||(this.options.tap&&1===d.eventType[b.type]&&d.tap(b,this.options.tap),this.options.click&&d.click(b)),this.options.momentum&&300>f&&(c=this.hasHorizontalScroll?d.momentum(this.x,this.startX,f,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:g,duration:0},e=this.hasVerticalScroll?d.momentum(this.y,this.startY,f,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:h,duration:0},g=c.destination,h=e.destination,j=Math.max(c.duration,e.duration),this.isInTransition=1),g!=this.x||h!=this.y)return(g>0||g<this.maxScrollX||h>0||h<this.maxScrollY)&&(k=d.ease.quadratic),void this.scrollTo(g,h,j,k);if("tab"===this.options.role&&a(event.target).closest("ul").hasClass("ui-tab-nav")){a(this.nav).children().removeClass("current"),a(event.target).addClass("current");var l=this.currentPage;this.currentPage=a(event.target).index(),a(this.scroller).children().height("auto"),this._execEvent("beforeScrollStart",l,this.currentPage)}("slider"===this.options.role||"tab"===this.options.role)&&(30>i?this.scrollTo(-this.itemWidth*this.currentPage,0,this.options.bounceTime,this.options.bounceEasing):g-this.startX<0?(this._execEvent("beforeScrollStart",this.currentPage,this.currentPage+1),this.scrollTo(-this.itemWidth*++this.currentPage,0,this.options.bounceTime,this.options.bounceEasing)):g-this.startX>=0&&(this._execEvent("beforeScrollStart",this.currentPage,this.currentPage-1),this.scrollTo(-this.itemWidth*--this.currentPage,0,this.options.bounceTime,this.options.bounceEasing)),"tab"===this.options.role&&a(this.scroller.children[this.currentPage]).siblings("li").height(0),this.indicator&&i>=30?(a(this.indicator).children().removeClass("current"),a(this.indicator.children[this.currentPage]).addClass("current")):this.nav&&i>=30&&(a(this.nav).children().removeClass("current"),a(this.nav.children[this.currentPage]).addClass("current")),a(this.scroller).children().removeClass("current"),a(this.scroller.children[this.currentPage]).addClass("current"))}},_resize:function(){var a=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){a.refresh()},this.options.resizePolling)},_transitionEnd:function(a){a.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd",this.currentPage)))},destroy:function(){this._initEvents(!0)},resetPosition:function(a){var b=this.x,c=this.y;return a=a||0,!this.hasHorizontalScroll||this.x>0?b=0:this.x<this.maxScrollX&&(b=this.maxScrollX),!this.hasVerticalScroll||this.y>0?c=0:this.y<this.maxScrollY&&(c=this.maxScrollY),b==this.x&&c==this.y?!1:(this.scrollTo(b,c,a,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},on:function(a,b){this._events[a]||(this._events[a]=[]),this._events[a].push(b)},off:function(a,b){if(this._events[a]){var c=this._events[a].indexOf(b);c>-1&&this._events[a].splice(c,1)}},_execEvent:function(a){if(this._events[a]){var b=0,c=this._events[a].length;if(c)for(;c>b;b++)this._events[a][b].apply(this,[].slice.call(arguments,1))}},scrollTo:function(a,b,c,e){e=e||d.ease.circular,this.isInTransition=this.options.useTransition&&c>0,!c||this.options.useTransition&&e.style?(("slider"===this.options.role||"tab"===this.options.role)&&(c=this.options.duration,this.scrollerStyle[d.style.transitionProperty]=d.style.transform),this.scrollerStyle[d.style.transitionTimingFunction]=e.style,this._transitionTime(c),this._translate(a,b)):this._animate(a,b,c,e.fn)},scrollToElement:function(a,b,c,e,f){if(a=a.nodeType?a:this.scroller.querySelector(a)){var g=d.offset(a);g.left-=this.wrapperOffset.left,g.top-=this.wrapperOffset.top,c===!0&&(c=Math.round(a.offsetWidth/2-this.wrapper.offsetWidth/2)),e===!0&&(e=Math.round(a.offsetHeight/2-this.wrapper.offsetHeight/2)),g.left-=c||0,g.top-=e||0,g.left=g.left>0?0:g.left<this.maxScrollX?this.maxScrollX:g.left,g.top=g.top>0?0:g.top<this.maxScrollY?this.maxScrollY:g.top,b=void 0===b||null===b||"auto"===b?Math.max(Math.abs(this.x-g.left),Math.abs(this.y-g.top)):b,this.scrollTo(g.left,g.top,b,f)}},_transitionTime:function(a){a=a||0,this.scrollerStyle[d.style.transitionDuration]=a+"ms",!a&&d.isBadAndroid&&(this.scrollerStyle[d.style.transitionDuration]="0.001s")},_translate:function(a,b){this.options.useTransform?this.scrollerStyle[d.style.transform]="translate("+a+"px,"+b+"px)"+this.translateZ:(a=Math.round(a),b=Math.round(b),this.scrollerStyle.left=a+"px",this.scrollerStyle.top=b+"px"),this.x=a,this.y=b},getComputedPosition:function(){var a,b,c=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(c=c[d.style.transform].split(")")[0].split(", "),a=+(c[12]||c[4]),b=+(c[13]||c[5])):(a=+c.left.replace(/[^-\d.]/g,""),b=+c.top.replace(/[^-\d.]/g,"")),{x:a,y:b}},_animate:function(a,b,e,f){function g(){var m,n,o,p=d.getTime();return p>=l?(h.isAnimating=!1,h._translate(a,b),void(h.resetPosition(h.options.bounceTime)||h._execEvent("scrollEnd",this.currentPage))):(p=(p-k)/e,o=f(p),m=(a-i)*o+i,n=(b-j)*o+j,h._translate(m,n),void(h.isAnimating&&c(g)))}var h=this,i=this.x,j=this.y,k=d.getTime(),l=k+e;this.isAnimating=!0,g()},_autoplay:function(){var b=this,c=b.currentPage;b.currentPage=b.currentPage>=b.count-1?0:++b.currentPage,b._execEvent("beforeScrollStart",c,b.currentPage),"tab"===this.options.role&&(a(this.scroller).children().height("auto"),document.body.scrollTop=0),b.scrollTo(-b.itemWidth*b.currentPage,0,b.options.bounceTime,b.options.bounceEasing),b.indicator?(a(b.indicator).children().removeClass("current"),a(b.indicator.children[b.currentPage]).addClass("current"),a(b.scroller).children().removeClass("current"),a(b.scroller.children[b.currentPage]).addClass("current")):b.nav&&(a(b.nav).children().removeClass("current"),a(b.nav.children[b.currentPage]).addClass("current"),a(b.scroller).children().removeClass("current"),a(b.scroller.children[b.currentPage]).addClass("current")),b.options.flag=setTimeout(function(){b._autoplay.apply(b)},b.options.interval)}},window.fz=window.fz||{},window.frozen=window.frozen||{},window.fz.Scroll=window.frozen.Scroll=b,"function"==typeof define&&define(function(a,c,d){d.exports=b})}(window.Zepto),!function(a){function b(b){return a.adaptObject(this,d,b,c,e,"tips")}var c='<div class="ui-poptips ui-poptips-<%=type%>"><div class="ui-poptips-cnt"><i></i><%=content%></div></div>',d={content:"",stayTime:1e3,type:"info",callback:function(){}},e=function(b,c,e){var f=this;this.element=a(b),this._isFromTpl=e,this.elementHeight=a(b).height(),this.option=a.extend(d,c),a(b).css({"-webkit-transform":"translateY(-"+this.elementHeight+"px)"}),setTimeout(function(){a(b).css({"-webkit-transition":"all .5s"}),f.show()},20)};e.prototype={show:function(){var b=this;b.element.trigger(a.Event("tips:show")),this.element.css({"-webkit-transform":"translateY(0px)"}),b.option.stayTime>0&&setTimeout(function(){b.hide()},b.option.stayTime)},hide:function(){var b=this;b.element.trigger(a.Event("tips:hide")),this.element.css({"-webkit-transform":"translateY(-"+this.elementHeight+"px)"}),setTimeout(function(){b._isFromTpl&&b.element.remove()},500)}},a.fn.tips=a.tips=b}(window.Zepto);

$(function() {
	$('.ui-searchbar').tap(function(){
        $('.ui-searchbar-wrap').addClass('focus');
        $('.ui-searchbar-input input').focus();
    });

    $(".ui-icon-close").tap(function() {
        $(this).parent().find('input, textarea').val('');
    });

    function isUC(){
	    var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/UCBrowser/i) == 'ucbrowser'){
	        return true;
	    }else{
	        return false;
	    }
	}

    $(".goback").tap(function(event){
    	event.preventDefault();
		var kwd = $(this).attr('data-kwd');
    	if (!isUC() && kwd != 'None') {
    		window.location='/search/'+kwd;
    	} else {
			window.history.go(-1);
    	}
    });

    var Score = function(options) {
        this.starList = options.starList;
        this.input = options.input;
        this.click = true;
    };

    Score.prototype = {
        init: function() {
            for (var i = 0, length = this.starList.length; i < length; i++) {
                $(this.starList[i]).tap(this.handler(i));
            }
        },
        handler: function(i) {
            var that = this;
            return function() {
            	if (that.click) {
            		for (var j = 0; j <= i; j++) {
	                    $(that.starList[j]).removeClass('icon-star-empty').addClass('icon-star');
	                }
	                for (var j = i + 1, length = that.starList.length; j < length; j++) {
	                    $(that.starList[j]).removeClass('icon-star').addClass('icon-star-empty');
	                }
	                that.input.val(i+1);
	            }
            }
        },
        setValue: function(i) {

            for (var j = 0; j < 5; j++) {
                if (j < i) {
                    $(this.starList[j]).removeClass('icon-star-empty').addClass('icon-star');
                } else {
                    $(this.starList[j]).removeClass('icon-star').addClass('icon-star-empty');
                }
            }
        },
        disable: function(){
        	this.click=false;
        }
    };

    var star = new Score({
        starList: $($(".score-comment")[0]).find('i'),
        input: $("#score")
    });

    var starPop = new Score({
        starList: $($(".score-comment")[1]).find('i'),
        input: $('#score')
    });

    var starCourse = new Score({
        starList: $('.course-star').find('i'),
        input: $("#score0")
    });

    var initStarResult = function() {
    	var resultNum = $('.result-star');
	    for (var i = 0, length=resultNum.length; i < length; i++) {
	    	var starResult = new Score({
	    		starList: $(resultNum[i]).find('i'),
	        	input: $("#score")
	    	});
	    	starResult.init();
	    	starResult.setValue(+$(resultNum[i]).attr('data-rate'));
	    	starResult.disable();
	    }
    };
    initStarResult();

    star.init();
    starPop.init();
    starCourse.init();
    starCourse.setValue(+$('.course-star').attr('data-rate'));
    starCourse.disable();



    $(".sub").tap(function() {
        $(".popup").removeClass('popup-show');
        star.setValue(+$("#score").val());
    })

    $(".double-btn .select").tap(function() {
        $(".ui-dialog").removeClass('show');
    });

    $("#dialogButton1").tap(function(){
      $(".ui-dialog").removeClass('show');
    })

    var quoteTpl = function(cmt) {
    	var res = ''
    	+'<div class="comment-rows">'
        +'    <div class="comment-user">'
        +'        <p>' + cmt.author + '</p>'
        +'    </div>'
        +'    <div class="comment-content">'
        +'        <p>' + cmt.comment + '</p>'
        +'    </div>'
        +'</div>';
        return res;
    }

    function html_encode(str) {
  	  var s = "";
  	  if (str.length == 0) return "";
  	  s = str.replace(/&/g, "&gt;");
  	  s = s.replace(/</g, "&lt;");
  	  s = s.replace(/>/g, "&gt;");
  	  s = s.replace(/ /g, "&nbsp;");
  	  s = s.replace(/\'/g, "&#39;");
  	  s = s.replace(/\"/g, "&quot;");
  	  s = s.replace(/\n/g, "<br>");
  	  return s;
  	}

	function html_decode(str) {
	  var s = "";
	  if (str.length == 0) return "";
	  s = str.replace(/&gt;/g, "&");
	  s = s.replace(/&lt;/g, "<");
	  s = s.replace(/&gt;/g, ">");
	  s = s.replace(/&nbsp;/g, " ");
	  s = s.replace(/&#39;/g, "\'");
	  s = s.replace(/&quot;/g, "\"");
	  s = s.replace(/<br>/g, "\n");
	  return s;
	}

	function addTips(str) {
		$('.tips-title').text('提示');
		$('.tips-content').text(str);
		$('.single-btn').addClass('show');
	}

	$('#dialogButton2').tap(function(){
		$('.ui-dialog').removeClass('show');
	});

    $('.js-detail-comment-form').on('submit', function(event){
	    event.preventDefault();
	    var confirm = $('.confirm');
	    var loading = $('.loading');
	    var btn = $('.ui-btn-primary');
	    
	    var postData = $(this).serialize();
	    var author = $('#author1').val();
	    var course = $(this).attr('data-course');
	    var rating = $('#score').val();
	    var content = $('#content').val();
	    var $that = $(this);



	    if (!author) {
	        author='匿名';
	    }
	    if (!rating) {
	        addTips('貌似还没填写评分');
	        return;
	    }
	    if (!content) {
	        addTips('貌似还没填写内容');
	        return;
	    }
	    if (content.length < 15) {
	        addTips('评论内容要 15 个字以上哦');
	        return;
	    }
	    postData += '&rating='+rating;
	    postData += '&cid='+course;
	    postData += '&author='+author;

	    confirm.hide();
	    loading.show();
	    btn.attr('disabled', 'disabled');

	    $.ajax({
	        url: '/add/comment',
	        type: 'POST',
	        data: postData,
	        success: function(data) {

	        	confirm.show();
	   			loading.hide();
	   			btn.removeAttr('disabled');

		        // console.log(data);
		        if (+data > -1) {
		            var res = quoteTpl({comment: html_encode(content), cmtid: +data, like: 0, author: html_encode(author)});
		            $('.comments').append(res);
		            $('#content').val('');
		            $('#author1').val('');
		            star.setValue(0);
		            starPop.setValue(0);
		            $('#score').val('');
		            // console.log("success");
		        } else {
		            alert('fail');
		        }
	    	}
	    });
	});
	
	var addDialog = function(str) {
		$('.tips-title').text('提示');
		$('.tips-content').text(str);
		$('.double-btn').addClass('show');
	}

	$('.js-add-course-form').on('submit', function(event) {
	    event.preventDefault();
	    var confirm = $('.confirm');
	    var loading = $('.loading');
	    var btn = $('.ui-btn-primary');


	    var title = $('#title').val();
	    var teacher = $('#teacher1').val();
	    var comment = $('#comment').val();
	    var author = $('#author1').val();
      	var score = $('#score').val();
	    var category = +$('#category').val()-1;
	    if (!title) {
	        addTips('貌似还没填写课程名称');
	        return;
	    }
	    if (!teacher) {
	        teacher='未知';
	    }
	    if (!comment) {
	        addTips('貌似还没填写你的评论');
	        return;
	    }
	    if (!score) {
	        addTips('貌似还没填写你的评分');
	        return;
	    }
	    if (!author) {
	        author='匿名';
	    }
	    if (comment.length < 15) {
	        addTips('评论需要大于15个字哦');
	        return;
	    }
	    var postData = $(this).serialize();
	    postData += '&rating='+score+'&step=1';
	    postData += '&teacher='+teacher+'&author='+author;
	    // console.log(postData);
	    var $that = $(this);

	    confirm.hide();
	    loading.show();
	    btn.attr('disabled', 'disabled');

	    $.ajax({
	        url: '/add/course',
	        type: 'POST',
	        data: postData,
	   		success: function(data) {
	   			confirm.show();
	   			loading.hide();
	   			btn.removeAttr('disabled');

	        	// console.log(data);
		        if (data === '1') {
	            $that.trigger('reset');
	            $('#title').val('');
	            $('#teacher1').val('');
	            $('#category').val(1);
	            $('#author1').val('');
	            $('#comment').val('');
	            star.setValue(0);
	            starPop.setValue(0);
	            $('#score').val('');
	            var categories = ["公选", "专选", "公必", "专必", "体育"];
              window.location = '/'+categories[category]+'/'+teacher+'/'+title;
		        } else if (data === '0') {
		            alert('fail');
		        } else if (data === '2') {
		        	addDialog('该课程已存在，是否确定添加为一条新评论？');
		        } else {
		            postData = postData.replace('&step=1', '&step=2');
			        $.ajax({
			            url: '/add/course',
			            type: 'POST',
			            data: postData,
				        success: function(data) {
				            if (data === '1') {
			                $('.ui-dialog').removeClass('show');
	                		$that.trigger('reset');
	                		$('#title').val('');
					            $('#teacher1').val('');
					            $('#category').val(1);
					            $('#author1').val('');
					            $('#comment').val('');
					            star.setValue(0);
					            starPop.setValue(0);
					            $('#score').val('');
                      var categories = ["公选", "专选", "公必", "专必", "体育"];
                      window.location = '/'+categories[category]+'/'+teacher+'/'+title;
				            }
				        }
				    });
		        }
	    	}
	    });
	    $('.js-force').tap(function(event) {
	        postData = postData.replace('&step=1', '&step=2&force=1');
	        confirm.hide();
	    	loading.show();
	    	btn.attr('disabled', 'disabled');
	        $.ajax({
	            url: '/add/course',
	            type: 'POST',
	            data: postData,
		        success: function(data) {
		        	confirm.show();
	   				loading.hide();
	   				btn.removeAttr('disabled');

		            if (data === '1') {
	                $('.ui-dialog').removeClass('show');
	                $that.trigger('reset');
	                $('#title').val('');
			            $('#teacher1').val('');
			            $('#category').val(1);
			            $('#author1').val('');
			            $('#comment').val('');
			            star.setValue(0);
			            starPop.setValue(0);
			            $('#score').val('');
                  var categories = ["公选", "专选", "公必", "专必", "体育"];
                  window.location = '/'+categories[category]+'/'+teacher+'/'+title;
		            }
		        }
		    });
	    });
	});

	$('.js-index-search-form').submit(function(event) {
		event.preventDefault();
		window.location = '/search/'+$('[name=keyword]').val();
	});

	$('.ui-searchbar').tap(function() {
		$('.header').addClass('remove-height');
		$('.blank').addClass('remove-height');
	});

    $('.ui-searchbar-cancel').tap(function(){
        $('.ui-searchbar-wrap').removeClass('focus');
        $('.header').removeClass('remove-height');
		$('.blank').removeClass('remove-height');
    });



	var SearchTips = function(options) {
	    this.options = options;
	};

	function getCookie(name) {
	    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
	    return r ? r[1] : undefined;
	}

	SearchTips.prototype = {
	    constructor: SearchTips,
	    init: function() {
	        this.ul = this.options.dropdown;
	        this.options.input.on('input paste', this.handler());
	    },
	    handler: function() {
	        var self = this;
	        return function(event) {
	            if (!$(this).val()) {
	                self.options.dropdown.empty();
	            } else {
	                var keyword = $(this).val();
	                self.handleData(keyword, event);
	            }
	        }
	    },
	    handleData: function(keyword, event) {
	        var self = this;
	        var res = '';
	        self.lastTime = event.timeStamp;
	        setTimeout(function(){ 
	            //如果时间差为0，也就是你停止输入0.5s之内都没有其它的keyup事件产生，这个时候就可以去请求服务器了
	            if(self.lastTime - event.timeStamp == 0) {
	                var args = {"keyword": keyword};
	                args._xsrf = getCookie("_xsrf");
	                $.ajax({
	                    url: self.options.url,
	                    type: 'POST',
	                    data: $.param(args),
	                	success: function(data) {
		                    // console.log(data);
		                    if (data === '0') {
		                        //alert('fail');
		                    } else if (data === '2') {
		                        res = self.template();
		                        self.ul.empty().append(res);
		                        self.options.dropdown.addClass('active');
		                    } else {
		                        var response = $.parseJSON(data);
		                        response = response["all"];
		                        for (var course in response) {
		                            res += self.template(response[course],  keyword);
		                        }
		                        self.ul.empty().append(res);
		                        initStarResult();
		                    }
		                }
	                });
	            }
	        }, 500);
	    },
	    template: function() {
	        arguments = Array.prototype.slice.call(arguments, 0);
	        // console.log(arguments);
	        var categories = ["公选", "专选", "公必", "专必", "体育"];
	        if (!arguments[0]) {
	            return;
	        } else {
	        	return ''
	        	+'<li class="animated" onclick="window.location=\'/'+ categories[+arguments[0].category-1] +'/'+ arguments[0].teacher +'/'+ arguments[0].name + '?keyword='+ arguments[1] +'\'">'
            	+'	<div class="ui-list-thumb ui-avatar-s" style="background-color: '+ arguments[0].color +'">'
               	+'		<span>' + arguments[0].first + '</span>'
		        +'    </div>'
		        +'    <div class="ui-list-info ui-border-t">'
		        +'        <h4 class="ui-nowrap">'+arguments[0].name+'</h4>'
		        +'        <p class="ui-nowrap">'
		        +'            <span class="result-star" data-rate="'+ arguments[0].rating + '">'
		        +'                <i class="demo-icon icon-star"></i>'
		        +'                <i class="demo-icon icon-star"></i>'
		        +'                <i class="demo-icon icon-star-empty"></i>'
		        +'                <i class="demo-icon icon-star-empty"></i>'
		        +'                <i class="demo-icon icon-star-empty"></i>'
		        +'            </span> '
		        +'        ' + arguments[0].teacher + ' ' + categories[+arguments[0].category-1] + '</p>'
		        +'    </div>'
		        +'</li>';
	        }
	    }
	};

	var st = new SearchTips({
	    url: '/search',
	    notFoundText: '没有找到相关数据',
	    addText: '想添加一门新的课程？',
	    dropdown: $('.ui-list'),
	    input: $('.search-form input')
	});

	st.init();


	setTimeout(function(){
		var aa = $('.ui-list.animated-list>li');
		for (var i = 0, len = aa.length; i < len; i++) {
			aa.eq(i).addClass('animation' + i);
		}
	}, 10);

  var objListUnique = function(list, cri) {
    var n = {}, r = [];
    for (var i = 0, len = list.length; i < len; i++) {
      if (!n[list[i][cri]]) {
        n[list[i][cri]] = true;
        r.push(list[i][cri]);
      }
    }
    return r;
  }

	var InputSuggest = function(options) {
	    this.options = options;
	};

	InputSuggest.prototype = {
	    constructor: InputSuggest,
	    init: function() {
        var self = this;
        this.ul = this.options.dropdown;
        this.closeBtn = this.options.module.find('.close-suggest');
        this.options.input.on('input paste', this.handler());
        this.options.input.on('blur', function(){
          self.close();
        });
        this.closeBtn.tap(this.closePanel());
	    },
	    handler: function() {
	        var self = this;
	        return function(event) {
	            if (!$(this).val()) {
	                self.options.dropdown.empty();
	                self.options.module.removeClass('visible');
	            } else {
	                var keyword = $(this).val();
	                self.handleData(keyword, event);
	            }
	        }
	    },
	    closePanel: function() {
	    	var self = this;
	    	return function() {
		    	self.options.module.removeClass('visible');
	    	};
	    },
	    handleData: function(keyword, event) {
	        var self = this;
	        var res = '';
	        self.lastTime = event.timeStamp;
	        setTimeout(function(){
	            //如果时间差为0，也就是你停止输入0.5s之内都没有其它的keyup事件产生，这个时候就可以去请求服务器了
	            if(self.lastTime - event.timeStamp == 0) {
	                var args = {"keyword": keyword, "criteria": self.options.cri};
	                args._xsrf = getCookie("_xsrf");
	                $.ajax({
	                    url: self.options.url,
	                    type: 'POST',
	                    data: $.param(args),
	                	success: function(data) {
		                    // console.log(data);
		                    if (data === '0') {
		                        //alert('fail');
		                    } else if (data === '2') {
		                        res = self.template();
		                        self.ul.empty().append(res);
		                        self.options.module.removeClass('visible');
		                    } else {
		                        var responseData = $.parseJSON(data);
		                        responseData = responseData["all"];
                            var response = objListUnique(responseData, self.options.cri);
		                        for (var course in response) {
		                            res += self.template(response[course],  keyword);
		                        }
		                        self.ul.empty().append(res);
		                        initStarResult();
		                        self.options.module.addClass('visible');
		                    }
		                }
	                });
	            }
	        }, 500);
	    },
	    template: function() {
	        arguments = Array.prototype.slice.call(arguments, 0);
	        // console.log(arguments);
	        var categories = ["公选", "专选", "公必", "专必", "体育"];
	        if (!arguments[0]) {
	            return;
	        } else {
	        	var content = arguments[0];
		        return ''
		        +'<li class="suggest-item"><button type="button" class="item-btn">'+content +'</button></li>';
	        }
	    },
	    close: function() {
	    	this.options.module.removeClass('visible');
	    }
	};

	var titleInputSuggest = new InputSuggest({
	    url: '/search',
	    notFoundText: '没有找到相关数据',
	    addText: '想添加一门新的课程？',
	    dropdown: $('.title-suggest'),
	    input: $('#title'),
	    module: $('.title-panel'),
	    cri: 'name'
	});

	titleInputSuggest.init();



	var teacherInputSuggest = new InputSuggest({
	    url: '/search',
	    notFoundText: '没有找到相关数据',
	    addText: '想添加一门新的课程？',
	    dropdown: $('.teacher-suggest'),
	    input: $('#teacher1'),
	    module: $('.teacher-panel'),
	    cri: 'teacher'
	});

	teacherInputSuggest.init();

	$('.title-panel').on('tap', '.title-panel .item-btn', function(event) {
	    console.log('iii');
	    var course = $(this).text();
	    var $input = $('#title');
	    $input.val(course);
	    titleInputSuggest.close();
	});

	$('.teacher-panel').on('tap', '.teacher-panel .item-btn', function(event) {
	    var course = $(this).text();
	    var $input = $('#teacher1');
	    $input.val(course);
	    teacherInputSuggest.close();
	});

	$(".jump-to-score").tap(function() {
      $(".popup").addClass('popup-show');
      if (teacherInputSuggest || titleInputSuggest) {
        teacherInputSuggest.close();
        titleInputSuggest.close();
      }
  	});


});


