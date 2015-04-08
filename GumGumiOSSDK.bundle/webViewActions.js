/* GUMGUM commons */
/* jshint ignore:start */
if (!window.GUMGUM) (function(e,t,n){var r=null,o=false,i=true,a="length",l="push",c="style",u="width",s="height",f="display",d="className",p="innerHTML",g="parentNode",m="top",h="left",y="zIndex",v="none",b="visibility",w="hidden",A="offsetWidth",x="offsetHeight",S="opacity",E="getTimezoneOffset",T="getAttribute",C="src",_="replace",D="toLowerCase",k=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},I=function(t){return e.encodeURIComponent(t)},L=function(){return+new Date},R=e.location,M=e.navigator,N=e.screen,O=e.setTimeout,j=e.clearInterval,P,U,B,F,H;(function(e,t,n){t[e]=n()})("bean",e,function(e,t){e=e||"bean",t=t||this;var r=window,o=t[e],i=/[^\.]*(?=\..*)\.|.*/,c=/\..*/,u="addEventListener",s="removeEventListener",f=document||{},d=f.documentElement||{},p=d[u],m=p?u:"attachEvent",h={},y=Array.prototype.slice,v=function(e,t){return e.split(t||" ")},b=function(e){return typeof e=="string"},w=function(e){return typeof e=="function"},A="click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",x="show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online     afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",S=function(e,t,n){for(n=0;n<t[a];n++)t[n]&&(e[t[n]]=1);return e}({},v(A+(p?x:""))),E=function(){var e="compareDocumentPosition"in d?function(e,t){return t.compareDocumentPosition&&(t.compareDocumentPosition(e)&16)===16}:"contains"in d?function(e,t){return t=t.nodeType===9||t===window?d:t,t!==e&&t.contains(e)}:function(e,t){while(e=e[g])if(e===t)return 1;return 0},t=function(t){var n=t.relatedTarget;return n?n!==this&&n.prefix!=="xul"&&!/document/.test(this.toString())&&!e(n,this):n==null};return{mouseenter:{base:"mouseover",condition:t},mouseleave:{base:"mouseout",condition:t},mousewheel:{base:/Firefox/.test(M.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),T=function(){var e=v("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),t=e.concat(v("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),n=t.concat(v("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),o=e.concat(v("char charCode key keyCode keyIdentifier keyLocation location")),i=e.concat(v("data")),l=e.concat(v("touches targetTouches changedTouches scale rotation")),c=e.concat(v("data origin source")),u=e.concat(v("state")),s=/over|out/,p=[{reg:/key/i,fix:function(e,t){return t.keyCode=e.keyCode||e.which,o}},{reg:/click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,fix:function(e,n,r){n.rightClick=e.which===3||e.button===2,n.pos={x:0,y:0};if(e.pageX||e.pageY)n.clientX=e.pageX,n.clientY=e.pageY;else if(e.clientX||e.clientY)n.clientX=e.clientX+f.body.scrollLeft+d.scrollLeft,n.clientY=e.clientY+f.body.scrollTop+d.scrollTop;return s.test(r)&&(n.relatedTarget=e.relatedTarget||e[(r=="mouseover"?"from":"to")+"Element"]),t}},{reg:/mouse.*(wheel|scroll)/i,fix:function(){return n}},{reg:/^text/i,fix:function(){return i}},{reg:/^touch|^gesture/i,fix:function(){return l}},{reg:/^message$/i,fix:function(){return c}},{reg:/^popstate$/i,fix:function(){return u}},{reg:/.*/,fix:function(){return e}}],m={},h=function(e,t,n){if(!arguments[a])return;e=e||((t.ownerDocument||t.document||t).parentWindow||r).event,this.originalEvent=e,this.isNative=n,this.isBean=!0;if(!e)return;var o=e.type,i=e.target||e.srcElement,l,c,u,s,f;this.target=i&&i.nodeType===3?i[g]:i;if(n){f=m[o];if(!f)for(l=0,c=p[a];l<c;l++)if(p[l].reg.test(o)){m[o]=f=p[l].fix;break}s=f(e,this,o);for(l=s[a];l--;)!((u=s[l])in this)&&u in e&&(this[u]=e[u])}};return h.prototype.preventDefault=function(){this.originalEvent.preventDefault?this.originalEvent.preventDefault():this.originalEvent.returnValue=!1},h.prototype.stopPropagation=function(){this.originalEvent.stopPropagation?this.originalEvent.stopPropagation():this.originalEvent.cancelBubble=!0},h.prototype.stop=function(){this.preventDefault(),this.stopPropagation(),this.stopped=!0},h.prototype.stopImmediatePropagation=function(){this.originalEvent.stopImmediatePropagation&&this.originalEvent.stopImmediatePropagation(),this.isImmediatePropagationStopped=function(){return!0}},h.prototype.isImmediatePropagationStopped=function(){return this.originalEvent.isImmediatePropagationStopped&&this.originalEvent.isImmediatePropagationStopped()},h.prototype.clone=function(e){var t=new h(this,this.element,this.isNative);return t.currentTarget=e,t},h}(),C=function(e,t){return!p&&!t&&(e===f||e===r)?d:e},D=function(){var e=function(e,t,n,r){var o=function(n,o){return t.apply(e,r?y.call(o,n?0:1).concat(r):o)},i=function(n,r){return t.__beanDel?t.__beanDel.ft(n.target,e):r},a=n?function(e){var t=i(e,this);if(n.apply(t,arguments))return e&&(e.currentTarget=t),o(e,arguments)}:function(e){return t.__beanDel&&(e=e.clone(i(e))),o(e,arguments)};return a.__beanDel=t.__beanDel,a},t=function(t,n,r,o,i,a,l){var c=E[n],u;n=="unload"&&(r=O(j,t,n,r,o)),c&&(c.condition&&(r=e(t,r,c.condition,a)),n=c.base||n),this.isNative=u=S[n]&&!!t[m],this.customType=!p&&!u&&n,this.element=t,this.type=n,this.original=o,this.namespaces=i,this.eventType=p||u?n:"propertychange",this.target=C(t,u),this[m]=!!this.target[m],this.root=l,this.handler=e(t,r,null,a)};return t.prototype.inNamespaces=function(e){var t,n,r=0;if(!e)return!0;if(!this.namespaces)return!1;for(t=e[a];t--;)for(n=this.namespaces[a];n--;)e[t]==this.namespaces[n]&&r++;return e[a]===r},t.prototype.matches=function(e,t,n){return this.element===e&&(!t||this.original===t)&&(!n||this.handler===n)},t}(),k=function(){var e={},t=function(n,r,o,i,l,c){var u=l?"r":"$";if(!r||r=="*")for(var s in e)s.charAt(0)==u&&t(n,s.substr(1),o,i,l,c);else{var f=0,d,p=e[u+r],g=n=="*";if(!p)return;for(d=p[a];f<d;f++)if((g||p[f].matches(n,o,i))&&!c(p[f],p,f,r))return}},n=function(t,n,r,o){var i,l=e[(o?"r":"$")+n];if(l)for(i=l[a];i--;)if(!l[i].root&&l[i].matches(t,r,null))return!0;return!1},r=function(e,n,r,o){var i=[];return t(e,n,r,null,o,function(e){return i[l](e)}),i},o=function(t){var n=!t.root&&!this.has(t.element,t.type,null,!1),r=(t.root?"r":"$")+t.type;return(e[r]||(e[r]=[]))[l](t),n},i=function(n){t(n.element,n.type,null,n.handler,n.root,function(t,n,r){return n.splice(r,1),t.removed=!0,n[a]===0&&delete e[(t.root?"r":"$")+t.type],!1})},c=function(){var t,n=[];for(t in e)t.charAt(0)=="$"&&(n=n.concat(e[t]));return n};return{has:n,get:r,put:o,del:i,entries:c}}(),I,L=function(e){arguments[a]?I=e:I=f.querySelectorAll?function(e,t){return t.querySelectorAll(e)}:function(){throw new Error("Bean: No selector engine installed")}},R=function(e,t){if(!p&&t&&e&&e.propertyName!="_on"+t)return;var n=k.get(this,t||e.type,null,!1),r=n[a],o=0;e=new T(e,this,!0),t&&(e.type=t);for(;o<r&&!e.isImmediatePropagationStopped();o++)n[o].removed||n[o].handler.call(this,e)},N=p?function(e,t,n){e[n?u:s](t,R,!1)}:function(e,t,n,r){var o;n?(k.put(o=new D(e,r||t,function(t){R.call(e,t,r)},R,null,null,!0)),r&&e["_on"+r]==null&&(e["_on"+r]=0),o.target.attachEvent("on"+o.eventType,o.handler)):(o=k.get(e,r||t,R,!0)[0],o&&(o.target.detachEvent("on"+o.eventType,o.handler),k.del(o)))},O=function(e,t,n,r,o){return function(){r.apply(this,arguments),e(t,n,o)}},j=function(e,t,n,r){var o=t&&t[_](c,""),i=k.get(e,o,null,!1),l={},u,s;for(u=0,s=i[a];u<s;u++)(!n||i[u].original===n)&&i[u].inNamespaces(r)&&(k.del(i[u]),!l[i[u].eventType]&&i[u][m]&&(l[i[u].eventType]={t:i[u].eventType,c:i[u].type}));for(u in l)k.has(e,l[u].t,null,!1)||N(e,l[u].t,!1,l[u].c)},P=function(e,t){var n=function(t,n){var r,o=b(e)?I(e,n):e;for(;t&&t!==n;t=t[g])for(r=o[a];r--;)if(o[r]===t)return t},r=function(e){var r=n(e.target,this);r&&t.apply(r,arguments)};return r.__beanDel={ft:n,selector:e},r},U=p?function(e,t,n){var o=f.createEvent(e?"HTMLEvents":"UIEvents");o[e?"initEvent":"initUIEvent"](t,!0,!0,r,1),n.dispatchEvent(o)}:function(e,t,n){n=C(n,e),e?n.fireEvent("on"+t,f.createEventObject()):n["_on"+t]++},B=function(e,t,n){var r=b(t),o,l,u,s;if(r&&t.indexOf(" ")>0){t=v(t);for(s=t[a];s--;)B(e,t[s],n);return e}l=r&&t[_](c,""),l&&E[l]&&(l=E[l].base);if(!t||r){if(u=r&&t[_](i,""))u=v(u,".");j(e,l,n,u)}else if(w(t))j(e,null,t);else for(o in t)t.hasOwnProperty(o)&&B(e,o,t[o]);return e},F=function(e,t,r,o){var l,u,s,f,d,p,g;if(r===n&&typeof t=="object"){for(u in t)t.hasOwnProperty(u)&&F.call(this,e,u,t[u]);return}w(r)?(d=y.call(arguments,3),o=l=r):(l=o,d=y.call(arguments,4),o=P(r,l,I)),s=v(t),this===h&&(o=O(B,e,t,o,l));for(f=s[a];f--;)g=k.put(p=new D(e,s[f][_](c,""),o,l,v(s[f][_](i,""),"."),d,!1)),p[m]&&g&&N(e,p.eventType,!0,p.customType);return e},H=function(e,t,n,r){return F.apply(null,b(n)?[e,n,t,r].concat(arguments[a]>3?y.call(arguments,5):[]):y.call(arguments))},z=function(){return F.apply(h,arguments)},G=function(e,t,n){var r=v(t),o,l,u,s,f;for(o=r[a];o--;){t=r[o][_](c,"");if(s=r[o][_](i,""))s=v(s,".");if(!s&&!n&&e[m])U(S[t],t,e);else{f=k.get(e,t,null,!1),n=[!1].concat(n);for(l=0,u=f[a];l<u;l++)f[l].inNamespaces(s)&&f[l].handler.apply(e,n)}}return e},X=function(e,t,n){var r=k.get(t,n,null,!1),o=r[a],i=0,c,u;for(;i<o;i++)r[i].original&&(c=[e,r[i].type],(u=r[i].handler.__beanDel)&&c[l](u.selector),c[l](r[i].original),F.apply(null,c));return e},Y={on:F,add:H,one:z,off:B,remove:B,clone:X,fire:G,Event:T,setSelectorEngine:L,noConflict:function(){return t[e]=o,this}};if(r.attachEvent){var W=function(){var e,t=k.entries();for(e in t)t[e].type&&t[e].type!=="unload"&&B(t[e].element,t[e].type);r.detachEvent("onunload",W),r.CollectGarbage&&r.CollectGarbage()};r.attachEvent("onunload",W)}return L(),Y});F=bean.noConflict();window.bean=r;(function(n,o){var i=t.createElement("div"),u="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");function s(e,t,n){return(e+(t-e)*n).toFixed(3)}function f(e,t,n){return e.substr(t,n||1)}function d(e,t,n){var r=2,o,i,c,u=[],s=[];while(o=3,i=arguments[r-1],r--){if(f(i,0)=="r"){i=i.match(/\d+/g);while(o--){u[l](~~i[o])}}else{if(i[a]==4){i="#"+f(i,1)+f(i,1)+f(i,2)+f(i,2)+f(i,3)+f(i,3)}while(o--){u[l](parseInt(f(i,1+o*2,2),16))}}}while(o--){c=~~(u[o+3]+(u[o]-u[o+3])*n);s[l](c<0?0:c>255?255:c)}return"rgb("+s.join(",")+")"}function p(e){var t=parseFloat(e),n=e[_](/^[\-\d\.]+/,"");return isNaN(t)?{v:n,f:d,u:""}:{v:t,f:s,u:n}}function g(e){var t,n={},r=u[a],o;i.innerHTML='<div style="'+e+'"></div>';t=i.childNodes[0][c];while(r--){if(o=t[u[r]]){n[u[r]]=p(o)}}return n}B=function(n,o,i){n=typeof n=="string"?t.getElementById(n):n;i=i||{};var a=g(o),l=n.currentStyle?n.currentStyle:getComputedStyle(n,r),u,s={},f=L(),d=i.duration||200,m=f+d,h,y=i.easing||function(e){return-Math.cos(e*Math.PI)/2+.5};for(u in a){s[u]=p(l[u])}h=e.setInterval(function(){var e=L(),t=e>m?1:(e-f)/d;for(u in a){n[c][u]=a[u].f(s[u].v,a[u].v,y(t))+a[u].u}if(e>m){clearInterval(h);i.after&&i.after()}},10)}})();(function(e){function t(){n=1;for(var e=0,t=r[a];e<t;e++)r[e]()}var n=0,r=[],o=e.createElement("a");/^loade|c/.test(e.readyState)&&(n=1);e.addEventListener&&e.addEventListener("DOMContentLoaded",function c(){e.removeEventListener("DOMContentLoaded",c,!1);t()},!1);o.doScroll&&e.attachEvent("onreadystatechange",function u(){/^c/.test(e.readyState)&&(e.detachEvent("onreadystatechange",u),t())});var i=o.doScroll?function(e){self!=top?!n?r[l](e):e():function(){try{o.doScroll("left")}catch(t){return O(function(){i(e)},50)}e()}()}:function(e){n?e():r[l](e)};U=i})(document);!function(e,t){function n(e,n){l[c]=this[c];var o=this,i=new l,a=typeof e==t,s=a?e:this,f=a?{}:e,d=function(){this.initialize?this.initialize.apply(this,arguments):(n||u(e)&&o.apply(this,arguments),s.apply(this,arguments))};d.methods=function(e){r(i,e,o),d[c]=i;return this},d.methods.call(d,f).prototype.constructor=d,d.extend=arguments.callee,d[c].implement=d.statics=function(e,t){e=typeof e=="string"?function(){var n={};n[e]=t;return n}():e,r(this,e,o);return this};return d}function r(e,n,r){for(var i in n)k(n,i)&&(e[i]=typeof n[i]==t&&typeof r[c][i]==t&&a.test(n[i])?o(i,n[i],r):n[i])}function o(e,t,n){return function(){var r=this.supr;this.supr=n[c][e];var o=t.apply(this,arguments);this.supr=r;return o}}function i(e){return n.call(typeof e==t?e:l,e,1)}var a=/xyz/.test(function(){xyz})?/\bsupr\b/:/.*/,l=function(){},c="prototype",u=function(e){return typeof e===t};if(typeof module!="undefined"&&module.exports)module.exports=i;else{var s=e.klass;i.noConflict=function(){e.klass=s;return this},e.klass=i}}(e,"function");H=klass.noConflict();window.klass=r;function z(e){function t(e,t,n){while(0<n--)e[l](t)}function n(e,t){return e<<t|e>>>32-t}function r(e,t,n){return e^t^n}function o(e,t){var n=(t&65535)+(e&65535),r=(t>>>16)+(e>>>16)+(n>>>16);return(r&65535)<<16|n&65535}var i="0123456789abcdef";return function(e){var t=[],n=e[a]*4,r;for(var o=0;o<n;o++){r=e[o>>2]>>(3-o%4)*8;t[l](i.charAt(r>>4&15)+i.charAt(r&15))}return t.join("")}(function(e,i){var l,c,u,s,f,d=e[a],p=1732584193,g=4023233417,m=2562383102,h=271733878,y=3285377520,v=[];t(v,1518500249,20);t(v,1859775393,20);t(v,2400959708,20);t(v,3395469782,20);e[i>>5]|=128<<24-i%32;e[(i+65>>9<<4)+15]=i;for(var b=0;b<d;b+=16){l=p;c=g;u=m;s=h;f=y;for(var w=0,A=[];w<80;w++){A[w]=w<16?e[w+b]:n(A[w-3]^A[w-8]^A[w-14]^A[w-16],1);var x=function(e,t,n,r,o){var i=(o&65535)+(e&65535)+(t&65535)+(n&65535)+(r&65535),a=(o>>>16)+(e>>>16)+(t>>>16)+(n>>>16)+(r>>>16)+(i>>>16);return(a&65535)<<16|i&65535}(w<20?function(e,t,n){return e&t^~e&n}(c,u,s):w<40?r(c,u,s):w<60?function(e,t,n){return e&t^e&n^t&n}(c,u,s):r(c,u,s),f,v[w],A[w],n(l,5));f=s;s=u;u=n(c,30);c=l;l=x}p=o(p,l);g=o(g,c);m=o(m,u);h=o(h,s);y=o(y,f)}return[p,g,m,h,y]}(function(e){var t=[],n=255,r=e[a]*8;for(var o=0;o<r;o+=8){t[o>>5]|=(e.charCodeAt(o/8)&n)<<24-o%32}return t}(e).slice(),e[a]*8))}e.GUMGUM=function(G){"use strict";var X=e.Math,Y=X.max,W=X.min,Z=X.round,K=X.floor,V=X.random,q=function(e){return parseInt(e,10)},Q,$,J,et,tt,nt={"boolean":function(e){return String(e)},"null":function(){return"null"},number:function(e){return isFinite(e)?String(e):"null"},array:function(e){var t=[],n,r,o;for(r=0;r<e[a];r++){if((n=nt[typeof(o=e[r])])&&typeof(o=n(o))=="string"){t[l](o)}}return"["+t.join(",")+"]"},object:function(e){var t,n,r=[];if(e){if(e instanceof Array){return nt.array(e)}for(t in e){if(k(e,t)){if((n=nt[typeof e[t]])&&typeof n(e[t])=="string"){r[l](nt.string(t)+":"+n(e[t]))}}}}return typeof r!=="undefined"?"{"+r.join(",")+"}":"null"},string:function(e){if(/["\\\x00-\x1f]/.test(e)){e=e[_](/([\x00-\x1f\\"])/g,function(e,t){var n=t.charCodeAt(),r={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};if(r[t]){return r[t]}return"\\u00"+K(n/16).toString(16)+(n%16).toString(16)})}return'"'+e+'"'}},rt="FormData"in e,ot="@commit@",it,at=o,lt=[],ct,ut,st,ft,dt,pt,gt,mt,ht,yt,vt,bt,wt,At,xt,St,Et,Tt,Ct,_t,Dt,kt,It,Lt=0,Rt,Mt,Nt,Ot,jt,Pt,Ut,Bt,Ft,Ht,zt=t.documentElement,Gt,Xt,Yt,Wt=e.ggv2id,Zt="//g2.gumgum.com",Kt="classid"in t.createElement("object"),Vt=Kt?q(M.userAgent.toLowerCase().split("msie")[1]):0,qt=Kt?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"':"",Qt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABV0RVh0Q3JlYXRpb24gVGltZQA5LzExLzE0F13cFAAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAADDSURBVCiRpZPbDYMwDEUPmYARYAIYIZuUOYIIIhWdAzZgBEYgE5QRGKE/SUUj0hZx/2z5XNt5JDh1ph+AEpCtrjcCdaZPgRlYdKMqgGQH3lydDQ12YOFSo25UlQQgocEB6DUKN2qoApg702cREKAUgHSdjgyeEdAC0u8cG+1IFpC6UVviM38avEFwp70zyNyoMeW6UasPRNB5+jHyZO6P1AfXdj4JfhiIL6AFcuLXOAtgiTm3ul6Jv4Pl2tveFQyc/FUvDUZjULjkGSAAAAAASUVORK5CYII=",$t=10001,Jt=o,en,tn=new Date,nn="abcdefghijklmnopqrstuvwxyz",rn=nn[~~(V()*nn[a])]+ +tn,on,an=550,ln=550,cn={data:{mfs:false,mw:an,mh:ln,mcs:{margin:5}}},un={};G.Stack=[];G.trackingId=Wt;G.revision=ot;G.baseUrl=Zt;G.Bean=F;G.Klass=H;G.Emile=B;G.has=k;G.euc=I;G.getTS=L;G.msie=Kt;G.ieVersion=Vt;G.swfcid=qt;G.infoModalOps=cn;G.greyCB=Qt;un[m]=un[h]=0;G.highestZindex=0;G.dtCredentials={member:"YcXr87z2lpbB"};G.getDigiTrustID=function(){var t=e.DigiTrust&&e.DigiTrust.getIdentitySync?e.DigiTrust.getIdentitySync(G.dtCredentials):{};return t.identity?t.identity.id:""};G.newEl=ut=function(e){return t.createElement(e)};G.addNode=st=function(e,t){return e.appendChild(t)};G.rmNode=ft=function(e,t){e=e?e:t[g];return e?e.removeChild(t):r};G.onError=Mt=function(e,t){var n=0,i=[],a=r,c=ut("img");for(n in t)if(k(t,n))i[l](n.toUpperCase()+":"+t[n]);a={tid:Wt,pu:I(R.href),msg:(e||"other")+":"+I(i.join(";"))};c[C]=Zt+"/error/js?trackingId="+a.tid+"&pageUrl="+a.pu+"&message="+a.msg;return o};e.assetsFailure=function(){return o};G.bindCtx=Nt=function(e,t){return function(){t.apply(e,$(arguments))}};Xt=function(){try{var t=M,n=N,i=t.plugins,c=[],f=r,d=0,p=0,g=r,m=r,h=function(t){var n;try{n=e[t]}catch(r){n=o}return n};if(i[a])for(d in i)if(k(i,d)&&(g=i[d])&&g.name){f=[];for(p in g)if(k(g,p)&&(m=g[p])&&m.type){f[l](m.type+"~"+m.suffixes)}c[l](g.name+"::"+f.join(","))}return[t.userAgent,t.platform,t.product,t.productSub,t.vendor,t.vendorSub,[n[s],n[u],n.colorDepth,n.pixelDepth,e.devicePixelRatio].join("x"),(new Date)[E](),!!e.console,!!h("sessionStorage"),!!h("localStorage"),!!h("indexedDB"),c.join(";")].join("###")}catch(y){return Mt("getBF",y)||"BF-ERROR"}}();G.sbf=Xt=z(Xt);G.flashEnabled=Jt=function(){var t=r,n="undefined",a="Shockwave Flash",l="application/x-shockwave-flash",c=e.navigator,u=o;if(typeof c.plugins!=n&&typeof c.plugins[a]=="object"){if(c.plugins[a].description&&!(typeof c.mimeTypes!=n&&c.mimeTypes[l]&&!c.mimeTypes[l].enabledPlugin))u=i}else if(typeof e.ActiveXObject!=n){try{t=new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(t&&t.GetVariable("$version"))u=i}catch(s){}}return u}();G.reportAd=on=function(){var t=this,n=t.data,r=n.ab||n.i||n.ai,a=ut("div"),l=cn,c=rt?'<label style="line-height:19px">Attachment <input type="file" name="attachment" class="gg-att"></label>':"",u=function(t){var n=ht.call(t,"input[type=hidden],textarea"),r=pt(t.id+"markup"),o={},a,l;r.value=e.decodeURIComponent(r.value);if(!rt){for(l=0;l<n.length;l++){a=n[l];o[a.name]=a.value}o=tt(o)}else{o=new FormData(t)}Ht({url:t.action,postData:o,noCT:i,callback:function(e){var n=JSON.parse(e.response),r;if(n.success){t.innerHTML='<strong style="display:block;text-align:center;font-size:24px">Thank you for your feedback</strong>'}else{r=vt('<strong style="color:red">'+n.error+"</strong>");st(t,r);O(function(){ft(t,r)},3e3)}}})},s=function(){var e=pt("ggreport"+r);F.on(e,"submit",function(e){e.preventDefault();u(this)})},f=t.container||t.element,d=gt.call(f,"iframe"),g,m,h;if(d.length){g=d[0][T](C);if(!g||g==="about:blank"){h=d[0].contentDocument||d[0].contentWindow.document;h=gt.call(h,"html");h=h[0][p]}}st(a,f.cloneNode(i));a=a[p][_](/<iframe(.*)iframe>/i,"<iframe><html>"+h+"</html></iframe>");m='                <div style="background:#DCDCDD;border:1px solid #cfcfd0;border-top:none;border-left:none;padding:20px;">                    <img src="//c.gumgum.com/images/logo/all300.png" alt="GumGum" width="225" height="57" style="display:block;margin:0 auto 10px;">                    <form action="//g2.gumgum.com/ad/report" id="ggreport_ADID_" method="POST" enctype="multipart/form-data">                       <input type="hidden" name="pageUrl" value="_PAGEURL_">                       <input type="hidden" name="markup" value="_MARKUP_" id="ggreport_ADID_markup">                       <input type="hidden" name="adId" value="_ADID_">                       <input type="hidden" name="trackingId" value="_TRACKINGID_">                       <input type="hidden" name="user" value="_REPORTER_">                       <div style="margin:3px 0;">                           <textarea name="comments" rows="10" placeholder="Write a brief description of the problem" style="display:block;width:98%;border:1px solid #BBB;padding:1%;background:#e9e9e9"></textarea>                       </div>                       _FILE_                       <div style="text-align:right">                           <input type="submit" value="send" style="cursor:pointer;background:#CFCFD0;padding:7px;border:1px solid #BBB;border-top:none;border-left:none">                       </div>                    </form>                </div>'[_](/_PAGEURL_/,e.location.href)[_](/_MARKUP_/,I(a))[_](/_FILE_/,c)[_](/_ADID_/gi,r)[_](/_TRACKINGID_/,Wt)[_](/_REPORTER_/,G.BD?G.BD.username:"");l.data.mfs=false;l.data.mcc=Qt;l.data.mcs={margin:"10px"};Yt.call(l,m,true,s);return o};G.resetHTML=yt=function(e){return e[_](/_CLEARCSS_/g,"margin:0;padding:0;position:static;outline:0;background:transparent none;border:none;overflow:visible;visibility:visible;filter:alpha(opacity=100);opacity:1;box-sizing:content-box;-moz-box-sizing:content-box;text-decoration:none;font:normal 12px/1 arial;text-shadow:none;box-shadow:none;color:#000;text-align:left;vertical-align:top;float:none;max-width:none;max-height:none")};G.tpl=wt=function(e,t,r){var o=function(e,o){return t[o]===n?r:t[o]},i=function(e,o){return t[o]===n?r:parseFloat(t[o]).toFixed(2)};if(r==n)r="N/A";return yt(e)[_](/\{:([\w]+):\}/g,o)[_](/\{#([\w]+)#\}/g,i)};G.inDOM=ct=function(e){return e.parentNode&&Dt(zt||Gt,e)};G.parseHTML=vt=function(e,t){var n=ut("div"),o=r;t=t||0;e=yt(e);if(/<!--iframe-->/im.test(e)){e=e[_](/\r|\f|\n|^\s*|\s*$/gi,"").split("<!--iframe-->");if(e[a]===3){n[p]=e[0]+'<div class="gumgum-iframe-placeholder"></div>'+e[2];bt(e[1],mt.call(n,"gumgum-iframe-placeholder")[0],i)}else throw"Invalid --iframe-- separators"}else{n[p]=e}if(n&&n.children[t]){o=ft(n,n.children[t])}else throw"Invalid parseHTML return Node";n=r;return o};G.iframeHTML=bt=function(e,t,n){var r=ut("iframe");r.allowTransparency=1;r.frameBorder=0;r.scrolling="no";r[C]="about:blank";r[u]="100%";r[s]="100%";e=yt(e);if(t&&!t.nodeType)t=[ht(t)||[o]][0];if(!t)return o;if(n&&t[g])t[g].replaceChild(r,t);else st(t,r);O(function(){var t=r.contentWindow;t.GUMGUM=G;t.document.open("text/html","replace");t.document.write('<!DOCTYPE html><br style="display:none;"><style>*{padding:0;margin:0;background:transparent none;border:none;font-size:0}</style>'+e);O(function(){t.document.close()},50)},50);return r};if(!t.querySelectorAll)P=t.createStyleSheet();G.bySelector=ht=function(e){return t.querySelectorAll?$(t.querySelectorAll(e)):function(e){var n=t.all,r=[],o=0,i=0,c=e[_](/\[for\b/gi,"[htmlFor").split(",");for(o=c[a];o--;){P.addRule(c[o],"k:v");for(i=n[a];i--;)if(n[i].currentStyle.k)r[l](n[i]);P.removeRule(0)}return r}(e)};G.byId=pt=function(e){return t.getElementById(e)};G.byTag=gt=function(e){var n=this;return n.getElementsByTagName?n.getElementsByTagName(e):n.all?e=="*"?n.all:n.all.tags(e):t.getElementsByTagName("*")};G.byClass=mt=function(e){var t=this;return t.getElementsByClassName?$(t.getElementsByClassName(e)):function(e){var n=0,r=gt.call(t,"*"),o=r[a],i=[];for(n=0;n<o;n++)if(r[n]&&"className"in r[n]&&~r[n][d].indexOf(e))i[l](r[n]);return i}.call(t,e)};G.shrinkURL=Rt=function(e){try{return e[_](/^(http(s:)|http:)\/\//,"$2")}catch(t){return e}};G.getType=Q=function(e){var t={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"};return e===r?String(e):t[Object.prototype.toString.call(e)]||"object"};G.toArray=$=function(e){if(!e[a])return[];return!Kt?Array.prototype.slice.call(e,0):function(e){var t,n=e[a],r,o=[];for(t=0;t<n&&(r=e[t]);t++)o[l](r);return o}(e)};G.inArray=J=function(e,t){for(var n=0,r=e[a];n<r;n++)if(e[n]===t)return n;return-1};G.toJSON=et=function(e){try{var t=isNaN(e)?nt[typeof e]:nt.number;return t(e)}catch(n){return Mt("toJSON",n)}};G.serialize=tt=function(e){var t=[],n;for(n in e){if(k(e,n)){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))}}return t.join("&")};G.getJSONP=Ft=function(e,t,n){var r="cb"+Lt++;n=n||"jsonp";e+=(e.indexOf("?")>-1?"&":"?")+n+"=GUMGUM.jsonp."+r;G.jsonp[r]=t;Pt(e,en,function(){delete G.jsonp[r]},o);return i};G.jsonp={};G.xhr=Ht=function(t){var n=t.url||false,o=t.callback||function(){},i=t.postData||r,a=t.headers||{},l=[function(){return new e.XMLHttpRequest},function(){return new e.ActiveXObject("Msxml2.XMLHTTP")},function(){return new e.ActiveXObject("Msxml3.XMLHTTP")},function(){return new e.ActiveXObject("Microsoft.XMLHTTP")}],c=function(){var e=false,t;for(t=0;t<l.length;t++){try{e=l[t]()}catch(n){continue}break}return e},u=c(),s=i?"POST":"GET",f;if(!u||!n)return;u.open(s,n,true);if(s==="POST"&&!t.noCT)u.setRequestHeader("Content-type","multipart/form-data");for(f in a)if(k(a,f))u.setRequestHeader(f,a[f]);u.onreadystatechange=function(){if(u.readyState!=4)return;if(u.status!=200&&u.status!=304){Mt("xhr",{url:n,req:u});return}o(u)};if(u.readyState==4)return;return u.send(i)};G.loadScript=Pt=function(e,t,n,r){jt(e,{parent:t,callback:n,preserve:r,type:"script"})};G.loadImg=Ut=function(e,t,n,r){jt(e,{parent:t,callback:n,preserve:r,type:"img"})};G.loadHtml=G.loadHTML=Bt=function(e,t,n){jt(e,{parent:t,callback:n,type:"html"})};G.loadObj=jt=function(e,t){var n=r,a=t||{},l=a.parent||en,u=a.callback||o,s=a.preserve===o?o:i,d=a.type||o,p=a.delay||10,m=a.cb!==o?(e.indexOf("?")>-1?"&":"?")+"_"+L():"",h=function(t){if(t&&t.type=="error")Mt("loadObj",{msg:I(e)+" failed to load."});n.onload=n.onreadystatechange=n.onerror=r;if("clearAttributes"in n){n.clearAttributes()}while(n.lastChild){ft(n,n.lastChild)}if(n[g]&&!s){ft(o,n)}y()},y=function(){return u&&"call"in u?u():i},b=function(e){if(!(e=n.readyState)||e=="complete"||e=="loaded"||e==4){h()}},w=function(){n[C]=e+m;st(l,n)};if(!d)return false;switch(i){case d==="h"||d==="html":try{e=Kt&&Vt<10?e[_](/<script /gi,"<script defer=true "):e;st(l,vt(e));return y()}catch(A){return Mt("loadHTML",A)}break;case d==="i"||d==="img":n=ut("img");break;case d==="s"||d==="scr"||d==="script":n=ut("script");n.async=i;n.type="text/javascript";break;default:n=ut("iframe");s=i;break}n[c][f]=v;n.onload=n.onreadystatechange=n.onerror=b;O(w,p);return i};G.setStyle=xt=function(e,t){var n,r,l,u;if(!e)return;try{if(Q(e)!="array"&&e[a])e=$(e);if(Q(e)!=="array")e=[e];u=e[a];for(r=0;r<u;r++){if("tagName"in e[r]){for(n in t){if(k(t,n)){n=n.indexOf("-")>-1?Ot(n,o):n;switch(i){case n==y:case n=="zoom":case n==S:case isNaN(t[n]):l=t[n];break;default:l=t[n]+"px"}e[r][c][n]=l}}}}}catch(s){Mt("setStyle",s)}};G.getStyle=At=function(n,i){try{if(!(n=n&&n.tagName?n:typeof n=="string"?t.getElementById(n):o))return r;var a=e.getComputedStyle?t.defaultView.getComputedStyle(n,r).getPropertyValue(i):n.currentStyle?n.currentStyle[Ot(i)]:r;a=!e.getComputedStyle&&/border-\w+-width/gi.test(i)?a[_](/thin|medium|thick/,0):a;return/width|height/gi.test(i)?q(a):a}catch(l){Mt("getStyle",l)}};G.getWH=St=function(t){var n=r,o=r;if("setInterval"in t){o=W(zt.clientWidth||9e6,e.innerWidth||9e6);n=W(zt.clientHeight||9e6,e.innerHeight||9e6)}else if(t.nodeType===9){o=Y(zt.clientWidth,zt[A],zt.scrollWidth);n=Y(zt.clientHeight,zt[x],zt.scrollHeight)}else{n=At(t,"height")||t[x];o=At(t,"width")||t[A]}return{width:q(o),height:q(n)}};G.getOffset=Et=function(t){var n=r,i=0,a=0,l=Tt(t);if(t.getBoundingClientRect){try{n=t.getBoundingClientRect()}catch(c){n=o}if(n){return{top:K(Z(n[m])+Y(e.pageYOffset||0,zt.scrollTop,Gt.scrollTop,0)-Y(zt.clientTop,Gt.clientTop,0))+un[m],left:K(Z(n[h])+Y(e.pageXOffset||0,zt.scrollLeft,Gt.scrollLeft,0)-Y(zt.clientLeft,Gt.clientLeft,0))+un[h],height:K(n[s]||t[x]),width:K(n[u]||t[A]),zIndex:l}}}do{i+=t.offsetTop;a+=t.offsetLeft}while(t=t.offsetParent);return{top:~~i,left:~~a,height:~~t[x],width:~~t[A],zIndex:l}};G.getZindex=Tt=function(e){var t=e,n=0;try{if(!G.AT||!G.AT.zIndexOffset)return $t;do{n=At(t,"z-index")}while((t=t[g])&&t!==Gt&&(n=="auto"||n===0))}catch(r){Mt("getZindex",r)}return G.AT.zIndexOffset+q(~~n)};G.getImageSrc=Ct=function(e){return e&&(e.currentSrc||e[C]||e[T](C))||""};G.getHighestZindex=_t=function(e,t){if(!t&&G.highestZindex)return G.highestZindex;e=e||Gt;var n,r,o,a=1,l=e.childNodes,c=l.length;try{for(o=0;o<c;o++){n=l[o];if(n.nodeType!==1||!kt(n))continue;r=~~At(n,"z-index");if(r>a)a=r;if(n.childNodes.length&&(r=_t(n,i))>a)a=r}}catch(u){Mt("getHighestZindex",u)}return G.highestZindex=a};G.containsEl=Dt=function(e,t){var n="compareDocumentPosition";if(n in zt)return(e[n](t)&16)==16;else if("contains"in zt)return e!==t&&e.contains(t);else while(t=t[g]){if(t===e)return i}return o};G.caseCSS=Ot=function(e,t){return t?e[_](/([A-Z]{1})/g,function(e,t){return t?"-"+t[D]():e}):e[_](/-([a-z]{1})/g,function(e,t){return t?t.toUpperCase():e})};G.isElementVisible=kt=function(e){try{var t=~~((At(e,S)||1)*100),n=~~(e[c].filter||"alpha(opacity=100)").match(/alpha\(opacity=(\d+)\)/)[1],r=i,a=G.AT&&G.AT.minOpaque?G.AT.minOpaque:70,l=At(e,b)!=w,u=At(e,f)!=v;if(t<a||n<a)r=o;return r&&l&&u}catch(s){Mt("isElementVisible",s);return i}};G.evp=It=function(t,n){n=n||St(e);var r,o,i,a,l,c,f,d,p,g=Et(t),y=parseInt(G.bodyEl.scrollTop||zt.scrollTop,10),v=parseInt(G.bodyEl.scrollLeft||zt.scrollLeft,10),b=n[s],w=n[u];if(g[m]>y+b||g[h]>v+w){r=0}else if(g[m]>y&&g[m]+g[s]<y+b&&g[h]>v&&g[h]+g[u]<v+w){r=100}else{a=Y(0,y-g[m]);l=Y(0,g[m]+g[s]-(y+b));c=g[s]-(a+l);o=c/(g[s]/100);f=Y(0,v-g[h]);d=Y(0,g[h]+g[u]-(v+w));p=g[u]-(f+d);i=p/(g[u]/100);r=Z(W(o,i)*(Y(o,i)/100))}return r};G.openModal=Yt=function(e,t,n){try{var a=r,l=this,u=Gt,s=l.data||{},f=s.mfs||o,g=G.AT&&G.AT.tweakOverflow,m=r,h=r,y=r;if(G.closeModal)return o;if(G[e]&&G[e].openAd)return G[e].openAd();a={html:function(){var n;if(t){n=e}else if(/swf/i.test(e)){n='<object _CID_ id="_T_" name="_T_" width="100%" height="100%" data="_U_" type="application/x-shockwave-flash" allowscriptaccess="always" wmode="transparent" background="transparent" style="background:transparent"><param name="wmode" value="transparent"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="movie" value="_U_"></object>'[_](/_T_/g,L())[_](/_CID_/g,qt)}else{n='<iframe name="ggmodal" frameborder="0" scroll="no" scrolling="no" allowTransparency="allowTransparency" src="_U_" width="100%" height="100%"></iframe>'[_](/_U_/g,e)}return n}(),of:[u[c].overflow,zt[c].overflow],mw:s.mw?s.mw:"100%",mh:s.mh?s.mh:"100%",mc:s.mcc?s.mcc:"//c.gumgum.com/ads/com/gumgum/close-rs.png",zi:_t(r,i)+11};if(g){u[c].overflow=w;if(!!Kt)zt[c].overflow=w}G.closeModal=function(e){e.stopPropagation();if(g){u[c].overflow=a.of[0];if(!!Kt)zt[c].overflow=a.of[1]}F.remove(y,"click");ft(en,m);G.closeModal=r;a=r};m=vt('<div style="_CLEARCSS_"><div style="_CLEARCSS_;position:absolute;width:100%;height:100%">'+a.html+"</div></div>");m[d]="GGModal_"+(s.uid||"StandAlone");xt(m,{position:"fixed",zIndex:a.zi,top:0,bottom:0,left:0,right:0,background:"transparent url(//ads.gumgum.com/com/gumgum/bg/black85.png) repeat scroll 0 0",_top:'expression(eval(document.compatMode && document.compatMode=="CSS1Compat") ? documentElement.scrollTop +(documentElement.clientHeight-window.clientHeight) : document.body.scrollTop +(document.body.clientHeight-window.clientHeight))'});if(!!s.mos)xt(m,s.mos);h=m.childNodes[0];if(!f&&~~a.mw&&~~a.mh)xt(h,{left:"50%",top:"50%",width:a.mw,height:a.mh,marginLeft:-(a.mw/2),marginTop:-(a.mh/2)});if(!!s.mss)xt(h,s.mss);y=vt('<div style="_CLEARCSS_;position:absolute;top:0;right:0"></div>');a.clb=yt('<img src="'+a.mc+'" style="_CLEARCSS_;display:block;padding:0;margin:0;border:none;cursor:pointer" />');if(s.mcd){y[p]=yt('<span style="_CLEARCSS_;display:block;height:15px;min-width:15px;text-align:center;font:bold 13px/15px monospace;color:#fff;background:#000;border-radius:12px;border:2px solid #fff">&nbsp;</span>');a.to=0;a.st=function(){if(a.to>=s.mcd){j(a.iv);y[p]=a.clb;F.add(y,"click",G.closeModal)}else{y.children[0][p]=(s.mcd-a.to)/1e3;a.to+=1e3;a.iv=O(a.st,1e3)}};a.st()}else{y[p]=a.clb;F.add(y,"click",G.closeModal)}if(!!s.mcs)xt(y,s.mcs);st(h,y);st(en,m);if(n)n();en.focus();return o}catch(v){return!Mt("openModal",v)}};G.container=en=vt('<div style="_CLEARCSS_" id="_GGID_"><br style="display:none"><style>html ._GGID_ *{_CLEARCSS_}@media \x00screen {html ._GGID_ *{-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)" !important}}</style></div>'[_](/_GGID_/g,rn));G.onReady=it=function(e){if(e===i){at=i;for(var t=0;t<lt[a];t++){lt[t]()}}else if(e.call&&e.apply){if(at){e()}else{lt.push(e)}}};dt=function(){Gt=Gt||t.body||gt.call(t,"body")[0]||gt.call(t,"div")[0];if(Gt){st(Gt,en);G.bodyEl=Gt;if(At(Gt,"position")==="static"){un[m]=At(Gt,"border-top-width");un[h]=At(Gt,"border-left-width")}else{un[m]=q(At(Gt,"margin-top"))*-1;un[h]=q(At(Gt,"margin-left"))*-1}it(i)}else{O(dt,100)}};U(dt);return G}({})})(window,document);
/* jshint ignore:end */
if (!window.GUMGUM.webview) (function (win, doc, G) {

    G.webview = 1;

    var actions = {
            open: function(a) {
                console.log("open");
                a.stopPropagation();
                webkit.messageHandlers.click.postMessage({});
            },
            close: function(a) {
                console.log("close");
                a.stopPropagation();
                webkit.messageHandlers.close.postMessage({});
            },
            info: function(a) {
                console.log("info");
                a.stopPropagation();
                webkit.messageHandlers.info.postMessage({});
            },
            load: function() {
                console.log('GGWebView script loaded successfully');
                resetOuterBounds();
                webkit.messageHandlers.load.postMessage({
                    height: doc.documentElement.scrollHeight
                });
            }
        },
        // elements
        noClickElem, clickElem, closeElem, infoElem, inlineOnClick,
        // helpers
        defaults = {
            wrapper_id: "GGUID_CLICK",
            close_id: "GGUID_CLOSE",
            info_id: "GGUID_INFO"
        },
        extend = function(a, c) { var b, d; d = {}; b = void 0; for (b in a) { if (Object.prototype.hasOwnProperty.call(a, b)) { (d[b] = a[b]); } } for (b in c) { if (Object.prototype.hasOwnProperty.call(c, b)) { (d[b] = c[b]); } } return d; },
        jsonData = extend(defaults, win.GGUID_MANIFEST || {}),
        nodeList,
        resetOuterBounds = function () {
            doc.body.style.margin = 0;
            doc.body.style.padding = 0;
        },
        getElement = function (id, property) {
            return G.byId(id) || G.bySelector('[onclick*=' + property + ']')[0];
        },
        bindElements = function () {
            // prevent binding if ggnoclick is present
            noClickElem = G.bySelector('[ggnoclick]');
            if (!noClickElem.length) {
                // if we can't find an element with the right id nor the openAd calling
                // we bind the click to the whole ad.
                clickElem = getElement(jsonData.wrapper_id, 'openAd') || G.byId('GGADGGUID') || doc.body;
                G.Bean.on(clickElem, 'click', actions.open);
            }

            // close button
            closeElem = getElement(jsonData.close_id, 'closeAd');
            if (closeElem) G.Bean.on(closeElem, 'click', actions.close);

            // info button
            infoElem = getElement(jsonData.info_id, 'showInfo');
            if (infoElem) G.Bean.on(infoElem, 'click', actions.info);

            // remove inline onclick attributes
            inlineOnClick = G.bySelector('[onclick]');
            for (var i = 0;i < inlineOnClick.length;i++) {
                inlineOnClick[i].removeAttribute('onclick');
            }

            if (jsonData.load_callback) jsonData.load_callback();
        },
        processJSON = function (data) {
            var adMarkup = data.ad && data.ad.markup,
                adHolder = G.byId('GGUID_BODY');
            if (adMarkup) {
                // TODO: 
                // find out why the webview can't handle protocol-less images
                adMarkup = adMarkup.replace(/(\'|\")(\/\/)(\w)+/g, function (match, quote, dashes, word) {
                    return quote + "https:" + dashes + word;
                });
                G.loadHtml(adMarkup, adHolder, bindElements);
            } else {
                console.log('no ad found on the response:', data);
            }
            actions.load();
        };

    // ggv2 cache mimic
    G.GGUID = {
        element: G.byId('GGADGGUID')
    };

    G.webview = function () {
        processJSON(gg_json_response);
    };

    G.onReady(G.webview);

} (window, document, window.GUMGUM));
