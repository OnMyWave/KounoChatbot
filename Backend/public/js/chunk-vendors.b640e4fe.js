(self["webpackChunkkounosoft"]=self["webpackChunkkounosoft"]||[]).push([[998],{2262:function(e,t,n){"use strict";n.d(t,{B:function(){return s},Bj:function(){return a},Fl:function(){return Ve},IU:function(){return Ae},Jd:function(){return C},PG:function(){return Re},SU:function(){return Ge},Um:function(){return ve},WL:function(){return Ye},X$:function(){return x},X3:function(){return xe},XI:function(){return Fe},Xl:function(){return Ie},dq:function(){return Le},iH:function(){return Pe},j:function(){return O},lk:function(){return R},qj:function(){return ye},qq:function(){return b},yT:function(){return Ne}});var i=n(3577);let r;class a{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=r,!e&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(e){if(this.active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function s(e){return new a(e)}function o(e,t=r){t&&t.active&&t.effects.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&g)>0,d=e=>(e.n&g)>0,_=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];c(r)&&!d(r)?r.delete(e):t[n++]=r,r.w&=~g,r.n&=~g}t.length=n}},u=new WeakMap;let m=0,g=1;const h=30;let f;const E=Symbol(""),S=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=f,t=v;while(e){if(e===this)return;e=e.parent}try{return this.parent=f,f=this,v=!0,g=1<<++m,m<=h?_(this):y(this),this.fn()}finally{m<=h&&p(this),g=1<<--m,f=this.parent,v=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){f===this?this.deferStop=!0:this.active&&(y(this),this.onStop&&this.onStop(),this.active=!1)}}function y(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let v=!0;const T=[];function C(){T.push(v),v=!1}function R(){const e=T.pop();v=void 0===e||e}function O(e,t,n){if(v&&f){let t=u.get(e);t||u.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=l());const r=void 0;N(i,r)}}function N(e,t){let n=!1;m<=h?d(e)||(e.n|=g,n=!c(e)):n=!e.has(f),n&&(e.add(f),f.deps.push(e))}function x(e,t,n,r,a,s){const o=u.get(e);if(!o)return;let c=[];if("clear"===t)c=[...o.values()];else if("length"===n&&(0,i.kJ)(e)){const e=(0,i.He)(r);o.forEach(((t,n)=>{("length"===n||n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(o.get(n)),t){case"add":(0,i.kJ)(e)?(0,i.S0)(n)&&c.push(o.get("length")):(c.push(o.get(E)),(0,i._N)(e)&&c.push(o.get(S)));break;case"delete":(0,i.kJ)(e)||(c.push(o.get(E)),(0,i._N)(e)&&c.push(o.get(S)));break;case"set":(0,i._N)(e)&&c.push(o.get(E));break}if(1===c.length)c[0]&&A(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);A(l(e))}}function A(e,t){const n=(0,i.kJ)(e)?e:[...e];for(const i of n)i.computed&&I(i,t);for(const i of n)i.computed||I(i,t)}function I(e,t){(e!==f||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const w=(0,i.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.yk)),M=U(),k=U(!1,!0),L=U(!0),P=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,r=this.length;t<r;t++)O(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Ae)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){C();const n=Ae(this)[t].apply(this,e);return R(),n}})),e}function U(e=!1,t=!1){return function(n,r,a){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&a===(e?t?Ee:fe:t?he:ge).get(n))return n;const s=(0,i.kJ)(n);if(!e&&s&&(0,i.RI)(P,r))return Reflect.get(P,r,a);const o=Reflect.get(n,r,a);return((0,i.yk)(r)?D.has(r):w(r))?o:(e||O(n,"get",r),t?o:Le(o)?s&&(0,i.S0)(r)?o:o.value:(0,i.Kn)(o)?e?Te(o):ye(o):o)}}const B=z(),G=z(!0);function z(e=!1){return function(t,n,r,a){let s=t[n];if(Oe(s)&&Le(s)&&!Le(r))return!1;if(!e&&(Ne(r)||Oe(r)||(s=Ae(s),r=Ae(r)),!(0,i.kJ)(t)&&Le(s)&&!Le(r)))return s.value=r,!0;const o=(0,i.kJ)(t)&&(0,i.S0)(n)?Number(n)<t.length:(0,i.RI)(t,n),l=Reflect.set(t,n,r,a);return t===Ae(a)&&(o?(0,i.aU)(r,s)&&x(t,"set",n,r,s):x(t,"add",n,r)),l}}function Y(e,t){const n=(0,i.RI)(e,t),r=e[t],a=Reflect.deleteProperty(e,t);return a&&n&&x(e,"delete",t,void 0,r),a}function $(e,t){const n=Reflect.has(e,t);return(0,i.yk)(t)&&D.has(t)||O(e,"has",t),n}function H(e){return O(e,"iterate",(0,i.kJ)(e)?"length":E),Reflect.ownKeys(e)}const V={get:M,set:B,deleteProperty:Y,has:$,ownKeys:H},q={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},j=(0,i.l7)({},V,{get:k,set:G}),W=e=>e,K=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,i=!1){e=e["__v_raw"];const r=Ae(e),a=Ae(t);n||(t!==a&&O(r,"get",t),O(r,"get",a));const{has:s}=K(r),o=i?W:n?De:we;return s.call(r,t)?o(e.get(t)):s.call(r,a)?o(e.get(a)):void(e!==r&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],i=Ae(n),r=Ae(e);return t||(e!==r&&O(i,"has",e),O(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Z(e,t=!1){return e=e["__v_raw"],!t&&O(Ae(e),"iterate",E),Reflect.get(e,"size",e)}function J(e){e=Ae(e);const t=Ae(this),n=K(t),i=n.has.call(t,e);return i||(t.add(e),x(t,"add",e,e)),this}function ee(e,t){t=Ae(t);const n=Ae(this),{has:r,get:a}=K(n);let s=r.call(n,e);s||(e=Ae(e),s=r.call(n,e));const o=a.call(n,e);return n.set(e,t),s?(0,i.aU)(t,o)&&x(n,"set",e,t,o):x(n,"add",e,t),this}function te(e){const t=Ae(this),{has:n,get:i}=K(t);let r=n.call(t,e);r||(e=Ae(e),r=n.call(t,e));const a=i?i.call(t,e):void 0,s=t.delete(e);return r&&x(t,"delete",e,void 0,a),s}function ne(){const e=Ae(this),t=0!==e.size,n=void 0,i=e.clear();return t&&x(e,"clear",void 0,void 0,n),i}function ie(e,t){return function(n,i){const r=this,a=r["__v_raw"],s=Ae(a),o=t?W:e?De:we;return!e&&O(s,"iterate",E),a.forEach(((e,t)=>n.call(i,o(e),o(t),r)))}}function re(e,t,n){return function(...r){const a=this["__v_raw"],s=Ae(a),o=(0,i._N)(s),l="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,d=a[e](...r),_=n?W:t?De:we;return!t&&O(s,"iterate",c?S:E),{next(){const{value:e,done:t}=d.next();return t?{value:e,done:t}:{value:l?[_(e[0]),_(e[1])]:_(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return Q(this,e)},get size(){return Z(this)},has:X,add:J,set:ee,delete:te,clear:ne,forEach:ie(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return Z(this)},has:X,add:J,set:ee,delete:te,clear:ne,forEach:ie(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:ie(!0,!1)},i={get(e){return Q(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:ie(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{e[r]=re(r,!1,!1),n[r]=re(r,!0,!1),t[r]=re(r,!1,!0),i[r]=re(r,!0,!0)})),[e,n,t,i]}const[oe,le,ce,de]=se();function _e(e,t){const n=t?e?de:ce:e?le:oe;return(t,r,a)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.RI)(n,r)&&r in t?n:t,r,a)}const pe={get:_e(!1,!1)},ue={get:_e(!1,!0)},me={get:_e(!0,!1)};const ge=new WeakMap,he=new WeakMap,fe=new WeakMap,Ee=new WeakMap;function Se(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Se((0,i.W7)(e))}function ye(e){return Oe(e)?e:Ce(e,!1,V,pe,ge)}function ve(e){return Ce(e,!1,j,ue,he)}function Te(e){return Ce(e,!0,q,me,fe)}function Ce(e,t,n,r,a){if(!(0,i.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=a.get(e);if(s)return s;const o=be(e);if(0===o)return e;const l=new Proxy(e,2===o?r:n);return a.set(e,l),l}function Re(e){return Oe(e)?Re(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Oe(e){return!(!e||!e["__v_isReadonly"])}function Ne(e){return!(!e||!e["__v_isShallow"])}function xe(e){return Re(e)||Oe(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Ie(e){return(0,i.Nj)(e,"__v_skip",!0),e}const we=e=>(0,i.Kn)(e)?ye(e):e,De=e=>(0,i.Kn)(e)?Te(e):e;function Me(e){v&&f&&(e=Ae(e),N(e.dep||(e.dep=l())))}function ke(e,t){e=Ae(e),e.dep&&A(e.dep)}function Le(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Ue(e,!1)}function Fe(e){return Ue(e,!0)}function Ue(e,t){return Le(e)?e:new Be(e,t)}class Be{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:we(e)}get value(){return Me(this),this._value}set value(e){const t=this.__v_isShallow||Ne(e)||Oe(e);e=t?e:Ae(e),(0,i.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:we(e),ke(this,e))}}function Ge(e){return Le(e)?e.value:e}const ze={get:(e,t,n)=>Ge(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Le(r)&&!Le(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Ye(e){return Re(e)?e:new Proxy(e,ze)}var $e;class He{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[$e]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,ke(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Me(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ve(e,t,n=!1){let r,a;const s=(0,i.mf)(e);s?(r=e,a=i.dG):(r=e.get,a=e.set);const o=new He(r,a,s||!a,n);return o}$e="__v_isReadonly"},6252:function(e,t,n){"use strict";n.d(t,{$d:function(){return s},Cn:function(){return P},FN:function(){return En},Fl:function(){return kn},HY:function(){return Pt},JJ:function(){return q},Ko:function(){return ze},P$:function(){return ie},Q2:function(){return Ue},Q6:function(){return ce},U2:function(){return ae},Uk:function(){return sn},Us:function(){return It},WI:function(){return Ye},Wm:function(){return tn},Y3:function(){return E},Y8:function(){return ee},YP:function(){return K},_:function(){return en},aZ:function(){return de},dD:function(){return L},f3:function(){return j},h:function(){return Ln},iD:function(){return jt},ic:function(){return Re},j4:function(){return Wt},kq:function(){return ln},nK:function(){return le},uE:function(){return on},up:function(){return Pe},w5:function(){return F},wg:function(){return Yt},wy:function(){return De}});var i=n(2262),r=n(3577);function a(e,t,n,i){let r;try{r=i?e(...i):e()}catch(a){o(a,t,n)}return r}function s(e,t,n,i){if((0,r.mf)(e)){const s=a(e,t,n,i);return s&&(0,r.tI)(s)&&s.catch((e=>{o(e,t,n)})),s}const l=[];for(let r=0;r<e.length;r++)l.push(s(e[r],t,n,i));return l}function o(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,s=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;i=i.parent}const o=t.appContext.config.errorHandler;if(o)return void a(o,null,10,[e,r,s])}l(e,n,r,i)}function l(e,t,n,i=!0){console.error(e)}let c=!1,d=!1;const _=[];let p=0;const u=[];let m=null,g=0;const h=Promise.resolve();let f=null;function E(e){const t=f||h;return e?t.then(this?e.bind(this):e):t}function S(e){let t=p+1,n=_.length;while(t<n){const i=t+n>>>1,r=O(_[i]);r<e?t=i+1:n=i}return t}function b(e){_.length&&_.includes(e,c&&e.allowRecurse?p+1:p)||(null==e.id?_.push(e):_.splice(S(e.id),0,e),y())}function y(){c||d||(d=!0,f=h.then(x))}function v(e){const t=_.indexOf(e);t>p&&_.splice(t,1)}function T(e){(0,r.kJ)(e)?u.push(...e):m&&m.includes(e,e.allowRecurse?g+1:g)||u.push(e),y()}function C(e,t=(c?p+1:0)){for(0;t<_.length;t++){const e=_[t];e&&e.pre&&(_.splice(t,1),t--,e())}}function R(e){if(u.length){const e=[...new Set(u)];if(u.length=0,m)return void m.push(...e);for(m=e,m.sort(((e,t)=>O(e)-O(t))),g=0;g<m.length;g++)m[g]();m=null,g=0}}const O=e=>null==e.id?1/0:e.id,N=(e,t)=>{const n=O(e)-O(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){d=!1,c=!0,_.sort(N);r.dG;try{for(p=0;p<_.length;p++){const e=_[p];e&&!1!==e.active&&a(e,null,14)}}finally{p=0,_.length=0,R(e),c=!1,f=null,(_.length||u.length)&&x(e)}}new Set;new Map;function A(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.kT;let a=n;const o=t.startsWith("update:"),l=o&&t.slice(7);if(l&&l in i){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:s}=i[e]||r.kT;s&&(a=n.map((e=>(0,r.HD)(e)?e.trim():e))),t&&(a=n.map(r.He))}let c;let d=i[c=(0,r.hR)(t)]||i[c=(0,r.hR)((0,r._A)(t))];!d&&o&&(d=i[c=(0,r.hR)((0,r.rs)(t))]),d&&s(d,e,6,a);const _=i[c+"Once"];if(_){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,s(_,e,6,a)}}function I(e,t,n=!1){const i=t.emitsCache,a=i.get(e);if(void 0!==a)return a;const s=e.emits;let o={},l=!1;if(!(0,r.mf)(e)){const i=e=>{const n=I(e,t,!0);n&&(l=!0,(0,r.l7)(o,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||l?((0,r.kJ)(s)?s.forEach((e=>o[e]=null)):(0,r.l7)(o,s),(0,r.Kn)(e)&&i.set(e,o),o):((0,r.Kn)(e)&&i.set(e,null),null)}function w(e,t){return!(!e||!(0,r.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,r.RI)(e,(0,r.rs)(t))||(0,r.RI)(e,t))}let D=null,M=null;function k(e){const t=D;return D=e,M=e&&e.type.__scopeId||null,t}function L(e){M=e}function P(){M=null}function F(e,t=D,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Vt(-1);const r=k(t);let a;try{a=e(...n)}finally{k(r),i._d&&Vt(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function U(e){const{type:t,vnode:n,proxy:i,withProxy:a,props:s,propsOptions:[l],slots:c,attrs:d,emit:_,render:p,renderCache:u,data:m,setupState:g,ctx:h,inheritAttrs:f}=e;let E,S;const b=k(e);try{if(4&n.shapeFlag){const e=a||i;E=cn(p.call(e,e,u,s,g,m,h)),S=d}else{const e=t;0,E=cn(e.length>1?e(s,{attrs:d,slots:c,emit:_}):e(s,null)),S=t.props?d:B(d)}}catch(v){Gt.length=0,o(v,e,1),E=tn(Ut)}let y=E;if(S&&!1!==f){const e=Object.keys(S),{shapeFlag:t}=y;e.length&&7&t&&(l&&e.some(r.tR)&&(S=G(S,l)),y=an(y,S))}return n.dirs&&(y=an(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),E=y,k(b),E}const B=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.F7)(n))&&((t||(t={}))[n]=e[n]);return t},G=(e,t)=>{const n={};for(const i in e)(0,r.tR)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function z(e,t,n){const{props:i,children:r,component:a}=e,{props:s,children:o,patchFlag:l}=t,c=a.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!o||o&&o.$stable)||i!==s&&(i?!s||Y(i,s,c):!!s);if(1024&l)return!0;if(16&l)return i?Y(i,s,c):!!s;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==i[n]&&!w(c,n))return!0}}return!1}function Y(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const a=i[r];if(t[a]!==e[a]&&!w(n,a))return!0}return!1}function $({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function V(e,t){t&&t.pendingBranch?(0,r.kJ)(e)?t.effects.push(...e):t.effects.push(e):T(e)}function q(e,t){if(fn){let n=fn.provides;const i=fn.parent&&fn.parent.provides;i===n&&(n=fn.provides=Object.create(i)),n[e]=t}else 0}function j(e,t,n=!1){const i=fn||D;if(i){const a=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&(0,r.mf)(t)?t.call(i.proxy):t}else 0}const W={};function K(e,t,n){return Q(e,t,n)}function Q(e,t,{immediate:n,deep:o,flush:l,onTrack:c,onTrigger:d}=r.kT){const _=fn;let p,u,m=!1,g=!1;if((0,i.dq)(e)?(p=()=>e.value,m=(0,i.yT)(e)):(0,i.PG)(e)?(p=()=>e,o=!0):(0,r.kJ)(e)?(g=!0,m=e.some((e=>(0,i.PG)(e)||(0,i.yT)(e))),p=()=>e.map((e=>(0,i.dq)(e)?e.value:(0,i.PG)(e)?J(e):(0,r.mf)(e)?a(e,_,2):void 0))):p=(0,r.mf)(e)?t?()=>a(e,_,2):()=>{if(!_||!_.isUnmounted)return u&&u(),s(e,_,3,[f])}:r.dG,t&&o){const e=p;p=()=>J(e())}let h,f=e=>{u=v.onStop=()=>{a(e,_,4)}};if(Cn){if(f=r.dG,t?n&&s(t,_,3,[p(),g?[]:void 0,f]):p(),"sync"!==l)return r.dG;{const e=Fn();h=e.__watcherHandles||(e.__watcherHandles=[])}}let E=g?new Array(e.length).fill(W):W;const S=()=>{if(v.active)if(t){const e=v.run();(o||m||(g?e.some(((e,t)=>(0,r.aU)(e,E[t]))):(0,r.aU)(e,E)))&&(u&&u(),s(t,_,3,[e,E===W?void 0:g&&E[0]===W?[]:E,f]),E=e)}else v.run()};let y;S.allowRecurse=!!t,"sync"===l?y=S:"post"===l?y=()=>At(S,_&&_.suspense):(S.pre=!0,_&&(S.id=_.uid),y=()=>b(S));const v=new i.qq(p,y);t?n?S():E=v.run():"post"===l?At(v.run.bind(v),_&&_.suspense):v.run();const T=()=>{v.stop(),_&&_.scope&&(0,r.Od)(_.scope.effects,v)};return h&&h.push(T),T}function X(e,t,n){const i=this.proxy,a=(0,r.HD)(e)?e.includes(".")?Z(i,e):()=>i[e]:e.bind(i,i);let s;(0,r.mf)(t)?s=t:(s=t.handler,n=t);const o=fn;Sn(this);const l=Q(a,s.bind(i),n);return o?Sn(o):bn(),l}function Z(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function J(e,t){if(!(0,r.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,i.dq)(e))J(e.value,t);else if((0,r.kJ)(e))for(let n=0;n<e.length;n++)J(e[n],t);else if((0,r.DM)(e)||(0,r._N)(e))e.forEach((e=>{J(e,t)}));else if((0,r.PO)(e))for(const n in e)J(e[n],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Te((()=>{e.isMounted=!0})),Oe((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const n=En(),r=ee();let a;return()=>{const s=t.default&&ce(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Ut){0,o=t,e=!0;break}}const l=(0,i.IU)(e),{mode:c}=l;if(r.isLeaving)return se(o);const d=oe(o);if(!d)return se(o);const _=ae(d,l,r,n);le(d,_);const p=n.subTree,u=p&&oe(p);let m=!1;const{getTransitionKey:g}=d.type;if(g){const e=g();void 0===a?a=e:e!==a&&(a=e,m=!0)}if(u&&u.type!==Ut&&(!Qt(d,u)||m)){const e=ae(u,l,r,n);if(le(u,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&n.update()},se(o);"in-out"===c&&d.type!==Ut&&(e.delayLeave=(e,t,n)=>{const i=re(r,u);i[String(u.key)]=u,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete _.delayedLeave},_.delayedLeave=n})}return o}}},ie=ne;function re(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function ae(e,t,n,i){const{appear:a,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:_,onEnterCancelled:p,onBeforeLeave:u,onLeave:m,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:f,onAppear:E,onAfterAppear:S,onAppearCancelled:b}=t,y=String(e.key),v=re(n,e),T=(e,t)=>{e&&s(e,i,9,t)},C=(e,t)=>{const n=t[1];T(e,t),(0,r.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},R={mode:o,persisted:l,beforeEnter(t){let i=c;if(!n.isMounted){if(!a)return;i=f||c}t._leaveCb&&t._leaveCb(!0);const r=v[y];r&&Qt(e,r)&&r.el._leaveCb&&r.el._leaveCb(),T(i,[t])},enter(e){let t=d,i=_,r=p;if(!n.isMounted){if(!a)return;t=E||d,i=S||_,r=b||p}let s=!1;const o=e._enterCb=t=>{s||(s=!0,T(t?r:i,[e]),R.delayedLeave&&R.delayedLeave(),e._enterCb=void 0)};t?C(t,[e,o]):o()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();T(u,[t]);let a=!1;const s=t._leaveCb=n=>{a||(a=!0,i(),T(n?h:g,[t]),t._leaveCb=void 0,v[r]===e&&delete v[r])};v[r]=e,m?C(m,[t,s]):s()},clone(e){return ae(e,t,n,i)}};return R}function se(e){if(pe(e))return e=an(e),e.children=null,e}function oe(e){return pe(e)?e.children?e.children[0]:void 0:e}function le(e,t){6&e.shapeFlag&&e.component?le(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ce(e,t=!1,n){let i=[],r=0;for(let a=0;a<e.length;a++){let s=e[a];const o=null==n?s.key:String(n)+String(null!=s.key?s.key:a);s.type===Pt?(128&s.patchFlag&&r++,i=i.concat(ce(s.children,t,o))):(t||s.type!==Ut)&&i.push(null!=o?an(s,{key:o}):s)}if(r>1)for(let a=0;a<i.length;a++)i[a].patchFlag=-2;return i}function de(e){return(0,r.mf)(e)?{setup:e,name:e.name}:e}const _e=e=>!!e.type.__asyncLoader;const pe=e=>e.type.__isKeepAlive;RegExp,RegExp;function ue(e,t){return(0,r.kJ)(e)?e.some((e=>ue(e,t))):(0,r.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function me(e,t){he(e,"a",t)}function ge(e,t){he(e,"da",t)}function he(e,t,n=fn){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(be(t,i,n),n){let e=n.parent;while(e&&e.parent)pe(e.parent.vnode)&&fe(i,t,n,e),e=e.parent}}function fe(e,t,n,i){const a=be(t,e,i,!0);Ne((()=>{(0,r.Od)(i[t],a)}),n)}function Ee(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Se(e){return 128&e.shapeFlag?e.ssContent:e}function be(e,t,n=fn,r=!1){if(n){const a=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.Jd)(),Sn(n);const a=s(t,n,e,r);return bn(),(0,i.lk)(),a});return r?a.unshift(o):a.push(o),o}}const ye=e=>(t,n=fn)=>(!Cn||"sp"===e)&&be(e,((...e)=>t(...e)),n),ve=ye("bm"),Te=ye("m"),Ce=ye("bu"),Re=ye("u"),Oe=ye("bum"),Ne=ye("um"),xe=ye("sp"),Ae=ye("rtg"),Ie=ye("rtc");function we(e,t=fn){be("ec",e,t)}function De(e,t){const n=D;if(null===n)return e;const i=wn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,o,l=r.kT]=t[s];e&&((0,r.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&J(n),a.push({dir:e,instance:i,value:n,oldValue:void 0,arg:o,modifiers:l}))}return e}function Me(e,t,n,r){const a=e.dirs,o=t&&t.dirs;for(let l=0;l<a.length;l++){const c=a[l];o&&(c.oldValue=o[l].value);let d=c.dir[r];d&&((0,i.Jd)(),s(d,n,8,[e.el,c,e,t]),(0,i.lk)())}}const ke="components",Le="directives";function Pe(e,t){return Be(ke,e,!0,t)||e}const Fe=Symbol();function Ue(e){return Be(Le,e)}function Be(e,t,n=!0,i=!1){const a=D||fn;if(a){const n=a.type;if(e===ke){const e=Dn(n,!1);if(e&&(e===t||e===(0,r._A)(t)||e===(0,r.kC)((0,r._A)(t))))return n}const s=Ge(a[e]||n[e],t)||Ge(a.appContext[e],t);return!s&&i?n:s}}function Ge(e,t){return e&&(e[t]||e[(0,r._A)(t)]||e[(0,r.kC)((0,r._A)(t))])}function ze(e,t,n,i){let a;const s=n&&n[i];if((0,r.kJ)(e)||(0,r.HD)(e)){a=new Array(e.length);for(let n=0,i=e.length;n<i;n++)a[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,a=new Array(e);for(let n=0;n<e;n++)a[n]=t(n+1,n,void 0,s&&s[n])}else if((0,r.Kn)(e))if(e[Symbol.iterator])a=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);a=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];a[i]=t(e[r],r,i,s&&s[i])}}else a=[];return n&&(n[i]=a),a}function Ye(e,t,n={},i,r){if(D.isCE||D.parent&&_e(D.parent)&&D.parent.isCE)return"default"!==t&&(n.name=t),tn("slot",n,i&&i());let a=e[t];a&&a._c&&(a._d=!1),Yt();const s=a&&$e(a(n)),o=Wt(Pt,{key:n.key||s&&s.key||`_${t}`},s||(i?i():[]),s&&1===e._?64:-2);return!r&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),a&&a._c&&(a._d=!0),o}function $e(e){return e.some((e=>!Kt(e)||e.type!==Ut&&!(e.type===Pt&&!$e(e.children))))?e:null}const He=e=>e?yn(e)?wn(e)||e.proxy:He(e.parent):null,Ve=(0,r.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>He(e.parent),$root:e=>He(e.root),$emit:e=>e.emit,$options:e=>Je(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=E.bind(e.proxy)),$watch:e=>X.bind(e)}),qe=(e,t)=>e!==r.kT&&!e.__isScriptSetup&&(0,r.RI)(e,t),je={get({_:e},t){const{ctx:n,setupState:a,data:s,props:o,accessCache:l,type:c,appContext:d}=e;let _;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 1:return a[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(qe(a,t))return l[t]=1,a[t];if(s!==r.kT&&(0,r.RI)(s,t))return l[t]=2,s[t];if((_=e.propsOptions[0])&&(0,r.RI)(_,t))return l[t]=3,o[t];if(n!==r.kT&&(0,r.RI)(n,t))return l[t]=4,n[t];We&&(l[t]=0)}}const p=Ve[t];let u,m;return p?("$attrs"===t&&(0,i.j)(e,"get",t),p(e)):(u=c.__cssModules)&&(u=u[t])?u:n!==r.kT&&(0,r.RI)(n,t)?(l[t]=4,n[t]):(m=d.config.globalProperties,(0,r.RI)(m,t)?m[t]:void 0)},set({_:e},t,n){const{data:i,setupState:a,ctx:s}=e;return qe(a,t)?(a[t]=n,!0):i!==r.kT&&(0,r.RI)(i,t)?(i[t]=n,!0):!(0,r.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:a,propsOptions:s}},o){let l;return!!n[o]||e!==r.kT&&(0,r.RI)(e,o)||qe(t,o)||(l=s[0])&&(0,r.RI)(l,o)||(0,r.RI)(i,o)||(0,r.RI)(Ve,o)||(0,r.RI)(a.config.globalProperties,o)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let We=!0;function Ke(e){const t=Je(e),n=e.proxy,a=e.ctx;We=!1,t.beforeCreate&&Xe(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:l,watch:c,provide:d,inject:_,created:p,beforeMount:u,mounted:m,beforeUpdate:g,updated:h,activated:f,deactivated:E,beforeDestroy:S,beforeUnmount:b,destroyed:y,unmounted:v,render:T,renderTracked:C,renderTriggered:R,errorCaptured:O,serverPrefetch:N,expose:x,inheritAttrs:A,components:I,directives:w,filters:D}=t,M=null;if(_&&Qe(_,a,M,e.appContext.config.unwrapInjectedRef),l)for(const i in l){const e=l[i];(0,r.mf)(e)&&(a[i]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,r.Kn)(t)&&(e.data=(0,i.qj)(t))}if(We=!0,o)for(const i in o){const e=o[i],t=(0,r.mf)(e)?e.bind(n,n):(0,r.mf)(e.get)?e.get.bind(n,n):r.dG;0;const s=!(0,r.mf)(e)&&(0,r.mf)(e.set)?e.set.bind(n):r.dG,l=kn({get:t,set:s});Object.defineProperty(a,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const i in c)Ze(c[i],a,n,i);if(d){const e=(0,r.mf)(d)?d.call(n):d;Reflect.ownKeys(e).forEach((t=>{q(t,e[t])}))}function k(e,t){(0,r.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(p&&Xe(p,e,"c"),k(ve,u),k(Te,m),k(Ce,g),k(Re,h),k(me,f),k(ge,E),k(we,O),k(Ie,C),k(Ae,R),k(Oe,b),k(Ne,v),k(xe,N),(0,r.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===r.dG&&(e.render=T),null!=A&&(e.inheritAttrs=A),I&&(e.components=I),w&&(e.directives=w)}function Qe(e,t,n=r.dG,a=!1){(0,r.kJ)(e)&&(e=rt(e));for(const s in e){const n=e[s];let o;o=(0,r.Kn)(n)?"default"in n?j(n.from||s,n.default,!0):j(n.from||s):j(n),(0,i.dq)(o)&&a?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Xe(e,t,n){s((0,r.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ze(e,t,n,i){const a=i.includes(".")?Z(n,i):()=>n[i];if((0,r.HD)(e)){const n=t[e];(0,r.mf)(n)&&K(a,n)}else if((0,r.mf)(e))K(a,e.bind(n));else if((0,r.Kn)(e))if((0,r.kJ)(e))e.forEach((e=>Ze(e,t,n,i)));else{const i=(0,r.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.mf)(i)&&K(a,i,e)}else 0}function Je(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:a,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,l=s.get(t);let c;return l?c=l:a.length||n||i?(c={},a.length&&a.forEach((e=>et(c,e,o,!0))),et(c,t,o)):c=t,(0,r.Kn)(t)&&s.set(t,c),c}function et(e,t,n,i=!1){const{mixins:r,extends:a}=t;a&&et(e,a,n,!0),r&&r.forEach((t=>et(e,t,n,!0)));for(const s in t)if(i&&"expose"===s);else{const i=tt[s]||n&&n[s];e[s]=i?i(e[s],t[s]):t[s]}return e}const tt={data:nt,props:st,emits:st,methods:st,computed:st,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:st,directives:st,watch:ot,provide:nt,inject:it};function nt(e,t){return t?e?function(){return(0,r.l7)((0,r.mf)(e)?e.call(this,this):e,(0,r.mf)(t)?t.call(this,this):t)}:t:e}function it(e,t){return st(rt(e),rt(t))}function rt(e){if((0,r.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function at(e,t){return e?[...new Set([].concat(e,t))]:t}function st(e,t){return e?(0,r.l7)((0,r.l7)(Object.create(null),e),t):t}function ot(e,t){if(!e)return t;if(!t)return e;const n=(0,r.l7)(Object.create(null),e);for(const i in t)n[i]=at(e[i],t[i]);return n}function lt(e,t,n,a=!1){const s={},o={};(0,r.Nj)(o,Xt,1),e.propsDefaults=Object.create(null),dt(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=a?s:(0,i.Um)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function ct(e,t,n,a){const{props:s,attrs:o,vnode:{patchFlag:l}}=e,c=(0,i.IU)(s),[d]=e.propsOptions;let _=!1;if(!(a||l>0)||16&l){let i;dt(e,t,s,o)&&(_=!0);for(const a in c)t&&((0,r.RI)(t,a)||(i=(0,r.rs)(a))!==a&&(0,r.RI)(t,i))||(d?!n||void 0===n[a]&&void 0===n[i]||(s[a]=_t(d,c,a,void 0,e,!0)):delete s[a]);if(o!==c)for(const e in o)t&&(0,r.RI)(t,e)||(delete o[e],_=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];if(w(e.emitsOptions,a))continue;const l=t[a];if(d)if((0,r.RI)(o,a))l!==o[a]&&(o[a]=l,_=!0);else{const t=(0,r._A)(a);s[t]=_t(d,c,t,l,e,!1)}else l!==o[a]&&(o[a]=l,_=!0)}}_&&(0,i.X$)(e,"set","$attrs")}function dt(e,t,n,a){const[s,o]=e.propsOptions;let l,c=!1;if(t)for(let i in t){if((0,r.Gg)(i))continue;const d=t[i];let _;s&&(0,r.RI)(s,_=(0,r._A)(i))?o&&o.includes(_)?(l||(l={}))[_]=d:n[_]=d:w(e.emitsOptions,i)||i in a&&d===a[i]||(a[i]=d,c=!0)}if(o){const t=(0,i.IU)(n),a=l||r.kT;for(let i=0;i<o.length;i++){const l=o[i];n[l]=_t(s,t,l,a[l],e,!(0,r.RI)(a,l))}}return c}function _t(e,t,n,i,a,s){const o=e[n];if(null!=o){const e=(0,r.RI)(o,"default");if(e&&void 0===i){const e=o.default;if(o.type!==Function&&(0,r.mf)(e)){const{propsDefaults:r}=a;n in r?i=r[n]:(Sn(a),i=r[n]=e.call(null,t),bn())}else i=e}o[0]&&(s&&!e?i=!1:!o[1]||""!==i&&i!==(0,r.rs)(n)||(i=!0))}return i}function pt(e,t,n=!1){const i=t.propsCache,a=i.get(e);if(a)return a;const s=e.props,o={},l=[];let c=!1;if(!(0,r.mf)(e)){const i=e=>{c=!0;const[n,i]=pt(e,t,!0);(0,r.l7)(o,n),i&&l.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!c)return(0,r.Kn)(e)&&i.set(e,r.Z6),r.Z6;if((0,r.kJ)(s))for(let _=0;_<s.length;_++){0;const e=(0,r._A)(s[_]);ut(e)&&(o[e]=r.kT)}else if(s){0;for(const e in s){const t=(0,r._A)(e);if(ut(t)){const n=s[e],i=o[t]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:Object.assign({},n);if(i){const e=ht(Boolean,i.type),n=ht(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||(0,r.RI)(i,"default"))&&l.push(t)}}}}const d=[o,l];return(0,r.Kn)(e)&&i.set(e,d),d}function ut(e){return"$"!==e[0]}function mt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function gt(e,t){return mt(e)===mt(t)}function ht(e,t){return(0,r.kJ)(t)?t.findIndex((t=>gt(t,e))):(0,r.mf)(t)&&gt(t,e)?0:-1}const ft=e=>"_"===e[0]||"$stable"===e,Et=e=>(0,r.kJ)(e)?e.map(cn):[cn(e)],St=(e,t,n)=>{if(t._n)return t;const i=F(((...e)=>Et(t(...e))),n);return i._c=!1,i},bt=(e,t,n)=>{const i=e._ctx;for(const a in e){if(ft(a))continue;const n=e[a];if((0,r.mf)(n))t[a]=St(a,n,i);else if(null!=n){0;const e=Et(n);t[a]=()=>e}}},yt=(e,t)=>{const n=Et(t);e.slots.default=()=>n},vt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,i.IU)(t),(0,r.Nj)(t,"_",n)):bt(t,e.slots={})}else e.slots={},t&&yt(e,t);(0,r.Nj)(e.slots,Xt,1)},Tt=(e,t,n)=>{const{vnode:i,slots:a}=e;let s=!0,o=r.kT;if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,r.l7)(a,t),n||1!==e||delete a._):(s=!t.$stable,bt(t,a)),o=t}else t&&(yt(e,t),o={default:1});if(s)for(const r in a)ft(r)||r in o||delete a[r]};function Ct(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rt=0;function Ot(e,t){return function(n,i=null){(0,r.mf)(n)||(n=Object.assign({},n)),null==i||(0,r.Kn)(i)||(i=null);const a=Ct(),s=new Set;let o=!1;const l=a.app={_uid:Rt++,_component:n,_props:i,_container:null,_context:a,_instance:null,version:Un,get config(){return a.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,r.mf)(e.install)?(s.add(e),e.install(l,...t)):(0,r.mf)(e)&&(s.add(e),e(l,...t))),l},mixin(e){return a.mixins.includes(e)||a.mixins.push(e),l},component(e,t){return t?(a.components[e]=t,l):a.components[e]},directive(e,t){return t?(a.directives[e]=t,l):a.directives[e]},mount(r,s,c){if(!o){0;const d=tn(n,i);return d.appContext=a,s&&t?t(d,r):e(d,r,c),o=!0,l._container=r,r.__vue_app__=l,wn(d.component)||d.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return a.provides[e]=t,l}};return l}}function Nt(e,t,n,s,o=!1){if((0,r.kJ)(e))return void e.forEach(((e,i)=>Nt(e,t&&((0,r.kJ)(t)?t[i]:t),n,s,o)));if(_e(s)&&!o)return;const l=4&s.shapeFlag?wn(s.component)||s.component.proxy:s.el,c=o?null:l,{i:d,r:_}=e;const p=t&&t.r,u=d.refs===r.kT?d.refs={}:d.refs,m=d.setupState;if(null!=p&&p!==_&&((0,r.HD)(p)?(u[p]=null,(0,r.RI)(m,p)&&(m[p]=null)):(0,i.dq)(p)&&(p.value=null)),(0,r.mf)(_))a(_,d,12,[c,u]);else{const t=(0,r.HD)(_),a=(0,i.dq)(_);if(t||a){const i=()=>{if(e.f){const n=t?(0,r.RI)(m,_)?m[_]:u[_]:_.value;o?(0,r.kJ)(n)&&(0,r.Od)(n,l):(0,r.kJ)(n)?n.includes(l)||n.push(l):t?(u[_]=[l],(0,r.RI)(m,_)&&(m[_]=u[_])):(_.value=[l],e.k&&(u[e.k]=_.value))}else t?(u[_]=c,(0,r.RI)(m,_)&&(m[_]=c)):a&&(_.value=c,e.k&&(u[e.k]=c))};c?(i.id=-1,At(i,n)):i()}else 0}}function xt(){}const At=V;function It(e){return wt(e)}function wt(e,t){xt();const n=(0,r.E9)();n.__VUE__=!0;const{insert:a,remove:s,patchProp:o,createElement:l,createText:c,createComment:d,setText:_,setElementText:p,parentNode:u,nextSibling:m,setScopeId:g=r.dG,insertStaticContent:h}=e,f=(e,t,n,i=null,r=null,a=null,s=!1,o=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Qt(e,t)&&(i=Z(e),j(e,r,a,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:d,shapeFlag:_}=t;switch(c){case Ft:E(e,t,n,i);break;case Ut:S(e,t,n,i);break;case Bt:null==e&&y(t,n,i,s);break;case Pt:k(e,t,n,i,r,a,s,o,l);break;default:1&_?N(e,t,n,i,r,a,s,o,l):6&_?L(e,t,n,i,r,a,s,o,l):(64&_||128&_)&&c.process(e,t,n,i,r,a,s,o,l,ee)}null!=d&&r&&Nt(d,e&&e.ref,a,t||e,!t)},E=(e,t,n,i)=>{if(null==e)a(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&_(n,t.children)}},S=(e,t,n,i)=>{null==e?a(t.el=d(t.children||""),n,i):t.el=e.el},y=(e,t,n,i)=>{[e.el,e.anchor]=h(e.children,t,n,i,e.el,e.anchor)},T=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=m(e),a(e,n,i),e=r;a(t,n,i)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=m(e),s(e),e=n;s(t)},N=(e,t,n,i,r,a,s,o,l)=>{s=s||"svg"===t.type,null==e?x(t,n,i,r,a,s,o,l):w(e,t,r,a,s,o,l)},x=(e,t,n,i,s,c,d,_)=>{let u,m;const{type:g,props:h,shapeFlag:f,transition:E,dirs:S}=e;if(u=e.el=l(e.type,c,h&&h.is,h),8&f?p(u,e.children):16&f&&I(e.children,u,null,i,s,c&&"foreignObject"!==g,d,_),S&&Me(e,null,i,"created"),h){for(const t in h)"value"===t||(0,r.Gg)(t)||o(u,t,null,h[t],c,e.children,i,s,X);"value"in h&&o(u,"value",null,h.value),(m=h.onVnodeBeforeMount)&&un(m,i,e)}A(u,e,e.scopeId,d,i),S&&Me(e,null,i,"beforeMount");const b=(!s||s&&!s.pendingBranch)&&E&&!E.persisted;b&&E.beforeEnter(u),a(u,t,n),((m=h&&h.onVnodeMounted)||b||S)&&At((()=>{m&&un(m,i,e),b&&E.enter(u),S&&Me(e,null,i,"mounted")}),s)},A=(e,t,n,i,r)=>{if(n&&g(e,n),i)for(let a=0;a<i.length;a++)g(e,i[a]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;A(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},I=(e,t,n,i,r,a,s,o,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=o?dn(e[c]):cn(e[c]);f(null,l,t,n,i,r,a,s,o)}},w=(e,t,n,i,a,s,l)=>{const c=t.el=e.el;let{patchFlag:d,dynamicChildren:_,dirs:u}=t;d|=16&e.patchFlag;const m=e.props||r.kT,g=t.props||r.kT;let h;n&&Dt(n,!1),(h=g.onVnodeBeforeUpdate)&&un(h,n,t,e),u&&Me(t,e,n,"beforeUpdate"),n&&Dt(n,!0);const f=a&&"foreignObject"!==t.type;if(_?D(e.dynamicChildren,_,c,n,i,f,s):l||Y(e,t,c,null,n,i,f,s,!1),d>0){if(16&d)M(c,t,m,g,n,i,a);else if(2&d&&m.class!==g.class&&o(c,"class",null,g.class,a),4&d&&o(c,"style",m.style,g.style,a),8&d){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const s=r[t],l=m[s],d=g[s];d===l&&"value"!==s||o(c,s,l,d,a,e.children,n,i,X)}}1&d&&e.children!==t.children&&p(c,t.children)}else l||null!=_||M(c,t,m,g,n,i,a);((h=g.onVnodeUpdated)||u)&&At((()=>{h&&un(h,n,t,e),u&&Me(t,e,n,"updated")}),i)},D=(e,t,n,i,r,a,s)=>{for(let o=0;o<t.length;o++){const l=e[o],c=t[o],d=l.el&&(l.type===Pt||!Qt(l,c)||70&l.shapeFlag)?u(l.el):n;f(l,c,d,null,i,r,a,s,!0)}},M=(e,t,n,i,a,s,l)=>{if(n!==i){if(n!==r.kT)for(const c in n)(0,r.Gg)(c)||c in i||o(e,c,n[c],null,l,t.children,a,s,X);for(const c in i){if((0,r.Gg)(c))continue;const d=i[c],_=n[c];d!==_&&"value"!==c&&o(e,c,_,d,l,t.children,a,s,X)}"value"in i&&o(e,"value",n.value,i.value)}},k=(e,t,n,i,r,s,o,l,d)=>{const _=t.el=e?e.el:c(""),p=t.anchor=e?e.anchor:c("");let{patchFlag:u,dynamicChildren:m,slotScopeIds:g}=t;g&&(l=l?l.concat(g):g),null==e?(a(_,n,i),a(p,n,i),I(t.children,n,p,r,s,o,l,d)):u>0&&64&u&&m&&e.dynamicChildren?(D(e.dynamicChildren,m,n,r,s,o,l),(null!=t.key||r&&t===r.subTree)&&Mt(e,t,!0)):Y(e,t,n,p,r,s,o,l,d)},L=(e,t,n,i,r,a,s,o,l)=>{t.slotScopeIds=o,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,s,l):P(t,n,i,r,a,s,l):F(e,t,l)},P=(e,t,n,i,r,a,s)=>{const o=e.component=hn(e,i,r);if(pe(e)&&(o.ctx.renderer=ee),Rn(o),o.asyncDep){if(r&&r.registerDep(o,B),!e.el){const e=o.subTree=tn(Ut);S(null,e,t,n)}}else B(o,e,t,n,r,a,s)},F=(e,t,n)=>{const i=t.component=e.component;if(z(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void G(i,t,n);i.next=t,v(i.update),i.update()}else t.el=e.el,i.vnode=t},B=(e,t,n,a,s,o,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:a,parent:c,vnode:d}=e,_=n;0,Dt(e,!1),n?(n.el=d.el,G(e,n,l)):n=d,i&&(0,r.ir)(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&un(t,c,n,d),Dt(e,!0);const p=U(e);0;const m=e.subTree;e.subTree=p,f(m,p,u(m.el),Z(m),e,s,o),n.el=p.el,null===_&&$(e,p.el),a&&At(a,s),(t=n.props&&n.props.onVnodeUpdated)&&At((()=>un(t,c,n,d)),s)}else{let i;const{el:l,props:c}=t,{bm:d,m:_,parent:p}=e,u=_e(t);if(Dt(e,!1),d&&(0,r.ir)(d),!u&&(i=c&&c.onVnodeBeforeMount)&&un(i,p,t),Dt(e,!0),l&&ne){const n=()=>{e.subTree=U(e),ne(l,e.subTree,e,s,null)};u?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const i=e.subTree=U(e);0,f(null,i,n,a,e,s,o),t.el=i.el}if(_&&At(_,s),!u&&(i=c&&c.onVnodeMounted)){const e=t;At((()=>un(i,p,e)),s)}(256&t.shapeFlag||p&&_e(p.vnode)&&256&p.vnode.shapeFlag)&&e.a&&At(e.a,s),e.isMounted=!0,t=n=a=null}},d=e.effect=new i.qq(c,(()=>b(_)),e.scope),_=e.update=()=>d.run();_.id=e.uid,Dt(e,!0),_()},G=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,ct(e,t.props,r,n),Tt(e,t.children,n),(0,i.Jd)(),C(),(0,i.lk)()},Y=(e,t,n,i,r,a,s,o,l=!1)=>{const c=e&&e.children,d=e?e.shapeFlag:0,_=t.children,{patchFlag:u,shapeFlag:m}=t;if(u>0){if(128&u)return void V(c,_,n,i,r,a,s,o,l);if(256&u)return void H(c,_,n,i,r,a,s,o,l)}8&m?(16&d&&X(c,r,a),_!==c&&p(n,_)):16&d?16&m?V(c,_,n,i,r,a,s,o,l):X(c,r,a,!0):(8&d&&p(n,""),16&m&&I(_,n,i,r,a,s,o,l))},H=(e,t,n,i,a,s,o,l,c)=>{e=e||r.Z6,t=t||r.Z6;const d=e.length,_=t.length,p=Math.min(d,_);let u;for(u=0;u<p;u++){const i=t[u]=c?dn(t[u]):cn(t[u]);f(e[u],i,n,null,a,s,o,l,c)}d>_?X(e,a,s,!0,!1,p):I(t,n,i,a,s,o,l,c,p)},V=(e,t,n,i,a,s,o,l,c)=>{let d=0;const _=t.length;let p=e.length-1,u=_-1;while(d<=p&&d<=u){const i=e[d],r=t[d]=c?dn(t[d]):cn(t[d]);if(!Qt(i,r))break;f(i,r,n,null,a,s,o,l,c),d++}while(d<=p&&d<=u){const i=e[p],r=t[u]=c?dn(t[u]):cn(t[u]);if(!Qt(i,r))break;f(i,r,n,null,a,s,o,l,c),p--,u--}if(d>p){if(d<=u){const e=u+1,r=e<_?t[e].el:i;while(d<=u)f(null,t[d]=c?dn(t[d]):cn(t[d]),n,r,a,s,o,l,c),d++}}else if(d>u)while(d<=p)j(e[d],a,s,!0),d++;else{const m=d,g=d,h=new Map;for(d=g;d<=u;d++){const e=t[d]=c?dn(t[d]):cn(t[d]);null!=e.key&&h.set(e.key,d)}let E,S=0;const b=u-g+1;let y=!1,v=0;const T=new Array(b);for(d=0;d<b;d++)T[d]=0;for(d=m;d<=p;d++){const i=e[d];if(S>=b){j(i,a,s,!0);continue}let r;if(null!=i.key)r=h.get(i.key);else for(E=g;E<=u;E++)if(0===T[E-g]&&Qt(i,t[E])){r=E;break}void 0===r?j(i,a,s,!0):(T[r-g]=d+1,r>=v?v=r:y=!0,f(i,t[r],n,null,a,s,o,l,c),S++)}const C=y?kt(T):r.Z6;for(E=C.length-1,d=b-1;d>=0;d--){const e=g+d,r=t[e],p=e+1<_?t[e+1].el:i;0===T[d]?f(null,r,n,p,a,s,o,l,c):y&&(E<0||d!==C[E]?q(r,n,p,2):E--)}}},q=(e,t,n,i,r=null)=>{const{el:s,type:o,transition:l,children:c,shapeFlag:d}=e;if(6&d)return void q(e.component.subTree,t,n,i);if(128&d)return void e.suspense.move(t,n,i);if(64&d)return void o.move(e,t,n,ee);if(o===Pt){a(s,t,n);for(let e=0;e<c.length;e++)q(c[e],t,n,i);return void a(e.anchor,t,n)}if(o===Bt)return void T(e,t,n);const _=2!==i&&1&d&&l;if(_)if(0===i)l.beforeEnter(s),a(s,t,n),At((()=>l.enter(s)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=l,o=()=>a(s,t,n),c=()=>{e(s,(()=>{o(),r&&r()}))};i?i(s,o,c):c()}else a(s,t,n)},j=(e,t,n,i=!1,r=!1)=>{const{type:a,props:s,ref:o,children:l,dynamicChildren:c,shapeFlag:d,patchFlag:_,dirs:p}=e;if(null!=o&&Nt(o,null,n,e,!0),256&d)return void t.ctx.deactivate(e);const u=1&d&&p,m=!_e(e);let g;if(m&&(g=s&&s.onVnodeBeforeUnmount)&&un(g,t,e),6&d)Q(e.component,n,i);else{if(128&d)return void e.suspense.unmount(n,i);u&&Me(e,null,t,"beforeUnmount"),64&d?e.type.remove(e,t,n,r,ee,i):c&&(a!==Pt||_>0&&64&_)?X(c,t,n,!1,!0):(a===Pt&&384&_||!r&&16&d)&&X(l,t,n),i&&W(e)}(m&&(g=s&&s.onVnodeUnmounted)||u)&&At((()=>{g&&un(g,t,e),u&&Me(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Pt)return void K(n,i);if(t===Bt)return void O(e);const a=()=>{s(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,s=()=>t(n,a);i?i(e.el,a,s):s()}else a()},K=(e,t)=>{let n;while(e!==t)n=m(e),s(e),e=n;s(t)},Q=(e,t,n)=>{const{bum:i,scope:a,update:s,subTree:o,um:l}=e;i&&(0,r.ir)(i),a.stop(),s&&(s.active=!1,j(o,e,t,n)),l&&At(l,t),At((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,i=!1,r=!1,a=0)=>{for(let s=a;s<e.length;s++)j(e[s],t,n,i,r)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&j(t._vnode,null,null,!0):f(t._vnode||null,e,t,null,null,null,n),C(),R(),t._vnode=e},ee={p:f,um:j,m:q,r:W,mt:P,mc:I,pc:Y,pbc:D,n:Z,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:J,hydrate:te,createApp:Ot(J,te)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mt(e,t,n=!1){const i=e.children,a=t.children;if((0,r.kJ)(i)&&(0,r.kJ)(a))for(let r=0;r<i.length;r++){const e=i[r];let t=a[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=a[r]=dn(a[r]),t.el=e.el),n||Mt(e,t)),t.type===Ft&&(t.el=e.el)}}function kt(e){const t=e.slice(),n=[0];let i,r,a,s,o;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}a=0,s=n.length-1;while(a<s)o=a+s>>1,e[n[o]]<l?a=o+1:s=o;l<e[n[a]]&&(a>0&&(t[i]=n[a-1]),n[a]=i)}}a=n.length,s=n[a-1];while(a-- >0)n[a]=s,s=t[s];return n}const Lt=e=>e.__isTeleport;const Pt=Symbol(void 0),Ft=Symbol(void 0),Ut=Symbol(void 0),Bt=Symbol(void 0),Gt=[];let zt=null;function Yt(e=!1){Gt.push(zt=e?null:[])}function $t(){Gt.pop(),zt=Gt[Gt.length-1]||null}let Ht=1;function Vt(e){Ht+=e}function qt(e){return e.dynamicChildren=Ht>0?zt||r.Z6:null,$t(),Ht>0&&zt&&zt.push(e),e}function jt(e,t,n,i,r,a){return qt(en(e,t,n,i,r,a,!0))}function Wt(e,t,n,i,r){return qt(tn(e,t,n,i,r,!0))}function Kt(e){return!!e&&!0===e.__v_isVNode}function Qt(e,t){return e.type===t.type&&e.key===t.key}const Xt="__vInternal",Zt=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,r.HD)(e)||(0,i.dq)(e)||(0,r.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null;function en(e,t=null,n=null,i=0,a=null,s=(e===Pt?0:1),o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zt(t),ref:t&&Jt(t),scopeId:M,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:D};return l?(_n(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=(0,r.HD)(n)?8:16),Ht>0&&!o&&zt&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&zt.push(c),c}const tn=nn;function nn(e,t=null,n=null,a=0,s=null,o=!1){if(e&&e!==Fe||(e=Ut),Kt(e)){const i=an(e,t,!0);return n&&_n(i,n),Ht>0&&!o&&zt&&(6&i.shapeFlag?zt[zt.indexOf(e)]=i:zt.push(i)),i.patchFlag|=-2,i}if(Mn(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,r.HD)(e)&&(t.class=(0,r.C_)(e)),(0,r.Kn)(n)&&((0,i.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),t.style=(0,r.j5)(n))}const l=(0,r.HD)(e)?1:H(e)?128:Lt(e)?64:(0,r.Kn)(e)?4:(0,r.mf)(e)?2:0;return en(e,t,n,a,s,l,o,!0)}function rn(e){return e?(0,i.X3)(e)||Xt in e?(0,r.l7)({},e):e:null}function an(e,t,n=!1){const{props:i,ref:a,patchFlag:s,children:o}=e,l=t?pn(i||{},t):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Zt(l),ref:t&&t.ref?n&&a?(0,r.kJ)(a)?a.concat(Jt(t)):[a,Jt(t)]:Jt(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return c}function sn(e=" ",t=0){return tn(Ft,null,e,t)}function on(e,t){const n=tn(Bt,null,e);return n.staticCount=t,n}function ln(e="",t=!1){return t?(Yt(),Wt(Ut,null,e)):tn(Ut,null,e)}function cn(e){return null==e||"boolean"===typeof e?tn(Ut):(0,r.kJ)(e)?tn(Pt,null,e.slice()):"object"===typeof e?dn(e):tn(Ft,null,String(e))}function dn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:an(e)}function _n(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.kJ)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),_n(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Xt in t?3===i&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,r.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&i?(n=16,t=[sn(t)]):n=8);e.children=t,e.shapeFlag|=n}function pn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C_)([t.class,i.class]));else if("style"===e)t.style=(0,r.j5)([t.style,i.style]);else if((0,r.F7)(e)){const n=t[e],a=i[e];!a||n===a||(0,r.kJ)(n)&&n.includes(a)||(t[e]=n?[].concat(n,a):a)}else""!==e&&(t[e]=i[e])}return t}function un(e,t,n,i=null){s(e,t,7,[n,i])}const mn=Ct();let gn=0;function hn(e,t,n){const a=e.type,s=(t?t.appContext:e.appContext)||mn,o={uid:gn++,vnode:e,type:a,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pt(a,s),emitsOptions:I(a,s),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:a.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=A.bind(null,o),e.ce&&e.ce(o),o}let fn=null;const En=()=>fn||D,Sn=e=>{fn=e,e.scope.on()},bn=()=>{fn&&fn.scope.off(),fn=null};function yn(e){return 4&e.vnode.shapeFlag}let vn,Tn,Cn=!1;function Rn(e,t=!1){Cn=t;const{props:n,children:i}=e.vnode,r=yn(e);lt(e,n,r,t),vt(e,i);const a=r?On(e,t):void 0;return Cn=!1,a}function On(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,i.Xl)(new Proxy(e.ctx,je));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?In(e):null;Sn(e),(0,i.Jd)();const l=a(s,e,0,[e.props,n]);if((0,i.lk)(),bn(),(0,r.tI)(l)){if(l.then(bn,bn),t)return l.then((n=>{Nn(e,n,t)})).catch((t=>{o(t,e,0)}));e.asyncDep=l}else Nn(e,l,t)}else xn(e,t)}function Nn(e,t,n){(0,r.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Kn)(t)&&(e.setupState=(0,i.WL)(t)),xn(e,n)}function xn(e,t,n){const a=e.type;if(!e.render){if(!t&&vn&&!a.render){const t=a.template||Je(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:o}=a,l=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:s},i),o);a.render=vn(t,l)}}e.render=a.render||r.dG,Tn&&Tn(e)}Sn(e),(0,i.Jd)(),Ke(e),(0,i.lk)(),bn()}function An(e){return new Proxy(e.attrs,{get(t,n){return(0,i.j)(e,"get","$attrs"),t[n]}})}function In(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=An(e))},slots:e.slots,emit:e.emit,expose:t}}function wn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ve?Ve[n](e):void 0},has(e,t){return t in e||t in Ve}}))}function Dn(e,t=!0){return(0,r.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Mn(e){return(0,r.mf)(e)&&"__vccOpts"in e}const kn=(e,t)=>(0,i.Fl)(e,t,Cn);function Ln(e,t,n){const i=arguments.length;return 2===i?(0,r.Kn)(t)&&!(0,r.kJ)(t)?Kt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Kt(n)&&(n=[n]),tn(e,t,n))}const Pn=Symbol(""),Fn=()=>{{const e=j(Pn);return e}};const Un="3.2.45"},9963:function(e,t,n){"use strict";n.d(t,{D2:function(){return re},iM:function(){return ne},nr:function(){return J},ri:function(){return le},uT:function(){return k}});var i=n(3577),r=n(6252);n(2262);const a="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,o=s&&s.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?s.createElementNS(a,e):s.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,a){const s=n?n.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===a||!(r=r.nextSibling))break}else{o.innerHTML=i?`<svg>${e}</svg>`:e;const r=o.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const r=e.style,a=(0,i.HD)(n);if(n&&!a){for(const e in n)p(r,e,n[e]);if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&p(r,e,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const _=/\s*!important$/;function p(e,t,n){if((0,i.kJ)(n))n.forEach((n=>p(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=g(e,t);_.test(n)?e.setProperty((0,i.rs)(r),n.replace(_,""),"important"):e[r]=n}}const u=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return m[t]=r;r=(0,i.kC)(r);for(let i=0;i<u.length;i++){const n=u[i]+r;if(n in e)return m[t]=n}return t}const h="http://www.w3.org/1999/xlink";function f(e,t,n,r,a){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(h,t.slice(6,t.length)):e.setAttributeNS(h,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function E(e,t,n,r,a,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,a,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}function S(e,t,n,i){e.addEventListener(t,n,i)}function b(e,t,n,i){e.removeEventListener(t,n,i)}function y(e,t,n,i,r=null){const a=e._vei||(e._vei={}),s=a[t];if(i&&s)s.value=i;else{const[n,o]=T(t);if(i){const s=a[t]=N(i,r);S(e,n,s,o)}else s&&(b(e,n,s,o),a[t]=void 0)}}const v=/(?:Once|Passive|Capture)$/;function T(e){let t;if(v.test(e)){let n;t={};while(n=e.match(v))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.rs)(e.slice(2));return[n,t]}let C=0;const R=Promise.resolve(),O=()=>C||(R.then((()=>C=0)),C=Date.now());function N(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.$d)(x(e,n.value),t,5,[e])};return n.value=e,n.attached=O(),n}function x(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const A=/^on[a-z]/,I=(e,t,n,r,a=!1,s,o,l,_)=>{"class"===t?c(e,r,a):"style"===t?d(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||y(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):w(e,t,r,a))?E(e,t,r,s,o,l,_):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),f(e,t,r,a))};function w(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&A.test(t)&&(0,i.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!A.test(t)||!(0,i.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",M="animation",k=(e,{slots:t})=>(0,r.h)(r.P$,U(e),t);k.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},P=(k.props=(0,i.l7)({},r.P$.props,L),(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),F=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function U(e){const t={};for(const i in e)i in L||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:a,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:d=o,appearToClass:_=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:u=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,g=B(a),h=g&&g[0],f=g&&g[1],{onBeforeEnter:E,onEnter:S,onEnterCancelled:b,onLeave:y,onLeaveCancelled:v,onBeforeAppear:T=E,onAppear:C=S,onAppearCancelled:R=b}=t,O=(e,t,n)=>{Y(e,t?_:l),Y(e,t?d:o),n&&n()},N=(e,t)=>{e._isLeaving=!1,Y(e,p),Y(e,m),Y(e,u),t&&t()},x=e=>(t,n)=>{const i=e?C:S,a=()=>O(t,e,n);P(i,[t,a]),$((()=>{Y(t,e?c:s),z(t,e?_:l),F(i)||V(t,r,h,a)}))};return(0,i.l7)(t,{onBeforeEnter(e){P(E,[e]),z(e,s),z(e,o)},onBeforeAppear(e){P(T,[e]),z(e,c),z(e,d)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>N(e,t);z(e,p),K(),z(e,u),$((()=>{e._isLeaving&&(Y(e,p),z(e,m),F(y)||V(e,r,f,n))})),P(y,[e,n])},onEnterCancelled(e){O(e,!1),P(b,[e])},onAppearCancelled(e){O(e,!0),P(R,[e])},onLeaveCancelled(e){N(e),P(v,[e])}})}function B(e){if(null==e)return null;if((0,i.Kn)(e))return[G(e.enter),G(e.leave)];{const t=G(e);return[t,t]}}function G(e){const t=(0,i.He)(e);return t}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Y(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let H=0;function V(e,t,n,i){const r=e._endId=++H,a=()=>{r===e._endId&&i()};if(n)return setTimeout(a,n);const{type:s,timeout:o,propCount:l}=q(e,t);if(!s)return i();const c=s+"end";let d=0;const _=()=>{e.removeEventListener(c,p),a()},p=t=>{t.target===e&&++d>=l&&_()};setTimeout((()=>{d<l&&_()}),o+1),e.addEventListener(c,p)}function q(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(`${D}Delay`),a=i(`${D}Duration`),s=j(r,a),o=i(`${M}Delay`),l=i(`${M}Duration`),c=j(o,l);let d=null,_=0,p=0;t===D?s>0&&(d=D,_=s,p=a.length):t===M?c>0&&(d=M,_=c,p=l.length):(_=Math.max(s,c),d=_>0?s>c?D:M:null,p=d?d===D?a.length:l.length:0);const u=d===D&&/\b(transform|all)(,|$)/.test(i(`${D}Property`).toString());return{type:d,timeout:_,propCount:p,hasTransform:u}}function j(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>W(t)+W(e[n]))))}function W(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function K(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Q=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function X(e){e.target.composing=!0}function Z(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const J={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Q(a);const s=r||a.props&&"number"===a.props.type;S(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=(0,i.He)(r)),e._assign(r)})),n&&S(e,"change",(()=>{e.value=e.value.trim()})),t||(S(e,"compositionstart",X),S(e,"compositionend",Z),S(e,"change",Z))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},s){if(e._assign=Q(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((a||"number"===e.type)&&(0,i.He)(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}};const ee=["ctrl","shift","alt","meta"],te={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ee.some((n=>e[`${n}Key`]&&!t.includes(n)))},ne=(e,t)=>(n,...i)=>{for(let e=0;e<t.length;e++){const i=te[t[e]];if(i&&i(n,t))return}return e(n,...i)},ie={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},re=(e,t)=>n=>{if(!("key"in n))return;const r=(0,i.rs)(n.key);return t.some((e=>e===r||ie[e]===r))?e(n):void 0};const ae=(0,i.l7)({patchProp:I},l);let se;function oe(){return se||(se=(0,r.Us)(ae))}const le=(...e)=>{const t=oe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=ce(e);if(!r)return;const a=t._component;(0,i.mf)(a)||a.render||a.template||(a.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function ce(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},3577:function(e,t,n){"use strict";function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return _},DM:function(){return M},E9:function(){return re},F7:function(){return R},Gg:function(){return V},HD:function(){return P},He:function(){return ne},Kn:function(){return U},NO:function(){return T},Nj:function(){return te},Od:function(){return x},PO:function(){return $},Pq:function(){return u},RI:function(){return I},S0:function(){return H},W7:function(){return Y},WV:function(){return h},Z6:function(){return y},_A:function(){return W},_N:function(){return D},aU:function(){return J},dG:function(){return v},e1:function(){return a},fY:function(){return i},hR:function(){return Z},hq:function(){return f},ir:function(){return ee},j5:function(){return s},kC:function(){return X},kJ:function(){return w},kT:function(){return b},l7:function(){return N},mf:function(){return L},rs:function(){return Q},tI:function(){return B},tR:function(){return O},yA:function(){return m},yk:function(){return F},zw:function(){return E}});const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",a=i(r);function s(e){if(w(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=P(i)?d(i):s(i);if(r)for(const e in r)t[e]=r[e]}return t}return P(e)||U(e)?e:void 0}const o=/;(?![^(]*\))/g,l=/:([^]+)/,c=/\/\*.*?\*\//gs;function d(e){const t={};return e.replace(c,"").split(o).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function _(e){let t="";if(P(e))t=e;else if(w(e))for(let n=0;n<e.length;n++){const i=_(e[n]);i&&(t+=i+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",u=i(p);function m(e){return!!e||""===e}function g(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=h(e[i],t[i]);return n}function h(e,t){if(e===t)return!0;let n=k(e),i=k(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=F(e),i=F(t),n||i)return e===t;if(n=w(e),i=w(t),n||i)return!(!n||!i)&&g(e,t);if(n=U(e),i=U(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,a=Object.keys(t).length;if(r!==a)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!h(e[n],t[n]))return!1}}return String(e)===String(t)}function f(e,t){return e.findIndex((e=>h(e,t)))}const E=e=>P(e)?e:null==e?"":w(e)||U(e)&&(e.toString===G||!L(e.toString))?JSON.stringify(e,S,2):String(e),S=(e,t)=>t&&t.__v_isRef?S(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||w(t)||$(t)?t:String(t),b={},y=[],v=()=>{},T=()=>!1,C=/^on[^a-z]/,R=e=>C.test(e),O=e=>e.startsWith("onUpdate:"),N=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,I=(e,t)=>A.call(e,t),w=Array.isArray,D=e=>"[object Map]"===z(e),M=e=>"[object Set]"===z(e),k=e=>"[object Date]"===z(e),L=e=>"function"===typeof e,P=e=>"string"===typeof e,F=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,B=e=>U(e)&&L(e.then)&&L(e.catch),G=Object.prototype.toString,z=e=>G.call(e),Y=e=>z(e).slice(8,-1),$=e=>"[object Object]"===z(e),H=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,V=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),q=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},j=/-(\w)/g,W=q((e=>e.replace(j,((e,t)=>t?t.toUpperCase():"")))),K=/\B([A-Z])/g,Q=q((e=>e.replace(K,"-$1").toLowerCase())),X=q((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=q((e=>e?`on${X(e)}`:"")),J=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},te=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ie;const re=()=>ie||(ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},167:function(){"use strict";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;class r{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=i.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(n,e))}return e}toString(){return this.cssText}}const a=e=>new r("string"==typeof e?e:e+"",void 0,n),s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new r(i,e,n)},o=(n,i)=>{t?n.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)}))},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return a(t)})(e):e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var c;const d=window,_=d.trustedTypes,p=_?_.emptyScript:"",u=d.reactiveElementPolyfillSupport,m={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},g=(e,t)=>t!==e&&(t==t||e==e),h={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const i=this._$Ep(n,t);void 0!==i&&(this._$Ev.set(i,n),e.push(i))})),e}static createProperty(e,t=h){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return o(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=h){var i;const r=this.constructor._$Ep(e,n);if(void 0!==r&&!0===n.reflect){const a=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:m).toAttribute(t,n.type);this._$El=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=i.getPropertyOptions(r),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:m;this._$El=r,this[r]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var E;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.1");const S=window,b=S.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,T="?"+v,C=`<${T}>`,R=document,O=(e="")=>R.createComment(e),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,x=Array.isArray,A=e=>x(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,D=/>/g,M=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),k=/'/g,L=/"/g,P=/^(?:script|style|textarea|title)$/i,F=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),U=F(1),B=F(2),G=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Y=new WeakMap,$=R.createTreeWalker(R,129,null,!1),H=(e,t)=>{const n=e.length-1,i=[];let r,a=2===t?"<svg>":"",s=I;for(let l=0;l<n;l++){const t=e[l];let n,o,c=-1,d=0;for(;d<t.length&&(s.lastIndex=d,o=s.exec(t),null!==o);)d=s.lastIndex,s===I?"!--"===o[1]?s=w:void 0!==o[1]?s=D:void 0!==o[2]?(P.test(o[2])&&(r=RegExp("</"+o[2],"g")),s=M):void 0!==o[3]&&(s=M):s===M?">"===o[0]?(s=null!=r?r:I,c=-1):void 0===o[1]?c=-2:(c=s.lastIndex-o[2].length,n=o[1],s=void 0===o[3]?M:'"'===o[3]?L:k):s===L||s===k?s=M:s===w||s===D?s=I:(s=M,r=void 0);const _=s===M&&e[l+1].startsWith("/>")?" ":"";a+=s===I?t+C:c>=0?(i.push(n),t.slice(0,c)+"$lit$"+t.slice(c)+v+_):t+v+(-2===c?(i.push(void 0),l):_)}const o=a+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(o):o,i]};class V{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,a=0;const s=e.length-1,o=this.parts,[l,c]=H(e,t);if(this.el=V.createElement(l,n),$.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=$.nextNode())&&o.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(v)){const n=c[a++];if(e.push(t),void 0!==n){const e=i.getAttribute(n.toLowerCase()+"$lit$").split(v),t=/([.?@])?(.*)/.exec(n);o.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?Q:"?"===t[1]?Z:"@"===t[1]?J:K})}else o.push({type:6,index:r})}for(const t of e)i.removeAttribute(t)}if(P.test(i.tagName)){const e=i.textContent.split(v),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],O()),$.nextNode(),o.push({type:2,index:++r});i.append(e[t],O())}}}else if(8===i.nodeType)if(i.data===T)o.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(v,e+1));)o.push({type:7,index:r}),e+=v.length-1}r++}}static createElement(e,t){const n=R.createElement("template");return n.innerHTML=e,n}}function q(e,t,n=e,i){var r,a,s,o;if(t===G)return t;let l=void 0!==i?null===(r=n._$Co)||void 0===r?void 0:r[i]:n._$Cl;const c=N(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,i)),void 0!==i?(null!==(s=(o=n)._$Co)&&void 0!==s?s:o._$Co=[])[i]=l:n._$Cl=l),void 0!==l&&(t=q(e,l._$AS(e,t.values),l,i)),t}class j{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:n},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:R).importNode(n,!0);$.currentNode=r;let a=$.nextNode(),s=0,o=0,l=i[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new W(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new ee(a,this,e)),this.u.push(t),l=i[++o]}s!==(null==l?void 0:l.index)&&(a=$.nextNode(),s++)}return r}p(e){let t=0;for(const n of this.u)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class W{constructor(e,t,n,i){var r;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cm=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),N(e)?e===z||null==e||""===e?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==G&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):A(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==z&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){var t;const{values:n,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=V.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.p(n);else{const e=new j(r,this),t=e.v(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new V(e)),t}k(e){x(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new W(this.O(O()),this.O(O()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class K{constructor(e,t,n,i,r){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const r=this.strings;let a=!1;if(void 0===r)e=q(this,e,t,0),a=!N(e)||e!==this._$AH&&e!==G,a&&(this._$AH=e);else{const i=e;let s,o;for(e=r[0],s=0;s<r.length-1;s++)o=q(this,i[n+s],t,s),o===G&&(o=this._$AH[s]),a||(a=!N(o)||o!==this._$AH[s]),o===z?e=z:e!==z&&(e+=(null!=o?o:"")+r[s+1]),this._$AH[s]=o}a&&!i&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Q extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}const X=b?b.emptyScript:"";class Z extends K{constructor(){super(...arguments),this.type=4}j(e){e&&e!==z?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class J extends K{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=q(this,e,t,0))&&void 0!==n?n:z)===G)return;const i=this._$AH,r=e===z&&i!==z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==z&&(i===z||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class ee{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const te=S.litHtmlPolyfillSupport;null==te||te(V,W),(null!==(E=S.litHtmlVersions)&&void 0!==E?E:S.litHtmlVersions=[]).push("2.6.1");const ne=(e,t,n)=>{var i,r;const a=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:t;let s=a._$litPart$;if(void 0===s){const e=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;a._$litPart$=s=new W(t.insertBefore(O(),e),e,void 0,null!=n?n:{})}return s._$AI(e),s};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ie,re;class ae extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ne(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return G}}ae.finalized=!0,ae._$litElement$=!0,null===(ie=globalThis.litElementHydrateSupport)||void 0===ie||ie.call(globalThis,{LitElement:ae});const se=globalThis.litElementPolyfillSupport;null==se||se({LitElement:ae});(null!==(re=globalThis.litElementVersions)&&void 0!==re?re:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){customElements.define(e,t)}}})(e,t),le=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function ce(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):le(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=({finisher:e,descriptor:t})=>(n,i)=>{var r;if(void 0===i){const i=null!==(r=n.originalKey)&&void 0!==r?r:n.key,a=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:{...n,key:i};return null!=e&&(a.finisher=function(t){e(t,i)}),a}{const r=n.constructor;void 0!==t&&Object.defineProperty(n,i,t(i)),null==e||e(r,i)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function _e(e,t){return de({descriptor:n=>{const i={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;i.get=function(){var n,i;return void 0===this[t]&&(this[t]=null!==(i=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pe;null===(pe=window.HTMLSlotElement)||void 0===pe||pe.prototype.assignedElements;const ue=3.78;var me=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let ge=class extends ae{constructor(){super(...arguments),this.color="red",this.offColor="#444",this.background="black",this.digits=1,this.colon=!1,this.colonValue=!1,this.pins="top",this.values=[0,0,0,0,0,0,0,0]}get pinInfo(){const e=e=>{const{startX:t,cols:n,bottomY:i}=this.pinPositions,r=(e-1)%n,a=1-Math.floor((e-1)/n),s=1.27,o=t+s+2.54*(a?r:n-r-1),l="top"===this.pins?a?i+1:1:a?i+2:0;return{number:e,x:o*ue,y:l*ue}};switch(this.digits){case 4:return[Object.assign(Object.assign({name:"A"},e(13)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},e(9)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},e(4)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},e(2)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},e(1)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},e(12)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},e(5)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},e(3)),{signals:[],description:"Decimal Point"}),Object.assign(Object.assign({name:"DIG1"},e(14)),{signals:[],description:"Digit 1 Common"}),Object.assign(Object.assign({name:"DIG2"},e(11)),{signals:[],description:"Digit 2 Common"}),Object.assign(Object.assign({name:"DIG3"},e(10)),{signals:[],description:"Digit 3 Common"}),Object.assign(Object.assign({name:"DIG4"},e(6)),{signals:[],description:"Digit 4 Common"}),Object.assign(Object.assign({name:"COM"},e(7)),{signals:[],description:"Common pin"}),Object.assign(Object.assign({name:"CLN"},e(8)),{signals:[],description:"Colon"})];case 3:return[Object.assign(Object.assign({name:"A"},e(11)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},e(7)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},e(4)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},e(2)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},e(1)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},e(10)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},e(5)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},e(3)),{signals:[],description:"Decimal Point"}),Object.assign(Object.assign({name:"DIG1"},e(12)),{signals:[],description:"Digit 1 Common"}),Object.assign(Object.assign({name:"DIG2"},e(9)),{signals:[],description:"Digit 2 Common"}),Object.assign(Object.assign({name:"DIG3"},e(8)),{signals:[],description:"Digit 3 Common"})];case 2:return[Object.assign(Object.assign({name:"DIG1"},e(8)),{signals:[],description:"Digit 1 Common"}),Object.assign(Object.assign({name:"DIG2"},e(7)),{signals:[],description:"Digit 2 Common"}),Object.assign(Object.assign({name:"A"},e(10)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},e(9)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},e(1)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},e(4)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},e(3)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},e(6)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},e(5)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},e(2)),{signals:[],description:"Decimal Point"})];case 1:default:return[Object.assign(Object.assign({name:"COM.1"},e(3)),{signals:[],description:"Common"}),Object.assign(Object.assign({name:"COM.2"},e(8)),{signals:[],description:"Common"}),Object.assign(Object.assign({name:"A"},e(7)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},e(6)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},e(4)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},e(2)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},e(1)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},e(9)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},e(10)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},e(5)),{signals:[],description:"Decimal Point"})]}}static get styles(){return s`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `}get pinPositions(){const{digits:e}=this,t=4===e?14:3===e?12:10,n=Math.ceil(t/2);return{startX:(12.55*e-2.54*n)/2,bottomY:"extend"===this.pins?21:18,cols:n}}get yOffset(){return"extend"===this.pins?2:0}update(e){(e.has("digits")||e.has("pins"))&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}renderDigit(e,t){const n=e=>this.values[t+e]?this.color:this.offColor;return B`
      <g transform="skewX(-8) translate(${e}, ${this.yOffset+2.4}) scale(0.81)">
        <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${n(0)}" />
        <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${n(1)}" />
        <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${n(2)}" />
        <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${n(3)}" />
        <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${n(4)}" />
        <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${n(5)} />
        <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${n(6)} />
      </g>
      <circle cx="${e+7.4}" cy="${this.yOffset+16}" r="0.89" fill="${n(7)}" />
    `}renderColon(){const{yOffset:e}=this,t=1.5+12.7*Math.round(this.digits/2),n=this.colonValue?this.color:this.offColor;return B`
      <g transform="skewX(-8)"  fill="${n}">
        <circle cx="${t}" cy="${e+5.75}" r="0.89" />
        <circle cx="${t}" cy="${e+13.25}" r="0.89" />
      </g>
    `}renderPins(){const{cols:e,bottomY:t,startX:n}=this.pinPositions;return B`
      <g fill="url(#pin-pattern)" transform="translate(${n}, 0)">
        <rect height="2" width=${2.54*e} />
        <rect height="2" width=${2.54*e} transform="translate(0, ${t})" />
      </g>
    `}render(){const{digits:e,colon:t,pins:n,yOffset:i}=this,r=12.55*e,a="extend"===n?23:22,s=[];for(let o=0;o<e;o++)s.push(this.renderDigit(3.5+12.7*o,8*o));return U`
      <svg
        width="${r}mm"
        height="${a}mm"
        version="1.1"
        viewBox="0 0 ${r} ${a}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            ${"extend"===n?B`<rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />`:B`<circle cx="1.27" cy="1" r=0.5 fill="#aaa" />`}
          </pattern>
        </defs>
        <rect x="0" y="${i}" width="${r}" height="20.5" />
        ${s}<!-- -->
        ${t?this.renderColon():null}<!-- -->
        ${"none"!==n?this.renderPins():null}
      </svg>
    `}};me([ce()],ge.prototype,"color",void 0),me([ce()],ge.prototype,"offColor",void 0),me([ce()],ge.prototype,"background",void 0),me([ce({type:Number})],ge.prototype,"digits",void 0),me([ce({type:Boolean})],ge.prototype,"colon",void 0),me([ce({type:Boolean})],ge.prototype,"colonValue",void 0),me([ce()],ge.prototype,"pins",void 0),me([ce({type:Array})],ge.prototype,"values",void 0),ge=me([oe("wokwi-7segment")],ge);const he=B`
  <pattern id="pins-female" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="2.54" height="2.54" fill="#333"></rect>
    <rect x="1.079" y="0.896" width="0.762" height="0.762" style="fill: #191919"></rect>
    <path
      transform="translate(1.079, 1.658) rotate(180 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.25"
    ></path>
    <path
      transform="translate(1.841, 1.658) rotate(90 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.3; fill: #fff"
    ></path>
    <path
      transform="translate(1.841, 0.896)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.15; fill: #fff"
    ></path>
    <path
      transform="translate(1.079, 0.896) rotate(270 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.35"
    ></path>
  </pattern>
`,fe=e=>({type:"analog",channel:e}),Ee=(e,t=0)=>({type:"i2c",signal:e,bus:t}),Se=(e,t=0)=>({type:"spi",signal:e,bus:t}),be=(e,t=0)=>({type:"usart",signal:e,bus:t}),ye=()=>({type:"power",signal:"GND"}),ve=e=>({type:"power",signal:"VCC",voltage:e}),Te=[" ","Spacebar"];var Ce=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Re=class extends ae{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.resetPressed=!1,this.pinInfo=[{name:"A5.2",x:87,y:9,signals:[fe(5),Ee("SCL")]},{name:"A4.2",x:97,y:9,signals:[fe(4),Ee("SDA")]},{name:"AREF",x:106,y:9,signals:[]},{name:"GND.1",x:115.5,y:9,signals:[{type:"power",signal:"GND"}]},{name:"13",x:125,y:9,signals:[Se("SCK")]},{name:"12",x:134.5,y:9,signals:[Se("MISO")]},{name:"11",x:144,y:9,signals:[Se("MOSI"),{type:"pwm"}]},{name:"10",x:153.5,y:9,signals:[Se("SS"),{type:"pwm"}]},{name:"9",x:163,y:9,signals:[{type:"pwm"}]},{name:"8",x:173,y:9,signals:[]},{name:"7",x:189,y:9,signals:[]},{name:"6",x:198.5,y:9,signals:[{type:"pwm"}]},{name:"5",x:208,y:9,signals:[{type:"pwm"}]},{name:"4",x:217.5,y:9,signals:[]},{name:"3",x:227,y:9,signals:[{type:"pwm"}]},{name:"2",x:236.5,y:9,signals:[]},{name:"1",x:246,y:9,signals:[be("TX")]},{name:"0",x:255.5,y:9,signals:[be("RX")]},{name:"IOREF",x:131,y:191.5,signals:[]},{name:"RESET",x:140.5,y:191.5,signals:[]},{name:"3.3V",x:150,y:191.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"5V",x:160,y:191.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"GND.2",x:169.5,y:191.5,signals:[{type:"power",signal:"GND"}]},{name:"GND.3",x:179,y:191.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:188.5,y:191.5,signals:[{type:"power",signal:"VCC"}]},{name:"A0",x:208,y:191.5,signals:[fe(0)]},{name:"A1",x:217.5,y:191.5,signals:[fe(1)]},{name:"A2",x:227,y:191.5,signals:[fe(2)]},{name:"A3",x:236.5,y:191.5,signals:[fe(3)]},{name:"A4",x:246,y:191.5,signals:[fe(4),Ee("SDA")]},{name:"A5",x:255.5,y:191.5,signals:[fe(5),Ee("SCL")]}]}static get styles(){return s`
      text {
        font-size: 2px;
        font-family: monospace;
        user-select: none;
      }

      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `}render(){const{ledPower:e,led13:t,ledRX:n,ledTX:i}=this;return U`
      <svg
        width="72.58mm"
        height="53.34mm"
        version="1.1"
        viewBox="-4 0 72.58 53.34"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${he}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <pattern id="mcu-leads" width="2.54" height="0.508" patternUnits="userSpaceOnUse">
          <path
            d="M 0.254,0 C 0.114,0 0,0.114 0,0.254 v 0 c 0,0.139 0,0.253 0,0.253 h 1.523 c 0,0 0,-0.114 0,-0.253 v 0 C 1.523,0.114 1.409,0 1.269,0 Z"
            fill="#ddd"
          />
        </pattern>

        <!-- PCB -->
        <path
          d="m0.999 0a1 1 0 0 0-0.999 0.999v51.34a1 1 0 0 0 0.999 0.999h64.04a1 1 0 0 0 0.999-0.999v-1.54l2.539-2.539v-32.766l-2.539-2.539v-11.43l-1.524-1.523zm14.078 0.835h0.325l0.212 0.041h0l0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.017 0.042 0.097 0.234 0.01 0.023 0.050 0.252 0.013 0.066v0.325l-0.063 0.318-0.040 0.097-0.083 0.202-0 0.001-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.106-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.001-0.083-0.202-0.040-0.097-0.063-0.318v-0.325l0.013-0.066 0.050-0.252 0.01-0.023 0.097-0.234 0.017-0.042 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm50.799 15.239h0.325l0.212 0.042 0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.014 0.035 0.110 0.264 0.01 0.051 0.053 0.267v0.325l-0.03 0.152-0.033 0.166-0.037 0.089-0.079 0.191-0 0.020-0.180 0.270-0.229 0.229-0.270 0.180-0.071 0.029-0.228 0.094-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.106-0.021-0.228-0.094-0.071-0.029-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.020-0.079-0.191-0.036-0.089-0.033-0.166-0.030-0.152v-0.325l0.053-0.267 0.010-0.051 0.109-0.264 0.014-0.035 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm0 27.94h0.325l0.180 0.036 0.138 0.027 0.212 0.087 0.058 0.024 0.029 0.012 0.270 0.180 0.229 0.229 0.180 0.270 0.124 0.300 0.063 0.319v0.325l-0.063 0.318-0.124 0.300-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.105-0.021-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.124-0.300-0.063-0.318v-0.325l0.063-0.319 0.124-0.300 0.180-0.270 0.229-0.229 0.270-0.180 0.029-0.012 0.058-0.024 0.212-0.087 0.137-0.027zm-52.07 5.080h0.325l0.212 0.041 0.106 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.121 0.182 0.058 0.087h0l0.114 0.275 0.01 0.023 0.063 0.318v0.325l-0.035 0.179-0.027 0.139-0.01 0.023-0.114 0.275h-0l-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.105-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.114-0.275-0.01-0.023-0.027-0.139-0.036-0.179v-0.325l0.063-0.318 0.01-0.023 0.114-0.275 0.058-0.087 0.121-0.182 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021z"
          fill="#2b6b99"
        />

        <!-- reset button -->
        <rect x="3.816" y="1.4125" width="6.2151" height="6.0268" fill="#9b9b9b" />
        <g fill="#e6e6e6">
          <rect x="2.1368" y="1.954" width="1.695" height=".84994" />
          <rect x="2.121" y="3.8362" width="1.695" height=".84994" />
          <rect x="2.0974" y="5.8608" width="1.695" height=".84994" />
          <rect x="10.031" y="6.0256" width="1.695" height=".84994" />
          <rect x="10.008" y="1.9528" width="1.695" height=".84994" />
        </g>
        <circle
          id="reset-button"
          cx="6.9619"
          cy="4.5279"
          r="1.5405"
          fill="#960000"
          stroke="#777"
          stroke-width="0.15"
          tabindex="0"
          @mousedown=${()=>this.down()}
          @touchstart=${()=>this.down()}
          @mouseup=${()=>this.up()}
          @mouseleave=${()=>this.leave()}
          @touchend=${()=>this.leave()}
          @keydown=${e=>Te.includes(e.key)&&this.down()}
          @keyup=${e=>Te.includes(e.key)&&this.up()}
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(17.497 1.27)">
          <rect width="${.38+25.4}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.421 1.27)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(26.641 49.53)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.501 49.53)">
          <rect width="${.38+15.24}" height="2.54" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <g>
          <path
            d="m64.932 41.627h-36.72c-0.209 0-0.379-0.170-0.379-0.379v-8.545c0-0.209 0.170-0.379 0.379-0.379h36.72c0.209 0 0.379 0.170 0.379 0.379v8.545c0 0.209-0.169 0.379-0.379 0.379z"
            fill="#292c2d"
          />
          <path
            d="m65.019 40.397c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.025-0.507-0.254v-6.338c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            opacity=".3"
          />
          <path
            d="m65.019 40.016c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.448-0.507-0.508v-6.084c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            fill="#3c4042"
          />
          <rect
            transform="translate(29.205, 32.778)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <rect
            transform="translate(29.205, 41.159) scale(1 -1)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <g fill="#252728">
            <circle cx="33.269" cy="36.847" r="1" />
            <circle cx="59.939" cy="36.847" r="1" />
            <path d="M65 38.05a1.13 1.13 0 010-2.26v2.27z" />
          </g>
        </g>

        <!-- Programming Headers -->
        <g transform="translate(14.1 4.4)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <g transform="translate(63 27.2) rotate(270 0 0)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(57.3, 16.21)">
          <use xlink:href="#led-body" />
          ${e&&B`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="60.88" y="17.5">ON</tspan>
        </text>

        <g transform="translate(26.87,11.69)">
          <use xlink:href="#led-body" />
          ${t&&B`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 16.2)">
          <use xlink:href="#led-body" />
          ${i&&B`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 18.5)">
          <use xlink:href="#led-body" />
          ${n&&B`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff" style="text-anchor: end">
          <tspan x="26.5" y="13">L</tspan>
          <tspan x="26.5" y="17.5">TX</tspan>
          <tspan x="26.5" y="19.8">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="10.34" width="36.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.48">DIGITAL (PWM ~)</tspan>
        </text>
        <text
          transform="translate(22.6 4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">~11</tspan>
          <tspan x="0" dy="2.54">~10</tspan>
          <tspan x="0" dy="2.54">~9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">~6</tspan>
          <tspan x="0" dy="2.54">~5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">~3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→1</tspan>
          <tspan x="0" dy="2.54">RX←0</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="33.90" y="42.76" width="12.84" height="0.16" fill="#fff"></rect>
        <rect x="49.48" y="42.76" width="14.37" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="41" y="44.96">POWER</tspan>
          <tspan x="53.5" y="44.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(29.19 49) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="4.54">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <path
          style="fill:none;stroke:#fff;stroke-width:1.03"
          d="m 34.21393,12.01079 c -1.66494,-0.13263 -3.06393,1.83547 -2.37559,3.36182 0.66469,1.65332 3.16984,2.10396 4.36378,0.77797 1.15382,-1.13053 1.59956,-2.86476 3.00399,-3.75901 1.43669,-0.9801 3.75169,-0.0547 4.02384,1.68886 0.27358,1.66961 -1.52477,3.29596 -3.15725,2.80101 -1.20337,-0.27199 -2.06928,-1.29866 -2.56193,-2.37788 -0.6046,-1.0328 -1.39499,-2.13327 -2.62797,-2.42367 -0.2191,-0.0497 -0.44434,-0.0693 -0.66887,-0.0691 z"
        />
        <path
          style="fill:none;stroke:#fff;stroke-width:0.56"
          d="m 39.67829,14.37519 h 1.75141 m -0.89321,-0.8757 v 1.7514 m -7.30334,-0.8757 h 2.10166"
        />
        <text x="31" y="20.2" style="font-size:2.8px;font-weight:bold;line-height:1.25;fill:#fff">
          ARDUINO
        </text>

        <rect
          style="fill:none;stroke:#fff;stroke-width:0.1;stroke-dasharray:0.1, 0.1"
          width="11"
          height="5.45"
          x="45.19"
          y="11.83"
          rx="1"
          ry="1"
        />

        <text x="46.5" y="16" style="font-size:5px; line-height:1.25" fill="#fff">UNO</text>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}};Ce([ce()],Re.prototype,"led13",void 0),Ce([ce()],Re.prototype,"ledRX",void 0),Ce([ce()],Re.prototype,"ledTX",void 0),Ce([ce()],Re.prototype,"ledPower",void 0),Ce([ce()],Re.prototype,"resetPressed",void 0),Ce([_e("#reset-button")],Re.prototype,"resetButton",void 0),Re=Ce([oe("wokwi-arduino-uno")],Re);const Oe=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,10,10,10,0,0,0,0,0,10,10,31,10,31,10,10,0,4,30,5,14,20,15,4,0,3,19,8,4,2,25,24,0,6,9,5,2,21,9,22,0,6,4,2,0,0,0,0,0,8,4,2,2,2,4,8,0,2,4,8,8,8,4,2,0,0,4,21,14,21,4,0,0,0,4,4,31,4,4,0,0,0,0,0,0,6,4,2,0,0,0,0,31,0,0,0,0,0,0,0,0,0,6,6,0,0,16,8,4,2,1,0,0,14,17,25,21,19,17,14,0,4,6,4,4,4,4,14,0,14,17,16,8,4,2,31,0,31,8,4,8,16,17,14,0,8,12,10,9,31,8,8,0,31,1,15,16,16,17,14,0,12,2,1,15,17,17,14,0,31,17,16,8,4,4,4,0,14,17,17,14,17,17,14,0,14,17,17,30,16,8,6,0,0,6,6,0,6,6,0,0,0,6,6,0,6,4,2,0,8,4,2,1,2,4,8,0,0,0,31,0,31,0,0,0,2,4,8,16,8,4,2,0,14,17,16,8,4,0,4,0,14,17,16,22,21,21,14,0,14,17,17,17,31,17,17,0,15,17,17,15,17,17,15,0,14,17,1,1,1,17,14,0,7,9,17,17,17,9,7,0,31,1,1,15,1,1,31,0,31,1,1,15,1,1,1,0,14,17,1,29,17,17,30,0,17,17,17,31,17,17,17,0,14,4,4,4,4,4,14,0,28,8,8,8,8,9,6,0,17,9,5,3,5,9,17,0,1,1,1,1,1,1,31,0,17,27,21,21,17,17,17,0,17,17,19,21,25,17,17,0,14,17,17,17,17,17,14,0,15,17,17,15,1,1,1,0,14,17,17,17,21,9,22,0,15,17,17,15,5,9,17,0,30,1,1,14,16,16,15,0,31,4,4,4,4,4,4,0,17,17,17,17,17,17,14,0,17,17,17,17,17,10,4,0,17,17,17,21,21,21,10,0,17,17,10,4,10,17,17,0,17,17,17,10,4,4,4,0,31,16,8,4,2,1,31,0,7,1,1,1,1,1,7,0,17,10,31,4,31,4,4,0,14,8,8,8,8,8,14,0,4,10,17,0,0,0,0,0,0,0,0,0,0,0,31,0,2,4,8,0,0,0,0,0,0,0,14,16,30,17,30,0,1,1,13,19,17,17,15,0,0,0,14,1,1,17,14,0,16,16,22,25,17,17,30,0,0,0,14,17,31,1,14,0,12,18,2,7,2,2,2,0,0,30,17,17,30,16,14,0,1,1,13,19,17,17,17,0,4,0,6,4,4,4,14,0,8,0,12,8,8,9,6,0,1,1,9,5,3,5,9,0,6,4,4,4,4,4,14,0,0,0,11,21,21,17,17,0,0,0,13,19,17,17,17,0,0,0,14,17,17,17,14,0,0,0,15,17,15,1,1,0,0,0,22,25,30,16,16,0,0,0,13,19,1,1,1,0,0,0,14,1,14,16,15,0,2,2,7,2,2,18,12,0,0,0,17,17,17,25,22,0,0,0,17,17,17,10,4,0,0,0,17,21,21,21,10,0,0,0,17,10,4,10,17,0,0,0,17,17,30,16,14,0,0,0,31,8,4,2,31,0,8,4,4,2,4,4,8,0,4,4,4,4,4,4,4,0,2,4,4,8,4,4,2,0,0,4,8,31,8,4,0,0,0,4,2,31,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,5,7,0,28,4,4,4,0,0,0,0,0,0,0,4,4,4,7,0,0,0,0,0,1,2,4,0,0,0,0,6,6,0,0,0,0,31,16,31,16,8,4,0,0,0,31,16,12,4,2,0,0,0,8,4,6,5,4,0,0,0,4,31,17,16,12,0,0,0,31,4,4,4,31,0,0,0,8,31,12,10,9,0,0,0,2,31,18,10,2,0,0,0,0,14,8,8,31,0,0,0,15,8,15,8,15,0,0,0,0,21,21,16,12,0,0,0,0,31,0,0,0,0,31,16,20,12,4,4,2,0,16,8,4,6,5,4,4,0,4,31,17,17,16,8,4,0,0,31,4,4,4,4,31,0,8,31,8,12,10,9,8,0,2,31,18,18,18,18,9,0,4,31,4,31,4,4,4,0,0,30,18,17,16,8,6,0,2,30,9,8,8,8,4,0,0,31,16,16,16,16,31,0,10,31,10,10,8,4,2,0,0,3,16,19,16,8,7,0,0,31,16,8,4,10,17,0,2,31,18,10,2,2,28,0,0,17,17,18,16,8,6,0,0,30,18,21,24,8,6,0,8,7,4,31,4,4,2,0,0,21,21,21,16,8,4,0,14,0,31,4,4,4,2,0,2,2,2,6,10,2,2,0,4,4,31,4,4,2,1,0,0,14,0,0,0,0,31,0,0,31,16,10,4,10,1,0,4,31,8,4,14,21,4,0,8,8,8,8,8,4,2,0,0,4,8,17,17,17,17,0,1,1,31,1,1,1,30,0,0,31,16,16,16,8,6,0,0,2,5,8,16,16,0,0,4,31,4,4,21,21,4,0,0,31,16,16,10,4,8,0,0,14,0,14,0,14,16,0,0,4,2,1,17,31,16,0,0,16,16,10,4,10,1,0,0,31,2,31,2,2,28,0,2,2,31,18,10,2,2,0,0,14,8,8,8,8,31,0,0,31,16,31,16,16,31,0,14,0,31,16,16,8,4,0,9,9,9,9,8,4,2,0,0,4,5,5,21,21,13,0,0,1,1,17,9,5,3,0,0,31,17,17,17,17,31,0,0,31,17,17,16,8,4,0,0,3,0,16,16,8,7,0,4,9,2,0,0,0,0,0,7,5,7,0,0,0,0,0,0,0,18,21,9,9,22,0,10,0,14,16,30,17,30,0,0,0,14,17,15,17,15,1,0,0,14,1,6,17,14,0,0,0,17,17,17,25,23,1,0,0,30,5,9,17,14,0,0,0,12,18,17,17,15,1,0,0,30,17,17,17,30,16,0,0,28,4,4,5,2,0,0,8,11,8,0,0,0,0,8,0,12,8,8,8,8,8,0,5,2,5,0,0,0,0,0,4,14,5,21,14,4,0,2,2,7,2,7,2,30,0,14,0,13,19,17,17,17,0,10,0,14,17,17,17,14,0,0,0,13,19,17,17,15,1,0,0,22,25,17,17,30,16,0,14,17,31,17,17,14,0,0,0,0,26,21,11,0,0,0,0,14,17,17,10,27,0,10,0,17,17,17,17,25,22,31,1,2,4,2,1,31,0,0,0,31,10,10,10,25,0,31,0,17,10,4,10,17,0,0,0,17,17,17,17,30,16,0,16,15,4,31,4,4,0,0,0,31,2,30,18,17,0,0,0,31,21,31,17,17,0,0,4,0,31,0,4,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31]);var Ne=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const xe=3.55,Ae=5.95,Ie={green:"#6cb201",blue:"#000eff"};let we=class extends ae{constructor(){super(...arguments),this.color="black",this.background="green",this.characters=new Uint8Array(32),this.font=Oe,this.cursor=!1,this.blink=!1,this.cursorX=0,this.cursorY=0,this.backlight=!0,this.pins="full",this.numCols=16,this.numRows=2}get text(){return Array.from(this.characters).map((e=>String.fromCharCode(e))).join("")}set text(e){this.characters=new Uint8Array(e.split("").map((e=>e.charCodeAt(0))))}static get styles(){return s`
      .cursor-blink {
        animation: cursor-blink;
      }

      @keyframes cursor-blink {
        from {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `}get panelHeight(){return 5.75*this.rows}get pinInfo(){const{panelHeight:e}=this,t=87.5+e*ue;switch(this.pins){case"i2c":return[{name:"GND",x:4,y:32,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VCC",x:4,y:41.5,number:2,signals:[{type:"power",signal:"VCC"}]},{name:"SDA",x:4,y:51,number:3,signals:[Ee("SDA")]},{name:"SCL",x:4,y:60.5,number:4,signals:[Ee("SCL")]}];case"full":default:return[{name:"VSS",x:32,y:t,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VDD",x:41.5,y:t,number:2,signals:[{type:"power",signal:"VCC"}]},{name:"V0",x:51.5,y:t,number:3,signals:[]},{name:"RS",x:60.5,y:t,number:4,signals:[]},{name:"RW",x:70.5,y:t,number:5,signals:[]},{name:"E",x:80,y:t,number:6,signals:[]},{name:"D0",x:89.5,y:t,number:7,signals:[]},{name:"D1",x:99.5,y:t,number:8,signals:[]},{name:"D2",x:109,y:t,number:9,signals:[]},{name:"D3",x:118.5,y:t,number:10,signals:[]},{name:"D4",x:128,y:t,number:11,signals:[]},{name:"D5",x:137.5,y:t,number:12,signals:[]},{name:"D6",x:147,y:t,number:13,signals:[]},{name:"D7",x:156.5,y:t,number:14,signals:[]},{name:"A",x:166.5,y:t,number:15,signals:[]},{name:"K",x:176,y:t,number:16,signals:[]}]}}get cols(){return this.numCols}get rows(){return this.numRows}update(e){e.has("pins")&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}path(e){const t=.6,n=.7,i=[],{cols:r}=this;for(let a=0;a<e.length;a++){const s=a%r*xe,o=Math.floor(a/r)*Ae;for(let r=0;r<8;r++){const l=this.font[8*e[a]+r];for(let e=0;e<5;e++)if(l&1<<e){const a=(s+e*t).toFixed(2),l=(o+r*n).toFixed(2);i.push(`M ${a} ${l}h0.55v0.65h-0.55Z`)}}}return i.join(" ")}renderCursor(){const{cols:e,rows:t,cursor:n,cursorX:i,cursorY:r,blink:a,color:s}=this,o=12.45+i*xe,l=12.55+r*Ae;if(i<0||i>=e||r<0||r>=t)return null;const c=[];if(a&&c.push(B`
        <rect x="${o}" y="${l}" width="2.95" height="5.55" fill="${s}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `),n){const e=l+.7*7;c.push(B`<rect x="${o}" y="${e}" width="2.95" height="0.65" fill="${s}" />`)}return c}renderI2CPins(){return B`
      <rect x="7.55" y="-2.5" height="2.5" width="10.16" fill="url(#pins)" transform="rotate(90)" />
      <text fill="white" font-size="1.5px" font-family= "monospace">
      <tspan y="6.8" x="0.7" fill="white">1</tspan>
      <tspan y="8.9" x="2.3" fill="white">GND</tspan>
      <tspan y="11.4" x="2.3" fill="white">VCC</tspan>
      <tspan y="14" x="2.3" fill="white">SDA</tspan>
      <tspan y="16.6" x="2.3" fill="white">SCL</tspan>
      </text>
    `}renderPins(e){const t=e+21.1;return B`
      <g transform="translate(0, ${t})">
        <rect x="7.55" y="1" height="2.5" width="40.64" fill="url(#pins)" />
        <text fill="white" font-size="1.5px" font-family= "monospace">
          <tspan x="6" y="2.7">1</tspan>
          <tspan x="7.2" y="0.7">VSS</tspan>
          <tspan x="9.9" y="0.7">VDD</tspan>
          <tspan x="12.7" y="0.7">V0</tspan>
          <tspan x="15.2" y="0.7">RS</tspan>
          <tspan x="17.8" y="0.7">RW</tspan>
          <tspan x="20.8" y="0.7">E</tspan>
          <tspan x="22.7" y="0.7">D0</tspan>
          <tspan x="25.3" y="0.7">D1</tspan>
          <tspan x="27.9" y="0.7">D2</tspan>
          <tspan x="30.4" y="0.7">D3</tspan>
          <tspan x="33" y="0.7">D4</tspan>
          <tspan x="35.6" y="0.7">D5</tspan>
          <tspan x="38.2" y="0.7">D6</tspan>
          <tspan x="40.8" y="0.7">D7</tspan>
          <tspan x="43.6" y="0.7">A</tspan>
          <tspan x="46.2" y="0.7">K</tspan>
          <tspan x="48" y="2.7">16</tspan>
        </text>
      </g>
    `}render(){const{color:e,characters:t,background:n,pins:i,panelHeight:r,cols:a}=this,s=this.backlight?0:.5,o=n in Ie?Ie[n]:Ie,l=3.5125*a,c=l+23.8,d=r+24.5;return U`
      <svg
        width="${c}mm"
        height="${d}mm"
        version="1.1"
        viewBox="0 0 ${c} ${d}"
        style="font-size: 1.5px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="characters"
            width="3.55"
            height="5.95"
            patternUnits="userSpaceOnUse"
            x="12.45"
            y="12.55"
          >
            <rect width="2.95" height="5.55" fill-opacity="0.05" />
          </pattern>
          <pattern id="pins" width="2.54" height="3.255" patternUnits="userSpaceOnUse" y="1.1">
            <path
              fill="#92926d"
              d="M0,0.55c0,0 0.21,-0.52 0.87,-0.52 0.67,0 0.81,0.51 0.81,0.51v1.81h-1.869z"
            />
            <circle r="0.45" cx="0.827" cy="0.9" color="black" />
          </pattern>
        </defs>
        <rect width="${c}" height="${d}" fill="#087f45" />
        <rect x="4.95" y="5.7" width="${l+15}" height="${r+13.7}" />
        <rect
          x="7.55"
          y="10.3"
          width="${l+9.8}"
          height="${r+4.5}"
          rx="1.5"
          ry="1.5"
          fill="${o}"
        />
        <rect
          x="7.55"
          y="10.3"
          width="${l+9.8}"
          height="${r+4.5}"
          rx="1.5"
          ry="1.5"
          opacity="${s}"
        />
        ${"i2c"===i?this.renderI2CPins():null}
        ${"full"===i?this.renderPins(r):null}
        <rect
          x="12.45"
          y="12.55"
          width="${l}"
          height="${r}"
          fill="url(#characters)"
        />
        <path d="${this.path(t)}" transform="translate(12.45, 12.55)" fill="${e}" />
        ${this.renderCursor()}
      </svg>
    `}};Ne([ce()],we.prototype,"color",void 0),Ne([ce()],we.prototype,"background",void 0),Ne([ce({type:Array})],we.prototype,"characters",void 0),Ne([ce()],we.prototype,"font",void 0),Ne([ce()],we.prototype,"cursor",void 0),Ne([ce()],we.prototype,"blink",void 0),Ne([ce()],we.prototype,"cursorX",void 0),Ne([ce()],we.prototype,"cursorY",void 0),Ne([ce()],we.prototype,"backlight",void 0),Ne([ce()],we.prototype,"pins",void 0),Ne([ce()],we.prototype,"text",null),we=Ne([oe("wokwi-lcd1602")],we);new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,6,14,30,14,6,2,0,8,12,14,15,14,12,8,0,18,9,27,0,0,0,0,0,27,18,9,0,0,0,0,0,4,14,31,0,4,14,31,0,31,14,4,0,31,14,4,0,0,14,31,31,31,14,0,0,16,16,20,18,31,2,4,0,4,14,21,4,4,4,4,0,4,4,4,4,21,14,4,0,0,4,8,31,8,4,0,0,0,4,2,31,2,4,0,0,8,4,2,4,8,0,31,0,2,4,8,4,2,0,31,0,0,4,4,14,14,31,0,0,0,31,14,14,4,4,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,10,10,10,0,0,0,0,0,10,10,31,10,31,10,10,0,4,30,5,14,20,15,4,0,3,19,8,4,2,25,24,0,6,9,5,2,21,9,22,0,6,4,2,0,0,0,0,0,8,4,2,2,2,4,8,0,2,4,8,8,8,4,2,0,0,4,21,14,21,4,0,0,0,4,4,31,4,4,0,0,0,0,0,0,6,4,2,0,0,0,0,31,0,0,0,0,0,0,0,0,0,6,6,0,0,16,8,4,2,1,0,0,14,17,25,21,19,17,14,0,4,6,4,4,4,4,14,0,14,17,16,8,4,2,31,0,31,8,4,8,16,17,14,0,8,12,10,9,31,8,8,0,31,1,15,16,16,17,14,0,12,2,1,15,17,17,14,0,31,17,16,8,4,4,4,0,14,17,17,14,17,17,14,0,14,17,17,30,16,8,6,0,0,6,6,0,6,6,0,0,0,6,6,0,6,4,2,0,8,4,2,1,2,4,8,0,0,0,31,0,31,0,0,0,2,4,8,16,8,4,2,0,14,17,16,8,4,0,4,0,14,17,16,22,21,21,14,0,4,10,17,17,31,17,17,0,15,17,17,15,17,17,15,0,14,17,1,1,1,17,14,0,7,9,17,17,17,9,7,0,31,1,1,15,1,1,31,0,31,1,1,15,1,1,1,0,14,17,1,29,17,17,30,0,17,17,17,31,17,17,17,0,14,4,4,4,4,4,14,0,28,8,8,8,8,9,6,0,17,9,5,3,5,9,17,0,1,1,1,1,1,1,31,0,17,27,21,21,17,17,17,0,17,17,19,21,25,17,17,0,14,17,17,17,17,17,14,0,15,17,17,15,1,1,1,0,14,17,17,17,21,9,22,0,15,17,17,15,5,9,17,0,14,17,1,14,16,17,14,0,31,4,4,4,4,4,4,0,17,17,17,17,17,17,14,0,17,17,17,17,17,10,4,0,17,17,17,21,21,21,10,0,17,17,10,4,10,17,17,0,17,17,17,10,4,4,4,0,31,16,8,4,2,1,31,0,14,2,2,2,2,2,14,0,0,1,2,4,8,16,0,0,14,8,8,8,8,8,14,0,4,10,17,0,0,0,0,0,0,0,0,0,0,0,31,0,2,4,8,0,0,0,0,0,0,0,14,16,30,17,30,0,1,1,13,19,17,17,15,0,0,0,14,1,1,17,14,0,16,16,22,25,17,17,30,0,0,0,14,17,31,1,14,0,12,18,2,7,2,2,2,0,0,0,30,17,30,16,14,0,1,1,13,19,17,17,17,0,4,0,4,6,4,4,14,0,8,0,12,8,8,9,6,0,1,1,9,5,3,5,9,0,6,4,4,4,4,4,14,0,0,0,11,21,21,21,21,0,0,0,13,19,17,17,17,0,0,0,14,17,17,17,14,0,0,0,15,17,15,1,1,0,0,0,22,25,30,16,16,0,0,0,13,19,1,1,1,0,0,0,14,1,14,16,15,0,2,2,7,2,2,18,12,0,0,0,17,17,17,25,22,0,0,0,17,17,17,10,4,0,0,0,17,17,21,21,10,0,0,0,17,10,4,10,17,0,0,0,17,17,30,16,14,0,0,0,31,8,4,2,31,0,8,4,4,2,4,4,8,0,4,4,4,4,4,4,4,0,2,4,4,8,4,4,2,0,0,0,0,22,9,0,0,0,4,10,17,17,17,31,0,0,31,17,1,15,17,17,15,30,20,20,18,17,31,17,17,0,21,21,21,14,21,21,21,0,15,16,16,12,16,16,15,0,17,17,25,21,19,17,17,10,4,17,17,25,21,19,17,0,30,20,20,20,20,21,18,0,31,17,17,17,17,17,17,0,17,17,17,10,4,2,1,0,17,17,17,17,17,31,16,0,17,17,17,30,16,16,16,0,0,21,21,21,21,21,31,0,21,21,21,21,21,31,16,0,3,2,2,14,18,18,14,0,17,17,17,19,21,21,19,0,14,17,20,26,16,17,14,0,0,0,18,21,9,9,22,0,4,12,20,20,4,7,7,0,31,17,1,1,1,1,1,0,0,0,31,10,10,10,25,0,31,1,2,4,2,1,31,0,0,0,30,9,9,9,6,12,20,28,20,20,23,27,24,0,0,16,14,5,4,4,8,0,4,14,14,14,31,4,0,0,14,17,17,31,17,17,14,0,0,14,17,17,17,10,27,0,12,18,4,10,17,17,14,0,0,0,26,21,11,0,0,0,0,10,31,31,31,14,4,0,0,0,14,1,6,17,14,0,14,17,17,17,17,17,17,0,27,27,27,27,27,27,27,0,4,0,0,4,4,4,4,0,4,14,5,5,21,14,4,0,12,2,2,7,2,18,13,0,0,17,14,10,14,17,0,0,17,10,31,4,31,4,4,0,4,4,4,0,4,4,4,0,12,18,4,10,4,9,6,0,8,20,4,31,4,5,2,0,31,17,21,29,21,17,31,0,14,16,30,17,30,0,31,0,0,20,10,5,10,20,0,0,9,21,21,23,21,21,9,0,30,17,17,30,20,18,17,0,31,17,21,17,25,21,31,0,4,2,6,0,0,0,0,6,9,9,9,6,0,0,0,0,4,4,31,4,4,0,31,6,9,4,2,15,0,0,0,7,8,6,8,7,0,0,0,7,9,7,1,9,29,9,24,0,17,17,17,25,23,1,1,0,30,25,25,30,24,24,24,0,0,0,0,6,6,0,0,0,0,0,10,17,21,21,10,2,3,2,2,7,0,0,0,0,14,17,17,17,14,0,31,0,0,5,10,20,10,5,0,17,9,5,10,13,10,30,8,17,9,5,10,21,16,8,28,3,2,3,18,27,20,28,16,0,4,0,4,2,1,17,14,2,4,4,10,17,31,17,17,8,4,4,10,17,31,17,17,4,10,0,14,17,31,17,17,22,9,0,14,17,31,17,17,10,0,4,10,17,31,17,17,4,10,4,14,17,31,17,17,0,28,6,5,29,7,5,29,14,17,1,1,17,14,8,12,2,4,0,31,1,15,1,31,8,4,0,31,1,15,1,31,4,10,0,31,1,15,1,31,0,10,0,31,1,15,1,31,2,4,0,14,4,4,4,14,8,4,0,14,4,4,4,14,4,10,0,14,4,4,4,14,0,10,0,14,4,4,4,14,0,14,18,18,23,18,18,14,22,9,0,17,19,21,25,17,2,4,14,17,17,17,17,14,8,4,14,17,17,17,17,14,4,10,0,14,17,17,17,14,22,9,0,14,17,17,17,14,10,0,14,17,17,17,17,14,0,0,17,10,4,10,17,0,0,14,4,14,21,14,4,14,2,4,17,17,17,17,17,14,8,4,17,17,17,17,17,14,4,10,0,17,17,17,17,14,10,0,17,17,17,17,17,14,8,4,17,10,4,4,4,4,3,2,14,18,18,14,2,7,0,12,18,18,14,18,18,13,2,4,0,14,16,30,17,30,8,4,0,14,16,30,17,30,4,10,0,14,16,30,17,30,22,9,0,14,16,30,17,30,0,10,0,14,16,30,17,30,4,10,4,14,16,30,17,30,0,0,11,20,30,5,21,10,0,0,14,1,17,14,4,6,2,4,0,14,17,31,1,14,8,4,0,14,17,31,1,14,4,10,0,14,17,31,1,14,0,10,0,14,17,31,1,14,2,4,0,4,6,4,4,14,8,4,0,4,6,4,4,14,4,10,0,4,6,4,4,14,0,10,0,4,6,4,4,14,0,5,2,5,8,30,17,14,22,9,0,13,19,17,17,17,2,4,0,14,17,17,17,14,8,4,0,14,17,17,17,14,0,4,10,0,14,17,17,14,0,22,9,0,14,17,17,14,0,10,0,14,17,17,17,14,0,0,4,0,31,0,4,0,0,8,4,14,21,14,4,2,2,4,0,17,17,17,25,22,8,4,0,17,17,17,25,22,4,10,0,17,17,17,25,22,0,10,0,17,17,17,25,22,0,8,4,17,17,30,16,14,0,6,4,12,20,12,4,14,0,10,0,17,17,30,16,14]);var De=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const Me={red:"#ff8080",green:"#80ff80",blue:"#8080ff",yellow:"#ffff80",orange:"#ffcf80",white:"#ffffff",purple:"#ff80ff"};let ke=class extends ae{constructor(){super(...arguments),this.value=!1,this.brightness=1,this.color="red",this.lightColor=null,this.label="",this.flip=!1}get pinInfo(){const e=this.flip?15:25,t=this.flip?25:15;return[{name:"A",x:e,y:42,signals:[],description:"Anode"},{name:"C",x:t,y:42,signals:[],description:"Cathode"}]}static get styles(){return s`
      :host {
        display: inline-block;
      }

      .led-container {
        display: flex;
        flex-direction: column;
        width: 40px;
      }

      .led-label {
        font-size: 10px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -8px;
      }
    `}update(e){e.has("flip")&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}render(){const{color:e,lightColor:t,flip:n}=this,i=t||Me[null===e||void 0===e?void 0:e.toLowerCase()]||e,r=this.brightness?.3+.7*this.brightness:0,a=this.value&&this.brightness>Number.EPSILON,s=n?-1:1;return U`
      <div class="led-container">
        <svg
          width="40"
          height="50"
          transform="scale(${s} 1)"
          version="1.2"
          viewBox="-10 -5 35.456 39.618"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="light1" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <rect x="2.5099" y="20.382" width="2.1514" height="9.8273" fill="#8c8c8c" />
          <path
            d="m12.977 30.269c0-1.1736-0.86844-2.5132-1.8916-3.4024-0.41616-0.3672-1.1995-1.0015-1.1995-1.4249v-5.4706h-2.1614v5.7802c0 1.0584 0.94752 1.8785 1.9462 2.7482 0.44424 0.37584 1.3486 1.2496 1.3486 1.7694"
            fill="#8c8c8c"
          />

          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            opacity=".3"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="#e6e6e6"
            opacity=".5"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            fill="#d1d1d1"
            opacity=".9"
          />
          <g>
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
              opacity=".7"
            />
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
              opacity=".25"
            />
            <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
          </g>
          <polygon
            points="2.2032 16.107 3.1961 16.107 3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648"
            fill="#666666"
          />
          <polygon
            points="11.215 9.0338 7.4117 13.095 11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241"
            fill="#666666"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="${e}"
            opacity=".65"
          />
          <g fill="#ffffff">
            <path
              d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
              opacity=".5"
            />
            <path
              d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
              opacity=".5"
            />
            <path
              d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
              opacity=".5"
            />
          </g>
          <g class="light" style="display: ${a?"":"none"}">
            <ellipse
              cx="8"
              cy="10"
              rx="10"
              ry="10"
              fill="${i}"
              filter="url(#light2)"
              style="opacity: ${r}"
            ></ellipse>
            <ellipse cx="8" cy="10" rx="2" ry="2" fill="white" filter="url(#light1)"></ellipse>
            <ellipse
              cx="8"
              cy="10"
              rx="3"
              ry="3"
              fill="white"
              filter="url(#light1)"
              style="opacity: ${r}"
            ></ellipse>
          </g>
        </svg>
        <span class="led-label">${this.label}</span>
      </div>
    `}};De([ce()],ke.prototype,"value",void 0),De([ce()],ke.prototype,"brightness",void 0),De([ce()],ke.prototype,"color",void 0),De([ce()],ke.prototype,"lightColor",void 0),De([ce()],ke.prototype,"label",void 0),De([ce({type:Boolean})],ke.prototype,"flip",void 0),ke=De([oe("wokwi-led")],ke);var Le=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Pe=class extends ae{constructor(){super(...arguments),this.r=0,this.g=0,this.b=0,this.pinInfo=[{name:"VDD",y:3.5,x:1,number:1,signals:[ve()]},{name:"DOUT",y:14,x:1,number:2,signals:[]},{name:"VSS",y:14,x:21,number:3,signals:[{type:"power",signal:"GND"}]},{name:"DIN",y:3.5,x:21,number:4,signals:[ye()]}]}render(){const{r:e,g:t,b:n}=this,i=e=>e>.001?.7+.3*e:0,r=Math.max(e,t,n),a=Math.min(e,t,n),s=r-a,o=Math.max(1,2-20*s),l=.1+Math.max(2*r-5*s,0),c=e=>e>.005?.1+.9*e:0,d=e=>e>.005?l+e*(1-l):0,_=e=>r?Math.floor(255*Math.min(c(e/r)*o,1)):255,p=`rgb(${_(e)}, ${_(t)}, ${_(n)})`,u=242-(r>.1&&s<.2?Math.floor(50*r*(1-s/.2)):0),m=`rgb(${u}, ${u}, ${u})`;return U`
      <svg
        width="5.6631mm"
        height="5mm"
        version="1.1"
        viewBox="0 0 5.6631 5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="light1" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="${Math.max(.1,r)}" />
        </filter>
        <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
        <rect x=".33308" y="0" width="5" height="5" fill="${m}" />
        <rect x="0" y=".5" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="0" y="3.1" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="5.3" y="3.1" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="5.3" y=".5" width=".35" height=".9" fill="#c3c2c3" />
        <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
        <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
        <g fill="#bfbfbf">
          <path
            d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
          />
          <path
            d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
          />
          <path
            d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
          />
          <path
            d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
          />
        </g>
        <path
          d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
          fill="#666"
        />
        <ellipse
          cx="2.5"
          cy="2.3"
          rx="0.3"
          ry="0.3"
          fill="red"
          opacity=${i(e)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.5"
          cy="3.2"
          rx="0.3"
          ry="0.3"
          fill="green"
          opacity=${i(t)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.3"
          cy="1.45"
          rx="0.3"
          ry="0.3"
          fill="blue"
          opacity=${i(n)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3"
          cy="2.5"
          rx="2.2"
          ry="2.2"
          opacity="${d(r)}"
          fill="${p}"
          filter="url(#light2)"
        ></ellipse>
      </svg>
    `}};Le([ce()],Pe.prototype,"r",void 0),Le([ce()],Pe.prototype,"g",void 0),Le([ce()],Pe.prototype,"b",void 0),Pe=Le([oe("wokwi-neopixel")],Pe);var Fe=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Ue=class extends ae{constructor(){super(...arguments),this.color="red",this.pressed=!1,this.label="",this.pinInfo=[{name:"1.l",x:0,y:13,signals:[]},{name:"2.l",x:0,y:32,signals:[]},{name:"1.r",x:67,y:13,signals:[]},{name:"2.r",x:67,y:32,signals:[]}]}static get styles(){return s`
      :host {
        display: inline-flex;
        flex-direction: column;
      }

      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      button:active .button-circle {
        fill: url(#grad-down);
      }

      .clickable-element {
        cursor: pointer;
      }

      .label {
        width: 0;
        min-width: 100%;
        font-size: 12px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -2px;
      }
    `}render(){const{color:e,label:t}=this,n=this.pressed?"url(#grad-down)":"url(#grad-up)";return U`
      <button
        aria-label="${t} ${e} pushbutton"
        @mousedown=${this.down}
        @mouseup=${e=>!e.ctrlKey&&this.up()}
        @touchstart=${this.down}
        @touchend=${this.up}
        @keydown=${e=>Te.includes(e.key)&&this.down()}
        @keyup=${e=>Te.includes(e.key)&&!e.ctrlKey&&this.up()}
      >
        <svg
          width="17.802mm"
          height="12mm"
          version="1.1"
          viewBox="-3 0 18 12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient id="grad-up" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${e}" offset="0.3" />
              <stop stop-color="${e}" offset="0.5" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="grad-down"
              xlink:href="#grad-up"
              gradientTransform="rotate(180,0.5,0.5)"
            ></linearGradient>
          </defs>
          <rect x="0" y="0" width="12" height="12" rx=".44" ry=".44" fill="#464646" />
          <rect x=".75" y=".75" width="10.5" height="10.5" rx=".211" ry=".211" fill="#eaeaea" />
          <g fill="#1b1b1">
            <circle cx="1.767" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="10.197" r=".37" />
            <circle cx="1.767" cy="10.197" r=".37" />
          </g>
          <g fill="#999" stroke-width="1.0154">
            <path
              d="m12.365 2.426c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
            />
            <path
              d="m12.365 7.5c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
            />
            <path
              d="m-0.35085 4.3526c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
            />
            <path
              d="m-0.35085 9.4266c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
            />
          </g>
          <g class="clickable-element">
            <circle class="button-circle" cx="6" cy="6" r="3.822" fill="${n}" />
            <circle
              cx="6"
              cy="6"
              r="2.9"
              fill="${e}"
              stroke="#2f2f2f"
              stroke-opacity=".47"
              stroke-width=".08"
            />
          </g>
        </svg>
      </button>
      <span class="label">${this.label}</span>
    `}down(){this.pressed||(this.pressed=!0,this.dispatchEvent(new Event("button-press")))}up(){this.pressed&&(this.pressed=!1,this.dispatchEvent(new Event("button-release")))}};Fe([ce()],Ue.prototype,"color",void 0),Fe([ce()],Ue.prototype,"pressed",void 0),Fe([ce()],Ue.prototype,"label",void 0),Ue=Fe([oe("wokwi-pushbutton")],Ue);var Be=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const Ge={[-2]:"#C3C7C0",[-1]:"#F1D863",0:"#000000",1:"#8F4814",2:"#FB0000",3:"#FC9700",4:"#FCF800",5:"#00B800",6:"#0000FF",7:"#A803D6",8:"#808080",9:"#FCFCFC"};let ze=class extends ae{constructor(){super(...arguments),this.value="1000",this.pinInfo=[{name:"1",x:0,y:10,signals:[]},{name:"2",x:58.8,y:10,signals:[]}]}breakValue(e){const t=e>=1e10?9:e>=1e9?8:e>=1e8?7:e>=1e7?6:e>=1e6?5:e>=1e5?4:e>=1e4?3:e>=1e3?2:e>=100?1:e>=10?0:e>=1?-1:-2,n=Math.round(e/10**t);return 0===e?[0,0]:[Math.round(n%100),t]}render(){const{value:e}=this,t=parseFloat(e),[n,i]=this.breakValue(t),r=Ge[Math.floor(n/10)],a=Ge[n%10],s=Ge[i];return U`
      <svg
        width="15.645mm"
        height="3mm"
        version="1.1"
        viewBox="0 0 15.645 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x2="0"
            y1="22.332"
            y2="38.348"
            gradientTransform="matrix(.14479 0 0 .14479 -23.155 -4.0573)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop stop-color="#323232" offset="0" />
            <stop stop-color="#fff" stop-opacity=".42268" offset="1" />
          </linearGradient>
        </defs>
        <rect y="1.1759" width="15.558" height=".63826" fill="#aaa" />
        <g stroke-width=".14479" fill="#d5b597">
          <path
            id="body"
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
          />
          <use xlink:href="#body" fill="url(#a)" opacity=".44886" />
          <rect x="4" y="0" width="1" height="3" fill="${r}" clip-path="url(#g)" />

          <path d="m6 0.29411v2.4117h0.96v-2.4117z" fill="${a}" />
          <path d="m7.8 0.29411v2.4117h0.96v-2.4117z" fill="${s}" />

          <rect x="10.69" y="0" width="1" height="3" fill="#F1D863" clip-path="url(#g)" />
          <clippath id="g">
            <use xlink:href="#body" />
          </clippath>
        </g>
      </svg>
    `}};Be([ce()],ze.prototype,"value",void 0),ze=Be([oe("wokwi-resistor")],ze);var Ye=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const $e=[10.7,25,39.3,53.6],He=[7,22,37,52];function Ve(e){return!isNaN(parseFloat(e))}let qe=class extends ae{constructor(){super(...arguments),this.columns="4",this.connector=!1,this.keys=["1","2","3","A","4","5","6","B","7","8","9","C","*","0","#","D"],this.pressedKeys=new Set}get pinInfo(){switch(this.columns){case"3":return[{name:"R1",x:76.5,y:338,signals:[]},{name:"R2",x:86,y:338,signals:[]},{name:"R3",x:95.75,y:338,signals:[]},{name:"R4",x:105.25,y:338,signals:[]},{name:"C1",x:115,y:338,signals:[]},{name:"C2",x:124.5,y:338,signals:[]},{name:"C3",x:134,y:338,signals:[]}];default:return[{name:"R1",x:100,y:338,signals:[]},{name:"R2",x:110,y:338,signals:[]},{name:"R3",x:119.5,y:338,signals:[]},{name:"R4",x:129,y:338,signals:[]},{name:"C1",x:138.5,y:338,signals:[]},{name:"C2",x:148,y:338,signals:[]},{name:"C3",x:157.75,y:338,signals:[]},{name:"C4",x:167.5,y:338,signals:[]}]}}update(e){e.has("columns")&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}renderKey(e,t){var n;const i=null!==(n=this.keys[4*e+t])&&void 0!==n?n:"",r=Ve(i)?"blue-key":"red-key",a=i.toUpperCase();return B`<g
      transform="translate(${He[t]} ${$e[e]})"
      tabindex="0"
      class=${r}
      data-key-name=${a}
      @blur=${e=>{this.up(i,e.currentTarget)}}
      @mousedown=${()=>this.down(i)}
      @mouseup=${()=>this.up(i)}
      @touchstart=${()=>this.down(i)}
      @touchend=${()=>this.up(i)}
      @keydown=${e=>Te.includes(e.key)&&this.down(i,e.currentTarget)}
      @keyup=${e=>Te.includes(e.key)&&this.up(i,e.currentTarget)}
    >
      <use xlink:href="#key" />
      <text x="5.6" y="8.1">${i}</text>
    </g>`}render(){const{connector:e}=this,t="4"===this.columns,n=15,i=2.54,r=t?70.336:70.336-n,a=t?8*i:7*i,s=76+(e?15:0);return U`
      <style>
        text {
          fill: #dfe2e5;
          user-select: none;
        }

        g[tabindex] {
          cursor: pointer;
        }

        g[tabindex]:focus,
        g[tabindex]:active {
          stroke: white;
          outline: none;
        }

        .blue-key:focus,
        .red-key:focus {
          filter: url(#shadow);
        }

        .blue-key:active,
        .blue-key.pressed {
          fill: #4e50d7;
        }

        .red-key:active,
        .red-key.pressed {
          fill: #ab040b;
        }

        g[tabindex]:focus text {
          stroke: none;
        }

        g[tabindex]:active text,
        .blue-key.pressed text,
        .red-key.pressed text {
          fill: white;
          stroke: none;
        }
      </style>

      <svg
        width="${r}mm"
        height="${s}mm"
        version="1.1"
        viewBox="0 0 ${r} ${s}"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
        @keydown=${e=>this.keyStrokeDown(e.key)}
        @keyup=${e=>this.keyStrokeUp(e.key)}
      >
        <defs>
          <rect
            id="key"
            width="11.2"
            height="11"
            rx="1.4"
            ry="1.4"
            stroke="#b1b5b9"
            stroke-width=".75"
          />
          <pattern id="wires" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect width="2.54" height="8" fill="#eee" />
            <rect x="0.77" width="1" height="6" fill="#d9d5bc" />
            <circle cx="1.27" cy="6" r="0.75" fill="#d9d5bc" />
            <rect x="0.52" y="6" width="1.5" height="2" fill="#d9d5bc" />
          </pattern>
          <pattern id="wires-marks" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect x="0.52" y="6" width="1.5" height="2" fill="#746d41" />
          </pattern>
          ${he}
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="#ffff99" />
          </filter>
        </defs>

        <!-- Keypad outline -->
        <rect x="0" y="0" width="${r}" height="76" rx="5" ry="5" fill="#454449" />
        <rect
          x="2.78"
          y="3.25"
          width="${t?65:65-n}"
          height="68.6"
          rx="3.5"
          ry="3.5"
          fill="none"
          stroke="#b1b5b9"
          stroke-width="1"
        />

        <!-- Connector -->
        ${e?B`
            <g transform="translate(${(r-a)/2}, 76)">
              <rect width="${a}" height="8" fill="url(#wires)" />
              <rect width="10.16" height="8" fill="url(#wires-marks)" />
              <rect y="8" width="${a}" height="7" fill="#333" />
              <rect transform="translate(0, 12)" width="${a}" height="2.54" fill="url(#pins-female)" />
            </g>
          `:null}

        <!-- Blue keys -->
        <g fill="#4e90d7">
          <g>${this.renderKey(0,0)}</g>
          <g>${this.renderKey(0,1)}</g>
          <g>${this.renderKey(0,2)}</g>
          <g>${this.renderKey(1,0)}</g>
          <g>${this.renderKey(1,1)}</g>
          <g>${this.renderKey(1,2)}</g>
          <g>${this.renderKey(2,0)}</g>
          <g>${this.renderKey(2,1)}</g>
          <g>${this.renderKey(2,2)}</g>
          <g>${this.renderKey(3,1)}</g>
        </g>

        <!-- Red keys -->
        <g fill="#e94541">
          <g>${this.renderKey(3,0)}</g>
          <g>${this.renderKey(3,2)}</g>
          ${t&&B`
              <g>${this.renderKey(0,3)}</g>
              <g>${this.renderKey(1,3)}</g>
              <g>${this.renderKey(2,3)}</g>
              <g>${this.renderKey(3,3)}</g>
          `}
        </g>
      </svg>
    `}keyIndex(e){const t=this.keys.indexOf(e);return{row:Math.floor(t/4),column:t%4}}down(e,t){this.pressedKeys.has(e)||(t&&t.classList.add("pressed"),this.pressedKeys.add(e),this.dispatchEvent(new CustomEvent("button-press",{detail:Object.assign({key:e},this.keyIndex(e))})))}up(e,t){this.pressedKeys.has(e)&&(t&&t.classList.remove("pressed"),this.pressedKeys.delete(e),this.dispatchEvent(new CustomEvent("button-release",{detail:Object.assign({key:e},this.keyIndex(e))})))}keyStrokeDown(e){var t;const n=e.toUpperCase(),i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`[data-key-name="${n}"]`);i&&this.down(n,i)}keyStrokeUp(e){var t,n;const i=e.toUpperCase(),r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`[data-key-name="${i}"]`),a=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelectorAll(".pressed");"Shift"===e&&(null===a||void 0===a||a.forEach((e=>{const t=e.dataset.keyName;t&&this.up(t,e)}))),r&&this.up(i,r)}};Ye([ce()],qe.prototype,"columns",void 0),Ye([ce()],qe.prototype,"connector",void 0),Ye([ce({type:Array})],qe.prototype,"keys",void 0),qe=Ye([oe("wokwi-membrane-keypad")],qe);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const je={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=e=>(...t)=>({_$litDirective$:e,values:t});class Ke{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qe=We(class extends Ke{constructor(e){var t;if(super(e),e.type!==je.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const i=e[n];return null==i?t:t+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.vt){this.vt=new Set;for(const e in t)this.vt.add(e);return this.render(t)}this.vt.forEach((e=>{null==t[e]&&(this.vt.delete(e),e.includes("-")?n.removeProperty(e):n[e]="")}));for(const i in t){const e=t[i];null!=e&&(this.vt.add(i),i.includes("-")?n.setProperty(i,e):n[i]=e)}return G}}),Xe=(e,t,n)=>{const i=Math.min(n,t);return Math.max(i,e)};function Ze(e,t){const n=t.transformPoint({x:e.left,y:e.top}),i=t.transformPoint({x:e.right,y:e.top}),r=t.transformPoint({x:e.left,y:e.bottom}),a=t.transformPoint({x:e.right,y:e.bottom}),s=Math.min(n.x,i.x,r.x,a.x),o=Math.min(n.y,i.y,r.y,a.y),l=Math.max(n.x,i.x,r.x,a.x),c=Math.max(n.y,i.y,r.y,a.y);return new DOMRect(s,o,l-s,c-o)}function Je(e,t,n){var i,r;const{userAgent:a}=navigator,s=a.indexOf("Firefox")>=0||a.indexOf("Epiphany")>=0;if(s){const r=e.getCTM(),a=null===t||void 0===t?void 0:t.getCTM(),s=null===t||void 0===t?void 0:t.getBoundingClientRect(),o=null===(i=null===t||void 0===t?void 0:t.ownerSVGElement)||void 0===i?void 0:i.getBoundingClientRect();if(!s||!o||!a||!r)return null;const l=o.x+o.width/2,c=o.y+o.height/2,d=l-(s.x+s.width/2),_=c-(s.y+s.height/2),p=Math.atan2(_,d)/Math.PI*180,u=(new DOMMatrix).rotate(p),m=Ze(n,u),g=m.width/s.width,h=m.height/s.height,f=a.inverse().multiply(r);return u.inverse().translate(m.left,m.top).multiply(f.inverse()).scale(g,h).translate(-s.left,-s.top)}return(null===(r=e.getScreenCTM())||void 0===r?void 0:r.inverse())||null}var et=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const tt={x:9.91,y:8.18};let nt=class extends ae{constructor(){super(...arguments),this.min=0,this.max=1023,this.value=0,this.step=1,this.startDegree=-135,this.endDegree=135,this.pressed=!1,this.pageToKnobMatrix=null,this.pinInfo=[{name:"GND",x:29,y:68.5,number:1,signals:[{type:"power",signal:"GND"}]},{name:"SIG",x:39,y:68.5,number:2,signals:[fe(0)]},{name:"VCC",x:49,y:68.5,number:3,signals:[{type:"power",signal:"VCC"}]}]}static get styles(){return s`
      #rotating {
        transform-origin: 10px 8px;
        transform: rotate(var(--knob-angle, 0deg));
      }

      svg text {
        font-size: 1px;
        line-height: 1.25;
        letter-spacing: 0px;
        word-spacing: 0px;
        fill: #ffffff;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #knob {
        stroke: #ccdae3;
        filter: url(#outline);
      }
    `}mapToMinMax(e,t,n){return e*(n-t)+t}percentFromMinMax(e,t,n){return(e-t)/(n-t)}render(){const e=Xe(0,1,this.percentFromMinMax(this.value,this.min,this.max)),t=(this.endDegree-this.startDegree)*e+this.startDegree;return U`
      <input
        tabindex="0"
        type="range"
        class="hide-input"
        max="${this.max}"
        min="${this.min}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        @input="${this.onValueChange}"
      />
      <svg
        role="slider"
        width="20mm"
        height="20mm"
        version="1.1"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="${this.focusInput}"
        @mousedown=${this.down}
        @mousemove=${this.move}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchmove=${this.move}
        @touchend=${this.up}
        style=${Qe({"--knob-angle":t+"deg"})}
      >
        <defs>
          <filter id="outline">
            <feDropShadow id="glow" dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
          </filter>
        </defs>
        <rect
          x=".15"
          y=".15"
          width="19.5"
          height="19.5"
          ry="1.23"
          fill="#045881"
          stroke="#045881"
          stroke-width=".30"
        />
        <rect x="5.4" y=".70" width="9.1" height="1.9" fill="#ccdae3" stroke-width=".15" />
        <ellipse
          id="knob"
          cx=${tt.x}
          cy=${tt.y}
          rx="7.27"
          ry="7.43"
          fill="#e4e8eb"
          stroke-width=".15"
        />
        <rect x="6" y="17" width="8" height="2" fill-opacity="0" stroke="#fff" stroke-width=".30" />
        <g stroke-width=".15">
          <text x="6.21" y="16.6">GND</text>
          <text x="9.2" y="16.63">SIG</text>
          <text x="11.5" y="16.59">VCC</text>
        </g>
        <g fill="#fff" stroke-width=".15">
          <ellipse cx="1.68" cy="1.81" rx=".99" ry=".96" />
          <ellipse cx="1.48" cy="18.37" rx=".99" ry=".96" />
          <ellipse cx="17.97" cy="18.47" rx=".99" ry=".96" />
          <ellipse cx="18.07" cy="1.91" rx=".99" ry=".96" />
        </g>
        <g fill="#b3b1b0" stroke-width=".15">
          <ellipse cx="7.68" cy="18" rx=".61" ry=".63" />
          <ellipse cx="10.22" cy="18" rx=".61" ry=".63" />
          <ellipse cx="12.76" cy="18" rx=".61" ry=".63" />
        </g>
        <ellipse cx="9.95" cy="8.06" rx="6.60" ry="6.58" fill="#c3c2c3" stroke-width=".15" />
        <rect id="rotating" x="10" y="2" width=".42" height="3.1" stroke-width=".15" />
        <rect x="0" y="9.5" width="1" height="1" fill="none" id="firefox-workaround" />
      </svg>
    `}focusInput(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".hide-input");null===t||void 0===t||t.focus()}onValueChange(e){const t=e.target;this.updateValue(parseFloat(t.value))}down(e){(0===e.button||window.navigator.maxTouchPoints)&&(this.pressed=!0,e.stopPropagation(),e.preventDefault(),this.updateKnobMatrix())}move(e){const{pressed:t}=this;t&&this.rotateHandler(e)}up(){this.pressed=!1}updateKnobMatrix(){var e,t;const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#knob"),i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#firefox-workaround");this.pageToKnobMatrix=n&&i?Je(n,i,new DOMRect(0,9.5,1,1)):null}rotateHandler(e){if(e.stopPropagation(),e.preventDefault(),!this.pageToKnobMatrix)return;const t="touchmove"===e.type,n=t?e.touches[0].pageX:e.pageX,i=t?e.touches[0].pageY:e.pageY,r=new DOMPointReadOnly(n,i).matrixTransform(this.pageToKnobMatrix),a=tt.x-r.x,s=tt.y-r.y;let o=Math.round(180*Math.atan2(s,a)/Math.PI);o<0&&(o+=360),o-=90,a>0&&s<=0&&o>0&&(o-=360),o=Xe(this.startDegree,this.endDegree,o);const l=this.percentFromMinMax(o,this.startDegree,this.endDegree),c=this.mapToMinMax(l,this.min,this.max);this.updateValue(c)}updateValue(e){const t=Xe(this.min,this.max,e),n=Math.round(t/this.step)*this.step;this.value=Math.round(100*n)/100,this.dispatchEvent(new InputEvent("input",{detail:this.value}))}};et([ce({type:Number})],nt.prototype,"min",void 0),et([ce({type:Number})],nt.prototype,"max",void 0),et([ce()],nt.prototype,"value",void 0),et([ce()],nt.prototype,"step",void 0),et([ce()],nt.prototype,"startDegree",void 0),et([ce()],nt.prototype,"endDegree",void 0),nt=et([oe("wokwi-potentiometer")],nt);var it=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const rt=5.66,at=5;let st=class extends ae{constructor(){super(...arguments),this.rows=8,this.cols=8,this.rowSpacing=1,this.colSpacing=1,this.blurLight=!1,this.animation=!1,this.pixelElements=null,this.animationFrame=null,this.animateStep=()=>{const e=(new Date).getTime(),{rows:t,cols:n}=this,i=e=>e%2e3>1e3?1-e%1e3/1e3:e%1e3/1e3;for(let r=0;r<t;r++)for(let a=0;a<n;a++){const s=Math.sqrt((r-t/2+.5)**2+(a-n/2+.5)**2);this.setPixel(r,a,{r:i(100*s+e),g:i(100*s+e+200),b:i(100*s+e+400)})}this.animationFrame=requestAnimationFrame(this.animateStep)}}get pinInfo(){const{cols:e,rows:t,rowSpacing:n,colSpacing:i}=this,r=2.54,a=r*ue,s=e*(i+rt)/2*ue,o=t*(n+at)*ue;return[{name:"GND",x:s-1.5*a,y:o,signals:[ye()]},{name:"VCC",x:s-.5*a,y:o,signals:[ve()]},{name:"DIN",x:s+.5*a,y:o,signals:[]},{name:"DOUT",x:s+1.5*a,y:o,signals:[]}]}static get styles(){return s`
      :host {
        display: flex;
      }
    `}getPixelElements(){return this.shadowRoot?(this.pixelElements||(this.pixelElements=Array.from(this.shadowRoot.querySelectorAll("g.pixel")).map((e=>Array.from(e.querySelectorAll("ellipse"))))),this.pixelElements):null}reset(){const e=this.getPixelElements();if(e)for(const[t,n,i,r]of e)t.style.opacity="0",n.style.opacity="0",i.style.opacity="0",r.style.opacity="0"}setPixel(e,t,n){const i=this.getPixelElements();if(e<0||t<0||e>=this.rows||t>=this.cols||!i)return null;const{r:r,g:a,b:s}=n,o=e=>e>.001?.7+.3*e:0,l=Math.max(r,a,s),c=Math.min(r,a,s),d=l-c,_=Math.max(1,2-20*d),p=.1+Math.max(2*l-5*d,0),u=e=>e>.005?.1+.9*e:0,m=e=>e>.005?p+e*(1-p):0,g=e=>l?Math.floor(255*Math.min(u(e/l)*_,1)):255,h=`rgb(${g(r)}, ${g(a)}, ${g(s)})`,f=i[e*this.cols+t],[E,S,b,y]=f;E.style.opacity=o(r).toFixed(2),S.style.opacity=o(a).toFixed(2),b.style.opacity=o(s).toFixed(2),y.style.opacity=m(l).toFixed(2),y.style.fill=h}update(e){(e.has("rows")||e.has("cols")||e.has("rowSpacing")||e.has("colSpacing"))&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}updated(){this.animation&&!this.animationFrame?this.animationFrame=requestAnimationFrame(this.animateStep):!this.animation&&this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}renderPixels(){const e=[],{cols:t,rows:n,colSpacing:i,rowSpacing:r}=this,a=rt+i,s=at+r;for(let o=0;o<n;o++)for(let n=0;n<t;n++)e.push(B`
        <g transform="translate(${a*n}, ${s*o})" class="pixel">
          <ellipse cx="2.5" cy="2.3" rx="0.3" ry="0.3" fill="red" opacity="0" />
          <ellipse cx="3.5" cy="3.2" rx="0.3" ry="0.3" fill="green" opacity="0" />
          <ellipse cx="3.3" cy="1.45" rx="0.3" ry="0.3" fill="blue" opacity="0" />
          <ellipse cx="3" cy="2.5" rx="2.2" ry="2.2" opacity="0" />
        </g>`);return this.pixelElements=null,e}render(){const{cols:e,rows:t,rowSpacing:n,colSpacing:i,blurLight:r}=this,a=rt+i,s=at+n,o=rt*e+i*(e-1),l=at*t+n*(t-1);return U`
      <svg
        width="${o}mm"
        height="${l}mm"
        version="1.1"
        viewBox="0 0 ${o} ${l}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="blurLight" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        <pattern id="pixel" width="${a}" height="${s}" patternUnits="userSpaceOnUse">
          <rect x=".33308" y="0" width="5" height="5" fill="#fff" />
          <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
          <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
          <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
          <g fill="#bfbfbf">
            <path
              d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
            />
            <path
              d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
            />
            <path
              d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
            />
            <path
              d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
            />
          </g>
          <path
            d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
            fill="#666"
          />
        </pattern>
        <rect width="${o}" height="${l}" fill="url(#pixel)"></rect>
        <g style="${r?"filter: url(#blurLight)":""}">${this.renderPixels()}</g>
      </svg>
    `}};it([ce()],st.prototype,"rows",void 0),it([ce()],st.prototype,"cols",void 0),it([ce({attribute:"rowspacing"})],st.prototype,"rowSpacing",void 0),it([ce({attribute:"colspacing"})],st.prototype,"colSpacing",void 0),it([ce()],st.prototype,"blurLight",void 0),it([ce()],st.prototype,"animation",void 0),st=it([oe("wokwi-neopixel-matrix")],st);var ot=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let lt=class extends ae{constructor(){super(),this.width=150,this.height=116,this.screenWidth=128,this.screenHeight=64,this.canvas=void 0,this.ctx=null,this.pinInfo=[{name:"DATA",x:36.5,y:12.5,signals:[Ee("SDA")]},{name:"CLK",x:45.5,y:12.5,signals:[Ee("SCL")]},{name:"DC",x:54.5,y:12.5,signals:[]},{name:"RST",x:64.5,y:12.5,signals:[]},{name:"CS",x:74.5,y:12.5,signals:[]},{name:"3V3",x:83.5,y:12.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"VIN",x:93.5,y:12.5,signals:[{type:"power",signal:"VCC"}]},{name:"GND",x:103.5,y:12,signals:[{type:"power",signal:"GND"}]}],this.imageData=new ImageData(this.screenWidth,this.screenHeight)}static get styles(){return s`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 11.5px;
        top: 27px;
      }

      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `}redraw(){var e;null===(e=this.ctx)||void 0===e||e.putImageData(this.imageData,0,0)}initContext(){var e,t;this.canvas=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("canvas"),this.ctx=null===(t=this.canvas)||void 0===t?void 0:t.getContext("2d")}firstUpdated(){var e;this.initContext(),null===(e=this.ctx)||void 0===e||e.putImageData(this.imageData,0,0)}updated(){this.imageData&&this.redraw()}render(){const{width:e,height:t,screenWidth:n,screenHeight:i}=this;return U` <div class="container">
      <svg width="${e}" height="${t}" xmlns="http://www.w3.org/2000/svg">
        <rect stroke="#BE9B72" fill="#025CAF" x=".5" y=".5" width="148" height="114" rx="13" />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="130" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="130" cy="96" r="5.5" />
          <circle cx="6" cy="96" r="5.5" />
        </g>

        <!-- 128 x 64 screen -->
        <rect x="11.4" y="26" fill="#1A1A1A" width="${n}" height="${i}" />

        <!-- All texts -->
        <text
          fill="#FFF"
          text-anchor="middle"
          font-size="5"
          font-weight="300"
          font-family="monospace"
        >
          <tspan x="37" y="8">Data</tspan>
          <tspan x="56" y="8">SA0</tspan>
          <tspan x="78" y="8">CS</tspan>
          <tspan x="97" y="8">Vin</tspan>
          <tspan x="41" y="23">C1k</tspan>
          <tspan x="53" y="23">DC</tspan>
          <tspan x="64" y="23">Rst</tspan>
          <tspan x="80" y="23">3v3</tspan>
          <tspan x="99" y="23">Gnd</tspan>
        </text>

        <!-- Star -->
        <path
          fill="#FFF"
          d="M115.5 10.06l-1.59 2.974-3.453.464 2.495 2.245-.6 3.229 3.148-1.528 3.148 1.528-.6-3.23 2.495-2.244-3.453-.464-1.59-2.974z"
          stroke="#FFF"
        />

        <!-- PINS -->
        <g transform="translate(33 9)" fill="#9D9D9A" stroke-width="0.4">
          <circle stroke="#262626" cx="70.5" cy="3.5" r="3.5" />
          <circle stroke="#007ADB" cx="60.5" cy="3.5" r="3.5" />
          <circle stroke="#9D5B96" cx="50.5" cy="3.5" r="3.5" />
          <circle stroke="#009E9B" cx="41.5" cy="3.5" r="3.5" />
          <circle stroke="#E8D977" cx="31.5" cy="3.5" r="3.5" />
          <circle stroke="#C08540" cx="21.5" cy="3.5" r="3.5" />
          <circle stroke="#B4AEAB" cx="12.5" cy="3.5" r="3.5" />
          <circle stroke="#E7DBDB" cx="3.5" cy="3.5" r="3.5" />
        </g>
      </svg>
      <canvas width="${n}" height="${i}" class="pixelated"></canvas>
    </div>`}};ot([ce()],lt.prototype,"imageData",void 0),lt=ot([oe("wokwi-ssd1306")],lt);var ct=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let dt=class extends ae{constructor(){super(...arguments),this.hasSignal=!1,this.pinInfo=[{name:"1",x:27,y:84,signals:[]},{name:"2",x:37,y:84,signals:[]}]}static get styles(){return s`
      :host {
        display: inline-block;
      }

      .buzzer-container {
        display: flex;
        flex-direction: column;
        width: 75px;
      }

      .music-note {
        position: relative;
        left: 40px;
        animation-duration: 1.5s;
        animation-name: animate-note;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: scale(1.5);
        fill: blue;
        offset-path: path(
          'm0 0c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
        );
        offset-rotate: 0deg;
      }

      @keyframes animate-note {
        0% {
          offset-distance: 0%;
          opacity: 0;
        }
        10% {
          offset-distance: 10%;
          opacity: 1;
        }
        75% {
          offset-distance: 75%;
          opacity: 1;
        }
        100% {
          offset-distance: 100%;
          opacity: 0;
        }
      }
    `}render(){const e=this.hasSignal;return U`
      <div class="buzzer-container">
        <svg
          class="music-note"
          style="visibility: ${e?"":"hidden"}"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
        >
          <path
            d="M8 0c-5 0-6 1-6 1v4.09c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-3.97c.73-.23 1.99-.44 4-.5v2.06c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-5.5z"
          />
        </svg>

        <svg
          width="17mm"
          height="20mm"
          version="1.1"
          viewBox="0 0 17 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m7.23 16.5v3.5" fill="none" stroke="#000" stroke-width=".5" />
          <path d="m9.77 16.5v3.5" fill="#f00" stroke="#f00" stroke-width=".5" />
          <g stroke="#000">
            <g>
              <ellipse cx="8.5" cy="8.5" rx="8.15" ry="8.15" fill="#1a1a1a" stroke-width=".7" />
              <circle
                cx="8.5"
                cy="8.5"
                r="6.3472"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
              <circle
                cx="8.5"
                cy="8.5"
                r="4.3488"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
            </g>
            <circle cx="8.5" cy="8.5" r="1.3744" fill="#ccc" stroke-width=".25" />
          </g>
        </svg>
      </div>
    `}};ct([ce()],dt.prototype,"hasSignal",void 0),dt=ct([oe("wokwi-buzzer")],dt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _t=We(class extends Ke{constructor(e){var t;if(super(e),e.type!==je.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,i;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.st)||void 0===n?void 0:n.has(e))&&this.nt.add(e);return this.render(t)}const r=e.element.classList;this.nt.forEach((e=>{e in t||(r.remove(e),this.nt.delete(e))}));for(const a in t){const e=!!t[a];e===this.nt.has(a)||(null===(i=this.st)||void 0===i?void 0:i.has(a))||(e?(r.add(a),this.nt.add(a)):(r.remove(a),this.nt.delete(a)))}return G}});var pt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let ut=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"GND",x:122,y:286,signals:[ye()]},{name:"DIAL",x:131.6,y:286,signals:[]},{name:"PULSE",x:141.2,y:286,signals:[]}],this.digit="",this.stylesMapping={},this.classes={"rotate-path":!0},this.degrees=[320,56,87,115,143,173,204,232,260,290]}static get styles(){return s`
      .text {
        cursor: grab;
        user-select: none;
      }
      input:focus + svg #container {
        stroke: #4e50d7;
        stroke-width: 3;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      .rotate-path {
        transform-origin: 133px 133px;
        transition: transform 1000ms ease-in;
      }
      .dialer-anim {
        transform: rotate(var(--angle));
      }
    `}removeDialerAnim(){this.classes=Object.assign(Object.assign({},this.classes),{"dialer-anim":!1}),this.stylesMapping={"--angle":0},this.requestUpdate()}dial(e){this.digit=e,this.addDialerAnim(e)}onValueChange(e){const t=e.target;this.digit=parseInt(t.value),this.dial(this.digit),t.value=""}addDialerAnim(e){requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("dial-start",{detail:{digit:this.digit}})),this.classes=Object.assign(Object.assign({},this.classes),{"dialer-anim":!0});const t=this.degrees[e];this.stylesMapping={"--angle":t+"deg"},this.requestUpdate()}))}focusInput(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".hide-input");null===t||void 0===t||t.focus()}render(){return U`
      <input
        tabindex="0"
        type="number"
        class="hide-input"
        value="${this.digit}"
        @input="${this.onValueChange}"
      />
      <svg width="266" height="286" @click="${this.focusInput}" xmlns="http://www.w3.org/2000/svg">
        <!-- Pins -->
        <g fill="#9f9f9f" stroke-width=".987">
          <path
            d="m123.4 266c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m133 266c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m142.6 266c0-0.377-0.15-0.739-0.417-1.01s-0.629-0.417-1.01-0.417c-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.419 0.419h2.01c0.231 0 0.419-0.188 0.419-0.419v-25.8z"
          />
        </g>
        <g transform="translate(1 1)">
          <circle stroke="#979797" stroke-width="3" fill="#1F1F1F" cx="133" cy="133" r="131" />
          <circle stroke="#fff" stroke-width="2" fill="#D8D8D8" cx="133" cy="133" r="72" />
          <path
            class=${_t(this.classes)}
            @transitionstart="${()=>{this.classes["dialer-anim"]||this.dispatchEvent(new CustomEvent("dial",{detail:{digit:this.digit}}))}}"
            @transitionend="${()=>{this.classes["dialer-anim"]||this.dispatchEvent(new CustomEvent("dial-end",{detail:{digit:this.digit}})),this.removeDialerAnim()}}"
            d="M133.5,210 C146.478692,210 157,220.521308 157,233.5 C157,246.478692 146.478692,257 133.5,257 C120.521308,257 110,246.478692 110,233.5 C110,220.521308 120.521308,210 133.5,210 Z M83.5,197 C96.4786916,197 107,207.521308 107,220.5 C107,233.478692 96.4786916,244 83.5,244 C70.5213084,244 60,233.478692 60,220.5 C60,207.521308 70.5213084,197 83.5,197 Z M45.5,163 C58.4786916,163 69,173.521308 69,186.5 C69,199.478692 58.4786916,210 45.5,210 C32.5213084,210 22,199.478692 22,186.5 C22,173.521308 32.5213084,163 45.5,163 Z M32.5,114 C45.4786916,114 56,124.521308 56,137.5 C56,150.478692 45.4786916,161 32.5,161 C19.5213084,161 9,150.478692 9,137.5 C9,124.521308 19.5213084,114 32.5,114 Z M234.5,93 C247.478692,93 258,103.521308 258,116.5 C258,129.478692 247.478692,140 234.5,140 C221.521308,140 211,129.478692 211,116.5 C211,103.521308 221.521308,93 234.5,93 Z M41.5,64 C54.4786916,64 65,74.5213084 65,87.5 C65,100.478692 54.4786916,111 41.5,111 C28.5213084,111 18,100.478692 18,87.5 C18,74.5213084 28.5213084,64 41.5,64 Z M214.5,46 C227.478692,46 238,56.5213084 238,69.5 C238,82.4786916 227.478692,93 214.5,93 C201.521308,93 191,82.4786916 191,69.5 C191,56.5213084 201.521308,46 214.5,46 Z M76.5,26 C89.4786916,26 100,36.5213084 100,49.5 C100,62.4786916 89.4786916,73 76.5,73 C63.5213084,73 53,62.4786916 53,49.5 C53,36.5213084 63.5213084,26 76.5,26 Z M173.5,15 C186.478692,15 197,25.5213084 197,38.5 C197,51.4786916 186.478692,62 173.5,62 C160.521308,62 150,51.4786916 150,38.5 C150,25.5213084 160.521308,15 173.5,15 Z M123.5,7 C136.478692,7 147,17.5213084 147,30.5 C147,43.4786916 136.478692,54 123.5,54 C110.521308,54 100,43.4786916 100,30.5 C100,17.5213084 110.521308,7 123.5,7 Z"
            id="slots"
            stroke="#fff"
            fill-opacity="0.5"
            fill="#D8D8D8"
            style=${Qe(this.stylesMapping)}
          ></path>
        </g>
        <circle id="container" fill-opacity=".5" fill="#070707" cx="132.5" cy="132.5" r="132.5" />
        <g class="text" font-family="Marker Felt, monospace" font-size="21" fill="#FFF">
          <text @mouseup=${()=>this.dial(0)} x="129" y="243">0</text>
          <text @mouseup=${()=>this.dial(9)} x="78" y="230">9</text>
          <text @mouseup=${()=>this.dial(8)} x="40" y="194">8</text>
          <text @mouseup=${()=>this.dial(7)} x="28" y="145">7</text>
          <text @mouseup=${()=>this.dial(6)} x="35" y="97">6</text>
          <text @mouseup=${()=>this.dial(5)} x="72" y="58">5</text>
          <text @mouseup=${()=>this.dial(4)} x="117" y="41">4</text>
          <text @mouseup=${()=>this.dial(3)} x="168" y="47">3</text>
          <text @mouseup=${()=>this.dial(2)} x="210" y="79">2</text>
          <text @mouseup=${()=>this.dial(1)} x="230" y="126">1</text>
        </g>
        <path
          d="M182.738529,211.096297 L177.320119,238.659185 L174.670528,252.137377 L188.487742,252.137377 L182.738529,211.096297 Z"
          stroke="#979797"
          fill="#D8D8D8"
          transform="translate(181.562666, 230.360231) rotate(-22.000000) translate(-181.562666, -230.360231)"
        ></path>
      </svg>
    `}};ut=pt([oe("wokwi-rotary-dialer")],ut);var mt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let gt=class extends ae{constructor(){super(...arguments),this.angle=0,this.horn="single",this.hornColor="#ccc",this.pinInfo=[{name:"GND",x:0,y:50,signals:[{type:"power",signal:"GND"}]},{name:"V+",x:0,y:59.5,signals:[{type:"power",signal:"VCC"}]},{name:"PWM",x:0,y:69,signals:[{type:"pwm"}]}]}hornPath(){switch(this.horn){case"cross":return"m119.54 50.354h-18.653v-18.653a8.4427 8.4427 0 0 0-8.4427-8.4427h-1.9537a8.4427 8.4427 0 0 0-8.4427 8.4427v18.653h-18.653a8.4427 8.4427 0 0 0-8.4427 8.4427v1.9537a8.4427 8.4427 0 0 0 8.4427 8.4427h18.653v18.653a8.4427 8.4427 0 0 0 8.4427 8.4427h1.9537a8.4427 8.4427 0 0 0 8.4427-8.4427v-18.653h18.653a8.4427 8.4427 0 0 0 8.4426-8.4427v-1.9537a8.4427 8.4427 0 0 0-8.4426-8.4427zm-57.447 12.136a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm20.621-34.813a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 8.7543a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 55.438a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm0-8.7543a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm5.9215-17.42a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843zm14.704-3.205a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165z";case"double":return"m101.63 57.808c-0.0768-0.48377-0.16978-0.8838-0.23258-1.1629l-4.112-51.454c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.1004 51.447c-0.07443 0.28607-0.16746 0.69774-0.24421 1.1629a12.473 12.473 0 0 0 0 3.9306c0.07675 0.48377 0.16978 0.8838 0.24421 1.1629l4.1004 51.461c0 2.8654 2.6026 5.1912 5.8145 5.1912s5.8145-2.3258 5.8145-5.1912l4.1004-51.447c0.0744-0.28607 0.16746-0.69774 0.23258-1.1629a12.473 12.473 0 0 0 0.0116-3.9376zm-4.2376 7.8868a8.3426 8.3426 0 0 1-3.5375 2.1072c-0.25816 0.07443-0.52098 0.13955-0.7838 0.19072a8.7217 8.7217 0 0 1-1.1978 0.1442c-0.26747 0.01163-0.53726 0.01163-0.80473 0a8.7217 8.7217 0 0 1-1.1978-0.1442c-0.26282-0.05117-0.52563-0.11629-0.78379-0.19072a8.3729 8.3729 0 0 1 0-16.048c0.25816-0.07675 0.52098-0.13955 0.78379-0.19072a8.7217 8.7217 0 0 1 1.1978-0.1442c0.26747-0.01163 0.53726-0.01163 0.80473 0a8.7217 8.7217 0 0 1 1.1978 0.1442c0.26282 0.05117 0.52563 0.11396 0.7838 0.19072a8.3729 8.3729 0 0 1 3.5375 13.955zm-5.9215-54.996a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 72.565a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.3729a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791z";case"single":default:return"m101.6 59.589-4.3167-54.166c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.3167 54.166a8.3264 8.3264 0 0 0-0.10234 1.2792c0 5.047 4.5818 9.1381 10.234 9.1381s10.234-4.0911 10.234-9.1381a8.3264 8.3264 0 0 0-0.10233-1.2792zm-10.131-48.658a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm5.9215 29.412a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843z"}}render(){var e;return U`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45mm"
        height="31.63mm"
        version="1.1"
        viewBox="0 0 170.08 119.55"
      >
        <defs>
          <g id="pin">
            <rect x="0" y="-1.91" width="3.72" height="3.71" />
            <path d="m2.026 -1.91h13.532l-13.425 0.51865z" />
            <path d="m2.026 1.80h13.532l-13.425-0.50702z" />
            <rect fill="#ccc" x="0.33" y="-1.23" width="3.04" height="2.46" rx=".15" />
          </g>
        </defs>
        <g stroke-width="2.7" fill="none">
          <path
            stroke="#b44200"
            d="m 83.32,56.6 c0,0 -32.99,0.96 -43.32,0 -6.20,-0.58 -10.60,-6.20 -14.87,-6.31"
          />
          <path stroke="#ff2300" d="m83.326 59.6h-62.971" />
          <path
            stroke="#f47b00"
            d="m 83.32,62.6 c0,0 -32.60,-0.61 -43.33,-0.15 -6.87,0.29 -12.01,6.82 -14.77,6.73"
          />
        </g>
        <rect fill="#666" y="45.5" width="25.71" height="28" rx="1.14" />
        <use xlink:href="#pin" x="4.7" y="50.06" />
        <use xlink:href="#pin" x="4.7" y="59.66" />
        <use xlink:href="#pin" x="4.7" y="69.26" />
        <path
          fill="#4d4d4d"
          d="m163.92 66.867a7.09 7.09 0 1 1 5.8145-11.136 0.18 0.18 0 0 0 0.33-0.10234v-14.346h-17.664v36.98h17.676v-14.346a0.18 0.18 0 0 0-0.333-0.107 7.08 7.08 0 0 1-5.83 3.06z"
        />
        <path
          fill="#4d4d4d"
          d="m55.068 66.75a7.09 7.09 0 1 0-5.8261-11.136 0.18 0.18 0 0 1-0.33-0.10234v-14.346h17.676v36.98h-17.676v-14.346a0.18 0.18 0 0 1 0.333-0.107 7.08 7.08 0 0 0 5.83 3.06z"
        />
        <rect fill="#666" x="64.255" y="37.911" width="90.241" height="43.725" rx="5.3331" />
        <path fill="gray" d="m110.07 50.005h-14.42v19.537h14.42a9.7684 9.7684 0 0 0 0-19.537z" />
        <circle fill="#999" cx="91.467" cy="59.773" r="18.606" />
        <path
          fill=${this.hornColor}
          transform="translate(91.467 59.773) rotate(${null!==(e=this.angle)&&void 0!==e?e:0}) translate(-91.467 -59.773)"
          d="${this.hornPath()}"
        />
        <circle fill="gray" cx="91.467" cy="59.773" r="8.3729" />
        <circle fill="#ccc" cx="91.467" cy="59.773" r="6.2494" />
        <path
          fill="#666"
          d="m94.911 62.543-2.3839-2.4165a0.42562 0.42562 0 0 1 0-0.60471l2.4281-2.3863a0.64657 0.64657 0 0 0 0.06512-0.8652 0.62797 0.62797 0 0 0-0.93032-0.05117l-2.4351 2.4049a0.4326 0.4326 0 0 1-0.60703 0l-2.3863-2.4165a0.6489 0.6489 0 0 0-0.8652-0.06512 0.63262 0.63262 0 0 0-0.05117 0.93032l2.4049 2.4328a0.42795 0.42795 0 0 1 0 0.60703l-2.4142 2.3863a0.65122 0.65122 0 0 0-0.06745 0.8652 0.63029 0.63029 0 0 0 0.93032 0.05117l2.4351-2.4049a0.42562 0.42562 0 0 1 0.60471 0l2.3863 2.4398a0.63262 0.63262 0 0 0 0.93032-0.04186 0.64657 0.64657 0 0 0-0.04419-0.8652z"
        />
      </svg>
    `}};mt([ce()],gt.prototype,"angle",void 0),mt([ce()],gt.prototype,"horn",void 0),mt([ce()],gt.prototype,"hornColor",void 0),gt=mt([oe("wokwi-servo")],gt);var ht=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let ft=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"VCC",x:15,y:114.9,signals:[{type:"power",signal:"VCC"}],number:1},{name:"SDA",x:24.5,y:114.9,signals:[],number:2},{name:"NC",x:34.1,y:114.9,signals:[],number:3},{name:"GND",x:43.8,y:114.9,signals:[{type:"power",signal:"GND"}],number:4}]}render(){return U`
      <svg
        width="15.1mm"
        height="30.885mm"
        version="1.1"
        viewBox="0 0 15.1 30.885"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="3.57" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="6.11" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="8.65" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="11.19" y="23.885" width=".75" height="7" rx=".2" />
        </g>
        <path
          d="M15.05 23.995V5.033m0 0c0-.107-1.069-4.962-2.662-4.96L2.803.09C1.193.09.05 4.926.05 5.033v18.962c0 .107.086.192.192.192h14.616a.192.192 0 00.192-.192M7.615.948h.004c1.08 0 1.956.847 1.956 1.892s-.876 1.892-1.956 1.892-1.956-.847-1.956-1.892c0-1.044.873-1.89 1.952-1.892zM4.967 8.66H5.9a.21.21 0 01.211.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.212-.21V8.87a.21.21 0 01.212-.211zm2.168 0h.934a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm2.152 0h.935a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm5.757 0v1.356m0 0h-3.217a.553.553 0 01-.554-.554v-.249a.55.55 0 01.554-.553h3.217M.05 8.66h3.282c.307 0 .554.247.554.553v.25a.552.552 0 01-.554.553H.05m0 1.054h3.282c.307 0 .554.247.554.554v.249a.552.552 0 01-.554.554H.05m4.917-1.357H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.212-.21v-.935a.21.21 0 01.212-.21zm2.168 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.211.211h-.934a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.153 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.539 0h3.217v1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553zM.05 13.547h3.282c.307 0 .553.247.553.554v.249a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.169 0h.933a.21.21 0 01.212.211v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm5.757 1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553h3.217m0 3.791h-3.218a.553.553 0 01-.553-.554v-.249c0-.306.247-.553.553-.553h3.218m-14.994 0h3.282c.307 0 .553.247.553.553v.25a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zm2.169 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.21h-.934a.21.21 0 01-.211-.21v-.934a.21.21 0 01.211-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zM.05 18.362h3.282c.307 0 .553.247.553.554v.25a.552.552 0 01-.553.552H.05m4.916-1.355H5.9a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm2.169 0h.933a.21.21 0 01.212.21v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.934a.21.21 0 01.21-.211zm2.152 0h.934a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm5.757 1.355h-3.218a.552.552 0 01-.553-.553v-.25c0-.306.247-.552.553-.552h3.218M10.49 5.056V7.31a.192.192 0 01-.193.193h-.85a.192.192 0 01-.193-.193V5.056H8.23v2.286a.192.192 0 01-.192.192h-.851a.192.192 0 01-.193-.192V5.056H5.94v2.286a.192.192 0 01-.193.192h-.85a.192.192 0 01-.193-.192V5.056C.033 5.025.05 5.033.05 5.033m15 0l-4.56.023v0"
          fill="#f2f2f2"
          stroke="#000"
          stroke-linecap="round"
          stroke-width=".1"
        />
        <text
          x="3.7415893"
          y="22.863354"
          fill="#000000"
          font-family="sans-serif"
          font-size="2.2px"
          stroke-width=".05"
          style="line-height:1.25"
        >
          DHT22
        </text>
      </svg>
    `}};ft=ht([oe("wokwi-dht22")],ft);var Et=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let St=class extends ae{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.resetPressed=!1,this.pinInfo=[{name:"SCL",x:90,y:9,signals:[Ee("SCL")]},{name:"SDA",x:100,y:9,signals:[Ee("SDA")]},{name:"AREF",x:109,y:9,signals:[]},{name:"GND.1",x:119,y:9,signals:[{type:"power",signal:"GND"}]},{name:"13",x:129,y:9,signals:[{type:"pwm"}]},{name:"12",x:138,y:9,signals:[{type:"pwm"}]},{name:"11",x:148,y:9,signals:[{type:"pwm"}]},{name:"10",x:157.5,y:9,signals:[{type:"pwm"}]},{name:"9",x:167.5,y:9,signals:[{type:"pwm"}]},{name:"8",x:177,y:9,signals:[{type:"pwm"}]},{name:"7",x:190,y:9,signals:[{type:"pwm"}]},{name:"6",x:200,y:9,signals:[{type:"pwm"}]},{name:"5",x:209.5,y:9,signals:[{type:"pwm"}]},{name:"4",x:219,y:9,signals:[{type:"pwm"}]},{name:"3",x:228.5,y:9,signals:[{type:"pwm"}]},{name:"2",x:238,y:9,signals:[{type:"pwm"}]},{name:"1",x:247.5,y:9,signals:[be("TX")]},{name:"0",x:257.5,y:9,signals:[be("RX")]},{name:"14",x:270.5,y:9,signals:[be("TX",3)]},{name:"15",x:280,y:9,signals:[be("RX",3)]},{name:"16",x:289.5,y:9,signals:[be("TX",2)]},{name:"17",x:299,y:9,signals:[be("RX",2)]},{name:"18",x:308.5,y:9,signals:[be("TX",1)]},{name:"19",x:318.5,y:9,signals:[be("RX",1)]},{name:"20",x:328,y:9,signals:[Ee("SDA")]},{name:"21",x:337.5,y:9,signals:[Ee("SCL")]},{name:"5V.1",x:361,y:8,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"5V.2",x:371,y:8,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"22",x:361,y:17.5,signals:[]},{name:"23",x:371,y:17.5,signals:[]},{name:"24",x:361,y:27.25,signals:[]},{name:"25",x:371,y:27.25,signals:[]},{name:"26",x:361,y:36.75,signals:[]},{name:"27",x:371,y:36.75,signals:[]},{name:"28",x:361,y:46.25,signals:[]},{name:"29",x:371,y:46.25,signals:[]},{name:"30",x:361,y:56,signals:[]},{name:"31",x:371,y:56,signals:[]},{name:"32",x:361,y:65.5,signals:[]},{name:"33",x:371,y:65.5,signals:[]},{name:"34",x:361,y:75,signals:[]},{name:"35",x:371,y:75,signals:[]},{name:"36",x:361,y:84.5,signals:[]},{name:"37",x:371,y:84.5,signals:[]},{name:"38",x:361,y:94.25,signals:[]},{name:"39",x:371,y:94.25,signals:[]},{name:"40",x:361,y:103.75,signals:[]},{name:"41",x:371,y:103.75,signals:[]},{name:"42",x:361,y:113.5,signals:[]},{name:"43",x:371,y:113.5,signals:[]},{name:"44",x:361,y:123,signals:[{type:"pwm"}]},{name:"45",x:371,y:123,signals:[{type:"pwm"}]},{name:"46",x:361,y:132.75,signals:[{type:"pwm"}]},{name:"47",x:371,y:132.75,signals:[]},{name:"48",x:361,y:142.25,signals:[]},{name:"49",x:371,y:142.25,signals:[]},{name:"50",x:361,y:152,signals:[Se("MISO")]},{name:"51",x:371,y:152,signals:[Se("MOSI")]},{name:"52",x:361,y:161.5,signals:[Se("SCK")]},{name:"53",x:371,y:161.5,signals:[Se("SS")]},{name:"GND.4",x:361,y:171.25,signals:[{type:"power",signal:"GND"}]},{name:"GND.5",x:371,y:171.25,signals:[{type:"power",signal:"GND"}]},{name:"IOREF",x:136,y:184.5,signals:[]},{name:"RESET",x:145.5,y:184.5,signals:[]},{name:"3.3V",x:155,y:184.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"5V",x:164.5,y:184.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"GND.2",x:174.25,y:184.5,signals:[{type:"power",signal:"GND"}]},{name:"GND.3",x:183.75,y:184.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:193.5,y:184.5,signals:[{type:"power",signal:"VCC"}]},{name:"A0",x:208.5,y:184.5,signals:[fe(0)]},{name:"A1",x:218,y:184.5,signals:[fe(1)]},{name:"A2",x:227.5,y:184.5,signals:[fe(2)]},{name:"A3",x:237.25,y:184.5,signals:[fe(3)]},{name:"A4",x:246.75,y:184.5,signals:[fe(4)]},{name:"A5",x:256.25,y:184.5,signals:[fe(5)]},{name:"A6",x:266,y:184.5,signals:[fe(6)]},{name:"A7",x:275.5,y:184.5,signals:[fe(7)]},{name:"A8",x:290.25,y:184.5,signals:[fe(8)]},{name:"A9",x:300,y:184.5,signals:[fe(9)]},{name:"A10",x:309.5,y:184.5,signals:[fe(10)]},{name:"A11",x:319.25,y:184.5,signals:[fe(11)]},{name:"A12",x:328.75,y:184.5,signals:[fe(12)]},{name:"A13",x:338.5,y:184.5,signals:[fe(13)]},{name:"A14",x:348,y:184.5,signals:[fe(14)]},{name:"A15",x:357.75,y:184.5,signals:[fe(15)]}]}static get styles(){return s`
      text {
        font-size: 2px;
        font-family: monospace;
      }
      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `}render(){const{ledPower:e,led13:t,ledRX:n,ledTX:i}=this;return U`
      <svg
        width="102.66mm"
        height="50.80mm"
        version="1.1"
        viewBox="-4 0 102.66 50.80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${he}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <!-- PCB -->
        <path
          d="M2.105.075v50.653h94.068v-1.206l2.412-2.412V14.548l-2.412-2.413V2.487L93.785.075zm14.443.907a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.505 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0116.548.982zm71.154 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.505 1.505 1.505 0 01-1.505 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0187.702.982zM64.818 15.454a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm0 26.532a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm-49.476 4.825a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.504 1.505 1.505 0 01-1.506 1.506 1.505 1.505 0 01-1.505-1.506 1.505 1.505 0 011.476-1.504zm78.39 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.504 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506 1.505 1.505 0 011.476-1.504z"
          fill="#2b6b99"
        />

        <!-- reset button -->
        <rect
          transform="rotate(269.81)"
          x="-28.046"
          y="68.977"
          width="6.2151"
          height="6.0268"
          fill="#9b9b9b"
        />
        <g fill="#e6e6e6">
          <rect transform="rotate(269.81)" x="-29.725" y="69.518" width="1.695" height=".84994" />
          <rect transform="rotate(269.81)" x="-29.741" y="71.4" width="1.695" height=".84994" />
          <rect transform="rotate(269.81)" x="-29.764" y="73.425" width="1.695" height=".84994" />
          <rect transform="rotate(269.81)" x="-21.831" y="73.59" width="1.695" height=".84994" />
          <rect transform="rotate(269.81)" x="-21.854" y="69.517" width="1.695" height=".84994" />
        </g>
        <circle
          id="reset-button"
          transform="rotate(269.81)"
          cx="-24.9"
          cy="72.092"
          r="1.5405"
          fill="#960000"
          stroke="#777"
          stroke-width="0.15"
          tabindex="0"
          @mousedown=${()=>this.down()}
          @touchstart=${()=>this.down()}
          @mouseup=${()=>this.up()}
          @mouseleave=${()=>this.leave()}
          @touchend=${()=>this.leave()}
          @keydown=${e=>Te.includes(e.key)&&this.down()}
          @keyup=${e=>Te.includes(e.key)&&this.up()}
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black" transform="translate(0 -4)">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(18.4 1.07)">
          <rect width="${.38+25.4}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.81 1.07)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(66 1.07)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(27.93 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.63 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(71.34 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(90.1 0.8)">
          <rect width="${5.46}" height="${45.72}" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <rect x="43" y="17.55" fill="#000" width="13.5" height="13.5" rx="0.5" />

        <!-- Programming Headers -->
        <g transform="translate(61.5 21.09)">
          <rect width="4.80" height="7" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(72.20 15.58)">
          <use xlink:href="#led-body" />
          ${e&&B`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="68" y="16.75">PWR</tspan>
        </text>

        <g transform="translate(26 13.86)">
          <use xlink:href="#led-body" />
          ${t&&B`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 18.52)">
          <use xlink:href="#led-body" />
          ${i&&B`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 20.75)">
          <use xlink:href="#led-body" />
          ${n&&B`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="29.4" y="15">L</tspan>
          <tspan x="29.4" y="19.8">TX</tspan>
          <tspan x="29.4" y="22">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="7.6" width="31.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.8">PWM</tspan>
        </text>

        <rect x="60.5" y="11.8" width="25.4" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="65" y="14.2">COMMUNICATION</tspan>
        </text>

        <text
          transform="translate(22.6 3.4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">11</tspan>
          <tspan x="0" dy="2.54">10</tspan>
          <tspan x="0" dy="2.54">9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">6</tspan>
          <tspan x="0" dy="2.54">5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→ 1</tspan>
          <tspan x="0" dy="2.54">RX← 0</tspan>
          <tspan x="0" dy="3.34">TX3 14</tspan>
          <tspan x="0" dy="2.54">RX3 15</tspan>
          <tspan x="0" dy="2.54">TX2 16</tspan>
          <tspan x="0" dy="2.54">RX2 17</tspan>
          <tspan x="0" dy="2.54">TX1 18</tspan>
          <tspan x="0" dy="2.54">RX1 19</tspan>
          <tspan x="0" dy="2.54">SDA 20</tspan>
          <tspan x="0" dy="2.54">SCL 21</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="36" y="41.46" width="12.44" height="0.16" fill="#fff"></rect>
        <rect x="50" y="41.46" width="39" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="39" y="40.96">POWER</tspan>
          <tspan x="65" y="40.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(30.19 47) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="3.74">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">A6</tspan>
          <tspan x="0" dy="2.54">A7</tspan>
          <tspan x="0" dy="3.74">A8</tspan>
          <tspan x="0" dy="2.54">A9</tspan>
          <tspan x="0" dy="2.54">A10</tspan>
          <tspan x="0" dy="2.54">A11</tspan>
          <tspan x="0" dy="2.54">A12</tspan>
          <tspan x="0" dy="2.54">A13</tspan>
          <tspan x="0" dy="1.84">A14</tspan>
          <tspan x="0" dy="1.84">A15</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <text x="51.85" y="36" style="font-size:4px;font-weight:bold;line-height:1.25;fill:#fff">
          Arduino MEGA
        </text>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}};Et([ce()],St.prototype,"led13",void 0),Et([ce()],St.prototype,"ledRX",void 0),Et([ce()],St.prototype,"ledTX",void 0),Et([ce()],St.prototype,"ledPower",void 0),Et([ce()],St.prototype,"resetPressed",void 0),Et([_e("#reset-button")],St.prototype,"resetButton",void 0),St=Et([oe("wokwi-arduino-mega")],St);var bt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let yt=class extends ae{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.resetPressed=!1,this.pinInfo=[{name:"12",x:19.7,y:4.8,signals:[Se("MISO")]},{name:"11",x:29.3,y:4.8,signals:[Se("MOSI"),{type:"pwm"}]},{name:"10",x:38.9,y:4.8,signals:[Se("SS"),{type:"pwm"}]},{name:"9",x:48.5,y:4.8,signals:[{type:"pwm"}]},{name:"8",x:58.1,y:4.8,signals:[]},{name:"7",x:67.7,y:4.8,signals:[]},{name:"6",x:77.3,y:4.8,signals:[{type:"pwm"}]},{name:"5",x:86.9,y:4.8,signals:[{type:"pwm"}]},{name:"4",x:96.5,y:4.8,signals:[]},{name:"3",x:106.1,y:4.8,signals:[{type:"pwm"}]},{name:"2",x:115.7,y:4.8,signals:[]},{name:"GND.2",x:125.3,y:4.8,signals:[{type:"power",signal:"GND"}]},{name:"RESET.2",x:134.9,y:4.8,signals:[]},{name:"1",x:144.5,y:4.8,signals:[be("TX")]},{name:"0",x:154.1,y:4.8,signals:[be("RX")]},{name:"13",x:19.7,y:62.4,signals:[Se("SCK")]},{name:"3.3V",x:29.3,y:62.4,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"AREF",x:38.9,y:62.4,signals:[]},{name:"A0",x:48.5,y:62.4,signals:[fe(0)]},{name:"A1",x:58.1,y:62.4,signals:[fe(1)]},{name:"A2",x:67.7,y:62.4,signals:[fe(2)]},{name:"A3",x:77.3,y:62.4,signals:[fe(3)]},{name:"A4",x:86.9,y:62.4,signals:[fe(4),Ee("SDA")]},{name:"A5",x:96.5,y:62.4,signals:[fe(5),Ee("SCL")]},{name:"A6",x:106.1,y:62.4,signals:[fe(6)]},{name:"A7",x:115.7,y:62.4,signals:[fe(7)]},{name:"5V",x:125.3,y:62.4,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"RESET",x:134.9,y:62.4,signals:[]},{name:"GND.1",x:144.5,y:62.4,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:154.1,y:62.4,signals:[{type:"power",signal:"VCC"}]},{name:"12.2",x:163.7,y:43.2,signals:[Se("MISO")],noBreadboard:!0},{name:"5V.2",x:154.1,y:43.2,signals:[{type:"power",signal:"VCC",voltage:5}],noBreadboard:!0},{name:"13.2",x:163.7,y:33.6,signals:[Se("SCK")],noBreadboard:!0},{name:"11.2",x:154.1,y:33.6,signals:[Se("MOSI"),{type:"pwm"}],noBreadboard:!0},{name:"RESET.3",x:163.7,y:24,signals:[],noBreadboard:!0},{name:"GND.3",x:154.1,y:24,signals:[{type:"power",signal:"GND"}],noBreadboard:!0}]}static get styles(){return s`
      text {
        font-size: 1px;
        font-family: monospace;
        user-select: none;
      }

      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `}render(){const{ledPower:e,led13:t,ledRX:n,ledTX:i}=this;return U`
      <svg
        width="44.9mm"
        height="17.8mm"
        viewBox="-1.4 0 44.9 17.8"
        font-weight="bold"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="solderPlate" style="color-interpolation-filters:sRGB;">
            <feTurbulence result="r0" type="fractalNoise" baseFrequency="1" numOctaves="1" />
            <feComposite
              result="r1"
              in="r0"
              in2="SourceGraphic"
              operator="arithmetic"
              k1=".6"
              k2=".6"
              k3="1.2"
              k4=".25"
            />
            <feBlend result="r2" in="r1" in2="SourceGraphic" mode="luminosity" />
            <feComposite result="r3" in="r2" in2="SourceGraphic" operator="in" />
          </filter>
          <pattern id="pins-tqfp-0.5mm" width="1" height=".5" patternUnits="userSpaceOnUse">
            <rect fill="#333" width="1" height=".2" y=".17" />
          </pattern>
          <pattern id="pins-pth-0.75" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".375" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <pattern id="pins-pth-1.00" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".5" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#333" filter="url(#solderPlate)" />
            <rect x=".6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width=".05" />
          </g>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation=".5" />
          </filter>
        </defs>

        <!-- PCB -->
        <g id="pcb" fill="#fff">
          <rect width="43.5" height="17.8" x="0" y="0" fill="#1b7e84" />
          <circle cx="1" cy="1" r=".889" />
          <circle cx="42.42" cy="1" r=".889" />
          <circle cx="42.42" cy="16.6" r=".889" />
          <circle cx="1" cy="16.6" r=".889" />
        </g>

        <!-- silkscreen -->
        <g id="silkscreen" fill="#eee" text-anchor="middle">
          <rect x="30.48" y="0" width="2.54" height="3.2" />
          <rect x="35.56" y="14.6" width="2.54" height="3.2" />
          <g fill="#1b7e84" transform="translate(1.27 1.27)">
            <circle r=".85" cx="30.48" />
            <circle r=".85" cx="35.56" cy="15.24" />
          </g>
          <g transform="translate(1.27 3)">
            <text x="2.54">D12</text>
            <text x="5.08">D11</text>
            <text x="7.62">D10</text>
            <text x="10.16">D9</text>
            <text x="12.7">D8</text>
            <text x="15.24">D7</text>
            <text x="17.78">D6</text>
            <text x="20.32">D5</text>
            <text x="22.86">D4</text>
            <text x="25.4">D3</text>
            <text x="27.94">D2</text>
            <text x="30.48" fill="#1b7e84">GND</text>
            <text x="33.02">RST</text>
            <text x="35.56" y=".65" font-size="200%">↓</text>
            <text x="35.56" y="1.5">RX0</text>
            <text x="38.1" y=".65" font-size="200%">↑</text>
            <text x="38.1" y="1.5">TX0</text>
          </g>
          <g transform="translate(1.27 15.5)">
            <text x="2.54">D13</text>
            <text x="5.08">3V3</text>
            <text x="7.62">AREF</text>
            <text x="10.16">A0</text>
            <text x="12.7">A1</text>
            <text x="15.24">A2</text>
            <text x="17.78">A3</text>
            <text x="20.32">A4</text>
            <text x="22.86">A5</text>
            <text x="25.4">A6</text>
            <text x="27.94">A7</text>
            <text x="30.48">5V</text>
            <text x="33.02">RST</text>
            <text x="35.56" fill="#1b7e84">GND</text>
            <text x="38.1">VIN</text>
          </g>
          <g transform="rotate(90)">
            <text x="8.7" y="-22.5">RESET</text>
            <text x="5.6" y="-32.2">TX</text>
            <text x="5.6" y="-30.7" font-size="200%">↓</text>
            <text x="7.6" y="-32.2">RX</text>
            <text x="7.6" y="-30.7" font-size="200%">↑</text>
            <text x="9.6" y="-30.7">ON</text>
            <text x="11.6" y="-30.7">L</text>
          </g>
        </g>

        <!-- MCU -->
        <g id="mcu" transform="rotate(45 -2.978 23.39)">
          <g fill="url(#pins-tqfp-0.5mm)" filter="url(#solderPlate)">
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" />
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" transform="rotate(90)" />
          </g>
          <rect x="-2.275" y="-2.275" width="4.55" height="4.55" fill="#444" />
          <circle transform="rotate(45)" cx=".012" cy="-2.5" r=".35" fill="#222" />
        </g>

        <!-- pins -->
        <g id="pins" fill="url(#pins-pth-0.75)">
          <g id="pins-pin1" fill="#333" filter="url(#solderPlate)">
            <rect x="${38.495}" y="${.395}" width="1.75" height="1.75" />
            <rect x="${38.495}" y="${16.51-.875}" width="1.75" height="1.75" />
          </g>
          <rect x="2.54" width="${38.1}" height="2.54" />
          <rect x="2.54" y="${15.24}" width="${38.1}" height="2.54" />
        </g>

        <!-- programming header -->
        <g id="pgm-header" fill="url(#pins-pth-1.00)" stroke="#eee" stroke-width=".1">
          <g id="pgm-pin1" stroke="none" fill="#333" filter="url(#solderPlate)">
            <rect x="${16.5*2.54-.875}" y="${10.555}" width="1.75" height="1.75" />
          </g>
          <rect x="${38.1}" y="${5.08}" width="${5.08}" height="${7.62}" />
        </g>

        <!-- USB mini type B -->
        <g id="usb-mini-b" stroke-width=".1" paint-order="stroke fill">
          <g fill="#333" filter="url(#solderPlate)">
            <rect x=".3" y="3.8" width="1.6" height="9.8" />
            <rect x="5.5" y="3.8" width="1.6" height="9.8" />
            <rect x="7.3" y="7.07" width="1.1" height=".48" />
            <rect x="7.3" y="7.82" width="1.1" height=".48" />
            <rect x="7.3" y="8.58" width="1.1" height=".48" />
            <rect x="7.3" y="9.36" width="1.1" height=".48" />
            <rect x="7.3" y="10.16" width="1.1" height=".48" />
          </g>
          <rect x="-1.4" y="4.8" width="8.9" height="7.8" fill="#999" stroke-width=".26" />
          <rect x="-1.25" y="5" width="8.6" height="7.4" fill="#ccc" stroke="#bbb" />
          <g fill="none" stroke="#333" stroke-width=".26" stroke-linecap="round">
            <path d="m2.6 5.9h-3.3v0.9h3.3m0 3.7h-3.3v0.9h3.3M-0.6 7.6l4.3 0.3v1.5l-4.3 0.3" />
            <path d="m3.3 7.9v1.5" stroke-width="1" stroke-linecap="butt" />
            <path d="m6 6.4v4.5" stroke-width=".35" />
          </g>
        </g>

        <!-- LEDs -->
        <g transform="translate(27.7 5)">
          <use xlink:href="#led-body" />
          ${i&&B`<circle cx="1.3" cy=".55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 7)">
          <use xlink:href="#led-body" />
          ${n&&B`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 9)">
          <use xlink:href="#led-body" />
          ${e&&B`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 11)">
          <use xlink:href="#led-body" />
          ${t&&B`<circle cx="1.3" cy=".55" r="1.3" fill="#ffff80" filter="url(#ledFilter)" />`}
        </g>

        <!-- reset button -->
        <g stroke-width=".1" paint-order="fill stroke">
          <rect x="24.3" y="6.3" width="1" height="4.8" filter="url(#solderPlate)" fill="#333" />
          <rect x="23.54" y="6.8" width="2.54" height="3.8" fill="#ccc" stroke="#888" />
          <circle
            id="reset-button"
            cx="24.8"
            cy="8.7"
            r="1"
            fill="#eeb"
            stroke="#777"
            tabindex="0"
            @mousedown=${()=>this.down()}
            @touchstart=${()=>this.down()}
            @mouseup=${()=>this.up()}
            @mouseleave=${()=>this.leave()}
            @touchend=${()=>this.leave()}
            @keydown=${e=>Te.includes(e.key)&&this.down()}
            @keyup=${e=>Te.includes(e.key)&&this.up()}
          />
        </g>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}};bt([ce()],yt.prototype,"led13",void 0),bt([ce()],yt.prototype,"ledRX",void 0),bt([ce()],yt.prototype,"ledTX",void 0),bt([ce()],yt.prototype,"ledPower",void 0),bt([ce()],yt.prototype,"resetPressed",void 0),bt([_e("#reset-button")],yt.prototype,"resetButton",void 0),yt=bt([oe("wokwi-arduino-nano")],yt);var vt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Tt=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:15,x:9.5,number:1,signals:[ye()]},{name:"5V",y:25,x:9.5,number:2,signals:[ve(5)]},{name:"SDA",y:34.5,x:9.5,number:3,signals:[Ee("SDA")]},{name:"SCL",y:44,x:9.5,number:4,signals:[Ee("SCL")]},{name:"SQW",y:54,x:9.5,number:5,signals:[]}]}render(){return U`
      <svg
        width="25.8mm"
        height="22.212mm"
        version="1.1"
        viewBox="0 0 25.8 22.212"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2.961 0c-1.6405 0-2.961 1.3207-2.961 2.9611v16.29c0 1.6405 1.3206 2.961 2.961 2.961h19.878c1.6405 0 2.961-1.3206 2.961-2.961v-2.1407c-2.4623-2.4996-2.4864-1.3794-2.4996-5.5588-0.01319-4.1794 0.11192-2.4623 2.4996-5.5961v-2.9945c0-1.6405-1.3206-2.9611-2.961-2.9611zm20.214 1.5792h1.04e-4c3e-3 -1.1e-5 0.0061-1.1e-5 0.0091 0 0.67598-1.6e-5 1.224 0.54798 1.224 1.224 1.5e-5 0.67598-0.54798 1.224-1.224 1.224-0.67598 1.5e-5 -1.224-0.54798-1.224-1.224-3.4e-5 -0.67241 0.54238-1.2189 1.2148-1.224zm-20.564 1.9405c0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291 2.4e-5 0.29985-0.24306 0.54294-0.54291 0.54291-0.29985 2.4e-5 -0.54294-0.24306-0.54291-0.54291-2.4e-5 -0.29985 0.24306-0.54294 0.54291-0.54291zm-0.02958 2.5853c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54283-0.54291 0.54281-0.29977-3.2e-5 -0.54278-0.24304-0.54281-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm0.02632 2.5062h1.04e-4c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54284-0.54291 0.54281-0.29981 2.4e-5 -0.54288-0.243-0.54291-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm0.02652 2.5853c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29977 3.2e-5 0.54278 0.24304 0.54281 0.54281 2.4e-5 0.29981-0.243 0.54288-0.54281 0.54291-0.29985 2.4e-5 -0.54294-0.24306-0.54291-0.54291 2.7e-5 -0.29858 0.24117-0.5411 0.53975-0.54281zm-0.02652 2.5325h1.04e-4c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54284-0.54291 0.54281-0.29981 2.4e-5 -0.54288-0.243-0.54291-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm-0.02663 4.4895c3e-3 -1.1e-5 0.0061-1.1e-5 0.0091 0 0.6759 4.2e-5 1.2238 0.54795 1.2238 1.2238 1.5e-5 0.67594-0.54791 1.2239-1.2238 1.224-0.67598 1.5e-5 -1.224-0.54798-1.224-1.224 2.2e-5 -0.67241 0.54248-1.2189 1.2149-1.2238z"
          fill="#015abe"
        />
        <g fill="#ffe680">
          <path
            d="m2.6116 3.0997a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.5853 5.685a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.6116 8.1911a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.638 10.776a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.6116 13.309a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
        </g>
        <text transform="rotate(90)" font-size="1.3px" fill="#e6e6e6">
          <tspan x="0.78" y="-3.81">GND</tspan>
          <tspan x="5.75" y="-0.43">5V</tspan>
          <tspan x="7.89" y="-3.81">SDA</tspan>
          <tspan x="10.45" y="-0.49">SCL</tspan>
          <tspan x="13" y="-3.97">SQW</tspan>
        </text>
        <g fill="#999">
          <rect x="6.5174" y="9.8" width=".62" height="1.971" rx=".2" ry=".2" />
          <rect x="6.5174" y="4.29" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="7.8138" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="7.8138" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="9.0674" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="10.321" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="9.0674" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="10.321" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="8.8304" y="13" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="5.0064" y="18.56" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="5.0064" y="13.02" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="8.8118" y="18.57" width="1.38" height="1.43" rx=".2" ry=".2" />
        </g>
        <rect x="6.2656" y="6.1049" width="5.1111" height="3.8244" fill="#1a1a1a" />
        <rect x="5.9653" y="12.746" width="3.173" height="7.7357" fill="#1a1a1a" />
        <text fill="#e6e6e6">
          <tspan x="10.5" y="19.8" font-size="2.1px">RTC</tspan>
          <tspan x="10.1" y="21.5" font-size="1.38px">DS1307</tspan>
        </text>
        <path
          d="m23.105 6.4546-0.093544 11.038h-7.6239l-1.4032-2.666-0.14032-7.2965 1.1514-1.1171z"
          fill="#e7d652"
        />
        <path
          transform="scale(.26458)"
          d="m65.771 8.0801c-0.74122-0.056466-0.96289 0.40508-0.96289 0.99805v10.564h-7.7773l-11.018 11.018v26.67l11.191 11.193 7.0625-0.029297v11.404c0.030992 0.86246 0.40014 1.3613 1.3613 1.3613h9.8711c0.79548 0 1.1738-0.34656 1.1738-1.0801v-10.686h7.377s-0.091892-1.0897 0.49805-1.2539c4.3436-1.2091 5.1203-2.5601 5.7949-4.0449 2.0727-4.5618-6.7065-7.6884-6.1094-21.266 0.5971-13.577 7.9939-12.227 6.2988-18.801-0.48161-1.8679-2.1495-3.113-5.6328-3.3926-0.48254-0.038702-0.44922-0.99414-0.44922-0.99414h-7.5781v-10.717c0.00373-0.74652-0.24336-0.94531-1.0918-0.94531h-10.01zm-1.5918 16.668a7.937 7.937 0 0 1 0.14844 0 7.937 7.937 0 0 1 7.9375 7.9355 7.937 7.937 0 0 1-7.9375 7.9375 7.937 7.937 0 0 1-7.9355-7.9375 7.937 7.937 0 0 1 7.7871-7.9355zm0 24.707a7.937 7.937 0 0 1 0.14844 0 7.937 7.937 0 0 1 7.9375 7.9355 7.937 7.937 0 0 1-7.9375 7.9375 7.937 7.937 0 0 1-7.9355-7.9375 7.937 7.937 0 0 1 7.7871-7.9355z"
          fill="#e6e6e6"
        />
        <path
          d="m2.5877 17.819a1.6229 1.6229 0 0 0-1.6198 1.6229 1.6229 1.6229 0 0 0 1.6228 1.6228 1.6229 1.6229 0 0 0 1.6229-1.6228 1.6229 1.6229 0 0 0-1.6229-1.6229 1.6229 1.6229 0 0 0-0.0031 0zm0.0031 0.43845a1.1471 1.1471 0 0 1 1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471-1.1471 1.1471 1.1471 0 0 1 1.1471-1.1471z"
          fill="#e7e3c4"
        />
        <path
          d="m23.181 1.1802a1.6229 1.6229 0 0 0-1.6198 1.6229 1.6229 1.6229 0 0 0 1.6228 1.6228 1.6229 1.6229 0 0 0 1.6229-1.6228 1.6229 1.6229 0 0 0-1.6229-1.6229 1.6229 1.6229 0 0 0-0.0031 0zm0.0031 0.43845a1.1471 1.1471 0 0 1 1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471-1.1471 1.1471 1.1471 0 0 1 1.1471-1.1471z"
          fill="#e7e3c4"
        />
        <path
          d="m15.049 3.0132c-0.14489 0.02316-0.26986-0.0058-0.27922-0.06459-0.0094-0.05874 0.1005-0.1251 0.24541-0.1481 0.14481-0.023 0.26976 0.0058 0.27913 0.06451 0.0094 0.05874-0.1004 0.12518-0.24531 0.14818m-0.1376 0.60509c-0.05307 0.027-0.1501-0.05691-0.21671-0.18746-0.06668-0.13072-0.07782-0.2587-0.02468-0.2857 0.0529-0.02693 0.14978 0.05697 0.21654 0.18761 0.06668 0.13054 0.0779 0.25845 0.02485 0.28555m-0.57077-0.24323c-0.10363 0.10379-0.22167 0.1538-0.26376 0.11171-0.04214-0.04199 0.0078-0.16022 0.1114-0.26399 0.10354-0.10394 0.22158-0.15395 0.26384-0.11189 0.04206 0.04201-0.0078 0.1603-0.11148 0.26416m-0.39663-0.72272c0.02685-0.05307 0.15476-0.04201 0.2853 0.02443 0.13079 0.06645 0.21504 0.16341 0.18802 0.21638-0.027 0.05289-0.15476 0.04209-0.28545-0.02435-0.13072-0.06643-0.21487-0.16341-0.18786-0.21646m0.75238-0.38413c0.05882 0.0091 0.0879 0.13424 0.06492 0.27913-0.0227 0.14491-0.08873 0.25478-0.14762 0.24556-0.05866-0.0093-0.08784-0.13425-0.06509-0.27905 0.02285-0.14491 0.08896-0.25485 0.1478-0.24564m1.8552 0.39655c-0.01218-0.07703-0.05401-0.09906-0.15492-0.13127-0.07663-0.02462-0.58986-0.18811-0.58986-0.18811s-0.35776-0.1352-0.62286 0.05595c-0.03575 0.02579-0.07278 0.05512-0.10988 0.08638 0.03118-0.03718 0.06051-0.07413 0.08625-0.10987 0.19057-0.26551 0.05482-0.62311 0.05482-0.62311s-0.16438-0.51284-0.18915-0.5896c-0.03245-0.10067-0.05449-0.14251-0.1316-0.15445-0.07724-0.01225-0.1109 0.0207-0.17278 0.1066-0.04713 0.06524-0.36128 0.5029-0.36128 0.5029s-0.23885 0.29846-0.13922 0.6098c0.01352 0.04176 0.02998 0.08607 0.04834 0.13112-0.02582-0.0412-0.05193-0.08053-0.07798-0.11598-0.19371-0.26314-0.5755-0.24479-0.5755-0.24479s-0.53864-0.0021-0.61911-0.0022c-0.10594-3.55e-4 -0.15243 0.0079-0.18784 0.07734-0.03543 0.06949-0.01451 0.11194 0.04809 0.19723 0.04751 0.06501 0.3668 0.4989 0.3668 0.4989s0.20998 0.3196 0.53673 0.32088c0.04391 2.18e-4 0.09096-0.0018 0.13928-0.0053a1.9307 1.9307 0 0 0-0.13406 0.03824c-0.31025 0.1029-0.4105 0.47187-0.4105 0.47187s-0.16847 0.51163-0.19363 0.58824c-0.03285 0.1005-0.03951 0.14722 0.01563 0.20228 0.0552 0.0553 0.10202 0.04847 0.20252 0.01532 0.07653-0.02508 0.58791-0.19459 0.58791-0.19459s0.36858-0.10106 0.47076-0.41146c0.01388-0.04166 0.02645-0.08704 0.03816-0.13383-0.0035 0.04824-0.0053 0.09521-0.0049 0.13912 0.0018 0.32683 0.32169 0.53625 0.32169 0.53625s0.43436 0.31815 0.49943 0.36576c0.08559 0.06228 0.12791 0.08319 0.19748 0.0477 0.0694-0.03543 0.07751-0.08192 0.07701-0.18786-1.97e-4 -0.08048-0.0035-0.61911-0.0035-0.61911s0.01794-0.38188-0.24564-0.5751c-0.03543-0.02596-0.07463-0.05201-0.11579-0.07765 0.04495 0.0181 0.08902 0.03454 0.13102 0.04768 0.31134 0.09929 0.60947-0.14018 0.60947-0.14018s0.43694-0.31486 0.50226-0.36199c0.08575-0.06203 0.11852-0.09609 0.10634-0.17311"
          fill="#fff"
        />
        <text fill="#fff" font-size="2.5px" font-weight="bold">
          <tspan x="12.6" y="12.7">+</tspan>
        </text>
      </svg>
    `}};Tt=vt([oe("wokwi-ds1307")],Tt);var Ct=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const Rt=3,Ot=6;let Nt=class extends ae{constructor(){super(...arguments),this.pixels=16,this.pixelSpacing=0,this.background="#363",this.animation=!1,this.pixelElements=null,this.animationFrame=null,this.animateStep=()=>{const e=(new Date).getTime(),{pixels:t}=this,n=e=>e%2e3>1e3?1-e%1e3/1e3:e%1e3/1e3;for(let i=0;i<t;i++)this.setPixel(i,{r:n(100*i+e),g:n(100*i+e+200),b:n(100*i+e+400)});this.animationFrame=requestAnimationFrame(this.animateStep)}}get radius(){return(this.pixelSpacing+5)*this.pixels/2/Math.PI+Ot}get pinInfo(){const{radius:e}=this,t=2.54,n=(2*e+Rt)*ue,i=e*ue,r=t*ue;return[{name:"GND",x:i-1.5*r,y:n,signals:[{type:"power",signal:"GND"}]},{name:"VCC",x:i-.5*r,y:n,signals:[{type:"power",signal:"VCC"}]},{name:"DIN",x:i+.5*r,y:n,signals:[]},{name:"DOUT",x:i+1.5*r,y:n,signals:[]}]}getPixelElements(){return this.shadowRoot?(this.pixelElements||(this.pixelElements=Array.from(this.shadowRoot.querySelectorAll("rect.pixel"))),this.pixelElements):null}setPixel(e,{r:t,g:n,b:i}){const r=this.getPixelElements();r&&(e<0||e>=r.length||(r[e].style.fill=`rgb(${255*t},${255*n},${255*i})`))}reset(){const e=this.getPixelElements();for(const t of null!==e&&void 0!==e?e:[])t.style.fill=""}update(e){(e.has("pixels")||e.has("pixelSpacing"))&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}updated(){this.animation&&!this.animationFrame?this.animationFrame=requestAnimationFrame(this.animateStep):!this.animation&&this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}render(){const{pixels:e,radius:t,background:n}=this,i=[],r=2*t,a=2*t+Rt;for(let s=0;s<e;s++){const n=s/e*360;i.push(B`<rect
          class="pixel"
          x="${t-2.5}"
          y="${Ot/2-2.5}"
          width="5"
          height="5"
          fill="white"
          stroke="black"
          stroke-width="0.25"
          transform="rotate(${n} ${t} ${t})"/>`)}return this.pixelElements=null,U`
      <svg
        width="${r}mm"
        height="${a}mm"
        version="1.1"
        viewBox="0 0 ${r} ${a}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            <rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />
          </pattern>
        </defs>
        <rect
          fill="url(#pin-pattern)"
          height="${Rt+1}"
          width=${10.16}
          transform="translate(${t-5.08}, ${2*t-1})"
        />
        <circle
          cx="${t}"
          cy="${t}"
          r="${t-Ot/2}"
          fill="transparent"
          stroke-width="${Ot}"
          stroke="${n}"
        />
        ${i}
      </svg>
    `}};Ct([ce()],Nt.prototype,"pixels",void 0),Ct([ce({type:Number})],Nt.prototype,"pixelSpacing",void 0),Ct([ce()],Nt.prototype,"background",void 0),Ct([ce()],Nt.prototype,"animation",void 0),Nt=Ct([oe("wokwi-led-ring")],Nt);var xt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let At=class extends ae{constructor(){super(...arguments),this.value=0,this.pinInfo=[{name:"1",number:1,y:34,x:6.5,signals:[]},{name:"2",number:2,y:34,x:16,signals:[]},{name:"3",number:3,y:34,x:25.5,signals:[]}]}static get styles(){return s`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      svg #handle {
        transition: transform 0.2s linear;
      }
      input:checked + svg #handle {
        transform: translate(2px, 0);
      }
      input:focus + svg #handle {
        stroke-width: 0.4px;
        stroke: #8080ff;
      }
    `}onClick(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".hide-input");t&&(t.checked=!t.checked,this.onValueChange(t),null===t||void 0===t||t.focus())}onValueChange(e){this.value=e.checked?1:0,this.dispatchEvent(new InputEvent("input",{detail:this.value}))}render(){const{value:e}=this;return U`
      <input
        tabindex="0"
        type="checkbox"
        class="hide-input"
        .checked=${e}
        @input="${e=>this.onValueChange(e.target)}"
      />
      <svg
        width="8.5mm"
        height="9.23mm"
        version="1.1"
        viewBox="0 0 8.5 9.23"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="${this.onClick}"
      >
        <defs>
          <radialGradient
            id="a"
            cx="9.33"
            cy="122"
            r="4.25"
            gradientTransform="matrix(1.75 -.511 .28 .959 -41.2 8.15)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#808080" offset="0" />
            <stop stop-color="#b5b5b5" offset="1" />
          </radialGradient>
        </defs>
        <g fill="#aaa" stroke-width=".0673">
          <rect x="4" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
          <rect x="1.54" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
          <rect x="6.5" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
        </g>
        <path
          id="handle"
          d="m2.74 0.128 0.145-0.128 0.177 0.0725 0.174-0.0725 0.151 0.0725 0.154-0.0725 0.151 0.0725 0.128-0.0725 0.134 0.0725 0.123-0.0725 0.145 0.128 2e-5 2h-1.48z"
          stroke-width=".0623"
        />
        <rect x="0" y="2.06" width="8.5" height="3.48" fill="url(#a)" stroke-width=".0548" />
        <rect x=".0322" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
        <rect x="6.95" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
        <rect x="2.55" y="4.74" width="3.47" height=".805" stroke-width=".0955" />
      </svg>
    `}};xt([ce()],At.prototype,"value",void 0),At=xt([oe("wokwi-slide-switch")],At);var It=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let wt=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"VCC",x:71.3,y:94.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"TRIG",x:81.3,y:94.5,signals:[]},{name:"ECHO",x:91.3,y:94.5,signals:[]},{name:"GND",x:101.3,y:94.5,signals:[{type:"power",signal:"GND"}]}]}render(){return U`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 45 25"
        height="25mm"
        width="45mm"
        font-family="monospace"
      >
        <defs>
          <pattern patternUnits="userSpaceOnUse" width="2" height="2" id="checkerboard">
            <path d="M0 0h1v1H0zM1 1h1v1H1z" />
          </pattern>
          <radialGradient id="grad1" cx="8.96" cy="10.04" r="3.58" gradientUnits="userSpaceOnUse">
            <stop stop-color="#777" offset="0" />
            <stop stop-color="#b9b9b9" offset="1" />
          </radialGradient>
          <g id="sensor-unit">
            <circle cx="8.98" cy="10" r="8.61" fill="#dcdcdc" />
            <circle cx="8.98" cy="10" r="7.17" fill="#222" />
            <circle cx="8.98" cy="10" r="5.53" fill="#777" fill-opacity=".992" />
            <circle cx="8.98" cy="10" r="3.59" fill="url(#grad1)" />
            <circle cx="8.99" cy="10" r=".277" fill="#777" fill-opacity=".818" />
            <circle cx="8.98" cy="10" r="5.53" fill="url(#checkerboard)" opacity=".397" />
          </g>
        </defs>
        <path
          d="M0 0v20.948h45V0zm1.422.464a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zM1.422 18.484a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1z"
          fill="#456f93"
        />
        <path
          d="M15.293 5.888l2.934-2.934v3.124l2.944 2.943v10.143M23.269 19.037v-2.473l-.966-.965v-12.5l2.577 1.488 4.741 4.741"
          fill="none"
          stroke="#355a7c"
          stroke-width=".858"
        />
        <use xlink:href="#sensor-unit" />
        <use xlink:href="#sensor-unit" x="27.12" />
        <g fill="none" stroke="#505132" stroke-width=".368">
          <circle cx="43.4" cy="1.46" r="1" />
          <circle cx="43.4" cy="19.5" r="1" />
          <circle cx="1.43" cy="1.46" r="1" />
          <circle cx="1.43" cy="19.5" r="1" />
        </g>
        <rect
          ry="2.07"
          y=".626"
          x="17.111"
          height="4.139"
          width="10.272"
          fill="#878787"
          stroke="#424242"
          stroke-width=".368"
        />
        <g fill="black">
          <rect x="17.87" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="20.41" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="22.95" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="25.49" y="18" ry=".568" width="2.25" height="2.271" />
        </g>
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="18.61" y="19" width=".75" height="7" rx=".2" />
          <rect x="21.15" y="19" width=".75" height="7" rx=".2" />
          <rect x="23.69" y="19" width=".75" height="7" rx=".2" />
          <rect x="26.23" y="19" width=".75" height="7" rx=".2" />
        </g>
        <text font-weight="400" font-size="2.2" fill="#e6e6e6" stroke-width=".055">
          <tspan y="8" x="17.6">HC-SR04</tspan>
        </text>
        <text
          transform="rotate(-90)"
          font-weight="400"
          font-size="1.55"
          fill="#e6e6e6"
          stroke-width=".039"
        >
          <tspan x="-17.591" y="19.561">VCC</tspan>
          <tspan x="-17.591" y="22.101">TRIG</tspan>
          <tspan x="-17.591" y="24.641">ECHO</tspan>
          <tspan x="-17.591" y="27.181">GND</tspan>
        </text>
      </svg>
    `}};wt=It([oe("wokwi-hc-sr04")],wt);var Dt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Mt=class extends we{constructor(){super(...arguments),this.numCols=20,this.numRows=4}};Mt=Dt([oe("wokwi-lcd2004")],Mt);var kt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Lt=class extends ae{constructor(){super(...arguments),this.xValue=0,this.yValue=0,this.pressed=!1,this.pinInfo=[{name:"VCC",x:33,y:115.8,signals:[ve()]},{name:"VERT",x:42.6012,y:115.8,signals:[fe(0)]},{name:"HORZ",x:52.2024,y:115.8,signals:[fe(1)]},{name:"SEL",x:61.8036,y:115.8,signals:[]},{name:"GND",x:71.4048,y:115.8,signals:[ye()]}]}static get styles(){return s`
      #knob {
        transition: transform 0.3s;
      }

      #knob:hover {
        fill: #222;
      }

      #knob:focus {
        outline: none;
        stroke: #4d90fe;
        stroke-width: 0.5;
      }

      .controls {
        opacity: 0;
        transition: opacity 0.3s;
        cursor: pointer;
      }

      #knob:focus ~ .controls,
      #knob:hover ~ .controls {
        opacity: 1;
      }

      .controls:hover {
        opacity: 1;
      }

      .controls path {
        pointer-events: none;
      }

      .controls .region {
        pointer-events: fill;
        fill: none;
      }

      .controls .region:hover + path {
        fill: #fff;
      }

      .controls circle:hover {
        stroke: #fff;
      }

      .controls circle.pressed {
        fill: #fff;
      }
    `}render(){const{xValue:e,yValue:t}=this;return U`
      <svg
        width="27.2mm"
        height="31.8mm"
        viewBox="0 0 27.2 31.8"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="noise" primitiveUnits="objectBoundingBox">
            <feTurbulence baseFrequency="2 2" type="fractalNoise" />
            <feColorMatrix
              values=".1 0 0 0 .1
                      .1 0 0 0 .1
                      .1 0 0 0 .1
                      0 0 0 0 1"
            />
            <feComposite in2="SourceGraphic" operator="lighter" />
            <feComposite result="body" in2="SourceAlpha" operator="in" />
          </filter>
          <radialGradient id="g-knob" cx="13.6" cy="13.6" r="10.6" gradientUnits="userSpaceOnUse">
            <stop offset="0" />
            <stop offset="0.9" />
            <stop stop-color="#777" offset="1" />
          </radialGradient>
          <radialGradient
            id="g-knob-base"
            cx="13.6"
            cy="13.6"
            r="13.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop stop-color="#444" offset=".8" />
            <stop stop-color="#555" offset=".9" />
            <stop offset="1" />
          </radialGradient>
          <path
            id="pin"
            fill="silver"
            stroke="#a2a2a2"
            stroke-width=".024"
            d="M8.726 29.801a.828.828 0 00-.828.829.828.828 0 00.828.828.828.828 0 00.829-.828.828.828 0 00-.829-.829zm-.004.34a.49.49 0 01.004 0 .49.49 0 01.49.489.49.49 0 01-.49.49.49.49 0 01-.489-.49.49.49 0 01.485-.49z"
          />
        </defs>
        <path
          d="M1.3 0v31.7h25.5V0zm2.33.683a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.5 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-20.5 26.8a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.4 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-12.7 2.66a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.57 0a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.49.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm-7.62.007a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488zm10.2.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488z"
          fill="#bd1e34"
        />
        <g fill="#fff" font-family="sans-serif" stroke-width=".03">
          <text text-anchor="middle" font-size="1.2" letter-spacing=".053">
            <tspan x="4.034" y="25.643">Analog</tspan>
            <tspan x="4.061" y="27.159">Joystick</tspan>
          </text>
          <text transform="rotate(-90)" text-anchor="start" font-size="1.2">
            <tspan x="-29.2" y="9.2">VCC</tspan>
            <tspan x="-29.2" y="11.74">VERT</tspan>
            <tspan x="-29.2" y="14.28">HORZ</tspan>
            <tspan x="-29.2" y="16.82">SEL</tspan>
            <tspan x="-29.2" y="19.36">GND</tspan>
          </text>
        </g>
        <ellipse cx="13.6" cy="13.7" rx="13.6" ry="13.7" fill="url(#g-knob-base)" />
        <path
          d="M48.2 65.5s.042.179-.093.204c-.094.017-.246-.077-.322-.17-.094-.115-.082-.205-.009-.285.11-.122.299-.075.299-.075s-.345-.303-.705-.054c-.32.22-.228.52.06.783.262.237.053.497-.21.463-.18-.023-.252-.167-.21-.256.038-.076.167-.122.167-.122s-.149-.06-.324.005c-.157.06-.286.19-.276.513v1.51s.162-.2.352-.403c.214-.229.311-.384.53-.366.415.026.714-.159.918-.454.391-.569.085-1.2-.178-1.29"
          fill="#fff"
        />
        <circle
          id="knob"
          cx="13.6"
          cy="13.6"
          transform="translate(${2.5*-e}, ${2.5*-t})"
          r="10.6"
          fill="url(#g-knob)"
          filter="url(#noise)"
          tabindex="0"
          @keyup=${e=>this.keyup(e)}
          @keydown=${e=>this.keydown(e)}
        />
        <g fill="none" stroke="#fff" stroke-width=".142">
          <path
            d="M7.8 31.7l-.383-.351v-1.31l.617-.656h1.19l.721.656.675-.656h1.18l.708.656.662-.656h1.25l.643.656.63-.656h1.21l.695.656.636-.656h1.17l.753.656v1.3l-.416.39"
          />
          <path
            d="M9.5 31.7l.381-.344.381.331M12.1 31.7l.381-.344.381.331M14.7 31.7l.381-.344.381.331M17.2 31.7l.381-.344.381.331"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </g>
        <g class="controls" stroke-width="0.6" stroke-linejoin="bevel" fill="#aaa">
          <rect
            class="region"
            y="8.5"
            x="1"
            height="10"
            width="7"
            @mousedown=${e=>this.mousedown(e,1,0)}
            @mouseup=${()=>this.mouseup(!0,!1)}
          />
          <path d="m 7.022,11.459 -3.202,2.497 3.202,2.497" />

          <rect
            class="region"
            y="1.38"
            x="7.9"
            height="7"
            width="10"
            @mousedown=${e=>this.mousedown(e,0,1)}
            @mouseup=${()=>this.mouseup(!1,!0)}
          />
          <path d="m 16.615,7.095 -2.497,-3.202 -2.497,3.202" />

          <rect
            class="region"
            y="8.5"
            x="18"
            height="10"
            width="7"
            @mousedown=${e=>this.mousedown(e,-1,0)}
            @mouseup=${()=>this.mouseup(!0,!1)}
          />
          <path d="m 19.980,16.101 3.202,-2.497 -3.202,-2.497" />

          <rect
            class="region"
            y="17"
            x="7.9"
            height="7"
            width="10"
            @mousedown=${e=>this.mousedown(e,0,-1)}
            @mouseup=${()=>this.mouseup(!1,!0)}
          />
          <path d="m 11.620,20.112 2.497,3.202 2.497,-3.202" />

          <circle
            cx="13.6"
            cy="13.6"
            r="3"
            stroke="#aaa"
            class=${this.pressed?"pressed":""}
            @mousedown=${e=>this.press(e)}
            @mouseup=${()=>this.release()}
          />
        </g>
        <use xlink:href="#pin" x="0" />
        <use xlink:href="#pin" x="2.54" />
        <use xlink:href="#pin" x="5.08" />
        <use xlink:href="#pin" x="7.62" />
        <use xlink:href="#pin" x="10.16" />
      </svg>
    `}keydown(e){switch(e.key){case"ArrowUp":this.yValue=1,this.valueChanged();break;case"ArrowDown":this.yValue=-1,this.valueChanged();break;case"ArrowLeft":this.xValue=1,this.valueChanged();break;case"ArrowRight":this.xValue=-1,this.valueChanged();break}Te.includes(e.key)&&this.press()}keyup(e){switch(e.key){case"ArrowUp":case"ArrowDown":this.yValue=0,this.valueChanged();break;case"ArrowLeft":case"ArrowRight":this.xValue=0,this.valueChanged();break}Te.includes(e.key)&&this.release()}mousedown(e,t,n){var i;t&&(this.xValue=t),n&&(this.yValue=n),this.valueChanged(),null===(i=this.knob)||void 0===i||i.focus(),e.preventDefault()}mouseup(e,t){var n;e&&(this.xValue=0),t&&(this.yValue=0),this.valueChanged(),null===(n=this.knob)||void 0===n||n.focus()}press(e){var t;this.pressed=!0,this.dispatchEvent(new InputEvent("button-press")),null===(t=this.knob)||void 0===t||t.focus(),null===e||void 0===e||e.preventDefault()}release(){var e;this.pressed=!1,this.dispatchEvent(new InputEvent("button-release")),null===(e=this.knob)||void 0===e||e.focus()}valueChanged(){this.dispatchEvent(new InputEvent("input"))}};kt([ce({type:Number})],Lt.prototype,"xValue",void 0),kt([ce({type:Number})],Lt.prototype,"yValue",void 0),kt([ce()],Lt.prototype,"pressed",void 0),kt([_e("#knob")],Lt.prototype,"knob",void 0),Lt=kt([oe("wokwi-analog-joystick")],Lt);var Pt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Ft=class extends ae{constructor(){super(...arguments),this.travelLength=30,this.value=0,this.min=0,this.max=100,this.step=2,this.isPressed=!1,this.zoom=1,this.pageToLocalTransformationMatrix=null,this.up=()=>{this.isPressed&&(this.isPressed=!1)},this.mouseMove=e=>{this.isPressed&&this.updateValueFromXCoordinate(new DOMPointReadOnly(e.pageX,e.pageY))}}get pinInfo(){return[{name:"VCC",x:1,y:43,number:1,signals:[{type:"power",signal:"VCC"}]},{name:"SIG",x:1,y:63,number:2,signals:[fe(0)]},{name:"GND",x:93.6+this.travelLength*ue,y:43,number:3,signals:[{type:"power",signal:"GND"}]}]}static get styles(){return s`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #tip {
        /* some style to add when the element has focus */
        filter: url(#outline);
      }
    `}update(e){e.has("travelLength")&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}render(){const{value:e,min:t,max:n,travelLength:i}=this,r=-15,a=e/(n-t)*i,s=a+r;return U`
      <input
        tabindex="0"
        type="range"
        min="${this.min}"
        max="${this.max}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        aria-valuemax="${this.max}"
        @input="${this.onInputValueChange}"
        class="hide-input"
      />
      <svg
        width="${i+25}mm"
        height="29mm"
        version="1.1"
        viewBox="0 0 ${i+25} 29"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="outline">
            <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="#4faaff" />
          </filter>
          <linearGradient
            id="tipGradient"
            x1="36.482"
            x2="50.447"
            y1="91.25"
            y2="91.25"
            gradientTransform="matrix(.8593 0 0 1.1151 -14.849 -92.256)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1a1a1a" offset="0" />
            <stop stop-color="#595959" offset=".4" />
            <stop stop-color="#595959" offset=".6" />
            <stop stop-color="#1a1a1a" offset="1" />
          </linearGradient>
          <radialGradient
            id="bodyGradient"
            cx="62.59"
            cy="65.437"
            r="22.5"
            gradientTransform="matrix(1.9295 3.7154e-8 0 .49697 -98.268 -23.02)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#d2d2d2" offset="0" />
            <stop stop-color="#7a7a7a" offset="1" />
          </radialGradient>
          <g id="screw">
            <circle cx="0" cy="0" r="1" fill="#858585" stroke="#000" stroke-width=".05" />
            <path d="m0 1 0-2" fill="none" stroke="#000" stroke-width=".151" />
          </g>
        </defs>
        <!-- pins -->
        <g fill="#ccc">
          <rect x="0" y="11" width="5" height="0.75" />
          <rect x="${i+20}" y="11" width="5" height="0.75" />
          <rect x="0" y="16.25" width="5" height="0.75" />
        </g>
        <g transform="translate(5 5)">
          <!-- Body -->
          <rect
            id="sliderCase"
            x="0"
            y="5"
            width="${i+15}"
            height="9"
            rx=".2"
            ry=".2"
            fill="url(#bodyGradient)"
            fill-rule="evenodd"
          />
          <rect
            x="3.25"
            y="8"
            width="${i+8.5}"
            height="3"
            rx=".1"
            ry=".1"
            fill="#3f1e1e"
          />
          <!-- Screw Left -->
          <g transform="translate(1.625 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Screw Right -->
          <g transform="translate(${i+13.375} 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Tip -->
          <g
            id="tip"
            transform="translate(${s} 0)"
            @mousedown=${this.down}
            @touchstart=${this.down}
            @touchmove=${this.touchMove}
            @touchend=${this.up}
            @keydown=${this.down}
            @keyup=${this.up}
            @click="${this.focusInput}"
          >
            <rect x="19.75" y="8.6" width="5.5" height="1.8" />
            <rect
              x="16.5"
              y="0"
              width="12"
              height="19"
              fill="url(#tipGradient)"
              stroke-width="2.6518"
              rx=".1"
              ry=".1"
            />
            <rect x="22.2" y="0" width=".6" height="19" fill="#efefef" />
          </g>
        </g>
        <rect x="0" y="14" width="1" height="1" fill="none" id="firefox-workaround" />
      </svg>
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.up),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseleave",this.up)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.up),window.removeEventListener("mousemove",this.mouseMove),window.removeEventListener("mouseleave",this.up)}focusInput(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".hide-input");null===t||void 0===t||t.focus()}down(){this.isPressed||this.updateCaseDisplayProperties(),this.isPressed=!0}updateCaseDisplayProperties(){var e,t,n;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#sliderCase"),r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#firefox-workaround");i&&r&&(this.pageToLocalTransformationMatrix=Je(i,r,new DOMRect(0,14,1,1)));const a=null===(n=getComputedStyle(window.document.body))||void 0===n?void 0:n.zoom;this.zoom=void 0!==a?Number(a):1}onInputValueChange(e){const t=e.target;t.value&&this.updateValue(Number(t.value))}touchMove(e){if(this.isPressed&&e.targetTouches.length>0){const t=e.targetTouches[0];this.updateValueFromXCoordinate(new DOMPointReadOnly(t.pageX,t.pageY))}}updateValueFromXCoordinate(e){if(this.pageToLocalTransformationMatrix){let t=new DOMPointReadOnly(e.x/this.zoom,e.y/this.zoom);t=t.matrixTransform(this.pageToLocalTransformationMatrix);const n=7.5,i=t.x-n,r=this.travelLength/(this.max-this.min);this.updateValue(Math.round(i/r))}}updateValue(e){this.value=Xe(this.min,this.max,e),this.dispatchEvent(new InputEvent("input",{detail:this.value}))}};Pt([ce({type:Number})],Ft.prototype,"travelLength",void 0),Pt([ce({type:Number})],Ft.prototype,"value",void 0),Pt([ce({type:Number})],Ft.prototype,"min",void 0),Pt([ce({type:Number})],Ft.prototype,"max",void 0),Pt([ce({type:Number})],Ft.prototype,"step",void 0),Ft=Pt([oe("wokwi-slide-potentiometer")],Ft);var Ut=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Bt=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:87.75,x:20.977,number:1,signals:[ye()]},{name:"VCC",y:87.75,x:30.578,number:2,signals:[ve()]},{name:"DAT",y:87.75,x:40.18,number:3,signals:[]}]}render(){return U`
      <svg
        version="1.1"
        viewBox="0 0 61.1 88.7"
        width="16.178mm"
        height="23.482mm"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#171514">
          <path
            d="m61.1 4.85c0-2.68-2.17-4.85-4.85-4.85h-51.4c-2.68 0-4.85 2.17-4.85 4.85v61c0 2.68 2.17 4.85 4.85 4.85h51.4c2.68 0 4.85-2.17 4.85-4.85zm-7.43 53.3c2.29 0 4.14 1.86 4.14 4.14 0 2.28-1.85 4.14-4.14 4.14s-4.14-1.86-4.14-4.14c0-2.29 1.85-4.14 4.14-4.14zm-46.3 0c2.29 0 4.14 1.86 4.14 4.14 0 2.28-1.85 4.14-4.14 4.14-2.29 0-4.14-1.86-4.14-4.14 0-2.29 1.85-4.14 4.14-4.14z"
            stroke-width=".987"
          />
          <rect x="16.5" y="58.2" width="28.2" height="8.28" stroke="#fff" stroke-width=".888px" />
          <rect x="14.2" y="23" width="11.3" height="4.66" stroke="#fff" stroke-width=".888px" />
        </g>
        <rect x="15.2" y="23.7" width="9.44" height="3.23" fill="#a19e9e" stroke-width=".987" />
        <g fill="#171514" stroke="#fff" stroke-width=".888px">
          <rect x="14.2" y="33" width="11.3" height="4.66" />
          <rect x="31.6" y="23" width="11.3" height="4.66" />
          <rect x="31.6" y="33" width="11.3" height="4.66" />
        </g>
        <g fill="#433b38" stroke-width=".987">
          <rect x="17.7" y="59.1" width="6.47" height="6.47" />
          <rect x="27.3" y="59.1" width="6.47" height="6.47" />
          <rect x="37" y="59.1" width="6.47" height="6.47" />
        </g>
        <g fill="#9f9f9f" stroke-width=".987">
          <path
            d="m22.4 62.5c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m32 62.5c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m41.6 62.5c0-0.377-0.15-0.739-0.417-1.01s-0.629-0.417-1.01-0.417c-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.419 0.419h2.01c0.231 0 0.419-0.188 0.419-0.419v-25.8z"
          />
        </g>
        <text transform="rotate(90)" fill="#ffffff" font-size="5px">
          <tspan x="45.369" y="-37.601">DAT</tspan>
          <tspan x="45.609" y="-28.801">VCC</tspan>
          <tspan x="45.359" y="-20.2">GND</tspan>
          <text font-size="5.71px">
            <tspan
              x="16.234 18.076 22.422 24.263 28.608 32.018 35.112 36.639 40.05 43.144 46.553"
              y="-52.266"
            >
              IR Reciever
            </tspan>
          </text>
        </text>
        <g fill="none" stroke="#fff">
          <path
            d="m56.3 6.32c-0.654 0.514-1.48 0.82-2.37 0.82-0.895 0-1.72-0.306-2.37-0.82"
            stroke-width=".316px"
          />
          <path
            d="m57.4 7.97c-0.949 0.745-2.14 1.19-3.44 1.19-1.3 0-2.49-0.445-3.44-1.19"
            stroke-width=".395px"
          />
          <path
            d="m58.9 9.32c-1.38 1.08-3.11 1.73-5 1.73s-3.62-0.646-5-1.73"
            stroke-width=".395px"
          />
        </g>
        <path
          d="m20.4 10.2h-6.13c-0.382 0-0.691 0.309-0.691 0.691v6.2c0 0.382 0.309 0.691 0.691 0.691h13c0.931 0.0563 1.88 0.0563 2.81 0h12.7c0.381 0 0.691-0.309 0.691-0.691v-6.2c0-0.382-0.31-0.691-0.691-0.691h-5.88c-1.39-3.12-4.55-5.31-8.23-5.31-3.68 0-6.84 2.19-8.23 5.31zm0.463 0.691c1.18-3.1 4.21-5.31 7.77-5.31 3.55 0 6.59 2.21 7.76 5.31h6.35v6.2h-12.7c-0.914 0.0563-1.85 0.0563-2.77 0h-13v-6.2z"
          fill="#fff"
          stroke-width=".987"
        />
        <path
          d="m28.6 6.32c4.01 0 7.27 3.26 7.27 7.27 0 4.01-14.5 4.01-14.5 0 0-4.01 3.26-7.27 7.27-7.27z"
          fill="#2d2624"
          stroke-width=".987"
        />
        <clipPath id="b">
          <path
            d="m37.2 14.5c4.06 0 7.36 3.3 7.36 7.36 0 4.06-14.7 4.06-14.7 0 0-4.06 3.3-7.36 7.36-7.36z"
          />
        </clipPath>
        <g transform="matrix(.987 0 0 .987 -8.13 -8.03)" clip-path="url(#b)">
          <path
            d="m37.2 12.3c-0.069 0.303 0.377 0.714 0.536 0.965 0.504 0.799 0.744 1.43 1.07 2.3 1.01 2.7 0.775 5.41 0.775 8.2 0 0.121 0.155-0.196 0.262-0.254 0.233-0.126 0.484-0.232 0.724-0.345 0.727-0.341 1.47-0.602 2.24-0.833 2.84-0.852 4.9-0.521 6.1-3.77 0.26-0.704 0.404-1.57 0.22-2.31-0.225-0.9-2.44-3.28-3.27-3.7-1.35-0.675-3.05-0.667-4.43-1.01-1.3-0.326-3.08-0.498-4.11 0.524"
            fill="#483f3c"
          />
        </g>
        <rect x="19.1" y="11" width="19.1" height="5.51" fill="#2d2624" stroke-width=".987" />
        <clipPath id="a"><rect x="27.6" y="19.3" width="19.3" height="5.58" /></clipPath>
        <g transform="matrix(.987 0 0 .987 -8.13 -8.03)" clip-path="url(#a)">
          <path
            d="m38.1 18.8c0.144 0.284 0.197 0.749 0.286 1.07 0.466 1.68 0.509 3.53 0.399 5.27-0.041 0.653-0.374 1.31-0.374 1.96 0 0.041 0.076-0.032 0.116-0.043 0.154-0.042 0.14-0.034 0.29-0.06 0.375-0.063 0.754-0.104 1.13-0.153 0.884-0.115 1.77-0.241 2.66-0.34 2.32-0.26 5.58 0.4 6.53-2.44 0.185-0.557 0.236-1.13 0.289-1.72 0.054-0.587 0.14-1.38-0.037-1.95-0.922-3-4.9-1.81-7.22-1.81-0.773 0-1.54 0.084-2.3 0.236-0.055 0.011-0.659 0.108-0.659 0.114"
            fill="#483f3c"
          />
        </g>
        <g fill="#a19e9e" stroke-width=".987">
          <circle cx="16.5" cy="14" r="1.44" />
          <circle cx="40.5" cy="14" r="1.44" />
          <rect x="15.2" y="33.7" width="9.44" height="3.23" />
          <rect x="32.5" y="23.7" width="9.44" height="3.23" />
          <rect x="32.5" y="33.7" width="9.44" height="3.23" />
        </g>
        <g stroke-width=".987">
          <rect x="17.9" y="23.7" width="3.93" height="3.23" fill="#8e7147" />
          <rect x="34.8" y="24.1" width="4.88" height="2.44" fill="#171514" />
          <rect x="34.8" y="34.1" width="4.88" height="2.44" fill="#171514" />
          <text fill="#ffffff" font-size="2.2px" stroke-width=".987">
            <tspan x="35.267719 36.591557 37.915394" y="26.1">103</tspan>
            <tspan x="35.267719 36.591557 37.915394" y="36.12">102</tspan>
          </text>
          <rect x="17.9" y="33.7" width="3.93" height="3.23" fill="#ccf9f9" />
        </g>
      </svg>
    `}};Bt=Ut([oe("wokwi-ir-receiver")],Bt);var Gt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const zt={power:162,menu:226,test:34,plus:2,back:194,prev:224,play:168,next:144,0:104,minus:152,c:176,1:48,2:24,3:122,4:16,5:56,6:90,7:66,8:74,9:82},Yt={o:"power",m:"menu",t:"test","+":"plus",b:"back",arrowleft:"prev",p:"play",arrowright:"next",0:"0","-":"minus",c:"c",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"};let $t=class extends ae{static get styles(){return s`
      use {
        fill: #fff;
      }

      use.red {
        fill: #e6252e;
      }

      use.black {
        fill: #121115;
      }

      use[tabindex] {
        cursor: pointer;
      }

      use.active {
        fill: #8c8;
      }

      use.red.active,
      use.black.active {
        fill: green;
      }

      use:focus {
        --circle-stroke-color: cyan;
        outline: none;
      }
    `}eventHandler(e,t,n){e.focus();const i=zt[t];switch(n){case"up":e.classList.remove("active"),this.dispatchEvent(new CustomEvent("button-release",{detail:{key:t,irCode:i}}));break;case"down":e.classList.add("active"),this.dispatchEvent(new CustomEvent("button-press",{detail:{key:t,irCode:i}}));break}}buttonEvent(e,t){var n;const i=e.target;if(!(i instanceof SVGElement))return null;const r=null!==(n=i.dataset.btn)&&void 0!==n?n:"";null!=r&&(e.preventDefault(),this.eventHandler(i,r,t))}keyboardEvent(e,t){var n;Te.includes(e.key)&&this.buttonEvent(e,t);const i=e.target,r=Yt[e.key.toLowerCase()];if(!(i instanceof SVGElement)||null==r)return;const a=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(`use[data-btn="${r}"]`);a&&a instanceof SVGElement&&this.eventHandler(a,r,t)}render(){return U`
      <?xml version="1.0" encoding="UTF-8"?>
      <svg
        version="1.1"
        viewBox="0 0 151 316"
        width="40mm"
        height="83.653mm"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
        @mousedown=${e=>this.buttonEvent(e,"down")}
        @mouseup=${e=>this.buttonEvent(e,"up")}
        @touchstart=${e=>this.buttonEvent(e,"down")}
        @touchend=${e=>this.buttonEvent(e,"up")}
        @keydown=${e=>this.keyboardEvent(e,"down")}
        @keyup=${e=>this.keyboardEvent(e,"up")}
      >
        <defs>
          <g id="button" stroke-width="1.29">
            <path
              fill="#272726"
              d="m0 -17.5c-9.73 0-17.6 7.9-17.6 17.6 0 9.73 7.9 17.6 17.6 17.6 9.73 0 17.6-7.9 17.6-17.6 0-9.73-7.9-17.6-17.6-17.6zm0 1.29c9.01 0 16.3 7.32 16.3 16.3 0 9.01-7.32 16.3-16.3 16.3-9.02 0-16.3-7.32-16.3-16.3 0-9.02 7.32-16.3 16.3-16.3z"
            />
            <circle r="16.3" style="stroke: var(--circle-stroke-color)" />
          </g>
          <circle id="button2" r="16.3" style="stroke: var(--circle-stroke-color)" />
        </defs>
        <path
          d="m149 21.3c0-10.5-8.52-19-19-19h-109c-10.5 0-19 8.52-19 19v274c0 10.5 8.52 19 19 19h109c10.5 0 19-8.52 19-19z"
          fill="#fff"
          stroke="#272726"
          stroke-width="4.53px"
        />
        <use xlink:href="#button2" x="29.6" y="37.9" data-btn="power" class="red" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="37.9" data-btn="menu" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="75.2" data-btn="test" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="75.5" y="75.2" data-btn="plus" class="black" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="75.2" data-btn="back" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="29.6" y="113" data-btn="prev" class="black" tabindex="0" />
        <use xlink:href="#button" x="75.5" y="113" data-btn="play" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="121.4" y="113" data-btn="next" class="black" tabindex="0" />
        <use xlink:href="#button" x="29.6" y="152" data-btn="0" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="75.5" y="152" data-btn="minus" class="black" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="152" data-btn="c" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="190" data-btn="1" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="190" data-btn="2" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="190" data-btn="3" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="228" data-btn="4" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="228" data-btn="5" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="228" data-btn="6" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="266" data-btn="7" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="266" data-btn="8" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="266" data-btn="9" tabindex="0" fill="#fff" />
        <g style="pointer-events: none">
          <g fill="none" stroke="#fff" stroke-width="1.94px">
            <path
              d="m33.5 33c2.05 1.28 3.42 3.56 3.42 6.16 0 4.01-3.26 7.26-7.26 7.26-4.01 0-7.26-3.25-7.26-7.26 0-2.49 1.26-4.69 3.17-6"
            />
            <path d="m29.6 29.3v7.41" />
          </g>
          <path d="m80.9 113-9.58 4.79v-9.58z" fill="#121115" stroke-width="1.29" />
          <path d="m123.4 113-9.58 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m129.4 113-8.95 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m129.4 109v9.58" fill="none" stroke="#fff" stroke-width="1.29" />
          <path d="m27.9 113 9.58 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m21.8 113 8.95 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m22.4 109v9.58" fill="none" stroke="#fff" stroke-width="1.29" />
          <text fill="#e6252e" font-size="9.72px" font-weight="700" stroke-width="1.29">
            <tspan x="106.892 115.469 122.432 129.931" y="41.288">MENU</tspan>
            <tspan x="16.488 22.904 29.866 36.829" y="78.679">TEST</tspan>
          </text>
          <g fill="none" stroke="#fff" stroke-width="1.29">
            <path d="m67.7 152h15.5" />
            <path d="m67.7 75.2h15.5M75.5 67.4v15.5" />
          </g>
          <g fill="#121115" stroke-width="1.29">
            <path
              d="m119.4 70.7v -3.25l-6.95 4.84 6.71 4.45 0.111-2.2s6.65-0.357 7.05 3.15c0.397 3.51-6.66 5.21-6.66 5.21s10.9-2.33 10.7-6.82c-0.276-5.4-10.9-5.39-10.9-5.39z"
            />
            <text font-size="13.9px" font-weight="700">
              <tspan x="25.312" y="156.434">0</tspan>
              <tspan x="116.973" y="156.498">C</tspan>
              <tspan x="25.312" y="194.685">1</tspan>
              <tspan x="71.776" y="194.685">2</tspan>
              <tspan x="118.06" y="194.6">3</tspan>
              <tspan x="25.312" y="232.851">4</tspan>
              <tspan x="71.776" y="232.679">5</tspan>
              <tspan x="118.199" y="232.767">6</tspan>
              <tspan x="25.312" y="270.931">7</tspan>
              <tspan x="71.776" y="270.931">8</tspan>
              <tspan x="118.124" y="270.931">9</tspan>
            </text>
          </g>
          <g fill="#fff" stroke-width="1.29">
            <path
              d="m18 28.5c0.687-0.757 1.5-1.41 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0828 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-0.0078 2.03 0.0427 1.02 0.0789 2.03 0.243 3 0.511 2.48 0.686 4.72 2.02 6.31 4.19 0.0323 0.0479 0.097 0.0608 0.145 0.0298 0.0479-0.0323 0.0621-0.097 0.0298-0.145-0.846-1.45-1.96-2.62-3.27-3.53-0.894-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.543-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.21 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0298 0.111 0.0155 0.146 0.0453 0.0362 0.11 0.0298 0.146-0.0155z"
            />
            <path
              d="m64 65.5c0.687-0.757 1.5-1.41 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.679-0.0181 1.36-0.0078 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0479 0.0957 0.0621 0.145 0.0298 0.0479-0.031 0.0608-0.0957 0.0297-0.145-0.847-1.45-1.97-2.62-3.27-3.53-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.545-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0285 0.111 0.0155 0.147 0.0453 0.0362 0.111 0.0285 0.147-0.0168z"
            />
            <path
              d="m18 104c0.687-0.757 1.5-1.42 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-8e-3 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.0323 0.0478 0.097 0.0621 0.145 0.0297 0.0479-0.031 0.0621-0.0957 0.0298-0.145-0.846-1.45-1.96-2.62-3.27-3.53-0.894-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.543-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.21 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0298 0.111 0.0155 0.147 0.0453 0.0362 0.11 0.0285 0.146-0.0168z"
            />
            <path
              d="m110.4 104c0.687-0.757 1.5-1.42 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-8e-3 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0478 0.0957 0.0621 0.145 0.0297 0.0479-0.031 0.0608-0.0957 0.0298-0.145-0.847-1.45-1.97-2.62-3.27-3.53-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.545-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0285 0.111 0.0155 0.147 0.0453 0.0362 0.111 0.0285 0.147-0.0168z"
            />
            <path
              d="m64 142c0.687-0.758 1.5-1.42 2.39-1.99 1.26-0.815 2.7-1.43 4.22-1.87 0.974-0.279 1.98-0.481 3-0.605 0.673-0.0828 1.35-0.129 2.03-0.147 0.679-0.0181 1.36-9e-3 2.03 0.0427 1.02 0.0789 2.03 0.243 3 0.511 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0491 0.0957 0.0621 0.145 0.031 0.0479-0.0323 0.0608-0.097 0.0297-0.145-0.847-1.45-1.97-2.62-3.27-3.54-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.435-2.45-0.71-3.73-0.829-0.545-0.0504-1.09-0.0698-1.64-0.0569-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.459-3.16 0.838-0.772 0.29-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.044-0.0285 0.11 0.0155 0.146 0.0453 0.0362 0.111 0.0284 0.147-0.0155z"
            />
          </g>
        </g>
      </svg>
    `}};$t=Gt([oe("wokwi-ir-remote")],$t);var Ht=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Vt=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"VCC",y:92,x:36.178,number:1,signals:[ve()]},{name:"OUT",y:92,x:45.9175,number:2,signals:[]},{name:"GND",y:92,x:55.6415,number:3,signals:[ye()]}]}render(){return U`
      <svg
        width="24mm"
        height="24.448mm"
        version="1.1"
        viewBox="0 0 90.7 92.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#c6bf95">
          <path
            d="m54.2 91c0 0.383 0.151 0.749 0.422 1.02 0.27 0.27 0.636 0.422 1.02 0.422h1e-3c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-26.1c0-0.234-0.189-0.423-0.423-0.423h-2.04c-0.234 0-0.423 0.189-0.423 0.423v26.1z"
          />
          <path
            d="m44.5 91c0 0.383 0.151 0.749 0.422 1.02 0.27 0.27 0.636 0.422 1.02 0.422h1e-3c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-26.1c0-0.234-0.189-0.423-0.423-0.423h-2.04c-0.234 0-0.423 0.189-0.423 0.423v26.1z"
          />
          <path
            d="m34.7 91c0 0.383 0.152 0.749 0.422 1.02s0.637 0.422 1.02 0.422 0.749-0.152 1.02-0.422 0.422-0.636 0.422-1.02v-26.1c0-0.234-0.19-0.423-0.424-0.423h-2.03c-0.234 0-0.424 0.189-0.424 0.423v26.1z"
          />
        </g>
        <path
          d="m90.7 0h-90.7v74.3h90.7zm-5.38 32.1c2.09 0 3.78 1.7 3.78 3.78s-1.7 3.78-3.78 3.78c-2.09 0-3.78-1.7-3.78-3.78s1.7-3.78 3.78-3.78zm-77.1 0c2.09 0 3.78 1.7 3.78 3.78s-1.7 3.78-3.78 3.78c-2.09 0-3.78-1.7-3.78-3.78s1.7-3.78 3.78-3.78z"
          fill="#253674"
        />
        <rect x="14.3" y="1.28" width="65.5" height="65.5" fill="#dde5e3" />
        <rect x="17.1" y="4.14" width="59.8" height="59.8" fill="#d1dfe1" />
        <circle cx="46.7" cy="33.8" r="31" fill="#d3d5d6" />
        <circle cx="46.7" cy="33.8" r="28.2" fill="#d9e1e1" />
        <clipPath id="a">
          <circle cx="52.5" cy="39.2" r="28.2" />
        </clipPath>
        <g transform="translate(-5.81 -5.45)" clip-path="url(#a)" fill="#fbfcfb">
          <path
            d="m52.8 13.7c11.2 2.94 21.3 18.3 21.8 30.5 0 0 6.16-8.84-2.25-20.6-7.05-9.89-19.5-9.87-19.5-9.87z"
          />
          <path
            d="m52.2 64.8c-7.37 0.013-19.8-6.53-22.1-14 0 0-0.102 4.33 6.99 10.2 5.95 4.94 15.1 3.75 15.1 3.75z"
          />
          <g fill="none" stroke="#d2d8d8" stroke-width=".4px">
            <path d="m32.9 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m49.3 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m65.6 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m81.9 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
          </g>
        </g>
        <text fill="#ffffff" font-family="sans-serif">
          <tspan x="33.293" y="73.864" font-size="9.88px">+</tspan>
          <tspan x="43.531" y="72.609" font-size="6.38px">D</tspan>
        </text>
        <path d="m57.9 70.8h-4.67v-0.81h4.67z" fill="#fff" />
      </svg>
    `}};Vt=Ht([oe("wokwi-pir-motion-sensor")],Vt);var qt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let jt=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:26.2,x:135,number:1,signals:[ye()]},{name:"VCC",y:35.8,x:135,number:2,signals:[ve()]},{name:"OUT",y:45.5,x:135,number:3,signals:[fe(0)]}]}render(){return U`
      <svg
        width="35.826mm"
        height="19mm"
        version="1.1"
        viewBox="0 0 135.4 71.782"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="a">
            <path
              d="m15.336 49.725c-0.945 0.682-2.127 1.088-3.411 1.088-3.104 0-5.612-2.374-5.612-5.281s2.508-5.281 5.612-5.281c1.038 0 2.009 0.266 2.842 0.728 2.108 0.79 3.314 1.004 5.699 0.917 0 0-2.134 1.335-1.968 2.97 0.149 1.458 3.053 2.494 3.053 2.494-2.438 0.388-4.177 1.403-6.215 2.365z"
            />
          </clipPath>
        </defs>
        <path
          d="m115.3 0h-90.421v71.782h90.421zm-66.145 56.313c3.27 0 5.925 2.608 5.925 5.878s-2.655 5.924-5.925 5.924-5.925-2.654-5.925-5.924 2.655-5.878 5.925-5.878zm16.013-7.96c3.27 0 5.925 2.654 5.925 5.924s-2.655 5.925-5.925 5.925-5.924-2.655-5.924-5.925 2.654-5.924 5.924-5.924zm-33.698 1.324c2.29 0 4.149 1.859 4.149 4.148 0 2.29-1.859 4.149-4.149 4.149-2.289 0-4.148-1.859-4.148-4.149 0-2.289 1.859-4.148 4.148-4.148zm59.914 0.635c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-11.4-8.143c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-14.816-1.811c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm0-15.974c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm14.816-3.203c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-14.816-9.601c3.27 0 5.925 2.654 5.925 5.924s-2.655 5.925-5.925 5.925-5.924-2.655-5.924-5.925 2.654-5.924 5.924-5.924zm-33.698 2.228c2.29 0 4.149 1.859 4.149 4.148 0 2.29-1.859 4.149-4.149 4.149-2.289 0-4.148-1.859-4.148-4.149 0-2.289 1.859-4.148 4.148-4.148zm59.914 0.288c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-48.154-5.701c0-1.635 2.963-4.729 5.925-4.729s5.925 3.094 5.925 4.729c0 3.27-2.655 7.121-5.925 7.121s-5.925-3.851-5.925-7.121z"
          fill="#0f3661"
        />
        <path
          d="m104.45 21.602v28.578h8.389v-28.578z"
          fill="none"
          stroke="#fff"
          stroke-width=".9px"
        />
        <g fill="#29261c">
          <path d="m105.37 42.328v6.554h6.554v-6.554z" />
          <path d="m105.37 32.604v6.554h6.554v-6.554z" />
          <path d="m105.37 22.865v6.554h6.554v-6.554z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m108.85 44.165c-0.382 0-0.749 0.151-1.019 0.422-0.27 0.27-0.422 0.636-0.422 1.018v1e-3c0 0.382 0.152 0.748 0.422 1.018s0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.189 0.424-0.423v-2.035c0-0.234-0.19-0.423-0.424-0.423h-26.131z"
          />
          <path
            d="m108.85 34.441c-0.382 0-0.749 0.151-1.019 0.422-0.27 0.27-0.422 0.636-0.422 1.018v1e-3c0 0.382 0.152 0.748 0.422 1.018s0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.189 0.424-0.423v-2.035c0-0.234-0.19-0.423-0.424-0.423h-26.131z"
          />
          <path
            d="m108.85 24.701c-0.382 0-0.749 0.152-1.019 0.422-0.27 0.271-0.422 0.637-0.422 1.019s0.152 0.749 0.422 1.019 0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.19 0.424-0.423v-2.035c0-0.234-0.19-0.424-0.424-0.424h-26.131z"
          />
        </g>
        <path d="m96.494 43.126v-14.495h-4.787v14.495z" fill="#bbb9b9" />
        <path d="m96.661 39.537v-7.317h-5.121v7.317z" fill="#29261c" />
        <g fill="none" stroke="#bbb9b9" stroke-linejoin="miter">
          <circle cx="31.465" cy="17.956" r="4.149" stroke-width="2.5px" />
          <circle cx="31.465" cy="53.825" r="4.149" stroke-width="2.5px" />
          <circle cx="65.163" cy="54.277" r="5.925" stroke-width=".95px" />
          <circle cx="65.163" cy="17.504" r="5.925" stroke-width=".95px" />
          <circle cx="65.163" cy="28.082" r="3.698" stroke-width="2.23px" />
          <circle cx="65.163" cy="44.056" r="3.698" stroke-width="2.23px" />
          <circle cx="49.15" cy="62.191" r="5.925" stroke-width=".75px" />
          <circle cx="49.15" cy="9.591" r="5.925" stroke-width=".75px" />
        </g>
        <ellipse cx="48.82" cy="25.397" rx="6.375" ry="4.839" fill="#bababa" />
        <ellipse cx="48.82" cy="46.384" rx="6.375" ry="4.839" fill="#bbb9b9" />
        <circle cx="48.82" cy="25.397" r="2.612" fill="#eceee9" />
        <circle cx="48.82" cy="46.384" r="2.612" fill="#eceee9" />
        <path
          d="m48.82 25.397c-8.828 4.288-19.813 9.008-38 11.393"
          fill="none"
          stroke="#d6d8d4"
          stroke-linejoin="miter"
          stroke-width=".95px"
        />
        <path
          d="m48.82 45.922c-9.482-5.223-20.452-6.013-38-4.789"
          fill="none"
          stroke="#d8d8d3"
          stroke-linejoin="miter"
          stroke-width=".95px"
        />
        <path
          d="m9.023 43.72c-0.945 0.682-2.127 1.088-3.411 1.088-3.104 0-5.612-2.374-5.612-5.281s2.508-5.281 5.612-5.281c1.038 0 2.009 0.266 2.842 0.728 2.108 0.79 3.314 1.004 5.699 0.917 0 0-2.134 1.335-1.968 2.97 0.149 1.458 3.053 2.494 3.053 2.494-2.438 0.388-4.177 1.403-6.215 2.365z"
          fill="#151312"
        />
        <g transform="translate(-6.313,-6.005)" clip-path="url(#a)">
          <path
            d="m16.648 41.782c-0.617 0-1.284-0.077-1.895 0-2.276 0.284-4.755 1.806-6.429 3.282-0.732 0.645-1.351 1.332-1.854 2.171-0.172 0.287-0.363 0.562-0.527 0.852-8e-3 0.012-0.215 0.396-0.248 0.362-0.152-0.151-0.044-0.995-0.044-1.151 0-1.394 0.015-2.694 0.341-4.059 0.435-1.827 0.867-4.205 2.407-5.497 0.593-0.497 1.419-0.714 2.138-0.941 0.989-0.311 2.096-0.55 3.145-0.406 1.754 0.241 3.113 2.109 3.428 3.768 0.08 0.421-0.08 0.892-0.08 1.31"
            fill="#615a59"
          />
        </g>
        <g r="3.698" fill="none" stroke="#bbb9b9" stroke-linejoin="miter" stroke-width="2.23px">
          <circle cx="91.379" cy="17.794" />
          <circle cx="91.379" cy="54.01" />
        </g>

        <path
          d="m79.979 41.028c3.519 0 6.375 2.168 6.375 4.839 0 2.67-2.856 4.839-6.375 4.839-3.518 0-6.375-2.169-6.375-4.839 0-2.671 2.857-4.839 6.375-4.839zm0 1.141c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698z"
          fill="#bbb9b9"
        />
        <path
          d="m79.979 20.04c3.519 0 6.375 2.169 6.375 4.839 0 2.671-2.856 4.839-6.375 4.839-3.518 0-6.375-2.168-6.375-4.839 0-2.67 2.857-4.839 6.375-4.839zm0 1.141c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698z"
          fill="#bbb9b9"
        />
        <path
          d="m89.905 44.462v-17.142h8.391v17.142z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".65px"
        />
        <text fill="#fffefe" font-family="sans-serif" transform="rotate(-90)">
          <tspan x="-39.297 -37.036 -34.776" y="95.418" font-size="3.735px">103</tspan>
          <tspan x="-61.485" y="111.57" font-size="9.778px">S</tspan>
          <tspan x="-15.512" y="111.573" font-size="15.828px">-</tspan>
        </text>
      </svg>
    `}};jt=qt([oe("wokwi-ntc-temperature-sensor")],jt);var Wt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Kt=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:17.8,x:87,number:1,signals:[ye()]},{name:"VCC",y:27.5,x:87,number:2,signals:[ve()]},{name:"OUT",y:37.5,x:87,number:3,signals:[]}]}render(){return U`
      <svg
        width="23.4mm"
        height="20.943mm"
        version="1.1"
        viewBox="0 0 88.4 79.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m71.2 0h-71.2v55.6h71.2zm-62.6 41.4c2.65 0 4.79 2.15 4.79 4.79 0 2.64-2.15 4.79-4.79 4.79-2.64 0-4.79-2.15-4.79-4.79 0-2.65 2.15-4.79 4.79-4.79zm0-36.7c2.65 0 4.79 2.15 4.79 4.79 0 2.64-2.15 4.79-4.79 4.79-2.64 0-4.79-2.15-4.79-4.79 0-2.65 2.15-4.79 4.79-4.79z"
          fill="#19365e"
        />
        <g transform="rotate(-90 31 151)">
          <text
            x="132.20599"
            y="184.995"
            fill="#fffefe"
            font-family="sans-serif"
            font-size="10.3px"
          >
            s
          </text>
        </g>
        <circle cx="22.6" cy="46.9" r="3.23" fill="#bbb9b9" />
        <circle cx="33.4" cy="46.9" r="3.23" fill="#bbb9b9" />
        <path d="m57.5 13.5v28.6h8.39v-28.6z" fill="none" stroke="#fff" stroke-width=".9px" />
        <g fill="#29261c">
          <path d="m58.4 34.2v6.55h6.55v-6.55z" />
          <path d="m58.4 24.5v6.55h6.55v-6.55z" />
          <path d="m58.4 14.8v6.56h6.55v-6.56z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m61.9 36.1c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 26.3c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 16.6c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.636-0.422 1.02v1e-3c0 0.382 0.152 0.748 0.422 1.02s0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.189-0.423-0.423-0.423h-26.1z"
          />
        </g>
        <g
          transform="translate(-6.88 -4.2)"
          fill="#0e0f0d"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.83px"
        >
          <circle cx="29.8" cy="22.6" r="2.59" />
          <circle cx="29.8" cy="12.2" r="2.59" />
          <circle cx="29.8" cy="41.3" r="2.59" />
          <circle cx="39.9" cy="22.6" r="2.59" />
          <circle cx="39.9" cy="12.2" r="2.59" />
          <circle cx="39.9" cy="41.3" r="2.59" />
        </g>
        <circle
          cx="8.58"
          cy="9.42"
          r="4.79"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.1px"
        />
        <circle
          cx="8.58"
          cy="46.2"
          r="4.79"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.1px"
        />
        <g transform="translate(-6.88 -4.2)">
          <rect x="26.5" y="59.8" width="16.4" height="20.9" fill="#d3d9de" />
          <circle cx="34.8" cy="64.3" r="2.37" fill="#a8b2c8" />
          <path
            d="m40.7 62.8h-2.75v19.2c0 0.364 0.145 0.713 0.403 0.971 0.257 0.258 0.607 0.402 0.971 0.402h1e-3c0.364 0 0.714-0.144 0.971-0.402 0.258-0.258 0.403-0.607 0.403-0.971v-19.2z"
            fill="#b9c5de"
          />
          <rect x="37.9" y="62.8" width="2.75" height="17.9" fill="#a8b2c8" />
          <path
            d="m32.4 69.5h-2.75v12.5c0 0.364 0.145 0.713 0.402 0.971 0.258 0.258 0.607 0.402 0.972 0.402s0.714-0.144 0.972-0.402c0.257-0.258 0.402-0.607 0.402-0.971v-12.5z"
            fill="#b9c5de"
          />
          <g fill="#a8b2c8">
            <rect x="29.6" y="69.5" width="2.75" height="11.2" />
            <path
              d="m35.5 72.2c0.142 0 0.277-0.056 0.377-0.156 0.101-0.1 0.157-0.236 0.157-0.377v-1.68c0-0.142-0.056-0.277-0.157-0.377-0.1-0.1-0.235-0.157-0.377-0.157h-3.97c-0.364 0-0.714 0.145-0.971 0.403-0.258 0.257-0.403 0.607-0.403 0.971v1e-3c0 0.364 0.145 0.713 0.403 0.971 0.257 0.258 0.607 0.402 0.971 0.402h3.97z"
            />
            <path
              d="m38.8 65.5c0.141 0 0.277-0.056 0.377-0.156s0.157-0.236 0.157-0.377v-1.68c0-0.142-0.057-0.277-0.157-0.377-0.1-0.101-0.236-0.157-0.377-0.157h-3.97c-0.364 0-0.714 0.145-0.972 0.403-0.257 0.257-0.402 0.607-0.402 0.971v1e-3c0 0.364 0.145 0.713 0.402 0.971 0.258 0.258 0.608 0.402 0.972 0.402h3.97z"
            />
          </g>
        </g>
        <path
          d="m31.8 15h2.49v-6.79c0-0.33-0.131-0.647-0.365-0.88-0.233-0.234-0.55-0.365-0.88-0.365h-1e-3c-0.33 0-0.647 0.131-0.88 0.365-0.234 0.233-0.365 0.55-0.365 0.88z"
          fill="#d2d2d2"
        />
        <path
          d="m21.7 15h2.49v-6.79c0-0.33-0.131-0.647-0.365-0.88-0.233-0.234-0.55-0.365-0.88-0.365h-1e-3c-0.33 0-0.647 0.131-0.88 0.365-0.234 0.233-0.365 0.55-0.365 0.88z"
          fill="#d2d2d2"
        />
        <g transform="translate(-6.88 -4.2)">
          <rect x="47" y="29.2" width="13.4" height="4.43" fill="#bbb9b9" />
          <rect x="50.3" y="29" width="6.77" height="4.74" fill="#29261c" />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <rect x="47" y="20" width="13.4" height="4.43" fill="#bbb9b9" />
          <rect x="50.3" y="19.9" width="6.77" height="4.74" fill="#29261c" />
        </g>
        <path
          d="m38.9 23.3h15.9v7.76h-15.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".6px"
        />
        <path
          d="m38.9 14.1h15.9v7.76h-15.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".6px"
        />
        <path
          d="m37.4 15.4h-19v19.1c0 5.24 4.24 9.48 9.48 9.48 5.24 0 9.48-4.24 9.48-9.48z"
          fill="#fdfefe"
        />
        <clipPath id="c">
          <path d="m44.3 19.6h-19v19.1c0 5.24 4.24 9.48 9.48 9.48 5.24 0 9.48-4.24 9.48-9.48z" />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#c)">
          <path
            d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            fill="#fff"
          />
        </g>
        <path
          d="m35.4 15.4h-15v18.8c0 1.98 0.789 3.89 2.19 5.29 1.4 1.4 3.31 2.19 5.29 2.19s3.89-0.788 5.29-2.19c1.4-1.4 2.19-3.31 2.19-5.29z"
          fill="#d5d5d5"
        />
        <clipPath id="b">
          <path
            d="m42.3 19.6h-15v18.8c0 1.98 0.789 3.89 2.19 5.29 1.4 1.4 3.31 2.19 5.29 2.19s3.89-0.788 5.29-2.19c1.4-1.4 2.19-3.31 2.19-5.29z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#b)">
          <g fill="#b1b1b1">
            <path d="m31.4 29.6v-10h-3.02v13.7h12.9l-3.67-3.65z" />
            <path d="m41.3 30.4-3.18-3.2v-7.56h3.18z" />
          </g>
          <path
            d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            fill="#e2e2e2"
          />
          <clipPath id="a">
            <path
              d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            />
          </clipPath>
          <g clip-path="url(#a)">
            <path d="m31.4 29.6v-10h-3.02v13.7h12.9l-3.67-3.65z" fill="#c7c7c7" />
          </g>
        </g>
        <rect x="17.3" y="11.7" width="21.3" height="3.68" fill="#fdfefe" />
        <path
          d="m64 9.39h-4.68"
          fill="none"
          stroke="#fffefe"
          stroke-linejoin="miter"
          stroke-width=".85px"
        />
      </svg>
    `}};Kt=Wt([oe("wokwi-heart-beat-sensor")],Kt);var Qt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Xt=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:18,x:88,number:1,signals:[ye()]},{name:"VCC",y:27.8,x:88,number:2,signals:[ve()]},{name:"OUT",y:37.5,x:88,number:3,signals:[]}]}render(){return U`
      <svg
        width="23.4mm"
        height="14.7mm"
        version="1.1"
        viewBox="0 0 88.4 55.6"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m71.2 0h-71.2v55.6h71.2zm-54.1 43.8c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96zm13.8-3.78c2.03 0 3.68 1.7 3.68 3.78s-1.65 3.78-3.68 3.78-3.68-1.7-3.68-3.78 1.65-3.78 3.68-3.78zm0-31.5c2.03 0 3.68 1.7 3.68 3.78 0 2.09-1.65 3.78-3.68 3.78s-3.68-1.7-3.68-3.78c0-2.09 1.65-3.78 3.68-3.78zm-13.8-6.6c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96z"
          fill="#19365e"
        />
        <clipPath id="g">
          <path
            d="m78.1 4.2h-71.2v55.6h71.2zm-54.1 43.8c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96zm13.8-3.78c2.03 0 3.68 1.7 3.68 3.78s-1.65 3.78-3.68 3.78-3.68-1.7-3.68-3.78 1.65-3.78 3.68-3.78zm0-31.5c2.03 0 3.68 1.7 3.68 3.78 0 2.09-1.65 3.78-3.68 3.78s-3.68-1.7-3.68-3.78c0-2.09 1.65-3.78 3.68-3.78zm-13.8-6.6c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#g)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#1b2f4c"
          />
        </g>
        <text
          transform="rotate(-90 31 151)"
          x="132.20"
          y="184.995"
          fill="#fffefe"
          font-size="10.3px"
        >
          s
        </text>
        <g fill="#bbb9b9">
          <ellipse cx="18.5" cy="18.5" rx="5.21" ry="3.44" />
          <ellipse cx="42.3" cy="18.5" rx="5.21" ry="3.44" />
          <ellipse cx="18.5" cy="37.2" rx="5.21" ry="3.44" />
          <ellipse cx="42.3" cy="37.2" rx="5.21" ry="3.44" />
        </g>
        <path d="m57.5 13.5v28.6h8.39v-28.6z" fill="none" stroke="#fff" stroke-width=".9px" />
        <g fill="#29261c">
          <path d="m58.4 34.2v6.55h6.55v-6.55z" />
          <path d="m58.4 24.5v6.55h6.55v-6.55z" />
          <path d="m58.4 14.8v6.56h6.55v-6.56z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m61.9 36.1c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 26.3c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 16.6c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.636-0.422 1.02v1e-3c0 0.382 0.152 0.748 0.422 1.02s0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.189-0.423-0.423-0.423h-26.1z"
          />
        </g>
        <g fill="#0e0f0d" stroke="#bbb9b9" stroke-linejoin="miter" stroke-width="1.83px" r="2.59">
          <circle cx="42.2" cy="18.4" />
          <circle cx="18.4" cy="18.4" />
          <circle cx="18.4" cy="37.1" />
          <circle cx="42.2" cy="37.1" />
        </g>
        <ellipse
          cx="17.1"
          cy="48.7"
          rx="4.82"
          ry="4.96"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.12px"
        />
        <path
          d="m30.8 39.6c-2.26 0-4.1 1.88-4.1 4.21 0 2.33 1.84 4.21 4.1 4.21s4.1-1.88 4.1-4.21c0-2.33-1.84-4.21-4.1-4.21zm0 0.855c1.8 0 3.25 1.51 3.25 3.36s-1.45 3.36-3.25 3.36-3.25-1.51-3.25-3.36 1.45-3.36 3.25-3.36z"
          fill="#bbb9b9"
        />
        <clipPath id="f">
          <path
            d="m37.7 43.8c-2.26 0-4.1 1.88-4.1 4.21 0 2.33 1.84 4.21 4.1 4.21s4.1-1.88 4.1-4.21c0-2.33-1.84-4.21-4.1-4.21zm0 0.855c1.8 0 3.25 1.51 3.25 3.36s-1.45 3.36-3.25 3.36-3.25-1.51-3.25-3.36 1.45-3.36 3.25-3.36z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#f)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#8e8e8e"
          />
        </g>
        <ellipse
          cx="30.8"
          cy="12.3"
          rx="3.68"
          ry="3.78"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width=".86px"
        />
        <ellipse
          cx="17.1"
          cy="6.86"
          rx="4.82"
          ry="4.96"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.12px"
        />
        <path
          d="m24.6 33.6-1.62-1.89s-3.45 2.95-5.16 4.41c-0.251 0.215-0.407 0.521-0.432 0.85-0.026 0.329 0.08 0.655 0.295 0.906v1e-3c0.215 0.25 0.521 0.406 0.85 0.431 0.329 0.026 0.655-0.08 0.906-0.295 1.72-1.47 5.16-4.42 5.16-4.42z"
          fill="#d2d2d2"
        />
        <clipPath id="e">
          <path
            d="m31.5 37.8-1.62-1.89s-3.45 2.95-5.16 4.41c-0.251 0.215-0.407 0.521-0.432 0.85-0.026 0.329 0.08 0.655 0.295 0.906v1e-3c0.215 0.25 0.521 0.406 0.85 0.431 0.329 0.026 0.655-0.08 0.906-0.295 1.72-1.47 5.16-4.42 5.16-4.42z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#e)">
          <path
            d="m31 36.9c-0.189 0.025-0.301 0.185-0.449 0.294-0.418 0.309-0.808 0.635-1.19 0.985-1 0.927-2.03 1.82-3.05 2.73-0.259 0.231-0.576 0.388-0.836 0.617-0.587 0.517-1.13 1.14-1.91 1.35-0.089 0.025-0.25 0.124-0.334 0.124-0.057 0 0.112-6e-3 0.168 0 0.093 9e-3 0.179 0.032 0.275 0.037 0.342 0.017 0.701 0.016 1.04-5e-3 0.994-0.062 2.05-0.419 3.01-0.675 1.54-0.411 2.9-1.01 4.09-2.12 0.52-0.486 0.938-1.08 1.38-1.64 0.582-0.723 1.1-1.47 1.41-2.35 0.018-0.052-0.326-0.106-0.365-0.114-0.472-0.095-0.911-0.123-1.4-0.123-0.655 0-1.44 0.626-2 0.894-0.412 0.196-1.25 0.443-1.56 0.866"
            fill="#ececec"
          />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <path d="m56.6 33.8v10.9h3.6v-10.9z" fill="#bbb9b9" />
          <path d="m56.5 36.5v5.5h3.85v-5.5z" fill="#29261c" />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <path d="m56.6 19.7v10.9h3.6v-10.9z" fill="#bbb9b9" />
          <clipPath id="d">
            <path d="m56.6 19.7v10.9h3.6v-10.9z" />
          </clipPath>
          <g clip-path="url(#d)">
            <path
              d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
              fill="#9c9b9b"
            />
          </g>
          <path d="m56.5 22.4v5.5h3.85v-5.5z" fill="#29261c" />
          <clipPath id="c">
            <path d="m56.5 22.4v5.5h3.85v-5.5z" />
          </clipPath>
          <g clip-path="url(#c)">
            <path
              d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            />
          </g>
        </g>
        <path
          d="m54.7 28.6v12.9h-6.3v-12.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".49px"
        />
        <path d="m48.2 14.3v13.4h6.79v-13.4zm0.489 5.11v-4.62h5.81v4.62 7.76h-5.81z" fill="#fff" />
        <clipPath id="b">
          <path d="m55 18.5v13.4h6.79v-13.4zm0.489 5.11v-4.62h5.81v4.62 7.76h-5.81z" />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#b)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#d4d4d4"
          />
        </g>
        <path
          d="m61.6 10.4v-4.68"
          fill="none"
          stroke="#fffefe"
          stroke-linejoin="miter"
          stroke-width=".85px"
        />
        <g fill="#a19e9e">
          <circle cx="4.64" cy="41.4" r="2.88" />
          <circle cx="4.64" cy="14.2" r="2.88" />
          <circle cx="51.4" cy="8.74" r="2.88" />
          <circle cx="51.4" cy="45.6" r="2.88" />
        </g>
        <g fill="#29261c">
          <circle cx="51.4" cy="45.6" r="1.47" />
          <circle cx="4.64" cy="41.4" r="1.47" />
          <circle cx="4.64" cy="14.2" r="1.47" />
          <circle cx="51.4" cy="8.74" r="1.47" />
        </g>
        <path
          d="m45.4 12.3 1.65 1.86s3.4-3 5.09-4.5c0.247-0.219 0.397-0.527 0.417-0.857 0.02-0.329-0.091-0.653-0.31-0.901h-1e-3c-0.218-0.247-0.527-0.398-0.856-0.418-0.33-0.02-0.654 0.092-0.901 0.311-1.69 1.5-5.09 4.5-5.09 4.5z"
          fill="#d2d2d2"
        />
        <clipPath id="a">
          <path
            d="m52.2 16.5 1.65 1.86s3.4-3 5.09-4.5c0.247-0.219 0.397-0.527 0.417-0.857 0.02-0.329-0.091-0.653-0.31-0.901h-1e-3c-0.218-0.247-0.527-0.398-0.856-0.418-0.33-0.02-0.654 0.092-0.901 0.311-1.69 1.5-5.09 4.5-5.09 4.5z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#a)">
          <path
            d="m52.8 17.4c0.188-0.028 0.297-0.19 0.444-0.302 0.413-0.316 0.797-0.648 1.17-1 0.986-0.943 2-1.86 3-2.78 0.255-0.235 0.569-0.398 0.825-0.63 0.579-0.527 1.11-1.16 1.89-1.38 0.088-0.026 0.248-0.127 0.332-0.129 0.057-1e-3 -0.112 8e-3 -0.168 3e-3 -0.093-7e-3 -0.18-0.03-0.276-0.033-0.342-0.011-0.701-4e-3 -1.04 0.023-0.993 0.079-2.04 0.453-2.99 0.725-1.53 0.437-2.89 1.06-4.05 2.19-0.512 0.494-0.92 1.1-1.36 1.66-0.569 0.733-1.08 1.49-1.37 2.37-0.017 0.053 0.328 0.101 0.367 0.108 0.474 0.088 0.913 0.107 1.4 0.099 0.654-0.011 1.42-0.649 1.98-0.927"
            fill="#ececec"
          />
        </g>
        <path
          d="m42.2 6.32c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.256 0.299 0.706 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.256 0.334-0.705 0.078-1-1.83-2.14-8.55-9.99-10.4-12.1z"
          fill="#4a91ce"
        />
      </svg>
    `}};Xt=Qt([oe("wokwi-tilt-switch")],Xt);var Zt=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Jt=class extends ae{constructor(){super(...arguments),this.ledPower=!1,this.ledSignal=!1,this.pinInfo=[{name:"VCC",y:14.6,x:199,number:1,signals:[ve()]},{name:"GND",y:24.3,x:199,number:2,signals:[ye()]},{name:"DOUT",y:34,x:199,number:3,signals:[]},{name:"AOUT",y:43.7,x:199,number:4,signals:[]}]}render(){const{ledPower:e,ledSignal:t}=this;return U`
      <svg
        width="52.904mm"
        heigth="16.267mm"
        version="1.1"
        viewBox="0 0 200 61.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m180 1.49e-7h-136v61.5h136zm-129 52c1.9 0 3.44 1.5 3.44 3.34s-1.54 3.34-3.44 3.34-3.44-1.5-3.44-3.34 1.54-3.34 3.44-3.34zm98.3-29.8c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55zm-98.3-19.4c1.9 0 3.44 1.5 3.44 3.34 0 1.84-1.54 3.34-3.44 3.34s-3.44-1.5-3.44-3.34c0-1.84 1.54-3.34 3.44-3.34z"
          fill="#1c2546"
        />
        <rect
          x="45.5"
          y="20.1"
          width="11.2"
          height="22.2"
          fill="none"
          stroke="#fff"
          stroke-width="1.08px"
        />
        <circle cx="51.1" cy="25.6" r="3.14" fill="#dae3eb" />
        <circle cx="51.1" cy="36.8" r="3.14" fill="#dae3eb" />
        <path
          d="m51.1 25.7c0-0.199-0.079-0.39-0.219-0.53-0.141-0.141-0.332-0.22-0.53-0.22h-13.2v1.5h13.2c0.198 0 0.389-0.079 0.53-0.219 0.14-0.141 0.219-0.332 0.219-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m51.1 36.7c0-0.198-0.079-0.389-0.219-0.53-0.141-0.14-0.332-0.219-0.53-0.219h-13.2v1.5h13.2c0.198 0 0.389-0.079 0.53-0.22 0.14-0.14 0.219-0.331 0.219-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m35.2 20.1h-25.2c-5.49 0-9.94 4.45-9.94 9.94v1e-3c0 5.49 4.45 9.94 9.94 9.94h25.2z"
          fill="#29261c"
        />
        <clipPath id="c">
          <path
            d="m35.18 20.14h-25.2c-5.49 0-9.94 4.45-9.94 9.94v1e-3c0 5.49 4.45 9.94 9.94 9.94h25.2z"
          />
        </clipPath>
        <g clip-path="url(#c)">
          <path
            d="m37.68 21.94c-12.6 0-25.1-0.227-37.7 0.917-0.196 0.018 0 4.25 0 4.25 12.8-1.41 25-1.08 37.7-0.669z"
            fill="#47434d"
          />
        </g>
        <rect x="32.6" y="17.9" width="5.06" height="25.7" fill="#29261c" />
        <clipPath id="b">
          <rect x="32.68" y="17.94" width="5.06" height="25.7" />
        </clipPath>
        <g clip-path="url(#b)">
          <path
            d="m51.98 20.84c-12.6 0-25.1-0.228-37.7 0.916-0.195 0.018 0 4.25 0 4.25 12.8-1.41 25-1.08 37.7-0.669z"
            fill="#47434d"
          />
        </g>
        <g fill="none" stroke-width="1.08px">
          <g stroke="#fff">
            <path d="m70.2 32.4h-7.47v9.67h7.47" />
            <path d="m136 10.4v-7.47h-9.67v7.47" />
            <path d="m155 12.8h7.47v-9.67h-7.47" />
            <path d="m155 55.8h7.47v-9.67h-7.47" />
            <path d="m136 43v-7.47h-9.67v7.47" />
            <path d="m70.2 45.2h-7.47v9.67h7.47" />
            <path d="m75.1 32.4h7.47v9.67h-7.47" />
            <path d="m136 15.2v7.47h-9.67v-7.47" />
            <path d="m151 12.8h-7.47v-9.67h7.47" />
            <path d="m151 55.8h-7.47v-9.67h7.47" />
            <path d="m136 47.9v7.47h-9.67v-7.47" />
            <path d="m75.1 45.2h7.47v9.67h-7.47" />
            <path
              d="m75.1 20h4.46c2.67 0 4.83 2.16 4.83 4.84v1e-3c0 2.67-2.16 4.84-4.83 4.84h-4.46"
            />
            <path
              d="m75.1 6.62h4.46c2.67 0 4.83 2.16 4.83 4.83v1e-3c0 2.67-2.16 4.84-4.83 4.84h-4.46"
            />
            <path
              d="m70.2 20h-4.46c-2.67 0-4.83 2.16-4.83 4.84v1e-3c0 2.67 2.16 4.84 4.83 4.84h4.46"
            />
            <path
              d="m70.2 6.62h-4.46c-2.67 0-4.83 2.16-4.83 4.83v1e-3c0 2.67 2.16 4.84 4.83 4.84h4.46"
            />
          </g>
          <ellipse cx="51.1" cy="6.11" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <ellipse cx="51.1" cy="55.4" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <g stroke="#fff">
            <path d="m50.6 44.7v4.75" />
            <path d="m50.6 12.1v4.75" />
            <path d="m53 14.5h-4.75" />
          </g>
        </g>
        <g fill="#dae3eb">
          <rect x="64.3" y="8.69" width="16.7" height="5.52" />
          <rect x="64.3" y="22" width="16.7" height="5.52" />
          <rect x="64.3" y="34.5" width="16.7" height="5.52" />
        </g>
        <rect x="68.4" y="34.3" width="8.43" height="5.9" fill="#29261c" />
        <path d="m134 21.2v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m134 17v-8.43h-5.9v8.43z" fill="#29261c" />

        <!-- LEDs -->
        <rect x="145" y="5.23" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="149" y="5.04" width="8.43" height="5.9" fill="#fffefe" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${e&&B`<circle cx="153.2" cy="7.5" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}
        <rect x="145" y="48.3" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="149" y="48.1" width="8.43" height="5.9" fill="#fffefe" />
        ${t&&B`<circle cx="153.2" cy="51.3" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <path d="m134 53.8v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m134 49.7v-8.43h-5.9v8.43z" fill="#29261c" />
        <rect x="64.3" y="47.5" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="68.4" y="8.5" width="8.43" height="5.9" fill="#907463" />
        <rect x="68.4" y="21.8" width="8.43" height="5.9" fill="#907463" />
        <rect x="68.4" y="47.3" width="8.43" height="5.9" fill="#29261c" />
        <g fill="#dae3eb">
          <path
            d="m99.2 34.6h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 40.4h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 46.2h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 52h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m111 55.1h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 49.3h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 43.5h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 37.7h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
        </g>
        <rect x="97.6" y="33.2" width="16.1" height="23.3" fill="#29261c" />
        <rect x="89.4" width="32.1" height="32.1" fill="#466fb5" />
        <g fill="none" stroke="#2e60aa" stroke-width="1.63px">
          <path d="m95.6 7.35 13.9 17.1" />
          <path d="m112 8.62-14.9 13.2" />
          <path d="m114 12.7-19.2 5.13" />
          <path d="m114 17.3-19.5-4.06" />
          <path d="m113 21.8-5.14-4.58" />
          <path d="m105 27.6v-9.83" />
          <path d="m100 24.7 3.14-5.18" />
        </g>
        <circle cx="105" cy="16" r="6.56" fill="#bcc2d5" />
        <clipPath id="a">
          <circle cx="105.08" cy="16.04" r="6.56" />
        </clipPath>
        <g clip-path="url(#a)" fill="none" stroke="#3f3c40" stroke-width="2.5px">
          <path d="m105.08 6.74v18.6" />
          <path d="m115.08 16.04h-18.6" />
        </g>
        <path
          d="m149 19.8c5.5 0 9.96 4.46 9.96 9.96s-4.46 9.96-9.96 9.96-9.96-4.46-9.96-9.96 4.46-9.96 9.96-9.96zm0 2.4c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55z"
          fill="#d4d0d1"
        />
        <path
          d="m169.1 10.2v38.6h8.39v-38.6z"
          fill="#1c2546"
          stroke="#fff"
          stroke-linejoin="round"
          stroke-width=".9px"
        />
        <g fill="#29261c">
          <path d="m170 40.75v6.55h6.55v-6.55z" />
          <path d="m170 31.05v6.55h6.55v-6.55z" />
          <path d="m170 21.25v6.55h6.55v-6.55z" />
          <path d="m170 11.55v6.55h6.55v-6.55z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m173 42.55c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.271-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
          <path
            d="m173 32.85c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.271-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
          <path
            d="m173 23.15c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.27-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />

          <path
            d="m173 13.45c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.27-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
        </g>
        <text fill="#fffefe" font-family="sans-serif" font-size="8px">
          <tspan x="171" y="10">+</tspan>
          <tspan x="164.3" y="26.5">-</tspan>
          <tspan x="162.5" y="36.9">D</tspan>
          <tspan x="171" y="56">A</tspan>
        </text>
      </svg>
    `}};Zt([ce()],Jt.prototype,"ledPower",void 0),Zt([ce()],Jt.prototype,"ledSignal",void 0),Jt=Zt([oe("wokwi-flame-sensor")],Jt);var en=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let tn=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"AOUT",y:16.5,x:137,number:1,signals:[]},{name:"DOUT",y:26.4,x:137,number:2,signals:[]},{name:"GND",y:36.5,x:137,number:3,signals:[ye()]},{name:"VCC",y:46.2,x:137,number:4,signals:[ve()]}]}render(){return U`
      <svg
        width="36.232mm"
        height="16.617mm"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 137 59.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="a" width="4.1" height="4.1" patternUnits="userSpaceOnUse">
            <path
              d="m0 0v4.09h0.4v-0.85l0.42 0.381v0.469h0.4v-0.0996l0.109 0.0996h0.711v-0.799l0.42 0.379v0.42h0.398v-0.0488l0.0547 0.0488h0.766v-0.75l0.42 0.381v0.369h0.4v-4.09h-0.4v0.311l-0.334-0.311h-0.598l0.111 0.0996v0.9l-0.42-0.379v-0.621h-0.398v0.25l-0.277-0.25h-0.6l0.0566 0.0508v0.9l-0.42-0.381v-0.57h-0.4v0.201l-0.223-0.201zm0.4 0.359 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.391v0.889l-0.42-0.379zm1.64 0.0605 0.42 0.379v0.891l-0.42-0.381zm-2.46 0.639 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.381v0.898l-0.42-0.379zm-2.46 0.641 0.42 0.379v0.9l-0.42-0.379zm1.64 0.0488 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.379v0.9l-0.42-0.379zm-2.46 0.65 0.42 0.379v0.9l-0.42-0.379zm1.64 0.0488 0.42 0.381v0.9l-0.42-0.381z"
              fill="#949392"
            />
          </pattern>
          <g id="pin">
            <path
              fill="#c6bf95"
              d="m29 4.6c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-1e-3c0-0.382-0.152-0.748-0.422-1.02s-0.636-0.422-1.02-0.422h-26.1c-0.234 0-0.423 0.189-0.423 0.423v2.04c0 0.234 0.189 0.423 0.423 0.423h26.1z"
            />
            <rect x="0" y="0" width="6.9" height="6.9" />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m113 0h-113v59.5h113zm-1.6 53.2c0 2.62-2.12 4.74-4.74 4.74s-4.74-2.12-4.74-4.74c0-2.62 2.12-4.74 4.74-4.74s4.74 2.12 4.74 4.74zm-110 0c0 2.62 2.12 4.74 4.74 4.74 2.62 0 4.74-2.12 4.74-4.74 0-2.62-2.12-4.74-4.74-4.74-2.62 0-4.74 2.12-4.74 4.74zm105-51.6c2.62 0 4.74 2.12 4.74 4.74 0 2.62-2.12 4.74-4.74 4.74s-4.74-2.12-4.74-4.74c0-2.62 2.12-4.74 4.74-4.74zm-101 0c-2.62 0-4.74 2.12-4.74 4.74 0 2.62 2.12 4.74 4.74 4.74 2.62 0 4.74-2.12 4.74-4.74 0-2.62-2.12-4.74-4.74-4.74z"
          fill="#0664af"
        />

        <!-- Pins -->
        <use xlink:href="#pin" x="107" y="12" />
        <use xlink:href="#pin" x="107" y="21.3" />
        <use xlink:href="#pin" x="107" y="31.1" />
        <use xlink:href="#pin" x="107" y="40.9" />

        <!-- Sensor -->
        <circle cx="47.7" cy="29.8" r="31.2" fill="none" stroke="#fff" stroke-width=".4px" />
        <circle cx="47.7" cy="29.8" r="28.8" fill="#dedede" />
        <circle cx="47.7" cy="29.8" r="25.8" fill="#d0ccc4" />
        <circle cx="47.7" cy="29.8" r="21.4" fill="#bab3ad" />
        <circle cx="47.7" cy="29.8" r="21.4" fill="url(#a)" />

        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="94.656" y="16.729">AOUT</tspan>
          <tspan x="94.656" y="26.098">DOUT</tspan>
          <tspan x="94.656" y="35.911">GND</tspan>
          <tspan x="94.656" y="45.696">VCC</tspan>
        </text>
      </svg>
    `}};tn=en([oe("wokwi-gas-sensor")],tn);var nn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let rn=class extends ae{constructor(){super(...arguments),this.led1=!1,this.ledPower=!1,this.resetPressed=!1,this.pinInfo=[{name:"GND.1",x:218.5,y:23.3,signals:[{type:"power",signal:"GND"}]},{name:"VCC.1",x:218.5,y:32.9,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"PB4",x:218.5,y:42.5,signals:[fe(2),{type:"pwm"}]},{name:"PB5",x:218.5,y:52.2,signals:[fe(0)]},{name:"PB3",x:218.5,y:61.7,signals:[fe(3)]},{name:"PB2",x:218.5,y:71.2,signals:[Se("SCK"),Ee("SCL"),fe(1)]},{name:"PB1",x:218.5,y:80.9,signals:[Se("MISO"),{type:"pwm"}]},{name:"PB0",x:218.5,y:90.5,signals:[Se("MOSI"),Ee("SDA"),{type:"pwm"}]},{name:"VIN",x:132.7,y:8.1,signals:[{type:"power",signal:"VCC"}]},{name:"GND.2",x:142.9,y:8.1,signals:[{type:"power",signal:"GND"}]},{name:"VCC.2",x:153,y:8.1,signals:[{type:"power",signal:"VCC",voltage:5}]}]}static get styles(){return s`
      text {
        font-size: 2px;
        font-family: monospace;
        user-select: none;
      }
      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: #eee;
        outline: none;
      }
    `}render(){const{ledPower:e,led1:t}=this;return U`
      <svg
        width="64mm"
        height="30mm"
        version="1.1"
        viewBox="0 0 64 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${he}

        <!-- PCB -->
        <path
          d="M63.1 0H12.5v30h50.6V0zM22.2 25.9a1.57 1.57 0 11-.002 3.142A1.57 1.57 0 0122.2 25.9zm38.4 0a1.57 1.57 0 11-.002 3.138A1.57 1.57 0 0160.6 25.9zM22.2 1a1.57 1.57 0 110 3.14 1.57 1.57 0 010-3.14zm38.4 0a1.57 1.57 0 11-.002 3.142A1.57 1.57 0 0160.6 1z"
          fill="#2c8240"
        />

        <!-- Holes -->
        <g fill="#e6e6e6">
          <path
            d="M30.6 3.3a.752.752 0 10-1.503 0v1.46a.752.752 0 001.503 0V3.3zM26.3 3.3a.752.752 0 00-1.504 0v1.46a.752.752 0 001.504 0V3.3z"
          />
          <path
            d="M48.2 6.44a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM54.2 6.44a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM54.2 2.09a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM48.2 2.09a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748z"
          />
        </g>

        <g fill="#848400">
          <circle cx="15.4" cy="20.8" r="1.57" />
          <circle cx="15.4" cy="9.28" r="1.57" />
          <circle cx="29.2" cy="7.69" r=".94" />
          <circle cx="21.7" cy="7.69" r=".94" />
          <circle cx="21.7" cy="10.5" r=".94" />
          <circle cx="29.2" cy="10.5" r=".94" />
          <circle cx="36.7" cy="10.6" r=".94" />
          <circle cx="33.6" cy="10.6" r=".94" />
          <circle cx="36.7" cy="20.5" r=".94" />
          <circle cx="33.6" cy="20.5" r=".94" />
          <circle cx="20.6" cy="22.7" r=".94" />
          <circle cx="21.8" cy="19.8" r=".94" />
          <circle cx="29.3" cy="19.8" r=".94" />
          <circle cx="30.6" cy="16.9" r=".94" />
          <circle cx="20.6" cy="16.9" r=".94" />
          <circle cx="30.6" cy="13.9" r=".94" />
          <circle cx="17.8" cy="11.7" r=".94" />
          <circle cx="17.8" cy="13.9" r=".94" />
          <circle cx="20.6" cy="13.9" r=".94" />
          <circle cx="17.8" cy="16.1" r=".94" />
          <circle cx="17.8" cy="18.3" r=".94" />
          <circle cx="30.6" cy="22.7" r=".94" />
          <circle cx="33.6" cy="27" r=".94" />
          <circle cx="33.6" cy="24.8" r=".94" />
          <circle cx="38.4" cy="27" r=".94" />
          <circle cx="38.4" cy="24.8" r=".94" />
        </g>

        <g fill="#fff">
          <circle cx="15.4" cy="20.8" r="1.05" />
          <circle cx="15.4" cy="9.28" r="1.05" />
          <circle cx="29.2" cy="7.69" r=".52" />
          <circle cx="21.7" cy="7.69" r=".52" />
          <circle cx="21.7" cy="10.5" r=".52" />
          <circle cx="29.2" cy="10.5" r=".52" />
          <circle cx="36.7" cy="10.6" r=".52" />
          <circle cx="33.6" cy="10.6" r=".52" />
          <circle cx="36.7" cy="20.5" r=".52" />
          <circle cx="33.6" cy="20.5" r=".52" />
          <circle cx="20.6" cy="22.7" r=".52" />
          <circle cx="21.8" cy="19.8" r=".52" />
          <circle cx="29.3" cy="19.8" r=".52" />
          <circle cx="30.6" cy="16.9" r=".52" />
          <circle cx="20.6" cy="16.9" r=".52" />
          <circle cx="30.6" cy="13.9" r=".52" />
          <circle cx="17.8" cy="11.7" r=".52" />
          <circle cx="17.8" cy="13.9" r=".52" />
          <circle cx="20.6" cy="13.9" r=".52" />
          <circle cx="17.8" cy="16.1" r=".52" />
          <circle cx="17.8" cy="18.3" r=".52" />
          <circle cx="30.6" cy="22.7" r=".52" />
          <circle cx="33.6" cy="27" r=".52" />
          <circle cx="33.6" cy="24.8" r=".52" />
          <circle cx="38.4" cy="27" r=".52" />
          <circle cx="38.4" cy="24.8" r=".52" />
        </g>

        <!-- USB Connector -->
        <g fill="#b2b2b2">
          <path d="M15.6 11h1.02v1.53H15.6zM16.6 11.5h1.38v.45H16.6z" />
          <path d="M15.6 13.2h1.02v1.53H15.6zM16.6 13.7h1.38v.45H16.6z" />
          <path d="M15.6 15.3h1.02v1.53H15.6zM16.6 15.9h1.38v.45H16.6z" />
          <path d="M15.6 17.5h1.02v1.53H15.6zM16.6 18.1h1.38v.45H16.6z" />
        </g>

        <path d="M-.145 9.97h15.8v10.1h-15.8z" fill="#999" />
        <path d="M-.147 9.97h15v9.24h-15z" fill="#ccc" />
        <path
          d="M11.4 14.6h.682v.877H11.4zM2.45 16.3h1.41v2.08H2.45zM2.45 11.1h1.41v2.08H2.45z"
          fill="#999"
        />

        <!-- Pin Headers -->
        <g transform="translate(59.1 4.7) rotate(90 0 0)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)" />
        </g>

        <!-- Pin Labels -->
        <text fill="#fff">
          <tspan x="59.5" dy="6.54">GND</tspan>
          <tspan x="59.5" dy="2.54">VCC</tspan>
          <tspan x="60.5" dy="2.54">5</tspan>
          <tspan x="60.5" dy="2.54">4</tspan>
          <tspan x="60.5" dy="2.54">3</tspan>
          <tspan x="60.5" dy="2.54">2</tspan>
          <tspan x="60.5" dy="2.54">1</tspan>
          <tspan x="60.5" dy="2.54">0</tspan>
        </text>

        <!-- Pin Bar -->
        <path d="M41.8 1.37l-.588-.588h-1.53l-.587.588v1.53l.587.587h1.53l.588-.587V2.22z" />
        <path d="M39.2 1.37l-.588-.587h-1.53l-.588.587v1.53l.588.587h1.53l.588-.587V2.22z" />
        <path d="M34.4 3.48h1.53l.588-.587v-1.53l-.588-.587H34.4l-.587.587v1.53l.587.587z" />

        <g fill="#8c8663">
          <path d="M40.1 1.7h.863v.864H40.1z" />
          <path d="M37.4 1.7h.863v.864H37.4z" />
          <path d="M34.7 1.7h.863v.864H34.7z" />
        </g>

        <text transform="translate(33.1 6) rotate(270 0 0)" fill="#fff" style="font-size: 1.4">
          <tspan x="0" dy="2.5">VIN</tspan>
          <tspan x="0" dy="2.5">GND</tspan>
          <tspan x="0" dy="2.5">VCC</tspan>
        </text>

        <!-- MCU -->
        <path
          d="M52.6 17.7h1.22v.873H52.6zM50.2 17.7h1.22v.873H50.2zM47.8 17.7h1.22v.873H47.8zM45.3 17.7h1.22v.873H45.3zM45.3 10.6h1.22v.858H45.3zM47.8 10.6h1.22v.858H47.8zM50.2 10.6h1.22v.858H50.2zM52.6 10.6h1.22v.858H52.6z"
          fill="#b2b2b2"
        />
        <path d="M44.7 11.5h9.77v6.28H44.7z" fill="#313131" />

        <g fill="#212121">
          <path d="M54.4 15.7a1.13 1.13 0 010-2.26v2.27z" />
          <circle cx="53.3" cy="12.6" r=".52" />
        </g>

        <text x="45.14" y="13.4" fill="olive" style="font-family: sans-serif; font-size: 1.6">
          <tspan x="45.14" y="13.4">ATTINY85</tspan>
        </text>

        <!-- LED Silk -->
        <path
          d="M34.6 27.65a2.003 2.003 0 001.01-1.74m.001 0a2 2 0 00-.711-1.53m-3.31 1.53c0 .741.41 1.42 1.06 1.77m-.341-3.32a2.01 2.01 0 00-.723 1.54m7.79 1.74a2.003 2.003 0 001.01-1.74m-.001 0a2 2 0 00-.711-1.53m-3.31 1.53c0 .741.41 1.42 1.06 1.77m-.342-3.32a2.008 2.008 0 00-.723 1.54"
          fill="none"
          stroke="#fff"
          stroke-width=".25"
        />

        <!-- Power LED -->
        <g fill="#00d300">
          <circle cx="33.6" cy="25.9" r="1.6" fill-opacity=".64" />
          <circle cx="33.6" cy="25.9" r="1.2" fill-opacity=".92" />
        </g>
        ${e&&B`<circle cx="33.6" cy="25.9" r="1.8" fill="#03f704" filter="url(#ledFilter)" />`}

        <!-- LED1 -->
        <g fill="#d8e208">
          <circle cx="38.35" cy="25.9" r="1.6" fill-opacity=".64" />
          <circle cx="38.35" cy="25.9" r="1.2" fill-opacity=".92" />
        </g>
        ${t&&B`<circle cx="38.35" cy="25.9" r="1.8" fill="#fcfd00" filter="url(#ledFilter)" />`}

        <g fill="#fff">
          <text x="32.5" dy="23.4">ON</text>
          <text x="36.3" dy="23.4">LED1</text>
        </g>

        <!-- Capacitors -->
        <circle cx="41" cy="9.6" r="2.7" />
        <circle cx="41" cy="9.6" r="1.74" fill="#b2b2b2" />
        <path
          d="M41.1 11.3c-.429.003-.664-.089-1.1-.35l-.288 1.01c.396.226.842.349 1.3.356a2.84 2.84 0 001.4-.375l-.256-1.02c-.425.26-.555.371-1.06.375z"
          fill="#fff"
        />

        <ellipse cx="34.7" cy="7.91" rx="2.68" ry="1.13" fill="#f60" />
        <ellipse cx="34.7" cy="7.5" rx="1.25" ry=".413" />

        <!-- Diodes -->
        <g fill="#b2b2b2">
          <path
            d="M29.55 7.69a.357.357 0 00-.356-.357h-7.5a.356.356 0 000 .713h7.5c.196 0 .356-.16.356-.356z"
          />
          <path
            d="M29.55 10.5a.357.357 0 00-.356-.357h-7.5a.356.356 0 000 .713h7.5c.196 0 .356-.16.356-.356z"
          />
          <path
            d="M29.65 19.8a.357.357 0 00-.356-.356h-7.5a.357.357 0 100 .713h7.5c.196 0 .356-.16.356-.357z"
          />
        </g>

        <g fill="#ff2a2a">
          <path d="M23.2 8.88h4.47c.135 0 .111-2.38 0-2.38H23.2c-.145 0-.157 2.38 0 2.38z" />
          <path d="M27.7 11.7h-4.47c-.135 0-.112-2.38 0-2.38h4.47c.145 0 .157 2.38 0 2.38z" />
          <path d="M27.7 21h-4.47c-.134 0-.111-2.38 0-2.38h4.47c.145 0 .158 2.38 0 2.38z" />
        </g>

        <g fill="#fff" fill-opacity=".74">
          <path d="M24.1 9.32h.563v2.38H24.1z" />
          <path d="M24 18.6h.563v2.38H24z" />
          <path d="M26.4 6.5h.563v2.38H26.4z" />
        </g>

        <g fill-opacity=".4">
          <path
            d="M23.2 6.5c.205-.005.406 0 .609 0h3.86c.026 0 .057.24.052.24h-4.59c-.006 0 .025-.239.066-.24z"
          />
          <path
            d="M27.7 9.32c-.206-.005-.407 0-.609 0h-3.86c-.026 0-.057.239-.052.239h4.59c.006 0-.024-.238-.065-.239z"
          />
          <path
            d="M27.7 18.6c-.205-.005-.406 0-.609 0h-3.86c-.026 0-.057.239-.052.239h4.59c.006 0-.025-.238-.066-.239z"
          />
        </g>

        <!-- Resistors -->
        <g fill="#b2b2b2">
          <path
            d="M31 13.9a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .712h10.1A.356.356 0 0031 13.9z"
          />
          <path
            d="M31 16.9a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .713h10.1c.197 0 .356-.16.356-.357z"
          />
          <path
            d="M31 22.7a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .713h10.1c.197 0 .356-.16.356-.357z"
          />
          <path
            d="M33.6 10.2a.356.356 0 00-.356.356v9.98a.356.356 0 00.713 0v-9.98a.356.356 0 00-.357-.356z"
          />
          <path
            d="M36.7 10.2a.356.356 0 00-.357.356v9.98a.356.356 0 00.713 0v-9.98a.356.356 0 00-.356-.356z"
          />
        </g>

        <g fill="#d9b477">
          <path
            d="M23.8 15.8a1.369 1.369 0 00-.477-.103h-.69a.253.253 0 00-.25.25v1.86c0 .138.113.25.25.25h.69c.138 0 .352-.047.477-.102l.025-.013c.152-.062.314-.097.478-.102h2.49c.138 0 .352.047.477.102l.026.013c.124.057.339.102.477.102h.689c.138 0 .25-.112.251-.25v-1.86a.252.252 0 00-.251-.25h-.689a1.42 1.42 0 00-.477.103l-.026.012a1.369 1.369 0 01-.477.103h-2.49c-.138 0-.353-.048-.478-.103L23.8 15.8z"
          />
          <path
            d="M23.7 12.8a1.351 1.351 0 00-.477-.103h-.69a.252.252 0 00-.25.25v1.86c0 .138.112.25.25.25h.69c.137 0 .352-.047.477-.102l.025-.012c.125-.058.34-.103.477-.103h2.49c.138 0 .353.048.478.103l.025.012c.125.057.34.102.477.102h.69c.137 0 .25-.113.25-.25v-1.86a.252.252 0 00-.25-.25h-.69a1.42 1.42 0 00-.477.103l-.025.012a1.357 1.357 0 01-.478.103h-2.49a1.42 1.42 0 01-.477-.103L23.7 12.8z"
          />
          <path
            d="M23.8 21.6a1.373 1.373 0 00-.477-.102h-.69a.25.25 0 00-.25.25v1.86c0 .138.112.25.25.25h.69c.137 0 .352-.048.477-.103l.025-.012c.125-.057.34-.102.477-.102h2.49c.138 0 .353.047.477.102l.026.012c.125.058.339.103.477.103h.69c.137 0 .25-.113.25-.25v-1.86a.251.251 0 00-.25-.25h-.69c-.138 0-.352.047-.477.102l-.026.013a1.368 1.368 0 01-.477.102h-2.49a1.42 1.42 0 01-.477-.102L23.8 21.6z"
          />
          <path
            d="M34.7 13.8c.058-.125.103-.34.103-.477v-.69a.252.252 0 00-.25-.25h-1.86a.25.25 0 00-.25.25v.69c0 .137.047.352.102.477l.013.025c.057.125.102.34.102.477v2.49c0 .138-.047.353-.102.477l-.013.026a1.373 1.373 0 00-.102.477v.69c0 .138.112.25.25.25h1.86a.252.252 0 00.25-.25v-.69c0-.138-.048-.352-.103-.477l-.012-.026a1.369 1.369 0 01-.103-.477v-2.49c0-.137.048-.352.103-.477l.012-.025z"
          />
          <path
            d="M37.7 13.7c.058-.124.103-.339.103-.477v-.69a.253.253 0 00-.25-.25h-1.86a.252.252 0 00-.25.25v.69c0 .138.047.353.102.477l.012.026c.058.124.103.339.103.477v2.49c0 .138-.047.352-.103.477l-.012.026a1.346 1.346 0 00-.102.477v.69c0 .138.112.25.25.25h1.86a.253.253 0 00.25-.25v-.69a1.41 1.41 0 00-.103-.477l-.012-.026a1.369 1.369 0 01-.103-.477v-2.49c0-.138.048-.353.103-.477l.012-.026z"
          />
        </g>

        <path d="M24.6 21.71h.642v1.92H24.6z" fill="#008000" />

        <g fill="#00f">
          <path
            d="M23.9 12.85a.809.809 0 01-.107-.04l-.025-.013a1.378 1.378 0 00-.478-.102h-.03v2.36h.03c.138 0 .353-.047.478-.103l.025-.012a.688.688 0 01.107-.04V12.9z"
          />
          <path
            d="M23.9 15.85a.822.822 0 01-.108-.04l-.025-.013a1.373 1.373 0 00-.477-.102h-.03v2.36h.03c.137 0 .352-.047.477-.102l.025-.013a.7.7 0 01.108-.04V15.9z"
          />
        </g>

        <g fill="#8a3d06">
          <path
            d="M24 21.66a.696.696 0 01-.108-.039l-.025-.013a1.397 1.397 0 00-.477-.103h-.03v2.36h.03c.137 0 .352-.048.477-.103l.025-.012a.583.583 0 01.108-.04V21.7z"
          />
          <path
            d="M34.64 13.9c.013-.04.025-.077.04-.107l.013-.026c.057-.124.102-.339.102-.477v-.03h-2.36v.03c0 .138.047.353.103.477l.012.026c.015.03.028.067.04.107h2.05z"
          />
          <path
            d="M37.65 13.9a.822.822 0 01.04-.108l.013-.025c.057-.125.102-.34.102-.477v-.03h-2.36v.03c0 .137.047.352.102.477l.012.025c.016.03.028.068.04.108h2.05z"
          />
        </g>

        <g fill="#ad9f4e">
          <path d="M27.8 12.7h.244v2.36H27.8z" />
          <path d="M27.9 15.7h.244v2.36H27.9z" />
          <path d="M35.5 17.8h2.36v.244H35.5z" />
          <path d="M27.8 21.5h.244v2.36H27.8z" />
          <path d="M32.4 17.8h2.36v.244H32.4z" />
        </g>

        <g fill="#b3b3b3">
          <path d="M24.5 12.9h.642v1.92H24.5z" />
          <path d="M24.5 15.9h.642v1.92H24.5z" />
        </g>

        <g fill="#c40808">
          <path d="M25.9 21.72h.642v1.92H25.9z" />
          <path d="M32.65 15.8h1.92v.642H32.6z" />
          <path d="M35.65 15.8h1.92v.642H35.7z" />
        </g>

        <g fill="#1a1a1a">
          <path d="M25.8 12.9h.642v1.92H25.8z" />
          <path d="M25.8 15.9h.642v1.92H25.8z" />
          <path d="M32.65 14.5h1.92v.642H32.6z" />
          <path d="M35.65 14.5h1.92v.642H35.7z" />
        </g>

        <!-- Regulator -->
        <ellipse cx="27.7" cy="2.93" rx="2.31" ry="2.3" fill="#1a1a1a" />
        <path d="M25.4 2.93h4.61v2.3H25.4z" />

        <!-- Reset Button  -->
        <path
          d="M46.1 6.1h1.17v.69H46.1zM52.2 6.1h1.17v.69H52.2zM52.2 1.74h1.17v.69H52.2zM46.1 1.74h1.17v.69H46.1z"
          fill="#b2b2b2"
        />
        <path
          d="M52.5 2.16a.535.535 0 00-.534-.535h-4.49a.535.535 0 00-.534.535v4.28c0 .295.239.535.534.535h4.49c.295 0 .534-.24.534-.535V2.16z"
          fill="#999"
        />

        <circle cx="47.8" cy="6.18" r=".4" />
        <circle cx="51.7" cy="6.18" r=".4" />
        <circle cx="51.7" cy="2.42" r=".4" />
        <circle cx="47.8" cy="2.42" r=".4" />

        <g stroke-width=".1" paint-order="fill stroke">
          <circle
            id="reset-button"
            cx="49.7"
            cy="4.3"
            r="1.4"
            fill="#000"
            stroke="#3f3f3f"
            tabindex="0"
            @mousedown=${()=>this.down()}
            @touchstart=${()=>this.down()}
            @mouseup=${()=>this.up()}
            @mouseleave=${()=>this.leave()}
            @touchend=${()=>this.leave()}
            @keydown=${e=>Te.includes(e.key)&&this.down()}
            @keyup=${e=>Te.includes(e.key)&&this.up()}
          />
        </g>

        <!-- Logo -->
        <g fill="#fff">
          <path d="M55.5 25.1h-3.54v2.42h3.54V25.1zm-.174.174v2.07h-3.19v-2.07h3.19z" />
          <path
            d="M56 23.6a.514.514 0 00-.514-.514h-14a.514.514 0 00-.514.514v1.03c0 .283.23.514.514.514h14A.515.515 0 0056 24.63V23.6z"
          />
        </g>
        <text
          x="41.14"
          y="24.9"
          fill="#2c8240"
          style="font-family: sans-serif; font-weight: bold; font-size: 2.15"
        >
          FRANZININHO
        </text>
        <text
          x="52.2"
          y="26.95"
          fill="#fff"
          style="font-family: sans-serif; font-weight: bold; font-size: 1.78"
        >
          DIY
        </text>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}};nn([ce()],rn.prototype,"led1",void 0),nn([ce()],rn.prototype,"ledPower",void 0),nn([ce()],rn.prototype,"resetPressed",void 0),nn([_e("#reset-button")],rn.prototype,"resetButton",void 0),rn=nn([oe("wokwi-franzininho")],rn);var an=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let sn=class extends ae{constructor(){super(...arguments),this.ledRed=0,this.ledGreen=0,this.ledBlue=0,this.ledBuiltIn=!1,this.ledPower=!1,this.pinInfo=[{name:"D12",x:20.1,y:1,signals:[Se("MISO"),{type:"pwm"}],description:"GPIO04"},{name:"D11",x:29.8,y:1,signals:[Se("MOSI"),{type:"pwm"}],description:"GPIO07"},{name:"D10",x:39.3,y:1,signals:[{type:"pwm"}],description:"GPIO05"},{name:"D9",x:48.9,y:1,signals:[{type:"pwm"}],description:"GPIO21"},{name:"D8",x:58.5,y:1,signals:[{type:"pwm"}],description:"GPIO20"},{name:"D7",x:68.1,y:1,signals:[{type:"pwm"}],description:"GPIO19"},{name:"D6",x:77.7,y:1,signals:[{type:"pwm"}],description:"GPIO18"},{name:"D5",x:87.3,y:1,signals:[{type:"pwm"}],description:"GPIO17"},{name:"D4",x:96.9,y:1,signals:[{type:"pwm"}],description:"GPIO16"},{name:"D3",x:106.5,y:1,signals:[{type:"pwm"}],description:"GPIO15"},{name:"D2",x:116.1,y:1,signals:[{type:"pwm"}],description:"GPIO25"},{name:"GND.1",x:125.2,y:1,signals:[{type:"power",signal:"GND"}]},{name:"RESET",x:135.3,y:1,signals:[]},{name:"RX",x:153.9,y:1,signals:[be("RX")],description:"GPIO1"},{name:"TX",x:144.5,y:1,signals:[be("TX")],description:"GPIO0"},{name:"D13",x:20.1,y:67.5,signals:[Se("SCK")],description:"GPIO6"},{name:"3.3V",x:29.7,y:67.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"AREF",x:39.3,y:67.5,signals:[]},{name:"A0",x:48.8,y:67.5,signals:[fe(0)],description:"GPIO26"},{name:"A1",x:58.5,y:67.5,signals:[fe(1)],description:"GPIO27"},{name:"A2",x:68,y:67.5,signals:[fe(2)],description:"GPIO28"},{name:"A3",x:77.6,y:67.5,signals:[fe(3)],description:"GPIO29"},{name:"A4",x:87.3,y:67.5,signals:[fe(4)],description:"GPIO12"},{name:"A5",x:96.9,y:67.5,signals:[fe(5)],description:"GPIO13"},{name:"A6",x:106.5,y:67.5,signals:[fe(6)]},{name:"A7",x:116.1,y:67.5,signals:[fe(7)]},{name:"5V",x:125.5,y:67.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"RESET.2",x:134.9,y:67.5,signals:[]},{name:"GND.2",x:145.3,y:67.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:154.1,y:67.5,signals:[{type:"power",signal:"VCC"}]}]}render(){const{ledPower:e,ledBuiltIn:t,ledRed:n,ledGreen:i,ledBlue:r}=this,a=Math.max(n,i,r),s=a?.3+.7*a:0;return U`
      <svg
        width="44.573mm"
        height="17.956mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 168 67.9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pad-pattern" height="10" width="9.58" patternUnits="userSpaceOnUse">
            <path
              d="m5.88 0.00992v5.57c0 1.63-1.32 2.95-2.94 2.95h-0.0025c-1.63 0-2.94-1.32-2.94-2.95v-5.57h0.805c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14zm-2.95 7.65c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14z"
              fill="#ffdc8e"
              stroke-width="1.24"
            />
          </pattern>
          <pattern id="pin-pattern" height="10" width="1.3" patternUnits="userSpaceOnUse">
            <path
              d="m0.5 0c-0.205 0-0.37 0.165-0.37 0.37v1.08h0.739v-1.08c0-0.205-0.165-0.37-0.37-0.37z"
              fill="#eaecec"
            />
          </pattern>
        </defs>

        <!-- Board -->
        <path
          d="m156 0h12.2v67.9h-12.2c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.959-2.14-2.14-2.14-1.18 0-2.14 0.96-2.14 2.14h-5.29c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.29c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-12.2v-67.9h12.2v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.29v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.29v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14zm7.38 58.8c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm-153 0c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm67 1.42c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-47.9 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm76.6 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-67.1 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.959 2.14-2.14 2.14c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14zm47.9 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm-28.8 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm86.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-38.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm38.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-144-58.3c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm153 0c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm-28.1 5.71c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-19.2 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-28.8 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm67.1 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm9.57 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.959 2.14-2.14 2.14zm-57.5 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-19.2 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm76.7 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-86.3 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.959 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14z"
          fill="#1a466b"
        />
        <path
          d="m148 67.9v-5.57c0-1.9-1.54-3.44-3.44-3.44h-2e-3c-1.9 0-3.44 1.54-3.44 3.44v5.57h-1.47v-9.55h9.88v9.55zm-0.756-6.78 7e-3 0.0161c-0.459-1.03-1.49-1.75-2.69-1.75h-2e-3c-0.661 0-1.27 0.218-1.76 0.587 0.492-0.368 1.1-0.587 1.76-0.587h2e-3c1.19 0 2.22 0.712 2.68 1.73zm-4.55-1.07c0.0186-0.0161 0.0372-0.031 0.0558-0.0459-0.0186 0.0149-0.0372 0.0298-0.0558 0.0459zm-0.0942 0.0794c0.0124-0.0112 0.026-0.0236 0.0397-0.0347l0.0136-0.0112c-0.0186 0.0149-0.036 0.031-0.0533 0.0459zm-0.343 0.36c0.0744-0.0918 0.154-0.18 0.239-0.263-0.0856 0.0831-0.165 0.171-0.239 0.263zm-0.0967 0.129c0.0236-0.0347 0.0496-0.0682 0.0756-0.1-0.026 0.0322-0.0521 0.0657-0.0756 0.1zm-0.0409 0.057c9e-3 -0.0124 0.0174-0.0248 0.026-0.036-9e-3 0.0112-0.0174 0.0236-0.026 0.036zm-0.18 0.301v-0.0012 0.0012l-7e-3 0.0124zm5.56 6.93v-5.57c0-0.423-0.0893-0.825-0.25-1.19 0.161 0.365 0.25 0.766 0.25 1.19zm-5.82-6.24c5e-3 -0.0223 0.01-0.0446 0.0161-0.067-6e-3 0.0223-0.0112 0.0446-0.0161 0.067zm-4e-3 0.0136v0.0037z"
          fill="#fff"
        />

        <!-- Flash memory chip -->
        <path
          d="m59.9 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m59.9 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m63 14.4c0-0.394-0.32-0.714-0.715-0.714h-0.738c-0.394 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m63 14.4c0-0.394-0.32-0.714-0.715-0.714h-0.738c-0.394 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m66 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.739c-0.394 0-0.714 0.32-0.714 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m66 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.739c-0.394 0-0.714 0.32-0.714 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m68.9 14.4c0-0.394-0.321-0.714-0.715-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m68.9 14.4v-0.0012c0-0.394-0.321-0.714-0.715-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012z"
          fill="#1d1d1b"
        />
        <path
          d="m66.8 32.1c0 0.394 0.32 0.714 0.715 0.714h0.738c0.394 0 0.715-0.32 0.715-0.714z"
          fill="#eaecec"
        />
        <path
          d="m68.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m63.8 32.1c0 0.394 0.32 0.714 0.714 0.714h0.739c0.394 0 0.714-0.32 0.714-0.714z"
          fill="#eaecec"
        />
        <path
          d="m66 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m60.7 32.1c0 0.394 0.321 0.714 0.715 0.714h0.738c0.396 0 0.715-0.32 0.715-0.714z"
          fill="#eaecec"
        />
        <path
          d="m62.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.227-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m57.8 32.1c0 0.394 0.32 0.714 0.715 0.714h0.738c0.394 0 0.714-0.32 0.714-0.714z"
          fill="#eaecec"
        />
        <path
          d="m59.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <rect x="56.7" y="14.1" width="13.3" height="18.4" fill="#3b3838" />

        <!-- Mounting holes -->
        <g fill="none" stroke="#ffdc8e" stroke-width=".496px">
          <circle cx="10.4" cy="62.4" r="3.56" />
          <circle cx="163.5" cy="62.4" r="3.56" />
          <circle cx="10.2" cy="5.52" r="3.56" />
          <circle cx="163" cy="5.52" r="3.56" />
        </g>

        <!-- Pads -->
        <rect transform="translate(17, 0)" width="142" height="9.5" fill="url(#pad-pattern)" />
        <rect
          transform="translate(17, 68) scale(1,-1)"
          width="142"
          height="9.5"
          fill="url(#pad-pattern)"
        />

        <!-- RP2040 -->
        <rect
          transform="translate(79,37.8) scale(1,-1)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect transform="translate(79,12.5)" width="19.5" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(102.3,15.5) rotate(90)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(75.5,34.5) rotate(270)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />

        <!-- Accelerometer chip -->
        <rect transform="translate(90,42)" width="3.8" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(90,57.5) scale(1,-1)"
          width="3.8"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(100,47.5) rotate(90)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(84,52.5) rotate(270)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />

        <!-- Crypto chip -->
        <rect transform="translate(104,40)" width="4.8" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(104,57) scale(1,-1)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />

        <rect x="85.3" y="43.7" width="13.4" height="12.4" fill="#3b3838" stroke-width="1.24" />

        <rect x="76.9" y="14.1" width="23.8" height="22.2" fill="#3b3838" />

        <!-- Microphone -->
        <g stroke-width="1.24">
          <path d="m52.7 25.8v-11.7h-16.1v11.7z" fill="#3b3838" />
          <circle cx="46.7" cy="19.9" r="2.77" fill="#3b3838" />
          <path
            d="m46.7 17.1c1.53 0 2.78 1.24 2.78 2.78 0 1.53-1.24 2.78-2.78 2.78-1.53 0-2.78-1.24-2.78-2.78 0-1.53 1.24-2.78 2.78-2.78zm0 3.72c-0.523 0-0.949-0.425-0.949-0.949s0.425-0.949 0.949-0.949 0.949 0.425 0.949 0.949-0.425 0.949-0.949 0.949z"
            fill="#ffdc8e"
          />
        </g>

        <path d="m111 55.5v-14h-9.03v14z" fill="#3b3838" />

        <!-- WiFi module -->
        <rect x="112" y="10.1" width="56" height="45.4" fill="#418e54" />
        <path
          d="m160 53.6h-3.05v-41.9h11.3v41.9h-2.36c0-0.764-0.308-1.38-0.687-1.38-0.378 0-0.686 0.619-0.686 1.38h-3.17c0-0.764-0.308-1.38-0.687-1.38s-0.687 0.619-0.687 1.38z"
          fill="#cecccb"
        />
        <rect x="115" y="11.7" width="41.9" height="41.9" fill="#e4e4e4" />
        <path d="m157 11.7h-41.9v41.9h41.9zm-0.868 0.868v40.2h-40.2v-40.2z" fill="#ffdc8e" />
        <path
          d="m165 11.2h-3.86v35.3c0 0.0868 0.0347 0.171 0.0967 0.233s0.146 0.098 0.234 0.098h3.19c0.0868 0 0.171-0.036 0.233-0.098s0.098-0.146 0.098-0.233v-35.3z"
          fill="#448f53"
        />

        <!-- USB connector -->
        <path
          d="m3.2 47.5-2.18 1.07c-0.138 0.0657-0.295 0.0756-0.439 0.026-0.145-0.0496-0.263-0.154-0.33-0.291-0.067-0.136-0.0769-0.295-0.0273-0.439s0.154-0.263 0.291-0.33l1.5-0.73h-0.203c-0.479 0-0.939-0.19-1.28-0.529-0.34-0.339-0.529-0.799-0.529-1.28v-21.8c0-0.48 0.19-0.939 0.529-1.28 0.339-0.339 0.799-0.529 1.28-0.529h0.203l-1.5-0.73c-0.138-0.067-0.242-0.185-0.291-0.33-0.0496-0.144-0.0397-0.301 0.0273-0.438v-0.0012c0.067-0.136 0.185-0.242 0.33-0.291 0.144-0.0496 0.301-0.0397 0.439 0.0273l2.18 1.06v-0.591h20.2v27.7h-20.2z"
          fill="#cecccb"
        />
        <path
          d="m23.4 41.7h-1.77c-0.0595 0-0.113 0.031-0.144 0.0806-0.316 0.516-2.04 3.34-2.04 3.34h-1.63v-1.71h-1.17v-2.58h1.17v-1.63h3.1c0.133 0 0.259-0.0521 0.352-0.145 0.093-0.0942 0.145-0.221 0.145-0.352v-1.55h-1.29v-6.34h1.29v-1.55c0-0.131-0.0521-0.258-0.145-0.351-0.093-0.0942-0.219-0.146-0.352-0.146h-3.1v-1.63h-1.17v-2.58h1.17v-1.71h1.63s1.73 2.83 2.04 3.34c0.031 0.0508 0.0843 0.0806 0.144 0.0806h1.77z"
          fill="#989898"
        />

        <!-- Reset button -->
        <g stroke-width="1.24">
          <rect x="42.9" y="32.7" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="48.5" cy="37.7" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m46 44.9h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m46 30.7h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="46.2" y="45.2" width="5.23" height="2.59" />
            <rect x="46.2" y="27.7" width="5.23" height="2.59" />
            <path
              d="m49.7 30.6c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m47.1 44.9c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358s-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>

        <!-- Arduino Logo -->
        <path
          d="m135 33.7c-0.911 0.472-2.46 1.57-3.14 2.23-0.718 0.699-1.3 1.49-1.5 2.49-0.219 1.13-0.187 2.26 0.207 3.35 0.642 1.77 2.29 3.03 4.09 3.09 1.95 0.0707 3.7-0.982 4.44-2.8 0.851-2.08 0.553-4.05-0.885-5.8-0.885-1.08-2.05-1.84-3.2-2.57m-0.0223-3.06c1.35-0.861 2.68-1.72 3.58-3.06 1.05-1.54 1.24-3.22 0.656-4.98-0.624-1.86-2.27-3.09-4.2-3.15-1.9-0.0583-3.48 1.03-4.28 2.68-0.391 0.808-0.495 1.67-0.505 2.55-0.0149 1.26 0.384 2.36 1.23 3.29 0.998 1.11 2.26 1.87 3.52 2.67m2.43 1.5c0.605 0.49 1.2 0.934 1.76 1.43 1.45 1.29 2.44 2.85 2.78 4.77 0.541 3.09-0.298 5.73-2.83 7.66-3.65 2.79-8.84 1.41-10.8-2.83-1.25-2.77-1.04-6.6 1.76-9.15 0.627-0.572 1.33-1.06 2-1.59 0.114-0.0905 0.239-0.167 0.403-0.28-0.186-0.13-0.336-0.238-0.49-0.341-1.01-0.686-1.96-1.44-2.73-2.41-1.21-1.51-1.72-3.24-1.66-5.17 0.0533-1.62 0.494-3.12 1.48-4.41 1.65-2.17 3.84-3.24 6.57-2.9 2.85 0.345 4.86 1.96 5.85 4.63 1.19 3.17 0.508 6.06-1.76 8.56-0.593 0.653-1.34 1.17-2.01 1.75-0.112 0.0955-0.238 0.174-0.379 0.275"
          fill-rule="nonzero"
        />
        <path d="m137 22.3v4.51h-1.44v-4.51z" />
        <path
          d="m137 37.4v1.34h1.34v1.62h-1.34v1.36h-1.62v-1.34h-1.35v-1.64h1.34v-1.35z"
          fill-rule="nonzero"
        />

        <!-- LEDs -->
        <g stroke-width="1.24">
          <rect x="8.47" y="12.6" width="11.9" height="4.06" fill="#a19e9e" />
          <rect x="8.47" y="50.9" width="11.9" height="4.06" fill="#a19e9e" />

          <!-- LED BUILTIN -->
          <rect x="11.9" y="12.6" width="4.94" height="4.06" fill="#f1d99f" />

          <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>

          ${t&&B`<circle cx="14.5" cy="14.5" r="3" fill="red" filter="url(#ledFilter)" />`}

          <!-- LED POWER -->
          <rect x="11.9" y="50.9" width="4.94" height="4.06" fill="#f1d99f" />
          ${e&&B`<circle cx="14.5" cy="53" r="3" fill="#80ff80" filter="url(#ledFilter)" />`}

          <!-- LED RGB -->
          <g fill="#ffdc8e">
            <rect x="33.4" y="23.6" width="1.25" height="1.25" />
            <rect x="30.2" y="23.6" width="1.25" height="1.25" />
            <rect x="33.4" y="26.8" width="1.25" height="1.25" />
            <rect x="30.2" y="26.8" width="1.25" height="1.25" />
          </g>
          <rect x="30.8" y="24.1" width="3.4" height="3.4" fill="#cecccb" />

          <circle
            cx="32.4"
            cy="25.4"
            r="3"
            fill="rgb(${255*n}, ${255*i}, ${255*r})"
            filter="url(#ledFilter)"
            opacity="${s}"
          />

          <path
            d="m122 0.00992v5.57c0 1.9 1.54 3.44 3.44 3.44h1e-3c1.9 0 3.44-1.54 3.44-3.44v-5.57h1.47v9.55h-9.88v-9.55zm0.756 6.78-7e-3 -0.0161c0.459 1.03 1.49 1.75 2.69 1.75h1e-3c0.661 0 1.27-0.218 1.76-0.587-0.491 0.368-1.1 0.587-1.76 0.587h-1e-3c-1.2 0-2.22-0.712-2.69-1.73zm4.55 1.07c-0.0186 0.0161-0.0384 0.031-0.057 0.0459 0.0186-0.0149 0.0384-0.0298 0.057-0.0459zm0.0942-0.0794c-0.0136 0.0112-0.0273 0.0236-0.0397 0.0347l-0.0136 0.0112c0.0174-0.0149 0.036-0.031 0.0533-0.0459zm0.342-0.36c-0.0744 0.0918-0.154 0.18-0.239 0.263 0.0856-0.0831 0.165-0.171 0.239-0.263zm0.098-0.129c-0.0248 0.0347-0.0496 0.0682-0.0756 0.1 0.026-0.0322 0.0508-0.0657 0.0756-0.1zm0.0397-0.057c-9e-3 0.0124-0.0161 0.0248-0.0248 0.036 9e-3 -0.0112 0.0161-0.0236 0.0248-0.036zm0.181-0.301-1e-3 0.00124 1e-3 -0.00124 6e-3 -0.0124zm-5.56-6.93v5.57c0 0.424 0.0893 0.826 0.25 1.19-0.161-0.365-0.25-0.766-0.25-1.19zm5.82 6.24c-5e-3 0.0223-0.01 0.0446-0.0161 0.067 6e-3 -0.0223 0.0112-0.0446 0.0161-0.067zm4e-3 -0.0136 1e-3 -0.00372z"
            fill="#fff"
          />
        </g>
      </svg>
    `}};an([ce()],sn.prototype,"ledRed",void 0),an([ce()],sn.prototype,"ledGreen",void 0),an([ce()],sn.prototype,"ledBlue",void 0),an([ce()],sn.prototype,"ledBuiltIn",void 0),an([ce()],sn.prototype,"ledPower",void 0),sn=an([oe("wokwi-nano-rp2040-connect")],sn);var on=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let ln=class extends ae{constructor(){super(...arguments),this.ledPower=!1,this.ledSignal=!1,this.pinInfo=[{name:"AOUT",y:11,x:0,number:1,signals:[]},{name:"GND",y:20.5,x:0,number:2,signals:[ye()]},{name:"VCC",y:30.5,x:0,number:3,signals:[ve()]},{name:"DOUT",y:40.5,x:0,number:4,signals:[]}]}render(){const{ledPower:e,ledSignal:t}=this;return U`
      <svg
        width="35.211mm"
        height="13.346mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 133 50.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="3.6" width="14" patternUnits="userSpaceOnUse">
            <path
              d="m5.09 1.3c0-0.618-0.502-1.12-1.12-1.12h-3.97v2.6h3.97c0.618 0 1.12-0.502 1.12-1.12z"
              fill="#eaecec"
            />
            <path
              d="m5.09 1.3c0-0.297-0.118-0.582-0.328-0.792-0.211-0.21-0.496-0.328-0.793-0.328h-1.14v2.6h1.14c0.297 0 0.582-0.118 0.793-0.328 0.21-0.21 0.328-0.495 0.328-0.793z"
              fill="#adafb0"
            />
          </pattern>
          <g id="header-pin">
            <path d="m3.4 1.8v-6.55h-6.55v6.55z" fill="#433b38" />
            <path
              d="m0 0c0.382 0 0.748-0.152 1.02-0.422 0.27-0.27 0.421-0.637 0.421-1.02s-0.151-0.748-0.421-1.02c-0.271-0.27-0.637-0.422-1.02-0.422h-26.1c-0.233 0-0.423 0.19-0.423 0.424v2.04c0 0.233 0.19 0.423 0.423 0.423h26.1z"
              fill="#9f9f9f"
            />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m133 8.69v-8.69h-113v50.4h113v-8.69h-10.9c-0.444 0-0.804-0.36-0.804-0.804v-31.5c0-0.444 0.36-0.804 0.804-0.804zm-84.3 8.1c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#931917"
        />

        <!-- Chip  -->
        <rect transform="translate(87,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(74,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />

        <rect x="73.5" y="25.2" width="13.9" height="15.6" fill="#3b3838" />
        <path
          d="m88.7 40.9v3.24h-6.63c0-1.02-0.721-1.85-1.61-1.85s-1.61 0.827-1.61 1.85h-6.62v-3.24"
          fill="none"
          stroke="#fff"
          stroke-width=".4px"
        />
        <path d="m72.2 25.2v-1.74h16.5v1.74" fill="none" stroke="#fff" stroke-width=".4px" />

        <!-- PCB pins -->
        <path d="m31 44.6v-38h-8.39v38z" fill="none" stroke="#fff" stroke-width=".4px" />
        <use xlink:href="#header-pin" x="26.6" y="12.4" />
        <use xlink:href="#header-pin" x="26.6" y="22.1" />
        <use xlink:href="#header-pin" x="26.6" y="31.9" />
        <use xlink:href="#header-pin" x="26.6" y="41.6" />

        <path
          d="m48.8 13.9c6.24 0 11.3 5.07 11.3 11.3 0 6.24-5.07 11.3-11.3 11.3s-11.3-5.07-11.3-11.3c0-6.24 5.07-11.3 11.3-11.3zm0 2.88c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#d6d6d2"
        />
        <rect x="65.3" y="2.76" width="28.2" height="14.2" fill="#4875ce" />
        <path
          d="m94.9 2.1c0-0.221-0.179-0.4-0.4-0.4h-30.1c-0.221 0-0.4 0.179-0.4 0.4v15.5c0 0.221 0.179 0.4 0.4 0.4h30.1c0.221 0 0.4-0.179 0.4-0.4zm-0.4 0h-30.1v15.5h30.1z"
          fill="#fff"
        />
        <circle cx="69.9" cy="6.54" r="2.31" fill="#f1d99f" />
        <path
          d="m69.3 4.34c0.196-0.066 0.405-0.096 0.622-0.096 0.216 0 0.426 0.03 0.622 0.096v4.42c-0.196 0.066-0.406 0.096-0.622 0.096-0.217 0-0.426-0.03-0.622-0.096z"
          fill="#a4987a"
        />

        <!-- LEDs -->
        <rect
          x="50.5"
          y="1.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="2.12" width="3.98" height="3.28" fill="#f1d99f" />

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${e&&B`<circle cx="56" cy="4" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <rect
          x="50.5"
          y="44.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="45.1" width="3.98" height="3.28" fill="#f1d99f" />

        ${t&&B`<circle cx="56" cy="47" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- Resistors -->
        <rect
          x="32.3"
          y="1.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="2.52" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="1.92"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="2.64" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="3.05" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="43.9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="44.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="45" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="9.72" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="10.1" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="36.8"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="37.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="38" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="32.3"
          y="44.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="45.5" width="3.97" height="2.47" fill="#171514" />

        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="33.049" y="12.085">AO</tspan>
          <tspan x="33.049" y="41.951">DO</tspan>
          <tspan x="33.049" y="22.067">G</tspan>
          <tspan x="32.964001" y="32.418999" font-size="5.25px">+</tspan>
          <tspan x="52.675778" y="9.31008">PWR</tspan>
          <tspan x="52.675778" y="13.100851">LED</tspan>
          <tspan x="52.675778" y="40">DO</tspan>
          <tspan x="52.675778" y="43.4">LED</tspan>
        </text>

        <path
          d="m110 24.7c0-1.29-1.05-2.34-2.34-2.34h-1e-3c-1.29 0-2.34 1.05-2.34 2.34v0.989c0 1.3 1.05 2.34 2.34 2.34h1e-3c1.29 0 2.34-1.05 2.34-2.34v-0.989z"
          fill="#f8f3e9"
        />
        <circle cx="108" cy="25.2" r="1.14" fill="#3b3838" />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 47.7c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66 0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66 0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m128 45.4c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.513-1.14-1.14 0.512-1.14 1.14-1.14 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 6.29c0.621 0 1.22-0.247 1.66-0.687 0.439-0.439 0.686-1.04 0.686-1.66v-1e-3c0-0.621-0.247-1.22-0.686-1.66-0.44-0.439-1.04-0.686-1.66-0.686h-3.03c-0.621 0-1.22 0.247-1.66 0.686-0.44 0.44-0.687 1.04-0.687 1.66v1e-3c0 0.621 0.247 1.22 0.687 1.66 0.439 0.44 1.04 0.687 1.66 0.687z"
          fill="#f8f3e9"
        />
        <path
          d="m128 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 41.4c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66s-0.247-1.22-0.686-1.66c-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66s0.247 1.22 0.687 1.66c0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#dddcdb"
        />
        <path
          d="m117 9.6c0.621 0 1.22 0.247 1.66 0.686 0.439 0.44 0.686 1.04 0.686 1.66 0 0.621-0.247 1.22-0.686 1.66-0.44 0.44-1.04 0.687-1.66 0.687h-3.03c-0.621 0-1.22-0.247-1.66-0.687-0.44-0.439-0.687-1.04-0.687-1.66 0-0.622 0.247-1.22 0.687-1.66 0.439-0.439 1.04-0.686 1.66-0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 11.9c0-0.631-0.512-1.14-1.14-1.14-0.631 0-1.14 0.513-1.14 1.14s0.512 1.14 1.14 1.14c0.632 0 1.14-0.512 1.14-1.14z"
          fill="#3b3838"
        />
        <circle cx="122" cy="23.7" r="11.3" fill="#d6d6d2" />
        <circle cx="122" cy="23.7" r="10.2" fill="#3b3838" />
        <path
          d="m114 39.1c0 0.631-0.512 1.14-1.14 1.14-0.631 0-1.14-0.513-1.14-1.14s0.512-1.14 1.14-1.14c0.632 0 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
      </svg>
    `}};on([ce()],ln.prototype,"ledPower",void 0),on([ce()],ln.prototype,"ledSignal",void 0),ln=on([oe("wokwi-small-sound-sensor")],ln);var cn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let dn=class extends ae{constructor(){super(...arguments),this.led1=!1,this.led2=!1,this.pinInfo=[{name:"AOUT",y:11,x:0,number:1,signals:[]},{name:"GND",y:20.5,x:0,number:2,signals:[ye()]},{name:"VCC",y:30.5,x:0,number:3,signals:[ve()]},{name:"DOUT",y:40.5,x:0,number:4,signals:[]}]}render(){const{led2:e,led1:t}=this;return U`
      <svg
        width="37.056mm"
        height="13.346mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 140 50.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="3.6" width="14" patternUnits="userSpaceOnUse">
            <path
              d="m5.09 1.3c0-0.618-0.502-1.12-1.12-1.12h-3.97v2.6h3.97c0.618 0 1.12-0.502 1.12-1.12z"
              fill="#eaecec"
            />
            <path
              d="m5.09 1.3c0-0.297-0.118-0.582-0.328-0.792-0.211-0.21-0.496-0.328-0.793-0.328h-1.14v2.6h1.14c0.297 0 0.582-0.118 0.793-0.328 0.21-0.21 0.328-0.495 0.328-0.793z"
              fill="#adafb0"
            />
          </pattern>
          <g id="header-pin">
            <path d="m3.4 1.8v-6.55h-6.55v6.55z" fill="#433b38" />
            <path
              d="m0 0c0.382 0 0.748-0.152 1.02-0.422 0.27-0.27 0.421-0.637 0.421-1.02s-0.151-0.748-0.421-1.02c-0.271-0.27-0.637-0.422-1.02-0.422h-26.1c-0.233 0-0.423 0.19-0.423 0.424v2.04c0 0.233 0.19 0.423 0.423 0.423h26.1z"
              fill="#9f9f9f"
            />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m133 0h-113v50.4h113zm-84.3 16.8c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#931917"
        />
        <path
          d="m48.8 13.9c6.24 0 11.3 5.07 11.3 11.3 0 6.24-5.07 11.3-11.3 11.3s-11.3-5.07-11.3-11.3c0-6.24 5.07-11.3 11.3-11.3zm0 2.88c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#d6d6d2"
        />

        <!-- Chip -->
        <rect transform="translate(87,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(74,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect x="73.5" y="25.2" width="13.9" height="15.6" fill="#3b3838" />
        <path
          d="m88.7 40.9v3.24h-6.63c0-1.02-0.721-1.85-1.61-1.85s-1.61 0.827-1.61 1.85h-6.62v-3.24"
          fill="none"
          stroke="#fff"
          stroke-width=".4px"
        />
        <path d="m72.2 25.2v-1.74h16.5v1.74" fill="none" stroke="#fff" stroke-width=".4px" />

        <!-- PCB pins -->
        <path d="m31 44.6v-38h-8.39v38z" fill="none" stroke="#fff" stroke-width=".4px" />
        <use xlink:href="#header-pin" x="26.6" y="12.4" />
        <use xlink:href="#header-pin" x="26.6" y="22.1" />
        <use xlink:href="#header-pin" x="26.6" y="31.9" />
        <use xlink:href="#header-pin" x="26.6" y="41.6" />

        <!-- Potentiometer -->
        <rect x="65.3" y="2.76" width="28.2" height="14.2" fill="#4875ce" />
        <path
          d="m94.9 2.1c0-0.221-0.179-0.4-0.4-0.4h-30.1c-0.221 0-0.4 0.179-0.4 0.4v15.5c0 0.221 0.179 0.4 0.4 0.4h30.1c0.221 0 0.4-0.179 0.4-0.4zm-0.4 0h-30.1v15.5h30.1z"
          fill="#fff"
        />
        <circle cx="69.9" cy="6.54" r="2.31" fill="#f1d99f" />
        <path
          d="m69.3 4.34c0.196-0.066 0.405-0.096 0.622-0.096 0.216 0 0.426 0.03 0.622 0.096v4.42c-0.196 0.066-0.406 0.096-0.622 0.096-0.217 0-0.426-0.03-0.622-0.096z"
          fill="#a4987a"
        />

        <!-- LED2 -->
        <rect
          x="50.5"
          y="1.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="2.12" width="3.98" height="3.28" fill="#f1d99f" />

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${e&&B`<circle cx="56" cy="4" r="5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- LED1 -->
        <rect
          x="50.5"
          y="44.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="45.1" width="3.98" height="3.28" fill="#f1d99f" />

        ${t&&B`<circle cx="56" cy="47" r="5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- Resistors -->
        <rect
          x="32.3"
          y="1.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="2.52" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="1.92"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="2.64" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="3.05" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="43.9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="44.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="45" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="9.72" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="10.1" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="36.8"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="37.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="38" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="32.3"
          y="44.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="45.5" width="3.97" height="2.47" fill="#171514" />

        <!-- Texts -->
        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="33.049" y="12.085">AO</tspan>
          <tspan x="33.049" y="41.951">DO</tspan>
          <tspan x="33.049" y="22.067">G</tspan>
          <tspan x="32.964001" y="32.418999" font-size="5.25px">+</tspan>
        </text>

        <text
          transform="rotate(90 92.4 -43.2)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.72px"
          x="137.13"
          y="3.60"
        >
          L2
        </text>

        <text
          transform="rotate(90 92.4 -.394)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.72px"
          x="137.13"
          y="46.38"
        >
          L1
        </text>

        <!-- Microphone -->
        <path
          d="m110 24.7c0-1.29-1.05-2.34-2.34-2.34h-1e-3c-1.29 0-2.34 1.05-2.34 2.34v0.989c0 1.3 1.05 2.34 2.34 2.34h1e-3c1.29 0 2.34-1.05 2.34-2.34v-0.989z"
          fill="#f8f3e9"
        />
        <circle cx="108" cy="25.2" r="1.14" fill="#3b3838" />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m118 27.8c0-0.622-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66v3.03c0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686 0.622 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66z"
          fill="#f8f3e9"
        />
        <circle cx="115" cy="29.3" r="1.14" fill="#3b3838" />
        <path
          d="m129 47.7c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66 0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66 0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m128 45.4c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.513-1.14-1.14 0.512-1.14 1.14-1.14 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 6.29c0.621 0 1.22-0.247 1.66-0.687 0.439-0.439 0.686-1.04 0.686-1.66v-1e-3c0-0.621-0.247-1.22-0.686-1.66-0.44-0.439-1.04-0.686-1.66-0.686h-3.03c-0.621 0-1.22 0.247-1.66 0.686-0.44 0.44-0.687 1.04-0.687 1.66v1e-3c0 0.621 0.247 1.22 0.687 1.66 0.439 0.44 1.04 0.687 1.66 0.687z"
          fill="#f8f3e9"
        />
        <path
          d="m128 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 41.4c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66s-0.247-1.22-0.686-1.66c-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66s0.247 1.22 0.687 1.66c0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 39.1c0 0.631-0.512 1.14-1.14 1.14-0.631 0-1.14-0.513-1.14-1.14s0.512-1.14 1.14-1.14c0.632 0 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 9.6c0.621 0 1.22 0.247 1.66 0.686 0.439 0.44 0.686 1.04 0.686 1.66 0 0.621-0.247 1.22-0.686 1.66-0.44 0.44-1.04 0.687-1.66 0.687h-3.03c-0.621 0-1.22-0.247-1.66-0.687-0.44-0.439-0.687-1.04-0.687-1.66 0-0.622 0.247-1.22 0.687-1.66 0.439-0.439 1.04-0.686 1.66-0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 11.9c0-0.631-0.512-1.14-1.14-1.14-0.631 0-1.14 0.513-1.14 1.14s0.512 1.14 1.14 1.14c0.632 0 1.14-0.512 1.14-1.14z"
          fill="#3b3838"
        />
        <path
          d="m118 19.2c0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66v3.03c0 0.621 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686 0.622 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66z"
          fill="#f8f3e9"
        />
        <circle cx="115" cy="20.7" r="1.14" fill="#3b3838" />
        <path
          d="m139 9.6h-16.2c-0.391 0-0.766 0.155-1.04 0.431-0.277 0.277-0.432 0.652-0.432 1.04v28.8c0 0.391 0.155 0.766 0.432 1.04 0.276 0.277 0.651 0.432 1.04 0.432h16.2z"
          fill="#e1e0da"
        />
        <rect x="139" y="9.6" width="1.55" height="31.8" fill="#3b3838" />
        <path
          d="m121 29.3 17.7-3.26v-16.5h-16.2c-0.391 0-0.766 0.155-1.04 0.431-0.277 0.277-0.432 0.652-0.432 1.04z"
          fill="#f3f0f4"
        />
        <path
          d="m121 28.5h-4.93c-0.21 0-0.411 0.083-0.56 0.232-0.148 0.148-0.231 0.349-0.231 0.559v0.022c0 0.21 0.083 0.411 0.231 0.559 0.149 0.149 0.35 0.232 0.56 0.232h4.93z"
          fill="#afafaf"
        />
        <path
          d="m121 20h-4.93c-0.21 0-0.411 0.084-0.56 0.232-0.148 0.148-0.231 0.35-0.231 0.559v0.022c0 0.21 0.083 0.411 0.231 0.559 0.149 0.149 0.35 0.232 0.56 0.232h4.93z"
          fill="#afafaf"
        />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
      </svg>
    `}};cn([ce()],dn.prototype,"led1",void 0),cn([ce()],dn.prototype,"led2",void 0),dn=cn([oe("wokwi-big-sound-sensor")],dn);var _n=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let pn=class extends ae{constructor(){super(...arguments),this.led1=!1,this.pinInfo=[{name:"INT",x:7.28,y:5.78,signals:[]},{name:"AD0",x:16.9,y:5.78,signals:[]},{name:"XCL",x:26.4,y:5.78,signals:[]},{name:"XDA",x:36,y:5.78,signals:[]},{name:"SDA",x:45.6,y:5.78,signals:[Ee("SDA")]},{name:"SCL",x:55.2,y:5.78,signals:[Ee("SCL")]},{name:"GND",x:64.8,y:5.78,signals:[ye()]},{name:"VCC",x:74.4,y:5.78,signals:[ve()]}]}render(){const{led1:e}=this;return U`
      <svg
        width="21.6mm"
        height="16.2mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 81.6 61.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2.1" width="14" patternUnits="userSpaceOnUse">
            <path
              d=" m2.09 1.32c0.124 0 0.243-0.049 0.331-0.137 0.086-0.086 0.137-0.206 0.137-0.33v-0.387c0-0.124-0.050-0.242-0.137-0.33-0.087-0.087-0.207-0.137-0.331-0.137h-1.62v1.32z"
              fill="#f5f9f0"
            />
          </pattern>
        </defs>

        <!-- Board -->
        <path
          d="m81.6 0h-81.6v61.2h81.6zm-10 44.9c3.8 0 6.88 3.08 6.88 6.88 0 3.8-3.08 6.89-6.88 6.89-3.8 0-6.89-3.09-6.89-6.89 0-3.8 3.09-6.88 6.89-6.88zm-61.6 0c3.8 0 6.89 3.08 6.89 6.88 0 3.8-3.09 6.89-6.89 6.89-3.8 0-6.88-3.09-6.88-6.89 0-3.8 3.08-6.88 6.88-6.88zm-2.74-41.9c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8-2.8-1.26-2.8-2.8 1.26-2.81 2.8-2.81zm19.2 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm-9.58 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm19.2 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm9.58 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81zm19.2 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8-2.81-1.26-2.81-2.8 1.26-2.81 2.81-2.81zm-9.58 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81zm19.2 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81z"
          fill="#16619d"
        />

        <!-- Right Chip -->
        <g fill="#fefdf4">
          <rect x="74.5" y="23.1" width="2.01" height="4.81" />
          <rect x="67.8" y="33" width="2.01" height="4.81" />
          <rect x="71.2" y="23.1" width="2.01" height="4.81" />
          <rect x="67.8" y="23.1" width="2.01" height="4.81" />
          <rect x="74.5" y="33" width="2.01" height="4.81" />
        </g>
        <g fill="#31322e">
          <rect x="74.5" y="25.5" width="2.01" height="2.4" />
          <rect x="67.8" y="33" width="2.01" height="2.4" />
          <rect x="71.2" y="25.5" width="2.01" height="2.4" />
          <rect x="67.8" y="25.5" width="2.01" height="2.4" />
          <rect x="74.5" y="33" width="2.01" height="2.4" />
        </g>

        <!-- Resistors -->
        <g fill="#e5e5e5">
          <rect x="12" y="21.3" width="3.83" height="9.3" />
          <rect x="17.7" y="21.3" width="3.83" height="9.3" />
          <rect x="56.5" y="21.3" width="3.83" height="9.3" />
          <rect x="51.2" y="21.3" width="3.83" height="9.3" />
          <rect x="17.7" y="35.6" width="3.83" height="9.3" />
          <rect x="23.3" y="21.3" width="3.83" height="9.3" />
          <rect x="62.2" y="21.3" width="3.83" height="9.3" />
          <rect x="51.2" y="35.8" width="3.83" height="9.3" />
          <rect x="56.9" y="35.8" width="3.83" height="9.3" />
        </g>
        <path d="m76 42.6v-3.13h-7.59v3.13z" fill="#fefdf4" />
        <rect x="23.1" y="35.6" width="3.83" height="9.3" fill="#e5e5e5" />

        <g fill="#26232b">
          <rect x="17.7" y="23.4" width="3.83" height="5.31" />
          <rect x="56.5" y="23.4" width="3.83" height="5.31" />
          <rect x="51.2" y="23.4" width="3.83" height="5.31" />
          <rect x="17.7" y="37.7" width="3.83" height="5.31" />
        </g>
        <g fill="#d8c18d">
          <rect x="23.3" y="23.4" width="3.83" height="5.31" />
          <rect x="62.2" y="23.4" width="3.83" height="5.31" />
          <rect x="51.2" y="37.8" width="3.83" height="5.31" />
          <rect x="56.9" y="37.8" width="3.83" height="5.31" />
          <path d="m74.3 42.6v-3.13h-4.33v3.13z" />
        </g>
        <g>
          <rect x="23.1" y="37.7" width="3.83" height="5.31" fill="#a06352" />
          <rect x="31.8" y="47.1" width="15.6" height="6.03" fill="#f3c338" />
          <rect x="67.3" y="27.9" width="9.76" height="5.28" fill="#010303" />
        </g>

        <!-- MPU6050 Chip -->
        <rect transform="translate(47,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(32.3,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(46.5,40.7) rotate(90)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(32.3,26) rotate(270)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect x="31.8" y="25.4" width="15.6" height="15.6" />

        <!-- LED -->
        <rect x="12" y="23.4" width="3.83" height="5.31" fill="#f5ecde" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${e&&B`<circle cx="13.9" cy="25.5" r="3.5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- PCB Pins-->
        <g fill="none" stroke="#d0ae88" stroke-width=".648px">
          <circle cx="64.8" cy="5.78" r="2.81" />
          <circle cx="55.2" cy="5.78" r="2.81" />
          <circle cx="45.6" cy="5.78" r="2.81" />
          <circle cx="36" cy="5.78" r="2.81" />
          <circle cx="26.4" cy="5.78" r="2.81" />
          <circle cx="16.9" cy="5.78" r="2.81" />
          <circle cx="7.28" cy="5.78" r="2.81" />
          <circle cx="74.4" cy="5.78" r="2.81" />
        </g>

        <!-- Text -->
        <text
          transform="rotate(90)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.6px"
          x="10.056"
        >
          <tspan x="10.056" y="-6">INT</tspan>
          <tspan x="10.056" y="-15.5">AD0</tspan>
          <tspan x="10.056" y="-25.157">XCL</tspan>
          <tspan x="10.056" y="-34.5">XDA</tspan>
          <tspan x="10.056" y="-44.38">SDA</tspan>
          <tspan x="9.911" y="-54">SCL</tspan>
          <tspan x="10.057" y="-63.54">GND</tspan>
          <tspan x="10.057" y="-73">VCC</tspan>
        </text>
      </svg>
    `}};_n([ce()],pn.prototype,"led1",void 0),pn=_n([oe("wokwi-mpu6050")],pn);var un=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let mn=class extends ae{constructor(){super(...arguments),this.led1=!1,this.ledPower=!1,this.pinInfo=[{name:"VIN",x:5,y:158.5,signals:[{type:"power",signal:"VCC"}]},{name:"GND.2",x:5,y:149,signals:[{type:"power",signal:"GND"}]},{name:"D13",x:5,y:139.5,signals:[Se("MOSI",0),{type:"pwm"}]},{name:"D12",x:5,y:130.4,signals:[Se("MISO",0),{type:"pwm"}]},{name:"D14",x:5,y:120,signals:[Se("SCK",0),{type:"pwm"}]},{name:"D27",x:5,y:110.8,signals:[{type:"pwm"}]},{name:"D26",x:5,y:101,signals:[{type:"pwm"}]},{name:"D25",x:5,y:91.3,signals:[{type:"pwm"}]},{name:"D33",x:5,y:81.7,signals:[{type:"pwm"}]},{name:"D32",x:5,y:72.2,signals:[{type:"pwm"}]},{name:"D35",x:5,y:62.9,signals:[]},{name:"D34",x:5,y:53.1,signals:[]},{name:"VN",x:5,y:44,signals:[]},{name:"VP",x:5,y:34,signals:[]},{name:"EN",x:5,y:24,signals:[]},{name:"3V3",x:101.3,y:158.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"GND.1",x:101.3,y:149,signals:[{type:"power",signal:"GND"}]},{name:"D15",x:101.3,y:139.5,signals:[Se("SS",0),{type:"pwm"}]},{name:"D2",x:101.3,y:130.4,signals:[{type:"pwm"}]},{name:"D4",x:101.3,y:120,signals:[{type:"pwm"}]},{name:"RX2",x:101.3,y:110.8,signals:[be("RX",2),{type:"pwm"}]},{name:"TX2",x:101.3,y:101,signals:[be("TX",2),{type:"pwm"}]},{name:"D5",x:101.3,y:91.3,signals:[Se("SS",1),{type:"pwm"}]},{name:"D18",x:101.3,y:81.7,signals:[Se("SCK",1),{type:"pwm"}]},{name:"D19",x:101.3,y:72.2,signals:[Se("MISO",1),{type:"pwm"}]},{name:"D21",x:101.3,y:62.9,signals:[Ee("SDA"),{type:"pwm"}]},{name:"RX0",x:101.3,y:53.1,signals:[be("RX",0),{type:"pwm"}]},{name:"TX0",x:101.3,y:44,signals:[be("TX",0),{type:"pwm"}]},{name:"D22",x:101.3,y:34,signals:[Ee("SCL"),{type:"pwm"}]},{name:"D23",x:101.3,y:24,signals:[Se("MOSI",1),{type:"pwm"}]}]}render(){const{ledPower:e,led1:t}=this;return U`
      <svg
        width="28.2mm"
        height="54.053mm"
        version="1.1"
        viewBox="0 0 107 201"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="4.6" width="5" patternUnits="userSpaceOnUse">
            <path
              d="m3.5 2.85c0.268 1.82e-4 0.525-0.106 0.716-0.296 0.187-0.19 0.296-0.445 0.297-0.713l5.7e-4 -0.836c1.82e-4 -0.268-0.109-0.525-0.296-0.716-0.19-0.19-0.447-0.296-0.715-0.297l-3.5-0.0024-0.0019 2.85z"
              fill="#d1c479"
              stroke-width="3.11"
            />
          </pattern>
          <pattern id="small-pin-pattern" height="4.6" width="2.5" patternUnits="userSpaceOnUse">
            <path
              d="m1.4 1.32c0-0.138-0.0547-0.271-0.153-0.37-0.098-0.0965-0.23-0.153-0.368-0.153h-0.432c-0.138 0-0.271 0.0563-0.37 0.153-0.098 0.098-0.153 0.231-0.153 0.37v1.81h1.47z"
              fill="#f5f9f0"
              stroke-width="1.61"
            />
          </pattern>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <!-- Board -->
        <path
          d="m7.56 0c-4.19 0-7.56 3.37-7.56 7.56v181c0 4.19 3.37 7.56 7.56 7.56h91.5c4.19 0 7.56-3.37 7.56-7.56v-181c0-4.19-3.37-7.56-7.56-7.56zm1.11 2.5a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm88.9 0.217a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm3.75 15.8a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.5 0.438a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 9.15a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.8 0.344a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.8 9.7a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.27a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 9.24a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.0391a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0.0762 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 0.0371a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.422a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.51a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.115a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.4 9.54a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.0391a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.5 9.7a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.346a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 9.35a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 0.154a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 9.43a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 0.23a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.23a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 9.35a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.152a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.8 9.51a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.154a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 9.43a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.152a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm3.79 24.7a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm88.7 0.217a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24z"
          fill="#1a1a1a"
          fill-rule="evenodd"
        />

        <!-- ESP32 Chip -->
        <rect transform="translate(85,34)" width="4.8" height="55" fill="url(#pin-pattern)"></rect>
        <rect
          transform="translate(20.5,87) rotate(180)"
          width="4.8"
          height="55"
          fill="url(#pin-pattern)"
        ></rect>
        <rect
          transform="translate(80,98) rotate(90)"
          width="4.8"
          height="55"
          fill="url(#pin-pattern)"
        ></rect>
        <rect x="20" y="24.8" width="65.6" height="73.3" fill="#808080" fill-rule="evenodd" />

        <!-- Regulator -->
        <g fill="#ececec" fill-rule="evenodd">
          <rect x="19.3" y="143" width="7.21" height="11.5" />
          <rect x="39.8" y="139" width="6.59" height="3.07" />
          <rect x="40" y="147" width="6.59" height="3.07" />
          <rect x="40.2" y="156" width="6.59" height="3.07" />
        </g>
        <rect x="26.3" y="137" width="14" height="24.7" fill="#4d4d4d" fill-rule="evenodd" />

        <!-- Buttons -->
        <g stroke-width="1.24">
          <rect x="77.6" y="177" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="83.2" cy="182" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m80.7 190h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m80.7 175h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="81" y="190" width="5.23" height="2.59" />
            <rect x="81" y="173" width="5.23" height="2.59" />
            <path
              d="m84.5 175c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m81.8 190c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358-0.0955-0.0955-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>
        <g stroke-width="1.24">
          <rect x="17.7" y="177" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="23.3" cy="182" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m20.8 189h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m20.8 175h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="21" y="189" width="5.23" height="2.59" />
            <rect x="21" y="172" width="5.23" height="2.59" />
            <path
              d="m24.5 175c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m21.9 189c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358-0.0955-0.0955-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>

        <!-- USB Connection -->
        <path
          d="m66.4 197 1.06 2.24c0.0651 0.142 0.0731 0.302 0.0207 0.448-0.0525 0.147-0.16 0.266-0.301 0.332-0.14 0.0665-0.302 0.0744-0.448 0.022-0.146-0.0525-0.266-0.16-0.332-0.301l-0.724-1.54-3e-3 0.207c-6e-3 0.488-0.206 0.955-0.556 1.3-0.35 0.342-0.821 0.529-1.31 0.522l-22.2-0.29c-0.489-6e-3 -0.955-0.206-1.3-0.556-0.341-0.35-0.529-0.821-0.522-1.31l3e-3 -0.207-0.764 1.52c-0.0701 0.14-0.192 0.244-0.34 0.292-0.147 0.0486-0.307 0.0365-0.446-0.0336l-1e-3 -1e-5c-0.138-0.0701-0.244-0.192-0.292-0.34-0.0486-0.147-0.0365-0.307 0.0336-0.447l1.11-2.21-0.602-8e-3 0.269-20.6 28.2 0.369-0.269 20.6z"
          fill="#cecccb"
          stroke-width="1.26"
        />
        <path
          d="m60.7 177-0.0236 1.8c-7.9e-4 0.0607 0.0301 0.116 0.0802 0.148 0.522 0.329 3.38 2.12 3.38 2.12l-0.0217 1.66-1.74-0.0227-0.0156 1.19-2.63-0.0344 0.0156-1.19-1.66-0.0217 0.0413-3.16c2e-3 -0.136-0.0496-0.265-0.143-0.361-0.0948-0.096-0.223-0.151-0.357-0.152l-1.58-0.0207-0.0172 1.31-6.46-0.0845 0.0172-1.31-1.58-0.0207c-0.134-2e-3 -0.264 0.0496-0.36 0.143-0.0973 0.0936-0.152 0.221-0.154 0.357l-0.0413 3.16-1.66-0.0217-0.0156 1.19-2.63-0.0344 0.0156-1.19-1.74-0.0228 0.0217-1.66s2.91-1.73 3.43-2.03c0.0522-0.0309 0.0833-0.0848 0.0841-0.146l0.0236-1.8z"
          fill="#989898"
          stroke-width="1.26"
        />

        <!-- LEDs -->
        <g stroke-width="1.44">
          <rect x="35" y="108" width="3.83" height="9.3" fill="#e5e5e5" />
          <rect x="35" y="111" width="3.83" height="5.31" fill="#f5ecde" />
          ${e&&B`<circle cx="37" cy="112.5" r="4" fill="red" filter="url(#ledFilter)" />`}

          <rect x="69.5" y="108" width="3.83" height="9.3" fill="#e5e5e5" />
          <rect x="69.5" y="110" width="3.83" height="5.31" fill="#f5ecde" />
          ${t&&B`<circle cx="71.5" cy="112.5" r="4" fill="blue" filter="url(#ledFilter)" />`}
        </g>

        <!-- Small Chip-->
        <rect
          transform="translate(69,137)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(82.8,160.5) rotate(180)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(87.2,142) rotate(90)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(64,155.8) rotate(270)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect x="66.9" y="140" width="17.4" height="17.4" fill="#333" stroke-width="1.61" />

        <!-- Texts -->
        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px" transform="rotate(270)">
          <tspan x="-162.21" y="12.285">VIN</tspan>
          <tspan x="-153.37" y="12.317">GND</tspan>
          <tspan x="-143.03" y="12.269">D13</tspan>
          <tspan x="-132.81" y="12.130">D12</tspan>
          <tspan x="-123.10" y="12.514">D14</tspan>
          <tspan x="-113.82" y="12.481">D27</tspan>
          <tspan x="-103.55" y="12.580">D26</tspan>
          <tspan x="-94.204" y="12.509">D25</tspan>
          <tspan x="-84.482" y="12.632">D33</tspan>
          <tspan x="-74.139" y="12.294">D32</tspan>
          <tspan x="-64.263" y="12.750">D35</tspan>
          <tspan x="-54.385" y="12.631">D34</tspan>
          <tspan x="-44.529" y="12.468">VN</tspan>
          <tspan x="-35.205" y="12.546">VP</tspan>
          <tspan x="-25.439" y="12.846">EN</tspan>
          <tspan x="-163.01" y="95.712">3V3</tspan>
          <tspan x="-153.64" y="95.392">GND</tspan>
          <tspan x="-142.86" y="95.431">D15</tspan>
          <tspan x="-131.36" y="95.296">D2</tspan>
          <tspan x="-122.53" y="95.505">D4</tspan>
          <tspan x="-114.75" y="95.613">RX2</tspan>
          <tspan x="-104.84" y="95.442">TX2</tspan>
          <tspan x="-93.899" y="95.430">D5</tspan>
          <tspan x="-85.460" y="95.585">D18</tspan>
          <tspan x="-75.415" y="95.747">D19</tspan>
          <tspan x="-65.796" y="95.687">D21</tspan>
          <tspan x="-55.802" y="95.818">RX0</tspan>
          <tspan x="-45.850" y="95.613">TX0</tspan>
          <tspan x="-36.582" y="96.012">D22</tspan>
          <tspan x="-26.250" y="95.903">D23</tspan>
        </text>
        <text x="30" y="59" fill="#cecccb" font-family="sans-serif" font-size="15px">ESP32</text>

        <!-- Antenna -->
        <path
          d="m24.3 22.1v-18.8h8v11.5h10.2v-11h8.5v10.5h10v-10.5h17.8v20.2"
          fill="none"
          stroke="#4f4c48"
          stroke-width="1px"
        />
        <path d="m69.7 4.16v19.5" fill="none" stroke="#4f4c48" stroke-width="1px" />
      </svg>
    `}};un([ce()],mn.prototype,"led1",void 0),un([ce()],mn.prototype,"ledPower",void 0),mn=un([oe("wokwi-esp32-devkit-v1")],mn);var gn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let hn=class extends ae{constructor(){super(...arguments),this.angle=0,this.stepSize=18,this.pressed=!1,this.arrowTimer=null,this.pinInfo=[{name:"CLK",y:7.9,x:116,number:1,signals:[]},{name:"DT",y:17.4,x:116,number:2,signals:[]},{name:"SW",y:27,x:116,number:3,signals:[]},{name:"VCC",y:36.3,x:116,number:4,signals:[ve()]},{name:"GND",y:45.5,x:116,number:5,signals:[ye()]}]}static get styles(){return s`
      svg {
        user-select: none;
      }

      .arrow-container {
        cursor: pointer;
      }

      svg:hover .arrow {
        fill: #666;
        stroke: #666;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      .arrow-container:hover .arrow {
        fill: white;
      }

      svg:hover .handle:hover {
        stroke: #ccc;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      svg:hover .handle.active {
        fill: white;
        stroke: white;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      .handle {
        cursor: pointer;
      }

      g[tabindex]:focus {
        outline: none;
      }

      g[tabindex]:focus + .focus-indicator {
        opacity: 1;
      }
    `}render(){return U`
      <svg
        width="30.815mm"
        height="18.63mm"
        version="1.1"
        viewBox="0 0 116 70.4"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x1="158"
            x2="170"
            y1="86.5"
            y2="86.5"
            gradientTransform="translate(-75.1 -60.1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4d4d4d" offset="0" />
            <stop stop-color="#4d4d4d" stop-opacity="0" offset="1" />
          </linearGradient>
        </defs>

        <!-- Board -->
        <path
          d="m0 0v70.4h99v-70.4zm18 56.5a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 6.5-6.5zm63.8 0.213a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 6.5-6.5z"
          fill="#1a1a1a"
          fill-rule="evenodd"
        />

        <!-- Rotator -->
        <g fill="#ccc" fill-rule="evenodd">
          <rect x="9.05" y="17.4" width="6.95" height="2.47" rx=".756" />
          <rect x="9.15" y="26.5" width="6.95" height="2.47" rx=".756" />
          <rect x="9.05" y="36.1" width="6.95" height="2.47" rx=".756" />
        </g>

        <g tabindex="0" @keydown=${this.keydown} @keyup=${this.keyup}>
          <rect x="12.2" y="8.05" width="48.4" height="41" rx="7.12" fill="#e6e6e6" />

          <circle cx="36.6" cy="28.5" r="13.5" fill="#666" />
          <rect x="32.5" y="7.87" width="7.42" height="41.5" fill="#666" />

          <!-- Handle -->
          <path
            transform="rotate(${this.angle}, 36.244, 28.5)"
            d="m36.3 21.4a7.03 7.14 0 0
              0-3.74 1.1v12.1a7.03 7.14 0 0 0 3.74 1.1 7.03 7.14 0 0 0 7.03-7.14 7.03 7.14 0 0
              0-7.03-7.14z"
            fill="#ccc"
            stroke="#060606"
            stroke-width=".3"
            class="handle ${this.pressed?"active":""}"
            @mousedown=${this.press}
            @mouseup=${this.release}
            @mouseleave=${this.release}
          />

          <!-- Counter Clockwise Arrow -->
          <g
            class="arrow-container"
            @click=${this.counterClockwiseStep}
            @mousedown=${this.counterclockwiseArrowPress}
            @mouseup=${this.arrowRelease}
            @mouseleave=${this.arrowRelease}
          >
            <circle cx="20" cy="43" r="12" fill="red" opacity="0" />
            <path
              d="m21 44.5c-5.17-1.78-7.55-5.53-6.6-11.2 0.0662-0.327 0.107-0.938 0.272-1.06 0.204-0.137 0.312-0.116 0.39-0.1 0.0775 0.0152 0.139 0.0274 0.189 0.102 0.846 3.81 3.13 6.84 6.57 7.59 0.304-0.787 0.461-3.32 0.826-3.24 0.428 0.0848 4.31 5.73 4.93 6.65-0.978 0.839-6.07 4.44-6.95 4.28 0 0 0.206-2.19 0.362-2.96z"
              fill="#b3b3b3"
              stroke="#000"
              stroke-width=".0625px"
              class="arrow"
            />
          </g>

          <!-- Clockwise Arrow -->
          <g
            class="arrow-container"
            @click=${this.clockwiseStep}
            @mousedown=${this.clockwiseArrowPress}
            @mouseup=${this.arrowRelease}
            @mouseleave=${this.arrowRelease}
          >
            <circle cx="20" cy="15" r="12" fill="red" opacity="0" />
            <path
              d="m21.2 12.1c-5.17 1.78-7.55 5.53-6.6 11.2 0.0662 0.327 0.107 0.938 0.272 1.06 0.204 0.137 0.312 0.116 0.39 0.1 0.0775-0.0152 0.139-0.0274 0.189-0.102 0.846-3.81 3.13-6.84 6.57-7.59 0.304 0.787 0.461 3.32 0.826 3.24 0.428-0.0848 4.31-5.73 4.93-6.65-0.978-0.839-6.07-4.44-6.95-4.28 0 0 0.206 2.19 0.362 2.96z"
              fill="#b3b3b3"
              stroke="#022"
              stroke-width=".0625px"
              class="arrow"
            />
          </g>
        </g>

        <!-- Focus indicator for the group above-->
        <rect
          class="focus-indicator"
          x="10.2"
          y="6.05"
          width="52.4"
          height="45"
          rx="7.12"
          stroke="white"
          stroke-width="2"
          fill="none"
          opacity="0"
        />

        <!-- Chip Pins -->
        <rect
          x="83"
          y="1.72"
          width="10.9"
          height="49.2"
          fill="url(#a)"
          fill-rule="evenodd"
          opacity=".65"
          stroke="#fff"
          stroke-width="1.16"
        />
        <g fill="#ccc" fill-rule="evenodd">
          <rect x="86.9" y="6.54" width="28.9" height="2.47" rx=".877" />
          <rect x="86.8" y="15.9" width="28.9" height="2.47" rx=".877" />
          <rect x="87.1" y="25.6" width="28.9" height="2.47" rx=".877" />
          <rect x="87.1" y="34.9" width="28.9" height="2.47" rx=".877" />
          <rect x="87.6" y="44.1" width="28.9" height="2.47" rx=".877" />
        </g>
        <g fill="#ffffff" font-family="sans-serif" letter-spacing="0px" word-spacing="0px">
          <text x="65.55" y="12.13" font-size="7.29px" fill="#ffffff" stroke-width=".182">CLK</text>
          <text x="65.02" y="21.93" font-size="7.44px" fill="#ffffff">DT</text>
          <text x="65.29" y="31.26" font-size="7.54px" fill="#ffffff">SW</text>
          <text x="70.42" y="39.99" font-size="6.82px" fill="#ffffff">+</text>
          <text x="64.31" y="49.74" font-size="7.59px" fill="#ffffff">GND</text>
        </g>
      </svg>
    `}clockwiseStep(){this.angle=(this.angle+this.stepSize)%360,this.dispatchEvent(new InputEvent("rotate-cw"))}counterClockwiseStep(){this.angle=(this.angle-this.stepSize+360)%360,this.dispatchEvent(new InputEvent("rotate-ccw"))}press(){this.pressed||(this.dispatchEvent(new InputEvent("button-press")),this.pressed=!0)}release(){this.pressed&&(this.dispatchEvent(new InputEvent("button-release")),this.pressed=!1)}counterclockwiseArrowPress(){this.arrowTimer=setInterval((()=>{this.counterClockwiseStep()}),300)}clockwiseArrowPress(){this.arrowTimer=setInterval((()=>{this.clockwiseStep()}),300)}arrowRelease(){null!=this.arrowTimer&&(clearInterval(this.arrowTimer),this.arrowTimer=null)}keydown(e){switch(e.key){case"ArrowUp":case"ArrowRight":this.clockwiseStep(),e.preventDefault();break;case"ArrowDown":case"ArrowLeft":this.counterClockwiseStep(),e.preventDefault();break;case" ":this.press(),e.preventDefault();break}}keyup(e){switch(e.key){case" ":e.preventDefault(),this.release();break}}};gn([ce()],hn.prototype,"angle",void 0),gn([ce()],hn.prototype,"stepSize",void 0),gn([ce()],hn.prototype,"pressed",void 0),hn=gn([oe("wokwi-ky-040")],hn);var fn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let En=class extends ae{constructor(){super(...arguments),this.ledDO=!1,this.ledPower=!1,this.pinInfo=[{name:"VCC",x:172,y:16,signals:[ve()]},{name:"GND",x:172,y:26,signals:[ye()]},{name:"DO",x:172,y:35.8,signals:[]},{name:"AO",x:172,y:45.5,signals:[fe(0)]}]}render(){const{ledPower:e,ledDO:t}=this;return U`
      <svg
        width="45.95mm"
        height="16.267mm"
        version="1.1"
        viewBox="0 0 174 61.5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- board -->
        <path
          d="m153 0h-136v61.5h136zm-129 52c1.9 0 3.44 1.5 3.44 3.34s-1.54 3.34-3.44 3.34-3.44-1.5-3.44-3.34 1.54-3.34 3.44-3.34zm98.3-29.8c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55zm-98.3-19.4c1.9 0 3.44 1.5 3.44 3.34 0 1.84-1.54 3.34-3.44 3.34s-3.44-1.5-3.44-3.34c0-1.84 1.54-3.34 3.44-3.34z"
          fill="#1c2546"
        />

        <!--Photo sensor-->
        <rect
          x="18.9"
          y="20.1"
          width="11.2"
          height="22.2"
          fill="none"
          stroke="#fff"
          stroke-width="1.08px"
        />
        <circle cx="24.5" cy="25.6" r="3.14" fill="#dae3eb" />
        <circle cx="24.5" cy="36.8" r="3.14" fill="#dae3eb" />
        <path
          d="m24.5 25.7c0-0.199-0.079-0.39-0.22-0.53-0.14-0.141-0.331-0.22-0.529-0.22h-23c-0.199 0-0.389 0.079-0.53 0.22-0.14 0.14-0.219 0.331-0.219 0.53 0 0.198 0.079 0.389 0.219 0.53 0.141 0.14 0.331 0.219 0.53 0.219h23c0.198 0 0.389-0.079 0.529-0.219 0.141-0.141 0.22-0.332 0.22-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m24.5 36.7c0-0.198-0.079-0.389-0.22-0.53-0.14-0.14-0.331-0.219-0.529-0.219h-23c-0.199 0-0.389 0.079-0.53 0.219-0.14 0.141-0.219 0.332-0.219 0.53 0 0.199 0.079 0.39 0.219 0.53 0.141 0.141 0.331 0.22 0.53 0.22h23c0.198 0 0.389-0.079 0.529-0.22 0.141-0.14 0.22-0.331 0.22-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m8.64 22.8c0-0.375-0.304-0.679-0.679-0.679h-6.14c-0.375 0-0.679 0.304-0.679 0.679v16.8c0 0.375 0.304 0.679 0.679 0.679h6.14c0.375 0 0.679-0.304 0.679-0.679v-16.8z"
          fill="#cc4247"
        />
        <clipPath>
          <path
            d="m27.9 29c0-0.375-0.304-0.679-0.679-0.679h-6.14c-0.375 0-0.679 0.304-0.679 0.679v16.8c0 0.375 0.304 0.679 0.679 0.679h6.14c0.375 0 0.679-0.304 0.679-0.679v-16.8z"
          />
        </clipPath>

        <!-- Holes -->
        <g fill="none" stroke-width="1.08px">
          <ellipse cx="24.5" cy="6.11" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <ellipse cx="24.5" cy="55.4" rx="3.43" ry="3.34" stroke="#a8b6ba" />

          <!-- +/- -->
          <g stroke="#fff">
            <path d="m24 44.7v4.75" />
            <path d="m24 12.1v4.75" />
            <path d="m26.4 14.5h-4.75" />
          </g>
        </g>

        <!-- Resistors -->
        <g fill="#dae3eb">
          <rect x="37.7" y="8.69" width="16.7" height="5.52" />
          <rect x="37.7" y="22" width="16.7" height="5.52" />
          <rect x="37.7" y="34.5" width="16.7" height="5.52" />
        </g>
        <rect x="41.9" y="34.3" width="8.43" height="5.9" fill="#29261c" />
        <path d="m108 21.2v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m108 17v-8.43h-5.9v8.43z" fill="#29261c" />
        <path d="m108 53.8v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m108 49.7v-8.43h-5.9v8.43z" fill="#29261c" />
        <rect x="37.7" y="47.5" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="41.9" y="8.5" width="8.43" height="5.9" fill="#907463" />
        <rect x="41.9" y="21.8" width="8.43" height="5.9" fill="#907463" />
        <rect x="41.9" y="47.3" width="8.43" height="5.9" fill="#29261c" />

        <!-- LEDs -->
        <rect x="118" y="4.77" width="13" height="4.29" fill="#dae3eb" />
        <rect x="121" y="4.62" width="6.55" height="4.59" fill="#fffefe" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${e&&B`<circle cx="124.5" cy="7" r="4" fill="green" filter="url(#ledFilter)" />`}

        <rect x="118" y="52.6" width="13" height="4.29" fill="#dae3eb" />
        <rect x="121" y="52.5" width="6.55" height="4.59" fill="#fffefe" />
        ${t&&B`<circle cx="124.5" cy="55" r="4" fill="red" filter="url(#ledFilter)" />`}

        <!-- Chip -->
        <g fill="#dae3eb">
          <path
            d="m72.7 34.6h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m72.7 40.4h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m72.7 46.2h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.288 0.677 0.449 1.08 0.449h9.67z"
          />
          <path
            d="m72.7 52h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.288 0.677 0.449 1.08 0.449h9.67z"
          />
          <path
            d="m84.4 55.1h9.67c0.406 0 0.796-0.161 1.08-0.449 0.288-0.287 0.449-0.677 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 49.3h9.67c0.406 0 0.796-0.161 1.08-0.449 0.288-0.287 0.449-0.677 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 43.5h9.67c0.406 0 0.796-0.161 1.08-0.448 0.288-0.288 0.449-0.678 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 37.7h9.67c0.406 0 0.796-0.161 1.08-0.448 0.288-0.288 0.449-0.678 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
        </g>
        <rect x="70.3" y="33.2" width="16.1" height="23.3" fill="#29261c" />

        <!-- Decorations -->
        <rect x="62.8" y="7.63e-9" width="32.1" height="32.1" fill="#466fb5" />
        <circle cx="78.9" cy="16" r="6.56" fill="#bcc2d5" />
        <path d="m78.9 6.72v18.6" fill="none" stroke="#3f3c40" stroke-width="2.5px" />
        <path d="m88.2 16h-18.6" fill="none" stroke="#3f3c40" stroke-width="2.5px" />
        <path
          d="m123 19.8c5.5 0 9.96 4.46 9.96 9.96s-4.46 9.96-9.96 9.96-9.96-4.46-9.96-9.96 4.46-9.96 9.96-9.96zm0 2.4c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55z"
          fill="#d4d0d1"
        />

        <!-- Text -->
        <g fill="#fffefe" font-size="4.4px" font-family="sans-serif">
          <text x="117.46" y="13.90">PWR</text>
          <text x="117.46" y="18.41">LED</text>
          <text x="133.16" y="17.37">VCC</text>
          <text x="133.16" y="26.87">GND</text>
          <text x="135.42" y="36.55">DO</text>
          <text x="135.42" y="46.359">AO</text>
          <text x="117.44" y="45.53">DO</text>
          <text x="117.44" y="50.036">LED</text>
        </g>

        <!-- Board pins -->
        <path
          d="m143 11.7v38h8.39v-38z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="round"
          stroke-width=".4px"
        />
        <g fill="#433b38">
          <path d="m144 42.1v6.55h6.55v-6.55z" />
          <path d="m144 32.3v6.55h6.55v-6.55z" />
          <path d="m144 22.6v6.55h6.55v-6.55z" />
          <path d="m144 12.9v6.55h6.55v-6.55z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m147 43.9c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.271 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 34.2c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.271 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 24.4c-0.382 0-0.748 0.151-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.27 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 14.7c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.637-0.421 1.02s0.151 0.749 0.421 1.02c0.271 0.27 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.19-0.424-0.423-0.424h-26.1z"
          />
        </g>
      </svg>
    `}};fn([ce()],En.prototype,"ledDO",void 0),fn([ce()],En.prototype,"ledPower",void 0),En=fn([oe("wokwi-photoresistor-sensor")],En);var Sn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let bn=class extends ae{constructor(){super(...arguments),this.ledRed=0,this.ledGreen=0,this.ledBlue=0,this.pinInfo=[{name:"R",x:8.5,y:44,signals:[]},{name:"COM",x:18,y:54,signals:[]},{name:"G",x:26.4,y:44,signals:[]},{name:"B",x:35.7,y:44,signals:[]}]}render(){const{ledRed:e,ledGreen:t,ledBlue:n}=this,i=Math.max(e,t,n),r=i?.2+.6*i:0;return U`
      <?xml version="1.0" encoding="UTF-8"?>
      <svg
        width="42.129"
        height="72.582"
        version="1.2"
        viewBox="-17 -10 37.3425 57.5115"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- LED Legs -->
        <g fill="none" stroke="#9D9999" stroke-linecap="round" stroke-width="1.5px">
          <path d="m4.1 15.334 3.0611 9.971" />
          <path d="m8 14.4 5.9987 4.0518 1.1777 6.5679" stroke-linejoin="round" />
          <path d="m-4.3 14.184-5.0755 5.6592-0.10206 6.1694" stroke-linejoin="round" />
          <path d="m-1.1 15.607-0.33725 18.4" />
        </g>

        <!-- LED Body -->
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          opacity=".3"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="#e6e6e6"
          opacity=".5"
        />
        <path
          d="m8.3435 5.65v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
          fill="#d1d1d1"
          opacity=".9"
        />
        <g transform="translate(-5.8295 -7.351)">
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            opacity=".7"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
            opacity=".25"
          />
          <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
        </g>
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648 2.2032 16.107 3.1961 16.107"
          fill="#666"
        />
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241 11.215 9.0338 7.4117 13.095"
          fill="#666"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="white"
          opacity=".65"
        />
        <g transform="translate(-5.8295 -7.351)" fill="#fff">
          <path
            d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
            opacity=".5"
          />
          <path
            d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
            opacity=".5"
          />
          <path
            d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
            opacity=".5"
          />
        </g>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="ledFilterRed" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*e}" />
        </filter>
        <filter id="ledFilterGreen" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*t}" />
        </filter>
        <filter id="ledFilterBlue" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*n}" />
        </filter>

        <circle
          cx="1.7"
          cy="3"
          r="${5*e+2}"
          fill="rgb(255, 0, 0)"
          opacity="${Math.min(20*e,.3)}"
          filter="url(#ledFilterRed)"
        />
        <circle
          cx="2.7"
          cy="5"
          r="${5*t+2}"
          fill="rgb(0, 255, 0)"
          opacity="${Math.min(20*t,.3)}"
          filter="url(#ledFilterGreen)"
        />
        <circle
          cx="0.7"
          cy="5"
          r="${5*n+2}"
          fill="rgb(1,85,253)"
          opacity="${Math.min(20*n,.3)}"
          filter="url(#ledFilterBlue)"
        />

        <circle
          cx="1.7"
          cy="4"
          r="10"
          fill="rgb(${255*e}, ${255*t+90*n}, ${255*n})"
          filter="url(#ledFilter)"
          opacity="${r}"
        />

        <!-- Grey hollow around the LED -->
        <circle
          cx="1.7"
          cy="4"
          r="13"
          stroke="#666"
          stroke-width="1"
          fill="none"
          filter="url(#ledFilter)"
          opacity="${r}"
        />
      </svg>
    `}};Sn([ce()],bn.prototype,"ledRed",void 0),Sn([ce()],bn.prototype,"ledGreen",void 0),Sn([ce()],bn.prototype,"ledBlue",void 0),bn=Sn([oe("wokwi-rgb-led")],bn);var yn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let vn=class extends ae{constructor(){super(...arguments),this.screenWidth=240,this.screenHeight=320,this.flipHorizontal=!1,this.flipVertical=!1,this.pinInfo=[{name:"VCC",x:48.3,y:287.2,signals:[{type:"power",signal:"VCC"}]},{name:"GND",x:57.9012,y:287.2,signals:[{type:"power",signal:"GND"}]},{name:"CS",x:67.5024,y:287.2,signals:[Se("SS")]},{name:"RST",x:77.1036,y:287.2,signals:[]},{name:"D/C",x:86.7048,y:287.2,signals:[]},{name:"MOSI",x:96.306,y:287.2,signals:[Se("MOSI")]},{name:"SCK",x:105.9072,y:287.2,signals:[Se("SCK")]},{name:"LED",x:115.5084,y:287.2,signals:[]},{name:"MISO",x:125.1096,y:287.2,signals:[Se("MISO")]}]}static get styles(){return s`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 8px;
        top: 28px;
        width: 159px;
        height: 212px;
      }

      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `}get canvas(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("canvas")}firstUpdated(){this.dispatchEvent(new CustomEvent("canvas-ready"))}render(){const{screenWidth:e,screenHeight:t,flipHorizontal:n,flipVertical:i}=this,r=n||i,a=n?-1:1,s=i?-1:1,o=r?`transform: scaleX(${a}) scaleY(${s});`:"";return U`
      <div class="container">
        <svg
          width="46.5mm"
          height="77.6mm"
          version="1.1"
          viewBox="0 0 46.5 77.6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Board -->
          <path
            d="m8.8e-7 3.37e-6v77.6h46.5v-77.6zm43.1 1.78a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm-39.4 0.0946a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm0 70.7a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm39.4 0.0946a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm-31 2.68h1.41v1.34h-1.41zm2.53 0h1.41v1.34h-1.41zm2.56 0h1.41v1.34h-1.41zm2.54 0h1.41v1.34h-1.41zm12.7 0h1.41v1.34h-1.41zm-10.1 0.0119h1.41v1.34h-1.41zm2.54 0.0119h1.41v1.34h-1.41zm5.08 0h1.41v1.34h-1.41zm-2.53 0.0114h1.41v1.34h-1.41z"
            fill="#931917"
            stroke-width="0"
          />

          <!-- LCD Panel -->
          <path d="m0.17 5.65v64.6h46.1v-64.6zm6.46 62.9h34.7v1.7h-34.7z" fill="#f6e1f1" />
          <rect
            x="11.2"
            y="66.7"
            width="24.2"
            height="6.24"
            rx="1"
            ry="1"
            fill="#bdab16"
            opacity=".4"
          />
          <rect x="1.62" y="6.79" width="43.3" height="61.9" />
          <rect
            x="10.8"
            y="74.6"
            width="24.2"
            height="2.83"
            fill="none"
            stroke="#fff"
            stroke-width=".27"
          />

          <!-- Pins -->
          <g fill="#ccc">
            <path
              d="m11.8 75v1.99h1.98v-1.99zm0.988 0.397a0.6 0.6 0 0 1 0.0041 0 0.6 0.6 0 0 1 0.6 0.6 0.6 0.6 0 0 1-0.6 0.6 0.6 0.6 0 0 1-0.6-0.6 0.6 0.6 0 0 1 0.596-0.6z"
            />
            <path
              id="round-pin"
              d="m15.3 75a1 1 0 0 0-0.987 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-0.0134 0zm0.0093 0.4a0.6 0.6 0 0 1 0.0041 0 0.6 0.6 0 0 1 0.6 0.6 0.6 0.6 0 0 1-0.6 0.6 0.6 0.6 0 0 1-0.6-0.6 0.6 0.6 0 0 1 0.596-0.6z"
            />
            <use xlink:href="#round-pin" x="2.54" />
            <use xlink:href="#round-pin" x="5.08" />
            <use xlink:href="#round-pin" x="7.62" />
            <use xlink:href="#round-pin" x="10.16" />
            <use xlink:href="#round-pin" x="12.7" />
            <use xlink:href="#round-pin" x="15.24" />
            <use xlink:href="#round-pin" x="17.78" />
          </g>
          <text font-family="monospace" font-size="3.5px" fill="#fff">
            <tspan x="8.2" y="76.9">1</tspan>
            <tspan x="35.6" y="76.9">9</tspan>
            <tspan x="14.2" y="4.3" font-size="4.6px">ILI9341</tspan>
          </text>
        </svg>
        <canvas
          width="${e}"
          height="${t}"
          class="pixelated"
          style=${o}
        ></canvas>
      </div>
    `}};yn([ce()],vn.prototype,"flipHorizontal",void 0),yn([ce()],vn.prototype,"flipVertical",void 0),vn=yn([oe("wokwi-ili9341")],vn);var Tn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const Cn=[0,1,2,3,4,5,6,7,8,9],Rn=ue,On=1.27*Rn,Nn=8.83*Rn,xn="#9eff3c",An="#2c95fa",In="#6cf9dc",wn="#f1d73c",Dn="#dc012d",Mn={GYR:[xn,xn,xn,xn,xn,wn,wn,wn,Dn,Dn],BCYR:[An,In,In,In,In,wn,wn,wn,Dn,Dn]};let kn=class extends ae{constructor(){super(...arguments),this.color="red",this.offColor="#444",this.pinInfo=[{name:"A1",x:On,y:1.27*Rn,number:1,description:"Anode 1",signals:[]},{name:"A2",x:On,y:3.81*Rn,number:2,description:"Anode 2",signals:[]},{name:"A3",x:On,y:6.35*Rn,number:3,description:"Anode 3",signals:[]},{name:"A4",x:On,y:8.89*Rn,number:4,description:"Anode 4",signals:[]},{name:"A5",x:On,y:11.43*Rn,number:5,description:"Anode 5",signals:[]},{name:"A6",x:On,y:13.97*Rn,number:6,description:"Anode 6",signals:[]},{name:"A7",x:On,y:16.51*Rn,number:7,description:"Anode 7",signals:[]},{name:"A8",x:On,y:19.05*Rn,number:8,description:"Anode 8",signals:[]},{name:"A9",x:On,y:21.59*Rn,number:9,description:"Anode 9",signals:[]},{name:"A10",x:On,y:24.13*Rn,number:10,description:"Anode 10",signals:[]},{name:"C1",x:Nn,y:1.27*Rn,number:20,description:"Cathode 1",signals:[]},{name:"C2",x:Nn,y:3.81*Rn,number:19,description:"Cathode 2",signals:[]},{name:"C3",x:Nn,y:6.35*Rn,number:18,description:"Cathode 3",signals:[]},{name:"C4",x:Nn,y:8.89*Rn,number:17,description:"Cathode 4",signals:[]},{name:"C5",x:Nn,y:11.43*Rn,number:16,description:"Cathode 5",signals:[]},{name:"C6",x:Nn,y:13.97*Rn,number:15,description:"Cathode 6",signals:[]},{name:"C7",x:Nn,y:16.51*Rn,number:14,description:"Cathode 7",signals:[]},{name:"C8",x:Nn,y:19.05*Rn,number:13,description:"Cathode 8",signals:[]},{name:"C9",x:Nn,y:21.59*Rn,number:12,description:"Cathode 9",signals:[]},{name:"C10",x:Nn,y:24.13*Rn,number:11,description:"Cathode 10",signals:[]}],this.values=[0,0,0,0,0,0,0,0,0,0]}render(){const{values:e,color:t,offColor:n}=this,i=Mn[t];return U`
      <svg
        width="10.1mm"
        height="25.5mm"
        version="1.1"
        viewBox="0 0 10.1 25.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="pin-pattern" height="2.54" width="10.1" patternUnits="userSpaceOnUse">
          <circle cx="1.27" cy="1.27" r="0.5" fill="#aaa" />
          <circle cx="8.83" cy="1.27" r="0.5" fill="#aaa" />
        </pattern>
        <path d="m1.4 0h8.75v25.5h-10.1v-24.2z" />
        <rect width="10.1" height="25.4" fill="url(#pin-pattern)" />
        ${Cn.map((r=>{var a;return B`<rect x="2.5" y="${.4+2.54*r}" width="5" height="1.74" fill="${e[r]?null!==(a=null===i||void 0===i?void 0:i[r])&&void 0!==a?a:t:n}"/>`}))}
      </svg>
    `}};Tn([ce()],kn.prototype,"color",void 0),Tn([ce()],kn.prototype,"offColor",void 0),Tn([ce({type:Array})],kn.prototype,"values",void 0),kn=Tn([oe("wokwi-led-bar-graph")],kn);var Ln=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Pn=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"CD",x:76.734,y:9.3744,signals:[]},{name:"DO",x:76.734,y:18.8622,signals:[Se("MISO")]},{name:"GND",x:76.734,y:28.4634,signals:[{type:"power",signal:"GND"}]},{name:"SCK",x:76.734,y:38.178,signals:[Se("SCK")]},{name:"VCC",x:76.734,y:47.628,signals:[{type:"power",signal:"VCC"}]},{name:"DI",x:76.734,y:57.456,signals:[Se("MOSI")]},{name:"CS",x:76.734,y:66.906,signals:[Se("SS")]}]}render(){return U`
      <svg
        width="21.6mm"
        height="20.4mm"
        version="1.1"
        viewBox="0 0 21.6 20.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Board -->
        <rect width="21.6" height="20.4" fill="#a1111b" />

        <!-- Card and socket -->
        <rect
          x="1.32"
          y="4.59"
          width="3.13"
          height="8.06"
          fill="#262626"
          stroke="#d5b7b5"
          stroke-width=".232"
        />
        <rect x="4.08" y=".0367" width="10.7" height="17.8" rx=".772" ry=".772" fill="#262626" />
        <path
          d="m3.79 2.49-1.62 0.0292v1.38c0.474 0.0438 0.486 0.0027 0.489 0.197 0.0026 0.194-0.0698 0.237-1.2 0.257v0.939c0.388 0.0184 0.665-0.0702 0.679 0.211l0.176 3.66-0.413 0.434 0.0207 0.733 0.103 0.114 1.15 0.031 0.114-0.114-0.031-0.764-0.361-0.403 0.0413-3.62c0.0103-0.258 0.176-0.283 0.176-0.283h0.34c0.109 0 0.197 0.0689 0.197 0.154v5.29c0 0.0856-0.088 0.154-0.197 0.154h-1.99v6.96h5.2c-0.0402-1.41-0.191-5.31-0.0968-6 0.0155-0.114 0.263-0.0662 0.272-0.0303 0.0551 0.222 0.0216 2.55 0.234 5.65 0.431 0.234 0.17-0.655 0.423-0.635 0.242 0.0186-0.0802 0.81 0.394 0.635 0.384-4 0.0656-5.8 0.365-5.71 0.299 0.0904-0.204 5.36 0.0438 6.09h4.18s-0.17-4.16-0.285-5.96c-0.0099-0.155 0.473-0.156 0.467 0-0.0653 1.63 0.0803 5.67 0.0803 5.67 0.533 0.0657 0.168-0.755 0.46-0.745 0.279 0.0104-0.0511 0.854 0.387 0.745 0 0 0.218-4.08 0.226-5.69 7.07e-4 -0.146 0.375-0.139 0.372 0.0073-0.0227 1.42-0.131 5.97-0.131 5.97h1.01l-0.0656-14.3s-0.24-0.0383-0.352 0.0012c-3.96 1.4-7.81 1.06-10.7-0.0304-0.175-0.212-0.146-0.993-0.146-0.993z"
          fill="#dbded9"
        />
        <rect
          x="5.84"
          y="6.42"
          width="3.97"
          height="1.97"
          rx=".3"
          ry=".3"
          fill="#262626"
          stroke="#ebebeb"
          stroke-width=".08"
        />
        <rect
          x="10.4"
          y="6.42"
          width="3.97"
          height="1.97"
          rx=".3"
          ry=".3"
          fill="#262626"
          stroke="#ebebeb"
          stroke-width=".08"
        />
        <path
          d="m4.08 1.21s2.37 0.327 5.27 0.327c2.9 0 5.42-0.327 5.42-0.327v0.57s-0.949 0.331-5.42 0.327c-4.47-0.0037-5.27-0.327-5.27-0.327z"
          fill="#020202"
          stroke="#000"
          stroke-width=".027"
        />
        <g fill="#fcfff9">
          <rect x="1.19" y="10.9" width=".275" height="6.95" />
          <rect x="1.19" y="4.36" width=".275" height=".945" />
          <rect x="1.84" y="2.52" width=".33" height="1.38" />
        </g>

        <!-- Pins & labels -->
        <text font-family="sans-serif" fill="#ffffff" font-size="1.6px" stroke-width=".0327">
          <tspan x="16.61" y="2.90">CD</tspan>
          <tspan x="16.45" y="5.45">DO</tspan>
          <tspan x="15.39" y="7.98">GND</tspan>
          <tspan x="15.65" y="10.62">SCK</tspan>
          <tspan x="15.68" y="13.06">VCC</tspan>
          <tspan x="16.88" y="15.57">DI</tspan>
          <tspan x="16.67" y="18.24">CS</tspan>
        </text>
        <g fill="#fff" stroke="#d9cb97" stroke-width=".381">
          <ellipse cx="20.3" cy="2.48" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="4.99" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="7.53" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="10.1" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="12.6" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="15.2" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="17.7" rx=".814" ry=".814" />
        </g>
      </svg>
    `}};Pn=Ln([oe("wokwi-microsd-card")],Pn);var Fn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let Un=class extends ae{constructor(){super(...arguments),this.values=[0,0,0,0,0,0,0,0],this.pinInfo=[{name:"1a",number:1,y:51.3,x:8.1,signals:[]},{name:"2a",number:2,y:51.3,x:17.7,signals:[]},{name:"3a",number:3,y:51.3,x:27.3,signals:[]},{name:"4a",number:4,y:51.3,x:36.9,signals:[]},{name:"5a",number:5,y:51.3,x:46.5,signals:[]},{name:"6a",number:6,y:51.3,x:56.1,signals:[]},{name:"7a",number:7,y:51.3,x:65.7,signals:[]},{name:"8a",number:8,y:51.3,x:75.3,signals:[]},{name:"8b",number:9,y:3,x:75.3,signals:[]},{name:"7b",number:10,y:3,x:65.7,signals:[]},{name:"6b",number:11,y:3,x:56.1,signals:[]},{name:"5b",number:12,y:3,x:46.5,signals:[]},{name:"4b",number:13,y:3,x:36.9,signals:[]},{name:"3b",number:14,y:3,x:27.3,signals:[]},{name:"2b",number:15,y:3,x:17.7,signals:[]},{name:"1b",number:16,y:3,x:8.1,signals:[]}]}toggleSwitch(e){this.values[e]=this.values[e]?0:1,this.dispatchEvent(new InputEvent("switch-change",{detail:e})),this.requestUpdate()}onKeyDown(e){e.stopPropagation();const t=["1","2","3","4","5","6","7","8"],n=t.indexOf(e.key);-1!==n&&this.toggleSwitch(n)}drawSwitch(e,t){return B` 
        <rect
        @click=${()=>this.toggleSwitch(e)}
        x="${t+4.693}"
        y="21.2"
        width="5.8168"
        height="13"
      />
      <use
        @click=${()=>this.toggleSwitch(e)}
        xlink:href="#switch"
        x="${t}"
        y=${this.values[e]?-7.2:0}
      />`}preventTextSelection(e){e.detail>1&&e.preventDefault()}render(){return U`
      <svg
        tabindex="0"
        @keydown=${this.onKeyDown}
        @mousedown=${this.preventTextSelection}
        width="82.87"
        height="55.355"
        version="1.1"
        viewBox="0 0 82.87 55.355"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="switch"
            transform="translate(-66.856 -41.367)"
            fill="#fffef4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".77094"
            d="m72.096 69.764s1.3376 0.38247 2.1066 0.39196c0.76893 0.0095 2.44-0.39196 2.44-0.39196 0.39596-0.06361 0.72389 0.32286 0.72389 0.72389v4.3678c0 0.40104-0.52337 0.72389-0.72389 0.72389s-1.6592-0.41225-2.4288-0.40316c-0.76958 0.0091-2.1177 0.40316-2.1177 0.40316-0.39396 0.075-0.72389-0.32286-0.72389-0.72389v-4.3678c0-0.40104 0.32286-0.72389 0.72389-0.72389z"
          />
        </defs>

        <!-- Pins -->
        <g
          transform="translate(-66.856 -41.367)"
          fill="#454837"
          fill-opacity=".49194"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".76744"
        >
          <rect x="73" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="82.6" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="92.2" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="101.8" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="111.4" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="121" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="130.6" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="140.2" y="87" width="2" height="6.5" rx=".7" ry=".7" />

          <rect x="73" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="82.6" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="92.2" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="101.8" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="111.4" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="121" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="130.6" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="140.2" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
        </g>

        <!-- Board -->
        <rect x="0" y="8.5" width="90.5" height="38.0831" fill="#d72c2c" />

        <!-- Text -->
        <text fill="#fffef4" font-family="sans-serif" font-size="7.66px" style="line-height:1.25">
          <tspan x="6.340" y="18.03">ON</tspan>
          <tspan x="4.35" y="43.28">1</tspan>
          <tspan x="14.485" y="43.28">2</tspan>
          <tspan x="23.956" y="43.28">3</tspan>
          <tspan x="33.57" y="43.28">4</tspan>
          <tspan x="43.05" y="43.28">5</tspan>
          <tspan x="52.36" y="43.28">6</tspan>
          <tspan x="62.45" y="43.28">7</tspan>
          <tspan x="71.92" y="43.28">8</tspan>
        </text>

        <!-- Switches -->
        <g fill="#917c6f" stroke-width=".77094">
          ${this.drawSwitch(0,0)}<!-- -->
          ${this.drawSwitch(1,9.6)}<!-- -->
          ${this.drawSwitch(2,19.4)}<!-- -->
          ${this.drawSwitch(3,29.1)}<!-- -->
          ${this.drawSwitch(4,38.5)}<!-- -->
          ${this.drawSwitch(5,48.1)}<!-- -->
          ${this.drawSwitch(6,57.7)}<!-- -->
          ${this.drawSwitch(7,67.3)}<!-- -->
        </g>
      </svg>
    `}};Fn([ce({type:Array})],Un.prototype,"values",void 0),Un=Fn([oe("wokwi-dip-switch-8")],Un);var Bn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const Gn=23;let zn=class extends ae{constructor(){super(...arguments),this.angle=0,this.arrow="",this.value="",this.units="",this.size=Gn,this.nemaSpecMap={8:{id:8,frameSize:20.4,holeRadius:.5,shaftRadius:3.5,cornerRadius:2.5,cornerOffset:2.5,bodyRadius:7.7,textSize:10,valueYPosition:16.5,unitsYPosition:19.7},11:{id:11,frameSize:28.2,holeRadius:1.25,shaftRadius:5,cornerRadius:2.5,cornerOffset:2.5,bodyRadius:11,textSize:12,valueYPosition:21.5,unitsYPosition:24},14:{id:14,frameSize:35.2,holeRadius:1.5,shaftRadius:5,cornerRadius:4.5,cornerOffset:4.5,bodyRadius:11,textSize:14,valueYPosition:26,unitsYPosition:32},17:{id:17,frameSize:42.3,holeRadius:1.5,shaftRadius:5,cornerRadius:5,cornerOffset:5.5,bodyRadius:14,textSize:16,valueYPosition:30.5,unitsYPosition:33.7},23:{id:23,frameSize:57.3,holeRadius:2.5,shaftRadius:6.35,cornerRadius:5,cornerOffset:5.5,bodyRadius:19.5,textSize:24,valueYPosition:41,unitsYPosition:46},34:{id:34,frameSize:86,holeRadius:3.25,shaftRadius:14,cornerRadius:3.25,cornerOffset:8.4,bodyRadius:36.5,textSize:32,valueYPosition:68,unitsYPosition:75}}}get pinInfo(){var e;const t=null!==(e=this.nemaSpecMap[this.size])&&void 0!==e?e:this.nemaSpecMap[Gn],n=(t.frameSize/2-3.75)*ue+1,i=(t.frameSize+5)*ue,r=[{name:"A-",y:i,x:n,number:1,signals:[]},{name:"A+",y:i,x:n+2.54*ue,number:2,signals:[]},{name:"B+",y:i,x:n+5.08*ue,number:3,signals:[]},{name:"B-",y:i,x:n+7.62*ue,number:4,signals:[]}];return r}update(e){e.has("size")&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}render(){var e;const t=null!==(e=this.nemaSpecMap[this.size])&&void 0!==e?e:this.nemaSpecMap[Gn],n=t.cornerRadius,i=t.holeRadius,r=t.shaftRadius,a=t.frameSize,s=t.cornerOffset,o=t.bodyRadius,l=r/2,c=a/2,d=.9*i,_=1.1*i,p=Math.sqrt(.75*Math.pow(r,2));return U`<svg
      width="${a+1}mm"
      height="${a+5}mm"
      version="1.1"
      viewBox="0 0 ${(1+a)*ue} ${(5+a)*ue}"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient
          id="frame-gradient"
          x1="-${.2*a}"
          x2="${2*a}"
          y1="${a}"
          y2="${a}"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#666" offset="0" />
          <stop stop-color="#fff" offset="1" />
        </linearGradient>
        <linearGradient
          id="shaft-gradient"
          x1="0"
          x2="0"
          y1="-5"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9d9d9d" offset="0" />
          <stop stop-color="#9d9d9d" stop-opacity="0" offset="1" />
        </linearGradient>
        <linearGradient
          id="body-gradient"
          x1="${.1*a}"
          x2="${.7*a}"
          y1="${a}"
          y2="${a}"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9d9d9d" offset="0" />
          <stop stop-color="#fdfafa" offset=".29501" />
          <stop offset="1" stop-color="#2a2a2a" />
        </linearGradient>
      </defs>
      <!-- Body -->
      <g transform="translate(1,1)">
        <g transform="scale(${ue})">
          <!-- Pins -->
          <path
            id="pin"
            transform="translate(${c-3.75} ${a})"
            fill="#9f9f9f"
            d="m 0 0 c .5 0 .5 0 .5 .5 v 4.55 c -.5 .5 -.5 .5 -1 0 v -4.5 c 0 -.5 0 -.5 .5 -.5"
          />
          <use xlink:href="#pin" x="2.54" />
          <use xlink:href="#pin" x="5.08" />
          <use xlink:href="#pin" x="7.62" />

          <g stroke-linecap="round" stroke-linejoin="round">
            <rect
              width="${a}"
              height="${a}"
              rx="${n}"
              ry="${n}"
              fill="url(#frame-gradient)"
              stroke="#000"
              stroke-width=".3245"
            />
            <circle cx="${s}" cy="${s}" r="${_}" fill="#666" />
            <circle
              cx="${s}"
              cy="${s}"
              r="${d}"
              fill="#e6e6e6"
            />
            <circle
              cx="${a-s}"
              cy="${s}"
              r="${_}"
              fill="#666"
            />
            <circle
              cx="${a-s}"
              cy="${s}"
              r="${d}"
              fill="#e6e6e6"
            />
            <circle
              cx="${s}"
              cy="${a-s}"
              r="${_}"
              fill="#666"
            />
            <circle
              cx="${s}"
              cy="${a-s}"
              r="${d}"
              fill="#e6e6e6"
            />
            <circle
              cx="${a-s}"
              cy="${a-s}"
              r="${_}"
              fill="#666"
            />
            <circle
              cx="${a-s}"
              cy="${a-s}"
              r="${d}"
              fill="#e6e6e6"
            />
          </g>

          <!-- motor body -->
          <circle
            cx="${c}"
            cy="${c}"
            r="${o}"
            fill="#868686"
            fill-opacity=".89602"
            opacity=".73"
            stroke="url(#body-gradient)"
            stroke-width="1.41429"
          />
          <!-- Rotator -->
          <g>
            <path
              id="arrow-path"
              transform="
                rotate(${this.angle}, ${c},${c}) 
                translate(${c} ${c})"
              fill="${this.arrow||"transparent"}"
              d="m 0 0 l -${r} 0 l ${r} 
                -${c-3} l ${r} ${c-3} z"
            />
            <path
              id="shaft-path"
              transform="
                translate(${c}, ${c}) 
                rotate(${this.angle}) 
                translate(0, 0)"
              d="m -${l} -${p} a ${r} ${r} 0 1 0 ${r} 0 z"
              fill="#4d4d4d"
              stroke="url(#shaft-gradient)"
              stroke-width=".57968"
            />
          </g>

          <!-- Text -->
          <text font-family="arial" font-size="14.667px" text-align="center" text-anchor="middle">
            <tspan
              x="${c}"
              y="${t.valueYPosition}"
              font-size="${t.textSize/ue}px"
            >
              ${this.value}
            </tspan>
            <tspan
              x="${c}"
              y="${t.unitsYPosition}"
              font-size="${.7*t.textSize/ue}px"
            >
              ${this.units}
            </tspan>
          </text>
        </g>
      </g>
    </svg>`}};Bn([ce({type:Number})],zn.prototype,"angle",void 0),Bn([ce()],zn.prototype,"arrow",void 0),Bn([ce()],zn.prototype,"value",void 0),Bn([ce()],zn.prototype,"units",void 0),Bn([ce()],zn.prototype,"size",void 0),zn=Bn([oe("wokwi-stepper-motor")],zn);var Yn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};let $n=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"VCC",y:55,x:7,number:1,signals:[ve()]},{name:"DT",y:36.3,x:7,number:2,signals:[]},{name:"SCK",y:46.2,x:7,number:3,signals:[]},{name:"GND",y:26.5,x:7,number:4,signals:[ye()]}]}get dimension(){switch(this.type){case"50kg":return{width:580,height:430};case"5kg":return{width:507,height:269};case"gauge":return{width:509,height:200};default:return{width:580,height:430}}}renderSensor(){switch(this.type){case"gauge":return B`
       <!-- Gauge Pressure Sensor -->
       <g
         transform="translate(412.5 99.5) scale(-1 1) translate(-94.5 -56.5)">
         <path d="m53.5 56.5l135-56" stroke="#F01919" stroke-linecap="square" stroke-width="3" />
         <path d="m54.5 56.5l133-33" stroke="#000" stroke-linecap="square" stroke-width="3" />
         <path d="m52.5 56.5l133-7" stroke="#C8C8C8" stroke-linecap="square" stroke-width="3" />
         <path d="m51.5 56.5l136 18" stroke="#24C22B" stroke-linecap="square" stroke-width="3" />
         <path
           d="m50.5 113c-14.636 0-26.5-25.296-26.5-56.5s11.864-56.5 26.5-56.5 26.5 25.296 26.5 56.5-11.864 56.5-26.5 56.5zm-1-88c3.5899 0 6.5-3.134 6.5-7s-2.9101-7-6.5-7-6.5 3.134-6.5 7 2.9101 7 6.5 7zm0 77c3.5899 0 6.5-3.134 6.5-7s-2.9101-7-6.5-7-6.5 3.134-6.5 7 2.9101 7 6.5 7z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <path d="m0 54.1l33-5.1v17l-33-5.1v-6.8z" fill="#D8D8D8" stroke="#979797" />
         <circle cx="50" cy="57" r="20" fill="#D8D8D8" stroke="#979797" />
         <text
           transform="translate(50 56.5) scale(-1 1) translate(-50 -56.5)"
           fill="#FBFBFB"
           font-family="Arial-BoldItalicMT, Arial"
           font-size="16"
           font-style="italic"
           font-weight="bold"
         >
           <tspan x="38.4414062" y="62">GP</tspan>
         </text>
       </g>`;case"5kg":return B`
       <!-- 5kg Load Sensor -->
       <g
         transform="translate(413 133.5) scale(-1 1) translate(-94 -133.5)">
         <path
           d="m0.5 0.5v266h62v-266h-62zm31 123c-12.698 0-23-9.8445-23-22 0-12.155 10.302-22 23-22s23 9.8445 23 22c0 12.155-10.302 22-23 22zm0 57c-12.698 0-23-9.8445-23-22s10.302-22 23-22 23 9.8445 23 22-10.302 22-23 22z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <path d="m53.5 51.5l133-10" stroke="#F01919" stroke-linecap="square" stroke-width="3" />
         <path d="m54.5 57.5l131 8" stroke="#000" stroke-linecap="square" stroke-width="3" />
         <path d="m55.5 64.5l130 27" stroke="#C8C8C8" stroke-linecap="square" stroke-width="3" />
         <path d="m56.5 71.5l131 43" stroke="#24C22B" stroke-linecap="square" stroke-width="3" />
         <rect x="3.5" y="43.5" width="57" height="33" rx="11" fill="url(#e)" stroke="#979797" />
         <text
           transform="translate(28.5 245) scale(-1 1) translate(-28.5 -245)"
           fill="#FBFBFB"
           font-family="Arial-ItalicMT, Arial"
           font-size="14"
           font-style="italic"
         >
           <tspan x="17.2138672" y="250">5kg</tspan>
         </text>
       </g>`;case"50kg":default:return B`
       <!-- 50kg Load Sensor -->
       <g
         transform="translate(448 212) scale(-1 1) translate(-131 -212)"
       >
         <path
           d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <g transform="translate(18 17)" fill="#D8D8D8">
           <path
             d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
           />
           <rect x="61" y="24" width="13" height="24" />
           <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
         </g>
         <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
         <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
         <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
         <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <g transform="translate(0 106)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <path
           d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <g transform="translate(18 17)" fill="#D8D8D8">
           <path
             d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
           />
           <rect x="61" y="24" width="13" height="24" />
           <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
         </g>
         <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
         <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
         <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
         <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <g transform="translate(0 212)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <g transform="translate(0 318)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <path d="m128.5 53.5h82" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m201.5 68.5h60" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m211.5 44.5h50" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m213.5 94.5h48" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m225.5 118.5h36" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 371.25h94" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m225.5 118.5v253" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 265.25h83" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m213.5 96.5v169" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m201.5 71.5v88" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m211.5 44.5v9" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 159.25h71" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m136.5 164.5v212" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m147.25 58v212" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <path d="m162.25 48v317.5" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m180.25 154.5v104" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m129 376.23h6" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m136.5 164.15h-8" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m146.5 58.15h-18" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <path d="m161.5 48.208h-34" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m180.5 154.1h-52" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m180.5 260.2h-51" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m161.5 366.2h-34" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m146.5 270.25h-18" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <text
           transform="translate(94.5 265) scale(-1 1) translate(-94.5 -265)"
           fill="#FBFBFB"
           font-family="Arial-BoldItalicMT, Arial"
           font-size="14"
           font-style="italic"
           font-weight="bold"
         >
           <tspan x="87.1137695" y="270">A-</tspan>
           <tspan x="87.5" y="164">E-</tspan>
           <tspan x="85.7431641" y="57">E+</tspan>
           <tspan x="86.2431641" y="377">A+</tspan>
         </text>
       </g>`}}render(){const{width:e,height:t}=this.dimension;return U`
      <style>
        text {
          user-select: none;
        }
      </style>
      <svg
        width="${+e/10}mm"
        height="${+t/10}mm"
        viewBox="0 0 ${e} ${t}"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            id="f"
            d="m317 74c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 23c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-120c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm-298 98c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm9.5 115c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm0-156c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm-28.5-34h340v200h-340v-200z"
          />
          <path id="d" d="m0 0h340v200h-340v-200z" />
          <mask id="g" x="0" y="0" width="340" height="200" fill="white">
            <use xlink:href="#d" />
          </mask>
          <linearGradient id="a" y1="50%" y2="50%">
            <stop stop-color="#767676" offset="0" />
            <stop stop-color="#FFFEDF" offset="1" />
          </linearGradient>
          <radialGradient id="b" r="100%">
            <stop stop-color="#8A8A8A" offset="0" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id="e"
            r="100%"
            gradientTransform="translate(.5 .5) scale(.58621 1) rotate(90) translate(-.5 -.5)"
          >
            <stop stop-color="#fff" offset="0" />
            <stop stop-color="#E7E7E7" offset="1" />
          </radialGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="c" fill="white">
            <use xlink:href="#f" />
          </mask>
          <g
            fill="#1C8944"
            mask="url(#c)"
            stroke="#ADA216"
            stroke-dasharray="1,1"
            stroke-opacity=".53643"
            stroke-width="4"
          >
            <use mask="url(#g)" xlink:href="#d" />
          </g>
          <g fill="#D2CDC3" mask="url(#c)">
            <g transform="translate(10 34)">
              <rect y="25" width="17" height="18" />
              <rect x="298" width="17" height="18" />
            </g>
          </g>
          <g mask="url(#c)">
            <g transform="translate(6 27)">
              <rect x="298" y="1" width="26" height="147" stroke="#fff" stroke-width="2" />
              <rect x="1" y="25" width="25" height="102" stroke="#fff" stroke-width="2" />
              <text
                font-family="Arial-BoldItalicMT, Arial"
                font-size="14"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="28.4448242" y="45" fill="#FBFBFB">GND</tspan>
                <tspan x="28.1689453" y="69" fill="#FBFBFB">DT</tspan>
                <tspan x="27.2207031" y="94" fill="#FBFBFB">SCK</tspan>
                <tspan x="28.2207031" y="119" fill="#FBFBFB">VCC</tspan>
                <tspan x="274" y="45" fill="#FBFBFB">E-</tspan>
                <tspan x="274.492188" y="18" fill="#FBFBFB">E+</tspan>
                <tspan x="274.058594" y="117" fill="#FBFBFB">B-</tspan>
                <tspan x="274.050781" y="140" fill="#FBFBFB">B+</tspan>
                <tspan x="274.058594" y="69" fill="#FBFBFB">A-</tspan>
                <tspan x="274.050781" y="94" fill="#FBFBFB">A+</tspan>
                <tspan x="98.2929688" y="160" fill="#FBFBFB">Load Cell Amp</tspan>
                <tspan x="126.132812" y="140" fill="#FBFBFB">HX711</tspan>
              </text>
            </g>
          </g>
          <g mask="url(#c)">
            <g transform="translate(122 28)">
              <rect
                x="14.5"
                y=".5"
                width="36"
                height="98"
                fill="#434341"
                fill-rule="evenodd"
                stroke="#3B3939"
              />
              <rect x="51" y="2" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="15" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="27" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="40" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="52" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="65" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="77" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="90" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect
                transform="translate(7 5) scale(-1 1) translate(-7 -5)"
                y="2"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 18) scale(-1 1) translate(-7 -18)"
                y="15"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 31) scale(-1 1) translate(-7 -31)"
                y="28"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 43) scale(-1 1) translate(-7 -43)"
                y="40"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 56) scale(-1 1) translate(-7 -56)"
                y="53"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 68) scale(-1 1) translate(-7 -68)"
                y="65"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 80) scale(-1 1) translate(-7 -80)"
                y="77"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 93) scale(-1 1) translate(-7 -93)"
                y="90"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <circle
                cx="20"
                cy="5"
                r="3"
                fill="#211919"
                fill-opacity=".54978"
                fill-rule="evenodd"
                stroke="#000"
              />
              <text
                transform="translate(27 52) rotate(-90) translate(-27 -52)"
                fill="none"
                font-family="Arial-BoldItalicMT, Arial"
                font-size="12"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="9.09960938" y="56" fill="#BBBBBB">HX711</tspan>
              </text>
            </g>
          </g>
          ${this.renderSensor()}
        </g>
      </svg>
    `}};Yn([ce()],$n.prototype,"type",void 0),$n=Yn([oe("wokwi-hx711")],$n);var Hn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const Vn=5.1,qn=32.7,jn=5.5,Wn=25,Kn=45,Qn=74;let Xn=class extends ae{constructor(){super(...arguments),this.pinInfo=[{name:"NO2",x:jn,y:Vn,signals:[],number:8},{name:"NC2",x:Wn,y:Vn,signals:[],number:6},{name:"P2",x:Kn,y:Vn,signals:[],number:4},{name:"COIL2",x:Qn,y:Vn,signals:[{type:"power",signal:"GND"}],number:1},{name:"NO1",x:jn,y:qn,signals:[],number:9},{name:"NC1",x:Wn,y:qn,signals:[],number:11},{name:"P1",x:Kn,y:qn,signals:[],number:13},{name:"COIL1",x:Qn,y:qn,signals:[],number:16}]}render(){return U`
      <svg
        width="21mm"
        height="10mm"
        version="1.1"
        viewBox="0 0 21 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke-width=".4" fill="#f7b93c" stroke="#dda137">
          <rect x=".20" y=".20" width="20.6" height="9.61" ry=".58" />
          <rect x="20.2" y="4.5" width=".40" height="1" fill="#dda137" />
        </g>
        <g fill="none" stroke="#dda137" stroke-width=".47">
          <ellipse cx="1.6" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="6.68" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="11.76" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="19.38" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="1.6" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="6.68" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="11.76" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="19.38" cy="8.65" rx=".76" ry=".76" />
        </g>
        <text fill="#4a3510" font-family="sans-serif" font-size="2.8222px">
          <tspan x="1.07" y="6.03">KS2E-M-DC5</tspan>
        </text>
      </svg>
    `}};Xn=Hn([oe("wokwi-ks2e-m-dc5")],Xn);var Zn=function(e,t,n,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s};const Jn=60,ei=77,ti=9,ni=4.7,ii=9,ri=5;let ai=class extends ae{constructor(){super(...arguments),this.outerHandLength=30,this.outerHandAngle=0,this.outerHandColor="gold",this.outerHandShape="plain",this.innerHandLength=30,this.innerHandAngle=0,this.innerHandColor="silver",this.innerHandShape="plain",this.handMap={outerPlainHand:e=>({xOff:ti,yOff:ti,path:`m 0 0 c 0 5 4 9 9 9 c 3.3 0 6.1 -1.7 7.7 -4.3 h 24.9 h ${e} c 1.4 -1.5 1.9 -3.6 1.8 -4.7 c 0 -1.4 -0.4 -3.2 -1.9 -4.6 h -${e} h -24.8 c -1.6 -2.7 -4.5 -4.4 -7.8 -4.4 c -5 0 -9 4.1 -9 9 z m 3.5 0 c 0 -3 2.4 -5.4 5.5 -5.4 s 5.5 2.4 5.5 5.4 s -2.5 5.4 -5.5 5.4 s -5.5 -2.4 -5.5 -5.4 z`}),outerArrowHand:e=>({xOff:ti,yOff:ti,path:`m 0 0 c 0 5 4 9 9 9 c 3.89 0 7.16 -2.42 8.43 -5.85 c 0.3 -0.58 0.78 -1.16 1.27 -1.45 c 0.6 -0.3 1.29 -0.4 1.99 -0.2 c 0 0 0 0 0 0 h 0.01 l 0.9 3.3 h 20 l ${e} -4.7 l -${e} -4.9 h -20.138 l -0.9 3.3 c -0.7 0.2 -1.4 0.1 -2 -0.2 c -0.6 -0.3 -1.1 -0.8 -1.3 -1.5 c 0 0 -0.01 0.02 -0.02 0.02 c -1.38 -3.72 -4.38 -5.72 -8.38 -5.72 c -5 0 -9 4 -9 9 z m 3.5 0 c 0 -3.1 2.5 -5.5 5.5 -5.5 s 5.5 2.5 5.5 5.5 s -2.5 5.5 -5.5 5.5 s -5.5 -2.5 -5.5 -5.5 z`}),outerOrnateHand:()=>({xOff:ii,yOff:ii,path:"m 0 0 c 0 5 4 9 9 9 c 4.951 0.028 9.683 -3.101 9.6 -7.6 c 0 0 1.1 1.4 3.3 1.2 c -0.2 1 0.3 1.2 0.3 1.2 c 0.6 -1.5 6.4 -6.3 8.6 -0.3 c -3.1 -0.3 -1.8 3.8 0.5 1.6 c 0 0 0.9 2.3 4 2.1 c -0.8 1.7 3.1 2.1 1.7 -0.4 c 0 0 2.7 -1 2.3 -3.9 c 0 0 0.8 0.6 2.6 0.6 c 2.7 0.2 6.2 -3.7 16 -2.9 l 0.6 -0.7 l -0.6 -0.8 c -8.9 0.7 -13 -2.3 -16 -3 c -1.9 0 -2.5 0.8 -2.5 0.8 c 0 0 0.3 -2.6 -2.5 -4.1 c 0.8 -0.8 0 -1.6 -0.8 -1.6 c -0.5 0 -1 0.4 -0.8 1.5 c 0 0 -2.8 -0.8 -4 2.1 c 0 0 -1.4 -2 -2.5 0.3 c 0.2 0.5 0 0.9 0.8 1.2 c 0.2 0.3 1.2 -0.2 1.2 -0.2 c 0 0 -0.6 3.2 -3.9 3 c 0 0 -2.7 0.1 -4.8 -3.3 c -0.3 0.5 -0.3 0.7 -0.3 0.7 v 0.7 c 0 0 -2.1 -0.4 -3.4 1.2 c -0.06 -4.37 -4.449 -7.347 -9.41 -7.385 c -5 0 -9 4 -9 9 z m 44 -2.2 c 2.1 1.2 4.1 1.5 4.1 1.5 c -0.4 0.7 -0.5 0.7 0 1.6 c 0 0 -2.6 0.2 -4.1 1.4 c 0 0 0.2 -1.7 -0.6 -2.2 c 1 -0.6 0.6 -2.2 0.6 -2.2 z m -2.3 -0.5 c 1.3 0.1 1.6 1.1 1.6 1.1 c 0.1 0.4 -1.2 0.8 -1.1 1.1 l 0.3 0.5 l -0.2 0.6 c 0 0.3 0.6 0.4 1.2 1 c -0.5 0.6 -0.5 1.3 -2.1 1.3 c -1.1 0 -3.1 -2.5 -4.2 -2.9 c 1.1 -0.1 2.5 -2.8 4.5 -2.8 z m -10.8 0.9 c 0.5 1 2 1.9 2 1.9 c -1.4 0.7 -2 1.7 -2 1.7 c -1 -1.2 -2.2 -1.9 -2.2 -1.9 c 1.3 -0.6 2.2 -1.8 2.2 -1.8 z m -10.1 0.4 c 1.4 0 1.5 1.1 3.656 1.552 c -2 0.3 -2.4 1.5 -3.6 1.4 c -1.5 -0.1 -1.6 -1.3 -1.6 -1.3 c 0 0 -0.2 -1.5 1.6 -1.6 c 0 0 0 0 0.1 0 z m 14.1 2.1 c 3.1 0.1 3.1 3.2 3.1 3.2 c -0.3 1.7 -2.5 2.6 -2.5 2.6 c -2.5 0.2 -3.3 -1.5 -3.3 -1.5 c 0 0 1.4 0.6 1.8 -1 c -0.4 -2 -2.2 -0.8 -2.2 -0.8 c 0.3 -2.3 3 -2.5 3 -2.5 z"}),innerPlainHand:e=>({xOff:ni,yOff:ni,path:`m 0 0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.3 0 1.3 0 2.4 -0.4 h 2 h 27.7 h ${e} c 1.2 -1.2 1.8 -3.3 1.8 -4.3 c 0 -1 -0.7 -3.3 -1.9 -4.2 h -${e} h -27.7 h -1.9 c -0.2 0 -1.3 -0.5 -2.6 -0.5 c -2.6 0 -4.7 2.1 -4.7 4.7 z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 z`}),innerArrowHand:e=>({xOff:ni,yOff:ni,path:`m 0 0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.37 0 2.59 -0.59 3.44 -1.52 c 0.7 -0.7 1.5 -1.2 2.5 -1.5 s 2 -0.3 2.9 -0.1 l 0.46 3.37 l ${e}.44 -4.96 l -${e}.34 -5.03 l -0.75 3.53 c -0.81 0.1 -1.81 0.1 -2.71 -0.2 c -1 -0.3 -1.8 -0.8 -2.5 -1.5 c -0.86 -0.93 -2.08 -1.52 -3.44 -1.52 c -2.6 0 -4.7 2.1 -4.7 4.7 z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 z`}),innerOrnateHand:()=>({xOff:ri,yOff:ri,path:"m 0 0 c 0 5 5 5 5 5 c 5 0 4.6565 -5.696 5 -2.6 l 0.028 1.101 l 1.4525 0.016 l 0.55 -1.5 c 0 0 1.05 1.55 3.3 1.75 c 2.35 0.05 3.2 -0.85 3.2 -0.85 l 0.05 0.75 l 0.95 -0.05 l -0.05 1 l 4 -2.4 c 0.4 1.35 1.75 1.5 1.75 1.5 c 0.65 0.1 1.85 -0.95 1.85 -0.95 l 0.7 1.45 l 1 -1.75 l 1 1 l 0.35 -1.45 c 2.4 1.45 4.15 1.2 4.15 1.2 c 2.95 -0.1 3.9 -1.05 6.6 -1.95 c 4.85 -0.7 10.3 -0.1 10.3 -0.1 l -0.25 1.65 l 3.85 -1.45 l 15.2 -0.3 l 0.45 -0.4 l -0.55 -0.4 l -15.4 -0.25 l -3.6 -1.55 l 0.4 1.8 c 0 0 -4.75 -0.85 -10.1 -0.25 l -0.25 -1.05 l -1.05 0.85 c 0 0 0.45 -2.2 0.25 -3.8 c -1.15 2.55 -1.95 6.25 -6.45 6.3 c -4.4 -0.35 -5.7 -4.05 -5.7 -4.05 l -0.45 1 l -0.5 -0.5 l -0.55 0.75 c 0 0 -0.85 -0.6 -2.35 -0.75 c -1.85 0.15 -2.35 0.45 -2.35 0.45 l -0.25 -1.45 l -1.2 1.25 l -0.5 -0.8 l -1.05 1.05 l -0.6 -0.85 c -0.6 -0.45 -1.15 -0.55 -1.75 -0.3 c 0 0 -0.6 0.25 -0.8 0.75 c 0 0 -0.45 -0.7 -1.2 -0.85 c -0.75 -0.05 -2.3 1.3 -2.3 1.3 l -0.6175 -2.289 l -1.469 -0.032 l -0.0165 1.2265 c -0.3785 2.4515 0.0485 -3.212 -5.036 -3.228 c -4 0 -5.004 2.518 -5 5 z m 13.25 -1.2 c 0 0 0.15 1.3 1.05 1.3 c 0 0 0.5 -0.25 0.7 -0.8 c 0 0 0.35 0.85 0.75 0.9 c 0.9 -0.1 0.85 -1.25 1.15 -1.3 c 0 0 0.9 0.35 0.9 2.15 c 0 0 -0.6 1.7 -3 1.65 c 0 0 -2.05 -0.15 -2.55 -1.95 c 0 0 -0.15 -1.5 0.95 -2 z m 10.5 0.55 c 1.05 0 1.4 0.25 1.4 0.25 c 0.75 0.45 1 1.2 1 1.2 c 0.05 1.6 -0.85 1.55 -1.65 1.6 c 0 0 -0.95 -0.35 -1.3 -1.35 l -3.1 1.75 c 0 0 0.45 -2.5 2.8 -3.45 c 0.35 -0.05 0.6 -0.05 0.85 -0.05 z"})}}get pinInfo(){const e=e=>({x:45,y:(28.9+2.54*e)*ue});return[Object.assign(Object.assign({name:"A1-"},e(0)),{number:1,signals:[]}),Object.assign(Object.assign({name:"A1+"},e(1)),{number:2,signals:[]}),Object.assign(Object.assign({name:"B1+"},e(2)),{number:3,signals:[]}),Object.assign(Object.assign({name:"B1-"},e(3)),{number:4,signals:[]}),Object.assign(Object.assign({name:"A2-"},e(4)),{number:5,signals:[]}),Object.assign(Object.assign({name:"A2+"},e(5)),{number:6,signals:[]}),Object.assign(Object.assign({name:"B2+"},e(6)),{number:7,signals:[]}),Object.assign(Object.assign({name:"B2-"},e(7)),{number:8,signals:[]})]}cap(e){return e.charAt(0).toUpperCase()+e.slice(1)}constrain(e,t,n){return Math.max(t,Math.min(e,n))}handPath(e,t,n){let i=this.handMap[e+this.cap(t)+"Hand"];return void 0===i&&(i=this.handMap[e+"PlainHand"]),i(n)}render(){const e=this.constrain(this.innerHandLength,20,70),t=this.constrain(this.outerHandLength,20,70),n=this.handPath("inner",this.innerHandShape,e),i=this.handPath("outer",this.outerHandShape,t),r=Jn,a=ei;return U`
    <svg xmlns="http://www.w3.org/2000/svg" width="56mm" height="67.5mm" viewBox="0 0 212 255">
    <defs>
        <style>
          .cls-1{fill:#939598;}
          .cls-2{fill:#d2d2d2;}
          .cls-3{fill:#808285;}
          .cls-4{fill:#ed1f24;}
          .cls-5{fill:#70bf44;}
          .cls-6{fill:#414042;}
          .cls-h{fill:"blue";stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.1px;transform-box:fill-box;}
        </style>
        <linearGradient
            id="hole-gradient"
            >
            <stop stop-color="#4f4f4f" offset="-25%" />
            <stop stop-color="grey" offset="75%" />
        </linearGradient>
    </defs>
      <g transform="translate(45 30)">

      <!-- pins - translate to top of base, between holes -->
        <g transform="scale(${ue}) translate(2 20.5) ">
          <path id="pin-1" class="cls-3" d="m 0 0 h -2 c -0.5 0.5 -0.5 0.5 0 1 h 2 z" />
          <use href="#pin-1" y="2.54" />
          <use href="#pin-1" y="5.08" />
          <use href="#pin-1" y="7.62" />
          <use href="#pin-1" y="10.16" />
          <use href="#pin-1" y="12.70" />
          <use href="#pin-1" y="15.24" />
          <use href="#pin-1" y="17.78" />
        </g>

        <!-- scaled body -->
        <g>

          
          <!-- base -->
          <path class="cls-6" d="m 42.81 0 c -21.15 6.64 -37 25.23 -39.61 47.87 c -1.87 1.6 -3.08 3.95 -3.08 6.61 c 0 2.67 1.21 5.01 3.08 6.61 c 0.33 2.84 0.89 5.6 1.63 8.31 l 0 88.29 c -0.69 2.57 -1.23 5.2 -1.56 7.89 c -1.97 1.6 -3.27 4.01 -3.27 6.76 c 0 2.75 1.25 5.09 3.19 6.69 c 2.49 22.4 17.95 40.81 38.68 47.73 l 36.12 0 c 20.57 -6.87 35.96 -25.09 38.63 -47.27 c 2.08 -1.6 3.44 -4.08 3.44 -6.89 c 0 -2.81 -1.36 -5.31 -3.44 -6.89 c -0.35 -2.91 -0.93 -5.73 -1.71 -8.49 l 0 -87.35 c 0.77 -2.76 1.35 -5.59 1.71 -8.49 c 2.08 -1.6 3.44 -4.08 3.44 -6.89 c 0 -2.81 -1.36 -5.31 -3.44 -6.89 c -2.72 -22.52 -18.52 -40.96 -39.57 -47.59 l -34.23 0 z" />


          <!-- ribs -->
          <g>
              <path class="cls-3" d="M 62.89 0.01 l -5.96 0 l 0 29.99 c -1.17 0.25 -2.26 0.67 -3.32 1.17 l -13.17 -16.82 c -1.008 -1.717 -2.824 -3.461 -4.943 -2.697 c -1.398 0.505 -1.946 1.096 -1.423 4.207 l 0.006 0.01 l 14.77 18.86 c -1.36 1.51 -2.4 3.27 -3.06 5.22 l -39.71 -4.28 c -0.67 1.89 -1.24 3.82 -1.69 5.8 l 40.6 4.37 c 0.06 1.19 0.28 2.33 0.61 3.43 l -40.79 22.6 l 0 6.81 l 18.6 -10.32 l 0 42.07 l -18.6 0 l 0 5.96 l 18.6 0 l 0 41.9 l -18.58 -10.36 l 0 6.82 l 40.81 22.72 c -0.36 1.13 -0.59 2.32 -0.67 3.54 l -40.64 4.56 c 0.46 1.98 1.03 3.91 1.7 5.8 l 39.7 -4.45 c 0.64 1.91 1.64 3.61 2.94 5.11 l -14.06 18.38 l 0.04 0.04 c -0.34 0.51 -0.58 1.1 -0.58 1.75 c 0 1.77 1.44 3.2 3.2 3.2 c 1.6 0 2.88 -1.2 3.1 -2.75 l 13 -17 c 1.12 0.56 2.3 1.03 3.56 1.3 l 0 29.53 l 5.96 0 l 0 -29.44 c 1.35 -0.24 2.63 -0.68 3.83 -1.27 l 13.25 16.92 c 0.24 1.52 1.51 2.71 3.11 2.71 c 1.77 0 3.2 -1.44 3.2 -3.2 c 0 -1.05 -0.53 -1.95 -1.32 -2.52 l 0.13 -0.11 l -13.6 -17.37 c 1.31 -1.47 2.34 -3.16 3 -5.04 l 39.34 4.24 c 0.66 -1.89 1.24 -3.83 1.69 -5.8 l -40.17 -4.33 c -0.07 -1.4 -0.34 -2.74 -0.76 -4.02 l 40.33 -22.37 l 0 -6.81 l -18.8 10.42 l 0 -90.26 l 18.8 10.46 l 0 -6.81 l -40.27 -22.41 c 0.34 -1.08 0.56 -2.22 0.66 -3.39 l 40.22 -4.51 c -0.45 -1.97 -1.04 -3.9 -1.69 -5.8 l -39.25 4.4 c -0.7 -2.12 -1.82 -4.05 -3.31 -5.65 l 13 -17.01 c 1.16 -0.48 1.99 -1.63 1.99 -2.96 c 0 -1.78 -1.44 -3.2 -3.2 -3.2 c -1.08 0 -1.99 0.57 -2.58 1.38 l -0.02 -0.02 l -14.02 18.33 c -1.12 -0.51 -2.32 -0.89 -3.56 -1.12 l 0 -29.91 z m 27.27 116.38 l 0 45.41 l -18.53 10.28 c -2.23 -2.57 -5.27 -4.4 -8.75 -5.03 l 0 -38.57 c 6.17 -1.12 11.05 -5.93 12.24 -12.09 z m -45 0 c 1.16 6 5.81 10.74 11.77 12.01 l 0 38.72 c -3.37 0.72 -6.28 2.59 -8.42 5.13 l -18.66 -10.38 l 0 -45.5 l 15.31 0 z m -15.31 -5.96 l 0 -45.63 l 18.51 -10.27 c 2.15 2.64 5.12 4.58 8.57 5.31 l 0 2.56 c -7.02 1.37 -12.33 7.55 -12.33 14.97 c 0 7.43 5.31 13.62 12.33 14.98 l 0 6.2 c -5.9 1.26 -10.56 5.93 -11.76 11.88 z m 45.26 0 c -1.24 -6.1 -6.1 -10.84 -12.23 -11.95 l 0 -6.13 c 6.99 -1.4 12.27 -7.58 12.27 -14.98 c 0 -7.4 -5.27 -13.57 -12.27 -14.97 l 0 -2.49 c 3.57 -0.66 6.67 -2.56 8.91 -5.23 l 18.36 10.23 l 0 45.52 l -15.06 0 z" />
          </g>

          <!-- holes -->
          <g>
              <g>
                  <circle cx="4" cy="54.25" r="6.5" class="cls-1" />
                  <circle cx="4" cy="54.25" r="3.25" fill="url(#hole-gradient)" />
              </g>
              <g>
                  <circle cx="4" cy="172.25" r="6.5" class="cls-1" />
                  <circle cx="4" cy="172.25" r="3.25" fill="url(#hole-gradient)"/>
              </g>
              <g>
                  <circle cx="115" cy="54.25" r="6.5" class="cls-1" />
                  <circle cx="115" cy="54.25" r="3.25" fill="url(#hole-gradient)" />
              </g>
              <g>
                  <circle cx="115" cy="172.25" r="6.5" class="cls-1" />
                  <circle cx="115" cy="172.25" r="3.25" fill="url(#hole-gradient)"/>
              </g>
          </g>

          <!-- outer ('hours') hand -->
          <g>
              <path class="cls-h" transform="
                translate(${r} ${a+i.yOff})   
                rotate(${270+this.outerHandAngle}) 
                translate(-${i.xOff}, -${i.yOff})" 
                fill="${this.outerHandColor}" d="${i.path}" />
          </g>

          <!-- inner ('minutes') hand -->
          <g>
              <path class="cls-h" 
                transform="
                  translate(${r} ${a+n.yOff})
                  rotate(${270+this.innerHandAngle}) 
                  translate(-${n.xOff}, -${n.yOff})" 
                fill="${this.innerHandColor}" d="${n.path}" />
          </g>
        </g>
    </svg>`}};Zn([ce()],ai.prototype,"outerHandLength",void 0),Zn([ce({type:Number})],ai.prototype,"outerHandAngle",void 0),Zn([ce()],ai.prototype,"outerHandColor",void 0),Zn([ce()],ai.prototype,"outerHandShape",void 0),Zn([ce()],ai.prototype,"innerHandLength",void 0),Zn([ce({type:Number})],ai.prototype,"innerHandAngle",void 0),Zn([ce()],ai.prototype,"innerHandColor",void 0),Zn([ce()],ai.prototype,"innerHandShape",void 0),ai=Zn([oe("wokwi-biaxial-stepper")],ai)},4677:function(){"use strict";var e,t;(function(e){e[e["AVCC"]=0]="AVCC",e[e["AREF"]=1]="AREF",e[e["Internal1V1"]=2]="Internal1V1",e[e["Internal2V56"]=3]="Internal2V56",e[e["Reserved"]=4]="Reserved"})(e||(e={})),function(e){e[e["SingleEnded"]=0]="SingleEnded",e[e["Differential"]=1]="Differential",e[e["Constant"]=2]="Constant",e[e["Temperature"]=3]="Temperature"}(t||(t={}));const n={0:{type:t.SingleEnded,channel:0},1:{type:t.SingleEnded,channel:1},2:{type:t.SingleEnded,channel:2},3:{type:t.SingleEnded,channel:3},4:{type:t.SingleEnded,channel:4},5:{type:t.SingleEnded,channel:5},6:{type:t.SingleEnded,channel:6},7:{type:t.SingleEnded,channel:7},8:{type:t.Temperature},14:{type:t.Constant,voltage:1.1},15:{type:t.Constant,voltage:0}};t.Constant,e.AREF,e.AVCC,e.Reserved,e.Internal1V1;const i={EICR:105,EIMSK:61,EIFR:60,index:0,iscOffset:0,interrupt:2},r={EICR:105,EIMSK:61,EIFR:60,index:1,iscOffset:2,interrupt:4},a={PCIE:0,PCICR:104,PCIFR:59,PCMSK:107,pinChangeInterrupt:6,mask:255,offset:0},s={PCIE:2,PCICR:104,PCIFR:59,PCMSK:109,pinChangeInterrupt:10,mask:255,offset:0},o={PIN:35,DDR:36,PORT:37,pinChange:a,externalInterrupts:[]},l={PIN:41,DDR:42,PORT:43,pinChange:s,externalInterrupts:[null,null,i,r]};var c,d,_;(function(e){e[e["Low"]=0]="Low",e[e["High"]=1]="High",e[e["Input"]=2]="Input",e[e["InputPullUp"]=3]="InputPullUp"})(c||(c={})),function(e){e[e["None"]=0]="None",e[e["Enable"]=1]="Enable",e[e["Set"]=2]="Set",e[e["Clear"]=3]="Clear",e[e["Toggle"]=4]="Toggle"}(d||(d={})),function(e){e[e["LowLevel"]=0]="LowLevel",e[e["Change"]=1]="Change",e[e["FallingEdge"]=2]="FallingEdge",e[e["RisingEdge"]=3]="RisingEdge"}(_||(_={}));const p={0:0,1:1,2:8,3:64,4:256,5:1024,6:0,7:0};var u;(function(e){e[e["FallingEdge"]=6]="FallingEdge",e[e["RisingEdge"]=7]="RisingEdge"})(u||(u={}));const m={TOV:1,OCFA:2,OCFB:4,OCFC:0,TOIE:1,OCIEA:2,OCIEB:4,OCIEC:0};Object.assign({bits:8,captureInterrupt:0,compAInterrupt:28,compBInterrupt:30,compCInterrupt:0,ovfInterrupt:32,TIFR:53,OCRA:71,OCRB:72,OCRC:0,ICR:0,TCNT:70,TCCRA:68,TCCRB:69,TCCRC:0,TIMSK:110,dividers:p,compPortA:l.PORT,compPinA:6,compPortB:l.PORT,compPinB:5,compPortC:0,compPinC:0,externalClockPort:l.PORT,externalClockPin:4},m),Object.assign({bits:16,captureInterrupt:20,compAInterrupt:22,compBInterrupt:24,compCInterrupt:0,ovfInterrupt:26,TIFR:54,OCRA:136,OCRB:138,OCRC:0,ICR:134,TCNT:132,TCCRA:128,TCCRB:129,TCCRC:130,TIMSK:111,dividers:p,compPortA:o.PORT,compPinA:1,compPortB:o.PORT,compPinB:2,compPortC:0,compPinC:0,externalClockPort:l.PORT,externalClockPin:5},m),Object.assign({bits:8,captureInterrupt:0,compAInterrupt:14,compBInterrupt:16,compCInterrupt:0,ovfInterrupt:18,TIFR:55,OCRA:179,OCRB:180,OCRC:0,ICR:0,TCNT:178,TCCRA:176,TCCRB:177,TCCRC:0,TIMSK:112,dividers:{0:0,1:1,2:8,3:32,4:64,5:128,6:256,7:1024},compPortA:o.PORT,compPinA:3,compPortB:l.PORT,compPinB:3,compPortC:0,compPinC:0,externalClockPort:0,externalClockPin:0},m);var g,h,f;(function(e){e[e["Normal"]=0]="Normal",e[e["PWMPhaseCorrect"]=1]="PWMPhaseCorrect",e[e["CTC"]=2]="CTC",e[e["FastPWM"]=3]="FastPWM",e[e["PWMPhaseFrequencyCorrect"]=4]="PWMPhaseFrequencyCorrect",e[e["Reserved"]=5]="Reserved"})(g||(g={})),function(e){e[e["Max"]=0]="Max",e[e["Top"]=1]="Top",e[e["Bottom"]=2]="Bottom"}(h||(h={})),function(e){e[e["Immediate"]=0]="Immediate",e[e["Top"]=1]="Top",e[e["Bottom"]=2]="Bottom"}(f||(f={}));const E=1,S=2,b=1,{Normal:y,PWMPhaseCorrect:v,CTC:T,FastPWM:C,Reserved:R,PWMPhaseFrequencyCorrect:O}=g;f.Immediate,h.Max,f.Top,h.Bottom,f.Immediate,h.Max,f.Bottom,h.Max,f.Immediate,h.Max,f.Top,h.Bottom,f.Immediate,h.Max,f.Bottom,h.Top,f.Immediate,h.Max,f.Top,h.Bottom,f.Top,h.Bottom,f.Top,h.Bottom,f.Immediate,h.Max,f.Bottom,h.Top,f.Bottom,h.Top,f.Bottom,h.Top,f.Bottom,h.Bottom,f.Bottom,h.Bottom,f.Top,h.Bottom,f.Top,h.Bottom,f.Immediate,h.Max,f.Immediate,h.Max,f.Bottom,h.Top,f.Bottom,h.Top},4620:function(e,t){const n=0,i=1,r=2,a=3,s=4,o=5,l=255},3744:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},6870:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var i=n(6252),r=n(3577),a=n(9963);const s={key:0,class:"header"},o=["onClick"],l=["autofocus"],c=["autofocus","value"];function d(e,t,n,d,_,p){const u=(0,i.up)("Dropdown"),m=(0,i.up)("CopyCode"),g=(0,i.Q2)("highlight");return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(["code_editor hljs",{hide_header:p.withoutHeader,scroll:p.canScroll,read_only:n.read_only,wrap_code:n.wrap_code,atom_one_dark:"dark"==n.theme,atom_one_light:"light"==n.theme}]),style:(0,r.j5)({width:n.width,height:n.height,borderRadius:n.border_radius,zIndex:n.z_index,maxWidth:n.max_width,minWidth:n.min_width,maxHeight:n.max_height,minHeight:n.min_height})},[1!=p.withoutHeader?((0,i.wg)(),(0,i.iD)("div",s,[n.display_language?((0,i.wg)(),(0,i.j4)(u,{key:0,color:"dark"==n.theme?"#aaa":"#999",width:n.selector_width,mark:_.mark,disabled:0==n.language_selector,default_display:n.selector_displayed_by_default},{default:(0,i.w5)((()=>[(0,i._)("ul",{class:"lang_list",style:(0,r.j5)({height:n.selector_height})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(_.languageList,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,onClick:t=>p.changeLang(e)},(0,r.zw)(void 0===e[1]?e[0]:e[1]),9,o)))),128))],4)])),_:1},8,["color","width","mark","disabled","default_display"])):(0,i.kq)("",!0),n.copy_code?((0,i.wg)(),(0,i.j4)(m,{key:1,width:"16px",height:"16px",color:"dark"==n.theme?"#aaa":"#999",content:_.content},null,8,["color","content"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),(0,i._)("div",{class:"code_area",style:(0,r.j5)({borderBottomLeftRadius:n.border_radius,borderBottomRightRadius:n.border_radius,borderTopLeftRadius:1==p.withoutHeader?n.border_radius:0,borderTopRightRadius:1==p.withoutHeader?n.border_radius:0})},[1!=n.read_only&&void 0===n.modelValue?(0,i.wy)(((0,i.wg)(),(0,i.iD)("textarea",{key:0,ref:"textarea",autofocus:n.autofocus,onInput:t[0]||(t[0]=(...e)=>p.calcContainerWidth&&p.calcContainerWidth(...e)),onKeydown:t[1]||(t[1]=(0,a.D2)((0,a.iM)(((...e)=>p.tab&&p.tab(...e)),["prevent","stop"]),["tab"])),onScroll:t[2]||(t[2]=(...e)=>p.scroll&&p.scroll(...e)),"onUpdate:modelValue":t[3]||(t[3]=e=>_.staticValue=e),style:(0,r.j5)({fontSize:n.font_size})},null,44,l)),[[a.nr,_.staticValue]]):(0,i.kq)("",!0),1!=n.read_only&&void 0!==n.modelValue?((0,i.wg)(),(0,i.iD)("textarea",{key:1,ref:"textarea",autofocus:n.autofocus,onKeydown:t[4]||(t[4]=(0,a.D2)((0,a.iM)(((...e)=>p.tab&&p.tab(...e)),["prevent","stop"]),["tab"])),onScroll:t[5]||(t[5]=(...e)=>p.scroll&&p.scroll(...e)),value:n.modelValue,onInput:t[6]||(t[6]=t=>(e.$emit("update:modelValue",t.target.value),p.calcContainerWidth(t))),style:(0,r.j5)({fontSize:n.font_size})},null,44,c)):(0,i.kq)("",!0),(0,i._)("pre",{style:(0,r.j5)({width:0===_.containerWidth?"":_.containerWidth+"px"})},[(0,i.Uk)("        "),(0,i.wy)((0,i._)("code",{class:(0,r.C_)(_.languageClass),style:(0,r.j5)({top:_.top+"px",left:_.left+"px",fontSize:n.font_size,borderBottomLeftRadius:1==n.read_only?n.border_radius:0,borderBottomRightRadius:1==n.read_only?n.border_radius:0})},null,6),[[g,p.contentValue]]),(0,i.Uk)("\n      ")],4)],4)],6)}var _=n(6816),p=_;const u=e=>((0,i.dD)("data-v-1e4e1632"),e=e(),(0,i.Cn)(),e),m={class:"mark"},g=["stroke"],h=u((()=>(0,i._)("polyline",{points:"6 9 12 15 18 9"},null,-1))),f=[h];function E(e,t,n,s,o,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(["dropdown",{disabled:n.disabled}]),onClick:t[0]||(t[0]=(...e)=>l.toggleDropdown&&l.toggleDropdown(...e)),onFocusout:t[1]||(t[1]=(...e)=>l.hideDropdown&&l.hideDropdown(...e)),tabindex:"0"},[(0,i._)("div",m,[(0,i._)("div",{style:(0,r.j5)({color:n.color})},(0,r.zw)(n.mark),5),l.showArrow?((0,i.wg)(),(0,i.iD)("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:n.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down"},f,8,g)):(0,i.kq)("",!0)]),(0,i.Wm)(a.uT,{name:"fade"},{default:(0,i.w5)((()=>[o.show?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"panel",style:(0,r.j5)({width:n.width,height:n.height})},[(0,i.WI)(e.$slots,"default",{},void 0,!0)],4)):(0,i.kq)("",!0)])),_:3})],34)}var S={name:"Dropdown",props:{width:{type:String,default:"80px"},height:{type:String,default:"auto"},mark:{type:String,default:""},disabled:{type:Boolean,default:!1},color:{type:String,default:"#aaa"},default_display:{type:Boolean,default:!1}},data(){return{show:this.default_display}},computed:{showArrow(){return 1!=this.disabled}},methods:{toggleDropdown(){0==this.disabled&&(1==this.show?this.show=!1:this.show=!0)},hideDropdown(){this.show=!1}}},b=n(3744);const y=(0,b.Z)(S,[["render",E],["__scopeId","data-v-1e4e1632"]]);var v=y;const T=e=>((0,i.dD)("data-v-25463c94"),e=e(),(0,i.Cn)(),e),C={class:"tooltip"},R=["value"],O=["stroke"],N=T((()=>(0,i._)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1))),x=T((()=>(0,i._)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1))),A=[N,x];function I(e,t,n,a,s,o){return(0,i.wg)(),(0,i.iD)("div",{class:"copy_code",onClick:t[0]||(t[0]=(...e)=>o.copy&&o.copy(...e)),onFocusout:t[1]||(t[1]=(...e)=>o.resetMessage&&o.resetMessage(...e)),tabindex:"0",style:(0,r.j5)({width:n.width,height:n.height})},[(0,i._)("div",C,(0,r.zw)(s.message),1),(0,i._)("textarea",{ref:"textarea",value:n.content,tabindex:"1",readonly:""},null,8,R),((0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",stroke:n.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-copy"},A,8,O))],36)}var w={name:"CopyCode",props:{content:{type:String},width:{type:String,default:"20px"},height:{type:String,default:"20px"},color:{type:String,default:"#aaa"}},data(){return{message:"Copy code"}},methods:{selectContent(){let e=this.$refs.textarea;if(1==document.execCommand("copy")){let t,n;e.focus(),e.select(),t=document.createRange(),t.selectNodeContents(e),n=window.getSelection(),n.removeAllRanges(),n.addRange(t),e.setSelectionRange(0,e.value.length),document.execCommand("copy")}else navigator.clipboard.writeText(e.value)},copy(e){this.selectContent(),e.target.focus(),this.message="Copied!"},resetMessage(){this.message="Copy code"}}};const D=(0,b.Z)(w,[["render",I],["__scopeId","data-v-25463c94"]]);var M=D,k={components:{Dropdown:v,CopyCode:M},name:"CodeEditor",props:{modelValue:{type:String},wrap_code:{type:Boolean,default:!1},read_only:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},hide_header:{type:Boolean,default:!1},value:{type:String,default:""},width:{type:String,default:"540px"},height:{type:String,default:"auto"},max_width:{type:String},min_width:{type:String},max_height:{type:String},min_height:{type:String},border_radius:{type:String,default:"12px"},language_selector:{type:Boolean,default:!1},languages:{type:Array,default:function(){return[["javascript","JS"],["cpp","C++"],["python","Python"]]}},selector_width:{type:String,default:"110px"},selector_height:{type:String,default:"auto"},selector_displayed_by_default:{type:Boolean,default:!1},display_language:{type:Boolean,default:!0},copy_code:{type:Boolean,default:!0},z_index:{type:String},font_size:{type:String,default:"17px"},theme:{type:String,default:"dark"}},directives:{highlight:{bind(e,t){e.textContent=t.value,p.highlightElement(e)},componentUpdated(e,t){e.textContent=t.value,p.highlightElement(e)},created(e,t){e.textContent=t.value,p.highlightElement(e)},updated(e,t){e.textContent=t.value,p.highlightElement(e)}}},data(){return{containerWidth:0,staticValue:this.value,top:0,left:0,languageClass:"hljs language-"+this.languages[0][0],mark:void 0===this.languages[0][1]?this.languages[0][0]:this.languages[0][1],languageList:this.languages,content:void 0===this.modelValue?this.staticValue:this.modelValue}},watch:{value(e){this.staticValue=e}},computed:{contentValue(){return this.read_only?this.value:void 0===this.modelValue?this.staticValue+"\n":this.modelValue+"\n"},canScroll(){return"auto"!=this.height},withoutHeader(){return 1==this.hide_header||0==this.display_language&&0==this.copy_code}},methods:{changeLang(e){this.mark=void 0===e[1]?e[0]:e[1],this.languageClass="language-"+e[0],this.$emit("lang",e[0])},calcContainerWidth(e){this.containerWidth=e.target.clientWidth},tab(){document.execCommand("insertText",!1,"    ")},scroll(e){this.top=-e.target.scrollTop,this.left=-e.target.scrollLeft},resize(){const e=new ResizeObserver((e=>{for(let t of e){const e=t.contentRect;this.containerWidth=e.width+40}}));this.$refs.textarea&&e.observe(this.$refs.textarea)}},mounted(){this.$emit("lang",this.languages[0][0]),this.$emit("langs",this.languages),this.$nextTick((function(){this.content=void 0===this.modelValue?this.staticValue:this.modelValue})),this.resize()},updated(){this.$emit("input",this.staticValue),this.$nextTick((function(){this.content=void 0===this.modelValue?this.staticValue:this.modelValue}))}};const L=(0,b.Z)(k,[["render",d],["__scopeId","data-v-6838a418"]]);var P=L},3907:function(e,t,n){"use strict";n.d(t,{MT:function(){return ee}});var i=n(6252),r=n(2262);function a(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const o="function"===typeof Proxy,l="devtools-plugin:setup",c="plugin:settings:set";let d,_;function p(){var e;return void 0!==d||("undefined"!==typeof window&&window.performance?(d=!0,_=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(d=!0,_=n.g.perf_hooks.performance):d=!1),d}function u(){return p()?_.now():Date.now()}class m{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const s in e.settings){const t=e.settings[s];n[s]=t.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},n);try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(r,t)}catch(a){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(a){}r=e},now(){return u()}},t&&t.on(c,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function g(e,t){const n=e,i=s(),r=a(),c=o&&n.enableEarlyProxy;if(!r||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new m(n,r):null,a=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];a.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else r.emit(l,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const a="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const o=Object.assign;function l(e,t){const n={};for(const i in t){const r=t[i];n[i]=d(r)?r.map(e):e(r)}return n}const c=()=>{},d=Array.isArray;const _=/\/$/,p=e=>e.replace(_,"");function u(e,t,n="/"){let i,r={},a="",s="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=t.slice(0,l),a=t.slice(l+1,o>-1?o:t.length),r=e(a)),o>-1&&(i=i||t.slice(0,o),s=t.slice(o,t.length)),i=y(null!=i?i:t,n),{fullPath:i+(a&&"?")+a+s,path:i,query:r,hash:s}}function m(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function g(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function h(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&f(t.matched[i],n.matched[r])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function f(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!S(e[n],t[n]))return!1;return!0}function S(e,t){return d(e)?b(e,t):d(t)?b(t,e):e===t}function b(e,t){return d(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function y(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,a,s=n.length-1;for(r=0;r<i.length;r++)if(a=i[r],"."!==a){if(".."!==a)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var v,T;(function(e){e["pop"]="pop",e["push"]="push"})(v||(v={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function C(e){if(!e)if(a){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),p(e)}const R=/^[^#]+#/;function O(e,t){return e.replace(R,"#")+t}function N(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=N(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function I(e,t){const n=history.state?history.state.position-t:-1;return n+e}const w=new Map;function D(e,t){w.set(e,t)}function M(e){const t=w.get(e);return w.delete(e),t}let k=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:i,hash:r}=t,a=e.indexOf("#");if(a>-1){let t=r.includes(e.slice(a))?e.slice(a).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),g(n,"")}const s=g(n,e);return s+i+r}function P(e,t,n,i){let r=[],a=[],s=null;const l=({state:a})=>{const o=L(e,location),l=n.value,c=t.value;let d=0;if(a){if(n.value=o,t.value=a,s&&s===l)return void(s=null);d=c?a.position-c.position:0}else i(o);r.forEach((e=>{e(n.value,l,{delta:d,type:v.pop,direction:d?d>0?T.forward:T.back:T.unknown})}))};function c(){s=n.value}function d(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return a.push(t),t}function _(){const{history:e}=window;e.state&&e.replaceState(o({},e.state,{scroll:x()}),"")}function p(){for(const e of a)e();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",_)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",_),{pauseListeners:c,listen:d,destroy:p}}function F(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?x():null}}function U(e){const{history:t,location:n}=window,i={value:L(e,n)},r={value:t.state};function a(i,a,s){const o=e.indexOf("#"),l=o>-1?(n.host&&document.querySelector("base")?e:e.slice(o))+i:k()+e+i;try{t[s?"replaceState":"pushState"](a,"",l),r.value=a}catch(c){console.error(c),n[s?"replace":"assign"](l)}}function s(e,n){const s=o({},t.state,F(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});a(e,s,!0),i.value=e}function l(e,n){const s=o({},r.value,t.state,{forward:e,scroll:x()});a(s.current,s,!0);const l=o({},F(i.value,e,null),{position:s.position+1},n);a(e,l,!1),i.value=e}return r.value||a(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:l,replace:s}}function B(e){e=C(e);const t=U(e),n=P(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=o({location:"",base:e,go:i,createHref:O.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function G(e){return"string"===typeof e||e&&"object"===typeof e}function z(e){return"string"===typeof e||"symbol"===typeof e}const Y={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function V(e,t){return o(new Error,{type:e,[$]:!0},t)}function q(e,t){return e instanceof Error&&$ in e&&(null==t||!!(e.type&t))}const j="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function Q(e,t){const n=o({},W,t),i=[];let r=n.start?"^":"";const a=[];for(const o of e){const e=o.length?[]:[90];n.strict&&!o.length&&(r+="/");for(let t=0;t<o.length;t++){const i=o[t];let s=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(K,"\\$&"),s+=40;else if(1===i.type){const{value:e,repeatable:n,optional:l,regexp:c}=i;a.push({name:e,repeatable:n,optional:l});const d=c||j;if(d!==j){s+=10;try{new RegExp(`(${d})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+_.message)}}let p=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(p=l&&o.length<2?`(?:/${p})`:"/"+p),l&&(p+="?"),r+=p,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}e.push(s)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const s=new RegExp(r,n.sensitive?"":"i");function l(e){const t=e.match(s),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=a[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function c(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:s,optional:o}=e,l=a in t?t[a]:"";if(d(l)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const c=d(l)?l.join("/"):l;if(!c){if(!o)throw new Error(`Missing required param "${a}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=c}}return n||"/"}return{re:s,score:i,keys:a,parse:l,stringify:c}}function X(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=X(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(J(i))return 1;if(J(r))return-1}return r.length-i.length}function J(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const r=[];let a;function s(){a&&r.push(a),a=[]}let o,l=0,c="",d="";function _(){c&&(0===n?a.push({type:0,value:c}):1===n||2===n||3===n?(a.length>1&&("*"===o||"+"===o)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:d,repeatable:"*"===o||"+"===o,optional:"*"===o||"?"===o})):t("Invalid state to consume buffer"),c="")}function p(){c+=o}while(l<e.length)if(o=e[l++],"\\"!==o||2===n)switch(n){case 0:"/"===o?(c&&_(),s()):":"===o?(_(),n=1):p();break;case 4:p(),n=i;break;case 1:"("===o?n=2:te.test(o)?p():(_(),n=0,"*"!==o&&"?"!==o&&"+"!==o&&l--);break;case 2:")"===o?"\\"==d[d.length-1]?d=d.slice(0,-1)+o:n=3:d+=o;break;case 3:_(),n=0,"*"!==o&&"?"!==o&&"+"!==o&&l--,d="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),_(),s(),r}function ie(e,t,n){const i=Q(ne(e.path),n);const r=o(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function re(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function a(e,n,i){const r=!i,l=se(e);l.aliasOf=i&&i.record;const _=de(t,e),p=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)p.push(o({},l,{components:i?i.record.components:l.components,path:e,aliasOf:i?i.record:l}))}let u,m;for(const t of p){const{path:o}=t;if(n&&"/"!==o[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(o&&i+o)}if(u=ie(t,n,_),i?i.alias.push(u):(m=m||u,m!==u&&m.alias.push(u),r&&e.name&&!le(u)&&s(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)a(e[t],u,i&&i.children[t])}i=i||u,(u.record.components&&Object.keys(u.record.components).length||u.record.name||u.record.redirect)&&d(u)}return m?()=>{s(m)}:c}function s(e){if(z(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function l(){return n}function d(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!_e(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!le(e)&&i.set(e.record.name,e)}function _(e,t){let r,a,s,l={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw V(1,{location:e});0,s=r.record.name,l=o(ae(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ae(e.params,r.keys.map((e=>e.name)))),a=r.stringify(l)}else if("path"in e)a=e.path,r=n.find((e=>e.re.test(a))),r&&(l=r.parse(a),s=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw V(1,{location:e,currentLocation:t});s=r.record.name,l=o({},t.params,e.params),a=r.stringify(l)}const c=[];let d=r;while(d)c.unshift(d.record),d=d.parent;return{name:s,path:a,params:l,matched:c,meta:ce(c)}}return t=de({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:_,removeRoute:s,getRoutes:l,getRecordMatcher:r}}function ae(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function se(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:oe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function oe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function le(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce(((e,t)=>o(e,t.meta)),{})}function de(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function _e(e,t){return t.children.some((t=>t===e||_e(e,t)))}const pe=/#/g,ue=/&/g,me=/\//g,ge=/=/g,he=/\?/g,fe=/\+/g,Ee=/%5B/g,Se=/%5D/g,be=/%5E/g,ye=/%60/g,ve=/%7B/g,Te=/%7C/g,Ce=/%7D/g,Re=/%20/g;function Oe(e){return encodeURI(""+e).replace(Te,"|").replace(Ee,"[").replace(Se,"]")}function Ne(e){return Oe(e).replace(ve,"{").replace(Ce,"}").replace(be,"^")}function xe(e){return Oe(e).replace(fe,"%2B").replace(Re,"+").replace(pe,"%23").replace(ue,"%26").replace(ye,"`").replace(ve,"{").replace(Ce,"}").replace(be,"^")}function Ae(e){return xe(e).replace(ge,"%3D")}function Ie(e){return Oe(e).replace(pe,"%23").replace(he,"%3F")}function we(e){return null==e?"":Ie(e).replace(me,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(fe," "),n=e.indexOf("="),a=De(n<0?e:e.slice(0,n)),s=n<0?null:De(e.slice(n+1));if(a in t){let e=t[a];d(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function ke(e){let t="";for(let n in e){const i=e[n];if(n=Ae(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=d(i)?i.map((e=>e&&xe(e))):[i&&xe(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=d(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}const Pe=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),Be=Symbol(""),Ge=Symbol("");function ze(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ye(e,t,n,i,r){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((s,o)=>{const l=e=>{!1===e?o(V(4,{from:n,to:t})):e instanceof Error?o(e):G(e)?o(V(2,{from:t,to:e})):(a&&i.enterCallbacks[r]===a&&"function"===typeof e&&a.push(e),s())},c=e.call(i&&i.instances[r],t,n,l);let d=Promise.resolve(c);e.length<3&&(d=d.then(l)),d.catch((e=>o(e)))}))}function $e(e,t,n,i){const r=[];for(const a of e){0;for(const e in a.components){let o=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(He(o)){const s=o.__vccOpts||o,l=s[t];l&&r.push(Ye(l,n,i,a,e))}else{let l=o();0,r.push((()=>l.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const o=s(r)?r.default:r;a.components[e]=o;const l=o.__vccOpts||o,c=l[t];return c&&Ye(c,n,i,a,e)()}))))}}}return r}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ve(e){const t=(0,i.f3)(Ue),n=(0,i.f3)(Be),a=(0,i.Fl)((()=>t.resolve((0,r.SU)(e.to)))),s=(0,i.Fl)((()=>{const{matched:e}=a.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const s=r.findIndex(f.bind(null,i));if(s>-1)return s;const o=Qe(e[t-2]);return t>1&&Qe(i)===o&&r[r.length-1].path!==o?r.findIndex(f.bind(null,e[t-2])):s})),o=(0,i.Fl)((()=>s.value>-1&&Ke(n.params,a.value.params))),l=(0,i.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&E(n.params,a.value.params)));function d(n={}){return We(n)?t[(0,r.SU)(e.replace)?"replace":"push"]((0,r.SU)(e.to)).catch(c):Promise.resolve()}return{route:a,href:(0,i.Fl)((()=>a.value.href)),isActive:o,isExactActive:l,navigate:d}}const qe=(0,i.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ve,setup(e,{slots:t}){const n=(0,r.qj)(Ve(e)),{options:a}=(0,i.f3)(Ue),s=(0,i.Fl)((()=>({[Xe(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),je=qe;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!d(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,i.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=(0,i.f3)(Ge),s=(0,i.Fl)((()=>e.route||a.value)),l=(0,i.f3)(Fe,0),c=(0,i.Fl)((()=>{let e=(0,r.SU)(l);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),d=(0,i.Fl)((()=>s.value.matched[c.value]));(0,i.JJ)(Fe,(0,i.Fl)((()=>c.value+1))),(0,i.JJ)(Pe,d),(0,i.JJ)(Ge,s);const _=(0,r.iH)();return(0,i.YP)((()=>[_.value,d.value,e.name]),(([e,t,n],[i,r,a])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&f(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,a=e.name,l=d.value,c=l&&l.components[a];if(!c)return Je(n.default,{Component:c,route:r});const p=l.props[a],u=p?!0===p?r.params:"function"===typeof p?p(r):p:null,m=e=>{e.component.isUnmounted&&(l.instances[a]=null)},g=(0,i.h)(c,o({},u,t,{onVnodeUnmounted:m,ref:_}));return Je(n.default,{Component:g,route:r})||g}}});function Je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=re(e.routes,e),n=e.parseQuery||Me,s=e.stringifyQuery||ke,_=e.history;const p=ze(),g=ze(),f=ze(),E=(0,r.XI)(Y);let S=Y;a&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=l.bind(null,(e=>""+e)),y=l.bind(null,we),T=l.bind(null,De);function C(e,n){let i,r;return z(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function R(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map((e=>e.record))}function N(e){return!!t.getRecordMatcher(e)}function w(e,i){if(i=o({},i||E.value),"string"===typeof e){const r=u(n,e,i.path),a=t.resolve({path:r.path},i),s=_.createHref(r.fullPath);return o(r,a,{params:T(a.params),hash:De(r.hash),redirectedFrom:void 0,href:s})}let r;if("path"in e)r=o({},e,{path:u(n,e.path,i.path).path});else{const t=o({},e.params);for(const e in t)null==t[e]&&delete t[e];r=o({},e,{params:y(e.params)}),i.params=y(i.params)}const a=t.resolve(r,i),l=e.hash||"";a.params=b(T(a.params));const c=m(s,o({},e,{hash:Ne(l),path:a.path})),d=_.createHref(c);return o({fullPath:c,hash:l,query:s===ke?Le(e.query):e.query||{}},a,{redirectedFrom:void 0,href:d})}function k(e){return"string"===typeof e?u(n,e,E.value.path):o({},e)}function L(e,t){if(S!==e)return V(8,{from:t,to:e})}function P(e){return B(e)}function F(e){return P(o(k(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=k(i):{path:i},i.params={}),o({query:e.query,hash:e.hash,params:"path"in i?{}:e.params},i)}}function B(e,t){const n=S=w(e),i=E.value,r=e.state,a=e.force,l=!0===e.replace,c=U(n);if(c)return B(o(k(c),{state:"object"===typeof c?o({},r,c.state):r,force:a,replace:l}),t||n);const d=n;let _;return d.redirectedFrom=t,!a&&h(s,i,n)&&(_=V(16,{to:d,from:i}),ne(i,i,!0,!1)),(_?Promise.resolve(_):$(d,i)).catch((e=>q(e)?q(e,2)?e:te(e):J(e,d,i))).then((e=>{if(e){if(q(e,2))return B(o({replace:l},k(e.to),{state:"object"===typeof e.to?o({},r,e.to.state):r,force:a}),t||d)}else e=j(d,i,!0,l,r);return H(d,i,e),e}))}function G(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[i,r,a]=it(e,t);n=$e(i.reverse(),"beforeRouteLeave",e,t);for(const o of i)o.leaveGuards.forEach((i=>{n.push(Ye(i,e,t))}));const s=G.bind(null,e,t);return n.push(s),nt(n).then((()=>{n=[];for(const i of p.list())n.push(Ye(i,e,t));return n.push(s),nt(n)})).then((()=>{n=$e(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(Ye(i,e,t))}));return n.push(s),nt(n)})).then((()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(d(i.beforeEnter))for(const r of i.beforeEnter)n.push(Ye(r,e,t));else n.push(Ye(i.beforeEnter,e,t));return n.push(s),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(a,"beforeRouteEnter",e,t),n.push(s),nt(n)))).then((()=>{n=[];for(const i of g.list())n.push(Ye(i,e,t));return n.push(s),nt(n)})).catch((e=>q(e,8)?e:Promise.reject(e)))}function H(e,t,n){for(const i of f.list())i(e,t,n)}function j(e,t,n,i,r){const s=L(e,t);if(s)return s;const l=t===Y,c=a?history.state:{};n&&(i||l?_.replace(e.fullPath,o({scroll:l&&c&&c.scroll},r)):_.push(e.fullPath,r)),E.value=e,ne(e,t,n,l),te()}let W;function K(){W||(W=_.listen(((e,t,n)=>{if(!oe.listening)return;const i=w(e),r=U(i);if(r)return void B(o(r,{replace:!0}),i).catch(c);S=i;const s=E.value;a&&D(I(s.fullPath,n.delta),x()),$(i,s).catch((e=>q(e,12)?e:q(e,2)?(B(e.to,i).then((e=>{q(e,20)&&!n.delta&&n.type===v.pop&&_.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&_.go(-n.delta,!1),J(e,i,s)))).then((e=>{e=e||j(i,s,!1),e&&(n.delta&&!q(e,8)?_.go(-n.delta,!1):n.type===v.pop&&q(e,20)&&_.go(-1,!1)),H(i,s,e)})).catch(c)})))}let Q,X=ze(),Z=ze();function J(e,t,n){te(e);const i=Z.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Q&&E.value!==Y?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return Q||(Q=!e,K(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,r,s){const{scrollBehavior:o}=e;if(!a||!o)return Promise.resolve();const l=!r&&M(I(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return(0,i.Y3)().then((()=>o(t,n,l))).then((e=>e&&A(e))).catch((e=>J(e,t,n)))}const ie=e=>_.go(e);let ae;const se=new Set,oe={currentRoute:E,listening:!0,addRoute:C,removeRoute:R,hasRoute:N,getRoutes:O,resolve:w,options:e,push:P,replace:F,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:p.add,beforeResolve:g.add,afterEach:f.add,onError:Z.add,isReady:ee,install(e){const t=this;e.component("RouterLink",je),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.SU)(E)}),a&&!ae&&E.value===Y&&(ae=!0,P(_.location).catch((e=>{0})));const n={};for(const r in Y)n[r]=(0,i.Fl)((()=>E.value[r]));e.provide(Ue,t),e.provide(Be,(0,r.qj)(n)),e.provide(Ge,E);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(S=Y,W&&W(),W=null,E.value=Y,ae=!1,Q=!1),s()}}};return oe}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],i=[],r=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>f(e,a)))?i.push(a):n.push(a));const o=e.matched[s];o&&(t.matched.find((e=>f(e,o)))||r.push(o))}return[n,i,r]}}}]);
//# sourceMappingURL=chunk-vendors.b640e4fe.js.map