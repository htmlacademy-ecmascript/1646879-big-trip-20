!function(){var t={10:function(t,e,n){"use strict";var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]),e.Z=o},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);i&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},537:function(t){"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",c="month",u="quarter",l="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,c),r=n-s<0,o=e.clone().add(i+(r?-1:1),c);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",$={};$[g]=m;var _=function(t){return t instanceof D},b=function t(e,n,i){var s;if(!e)return g;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(g=s),s||!i&&g},M=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=y;w.l=b,w.i=_,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!w.u(e)||e,h=w.p(t),f=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(o)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case l:return u?f(1,0):f(31,11);case c:return u?f(1,v):f(0,v+1);case a:var $=this.$locale().weekStart||0,_=(m<$?m+7:m)-$;return f(u?y-_:y+(6-_),v);case o:case d:return p(g+"Hours",0);case r:return p(g+"Minutes",1);case s:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,u=w.p(t),h="set"+(this.$u?"UTC":""),f=(a={},a[o]=h+"Date",a[d]=h+"Date",a[c]=h+"Month",a[l]=h+"FullYear",a[r]=h+"Hours",a[s]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[u],p=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,u){var d,h=this;n=Number(n);var f=w.p(u),p=function(t){var e=M(h);return w.w(e.date(e.date()+Math.round(t*n)),h)};if(f===c)return this.set(c,this.$M+n);if(f===l)return this.set(l,this.$y+n);if(f===o)return p(1);if(f===a)return p(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,o=this.$m,a=this.$M,c=n.weekdays,u=n.months,l=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:l(n.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var f,p=w.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,y=this-m,g=w.m(this,m);return g=(f={},f[l]=g/12,f[c]=g,f[u]=g/3,f[a]=(y-v)/6048e5,f[o]=(y-v)/864e5,f[r]=y/e,f[s]=y/t,f[i]=y/1e3,f)[p]||y,h?g:w.a(g)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),E=D.prototype;return M.prototype=E,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",c],["$y",l],["$D",d]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=b,M.isDayjs=_,M.unix=function(t){return M(1e3*t)},M.en=$[g],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:a,months:c,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof g},h=function(t,e,n){return new g(t,n,e.$l)},f=function(t){return e.p(t)+"s"},p=function(t){return t<0},m=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},y=function(t,e){return t?p(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},g=function(){function p(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*l[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(u);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*l[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/c),t%=c,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=y(this.$d.years,"Y"),e=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=y(n,"D"),s=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=y(o,"S"),c=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,u=s.format||r.format||a.format?"T":"",l=(c?"-":"")+"P"+t.format+e.format+i.format+u+s.format+r.format+a.format;return"P"===l||"-P"===l?"P0D":l},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/l[f(t)]},v.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/l[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*l[f(e)]:d(t)?t.$ms:h(t,this).$ms,h(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return h(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return h(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},379:function(t){"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var c=t[a],u=i.base?c[0]+i.base:c[0],l=r[u]||0,d="".concat(u," ").concat(l);r[u]=l+1;var h=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(f);else{var p=s(f,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var c=i(t,s),u=0;u<r.length;u++){var l=n(r[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:function(t){"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nc=void 0,function(){"use strict";function t(t,e,n="beforeend"){if(!(e instanceof $))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function e(t,e){if(!(t instanceof $&&e instanceof $))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function i(t){if(null!==t){if(!(t instanceof $))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var s=n(379),r=n.n(s),o=n(795),a=n.n(o),c=n(569),u=n.n(c),l=n(565),d=n.n(l),h=n(216),f=n.n(h),p=n(589),m=n.n(p),v=n(10),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=u().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=f(),r()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const g="shake";class ${#t=null;constructor(){if(new.target===$)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(g),setTimeout((()=>{this.element.classList.remove(g),t?.()}),600)}}var _=n(484),b=n.n(_),M=n(646),w=n.n(M);const D=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],E=["Monaco","Tokio","Amsterdam","Paris","Yerevan","Vienna","Minsk","Santiago","Havana","Rome"],S=36e5,C="mm[M]",T="HH[H] mm[M]",k="DD[D] HH[H] mm[M]",A={everything:t=>t,future:t=>t.filter(L),present:t=>t.filter(V),past:t=>t.filter(I)},H={day:t=>[...t].sort(B),time:t=>[...t].sort(j),price:t=>[...t].sort(U),event:()=>{throw new Error("sorting not available")},offer:()=>{throw new Error("sorting not available")}};function O(t,e){if(t>=e)throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше или равно числу "до".');t=Math.ceil(t),e=Math.floor(e);const n=t+Math.random()*(e-t+1);return Math.floor(n)}b().extend(w());const x=t=>t[O(0,t.length-1)];function P(t){return b()(t).format("YYYY-MM-DDTHH:mm")}function Y(t){return b()(t).format("MMM DD")}function F(t){return b()(t).format("HH:mm")}function L(t){return b()().isBefore(t.dateFrom)}function I(t){return b()().isAfter(t.dateTo)}function V(t){return b()().isAfter(t.dateFrom)&&b()().isBefore(t.dateTo)}function B(t,e){return b()(t.dateFrom).diff(b()(e.dateFrom))}function j(t,e){const n=b()(t.dateTo).diff(b()(t.dateFrom));return b()(e.dateTo).diff(b()(e.dateFrom))-n}function U(t,e){return e.price-t.price}function N({type:t,count:e}){return`  <div class="trip-filters__filter">\n  <input id="filter-${t}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t}" ${e?"":"disabled"} ${"everything"===t?"checked":""}>\n  <label class="trip-filters__filter-label" for="filter-${t}">${t}</label>\n</div>\n`}class R extends ${#e;constructor(t){super(),this.#e=t}get template(){return`<form class="trip-filters" action="#" method="get">\n  ${this.#e.map(N).join("")}\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}}const q=[{type:"day",isChecked:!0},{type:"event",isdisabled:!0},{type:"time"},{type:"price"},{type:"offer",isdisabled:!0}];function W({type:t,isChecked:e,isdisabled:n}){const i=`sort-${t}`;return`<div class="trip-sort__item  trip-sort__item--${t}">\n  <input data-sort-type="${t}" id="${i}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${t}" ${n?"disabled":""} ${e?"checked":""}>\n  <label class="trip-sort__btn" for="${i}">${t}</label>\n</div>`}class Z extends ${#t;#n;constructor({onSortTypeChange:t}){super(),this.#n=t,this.element.addEventListener("change",this.#i)}#i=t=>{const e=t.target;this.#n(e.value)};get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  ${q.map(W).join("")}\n</form>`}}class z extends ${get template(){return'<ul class="trip-events__list"></ul>'}}function J({name:t}){return`<option value="${t}"></option>`}class K extends ${#s;#r;#o=null;#a;#c;#u;constructor({point:t,destinations:e,onRollupClick:n,onFormSubmit:i,currentOffers:s,getCurrentDestination:r}){super(),this.#s=t,this.#r=e,this.#o=s,this.#a=r,this.#c=n,this.#u=i,this.element.querySelector("form").addEventListener("submit",this.#l),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#d)}get template(){return function({point:t,destinations:e,currentOffers:n,getCurrentDestination:i}){const{price:s,dateFrom:r,dateTo:o}=t,a=i(t);return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/${t.type}.png" alt="Event type icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${D.map((e=>function(t,e){return`<div class="event__type-item">\n<input id="event-type-${t}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${e.type===t?"checked":""}>\n<label class="event__type-label  event__type-label--${t}" for="event-type-${t}">${t}</label>\n</div>`}(e,t))).join("")}\n      </fieldset>\n    </div>\n  </div>\n\n  <div class="event__field-group  event__field-group--destination">\n    <label class="event__label  event__type-output" for="event-destination-1">\n    ${t.type}\n    </label>\n    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${a.name}" list="destination-list-1">\n    <datalist id="destination-list-1">\n      ${e.map(J).join("")}\n    </datalist>\n  </div>\n\n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-1">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${b()(r).format("DD/MM/YYYY HH:mm")}">\n    &mdash;\n    <label class="visually-hidden" for="event-end-time-1">To</label>\n    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${b()(o).format("DD/MM/YYYY HH:mm")}">\n  </div>\n\n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-1">\n      <span class="visually-hidden">Price</span>\n      &euro;\n    </label>\n    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n  </div>\n\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Cancel</button>\n  <button class="event__rollup-btn" type="button">\n  <span class="visually-hidden">Open event</span>\n  </button>\n  </header>\n  <section class="event__details">\n  ${function(t,e){return t.length>0?`<section class="event__section  event__section--offers">\n  <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n  <div class="event__available-offers">\n    ${t.map((({id:t,title:n,price:i})=>`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}" type="checkbox" name="event-offer-${e.type}" checked>\n    <label class="event__offer-label" for="event-offer-${t}">\n      <span class="event__offer-title">${n}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${i}</span>\n    </label></div>`)).join("")}\n  </div>\n</section>`:""}(n,t)}\n  ${function(t){const{description:e,name:n,pictures:i}=t;return e.length>0||i.length>0?`<section class="event__section  event__section--destination">\n  <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n  ${function(t,e){return t.length>0?`<p class="event__destination-description">${e} - ${t}</p>`:""}(e,n)}\n  ${function(t){return t.length>0?`<div class="event__photos-container">\n    <div class="event__photos-tape">\n    ${t.map((({src:t,description:e})=>`<img class="event__photo" src="${t}" alt="${e}">`)).join("")}\n    </div>\n    </div>`:""}(i)}\n  </section>`:""}(a)}\n  </section>\n  </form>\n  </li>`}({point:this.#s,destinations:this.#r,currentOffers:this.#o,getCurrentDestination:this.#a})}#l=t=>{t.preventDefault(),this.#u(this.#s)};#d=t=>{t.preventDefault(),this.#c()}}const X=({title:t,price:e})=>`<li class="event__offer">\n<span class="event__offer-title">${t}</span>\n&plus;&euro;&nbsp;\n<span class="event__offer-price">${e}</span>\n</li>`;class G extends ${#s;#h;#o=null;#f;#p;constructor({point:t,currentDestination:e,currentOffers:n,onEditClick:i,onFavoriteClick:s}){super(),this.#s=t,this.#h=e,this.#o=n,this.#f=i,this.#p=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#m),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#v)}get template(){return function({point:t,currentDestination:e,currentOffers:n}){const{price:i,dateFrom:s,dateTo:r,favorite:o,type:a}=t,c=o?"--active":"";return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${u=s,b()(u).format("YYYY-MM-DD")}">${Y(s)}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${a} ${e.name}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${P(s)}">${F(s)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="${P(r)}">${F(r)}</time>\n      </p>\n      <p class="event__duration">${function(t,e){const n=b()(t).diff(b()(e));let i="0";return n>=864e5?i=b().duration(n).format(k):n>=S?i=b().duration(n).format(T):n<S&&(i=b().duration(n).format(C)),i}(r,s)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${i}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${n.map(X).join("")}\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn${c}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n  </li>`;var u}({point:this.#s,currentDestination:this.#h,currentOffers:this.#o})}#m=t=>{t.preventDefault(),this.#f()};#v=t=>{t.preventDefault(),this.#p()}}class Q{#y;#r;#g;#$=null;#_=null;#s=null;#b="DEFAULT";#M;#w;constructor({container:t,destinationsModel:e,offersModel:n,onDataChange:i,onModeChange:s}){this.#y=t,this.#r=e,this.#g=n,this.#M=i,this.#w=s}init(n){this.#s=n;const s=this.#$,r=this.#_;if(this.#$=new G({point:n,currentDestination:this.#r.getById(n.destination),currentOffers:this.#g.getByType(n.type),onEditClick:this.#D,onFavoriteClick:this.#v}),this.#_=new K({point:n,destinations:this.#r.get,currentOffers:this.#g.getByType(n.type),getCurrentDestination:({destination:t})=>this.#r.getById(t),onRollupClick:this.#E,onFormSubmit:this.#l}),null===s||null===r)return t(this.#y,this.#$);"DEFAULT"===this.#b&&e(this.#$,s),"EDITING"===this.#b&&e(this.#_,r),i(s),i(r)}destroy(){i(this.#$),i(this.#_)}resetView(){"DEFAULT"!==this.#b&&this.#E()}#D=()=>{e(this.#_,this.#$),document.addEventListener("keydown",this.#S),this.#w(),this.#b="EDITING"};#E=()=>{e(this.#$,this.#_),document.removeEventListener("keydown",this.#S),this.#b="DEFAULT"};#S=t=>{"Escape"!==t.key&&"Esc"!==t.key||(t.preventDefault(),this.#E(),document.removeEventListener("keydown",this.#S))};#l=t=>{this.#M(t),this.#E()};#v=()=>{this.#M({...this.#s,favorite:!this.#s.favorite})}}const tt={PAST:"There are no past events now",PRESENT:"There are no present events now",FUTURE:"There are no future events now",EVERYTHING:"Click New Event to create your first point"};class et extends ${#C;constructor(t){super(),this.#C=function(t){return"loading"===t.status?"Loading...":tt[t.chosenFilter]}(t)}get template(){return`<p class="trip-events__msg">${this.#C}</p>`}}const nt=()=>{const t=x(E);return{id:crypto.randomUUID(),description:"Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:t,pictures:Array.from({length:O(0,5)},(()=>{return e=t,{src:`https://loremflickr.com/248/152?random=${O(1,10)}`,description:`${e} description.`};var e}))}},it=t=>({type:t,offers:Array.from({length:O(0,4)},(()=>(t=>{const e=O(50,80);return{id:crypto.randomUUID(),title:`Offer of ${t}`,price:e}})(t)))}),st=document.querySelector(".trip-main"),rt=document.querySelector(".trip-events"),ot=new class{#r;#g;#T;constructor(){this.#r=this.generateDestinations,this.#g=this.generateOffers,this.#T=this.generatePoints}get destinations(){return this.#r}get offers(){return this.#g}get points(){return this.#T}get generateDestinations(){return Array.from({length:4},nt)}get generateOffers(){return D.map(it)}get generatePoints(){return Array.from({length:4},(()=>{const t=x(D),e=x(this.#r),{offers:n}=this.#g.find((e=>e.type===t)),i=n.length>0?n.map((({id:t})=>t)):[];return((t,e,n)=>{const i=b()().subtract(O(0,2),"d").subtract(O(0,5),"h").subtract(O(0,59),"m").toDate(),s=(r=i,b()(r).add(O(0,2),"d").add(O(0,5),"h").add(O(0,59),"m").toDate());var r;return{id:crypto.randomUUID(),price:O(1e3,2e3),dateFrom:i,dateTo:s,destination:e,favorite:Boolean(O(0,1)),offers:n,type:t}})(t,e.id,i)}))}},at=new class{#k;#r;constructor(t){this.#k=t,this.#r=this.#k.destinations}get get(){return this.#r}getById(t){return this.#r.find((e=>e.id===t))}}(ot),ct=new class{#k;#g;constructor(t){this.#k=t,this.#g=this.#k.offers}get get(){return this.#g}getByType(t){return this.#g.find((e=>e.type===t)).offers}}(ot),ut=new class{#k;#T;constructor(t){this.#k=t,this.#T=this.#k.points}get get(){return this.#T}}(ot),lt=new class{#A=new z;#H=document.querySelector(".trip-controls__filters");#y;#O;#x;#P;#T;#Y=new Map;#F=null;#L="day";constructor({container:t,destinationsModel:e,offersModel:n,pointsModel:i}){this.#y=t,this.#O=e,this.#x=n,this.#P=i}init(){this.#T=H[this.#L](this.#P.get),this.#I()}#V(t){const e=new Q({container:this.#A.element,destinationsModel:this.#O,offersModel:this.#x,onDataChange:this.#B,onModeChange:this.#j});e.init(t),this.#Y.set(t.id,e)}#U(){this.#T.forEach((t=>this.#V(t)))}#N(){t(this.#y,this.#A),this.#U()}#R(){this.#Y.forEach((t=>t.destroy())),this.#Y.clear()}#B=t=>{var e,n;this.#T=(e=this.#T,n=t,e.map((t=>t.id===n.id?n:t))),this.#Y.get(t.id).init(t)};#j=()=>{this.#Y.forEach((t=>t.resetView()))};#q(t){this.#L=t,this.#T=H[this.#L](this.#T)}#W=t=>{this.#L!==t&&(this.#q(t),this.#R(),this.#U())};#Z(){const e=new Z({onSortTypeChange:this.#W});t(this.#y,e)}#z(){var e;t(this.#H,new R((e=this.#T,Object.entries(A).map((([t,n])=>({type:t,count:n(e).length}))))))}#J(){t(this.#y,new et({status:"empty",chosenFilter:"EVERYTHING"}))}#I(){this.#T.length?(this.#z(),this.#Z(),this.#N()):this.#J()}}({container:rt,destinationsModel:at,offersModel:ct,pointsModel:ut});t(st,new class extends ${#K=null;constructor(t){super(),this.#K=t}get template(){return function({dateFrom:t,dateTo:e,price:n,cities:i}){const s=t.getMonth()===e.getMonth()?e.getDate():Y(e);return`<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">${function(t){const e=[t[0]],n=t.at(-1);return 3===t.length&&t[1]!==t[0]&&e.push(t[1]),t.length>3&&(e.push("..."),e.push(n)),n!==e.at(-1)&&e.push(n),e}(i).join(" — ")}</h1>\n\n    <p class="trip-info__dates">${Y(t)}&nbsp;—&nbsp;${s}</p>\n  </div>\n  <p class="trip-info__cost">\n    Total: €<span class="trip-info__cost-value">${n}</span>\n  </p>\n</section>`}(this.#K)}}({cities:["Moscow","Saint-Petersburg","Kazan"],dateFrom:new Date(2023,4,12),dateTo:new Date(2023,4,22),price:1e3}),"afterbegin"),lt.init()}()}();
//# sourceMappingURL=bundle.f233a8467d7dfd2a44e2.js.map