!function(){var t={10:function(t,e,n){"use strict";var i=n(537),r=n.n(i),s=n(645),o=n.n(s)()(r());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]),e.Z=o},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);i&&o[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},537:function(t){"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(r," */");return[e].concat([s]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",r="minute",s="hour",o="day",a="week",c="month",u="quarter",l="year",f="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},w={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+m(i,2,"0")+":"+m(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,o=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:a,d:o,D:f,h:s,m:r,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=v;var _=function(t){return t instanceof E},g=function t(e,n,i){var r;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();$[s]&&(r=s),n&&($[s]=n,r=s);var o=e.split("-");if(!r&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,r=a}return!i&&r&&(y=r),r||!i&&y},b=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},M=w;M.l=g,M.i=_,M.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function v(t){this.$L=g(t.locale,null,!0),this.parse(t)}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===d)},m.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return b(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<b(t)},m.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,u=!!M.u(e)||e,d=M.p(t),h=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(o)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,w=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case l:return u?h(1,0):h(31,11);case c:return u?h(1,m):h(0,m+1);case a:var $=this.$locale().weekStart||0,_=(v<$?v+7:v)-$;return h(u?w-_:w+(6-_),m);case o:case f:return p(y+"Hours",0);case s:return p(y+"Minutes",1);case r:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var a,u=M.p(t),d="set"+(this.$u?"UTC":""),h=(a={},a[o]=d+"Date",a[f]=d+"Date",a[c]=d+"Month",a[l]=d+"FullYear",a[s]=d+"Hours",a[r]=d+"Minutes",a[i]=d+"Seconds",a[n]=d+"Milliseconds",a)[u],p=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var v=this.clone().set(f,1);v.$d[h](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[M.p(t)]()},m.add=function(n,u){var f,d=this;n=Number(n);var h=M.p(u),p=function(t){var e=b(d);return M.w(e.date(e.date()+Math.round(t*n)),d)};if(h===c)return this.set(c,this.$M+n);if(h===l)return this.set(l,this.$y+n);if(h===o)return p(1);if(h===a)return p(7);var v=(f={},f[r]=t,f[s]=e,f[i]=1e3,f)[h]||1,m=this.$d.getTime()+n*v;return M.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),s=this.$H,o=this.$m,a=this.$M,c=n.weekdays,u=n.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},f=function(t){return M.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:l(n.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:M.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,o,!0),A:h(s,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(t,e){return e||v[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,f,d){var h,p=M.p(f),v=b(n),m=(v.utcOffset()-this.utcOffset())*t,w=this-v,y=M.m(this,v);return y=(h={},h[l]=y/12,h[c]=y,h[u]=y/3,h[a]=(w-m)/6048e5,h[o]=(w-m)/864e5,h[s]=w/e,h[r]=w/t,h[i]=w/1e3,h)[p]||w,d?y:M.a(y)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),T=E.prototype;return b.prototype=T,[["$ms",n],["$s",i],["$m",r],["$H",s],["$W",o],["$M",c],["$y",l],["$D",f]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,E,b),t.$i=!0),b},b.locale=g,b.isDayjs=_,b.unix=function(t){return b(1e3*t)},b.en=$[y],b.Ls=$,b.p={},b}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,r=36e5,s=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:a,months:c,days:s,hours:r,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},f=function(t){return t instanceof y},d=function(t,e,n){return new y(t,n,e.$l)},h=function(t){return e.p(t)+"s"},p=function(t){return t<0},v=function(t){return p(t)?Math.ceil(t):Math.floor(t)},m=function(t){return Math.abs(t)},w=function(t,e){return t?p(t)?{negative:!0,format:""+m(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function p(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return d(t*l[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var r=t.match(u);if(r){var s=r.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=s[0],this.$d.months=s[1],this.$d.weeks=s[2],this.$d.days=s[3],this.$d.hours=s[4],this.$d.minutes=s[5],this.$d.seconds=s[6],this.calMilliseconds(),this}}return this}var m=p.prototype;return m.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*l[n]}),0)},m.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/a),t%=a,this.$d.months=v(t/c),t%=c,this.$d.days=v(t/s),t%=s,this.$d.hours=v(t/r),t%=r,this.$d.minutes=v(t/i),t%=i,this.$d.seconds=v(t/n),t%=n,this.$d.milliseconds=t},m.toISOString=function(){var t=w(this.$d.years,"Y"),e=w(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=w(n,"D"),r=w(this.$d.hours,"H"),s=w(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=w(o,"S"),c=t.negative||e.negative||i.negative||r.negative||s.negative||a.negative,u=r.format||s.format||a.format?"T":"",l=(c?"-":"")+"P"+t.format+e.format+i.format+u+r.format+s.format+a.format;return"P"===l||"-P"===l?"P0D":l},m.toJSON=function(){return this.toISOString()},m.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},m.as=function(t){return this.$ms/l[h(t)]},m.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?v(e/l[n]):this.$d[n],0===e?0:e},m.add=function(t,e,n){var i;return i=e?t*l[h(e)]:f(t)?t.$ms:d(t,this).$ms,d(this.$ms+i*(n?-1:1),this)},m.subtract=function(t,e){return this.add(t,e,!0)},m.locale=function(t){var e=this.clone();return e.$l=t,e},m.clone=function(){return d(this.$ms,this)},m.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},p}();return function(n,i,r){t=r,e=r().$utils(),r.duration=function(t,e){var n=r.locale();return d(t,{$l:n},e)},r.isDuration=f;var s=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return f(t)&&(t=t.asMilliseconds()),s.bind(this)(t,e)},i.prototype.subtract=function(t,e){return f(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},379:function(t){"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var s={},o=[],a=0;a<t.length;a++){var c=t[a],u=i.base?c[0]+i.base:c[0],l=s[u]||0,f="".concat(u," ").concat(l);s[u]=l+1;var d=n(f),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var p=r(h,i);i.byIndex=a,e.splice(a,0,{identifier:f,updater:p,references:1})}o.push(f)}return o}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var s=i(t=t||[],r=r||{});return function(t){t=t||[];for(var o=0;o<s.length;o++){var a=n(s[o]);e[a].references--}for(var c=i(t,r),u=0;u<s.length;u++){var l=n(s[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=c}}},569:function(t){"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={id:i,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nc=void 0,function(){"use strict";function t(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";if(!(e instanceof y))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function e(t,e){if(!(t instanceof y&&e instanceof y))throw new Error("Can replace only components");const n=t.element,i=e.element,r=i.parentElement;if(null===r)throw new Error("Parent element doesn't exist");r.replaceChild(n,i)}var i=n(379),r=n.n(i),s=n(795),o=n.n(s),a=n(569),c=n.n(a),u=n(565),l=n.n(u),f=n(216),d=n.n(f),h=n(589),p=n.n(h),v=n(10),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const w="shake";class y{#t=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(w),setTimeout((()=>{this.element.classList.remove(w),t?.()}),600)}}var $=n(484),_=n.n($),g=n(646),b=n.n(g);const M=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],E=["Monaco","Tokio","Amsterdam","Paris","Yerevan","Vienna","Minsk","Santiago","Havana","Rome"],T=36e5,k="mm[M]",D="HH[H] mm[M]",S="DD[D] HH[H] mm[M]",A={everything:t=>[...t],future:t=>[...t].filter(Y),present:t=>[...t].filter(H),past:t=>[...t].filter(j)};function C(t,e){if(t>=e)throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше или равно числу "до".');t=Math.ceil(t),e=Math.floor(e);const n=t+Math.random()*(e-t+1);return Math.floor(n)}_().extend(b());const x=t=>t[C(0,t.length-1)];function O(t){return _()(t).format("YYYY-MM-DDTHH:mm")}function P(t){return _()(t).format("MMM DD")}function W(t){return _()(t).format("HH:mm")}function Y(t){return _()().isBefore(t.dateFrom)}function j(t){return _()().isAfter(t.dateTo)}function H(t){return _()().isAfter(t.dateFrom)&&_()().isBefore(t.dateTo)}var B;B=new WeakMap;var I;function L({type:t,count:e}){return`  <div class="trip-filters__filter">\n  <input id="filter-${t}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t}" ${e?"":"disabled"} ${"everything"===t&&e?"checked":""}>\n  <label class="trip-filters__filter-label" for="filter-${t}">${t}</label>\n</div>\n`}I=new WeakMap;var F=class extends y{constructor(t){super(),I.set(this,void 0),function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===i?r.call(t,n):r?r.value=n:e.set(t,n)}(this,I,t,"f")}get template(){return`<form class="trip-filters" action="#" method="get">\n  ${function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)}(this,I,"f").map(L).join("")}\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}};const U=[{id:"day",isChecked:!0},{id:"event",disabled:!0},{id:"time"},{id:"price"},{id:"offer",disabled:!0}];function N({id:t,isChecked:e=!1}){const n=`sort-${t}`;return`<div class="trip-sort__item  trip-sort__item--${t}">\n  <input id="${n}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${t}" ${e?"checked":""}>\n  <label class="trip-sort__btn" for="${n}">${t}</label>\n</div>`}class q extends y{get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  ${U.map(N).join("")}\n</form>`}}class Z extends y{get template(){return'<ul class="trip-events__list"></ul>'}}var z,R,J,X,V,K,Q,G,tt=function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n},et=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};function nt(t){return`<option value="${t}"></option>`}z=new WeakMap,R=new WeakMap,J=new WeakMap,X=new WeakMap,V=new WeakMap,K=new WeakMap,Q=new WeakMap,G=new WeakMap;var it,rt,st,ot,at,ct=class extends y{constructor({point:t,pointDestinations:e,onRollupClick:n,onFormSubmit:i,getOffers:r,getDestination:s}){super(),z.set(this,void 0),R.set(this,void 0),J.set(this,void 0),X.set(this,void 0),V.set(this,void 0),K.set(this,void 0),Q.set(this,(t=>{t.preventDefault(),et(this,X,"f").call(this)})),G.set(this,(t=>{t.preventDefault(),et(this,J,"f").call(this)})),tt(this,z,t,"f"),tt(this,R,e,"f"),tt(this,J,n,"f"),tt(this,X,i,"f"),tt(this,V,r,"f"),tt(this,K,s,"f"),this.element.querySelector("form").addEventListener("submit",et(this,Q,"f")),this.element.querySelector(".event__rollup-btn").addEventListener("click",et(this,G,"f"))}get template(){return function({point:t,pointDestinations:e,getOffers:n,getDestination:i}){const{price:r,dateFrom:s,dateTo:o}=t,a=i(t),c=n(t);return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/${t.type}.png" alt="Event type icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${M.map((e=>function(t,e){return`<div class="event__type-item">\n<input id="event-type-${t}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${e.type===t?"checked":""}>\n<label class="event__type-label  event__type-label--${t}" for="event-type-${t}">${t}</label>\n</div>`}(e,t))).join("")}\n      </fieldset>\n    </div>\n  </div>\n\n  <div class="event__field-group  event__field-group--destination">\n    <label class="event__label  event__type-output" for="event-destination-1">\n    ${t.type}\n    </label>\n    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${a.name}" list="destination-list-1">\n    <datalist id="destination-list-1">\n      ${e.map(nt).join("")}\n    </datalist>\n  </div>\n\n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-1">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${_()(s).format("DD/MM/YYYY HH:mm")}">\n    &mdash;\n    <label class="visually-hidden" for="event-end-time-1">To</label>\n    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${_()(o).format("DD/MM/YYYY HH:mm")}">\n  </div>\n\n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-1">\n      <span class="visually-hidden">Price</span>\n      &euro;\n    </label>\n    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${r}">\n  </div>\n\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Cancel</button>\n  <button class="event__rollup-btn" type="button">\n  <span class="visually-hidden">Open event</span>\n  </button>\n  </header>\n  <section class="event__details">\n  ${function(t,e){return t.length>0?`<section class="event__section  event__section--offers">\n  <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n  <div class="event__available-offers">\n    ${t.map((({id:t,title:n,price:i})=>`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}" type="checkbox" name="event-offer-${e.type}" checked>\n    <label class="event__offer-label" for="event-offer-${t}">\n      <span class="event__offer-title">${n}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${i}</span>\n    </label></div>`)).join("")}\n  </div>\n</section>`:""}(c,t)}\n  ${function(t){const{description:e,name:n,pictures:i}=t;return e.length>0||i.length>0?`<section class="event__section  event__section--destination">\n  <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n  ${function(t,e){return t.length>0?`<p class="event__destination-description">${e} - ${t}</p>`:""}(e,n)}\n  ${function(t){return t.length>0?`<div class="event__photos-container">\n    <div class="event__photos-tape">\n    ${t.map((({src:t,description:e})=>`<img class="event__photo" src="${t}" alt="${e}">`)).join("")}\n    </div>\n    </div>`:""}(i)}\n  </section>`:""}(a)}\n  </section>\n  </form>\n  </li>`}({point:et(this,z,"f"),pointDestinations:et(this,R,"f"),getOffers:et(this,V,"f"),getDestination:et(this,K,"f")})}},ut=function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n},lt=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};const ft=({title:t,price:e})=>`<li class="event__offer">\n<span class="event__offer-title">${t}</span>\n&plus;&euro;&nbsp;\n<span class="event__offer-price">${e}</span>\n</li>`;it=new WeakMap,rt=new WeakMap,st=new WeakMap,ot=new WeakMap,at=new WeakMap;var dt,ht,pt,vt,mt,wt,yt=class extends y{constructor({point:t,pointDestination:e,pointOffers:n,onEditClick:i}){super(),it.set(this,void 0),rt.set(this,void 0),st.set(this,null),ot.set(this,void 0),at.set(this,(t=>{t.preventDefault(),lt(this,ot,"f").call(this)})),ut(this,it,t,"f"),ut(this,rt,e,"f"),ut(this,st,n,"f"),ut(this,ot,i,"f"),this.element.querySelector(".event__rollup-btn").addEventListener("click",lt(this,at,"f"))}get template(){return function({point:t,pointDestination:e,pointOffers:n}){const{price:i,dateFrom:r,dateTo:s,favorite:o,type:a}=t,c=o?"--active":"";return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${u=r,_()(u).format("YYYY-MM-DD")}">${P(r)}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${a} ${e.name}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${O(r)}">${W(r)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="${O(s)}">${W(s)}</time>\n      </p>\n      <p class="event__duration">${function(t,e){const n=_()(t).diff(_()(e));let i="0";return n>=864e5?i=_().duration(n).format(S):n>=T?i=_().duration(n).format(D):n<T&&(i=_().duration(n).format(k)),i}(s,r)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${i}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${n.map(ft).join("")}\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn${c}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n  </li>`;var u}({point:lt(this,it,"f"),pointDestination:lt(this,rt,"f"),pointOffers:lt(this,st,"f")})}},$t=function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n},_t=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};ht=new WeakMap,pt=new WeakMap,vt=new WeakMap,mt=new WeakMap,dt=new WeakSet,wt=function(n){const i=new yt({point:n,pointDestination:_t(this,pt,"f").getById(n.destination),pointOffers:_t(this,vt,"f").getByType(n.type),onEditClick:function(){s(),document.addEventListener("keydown",a)}}),r=new ct({point:n,pointDestinations:_t(this,pt,"f").get,getOffers:({type:t})=>_t(this,vt,"f").getByType(t),getDestination:({destination:t})=>_t(this,pt,"f").getById(t),onRollupClick:function(){o(),document.removeEventListener("keydown",a)},onFormSubmit:function(){o(),document.removeEventListener("keydown",a)}}),s=()=>e(r,i),o=()=>e(i,r),a=t=>{"Escape"!==t.key&&"Esc"!==t.key||(t.preventDefault(),o(),document.removeEventListener("keydown",a))};t(_t(this,ht,"f"),i)};var gt,bt,Mt,Et=function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n},Tt=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};gt=new WeakMap,bt=new WeakMap,Mt=new WeakMap;const kt=()=>{const t=x(E);return{id:crypto.randomUUID(),description:"Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:t,pictures:Array.from({length:C(0,5)},(()=>{return e=t,{src:`https://loremflickr.com/248/152?random=${C(1,10)}`,description:`${e} description.`};var e}))}},Dt=t=>({type:t,offers:Array.from({length:C(0,4)},(()=>(t=>{const e=C(50,80);return{id:crypto.randomUUID(),title:`Offer of ${t}`,price:e}})(t)))});var St,At,Ct,xt=function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n},Ot=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};St=new WeakMap,At=new WeakMap,Ct=new WeakMap;var Pt,Wt,Yt=function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n},jt=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};Pt=new WeakMap,Wt=new WeakMap;var Ht,Bt,It=function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n},Lt=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};Ht=new WeakMap,Bt=new WeakMap;var Ft,Ut,Nt=function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,n):r?r.value=n:e.set(t,n),n},qt=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};Ft=new WeakMap,Ut=new WeakMap;const Zt=document.querySelector(".trip-main"),zt=document.querySelector(".trip-events"),Rt=new class{constructor(){St.set(this,void 0),At.set(this,void 0),Ct.set(this,void 0),xt(this,St,this.generateDestinations,"f"),xt(this,At,this.generateOffers,"f"),xt(this,Ct,this.generatePoints,"f")}get destinations(){return Ot(this,St,"f")}get offers(){return Ot(this,At,"f")}get points(){return Ot(this,Ct,"f")}get generateDestinations(){return Array.from({length:4},kt)}get generateOffers(){return M.map(Dt)}get generatePoints(){return Array.from({length:4},(()=>{const t=x(M),e=x(Ot(this,St,"f")),{offers:n}=Ot(this,At,"f").find((e=>e.type===t)),i=n.length>0?n.map((({id:t})=>t)):[];return((t,e,n)=>{const i=_()().subtract(C(0,2),"d").subtract(C(0,5),"h").subtract(C(0,59),"m").toDate(),r=(s=i,_()(s).add(C(0,2),"d").add(C(0,5),"h").add(C(0,59),"m").toDate());var s;return{id:crypto.randomUUID(),price:C(1e3,2e3),dateFrom:i,dateTo:r,destination:e,favorite:Boolean(C(0,1)),offers:n,type:t}})(t,e.id,i)}))}},Jt=new class{constructor(t){Pt.set(this,void 0),Wt.set(this,void 0),Yt(this,Pt,t,"f"),Yt(this,Wt,jt(this,Pt,"f").destinations,"f")}get get(){return jt(this,Wt,"f")}getById(t){return jt(this,Wt,"f").find((e=>e.id===t))}}(Rt),Xt=new class{constructor(t){Ht.set(this,void 0),Bt.set(this,void 0),It(this,Ht,t,"f"),It(this,Bt,Lt(this,Ht,"f").offers,"f")}get get(){return Lt(this,Bt,"f")}getByType(t){return Lt(this,Bt,"f").find((e=>e.type===t)).offers}}(Rt),Vt=new class{constructor(t){Ft.set(this,void 0),Ut.set(this,void 0),Nt(this,Ft,t,"f"),Nt(this,Ut,qt(this,Ft,"f").points,"f")}get get(){return qt(this,Ut,"f")}}(Rt),Kt=new class{constructor({container:t}){gt.set(this,new Z),bt.set(this,void 0),Mt.set(this,void 0),Et(this,bt,t,"f"),Et(this,Mt,document.querySelector(".trip-controls__filters"),"f")}init({destinationsModel:e,offersModel:n,pointsModel:i}){var r;t(Tt(this,Mt,"f"),new F((r=i.get,Object.entries(A).map((([t,e])=>({type:t,count:e(r).length})))))),t(Tt(this,bt,"f"),new q),t(Tt(this,bt,"f"),Tt(this,gt,"f")),new class{constructor({container:t,destinationsModel:e,offersModel:n,pointsModel:i}){dt.add(this),ht.set(this,void 0),pt.set(this,void 0),vt.set(this,void 0),mt.set(this,void 0),$t(this,ht,t,"f"),$t(this,pt,e,"f"),$t(this,vt,n,"f"),$t(this,mt,[...i.get],"f"),_t(this,mt,"f").forEach((t=>_t(this,dt,"m",wt).call(this,t)))}}({container:Tt(this,gt,"f").element,destinationsModel:e,offersModel:n,pointsModel:i})}}({container:zt});t(Zt,new class extends y{constructor(t){super(),B.set(this,null),function(t,e,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===i?r.call(t,n):r?r.value=n:e.set(t,n)}(this,B,t,"f")}get template(){return function({dateFrom:t,dateTo:e,price:n,cities:i}){const r=t.getMonth()===e.getMonth()?e.getDate():P(e);return`<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">${function(t){const e=[t[0]],n=t.at(-1);return 3===t.length&&t[1]!==t[0]&&e.push(t[1]),t.length>3&&(e.push("..."),e.push(n)),n!==e.at(-1)&&e.push(n),e}(i).join(" — ")}</h1>\n\n    <p class="trip-info__dates">${P(t)}&nbsp;—&nbsp;${r}</p>\n  </div>\n  <p class="trip-info__cost">\n    Total: €<span class="trip-info__cost-value">${n}</span>\n  </p>\n</section>`}(function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)}(this,B,"f"))}}({cities:["Moscow","Saint-Petersburg","Kazan"],dateFrom:new Date(2023,4,12),dateTo:new Date(2023,4,22),price:1e3}),"afterbegin"),Kt.init({destinationsModel:Jt,offersModel:Xt,pointsModel:Vt})}()}();
//# sourceMappingURL=bundle.a1236ada899c11e812a3.js.map