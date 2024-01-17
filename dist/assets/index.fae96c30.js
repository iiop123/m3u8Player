(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const i of f.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerpolicy&&(f.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?f.credentials="include":l.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(l){if(l.ep)return;l.ep=!0;const f=n(l);fetch(l.href,f)}})();function Co(e,t){const n=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)n[o[l]]=!0;return t?l=>!!n[l.toLowerCase()]:l=>!!n[l]}function Ae(e){if(Je(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],l=St(o)?Nc(o):Ae(o);if(l)for(const f in l)t[f]=l[f]}return t}else{if(St(e))return e;if(yt(e))return e}}const Mc=/;(?![^(]*\))/g,Bc=/:([^]+)/,$c=/\/\*.*?\*\//gs;function Nc(e){const t={};return e.replace($c,"").split(Mc).forEach(n=>{if(n){const o=n.split(Bc);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function fe(e){let t="";if(St(e))t=e;else if(Je(e))for(let n=0;n<e.length;n++){const o=fe(e[n]);o&&(t+=o+" ")}else if(yt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Fc(e){if(!e)return null;let{class:t,style:n}=e;return t&&!St(t)&&(e.class=fe(t)),n&&(e.style=Ae(n)),e}const Uc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kc=Co(Uc);function wl(e){return!!e||e===""}const me=e=>St(e)?e:e==null?"":Je(e)||yt(e)&&(e.toString===Dl||!rt(e.toString))?JSON.stringify(e,xl,2):String(e),xl=(e,t)=>t&&t.__v_isRef?xl(e,t.value):pr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,l])=>(n[`${o} =>`]=l,n),{})}:_l(t)?{[`Set(${t.size})`]:[...t.values()]}:yt(t)&&!Je(t)&&!Il(t)?String(t):t,vt={},fr=[],cn=()=>{},Wc=()=>!1,Hc=/^on[^a-z]/,ti=e=>Hc.test(e),To=e=>e.startsWith("onUpdate:"),$t=Object.assign,ko=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zc=Object.prototype.hasOwnProperty,st=(e,t)=>zc.call(e,t),Je=Array.isArray,pr=e=>ni(e)==="[object Map]",_l=e=>ni(e)==="[object Set]",rt=e=>typeof e=="function",St=e=>typeof e=="string",wo=e=>typeof e=="symbol",yt=e=>e!==null&&typeof e=="object",Ll=e=>yt(e)&&rt(e.then)&&rt(e.catch),Dl=Object.prototype.toString,ni=e=>Dl.call(e),Vc=e=>ni(e).slice(8,-1),Il=e=>ni(e)==="[object Object]",xo=e=>St(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ha=Co(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ri=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},jc=/-(\w)/g,gn=ri(e=>e.replace(jc,(t,n)=>n?n.toUpperCase():"")),Yc=/\B([A-Z])/g,er=ri(e=>e.replace(Yc,"-$1").toLowerCase()),ai=ri(e=>e.charAt(0).toUpperCase()+e.slice(1)),ki=ri(e=>e?`on${ai(e)}`:""),oa=(e,t)=>!Object.is(e,t),za=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ya=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Bi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Gc=e=>{const t=St(e)?Number(e):NaN;return isNaN(t)?e:t};let bs;const Xc=()=>bs||(bs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ln;class Qc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ln,!t&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ln;try{return ln=this,t()}finally{ln=n}}}on(){ln=this}off(){ln=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function qc(e,t=ln){t&&t.active&&t.effects.push(e)}function Zc(){return ln}const _o=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Pl=e=>(e.w&$n)>0,Ol=e=>(e.n&$n)>0,Jc=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=$n},ef=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const l=t[o];Pl(l)&&!Ol(l)?l.delete(e):t[n++]=l,l.w&=~$n,l.n&=~$n}t.length=n}},Ga=new WeakMap;let ea=0,$n=1;const $i=30;let un;const qn=Symbol(""),Ni=Symbol("");class Lo{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qc(this,o)}run(){if(!this.active)return this.fn();let t=un,n=Mn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=un,un=this,Mn=!0,$n=1<<++ea,ea<=$i?Jc(this):Es(this),this.fn()}finally{ea<=$i&&ef(this),$n=1<<--ea,un=this.parent,Mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(Es(this),this.onStop&&this.onStop(),this.active=!1)}}function Es(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Mn=!0;const Rl=[];function yr(){Rl.push(Mn),Mn=!1}function Ar(){const e=Rl.pop();Mn=e===void 0?!0:e}function Zt(e,t,n){if(Mn&&un){let o=Ga.get(e);o||Ga.set(e,o=new Map);let l=o.get(n);l||o.set(n,l=_o()),Ml(l)}}function Ml(e,t){let n=!1;ea<=$i?Ol(e)||(e.n|=$n,n=!Pl(e)):n=!e.has(un),n&&(e.add(un),un.deps.push(e))}function Cn(e,t,n,o,l,f){const i=Ga.get(e);if(!i)return;let r=[];if(t==="clear")r=[...i.values()];else if(n==="length"&&Je(e)){const a=Number(o);i.forEach((D,h)=>{(h==="length"||h>=a)&&r.push(D)})}else switch(n!==void 0&&r.push(i.get(n)),t){case"add":Je(e)?xo(n)&&r.push(i.get("length")):(r.push(i.get(qn)),pr(e)&&r.push(i.get(Ni)));break;case"delete":Je(e)||(r.push(i.get(qn)),pr(e)&&r.push(i.get(Ni)));break;case"set":pr(e)&&r.push(i.get(qn));break}if(r.length===1)r[0]&&Fi(r[0]);else{const a=[];for(const D of r)D&&a.push(...D);Fi(_o(a))}}function Fi(e,t){const n=Je(e)?e:[...e];for(const o of n)o.computed&&Ss(o);for(const o of n)o.computed||Ss(o)}function Ss(e,t){(e!==un||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function tf(e,t){var n;return(n=Ga.get(e))===null||n===void 0?void 0:n.get(t)}const nf=Co("__proto__,__v_isRef,__isVue"),Bl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wo)),rf=Do(),af=Do(!1,!0),of=Do(!0),Cs=sf();function sf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=lt(this);for(let f=0,i=this.length;f<i;f++)Zt(o,"get",f+"");const l=o[t](...n);return l===-1||l===!1?o[t](...n.map(lt)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){yr();const o=lt(this)[t].apply(this,n);return Ar(),o}}),e}function lf(e){const t=lt(this);return Zt(t,"has",e),t.hasOwnProperty(e)}function Do(e=!1,t=!1){return function(o,l,f){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&f===(e?t?Tf:Kl:t?Ul:Fl).get(o))return o;const i=Je(o);if(!e){if(i&&st(Cs,l))return Reflect.get(Cs,l,f);if(l==="hasOwnProperty")return lf}const r=Reflect.get(o,l,f);return(wo(l)?Bl.has(l):nf(l))||(e||Zt(o,"get",l),t)?r:Rt(r)?i&&xo(l)?r:r.value:yt(r)?e?Oo(r):ze(r):r}}const uf=$l(),df=$l(!0);function $l(e=!1){return function(n,o,l,f){let i=n[o];if(gr(i)&&Rt(i)&&!Rt(l))return!1;if(!e&&(!Xa(l)&&!gr(l)&&(i=lt(i),l=lt(l)),!Je(n)&&Rt(i)&&!Rt(l)))return i.value=l,!0;const r=Je(n)&&xo(o)?Number(o)<n.length:st(n,o),a=Reflect.set(n,o,l,f);return n===lt(f)&&(r?oa(l,i)&&Cn(n,"set",o,l):Cn(n,"add",o,l)),a}}function cf(e,t){const n=st(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Cn(e,"delete",t,void 0),o}function ff(e,t){const n=Reflect.has(e,t);return(!wo(t)||!Bl.has(t))&&Zt(e,"has",t),n}function pf(e){return Zt(e,"iterate",Je(e)?"length":qn),Reflect.ownKeys(e)}const Nl={get:rf,set:uf,deleteProperty:cf,has:ff,ownKeys:pf},hf={get:of,set(e,t){return!0},deleteProperty(e,t){return!0}},mf=$t({},Nl,{get:af,set:df}),Io=e=>e,ii=e=>Reflect.getPrototypeOf(e);function Pa(e,t,n=!1,o=!1){e=e.__v_raw;const l=lt(e),f=lt(t);n||(t!==f&&Zt(l,"get",t),Zt(l,"get",f));const{has:i}=ii(l),r=o?Io:n?Mo:sa;if(i.call(l,t))return r(e.get(t));if(i.call(l,f))return r(e.get(f));e!==l&&e.get(t)}function Oa(e,t=!1){const n=this.__v_raw,o=lt(n),l=lt(e);return t||(e!==l&&Zt(o,"has",e),Zt(o,"has",l)),e===l?n.has(e):n.has(e)||n.has(l)}function Ra(e,t=!1){return e=e.__v_raw,!t&&Zt(lt(e),"iterate",qn),Reflect.get(e,"size",e)}function Ts(e){e=lt(e);const t=lt(this);return ii(t).has.call(t,e)||(t.add(e),Cn(t,"add",e,e)),this}function ks(e,t){t=lt(t);const n=lt(this),{has:o,get:l}=ii(n);let f=o.call(n,e);f||(e=lt(e),f=o.call(n,e));const i=l.call(n,e);return n.set(e,t),f?oa(t,i)&&Cn(n,"set",e,t):Cn(n,"add",e,t),this}function ws(e){const t=lt(this),{has:n,get:o}=ii(t);let l=n.call(t,e);l||(e=lt(e),l=n.call(t,e)),o&&o.call(t,e);const f=t.delete(e);return l&&Cn(t,"delete",e,void 0),f}function xs(){const e=lt(this),t=e.size!==0,n=e.clear();return t&&Cn(e,"clear",void 0,void 0),n}function Ma(e,t){return function(o,l){const f=this,i=f.__v_raw,r=lt(i),a=t?Io:e?Mo:sa;return!e&&Zt(r,"iterate",qn),i.forEach((D,h)=>o.call(l,a(D),a(h),f))}}function Ba(e,t,n){return function(...o){const l=this.__v_raw,f=lt(l),i=pr(f),r=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,D=l[e](...o),h=n?Io:t?Mo:sa;return!t&&Zt(f,"iterate",a?Ni:qn),{next(){const{value:$,done:s}=D.next();return s?{value:$,done:s}:{value:r?[h($[0]),h($[1])]:h($),done:s}},[Symbol.iterator](){return this}}}}function Dn(e){return function(...t){return e==="delete"?!1:this}}function gf(){const e={get(f){return Pa(this,f)},get size(){return Ra(this)},has:Oa,add:Ts,set:ks,delete:ws,clear:xs,forEach:Ma(!1,!1)},t={get(f){return Pa(this,f,!1,!0)},get size(){return Ra(this)},has:Oa,add:Ts,set:ks,delete:ws,clear:xs,forEach:Ma(!1,!0)},n={get(f){return Pa(this,f,!0)},get size(){return Ra(this,!0)},has(f){return Oa.call(this,f,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Ma(!0,!1)},o={get(f){return Pa(this,f,!0,!0)},get size(){return Ra(this,!0)},has(f){return Oa.call(this,f,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Ma(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(f=>{e[f]=Ba(f,!1,!1),n[f]=Ba(f,!0,!1),t[f]=Ba(f,!1,!0),o[f]=Ba(f,!0,!0)}),[e,n,t,o]}const[vf,yf,Af,bf]=gf();function Po(e,t){const n=t?e?bf:Af:e?yf:vf;return(o,l,f)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(st(n,l)&&l in o?n:o,l,f)}const Ef={get:Po(!1,!1)},Sf={get:Po(!1,!0)},Cf={get:Po(!0,!1)},Fl=new WeakMap,Ul=new WeakMap,Kl=new WeakMap,Tf=new WeakMap;function kf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wf(e){return e.__v_skip||!Object.isExtensible(e)?0:kf(Vc(e))}function ze(e){return gr(e)?e:Ro(e,!1,Nl,Ef,Fl)}function Wl(e){return Ro(e,!1,mf,Sf,Ul)}function Oo(e){return Ro(e,!0,hf,Cf,Kl)}function Ro(e,t,n,o,l){if(!yt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const f=l.get(e);if(f)return f;const i=wf(e);if(i===0)return e;const r=new Proxy(e,i===2?o:n);return l.set(e,r),r}function hr(e){return gr(e)?hr(e.__v_raw):!!(e&&e.__v_isReactive)}function gr(e){return!!(e&&e.__v_isReadonly)}function Xa(e){return!!(e&&e.__v_isShallow)}function Hl(e){return hr(e)||gr(e)}function lt(e){const t=e&&e.__v_raw;return t?lt(t):e}function Qa(e){return Ya(e,"__v_skip",!0),e}const sa=e=>yt(e)?ze(e):e,Mo=e=>yt(e)?Oo(e):e;function zl(e){Mn&&un&&(e=lt(e),Ml(e.dep||(e.dep=_o())))}function Vl(e,t){e=lt(e);const n=e.dep;n&&Fi(n)}function Rt(e){return!!(e&&e.__v_isRef===!0)}function Te(e){return xf(e,!1)}function xf(e,t){return Rt(e)?e:new _f(e,t)}class _f{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:lt(t),this._value=n?t:sa(t)}get value(){return zl(this),this._value}set value(t){const n=this.__v_isShallow||Xa(t)||gr(t);t=n?t:lt(t),oa(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:sa(t),Vl(this))}}function Be(e){return Rt(e)?e.value:e}const Lf={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const l=e[t];return Rt(l)&&!Rt(n)?(l.value=n,!0):Reflect.set(e,t,n,o)}};function jl(e){return hr(e)?e:new Proxy(e,Lf)}function Qe(e){const t=Je(e)?new Array(e.length):{};for(const n in e)t[n]=If(e,n);return t}class Df{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return tf(lt(this._object),this._key)}}function If(e,t,n){const o=e[t];return Rt(o)?o:new Df(e,t,n)}var Yl;class Pf{constructor(t,n,o,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yl]=!1,this._dirty=!0,this.effect=new Lo(t,()=>{this._dirty||(this._dirty=!0,Vl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=lt(this);return zl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Yl="__v_isReadonly";function Of(e,t,n=!1){let o,l;const f=rt(e);return f?(o=e,l=cn):(o=e.get,l=e.set),new Pf(o,l,f||!l,n)}function Bn(e,t,n,o){let l;try{l=o?e(...o):e()}catch(f){oi(f,t,n)}return l}function rn(e,t,n,o){if(rt(e)){const f=Bn(e,t,n,o);return f&&Ll(f)&&f.catch(i=>{oi(i,t,n)}),f}const l=[];for(let f=0;f<e.length;f++)l.push(rn(e[f],t,n,o));return l}function oi(e,t,n,o=!0){const l=t?t.vnode:null;if(t){let f=t.parent;const i=t.proxy,r=n;for(;f;){const D=f.ec;if(D){for(let h=0;h<D.length;h++)if(D[h](e,i,r)===!1)return}f=f.parent}const a=t.appContext.config.errorHandler;if(a){Bn(a,null,10,[e,i,r]);return}}Rf(e,n,l,o)}function Rf(e,t,n,o=!0){console.error(e)}let la=!1,Ui=!1;const Ht=[];let mn=0;const mr=[];let bn=null,Yn=0;const Gl=Promise.resolve();let Bo=null;function wt(e){const t=Bo||Gl;return e?t.then(this?e.bind(this):e):t}function Mf(e){let t=mn+1,n=Ht.length;for(;t<n;){const o=t+n>>>1;ua(Ht[o])<e?t=o+1:n=o}return t}function $o(e){(!Ht.length||!Ht.includes(e,la&&e.allowRecurse?mn+1:mn))&&(e.id==null?Ht.push(e):Ht.splice(Mf(e.id),0,e),Xl())}function Xl(){!la&&!Ui&&(Ui=!0,Bo=Gl.then(ql))}function Bf(e){const t=Ht.indexOf(e);t>mn&&Ht.splice(t,1)}function $f(e){Je(e)?mr.push(...e):(!bn||!bn.includes(e,e.allowRecurse?Yn+1:Yn))&&mr.push(e),Xl()}function _s(e,t=la?mn+1:0){for(;t<Ht.length;t++){const n=Ht[t];n&&n.pre&&(Ht.splice(t,1),t--,n())}}function Ql(e){if(mr.length){const t=[...new Set(mr)];if(mr.length=0,bn){bn.push(...t);return}for(bn=t,bn.sort((n,o)=>ua(n)-ua(o)),Yn=0;Yn<bn.length;Yn++)bn[Yn]();bn=null,Yn=0}}const ua=e=>e.id==null?1/0:e.id,Nf=(e,t)=>{const n=ua(e)-ua(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ql(e){Ui=!1,la=!0,Ht.sort(Nf);const t=cn;try{for(mn=0;mn<Ht.length;mn++){const n=Ht[mn];n&&n.active!==!1&&Bn(n,null,14)}}finally{mn=0,Ht.length=0,Ql(),la=!1,Bo=null,(Ht.length||mr.length)&&ql()}}function Ff(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||vt;let l=n;const f=t.startsWith("update:"),i=f&&t.slice(7);if(i&&i in o){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:$,trim:s}=o[h]||vt;s&&(l=n.map(N=>St(N)?N.trim():N)),$&&(l=n.map(Bi))}let r,a=o[r=ki(t)]||o[r=ki(gn(t))];!a&&f&&(a=o[r=ki(er(t))]),a&&rn(a,e,6,l);const D=o[r+"Once"];if(D){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,rn(D,e,6,l)}}function Zl(e,t,n=!1){const o=t.emitsCache,l=o.get(e);if(l!==void 0)return l;const f=e.emits;let i={},r=!1;if(!rt(e)){const a=D=>{const h=Zl(D,t,!0);h&&(r=!0,$t(i,h))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!f&&!r?(yt(e)&&o.set(e,null),null):(Je(f)?f.forEach(a=>i[a]=null):$t(i,f),yt(e)&&o.set(e,i),i)}function si(e,t){return!e||!ti(t)?!1:(t=t.slice(2).replace(/Once$/,""),st(e,t[0].toLowerCase()+t.slice(1))||st(e,er(t))||st(e,t))}let Mt=null,Jl=null;function qa(e){const t=Mt;return Mt=e,Jl=e&&e.type.__scopeId||null,t}function Ke(e,t=Mt,n){if(!t||e._n)return e;const o=(...l)=>{o._d&&Fs(-1);const f=qa(t);let i;try{i=e(...l)}finally{qa(f),o._d&&Fs(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function wi(e){const{type:t,vnode:n,proxy:o,withProxy:l,props:f,propsOptions:[i],slots:r,attrs:a,emit:D,render:h,renderCache:$,data:s,setupState:N,ctx:d,inheritAttrs:g}=e;let k,v;const S=qa(e);try{if(n.shapeFlag&4){const I=l||o;k=hn(h.call(I,I,$,f,N,s,d)),v=a}else{const I=t;k=hn(I.length>1?I(f,{attrs:a,slots:r,emit:D}):I(f,null)),v=t.props?a:Uf(a)}}catch(I){aa.length=0,oi(I,e,1),k=Ne(an)}let u=k;if(v&&g!==!1){const I=Object.keys(v),{shapeFlag:T}=u;I.length&&T&7&&(i&&I.some(To)&&(v=Kf(v,i)),u=Nn(u,v))}return n.dirs&&(u=Nn(u),u.dirs=u.dirs?u.dirs.concat(n.dirs):n.dirs),n.transition&&(u.transition=n.transition),k=u,qa(S),k}const Uf=e=>{let t;for(const n in e)(n==="class"||n==="style"||ti(n))&&((t||(t={}))[n]=e[n]);return t},Kf=(e,t)=>{const n={};for(const o in e)(!To(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Wf(e,t,n){const{props:o,children:l,component:f}=e,{props:i,children:r,patchFlag:a}=t,D=f.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?Ls(o,i,D):!!i;if(a&8){const h=t.dynamicProps;for(let $=0;$<h.length;$++){const s=h[$];if(i[s]!==o[s]&&!si(D,s))return!0}}}else return(l||r)&&(!r||!r.$stable)?!0:o===i?!1:o?i?Ls(o,i,D):!0:!!i;return!1}function Ls(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const f=o[l];if(t[f]!==e[f]&&!si(n,f))return!0}return!1}function Hf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const zf=e=>e.__isSuspense;function Vf(e,t){t&&t.pendingBranch?Je(e)?t.effects.push(...e):t.effects.push(e):$f(e)}function Ot(e,t){if(Tt){let n=Tt.provides;const o=Tt.parent&&Tt.parent.provides;o===n&&(n=Tt.provides=Object.create(o)),n[e]=t}}function xt(e,t,n=!1){const o=Tt||Mt;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return n&&rt(t)?t.call(o.proxy):t}}function No(e,t){return Fo(e,null,t)}const $a={};function Me(e,t,n){return Fo(e,t,n)}function Fo(e,t,{immediate:n,deep:o,flush:l,onTrack:f,onTrigger:i}=vt){const r=Zc()===(Tt==null?void 0:Tt.scope)?Tt:null;let a,D=!1,h=!1;if(Rt(e)?(a=()=>e.value,D=Xa(e)):hr(e)?(a=()=>e,o=!0):Je(e)?(h=!0,D=e.some(u=>hr(u)||Xa(u)),a=()=>e.map(u=>{if(Rt(u))return u.value;if(hr(u))return Qn(u);if(rt(u))return Bn(u,r,2)})):rt(e)?t?a=()=>Bn(e,r,2):a=()=>{if(!(r&&r.isUnmounted))return $&&$(),rn(e,r,3,[s])}:a=cn,t&&o){const u=a;a=()=>Qn(u())}let $,s=u=>{$=v.onStop=()=>{Bn(u,r,4)}},N;if(ha)if(s=cn,t?n&&rn(t,r,3,[a(),h?[]:void 0,s]):a(),l==="sync"){const u=Rp();N=u.__watcherHandles||(u.__watcherHandles=[])}else return cn;let d=h?new Array(e.length).fill($a):$a;const g=()=>{if(!!v.active)if(t){const u=v.run();(o||D||(h?u.some((I,T)=>oa(I,d[T])):oa(u,d)))&&($&&$(),rn(t,r,3,[u,d===$a?void 0:h&&d[0]===$a?[]:d,s]),d=u)}else v.run()};g.allowRecurse=!!t;let k;l==="sync"?k=g:l==="post"?k=()=>Qt(g,r&&r.suspense):(g.pre=!0,r&&(g.id=r.uid),k=()=>$o(g));const v=new Lo(a,k);t?n?g():d=v.run():l==="post"?Qt(v.run.bind(v),r&&r.suspense):v.run();const S=()=>{v.stop(),r&&r.scope&&ko(r.scope.effects,v)};return N&&N.push(S),S}function jf(e,t,n){const o=this.proxy,l=St(e)?e.includes(".")?eu(o,e):()=>o[e]:e.bind(o,o);let f;rt(t)?f=t:(f=t.handler,n=t);const i=Tt;vr(this);const r=Fo(l,f.bind(o),n);return i?vr(i):Zn(),r}function eu(e,t){const n=t.split(".");return()=>{let o=e;for(let l=0;l<n.length&&o;l++)o=o[n[l]];return o}}function Qn(e,t){if(!yt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Rt(e))Qn(e.value,t);else if(Je(e))for(let n=0;n<e.length;n++)Qn(e[n],t);else if(_l(e)||pr(e))e.forEach(n=>{Qn(n,t)});else if(Il(e))for(const n in e)Qn(e[n],t);return e}function Yf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tt(()=>{e.isMounted=!0}),Ko(()=>{e.isUnmounting=!0}),e}const tn=[Function,Array],Gf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},setup(e,{slots:t}){const n=Yt(),o=Yf();let l;return()=>{const f=t.default&&ru(t.default(),!0);if(!f||!f.length)return;let i=f[0];if(f.length>1){for(const g of f)if(g.type!==an){i=g;break}}const r=lt(e),{mode:a}=r;if(o.isLeaving)return xi(i);const D=Ds(i);if(!D)return xi(i);const h=Ki(D,r,o,n);Wi(D,h);const $=n.subTree,s=$&&Ds($);let N=!1;const{getTransitionKey:d}=D.type;if(d){const g=d();l===void 0?l=g:g!==l&&(l=g,N=!0)}if(s&&s.type!==an&&(!Gn(D,s)||N)){const g=Ki(s,r,o,n);if(Wi(s,g),a==="out-in")return o.isLeaving=!0,g.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&n.update()},xi(i);a==="in-out"&&D.type!==an&&(g.delayLeave=(k,v,S)=>{const u=nu(o,s);u[String(s.key)]=s,k._leaveCb=()=>{v(),k._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=S})}return i}}},tu=Gf;function nu(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Ki(e,t,n,o){const{appear:l,mode:f,persisted:i=!1,onBeforeEnter:r,onEnter:a,onAfterEnter:D,onEnterCancelled:h,onBeforeLeave:$,onLeave:s,onAfterLeave:N,onLeaveCancelled:d,onBeforeAppear:g,onAppear:k,onAfterAppear:v,onAppearCancelled:S}=t,u=String(e.key),I=nu(n,e),T=(b,m)=>{b&&rn(b,o,9,m)},A=(b,m)=>{const E=m[1];T(b,m),Je(b)?b.every(C=>C.length<=1)&&E():b.length<=1&&E()},x={mode:f,persisted:i,beforeEnter(b){let m=r;if(!n.isMounted)if(l)m=g||r;else return;b._leaveCb&&b._leaveCb(!0);const E=I[u];E&&Gn(e,E)&&E.el._leaveCb&&E.el._leaveCb(),T(m,[b])},enter(b){let m=a,E=D,C=h;if(!n.isMounted)if(l)m=k||a,E=v||D,C=S||h;else return;let y=!1;const w=b._enterCb=_=>{y||(y=!0,_?T(C,[b]):T(E,[b]),x.delayedLeave&&x.delayedLeave(),b._enterCb=void 0)};m?A(m,[b,w]):w()},leave(b,m){const E=String(e.key);if(b._enterCb&&b._enterCb(!0),n.isUnmounting)return m();T($,[b]);let C=!1;const y=b._leaveCb=w=>{C||(C=!0,m(),w?T(d,[b]):T(N,[b]),b._leaveCb=void 0,I[E]===e&&delete I[E])};I[E]=e,s?A(s,[b,y]):y()},clone(b){return Ki(b,t,n,o)}};return x}function xi(e){if(li(e))return e=Nn(e),e.children=null,e}function Ds(e){return li(e)?e.children?e.children[0]:void 0:e}function Wi(e,t){e.shapeFlag&6&&e.component?Wi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ru(e,t=!1,n){let o=[],l=0;for(let f=0;f<e.length;f++){let i=e[f];const r=n==null?i.key:String(n)+String(i.key!=null?i.key:f);i.type===De?(i.patchFlag&128&&l++,o=o.concat(ru(i.children,t,r))):(t||i.type!==an)&&o.push(r!=null?Nn(i,{key:r}):i)}if(l>1)for(let f=0;f<o.length;f++)o[f].patchFlag=-2;return o}function at(e){return rt(e)?{setup:e,name:e.name}:e}const ta=e=>!!e.type.__asyncLoader,li=e=>e.type.__isKeepAlive;function br(e,t){au(e,"a",t)}function Er(e,t){au(e,"da",t)}function au(e,t,n=Tt){const o=e.__wdc||(e.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(ui(t,o,n),n){let l=n.parent;for(;l&&l.parent;)li(l.parent.vnode)&&Xf(o,t,n,l),l=l.parent}}function Xf(e,t,n,o){const l=ui(t,e,o,!0);on(()=>{ko(o[t],l)},n)}function ui(e,t,n=Tt,o=!1){if(n){const l=n[e]||(n[e]=[]),f=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;yr(),vr(n);const r=rn(t,n,e,i);return Zn(),Ar(),r});return o?l.unshift(f):l.push(f),f}}const Tn=e=>(t,n=Tt)=>(!ha||e==="sp")&&ui(e,(...o)=>t(...o),n),Uo=Tn("bm"),tt=Tn("m"),Qf=Tn("bu"),qf=Tn("u"),Ko=Tn("bum"),on=Tn("um"),Zf=Tn("sp"),Jf=Tn("rtg"),ep=Tn("rtc");function tp(e,t=Tt){ui("ec",e,t)}function Et(e,t){const n=Mt;if(n===null)return e;const o=fi(n)||n.proxy,l=e.dirs||(e.dirs=[]);for(let f=0;f<t.length;f++){let[i,r,a,D=vt]=t[f];i&&(rt(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(r),l.push({dir:i,instance:o,value:r,oldValue:void 0,arg:a,modifiers:D}))}return e}function Kn(e,t,n,o){const l=e.dirs,f=t&&t.dirs;for(let i=0;i<l.length;i++){const r=l[i];f&&(r.oldValue=f[i].value);let a=r.dir[o];a&&(yr(),rn(a,n,8,[e.el,r,e,t]),Ar())}}const Wo="components";function xe(e,t){return ou(Wo,e,!0,t)||e}const iu=Symbol();function qt(e){return St(e)?ou(Wo,e,!1)||e:e||iu}function ou(e,t,n=!0,o=!1){const l=Mt||Tt;if(l){const f=l.type;if(e===Wo){const r=Dp(f,!1);if(r&&(r===t||r===gn(t)||r===ai(gn(t))))return f}const i=Is(l[e]||f[e],t)||Is(l.appContext[e],t);return!i&&o?f:i}}function Is(e,t){return e&&(e[t]||e[gn(t)]||e[ai(gn(t))])}function Ye(e,t,n,o){let l;const f=n&&n[o];if(Je(e)||St(e)){l=new Array(e.length);for(let i=0,r=e.length;i<r;i++)l[i]=t(e[i],i,void 0,f&&f[i])}else if(typeof e=="number"){l=new Array(e);for(let i=0;i<e;i++)l[i]=t(i+1,i,void 0,f&&f[i])}else if(yt(e))if(e[Symbol.iterator])l=Array.from(e,(i,r)=>t(i,r,void 0,f&&f[r]));else{const i=Object.keys(e);l=new Array(i.length);for(let r=0,a=i.length;r<a;r++){const D=i[r];l[r]=t(e[D],D,r,f&&f[r])}}else l=[];return n&&(n[o]=l),l}function da(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(Je(o))for(let l=0;l<o.length;l++)e[o[l].name]=o[l].fn;else o&&(e[o.name]=o.key?(...l)=>{const f=o.fn(...l);return f&&(f.key=o.key),f}:o.fn)}return e}function he(e,t,n={},o,l){if(Mt.isCE||Mt.parent&&ta(Mt.parent)&&Mt.parent.isCE)return t!=="default"&&(n.name=t),Ne("slot",n,o&&o());let f=e[t];f&&f._c&&(f._d=!1),j();const i=f&&su(f(n)),r=Pe(De,{key:n.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!l&&r.scopeId&&(r.slotScopeIds=[r.scopeId+"-s"]),f&&f._c&&(f._d=!0),r}function su(e){return e.some(t=>fa(t)?!(t.type===an||t.type===De&&!su(t.children)):!0)?e:null}const Hi=e=>e?Au(e)?fi(e)||e.proxy:Hi(e.parent):null,na=$t(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hi(e.parent),$root:e=>Hi(e.root),$emit:e=>e.emit,$options:e=>Ho(e),$forceUpdate:e=>e.f||(e.f=()=>$o(e.update)),$nextTick:e=>e.n||(e.n=wt.bind(e.proxy)),$watch:e=>jf.bind(e)}),_i=(e,t)=>e!==vt&&!e.__isScriptSetup&&st(e,t),np={get({_:e},t){const{ctx:n,setupState:o,data:l,props:f,accessCache:i,type:r,appContext:a}=e;let D;if(t[0]!=="$"){const N=i[t];if(N!==void 0)switch(N){case 1:return o[t];case 2:return l[t];case 4:return n[t];case 3:return f[t]}else{if(_i(o,t))return i[t]=1,o[t];if(l!==vt&&st(l,t))return i[t]=2,l[t];if((D=e.propsOptions[0])&&st(D,t))return i[t]=3,f[t];if(n!==vt&&st(n,t))return i[t]=4,n[t];zi&&(i[t]=0)}}const h=na[t];let $,s;if(h)return t==="$attrs"&&Zt(e,"get",t),h(e);if(($=r.__cssModules)&&($=$[t]))return $;if(n!==vt&&st(n,t))return i[t]=4,n[t];if(s=a.config.globalProperties,st(s,t))return s[t]},set({_:e},t,n){const{data:o,setupState:l,ctx:f}=e;return _i(l,t)?(l[t]=n,!0):o!==vt&&st(o,t)?(o[t]=n,!0):st(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(f[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:l,propsOptions:f}},i){let r;return!!n[i]||e!==vt&&st(e,i)||_i(t,i)||(r=f[0])&&st(r,i)||st(o,i)||st(na,i)||st(l.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:st(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let zi=!0;function rp(e){const t=Ho(e),n=e.proxy,o=e.ctx;zi=!1,t.beforeCreate&&Ps(t.beforeCreate,e,"bc");const{data:l,computed:f,methods:i,watch:r,provide:a,inject:D,created:h,beforeMount:$,mounted:s,beforeUpdate:N,updated:d,activated:g,deactivated:k,beforeDestroy:v,beforeUnmount:S,destroyed:u,unmounted:I,render:T,renderTracked:A,renderTriggered:x,errorCaptured:b,serverPrefetch:m,expose:E,inheritAttrs:C,components:y,directives:w,filters:_}=t;if(D&&ap(D,o,null,e.appContext.config.unwrapInjectedRef),i)for(const c in i){const O=i[c];rt(O)&&(o[c]=O.bind(n))}if(l){const c=l.call(n,n);yt(c)&&(e.data=ze(c))}if(zi=!0,f)for(const c in f){const O=f[c],p=rt(O)?O.bind(n,n):rt(O.get)?O.get.bind(n,n):cn,R=!rt(O)&&rt(O.set)?O.set.bind(n):cn,B=ae({get:p,set:R});Object.defineProperty(o,c,{enumerable:!0,configurable:!0,get:()=>B.value,set:M=>B.value=M})}if(r)for(const c in r)lu(r[c],o,n,c);if(a){const c=rt(a)?a.call(n):a;Reflect.ownKeys(c).forEach(O=>{Ot(O,c[O])})}h&&Ps(h,e,"c");function L(c,O){Je(O)?O.forEach(p=>c(p.bind(n))):O&&c(O.bind(n))}if(L(Uo,$),L(tt,s),L(Qf,N),L(qf,d),L(br,g),L(Er,k),L(tp,b),L(ep,A),L(Jf,x),L(Ko,S),L(on,I),L(Zf,m),Je(E))if(E.length){const c=e.exposed||(e.exposed={});E.forEach(O=>{Object.defineProperty(c,O,{get:()=>n[O],set:p=>n[O]=p})})}else e.exposed||(e.exposed={});T&&e.render===cn&&(e.render=T),C!=null&&(e.inheritAttrs=C),y&&(e.components=y),w&&(e.directives=w)}function ap(e,t,n=cn,o=!1){Je(e)&&(e=Vi(e));for(const l in e){const f=e[l];let i;yt(f)?"default"in f?i=xt(f.from||l,f.default,!0):i=xt(f.from||l):i=xt(f),Rt(i)&&o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[l]=i}}function Ps(e,t,n){rn(Je(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function lu(e,t,n,o){const l=o.includes(".")?eu(n,o):()=>n[o];if(St(e)){const f=t[e];rt(f)&&Me(l,f)}else if(rt(e))Me(l,e.bind(n));else if(yt(e))if(Je(e))e.forEach(f=>lu(f,t,n,o));else{const f=rt(e.handler)?e.handler.bind(n):t[e.handler];rt(f)&&Me(l,f,e)}}function Ho(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:l,optionsCache:f,config:{optionMergeStrategies:i}}=e.appContext,r=f.get(t);let a;return r?a=r:!l.length&&!n&&!o?a=t:(a={},l.length&&l.forEach(D=>Za(a,D,i,!0)),Za(a,t,i)),yt(t)&&f.set(t,a),a}function Za(e,t,n,o=!1){const{mixins:l,extends:f}=t;f&&Za(e,f,n,!0),l&&l.forEach(i=>Za(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const r=ip[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}const ip={data:Os,props:jn,emits:jn,methods:jn,computed:jn,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:jn,directives:jn,watch:sp,provide:Os,inject:op};function Os(e,t){return t?e?function(){return $t(rt(e)?e.call(this,this):e,rt(t)?t.call(this,this):t)}:t:e}function op(e,t){return jn(Vi(e),Vi(t))}function Vi(e){if(Je(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function jt(e,t){return e?[...new Set([].concat(e,t))]:t}function jn(e,t){return e?$t($t(Object.create(null),e),t):t}function sp(e,t){if(!e)return t;if(!t)return e;const n=$t(Object.create(null),e);for(const o in t)n[o]=jt(e[o],t[o]);return n}function lp(e,t,n,o=!1){const l={},f={};Ya(f,ci,1),e.propsDefaults=Object.create(null),uu(e,t,l,f);for(const i in e.propsOptions[0])i in l||(l[i]=void 0);n?e.props=o?l:Wl(l):e.type.props?e.props=l:e.props=f,e.attrs=f}function up(e,t,n,o){const{props:l,attrs:f,vnode:{patchFlag:i}}=e,r=lt(l),[a]=e.propsOptions;let D=!1;if((o||i>0)&&!(i&16)){if(i&8){const h=e.vnode.dynamicProps;for(let $=0;$<h.length;$++){let s=h[$];if(si(e.emitsOptions,s))continue;const N=t[s];if(a)if(st(f,s))N!==f[s]&&(f[s]=N,D=!0);else{const d=gn(s);l[d]=ji(a,r,d,N,e,!1)}else N!==f[s]&&(f[s]=N,D=!0)}}}else{uu(e,t,l,f)&&(D=!0);let h;for(const $ in r)(!t||!st(t,$)&&((h=er($))===$||!st(t,h)))&&(a?n&&(n[$]!==void 0||n[h]!==void 0)&&(l[$]=ji(a,r,$,void 0,e,!0)):delete l[$]);if(f!==r)for(const $ in f)(!t||!st(t,$)&&!0)&&(delete f[$],D=!0)}D&&Cn(e,"set","$attrs")}function uu(e,t,n,o){const[l,f]=e.propsOptions;let i=!1,r;if(t)for(let a in t){if(Ha(a))continue;const D=t[a];let h;l&&st(l,h=gn(a))?!f||!f.includes(h)?n[h]=D:(r||(r={}))[h]=D:si(e.emitsOptions,a)||(!(a in o)||D!==o[a])&&(o[a]=D,i=!0)}if(f){const a=lt(n),D=r||vt;for(let h=0;h<f.length;h++){const $=f[h];n[$]=ji(l,a,$,D[$],e,!st(D,$))}}return i}function ji(e,t,n,o,l,f){const i=e[n];if(i!=null){const r=st(i,"default");if(r&&o===void 0){const a=i.default;if(i.type!==Function&&rt(a)){const{propsDefaults:D}=l;n in D?o=D[n]:(vr(l),o=D[n]=a.call(null,t),Zn())}else o=a}i[0]&&(f&&!r?o=!1:i[1]&&(o===""||o===er(n))&&(o=!0))}return o}function du(e,t,n=!1){const o=t.propsCache,l=o.get(e);if(l)return l;const f=e.props,i={},r=[];let a=!1;if(!rt(e)){const h=$=>{a=!0;const[s,N]=du($,t,!0);$t(i,s),N&&r.push(...N)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!f&&!a)return yt(e)&&o.set(e,fr),fr;if(Je(f))for(let h=0;h<f.length;h++){const $=gn(f[h]);Rs($)&&(i[$]=vt)}else if(f)for(const h in f){const $=gn(h);if(Rs($)){const s=f[h],N=i[$]=Je(s)||rt(s)?{type:s}:Object.assign({},s);if(N){const d=$s(Boolean,N.type),g=$s(String,N.type);N[0]=d>-1,N[1]=g<0||d<g,(d>-1||st(N,"default"))&&r.push($)}}}const D=[i,r];return yt(e)&&o.set(e,D),D}function Rs(e){return e[0]!=="$"}function Ms(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Bs(e,t){return Ms(e)===Ms(t)}function $s(e,t){return Je(t)?t.findIndex(n=>Bs(n,e)):rt(t)&&Bs(t,e)?0:-1}const cu=e=>e[0]==="_"||e==="$stable",zo=e=>Je(e)?e.map(hn):[hn(e)],dp=(e,t,n)=>{if(t._n)return t;const o=Ke((...l)=>zo(t(...l)),n);return o._c=!1,o},fu=(e,t,n)=>{const o=e._ctx;for(const l in e){if(cu(l))continue;const f=e[l];if(rt(f))t[l]=dp(l,f,o);else if(f!=null){const i=zo(f);t[l]=()=>i}}},pu=(e,t)=>{const n=zo(t);e.slots.default=()=>n},cp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=lt(t),Ya(t,"_",n)):fu(t,e.slots={})}else e.slots={},t&&pu(e,t);Ya(e.slots,ci,1)},fp=(e,t,n)=>{const{vnode:o,slots:l}=e;let f=!0,i=vt;if(o.shapeFlag&32){const r=t._;r?n&&r===1?f=!1:($t(l,t),!n&&r===1&&delete l._):(f=!t.$stable,fu(t,l)),i=t}else t&&(pu(e,t),i={default:1});if(f)for(const r in l)!cu(r)&&!(r in i)&&delete l[r]};function hu(){return{app:null,config:{isNativeTag:Wc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pp=0;function hp(e,t){return function(o,l=null){rt(o)||(o=Object.assign({},o)),l!=null&&!yt(l)&&(l=null);const f=hu(),i=new Set;let r=!1;const a=f.app={_uid:pp++,_component:o,_props:l,_container:null,_context:f,_instance:null,version:Mp,get config(){return f.config},set config(D){},use(D,...h){return i.has(D)||(D&&rt(D.install)?(i.add(D),D.install(a,...h)):rt(D)&&(i.add(D),D(a,...h))),a},mixin(D){return f.mixins.includes(D)||f.mixins.push(D),a},component(D,h){return h?(f.components[D]=h,a):f.components[D]},directive(D,h){return h?(f.directives[D]=h,a):f.directives[D]},mount(D,h,$){if(!r){const s=Ne(o,l);return s.appContext=f,h&&t?t(s,D):e(s,D,$),r=!0,a._container=D,D.__vue_app__=a,fi(s.component)||s.component.proxy}},unmount(){r&&(e(null,a._container),delete a._container.__vue_app__)},provide(D,h){return f.provides[D]=h,a}};return a}}function Yi(e,t,n,o,l=!1){if(Je(e)){e.forEach((s,N)=>Yi(s,t&&(Je(t)?t[N]:t),n,o,l));return}if(ta(o)&&!l)return;const f=o.shapeFlag&4?fi(o.component)||o.component.proxy:o.el,i=l?null:f,{i:r,r:a}=e,D=t&&t.r,h=r.refs===vt?r.refs={}:r.refs,$=r.setupState;if(D!=null&&D!==a&&(St(D)?(h[D]=null,st($,D)&&($[D]=null)):Rt(D)&&(D.value=null)),rt(a))Bn(a,r,12,[i,h]);else{const s=St(a),N=Rt(a);if(s||N){const d=()=>{if(e.f){const g=s?st($,a)?$[a]:h[a]:a.value;l?Je(g)&&ko(g,f):Je(g)?g.includes(f)||g.push(f):s?(h[a]=[f],st($,a)&&($[a]=h[a])):(a.value=[f],e.k&&(h[e.k]=a.value))}else s?(h[a]=i,st($,a)&&($[a]=i)):N&&(a.value=i,e.k&&(h[e.k]=i))};i?(d.id=-1,Qt(d,n)):d()}}}const Qt=Vf;function mp(e){return gp(e)}function gp(e,t){const n=Xc();n.__VUE__=!0;const{insert:o,remove:l,patchProp:f,createElement:i,createText:r,createComment:a,setText:D,setElementText:h,parentNode:$,nextSibling:s,setScopeId:N=cn,insertStaticContent:d}=e,g=(q,ne,de,le=null,pe=null,ye=null,Ce=!1,ge=null,ve=!!ne.dynamicChildren)=>{if(q===ne)return;q&&!Gn(q,ne)&&(le=Q(q),M(q,pe,ye,!0),q=null),ne.patchFlag===-2&&(ve=!1,ne.dynamicChildren=null);const{type:Ee,ref:Ie,shapeFlag:Le}=ne;switch(Ee){case di:k(q,ne,de,le);break;case an:v(q,ne,de,le);break;case Li:q==null&&S(ne,de,le,Ce);break;case De:y(q,ne,de,le,pe,ye,Ce,ge,ve);break;default:Le&1?T(q,ne,de,le,pe,ye,Ce,ge,ve):Le&6?w(q,ne,de,le,pe,ye,Ce,ge,ve):(Le&64||Le&128)&&Ee.process(q,ne,de,le,pe,ye,Ce,ge,ve,te)}Ie!=null&&pe&&Yi(Ie,q&&q.ref,ye,ne||q,!ne)},k=(q,ne,de,le)=>{if(q==null)o(ne.el=r(ne.children),de,le);else{const pe=ne.el=q.el;ne.children!==q.children&&D(pe,ne.children)}},v=(q,ne,de,le)=>{q==null?o(ne.el=a(ne.children||""),de,le):ne.el=q.el},S=(q,ne,de,le)=>{[q.el,q.anchor]=d(q.children,ne,de,le,q.el,q.anchor)},u=({el:q,anchor:ne},de,le)=>{let pe;for(;q&&q!==ne;)pe=s(q),o(q,de,le),q=pe;o(ne,de,le)},I=({el:q,anchor:ne})=>{let de;for(;q&&q!==ne;)de=s(q),l(q),q=de;l(ne)},T=(q,ne,de,le,pe,ye,Ce,ge,ve)=>{Ce=Ce||ne.type==="svg",q==null?A(ne,de,le,pe,ye,Ce,ge,ve):m(q,ne,pe,ye,Ce,ge,ve)},A=(q,ne,de,le,pe,ye,Ce,ge)=>{let ve,Ee;const{type:Ie,props:Le,shapeFlag:$e,transition:Fe,dirs:Ve}=q;if(ve=q.el=i(q.type,ye,Le&&Le.is,Le),$e&8?h(ve,q.children):$e&16&&b(q.children,ve,null,le,pe,ye&&Ie!=="foreignObject",Ce,ge),Ve&&Kn(q,null,le,"created"),x(ve,q,q.scopeId,Ce,le),Le){for(const Xe in Le)Xe!=="value"&&!Ha(Xe)&&f(ve,Xe,null,Le[Xe],ye,q.children,le,pe,G);"value"in Le&&f(ve,"value",null,Le.value),(Ee=Le.onVnodeBeforeMount)&&pn(Ee,le,q)}Ve&&Kn(q,null,le,"beforeMount");const Ge=(!pe||pe&&!pe.pendingBranch)&&Fe&&!Fe.persisted;Ge&&Fe.beforeEnter(ve),o(ve,ne,de),((Ee=Le&&Le.onVnodeMounted)||Ge||Ve)&&Qt(()=>{Ee&&pn(Ee,le,q),Ge&&Fe.enter(ve),Ve&&Kn(q,null,le,"mounted")},pe)},x=(q,ne,de,le,pe)=>{if(de&&N(q,de),le)for(let ye=0;ye<le.length;ye++)N(q,le[ye]);if(pe){let ye=pe.subTree;if(ne===ye){const Ce=pe.vnode;x(q,Ce,Ce.scopeId,Ce.slotScopeIds,pe.parent)}}},b=(q,ne,de,le,pe,ye,Ce,ge,ve=0)=>{for(let Ee=ve;Ee<q.length;Ee++){const Ie=q[Ee]=ge?Rn(q[Ee]):hn(q[Ee]);g(null,Ie,ne,de,le,pe,ye,Ce,ge)}},m=(q,ne,de,le,pe,ye,Ce)=>{const ge=ne.el=q.el;let{patchFlag:ve,dynamicChildren:Ee,dirs:Ie}=ne;ve|=q.patchFlag&16;const Le=q.props||vt,$e=ne.props||vt;let Fe;de&&Wn(de,!1),(Fe=$e.onVnodeBeforeUpdate)&&pn(Fe,de,ne,q),Ie&&Kn(ne,q,de,"beforeUpdate"),de&&Wn(de,!0);const Ve=pe&&ne.type!=="foreignObject";if(Ee?E(q.dynamicChildren,Ee,ge,de,le,Ve,ye):Ce||O(q,ne,ge,null,de,le,Ve,ye,!1),ve>0){if(ve&16)C(ge,ne,Le,$e,de,le,pe);else if(ve&2&&Le.class!==$e.class&&f(ge,"class",null,$e.class,pe),ve&4&&f(ge,"style",Le.style,$e.style,pe),ve&8){const Ge=ne.dynamicProps;for(let Xe=0;Xe<Ge.length;Xe++){const qe=Ge[Xe],ot=Le[qe],ft=$e[qe];(ft!==ot||qe==="value")&&f(ge,qe,ot,ft,pe,q.children,de,le,G)}}ve&1&&q.children!==ne.children&&h(ge,ne.children)}else!Ce&&Ee==null&&C(ge,ne,Le,$e,de,le,pe);((Fe=$e.onVnodeUpdated)||Ie)&&Qt(()=>{Fe&&pn(Fe,de,ne,q),Ie&&Kn(ne,q,de,"updated")},le)},E=(q,ne,de,le,pe,ye,Ce)=>{for(let ge=0;ge<ne.length;ge++){const ve=q[ge],Ee=ne[ge],Ie=ve.el&&(ve.type===De||!Gn(ve,Ee)||ve.shapeFlag&70)?$(ve.el):de;g(ve,Ee,Ie,null,le,pe,ye,Ce,!0)}},C=(q,ne,de,le,pe,ye,Ce)=>{if(de!==le){if(de!==vt)for(const ge in de)!Ha(ge)&&!(ge in le)&&f(q,ge,de[ge],null,Ce,ne.children,pe,ye,G);for(const ge in le){if(Ha(ge))continue;const ve=le[ge],Ee=de[ge];ve!==Ee&&ge!=="value"&&f(q,ge,Ee,ve,Ce,ne.children,pe,ye,G)}"value"in le&&f(q,"value",de.value,le.value)}},y=(q,ne,de,le,pe,ye,Ce,ge,ve)=>{const Ee=ne.el=q?q.el:r(""),Ie=ne.anchor=q?q.anchor:r("");let{patchFlag:Le,dynamicChildren:$e,slotScopeIds:Fe}=ne;Fe&&(ge=ge?ge.concat(Fe):Fe),q==null?(o(Ee,de,le),o(Ie,de,le),b(ne.children,de,Ie,pe,ye,Ce,ge,ve)):Le>0&&Le&64&&$e&&q.dynamicChildren?(E(q.dynamicChildren,$e,de,pe,ye,Ce,ge),(ne.key!=null||pe&&ne===pe.subTree)&&Vo(q,ne,!0)):O(q,ne,de,Ie,pe,ye,Ce,ge,ve)},w=(q,ne,de,le,pe,ye,Ce,ge,ve)=>{ne.slotScopeIds=ge,q==null?ne.shapeFlag&512?pe.ctx.activate(ne,de,le,Ce,ve):_(ne,de,le,pe,ye,Ce,ve):P(q,ne,ve)},_=(q,ne,de,le,pe,ye,Ce)=>{const ge=q.component=wp(q,le,pe);if(li(q)&&(ge.ctx.renderer=te),xp(ge),ge.asyncDep){if(pe&&pe.registerDep(ge,L),!q.el){const ve=ge.subTree=Ne(an);v(null,ve,ne,de)}return}L(ge,q,ne,de,pe,ye,Ce)},P=(q,ne,de)=>{const le=ne.component=q.component;if(Wf(q,ne,de))if(le.asyncDep&&!le.asyncResolved){c(le,ne,de);return}else le.next=ne,Bf(le.update),le.update();else ne.el=q.el,le.vnode=ne},L=(q,ne,de,le,pe,ye,Ce)=>{const ge=()=>{if(q.isMounted){let{next:Ie,bu:Le,u:$e,parent:Fe,vnode:Ve}=q,Ge=Ie,Xe;Wn(q,!1),Ie?(Ie.el=Ve.el,c(q,Ie,Ce)):Ie=Ve,Le&&za(Le),(Xe=Ie.props&&Ie.props.onVnodeBeforeUpdate)&&pn(Xe,Fe,Ie,Ve),Wn(q,!0);const qe=wi(q),ot=q.subTree;q.subTree=qe,g(ot,qe,$(ot.el),Q(ot),q,pe,ye),Ie.el=qe.el,Ge===null&&Hf(q,qe.el),$e&&Qt($e,pe),(Xe=Ie.props&&Ie.props.onVnodeUpdated)&&Qt(()=>pn(Xe,Fe,Ie,Ve),pe)}else{let Ie;const{el:Le,props:$e}=ne,{bm:Fe,m:Ve,parent:Ge}=q,Xe=ta(ne);if(Wn(q,!1),Fe&&za(Fe),!Xe&&(Ie=$e&&$e.onVnodeBeforeMount)&&pn(Ie,Ge,ne),Wn(q,!0),Le&&ue){const qe=()=>{q.subTree=wi(q),ue(Le,q.subTree,q,pe,null)};Xe?ne.type.__asyncLoader().then(()=>!q.isUnmounted&&qe()):qe()}else{const qe=q.subTree=wi(q);g(null,qe,de,le,q,pe,ye),ne.el=qe.el}if(Ve&&Qt(Ve,pe),!Xe&&(Ie=$e&&$e.onVnodeMounted)){const qe=ne;Qt(()=>pn(Ie,Ge,qe),pe)}(ne.shapeFlag&256||Ge&&ta(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&q.a&&Qt(q.a,pe),q.isMounted=!0,ne=de=le=null}},ve=q.effect=new Lo(ge,()=>$o(Ee),q.scope),Ee=q.update=()=>ve.run();Ee.id=q.uid,Wn(q,!0),Ee()},c=(q,ne,de)=>{ne.component=q;const le=q.vnode.props;q.vnode=ne,q.next=null,up(q,ne.props,le,de),fp(q,ne.children,de),yr(),_s(),Ar()},O=(q,ne,de,le,pe,ye,Ce,ge,ve=!1)=>{const Ee=q&&q.children,Ie=q?q.shapeFlag:0,Le=ne.children,{patchFlag:$e,shapeFlag:Fe}=ne;if($e>0){if($e&128){R(Ee,Le,de,le,pe,ye,Ce,ge,ve);return}else if($e&256){p(Ee,Le,de,le,pe,ye,Ce,ge,ve);return}}Fe&8?(Ie&16&&G(Ee,pe,ye),Le!==Ee&&h(de,Le)):Ie&16?Fe&16?R(Ee,Le,de,le,pe,ye,Ce,ge,ve):G(Ee,pe,ye,!0):(Ie&8&&h(de,""),Fe&16&&b(Le,de,le,pe,ye,Ce,ge,ve))},p=(q,ne,de,le,pe,ye,Ce,ge,ve)=>{q=q||fr,ne=ne||fr;const Ee=q.length,Ie=ne.length,Le=Math.min(Ee,Ie);let $e;for($e=0;$e<Le;$e++){const Fe=ne[$e]=ve?Rn(ne[$e]):hn(ne[$e]);g(q[$e],Fe,de,null,pe,ye,Ce,ge,ve)}Ee>Ie?G(q,pe,ye,!0,!1,Le):b(ne,de,le,pe,ye,Ce,ge,ve,Le)},R=(q,ne,de,le,pe,ye,Ce,ge,ve)=>{let Ee=0;const Ie=ne.length;let Le=q.length-1,$e=Ie-1;for(;Ee<=Le&&Ee<=$e;){const Fe=q[Ee],Ve=ne[Ee]=ve?Rn(ne[Ee]):hn(ne[Ee]);if(Gn(Fe,Ve))g(Fe,Ve,de,null,pe,ye,Ce,ge,ve);else break;Ee++}for(;Ee<=Le&&Ee<=$e;){const Fe=q[Le],Ve=ne[$e]=ve?Rn(ne[$e]):hn(ne[$e]);if(Gn(Fe,Ve))g(Fe,Ve,de,null,pe,ye,Ce,ge,ve);else break;Le--,$e--}if(Ee>Le){if(Ee<=$e){const Fe=$e+1,Ve=Fe<Ie?ne[Fe].el:le;for(;Ee<=$e;)g(null,ne[Ee]=ve?Rn(ne[Ee]):hn(ne[Ee]),de,Ve,pe,ye,Ce,ge,ve),Ee++}}else if(Ee>$e)for(;Ee<=Le;)M(q[Ee],pe,ye,!0),Ee++;else{const Fe=Ee,Ve=Ee,Ge=new Map;for(Ee=Ve;Ee<=$e;Ee++){const ut=ne[Ee]=ve?Rn(ne[Ee]):hn(ne[Ee]);ut.key!=null&&Ge.set(ut.key,Ee)}let Xe,qe=0;const ot=$e-Ve+1;let ft=!1,Se=0;const dt=new Array(ot);for(Ee=0;Ee<ot;Ee++)dt[Ee]=0;for(Ee=Fe;Ee<=Le;Ee++){const ut=q[Ee];if(qe>=ot){M(ut,pe,ye,!0);continue}let Ze;if(ut.key!=null)Ze=Ge.get(ut.key);else for(Xe=Ve;Xe<=$e;Xe++)if(dt[Xe-Ve]===0&&Gn(ut,ne[Xe])){Ze=Xe;break}Ze===void 0?M(ut,pe,ye,!0):(dt[Ze-Ve]=Ee+1,Ze>=Se?Se=Ze:ft=!0,g(ut,ne[Ze],de,null,pe,ye,Ce,ge,ve),qe++)}const Nt=ft?vp(dt):fr;for(Xe=Nt.length-1,Ee=ot-1;Ee>=0;Ee--){const ut=Ve+Ee,Ze=ne[ut],Ft=ut+1<Ie?ne[ut+1].el:le;dt[Ee]===0?g(null,Ze,de,Ft,pe,ye,Ce,ge,ve):ft&&(Xe<0||Ee!==Nt[Xe]?B(Ze,de,Ft,2):Xe--)}}},B=(q,ne,de,le,pe=null)=>{const{el:ye,type:Ce,transition:ge,children:ve,shapeFlag:Ee}=q;if(Ee&6){B(q.component.subTree,ne,de,le);return}if(Ee&128){q.suspense.move(ne,de,le);return}if(Ee&64){Ce.move(q,ne,de,te);return}if(Ce===De){o(ye,ne,de);for(let Le=0;Le<ve.length;Le++)B(ve[Le],ne,de,le);o(q.anchor,ne,de);return}if(Ce===Li){u(q,ne,de);return}if(le!==2&&Ee&1&&ge)if(le===0)ge.beforeEnter(ye),o(ye,ne,de),Qt(()=>ge.enter(ye),pe);else{const{leave:Le,delayLeave:$e,afterLeave:Fe}=ge,Ve=()=>o(ye,ne,de),Ge=()=>{Le(ye,()=>{Ve(),Fe&&Fe()})};$e?$e(ye,Ve,Ge):Ge()}else o(ye,ne,de)},M=(q,ne,de,le=!1,pe=!1)=>{const{type:ye,props:Ce,ref:ge,children:ve,dynamicChildren:Ee,shapeFlag:Ie,patchFlag:Le,dirs:$e}=q;if(ge!=null&&Yi(ge,null,de,q,!0),Ie&256){ne.ctx.deactivate(q);return}const Fe=Ie&1&&$e,Ve=!ta(q);let Ge;if(Ve&&(Ge=Ce&&Ce.onVnodeBeforeUnmount)&&pn(Ge,ne,q),Ie&6)z(q.component,de,le);else{if(Ie&128){q.suspense.unmount(de,le);return}Fe&&Kn(q,null,ne,"beforeUnmount"),Ie&64?q.type.remove(q,ne,de,pe,te,le):Ee&&(ye!==De||Le>0&&Le&64)?G(Ee,ne,de,!1,!0):(ye===De&&Le&384||!pe&&Ie&16)&&G(ve,ne,de),le&&K(q)}(Ve&&(Ge=Ce&&Ce.onVnodeUnmounted)||Fe)&&Qt(()=>{Ge&&pn(Ge,ne,q),Fe&&Kn(q,null,ne,"unmounted")},de)},K=q=>{const{type:ne,el:de,anchor:le,transition:pe}=q;if(ne===De){V(de,le);return}if(ne===Li){I(q);return}const ye=()=>{l(de),pe&&!pe.persisted&&pe.afterLeave&&pe.afterLeave()};if(q.shapeFlag&1&&pe&&!pe.persisted){const{leave:Ce,delayLeave:ge}=pe,ve=()=>Ce(de,ye);ge?ge(q.el,ye,ve):ve()}else ye()},V=(q,ne)=>{let de;for(;q!==ne;)de=s(q),l(q),q=de;l(ne)},z=(q,ne,de)=>{const{bum:le,scope:pe,update:ye,subTree:Ce,um:ge}=q;le&&za(le),pe.stop(),ye&&(ye.active=!1,M(Ce,q,ne,de)),ge&&Qt(ge,ne),Qt(()=>{q.isUnmounted=!0},ne),ne&&ne.pendingBranch&&!ne.isUnmounted&&q.asyncDep&&!q.asyncResolved&&q.suspenseId===ne.pendingId&&(ne.deps--,ne.deps===0&&ne.resolve())},G=(q,ne,de,le=!1,pe=!1,ye=0)=>{for(let Ce=ye;Ce<q.length;Ce++)M(q[Ce],ne,de,le,pe)},Q=q=>q.shapeFlag&6?Q(q.component.subTree):q.shapeFlag&128?q.suspense.next():s(q.anchor||q.el),ee=(q,ne,de)=>{q==null?ne._vnode&&M(ne._vnode,null,null,!0):g(ne._vnode||null,q,ne,null,null,null,de),_s(),Ql(),ne._vnode=q},te={p:g,um:M,m:B,r:K,mt:_,mc:b,pc:O,pbc:E,n:Q,o:e};let se,ue;return t&&([se,ue]=t(te)),{render:ee,hydrate:se,createApp:hp(ee,se)}}function Wn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Vo(e,t,n=!1){const o=e.children,l=t.children;if(Je(o)&&Je(l))for(let f=0;f<o.length;f++){const i=o[f];let r=l[f];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=l[f]=Rn(l[f]),r.el=i.el),n||Vo(i,r)),r.type===di&&(r.el=i.el)}}function vp(e){const t=e.slice(),n=[0];let o,l,f,i,r;const a=e.length;for(o=0;o<a;o++){const D=e[o];if(D!==0){if(l=n[n.length-1],e[l]<D){t[o]=l,n.push(o);continue}for(f=0,i=n.length-1;f<i;)r=f+i>>1,e[n[r]]<D?f=r+1:i=r;D<e[n[f]]&&(f>0&&(t[o]=n[f-1]),n[f]=o)}}for(f=n.length,i=n[f-1];f-- >0;)n[f]=i,i=t[i];return n}const yp=e=>e.__isTeleport,ra=e=>e&&(e.disabled||e.disabled===""),Ns=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Gi=(e,t)=>{const n=e&&e.to;return St(n)?t?t(n):null:n},Ap={__isTeleport:!0,process(e,t,n,o,l,f,i,r,a,D){const{mc:h,pc:$,pbc:s,o:{insert:N,querySelector:d,createText:g,createComment:k}}=D,v=ra(t.props);let{shapeFlag:S,children:u,dynamicChildren:I}=t;if(e==null){const T=t.el=g(""),A=t.anchor=g("");N(T,n,o),N(A,n,o);const x=t.target=Gi(t.props,d),b=t.targetAnchor=g("");x&&(N(b,x),i=i||Ns(x));const m=(E,C)=>{S&16&&h(u,E,C,l,f,i,r,a)};v?m(n,A):x&&m(x,b)}else{t.el=e.el;const T=t.anchor=e.anchor,A=t.target=e.target,x=t.targetAnchor=e.targetAnchor,b=ra(e.props),m=b?n:A,E=b?T:x;if(i=i||Ns(A),I?(s(e.dynamicChildren,I,m,l,f,i,r),Vo(e,t,!0)):a||$(e,t,m,E,l,f,i,r,!1),v)b||Na(t,n,T,D,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const C=t.target=Gi(t.props,d);C&&Na(t,C,null,D,0)}else b&&Na(t,A,x,D,1)}mu(t)},remove(e,t,n,o,{um:l,o:{remove:f}},i){const{shapeFlag:r,children:a,anchor:D,targetAnchor:h,target:$,props:s}=e;if($&&f(h),(i||!ra(s))&&(f(D),r&16))for(let N=0;N<a.length;N++){const d=a[N];l(d,t,n,!0,!!d.dynamicChildren)}},move:Na,hydrate:bp};function Na(e,t,n,{o:{insert:o},m:l},f=2){f===0&&o(e.targetAnchor,t,n);const{el:i,anchor:r,shapeFlag:a,children:D,props:h}=e,$=f===2;if($&&o(i,t,n),(!$||ra(h))&&a&16)for(let s=0;s<D.length;s++)l(D[s],t,n,2);$&&o(r,t,n)}function bp(e,t,n,o,l,f,{o:{nextSibling:i,parentNode:r,querySelector:a}},D){const h=t.target=Gi(t.props,a);if(h){const $=h._lpa||h.firstChild;if(t.shapeFlag&16)if(ra(t.props))t.anchor=D(i(e),t,r(e),n,o,l,f),t.targetAnchor=$;else{t.anchor=i(e);let s=$;for(;s;)if(s=i(s),s&&s.nodeType===8&&s.data==="teleport anchor"){t.targetAnchor=s,h._lpa=t.targetAnchor&&i(t.targetAnchor);break}D($,t,h,n,o,l,f)}mu(t)}return t.anchor&&i(t.anchor)}const Ep=Ap;function mu(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const De=Symbol(void 0),di=Symbol(void 0),an=Symbol(void 0),Li=Symbol(void 0),aa=[];let dn=null;function j(e=!1){aa.push(dn=e?null:[])}function Sp(){aa.pop(),dn=aa[aa.length-1]||null}let ca=1;function Fs(e){ca+=e}function gu(e){return e.dynamicChildren=ca>0?dn||fr:null,Sp(),ca>0&&dn&&dn.push(e),e}function X(e,t,n,o,l,f){return gu(re(e,t,n,o,l,f,!0))}function Pe(e,t,n,o,l){return gu(Ne(e,t,n,o,l,!0))}function fa(e){return e?e.__v_isVNode===!0:!1}function Gn(e,t){return e.type===t.type&&e.key===t.key}const ci="__vInternal",vu=({key:e})=>e!=null?e:null,Va=({ref:e,ref_key:t,ref_for:n})=>e!=null?St(e)||Rt(e)||rt(e)?{i:Mt,r:e,k:t,f:!!n}:e:null;function re(e,t=null,n=null,o=0,l=null,f=e===De?0:1,i=!1,r=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vu(t),ref:t&&Va(t),scopeId:Jl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:f,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Mt};return r?(jo(a,n),f&128&&e.normalize(a)):n&&(a.shapeFlag|=St(n)?8:16),ca>0&&!i&&dn&&(a.patchFlag>0||f&6)&&a.patchFlag!==32&&dn.push(a),a}const Ne=Cp;function Cp(e,t=null,n=null,o=0,l=null,f=!1){if((!e||e===iu)&&(e=an),fa(e)){const r=Nn(e,t,!0);return n&&jo(r,n),ca>0&&!f&&dn&&(r.shapeFlag&6?dn[dn.indexOf(e)]=r:dn.push(r)),r.patchFlag|=-2,r}if(Ip(e)&&(e=e.__vccOpts),t){t=yu(t);let{class:r,style:a}=t;r&&!St(r)&&(t.class=fe(r)),yt(a)&&(Hl(a)&&!Je(a)&&(a=$t({},a)),t.style=Ae(a))}const i=St(e)?1:zf(e)?128:yp(e)?64:yt(e)?4:rt(e)?2:0;return re(e,t,n,o,l,i,f,!0)}function yu(e){return e?Hl(e)||ci in e?$t({},e):e:null}function Nn(e,t,n=!1){const{props:o,ref:l,patchFlag:f,children:i}=e,r=t?pa(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&vu(r),ref:t&&t.ref?n&&l?Je(l)?l.concat(Va(t)):[l,Va(t)]:Va(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?f===-1?16:f|16:f,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nn(e.ssContent),ssFallback:e.ssFallback&&Nn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function nt(e=" ",t=0){return Ne(di,null,e,t)}function ce(e="",t=!1){return t?(j(),Pe(an,null,e)):Ne(an,null,e)}function hn(e){return e==null||typeof e=="boolean"?Ne(an):Je(e)?Ne(De,null,e.slice()):typeof e=="object"?Rn(e):Ne(di,null,String(e))}function Rn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nn(e)}function jo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(Je(t))n=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),jo(e,l()),l._c&&(l._d=!0));return}else{n=32;const l=t._;!l&&!(ci in t)?t._ctx=Mt:l===3&&Mt&&(Mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else rt(t)?(t={default:t,_ctx:Mt},n=32):(t=String(t),o&64?(n=16,t=[nt(t)]):n=8);e.children=t,e.shapeFlag|=n}function pa(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=fe([t.class,o.class]));else if(l==="style")t.style=Ae([t.style,o.style]);else if(ti(l)){const f=t[l],i=o[l];i&&f!==i&&!(Je(f)&&f.includes(i))&&(t[l]=f?[].concat(f,i):i)}else l!==""&&(t[l]=o[l])}return t}function pn(e,t,n,o=null){rn(e,t,7,[n,o])}const Tp=hu();let kp=0;function wp(e,t,n){const o=e.type,l=(t?t.appContext:e.appContext)||Tp,f={uid:kp++,vnode:e,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:du(o,l),emitsOptions:Zl(o,l),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:o.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return f.ctx={_:f},f.root=t?t.root:f,f.emit=Ff.bind(null,f),e.ce&&e.ce(f),f}let Tt=null;const Yt=()=>Tt||Mt,vr=e=>{Tt=e,e.scope.on()},Zn=()=>{Tt&&Tt.scope.off(),Tt=null};function Au(e){return e.vnode.shapeFlag&4}let ha=!1;function xp(e,t=!1){ha=t;const{props:n,children:o}=e.vnode,l=Au(e);lp(e,n,l,t),cp(e,o);const f=l?_p(e,t):void 0;return ha=!1,f}function _p(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qa(new Proxy(e.ctx,np));const{setup:o}=n;if(o){const l=e.setupContext=o.length>1?Eu(e):null;vr(e),yr();const f=Bn(o,e,0,[e.props,l]);if(Ar(),Zn(),Ll(f)){if(f.then(Zn,Zn),t)return f.then(i=>{Us(e,i,t)}).catch(i=>{oi(i,e,0)});e.asyncDep=f}else Us(e,f,t)}else bu(e,t)}function Us(e,t,n){rt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:yt(t)&&(e.setupState=jl(t)),bu(e,n)}let Ks;function bu(e,t,n){const o=e.type;if(!e.render){if(!t&&Ks&&!o.render){const l=o.template||Ho(e).template;if(l){const{isCustomElement:f,compilerOptions:i}=e.appContext.config,{delimiters:r,compilerOptions:a}=o,D=$t($t({isCustomElement:f,delimiters:r},i),a);o.render=Ks(l,D)}}e.render=o.render||cn}vr(e),yr(),rp(e),Ar(),Zn()}function Lp(e){return new Proxy(e.attrs,{get(t,n){return Zt(e,"get","$attrs"),t[n]}})}function Eu(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=Lp(e))},slots:e.slots,emit:e.emit,expose:t}}function fi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(jl(Qa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in na)return na[n](e)},has(t,n){return n in t||n in na}}))}function Dp(e,t=!0){return rt(e)?e.displayName||e.name:e.name||t&&e.__name}function Ip(e){return rt(e)&&"__vccOpts"in e}const ae=(e,t)=>Of(e,t,ha);function Jn(){return Pp().slots}function Pp(){const e=Yt();return e.setupContext||(e.setupContext=Eu(e))}function kt(e,t,n){const o=arguments.length;return o===2?yt(t)&&!Je(t)?fa(t)?Ne(e,null,[t]):Ne(e,t):Ne(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&fa(n)&&(n=[n]),Ne(e,t,n))}const Op=Symbol(""),Rp=()=>xt(Op),Mp="3.2.47",Bp="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,Ws=Xn&&Xn.createElement("template"),$p={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const l=t?Xn.createElementNS(Bp,e):Xn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,l,f){const i=n?n.previousSibling:t.lastChild;if(l&&(l===f||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),!(l===f||!(l=l.nextSibling)););else{Ws.innerHTML=o?`<svg>${e}</svg>`:e;const r=Ws.content;if(o){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}t.insertBefore(r,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Np(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Fp(e,t,n){const o=e.style,l=St(n);if(n&&!l){if(t&&!St(t))for(const f in t)n[f]==null&&Xi(o,f,"");for(const f in n)Xi(o,f,n[f])}else{const f=o.display;l?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=f)}}const Hs=/\s*!important$/;function Xi(e,t,n){if(Je(n))n.forEach(o=>Xi(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Up(e,t);Hs.test(n)?e.setProperty(er(o),n.replace(Hs,""),"important"):e[o]=n}}const zs=["Webkit","Moz","ms"],Di={};function Up(e,t){const n=Di[t];if(n)return n;let o=gn(t);if(o!=="filter"&&o in e)return Di[t]=o;o=ai(o);for(let l=0;l<zs.length;l++){const f=zs[l]+o;if(f in e)return Di[t]=f}return t}const Vs="http://www.w3.org/1999/xlink";function Kp(e,t,n,o,l){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Vs,t.slice(6,t.length)):e.setAttributeNS(Vs,t,n);else{const f=Kc(t);n==null||f&&!wl(n)?e.removeAttribute(t):e.setAttribute(t,f?"":n)}}function Wp(e,t,n,o,l,f,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,l,f),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let r=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=wl(n):n==null&&a==="string"?(n="",r=!0):a==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function cr(e,t,n,o){e.addEventListener(t,n,o)}function Hp(e,t,n,o){e.removeEventListener(t,n,o)}function zp(e,t,n,o,l=null){const f=e._vei||(e._vei={}),i=f[t];if(o&&i)i.value=o;else{const[r,a]=Vp(t);if(o){const D=f[t]=Gp(o,l);cr(e,r,D,a)}else i&&(Hp(e,r,i,a),f[t]=void 0)}}const js=/(?:Once|Passive|Capture)$/;function Vp(e){let t;if(js.test(e)){t={};let o;for(;o=e.match(js);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):er(e.slice(2)),t]}let Ii=0;const jp=Promise.resolve(),Yp=()=>Ii||(jp.then(()=>Ii=0),Ii=Date.now());function Gp(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;rn(Xp(o,n.value),t,5,[o])};return n.value=e,n.attached=Yp(),n}function Xp(e,t){if(Je(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Ys=/^on[a-z]/,Qp=(e,t,n,o,l=!1,f,i,r,a)=>{t==="class"?Np(e,o,l):t==="style"?Fp(e,n,o):ti(t)?To(t)||zp(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qp(e,t,o,l))?Wp(e,t,o,f,i,r,a):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Kp(e,t,o,l))};function qp(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Ys.test(t)&&rt(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ys.test(t)&&St(n)?!1:t in e}const In="transition",Qr="animation",ya=(e,{slots:t})=>kt(tu,Zp(e),t);ya.displayName="Transition";const Su={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ya.props=$t({},tu.props,Su);const Hn=(e,t=[])=>{Je(e)?e.forEach(n=>n(...t)):e&&e(...t)},Gs=e=>e?Je(e)?e.some(t=>t.length>1):e.length>1:!1;function Zp(e){const t={};for(const y in e)y in Su||(t[y]=e[y]);if(e.css===!1)return t;const{name:n="v",type:o,duration:l,enterFromClass:f=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:a=f,appearActiveClass:D=i,appearToClass:h=r,leaveFromClass:$=`${n}-leave-from`,leaveActiveClass:s=`${n}-leave-active`,leaveToClass:N=`${n}-leave-to`}=e,d=Jp(l),g=d&&d[0],k=d&&d[1],{onBeforeEnter:v,onEnter:S,onEnterCancelled:u,onLeave:I,onLeaveCancelled:T,onBeforeAppear:A=v,onAppear:x=S,onAppearCancelled:b=u}=t,m=(y,w,_)=>{zn(y,w?h:r),zn(y,w?D:i),_&&_()},E=(y,w)=>{y._isLeaving=!1,zn(y,$),zn(y,N),zn(y,s),w&&w()},C=y=>(w,_)=>{const P=y?x:S,L=()=>m(w,y,_);Hn(P,[w,L]),Xs(()=>{zn(w,y?a:f),Pn(w,y?h:r),Gs(P)||Qs(w,o,g,L)})};return $t(t,{onBeforeEnter(y){Hn(v,[y]),Pn(y,f),Pn(y,i)},onBeforeAppear(y){Hn(A,[y]),Pn(y,a),Pn(y,D)},onEnter:C(!1),onAppear:C(!0),onLeave(y,w){y._isLeaving=!0;const _=()=>E(y,w);Pn(y,$),nh(),Pn(y,s),Xs(()=>{!y._isLeaving||(zn(y,$),Pn(y,N),Gs(I)||Qs(y,o,k,_))}),Hn(I,[y,_])},onEnterCancelled(y){m(y,!1),Hn(u,[y])},onAppearCancelled(y){m(y,!0),Hn(b,[y])},onLeaveCancelled(y){E(y),Hn(T,[y])}})}function Jp(e){if(e==null)return null;if(yt(e))return[Pi(e.enter),Pi(e.leave)];{const t=Pi(e);return[t,t]}}function Pi(e){return Gc(e)}function Pn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function zn(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Xs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let eh=0;function Qs(e,t,n,o){const l=e._endId=++eh,f=()=>{l===e._endId&&o()};if(n)return setTimeout(f,n);const{type:i,timeout:r,propCount:a}=th(e,t);if(!i)return o();const D=i+"end";let h=0;const $=()=>{e.removeEventListener(D,s),f()},s=N=>{N.target===e&&++h>=a&&$()};setTimeout(()=>{h<a&&$()},r+1),e.addEventListener(D,s)}function th(e,t){const n=window.getComputedStyle(e),o=d=>(n[d]||"").split(", "),l=o(`${In}Delay`),f=o(`${In}Duration`),i=qs(l,f),r=o(`${Qr}Delay`),a=o(`${Qr}Duration`),D=qs(r,a);let h=null,$=0,s=0;t===In?i>0&&(h=In,$=i,s=f.length):t===Qr?D>0&&(h=Qr,$=D,s=a.length):($=Math.max(i,D),h=$>0?i>D?In:Qr:null,s=h?h===In?f.length:a.length:0);const N=h===In&&/\b(transform|all)(,|$)/.test(o(`${In}Property`).toString());return{type:h,timeout:$,propCount:s,hasTransform:N}}function qs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Zs(n)+Zs(e[o])))}function Zs(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function nh(){return document.body.offsetHeight}const Js=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Je(t)?n=>za(t,n):t};function rh(e){e.target.composing=!0}function el(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Cu={created(e,{modifiers:{lazy:t,trim:n,number:o}},l){e._assign=Js(l);const f=o||l.props&&l.props.type==="number";cr(e,t?"change":"input",i=>{if(i.target.composing)return;let r=e.value;n&&(r=r.trim()),f&&(r=Bi(r)),e._assign(r)}),n&&cr(e,"change",()=>{e.value=e.value.trim()}),t||(cr(e,"compositionstart",rh),cr(e,"compositionend",el),cr(e,"change",el))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:l}},f){if(e._assign=Js(f),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(l||e.type==="number")&&Bi(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},ah=["ctrl","shift","alt","meta"],ih={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ah.some(n=>e[`${n}Key`]&&!t.includes(n))},bt=(e,t)=>(n,...o)=>{for(let l=0;l<t.length;l++){const f=ih[t[l]];if(f&&f(n,t))return}return e(n,...o)},oh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sh=(e,t)=>n=>{if(!("key"in n))return;const o=er(n.key);if(t.some(l=>l===o||oh[l]===o))return e(n)},_t={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):qr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),qr(e,!0),o.enter(e)):o.leave(e,()=>{qr(e,!1)}):qr(e,t))},beforeUnmount(e,{value:t}){qr(e,t)}};function qr(e,t){e.style.display=t?e._vod:"none"}const lh=$t({patchProp:Qp},$p);let tl;function uh(){return tl||(tl=mp(lh))}const dh=(...e)=>{const t=uh().createApp(...e),{mount:n}=t;return t.mount=o=>{const l=ch(o);if(!l)return;const f=t._component;!rt(f)&&!f.render&&!f.template&&(f.template=l.innerHTML),l.innerHTML="";const i=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},t};function ch(e){return St(e)?document.querySelector(e):e}var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ku(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wu={exports:{}};(function(e,t){typeof window<"u"&&function(o,l){e.exports=l()}(Tu,()=>(()=>{var n={"./src/config.ts":(i,r,a)=>{a.r(r),a.d(r,{enableStreamingMode:()=>O,hlsDefaultConfig:()=>P,mergeConfig:()=>c});var D=a("./src/controller/abr-controller.ts"),h=a("./src/controller/audio-stream-controller.ts"),$=a("./src/controller/audio-track-controller.ts"),s=a("./src/controller/subtitle-stream-controller.ts"),N=a("./src/controller/subtitle-track-controller.ts"),d=a("./src/controller/buffer-controller.ts"),g=a("./src/controller/timeline-controller.ts"),k=a("./src/controller/cap-level-controller.ts"),v=a("./src/controller/fps-controller.ts"),S=a("./src/controller/eme-controller.ts"),u=a("./src/controller/cmcd-controller.ts"),I=a("./src/utils/xhr-loader.ts"),T=a("./src/utils/fetch-loader.ts"),A=a("./src/utils/cues.ts"),x=a("./src/utils/mediakeys-helper.ts"),b=a("./src/utils/logger.ts");function m(){return m=Object.assign?Object.assign.bind():function(p){for(var R=1;R<arguments.length;R++){var B=arguments[R];for(var M in B)Object.prototype.hasOwnProperty.call(B,M)&&(p[M]=B[M])}return p},m.apply(this,arguments)}function E(p,R){var B=Object.keys(p);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(p);R&&(M=M.filter(function(K){return Object.getOwnPropertyDescriptor(p,K).enumerable})),B.push.apply(B,M)}return B}function C(p){for(var R=1;R<arguments.length;R++){var B=arguments[R]!=null?arguments[R]:{};R%2?E(Object(B),!0).forEach(function(M){y(p,M,B[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(B)):E(Object(B)).forEach(function(M){Object.defineProperty(p,M,Object.getOwnPropertyDescriptor(B,M))})}return p}function y(p,R,B){return R=w(R),R in p?Object.defineProperty(p,R,{value:B,enumerable:!0,configurable:!0,writable:!0}):p[R]=B,p}function w(p){var R=_(p,"string");return typeof R=="symbol"?R:String(R)}function _(p,R){if(typeof p!="object"||p===null)return p;var B=p[Symbol.toPrimitive];if(B!==void 0){var M=B.call(p,R||"default");if(typeof M!="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return(R==="string"?String:Number)(p)}var P=C(C({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:I.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:D.default,bufferController:d.default,capLevelController:k.default,fpsController:v.default,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:x.requestMediaKeySystemAccess,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0},L()),{},{subtitleStreamController:s.SubtitleStreamController,subtitleTrackController:N.default,timelineController:g.TimelineController,audioStreamController:h.default,audioTrackController:$.default,emeController:S.default,cmcdController:u.default});function L(){return{cueHandler:A.default,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function c(p,R){if((R.liveSyncDurationCount||R.liveMaxLatencyDurationCount)&&(R.liveSyncDuration||R.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(R.liveMaxLatencyDurationCount!==void 0&&(R.liveSyncDurationCount===void 0||R.liveMaxLatencyDurationCount<=R.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(R.liveMaxLatencyDuration!==void 0&&(R.liveSyncDuration===void 0||R.liveMaxLatencyDuration<=R.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');return m({},p,R)}function O(p){var R=p.loader;if(R!==T.default&&R!==I.default)b.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"),p.progressive=!1;else{var B=(0,T.fetchSupported)();B&&(p.loader=T.default,p.progressive=!0,p.enableSoftwareAES=!0,b.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))}}},"./src/controller/abr-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>I});var D=a("./src/polyfills/number.ts"),h=a("./src/utils/ewma-bandwidth-estimator.ts"),$=a("./src/events.ts"),s=a("./src/errors.ts"),N=a("./src/types/loader.ts"),d=a("./src/utils/logger.ts");function g(T,A){for(var x=0;x<A.length;x++){var b=A[x];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(T,v(b.key),b)}}function k(T,A,x){return A&&g(T.prototype,A),x&&g(T,x),Object.defineProperty(T,"prototype",{writable:!1}),T}function v(T){var A=S(T,"string");return typeof A=="symbol"?A:String(A)}function S(T,A){if(typeof T!="object"||T===null)return T;var x=T[Symbol.toPrimitive];if(x!==void 0){var b=x.call(T,A||"default");if(typeof b!="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)(T)}var u=function(){function T(x){this.hls=void 0,this.lastLoadedFragLevel=0,this._nextAutoLevel=-1,this.timer=void 0,this.onCheck=this._abandonRulesCheck.bind(this),this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this.hls=x;var b=x.config;this.bwEstimator=new h.default(b.abrEwmaSlowVoD,b.abrEwmaFastVoD,b.abrEwmaDefaultEstimate),this.registerListeners()}var A=T.prototype;return A.registerListeners=function(){var b=this.hls;b.on($.Events.FRAG_LOADING,this.onFragLoading,this),b.on($.Events.FRAG_LOADED,this.onFragLoaded,this),b.on($.Events.FRAG_BUFFERED,this.onFragBuffered,this),b.on($.Events.LEVEL_LOADED,this.onLevelLoaded,this),b.on($.Events.ERROR,this.onError,this)},A.unregisterListeners=function(){var b=this.hls;b.off($.Events.FRAG_LOADING,this.onFragLoading,this),b.off($.Events.FRAG_LOADED,this.onFragLoaded,this),b.off($.Events.FRAG_BUFFERED,this.onFragBuffered,this),b.off($.Events.LEVEL_LOADED,this.onLevelLoaded,this),b.off($.Events.ERROR,this.onError,this)},A.destroy=function(){this.unregisterListeners(),this.clearTimer(),this.hls=this.onCheck=null,this.fragCurrent=this.partCurrent=null},A.onFragLoading=function(b,m){var E=m.frag;if(E.type===N.PlaylistLevelType.MAIN&&!this.timer){var C;this.fragCurrent=E,this.partCurrent=(C=m.part)!=null?C:null,this.timer=self.setInterval(this.onCheck,100)}},A.onLevelLoaded=function(b,m){var E=this.hls.config;m.details.live?this.bwEstimator.update(E.abrEwmaSlowLive,E.abrEwmaFastLive):this.bwEstimator.update(E.abrEwmaSlowVoD,E.abrEwmaFastVoD)},A._abandonRulesCheck=function(){var b=this.fragCurrent,m=this.partCurrent,E=this.hls,C=E.autoLevelEnabled,y=E.media;if(!(!b||!y)){var w=m?m.stats:b.stats,_=m?m.duration:b.duration;if(w.aborted||w.loaded&&w.loaded===w.total||b.level===0){this.clearTimer(),this._nextAutoLevel=-1;return}if(!(!C||y.paused||!y.playbackRate||!y.readyState)){var P=E.mainForwardBufferInfo;if(P!==null){var L=performance.now()-w.loading.start,c=Math.abs(y.playbackRate);if(!(L<=500*_/c)){var O=w.loaded&&w.loading.first,p=this.bwEstimator.getEstimate(),R=E.levels,B=E.minAutoLevel,M=R[b.level],K=w.total||Math.max(w.loaded,Math.round(_*M.maxBitrate/8)),V=O?w.loaded*1e3/L:0,z=V?(K-w.loaded)/V:K*8/p,G=P.len/c;if(!(z<=G)){var Q=Number.POSITIVE_INFINITY,ee;for(ee=b.level-1;ee>B;ee--){var te=R[ee].maxBitrate;if(Q=V?_*te/(8*.8*V):_*te/p,Q<G)break}Q>=z||(d.logger.warn("Fragment "+b.sn+(m?" part "+m.index:"")+" of level "+b.level+" is loading too slowly and will cause an underbuffer; aborting and switching to level "+ee+`
      Current BW estimate: `+((0,D.isFiniteNumber)(p)?(p/1024).toFixed(3):"Unknown")+` Kb/s
      Estimated load time for current fragment: `+z.toFixed(3)+` s
      Estimated load time for the next fragment: `+Q.toFixed(3)+` s
      Time to underbuffer: `+G.toFixed(3)+" s"),E.nextLoadLevel=ee,O&&this.bwEstimator.sample(L,w.loaded),this.clearTimer(),(b.loader||b.keyLoader)&&(this.fragCurrent=this.partCurrent=null,b.abortRequests()),E.trigger($.Events.FRAG_LOAD_EMERGENCY_ABORTED,{frag:b,part:m,stats:w}))}}}}}},A.onFragLoaded=function(b,m){var E=m.frag,C=m.part;if(E.type===N.PlaylistLevelType.MAIN&&(0,D.isFiniteNumber)(E.sn)){var y=C?C.stats:E.stats,w=C?C.duration:E.duration;if(this.clearTimer(),this.lastLoadedFragLevel=E.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var _=this.hls.levels[E.level],P=(_.loaded?_.loaded.bytes:0)+y.loaded,L=(_.loaded?_.loaded.duration:0)+w;_.loaded={bytes:P,duration:L},_.realBitrate=Math.round(8*P/L)}if(E.bitrateTest){var c={stats:y,frag:E,part:C,id:E.type};this.onFragBuffered($.Events.FRAG_BUFFERED,c)}}},A.onFragBuffered=function(b,m){var E=m.frag,C=m.part,y=C?C.stats:E.stats;if(!y.aborted&&!(E.type!==N.PlaylistLevelType.MAIN||E.sn==="initSegment")){var w=y.parsing.end-y.loading.start;this.bwEstimator.sample(w,y.loaded),y.bwEstimate=this.bwEstimator.getEstimate(),E.bitrateTest?this.bitrateTestDelay=w/1e3:this.bitrateTestDelay=0}},A.onError=function(b,m){var E;if(((E=m.frag)===null||E===void 0?void 0:E.type)===N.PlaylistLevelType.MAIN){if(m.type===s.ErrorTypes.KEY_SYSTEM_ERROR){this.clearTimer();return}switch(m.details){case s.ErrorDetails.FRAG_LOAD_ERROR:case s.ErrorDetails.FRAG_LOAD_TIMEOUT:case s.ErrorDetails.KEY_LOAD_ERROR:case s.ErrorDetails.KEY_LOAD_TIMEOUT:this.clearTimer();break}}},A.clearTimer=function(){self.clearInterval(this.timer),this.timer=void 0},A.getNextABRAutoLevel=function(){var b=this.fragCurrent,m=this.partCurrent,E=this.hls,C=E.maxAutoLevel,y=E.config,w=E.minAutoLevel,_=E.media,P=m?m.duration:b?b.duration:0,L=_&&_.playbackRate!==0?Math.abs(_.playbackRate):1,c=this.bwEstimator?this.bwEstimator.getEstimate():y.abrEwmaDefaultEstimate,O=E.mainForwardBufferInfo,p=(O?O.len:0)/L,R=this.findBestLevel(c,w,C,p,y.abrBandWidthFactor,y.abrBandWidthUpFactor);if(R>=0)return R;d.logger.trace((p?"rebuffering expected":"buffer is empty")+", finding optimal quality level");var B=P?Math.min(P,y.maxStarvationDelay):y.maxStarvationDelay,M=y.abrBandWidthFactor,K=y.abrBandWidthUpFactor;if(!p){var V=this.bitrateTestDelay;if(V){var z=P?Math.min(P,y.maxLoadingDelay):y.maxLoadingDelay;B=z-V,d.logger.trace("bitrate test took "+Math.round(1e3*V)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*B)+" ms"),M=K=1}}return R=this.findBestLevel(c,w,C,p+B,M,K),Math.max(R,0)},A.findBestLevel=function(b,m,E,C,y,w){for(var _,P=this.fragCurrent,L=this.partCurrent,c=this.lastLoadedFragLevel,O=this.hls.levels,p=O[c],R=!!(p!=null&&(_=p.details)!==null&&_!==void 0&&_.live),B=p==null?void 0:p.codecSet,M=L?L.duration:P?P.duration:0,K=E;K>=m;K--){var V=O[K];if(!(!V||B&&V.codecSet!==B)){var z=V.details,G=(L?z==null?void 0:z.partTarget:z==null?void 0:z.averagetargetduration)||M,Q=void 0;K<=c?Q=y*b:Q=w*b;var ee=O[K].maxBitrate,te=ee*G/Q;if(d.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+K+"/"+Math.round(Q)+"/"+ee+"/"+G+"/"+C+"/"+te),Q>ee&&(te===0||!(0,D.isFiniteNumber)(te)||R&&!this.bitrateTestDelay||te<C))return K}}return-1},k(T,[{key:"nextAutoLevel",get:function(){var b=this._nextAutoLevel,m=this.bwEstimator;if(b!==-1&&!m.canEstimate())return b;var E=this.getNextABRAutoLevel();return b!==-1&&this.hls.levels[E].loadError?b:(b!==-1&&(E=Math.min(b,E)),E)},set:function(b){this._nextAutoLevel=b}}]),T}();const I=u},"./src/controller/audio-stream-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>y});var D=a("./src/polyfills/number.ts"),h=a("./src/controller/base-stream-controller.ts"),$=a("./src/events.ts"),s=a("./src/utils/buffer-helper.ts"),N=a("./src/controller/fragment-tracker.ts"),d=a("./src/types/level.ts"),g=a("./src/types/loader.ts"),k=a("./src/loader/fragment.ts"),v=a("./src/demux/chunk-cache.ts"),S=a("./src/demux/transmuxer-interface.ts"),u=a("./src/types/transmuxer.ts"),I=a("./src/controller/fragment-finders.ts"),T=a("./src/utils/discontinuities.ts"),A=a("./src/errors.ts");function x(){return x=Object.assign?Object.assign.bind():function(w){for(var _=1;_<arguments.length;_++){var P=arguments[_];for(var L in P)Object.prototype.hasOwnProperty.call(P,L)&&(w[L]=P[L])}return w},x.apply(this,arguments)}function b(w,_){w.prototype=Object.create(_.prototype),w.prototype.constructor=w,m(w,_)}function m(w,_){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(L,c){return L.__proto__=c,L},m(w,_)}var E=100,C=function(w){b(_,w);function _(L,c,O){var p;return p=w.call(this,L,c,O,"[audio-stream-controller]")||this,p.videoBuffer=null,p.videoTrackCC=-1,p.waitingVideoCC=-1,p.audioSwitch=!1,p.trackId=-1,p.waitingData=null,p.mainDetails=null,p.bufferFlushed=!1,p.cachedTrackLoadedData=null,p._registerListeners(),p}var P=_.prototype;return P.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},P._registerListeners=function(){var c=this.hls;c.on($.Events.MEDIA_ATTACHED,this.onMediaAttached,this),c.on($.Events.MEDIA_DETACHING,this.onMediaDetaching,this),c.on($.Events.MANIFEST_LOADING,this.onManifestLoading,this),c.on($.Events.LEVEL_LOADED,this.onLevelLoaded,this),c.on($.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),c.on($.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),c.on($.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),c.on($.Events.ERROR,this.onError,this),c.on($.Events.BUFFER_RESET,this.onBufferReset,this),c.on($.Events.BUFFER_CREATED,this.onBufferCreated,this),c.on($.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),c.on($.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),c.on($.Events.FRAG_BUFFERED,this.onFragBuffered,this)},P._unregisterListeners=function(){var c=this.hls;c.off($.Events.MEDIA_ATTACHED,this.onMediaAttached,this),c.off($.Events.MEDIA_DETACHING,this.onMediaDetaching,this),c.off($.Events.MANIFEST_LOADING,this.onManifestLoading,this),c.off($.Events.LEVEL_LOADED,this.onLevelLoaded,this),c.off($.Events.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),c.off($.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),c.off($.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),c.off($.Events.ERROR,this.onError,this),c.off($.Events.BUFFER_RESET,this.onBufferReset,this),c.off($.Events.BUFFER_CREATED,this.onBufferCreated,this),c.off($.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),c.off($.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),c.off($.Events.FRAG_BUFFERED,this.onFragBuffered,this)},P.onInitPtsFound=function(c,O){var p=O.frag,R=O.id,B=O.initPTS;if(R==="main"){var M=p.cc;this.initPTS[p.cc]=B,this.log("InitPTS for cc: "+M+" found from main: "+B),this.videoTrackCC=M,this.state===h.State.WAITING_INIT_PTS&&this.tick()}},P.startLoad=function(c){if(!this.levels){this.startPosition=c,this.state=h.State.STOPPED;return}var O=this.lastCurrentTime;this.stopLoad(),this.setInterval(E),this.fragLoadError=0,O>0&&c===-1?(this.log("Override startPosition with lastCurrentTime @"+O.toFixed(3)),c=O,this.state=h.State.IDLE):(this.loadedmetadata=!1,this.state=h.State.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=c,this.tick()},P.doTick=function(){switch(this.state){case h.State.IDLE:this.doTickIdle();break;case h.State.WAITING_TRACK:{var c,O=this.levels,p=this.trackId,R=O==null||(c=O[p])===null||c===void 0?void 0:c.details;if(R){if(this.waitForCdnTuneIn(R))break;this.state=h.State.WAITING_INIT_PTS}break}case h.State.FRAG_LOADING_WAITING_RETRY:{var B,M=performance.now(),K=this.retryDate;(!K||M>=K||(B=this.media)!==null&&B!==void 0&&B.seeking)&&(this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.trackId),this.state=h.State.IDLE);break}case h.State.WAITING_INIT_PTS:{var V=this.waitingData;if(V){var z=V.frag,G=V.part,Q=V.cache,ee=V.complete;if(this.initPTS[z.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=h.State.FRAG_LOADING;var te=Q.flush(),se={frag:z,part:G,payload:te,networkDetails:null};this._handleFragmentLoadProgress(se),ee&&w.prototype._handleFragmentLoadComplete.call(this,se)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log("Waiting fragment cc ("+z.cc+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var ue=this.getLoadPosition(),q=s.BufferHelper.bufferInfo(this.mediaBuffer,ue,this.config.maxBufferHole),ne=(0,I.fragmentWithinToleranceTest)(q.end,this.config.maxFragLookUpTolerance,z);ne<0&&(this.log("Waiting fragment cc ("+z.cc+") @ "+z.start+" cancelled because another fragment at "+q.end+" is needed"),this.clearWaitingFragment())}}else this.state=h.State.IDLE}}this.onTickEnd()},P.clearWaitingFragment=function(){var c=this.waitingData;c&&(this.fragmentTracker.removeFragment(c.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=h.State.IDLE)},P.resetLoadingState=function(){this.clearWaitingFragment(),w.prototype.resetLoadingState.call(this)},P.onTickEnd=function(){var c=this.media;!c||!c.readyState||(this.lastCurrentTime=c.currentTime)},P.doTickIdle=function(){var c=this.hls,O=this.levels,p=this.media,R=this.trackId,B=c.config;if(!(!O||!O[R])&&!(!p&&(this.startFragRequested||!B.startFragPrefetch))){var M=O[R],K=M.details;if(!K||K.live&&this.levelLastLoaded!==R||this.waitForCdnTuneIn(K)){this.state=h.State.WAITING_TRACK;return}var V=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&V&&(this.bufferFlushed=!1,this.afterBufferFlushed(V,k.ElementaryStreamTypes.AUDIO,g.PlaylistLevelType.AUDIO));var z=this.getFwdBufferInfo(V,g.PlaylistLevelType.AUDIO);if(z!==null){var G=this.audioSwitch;if(!G&&this._streamEnded(z,K)){c.trigger($.Events.BUFFER_EOS,{type:"audio"}),this.state=h.State.ENDED;return}var Q=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,g.PlaylistLevelType.MAIN),ee=z.len,te=this.getMaxBufferLength(Q==null?void 0:Q.len);if(!(ee>=te&&!G)){var se=K.fragments,ue=se[0].start,q=z.end;if(G&&p){var ne=this.getLoadPosition();q=ne,K.PTSKnown&&ne<ue&&(z.end>ue||z.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),p.currentTime=ue+.05)}if(!(Q&&q>Q.end+K.targetduration)&&!((!Q||!Q.len)&&z.len)){var de=this.getNextFragment(q,K);if(!de){this.bufferFlushed=!0;return}this.loadFragment(de,K,q)}}}}},P.getMaxBufferLength=function(c){var O=w.prototype.getMaxBufferLength.call(this);return c?Math.max(O,c):O},P.onMediaDetaching=function(){this.videoBuffer=null,w.prototype.onMediaDetaching.call(this)},P.onAudioTracksUpdated=function(c,O){var p=O.audioTracks;this.resetTransmuxer(),this.levels=p.map(function(R){return new d.Level(R)})},P.onAudioTrackSwitching=function(c,O){var p=!!O.url;this.trackId=O.id;var R=this.fragCurrent;R&&R.abortRequests(),this.fragCurrent=null,this.clearWaitingFragment(),p?this.setInterval(E):this.resetTransmuxer(),p?(this.audioSwitch=!0,this.state=h.State.IDLE):this.state=h.State.STOPPED,this.tick()},P.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=!1},P.onLevelLoaded=function(c,O){this.mainDetails=O.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger($.Events.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)},P.onAudioTrackLoaded=function(c,O){var p;if(this.mainDetails==null){this.cachedTrackLoadedData=O;return}var R=this.levels,B=O.details,M=O.id;if(!R){this.warn("Audio tracks were reset while loading level "+M);return}this.log("Track "+M+" loaded ["+B.startSN+","+B.endSN+"],duration:"+B.totalduration);var K=R[M],V=0;if(B.live||(p=K.details)!==null&&p!==void 0&&p.live){var z=this.mainDetails;if(B.fragments[0]||(B.deltaUpdateFailed=!0),B.deltaUpdateFailed||!z)return;!K.details&&B.hasProgramDateTime&&z.hasProgramDateTime?((0,T.alignMediaPlaylistByPDT)(B,z),V=B.fragments[0].start):V=this.alignPlaylists(B,K.details)}K.details=B,this.levelLastLoaded=M,!this.startFragRequested&&(this.mainDetails||!B.live)&&this.setStartPosition(K.details,V),this.state===h.State.WAITING_TRACK&&!this.waitForCdnTuneIn(B)&&(this.state=h.State.IDLE),this.tick()},P._handleFragmentLoadProgress=function(c){var O,p=c.frag,R=c.part,B=c.payload,M=this.config,K=this.trackId,V=this.levels;if(!V){this.warn("Audio tracks were reset while fragment load was in progress. Fragment "+p.sn+" of level "+p.level+" will not be buffered");return}var z=V[K];console.assert(z,"Audio track is defined on fragment load progress");var G=z.details;console.assert(G,"Audio track details are defined on fragment load progress");var Q=M.defaultAudioCodec||z.audioCodec||"mp4a.40.2",ee=this.transmuxer;ee||(ee=this.transmuxer=new S.default(this.hls,g.PlaylistLevelType.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));var te=this.initPTS[p.cc],se=(O=p.initSegment)===null||O===void 0?void 0:O.data;if(te!==void 0){var ue=!1,q=R?R.index:-1,ne=q!==-1,de=new u.ChunkMetadata(p.level,p.sn,p.stats.chunkCount,B.byteLength,q,ne);ee.push(B,se,Q,"",p,R,G.totalduration,ue,de,te)}else{this.log("Unknown video PTS for cc "+p.cc+", waiting for video PTS before demuxing audio frag "+p.sn+" of ["+G.startSN+" ,"+G.endSN+"],track "+K);var le=this.waitingData=this.waitingData||{frag:p,part:R,cache:new v.default,complete:!1},pe=le.cache;pe.push(new Uint8Array(B)),this.waitingVideoCC=this.videoTrackCC,this.state=h.State.WAITING_INIT_PTS}},P._handleFragmentLoadComplete=function(c){if(this.waitingData){this.waitingData.complete=!0;return}w.prototype._handleFragmentLoadComplete.call(this,c)},P.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},P.onBufferCreated=function(c,O){var p=O.tracks.audio;p&&(this.mediaBuffer=p.buffer||null),O.tracks.video&&(this.videoBuffer=O.tracks.video.buffer||null)},P.onFragBuffered=function(c,O){var p=O.frag,R=O.part;if(p.type!==g.PlaylistLevelType.AUDIO){if(!this.loadedmetadata&&p.type===g.PlaylistLevelType.MAIN){var B;(B=this.videoBuffer||this.media)!==null&&B!==void 0&&B.buffered.length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(p)){this.warn("Fragment "+p.sn+(R?" p: "+R.index:"")+" of level "+p.level+" finished buffering, but was aborted. state: "+this.state+", audioSwitch: "+this.audioSwitch);return}p.sn!=="initSegment"&&(this.fragPrevious=p,this.audioSwitch&&(this.audioSwitch=!1,this.hls.trigger($.Events.AUDIO_TRACK_SWITCHED,{id:this.trackId}))),this.fragBufferedComplete(p,R)},P.onError=function(c,O){if(O.type===A.ErrorTypes.KEY_SYSTEM_ERROR){this.onFragmentOrKeyLoadError(g.PlaylistLevelType.AUDIO,O);return}switch(O.details){case A.ErrorDetails.FRAG_LOAD_ERROR:case A.ErrorDetails.FRAG_LOAD_TIMEOUT:case A.ErrorDetails.FRAG_PARSING_ERROR:case A.ErrorDetails.KEY_LOAD_ERROR:case A.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(g.PlaylistLevelType.AUDIO,O);break;case A.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case A.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:this.state!==h.State.ERROR&&this.state!==h.State.STOPPED&&(this.state=O.fatal?h.State.ERROR:h.State.IDLE,this.warn(O.details+" while loading frag, switching to "+this.state+" state"));break;case A.ErrorDetails.BUFFER_FULL_ERROR:if(O.parent==="audio"&&(this.state===h.State.PARSING||this.state===h.State.PARSED)){var p=!0,R=this.getFwdBufferInfo(this.mediaBuffer,g.PlaylistLevelType.AUDIO);R&&R.len>.5&&(p=!this.reduceMaxBufferLength(R.len)),p&&(this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,w.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.resetLoadingState()}break}},P.onBufferFlushed=function(c,O){var p=O.type;p===k.ElementaryStreamTypes.AUDIO&&(this.bufferFlushed=!0,this.state===h.State.ENDED&&(this.state=h.State.IDLE))},P._handleTransmuxComplete=function(c){var O,p="audio",R=this.hls,B=c.remuxResult,M=c.chunkMeta,K=this.getCurrentContext(M);if(!K){this.warn("The loading context changed while buffering fragment "+M.sn+" of level "+M.level+". This chunk will not be buffered."),this.resetStartWhenNotLoaded(M.level);return}var V=K.frag,z=K.part,G=K.level.details,Q=B.audio,ee=B.text,te=B.id3,se=B.initSegment;if(!(this.fragContextChanged(V)||!G)){if(this.state=h.State.PARSING,this.audioSwitch&&Q&&this.completeAudioSwitch(),se!=null&&se.tracks&&(this._bufferInitSegment(se.tracks,V,M),R.trigger($.Events.FRAG_PARSING_INIT_SEGMENT,{frag:V,id:p,tracks:se.tracks})),Q){var ue=Q.startPTS,q=Q.endPTS,ne=Q.startDTS,de=Q.endDTS;z&&(z.elementaryStreams[k.ElementaryStreamTypes.AUDIO]={startPTS:ue,endPTS:q,startDTS:ne,endDTS:de}),V.setElementaryStreamInfo(k.ElementaryStreamTypes.AUDIO,ue,q,ne,de),this.bufferFragmentData(Q,V,z,M)}if(te!=null&&(O=te.samples)!==null&&O!==void 0&&O.length){var le=x({id:p,frag:V,details:G},te);R.trigger($.Events.FRAG_PARSING_METADATA,le)}if(ee){var pe=x({id:p,frag:V,details:G},ee);R.trigger($.Events.FRAG_PARSING_USERDATA,pe)}}},P._bufferInitSegment=function(c,O,p){if(this.state===h.State.PARSING){c.video&&delete c.video;var R=c.audio;if(!!R){R.levelCodec=R.codec,R.id="audio",this.log("Init audio buffer, container:"+R.container+", codecs[parsed]=["+R.codec+"]"),this.hls.trigger($.Events.BUFFER_CODECS,c);var B=R.initSegment;if(B!=null&&B.byteLength){var M={type:"audio",frag:O,part:null,chunkMeta:p,parent:O.type,data:B};this.hls.trigger($.Events.BUFFER_APPENDING,M)}this.tick()}}},P.loadFragment=function(c,O,p){var R=this.fragmentTracker.getState(c);this.fragCurrent=c,(this.audioSwitch||R===N.FragmentState.NOT_LOADED||R===N.FragmentState.PARTIAL)&&(c.sn==="initSegment"?this._loadInitSegment(c,O):O.live&&!(0,D.isFiniteNumber)(this.initPTS[c.cc])?(this.log("Waiting for video PTS in continuity counter "+c.cc+" of live stream before loading audio fragment "+c.sn+" of level "+this.trackId),this.state=h.State.WAITING_INIT_PTS):(this.startFragRequested=!0,w.prototype.loadFragment.call(this,c,O,p)))},P.completeAudioSwitch=function(){var c=this.hls,O=this.media,p=this.trackId;O&&(this.log("Switching audio track : flushing all audio"),w.prototype.flushMainBuffer.call(this,0,Number.POSITIVE_INFINITY,"audio")),this.audioSwitch=!1,c.trigger($.Events.AUDIO_TRACK_SWITCHED,{id:p})},_}(h.default);const y=C},"./src/controller/audio-track-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>I});var D=a("./src/events.ts"),h=a("./src/errors.ts"),$=a("./src/controller/base-playlist-controller.ts"),s=a("./src/types/loader.ts");function N(T,A){for(var x=0;x<A.length;x++){var b=A[x];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(T,g(b.key),b)}}function d(T,A,x){return A&&N(T.prototype,A),x&&N(T,x),Object.defineProperty(T,"prototype",{writable:!1}),T}function g(T){var A=k(T,"string");return typeof A=="symbol"?A:String(A)}function k(T,A){if(typeof T!="object"||T===null)return T;var x=T[Symbol.toPrimitive];if(x!==void 0){var b=x.call(T,A||"default");if(typeof b!="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)(T)}function v(T,A){T.prototype=Object.create(A.prototype),T.prototype.constructor=T,S(T,A)}function S(T,A){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,m){return b.__proto__=m,b},S(T,A)}var u=function(T){v(A,T);function A(b){var m;return m=T.call(this,b,"[audio-track-controller]")||this,m.tracks=[],m.groupId=null,m.tracksInGroup=[],m.trackId=-1,m.trackName="",m.selectDefaultTrack=!0,m.registerListeners(),m}var x=A.prototype;return x.registerListeners=function(){var m=this.hls;m.on(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),m.on(D.Events.MANIFEST_PARSED,this.onManifestParsed,this),m.on(D.Events.LEVEL_LOADING,this.onLevelLoading,this),m.on(D.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),m.on(D.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),m.on(D.Events.ERROR,this.onError,this)},x.unregisterListeners=function(){var m=this.hls;m.off(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),m.off(D.Events.MANIFEST_PARSED,this.onManifestParsed,this),m.off(D.Events.LEVEL_LOADING,this.onLevelLoading,this),m.off(D.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),m.off(D.Events.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),m.off(D.Events.ERROR,this.onError,this)},x.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,T.prototype.destroy.call(this)},x.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.trackName="",this.selectDefaultTrack=!0},x.onManifestParsed=function(m,E){this.tracks=E.audioTracks||[]},x.onAudioTrackLoaded=function(m,E){var C=E.id,y=E.details,w=this.tracksInGroup[C];if(!w){this.warn("Invalid audio track id "+C);return}var _=w.details;w.details=E.details,this.log("audioTrack "+C+" loaded ["+y.startSN+"-"+y.endSN+"]"),C===this.trackId&&(this.retryCount=0,this.playlistLoaded(C,E,_))},x.onLevelLoading=function(m,E){this.switchLevel(E.level)},x.onLevelSwitching=function(m,E){this.switchLevel(E.level)},x.switchLevel=function(m){var E=this.hls.levels[m];if(!!(E!=null&&E.audioGroupIds)){var C=E.audioGroupIds[E.urlId];if(this.groupId!==C){this.groupId=C;var y=this.tracks.filter(function(_){return!C||_.groupId===C});this.selectDefaultTrack&&!y.some(function(_){return _.default})&&(this.selectDefaultTrack=!1),this.tracksInGroup=y;var w={audioTracks:y};this.log("Updating audio tracks, "+y.length+' track(s) found in "'+C+'" group-id'),this.hls.trigger(D.Events.AUDIO_TRACKS_UPDATED,w),this.selectInitialTrack()}}},x.onError=function(m,E){T.prototype.onError.call(this,m,E),!(E.fatal||!E.context)&&E.context.type===s.PlaylistContextType.AUDIO_TRACK&&E.context.id===this.trackId&&E.context.groupId===this.groupId&&this.retryLoadingOrFail(E)},x.setAudioTrack=function(m){var E=this.tracksInGroup;if(m<0||m>=E.length){this.warn("Invalid id passed to audio-track controller");return}this.clearTimer();var C=E[this.trackId];this.log("Now switching to audio-track index "+m);var y=E[m],w=y.id,_=y.groupId,P=_===void 0?"":_,L=y.name,c=y.type,O=y.url;if(this.trackId=m,this.trackName=L,this.selectDefaultTrack=!1,this.hls.trigger(D.Events.AUDIO_TRACK_SWITCHING,{id:w,groupId:P,name:L,type:c,url:O}),!(y.details&&!y.details.live)){var p=this.switchParams(y.url,C==null?void 0:C.details);this.loadPlaylist(p)}},x.selectInitialTrack=function(){var m=this.tracksInGroup;console.assert(m.length,"Initial audio track should be selected when tracks are known");var E=this.trackName,C=this.findTrackId(E)||this.findTrackId();C!==-1?this.setAudioTrack(C):(this.warn("No track found for running audio group-ID: "+this.groupId),this.hls.trigger(D.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))},x.findTrackId=function(m){for(var E=this.tracksInGroup,C=0;C<E.length;C++){var y=E[C];if((!this.selectDefaultTrack||y.default)&&(!m||m===y.name))return y.id}return-1},x.loadPlaylist=function(m){T.prototype.loadPlaylist.call(this);var E=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(E)){var C=E.id,y=E.groupId,w=E.url;if(m)try{w=m.addDirectives(w)}catch(_){this.warn("Could not construct new URL with HLS Delivery Directives: "+_)}this.log("loading audio-track playlist for id: "+C),this.clearTimer(),this.hls.trigger(D.Events.AUDIO_TRACK_LOADING,{url:w,id:C,groupId:y,deliveryDirectives:m||null})}},d(A,[{key:"audioTracks",get:function(){return this.tracksInGroup}},{key:"audioTrack",get:function(){return this.trackId},set:function(m){this.selectDefaultTrack=!1,this.setAudioTrack(m)}}]),A}($.default);const I=u},"./src/controller/base-playlist-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>N});var D=a("./src/types/level.ts"),h=a("./src/controller/level-helper.ts"),$=a("./src/utils/logger.ts"),s=a("./src/errors.ts"),N=function(){function d(k,v){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.retryCount=0,this.log=void 0,this.warn=void 0,this.log=$.logger.log.bind($.logger,v+":"),this.warn=$.logger.warn.bind($.logger,v+":"),this.hls=k}var g=d.prototype;return g.destroy=function(){this.clearTimer(),this.hls=this.log=this.warn=null},g.onError=function(v,S){S.fatal&&(S.type===s.ErrorTypes.NETWORK_ERROR||S.type===s.ErrorTypes.KEY_SYSTEM_ERROR)&&this.stopLoad()},g.clearTimer=function(){clearTimeout(this.timer),this.timer=-1},g.startLoad=function(){this.canLoad=!0,this.retryCount=0,this.requestScheduled=-1,this.loadPlaylist()},g.stopLoad=function(){this.canLoad=!1,this.clearTimer()},g.switchParams=function(v,S){var u=S==null?void 0:S.renditionReports;if(u)for(var I=0;I<u.length;I++){var T=u[I],A=void 0;try{A=new self.URL(T.URI,S.url).href}catch(E){$.logger.warn("Could not construct new URL for Rendition Report: "+E),A=T.URI||""}if(A===v.slice(-A.length)){var x=parseInt(T["LAST-MSN"])||(S==null?void 0:S.lastPartSn),b=parseInt(T["LAST-PART"])||(S==null?void 0:S.lastPartIndex);if(this.hls.config.lowLatencyMode){var m=Math.min(S.age-S.partTarget,S.targetduration);b>=0&&m>S.partTarget&&(b+=1)}return new D.HlsUrlParameters(x,b>=0?b:void 0,D.HlsSkip.No)}}},g.loadPlaylist=function(v){this.requestScheduled===-1&&(this.requestScheduled=self.performance.now())},g.shouldLoadTrack=function(v){return this.canLoad&&v&&!!v.url&&(!v.details||v.details.live)},g.playlistLoaded=function(v,S,u){var I=this,T=S.details,A=S.stats,x=self.performance.now(),b=A.loading.first?Math.max(0,x-A.loading.first):0;if(T.advancedDateTime=Date.now()-b,T.live||u!=null&&u.live){if(T.reloaded(u),u&&this.log("live playlist "+v+" "+(T.advanced?"REFRESHED "+T.lastPartSn+"-"+T.lastPartIndex:"MISSED")),u&&T.fragments.length>0&&(0,h.mergeDetails)(u,T),!this.canLoad||!T.live)return;var m,E=void 0,C=void 0;if(T.canBlockReload&&T.endSN&&T.advanced){var y=this.hls.config.lowLatencyMode,w=T.lastPartSn,_=T.endSN,P=T.lastPartIndex,L=P!==-1,c=w===_,O=y?0:P;L?(E=c?_+1:w,C=c?O:P+1):E=_+1;var p=T.age,R=p+T.ageHeader,B=Math.min(R-T.partTarget,T.targetduration*1.5);if(B>0){if(u&&B>u.tuneInGoal)this.warn("CDN Tune-in goal increased from: "+u.tuneInGoal+" to: "+B+" with playlist age: "+T.age),B=0;else{var M=Math.floor(B/T.targetduration);if(E+=M,C!==void 0){var K=Math.round(B%T.targetduration/T.partTarget);C+=K}this.log("CDN Tune-in age: "+T.ageHeader+"s last advanced "+p.toFixed(2)+"s goal: "+B+" skip sn "+M+" to part "+C)}T.tuneInGoal=B}if(m=this.getDeliveryDirectives(T,S.deliveryDirectives,E,C),y||!c){this.loadPlaylist(m);return}}else m=this.getDeliveryDirectives(T,S.deliveryDirectives,E,C);var V=this.hls.mainForwardBufferInfo,z=V?V.end-V.len:0,G=(T.edge-z)*1e3,Q=(0,h.computeReloadInterval)(T,G);T.updated?x>this.requestScheduled+Q&&(this.requestScheduled=A.loading.start):this.requestScheduled=-1,E!==void 0&&T.canBlockReload?this.requestScheduled=A.loading.first+Q-(T.partTarget*1e3||1e3):this.requestScheduled=(this.requestScheduled===-1?x:this.requestScheduled)+Q;var ee=this.requestScheduled-x;ee=Math.max(0,ee),this.log("reload live playlist "+v+" in "+Math.round(ee)+" ms"),this.timer=self.setTimeout(function(){return I.loadPlaylist(m)},ee)}else this.clearTimer()},g.getDeliveryDirectives=function(v,S,u,I){var T=(0,D.getSkipValue)(v,u);return S!=null&&S.skip&&v.deltaUpdateFailed&&(u=S.msn,I=S.part,T=D.HlsSkip.No),new D.HlsUrlParameters(u,I,T)},g.retryLoadingOrFail=function(v){var S=this,u=this.hls.config,I=this.retryCount<u.levelLoadingMaxRetry;if(I){var T;if(this.requestScheduled=-1,this.retryCount++,v.details.indexOf("LoadTimeOut")>-1&&(T=v.context)!==null&&T!==void 0&&T.deliveryDirectives)this.warn("retry playlist loading #"+this.retryCount+' after "'+v.details+'"'),this.loadPlaylist();else{var A=Math.min(Math.pow(2,this.retryCount)*u.levelLoadingRetryDelay,u.levelLoadingMaxRetryTimeout);this.timer=self.setTimeout(function(){return S.loadPlaylist()},A),this.warn("retry playlist loading #"+this.retryCount+" in "+A+' ms after "'+v.details+'"')}}else this.warn('cannot recover from error "'+v.details+'"'),this.clearTimer(),v.fatal=!0;return I},d}()},"./src/controller/base-stream-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{State:()=>L,default:()=>c});var D=a("./src/polyfills/number.ts"),h=a("./src/task-loop.ts"),$=a("./src/controller/fragment-tracker.ts"),s=a("./src/utils/buffer-helper.ts"),N=a("./src/utils/logger.ts"),d=a("./src/events.ts"),g=a("./src/errors.ts"),k=a("./src/types/transmuxer.ts"),v=a("./src/utils/mp4-tools.ts"),S=a("./src/utils/discontinuities.ts"),u=a("./src/controller/fragment-finders.ts"),I=a("./src/controller/level-helper.ts"),T=a("./src/loader/fragment-loader.ts"),A=a("./src/crypt/decrypter.ts"),x=a("./src/utils/time-ranges.ts"),b=a("./src/types/loader.ts");function m(O,p){for(var R=0;R<p.length;R++){var B=p[R];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(O,C(B.key),B)}}function E(O,p,R){return p&&m(O.prototype,p),R&&m(O,R),Object.defineProperty(O,"prototype",{writable:!1}),O}function C(O){var p=y(O,"string");return typeof p=="symbol"?p:String(p)}function y(O,p){if(typeof O!="object"||O===null)return O;var R=O[Symbol.toPrimitive];if(R!==void 0){var B=R.call(O,p||"default");if(typeof B!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(p==="string"?String:Number)(O)}function w(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function _(O,p){O.prototype=Object.create(p.prototype),O.prototype.constructor=O,P(O,p)}function P(O,p){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(B,M){return B.__proto__=M,B},P(O,p)}var L={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"},c=function(O){_(p,O);function p(B,M,K,V){var z;return z=O.call(this)||this,z.hls=void 0,z.fragPrevious=null,z.fragCurrent=null,z.fragmentTracker=void 0,z.transmuxer=null,z._state=L.STOPPED,z.media=null,z.mediaBuffer=null,z.config=void 0,z.bitrateTest=!1,z.lastCurrentTime=0,z.nextLoadPosition=0,z.startPosition=0,z.loadedmetadata=!1,z.fragLoadError=0,z.retryDate=0,z.levels=null,z.fragmentLoader=void 0,z.keyLoader=void 0,z.levelLastLoaded=null,z.startFragRequested=!1,z.decrypter=void 0,z.initPTS=[],z.onvseeking=null,z.onvended=null,z.logPrefix="",z.log=void 0,z.warn=void 0,z.logPrefix=V,z.log=N.logger.log.bind(N.logger,V+":"),z.warn=N.logger.warn.bind(N.logger,V+":"),z.hls=B,z.fragmentLoader=new T.default(B.config),z.keyLoader=K,z.fragmentTracker=M,z.config=B.config,z.decrypter=new A.default(B.config),B.on(d.Events.LEVEL_SWITCHING,z.onLevelSwitching,w(z)),z}var R=p.prototype;return R.doTick=function(){this.onTickEnd()},R.onTickEnd=function(){},R.startLoad=function(M){},R.stopLoad=function(){this.fragmentLoader.abort(),this.keyLoader.abort();var M=this.fragCurrent;M&&(M.abortRequests(),this.fragmentTracker.removeFragment(M)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=L.STOPPED},R._streamEnded=function(M,K){if(K.live||M.nextStart||!M.end||!this.media)return!1;var V=K.partList;if(V!=null&&V.length){var z=V[V.length-1],G=s.BufferHelper.isBuffered(this.media,z.start+z.duration/2);return G}var Q=K.fragments[K.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(Q)},R.getLevelDetails=function(){if(this.levels&&this.levelLastLoaded!==null){var M;return(M=this.levels[this.levelLastLoaded])===null||M===void 0?void 0:M.details}},R.onMediaAttached=function(M,K){var V=this.media=this.mediaBuffer=K.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),V.addEventListener("seeking",this.onvseeking),V.addEventListener("ended",this.onvended);var z=this.config;this.levels&&z.autoStartLoad&&this.state===L.STOPPED&&this.startLoad(z.startPosition)},R.onMediaDetaching=function(){var M=this.media;M!=null&&M.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),M&&this.onvseeking&&this.onvended&&(M.removeEventListener("seeking",this.onvseeking),M.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},R.onMediaSeeking=function(){var M=this.config,K=this.fragCurrent,V=this.media,z=this.mediaBuffer,G=this.state,Q=V?V.currentTime:0,ee=s.BufferHelper.bufferInfo(z||V,Q,M.maxBufferHole);if(this.log("media seeking to "+((0,D.isFiniteNumber)(Q)?Q.toFixed(3):Q)+", state: "+G),this.state===L.ENDED)this.resetLoadingState();else if(K){var te=M.maxFragLookUpTolerance,se=K.start-te,ue=K.start+K.duration+te;if(!ee.len||ue<ee.start||se>ee.end){var q=Q>ue;(Q<se||q)&&(q&&K.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),K.abortRequests()),this.resetLoadingState())}}V&&(this.lastCurrentTime=Q),!this.loadedmetadata&&!ee.len&&(this.nextLoadPosition=this.startPosition=Q),this.tickImmediate()},R.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},R.onLevelSwitching=function(M,K){this.fragLoadError=0},R.onHandlerDestroying=function(){this.stopLoad(),O.prototype.onHandlerDestroying.call(this)},R.onHandlerDestroyed=function(){this.state=L.STOPPED,this.hls.off(d.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,O.prototype.onHandlerDestroyed.call(this)},R.loadFragment=function(M,K,V){this._loadFragForPlayback(M,K,V)},R._loadFragForPlayback=function(M,K,V){var z=this,G=function(ee){if(z.fragContextChanged(M)){z.warn("Fragment "+M.sn+(ee.part?" p: "+ee.part.index:"")+" of level "+M.level+" was dropped during download."),z.fragmentTracker.removeFragment(M);return}M.stats.chunkCount++,z._handleFragmentLoadProgress(ee)};this._doFragLoad(M,K,V,G).then(function(Q){if(!!Q){z.fragLoadError=0;var ee=z.state;if(z.fragContextChanged(M)){(ee===L.FRAG_LOADING||!z.fragCurrent&&ee===L.PARSING)&&(z.fragmentTracker.removeFragment(M),z.state=L.IDLE);return}"payload"in Q&&(z.log("Loaded fragment "+M.sn+" of level "+M.level),z.hls.trigger(d.Events.FRAG_LOADED,Q)),z._handleFragmentLoadComplete(Q)}}).catch(function(Q){z.state===L.STOPPED||z.state===L.ERROR||(z.warn(Q),z.resetFragmentLoading(M))})},R.flushMainBuffer=function(M,K,V){if(V===void 0&&(V=null),!!(M-K)){var z={startOffset:M,endOffset:K,type:V};this.fragLoadError=0,this.hls.trigger(d.Events.BUFFER_FLUSHING,z)}},R._loadInitSegment=function(M,K){var V=this;this._doFragLoad(M,K).then(function(z){if(!z||V.fragContextChanged(M)||!V.levels)throw new Error("init load aborted");return z}).then(function(z){var G=V.hls,Q=z.payload,ee=M.decryptdata;if(Q&&Q.byteLength>0&&ee&&ee.key&&ee.iv&&ee.method==="AES-128"){var te=self.performance.now();return V.decrypter.decrypt(new Uint8Array(Q),ee.key.buffer,ee.iv.buffer).then(function(se){var ue=self.performance.now();return G.trigger(d.Events.FRAG_DECRYPTED,{frag:M,payload:se,stats:{tstart:te,tdecrypt:ue}}),z.payload=se,z})}return z}).then(function(z){var G=V.fragCurrent,Q=V.hls,ee=V.levels;if(!ee)throw new Error("init load aborted, missing levels");var te=ee[M.level].details;console.assert(te,"Level details are defined when init segment is loaded");var se=M.stats;V.state=L.IDLE,V.fragLoadError=0,M.data=new Uint8Array(z.payload),se.parsing.start=se.buffering.start=self.performance.now(),se.parsing.end=se.buffering.end=self.performance.now(),z.frag===G&&Q.trigger(d.Events.FRAG_BUFFERED,{stats:se,frag:G,part:null,id:M.type}),V.tick()}).catch(function(z){V.state===L.STOPPED||V.state===L.ERROR||(V.warn(z),V.resetFragmentLoading(M))})},R.fragContextChanged=function(M){var K=this.fragCurrent;return!M||!K||M.level!==K.level||M.sn!==K.sn||M.urlId!==K.urlId},R.fragBufferedComplete=function(M,K){var V,z,G=this.mediaBuffer?this.mediaBuffer:this.media;this.log("Buffered "+M.type+" sn: "+M.sn+(K?" part: "+K.index:"")+" of "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+M.level+" (frag:["+(M.startPTS||NaN).toFixed(3)+"-"+(M.endPTS||NaN).toFixed(3)+"] > buffer:"+(G?x.default.toString(s.BufferHelper.getBuffered(G)):"(detached)")+")"),this.state=L.IDLE,G&&(!this.loadedmetadata&&M.type==b.PlaylistLevelType.MAIN&&G.buffered.length&&((V=this.fragCurrent)===null||V===void 0?void 0:V.sn)===((z=this.fragPrevious)===null||z===void 0?void 0:z.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())},R.seekToStartPos=function(){},R._handleFragmentLoadComplete=function(M){var K=this.transmuxer;if(!!K){var V=M.frag,z=M.part,G=M.partsLoaded,Q=!G||G.length===0||G.some(function(te){return!te}),ee=new k.ChunkMetadata(V.level,V.sn,V.stats.chunkCount+1,0,z?z.index:-1,!Q);K.flush(ee)}},R._handleFragmentLoadProgress=function(M){},R._doFragLoad=function(M,K,V,z){var G,Q=this;if(V===void 0&&(V=null),!this.levels)throw new Error("frag load aborted, missing levels");var ee=null;if(M.encrypted&&!((G=M.decryptdata)!==null&&G!==void 0&&G.key)?(this.log("Loading key for "+M.sn+" of ["+K.startSN+"-"+K.endSN+"], "+(this.logPrefix==="[stream-controller]"?"level":"track")+" "+M.level),this.state=L.KEY_LOADING,this.fragCurrent=M,ee=this.keyLoader.load(M).then(function(ne){if(!Q.fragContextChanged(ne.frag))return Q.hls.trigger(d.Events.KEY_LOADED,ne),ne}),this.hls.trigger(d.Events.KEY_LOADING,{frag:M}),this.throwIfFragContextChanged("KEY_LOADING")):!M.encrypted&&K.encryptedFragments.length&&this.keyLoader.loadClear(M,K.encryptedFragments),V=Math.max(M.start,V||0),this.config.lowLatencyMode&&K){var te=K.partList;if(te&&z){V>M.end&&K.fragmentHint&&(M=K.fragmentHint);var se=this.getNextPart(te,M,V);if(se>-1){var ue=te[se];return this.log("Loading part sn: "+M.sn+" p: "+ue.index+" cc: "+M.cc+" of playlist ["+K.startSN+"-"+K.endSN+"] parts [0-"+se+"-"+(te.length-1)+"] "+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+M.level+", target: "+parseFloat(V.toFixed(3))),this.nextLoadPosition=ue.start+ue.duration,this.state=L.FRAG_LOADING,this.hls.trigger(d.Events.FRAG_LOADING,{frag:M,part:te[se],targetBufferTime:V}),this.throwIfFragContextChanged("FRAG_LOADING parts"),ee?ee.then(function(ne){return!ne||Q.fragContextChanged(ne.frag)?null:Q.doFragPartsLoad(M,te,se,z)}).catch(function(ne){return Q.handleFragLoadError(ne)}):this.doFragPartsLoad(M,te,se,z).catch(function(ne){return Q.handleFragLoadError(ne)})}else if(!M.url||this.loadedEndOfParts(te,V))return Promise.resolve(null)}}this.log("Loading fragment "+M.sn+" cc: "+M.cc+" "+(K?"of ["+K.startSN+"-"+K.endSN+"] ":"")+(this.logPrefix==="[stream-controller]"?"level":"track")+": "+M.level+", target: "+parseFloat(V.toFixed(3))),(0,D.isFiniteNumber)(M.sn)&&!this.bitrateTest&&(this.nextLoadPosition=M.start+M.duration),this.state=L.FRAG_LOADING,this.hls.trigger(d.Events.FRAG_LOADING,{frag:M,targetBufferTime:V}),this.throwIfFragContextChanged("FRAG_LOADING");var q=this.config.progressive;return q&&ee?ee.then(function(ne){return!ne||Q.fragContextChanged(ne==null?void 0:ne.frag)?null:Q.fragmentLoader.load(M,z)}).catch(function(ne){return Q.handleFragLoadError(ne)}):Promise.all([this.fragmentLoader.load(M,q?z:void 0),ee]).then(function(ne){var de=ne[0];return!q&&de&&z&&z(de),de}).catch(function(ne){return Q.handleFragLoadError(ne)})},R.throwIfFragContextChanged=function(M){if(this.fragCurrent===null)throw new Error("frag load aborted, context changed in "+M)},R.doFragPartsLoad=function(M,K,V,z){var G=this;return new Promise(function(Q,ee){var te=[],se=function ue(q){var ne=K[q];G.fragmentLoader.loadPart(M,ne,z).then(function(de){te[ne.index]=de;var le=de.part;G.hls.trigger(d.Events.FRAG_LOADED,de);var pe=K[q+1];if(pe&&pe.fragment===M)ue(q+1);else return Q({frag:M,part:le,partsLoaded:te})}).catch(ee)};se(V)})},R.handleFragLoadError=function(M){if("data"in M){var K=M.data;M.data&&K.details===g.ErrorDetails.INTERNAL_ABORTED?this.handleFragLoadAborted(K.frag,K.part):this.hls.trigger(d.Events.ERROR,K)}else this.hls.trigger(d.Events.ERROR,{type:g.ErrorTypes.OTHER_ERROR,details:g.ErrorDetails.INTERNAL_EXCEPTION,err:M,fatal:!0});return null},R._handleTransmuxerFlush=function(M){var K=this.getCurrentContext(M);if(!K||this.state!==L.PARSING){!this.fragCurrent&&this.state!==L.STOPPED&&this.state!==L.ERROR&&(this.state=L.IDLE);return}var V=K.frag,z=K.part,G=K.level,Q=self.performance.now();V.stats.parsing.end=Q,z&&(z.stats.parsing.end=Q),this.updateLevelTiming(V,z,G,M.partial)},R.getCurrentContext=function(M){var K=this.levels,V=M.level,z=M.sn,G=M.part;if(!K||!K[V])return this.warn("Levels object was unset while buffering fragment "+z+" of level "+V+". The current chunk will not be buffered."),null;var Q=K[V],ee=G>-1?(0,I.getPartWith)(Q,z,G):null,te=ee?ee.fragment:(0,I.getFragmentWithSN)(Q,z,this.fragCurrent);return te?{frag:te,part:ee,level:Q}:null},R.bufferFragmentData=function(M,K,V,z){if(!(!M||this.state!==L.PARSING)){var G=M.data1,Q=M.data2,ee=G;if(G&&Q&&(ee=(0,v.appendUint8Array)(G,Q)),!(!ee||!ee.length)){var te={type:M.type,frag:K,part:V,chunkMeta:z,parent:K.type,data:ee};this.hls.trigger(d.Events.BUFFER_APPENDING,te),M.dropped&&M.independent&&!V&&this.flushBufferGap(K)}}},R.flushBufferGap=function(M){var K=this.media;if(!!K){if(!s.BufferHelper.isBuffered(K,K.currentTime)){this.flushMainBuffer(0,M.start);return}var V=K.currentTime,z=s.BufferHelper.bufferInfo(K,V,0),G=M.duration,Q=Math.min(this.config.maxFragLookUpTolerance*2,G*.25),ee=Math.max(Math.min(M.start-Q,z.end-Q),V+Q);M.start-ee>Q&&this.flushMainBuffer(ee,M.start)}},R.getFwdBufferInfo=function(M,K){var V=this.config,z=this.getLoadPosition();if(!(0,D.isFiniteNumber)(z))return null;var G=s.BufferHelper.bufferInfo(M,z,V.maxBufferHole);if(G.len===0&&G.nextStart!==void 0){var Q=this.fragmentTracker.getBufferedFrag(z,K);if(Q&&G.nextStart<Q.end)return s.BufferHelper.bufferInfo(M,z,Math.max(G.nextStart,V.maxBufferHole))}return G},R.getMaxBufferLength=function(M){var K=this.config,V;return M?V=Math.max(8*K.maxBufferSize/M,K.maxBufferLength):V=K.maxBufferLength,Math.min(V,K.maxMaxBufferLength)},R.reduceMaxBufferLength=function(M){var K=this.config,V=M||K.maxBufferLength;return K.maxMaxBufferLength>=V?(K.maxMaxBufferLength/=2,this.warn("Reduce max buffer length to "+K.maxMaxBufferLength+"s"),!0):!1},R.getNextFragment=function(M,K){var V=K.fragments,z=V.length;if(!z)return null;var G=this.config,Q=V[0].start,ee;if(K.live){var te=G.initialLiveManifestSize;if(z<te)return this.warn("Not enough fragments to start playback (have: "+z+", need: "+te+")"),null;!K.PTSKnown&&!this.startFragRequested&&this.startPosition===-1&&(ee=this.getInitialLiveFragment(K,V),this.startPosition=ee?this.hls.liveSyncPosition||ee.start:M)}else M<=Q&&(ee=V[0]);if(!ee){var se=G.lowLatencyMode?K.partEnd:K.fragmentEnd;ee=this.getFragmentAtPosition(M,se,K)}return this.mapToInitFragWhenRequired(ee)},R.mapToInitFragWhenRequired=function(M){return M!=null&&M.initSegment&&!(M!=null&&M.initSegment.data)&&!this.bitrateTest?M.initSegment:M},R.getNextPart=function(M,K,V){for(var z=-1,G=!1,Q=!0,ee=0,te=M.length;ee<te;ee++){var se=M[ee];if(Q=Q&&!se.independent,z>-1&&V<se.start)break;var ue=se.loaded;ue?z=-1:(G||se.independent||Q)&&se.fragment===K&&(z=ee),G=ue}return z},R.loadedEndOfParts=function(M,K){var V=M[M.length-1];return V&&K>V.start&&V.loaded},R.getInitialLiveFragment=function(M,K){var V=this.fragPrevious,z=null;if(V){if(M.hasProgramDateTime&&(this.log("Live playlist, switching playlist, load frag with same PDT: "+V.programDateTime),z=(0,u.findFragmentByPDT)(K,V.endProgramDateTime,this.config.maxFragLookUpTolerance)),!z){var G=V.sn+1;if(G>=M.startSN&&G<=M.endSN){var Q=K[G-M.startSN];V.cc===Q.cc&&(z=Q,this.log("Live playlist, switching playlist, load frag with next SN: "+z.sn))}z||(z=(0,u.findFragWithCC)(K,V.cc),z&&this.log("Live playlist, switching playlist, load frag with same CC: "+z.sn))}}else{var ee=this.hls.liveSyncPosition;ee!==null&&(z=this.getFragmentAtPosition(ee,this.bitrateTest?M.fragmentEnd:M.edge,M))}return z},R.getFragmentAtPosition=function(M,K,V){var z=this.config,G=this.fragPrevious,Q=V.fragments,ee=V.endSN,te=V.fragmentHint,se=z.maxFragLookUpTolerance,ue=!!(z.lowLatencyMode&&V.partList&&te);ue&&te&&!this.bitrateTest&&(Q=Q.concat(te),ee=te.sn);var q;if(M<K){var ne=M>K-se?0:se;q=(0,u.findFragmentByPTS)(G,Q,M,ne)}else q=Q[Q.length-1];if(q){var de=q.sn-V.startSN;if(this.fragmentTracker.getState(q)===$.FragmentState.OK&&(G=q),G&&q.sn===G.sn&&!ue){var le=G&&q.level===G.level;if(le){var pe=Q[de+1];q.sn<ee&&this.fragmentTracker.getState(pe)!==$.FragmentState.OK?(this.log("SN "+q.sn+" just loaded, load next one: "+pe.sn),q=pe):q=null}}}return q},R.synchronizeToLiveEdge=function(M){var K=this.config,V=this.media;if(!!V){var z=this.hls.liveSyncPosition,G=V.currentTime,Q=M.fragments[0].start,ee=M.edge,te=G>=Q-K.maxFragLookUpTolerance&&G<=ee;if(z!==null&&V.duration>z&&(G<z||!te)){var se=K.liveMaxLatencyDuration!==void 0?K.liveMaxLatencyDuration:K.liveMaxLatencyDurationCount*M.targetduration;(!te&&V.readyState<4||G<ee-se)&&(this.loadedmetadata||(this.nextLoadPosition=z),V.readyState&&(this.warn("Playback: "+G.toFixed(3)+" is located too far from the end of live sliding playlist: "+ee+", reset currentTime to : "+z.toFixed(3)),V.currentTime=z))}}},R.alignPlaylists=function(M,K){var V=this.levels,z=this.levelLastLoaded,G=this.fragPrevious,Q=z!==null?V[z]:null,ee=M.fragments.length;if(!ee)return this.warn("No fragments in live playlist"),0;var te=M.fragments[0].start,se=!K,ue=M.alignedSliding&&(0,D.isFiniteNumber)(te);if(se||!ue&&!te){(0,S.alignStream)(G,Q,M);var q=M.fragments[0].start;return this.log("Live playlist sliding: "+q.toFixed(2)+" start-sn: "+(K?K.startSN:"na")+"->"+M.startSN+" prev-sn: "+(G?G.sn:"na")+" fragments: "+ee),q}return te},R.waitForCdnTuneIn=function(M){var K=3;return M.live&&M.canBlockReload&&M.partTarget&&M.tuneInGoal>Math.max(M.partHoldBack,M.partTarget*K)},R.setStartPosition=function(M,K){var V=this.startPosition;if(V<K&&(V=-1),V===-1||this.lastCurrentTime===-1){var z=M.startTimeOffset;(0,D.isFiniteNumber)(z)?(V=K+z,z<0&&(V+=M.totalduration),V=Math.min(Math.max(K,V),K+M.totalduration),this.log("Start time offset "+z+" found in playlist, adjust startPosition to "+V),this.startPosition=V):M.live?V=this.hls.liveSyncPosition||K:this.startPosition=V=0,this.lastCurrentTime=V}this.nextLoadPosition=V},R.getLoadPosition=function(){var M=this.media,K=0;return this.loadedmetadata&&M?K=M.currentTime:this.nextLoadPosition&&(K=this.nextLoadPosition),K},R.handleFragLoadAborted=function(M,K){this.transmuxer&&M.sn!=="initSegment"&&M.stats.aborted&&(this.warn("Fragment "+M.sn+(K?" part"+K.index:"")+" of level "+M.level+" was aborted"),this.resetFragmentLoading(M))},R.resetFragmentLoading=function(M){(!this.fragCurrent||!this.fragContextChanged(M)&&this.state!==L.FRAG_LOADING_WAITING_RETRY)&&(this.state=L.IDLE)},R.onFragmentOrKeyLoadError=function(M,K){if(K.fatal){this.stopLoad(),this.state=L.ERROR;return}var V=this.config;if(K.chunkMeta){var z=this.getCurrentContext(K.chunkMeta);z&&(K.frag=z.frag,K.levelRetry=!0,this.fragLoadError=V.fragLoadingMaxRetry)}var G=K.frag;if(!(!G||G.type!==M)){var Q=this.fragCurrent;if(console.assert(Q&&G.sn===Q.sn&&G.level===Q.level&&G.urlId===Q.urlId,"Frag load error must match current frag to retry"),this.fragLoadError+1<=V.fragLoadingMaxRetry){this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition);var ee=Math.min(Math.pow(2,this.fragLoadError)*V.fragLoadingRetryDelay,V.fragLoadingMaxRetryTimeout);this.warn("Fragment "+G.sn+" of "+M+" "+G.level+" failed to load, retrying in "+ee+"ms"),this.retryDate=self.performance.now()+ee,this.fragLoadError++,this.state=L.FRAG_LOADING_WAITING_RETRY}else K.levelRetry?(M===b.PlaylistLevelType.AUDIO&&(this.fragCurrent=null),this.fragLoadError=0,this.state=L.IDLE):(N.logger.error(K.details+" reaches max retry, redispatch as fatal ..."),K.fatal=!0,this.hls.stopLoad(),this.state=L.ERROR)}},R.afterBufferFlushed=function(M,K,V){if(!!M){var z=s.BufferHelper.getBuffered(M);this.fragmentTracker.detectEvictedFragments(K,z,V),this.state===L.ENDED&&this.resetLoadingState()}},R.resetLoadingState=function(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=L.IDLE},R.resetStartWhenNotLoaded=function(M){if(!this.loadedmetadata){this.startFragRequested=!1;var K=this.levels?this.levels[M].details:null;K!=null&&K.live?(this.startPosition=-1,this.setStartPosition(K,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}},R.updateLevelTiming=function(M,K,V,z){var G=this,Q=V.details;console.assert(!!Q,"level.details must be defined");var ee=Object.keys(M.elementaryStreams).reduce(function(te,se){var ue=M.elementaryStreams[se];if(ue){var q=ue.endPTS-ue.startPTS;if(q<=0)return G.warn("Could not parse fragment "+M.sn+" "+se+" duration reliably ("+q+")"),te||!1;var ne=z?0:(0,I.updateFragPTSDTS)(Q,M,ue.startPTS,ue.endPTS,ue.startDTS,ue.endDTS);return G.hls.trigger(d.Events.LEVEL_PTS_UPDATED,{details:Q,level:V,drift:ne,type:se,frag:M,start:ue.startPTS,end:ue.endPTS}),!0}return te},!1);ee||(this.warn("Found no media in fragment "+M.sn+" of level "+V.id+" resetting transmuxer to fallback to playlist timing"),this.resetTransmuxer()),this.state=L.PARSED,this.hls.trigger(d.Events.FRAG_PARSED,{frag:M,part:K})},R.resetTransmuxer=function(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)},E(p,[{key:"state",get:function(){return this._state},set:function(M){var K=this._state;K!==M&&(this._state=M,this.log(K+"->"+M))}}]),p}(h.default)},"./src/controller/buffer-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>u});var D=a("./src/polyfills/number.ts"),h=a("./src/events.ts"),$=a("./src/utils/logger.ts"),s=a("./src/errors.ts"),N=a("./src/utils/buffer-helper.ts"),d=a("./src/utils/mediasource-helper.ts"),g=a("./src/loader/fragment.ts"),k=a("./src/controller/buffer-operation-queue.ts"),v=(0,d.getMediaSource)(),S=/([ha]vc.)(?:\.[^.,]+)+/,u=function(){function I(A){var x=this;this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendError=0,this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this._onMediaSourceOpen=function(){var b=x.hls,m=x.media,E=x.mediaSource;$.logger.log("[buffer-controller]: Media source opened"),m&&(x.updateMediaElementDuration(),b.trigger(h.Events.MEDIA_ATTACHED,{media:m})),E&&E.removeEventListener("sourceopen",x._onMediaSourceOpen),x.checkPendingTracks()},this._onMediaSourceClose=function(){$.logger.log("[buffer-controller]: Media source closed")},this._onMediaSourceEnded=function(){$.logger.log("[buffer-controller]: Media source ended")},this.hls=A,this._initSourceBuffer(),this.registerListeners()}var T=I.prototype;return T.hasSourceTypes=function(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0},T.destroy=function(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null},T.registerListeners=function(){var x=this.hls;x.on(h.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),x.on(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),x.on(h.Events.MANIFEST_PARSED,this.onManifestParsed,this),x.on(h.Events.BUFFER_RESET,this.onBufferReset,this),x.on(h.Events.BUFFER_APPENDING,this.onBufferAppending,this),x.on(h.Events.BUFFER_CODECS,this.onBufferCodecs,this),x.on(h.Events.BUFFER_EOS,this.onBufferEos,this),x.on(h.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),x.on(h.Events.LEVEL_UPDATED,this.onLevelUpdated,this),x.on(h.Events.FRAG_PARSED,this.onFragParsed,this),x.on(h.Events.FRAG_CHANGED,this.onFragChanged,this)},T.unregisterListeners=function(){var x=this.hls;x.off(h.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),x.off(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),x.off(h.Events.MANIFEST_PARSED,this.onManifestParsed,this),x.off(h.Events.BUFFER_RESET,this.onBufferReset,this),x.off(h.Events.BUFFER_APPENDING,this.onBufferAppending,this),x.off(h.Events.BUFFER_CODECS,this.onBufferCodecs,this),x.off(h.Events.BUFFER_EOS,this.onBufferEos,this),x.off(h.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),x.off(h.Events.LEVEL_UPDATED,this.onLevelUpdated,this),x.off(h.Events.FRAG_PARSED,this.onFragParsed,this),x.off(h.Events.FRAG_CHANGED,this.onFragChanged,this)},T._initSourceBuffer=function(){this.sourceBuffer={},this.operationQueue=new k.default(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.lastMpegAudioChunk=null},T.onManifestParsed=function(x,b){var m=2;(b.audio&&!b.video||!b.altAudio)&&(m=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=m,this.details=null,$.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},T.onMediaAttaching=function(x,b){var m=this.media=b.media;if(m&&v){var E=this.mediaSource=new v;E.addEventListener("sourceopen",this._onMediaSourceOpen),E.addEventListener("sourceended",this._onMediaSourceEnded),E.addEventListener("sourceclose",this._onMediaSourceClose),m.src=self.URL.createObjectURL(E),this._objectUrl=m.src}},T.onMediaDetaching=function(){var x=this.media,b=this.mediaSource,m=this._objectUrl;if(b){if($.logger.log("[buffer-controller]: media source detaching"),b.readyState==="open")try{b.endOfStream()}catch(E){$.logger.warn("[buffer-controller]: onMediaDetaching: "+E.message+" while calling endOfStream")}this.onBufferReset(),b.removeEventListener("sourceopen",this._onMediaSourceOpen),b.removeEventListener("sourceended",this._onMediaSourceEnded),b.removeEventListener("sourceclose",this._onMediaSourceClose),x&&(m&&self.URL.revokeObjectURL(m),x.src===m?(x.removeAttribute("src"),x.load()):$.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(h.Events.MEDIA_DETACHED,void 0)},T.onBufferReset=function(){var x=this;this.getSourceBufferTypes().forEach(function(b){var m=x.sourceBuffer[b];try{m&&(x.removeBufferListeners(b),x.mediaSource&&x.mediaSource.removeSourceBuffer(m),x.sourceBuffer[b]=void 0)}catch(E){$.logger.warn("[buffer-controller]: Failed to reset the "+b+" buffer",E)}}),this._initSourceBuffer()},T.onBufferCodecs=function(x,b){var m=this,E=this.getSourceBufferTypes().length;Object.keys(b).forEach(function(C){if(E){var y=m.tracks[C];if(y&&typeof y.buffer.changeType=="function"){var w=b[C],_=w.id,P=w.codec,L=w.levelCodec,c=w.container,O=w.metadata,p=(y.levelCodec||y.codec).replace(S,"$1"),R=(L||P).replace(S,"$1");if(p!==R){var B=c+";codecs="+(L||P);m.appendChangeType(C,B),$.logger.log("[buffer-controller]: switching codec "+p+" to "+R),m.tracks[C]={buffer:y.buffer,codec:P,container:c,levelCodec:L,metadata:O,id:_}}}}else m.pendingTracks[C]=b[C]}),!E&&(this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks())},T.appendChangeType=function(x,b){var m=this,E=this.operationQueue,C={execute:function(){var w=m.sourceBuffer[x];w&&($.logger.log("[buffer-controller]: changing "+x+" sourceBuffer type to "+b),w.changeType(b)),E.shiftAndExecuteNext(x)},onStart:function(){},onComplete:function(){},onError:function(w){$.logger.warn("[buffer-controller]: Failed to change "+x+" SourceBuffer type",w)}};E.append(C,x)},T.onBufferAppending=function(x,b){var m=this,E=this.hls,C=this.operationQueue,y=this.tracks,w=b.data,_=b.type,P=b.frag,L=b.part,c=b.chunkMeta,O=c.buffering[_],p=self.performance.now();O.start=p;var R=P.stats.buffering,B=L?L.stats.buffering:null;R.start===0&&(R.start=p),B&&B.start===0&&(B.start=p);var M=y.audio,K=!1;_==="audio"&&(M==null?void 0:M.container)==="audio/mpeg"&&(K=!this.lastMpegAudioChunk||c.id===1||this.lastMpegAudioChunk.sn!==c.sn,this.lastMpegAudioChunk=c);var V=P.start,z={execute:function(){if(O.executeStart=self.performance.now(),K){var Q=m.sourceBuffer[_];if(Q){var ee=V-Q.timestampOffset;Math.abs(ee)>=.1&&($.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to "+V+" (delta: "+ee+") sn: "+P.sn+")"),Q.timestampOffset=V)}}m.appendExecutor(w,_)},onStart:function(){},onComplete:function(){var Q=self.performance.now();O.executeEnd=O.end=Q,R.first===0&&(R.first=Q),B&&B.first===0&&(B.first=Q);var ee=m.sourceBuffer,te={};for(var se in ee)te[se]=N.BufferHelper.getBuffered(ee[se]);m.appendError=0,m.hls.trigger(h.Events.BUFFER_APPENDED,{type:_,frag:P,part:L,chunkMeta:c,parent:P.type,timeRanges:te})},onError:function(Q){$.logger.error("[buffer-controller]: Error encountered while trying to append to the "+_+" SourceBuffer",Q);var ee={type:s.ErrorTypes.MEDIA_ERROR,parent:P.type,details:s.ErrorDetails.BUFFER_APPEND_ERROR,err:Q,fatal:!1};Q.code===DOMException.QUOTA_EXCEEDED_ERR?ee.details=s.ErrorDetails.BUFFER_FULL_ERROR:(m.appendError++,ee.details=s.ErrorDetails.BUFFER_APPEND_ERROR,m.appendError>E.config.appendErrorMaxRetry&&($.logger.error("[buffer-controller]: Failed "+E.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),ee.fatal=!0,E.stopLoad())),E.trigger(h.Events.ERROR,ee)}};C.append(z,_)},T.onBufferFlushing=function(x,b){var m=this,E=this.operationQueue,C=function(w){return{execute:m.removeExecutor.bind(m,w,b.startOffset,b.endOffset),onStart:function(){},onComplete:function(){m.hls.trigger(h.Events.BUFFER_FLUSHED,{type:w})},onError:function(P){$.logger.warn("[buffer-controller]: Failed to remove from "+w+" SourceBuffer",P)}}};b.type?E.append(C(b.type),b.type):this.getSourceBufferTypes().forEach(function(y){E.append(C(y),y)})},T.onFragParsed=function(x,b){var m=this,E=b.frag,C=b.part,y=[],w=C?C.elementaryStreams:E.elementaryStreams;w[g.ElementaryStreamTypes.AUDIOVIDEO]?y.push("audiovideo"):(w[g.ElementaryStreamTypes.AUDIO]&&y.push("audio"),w[g.ElementaryStreamTypes.VIDEO]&&y.push("video"));var _=function(){var L=self.performance.now();E.stats.buffering.end=L,C&&(C.stats.buffering.end=L);var c=C?C.stats:E.stats;m.hls.trigger(h.Events.FRAG_BUFFERED,{frag:E,part:C,stats:c,id:E.type})};y.length===0&&$.logger.warn("Fragments must have at least one ElementaryStreamType set. type: "+E.type+" level: "+E.level+" sn: "+E.sn),this.blockBuffers(_,y)},T.onFragChanged=function(x,b){this.flushBackBuffer()},T.onBufferEos=function(x,b){var m=this,E=this.getSourceBufferTypes().reduce(function(C,y){var w=m.sourceBuffer[y];return w&&(!b.type||b.type===y)&&(w.ending=!0,w.ended||(w.ended=!0,$.logger.log("[buffer-controller]: "+y+" sourceBuffer now EOS"))),C&&!!(!w||w.ended)},!0);E&&($.logger.log("[buffer-controller]: Queueing mediaSource.endOfStream()"),this.blockBuffers(function(){m.getSourceBufferTypes().forEach(function(y){var w=m.sourceBuffer[y];w&&(w.ending=!1)});var C=m.mediaSource;if(!C||C.readyState!=="open"){C&&$.logger.info("[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: "+C.readyState);return}$.logger.log("[buffer-controller]: Calling mediaSource.endOfStream()"),C.endOfStream()}))},T.onLevelUpdated=function(x,b){var m=b.details;!m.fragments.length||(this.details=m,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())},T.flushBackBuffer=function(){var x=this.hls,b=this.details,m=this.media,E=this.sourceBuffer;if(!(!m||b===null)){var C=this.getSourceBufferTypes();if(!!C.length){var y=b.live&&x.config.liveBackBufferLength!==null?x.config.liveBackBufferLength:x.config.backBufferLength;if(!(!(0,D.isFiniteNumber)(y)||y<0)){var w=m.currentTime,_=b.levelTargetDuration,P=Math.max(y,_),L=Math.floor(w/_)*_-P;C.forEach(function(c){var O=E[c];if(O){var p=N.BufferHelper.getBuffered(O);if(p.length>0&&L>p.start(0)){if(x.trigger(h.Events.BACK_BUFFER_REACHED,{bufferEnd:L}),b.live)x.trigger(h.Events.LIVE_BACK_BUFFER_REACHED,{bufferEnd:L});else if(O.ended&&p.end(p.length-1)-w<_*2){$.logger.info("[buffer-controller]: Cannot flush "+c+" back buffer while SourceBuffer is in ended state");return}x.trigger(h.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:L,type:c})}}})}}}},T.updateMediaElementDuration=function(){if(!(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")){var x=this.details,b=this.hls,m=this.media,E=this.mediaSource,C=x.fragments[0].start+x.totalduration,y=m.duration,w=(0,D.isFiniteNumber)(E.duration)?E.duration:0;x.live&&b.config.liveDurationInfinity?($.logger.log("[buffer-controller]: Media Source duration is set to Infinity"),E.duration=1/0,this.updateSeekableRange(x)):(C>w&&C>y||!(0,D.isFiniteNumber)(y))&&($.logger.log("[buffer-controller]: Updating Media Source duration to "+C.toFixed(3)),E.duration=C)}},T.updateSeekableRange=function(x){var b=this.mediaSource,m=x.fragments,E=m.length;if(E&&x.live&&b!==null&&b!==void 0&&b.setLiveSeekableRange){var C=Math.max(0,m[0].start),y=Math.max(C,C+x.totalduration);b.setLiveSeekableRange(C,y)}},T.checkPendingTracks=function(){var x=this.bufferCodecEventsExpected,b=this.operationQueue,m=this.pendingTracks,E=Object.keys(m).length;if(E&&!x||E===2){this.createSourceBuffers(m),this.pendingTracks={};var C=this.getSourceBufferTypes();if(C.length===0){this.hls.trigger(h.Events.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,reason:"could not create source buffer for media codec(s)"});return}C.forEach(function(y){b.executeNext(y)})}},T.createSourceBuffers=function(x){var b=this.sourceBuffer,m=this.mediaSource;if(!m)throw Error("createSourceBuffers called when mediaSource was null");var E=0;for(var C in x)if(!b[C]){var y=x[C];if(!y)throw Error("source buffer exists for track "+C+", however track does not");var w=y.levelCodec||y.codec,_=y.container+";codecs="+w;$.logger.log("[buffer-controller]: creating sourceBuffer("+_+")");try{var P=b[C]=m.addSourceBuffer(_),L=C;this.addBufferListener(L,"updatestart",this._onSBUpdateStart),this.addBufferListener(L,"updateend",this._onSBUpdateEnd),this.addBufferListener(L,"error",this._onSBUpdateError),this.tracks[C]={buffer:P,codec:w,container:y.container,levelCodec:y.levelCodec,metadata:y.metadata,id:y.id},E++}catch(c){$.logger.error("[buffer-controller]: error while trying to add sourceBuffer: "+c.message),this.hls.trigger(h.Events.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:c,mimeType:_})}}E&&this.hls.trigger(h.Events.BUFFER_CREATED,{tracks:this.tracks})},T._onSBUpdateStart=function(x){var b=this.operationQueue,m=b.current(x);m.onStart()},T._onSBUpdateEnd=function(x){var b=this.operationQueue,m=b.current(x);m.onComplete(),b.shiftAndExecuteNext(x)},T._onSBUpdateError=function(x,b){$.logger.error("[buffer-controller]: "+x+" SourceBuffer error",b),this.hls.trigger(h.Events.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1});var m=this.operationQueue.current(x);m&&m.onError(b)},T.removeExecutor=function(x,b,m){var E=this.media,C=this.mediaSource,y=this.operationQueue,w=this.sourceBuffer,_=w[x];if(!E||!C||!_){$.logger.warn("[buffer-controller]: Attempting to remove from the "+x+" SourceBuffer, but it does not exist"),y.shiftAndExecuteNext(x);return}var P=(0,D.isFiniteNumber)(E.duration)?E.duration:1/0,L=(0,D.isFiniteNumber)(C.duration)?C.duration:1/0,c=Math.max(0,b),O=Math.min(m,P,L);O>c&&!_.ending?(_.ended=!1,$.logger.log("[buffer-controller]: Removing ["+c+","+O+"] from the "+x+" SourceBuffer"),console.assert(!_.updating,x+" sourceBuffer must not be updating"),_.remove(c,O)):y.shiftAndExecuteNext(x)},T.appendExecutor=function(x,b){var m=this.operationQueue,E=this.sourceBuffer,C=E[b];if(!C){$.logger.warn("[buffer-controller]: Attempting to append to the "+b+" SourceBuffer, but it does not exist"),m.shiftAndExecuteNext(b);return}C.ended=!1,console.assert(!C.updating,b+" sourceBuffer must not be updating"),C.appendBuffer(x)},T.blockBuffers=function(x,b){var m=this;if(b===void 0&&(b=this.getSourceBufferTypes()),!b.length){$.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(x);return}var E=this.operationQueue,C=b.map(function(y){return E.appendBlocker(y)});Promise.all(C).then(function(){x(),b.forEach(function(y){var w=m.sourceBuffer[y];(!w||!w.updating)&&E.shiftAndExecuteNext(y)})})},T.getSourceBufferTypes=function(){return Object.keys(this.sourceBuffer)},T.addBufferListener=function(x,b,m){var E=this.sourceBuffer[x];if(!!E){var C=m.bind(this,x);this.listeners[x].push({event:b,listener:C}),E.addEventListener(b,C)}},T.removeBufferListeners=function(x){var b=this.sourceBuffer[x];!b||this.listeners[x].forEach(function(m){b.removeEventListener(m.event,m.listener)})},I}()},"./src/controller/buffer-operation-queue.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>h});var D=a("./src/utils/logger.ts"),h=function(){function $(N){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=N}var s=$.prototype;return s.append=function(d,g){var k=this.queues[g];k.push(d),k.length===1&&this.buffers[g]&&this.executeNext(g)},s.insertAbort=function(d,g){var k=this.queues[g];k.unshift(d),this.executeNext(g)},s.appendBlocker=function(d){var g,k=new Promise(function(S){g=S}),v={execute:g,onStart:function(){},onComplete:function(){},onError:function(){}};return this.append(v,d),k},s.executeNext=function(d){var g=this.buffers,k=this.queues,v=g[d],S=k[d];if(S.length){var u=S[0];try{u.execute()}catch(I){D.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"),u.onError(I),(!v||!v.updating)&&(S.shift(),this.executeNext(d))}}},s.shiftAndExecuteNext=function(d){this.queues[d].shift(),this.executeNext(d)},s.current=function(d){return this.queues[d][0]},$}()},"./src/controller/cap-level-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>g});var D=a("./src/events.ts");function h(k,v){for(var S=0;S<v.length;S++){var u=v[S];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(k,s(u.key),u)}}function $(k,v,S){return v&&h(k.prototype,v),S&&h(k,S),Object.defineProperty(k,"prototype",{writable:!1}),k}function s(k){var v=N(k,"string");return typeof v=="symbol"?v:String(v)}function N(k,v){if(typeof k!="object"||k===null)return k;var S=k[Symbol.toPrimitive];if(S!==void 0){var u=S.call(k,v||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(k)}var d=function(){function k(S){this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.hls=void 0,this.streamController=void 0,this.clientRect=void 0,this.hls=S,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}var v=k.prototype;return v.setStreamController=function(u){this.streamController=u},v.destroy=function(){this.unregisterListener(),this.hls.config.capLevelToPlayerSize&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null},v.registerListeners=function(){var u=this.hls;u.on(D.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),u.on(D.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),u.on(D.Events.MANIFEST_PARSED,this.onManifestParsed,this),u.on(D.Events.BUFFER_CODECS,this.onBufferCodecs,this),u.on(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},v.unregisterListener=function(){var u=this.hls;u.off(D.Events.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),u.off(D.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),u.off(D.Events.MANIFEST_PARSED,this.onManifestParsed,this),u.off(D.Events.BUFFER_CODECS,this.onBufferCodecs,this),u.off(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this)},v.onFpsDropLevelCapping=function(u,I){k.isLevelAllowed(I.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(I.droppedLevel)},v.onMediaAttaching=function(u,I){this.media=I.media instanceof HTMLVideoElement?I.media:null,this.clientRect=null},v.onManifestParsed=function(u,I){var T=this.hls;this.restrictedLevels=[],this.firstLevel=I.firstLevel,T.config.capLevelToPlayerSize&&I.video&&this.startCapping()},v.onBufferCodecs=function(u,I){var T=this.hls;T.config.capLevelToPlayerSize&&I.video&&this.startCapping()},v.onMediaDetaching=function(){this.stopCapping()},v.detectPlayerSize=function(){if(this.media&&this.mediaHeight>0&&this.mediaWidth>0){var u=this.hls.levels;if(u.length){var I=this.hls;I.autoLevelCapping=this.getMaxLevel(u.length-1),I.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=I.autoLevelCapping}}},v.getMaxLevel=function(u){var I=this,T=this.hls.levels;if(!T.length)return-1;var A=T.filter(function(x,b){return k.isLevelAllowed(b,I.restrictedLevels)&&b<=u});return this.clientRect=null,k.getMaxLevelByMediaSize(A,this.mediaWidth,this.mediaHeight)},v.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},v.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)},v.getDimensions=function(){if(this.clientRect)return this.clientRect;var u=this.media,I={width:0,height:0};if(u){var T=u.getBoundingClientRect();I.width=T.width,I.height=T.height,!I.width&&!I.height&&(I.width=T.right-T.left||u.width||0,I.height=T.bottom-T.top||u.height||0)}return this.clientRect=I,I},k.isLevelAllowed=function(u,I){return I===void 0&&(I=[]),I.indexOf(u)===-1},k.getMaxLevelByMediaSize=function(u,I,T){if(!u||!u.length)return-1;for(var A=function(C,y){return y?C.width!==y.width||C.height!==y.height:!0},x=u.length-1,b=0;b<u.length;b+=1){var m=u[b];if((m.width>=I||m.height>=T)&&A(m,u[b+1])){x=b;break}}return x},$(k,[{key:"mediaWidth",get:function(){return this.getDimensions().width*this.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*this.contentScaleFactor}},{key:"contentScaleFactor",get:function(){var u=1;if(!this.hls.config.ignoreDevicePixelRatio)try{u=self.devicePixelRatio}catch{}return u}}]),k}();const g=d},"./src/controller/cmcd-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>T});var D=a("./src/events.ts"),h=a("./src/types/cmcd.ts"),$=a("./src/utils/buffer-helper.ts"),s=a("./src/utils/logger.ts");function N(A,x){for(var b=0;b<x.length;b++){var m=x[b];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(A,g(m.key),m)}}function d(A,x,b){return x&&N(A.prototype,x),b&&N(A,b),Object.defineProperty(A,"prototype",{writable:!1}),A}function g(A){var x=k(A,"string");return typeof x=="symbol"?x:String(x)}function k(A,x){if(typeof A!="object"||A===null)return A;var b=A[Symbol.toPrimitive];if(b!==void 0){var m=b.call(A,x||"default");if(typeof m!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(x==="string"?String:Number)(A)}function v(A,x){var b=typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"];if(b)return(b=b.call(A)).next.bind(b);if(Array.isArray(A)||(b=S(A))||x&&A&&typeof A.length=="number"){b&&(A=b);var m=0;return function(){return m>=A.length?{done:!0}:{done:!1,value:A[m++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(A,x){if(!!A){if(typeof A=="string")return u(A,x);var b=Object.prototype.toString.call(A).slice(8,-1);if(b==="Object"&&A.constructor&&(b=A.constructor.name),b==="Map"||b==="Set")return Array.from(A);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return u(A,x)}}function u(A,x){(x==null||x>A.length)&&(x=A.length);for(var b=0,m=new Array(x);b<x;b++)m[b]=A[b];return m}function I(){return I=Object.assign?Object.assign.bind():function(A){for(var x=1;x<arguments.length;x++){var b=arguments[x];for(var m in b)Object.prototype.hasOwnProperty.call(b,m)&&(A[m]=b[m])}return A},I.apply(this,arguments)}var T=function(){function A(b){var m=this;this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=function(){m.initialized&&(m.starved=!0),m.buffering=!0},this.onPlaying=function(){m.initialized||(m.initialized=!0),m.buffering=!1},this.applyPlaylistData=function(y){try{m.apply(y,{ot:h.CMCDObjectType.MANIFEST,su:!m.initialized})}catch(w){s.logger.warn("Could not generate manifest CMCD data.",w)}},this.applyFragmentData=function(y){try{var w=y.frag,_=m.hls.levels[w.level],P=m.getObjectType(w),L={d:w.duration*1e3,ot:P};(P===h.CMCDObjectType.VIDEO||P===h.CMCDObjectType.AUDIO||P==h.CMCDObjectType.MUXED)&&(L.br=_.bitrate/1e3,L.tb=m.getTopBandwidth(P)/1e3,L.bl=m.getBufferLength(P)),m.apply(y,L)}catch(c){s.logger.warn("Could not generate segment CMCD data.",c)}},this.hls=b;var E=this.config=b.config,C=E.cmcd;C!=null&&(E.pLoader=this.createPlaylistLoader(),E.fLoader=this.createFragmentLoader(),this.sid=C.sessionId||A.uuid(),this.cid=C.contentId,this.useHeaders=C.useHeaders===!0,this.registerListeners())}var x=A.prototype;return x.registerListeners=function(){var m=this.hls;m.on(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),m.on(D.Events.MEDIA_DETACHED,this.onMediaDetached,this),m.on(D.Events.BUFFER_CREATED,this.onBufferCreated,this)},x.unregisterListeners=function(){var m=this.hls;m.off(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),m.off(D.Events.MEDIA_DETACHED,this.onMediaDetached,this),m.off(D.Events.BUFFER_CREATED,this.onBufferCreated,this),this.onMediaDetached()},x.destroy=function(){this.unregisterListeners(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null},x.onMediaAttached=function(m,E){this.media=E.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)},x.onMediaDetached=function(){!this.media||(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)},x.onBufferCreated=function(m,E){var C,y;this.audioBuffer=(C=E.tracks.audio)===null||C===void 0?void 0:C.buffer,this.videoBuffer=(y=E.tracks.video)===null||y===void 0?void 0:y.buffer},x.createData=function(){var m;return{v:h.CMCDVersion,sf:h.CMCDStreamingFormat.HLS,sid:this.sid,cid:this.cid,pr:(m=this.media)===null||m===void 0?void 0:m.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}},x.apply=function(m,E){E===void 0&&(E={}),I(E,this.createData());var C=E.ot===h.CMCDObjectType.INIT||E.ot===h.CMCDObjectType.VIDEO||E.ot===h.CMCDObjectType.MUXED;if(this.starved&&C&&(E.bs=!0,E.su=!0,this.starved=!1),E.su==null&&(E.su=this.buffering),this.useHeaders){var y=A.toHeaders(E);if(!Object.keys(y).length)return;m.headers||(m.headers={}),I(m.headers,y)}else{var w=A.toQuery(E);if(!w)return;m.url=A.appendQueryToUri(m.url,w)}},x.getObjectType=function(m){var E=m.type;if(E==="subtitle")return h.CMCDObjectType.TIMED_TEXT;if(m.sn==="initSegment")return h.CMCDObjectType.INIT;if(E==="audio")return h.CMCDObjectType.AUDIO;if(E==="main")return this.hls.audioTracks.length?h.CMCDObjectType.VIDEO:h.CMCDObjectType.MUXED},x.getTopBandwidth=function(m){var E=0,C,y=this.hls;if(m===h.CMCDObjectType.AUDIO)C=y.audioTracks;else{var w=y.maxAutoLevel,_=w>-1?w+1:y.levels.length;C=y.levels.slice(0,_)}for(var P=v(C),L;!(L=P()).done;){var c=L.value;c.bitrate>E&&(E=c.bitrate)}return E>0?E:NaN},x.getBufferLength=function(m){var E=this.hls.media,C=m===h.CMCDObjectType.AUDIO?this.audioBuffer:this.videoBuffer;if(!C||!E)return NaN;var y=$.BufferHelper.bufferInfo(C,E.currentTime,this.config.maxBufferHole);return y.len*1e3},x.createPlaylistLoader=function(){var m=this.config.pLoader,E=this.applyPlaylistData,C=m||this.config.loader;return function(){function y(_){this.loader=void 0,this.loader=new C(_)}var w=y.prototype;return w.destroy=function(){this.loader.destroy()},w.abort=function(){this.loader.abort()},w.load=function(P,L,c){E(P),this.loader.load(P,L,c)},d(y,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),y}()},x.createFragmentLoader=function(){var m=this.config.fLoader,E=this.applyFragmentData,C=m||this.config.loader;return function(){function y(_){this.loader=void 0,this.loader=new C(_)}var w=y.prototype;return w.destroy=function(){this.loader.destroy()},w.abort=function(){this.loader.abort()},w.load=function(P,L,c){E(P),this.loader.load(P,L,c)},d(y,[{key:"stats",get:function(){return this.loader.stats}},{key:"context",get:function(){return this.loader.context}}]),y}()},A.uuid=function(){var m=URL.createObjectURL(new Blob),E=m.toString();return URL.revokeObjectURL(m),E.slice(E.lastIndexOf("/")+1)},A.serialize=function(m){for(var E=[],C=function(z){return!Number.isNaN(z)&&z!=null&&z!==""&&z!==!1},y=function(z){return Math.round(z)},w=function(z){return y(z/100)*100},_=function(z){return encodeURIComponent(z)},P={br:y,d:y,bl:w,dl:w,mtp:w,nor:_,rtp:w,tb:y},L=Object.keys(m||{}).sort(),c=v(L),O;!(O=c()).done;){var p=O.value,R=m[p];if(!!C(R)&&!(p==="v"&&R===1)&&!(p=="pr"&&R===1)){var B=P[p];B&&(R=B(R));var M=typeof R,K=void 0;p==="ot"||p==="sf"||p==="st"?K=p+"="+R:M==="boolean"?K=p:M==="number"?K=p+"="+R:K=p+"="+JSON.stringify(R),E.push(K)}}return E.join(",")},A.toHeaders=function(m){for(var E=Object.keys(m),C={},y=["Object","Request","Session","Status"],w=[{},{},{},{}],_={br:0,d:0,ot:0,tb:0,bl:1,dl:1,mtp:1,nor:1,nrr:1,su:1,cid:2,pr:2,sf:2,sid:2,st:2,v:2,bs:3,rtp:3},P=0,L=E;P<L.length;P++){var c=L[P],O=_[c]!=null?_[c]:1;w[O][c]=m[c]}for(var p=0;p<w.length;p++){var R=A.serialize(w[p]);R&&(C["CMCD-"+y[p]]=R)}return C},A.toQuery=function(m){return"CMCD="+encodeURIComponent(A.serialize(m))},A.appendQueryToUri=function(m,E){if(!E)return m;var C=m.includes("?")?"&":"?";return""+m+C+E},A}()},"./src/controller/eme-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>P});var D=a("./src/events.ts"),h=a("./src/errors.ts"),$=a("./src/utils/logger.ts"),s=a("./src/utils/mediakeys-helper.ts"),N=a("./src/utils/keysystem-util.ts"),d=a("./src/utils/numeric-encoding-utils.ts"),g=a("./src/loader/level-key.ts"),k=a("./src/utils/hex.ts"),v=a("./src/utils/mp4-tools.ts"),S=a("./node_modules/eventemitter3/index.js"),u=a.n(S);function I(L,c){L.prototype=Object.create(c.prototype),L.prototype.constructor=L,m(L,c)}function T(L){var c=typeof Map=="function"?new Map:void 0;return T=function(p){if(p===null||!b(p))return p;if(typeof p!="function")throw new TypeError("Super expression must either be null or a function");if(typeof c<"u"){if(c.has(p))return c.get(p);c.set(p,R)}function R(){return A(p,arguments,E(this).constructor)}return R.prototype=Object.create(p.prototype,{constructor:{value:R,enumerable:!1,writable:!0,configurable:!0}}),m(R,p)},T(L)}function A(L,c,O){return x()?A=Reflect.construct.bind():A=function(R,B,M){var K=[null];K.push.apply(K,B);var V=Function.bind.apply(R,K),z=new V;return M&&m(z,M.prototype),z},A.apply(null,arguments)}function x(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(L){return Function.toString.call(L).indexOf("[native code]")!==-1}function m(L,c){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,R){return p.__proto__=R,p},m(L,c)}function E(L){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},E(L)}var C=3,y="[eme]",w=function(){function L(O){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=L.CDMCleanupPromise?[L.CDMCleanupPromise]:[],this.onMediaEncrypted=this._onMediaEncrypted.bind(this),this.onWaitingForKey=this._onWaitingForKey.bind(this),this.debug=$.logger.debug.bind($.logger,y),this.log=$.logger.log.bind($.logger,y),this.warn=$.logger.warn.bind($.logger,y),this.error=$.logger.error.bind($.logger,y),this.hls=O,this.config=O.config,this.registerListeners()}var c=L.prototype;return c.destroy=function(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.onMediaEncrypted=this.onWaitingForKey=this.keyIdToKeySessionPromise=null},c.registerListeners=function(){this.hls.on(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(D.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(D.Events.MANIFEST_LOADED,this.onManifestLoaded,this)},c.unregisterListeners=function(){this.hls.off(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(D.Events.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(D.Events.MANIFEST_LOADED,this.onManifestLoaded,this)},c.getLicenseServerUrl=function(p){var R=this.config,B=R.drmSystems,M=R.widevineLicenseUrl,K=B[p];if(K)return K.licenseUrl;if(p===s.KeySystems.WIDEVINE&&M)return M;throw new Error('no license server URL configured for key-system "'+p+'"')},c.getServerCertificateUrl=function(p){var R=this.config.drmSystems,B=R[p];if(B)return B.serverCertificateUrl;this.log('No Server Certificate in config.drmSystems["'+p+'"]')},c.attemptKeySystemAccess=function(p){var R=this,B=this.hls.levels,M=function(G,Q,ee){return!!G&&ee.indexOf(G)===Q},K=B.map(function(z){return z.audioCodec}).filter(M),V=B.map(function(z){return z.videoCodec}).filter(M);return K.length+V.length===0&&V.push("avc1.42e01e"),new Promise(function(z,G){var Q=function ee(te){var se=te.shift();R.getMediaKeysPromise(se,K,V).then(function(ue){return z({keySystem:se,mediaKeys:ue})}).catch(function(ue){te.length?ee(te):ue instanceof _?G(ue):G(new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_NO_ACCESS,error:ue,fatal:!0},ue.message))})};Q(p)})},c.requestMediaKeySystemAccess=function(p,R){var B=this.config.requestMediaKeySystemAccessFunc;if(typeof B!="function"){var M="Configured requestMediaKeySystemAccess is not a function "+B;return s.requestMediaKeySystemAccess===null&&self.location.protocol==="http:"&&(M="navigator.requestMediaKeySystemAccess is not available over insecure protocol "+location.protocol),Promise.reject(new Error(M))}return B(p,R)},c.getMediaKeysPromise=function(p,R,B){var M=this,K=(0,s.getSupportedMediaKeySystemConfigurations)(p,R,B,this.config.drmSystemOptions),V=this.keySystemAccessPromises[p],z=V==null?void 0:V.keySystemAccess;if(!z){this.log('Requesting encrypted media "'+p+'" key-system access with config: '+JSON.stringify(K)),z=this.requestMediaKeySystemAccess(p,K);var G=this.keySystemAccessPromises[p]={keySystemAccess:z};return z.catch(function(Q){M.log('Failed to obtain access to key-system "'+p+'": '+Q)}),z.then(function(Q){M.log('Access for key-system "'+Q.keySystem+'" obtained');var ee=M.fetchServerCertificate(p);return M.log('Create media-keys for "'+p+'"'),G.mediaKeys=Q.createMediaKeys().then(function(te){return M.log('Media-keys created for "'+p+'"'),ee.then(function(se){return se?M.setMediaKeysServerCertificate(te,p,se):te})}),G.mediaKeys.catch(function(te){M.error('Failed to create media-keys for "'+p+'"}: '+te)}),G.mediaKeys})}return z.then(function(){return V.mediaKeys})},c.createMediaKeySessionContext=function(p){var R=p.decryptdata,B=p.keySystem,M=p.mediaKeys;console.assert(!!M,"mediaKeys is defined"),this.log('Creating key-system session "'+B+'" keyId: '+k.default.hexDump(R.keyId||[]));var K=M.createSession(),V={decryptdata:R,keySystem:B,mediaKeys:M,mediaKeysSession:K,keyStatus:"status-pending"};return this.mediaKeySessions.push(V),V},c.renewKeySession=function(p){var R=p.decryptdata;if(R.pssh){var B=this.createMediaKeySessionContext(p),M=this.getKeyIdString(R),K="cenc";this.keyIdToKeySessionPromise[M]=this.generateRequestWithPreferredKeySession(B,K,R.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(p)},c.getKeyIdString=function(p){if(!p)throw new Error("Could not read keyId of undefined decryptdata");if(p.keyId===null)throw new Error("keyId is null");return k.default.hexDump(p.keyId)},c.updateKeySession=function(p,R){var B,M=p.mediaKeysSession;return this.log('Updating key-session "'+M.sessionId+'" for keyID '+k.default.hexDump(((B=p.decryptdata)===null||B===void 0?void 0:B.keyId)||[])+`
      } (data length: `+(R&&R.byteLength)+")"),M.update(R)},c.selectKeySystemFormat=function(p){var R=Object.keys(p.levelkeys||{});return this.keyFormatPromise||(this.log("Selecting key-system from fragment (sn: "+p.sn+" "+p.type+": "+p.level+") key formats "+R.join(", ")),this.keyFormatPromise=this.getKeyFormatPromise(R)),this.keyFormatPromise},c.getKeyFormatPromise=function(p){var R=this;return new Promise(function(B,M){var K=(0,s.getKeySystemsForConfig)(R.config),V=p.map(s.keySystemFormatToKeySystemDomain).filter(function(z){return!!z&&K.indexOf(z)!==-1});return R.getKeySystemSelectionPromise(V).then(function(z){var G=z.keySystem,Q=(0,s.keySystemDomainToKeySystemFormat)(G);Q?B(Q):M(new Error('Unable to find format for key-system "'+G+'"'))}).catch(M)})},c.loadKey=function(p){var R=this,B=p.keyInfo.decryptdata,M=this.getKeyIdString(B),K="(keyId: "+M+' format: "'+B.keyFormat+'" method: '+B.method+" uri: "+B.uri+")";this.log("Starting session for key "+K);var V=this.keyIdToKeySessionPromise[M];return V||(V=this.keyIdToKeySessionPromise[M]=this.getKeySystemForKeyPromise(B).then(function(z){var G=z.keySystem,Q=z.mediaKeys;return R.throwIfDestroyed(),R.log("Handle encrypted media sn: "+p.frag.sn+" "+p.frag.type+": "+p.frag.level+" using key "+K),R.attemptSetMediaKeys(G,Q).then(function(){R.throwIfDestroyed();var ee=R.createMediaKeySessionContext({keySystem:G,mediaKeys:Q,decryptdata:B}),te="cenc";return R.generateRequestWithPreferredKeySession(ee,te,B.pssh,"playlist-key")})}),V.catch(function(z){return R.handleError(z)})),V},c.throwIfDestroyed=function(p){if(!this.hls)throw new Error("invalid state")},c.handleError=function(p){!this.hls||(this.error(p.message),p instanceof _?this.hls.trigger(D.Events.ERROR,p.data):this.hls.trigger(D.Events.ERROR,{type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_NO_KEYS,error:p,fatal:!0}))},c.getKeySystemForKeyPromise=function(p){var R=this.getKeyIdString(p),B=this.keyIdToKeySessionPromise[R];if(!B){var M=(0,s.keySystemFormatToKeySystemDomain)(p.keyFormat),K=M?[M]:(0,s.getKeySystemsForConfig)(this.config);return this.attemptKeySystemAccess(K)}return B},c.getKeySystemSelectionPromise=function(p){if(p.length||(p=(0,s.getKeySystemsForConfig)(this.config)),p.length===0)throw new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},"Missing key-system license configuration options "+JSON.stringify({drmSystems:this.config.drmSystems}));return this.attemptKeySystemAccess(p)},c._onMediaEncrypted=function(p){var R=this,B=p.initDataType,M=p.initData;if(this.debug('"'+p.type+'" event: init data type: "'+B+'"'),M!==null){var K,V;if(B==="sinf"&&this.config.drmSystems[s.KeySystems.FAIRPLAY]){var z=(0,v.bin2str)(new Uint8Array(M));try{var G=(0,d.base64Decode)(JSON.parse(z).sinf),Q=(0,v.parseSinf)(new Uint8Array(G));if(!Q)return;K=Q.subarray(8,24),V=s.KeySystems.FAIRPLAY}catch{this.warn('Failed to parse sinf "encrypted" event message initData');return}}else{var ee=(0,v.parsePssh)(M);if(ee===null)return;ee.version===0&&ee.systemId===s.KeySystemIds.WIDEVINE&&ee.data&&(K=ee.data.subarray(8,24)),V=(0,s.keySystemIdToKeySystemDomain)(ee.systemId)}if(!(!V||!K)){for(var te=k.default.hexDump(K),se=this.keyIdToKeySessionPromise,ue=this.mediaKeySessions,q=se[te],ne=function(ye){var Ce=ue[ye],ge=Ce.decryptdata;if(ge.pssh||!ge.keyId)return"continue";var ve=k.default.hexDump(ge.keyId);if(te===ve||ge.uri.replace(/-/g,"").indexOf(te)!==-1)return q=se[ve],delete se[ve],ge.pssh=new Uint8Array(M),ge.keyId=K,q=se[te]=q.then(function(){return R.generateRequestWithPreferredKeySession(Ce,B,M,"encrypted-event-key-match")}),"break"},de=0;de<ue.length;de++){var le=ne(de);if(le!=="continue"&&le==="break")break}q||(q=se[te]=this.getKeySystemSelectionPromise([V]).then(function(pe){var ye,Ce=pe.keySystem,ge=pe.mediaKeys;R.throwIfDestroyed();var ve=new g.LevelKey("ISO-23001-7",te,(ye=(0,s.keySystemDomainToKeySystemFormat)(Ce))!=null?ye:"");return ve.pssh=new Uint8Array(M),ve.keyId=K,R.attemptSetMediaKeys(Ce,ge).then(function(){R.throwIfDestroyed();var Ee=R.createMediaKeySessionContext({decryptdata:ve,keySystem:Ce,mediaKeys:ge});return R.generateRequestWithPreferredKeySession(Ee,B,M,"encrypted-event-no-match")})})),q.catch(function(pe){return R.handleError(pe)})}}},c._onWaitingForKey=function(p){this.log('"'+p.type+'" event')},c.attemptSetMediaKeys=function(p,R){var B=this,M=this.setMediaKeysQueue.slice();this.log('Setting media-keys for "'+p+'"');var K=Promise.all(M).then(function(){if(!B.media)throw new Error("Attempted to set mediaKeys without media element attached");return B.media.setMediaKeys(R)});return this.setMediaKeysQueue.push(K),K.then(function(){B.log('Media-keys set for "'+p+'"'),M.push(K),B.setMediaKeysQueue=B.setMediaKeysQueue.filter(function(V){return M.indexOf(V)===-1})})},c.generateRequestWithPreferredKeySession=function(p,R,B,M){var K,V,z=this,G=(K=this.config.drmSystems)===null||K===void 0||(V=K[p.keySystem])===null||V===void 0?void 0:V.generateRequest;if(G)try{var Q=G.call(this.hls,R,B,p);if(!Q)throw new Error("Invalid response from configured generateRequest filter");R=Q.initDataType,B=p.decryptdata.pssh=Q.initData?new Uint8Array(Q.initData):null}catch(q){var ee;if(this.warn(q.message),(ee=this.hls)!==null&&ee!==void 0&&ee.config.debug)throw q}if(B===null)return this.log('Skipping key-session request for "'+M+'" (no initData)'),Promise.resolve(p);var te=this.getKeyIdString(p.decryptdata);this.log('Generating key-session request for "'+M+'": '+te+" (init data type: "+R+" length: "+(B?B.byteLength:null)+")");var se=new(u());p.mediaKeysSession.onmessage=function(q){var ne=p.mediaKeysSession;if(!ne){se.emit("error",new Error("invalid state"));return}var de=q.messageType,le=q.message;z.log('"'+de+'" message event for session "'+ne.sessionId+'" message size: '+le.byteLength),de==="license-request"||de==="license-renewal"?z.renewLicense(p,le).catch(function(pe){z.handleError(pe),se.emit("error",pe)}):de==="license-release"?p.keySystem===s.KeySystems.FAIRPLAY&&(z.updateKeySession(p,(0,N.strToUtf8array)("acknowledged")),z.removeSession(p)):z.warn('unhandled media key message type "'+de+'"')},p.mediaKeysSession.onkeystatuseschange=function(q){var ne=p.mediaKeysSession;if(!ne){se.emit("error",new Error("invalid state"));return}z.onKeyStatusChange(p);var de=p.keyStatus;se.emit("keyStatus",de),de==="expired"&&(z.warn(p.keySystem+" expired for key "+te),z.renewKeySession(p))};var ue=new Promise(function(q,ne){se.on("error",ne),se.on("keyStatus",function(de){de.startsWith("usable")?q():de==="output-restricted"?ne(new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):de==="internal-error"?ne(new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},'key status changed to "'+de+'"')):de==="expired"?ne(new Error("key expired while generating request")):z.warn('unhandled key status change "'+de+'"')})});return p.mediaKeysSession.generateRequest(R,B).then(function(){var q;z.log('Request generated for key-session "'+((q=p.mediaKeysSession)===null||q===void 0?void 0:q.sessionId)+'" keyId: '+te)}).catch(function(q){throw new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_NO_SESSION,error:q,fatal:!1},"Error generating key-session request: "+q)}).then(function(){return ue}).catch(function(q){throw se.removeAllListeners(),z.removeSession(p),q}).then(function(){return se.removeAllListeners(),p})},c.onKeyStatusChange=function(p){var R=this;p.mediaKeysSession.keyStatuses.forEach(function(B,M){R.log('key status change "'+B+'" for keyStatuses keyId: '+k.default.hexDump("buffer"in M?new Uint8Array(M.buffer,M.byteOffset,M.byteLength):new Uint8Array(M))+" session keyId: "+k.default.hexDump(new Uint8Array(p.decryptdata.keyId||[]))+" uri: "+p.decryptdata.uri),p.keyStatus=B})},c.fetchServerCertificate=function(p){var R=this;return new Promise(function(B,M){var K=R.getServerCertificateUrl(p);if(!K)return B();R.log('Fetching serverCertificate for "'+p+'"');var V=new XMLHttpRequest;V.open("GET",K,!0),V.responseType="arraybuffer",V.onreadystatechange=function(){V.readyState===XMLHttpRequest.DONE&&(V.status===200?B(V.response):M(new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:V},'"'+p+'" certificate request XHR failed ('+K+"). Status: "+V.status+" ("+V.statusText+")")))},V.send()})},c.setMediaKeysServerCertificate=function(p,R,B){var M=this;return new Promise(function(K,V){p.setServerCertificate(B).then(function(z){M.log("setServerCertificate "+(z?"success":"not supported by CDM")+" ("+(B==null?void 0:B.byteLength)+') on "'+R+'"'),K(p)}).catch(function(z){V(new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:z,fatal:!0},z.message))})})},c.renewLicense=function(p,R){var B=this;return this.requestLicense(p,new Uint8Array(R)).then(function(M){return B.updateKeySession(p,new Uint8Array(M)).catch(function(K){throw new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:K,fatal:!0},K.message)})})},c.setupLicenseXHR=function(p,R,B,M){var K=this,V=this.config.licenseXhrSetup;return V?Promise.resolve().then(function(){if(!B.decryptdata)throw new Error("Key removed");return V.call(K.hls,p,R,B,M)}).catch(function(z){if(!B.decryptdata)throw z;return p.open("POST",R,!0),V.call(K.hls,p,R,B,M)}).then(function(z){p.readyState||p.open("POST",R,!0);var G=z||M;return{xhr:p,licenseChallenge:G}}):(p.open("POST",R,!0),Promise.resolve({xhr:p,licenseChallenge:M}))},c.requestLicense=function(p,R){var B=this;return new Promise(function(M,K){var V=B.getLicenseServerUrl(p.keySystem);B.log("Sending license request to URL: "+V);var z=new XMLHttpRequest;z.responseType="arraybuffer",z.onreadystatechange=function(){if(!B.hls||!p.mediaKeysSession)return K(new Error("invalid state"));if(z.readyState===4)if(z.status===200){B._requestLicenseFailureCount=0;var G=z.response;B.log("License received "+(G instanceof ArrayBuffer?G.byteLength:G));var Q=B.config.licenseResponseCallback;if(Q)try{G=Q.call(B.hls,z,V,p)}catch(te){B.error(te)}M(G)}else if(B._requestLicenseFailureCount++,B._requestLicenseFailureCount>C||z.status>=400&&z.status<500)K(new _({type:h.ErrorTypes.KEY_SYSTEM_ERROR,details:h.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:z},"License Request XHR failed ("+V+"). Status: "+z.status+" ("+z.statusText+")"));else{var ee=C-B._requestLicenseFailureCount+1;B.warn("Retrying license request, "+ee+" attempts left"),B.requestLicense(p,R).then(M,K)}},p.licenseXhr&&p.licenseXhr.readyState!==XMLHttpRequest.DONE&&p.licenseXhr.abort(),p.licenseXhr=z,B.setupLicenseXHR(z,V,p,R).then(function(G){var Q=G.xhr,ee=G.licenseChallenge;Q.send(ee)})})},c.onMediaAttached=function(p,R){if(!!this.config.emeEnabled){var B=R.media;this.media=B,B.addEventListener("encrypted",this.onMediaEncrypted),B.addEventListener("waitingforkey",this.onWaitingForKey)}},c.onMediaDetached=function(){var p=this,R=this.media,B=this.mediaKeySessions;R&&(R.removeEventListener("encrypted",this.onMediaEncrypted),R.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null),this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},g.LevelKey.clearKeyUriToKeyIdMap();var M=B.length;L.CDMCleanupPromise=Promise.all(B.map(function(K){return p.removeSession(K)}).concat(R==null?void 0:R.setMediaKeys(null).catch(function(K){p.log("Could not clear media keys: "+K+". media.src: "+(R==null?void 0:R.src))}))).then(function(){M&&(p.log("finished closing key sessions and clearing media keys"),B.length=0)}).catch(function(K){p.log("Could not close sessions and clear media keys: "+K+". media.src: "+(R==null?void 0:R.src))})},c.onManifestLoaded=function(p,R){var B=R.sessionKeys;if(!(!B||!this.config.emeEnabled)&&!this.keyFormatPromise){var M=B.reduce(function(K,V){return K.indexOf(V.keyFormat)===-1&&K.push(V.keyFormat),K},[]);this.log("Selecting key-system from session-keys "+M.join(", ")),this.keyFormatPromise=this.getKeyFormatPromise(M)}},c.removeSession=function(p){var R=this,B=p.mediaKeysSession,M=p.licenseXhr;if(B){this.log("Remove licenses and keys and close session "+B.sessionId),B.onmessage=null,B.onkeystatuseschange=null,M&&M.readyState!==XMLHttpRequest.DONE&&M.abort(),p.mediaKeysSession=p.decryptdata=p.licenseXhr=void 0;var K=this.mediaKeySessions.indexOf(p);return K>-1&&this.mediaKeySessions.splice(K,1),B.remove().catch(function(V){R.log("Could not remove session: "+V)}).then(function(){return B.close()}).catch(function(V){R.log("Could not close session: "+V)})}},L}();w.CDMCleanupPromise=void 0;var _=function(L){I(c,L);function c(O,p){var R;return R=L.call(this,p)||this,R.data=void 0,R.data=O,O.err=O.error,R}return c}(T(Error));const P=w},"./src/controller/fps-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>s});var D=a("./src/events.ts"),h=a("./src/utils/logger.ts"),$=function(){function N(g){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=g,this.registerListeners()}var d=N.prototype;return d.setStreamController=function(k){this.streamController=k},d.registerListeners=function(){this.hls.on(D.Events.MEDIA_ATTACHING,this.onMediaAttaching,this)},d.unregisterListeners=function(){this.hls.off(D.Events.MEDIA_ATTACHING,this.onMediaAttaching)},d.destroy=function(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null},d.onMediaAttaching=function(k,v){var S=this.hls.config;if(S.capLevelOnFPSDrop){var u=v.media instanceof self.HTMLVideoElement?v.media:null;this.media=u,u&&typeof u.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),S.fpsDroppedMonitoringPeriod)}},d.checkFPS=function(k,v,S){var u=performance.now();if(v){if(this.lastTime){var I=u-this.lastTime,T=S-this.lastDroppedFrames,A=v-this.lastDecodedFrames,x=1e3*T/I,b=this.hls;if(b.trigger(D.Events.FPS_DROP,{currentDropped:T,currentDecoded:A,totalDroppedFrames:S}),x>0&&T>b.config.fpsDroppedMonitoringThreshold*A){var m=b.currentLevel;h.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+m),m>0&&(b.autoLevelCapping===-1||b.autoLevelCapping>=m)&&(m=m-1,b.trigger(D.Events.FPS_DROP_LEVEL_CAPPING,{level:m,droppedLevel:b.currentLevel}),b.autoLevelCapping=m,this.streamController.nextLevelSwitch())}}this.lastTime=u,this.lastDroppedFrames=S,this.lastDecodedFrames=v}},d.checkFPSInterval=function(){var k=this.media;if(k)if(this.isVideoPlaybackQualityAvailable){var v=k.getVideoPlaybackQuality();this.checkFPS(k,v.totalVideoFrames,v.droppedVideoFrames)}else this.checkFPS(k,k.webkitDecodedFrameCount,k.webkitDroppedFrameCount)},N}();const s=$},"./src/controller/fragment-finders.ts":(i,r,a)=>{a.r(r),a.d(r,{findFragWithCC:()=>g,findFragmentByPDT:()=>$,findFragmentByPTS:()=>s,fragmentWithinToleranceTest:()=>N,pdtWithinToleranceTest:()=>d});var D=a("./src/polyfills/number.ts"),h=a("./src/utils/binary-search.ts");function $(k,v,S){if(v===null||!Array.isArray(k)||!k.length||!(0,D.isFiniteNumber)(v))return null;var u=k[0].programDateTime;if(v<(u||0))return null;var I=k[k.length-1].endProgramDateTime;if(v>=(I||0))return null;S=S||0;for(var T=0;T<k.length;++T){var A=k[T];if(d(v,S,A))return A}return null}function s(k,v,S,u){S===void 0&&(S=0),u===void 0&&(u=0);var I=null;if(k?I=v[k.sn-v[0].sn+1]||null:S===0&&v[0].start===0&&(I=v[0]),I&&N(S,u,I)===0)return I;var T=h.default.search(v,N.bind(null,S,u));return T&&(T!==k||!I)?T:I}function N(k,v,S){if(k===void 0&&(k=0),v===void 0&&(v=0),S.start<=k&&S.start+S.duration>k)return 0;var u=Math.min(v,S.duration+(S.deltaPTS?S.deltaPTS:0));return S.start+S.duration-u<=k?1:S.start-u>k&&S.start?-1:0}function d(k,v,S){var u=Math.min(v,S.duration+(S.deltaPTS?S.deltaPTS:0))*1e3,I=S.endProgramDateTime||0;return I-u>k}function g(k,v){return h.default.search(k,function(S){return S.cc<v?1:S.cc>v?-1:0})}},"./src/controller/fragment-tracker.ts":(i,r,a)=>{a.r(r),a.d(r,{FragmentState:()=>$,FragmentTracker:()=>s});var D=a("./src/events.ts"),h=a("./src/types/loader.ts"),$;(function(g){g.NOT_LOADED="NOT_LOADED",g.APPENDING="APPENDING",g.PARTIAL="PARTIAL",g.OK="OK"})($||($={}));var s=function(){function g(v){this.activeFragment=null,this.activeParts=null,this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hls=v,this._registerListeners()}var k=g.prototype;return k._registerListeners=function(){var S=this.hls;S.on(D.Events.BUFFER_APPENDED,this.onBufferAppended,this),S.on(D.Events.FRAG_BUFFERED,this.onFragBuffered,this),S.on(D.Events.FRAG_LOADED,this.onFragLoaded,this)},k._unregisterListeners=function(){var S=this.hls;S.off(D.Events.BUFFER_APPENDED,this.onBufferAppended,this),S.off(D.Events.FRAG_BUFFERED,this.onFragBuffered,this),S.off(D.Events.FRAG_LOADED,this.onFragLoaded,this)},k.destroy=function(){this._unregisterListeners(),this.fragments=this.endListFragments=this.timeRanges=this.activeFragment=this.activeParts=null},k.getAppendedFrag=function(S,u){if(u===h.PlaylistLevelType.MAIN){var I=this.activeFragment,T=this.activeParts;if(!I)return null;if(T)for(var A=T.length;A--;){var x=T[A],b=x?x.end:I.appendedPTS;if(x.start<=S&&b!==void 0&&S<=b)return A>9&&(this.activeParts=T.slice(A-9)),x}else if(I.start<=S&&I.appendedPTS!==void 0&&S<=I.appendedPTS)return I}return this.getBufferedFrag(S,u)},k.getBufferedFrag=function(S,u){for(var I=this.fragments,T=Object.keys(I),A=T.length;A--;){var x=I[T[A]];if((x==null?void 0:x.body.type)===u&&x.buffered){var b=x.body;if(b.start<=S&&S<=b.end)return b}}return null},k.detectEvictedFragments=function(S,u,I){var T=this;this.timeRanges&&(this.timeRanges[S]=u),Object.keys(this.fragments).forEach(function(A){var x=T.fragments[A];if(!!x){if(!x.buffered&&!x.loaded){x.body.type===I&&T.removeFragment(x.body);return}var b=x.range[S];!b||b.time.some(function(m){var E=!T.isTimeBuffered(m.startPTS,m.endPTS,u);return E&&T.removeFragment(x.body),E})}})},k.detectPartialFragments=function(S){var u=this,I=this.timeRanges,T=S.frag,A=S.part;if(!(!I||T.sn==="initSegment")){var x=d(T),b=this.fragments[x];!b||(Object.keys(I).forEach(function(m){var E=T.elementaryStreams[m];if(!!E){var C=I[m],y=A!==null||E.partial===!0;b.range[m]=u.getBufferedTimes(T,A,y,C)}}),b.loaded=null,Object.keys(b.range).length?(b.buffered=!0,b.body.endList&&(this.endListFragments[b.body.type]=b)):this.removeFragment(b.body))}},k.fragBuffered=function(S){var u=d(S),I=this.fragments[u];I&&(I.loaded=null,I.buffered=!0)},k.getBufferedTimes=function(S,u,I,T){for(var A={time:[],partial:I},x=u?u.start:S.start,b=u?u.end:S.end,m=S.minEndPTS||b,E=S.maxStartPTS||x,C=0;C<T.length;C++){var y=T.start(C)-this.bufferPadding,w=T.end(C)+this.bufferPadding;if(E>=y&&m<=w){A.time.push({startPTS:Math.max(x,T.start(C)),endPTS:Math.min(b,T.end(C))});break}else if(x<w&&b>y)A.partial=!0,A.time.push({startPTS:Math.max(x,T.start(C)),endPTS:Math.min(b,T.end(C))});else if(b<=y)break}return A},k.getPartialFragment=function(S){var u=null,I,T,A,x=0,b=this.bufferPadding,m=this.fragments;return Object.keys(m).forEach(function(E){var C=m[E];!C||N(C)&&(T=C.body.start-b,A=C.body.end+b,S>=T&&S<=A&&(I=Math.min(S-T,A-S),x<=I&&(u=C.body,x=I)))}),u},k.isEndListAppended=function(S){var u=this.endListFragments[S];return u!==void 0&&(u.buffered||N(u))},k.getState=function(S){var u=d(S),I=this.fragments[u];return I?I.buffered?N(I)?$.PARTIAL:$.OK:$.APPENDING:$.NOT_LOADED},k.isTimeBuffered=function(S,u,I){for(var T,A,x=0;x<I.length;x++){if(T=I.start(x)-this.bufferPadding,A=I.end(x)+this.bufferPadding,S>=T&&u<=A)return!0;if(u<=T)return!1}return!1},k.onFragLoaded=function(S,u){var I=u.frag,T=u.part;if(!(I.sn==="initSegment"||I.bitrateTest||T)){var A=d(I);this.fragments[A]={body:I,loaded:u,buffered:!1,range:Object.create(null)}}},k.onBufferAppended=function(S,u){var I=this,T=u.frag,A=u.part,x=u.timeRanges;if(T.type===h.PlaylistLevelType.MAIN)if(this.activeFragment!==T&&(this.activeFragment=T,T.appendedPTS=void 0),A){var b=this.activeParts;b||(this.activeParts=b=[]),b.push(A)}else this.activeParts=null;this.timeRanges=x,Object.keys(x).forEach(function(m){var E=x[m];if(I.detectEvictedFragments(m,E),!A&&T.type===h.PlaylistLevelType.MAIN){var C=T.elementaryStreams[m];if(!C)return;for(var y=0;y<E.length;y++){var w=E.end(y);w<=C.endPTS&&w>C.startPTS?T.appendedPTS=Math.max(w,T.appendedPTS||0):T.appendedPTS=C.endPTS}}})},k.onFragBuffered=function(S,u){this.detectPartialFragments(u)},k.hasFragment=function(S){var u=d(S);return!!this.fragments[u]},k.removeFragmentsInRange=function(S,u,I){var T=this;Object.keys(this.fragments).forEach(function(A){var x=T.fragments[A];if(!!x&&x.buffered){var b=x.body;b.type===I&&b.start<u&&b.end>S&&T.removeFragment(b)}})},k.removeFragment=function(S){var u=d(S);S.stats.loaded=0,S.clearElementaryStreamInfo(),S.appendedPTS=void 0,delete this.fragments[u],S.endList&&delete this.endListFragments[S.type]},k.removeAllFragments=function(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activeFragment=null,this.activeParts=null},g}();function N(g){var k,v;return g.buffered&&(((k=g.range.video)===null||k===void 0?void 0:k.partial)||((v=g.range.audio)===null||v===void 0?void 0:v.partial))}function d(g){return g.type+"_"+g.level+"_"+g.urlId+"_"+g.sn}},"./src/controller/gap-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{MAX_START_GAP_JUMP:()=>d,SKIP_BUFFER_HOLE_STEP_SECONDS:()=>g,SKIP_BUFFER_RANGE_START:()=>k,STALL_MINIMUM_DURATION_MS:()=>N,default:()=>v});var D=a("./src/utils/buffer-helper.ts"),h=a("./src/errors.ts"),$=a("./src/events.ts"),s=a("./src/utils/logger.ts"),N=250,d=2,g=.1,k=.05,v=function(){function S(I,T,A,x){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=I,this.media=T,this.fragmentTracker=A,this.hls=x}var u=S.prototype;return u.destroy=function(){this.media=null,this.hls=this.fragmentTracker=null},u.poll=function(T,A){var x=this.config,b=this.media,m=this.stalled;if(b!==null){var E=b.currentTime,C=b.seeking,y=this.seeking&&!C,w=!this.seeking&&C;if(this.seeking=C,E!==T){if(this.moved=!0,m!==null){if(this.stallReported){var _=self.performance.now()-m;s.logger.warn("playback not stuck anymore @"+E+", after "+Math.round(_)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}return}if((w||y)&&(this.stalled=null),!(b.paused&&!C||b.ended||b.playbackRate===0||!D.BufferHelper.getBuffered(b).length)){var P=D.BufferHelper.bufferInfo(b,E,0),L=P.len>0,c=P.nextStart||0;if(!(!L&&!c)){if(C){var O=P.len>d,p=!c||A&&A.start<=E||c-E>d&&!this.fragmentTracker.getPartialFragment(E);if(O||p)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var R,B=Math.max(c,P.start||0)-E,M=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,K=M==null||(R=M.details)===null||R===void 0?void 0:R.live,V=K?M.details.targetduration*2:d;if(B>0&&B<=V){this._trySkipBufferHole(null);return}}var z=self.performance.now();if(m===null){this.stalled=z;return}var G=z-m;if(!(!C&&G>=N&&(this._reportStall(P),!this.media))){var Q=D.BufferHelper.bufferInfo(b,E,x.maxBufferHole);this._tryFixBufferStall(Q,G)}}}}},u._tryFixBufferStall=function(T,A){var x=this.config,b=this.fragmentTracker,m=this.media;if(m!==null){var E=m.currentTime,C=b.getPartialFragment(E);if(C){var y=this._trySkipBufferHole(C);if(y||!this.media)return}T.len>x.maxBufferHole&&A>x.highBufferWatchdogPeriod*1e3&&(s.logger.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}},u._reportStall=function(T){var A=this.hls,x=this.media,b=this.stallReported;!b&&x&&(this.stallReported=!0,s.logger.warn("Playback stalling at @"+x.currentTime+" due to low buffer ("+JSON.stringify(T)+")"),A.trigger($.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:T.len}))},u._trySkipBufferHole=function(T){var A=this.config,x=this.hls,b=this.media;if(b===null)return 0;for(var m=b.currentTime,E=0,C=D.BufferHelper.getBuffered(b),y=0;y<C.length;y++){var w=C.start(y);if(m+A.maxBufferHole>=E&&m<w){var _=Math.max(w+k,b.currentTime+g);return s.logger.warn("skipping hole, adjusting currentTime from "+m+" to "+_),this.moved=!0,this.stalled=null,b.currentTime=_,T&&x.trigger($.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+m+" to "+_,frag:T}),_}E=C.end(y)}return 0},u._tryNudgeBuffer=function(){var T=this.config,A=this.hls,x=this.media,b=this.nudgeRetry;if(x!==null){var m=x.currentTime;if(this.nudgeRetry++,b<T.nudgeMaxRetry){var E=m+(b+1)*T.nudgeOffset;s.logger.warn("Nudging 'currentTime' from "+m+" to "+E),x.currentTime=E,A.trigger($.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else s.logger.error("Playhead still not moving while enough data buffered @"+m+" after "+T.nudgeMaxRetry+" nudges"),A.trigger($.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})}},S}()},"./src/controller/id3-track-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>T});var D=a("./src/polyfills/number.ts"),h=a("./src/events.ts"),$=a("./src/utils/texttrack-utils.ts"),s=a("./src/demux/id3.ts"),N=a("./src/loader/date-range.ts"),d=a("./src/types/demuxer.ts"),g=.25;function k(){return self.WebKitDataCue||self.VTTCue||self.TextTrackCue}var v=function(){var A=k();try{new A(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY}();function S(A,x){return A.getTime()/1e3-x}function u(A){return Uint8Array.from(A.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}var I=function(){function A(b){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=b,this._registerListeners()}var x=A.prototype;return x.destroy=function(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null},x._registerListeners=function(){var m=this.hls;m.on(h.Events.MEDIA_ATTACHED,this.onMediaAttached,this),m.on(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),m.on(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),m.on(h.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),m.on(h.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),m.on(h.Events.LEVEL_UPDATED,this.onLevelUpdated,this)},x._unregisterListeners=function(){var m=this.hls;m.off(h.Events.MEDIA_ATTACHED,this.onMediaAttached,this),m.off(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),m.off(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),m.off(h.Events.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),m.off(h.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),m.off(h.Events.LEVEL_UPDATED,this.onLevelUpdated,this)},x.onMediaAttached=function(m,E){this.media=E.media},x.onMediaDetaching=function(){!this.id3Track||((0,$.clearCurrentCues)(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})},x.onManifestLoading=function(){this.dateRangeCuesAppended={}},x.createTrack=function(m){var E=this.getID3Track(m.textTracks);return E.mode="hidden",E},x.getID3Track=function(m){if(!!this.media){for(var E=0;E<m.length;E++){var C=m[E];if(C.kind==="metadata"&&C.label==="id3")return(0,$.sendAddTrackEvent)(C,this.media),C}return this.media.addTextTrack("metadata","id3")}},x.onFragParsingMetadata=function(m,E){if(!!this.media){var C=this.hls.config,y=C.enableEmsgMetadataCues,w=C.enableID3MetadataCues;if(!(!y&&!w)){var _=E.samples;this.id3Track||(this.id3Track=this.createTrack(this.media));for(var P=k(),L=0;L<_.length;L++){var c=_[L].type;if(!(c===d.MetadataSchema.emsg&&!y||!w)){var O=s.getID3Frames(_[L].data);if(O){var p=_[L].pts,R=p+_[L].duration;R>v&&(R=v);var B=R-p;B<=0&&(R=p+g);for(var M=0;M<O.length;M++){var K=O[M];if(!s.isTimeStampFrame(K)){this.updateId3CueEnds(p);var V=new P(p,R,"");V.value=K,c&&(V.type=c),this.id3Track.addCue(V)}}}}}}}},x.updateId3CueEnds=function(m){var E,C=(E=this.id3Track)===null||E===void 0?void 0:E.cues;if(C)for(var y=C.length;y--;){var w=C[y];w.startTime<m&&w.endTime===v&&(w.endTime=m)}},x.onBufferFlushing=function(m,E){var C=E.startOffset,y=E.endOffset,w=E.type,_=this.id3Track,P=this.hls;if(!!P){var L=P.config,c=L.enableEmsgMetadataCues,O=L.enableID3MetadataCues;if(_&&(c||O)){var p;w==="audio"?p=function(B){return B.type===d.MetadataSchema.audioId3&&O}:w==="video"?p=function(B){return B.type===d.MetadataSchema.emsg&&c}:p=function(B){return B.type===d.MetadataSchema.audioId3&&O||B.type===d.MetadataSchema.emsg&&c},(0,$.removeCuesInRange)(_,C,y,p)}}},x.onLevelUpdated=function(m,E){var C=this,y=E.details;if(!(!this.media||!y.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)){var w=this.dateRangeCuesAppended,_=this.id3Track,P=y.dateRanges,L=Object.keys(P);if(_)for(var c=Object.keys(w).filter(function(z){return!L.includes(z)}),O=function(G){var Q=c[G];Object.keys(w[Q].cues).forEach(function(ee){_.removeCue(w[Q].cues[ee])}),delete w[Q]},p=c.length;p--;)O(p);var R=y.fragments[y.fragments.length-1];if(!(L.length===0||!(0,D.isFiniteNumber)(R==null?void 0:R.programDateTime))){this.id3Track||(this.id3Track=this.createTrack(this.media));for(var B=R.programDateTime/1e3-R.start,M=k(),K=function(G){var Q=L[G],ee=P[Q],te=w[Q],se=(te==null?void 0:te.cues)||{},ue=(te==null?void 0:te.durationKnown)||!1,q=S(ee.startDate,B),ne=v,de=ee.endDate;if(de)ne=S(de,B),ue=!0;else if(ee.endOnNext&&!ue){var le=L.reduce(function(Ee,Ie){var Le=P[Ie];return Le.class===ee.class&&Le.id!==Ie&&Le.startDate>ee.startDate&&Ee.push(Le),Ee},[]).sort(function(Ee,Ie){return Ee.startDate.getTime()-Ie.startDate.getTime()})[0];le&&(ne=S(le.startDate,B),ue=!0)}for(var pe=Object.keys(ee.attr),ye=0;ye<pe.length;ye++){var Ce=pe[ye];if(!(Ce===N.DateRangeAttribute.ID||Ce===N.DateRangeAttribute.CLASS||Ce===N.DateRangeAttribute.START_DATE||Ce===N.DateRangeAttribute.DURATION||Ce===N.DateRangeAttribute.END_DATE||Ce===N.DateRangeAttribute.END_ON_NEXT)){var ge=se[Ce];if(ge)ue&&!te.durationKnown&&(ge.endTime=ne);else{var ve=ee.attr[Ce];ge=new M(q,ne,""),(Ce===N.DateRangeAttribute.SCTE35_OUT||Ce===N.DateRangeAttribute.SCTE35_IN)&&(ve=u(ve)),ge.value={key:Ce,data:ve},ge.type=d.MetadataSchema.dateRange,C.id3Track.addCue(ge),se[Ce]=ge}}}w[Q]={cues:se,dateRange:ee,durationKnown:ue}},V=0;V<L.length;V++)K(V)}}},A}();const T=I},"./src/controller/latency-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>k});var D=a("./src/errors.ts"),h=a("./src/events.ts"),$=a("./src/utils/logger.ts");function s(v,S){for(var u=0;u<S.length;u++){var I=S[u];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(v,d(I.key),I)}}function N(v,S,u){return S&&s(v.prototype,S),u&&s(v,u),Object.defineProperty(v,"prototype",{writable:!1}),v}function d(v){var S=g(v,"string");return typeof S=="symbol"?S:String(S)}function g(v,S){if(typeof v!="object"||v===null)return v;var u=v[Symbol.toPrimitive];if(u!==void 0){var I=u.call(v,S||"default");if(typeof I!="object")return I;throw new TypeError("@@toPrimitive must return a primitive value.")}return(S==="string"?String:Number)(v)}var k=function(){function v(u){var I=this;this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=function(){return I.timeupdate()},this.hls=u,this.config=u.config,this.registerListeners()}var S=v.prototype;return S.destroy=function(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null},S.registerListeners=function(){this.hls.on(h.Events.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(h.Events.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(h.Events.ERROR,this.onError,this)},S.unregisterListeners=function(){this.hls.off(h.Events.MEDIA_ATTACHED,this.onMediaAttached),this.hls.off(h.Events.MEDIA_DETACHING,this.onMediaDetaching),this.hls.off(h.Events.MANIFEST_LOADING,this.onManifestLoading),this.hls.off(h.Events.LEVEL_UPDATED,this.onLevelUpdated),this.hls.off(h.Events.ERROR,this.onError)},S.onMediaAttached=function(I,T){this.media=T.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)},S.onMediaDetaching=function(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)},S.onManifestLoading=function(){this.levelDetails=null,this._latency=null,this.stallCount=0},S.onLevelUpdated=function(I,T){var A=T.details;this.levelDetails=A,A.advanced&&this.timeupdate(),!A.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)},S.onError=function(I,T){T.details===D.ErrorDetails.BUFFER_STALLED_ERROR&&(this.stallCount++,$.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))},S.timeupdate=function(){var I=this.media,T=this.levelDetails;if(!(!I||!T)){this.currentTime=I.currentTime;var A=this.computeLatency();if(A!==null){this._latency=A;var x=this.config,b=x.lowLatencyMode,m=x.maxLiveSyncPlaybackRate;if(!(!b||m===1)){var E=this.targetLatency;if(E!==null){var C=A-E,y=Math.min(this.maxLatency,E+T.targetduration),w=C<y;if(T.live&&w&&C>.05&&this.forwardBufferLength>1){var _=Math.min(2,Math.max(1,m)),P=Math.round(2/(1+Math.exp(-.75*C-this.edgeStalled))*20)/20;I.playbackRate=Math.min(_,Math.max(1,P))}else I.playbackRate!==1&&I.playbackRate!==0&&(I.playbackRate=1)}}}}},S.estimateLiveEdge=function(){var I=this.levelDetails;return I===null?null:I.edge+I.age},S.computeLatency=function(){var I=this.estimateLiveEdge();return I===null?null:I-this.currentTime},N(v,[{key:"latency",get:function(){return this._latency||0}},{key:"maxLatency",get:function(){var I=this.config,T=this.levelDetails;return I.liveMaxLatencyDuration!==void 0?I.liveMaxLatencyDuration:T?I.liveMaxLatencyDurationCount*T.targetduration:0}},{key:"targetLatency",get:function(){var I=this.levelDetails;if(I===null)return null;var T=I.holdBack,A=I.partHoldBack,x=I.targetduration,b=this.config,m=b.liveSyncDuration,E=b.liveSyncDurationCount,C=b.lowLatencyMode,y=this.hls.userConfig,w=C&&A||T;(y.liveSyncDuration||y.liveSyncDurationCount||w===0)&&(w=m!==void 0?m:E*x);var _=x,P=1;return w+Math.min(this.stallCount*P,_)}},{key:"liveSyncPosition",get:function(){var I=this.estimateLiveEdge(),T=this.targetLatency,A=this.levelDetails;if(I===null||T===null||A===null)return null;var x=A.edge,b=I-T-this.edgeStalled,m=x-A.totalduration,E=x-(this.config.lowLatencyMode&&A.partTarget||A.targetduration);return Math.min(Math.max(m,b),E)}},{key:"drift",get:function(){var I=this.levelDetails;return I===null?1:I.drift}},{key:"edgeStalled",get:function(){var I=this.levelDetails;if(I===null)return 0;var T=(this.config.lowLatencyMode&&I.partTarget||I.targetduration)*3;return Math.max(I.age-T,0)}},{key:"forwardBufferLength",get:function(){var I=this.media,T=this.levelDetails;if(!I||!T)return 0;var A=I.buffered.length;return(A?I.buffered.end(A-1):T.edge)-this.currentTime}}]),v}()},"./src/controller/level-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>b});var D=a("./src/types/level.ts"),h=a("./src/events.ts"),$=a("./src/errors.ts"),s=a("./src/utils/codecs.ts"),N=a("./src/controller/level-helper.ts"),d=a("./src/controller/base-playlist-controller.ts"),g=a("./src/types/loader.ts");function k(){return k=Object.assign?Object.assign.bind():function(m){for(var E=1;E<arguments.length;E++){var C=arguments[E];for(var y in C)Object.prototype.hasOwnProperty.call(C,y)&&(m[y]=C[y])}return m},k.apply(this,arguments)}function v(m,E){for(var C=0;C<E.length;C++){var y=E[C];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,u(y.key),y)}}function S(m,E,C){return E&&v(m.prototype,E),C&&v(m,C),Object.defineProperty(m,"prototype",{writable:!1}),m}function u(m){var E=I(m,"string");return typeof E=="symbol"?E:String(E)}function I(m,E){if(typeof m!="object"||m===null)return m;var C=m[Symbol.toPrimitive];if(C!==void 0){var y=C.call(m,E||"default");if(typeof y!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(E==="string"?String:Number)(m)}function T(m,E){m.prototype=Object.create(E.prototype),m.prototype.constructor=m,A(m,E)}function A(m,E){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(y,w){return y.__proto__=w,y},A(m,E)}var x=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),b=function(m){T(E,m);function E(y){var w;return w=m.call(this,y,"[level-controller]")||this,w._levels=[],w._firstLevel=-1,w._startLevel=void 0,w.currentLevelIndex=-1,w.manualLevelIndex=-1,w.onParsedComplete=void 0,w._registerListeners(),w}var C=E.prototype;return C._registerListeners=function(){var w=this.hls;w.on(h.Events.MANIFEST_LOADED,this.onManifestLoaded,this),w.on(h.Events.LEVEL_LOADED,this.onLevelLoaded,this),w.on(h.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),w.on(h.Events.FRAG_LOADED,this.onFragLoaded,this),w.on(h.Events.ERROR,this.onError,this)},C._unregisterListeners=function(){var w=this.hls;w.off(h.Events.MANIFEST_LOADED,this.onManifestLoaded,this),w.off(h.Events.LEVEL_LOADED,this.onLevelLoaded,this),w.off(h.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),w.off(h.Events.FRAG_LOADED,this.onFragLoaded,this),w.off(h.Events.ERROR,this.onError,this)},C.destroy=function(){this._unregisterListeners(),this.manualLevelIndex=-1,this._levels.length=0,m.prototype.destroy.call(this)},C.startLoad=function(){var w=this._levels;w.forEach(function(_){_.loadError=0}),m.prototype.startLoad.call(this)},C.onManifestLoaded=function(w,_){var P=[],L=[],c=[],O,p={},R,B=!1,M=!1,K=!1;if(_.levels.forEach(function(Q){var ee=Q.attrs;B=B||!!(Q.width&&Q.height),M=M||!!Q.videoCodec,K=K||!!Q.audioCodec,x&&Q.audioCodec&&Q.audioCodec.indexOf("mp4a.40.34")!==-1&&(Q.audioCodec=void 0);var te=Q.bitrate+"-"+Q.attrs.RESOLUTION+"-"+Q.attrs.CODECS;R=p[te],R?R.url.push(Q.url):(R=new D.Level(Q),p[te]=R,P.push(R)),ee&&(ee.AUDIO&&(0,N.addGroupId)(R,"audio",ee.AUDIO),ee.SUBTITLES&&(0,N.addGroupId)(R,"text",ee.SUBTITLES))}),(B||M)&&K&&(P=P.filter(function(Q){var ee=Q.videoCodec,te=Q.width,se=Q.height;return!!ee||!!(te&&se)})),P=P.filter(function(Q){var ee=Q.audioCodec,te=Q.videoCodec;return(!ee||(0,s.isCodecSupportedInMp4)(ee,"audio"))&&(!te||(0,s.isCodecSupportedInMp4)(te,"video"))}),_.audioTracks&&(L=_.audioTracks.filter(function(Q){return!Q.audioCodec||(0,s.isCodecSupportedInMp4)(Q.audioCodec,"audio")}),(0,N.assignTrackIdsByGroup)(L)),_.subtitles&&(c=_.subtitles,(0,N.assignTrackIdsByGroup)(c)),P.length>0){O=P[0].bitrate,P.sort(function(Q,ee){return Q.attrs["HDCP-LEVEL"]!==ee.attrs["HDCP-LEVEL"]?(Q.attrs["HDCP-LEVEL"]||"")>(ee.attrs["HDCP-LEVEL"]||"")?1:-1:Q.bitrate!==ee.bitrate?Q.bitrate-ee.bitrate:Q.attrs.SCORE!==ee.attrs.SCORE?Q.attrs.decimalFloatingPoint("SCORE")-ee.attrs.decimalFloatingPoint("SCORE"):B&&Q.height!==ee.height?Q.height-ee.height:0}),this._levels=P;for(var V=0;V<P.length;V++)if(P[V].bitrate===O){this._firstLevel=V,this.log("manifest loaded, "+P.length+" level(s) found, first bitrate: "+O);break}var z=K&&!M,G={levels:P,audioTracks:L,subtitleTracks:c,sessionData:_.sessionData,sessionKeys:_.sessionKeys,firstLevel:this._firstLevel,stats:_.stats,audio:K,video:M,altAudio:!z&&L.some(function(Q){return!!Q.url})};this.hls.trigger(h.Events.MANIFEST_PARSED,G),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}else this.hls.trigger(h.Events.ERROR,{type:$.ErrorTypes.MEDIA_ERROR,details:$.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:_.url,reason:"no level with compatible codecs found in manifest"})},C.onError=function(w,_){var P,L;if(m.prototype.onError.call(this,w,_),!_.fatal){var c=_.context,O=this._levels[this.currentLevelIndex];if(c&&(c.type===g.PlaylistContextType.AUDIO_TRACK&&O.audioGroupIds&&c.groupId===O.audioGroupIds[O.urlId]||c.type===g.PlaylistContextType.SUBTITLE_TRACK&&O.textGroupIds&&c.groupId===O.textGroupIds[O.urlId])){this.redundantFailover(this.currentLevelIndex);return}var p=!1,R=!0,B;switch(_.details){case $.ErrorDetails.FRAG_LOAD_ERROR:case $.ErrorDetails.FRAG_LOAD_TIMEOUT:case $.ErrorDetails.KEY_LOAD_ERROR:case $.ErrorDetails.KEY_LOAD_TIMEOUT:if(_.frag){var M=_.frag.type===g.PlaylistLevelType.MAIN?_.frag.level:this.currentLevelIndex,K=this._levels[M];K?(K.fragmentError++,K.fragmentError>this.hls.config.fragLoadingMaxRetry&&(B=M)):B=M}break;case $.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{var V=O.attrs["HDCP-LEVEL"];V&&(this.hls.maxHdcpLevel=D.HdcpLevels[D.HdcpLevels.indexOf(V)-1],this.warn('Restricting playback to HDCP-LEVEL of "'+this.hls.maxHdcpLevel+'" or lower'))}case $.ErrorDetails.FRAG_PARSING_ERROR:case $.ErrorDetails.KEY_SYSTEM_NO_SESSION:B=((P=_.frag)===null||P===void 0?void 0:P.type)===g.PlaylistLevelType.MAIN?_.frag.level:this.currentLevelIndex,_.levelRetry=!1;break;case $.ErrorDetails.LEVEL_LOAD_ERROR:case $.ErrorDetails.LEVEL_LOAD_TIMEOUT:c&&(c.deliveryDirectives&&(R=!1),B=c.level),p=!0;break;case $.ErrorDetails.REMUX_ALLOC_ERROR:B=(L=_.level)!=null?L:this.currentLevelIndex,p=!0;break}B!==void 0&&this.recoverLevel(_,B,p,R)}},C.recoverLevel=function(w,_,P,L){var c=w.details,O=this._levels[_];if(O.loadError++,P){var p=this.retryLoadingOrFail(w);if(p)w.levelRetry=!0;else{this.currentLevelIndex=-1;return}}if(L){var R=O.url.length;if(R>1&&O.loadError<R)w.levelRetry=!0,this.redundantFailover(_);else if(this.manualLevelIndex===-1){for(var B=-1,M=this._levels,K=M.length;K--;){var V=(K+this.currentLevelIndex)%M.length;if(V!==this.currentLevelIndex&&M[V].loadError===0){B=V;break}}B>-1&&this.currentLevelIndex!==B?(this.warn(c+": switch to "+B),w.levelRetry=!0,this.hls.nextAutoLevel=B):w.levelRetry===!1&&(w.fatal=!0)}}},C.redundantFailover=function(w){var _=this._levels[w],P=_.url.length;if(P>1){var L=(_.urlId+1)%P;this.warn("Switching to redundant URL-id "+L),this._levels.forEach(function(c){c.urlId=L}),this.level=w}},C.onFragLoaded=function(w,_){var P=_.frag;if(P!==void 0&&P.type===g.PlaylistLevelType.MAIN){var L=this._levels[P.level];L!==void 0&&(L.fragmentError=0,L.loadError=0)}},C.onLevelLoaded=function(w,_){var P,L=_.level,c=_.details,O=this._levels[L];if(!O){var p;this.warn("Invalid level index "+L),(p=_.deliveryDirectives)!==null&&p!==void 0&&p.skip&&(c.deltaUpdateFailed=!0);return}L===this.currentLevelIndex?(O.fragmentError===0&&(O.loadError=0,this.retryCount=0),this.playlistLoaded(L,_,O.details)):(P=_.deliveryDirectives)!==null&&P!==void 0&&P.skip&&(c.deltaUpdateFailed=!0)},C.onAudioTrackSwitched=function(w,_){var P=this.hls.levels[this.currentLevelIndex];if(!!P&&P.audioGroupIds){for(var L=-1,c=this.hls.audioTracks[_.id].groupId,O=0;O<P.audioGroupIds.length;O++)if(P.audioGroupIds[O]===c){L=O;break}L!==P.urlId&&(P.urlId=L,this.startLoad())}},C.loadPlaylist=function(w){m.prototype.loadPlaylist.call(this);var _=this.currentLevelIndex,P=this._levels[_];if(this.canLoad&&P&&P.url.length>0){var L=P.urlId,c=P.url[L];if(w)try{c=w.addDirectives(c)}catch(O){this.warn("Could not construct new URL with HLS Delivery Directives: "+O)}this.log("Attempt loading level index "+_+((w==null?void 0:w.msn)!==void 0?" at sn "+w.msn+" part "+w.part:"")+" with URL-id "+L+" "+c),this.clearTimer(),this.hls.trigger(h.Events.LEVEL_LOADING,{url:c,level:_,id:L,deliveryDirectives:w||null})}},C.removeLevel=function(w,_){var P=function(O,p){return p!==_},L=this._levels.filter(function(c,O){return O!==w?!0:c.url.length>1&&_!==void 0?(c.url=c.url.filter(P),c.audioGroupIds&&(c.audioGroupIds=c.audioGroupIds.filter(P)),c.textGroupIds&&(c.textGroupIds=c.textGroupIds.filter(P)),c.urlId=0,!0):!1}).map(function(c,O){var p=c.details;return p!=null&&p.fragments&&p.fragments.forEach(function(R){R.level=O}),c});this._levels=L,this.hls.trigger(h.Events.LEVELS_UPDATED,{levels:L})},S(E,[{key:"levels",get:function(){return this._levels.length===0?null:this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(w){var _,P=this._levels;if(P.length!==0&&!(this.currentLevelIndex===w&&(_=P[w])!==null&&_!==void 0&&_.details)){if(w<0||w>=P.length){var L=w<0;if(this.hls.trigger(h.Events.ERROR,{type:$.ErrorTypes.OTHER_ERROR,details:$.ErrorDetails.LEVEL_SWITCH_ERROR,level:w,fatal:L,reason:"invalid level idx"}),L)return;w=Math.min(w,P.length-1)}this.clearTimer();var c=this.currentLevelIndex,O=P[c],p=P[w];this.log("switching to level "+w+" from "+c),this.currentLevelIndex=w;var R=k({},p,{level:w,maxBitrate:p.maxBitrate,uri:p.uri,urlId:p.urlId});delete R._urlId,this.hls.trigger(h.Events.LEVEL_SWITCHING,R);var B=p.details;if(!B||B.live){var M=this.switchParams(p.uri,O==null?void 0:O.details);this.loadPlaylist(M)}}}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(w){this.manualLevelIndex=w,this._startLevel===void 0&&(this._startLevel=w),w!==-1&&(this.level=w)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(w){this._firstLevel=w}},{key:"startLevel",get:function(){if(this._startLevel===void 0){var w=this.hls.config.startLevel;return w!==void 0?w:this._firstLevel}else return this._startLevel},set:function(w){this._startLevel=w}},{key:"nextLoadLevel",get:function(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(w){this.level=w,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=w)}}]),E}(d.default)},"./src/controller/level-helper.ts":(i,r,a)=>{a.r(r),a.d(r,{addGroupId:()=>N,addSliding:()=>x,adjustSliding:()=>A,assignTrackIdsByGroup:()=>d,computeReloadInterval:()=>b,getFragmentWithSN:()=>m,getPartWith:()=>E,mapFragmentIntersection:()=>T,mapPartIntersection:()=>I,mergeDetails:()=>S,updateFragPTSDTS:()=>v,updatePTS:()=>g});var D=a("./src/polyfills/number.ts"),h=a("./src/utils/logger.ts"),$=a("./src/loader/date-range.ts");function s(){return s=Object.assign?Object.assign.bind():function(C){for(var y=1;y<arguments.length;y++){var w=arguments[y];for(var _ in w)Object.prototype.hasOwnProperty.call(w,_)&&(C[_]=w[_])}return C},s.apply(this,arguments)}function N(C,y,w){switch(y){case"audio":C.audioGroupIds||(C.audioGroupIds=[]),C.audioGroupIds.push(w);break;case"text":C.textGroupIds||(C.textGroupIds=[]),C.textGroupIds.push(w);break}}function d(C){var y={};C.forEach(function(w){var _=w.groupId||"";w.id=y[_]=y[_]||0,y[_]++})}function g(C,y,w){var _=C[y],P=C[w];k(_,P)}function k(C,y){var w=y.startPTS;if((0,D.isFiniteNumber)(w)){var _=0,P;y.sn>C.sn?(_=w-C.start,P=C):(_=C.start-w,P=y),P.duration!==_&&(P.duration=_)}else if(y.sn>C.sn){var L=C.cc===y.cc;L&&C.minEndPTS?y.start=C.start+(C.minEndPTS-C.start):y.start=C.start+C.duration}else y.start=Math.max(C.start-y.duration,0)}function v(C,y,w,_,P,L){var c=_-w;c<=0&&(h.logger.warn("Fragment should have a positive duration",y),_=w+y.duration,L=P+y.duration);var O=w,p=_,R=y.startPTS,B=y.endPTS;if((0,D.isFiniteNumber)(R)){var M=Math.abs(R-w);(0,D.isFiniteNumber)(y.deltaPTS)?y.deltaPTS=Math.max(M,y.deltaPTS):y.deltaPTS=M,O=Math.max(w,R),w=Math.min(w,R),P=Math.min(P,y.startDTS),p=Math.min(_,B),_=Math.max(_,B),L=Math.max(L,y.endDTS)}y.duration=_-w;var K=w-y.start;y.start=y.startPTS=w,y.maxStartPTS=O,y.startDTS=P,y.endPTS=_,y.minEndPTS=p,y.endDTS=L;var V=y.sn;if(!C||V<C.startSN||V>C.endSN)return 0;var z,G=V-C.startSN,Q=C.fragments;for(Q[G]=y,z=G;z>0;z--)k(Q[z],Q[z-1]);for(z=G;z<Q.length-1;z++)k(Q[z],Q[z+1]);return C.fragmentHint&&k(Q[Q.length-1],C.fragmentHint),C.PTSKnown=C.alignedSliding=!0,K}function S(C,y){for(var w=null,_=C.fragments,P=_.length-1;P>=0;P--){var L=_[P].initSegment;if(L){w=L;break}}C.fragmentHint&&delete C.fragmentHint.endPTS;var c=0,O;if(T(C,y,function(z,G){z.relurl&&(c=z.cc-G.cc),(0,D.isFiniteNumber)(z.startPTS)&&(0,D.isFiniteNumber)(z.endPTS)&&(G.start=G.startPTS=z.startPTS,G.startDTS=z.startDTS,G.appendedPTS=z.appendedPTS,G.maxStartPTS=z.maxStartPTS,G.endPTS=z.endPTS,G.endDTS=z.endDTS,G.minEndPTS=z.minEndPTS,G.duration=z.endPTS-z.startPTS,G.duration&&(O=G),y.PTSKnown=y.alignedSliding=!0),G.elementaryStreams=z.elementaryStreams,G.loader=z.loader,G.stats=z.stats,G.urlId=z.urlId,z.initSegment&&(G.initSegment=z.initSegment,w=z.initSegment)}),w){var p=y.fragmentHint?y.fragments.concat(y.fragmentHint):y.fragments;p.forEach(function(z){var G;(!z.initSegment||z.initSegment.relurl===((G=w)===null||G===void 0?void 0:G.relurl))&&(z.initSegment=w)})}if(y.skippedSegments)if(y.deltaUpdateFailed=y.fragments.some(function(z){return!z}),y.deltaUpdateFailed){h.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(var R=y.skippedSegments;R--;)y.fragments.shift();y.startSN=y.fragments[0].sn,y.startCC=y.fragments[0].cc}else y.canSkipDateRanges&&(y.dateRanges=u(C.dateRanges,y.dateRanges,y.recentlyRemovedDateranges));var B=y.fragments;if(c){h.logger.warn("discontinuity sliding from playlist, take drift into account");for(var M=0;M<B.length;M++)B[M].cc+=c}y.skippedSegments&&(y.startCC=y.fragments[0].cc),I(C.partList,y.partList,function(z,G){G.elementaryStreams=z.elementaryStreams,G.stats=z.stats}),O?v(y,O,O.startPTS,O.endPTS,O.startDTS,O.endDTS):A(C,y),B.length&&(y.totalduration=y.edge-B[0].start),y.driftStartTime=C.driftStartTime,y.driftStart=C.driftStart;var K=y.advancedDateTime;if(y.advanced&&K){var V=y.edge;y.driftStart||(y.driftStartTime=K,y.driftStart=V),y.driftEndTime=K,y.driftEnd=V}else y.driftEndTime=C.driftEndTime,y.driftEnd=C.driftEnd,y.advancedDateTime=C.advancedDateTime}function u(C,y,w){var _=s({},C);return w&&w.forEach(function(P){delete _[P]}),Object.keys(y).forEach(function(P){var L=new $.DateRange(y[P].attr,_[P]);L.isValid?_[P]=L:h.logger.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "'+JSON.stringify(y[P].attr)+'"')}),_}function I(C,y,w){if(C&&y)for(var _=0,P=0,L=C.length;P<=L;P++){var c=C[P],O=y[P+_];c&&O&&c.index===O.index&&c.fragment.sn===O.fragment.sn?w(c,O):_--}}function T(C,y,w){for(var _=y.skippedSegments,P=Math.max(C.startSN,y.startSN)-y.startSN,L=(C.fragmentHint?1:0)+(_?y.endSN:Math.min(C.endSN,y.endSN))-y.startSN,c=y.startSN-C.startSN,O=y.fragmentHint?y.fragments.concat(y.fragmentHint):y.fragments,p=C.fragmentHint?C.fragments.concat(C.fragmentHint):C.fragments,R=P;R<=L;R++){var B=p[c+R],M=O[R];_&&!M&&R<_&&(M=y.fragments[R]=B),B&&M&&w(B,M)}}function A(C,y){var w=y.startSN+y.skippedSegments-C.startSN,_=C.fragments;w<0||w>=_.length||x(y,_[w].start)}function x(C,y){if(y){for(var w=C.fragments,_=C.skippedSegments;_<w.length;_++)w[_].start+=y;C.fragmentHint&&(C.fragmentHint.start+=y)}}function b(C,y){y===void 0&&(y=1/0);var w=1e3*C.targetduration;if(C.updated){var _=C.fragments,P=4;if(_.length&&w*P>y){var L=_[_.length-1].duration*1e3;L<w&&(w=L)}}else w/=2;return Math.round(w)}function m(C,y,w){if(!C||!C.details)return null;var _=C.details,P=_.fragments[y-_.startSN];return P||(P=_.fragmentHint,P&&P.sn===y)?P:y<_.startSN&&w&&w.sn===y?w:null}function E(C,y,w){if(!C||!C.details)return null;var _=C.details.partList;if(_)for(var P=_.length;P--;){var L=_[P];if(L.index===w&&L.fragment.sn===y)return L}return null}},"./src/controller/stream-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>y});var D=a("./src/polyfills/number.ts"),h=a("./src/controller/base-stream-controller.ts"),$=a("./src/is-supported.ts"),s=a("./src/events.ts"),N=a("./src/utils/buffer-helper.ts"),d=a("./src/controller/fragment-tracker.ts"),g=a("./src/types/loader.ts"),k=a("./src/loader/fragment.ts"),v=a("./src/demux/transmuxer-interface.ts"),S=a("./src/types/transmuxer.ts"),u=a("./src/controller/gap-controller.ts"),I=a("./src/errors.ts");function T(w,_){for(var P=0;P<_.length;P++){var L=_[P];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(w,x(L.key),L)}}function A(w,_,P){return _&&T(w.prototype,_),P&&T(w,P),Object.defineProperty(w,"prototype",{writable:!1}),w}function x(w){var _=b(w,"string");return typeof _=="symbol"?_:String(_)}function b(w,_){if(typeof w!="object"||w===null)return w;var P=w[Symbol.toPrimitive];if(P!==void 0){var L=P.call(w,_||"default");if(typeof L!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(w)}function m(w,_){w.prototype=Object.create(_.prototype),w.prototype.constructor=w,E(w,_)}function E(w,_){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(L,c){return L.__proto__=c,L},E(w,_)}var C=100,y=function(w){m(_,w);function _(L,c,O){var p;return p=w.call(this,L,c,O,"[stream-controller]")||this,p.audioCodecSwap=!1,p.gapController=null,p.level=-1,p._forceStartLoad=!1,p.altAudio=!1,p.audioOnly=!1,p.fragPlaying=null,p.onvplaying=null,p.onvseeked=null,p.fragLastKbps=0,p.couldBacktrack=!1,p.backtrackFragment=null,p.audioCodecSwitch=!1,p.videoBuffer=null,p._registerListeners(),p}var P=_.prototype;return P._registerListeners=function(){var c=this.hls;c.on(s.Events.MEDIA_ATTACHED,this.onMediaAttached,this),c.on(s.Events.MEDIA_DETACHING,this.onMediaDetaching,this),c.on(s.Events.MANIFEST_LOADING,this.onManifestLoading,this),c.on(s.Events.MANIFEST_PARSED,this.onManifestParsed,this),c.on(s.Events.LEVEL_LOADING,this.onLevelLoading,this),c.on(s.Events.LEVEL_LOADED,this.onLevelLoaded,this),c.on(s.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),c.on(s.Events.ERROR,this.onError,this),c.on(s.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),c.on(s.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),c.on(s.Events.BUFFER_CREATED,this.onBufferCreated,this),c.on(s.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),c.on(s.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),c.on(s.Events.FRAG_BUFFERED,this.onFragBuffered,this)},P._unregisterListeners=function(){var c=this.hls;c.off(s.Events.MEDIA_ATTACHED,this.onMediaAttached,this),c.off(s.Events.MEDIA_DETACHING,this.onMediaDetaching,this),c.off(s.Events.MANIFEST_LOADING,this.onManifestLoading,this),c.off(s.Events.MANIFEST_PARSED,this.onManifestParsed,this),c.off(s.Events.LEVEL_LOADED,this.onLevelLoaded,this),c.off(s.Events.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),c.off(s.Events.ERROR,this.onError,this),c.off(s.Events.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),c.off(s.Events.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),c.off(s.Events.BUFFER_CREATED,this.onBufferCreated,this),c.off(s.Events.BUFFER_FLUSHED,this.onBufferFlushed,this),c.off(s.Events.LEVELS_UPDATED,this.onLevelsUpdated,this),c.off(s.Events.FRAG_BUFFERED,this.onFragBuffered,this)},P.onHandlerDestroying=function(){this._unregisterListeners(),this.onMediaDetaching()},P.startLoad=function(c){if(this.levels){var O=this.lastCurrentTime,p=this.hls;if(this.stopLoad(),this.setInterval(C),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var R=p.startLevel;R===-1&&(p.config.testBandwidth&&this.levels.length>1?(R=0,this.bitrateTest=!0):R=p.nextAutoLevel),this.level=p.nextLoadLevel=R,this.loadedmetadata=!1}O>0&&c===-1&&(this.log("Override startPosition with lastCurrentTime @"+O.toFixed(3)),c=O),this.state=h.State.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=c,this.tick()}else this._forceStartLoad=!0,this.state=h.State.STOPPED},P.stopLoad=function(){this._forceStartLoad=!1,w.prototype.stopLoad.call(this)},P.doTick=function(){switch(this.state){case h.State.IDLE:this.doTickIdle();break;case h.State.WAITING_LEVEL:{var c,O=this.levels,p=this.level,R=O==null||(c=O[p])===null||c===void 0?void 0:c.details;if(R&&(!R.live||this.levelLastLoaded===this.level)){if(this.waitForCdnTuneIn(R))break;this.state=h.State.IDLE;break}break}case h.State.FRAG_LOADING_WAITING_RETRY:{var B,M=self.performance.now(),K=this.retryDate;(!K||M>=K||(B=this.media)!==null&&B!==void 0&&B.seeking)&&(this.log("retryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded(this.level),this.state=h.State.IDLE)}break}this.onTickEnd()},P.onTickEnd=function(){w.prototype.onTickEnd.call(this),this.checkBuffer(),this.checkFragmentChanged()},P.doTickIdle=function(){var c=this.hls,O=this.levelLastLoaded,p=this.levels,R=this.media,B=c.config,M=c.nextLoadLevel;if(!(O===null||!R&&(this.startFragRequested||!B.startFragPrefetch))&&!(this.altAudio&&this.audioOnly)&&!(!p||!p[M])){var K=p[M],V=this.getMainFwdBufferInfo();if(V!==null){var z=this.getLevelDetails();if(z&&this._streamEnded(V,z)){var G={};this.altAudio&&(G.type="video"),this.hls.trigger(s.Events.BUFFER_EOS,G),this.state=h.State.ENDED;return}this.level=c.nextLoadLevel=M;var Q=K.details;if(!Q||this.state===h.State.WAITING_LEVEL||Q.live&&this.levelLastLoaded!==M){this.level=M,this.state=h.State.WAITING_LEVEL;return}var ee=V.len,te=this.getMaxBufferLength(K.maxBitrate);if(!(ee>=te)){this.backtrackFragment&&this.backtrackFragment.start>V.end&&(this.backtrackFragment=null);var se=this.backtrackFragment?this.backtrackFragment.start:V.end,ue=this.getNextFragment(se,Q);if(this.couldBacktrack&&!this.fragPrevious&&ue&&ue.sn!=="initSegment"&&this.fragmentTracker.getState(ue)!==d.FragmentState.OK){var q,ne=((q=this.backtrackFragment)!=null?q:ue).sn,de=ne-Q.startSN,le=Q.fragments[de-1];le&&ue.cc===le.cc&&(ue=le,this.fragmentTracker.removeFragment(le))}else this.backtrackFragment&&V.len&&(this.backtrackFragment=null);if(ue&&this.fragmentTracker.getState(ue)===d.FragmentState.OK&&this.nextLoadPosition>se){var pe=this.audioOnly&&!this.altAudio?k.ElementaryStreamTypes.AUDIO:k.ElementaryStreamTypes.VIDEO,ye=(pe===k.ElementaryStreamTypes.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;ye&&this.afterBufferFlushed(ye,pe,g.PlaylistLevelType.MAIN),ue=this.getNextFragment(this.nextLoadPosition,Q)}!ue||(ue.initSegment&&!ue.initSegment.data&&!this.bitrateTest&&(ue=ue.initSegment),this.loadFragment(ue,Q,se))}}}},P.loadFragment=function(c,O,p){var R,B=this.fragmentTracker.getState(c);this.fragCurrent=c,B===d.FragmentState.NOT_LOADED?c.sn==="initSegment"?this._loadInitSegment(c,O):this.bitrateTest?(this.log("Fragment "+c.sn+" of level "+c.level+" is being downloaded to test bitrate and will not be buffered"),this._loadBitrateTestFrag(c,O)):(this.startFragRequested=!0,w.prototype.loadFragment.call(this,c,O,p)):B===d.FragmentState.APPENDING?this.reduceMaxBufferLength(c.duration)&&this.fragmentTracker.removeFragment(c):((R=this.media)===null||R===void 0?void 0:R.buffered.length)===0&&this.fragmentTracker.removeAllFragments()},P.getAppendedFrag=function(c){var O=this.fragmentTracker.getAppendedFrag(c,g.PlaylistLevelType.MAIN);return O&&"fragment"in O?O.fragment:O},P.getBufferedFrag=function(c){return this.fragmentTracker.getBufferedFrag(c,g.PlaylistLevelType.MAIN)},P.followingBufferedFrag=function(c){return c?this.getBufferedFrag(c.end+.5):null},P.immediateLevelSwitch=function(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},P.nextLevelSwitch=function(){var c=this.levels,O=this.media;if(O!=null&&O.readyState){var p,R=this.getAppendedFrag(O.currentTime);if(R&&R.start>1&&this.flushMainBuffer(0,R.start-1),!O.paused&&c){var B=this.hls.nextLoadLevel,M=c[B],K=this.fragLastKbps;K&&this.fragCurrent?p=this.fragCurrent.duration*M.maxBitrate/(1e3*K)+1:p=0}else p=0;var V=this.getBufferedFrag(O.currentTime+p);if(V){var z=this.followingBufferedFrag(V);if(z){this.abortCurrentFrag();var G=z.maxStartPTS?z.maxStartPTS:z.start,Q=z.duration,ee=Math.max(V.end,G+Math.min(Math.max(Q-this.config.maxFragLookUpTolerance,Q*.5),Q*.75));this.flushMainBuffer(ee,Number.POSITIVE_INFINITY)}}}},P.abortCurrentFrag=function(){var c=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,c&&c.abortRequests(),this.state){case h.State.KEY_LOADING:case h.State.FRAG_LOADING:case h.State.FRAG_LOADING_WAITING_RETRY:case h.State.PARSING:case h.State.PARSED:this.state=h.State.IDLE;break}this.nextLoadPosition=this.getLoadPosition()},P.flushMainBuffer=function(c,O){w.prototype.flushMainBuffer.call(this,c,O,this.altAudio?"video":null)},P.onMediaAttached=function(c,O){w.prototype.onMediaAttached.call(this,c,O);var p=O.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),p.addEventListener("playing",this.onvplaying),p.addEventListener("seeked",this.onvseeked),this.gapController=new u.default(this.config,p,this.fragmentTracker,this.hls)},P.onMediaDetaching=function(){var c=this.media;c&&this.onvplaying&&this.onvseeked&&(c.removeEventListener("playing",this.onvplaying),c.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),w.prototype.onMediaDetaching.call(this)},P.onMediaPlaying=function(){this.tick()},P.onMediaSeeked=function(){var c=this.media,O=c?c.currentTime:null;(0,D.isFiniteNumber)(O)&&this.log("Media seeked to "+O.toFixed(3)),this.tick()},P.onManifestLoading=function(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(s.Events.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=0,this.fragPlaying=null,this.backtrackFragment=null},P.onManifestParsed=function(c,O){var p=!1,R=!1,B;O.levels.forEach(function(M){B=M.audioCodec,B&&(B.indexOf("mp4a.40.2")!==-1&&(p=!0),B.indexOf("mp4a.40.5")!==-1&&(R=!0))}),this.audioCodecSwitch=p&&R&&!(0,$.changeTypeSupported)(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=O.levels,this.startFragRequested=!1},P.onLevelLoading=function(c,O){var p=this.levels;if(!(!p||this.state!==h.State.IDLE)){var R=p[O.level];(!R.details||R.details.live&&this.levelLastLoaded!==O.level||this.waitForCdnTuneIn(R.details))&&(this.state=h.State.WAITING_LEVEL)}},P.onLevelLoaded=function(c,O){var p,R=this.levels,B=O.level,M=O.details,K=M.totalduration;if(!R){this.warn("Levels were reset while loading level "+B);return}this.log("Level "+B+" loaded ["+M.startSN+","+M.endSN+"], cc ["+M.startCC+", "+M.endCC+"] duration:"+K);var V=this.fragCurrent;V&&(this.state===h.State.FRAG_LOADING||this.state===h.State.FRAG_LOADING_WAITING_RETRY)&&V.level!==O.level&&V.loader&&(this.state=h.State.IDLE,this.backtrackFragment=null,V.abortRequests());var z=R[B],G=0;if(M.live||(p=z.details)!==null&&p!==void 0&&p.live){if(M.fragments[0]||(M.deltaUpdateFailed=!0),M.deltaUpdateFailed)return;G=this.alignPlaylists(M,z.details)}if(z.details=M,this.levelLastLoaded=B,this.hls.trigger(s.Events.LEVEL_UPDATED,{details:M,level:B}),this.state===h.State.WAITING_LEVEL){if(this.waitForCdnTuneIn(M))return;this.state=h.State.IDLE}this.startFragRequested?M.live&&this.synchronizeToLiveEdge(M):this.setStartPosition(M,G),this.tick()},P._handleFragmentLoadProgress=function(c){var O,p=c.frag,R=c.part,B=c.payload,M=this.levels;if(!M){this.warn("Levels were reset while fragment load was in progress. Fragment "+p.sn+" of level "+p.level+" will not be buffered");return}var K=M[p.level],V=K.details;if(!V){this.warn("Dropping fragment "+p.sn+" of level "+p.level+" after level details were reset");return}var z=K.videoCodec,G=V.PTSKnown||!V.live,Q=(O=p.initSegment)===null||O===void 0?void 0:O.data,ee=this._getAudioCodec(K),te=this.transmuxer=this.transmuxer||new v.default(this.hls,g.PlaylistLevelType.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),se=R?R.index:-1,ue=se!==-1,q=new S.ChunkMetadata(p.level,p.sn,p.stats.chunkCount,B.byteLength,se,ue),ne=this.initPTS[p.cc];te.push(B,Q,ee,z,p,R,V.totalduration,G,q,ne)},P.onAudioTrackSwitching=function(c,O){var p=this.altAudio,R=!!O.url,B=O.id;if(!R){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var M=this.fragCurrent;M&&(this.log("Switching to main audio track, cancel main fragment load"),M.abortRequests()),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();var K=this.hls;p&&K.trigger(s.Events.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),K.trigger(s.Events.AUDIO_TRACK_SWITCHED,{id:B})}},P.onAudioTrackSwitched=function(c,O){var p=O.id,R=!!this.hls.audioTracks[p].url;if(R){var B=this.videoBuffer;B&&this.mediaBuffer!==B&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=B)}this.altAudio=R,this.tick()},P.onBufferCreated=function(c,O){var p=O.tracks,R,B,M=!1;for(var K in p){var V=p[K];if(V.id==="main"){if(B=K,R=V,K==="video"){var z=p[K];z&&(this.videoBuffer=z.buffer)}}else M=!0}M&&R?(this.log("Alternate track found, use "+B+".buffered to schedule main fragment loading"),this.mediaBuffer=R.buffer):this.mediaBuffer=this.media},P.onFragBuffered=function(c,O){var p=O.frag,R=O.part;if(!(p&&p.type!==g.PlaylistLevelType.MAIN)){if(this.fragContextChanged(p)){this.warn("Fragment "+p.sn+(R?" p: "+R.index:"")+" of level "+p.level+" finished buffering, but was aborted. state: "+this.state),this.state===h.State.PARSED&&(this.state=h.State.IDLE);return}var B=R?R.stats:p.stats;this.fragLastKbps=Math.round(8*B.total/(B.buffering.end-B.loading.first)),p.sn!=="initSegment"&&(this.fragPrevious=p),this.fragBufferedComplete(p,R)}},P.onError=function(c,O){if(O.type===I.ErrorTypes.KEY_SYSTEM_ERROR){this.onFragmentOrKeyLoadError(g.PlaylistLevelType.MAIN,O);return}switch(O.details){case I.ErrorDetails.FRAG_LOAD_ERROR:case I.ErrorDetails.FRAG_LOAD_TIMEOUT:case I.ErrorDetails.FRAG_PARSING_ERROR:case I.ErrorDetails.KEY_LOAD_ERROR:case I.ErrorDetails.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(g.PlaylistLevelType.MAIN,O);break;case I.ErrorDetails.LEVEL_LOAD_ERROR:case I.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==h.State.ERROR&&(O.fatal?(this.warn(""+O.details),this.state=h.State.ERROR):!O.levelRetry&&this.state===h.State.WAITING_LEVEL&&(this.state=h.State.IDLE));break;case I.ErrorDetails.BUFFER_FULL_ERROR:if(O.parent==="main"&&(this.state===h.State.PARSING||this.state===h.State.PARSED)){var p=!0,R=this.getFwdBufferInfo(this.media,g.PlaylistLevelType.MAIN);R&&R.len>.5&&(p=!this.reduceMaxBufferLength(R.len)),p&&(this.warn("buffer full error also media.currentTime is not buffered, flush main"),this.immediateLevelSwitch()),this.resetLoadingState()}break}},P.checkBuffer=function(){var c=this.media,O=this.gapController;if(!(!c||!O||!c.readyState)){if(this.loadedmetadata||!N.BufferHelper.getBuffered(c).length){var p=this.state!==h.State.IDLE?this.fragCurrent:null;O.poll(this.lastCurrentTime,p)}this.lastCurrentTime=c.currentTime}},P.onFragLoadEmergencyAborted=function(){this.state=h.State.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()},P.onBufferFlushed=function(c,O){var p=O.type;if(p!==k.ElementaryStreamTypes.AUDIO||this.audioOnly&&!this.altAudio){var R=(p===k.ElementaryStreamTypes.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(R,p,g.PlaylistLevelType.MAIN)}},P.onLevelsUpdated=function(c,O){this.levels=O.levels},P.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},P.seekToStartPos=function(){var c=this.media;if(!!c){var O=c.currentTime,p=this.startPosition;if(p>=0&&O<p){if(c.seeking){this.log("could not seek to "+p+", already seeking at "+O);return}var R=N.BufferHelper.getBuffered(c),B=R.length?R.start(0):0,M=B-p;M>0&&(M<this.config.maxBufferHole||M<this.config.maxFragLookUpTolerance)&&(this.log("adjusting start position by "+M+" to match buffer start"),p+=M,this.startPosition=p),this.log("seek to target start position "+p+" from current time "+O),c.currentTime=p}}},P._getAudioCodec=function(c){var O=this.config.defaultAudioCodec||c.audioCodec;return this.audioCodecSwap&&O&&(this.log("Swapping audio codec"),O.indexOf("mp4a.40.5")!==-1?O="mp4a.40.2":O="mp4a.40.5"),O},P._loadBitrateTestFrag=function(c,O){var p=this;c.bitrateTest=!0,this._doFragLoad(c,O).then(function(R){var B=p.hls;if(!(!R||p.fragContextChanged(c))){p.fragLoadError=0,p.state=h.State.IDLE,p.startFragRequested=!1,p.bitrateTest=!1;var M=c.stats;M.parsing.start=M.parsing.end=M.buffering.start=M.buffering.end=self.performance.now(),B.trigger(s.Events.FRAG_LOADED,R),c.bitrateTest=!1}})},P._handleTransmuxComplete=function(c){var O,p="main",R=this.hls,B=c.remuxResult,M=c.chunkMeta,K=this.getCurrentContext(M);if(!K){this.warn("The loading context changed while buffering fragment "+M.sn+" of level "+M.level+". This chunk will not be buffered."),this.resetStartWhenNotLoaded(M.level);return}var V=K.frag,z=K.part,G=K.level,Q=B.video,ee=B.text,te=B.id3,se=B.initSegment,ue=G.details,q=this.altAudio?void 0:B.audio;if(!this.fragContextChanged(V)){if(this.state=h.State.PARSING,se){se.tracks&&(this._bufferInitSegment(G,se.tracks,V,M),R.trigger(s.Events.FRAG_PARSING_INIT_SEGMENT,{frag:V,id:p,tracks:se.tracks}));var ne=se.initPTS,de=se.timescale;(0,D.isFiniteNumber)(ne)&&(this.initPTS[V.cc]=ne,R.trigger(s.Events.INIT_PTS_FOUND,{frag:V,id:p,initPTS:ne,timescale:de}))}if(Q&&B.independent!==!1){if(ue){var le=Q.startPTS,pe=Q.endPTS,ye=Q.startDTS,Ce=Q.endDTS;if(z)z.elementaryStreams[Q.type]={startPTS:le,endPTS:pe,startDTS:ye,endDTS:Ce};else if(Q.firstKeyFrame&&Q.independent&&M.id===1&&(this.couldBacktrack=!0),Q.dropped&&Q.independent){var ge=this.getMainFwdBufferInfo(),ve=(ge?ge.end:this.getLoadPosition())+this.config.maxBufferHole,Ee=Q.firstKeyFramePTS?Q.firstKeyFramePTS:le;if(ve<Ee-this.config.maxBufferHole){this.backtrack(V);return}V.setElementaryStreamInfo(Q.type,V.start,pe,V.start,Ce,!0)}V.setElementaryStreamInfo(Q.type,le,pe,ye,Ce),this.backtrackFragment&&(this.backtrackFragment=V),this.bufferFragmentData(Q,V,z,M)}}else if(B.independent===!1){this.backtrack(V);return}if(q){var Ie=q.startPTS,Le=q.endPTS,$e=q.startDTS,Fe=q.endDTS;z&&(z.elementaryStreams[k.ElementaryStreamTypes.AUDIO]={startPTS:Ie,endPTS:Le,startDTS:$e,endDTS:Fe}),V.setElementaryStreamInfo(k.ElementaryStreamTypes.AUDIO,Ie,Le,$e,Fe),this.bufferFragmentData(q,V,z,M)}if(ue&&te!==null&&te!==void 0&&(O=te.samples)!==null&&O!==void 0&&O.length){var Ve={id:p,frag:V,details:ue,samples:te.samples};R.trigger(s.Events.FRAG_PARSING_METADATA,Ve)}if(ue&&ee){var Ge={id:p,frag:V,details:ue,samples:ee.samples};R.trigger(s.Events.FRAG_PARSING_USERDATA,Ge)}}},P._bufferInitSegment=function(c,O,p,R){var B=this;if(this.state===h.State.PARSING){this.audioOnly=!!O.audio&&!O.video,this.altAudio&&!this.audioOnly&&delete O.audio;var M=O.audio,K=O.video,V=O.audiovideo;if(M){var z=c.audioCodec,G=navigator.userAgent.toLowerCase();this.audioCodecSwitch&&(z&&(z.indexOf("mp4a.40.5")!==-1?z="mp4a.40.2":z="mp4a.40.5"),M.metadata.channelCount!==1&&G.indexOf("firefox")===-1&&(z="mp4a.40.5")),G.indexOf("android")!==-1&&M.container!=="audio/mpeg"&&(z="mp4a.40.2",this.log("Android: force audio codec to "+z)),c.audioCodec&&c.audioCodec!==z&&this.log('Swapping manifest audio codec "'+c.audioCodec+'" for "'+z+'"'),M.levelCodec=z,M.id="main",this.log("Init audio buffer, container:"+M.container+", codecs[selected/level/parsed]=["+(z||"")+"/"+(c.audioCodec||"")+"/"+M.codec+"]")}K&&(K.levelCodec=c.videoCodec,K.id="main",this.log("Init video buffer, container:"+K.container+", codecs[level/parsed]=["+(c.videoCodec||"")+"/"+K.codec+"]")),V&&this.log("Init audiovideo buffer, container:"+V.container+", codecs[level/parsed]=["+(c.attrs.CODECS||"")+"/"+V.codec+"]"),this.hls.trigger(s.Events.BUFFER_CODECS,O),Object.keys(O).forEach(function(Q){var ee=O[Q],te=ee.initSegment;te!=null&&te.byteLength&&B.hls.trigger(s.Events.BUFFER_APPENDING,{type:Q,data:te,frag:p,part:null,chunkMeta:R,parent:p.type})}),this.tick()}},P.getMainFwdBufferInfo=function(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,g.PlaylistLevelType.MAIN)},P.backtrack=function(c){this.couldBacktrack=!0,this.backtrackFragment=c,this.resetTransmuxer(),this.flushBufferGap(c),this.fragmentTracker.removeFragment(c),this.fragPrevious=null,this.nextLoadPosition=c.start,this.state=h.State.IDLE},P.checkFragmentChanged=function(){var c=this.media,O=null;if(c&&c.readyState>1&&c.seeking===!1){var p=c.currentTime;if(N.BufferHelper.isBuffered(c,p)?O=this.getAppendedFrag(p):N.BufferHelper.isBuffered(c,p+.1)&&(O=this.getAppendedFrag(p+.1)),O){this.backtrackFragment=null;var R=this.fragPlaying,B=O.level;(!R||O.sn!==R.sn||R.level!==B||O.urlId!==R.urlId)&&(this.fragPlaying=O,this.hls.trigger(s.Events.FRAG_CHANGED,{frag:O}),(!R||R.level!==B)&&this.hls.trigger(s.Events.LEVEL_SWITCHED,{level:B}))}}},A(_,[{key:"nextLevel",get:function(){var c=this.nextBufferedFrag;return c?c.level:-1}},{key:"currentFrag",get:function(){var c=this.media;return c?this.fragPlaying||this.getAppendedFrag(c.currentTime):null}},{key:"currentProgramDateTime",get:function(){var c=this.media;if(c){var O=c.currentTime,p=this.currentFrag;if(p&&(0,D.isFiniteNumber)(O)&&(0,D.isFiniteNumber)(p.programDateTime)){var R=p.programDateTime+(O-p.start)*1e3;return new Date(R)}}return null}},{key:"currentLevel",get:function(){var c=this.currentFrag;return c?c.level:-1}},{key:"nextBufferedFrag",get:function(){var c=this.currentFrag;return c?this.followingBufferedFrag(c):null}},{key:"forceStartLoad",get:function(){return this._forceStartLoad}}]),_}(h.default)},"./src/controller/subtitle-stream-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{SubtitleStreamController:()=>m});var D=a("./src/events.ts"),h=a("./src/utils/buffer-helper.ts"),$=a("./src/controller/fragment-finders.ts"),s=a("./src/utils/discontinuities.ts"),N=a("./src/controller/level-helper.ts"),d=a("./src/controller/fragment-tracker.ts"),g=a("./src/controller/base-stream-controller.ts"),k=a("./src/types/loader.ts"),v=a("./src/types/level.ts");function S(C,y){for(var w=0;w<y.length;w++){var _=y[w];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(C,I(_.key),_)}}function u(C,y,w){return y&&S(C.prototype,y),w&&S(C,w),Object.defineProperty(C,"prototype",{writable:!1}),C}function I(C){var y=T(C,"string");return typeof y=="symbol"?y:String(y)}function T(C,y){if(typeof C!="object"||C===null)return C;var w=C[Symbol.toPrimitive];if(w!==void 0){var _=w.call(C,y||"default");if(typeof _!="object")return _;throw new TypeError("@@toPrimitive must return a primitive value.")}return(y==="string"?String:Number)(C)}function A(C,y){C.prototype=Object.create(y.prototype),C.prototype.constructor=C,x(C,y)}function x(C,y){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(_,P){return _.__proto__=P,_},x(C,y)}var b=500,m=function(C){A(y,C);function y(_,P,L){var c;return c=C.call(this,_,P,L,"[subtitle-stream-controller]")||this,c.levels=[],c.currentTrackId=-1,c.tracksBuffered=[],c.mainDetails=null,c._registerListeners(),c}var w=y.prototype;return w.onHandlerDestroying=function(){this._unregisterListeners(),this.mainDetails=null},w._registerListeners=function(){var P=this.hls;P.on(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),P.on(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this),P.on(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),P.on(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),P.on(D.Events.ERROR,this.onError,this),P.on(D.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),P.on(D.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),P.on(D.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),P.on(D.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),P.on(D.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),P.on(D.Events.FRAG_BUFFERED,this.onFragBuffered,this)},w._unregisterListeners=function(){var P=this.hls;P.off(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),P.off(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this),P.off(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),P.off(D.Events.LEVEL_LOADED,this.onLevelLoaded,this),P.off(D.Events.ERROR,this.onError,this),P.off(D.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),P.off(D.Events.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),P.off(D.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),P.off(D.Events.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),P.off(D.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),P.off(D.Events.FRAG_BUFFERED,this.onFragBuffered,this)},w.startLoad=function(P){this.stopLoad(),this.state=g.State.IDLE,this.setInterval(b),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=P,this.tick()},w.onManifestLoading=function(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()},w.onLevelLoaded=function(P,L){this.mainDetails=L.details},w.onSubtitleFragProcessed=function(P,L){var c=L.frag,O=L.success;if(this.fragPrevious=c,this.state=g.State.IDLE,!!O){var p=this.tracksBuffered[this.currentTrackId];if(!!p){for(var R,B=c.start,M=0;M<p.length;M++)if(B>=p[M].start&&B<=p[M].end){R=p[M];break}var K=c.start+c.duration;R?R.end=K:(R={start:B,end:K},p.push(R)),this.fragmentTracker.fragBuffered(c)}}},w.onBufferFlushing=function(P,L){var c=L.startOffset,O=L.endOffset;if(c===0&&O!==Number.POSITIVE_INFINITY){var p=this.currentTrackId,R=this.levels;if(!R.length||!R[p]||!R[p].details)return;var B=R[p].details,M=B.targetduration,K=O-M;if(K<=0)return;L.endOffsetSubtitles=Math.max(0,K),this.tracksBuffered.forEach(function(V){for(var z=0;z<V.length;){if(V[z].end<=K){V.shift();continue}else if(V[z].start<K)V[z].start=K;else break;z++}}),this.fragmentTracker.removeFragmentsInRange(c,K,k.PlaylistLevelType.SUBTITLE)}},w.onFragBuffered=function(P,L){if(!this.loadedmetadata&&L.frag.type===k.PlaylistLevelType.MAIN){var c;(c=this.media)!==null&&c!==void 0&&c.buffered.length&&(this.loadedmetadata=!0)}},w.onError=function(P,L){var c=L.frag;!c||c.type!==k.PlaylistLevelType.SUBTITLE||(this.fragCurrent&&this.fragCurrent.abortRequests(),this.state=g.State.IDLE)},w.onSubtitleTracksUpdated=function(P,L){var c=this,O=L.subtitleTracks;this.tracksBuffered=[],this.levels=O.map(function(p){return new v.Level(p)}),this.fragmentTracker.removeAllFragments(),this.fragPrevious=null,this.levels.forEach(function(p){c.tracksBuffered[p.id]=[]}),this.mediaBuffer=null},w.onSubtitleTrackSwitch=function(P,L){if(this.currentTrackId=L.id,!this.levels.length||this.currentTrackId===-1){this.clearInterval();return}var c=this.levels[this.currentTrackId];c!=null&&c.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,c&&this.setInterval(b)},w.onSubtitleTrackLoaded=function(P,L){var c,O=L.details,p=L.id,R=this.currentTrackId,B=this.levels;if(!!B.length){var M=B[R];if(!(p>=B.length||p!==R||!M)){this.mediaBuffer=this.mediaBufferTimeRanges;var K=0;if(O.live||(c=M.details)!==null&&c!==void 0&&c.live){var V=this.mainDetails;if(O.deltaUpdateFailed||!V)return;var z=V.fragments[0];M.details?(K=this.alignPlaylists(O,M.details),K===0&&z&&(K=z.start,(0,N.addSliding)(O,K))):O.hasProgramDateTime&&V.hasProgramDateTime?((0,s.alignMediaPlaylistByPDT)(O,V),K=O.fragments[0].start):z&&(K=z.start,(0,N.addSliding)(O,K))}if(M.details=O,this.levelLastLoaded=p,!this.startFragRequested&&(this.mainDetails||!O.live)&&this.setStartPosition(M.details,K),this.tick(),O.live&&!this.fragCurrent&&this.media&&this.state===g.State.IDLE){var G=(0,$.findFragmentByPTS)(null,O.fragments,this.media.currentTime,0);G||(this.warn("Subtitle playlist not aligned with playback"),M.details=void 0)}}}},w._handleFragmentLoadComplete=function(P){var L=this,c=P.frag,O=P.payload,p=c.decryptdata,R=this.hls;if(!this.fragContextChanged(c)&&O&&O.byteLength>0&&p&&p.key&&p.iv&&p.method==="AES-128"){var B=performance.now();this.decrypter.decrypt(new Uint8Array(O),p.key.buffer,p.iv.buffer).then(function(M){var K=performance.now();R.trigger(D.Events.FRAG_DECRYPTED,{frag:c,payload:M,stats:{tstart:B,tdecrypt:K}})}).catch(function(M){L.warn(M.name+": "+M.message),L.state=g.State.IDLE})}},w.doTick=function(){if(!this.media){this.state=g.State.IDLE;return}if(this.state===g.State.IDLE){var P=this.currentTrackId,L=this.levels;if(!L.length||!L[P]||!L[P].details)return;var c=L[P].details,O=c.targetduration,p=this.config,R=this.getLoadPosition(),B=h.BufferHelper.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],R-O,p.maxBufferHole),M=B.end,K=B.len,V=this.getFwdBufferInfo(this.media,k.PlaylistLevelType.MAIN),z=this.getMaxBufferLength(V==null?void 0:V.len)+O;if(K>z)return;console.assert(c,"Subtitle track details are defined on idle subtitle stream controller tick");var G=c.fragments,Q=G.length,ee=c.edge,te=null,se=this.fragPrevious;if(M<ee){var ue=p.maxFragLookUpTolerance;te=(0,$.findFragmentByPTS)(se,G,Math.max(G[0].start,M),ue),!te&&se&&se.start<G[0].start&&(te=G[0])}else te=G[Q-1];if(!te)return;te=this.mapToInitFragWhenRequired(te),this.fragmentTracker.getState(te)===d.FragmentState.NOT_LOADED&&this.loadFragment(te,c,M)}},w.getMaxBufferLength=function(P){var L=C.prototype.getMaxBufferLength.call(this);return P?Math.max(L,P):L},w.loadFragment=function(P,L,c){this.fragCurrent=P,P.sn==="initSegment"?this._loadInitSegment(P,L):(this.startFragRequested=!0,C.prototype.loadFragment.call(this,P,L,c))},u(y,[{key:"mediaBufferTimeRanges",get:function(){return new E(this.tracksBuffered[this.currentTrackId]||[])}}]),y}(g.default),E=function(y){this.buffered=void 0;var w=function(P,L,c){if(L=L>>>0,L>c-1)throw new DOMException("Failed to execute '"+P+"' on 'TimeRanges': The index provided ("+L+") is greater than the maximum bound ("+c+")");return y[L][P]};this.buffered={get length(){return y.length},end:function(P){return w("end",P,y.length)},start:function(P){return w("start",P,y.length)}}}},"./src/controller/subtitle-track-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>T});var D=a("./src/events.ts"),h=a("./src/utils/texttrack-utils.ts"),$=a("./src/controller/base-playlist-controller.ts"),s=a("./src/types/loader.ts");function N(A,x){for(var b=0;b<x.length;b++){var m=x[b];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(A,g(m.key),m)}}function d(A,x,b){return x&&N(A.prototype,x),b&&N(A,b),Object.defineProperty(A,"prototype",{writable:!1}),A}function g(A){var x=k(A,"string");return typeof x=="symbol"?x:String(x)}function k(A,x){if(typeof A!="object"||A===null)return A;var b=A[Symbol.toPrimitive];if(b!==void 0){var m=b.call(A,x||"default");if(typeof m!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(x==="string"?String:Number)(A)}function v(A,x){A.prototype=Object.create(x.prototype),A.prototype.constructor=A,S(A,x)}function S(A,x){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,E){return m.__proto__=E,m},S(A,x)}var u=function(A){v(x,A);function x(m){var E;return E=A.call(this,m,"[subtitle-track-controller]")||this,E.media=null,E.tracks=[],E.groupId=null,E.tracksInGroup=[],E.trackId=-1,E.selectDefaultTrack=!0,E.queuedDefaultTrack=-1,E.trackChangeListener=function(){return E.onTextTracksChanged()},E.asyncPollTrackChange=function(){return E.pollTrackChange(0)},E.useTextTrackPolling=!1,E.subtitlePollingInterval=-1,E._subtitleDisplay=!0,E.registerListeners(),E}var b=x.prototype;return b.destroy=function(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.trackChangeListener=this.asyncPollTrackChange=null,A.prototype.destroy.call(this)},b.registerListeners=function(){var E=this.hls;E.on(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),E.on(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this),E.on(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),E.on(D.Events.MANIFEST_PARSED,this.onManifestParsed,this),E.on(D.Events.LEVEL_LOADING,this.onLevelLoading,this),E.on(D.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),E.on(D.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),E.on(D.Events.ERROR,this.onError,this)},b.unregisterListeners=function(){var E=this.hls;E.off(D.Events.MEDIA_ATTACHED,this.onMediaAttached,this),E.off(D.Events.MEDIA_DETACHING,this.onMediaDetaching,this),E.off(D.Events.MANIFEST_LOADING,this.onManifestLoading,this),E.off(D.Events.MANIFEST_PARSED,this.onManifestParsed,this),E.off(D.Events.LEVEL_LOADING,this.onLevelLoading,this),E.off(D.Events.LEVEL_SWITCHING,this.onLevelSwitching,this),E.off(D.Events.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),E.off(D.Events.ERROR,this.onError,this)},b.onMediaAttached=function(E,C){this.media=C.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))},b.pollTrackChange=function(E){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.trackChangeListener,E)},b.onMediaDetaching=function(){if(!!this.media){self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId);var E=I(this.media.textTracks);E.forEach(function(C){(0,h.clearCurrentCues)(C)}),this.subtitleTrack=-1,this.media=null}},b.onManifestLoading=function(){this.tracks=[],this.groupId=null,this.tracksInGroup=[],this.trackId=-1,this.selectDefaultTrack=!0},b.onManifestParsed=function(E,C){this.tracks=C.subtitleTracks},b.onSubtitleTrackLoaded=function(E,C){var y=C.id,w=C.details,_=this.trackId,P=this.tracksInGroup[_];if(!P){this.warn("Invalid subtitle track id "+y);return}var L=P.details;P.details=C.details,this.log("subtitle track "+y+" loaded ["+w.startSN+"-"+w.endSN+"]"),y===this.trackId&&(this.retryCount=0,this.playlistLoaded(y,C,L))},b.onLevelLoading=function(E,C){this.switchLevel(C.level)},b.onLevelSwitching=function(E,C){this.switchLevel(C.level)},b.switchLevel=function(E){var C=this.hls.levels[E];if(!!(C!=null&&C.textGroupIds)){var y=C.textGroupIds[C.urlId];if(this.groupId!==y){var w=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0,_=this.tracks.filter(function(c){return!y||c.groupId===y});this.tracksInGroup=_;var P=this.findTrackId(w==null?void 0:w.name)||this.findTrackId();this.groupId=y;var L={subtitleTracks:_};this.log("Updating subtitle tracks, "+_.length+' track(s) found in "'+y+'" group-id'),this.hls.trigger(D.Events.SUBTITLE_TRACKS_UPDATED,L),P!==-1&&this.setSubtitleTrack(P,w)}}},b.findTrackId=function(E){for(var C=this.tracksInGroup,y=0;y<C.length;y++){var w=C[y];if((!this.selectDefaultTrack||w.default)&&(!E||E===w.name))return w.id}return-1},b.onError=function(E,C){A.prototype.onError.call(this,E,C),!(C.fatal||!C.context)&&C.context.type===s.PlaylistContextType.SUBTITLE_TRACK&&C.context.id===this.trackId&&C.context.groupId===this.groupId&&this.retryLoadingOrFail(C)},b.loadPlaylist=function(E){A.prototype.loadPlaylist.call(this);var C=this.tracksInGroup[this.trackId];if(this.shouldLoadTrack(C)){var y=C.id,w=C.groupId,_=C.url;if(E)try{_=E.addDirectives(_)}catch(P){this.warn("Could not construct new URL with HLS Delivery Directives: "+P)}this.log("Loading subtitle playlist for id "+y),this.hls.trigger(D.Events.SUBTITLE_TRACK_LOADING,{url:_,id:y,groupId:w,deliveryDirectives:E||null})}},b.toggleTrackModes=function(E){var C=this,y=this.media,w=this.trackId;if(!!y){var _=I(y.textTracks),P=_.filter(function(O){return O.groupId===C.groupId});if(E===-1)[].slice.call(_).forEach(function(O){O.mode="disabled"});else{var L=P[w];L&&(L.mode="disabled")}var c=P[E];c&&(c.mode=this.subtitleDisplay?"showing":"hidden")}},b.setSubtitleTrack=function(E,C){var y,w=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=E;return}if(this.trackId!==E&&this.toggleTrackModes(E),!(this.trackId===E&&(E===-1||(y=w[E])!==null&&y!==void 0&&y.details)||E<-1||E>=w.length)){this.clearTimer();var _=w[E];if(this.log("Switching to subtitle track "+E),this.trackId=E,_){var P=_.id,L=_.groupId,c=L===void 0?"":L,O=_.name,p=_.type,R=_.url;this.hls.trigger(D.Events.SUBTITLE_TRACK_SWITCH,{id:P,groupId:c,name:O,type:p,url:R});var B=this.switchParams(_.url,C==null?void 0:C.details);this.loadPlaylist(B)}else this.hls.trigger(D.Events.SUBTITLE_TRACK_SWITCH,{id:E})}},b.onTextTracksChanged=function(){if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!(!this.media||!this.hls.config.renderTextTracksNatively)){for(var E=-1,C=I(this.media.textTracks),y=0;y<C.length;y++)if(C[y].mode==="hidden")E=y;else if(C[y].mode==="showing"){E=y;break}this.subtitleTrack!==E&&(this.subtitleTrack=E)}},d(x,[{key:"subtitleDisplay",get:function(){return this._subtitleDisplay},set:function(E){this._subtitleDisplay=E,this.trackId>-1&&this.toggleTrackModes(this.trackId)}},{key:"subtitleTracks",get:function(){return this.tracksInGroup}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(E){this.selectDefaultTrack=!1;var C=this.tracksInGroup?this.tracksInGroup[this.trackId]:void 0;this.setSubtitleTrack(E,C)}}]),x}($.default);function I(A){for(var x=[],b=0;b<A.length;b++){var m=A[b];m.kind==="subtitles"&&m.label&&x.push(A[b])}return x}const T=u},"./src/controller/timeline-controller.ts":(i,r,a)=>{a.r(r),a.d(r,{TimelineController:()=>u});var D=a("./src/polyfills/number.ts"),h=a("./src/events.ts"),$=a("./src/utils/cea-608-parser.ts"),s=a("./src/utils/output-filter.ts"),N=a("./src/utils/webvtt-parser.ts"),d=a("./src/utils/texttrack-utils.ts"),g=a("./src/utils/imsc1-ttml-parser.ts"),k=a("./src/utils/mp4-tools.ts"),v=a("./src/types/loader.ts"),S=a("./src/utils/logger.ts"),u=function(){function x(m){if(this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.timescale=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=A(),this.captionsProperties=void 0,this.hls=m,this.config=m.config,this.Cues=m.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},this.config.enableCEA708Captions){var E=new s.default(this,"textTrack1"),C=new s.default(this,"textTrack2"),y=new s.default(this,"textTrack3"),w=new s.default(this,"textTrack4");this.cea608Parser1=new $.default(1,E,C),this.cea608Parser2=new $.default(3,y,w)}m.on(h.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),m.on(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),m.on(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),m.on(h.Events.MANIFEST_LOADED,this.onManifestLoaded,this),m.on(h.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),m.on(h.Events.FRAG_LOADING,this.onFragLoading,this),m.on(h.Events.FRAG_LOADED,this.onFragLoaded,this),m.on(h.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),m.on(h.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),m.on(h.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),m.on(h.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),m.on(h.Events.BUFFER_FLUSHING,this.onBufferFlushing,this)}var b=x.prototype;return b.destroy=function(){var E=this.hls;E.off(h.Events.MEDIA_ATTACHING,this.onMediaAttaching,this),E.off(h.Events.MEDIA_DETACHING,this.onMediaDetaching,this),E.off(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),E.off(h.Events.MANIFEST_LOADED,this.onManifestLoaded,this),E.off(h.Events.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),E.off(h.Events.FRAG_LOADING,this.onFragLoading,this),E.off(h.Events.FRAG_LOADED,this.onFragLoaded,this),E.off(h.Events.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),E.off(h.Events.FRAG_DECRYPTED,this.onFragDecrypted,this),E.off(h.Events.INIT_PTS_FOUND,this.onInitPtsFound,this),E.off(h.Events.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),E.off(h.Events.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.cea608Parser1=this.cea608Parser2=null},b.addCues=function(E,C,y,w,_){for(var P=!1,L=_.length;L--;){var c=_[L],O=T(c[0],c[1],C,y);if(O>=0&&(c[0]=Math.min(c[0],C),c[1]=Math.max(c[1],y),P=!0,O/(y-C)>.5))return}if(P||_.push([C,y]),this.config.renderTextTracksNatively){var p=this.captionsTracks[E];this.Cues.newCue(p,C,y,w)}else{var R=this.Cues.newCue(null,C,y,w);this.hls.trigger(h.Events.CUES_PARSED,{type:"captions",cues:R,track:E})}},b.onInitPtsFound=function(E,C){var y=this,w=C.frag,_=C.id,P=C.initPTS,L=C.timescale,c=this.unparsedVttFrags;_==="main"&&(this.initPTS[w.cc]=P,this.timescale[w.cc]=L),c.length&&(this.unparsedVttFrags=[],c.forEach(function(O){y.onFragLoaded(h.Events.FRAG_LOADED,O)}))},b.getExistingTrack=function(E){var C=this.media;if(C)for(var y=0;y<C.textTracks.length;y++){var w=C.textTracks[y];if(w[E])return w}return null},b.createCaptionsTrack=function(E){this.config.renderTextTracksNatively?this.createNativeTrack(E):this.createNonNativeTrack(E)},b.createNativeTrack=function(E){if(!this.captionsTracks[E]){var C=this.captionsProperties,y=this.captionsTracks,w=this.media,_=C[E],P=_.label,L=_.languageCode,c=this.getExistingTrack(E);if(c)y[E]=c,(0,d.clearCurrentCues)(y[E]),(0,d.sendAddTrackEvent)(y[E],w);else{var O=this.createTextTrack("captions",P,L);O&&(O[E]=!0,y[E]=O)}}},b.createNonNativeTrack=function(E){if(!this.nonNativeCaptionsTracks[E]){var C=this.captionsProperties[E];if(!!C){var y=C.label,w={_id:E,label:y,kind:"captions",default:C.media?!!C.media.default:!1,closedCaptions:C.media};this.nonNativeCaptionsTracks[E]=w,this.hls.trigger(h.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[w]})}}},b.createTextTrack=function(E,C,y){var w=this.media;if(!!w)return w.addTextTrack(E,C,y)},b.onMediaAttaching=function(E,C){this.media=C.media,this._cleanTracks()},b.onMediaDetaching=function(){var E=this.captionsTracks;Object.keys(E).forEach(function(C){(0,d.clearCurrentCues)(E[C]),delete E[C]}),this.nonNativeCaptionsTracks={}},b.onManifestLoading=function(){this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=A(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.timescale=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())},b._cleanTracks=function(){var E=this.media;if(!!E){var C=E.textTracks;if(C)for(var y=0;y<C.length;y++)(0,d.clearCurrentCues)(C[y])}},b.onSubtitleTracksUpdated=function(E,C){var y=this;this.textTracks=[];var w=C.subtitleTracks||[],_=w.some(function(O){return O.textCodec===g.IMSC1_CODEC});if(this.config.enableWebVTT||_&&this.config.enableIMSC1){var P=this.tracks&&w&&this.tracks.length===w.length;if(this.tracks=w||[],this.config.renderTextTracksNatively){var L=this.media?this.media.textTracks:[];this.tracks.forEach(function(O,p){var R;if(p<L.length){for(var B=null,M=0;M<L.length;M++)if(I(L[M],O)){B=L[M];break}B&&(R=B)}if(R)(0,d.clearCurrentCues)(R);else{var K=y._captionsOrSubtitlesFromCharacteristics(O);R=y.createTextTrack(K,O.name,O.lang),R&&(R.mode="disabled")}R&&(R.groupId=O.groupId,y.textTracks.push(R))})}else if(!P&&this.tracks&&this.tracks.length){var c=this.tracks.map(function(O){return{label:O.name,kind:O.type.toLowerCase(),default:O.default,subtitleTrack:O}});this.hls.trigger(h.Events.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:c})}}},b._captionsOrSubtitlesFromCharacteristics=function(E){var C;if((C=E.attrs)!==null&&C!==void 0&&C.CHARACTERISTICS){var y=/transcribes-spoken-dialog/gi.test(E.attrs.CHARACTERISTICS),w=/describes-music-and-sound/gi.test(E.attrs.CHARACTERISTICS);if(y&&w)return"captions"}return"subtitles"},b.onManifestLoaded=function(E,C){var y=this;this.config.enableCEA708Captions&&C.captions&&C.captions.forEach(function(w){var _=/(?:CC|SERVICE)([1-4])/.exec(w.instreamId);if(!!_){var P="textTrack"+_[1],L=y.captionsProperties[P];!L||(L.label=w.name,w.lang&&(L.languageCode=w.lang),L.media=w)}})},b.closedCaptionsForLevel=function(E){var C=this.hls.levels[E.level];return C==null?void 0:C.attrs["CLOSED-CAPTIONS"]},b.onFragLoading=function(E,C){var y=this.cea608Parser1,w=this.cea608Parser2,_=this.lastSn,P=this.lastPartIndex;if(!(!this.enabled||!(y&&w))&&C.frag.type===v.PlaylistLevelType.MAIN){var L,c,O=C.frag.sn,p=(L=C==null||(c=C.part)===null||c===void 0?void 0:c.index)!=null?L:-1;O===_+1||O===_&&p===P+1||(y.reset(),w.reset()),this.lastSn=O,this.lastPartIndex=p}},b.onFragLoaded=function(E,C){var y=C.frag,w=C.payload,_=this.initPTS,P=this.unparsedVttFrags;if(y.type===v.PlaylistLevelType.SUBTITLE)if(w.byteLength){if(!(0,D.isFiniteNumber)(_[y.cc])){P.push(C),_.length&&this.hls.trigger(h.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:y,error:new Error("Missing initial subtitle PTS")});return}var L=y.decryptdata,c="stats"in C;if(L==null||!L.encrypted||c){var O=this.tracks[y.level],p=this.vttCCs;p[y.cc]||(p[y.cc]={start:y.start,prevCC:this.prevCC,new:!0},this.prevCC=y.cc),O&&O.textCodec===g.IMSC1_CODEC?this._parseIMSC1(y,w):this._parseVTTs(y,w,p)}}else this.hls.trigger(h.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:y,error:new Error("Empty subtitle payload")})},b._parseIMSC1=function(E,C){var y=this,w=this.hls;(0,g.parseIMSC1)(C,this.initPTS[E.cc],this.timescale[E.cc],function(_){y._appendCues(_,E.level),w.trigger(h.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:E})},function(_){S.logger.log("Failed to parse IMSC1: "+_),w.trigger(h.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:E,error:_})})},b._parseVTTs=function(E,C,y){var w,_=this,P=this.hls,L=(w=E.initSegment)!==null&&w!==void 0&&w.data?(0,k.appendUint8Array)(E.initSegment.data,new Uint8Array(C)):C;(0,N.parseWebVTT)(L,this.initPTS[E.cc],this.timescale[E.cc],y,E.cc,E.start,function(c){_._appendCues(c,E.level),P.trigger(h.Events.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:E})},function(c){_._fallbackToIMSC1(E,C),S.logger.log("Failed to parse VTT cue: "+c),P.trigger(h.Events.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:E,error:c})})},b._fallbackToIMSC1=function(E,C){var y=this,w=this.tracks[E.level];w.textCodec||(0,g.parseIMSC1)(C,this.initPTS[E.cc],this.timescale[E.cc],function(){w.textCodec=g.IMSC1_CODEC,y._parseIMSC1(E,C)},function(){w.textCodec="wvtt"})},b._appendCues=function(E,C){var y=this.hls;if(this.config.renderTextTracksNatively){var w=this.textTracks[C];if(!w||w.mode==="disabled")return;E.forEach(function(L){return(0,d.addCueToTrack)(w,L)})}else{var _=this.tracks[C];if(!_)return;var P=_.default?"default":"subtitles"+C;y.trigger(h.Events.CUES_PARSED,{type:"subtitles",cues:E,track:P})}},b.onFragDecrypted=function(E,C){var y=C.frag;if(y.type===v.PlaylistLevelType.SUBTITLE){if(!(0,D.isFiniteNumber)(this.initPTS[y.cc])){this.unparsedVttFrags.push(C);return}this.onFragLoaded(h.Events.FRAG_LOADED,C)}},b.onSubtitleTracksCleared=function(){this.tracks=[],this.captionsTracks={}},b.onFragParsingUserdata=function(E,C){var y=this.cea608Parser1,w=this.cea608Parser2;if(!(!this.enabled||!(y&&w))){var _=C.frag,P=C.samples;if(!(_.type===v.PlaylistLevelType.MAIN&&this.closedCaptionsForLevel(_)==="NONE"))for(var L=0;L<P.length;L++){var c=P[L].bytes;if(c){var O=this.extractCea608Data(c);y.addData(P[L].pts,O[0]),w.addData(P[L].pts,O[1])}}}},b.onBufferFlushing=function(E,C){var y=C.startOffset,w=C.endOffset,_=C.endOffsetSubtitles,P=C.type,L=this.media;if(!(!L||L.currentTime<w)){if(!P||P==="video"){var c=this.captionsTracks;Object.keys(c).forEach(function(p){return(0,d.removeCuesInRange)(c[p],y,w)})}if(this.config.renderTextTracksNatively&&y===0&&_!==void 0){var O=this.textTracks;Object.keys(O).forEach(function(p){return(0,d.removeCuesInRange)(O[p],y,_)})}}},b.extractCea608Data=function(E){for(var C=[[],[]],y=E[0]&31,w=2,_=0;_<y;_++){var P=E[w++],L=127&E[w++],c=127&E[w++];if(!(L===0&&c===0)){var O=(4&P)!==0;if(O){var p=3&P;(p===0||p===1)&&(C[p].push(L),C[p].push(c))}}}return C},x}();function I(x,b){return x&&x.label===b.name&&!(x.textTrack1||x.textTrack2)}function T(x,b,m,E){return Math.min(b,E)-Math.max(x,m)}function A(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}},"./src/crypt/aes-crypto.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>D});var D=function(){function h(s,N){this.subtle=void 0,this.aesIV=void 0,this.subtle=s,this.aesIV=N}var $=h.prototype;return $.decrypt=function(N,d){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},d,N)},h}()},"./src/crypt/aes-decryptor.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>$,removePadding:()=>h});var D=a("./src/utils/typed-array.ts");function h(s){var N=s.byteLength,d=N&&new DataView(s.buffer).getUint8(N-1);return d?(0,D.sliceUint8)(s,0,N-d):s}var $=function(){function s(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}var N=s.prototype;return N.uint8ArrayToUint32Array_=function(g){for(var k=new DataView(g),v=new Uint32Array(4),S=0;S<4;S++)v[S]=k.getUint32(S*4);return v},N.initTable=function(){var g=this.sBox,k=this.invSBox,v=this.subMix,S=v[0],u=v[1],I=v[2],T=v[3],A=this.invSubMix,x=A[0],b=A[1],m=A[2],E=A[3],C=new Uint32Array(256),y=0,w=0,_=0;for(_=0;_<256;_++)_<128?C[_]=_<<1:C[_]=_<<1^283;for(_=0;_<256;_++){var P=w^w<<1^w<<2^w<<3^w<<4;P=P>>>8^P&255^99,g[y]=P,k[P]=y;var L=C[y],c=C[L],O=C[c],p=C[P]*257^P*16843008;S[y]=p<<24|p>>>8,u[y]=p<<16|p>>>16,I[y]=p<<8|p>>>24,T[y]=p,p=O*16843009^c*65537^L*257^y*16843008,x[P]=p<<24|p>>>8,b[P]=p<<16|p>>>16,m[P]=p<<8|p>>>24,E[P]=p,y?(y=L^C[C[C[O^L]]],w^=C[C[w]]):y=w=1}},N.expandKey=function(g){for(var k=this.uint8ArrayToUint32Array_(g),v=!0,S=0;S<k.length&&v;)v=k[S]===this.key[S],S++;if(!v){this.key=k;var u=this.keySize=k.length;if(u!==4&&u!==6&&u!==8)throw new Error("Invalid aes key size="+u);var I=this.ksRows=(u+6+1)*4,T,A,x=this.keySchedule=new Uint32Array(I),b=this.invKeySchedule=new Uint32Array(I),m=this.sBox,E=this.rcon,C=this.invSubMix,y=C[0],w=C[1],_=C[2],P=C[3],L,c;for(T=0;T<I;T++){if(T<u){L=x[T]=k[T];continue}c=L,T%u===0?(c=c<<8|c>>>24,c=m[c>>>24]<<24|m[c>>>16&255]<<16|m[c>>>8&255]<<8|m[c&255],c^=E[T/u|0]<<24):u>6&&T%u===4&&(c=m[c>>>24]<<24|m[c>>>16&255]<<16|m[c>>>8&255]<<8|m[c&255]),x[T]=L=(x[T-u]^c)>>>0}for(A=0;A<I;A++)T=I-A,A&3?c=x[T]:c=x[T-4],A<4||T<=4?b[A]=c:b[A]=y[m[c>>>24]]^w[m[c>>>16&255]]^_[m[c>>>8&255]]^P[m[c&255]],b[A]=b[A]>>>0}},N.networkToHostOrderSwap=function(g){return g<<24|(g&65280)<<8|(g&16711680)>>8|g>>>24},N.decrypt=function(g,k,v){for(var S=this.keySize+6,u=this.invKeySchedule,I=this.invSBox,T=this.invSubMix,A=T[0],x=T[1],b=T[2],m=T[3],E=this.uint8ArrayToUint32Array_(v),C=E[0],y=E[1],w=E[2],_=E[3],P=new Int32Array(g),L=new Int32Array(P.length),c,O,p,R,B,M,K,V,z,G,Q,ee,te,se,ue=this.networkToHostOrderSwap;k<P.length;){for(z=ue(P[k]),G=ue(P[k+1]),Q=ue(P[k+2]),ee=ue(P[k+3]),B=z^u[0],M=ee^u[1],K=Q^u[2],V=G^u[3],te=4,se=1;se<S;se++)c=A[B>>>24]^x[M>>16&255]^b[K>>8&255]^m[V&255]^u[te],O=A[M>>>24]^x[K>>16&255]^b[V>>8&255]^m[B&255]^u[te+1],p=A[K>>>24]^x[V>>16&255]^b[B>>8&255]^m[M&255]^u[te+2],R=A[V>>>24]^x[B>>16&255]^b[M>>8&255]^m[K&255]^u[te+3],B=c,M=O,K=p,V=R,te=te+4;c=I[B>>>24]<<24^I[M>>16&255]<<16^I[K>>8&255]<<8^I[V&255]^u[te],O=I[M>>>24]<<24^I[K>>16&255]<<16^I[V>>8&255]<<8^I[B&255]^u[te+1],p=I[K>>>24]<<24^I[V>>16&255]<<16^I[B>>8&255]<<8^I[M&255]^u[te+2],R=I[V>>>24]<<24^I[B>>16&255]<<16^I[M>>8&255]<<8^I[K&255]^u[te+3],L[k]=ue(c^C),L[k+1]=ue(R^y),L[k+2]=ue(p^w),L[k+3]=ue(O^_),C=z,y=G,w=Q,_=ee,k=k+4}return L.buffer},s}()},"./src/crypt/decrypter.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>k});var D=a("./src/crypt/aes-crypto.ts"),h=a("./src/crypt/fast-aes-key.ts"),$=a("./src/crypt/aes-decryptor.ts"),s=a("./src/utils/logger.ts"),N=a("./src/utils/mp4-tools.ts"),d=a("./src/utils/typed-array.ts"),g=16,k=function(){function v(u,I){var T=I===void 0?{}:I,A=T.removePKCS7Padding,x=A===void 0?!0:A;if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=u.enableSoftwareAES,this.removePKCS7Padding=x,x)try{var b=self.crypto;b&&(this.subtle=b.subtle||b.webkitSubtle)}catch{}this.subtle===null&&(this.useSoftware=!0)}var S=v.prototype;return S.destroy=function(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null},S.isSync=function(){return this.useSoftware},S.flush=function(){var I=this.currentResult,T=this.remainderData;if(!I||T)return s.logger.error("[softwareDecrypt] "+(T?"overflow bytes: "+T.byteLength:"no result")),this.reset(),null;var A=new Uint8Array(I);return this.reset(),this.removePKCS7Padding?(0,$.removePadding)(A):A},S.reset=function(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)},S.decrypt=function(I,T,A){var x=this;return this.useSoftware?new Promise(function(b,m){x.softwareDecrypt(new Uint8Array(I),T,A);var E=x.flush();E?b(E.buffer):m(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(I),T,A)},S.softwareDecrypt=function(I,T,A){var x=this.currentIV,b=this.currentResult,m=this.remainderData;this.logOnce("JS AES decrypt"),m&&(I=(0,N.appendUint8Array)(m,I),this.remainderData=null);var E=this.getValidChunk(I);if(!E.length)return null;x&&(A=x);var C=this.softwareDecrypter;C||(C=this.softwareDecrypter=new $.default),C.expandKey(T);var y=b;return this.currentResult=C.decrypt(E.buffer,0,A),this.currentIV=(0,d.sliceUint8)(E,-16).buffer,y||null},S.webCryptoDecrypt=function(I,T,A){var x=this,b=this.subtle;return(this.key!==T||!this.fastAesKey)&&(this.key=T,this.fastAesKey=new h.default(b,T)),this.fastAesKey.expandKey().then(function(m){if(!b)return Promise.reject(new Error("web crypto not initialized"));x.logOnce("WebCrypto AES decrypt");var E=new D.default(b,new Uint8Array(A));return E.decrypt(I.buffer,m)}).catch(function(m){return s.logger.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, "+m.name+": "+m.message),x.onWebCryptoError(I,T,A)})},S.onWebCryptoError=function(I,T,A){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(I,T,A);var x=this.flush();if(x)return x.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")},S.getValidChunk=function(I){var T=I,A=I.length-I.length%g;return A!==I.length&&(T=(0,d.sliceUint8)(I,0,A),this.remainderData=(0,d.sliceUint8)(I,A)),T},S.logOnce=function(I){!this.logEnabled||(s.logger.log("[decrypter]: "+I),this.logEnabled=!1)},v}()},"./src/crypt/fast-aes-key.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>D});var D=function(){function h(s,N){this.subtle=void 0,this.key=void 0,this.subtle=s,this.key=N}var $=h.prototype;return $.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},h}()},"./src/demux/aacdemuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>k});var D=a("./src/demux/base-audio-demuxer.ts"),h=a("./src/demux/adts.ts"),$=a("./src/utils/logger.ts"),s=a("./src/demux/id3.ts");function N(v,S){v.prototype=Object.create(S.prototype),v.prototype.constructor=v,d(v,S)}function d(v,S){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(I,T){return I.__proto__=T,I},d(v,S)}var g=function(v){N(S,v);function S(I,T){var A;return A=v.call(this)||this,A.observer=void 0,A.config=void 0,A.observer=I,A.config=T,A}var u=S.prototype;return u.resetInitSegment=function(T,A,x,b){v.prototype.resetInitSegment.call(this,T,A,x,b),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:A,duration:b,inputTimeScale:9e4,dropped:0}},S.probe=function(T){if(!T)return!1;for(var A=s.getID3Data(T,0)||[],x=A.length,b=T.length;x<b;x++)if(h.probe(T,x))return $.logger.log("ADTS sync word found !"),!0;return!1},u.canParse=function(T,A){return h.canParse(T,A)},u.appendFrame=function(T,A,x){h.initTrackConfig(T,this.observer,A,x,T.manifestCodec);var b=h.appendFrame(T,A,x,this.basePTS,this.frameIndex);if(b&&b.missing===0)return b},S}(D.default);const k=g},"./src/demux/adts.ts":(i,r,a)=>{a.r(r),a.d(r,{appendFrame:()=>x,canGetFrameLength:()=>k,canParse:()=>S,getAudioConfig:()=>s,getFrameDuration:()=>T,getFullFrameLength:()=>g,getHeaderLength:()=>d,initTrackConfig:()=>I,isHeader:()=>v,isHeaderPattern:()=>N,parseFrameHeader:()=>A,probe:()=>u});var D=a("./src/utils/logger.ts"),h=a("./src/errors.ts"),$=a("./src/events.ts");function s(b,m,E,C){var y,w,_,P,L=navigator.userAgent.toLowerCase(),c=C,O=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];y=((m[E+2]&192)>>>6)+1;var p=(m[E+2]&60)>>>2;if(p>O.length-1){b.trigger($.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+p});return}return _=(m[E+2]&1)<<2,_|=(m[E+3]&192)>>>6,D.logger.log("manifest codec:"+C+", ADTS type:"+y+", samplingIndex:"+p),/firefox/i.test(L)?p>=6?(y=5,P=new Array(4),w=p-3):(y=2,P=new Array(2),w=p):L.indexOf("android")!==-1?(y=2,P=new Array(2),w=p):(y=5,P=new Array(4),C&&(C.indexOf("mp4a.40.29")!==-1||C.indexOf("mp4a.40.5")!==-1)||!C&&p>=6?w=p-3:((C&&C.indexOf("mp4a.40.2")!==-1&&(p>=6&&_===1||/vivaldi/i.test(L))||!C&&_===1)&&(y=2,P=new Array(2)),w=p)),P[0]=y<<3,P[0]|=(p&14)>>1,P[1]|=(p&1)<<7,P[1]|=_<<3,y===5&&(P[1]|=(w&14)>>1,P[2]=(w&1)<<7,P[2]|=8,P[3]=0),{config:P,samplerate:O[p],channelCount:_,codec:"mp4a.40."+y,manifestCodec:c}}function N(b,m){return b[m]===255&&(b[m+1]&246)===240}function d(b,m){return b[m+1]&1?7:9}function g(b,m){return(b[m+3]&3)<<11|b[m+4]<<3|(b[m+5]&224)>>>5}function k(b,m){return m+5<b.length}function v(b,m){return m+1<b.length&&N(b,m)}function S(b,m){return k(b,m)&&N(b,m)&&g(b,m)<=b.length-m}function u(b,m){if(v(b,m)){var E=d(b,m);if(m+E>=b.length)return!1;var C=g(b,m);if(C<=E)return!1;var y=m+C;return y===b.length||v(b,y)}return!1}function I(b,m,E,C,y){if(!b.samplerate){var w=s(m,E,C,y);if(!w)return;b.config=w.config,b.samplerate=w.samplerate,b.channelCount=w.channelCount,b.codec=w.codec,b.manifestCodec=w.manifestCodec,D.logger.log("parsed codec:"+b.codec+", rate:"+w.samplerate+", channels:"+w.channelCount)}}function T(b){return 9216e4/b}function A(b,m){var E=d(b,m);if(m+E<=b.length){var C=g(b,m)-E;if(C>0)return{headerLength:E,frameLength:C}}}function x(b,m,E,C,y){var w=T(b.samplerate),_=C+y*w,P=A(m,E),L;if(P){var c=P.frameLength,O=P.headerLength,p=O+c,R=Math.max(0,E+p-m.length);R?(L=new Uint8Array(p-O),L.set(m.subarray(E+O,m.length),0)):L=m.subarray(E+O,E+p);var B={unit:L,pts:_};return R||b.samples.push(B),{sample:B,length:p,missing:R}}var M=m.length-E;L=new Uint8Array(M),L.set(m.subarray(E,m.length),0);var K={unit:L,pts:_};return{sample:K,length:M,missing:-1}}},"./src/demux/base-audio-demuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>v,initPTSFn:()=>k});var D=a("./src/polyfills/number.ts"),h=a("./src/demux/id3.ts"),$=a("./src/types/demuxer.ts"),s=a("./src/demux/dummy-demuxed-track.ts"),N=a("./src/utils/mp4-tools.ts"),d=a("./src/utils/typed-array.ts"),g=function(){function S(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}var u=S.prototype;return u.resetInitSegment=function(T,A,x,b){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}},u.resetTimeStamp=function(T){this.initPTS=T,this.resetContiguity()},u.resetContiguity=function(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0},u.canParse=function(T,A){return!1},u.appendFrame=function(T,A,x){},u.demux=function(T,A){this.cachedData&&(T=(0,N.appendUint8Array)(this.cachedData,T),this.cachedData=null);var x=h.getID3Data(T,0),b=x?x.length:0,m,E=this._audioTrack,C=this._id3Track,y=x?h.getTimeStamp(x):void 0,w=T.length;for((this.basePTS===null||this.frameIndex===0&&(0,D.isFiniteNumber)(y))&&(this.basePTS=k(y,A,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),x&&x.length>0&&C.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:x,type:$.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY});b<w;){if(this.canParse(T,b)){var _=this.appendFrame(E,T,b);_?(this.frameIndex++,this.lastPTS=_.sample.pts,b+=_.length,m=b):b=w}else h.canParse(T,b)?(x=h.getID3Data(T,b),C.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:x,type:$.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY}),b+=x.length,m=b):b++;if(b===w&&m!==w){var P=(0,d.sliceUint8)(T,m);this.cachedData?this.cachedData=(0,N.appendUint8Array)(this.cachedData,P):this.cachedData=P}}return{audioTrack:E,videoTrack:(0,s.dummyTrack)(),id3Track:C,textTrack:(0,s.dummyTrack)()}},u.demuxSampleAes=function(T,A,x){return Promise.reject(new Error("["+this+"] This demuxer does not support Sample-AES decryption"))},u.flush=function(T){var A=this.cachedData;return A&&(this.cachedData=null,this.demux(A,0)),{audioTrack:this._audioTrack,videoTrack:(0,s.dummyTrack)(),id3Track:this._id3Track,textTrack:(0,s.dummyTrack)()}},u.destroy=function(){},S}(),k=function(u,I,T){return(0,D.isFiniteNumber)(u)?u*90:I*9e4+(T||0)};const v=g},"./src/demux/chunk-cache.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>D});var D=function(){function $(){this.chunks=[],this.dataLength=0}var s=$.prototype;return s.push=function(d){this.chunks.push(d),this.dataLength+=d.length},s.flush=function(){var d=this.chunks,g=this.dataLength,k;if(d.length)d.length===1?k=d[0]:k=h(d,g);else return new Uint8Array(0);return this.reset(),k},s.reset=function(){this.chunks.length=0,this.dataLength=0},$}();function h($,s){for(var N=new Uint8Array(s),d=0,g=0;g<$.length;g++){var k=$[g];N.set(k,d),d+=k.length}return N}},"./src/demux/dummy-demuxed-track.ts":(i,r,a)=>{a.r(r),a.d(r,{dummyTrack:()=>D});function D(h,$){return h===void 0&&(h=""),$===void 0&&($=9e4),{type:h,id:-1,pid:-1,inputTimeScale:$,sequenceNumber:-1,samples:[],dropped:0}}},"./src/demux/exp-golomb.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>$});var D=a("./src/utils/logger.ts"),h=function(){function s(d){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=d,this.bytesAvailable=d.byteLength,this.word=0,this.bitsAvailable=0}var N=s.prototype;return N.loadWord=function(){var g=this.data,k=this.bytesAvailable,v=g.byteLength-k,S=new Uint8Array(4),u=Math.min(4,k);if(u===0)throw new Error("no bytes available");S.set(g.subarray(v,v+u)),this.word=new DataView(S.buffer).getUint32(0),this.bitsAvailable=u*8,this.bytesAvailable-=u},N.skipBits=function(g){var k;g=Math.min(g,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>g?(this.word<<=g,this.bitsAvailable-=g):(g-=this.bitsAvailable,k=g>>3,g-=k<<3,this.bytesAvailable-=k,this.loadWord(),this.word<<=g,this.bitsAvailable-=g)},N.readBits=function(g){var k=Math.min(this.bitsAvailable,g),v=this.word>>>32-k;if(g>32&&D.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=k,this.bitsAvailable>0)this.word<<=k;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return k=g-k,k>0&&this.bitsAvailable?v<<k|this.readBits(k):v},N.skipLZ=function(){var g;for(g=0;g<this.bitsAvailable;++g)if((this.word&2147483648>>>g)!==0)return this.word<<=g,this.bitsAvailable-=g,g;return this.loadWord(),g+this.skipLZ()},N.skipUEG=function(){this.skipBits(1+this.skipLZ())},N.skipEG=function(){this.skipBits(1+this.skipLZ())},N.readUEG=function(){var g=this.skipLZ();return this.readBits(g+1)-1},N.readEG=function(){var g=this.readUEG();return 1&g?1+g>>>1:-1*(g>>>1)},N.readBoolean=function(){return this.readBits(1)===1},N.readUByte=function(){return this.readBits(8)},N.readUShort=function(){return this.readBits(16)},N.readUInt=function(){return this.readBits(32)},N.skipScalingList=function(g){for(var k=8,v=8,S,u=0;u<g;u++)v!==0&&(S=this.readEG(),v=(k+S+256)%256),k=v===0?k:v},N.readSPS=function(){var g=0,k=0,v=0,S=0,u,I,T,A=this.readUByte.bind(this),x=this.readBits.bind(this),b=this.readUEG.bind(this),m=this.readBoolean.bind(this),E=this.skipBits.bind(this),C=this.skipEG.bind(this),y=this.skipUEG.bind(this),w=this.skipScalingList.bind(this);A();var _=A();if(x(5),E(3),A(),y(),_===100||_===110||_===122||_===244||_===44||_===83||_===86||_===118||_===128){var P=b();if(P===3&&E(1),y(),y(),E(1),m())for(I=P!==3?8:12,T=0;T<I;T++)m()&&(T<6?w(16):w(64))}y();var L=b();if(L===0)b();else if(L===1)for(E(1),C(),C(),u=b(),T=0;T<u;T++)C();y(),E(1);var c=b(),O=b(),p=x(1);p===0&&E(1),E(1),m()&&(g=b(),k=b(),v=b(),S=b());var R=[1,1];if(m()&&m()){var B=A();switch(B){case 1:R=[1,1];break;case 2:R=[12,11];break;case 3:R=[10,11];break;case 4:R=[16,11];break;case 5:R=[40,33];break;case 6:R=[24,11];break;case 7:R=[20,11];break;case 8:R=[32,11];break;case 9:R=[80,33];break;case 10:R=[18,11];break;case 11:R=[15,11];break;case 12:R=[64,33];break;case 13:R=[160,99];break;case 14:R=[4,3];break;case 15:R=[3,2];break;case 16:R=[2,1];break;case 255:{R=[A()<<8|A(),A()<<8|A()];break}}}return{width:Math.ceil((c+1)*16-g*2-k*2),height:(2-p)*(O+1)*16-(p?2:4)*(v+S),pixelRatio:R}},N.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},s}();const $=h},"./src/demux/id3.ts":(i,r,a)=>{a.r(r),a.d(r,{canParse:()=>N,decodeFrame:()=>S,getID3Data:()=>$,getID3Frames:()=>v,getTimeStamp:()=>d,isFooter:()=>h,isHeader:()=>D,isTimeStampFrame:()=>g,testables:()=>b,utf8ArrayToStr:()=>x});var D=function(y,w){return w+10<=y.length&&y[w]===73&&y[w+1]===68&&y[w+2]===51&&y[w+3]<255&&y[w+4]<255&&y[w+6]<128&&y[w+7]<128&&y[w+8]<128&&y[w+9]<128},h=function(y,w){return w+10<=y.length&&y[w]===51&&y[w+1]===68&&y[w+2]===73&&y[w+3]<255&&y[w+4]<255&&y[w+6]<128&&y[w+7]<128&&y[w+8]<128&&y[w+9]<128},$=function(y,w){for(var _=w,P=0;D(y,w);){P+=10;var L=s(y,w+6);P+=L,h(y,w+10)&&(P+=10),w+=P}if(P>0)return y.subarray(_,_+P)},s=function(y,w){var _=0;return _=(y[w]&127)<<21,_|=(y[w+1]&127)<<14,_|=(y[w+2]&127)<<7,_|=y[w+3]&127,_},N=function(y,w){return D(y,w)&&s(y,w+6)+10<=y.length-w},d=function(y){for(var w=v(y),_=0;_<w.length;_++){var P=w[_];if(g(P))return A(P)}},g=function(y){return y&&y.key==="PRIV"&&y.info==="com.apple.streaming.transportStreamTimestamp"},k=function(y){var w=String.fromCharCode(y[0],y[1],y[2],y[3]),_=s(y,4),P=10;return{type:w,size:_,data:y.subarray(P,P+_)}},v=function(y){for(var w=0,_=[];D(y,w);){var P=s(y,w+6);w+=10;for(var L=w+P;w+8<L;){var c=k(y.subarray(w)),O=S(c);O&&_.push(O),w+=c.size+10}h(y,w)&&(w+=10)}return _},S=function(y){return y.type==="PRIV"?u(y):y.type[0]==="W"?T(y):I(y)},u=function(y){if(!(y.size<2)){var w=x(y.data,!0),_=new Uint8Array(y.data.subarray(w.length+1));return{key:y.type,info:w,data:_.buffer}}},I=function(y){if(!(y.size<2)){if(y.type==="TXXX"){var w=1,_=x(y.data.subarray(w),!0);w+=_.length+1;var P=x(y.data.subarray(w));return{key:y.type,info:_,data:P}}var L=x(y.data.subarray(1));return{key:y.type,data:L}}},T=function(y){if(y.type==="WXXX"){if(y.size<2)return;var w=1,_=x(y.data.subarray(w),!0);w+=_.length+1;var P=x(y.data.subarray(w));return{key:y.type,info:_,data:P}}var L=x(y.data);return{key:y.type,data:L}},A=function(y){if(y.data.byteLength===8){var w=new Uint8Array(y.data),_=w[3]&1,P=(w[4]<<23)+(w[5]<<15)+(w[6]<<7)+w[7];return P/=45,_&&(P+=4772185884e-2),Math.round(P)}},x=function(y,w){w===void 0&&(w=!1);var _=E();if(_){var P=_.decode(y);if(w){var L=P.indexOf("\0");return L!==-1?P.substring(0,L):P}return P.replace(/\0/g,"")}for(var c=y.length,O,p,R,B="",M=0;M<c;){if(O=y[M++],O===0&&w)return B;if(O===0||O===3)continue;switch(O>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:B+=String.fromCharCode(O);break;case 12:case 13:p=y[M++],B+=String.fromCharCode((O&31)<<6|p&63);break;case 14:p=y[M++],R=y[M++],B+=String.fromCharCode((O&15)<<12|(p&63)<<6|(R&63)<<0);break}}return B},b={decodeTextFrame:I},m;function E(){return!m&&typeof self.TextDecoder<"u"&&(m=new self.TextDecoder("utf-8")),m}},"./src/demux/mp3demuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>k});var D=a("./src/demux/base-audio-demuxer.ts"),h=a("./src/demux/id3.ts"),$=a("./src/utils/logger.ts"),s=a("./src/demux/mpegaudio.ts");function N(v,S){v.prototype=Object.create(S.prototype),v.prototype.constructor=v,d(v,S)}function d(v,S){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(I,T){return I.__proto__=T,I},d(v,S)}var g=function(v){N(S,v);function S(){return v.apply(this,arguments)||this}var u=S.prototype;return u.resetInitSegment=function(T,A,x,b){v.prototype.resetInitSegment.call(this,T,A,x,b),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:A,duration:b,inputTimeScale:9e4,dropped:0}},S.probe=function(T){if(!T)return!1;for(var A=h.getID3Data(T,0)||[],x=A.length,b=T.length;x<b;x++)if(s.probe(T,x))return $.logger.log("MPEG Audio sync word found !"),!0;return!1},u.canParse=function(T,A){return s.canParse(T,A)},u.appendFrame=function(T,A,x){if(this.basePTS!==null)return s.appendFrame(T,A,x,this.basePTS,this.frameIndex)},S}(D.default);const k=g},"./src/demux/mp4demuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>g});var D=a("./src/polyfills/number.ts"),h=a("./src/types/demuxer.ts"),$=a("./src/utils/mp4-tools.ts"),s=a("./src/demux/dummy-demuxed-track.ts"),N=/\/emsg[-/]ID3/i,d=function(){function k(S,u){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=u}var v=k.prototype;return v.resetTimeStamp=function(){},v.resetInitSegment=function(u,I,T,A){var x=this.videoTrack=(0,s.dummyTrack)("video",1),b=this.audioTrack=(0,s.dummyTrack)("audio",1),m=this.txtTrack=(0,s.dummyTrack)("text",1);if(this.id3Track=(0,s.dummyTrack)("id3",1),this.timeOffset=0,!(!u||!u.byteLength)){var E=(0,$.parseInitSegment)(u);if(E.video){var C=E.video,y=C.id,w=C.timescale,_=C.codec;x.id=y,x.timescale=m.timescale=w,x.codec=_}if(E.audio){var P=E.audio,L=P.id,c=P.timescale,O=P.codec;b.id=L,b.timescale=c,b.codec=O}m.id=$.RemuxerTrackIdConfig.text,x.sampleDuration=0,x.duration=b.duration=A}},v.resetContiguity=function(){},k.probe=function(u){return u=u.length>16384?u.subarray(0,16384):u,(0,$.findBox)(u,["moof"]).length>0},v.demux=function(u,I){this.timeOffset=I;var T=u,A=this.videoTrack,x=this.txtTrack;if(this.config.progressive){this.remainderData&&(T=(0,$.appendUint8Array)(this.remainderData,u));var b=(0,$.segmentValidRange)(T);this.remainderData=b.remainder,A.samples=b.valid||new Uint8Array}else A.samples=T;var m=this.extractID3Track(A,I);return x.samples=(0,$.parseSamples)(I,A),{videoTrack:A,audioTrack:this.audioTrack,id3Track:m,textTrack:this.txtTrack}},v.flush=function(){var u=this.timeOffset,I=this.videoTrack,T=this.txtTrack;I.samples=this.remainderData||new Uint8Array,this.remainderData=null;var A=this.extractID3Track(I,this.timeOffset);return T.samples=(0,$.parseSamples)(u,I),{videoTrack:I,audioTrack:(0,s.dummyTrack)(),id3Track:A,textTrack:(0,s.dummyTrack)()}},v.extractID3Track=function(u,I){var T=this.id3Track;if(u.samples.length){var A=(0,$.findBox)(u.samples,["emsg"]);A&&A.forEach(function(x){var b=(0,$.parseEmsg)(x);if(N.test(b.schemeIdUri)){var m=(0,D.isFiniteNumber)(b.presentationTime)?b.presentationTime/b.timeScale:I+b.presentationTimeDelta/b.timeScale,E=b.eventDuration===4294967295?Number.POSITIVE_INFINITY:b.eventDuration/b.timeScale;E<=.001&&(E=Number.POSITIVE_INFINITY);var C=b.payload;T.samples.push({data:C,len:C.byteLength,dts:m,pts:m,type:h.MetadataSchema.emsg,duration:E})}})}return T},v.demuxSampleAes=function(u,I,T){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))},v.destroy=function(){},k}();const g=d},"./src/demux/mpegaudio.ts":(i,r,a)=>{a.r(r),a.d(r,{appendFrame:()=>d,canParse:()=>S,isHeader:()=>v,isHeaderPattern:()=>k,parseHeader:()=>g,probe:()=>u});var D=null,h=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],$=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],s=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],N=[0,1,1,4];function d(I,T,A,x,b){if(!(A+24>T.length)){var m=g(T,A);if(m&&A+m.frameLength<=T.length){var E=m.samplesPerFrame*9e4/m.sampleRate,C=x+b*E,y={unit:T.subarray(A,A+m.frameLength),pts:C,dts:C};return I.config=[],I.channelCount=m.channelCount,I.samplerate=m.sampleRate,I.samples.push(y),{sample:y,length:m.frameLength,missing:0}}}}function g(I,T){var A=I[T+1]>>3&3,x=I[T+1]>>1&3,b=I[T+2]>>4&15,m=I[T+2]>>2&3;if(A!==1&&b!==0&&b!==15&&m!==3){var E=I[T+2]>>1&1,C=I[T+3]>>6,y=A===3?3-x:x===3?3:4,w=h[y*14+b-1]*1e3,_=A===3?0:A===2?1:2,P=$[_*3+m],L=C===3?1:2,c=s[A][x],O=N[x],p=c*8*O,R=Math.floor(c*w/P+E)*O;if(D===null){var B=navigator.userAgent||"",M=B.match(/Chrome\/(\d+)/i);D=M?parseInt(M[1]):0}var K=!!D&&D<=87;return K&&x===2&&w>=224e3&&C===0&&(I[T+3]=I[T+3]|128),{sampleRate:P,channelCount:L,frameLength:R,samplesPerFrame:p}}}function k(I,T){return I[T]===255&&(I[T+1]&224)===224&&(I[T+1]&6)!==0}function v(I,T){return T+1<I.length&&k(I,T)}function S(I,T){var A=4;return k(I,T)&&A<=I.length-T}function u(I,T){if(T+1<I.length&&k(I,T)){var A=4,x=g(I,T),b=A;x!=null&&x.frameLength&&(b=x.frameLength);var m=T+b;return m===I.length||v(I,m)}return!1}},"./src/demux/sample-aes.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>s});var D=a("./src/crypt/decrypter.ts"),h=a("./src/utils/mp4-tools.ts"),$=function(){function N(g,k,v){this.keyData=void 0,this.decrypter=void 0,this.keyData=v,this.decrypter=new D.default(k,{removePKCS7Padding:!1})}var d=N.prototype;return d.decryptBuffer=function(k){return this.decrypter.decrypt(k,this.keyData.key.buffer,this.keyData.iv.buffer)},d.decryptAacSample=function(k,v,S){var u=this,I=k[v].unit;if(!(I.length<=16)){var T=I.subarray(16,I.length-I.length%16),A=T.buffer.slice(T.byteOffset,T.byteOffset+T.length);this.decryptBuffer(A).then(function(x){var b=new Uint8Array(x);I.set(b,16),u.decrypter.isSync()||u.decryptAacSamples(k,v+1,S)})}},d.decryptAacSamples=function(k,v,S){for(;;v++){if(v>=k.length){S();return}if(!(k[v].unit.length<32)&&(this.decryptAacSample(k,v,S),!this.decrypter.isSync()))return}},d.getAvcEncryptedData=function(k){for(var v=Math.floor((k.length-48)/160)*16+16,S=new Int8Array(v),u=0,I=32;I<k.length-16;I+=160,u+=16)S.set(k.subarray(I,I+16),u);return S},d.getAvcDecryptedUnit=function(k,v){for(var S=new Uint8Array(v),u=0,I=32;I<k.length-16;I+=160,u+=16)k.set(S.subarray(u,u+16),I);return k},d.decryptAvcSample=function(k,v,S,u,I){var T=this,A=(0,h.discardEPB)(I.data),x=this.getAvcEncryptedData(A);this.decryptBuffer(x.buffer).then(function(b){I.data=T.getAvcDecryptedUnit(A,b),T.decrypter.isSync()||T.decryptAvcSamples(k,v,S+1,u)})},d.decryptAvcSamples=function(k,v,S,u){if(k instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;v++,S=0){if(v>=k.length){u();return}for(var I=k[v].units;!(S>=I.length);S++){var T=I[S];if(!(T.data.length<=48||T.type!==1&&T.type!==5)&&(this.decryptAvcSample(k,v,S,u,T),!this.decrypter.isSync()))return}}},N}();const s=$},"./src/demux/transmuxer-interface.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>v});var D=a("./src/demux/webworkify-webpack.js"),h=a("./src/events.ts"),$=a("./src/demux/transmuxer.ts"),s=a("./src/utils/logger.ts"),N=a("./src/errors.ts"),d=a("./src/utils/mediasource-helper.ts"),g=a("./node_modules/eventemitter3/index.js"),k=(0,d.getMediaSource)()||{isTypeSupported:function(){return!1}},v=function(){function S(I,T,A,x){var b=this;this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.worker=void 0,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;var m=I.config;this.hls=I,this.id=T,this.useWorker=!!m.enableWorker,this.onTransmuxComplete=A,this.onFlush=x;var E=function(P,L){L=L||{},L.frag=b.frag,L.id=b.id,b.hls.trigger(P,L)};this.observer=new g.EventEmitter,this.observer.on(h.Events.FRAG_DECRYPTED,E),this.observer.on(h.Events.ERROR,E);var C={mp4:k.isTypeSupported("video/mp4"),mpeg:k.isTypeSupported("audio/mpeg"),mp3:k.isTypeSupported('audio/mp4; codecs="mp3"')},y=navigator.vendor;if(this.useWorker&&typeof Worker<"u"){s.logger.log("demuxing in webworker");var w;try{w=this.worker=(0,D.default)("./src/demux/transmuxer-worker.ts"),this.onwmsg=this.onWorkerMessage.bind(this),w.addEventListener("message",this.onwmsg),w.onerror=function(_){b.useWorker=!1,s.logger.warn("Exception in webworker, fallback to inline"),b.hls.trigger(h.Events.ERROR,{type:N.ErrorTypes.OTHER_ERROR,details:N.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:new Error(_.message+"  ("+_.filename+":"+_.lineno+")")})},w.postMessage({cmd:"init",typeSupported:C,vendor:y,id:T,config:JSON.stringify(m)})}catch(_){s.logger.warn("Error in worker:",_),s.logger.error("Error while initializing DemuxerWorker, fallback to inline"),w&&self.URL.revokeObjectURL(w.objectURL),this.transmuxer=new $.default(this.observer,C,m,y,T),this.worker=null}}else this.transmuxer=new $.default(this.observer,C,m,y,T)}var u=S.prototype;return u.destroy=function(){var T=this.worker;if(T)T.removeEventListener("message",this.onwmsg),T.terminate(),this.worker=null,this.onwmsg=void 0;else{var A=this.transmuxer;A&&(A.destroy(),this.transmuxer=null)}var x=this.observer;x&&x.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null},u.push=function(T,A,x,b,m,E,C,y,w,_){var P,L,c=this;w.transmuxing.start=self.performance.now();var O=this.transmuxer,p=this.worker,R=E?E.start:m.start,B=m.decryptdata,M=this.frag,K=!(M&&m.cc===M.cc),V=!(M&&w.level===M.level),z=M?w.sn-M.sn:-1,G=this.part?w.part-this.part.index:-1,Q=z===0&&w.id>1&&w.id===(M==null?void 0:M.stats.chunkCount),ee=!V&&(z===1||z===0&&(G===1||Q&&G<=0)),te=self.performance.now();(V||z||m.stats.parsing.start===0)&&(m.stats.parsing.start=te),E&&(G||!ee)&&(E.stats.parsing.start=te);var se=!(M&&((P=m.initSegment)===null||P===void 0?void 0:P.url)===((L=M.initSegment)===null||L===void 0?void 0:L.url)),ue=new $.TransmuxState(K,ee,y,V,R,se);if(!ee||K||se){s.logger.log("[transmuxer-interface, "+m.type+"]: Starting new transmux session for sn: "+w.sn+" p: "+w.part+" level: "+w.level+" id: "+w.id+`
        discontinuity: `+K+`
        trackSwitch: `+V+`
        contiguous: `+ee+`
        accurateTimeOffset: `+y+`
        timeOffset: `+R+`
        initSegmentChange: `+se);var q=new $.TransmuxConfig(x,b,A,C,_);this.configureTransmuxer(q)}if(this.frag=m,this.part=E,p)p.postMessage({cmd:"demux",data:T,decryptdata:B,chunkMeta:w,state:ue},T instanceof ArrayBuffer?[T]:[]);else if(O){var ne=O.push(T,B,w,ue);(0,$.isPromise)(ne)?(O.async=!0,ne.then(function(de){c.handleTransmuxComplete(de)}).catch(function(de){c.transmuxerError(de,w,"transmuxer-interface push error")})):(O.async=!1,this.handleTransmuxComplete(ne))}},u.flush=function(T){var A=this;T.transmuxing.start=self.performance.now();var x=this.transmuxer,b=this.worker;if(b)b.postMessage({cmd:"flush",chunkMeta:T});else if(x){var m=x.flush(T),E=(0,$.isPromise)(m);E||x.async?((0,$.isPromise)(m)||(m=Promise.resolve(m)),m.then(function(C){A.handleFlushResult(C,T)}).catch(function(C){A.transmuxerError(C,T,"transmuxer-interface flush error")})):this.handleFlushResult(m,T)}},u.transmuxerError=function(T,A,x){!this.hls||this.hls.trigger(h.Events.ERROR,{type:N.ErrorTypes.MEDIA_ERROR,details:N.ErrorDetails.FRAG_PARSING_ERROR,chunkMeta:A,fatal:!1,error:T,err:T,reason:x})},u.handleFlushResult=function(T,A){var x=this;T.forEach(function(b){x.handleTransmuxComplete(b)}),this.onFlush(A)},u.onWorkerMessage=function(T){var A=T.data,x=this.hls;switch(A.event){case"init":{self.URL.revokeObjectURL(this.worker.objectURL);break}case"transmuxComplete":{this.handleTransmuxComplete(A.data);break}case"flush":{this.onFlush(A.data);break}case"workerLog":s.logger[A.data.logType]&&s.logger[A.data.logType](A.data.message);break;default:{A.data=A.data||{},A.data.frag=this.frag,A.data.id=this.id,x.trigger(A.event,A.data);break}}},u.configureTransmuxer=function(T){var A=this.worker,x=this.transmuxer;A?A.postMessage({cmd:"configure",config:T}):x&&x.configure(T)},u.handleTransmuxComplete=function(T){T.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(T)},S}()},"./src/demux/transmuxer-worker.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>d});var D=a("./src/demux/transmuxer.ts"),h=a("./src/events.ts"),$=a("./src/utils/logger.ts"),s=a("./node_modules/eventemitter3/index.js"),N=a("./src/errors.ts");function d(u){var I=new s.EventEmitter,T=function(b,m){u.postMessage({event:b,data:m})};I.on(h.Events.FRAG_DECRYPTED,T),I.on(h.Events.ERROR,T);var A=function(){var b=function(C){var y=function(_){T("workerLog",{logType:C,message:_})};$.logger[C]=y};for(var m in $.logger)b(m)};u.addEventListener("message",function(x){var b=x.data;switch(b.cmd){case"init":{var m=JSON.parse(b.config);u.transmuxer=new D.default(I,b.typeSupported,m,b.vendor,b.id),(0,$.enableLogs)(m.debug,b.id),A(),T("init",null);break}case"configure":{u.transmuxer.configure(b.config);break}case"demux":{var E=u.transmuxer.push(b.data,b.decryptdata,b.chunkMeta,b.state);(0,D.isPromise)(E)?(u.transmuxer.async=!0,E.then(function(_){g(u,_)}).catch(function(_){T(h.Events.ERROR,{type:N.ErrorTypes.MEDIA_ERROR,details:N.ErrorDetails.FRAG_PARSING_ERROR,chunkMeta:b.chunkMeta,fatal:!1,error:_,err:_,reason:"transmuxer-worker push error"})})):(u.transmuxer.async=!1,g(u,E));break}case"flush":{var C=b.chunkMeta,y=u.transmuxer.flush(C),w=(0,D.isPromise)(y);w||u.transmuxer.async?((0,D.isPromise)(y)||(y=Promise.resolve(y)),y.then(function(_){v(u,_,C)}).catch(function(_){T(h.Events.ERROR,{type:N.ErrorTypes.MEDIA_ERROR,details:N.ErrorDetails.FRAG_PARSING_ERROR,chunkMeta:b.chunkMeta,fatal:!1,error:_,err:_,reason:"transmuxer-worker flush error"})})):v(u,y,C);break}}})}function g(u,I){if(S(I.remuxResult))return!1;var T=[],A=I.remuxResult,x=A.audio,b=A.video;return x&&k(T,x),b&&k(T,b),u.postMessage({event:"transmuxComplete",data:I},T),!0}function k(u,I){I.data1&&u.push(I.data1.buffer),I.data2&&u.push(I.data2.buffer)}function v(u,I,T){var A=I.reduce(function(x,b){return g(u,b)||x},!1);A||u.postMessage({event:"transmuxComplete",data:I[0]}),u.postMessage({event:"flush",data:T})}function S(u){return!u.audio&&!u.video&&!u.text&&!u.id3&&!u.initSegment}},"./src/demux/transmuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{TransmuxConfig:()=>m,TransmuxState:()=>E,default:()=>T,isPromise:()=>b});var D=a("./src/events.ts"),h=a("./src/errors.ts"),$=a("./src/crypt/decrypter.ts"),s=a("./src/demux/aacdemuxer.ts"),N=a("./src/demux/mp4demuxer.ts"),d=a("./src/demux/tsdemuxer.ts"),g=a("./src/demux/mp3demuxer.ts"),k=a("./src/remux/mp4-remuxer.ts"),v=a("./src/remux/passthrough-remuxer.ts"),S=a("./src/utils/logger.ts"),u;try{u=self.performance.now.bind(self.performance)}catch{S.logger.debug("Unable to use Performance API on this environment"),u=self.Date.now}var I=[{demux:N.default,remux:v.default},{demux:d.default,remux:k.default},{demux:s.default,remux:k.default},{demux:g.default,remux:k.default}],T=function(){function C(w,_,P,L,c){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=w,this.typeSupported=_,this.config=P,this.vendor=L,this.id=c}var y=C.prototype;return y.configure=function(_){this.transmuxConfig=_,this.decrypter&&this.decrypter.reset()},y.push=function(_,P,L,c){var O=this,p=L.transmuxing;p.executeStart=u();var R=new Uint8Array(_),B=this.currentTransmuxState,M=this.transmuxConfig;c&&(this.currentTransmuxState=c);var K=c||B,V=K.contiguous,z=K.discontinuity,G=K.trackSwitch,Q=K.accurateTimeOffset,ee=K.timeOffset,te=K.initSegmentChange,se=M.audioCodec,ue=M.videoCodec,q=M.defaultInitPts,ne=M.duration,de=M.initSegmentData,le=A(R,P);if(le&&le.method==="AES-128"){var pe=this.getDecrypter();if(pe.isSync()){var ye=pe.softwareDecrypt(R,le.key.buffer,le.iv.buffer);if(!ye)return p.executeEnd=u(),x(L);R=new Uint8Array(ye)}else return this.decryptionPromise=pe.webCryptoDecrypt(R,le.key.buffer,le.iv.buffer).then(function(Ee){var Ie=O.push(Ee,null,L);return O.decryptionPromise=null,Ie}),this.decryptionPromise}var Ce=this.needsProbing(z,G);Ce&&this.configureTransmuxer(R),(z||G||te||Ce)&&this.resetInitSegment(de,se,ue,ne,P),(z||te||Ce)&&this.resetInitialTimestamp(q),V||this.resetContiguity();var ge=this.transmux(R,le,ee,Q,L),ve=this.currentTransmuxState;return ve.contiguous=!0,ve.discontinuity=!1,ve.trackSwitch=!1,p.executeEnd=u(),ge},y.flush=function(_){var P=this,L=_.transmuxing;L.executeStart=u();var c=this.decrypter,O=this.currentTransmuxState,p=this.decryptionPromise;if(p)return p.then(function(){return P.flush(_)});var R=[],B=O.timeOffset;if(c){var M=c.flush();M&&R.push(this.push(M,null,_))}var K=this.demuxer,V=this.remuxer;if(!K||!V)return this.observer.emit(D.Events.ERROR,D.Events.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"}),L.executeEnd=u(),[x(_)];var z=K.flush(B);return b(z)?z.then(function(G){return P.flushRemux(R,G,_),R}):(this.flushRemux(R,z,_),R)},y.flushRemux=function(_,P,L){var c=P.audioTrack,O=P.videoTrack,p=P.id3Track,R=P.textTrack,B=this.currentTransmuxState,M=B.accurateTimeOffset,K=B.timeOffset;S.logger.log("[transmuxer.ts]: Flushed fragment "+L.sn+(L.part>-1?" p: "+L.part:"")+" of level "+L.level);var V=this.remuxer.remux(c,O,p,R,K,M,!0,this.id);_.push({remuxResult:V,chunkMeta:L}),L.transmuxing.executeEnd=u()},y.resetInitialTimestamp=function(_){var P=this.demuxer,L=this.remuxer;!P||!L||(P.resetTimeStamp(_),L.resetTimeStamp(_))},y.resetContiguity=function(){var _=this.demuxer,P=this.remuxer;!_||!P||(_.resetContiguity(),P.resetNextTimestamp())},y.resetInitSegment=function(_,P,L,c,O){var p=this.demuxer,R=this.remuxer;!p||!R||(p.resetInitSegment(_,P,L,c),R.resetInitSegment(_,P,L,O))},y.destroy=function(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)},y.transmux=function(_,P,L,c,O){var p;return P&&P.method==="SAMPLE-AES"?p=this.transmuxSampleAes(_,P,L,c,O):p=this.transmuxUnencrypted(_,L,c,O),p},y.transmuxUnencrypted=function(_,P,L,c){var O=this.demuxer.demux(_,P,!1,!this.config.progressive),p=O.audioTrack,R=O.videoTrack,B=O.id3Track,M=O.textTrack,K=this.remuxer.remux(p,R,B,M,P,L,!1,this.id);return{remuxResult:K,chunkMeta:c}},y.transmuxSampleAes=function(_,P,L,c,O){var p=this;return this.demuxer.demuxSampleAes(_,P,L).then(function(R){var B=p.remuxer.remux(R.audioTrack,R.videoTrack,R.id3Track,R.textTrack,L,c,!1,p.id);return{remuxResult:B,chunkMeta:O}})},y.configureTransmuxer=function(_){for(var P=this.config,L=this.observer,c=this.typeSupported,O=this.vendor,p,R=0,B=I.length;R<B;R++)if(I[R].demux.probe(_)){p=I[R];break}p||(S.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"),p={demux:N.default,remux:v.default});var M=this.demuxer,K=this.remuxer,V=p.remux,z=p.demux;(!K||!(K instanceof V))&&(this.remuxer=new V(L,P,c,O)),(!M||!(M instanceof z))&&(this.demuxer=new z(L,P,c),this.probe=z.probe)},y.needsProbing=function(_,P){return!this.demuxer||!this.remuxer||_||P},y.getDecrypter=function(){var _=this.decrypter;return _||(_=this.decrypter=new $.default(this.config)),_},C}();function A(C,y){var w=null;return C.byteLength>0&&y!=null&&y.key!=null&&y.iv!==null&&y.method!=null&&(w=y),w}var x=function(y){return{remuxResult:{},chunkMeta:y}};function b(C){return"then"in C&&C.then instanceof Function}var m=function(y,w,_,P,L){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=y,this.videoCodec=w,this.initSegmentData=_,this.duration=P,this.defaultInitPts=L},E=function(y,w,_,P,L,c){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=y,this.contiguous=w,this.accurateTimeOffset=_,this.trackSwitch=P,this.timeOffset=L,this.initSegmentChange=c}},"./src/demux/tsdemuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>E});var D=a("./src/demux/adts.ts"),h=a("./src/demux/mpegaudio.ts"),$=a("./src/demux/exp-golomb.ts"),s=a("./src/demux/sample-aes.ts"),N=a("./src/events.ts"),d=a("./src/utils/mp4-tools.ts"),g=a("./src/utils/logger.ts"),k=a("./src/errors.ts"),v=a("./src/types/demuxer.ts");function S(){return S=Object.assign?Object.assign.bind():function(C){for(var y=1;y<arguments.length;y++){var w=arguments[y];for(var _ in w)Object.prototype.hasOwnProperty.call(w,_)&&(C[_]=w[_])}return C},S.apply(this,arguments)}var u=188,I=function(){function C(w,_,P){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._avcTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.observer=w,this.config=_,this.typeSupported=P}C.probe=function(_){var P=C.syncOffset(_);return P>0&&g.logger.warn("MPEG2-TS detected but first sync word found @ offset "+P),P!==-1},C.syncOffset=function(_){for(var P=Math.min(u*5,_.length-u*2)+1,L=0;L<P;){if(_[L]===71&&_[L+u]===71)return L;L++}return-1},C.createTrack=function(_,P){return{container:_==="video"||_==="audio"?"video/mp2t":void 0,type:_,id:d.RemuxerTrackIdConfig[_],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:_==="audio"?P:void 0}};var y=C.prototype;return y.resetInitSegment=function(_,P,L,c){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=C.createTrack("video"),this._audioTrack=C.createTrack("audio",c),this._id3Track=C.createTrack("id3"),this._txtTrack=C.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.avcSample=null,this.remainderData=null,this.audioCodec=P,this.videoCodec=L,this._duration=c},y.resetTimeStamp=function(){},y.resetContiguity=function(){var _=this._audioTrack,P=this._avcTrack,L=this._id3Track;_&&(_.pesData=null),P&&(P.pesData=null),L&&(L.pesData=null),this.aacOverFlow=null,this.avcSample=null,this.remainderData=null},y.demux=function(_,P,L,c){L===void 0&&(L=!1),c===void 0&&(c=!1),L||(this.sampleAes=null);var O,p=this._avcTrack,R=this._audioTrack,B=this._id3Track,M=this._txtTrack,K=p.pid,V=p.pesData,z=R.pid,G=B.pid,Q=R.pesData,ee=B.pesData,te=null,se=this.pmtParsed,ue=this._pmtId,q=_.length;if(this.remainderData&&(_=(0,d.appendUint8Array)(this.remainderData,_),q=_.length,this.remainderData=null),q<u&&!c)return this.remainderData=_,{audioTrack:R,videoTrack:p,id3Track:B,textTrack:M};var ne=Math.max(0,C.syncOffset(_));q-=(q-ne)%u,q<_.byteLength&&!c&&(this.remainderData=new Uint8Array(_.buffer,q,_.buffer.byteLength-q));for(var de=0,le=ne;le<q;le+=u)if(_[le]===71){var pe=!!(_[le+1]&64),ye=((_[le+1]&31)<<8)+_[le+2],Ce=(_[le+3]&48)>>4,ge=void 0;if(Ce>1){if(ge=le+5+_[le+4],ge===le+u)continue}else ge=le+4;switch(ye){case K:pe&&(V&&(O=b(V))&&this.parseAVCPES(p,M,O,!1),V={data:[],size:0}),V&&(V.data.push(_.subarray(ge,le+u)),V.size+=le+u-ge);break;case z:if(pe){if(Q&&(O=b(Q)))switch(R.segmentCodec){case"aac":this.parseAACPES(R,O);break;case"mp3":this.parseMPEGPES(R,O);break}Q={data:[],size:0}}Q&&(Q.data.push(_.subarray(ge,le+u)),Q.size+=le+u-ge);break;case G:pe&&(ee&&(O=b(ee))&&this.parseID3PES(B,O),ee={data:[],size:0}),ee&&(ee.data.push(_.subarray(ge,le+u)),ee.size+=le+u-ge);break;case 0:pe&&(ge+=_[ge]+1),ue=this._pmtId=A(_,ge);break;case ue:{pe&&(ge+=_[ge]+1);var ve=x(_,ge,this.typeSupported,L);K=ve.avc,K>0&&(p.pid=K),z=ve.audio,z>0&&(R.pid=z,R.segmentCodec=ve.segmentCodec),G=ve.id3,G>0&&(B.pid=G),te!==null&&!se&&(g.logger.log("unknown PID '"+te+"' in TS found"),te=null,le=ne-188),se=this.pmtParsed=!0;break}case 17:case 8191:break;default:te=ye;break}}else de++;de>0&&this.observer.emit(N.Events.ERROR,N.Events.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"Found "+de+" TS packet/s that do not start with 0x47"}),p.pesData=V,R.pesData=Q,B.pesData=ee;var Ee={audioTrack:R,videoTrack:p,id3Track:B,textTrack:M};return c&&this.extractRemainingSamples(Ee),Ee},y.flush=function(){var _=this.remainderData;this.remainderData=null;var P;return _?P=this.demux(_,-1,!1,!0):P={videoTrack:this._avcTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(P),this.sampleAes?this.decrypt(P,this.sampleAes):P},y.extractRemainingSamples=function(_){var P=_.audioTrack,L=_.videoTrack,c=_.id3Track,O=_.textTrack,p=L.pesData,R=P.pesData,B=c.pesData,M;if(p&&(M=b(p))?(this.parseAVCPES(L,O,M,!0),L.pesData=null):L.pesData=p,R&&(M=b(R))){switch(P.segmentCodec){case"aac":this.parseAACPES(P,M);break;case"mp3":this.parseMPEGPES(P,M);break}P.pesData=null}else R!=null&&R.size&&g.logger.log("last AAC PES packet truncated,might overlap between fragments"),P.pesData=R;B&&(M=b(B))?(this.parseID3PES(c,M),c.pesData=null):c.pesData=B},y.demuxSampleAes=function(_,P,L){var c=this.demux(_,L,!0,!this.config.progressive),O=this.sampleAes=new s.default(this.observer,this.config,P);return this.decrypt(c,O)},y.decrypt=function(_,P){return new Promise(function(L){var c=_.audioTrack,O=_.videoTrack;c.samples&&c.segmentCodec==="aac"?P.decryptAacSamples(c.samples,0,function(){O.samples?P.decryptAvcSamples(O.samples,0,0,function(){L(_)}):L(_)}):O.samples&&P.decryptAvcSamples(O.samples,0,0,function(){L(_)})})},y.destroy=function(){this._duration=0},y.parseAVCPES=function(_,P,L,c){var O=this,p=this.parseAVCNALu(_,L.data),R=this.avcSample,B,M=!1;L.data=null,R&&p.length&&!_.audFound&&(m(R,_),R=this.avcSample=T(!1,L.pts,L.dts,"")),p.forEach(function(K){switch(K.type){case 1:{B=!0,R||(R=O.avcSample=T(!0,L.pts,L.dts,"")),R.frame=!0;var V=K.data;if(M&&V.length>4){var z=new $.default(V).readSliceType();(z===2||z===4||z===7||z===9)&&(R.key=!0)}break}case 5:B=!0,R||(R=O.avcSample=T(!0,L.pts,L.dts,"")),R.key=!0,R.frame=!0;break;case 6:{B=!0,(0,d.parseSEIMessageFromNALu)(K.data,1,L.pts,P.samples);break}case 7:if(B=!0,M=!0,!_.sps){var G=new $.default(K.data),Q=G.readSPS();_.width=Q.width,_.height=Q.height,_.pixelRatio=Q.pixelRatio,_.sps=[K.data],_.duration=O._duration;for(var ee=K.data.subarray(1,4),te="avc1.",se=0;se<3;se++){var ue=ee[se].toString(16);ue.length<2&&(ue="0"+ue),te+=ue}_.codec=te}break;case 8:B=!0,_.pps||(_.pps=[K.data]);break;case 9:B=!1,_.audFound=!0,R&&m(R,_),R=O.avcSample=T(!1,L.pts,L.dts,"");break;case 12:B=!0;break;default:B=!1,R&&(R.debug+="unknown NAL "+K.type+" ");break}if(R&&B){var q=R.units;q.push(K)}}),c&&R&&(m(R,_),this.avcSample=null)},y.getLastNalUnit=function(_){var P,L=this.avcSample,c;if((!L||L.units.length===0)&&(L=_[_.length-1]),(P=L)!==null&&P!==void 0&&P.units){var O=L.units;c=O[O.length-1]}return c},y.parseAVCNALu=function(_,P){var L=P.byteLength,c=_.naluState||0,O=c,p=[],R=0,B,M,K,V=-1,z=0;for(c===-1&&(V=0,z=P[0]&31,c=0,R=1);R<L;){if(B=P[R++],!c){c=B?0:1;continue}if(c===1){c=B?0:2;continue}if(!B)c=3;else if(B===1){if(V>=0){var G={data:P.subarray(V,R-c-1),type:z};p.push(G)}else{var Q=this.getLastNalUnit(_.samples);if(Q&&(O&&R<=4-O&&Q.state&&(Q.data=Q.data.subarray(0,Q.data.byteLength-O)),M=R-c-1,M>0)){var ee=new Uint8Array(Q.data.byteLength+M);ee.set(Q.data,0),ee.set(P.subarray(0,M),Q.data.byteLength),Q.data=ee,Q.state=0}}R<L?(K=P[R]&31,V=R,z=K,c=0):c=-1}else c=0}if(V>=0&&c>=0){var te={data:P.subarray(V,L),type:z,state:c};p.push(te)}if(p.length===0){var se=this.getLastNalUnit(_.samples);if(se){var ue=new Uint8Array(se.data.byteLength+P.byteLength);ue.set(se.data,0),ue.set(P,se.data.byteLength),se.data=ue}}return _.naluState=c,p},y.parseAACPES=function(_,P){var L=0,c=this.aacOverFlow,O=P.data;if(c){this.aacOverFlow=null;var p=c.missing,R=c.sample.unit.byteLength;if(p===-1){var B=new Uint8Array(R+O.byteLength);B.set(c.sample.unit,0),B.set(O,R),O=B}else{var M=R-p;c.sample.unit.set(O.subarray(0,p),M),_.samples.push(c.sample),L=c.missing}}var K,V;for(K=L,V=O.length;K<V-1&&!D.isHeader(O,K);K++);if(K!==L){var z,G;if(K<V-1?(z="AAC PES did not start with ADTS header,offset:"+K,G=!1):(z="no ADTS header found in AAC PES",G=!0),g.logger.warn("parsing error:"+z),this.observer.emit(N.Events.ERROR,N.Events.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.FRAG_PARSING_ERROR,fatal:G,reason:z}),G)return}D.initTrackConfig(_,this.observer,O,K,this.audioCodec);var Q;if(P.pts!==void 0)Q=P.pts;else if(c){var ee=D.getFrameDuration(_.samplerate);Q=c.sample.pts+ee}else{g.logger.warn("[tsdemuxer]: AAC PES unknown PTS");return}for(var te=0,se;K<V;)if(se=D.appendFrame(_,O,K,Q,te),K+=se.length,se.missing){this.aacOverFlow=se;break}else for(te++;K<V-1&&!D.isHeader(O,K);K++);},y.parseMPEGPES=function(_,P){var L=P.data,c=L.length,O=0,p=0,R=P.pts;if(R===void 0){g.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;p<c;)if(h.isHeader(L,p)){var B=h.appendFrame(_,L,p,R,O);if(B)p+=B.length,O++;else break}else p++},y.parseID3PES=function(_,P){if(P.pts===void 0){g.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");return}var L=S({},P,{type:this._avcTrack?v.MetadataSchema.emsg:v.MetadataSchema.audioId3,duration:Number.POSITIVE_INFINITY});_.samples.push(L)},C}();function T(C,y,w,_){return{key:C,frame:!1,pts:y,dts:w,units:[],debug:_,length:0}}function A(C,y){return(C[y+10]&31)<<8|C[y+11]}function x(C,y,w,_){var P={audio:-1,avc:-1,id3:-1,segmentCodec:"aac"},L=(C[y+1]&15)<<8|C[y+2],c=y+3+L-4,O=(C[y+10]&15)<<8|C[y+11];for(y+=12+O;y<c;){var p=(C[y+1]&31)<<8|C[y+2];switch(C[y]){case 207:if(!_){g.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:P.audio===-1&&(P.audio=p);break;case 21:P.id3===-1&&(P.id3=p);break;case 219:if(!_){g.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:P.avc===-1&&(P.avc=p);break;case 3:case 4:w.mpeg!==!0&&w.mp3!==!0?g.logger.log("MPEG audio found, not supported in this browser"):P.audio===-1&&(P.audio=p,P.segmentCodec="mp3");break;case 36:g.logger.warn("Unsupported HEVC stream type found");break}y+=((C[y+3]&15)<<8|C[y+4])+5}return P}function b(C){var y=0,w,_,P,L,c,O=C.data;if(!C||C.size===0)return null;for(;O[0].length<19&&O.length>1;){var p=new Uint8Array(O[0].length+O[1].length);p.set(O[0]),p.set(O[1],O[0].length),O[0]=p,O.splice(1,1)}w=O[0];var R=(w[0]<<16)+(w[1]<<8)+w[2];if(R===1){if(_=(w[4]<<8)+w[5],_&&_>C.size-6)return null;var B=w[7];B&192&&(L=(w[9]&14)*536870912+(w[10]&255)*4194304+(w[11]&254)*16384+(w[12]&255)*128+(w[13]&254)/2,B&64?(c=(w[14]&14)*536870912+(w[15]&255)*4194304+(w[16]&254)*16384+(w[17]&255)*128+(w[18]&254)/2,L-c>54e5&&(g.logger.warn(Math.round((L-c)/9e4)+"s delta between PTS and DTS, align them"),L=c)):c=L),P=w[8];var M=P+9;if(C.size<=M)return null;C.size-=M;for(var K=new Uint8Array(C.size),V=0,z=O.length;V<z;V++){w=O[V];var G=w.byteLength;if(M)if(M>G){M-=G;continue}else w=w.subarray(M),G-=M,M=0;K.set(w,y),y+=G}return _&&(_-=P+3),{data:K,pts:L,dts:c,len:_}}return null}function m(C,y){if(C.units.length&&C.frame){if(C.pts===void 0){var w=y.samples,_=w.length;if(_){var P=w[_-1];C.pts=P.pts,C.dts=P.dts}else{y.dropped++;return}}y.samples.push(C)}C.debug.length&&g.logger.log(C.pts+"/"+C.dts+":"+C.debug)}const E=I},"./src/demux/webworkify-webpack.js":(i,r,a)=>{a.r(r),a.d(r,{default:()=>u});var D=function(){var T=ENTRY_MODULE,A={},x=function m(E){var C=A[E];if(C!==void 0)return C.exports;var y=A[E]={exports:{}};return T[E].call(y.exports,y,y.exports,m),y.exports};x.m=T,function(){x.n=function(m){var E=m&&m.__esModule?function(){return m.default}:function(){return m};return x.d(E,{a:E}),E}}(),function(){x.d=function(m,E){for(var C in E)x.o(E,C)&&!x.o(m,C)&&Object.defineProperty(m,C,{enumerable:!0,get:E[C]})}}(),function(){x.o=function(m,E){return Object.prototype.hasOwnProperty.call(m,E)}}(),function(){x.r=function(m){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})}}();var b=x(ENTRY_MODULE);return b.default||b},h=D.toString().split("ENTRY_MODULE"),$="[\\.|\\-|\\+|\\w|/|@]+",s="\\(\\s*(/\\*.*?\\*/)?\\s*.*?("+$+").*?\\)";function N(I){return(I+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function d(I){return!isNaN(1*I)}function g(I,T,A){var x={};x[A]=[];var b=T.toString().replace(/^"[^"]+"/,"function"),m=b.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/)||b.match(/^\(\w+,\s*\w+,\s*(\w+)\)\s?\=\s?\>/);if(!m)return x;for(var E=m[1],C=new RegExp("(\\\\n|\\W)"+N(E)+s,"g"),y;y=C.exec(b);)y[3]!=="dll-reference"&&x[A].push(y[3]);for(C=new RegExp("\\("+N(E)+'\\("(dll-reference\\s('+$+'))"\\)\\)'+s,"g");y=C.exec(b);)I[y[2]]||(x[A].push(y[1]),I[y[2]]=a(y[1]).m),x[y[2]]=x[y[2]]||[],x[y[2]].push(y[4]);for(var w=Object.keys(x),_=0;_<w.length;_++)for(var P=0;P<x[w[_]].length;P++)d(x[w[_]][P])&&(x[w[_]][P]=1*x[w[_]][P]);return x}function k(I){var T=Object.keys(I);return T.reduce(function(A,x){return A||I[x].length>0},!1)}function v(I,T){for(var A={main:[T]},x={main:[]},b={main:{}};k(A);)for(var m=Object.keys(A),E=0;E<m.length;E++){var C=m[E],y=A[C],w=y.pop();if(b[C]=b[C]||{},!(b[C][w]||!I[C][w])){b[C][w]=!0,x[C]=x[C]||[],x[C].push(w);for(var _=g(I,I[C][w],C),P=Object.keys(_),L=0;L<P.length;L++)A[P[L]]=A[P[L]]||[],A[P[L]]=A[P[L]].concat(_[P[L]])}}return x}function S(I,T,A,x){var b=I[x].map(function(m){return'"'+m+'": '+T[x][m].toString().replace(/^"[^"]+"/,"function")}).join(",");return h[0]+"{"+b+"}"+h[1]+'"'+A+'"'+h[2]}function u(I,T){T=T||{};var A={main:a.m},x=T.all?{main:Object.keys(A.main)}:v(A,I),b="";Object.keys(x).filter(function(w){return w!=="main"}).forEach(function(w){for(var _=0;x[w][_];)_++;x[w].push(_),A[w][_]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",b=b+("var "+w+" = ("+S(x,A,_,modules)+`)();
`)}),b=b+("new (("+S(x,A,I,"main")+")())(self);");var m=new window.Blob([b],{type:"text/javascript"}),E=window.URL||window.webkitURL||window.mozURL||window.msURL,C=E.createObjectURL(m),y=new window.Worker(C);return y.objectURL=C,y}},"./src/errors.ts":(i,r,a)=>{a.r(r),a.d(r,{ErrorDetails:()=>h,ErrorTypes:()=>D});var D;(function($){$.NETWORK_ERROR="networkError",$.MEDIA_ERROR="mediaError",$.KEY_SYSTEM_ERROR="keySystemError",$.MUX_ERROR="muxError",$.OTHER_ERROR="otherError"})(D||(D={}));var h;(function($){$.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",$.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",$.KEY_SYSTEM_NO_SESSION="keySystemNoSession",$.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",$.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",$.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",$.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",$.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",$.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",$.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",$.MANIFEST_LOAD_ERROR="manifestLoadError",$.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",$.MANIFEST_PARSING_ERROR="manifestParsingError",$.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",$.LEVEL_EMPTY_ERROR="levelEmptyError",$.LEVEL_LOAD_ERROR="levelLoadError",$.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",$.LEVEL_SWITCH_ERROR="levelSwitchError",$.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",$.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",$.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",$.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",$.FRAG_LOAD_ERROR="fragLoadError",$.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",$.FRAG_DECRYPT_ERROR="fragDecryptError",$.FRAG_PARSING_ERROR="fragParsingError",$.REMUX_ALLOC_ERROR="remuxAllocError",$.KEY_LOAD_ERROR="keyLoadError",$.KEY_LOAD_TIMEOUT="keyLoadTimeOut",$.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",$.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",$.BUFFER_APPEND_ERROR="bufferAppendError",$.BUFFER_APPENDING_ERROR="bufferAppendingError",$.BUFFER_STALLED_ERROR="bufferStalledError",$.BUFFER_FULL_ERROR="bufferFullError",$.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",$.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",$.INTERNAL_EXCEPTION="internalException",$.INTERNAL_ABORTED="aborted",$.UNKNOWN="unknown"})(h||(h={}))},"./src/events.ts":(i,r,a)=>{a.r(r),a.d(r,{Events:()=>D});var D;(function(h){h.MEDIA_ATTACHING="hlsMediaAttaching",h.MEDIA_ATTACHED="hlsMediaAttached",h.MEDIA_DETACHING="hlsMediaDetaching",h.MEDIA_DETACHED="hlsMediaDetached",h.BUFFER_RESET="hlsBufferReset",h.BUFFER_CODECS="hlsBufferCodecs",h.BUFFER_CREATED="hlsBufferCreated",h.BUFFER_APPENDING="hlsBufferAppending",h.BUFFER_APPENDED="hlsBufferAppended",h.BUFFER_EOS="hlsBufferEos",h.BUFFER_FLUSHING="hlsBufferFlushing",h.BUFFER_FLUSHED="hlsBufferFlushed",h.MANIFEST_LOADING="hlsManifestLoading",h.MANIFEST_LOADED="hlsManifestLoaded",h.MANIFEST_PARSED="hlsManifestParsed",h.LEVEL_SWITCHING="hlsLevelSwitching",h.LEVEL_SWITCHED="hlsLevelSwitched",h.LEVEL_LOADING="hlsLevelLoading",h.LEVEL_LOADED="hlsLevelLoaded",h.LEVEL_UPDATED="hlsLevelUpdated",h.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",h.LEVELS_UPDATED="hlsLevelsUpdated",h.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",h.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",h.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",h.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",h.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",h.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",h.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",h.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",h.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",h.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",h.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",h.CUES_PARSED="hlsCuesParsed",h.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",h.INIT_PTS_FOUND="hlsInitPtsFound",h.FRAG_LOADING="hlsFragLoading",h.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",h.FRAG_LOADED="hlsFragLoaded",h.FRAG_DECRYPTED="hlsFragDecrypted",h.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",h.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",h.FRAG_PARSING_METADATA="hlsFragParsingMetadata",h.FRAG_PARSED="hlsFragParsed",h.FRAG_BUFFERED="hlsFragBuffered",h.FRAG_CHANGED="hlsFragChanged",h.FPS_DROP="hlsFpsDrop",h.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",h.ERROR="hlsError",h.DESTROYING="hlsDestroying",h.KEY_LOADING="hlsKeyLoading",h.KEY_LOADED="hlsKeyLoaded",h.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",h.BACK_BUFFER_REACHED="hlsBackBufferReached"})(D||(D={}))},"./src/hls.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>y});var D=a("./node_modules/url-toolkit/src/url-toolkit.js"),h=a("./src/loader/playlist-loader.ts"),$=a("./src/controller/id3-track-controller.ts"),s=a("./src/controller/latency-controller.ts"),N=a("./src/controller/level-controller.ts"),d=a("./src/controller/fragment-tracker.ts"),g=a("./src/loader/key-loader.ts"),k=a("./src/controller/stream-controller.ts"),v=a("./src/is-supported.ts"),S=a("./src/utils/logger.ts"),u=a("./src/config.ts"),I=a("./node_modules/eventemitter3/index.js"),T=a("./src/events.ts"),A=a("./src/errors.ts"),x=a("./src/types/level.ts");function b(w,_){for(var P=0;P<_.length;P++){var L=_[P];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(w,E(L.key),L)}}function m(w,_,P){return _&&b(w.prototype,_),P&&b(w,P),Object.defineProperty(w,"prototype",{writable:!1}),w}function E(w){var _=C(w,"string");return typeof _=="symbol"?_:String(_)}function C(w,_){if(typeof w!="object"||w===null)return w;var P=w[Symbol.toPrimitive];if(P!==void 0){var L=P.call(w,_||"default");if(typeof L!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(w)}var y=function(){w.isSupported=function(){return(0,v.isSupported)()};function w(P){P===void 0&&(P={}),this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new I.EventEmitter,this._autoLevelCapping=void 0,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null;var L=this.config=(0,u.mergeConfig)(w.DefaultConfig,P);this.userConfig=P,(0,S.enableLogs)(L.debug,"Hls instance"),this._autoLevelCapping=-1,L.progressive&&(0,u.enableStreamingMode)(L);var c=L.abrController,O=L.bufferController,p=L.capLevelController,R=L.fpsController,B=this.abrController=new c(this),M=this.bufferController=new O(this),K=this.capLevelController=new p(this),V=new R(this),z=new h.default(this),G=new $.default(this),Q=this.levelController=new N.default(this),ee=new d.FragmentTracker(this),te=new g.default(this.config),se=this.streamController=new k.default(this,ee,te);K.setStreamController(se),V.setStreamController(se);var ue=[z,Q,se];this.networkControllers=ue;var q=[B,M,K,V,G,ee];this.audioTrackController=this.createController(L.audioTrackController,ue);var ne=L.audioStreamController;ne&&ue.push(new ne(this,ee,te)),this.subtitleTrackController=this.createController(L.subtitleTrackController,ue);var de=L.subtitleStreamController;de&&ue.push(new de(this,ee,te)),this.createController(L.timelineController,q),te.emeController=this.emeController=this.createController(L.emeController,q),this.cmcdController=this.createController(L.cmcdController,q),this.latencyController=this.createController(s.default,q),this.coreComponents=q}var _=w.prototype;return _.createController=function(L,c){if(L){var O=new L(this);return c&&c.push(O),O}return null},_.on=function(L,c,O){O===void 0&&(O=this),this._emitter.on(L,c,O)},_.once=function(L,c,O){O===void 0&&(O=this),this._emitter.once(L,c,O)},_.removeAllListeners=function(L){this._emitter.removeAllListeners(L)},_.off=function(L,c,O,p){O===void 0&&(O=this),this._emitter.off(L,c,O,p)},_.listeners=function(L){return this._emitter.listeners(L)},_.emit=function(L,c,O){return this._emitter.emit(L,c,O)},_.trigger=function(L,c){if(this.config.debug)return this.emit(L,L,c);try{return this.emit(L,L,c)}catch(O){S.logger.error("An internal error happened while handling event "+L+'. Error message: "'+O.message+'". Here is a stacktrace:',O),this.trigger(T.Events.ERROR,{type:A.ErrorTypes.OTHER_ERROR,details:A.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:L,error:O})}return!1},_.listenerCount=function(L){return this._emitter.listenerCount(L)},_.destroy=function(){S.logger.log("destroy"),this.trigger(T.Events.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(function(L){return L.destroy()}),this.networkControllers.length=0,this.coreComponents.forEach(function(L){return L.destroy()}),this.coreComponents.length=0},_.attachMedia=function(L){S.logger.log("attachMedia"),this._media=L,this.trigger(T.Events.MEDIA_ATTACHING,{media:L})},_.detachMedia=function(){S.logger.log("detachMedia"),this.trigger(T.Events.MEDIA_DETACHING,void 0),this._media=null},_.loadSource=function(L){this.stopLoad();var c=this.media,O=this.url,p=this.url=D.buildAbsoluteURL(self.location.href,L,{alwaysNormalize:!0});S.logger.log("loadSource:"+p),c&&O&&O!==p&&this.bufferController.hasSourceTypes()&&(this.detachMedia(),this.attachMedia(c)),this.trigger(T.Events.MANIFEST_LOADING,{url:L})},_.startLoad=function(L){L===void 0&&(L=-1),S.logger.log("startLoad("+L+")"),this.networkControllers.forEach(function(c){c.startLoad(L)})},_.stopLoad=function(){S.logger.log("stopLoad"),this.networkControllers.forEach(function(L){L.stopLoad()})},_.swapAudioCodec=function(){S.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()},_.recoverMediaError=function(){S.logger.log("recoverMediaError");var L=this._media;this.detachMedia(),L&&this.attachMedia(L)},_.removeLevel=function(L,c){c===void 0&&(c=0),this.levelController.removeLevel(L,c)},m(w,[{key:"levels",get:function(){var L=this.levelController.levels;return L||[]}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(L){S.logger.log("set currentLevel:"+L),this.loadLevel=L,this.abrController.clearTimer(),this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(L){S.logger.log("set nextLevel:"+L),this.levelController.manualLevel=L,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(L){S.logger.log("set loadLevel:"+L),this.levelController.manualLevel=L}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(L){this.levelController.nextLoadLevel=L}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(L){S.logger.log("set firstLevel:"+L),this.levelController.firstLevel=L}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(L){S.logger.log("set startLevel:"+L),L!==-1&&(L=Math.max(L,this.minAutoLevel)),this.levelController.startLevel=L}},{key:"capLevelToPlayerSize",get:function(){return this.config.capLevelToPlayerSize},set:function(L){var c=!!L;c!==this.config.capLevelToPlayerSize&&(c?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=c)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(L){this._autoLevelCapping!==L&&(S.logger.log("set autoLevelCapping:"+L),this._autoLevelCapping=L)}},{key:"bandwidthEstimate",get:function(){var L=this.abrController.bwEstimator;return L?L.getEstimate():NaN}},{key:"maxHdcpLevel",get:function(){return this._maxHdcpLevel},set:function(L){x.HdcpLevels.indexOf(L)>-1&&(this._maxHdcpLevel=L)}},{key:"autoLevelEnabled",get:function(){return this.levelController.manualLevel===-1}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){var L=this.levels,c=this.config.minAutoBitrate;if(!L)return 0;for(var O=L.length,p=0;p<O;p++)if(L[p].maxBitrate>=c)return p;return 0}},{key:"maxAutoLevel",get:function(){var L=this.levels,c=this.autoLevelCapping,O=this.maxHdcpLevel,p;if(c===-1&&L&&L.length?p=L.length-1:p=c,O)for(var R=p;R--;){var B=L[R].attrs["HDCP-LEVEL"];if(B&&B<=O)return R}return p}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(L){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,L)}},{key:"playingDate",get:function(){return this.streamController.currentProgramDateTime}},{key:"mainForwardBufferInfo",get:function(){return this.streamController.getMainFwdBufferInfo()}},{key:"audioTracks",get:function(){var L=this.audioTrackController;return L?L.audioTracks:[]}},{key:"audioTrack",get:function(){var L=this.audioTrackController;return L?L.audioTrack:-1},set:function(L){var c=this.audioTrackController;c&&(c.audioTrack=L)}},{key:"subtitleTracks",get:function(){var L=this.subtitleTrackController;return L?L.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var L=this.subtitleTrackController;return L?L.subtitleTrack:-1},set:function(L){var c=this.subtitleTrackController;c&&(c.subtitleTrack=L)}},{key:"media",get:function(){return this._media}},{key:"subtitleDisplay",get:function(){var L=this.subtitleTrackController;return L?L.subtitleDisplay:!1},set:function(L){var c=this.subtitleTrackController;c&&(c.subtitleDisplay=L)}},{key:"lowLatencyMode",get:function(){return this.config.lowLatencyMode},set:function(L){this.config.lowLatencyMode=L}},{key:"liveSyncPosition",get:function(){return this.latencyController.liveSyncPosition}},{key:"latency",get:function(){return this.latencyController.latency}},{key:"maxLatency",get:function(){return this.latencyController.maxLatency}},{key:"targetLatency",get:function(){return this.latencyController.targetLatency}},{key:"drift",get:function(){return this.latencyController.drift}},{key:"forceStartLoad",get:function(){return this.streamController.forceStartLoad}}],[{key:"version",get:function(){return"1.3.2"}},{key:"Events",get:function(){return T.Events}},{key:"ErrorTypes",get:function(){return A.ErrorTypes}},{key:"ErrorDetails",get:function(){return A.ErrorDetails}},{key:"DefaultConfig",get:function(){return w.defaultConfig?w.defaultConfig:u.hlsDefaultConfig},set:function(L){w.defaultConfig=L}}]),w}();y.defaultConfig=void 0},"./src/is-supported.ts":(i,r,a)=>{a.r(r),a.d(r,{changeTypeSupported:()=>s,isSupported:()=>$});var D=a("./src/utils/mediasource-helper.ts");function h(){return self.SourceBuffer||self.WebKitSourceBuffer}function $(){var N=(0,D.getMediaSource)();if(!N)return!1;var d=h(),g=N&&typeof N.isTypeSupported=="function"&&N.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),k=!d||d.prototype&&typeof d.prototype.appendBuffer=="function"&&typeof d.prototype.remove=="function";return!!g&&!!k}function s(){var N,d=h();return typeof(d==null||(N=d.prototype)===null||N===void 0?void 0:N.changeType)=="function"}},"./src/loader/date-range.ts":(i,r,a)=>{a.r(r),a.d(r,{DateRange:()=>S,DateRangeAttribute:()=>v});var D=a("./src/polyfills/number.ts"),h=a("./src/utils/attr-list.ts"),$=a("./src/utils/logger.ts");function s(){return s=Object.assign?Object.assign.bind():function(u){for(var I=1;I<arguments.length;I++){var T=arguments[I];for(var A in T)Object.prototype.hasOwnProperty.call(T,A)&&(u[A]=T[A])}return u},s.apply(this,arguments)}function N(u,I){for(var T=0;T<I.length;T++){var A=I[T];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(u,g(A.key),A)}}function d(u,I,T){return I&&N(u.prototype,I),T&&N(u,T),Object.defineProperty(u,"prototype",{writable:!1}),u}function g(u){var I=k(u,"string");return typeof I=="symbol"?I:String(I)}function k(u,I){if(typeof u!="object"||u===null)return u;var T=u[Symbol.toPrimitive];if(T!==void 0){var A=T.call(u,I||"default");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(I==="string"?String:Number)(u)}var v;(function(u){u.ID="ID",u.CLASS="CLASS",u.START_DATE="START-DATE",u.DURATION="DURATION",u.END_DATE="END-DATE",u.END_ON_NEXT="END-ON-NEXT",u.PLANNED_DURATION="PLANNED-DURATION",u.SCTE35_OUT="SCTE35-OUT",u.SCTE35_IN="SCTE35-IN"})(v||(v={}));var S=function(){function u(I,T){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,T){var A=T.attr;for(var x in A)if(Object.prototype.hasOwnProperty.call(I,x)&&I[x]!==A[x]){$.logger.warn('DATERANGE tag attribute: "'+x+'" does not match for tags with ID: "'+I.ID+'"'),this._badValueForSameId=x;break}I=s(new h.AttrList({}),A,I)}if(this.attr=I,this._startDate=new Date(I[v.START_DATE]),v.END_DATE in this.attr){var b=new Date(this.attr[v.END_DATE]);(0,D.isFiniteNumber)(b.getTime())&&(this._endDate=b)}}return d(u,[{key:"id",get:function(){return this.attr.ID}},{key:"class",get:function(){return this.attr.CLASS}},{key:"startDate",get:function(){return this._startDate}},{key:"endDate",get:function(){if(this._endDate)return this._endDate;var T=this.duration;return T!==null?new Date(this._startDate.getTime()+T*1e3):null}},{key:"duration",get:function(){if(v.DURATION in this.attr){var T=this.attr.decimalFloatingPoint(v.DURATION);if((0,D.isFiniteNumber)(T))return T}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}},{key:"plannedDuration",get:function(){return v.PLANNED_DURATION in this.attr?this.attr.decimalFloatingPoint(v.PLANNED_DURATION):null}},{key:"endOnNext",get:function(){return this.attr.bool(v.END_ON_NEXT)}},{key:"isValid",get:function(){return!!this.id&&!this._badValueForSameId&&(0,D.isFiniteNumber)(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}]),u}()},"./src/loader/fragment-loader.ts":(i,r,a)=>{a.r(r),a.d(r,{LoadError:()=>T,default:()=>u});var D=a("./src/polyfills/number.ts"),h=a("./src/errors.ts");function $(A,x){A.prototype=Object.create(x.prototype),A.prototype.constructor=A,k(A,x)}function s(A){var x=typeof Map=="function"?new Map:void 0;return s=function(m){if(m===null||!g(m))return m;if(typeof m!="function")throw new TypeError("Super expression must either be null or a function");if(typeof x<"u"){if(x.has(m))return x.get(m);x.set(m,E)}function E(){return N(m,arguments,v(this).constructor)}return E.prototype=Object.create(m.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),k(E,m)},s(A)}function N(A,x,b){return d()?N=Reflect.construct.bind():N=function(E,C,y){var w=[null];w.push.apply(w,C);var _=Function.bind.apply(E,w),P=new _;return y&&k(P,y.prototype),P},N.apply(null,arguments)}function d(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function g(A){return Function.toString.call(A).indexOf("[native code]")!==-1}function k(A,x){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,E){return m.__proto__=E,m},k(A,x)}function v(A){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},v(A)}var S=Math.pow(2,17),u=function(){function A(b){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=b}var x=A.prototype;return x.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},x.abort=function(){this.loader&&this.loader.abort()},x.load=function(m,E){var C=this,y=m.url;if(!y)return Promise.reject(new T({type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:m,networkDetails:null},"Fragment does not have a "+(y?"part list":"url")));this.abort();var w=this.config,_=w.fLoader,P=w.loader;return new Promise(function(L,c){C.loader&&C.loader.destroy();var O=C.loader=m.loader=_?new _(w):new P(w),p=I(m),R={timeout:w.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:w.fragLoadingMaxRetryTimeout,highWaterMark:m.sn==="initSegment"?1/0:S};m.stats=O.stats,O.load(p,R,{onSuccess:function(M,K,V,z){C.resetLoader(m,O);var G=M.data;V.resetIV&&m.decryptdata&&(m.decryptdata.iv=new Uint8Array(G.slice(0,16)),G=G.slice(16)),L({frag:m,part:null,payload:G,networkDetails:z})},onError:function(M,K,V){C.resetLoader(m,O),c(new T({type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:m,response:M,networkDetails:V}))},onAbort:function(M,K,V){C.resetLoader(m,O),c(new T({type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:m,networkDetails:V}))},onTimeout:function(M,K,V){C.resetLoader(m,O),c(new T({type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:m,networkDetails:V}))},onProgress:function(M,K,V,z){E&&E({frag:m,part:null,payload:V,networkDetails:z})}})})},x.loadPart=function(m,E,C){var y=this;this.abort();var w=this.config,_=w.fLoader,P=w.loader;return new Promise(function(L,c){y.loader&&y.loader.destroy();var O=y.loader=m.loader=_?new _(w):new P(w),p=I(m,E),R={timeout:w.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:w.fragLoadingMaxRetryTimeout,highWaterMark:S};E.stats=O.stats,O.load(p,R,{onSuccess:function(M,K,V,z){y.resetLoader(m,O),y.updateStatsFromPart(m,E);var G={frag:m,part:E,payload:M.data,networkDetails:z};C(G),L(G)},onError:function(M,K,V){y.resetLoader(m,O),c(new T({type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:m,part:E,response:M,networkDetails:V}))},onAbort:function(M,K,V){m.stats.aborted=E.stats.aborted,y.resetLoader(m,O),c(new T({type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.INTERNAL_ABORTED,fatal:!1,frag:m,part:E,networkDetails:V}))},onTimeout:function(M,K,V){y.resetLoader(m,O),c(new T({type:h.ErrorTypes.NETWORK_ERROR,details:h.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:m,part:E,networkDetails:V}))}})})},x.updateStatsFromPart=function(m,E){var C=m.stats,y=E.stats,w=y.total;if(C.loaded+=y.loaded,w){var _=Math.round(m.duration/E.duration),P=Math.min(Math.round(C.loaded/w),_),L=_-P,c=L*Math.round(C.loaded/P);C.total=C.loaded+c}else C.total=Math.max(C.loaded,C.total);var O=C.loading,p=y.loading;O.start?O.first+=p.first-p.start:(O.start=p.start,O.first=p.first),O.end=p.end},x.resetLoader=function(m,E){m.loader=null,this.loader===E&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),E.destroy()},A}();function I(A,x){x===void 0&&(x=null);var b=x||A,m={frag:A,part:x,responseType:"arraybuffer",url:b.url,headers:{},rangeStart:0,rangeEnd:0},E=b.byteRangeStartOffset,C=b.byteRangeEndOffset;if((0,D.isFiniteNumber)(E)&&(0,D.isFiniteNumber)(C)){var y,w=E,_=C;if(A.sn==="initSegment"&&((y=A.decryptdata)===null||y===void 0?void 0:y.method)==="AES-128"){var P=C-E;P%16&&(_=C+(16-P%16)),E!==0&&(m.resetIV=!0,w=E-16)}m.rangeStart=w,m.rangeEnd=_}return m}var T=function(A){$(x,A);function x(b){for(var m,E=arguments.length,C=new Array(E>1?E-1:0),y=1;y<E;y++)C[y-1]=arguments[y];return m=A.call.apply(A,[this].concat(C))||this,m.data=void 0,m.data=b,m}return x}(s(Error))},"./src/loader/fragment.ts":(i,r,a)=>{a.r(r),a.d(r,{BaseSegment:()=>u,ElementaryStreamTypes:()=>S,Fragment:()=>I,Part:()=>T});var D=a("./src/polyfills/number.ts"),h=a("./node_modules/url-toolkit/src/url-toolkit.js"),$=a("./src/loader/load-stats.ts");function s(A,x){A.prototype=Object.create(x.prototype),A.prototype.constructor=A,N(A,x)}function N(A,x){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,E){return m.__proto__=E,m},N(A,x)}function d(A,x){for(var b=0;b<x.length;b++){var m=x[b];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(A,k(m.key),m)}}function g(A,x,b){return x&&d(A.prototype,x),b&&d(A,b),Object.defineProperty(A,"prototype",{writable:!1}),A}function k(A){var x=v(A,"string");return typeof x=="symbol"?x:String(x)}function v(A,x){if(typeof A!="object"||A===null)return A;var b=A[Symbol.toPrimitive];if(b!==void 0){var m=b.call(A,x||"default");if(typeof m!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(x==="string"?String:Number)(A)}var S;(function(A){A.AUDIO="audio",A.VIDEO="video",A.AUDIOVIDEO="audiovideo"})(S||(S={}));var u=function(){function A(b){var m;this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams=(m={},m[S.AUDIO]=null,m[S.VIDEO]=null,m[S.AUDIOVIDEO]=null,m),this.baseurl=b}var x=A.prototype;return x.setByteRange=function(m,E){var C=m.split("@",2),y=[];C.length===1?y[0]=E?E.byteRangeEndOffset:0:y[0]=parseInt(C[1]),y[1]=parseInt(C[0])+y[0],this._byteRange=y},g(A,[{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"url",get:function(){return!this._url&&this.baseurl&&this.relurl&&(this._url=(0,h.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""},set:function(m){this._url=m}}]),A}(),I=function(A){s(x,A);function x(m,E){var C;return C=A.call(this,E)||this,C._decryptdata=null,C.rawProgramDateTime=null,C.programDateTime=null,C.tagList=[],C.duration=0,C.sn=0,C.levelkeys=void 0,C.type=void 0,C.loader=null,C.keyLoader=null,C.level=-1,C.cc=0,C.startPTS=void 0,C.endPTS=void 0,C.appendedPTS=void 0,C.startDTS=void 0,C.endDTS=void 0,C.start=0,C.deltaPTS=void 0,C.maxStartPTS=void 0,C.minEndPTS=void 0,C.stats=new $.LoadStats,C.urlId=0,C.data=void 0,C.bitrateTest=!1,C.title=null,C.initSegment=null,C.endList=void 0,C.type=m,C}var b=x.prototype;return b.setKeyFormat=function(E){if(this.levelkeys){var C=this.levelkeys[E];C&&!this._decryptdata&&(this._decryptdata=C.getDecryptData(this.sn))}},b.abortRequests=function(){var E,C;(E=this.loader)===null||E===void 0||E.abort(),(C=this.keyLoader)===null||C===void 0||C.abort()},b.setElementaryStreamInfo=function(E,C,y,w,_,P){P===void 0&&(P=!1);var L=this.elementaryStreams,c=L[E];if(!c){L[E]={startPTS:C,endPTS:y,startDTS:w,endDTS:_,partial:P};return}c.startPTS=Math.min(c.startPTS,C),c.endPTS=Math.max(c.endPTS,y),c.startDTS=Math.min(c.startDTS,w),c.endDTS=Math.max(c.endDTS,_)},b.clearElementaryStreamInfo=function(){var E=this.elementaryStreams;E[S.AUDIO]=null,E[S.VIDEO]=null,E[S.AUDIOVIDEO]=null},g(x,[{key:"decryptdata",get:function(){var E=this.levelkeys;if(!E&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){var C=this.levelkeys.identity;if(C)this._decryptdata=C.getDecryptData(this.sn);else{var y=Object.keys(this.levelkeys);if(y.length===1)return this._decryptdata=this.levelkeys[y[0]].getDecryptData(this.sn)}}return this._decryptdata}},{key:"end",get:function(){return this.start+this.duration}},{key:"endProgramDateTime",get:function(){if(this.programDateTime===null||!(0,D.isFiniteNumber)(this.programDateTime))return null;var E=(0,D.isFiniteNumber)(this.duration)?this.duration:0;return this.programDateTime+E*1e3}},{key:"encrypted",get:function(){var E;if((E=this._decryptdata)!==null&&E!==void 0&&E.encrypted)return!0;if(this.levelkeys){var C=Object.keys(this.levelkeys),y=C.length;if(y>1||y===1&&this.levelkeys[C[0]].encrypted)return!0}return!1}}]),x}(u),T=function(A){s(x,A);function x(b,m,E,C,y){var w;w=A.call(this,E)||this,w.fragOffset=0,w.duration=0,w.gap=!1,w.independent=!1,w.relurl=void 0,w.fragment=void 0,w.index=void 0,w.stats=new $.LoadStats,w.duration=b.decimalFloatingPoint("DURATION"),w.gap=b.bool("GAP"),w.independent=b.bool("INDEPENDENT"),w.relurl=b.enumeratedString("URI"),w.fragment=m,w.index=C;var _=b.enumeratedString("BYTERANGE");return _&&w.setByteRange(_,y),y&&(w.fragOffset=y.fragOffset+y.duration),w}return g(x,[{key:"start",get:function(){return this.fragment.start+this.fragOffset}},{key:"end",get:function(){return this.start+this.duration}},{key:"loaded",get:function(){var m=this.elementaryStreams;return!!(m.audio||m.video||m.audiovideo)}}]),x}(u)},"./src/loader/key-loader.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>$});var D=a("./src/errors.ts"),h=a("./src/loader/fragment-loader.ts"),$=function(){function s(d){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=d}var N=s.prototype;return N.abort=function(){for(var g in this.keyUriToKeyInfo){var k=this.keyUriToKeyInfo[g].loader;k&&k.abort()}},N.detach=function(){for(var g in this.keyUriToKeyInfo){var k=this.keyUriToKeyInfo[g];(k.mediaKeySessionContext||k.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[g]}},N.destroy=function(){this.detach();for(var g in this.keyUriToKeyInfo){var k=this.keyUriToKeyInfo[g].loader;k&&k.destroy()}this.keyUriToKeyInfo={}},N.createKeyLoadError=function(g,k,v,S){return k===void 0&&(k=D.ErrorDetails.KEY_LOAD_ERROR),new h.LoadError({type:D.ErrorTypes.NETWORK_ERROR,details:k,fatal:!1,frag:g,networkDetails:v})},N.loadClear=function(g,k){var v=this;if(this.emeController&&this.config.emeEnabled)for(var S=g.sn,u=g.cc,I=function(b){var m=k[b];if(u<=m.cc&&(S==="initSegment"||S<m.sn))return v.emeController.selectKeySystemFormat(m).then(function(E){m.setKeyFormat(E)}),"break"},T=0;T<k.length;T++){var A=I(T);if(A==="break")break}},N.load=function(g){var k=this;return!g.decryptdata&&g.encrypted&&this.emeController?this.emeController.selectKeySystemFormat(g).then(function(v){return k.loadInternal(g,v)}):this.loadInternal(g)},N.loadInternal=function(g,k){var v,S;k&&g.setKeyFormat(k);var u=g.decryptdata;if(!u){var I=k?"Expected frag.decryptdata to be defined after setting format "+k:"Missing decryption data on fragment in onKeyLoading";return Promise.reject(this.createKeyLoadError(g,D.ErrorDetails.KEY_LOAD_ERROR,null,I))}var T=u.uri;if(!T)return Promise.reject(this.createKeyLoadError(g,D.ErrorDetails.KEY_LOAD_ERROR,null,'Invalid key URI: "'+T+'"'));var A=this.keyUriToKeyInfo[T];if((v=A)!==null&&v!==void 0&&v.decryptdata.key)return u.key=A.decryptdata.key,Promise.resolve({frag:g,keyInfo:A});if((S=A)!==null&&S!==void 0&&S.keyLoadPromise){var x;switch((x=A.mediaKeySessionContext)===null||x===void 0?void 0:x.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return A.keyLoadPromise}}switch(A=this.keyUriToKeyInfo[T]={decryptdata:u,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},u.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return u.keyFormat==="identity"?this.loadKeyHTTP(A,g):this.loadKeyEME(A,g);case"AES-128":return this.loadKeyHTTP(A,g);default:return Promise.reject(this.createKeyLoadError(g,D.ErrorDetails.KEY_LOAD_ERROR,null,'Key supplied with unsupported METHOD: "'+u.method+'"'))}},N.loadKeyEME=function(g,k){var v={frag:k,keyInfo:g};if(this.emeController&&this.config.emeEnabled){var S=this.emeController.loadKey(v);if(S)return(g.keyLoadPromise=S.then(function(u){return g.mediaKeySessionContext=u,v})).catch(function(u){throw g.keyLoadPromise=null,u})}return Promise.resolve(v)},N.loadKeyHTTP=function(g,k){var v=this,S=this.config,u=S.loader,I=new u(S);return k.keyLoader=g.loader=I,g.keyLoadPromise=new Promise(function(T,A){var x={keyInfo:g,frag:k,responseType:"arraybuffer",url:g.decryptdata.uri},b={timeout:S.fragLoadingTimeOut,maxRetry:0,retryDelay:S.fragLoadingRetryDelay,maxRetryDelay:S.fragLoadingMaxRetryTimeout,highWaterMark:0},m={onSuccess:function(C,y,w,_){var P=w.frag,L=w.keyInfo,c=w.url;if(!P.decryptdata||L!==v.keyUriToKeyInfo[c])return A(v.createKeyLoadError(P,D.ErrorDetails.KEY_LOAD_ERROR,_,"after key load, decryptdata unset or changed"));L.decryptdata.key=P.decryptdata.key=new Uint8Array(C.data),P.keyLoader=null,L.loader=null,T({frag:P,keyInfo:L})},onError:function(C,y,w){v.resetLoader(y),A(v.createKeyLoadError(k,D.ErrorDetails.KEY_LOAD_ERROR,w))},onTimeout:function(C,y,w){v.resetLoader(y),A(v.createKeyLoadError(k,D.ErrorDetails.KEY_LOAD_TIMEOUT,w))},onAbort:function(C,y,w){v.resetLoader(y),A(v.createKeyLoadError(k,D.ErrorDetails.INTERNAL_ABORTED,w))}};I.load(x,b,m)})},N.resetLoader=function(g){var k=g.frag,v=g.keyInfo,S=g.url,u=v.loader;k.keyLoader===u&&(k.keyLoader=null,v.loader=null),delete this.keyUriToKeyInfo[S],u&&u.destroy()},s}()},"./src/loader/level-details.ts":(i,r,a)=>{a.r(r),a.d(r,{LevelDetails:()=>g});var D=a("./src/polyfills/number.ts");function h(k,v){for(var S=0;S<v.length;S++){var u=v[S];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(k,s(u.key),u)}}function $(k,v,S){return v&&h(k.prototype,v),S&&h(k,S),Object.defineProperty(k,"prototype",{writable:!1}),k}function s(k){var v=N(k,"string");return typeof v=="symbol"?v:String(v)}function N(k,v){if(typeof k!="object"||k===null)return k;var S=k[Symbol.toPrimitive];if(S!==void 0){var u=S.call(k,v||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(k)}var d=10,g=function(){function k(S){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=S}var v=k.prototype;return v.reloaded=function(u){if(!u){this.advanced=!0,this.updated=!0;return}var I=this.lastPartSn-u.lastPartSn,T=this.lastPartIndex-u.lastPartIndex;this.updated=this.endSN!==u.endSN||!!T||!!I,this.advanced=this.endSN>u.endSN||I>0||I===0&&T>0,this.updated||this.advanced?this.misses=Math.floor(u.misses*.6):this.misses=u.misses+1,this.availabilityDelay=u.availabilityDelay},$(k,[{key:"hasProgramDateTime",get:function(){return this.fragments.length?(0,D.isFiniteNumber)(this.fragments[this.fragments.length-1].programDateTime):!1}},{key:"levelTargetDuration",get:function(){return this.averagetargetduration||this.targetduration||d}},{key:"drift",get:function(){var u=this.driftEndTime-this.driftStartTime;if(u>0){var I=this.driftEnd-this.driftStart;return I*1e3/u}return 1}},{key:"edge",get:function(){return this.partEnd||this.fragmentEnd}},{key:"partEnd",get:function(){var u;return(u=this.partList)!==null&&u!==void 0&&u.length?this.partList[this.partList.length-1].end:this.fragmentEnd}},{key:"fragmentEnd",get:function(){var u;return(u=this.fragments)!==null&&u!==void 0&&u.length?this.fragments[this.fragments.length-1].end:0}},{key:"age",get:function(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}},{key:"lastPartIndex",get:function(){var u;return(u=this.partList)!==null&&u!==void 0&&u.length?this.partList[this.partList.length-1].index:-1}},{key:"lastPartSn",get:function(){var u;return(u=this.partList)!==null&&u!==void 0&&u.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}]),k}()},"./src/loader/level-key.ts":(i,r,a)=>{a.r(r),a.d(r,{LevelKey:()=>g});var D=a("./src/utils/keysystem-util.ts"),h=a("./src/utils/mediakeys-helper.ts"),$=a("./src/utils/mp4-tools.ts"),s=a("./src/utils/logger.ts"),N=a("./src/utils/numeric-encoding-utils.ts"),d={},g=function(){v.clearKeyUriToKeyIdMap=function(){d={}};function v(u,I,T,A,x){A===void 0&&(A=[1]),x===void 0&&(x=null),this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=u,this.uri=I,this.keyFormat=T,this.keyFormatVersions=A,this.iv=x,this.encrypted=u?u!=="NONE":!1,this.isCommonEncryption=this.encrypted&&u!=="AES-128"}var S=v.prototype;return S.isSupported=function(){if(this.method){if(this.method==="AES-128"||this.method==="NONE")return!0;switch(this.keyFormat){case"identity":return this.method==="SAMPLE-AES";case h.KeySystemFormats.FAIRPLAY:case h.KeySystemFormats.WIDEVINE:case h.KeySystemFormats.PLAYREADY:case h.KeySystemFormats.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1},S.getDecryptData=function(I){if(!this.encrypted||!this.uri)return null;if(this.method==="AES-128"&&this.uri&&!this.iv){typeof I!="number"&&(this.method==="AES-128"&&!this.iv&&s.logger.warn('missing IV for initialization segment with method="'+this.method+'" - compliance issue'),I=0);var T=k(I),A=new v(this.method,this.uri,"identity",this.keyFormatVersions,T);return A}var x=(0,D.convertDataUriToArrayBytes)(this.uri);if(x)switch(this.keyFormat){case h.KeySystemFormats.WIDEVINE:this.pssh=x,x.length>=22&&(this.keyId=x.subarray(x.length-22,x.length-6));break;case h.KeySystemFormats.PLAYREADY:{var b=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=(0,$.mp4pssh)(b,null,x);var m=new Uint16Array(x.buffer,x.byteOffset,x.byteLength/2),E=String.fromCharCode.apply(null,Array.from(m)),C=E.substring(E.indexOf("<"),E.length),y=new DOMParser,w=y.parseFromString(C,"text/xml"),_=w.getElementsByTagName("KID")[0];if(_){var P=_.childNodes[0]?_.childNodes[0].nodeValue:_.getAttribute("VALUE");if(P){var L=(0,N.base64Decode)(P).subarray(0,16);(0,D.changeEndianness)(L),this.keyId=L}}break}default:{var c=x.subarray(0,16);if(c.length!==16){var O=new Uint8Array(16);O.set(c,16-c.length),c=O}this.keyId=c;break}}if(!this.keyId||this.keyId.byteLength!==16){var p=d[this.uri];if(!p){var R=Object.keys(d).length%Number.MAX_SAFE_INTEGER;p=new Uint8Array(16);var B=new DataView(p.buffer,12,4);B.setUint32(0,R),d[this.uri]=p}this.keyId=p}return this},v}();function k(v){for(var S=new Uint8Array(16),u=12;u<16;u++)S[u]=v>>8*(15-u)&255;return S}},"./src/loader/load-stats.ts":(i,r,a)=>{a.r(r),a.d(r,{LoadStats:()=>D});var D=function(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}},"./src/loader/m3u8-parser.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>x});var D=a("./src/polyfills/number.ts"),h=a("./node_modules/url-toolkit/src/url-toolkit.js"),$=a("./src/loader/date-range.ts"),s=a("./src/loader/fragment.ts"),N=a("./src/loader/level-details.ts"),d=a("./src/loader/level-key.ts"),g=a("./src/utils/attr-list.ts"),k=a("./src/utils/logger.ts"),v=a("./src/utils/codecs.ts");function S(){return S=Object.assign?Object.assign.bind():function(_){for(var P=1;P<arguments.length;P++){var L=arguments[P];for(var c in L)Object.prototype.hasOwnProperty.call(L,c)&&(_[c]=L[c])}return _},S.apply(this,arguments)}var u=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+|#EXT-X-SESSION-KEY:([^\n\r]*)[\r\n]+/g,I=/#EXT-X-MEDIA:(.*)/g,T=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[\S ]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),A=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|")),x=function(){function _(){}return _.findGroup=function(L,c){for(var O=0;O<L.length;O++){var p=L[O];if(p.id===c)return p}},_.convertAVC1ToAVCOTI=function(L){var c=L.split(".");if(c.length>2){var O=c.shift()+".";return O+=parseInt(c.shift()).toString(16),O+=("000"+parseInt(c.shift()).toString(16)).slice(-4),O}return L},_.resolve=function(L,c){return(0,h.buildAbsoluteURL)(c,L,{alwaysNormalize:!0})},_.parseMasterPlaylist=function(L,c){var O=[],p=[],R={},B=[],M=!1;u.lastIndex=0;for(var K;(K=u.exec(L))!=null;)if(K[1]){var V,z=new g.AttrList(K[1]),G={attrs:z,bitrate:z.decimalInteger("AVERAGE-BANDWIDTH")||z.decimalInteger("BANDWIDTH"),name:z.NAME,url:_.resolve(K[2],c)},Q=z.decimalResolution("RESOLUTION");Q&&(G.width=Q.width,G.height=Q.height),m((z.CODECS||"").split(/[ ,]+/).filter(function(q){return q}),G),G.videoCodec&&G.videoCodec.indexOf("avc1")!==-1&&(G.videoCodec=_.convertAVC1ToAVCOTI(G.videoCodec)),(V=G.unknownCodecs)!==null&&V!==void 0&&V.length||p.push(G),O.push(G)}else if(K[3]){var ee=new g.AttrList(K[3]);ee["DATA-ID"]&&(M=!0,R[ee["DATA-ID"]]=ee)}else if(K[4]){var te=K[4],se=b(te,c);se.encrypted&&se.isSupported()?B.push(se):k.logger.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "'+te+'"')}var ue=p.length>0&&p.length<O.length;return{levels:ue?p:O,sessionData:M?R:null,sessionKeys:B.length?B:null}},_.parseMasterPlaylistMedia=function(L,c,O,p){p===void 0&&(p=[]);var R,B=[],M=0;for(I.lastIndex=0;(R=I.exec(L))!==null;){var K=new g.AttrList(R[1]);if(K.TYPE===O){var V={attrs:K,bitrate:0,id:M++,groupId:K["GROUP-ID"],instreamId:K["INSTREAM-ID"],name:K.NAME||K.LANGUAGE||"",type:O,default:K.bool("DEFAULT"),autoselect:K.bool("AUTOSELECT"),forced:K.bool("FORCED"),lang:K.LANGUAGE,url:K.URI?_.resolve(K.URI,c):""};if(p.length){var z=_.findGroup(p,V.groupId)||p[0];E(V,z,"audioCodec"),E(V,z,"textCodec")}B.push(V)}}return B},_.parseLevelPlaylist=function(L,c,O,p,R){var B=new N.LevelDetails(c),M=B.fragments,K=null,V=0,z=0,G=0,Q=0,ee=null,te=new s.Fragment(p,c),se,ue,q,ne=-1,de=!1;for(T.lastIndex=0,B.m3u8=L;(se=T.exec(L))!==null;){de&&(de=!1,te=new s.Fragment(p,c),te.start=G,te.sn=V,te.cc=Q,te.level=O,K&&(te.initSegment=K,te.rawProgramDateTime=K.rawProgramDateTime,K.rawProgramDateTime=null));var le=se[1];if(le){te.duration=parseFloat(le);var pe=(" "+se[2]).slice(1);te.title=pe||null,te.tagList.push(pe?["INF",le,pe]:["INF",le])}else if(se[3]){if((0,D.isFiniteNumber)(te.duration)){if(te.start=G,q){te.levelkeys=q;var ye=B.encryptedFragments;te.levelkeys&&Object.keys(te.levelkeys).some(function(zt){return te.levelkeys[zt].isCommonEncryption})&&(!ye.length||ye[ye.length-1].levelkeys!==q)&&ye.push(te)}te.sn=V,te.level=O,te.cc=Q,te.urlId=R,M.push(te),te.relurl=(" "+se[3]).slice(1),y(te,ee),ee=te,G+=te.duration,V++,z=0,de=!0}}else if(se[4]){var Ce=(" "+se[4]).slice(1);ee?te.setByteRange(Ce,ee):te.setByteRange(Ce)}else if(se[5])te.rawProgramDateTime=(" "+se[5]).slice(1),te.tagList.push(["PROGRAM-DATE-TIME",te.rawProgramDateTime]),ne===-1&&(ne=M.length);else{if(se=se[0].match(A),!se){k.logger.warn("No matches on slow regex match for level playlist!");continue}for(ue=1;ue<se.length&&!(typeof se[ue]<"u");ue++);var ge=(" "+se[ue]).slice(1),ve=(" "+se[ue+1]).slice(1),Ee=se[ue+2]?(" "+se[ue+2]).slice(1):"";switch(ge){case"PLAYLIST-TYPE":B.type=ve.toUpperCase();break;case"MEDIA-SEQUENCE":V=B.startSN=parseInt(ve);break;case"SKIP":{var Ie=new g.AttrList(ve),Le=Ie.decimalInteger("SKIPPED-SEGMENTS");if((0,D.isFiniteNumber)(Le)){B.skippedSegments=Le;for(var $e=Le;$e--;)M.unshift(null);V+=Le}var Fe=Ie.enumeratedString("RECENTLY-REMOVED-DATERANGES");Fe&&(B.recentlyRemovedDateranges=Fe.split("	"));break}case"TARGETDURATION":B.targetduration=parseFloat(ve);break;case"VERSION":B.version=parseInt(ve);break;case"EXTM3U":break;case"ENDLIST":B.live=!1;break;case"#":(ve||Ee)&&te.tagList.push(Ee?[ve,Ee]:[ve]);break;case"DISCONTINUITY":Q++,te.tagList.push(["DIS"]);break;case"GAP":te.tagList.push([ge]);break;case"BITRATE":te.tagList.push([ge,ve]);break;case"DATERANGE":{var Ve=new g.AttrList(ve),Ge=new $.DateRange(Ve,B.dateRanges[Ve.ID]);Ge.isValid||B.skippedSegments?B.dateRanges[Ge.id]=Ge:k.logger.warn('Ignoring invalid DATERANGE tag: "'+ve+'"'),te.tagList.push(["EXT-X-DATERANGE",ve]);break}case"DISCONTINUITY-SEQUENCE":Q=parseInt(ve);break;case"KEY":{var Xe=b(ve,c);if(Xe.isSupported()){if(Xe.method==="NONE"){q=void 0;break}q||(q={}),q[Xe.keyFormat]&&(q=S({},q)),q[Xe.keyFormat]=Xe}else k.logger.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "'+ve+'"');break}case"START":{var qe=new g.AttrList(ve),ot=qe.decimalFloatingPoint("TIME-OFFSET");(0,D.isFiniteNumber)(ot)&&(B.startTimeOffset=ot);break}case"MAP":{var ft=new g.AttrList(ve);if(te.duration){var Se=new s.Fragment(p,c);w(Se,ft,O,q),K=Se,te.initSegment=K,K.rawProgramDateTime&&!te.rawProgramDateTime&&(te.rawProgramDateTime=K.rawProgramDateTime)}else w(te,ft,O,q),K=te,de=!0;break}case"SERVER-CONTROL":{var dt=new g.AttrList(ve);B.canBlockReload=dt.bool("CAN-BLOCK-RELOAD"),B.canSkipUntil=dt.optionalFloat("CAN-SKIP-UNTIL",0),B.canSkipDateRanges=B.canSkipUntil>0&&dt.bool("CAN-SKIP-DATERANGES"),B.partHoldBack=dt.optionalFloat("PART-HOLD-BACK",0),B.holdBack=dt.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{var Nt=new g.AttrList(ve);B.partTarget=Nt.decimalFloatingPoint("PART-TARGET");break}case"PART":{var ut=B.partList;ut||(ut=B.partList=[]);var Ze=z>0?ut[ut.length-1]:void 0,Ft=z++,Ut=new s.Part(new g.AttrList(ve),te,c,Ft,Ze);ut.push(Ut),te.duration+=Ut.duration;break}case"PRELOAD-HINT":{var Kt=new g.AttrList(ve);B.preloadHint=Kt;break}case"RENDITION-REPORT":{var Dt=new g.AttrList(ve);B.renditionReports=B.renditionReports||[],B.renditionReports.push(Dt);break}default:k.logger.warn("line parsed but not handled: "+se);break}}}ee&&!ee.relurl?(M.pop(),G-=ee.duration,B.partList&&(B.fragmentHint=ee)):B.partList&&(y(te,ee),te.cc=Q,B.fragmentHint=te);var Lt=M.length,Gt=M[0],Wt=M[Lt-1];if(G+=B.skippedSegments*B.targetduration,G>0&&Lt&&Wt){B.averagetargetduration=G/Lt;var At=Wt.sn;B.endSN=At!=="initSegment"?At:0,B.live||(Wt.endList=!0),Gt&&(B.startCC=Gt.cc)}else B.endSN=0,B.startCC=0;return B.fragmentHint&&(G+=B.fragmentHint.duration),B.totalduration=G,B.endCC=Q,ne>0&&C(M,ne),B},_}();function b(_,P){var L,c,O=new g.AttrList(_),p=(L=O.enumeratedString("METHOD"))!=null?L:"",R=O.URI,B=O.hexadecimalInteger("IV"),M=O.enumeratedString("KEYFORMATVERSIONS"),K=(c=O.enumeratedString("KEYFORMAT"))!=null?c:"identity";R&&O.IV&&!B&&k.logger.error("Invalid IV: "+O.IV);var V=R?x.resolve(R,P):"",z=(M||"1").split("/").map(Number).filter(Number.isFinite);return new d.LevelKey(p,V,K,z,B)}function m(_,P){["video","audio","text"].forEach(function(L){var c=_.filter(function(p){return(0,v.isCodecType)(p,L)});if(c.length){var O=c.filter(function(p){return p.lastIndexOf("avc1",0)===0||p.lastIndexOf("mp4a",0)===0});P[L+"Codec"]=O.length>0?O[0]:c[0],_=_.filter(function(p){return c.indexOf(p)===-1})}}),P.unknownCodecs=_}function E(_,P,L){var c=P[L];c&&(_[L]=c)}function C(_,P){for(var L=_[P],c=P;c--;){var O=_[c];if(!O)return;O.programDateTime=L.programDateTime-O.duration*1e3,L=O}}function y(_,P){_.rawProgramDateTime?_.programDateTime=Date.parse(_.rawProgramDateTime):P!=null&&P.programDateTime&&(_.programDateTime=P.endProgramDateTime),(0,D.isFiniteNumber)(_.programDateTime)||(_.programDateTime=null,_.rawProgramDateTime=null)}function w(_,P,L,c){_.relurl=P.URI,P.BYTERANGE&&_.setByteRange(P.BYTERANGE),_.level=L,_.sn="initSegment",c&&(_.levelkeys=c),_.initSegment=null}},"./src/loader/playlist-loader.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>u});var D=a("./src/polyfills/number.ts"),h=a("./src/events.ts"),$=a("./src/errors.ts"),s=a("./src/utils/logger.ts"),N=a("./src/loader/m3u8-parser.ts"),d=a("./src/types/loader.ts"),g=a("./src/utils/attr-list.ts");function k(I){var T=I.type;switch(T){case d.PlaylistContextType.AUDIO_TRACK:return d.PlaylistLevelType.AUDIO;case d.PlaylistContextType.SUBTITLE_TRACK:return d.PlaylistLevelType.SUBTITLE;default:return d.PlaylistLevelType.MAIN}}function v(I,T){var A=I.url;return(A===void 0||A.indexOf("data:")===0)&&(A=T.url),A}var S=function(){function I(A){this.hls=void 0,this.loaders=Object.create(null),this.hls=A,this.registerListeners()}var T=I.prototype;return T.startLoad=function(x){},T.stopLoad=function(){this.destroyInternalLoaders()},T.registerListeners=function(){var x=this.hls;x.on(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),x.on(h.Events.LEVEL_LOADING,this.onLevelLoading,this),x.on(h.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),x.on(h.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},T.unregisterListeners=function(){var x=this.hls;x.off(h.Events.MANIFEST_LOADING,this.onManifestLoading,this),x.off(h.Events.LEVEL_LOADING,this.onLevelLoading,this),x.off(h.Events.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),x.off(h.Events.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)},T.createInternalLoader=function(x){var b=this.hls.config,m=b.pLoader,E=b.loader,C=m||E,y=new C(b);return x.loader=y,this.loaders[x.type]=y,y},T.getInternalLoader=function(x){return this.loaders[x.type]},T.resetInternalLoader=function(x){this.loaders[x]&&delete this.loaders[x]},T.destroyInternalLoaders=function(){for(var x in this.loaders){var b=this.loaders[x];b&&b.destroy(),this.resetInternalLoader(x)}},T.destroy=function(){this.unregisterListeners(),this.destroyInternalLoaders()},T.onManifestLoading=function(x,b){var m=b.url;this.load({id:null,groupId:null,level:0,responseType:"text",type:d.PlaylistContextType.MANIFEST,url:m,deliveryDirectives:null})},T.onLevelLoading=function(x,b){var m=b.id,E=b.level,C=b.url,y=b.deliveryDirectives;this.load({id:m,groupId:null,level:E,responseType:"text",type:d.PlaylistContextType.LEVEL,url:C,deliveryDirectives:y})},T.onAudioTrackLoading=function(x,b){var m=b.id,E=b.groupId,C=b.url,y=b.deliveryDirectives;this.load({id:m,groupId:E,level:null,responseType:"text",type:d.PlaylistContextType.AUDIO_TRACK,url:C,deliveryDirectives:y})},T.onSubtitleTrackLoading=function(x,b){var m=b.id,E=b.groupId,C=b.url,y=b.deliveryDirectives;this.load({id:m,groupId:E,level:null,responseType:"text",type:d.PlaylistContextType.SUBTITLE_TRACK,url:C,deliveryDirectives:y})},T.load=function(x){var b,m=this.hls.config,E=this.getInternalLoader(x);if(E){var C=E.context;if(C&&C.url===x.url){s.logger.trace("[playlist-loader]: playlist request ongoing");return}s.logger.log("[playlist-loader]: aborting previous loader for type: "+x.type),E.abort()}var y,w,_,P;switch(x.type){case d.PlaylistContextType.MANIFEST:y=m.manifestLoadingMaxRetry,w=m.manifestLoadingTimeOut,_=m.manifestLoadingRetryDelay,P=m.manifestLoadingMaxRetryTimeout;break;case d.PlaylistContextType.LEVEL:case d.PlaylistContextType.AUDIO_TRACK:case d.PlaylistContextType.SUBTITLE_TRACK:y=0,w=m.levelLoadingTimeOut;break;default:y=m.levelLoadingMaxRetry,w=m.levelLoadingTimeOut,_=m.levelLoadingRetryDelay,P=m.levelLoadingMaxRetryTimeout;break}if(E=this.createInternalLoader(x),(b=x.deliveryDirectives)!==null&&b!==void 0&&b.part){var L;if(x.type===d.PlaylistContextType.LEVEL&&x.level!==null?L=this.hls.levels[x.level].details:x.type===d.PlaylistContextType.AUDIO_TRACK&&x.id!==null?L=this.hls.audioTracks[x.id].details:x.type===d.PlaylistContextType.SUBTITLE_TRACK&&x.id!==null&&(L=this.hls.subtitleTracks[x.id].details),L){var c=L.partTarget,O=L.targetduration;c&&O&&(w=Math.min(Math.max(c*3,O*.8)*1e3,w))}}var p={timeout:w,maxRetry:y,retryDelay:_,maxRetryDelay:P,highWaterMark:0},R={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};E.load(x,p,R)},T.loadsuccess=function(x,b,m,E){E===void 0&&(E=null),this.resetInternalLoader(m.type);var C=x.data;if(C.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(x,m,"no EXTM3U delimiter",E);return}b.parsing.start=performance.now(),C.indexOf("#EXTINF:")>0||C.indexOf("#EXT-X-TARGETDURATION:")>0?this.handleTrackOrLevelPlaylist(x,b,m,E):this.handleMasterPlaylist(x,b,m,E)},T.loaderror=function(x,b,m){m===void 0&&(m=null),this.handleNetworkError(b,m,!1,x)},T.loadtimeout=function(x,b,m){m===void 0&&(m=null),this.handleNetworkError(b,m,!0)},T.handleMasterPlaylist=function(x,b,m,E){var C=this.hls,y=x.data,w=v(x,m),_=N.default.parseMasterPlaylist(y,w),P=_.levels,L=_.sessionData,c=_.sessionKeys;if(!P.length){this.handleManifestParsingError(x,m,"no level found in manifest",E);return}var O=P.map(function(V){return{id:V.attrs.AUDIO,audioCodec:V.audioCodec}}),p=P.map(function(V){return{id:V.attrs.SUBTITLES,textCodec:V.textCodec}}),R=N.default.parseMasterPlaylistMedia(y,w,"AUDIO",O),B=N.default.parseMasterPlaylistMedia(y,w,"SUBTITLES",p),M=N.default.parseMasterPlaylistMedia(y,w,"CLOSED-CAPTIONS");if(R.length){var K=R.some(function(V){return!V.url});!K&&P[0].audioCodec&&!P[0].attrs.AUDIO&&(s.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),R.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new g.AttrList({}),bitrate:0,url:""}))}C.trigger(h.Events.MANIFEST_LOADED,{levels:P,audioTracks:R,subtitles:B,captions:M,url:w,stats:b,networkDetails:E,sessionData:L,sessionKeys:c})},T.handleTrackOrLevelPlaylist=function(x,b,m,E){var C=this.hls,y=m.id,w=m.level,_=m.type,P=v(x,m),L=(0,D.isFiniteNumber)(y)?y:0,c=(0,D.isFiniteNumber)(w)?w:L,O=k(m),p=N.default.parseLevelPlaylist(x.data,P,c,O,L);if(!p.fragments.length){C.trigger(h.Events.ERROR,{type:$.ErrorTypes.NETWORK_ERROR,details:$.ErrorDetails.LEVEL_EMPTY_ERROR,fatal:!1,url:P,reason:"no fragments found in level",level:typeof m.level=="number"?m.level:void 0});return}if(_===d.PlaylistContextType.MANIFEST){var R={attrs:new g.AttrList({}),bitrate:0,details:p,name:"",url:P};C.trigger(h.Events.MANIFEST_LOADED,{levels:[R],audioTracks:[],url:P,stats:b,networkDetails:E,sessionData:null,sessionKeys:null})}b.parsing.end=performance.now(),m.levelDetails=p,this.handlePlaylistLoaded(x,b,m,E)},T.handleManifestParsingError=function(x,b,m,E){this.hls.trigger(h.Events.ERROR,{type:$.ErrorTypes.NETWORK_ERROR,details:$.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:b.type===d.PlaylistContextType.MANIFEST,url:x.url,reason:m,response:x,context:b,networkDetails:E})},T.handleNetworkError=function(x,b,m,E){m===void 0&&(m=!1),s.logger.warn("[playlist-loader]: A network "+(m?"timeout":"error")+" occurred while loading "+x.type+" level: "+x.level+" id: "+x.id+' group-id: "'+x.groupId+'"');var C=$.ErrorDetails.UNKNOWN,y=!1,w=this.getInternalLoader(x);switch(x.type){case d.PlaylistContextType.MANIFEST:C=m?$.ErrorDetails.MANIFEST_LOAD_TIMEOUT:$.ErrorDetails.MANIFEST_LOAD_ERROR,y=!0;break;case d.PlaylistContextType.LEVEL:C=m?$.ErrorDetails.LEVEL_LOAD_TIMEOUT:$.ErrorDetails.LEVEL_LOAD_ERROR,y=!1;break;case d.PlaylistContextType.AUDIO_TRACK:C=m?$.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:$.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,y=!1;break;case d.PlaylistContextType.SUBTITLE_TRACK:C=m?$.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT:$.ErrorDetails.SUBTITLE_LOAD_ERROR,y=!1;break}w&&this.resetInternalLoader(x.type);var _={type:$.ErrorTypes.NETWORK_ERROR,details:C,fatal:y,url:x.url,loader:w,context:x,networkDetails:b};E&&(_.response=E),this.hls.trigger(h.Events.ERROR,_)},T.handlePlaylistLoaded=function(x,b,m,E){var C=m.type,y=m.level,w=m.id,_=m.groupId,P=m.loader,L=m.levelDetails,c=m.deliveryDirectives;if(!(L!=null&&L.targetduration)){this.handleManifestParsingError(x,m,"invalid target duration",E);return}if(!!P)switch(L.live&&(P.getCacheAge&&(L.ageHeader=P.getCacheAge()||0),(!P.getCacheAge||isNaN(L.ageHeader))&&(L.ageHeader=0)),C){case d.PlaylistContextType.MANIFEST:case d.PlaylistContextType.LEVEL:this.hls.trigger(h.Events.LEVEL_LOADED,{details:L,level:y||0,id:w||0,stats:b,networkDetails:E,deliveryDirectives:c});break;case d.PlaylistContextType.AUDIO_TRACK:this.hls.trigger(h.Events.AUDIO_TRACK_LOADED,{details:L,id:w||0,groupId:_||"",stats:b,networkDetails:E,deliveryDirectives:c});break;case d.PlaylistContextType.SUBTITLE_TRACK:this.hls.trigger(h.Events.SUBTITLE_TRACK_LOADED,{details:L,id:w||0,groupId:_||"",stats:b,networkDetails:E,deliveryDirectives:c});break}},I}();const u=S},"./src/polyfills/number.ts":(i,r,a)=>{a.r(r),a.d(r,{MAX_SAFE_INTEGER:()=>h,isFiniteNumber:()=>D});var D=Number.isFinite||function($){return typeof $=="number"&&isFinite($)},h=Number.MAX_SAFE_INTEGER||9007199254740991},"./src/remux/aac-helper.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>h});var D=function(){function $(){}return $.getSilentFrame=function(N,d){switch(N){case"mp4a.40.2":if(d===1)return new Uint8Array([0,200,0,128,35,128]);if(d===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(d===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(d===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(d===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(d===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(d===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(d===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(d===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}},$}();const h=D},"./src/remux/mp4-generator.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>$});var D=Math.pow(2,32)-1,h=function(){function s(){}return s.init=function(){s.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var d;for(d in s.types)s.types.hasOwnProperty(d)&&(s.types[d]=[d.charCodeAt(0),d.charCodeAt(1),d.charCodeAt(2),d.charCodeAt(3)]);var g=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),k=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);s.HDLR_TYPES={video:g,audio:k};var v=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),S=new Uint8Array([0,0,0,0,0,0,0,0]);s.STTS=s.STSC=s.STCO=S,s.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),s.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),s.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),s.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var u=new Uint8Array([105,115,111,109]),I=new Uint8Array([97,118,99,49]),T=new Uint8Array([0,0,0,1]);s.FTYP=s.box(s.types.ftyp,u,T,u,I),s.DINF=s.box(s.types.dinf,s.box(s.types.dref,v))},s.box=function(d){for(var g=8,k=arguments.length,v=new Array(k>1?k-1:0),S=1;S<k;S++)v[S-1]=arguments[S];for(var u=v.length,I=u;u--;)g+=v[u].byteLength;var T=new Uint8Array(g);for(T[0]=g>>24&255,T[1]=g>>16&255,T[2]=g>>8&255,T[3]=g&255,T.set(d,4),u=0,g=8;u<I;u++)T.set(v[u],g),g+=v[u].byteLength;return T},s.hdlr=function(d){return s.box(s.types.hdlr,s.HDLR_TYPES[d])},s.mdat=function(d){return s.box(s.types.mdat,d)},s.mdhd=function(d,g){g*=d;var k=Math.floor(g/(D+1)),v=Math.floor(g%(D+1));return s.box(s.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,d>>24&255,d>>16&255,d>>8&255,d&255,k>>24,k>>16&255,k>>8&255,k&255,v>>24,v>>16&255,v>>8&255,v&255,85,196,0,0]))},s.mdia=function(d){return s.box(s.types.mdia,s.mdhd(d.timescale,d.duration),s.hdlr(d.type),s.minf(d))},s.mfhd=function(d){return s.box(s.types.mfhd,new Uint8Array([0,0,0,0,d>>24,d>>16&255,d>>8&255,d&255]))},s.minf=function(d){return d.type==="audio"?s.box(s.types.minf,s.box(s.types.smhd,s.SMHD),s.DINF,s.stbl(d)):s.box(s.types.minf,s.box(s.types.vmhd,s.VMHD),s.DINF,s.stbl(d))},s.moof=function(d,g,k){return s.box(s.types.moof,s.mfhd(d),s.traf(k,g))},s.moov=function(d){for(var g=d.length,k=[];g--;)k[g]=s.trak(d[g]);return s.box.apply(null,[s.types.moov,s.mvhd(d[0].timescale,d[0].duration)].concat(k).concat(s.mvex(d)))},s.mvex=function(d){for(var g=d.length,k=[];g--;)k[g]=s.trex(d[g]);return s.box.apply(null,[s.types.mvex].concat(k))},s.mvhd=function(d,g){g*=d;var k=Math.floor(g/(D+1)),v=Math.floor(g%(D+1)),S=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,d>>24&255,d>>16&255,d>>8&255,d&255,k>>24,k>>16&255,k>>8&255,k&255,v>>24,v>>16&255,v>>8&255,v&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return s.box(s.types.mvhd,S)},s.sdtp=function(d){var g=d.samples||[],k=new Uint8Array(4+g.length),v,S;for(v=0;v<g.length;v++)S=g[v].flags,k[v+4]=S.dependsOn<<4|S.isDependedOn<<2|S.hasRedundancy;return s.box(s.types.sdtp,k)},s.stbl=function(d){return s.box(s.types.stbl,s.stsd(d),s.box(s.types.stts,s.STTS),s.box(s.types.stsc,s.STSC),s.box(s.types.stsz,s.STSZ),s.box(s.types.stco,s.STCO))},s.avc1=function(d){var g=[],k=[],v,S,u;for(v=0;v<d.sps.length;v++)S=d.sps[v],u=S.byteLength,g.push(u>>>8&255),g.push(u&255),g=g.concat(Array.prototype.slice.call(S));for(v=0;v<d.pps.length;v++)S=d.pps[v],u=S.byteLength,k.push(u>>>8&255),k.push(u&255),k=k.concat(Array.prototype.slice.call(S));var I=s.box(s.types.avcC,new Uint8Array([1,g[3],g[4],g[5],255,224|d.sps.length].concat(g).concat([d.pps.length]).concat(k))),T=d.width,A=d.height,x=d.pixelRatio[0],b=d.pixelRatio[1];return s.box(s.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,T>>8&255,T&255,A>>8&255,A&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),I,s.box(s.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),s.box(s.types.pasp,new Uint8Array([x>>24,x>>16&255,x>>8&255,x&255,b>>24,b>>16&255,b>>8&255,b&255])))},s.esds=function(d){var g=d.config.length;return new Uint8Array([0,0,0,0,3,23+g,0,1,0,4,15+g,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([g]).concat(d.config).concat([6,1,2]))},s.mp4a=function(d){var g=d.samplerate;return s.box(s.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,d.channelCount,0,16,0,0,0,0,g>>8&255,g&255,0,0]),s.box(s.types.esds,s.esds(d)))},s.mp3=function(d){var g=d.samplerate;return s.box(s.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,d.channelCount,0,16,0,0,0,0,g>>8&255,g&255,0,0]))},s.stsd=function(d){return d.type==="audio"?d.segmentCodec==="mp3"&&d.codec==="mp3"?s.box(s.types.stsd,s.STSD,s.mp3(d)):s.box(s.types.stsd,s.STSD,s.mp4a(d)):s.box(s.types.stsd,s.STSD,s.avc1(d))},s.tkhd=function(d){var g=d.id,k=d.duration*d.timescale,v=d.width,S=d.height,u=Math.floor(k/(D+1)),I=Math.floor(k%(D+1));return s.box(s.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,g>>24&255,g>>16&255,g>>8&255,g&255,0,0,0,0,u>>24,u>>16&255,u>>8&255,u&255,I>>24,I>>16&255,I>>8&255,I&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,v>>8&255,v&255,0,0,S>>8&255,S&255,0,0]))},s.traf=function(d,g){var k=s.sdtp(d),v=d.id,S=Math.floor(g/(D+1)),u=Math.floor(g%(D+1));return s.box(s.types.traf,s.box(s.types.tfhd,new Uint8Array([0,0,0,0,v>>24,v>>16&255,v>>8&255,v&255])),s.box(s.types.tfdt,new Uint8Array([1,0,0,0,S>>24,S>>16&255,S>>8&255,S&255,u>>24,u>>16&255,u>>8&255,u&255])),s.trun(d,k.length+16+20+8+16+8+8),k)},s.trak=function(d){return d.duration=d.duration||4294967295,s.box(s.types.trak,s.tkhd(d),s.mdia(d))},s.trex=function(d){var g=d.id;return s.box(s.types.trex,new Uint8Array([0,0,0,0,g>>24,g>>16&255,g>>8&255,g&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},s.trun=function(d,g){var k=d.samples||[],v=k.length,S=12+16*v,u=new Uint8Array(S),I,T,A,x,b,m;for(g+=8+S,u.set([d.type==="video"?1:0,0,15,1,v>>>24&255,v>>>16&255,v>>>8&255,v&255,g>>>24&255,g>>>16&255,g>>>8&255,g&255],0),I=0;I<v;I++)T=k[I],A=T.duration,x=T.size,b=T.flags,m=T.cts,u.set([A>>>24&255,A>>>16&255,A>>>8&255,A&255,x>>>24&255,x>>>16&255,x>>>8&255,x&255,b.isLeading<<2|b.dependsOn,b.isDependedOn<<6|b.hasRedundancy<<4|b.paddingValue<<1|b.isNonSync,b.degradPrio&240<<8,b.degradPrio&15,m>>>24&255,m>>>16&255,m>>>8&255,m&255],12+16*I);return s.box(s.types.trun,u)},s.initSegment=function(d){s.types||s.init();var g=s.moov(d),k=new Uint8Array(s.FTYP.byteLength+g.byteLength);return k.set(s.FTYP),k.set(g,s.FTYP.byteLength),k},s}();h.types=void 0,h.HDLR_TYPES=void 0,h.STTS=void 0,h.STSC=void 0,h.STCO=void 0,h.STSZ=void 0,h.VMHD=void 0,h.SMHD=void 0,h.STSD=void 0,h.FTYP=void 0,h.DINF=void 0;const $=h},"./src/remux/mp4-remuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>x,flushTextTrackMetadataCueSamples:()=>E,flushTextTrackUserdataCueSamples:()=>C,normalizePts:()=>b});var D=a("./src/polyfills/number.ts"),h=a("./src/remux/aac-helper.ts"),$=a("./src/remux/mp4-generator.ts"),s=a("./src/events.ts"),N=a("./src/errors.ts"),d=a("./src/utils/logger.ts"),g=a("./src/types/loader.ts"),k=a("./src/utils/timescale-conversion.ts");function v(){return v=Object.assign?Object.assign.bind():function(_){for(var P=1;P<arguments.length;P++){var L=arguments[P];for(var c in L)Object.prototype.hasOwnProperty.call(L,c)&&(_[c]=L[c])}return _},v.apply(this,arguments)}var S=10*1e3,u=1024,I=1152,T=null,A=null,x=function(){function _(L,c,O,p){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=void 0,this._initDTS=void 0,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.observer=L,this.config=c,this.typeSupported=O,this.ISGenerated=!1,T===null){var R=navigator.userAgent||"",B=R.match(/Chrome\/(\d+)/i);T=B?parseInt(B[1]):0}if(A===null){var M=navigator.userAgent.match(/Safari\/(\d+)/i);A=M?parseInt(M[1]):0}}var P=_.prototype;return P.destroy=function(){},P.resetTimeStamp=function(c){d.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=c},P.resetNextTimestamp=function(){d.logger.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1},P.resetInitSegment=function(){d.logger.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1},P.getVideoStartPts=function(c){var O=!1,p=c.reduce(function(R,B){var M=B.pts-R;return M<-4294967296?(O=!0,b(R,B.pts)):M>0?R:B.pts},c[0].pts);return O&&d.logger.debug("PTS rollover detected"),p},P.remux=function(c,O,p,R,B,M,K,V){var z,G,Q,ee,te,se,ue=B,q=B,ne=c.pid>-1,de=O.pid>-1,le=O.samples.length,pe=c.samples.length>0,ye=K&&le>0||le>1,Ce=(!ne||pe)&&(!de||ye)||this.ISGenerated||K;if(Ce){this.ISGenerated||(Q=this.generateIS(c,O,B));var ge=this.isVideoContiguous,ve=-1,Ee;if(ye&&(ve=m(O.samples),!ge&&this.config.forceKeyFrameOnDiscontinuity))if(se=!0,ve>0){d.logger.warn("[mp4-remuxer]: Dropped "+ve+" out of "+le+" video samples due to a missing keyframe");var Ie=this.getVideoStartPts(O.samples);O.samples=O.samples.slice(ve),O.dropped+=ve,q+=(O.samples[0].pts-Ie)/O.inputTimeScale,Ee=q}else ve===-1&&(d.logger.warn("[mp4-remuxer]: No keyframe found out of "+le+" video samples"),se=!1);if(this.ISGenerated){if(pe&&ye){var Le=this.getVideoStartPts(O.samples),$e=b(c.samples[0].pts,Le)-Le,Fe=$e/O.inputTimeScale;ue+=Math.max(0,Fe),q+=Math.max(0,-Fe)}if(pe){if(c.samplerate||(d.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),Q=this.generateIS(c,O,B)),G=this.remuxAudio(c,ue,this.isAudioContiguous,M,de||ye||V===g.PlaylistLevelType.AUDIO?q:void 0),ye){var Ve=G?G.endPTS-G.startPTS:0;O.inputTimeScale||(d.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),Q=this.generateIS(c,O,B)),z=this.remuxVideo(O,q,ge,Ve)}}else ye&&(z=this.remuxVideo(O,q,ge,0));z&&(z.firstKeyFrame=ve,z.independent=ve!==-1,z.firstKeyFramePTS=Ee)}}return this.ISGenerated&&(p.samples.length&&(te=E(p,B,this._initPTS,this._initDTS)),R.samples.length&&(ee=C(R,B,this._initPTS))),{audio:G,video:z,initSegment:Q,independent:se,text:ee,id3:te}},P.generateIS=function(c,O,p){var R=c.samples,B=O.samples,M=this.typeSupported,K={},V=!(0,D.isFiniteNumber)(this._initPTS),z="audio/mp4",G,Q,ee;if(V&&(G=Q=1/0),c.config&&R.length){switch(c.timescale=c.samplerate,c.segmentCodec){case"mp3":M.mpeg?(z="audio/mpeg",c.codec=""):M.mp3&&(c.codec="mp3");break}K.audio={id:"audio",container:z,codec:c.codec,initSegment:c.segmentCodec==="mp3"&&M.mpeg?new Uint8Array(0):$.default.initSegment([c]),metadata:{channelCount:c.channelCount}},V&&(ee=c.inputTimeScale,G=Q=R[0].pts-Math.round(ee*p))}if(O.sps&&O.pps&&B.length&&(O.timescale=O.inputTimeScale,K.video={id:"main",container:"video/mp4",codec:O.codec,initSegment:$.default.initSegment([O]),metadata:{width:O.width,height:O.height}},V)){ee=O.inputTimeScale;var te=this.getVideoStartPts(B),se=Math.round(ee*p);Q=Math.min(Q,b(B[0].dts,te)-se),G=Math.min(G,te-se)}if(Object.keys(K).length)return this.ISGenerated=!0,V&&(this._initPTS=G,this._initDTS=Q),{tracks:K,initPTS:G,timescale:ee}},P.remuxVideo=function(c,O,p,R){var B=c.inputTimeScale,M=c.samples,K=[],V=M.length,z=this._initPTS,G=this.nextAvcDts,Q=8,ee=this.videoSampleDuration,te,se,ue=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,ne=!1;if(!p||G===null){var de=O*B,le=M[0].pts-b(M[0].dts,M[0].pts);G=de-le}for(var pe=0;pe<V;pe++){var ye=M[pe];ye.pts=b(ye.pts-z,G),ye.dts=b(ye.dts-z,G),ye.dts<M[pe>0?pe-1:pe].dts&&(ne=!0)}ne&&M.sort(function(_r,wn){var Ta=_r.dts-wn.dts,ka=_r.pts-wn.pts;return Ta||ka}),te=M[0].dts,se=M[M.length-1].dts;var Ce=se-te,ge=Ce?Math.round(Ce/(V-1)):ee||c.inputTimeScale/30;if(p){var ve=te-G,Ee=ve>ge,Ie=ve<-1;if((Ee||Ie)&&(Ee?d.logger.warn("AVC: "+(0,k.toMsFromMpegTsClock)(ve,!0)+" ms ("+ve+"dts) hole between fragments detected, filling it"):d.logger.warn("AVC: "+(0,k.toMsFromMpegTsClock)(-ve,!0)+" ms ("+ve+"dts) overlapping between fragments detected"),!Ie||G>M[0].pts)){te=G;var Le=M[0].pts-ve;M[0].dts=te,M[0].pts=Le,d.logger.log("Video: First PTS/DTS adjusted: "+(0,k.toMsFromMpegTsClock)(Le,!0)+"/"+(0,k.toMsFromMpegTsClock)(te,!0)+", delta: "+(0,k.toMsFromMpegTsClock)(ve,!0)+" ms")}}te=Math.max(0,te);for(var $e=0,Fe=0,Ve=0;Ve<V;Ve++){for(var Ge=M[Ve],Xe=Ge.units,qe=Xe.length,ot=0,ft=0;ft<qe;ft++)ot+=Xe[ft].data.length;Fe+=ot,$e+=qe,Ge.length=ot,Ge.dts=Math.max(Ge.dts,te),ue=Math.min(Ge.pts,ue),q=Math.max(Ge.pts,q)}se=M[V-1].dts;var Se=Fe+4*$e+8,dt;try{dt=new Uint8Array(Se)}catch{this.observer.emit(s.Events.ERROR,s.Events.ERROR,{type:N.ErrorTypes.MUX_ERROR,details:N.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:Se,reason:"fail allocating video mdat "+Se});return}var Nt=new DataView(dt.buffer);Nt.setUint32(0,Se),dt.set($.default.types.mdat,4);for(var ut=!1,Ze=Number.POSITIVE_INFINITY,Ft=Number.POSITIVE_INFINITY,Ut=Number.NEGATIVE_INFINITY,Kt=Number.NEGATIVE_INFINITY,Dt=0;Dt<V;Dt++){for(var Lt=M[Dt],Gt=Lt.units,Wt=0,At=0,zt=Gt.length;At<zt;At++){var Xt=Gt[At],Fn=Xt.data,vn=Xt.data.byteLength;Nt.setUint32(Q,vn),Q+=4,dt.set(Fn,Q),Q+=vn,Wt+=4+vn}var yn=void 0;if(Dt<V-1)ee=M[Dt+1].dts-Lt.dts,yn=M[Dt+1].pts-Lt.pts;else{var kn=this.config,nr=Dt>0?Lt.dts-M[Dt-1].dts:ge;if(yn=Dt>0?Lt.pts-M[Dt-1].pts:ge,kn.stretchShortVideoTrack&&this.nextAudioPts!==null){var hi=Math.floor(kn.maxBufferHole*B),rr=(R?ue+R*B:this.nextAudioPts)-Lt.pts;rr>hi?(ee=rr-nr,ee<0?ee=nr:ut=!0,d.logger.log("[mp4-remuxer]: It is approximately "+rr/90+" ms to the next segment; using duration "+ee/90+" ms for the last video frame.")):ee=nr}else ee=nr}var Aa=Math.round(Lt.pts-Lt.dts);Ze=Math.min(Ze,ee),Ut=Math.max(Ut,ee),Ft=Math.min(Ft,yn),Kt=Math.max(Kt,yn),K.push(new y(Lt.key,ee,Wt,Aa))}if(K.length){if(T){if(T<70){var ba=K[0].flags;ba.dependsOn=2,ba.isNonSync=0}}else if(A&&Kt-Ft<Ut-Ze&&ge/Ut<.025&&K[0].cts===0){d.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");for(var wr=te,Vt=0,Ea=K.length;Vt<Ea;Vt++){var Sa=wr+K[Vt].duration,en=wr+K[Vt].cts;if(Vt<Ea-1){var Ca=Sa+K[Vt+1].cts;K[Vt].duration=Ca-en}else K[Vt].duration=Vt?K[Vt-1].duration:ge;K[Vt].cts=0,wr=Sa}}}console.assert(ee!==null,"mp4SampleDuration must be computed"),ee=ut||!ee?ge:ee,this.nextAvcDts=G=se+ee,this.videoSampleDuration=ee,this.isVideoContiguous=!0;var mi=$.default.moof(c.sequenceNumber++,te,v({},c,{samples:K})),ar="video",xr={data1:mi,data2:dt,startPTS:ue/B,endPTS:(q+ee)/B,startDTS:te/B,endDTS:G/B,type:ar,hasAudio:!1,hasVideo:!0,nb:K.length,dropped:c.dropped};return c.samples=[],c.dropped=0,console.assert(dt.length,"MDAT length must not be zero"),xr},P.remuxAudio=function(c,O,p,R,B){var M=c.inputTimeScale,K=c.samplerate?c.samplerate:M,V=M/K,z=c.segmentCodec==="aac"?u:I,G=z*V,Q=this._initPTS,ee=c.segmentCodec==="mp3"&&this.typeSupported.mpeg,te=[],se=B!==void 0,ue=c.samples,q=ee?0:8,ne=this.nextAudioPts||-1,de=O*M;if(this.isAudioContiguous=p=p||ue.length&&ne>0&&(R&&Math.abs(de-ne)<9e3||Math.abs(b(ue[0].pts-Q,de)-ne)<20*G),ue.forEach(function(Xt){Xt.pts=b(Xt.pts-Q,de)}),!p||ne<0){if(ue=ue.filter(function(Xt){return Xt.pts>=0}),!ue.length)return;B===0?ne=0:R&&!se?ne=Math.max(0,de):ne=ue[0].pts}if(c.segmentCodec==="aac")for(var le=this.config.maxAudioFramesDrift,pe=0,ye=ne;pe<ue.length;pe++){var Ce=ue[pe],ge=Ce.pts,ve=ge-ye,Ee=Math.abs(1e3*ve/M);if(ve<=-le*G&&se)pe===0&&(d.logger.warn("Audio frame @ "+(ge/M).toFixed(3)+"s overlaps nextAudioPts by "+Math.round(1e3*ve/M)+" ms."),this.nextAudioPts=ne=ye=ge);else if(ve>=le*G&&Ee<S&&se){var Ie=Math.round(ve/G);ye=ge-Ie*G,ye<0&&(Ie--,ye+=G),pe===0&&(this.nextAudioPts=ne=ye),d.logger.warn("[mp4-remuxer]: Injecting "+Ie+" audio frame @ "+(ye/M).toFixed(3)+"s due to "+Math.round(1e3*ve/M)+" ms gap.");for(var Le=0;Le<Ie;Le++){var $e=Math.max(ye,0),Fe=h.default.getSilentFrame(c.manifestCodec||c.codec,c.channelCount);Fe||(d.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),Fe=Ce.unit.subarray()),ue.splice(pe,0,{unit:Fe,pts:$e}),ye+=G,pe++}}Ce.pts=ye,ye+=G}for(var Ve=null,Ge=null,Xe,qe=0,ot=ue.length;ot--;)qe+=ue[ot].unit.byteLength;for(var ft=0,Se=ue.length;ft<Se;ft++){var dt=ue[ft],Nt=dt.unit,ut=dt.pts;if(Ge!==null){var Ze=te[ft-1];Ze.duration=Math.round((ut-Ge)/V)}else if(p&&c.segmentCodec==="aac"&&(ut=ne),Ve=ut,qe>0){qe+=q;try{Xe=new Uint8Array(qe)}catch{this.observer.emit(s.Events.ERROR,s.Events.ERROR,{type:N.ErrorTypes.MUX_ERROR,details:N.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:qe,reason:"fail allocating audio mdat "+qe});return}if(!ee){var Ft=new DataView(Xe.buffer);Ft.setUint32(0,qe),Xe.set($.default.types.mdat,4)}}else return;Xe.set(Nt,q);var Ut=Nt.byteLength;q+=Ut,te.push(new y(!0,z,Ut,0)),Ge=ut}var Kt=te.length;if(!!Kt){var Dt=te[te.length-1];this.nextAudioPts=ne=Ge+V*Dt.duration;var Lt=ee?new Uint8Array(0):$.default.moof(c.sequenceNumber++,Ve/V,v({},c,{samples:te}));c.samples=[];var Gt=Ve/M,Wt=ne/M,At="audio",zt={data1:Lt,data2:Xe,startPTS:Gt,endPTS:Wt,startDTS:Gt,endDTS:Wt,type:At,hasAudio:!0,hasVideo:!1,nb:Kt};return this.isAudioContiguous=!0,console.assert(Xe.length,"MDAT length must not be zero"),zt}},P.remuxEmptyAudio=function(c,O,p,R){var B=c.inputTimeScale,M=c.samplerate?c.samplerate:B,K=B/M,V=this.nextAudioPts,z=(V!==null?V:R.startDTS*B)+this._initDTS,G=R.endDTS*B+this._initDTS,Q=K*u,ee=Math.ceil((G-z)/Q),te=h.default.getSilentFrame(c.manifestCodec||c.codec,c.channelCount);if(d.logger.warn("[mp4-remuxer]: remux empty Audio"),!te){d.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}for(var se=[],ue=0;ue<ee;ue++){var q=z+ue*Q;se.push({unit:te,pts:q,dts:q})}return c.samples=se,this.remuxAudio(c,O,p,!1)},_}();function b(_,P){var L;if(P===null)return _;for(P<_?L=-8589934592:L=8589934592;Math.abs(_-P)>4294967296;)_+=L;return _}function m(_){for(var P=0;P<_.length;P++)if(_[P].key)return P;return-1}function E(_,P,L,c){var O=_.samples.length;if(!!O){for(var p=_.inputTimeScale,R=0;R<O;R++){var B=_.samples[R];B.pts=b(B.pts-L,P*p)/p,B.dts=b(B.dts-c,P*p)/p}var M=_.samples;return _.samples=[],{samples:M}}}function C(_,P,L){var c=_.samples.length;if(!!c){for(var O=_.inputTimeScale,p=0;p<c;p++){var R=_.samples[p];R.pts=b(R.pts-L,P*O)/O}_.samples.sort(function(M,K){return M.pts-K.pts});var B=_.samples;return _.samples=[],{samples:B}}}var y=function(P,L,c,O){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=L,this.size=c,this.cts=O,this.flags=new w(P)},w=function(P){this.isLeading=0,this.isDependedOn=0,this.hasRedundancy=0,this.degradPrio=0,this.dependsOn=1,this.isNonSync=1,this.dependsOn=P?2:1,this.isNonSync=P?0:1}},"./src/remux/passthrough-remuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>k});var D=a("./src/polyfills/number.ts"),h=a("./src/remux/mp4-remuxer.ts"),$=a("./src/utils/mp4-tools.ts"),s=a("./src/loader/fragment.ts"),N=a("./src/utils/logger.ts"),d=function(){function v(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=void 0,this.initTracks=void 0,this.lastEndTime=null}var S=v.prototype;return S.destroy=function(){},S.resetTimeStamp=function(I){this.initPTS=I,this.lastEndTime=null},S.resetNextTimestamp=function(){this.lastEndTime=null},S.resetInitSegment=function(I,T,A,x){this.audioCodec=T,this.videoCodec=A,this.generateInitSegment((0,$.patchEncyptionData)(I,x)),this.emitInitSegment=!0},S.generateInitSegment=function(I){var T=this.audioCodec,A=this.videoCodec;if(!I||!I.byteLength){this.initTracks=void 0,this.initData=void 0;return}var x=this.initData=(0,$.parseInitSegment)(I);T||(T=g(x.audio,s.ElementaryStreamTypes.AUDIO)),A||(A=g(x.video,s.ElementaryStreamTypes.VIDEO));var b={};x.audio&&x.video?b.audiovideo={container:"video/mp4",codec:T+","+A,initSegment:I,id:"main"}:x.audio?b.audio={container:"audio/mp4",codec:T,initSegment:I,id:"audio"}:x.video?b.video={container:"video/mp4",codec:A,initSegment:I,id:"main"}:N.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=b},S.remux=function(I,T,A,x,b){var m,E=this.initPTS,C=this.lastEndTime,y={audio:void 0,video:void 0,text:x,id3:A,initSegment:void 0};(0,D.isFiniteNumber)(C)||(C=this.lastEndTime=b||0);var w=T.samples;if(!w||!w.length)return y;var _={initPTS:void 0,timescale:1},P=this.initData;if((!P||!P.length)&&(this.generateInitSegment(w),P=this.initData),!P||!P.length)return N.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),y;this.emitInitSegment&&(_.tracks=this.initTracks,this.emitInitSegment=!1);var L=(0,$.getStartDTS)(P,w);(0,D.isFiniteNumber)(E)||(this.initPTS=_.initPTS=E=L-b);var c=(0,$.getDuration)(w,P),O=I?L-E:C,p=O+c;(0,$.offsetStartDTS)(P,w,E),c>0?this.lastEndTime=p:(N.logger.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());var R=!!P.audio,B=!!P.video,M="";R&&(M+="audio"),B&&(M+="video");var K={data1:w,startPTS:O,startDTS:O,endPTS:p,endDTS:p,type:M,hasAudio:R,hasVideo:B,nb:1,dropped:0};y.audio=K.type==="audio"?K:void 0,y.video=K.type!=="audio"?K:void 0,y.initSegment=_;var V=(m=this.initPTS)!=null?m:0;return y.id3=(0,h.flushTextTrackMetadataCueSamples)(A,b,V,V),x.samples.length&&(y.text=(0,h.flushTextTrackUserdataCueSamples)(x,b,V)),y},v}();function g(v,S){var u=v==null?void 0:v.codec;return u&&u.length>4?u:u==="hvc1"||u==="hev1"?"hvc1.1.c.L120.90":u==="av01"?"av01.0.04M.08":u==="avc1"||S===s.ElementaryStreamTypes.VIDEO?"avc1.42e01e":"mp4a.40.5"}const k=d},"./src/task-loop.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>D});var D=function(){function h(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}var $=h.prototype;return $.destroy=function(){this.onHandlerDestroying(),this.onHandlerDestroyed()},$.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},$.onHandlerDestroyed=function(){},$.hasInterval=function(){return!!this._tickInterval},$.hasNextTick=function(){return!!this._tickTimer},$.setInterval=function(N){return this._tickInterval?!1:(this._tickInterval=self.setInterval(this._boundTick,N),!0)},$.clearInterval=function(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1},$.clearNextTick=function(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1},$.tick=function(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)},$.tickImmediate=function(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)},$.doTick=function(){},h}()},"./src/types/cmcd.ts":(i,r,a)=>{a.r(r),a.d(r,{CMCDObjectType:()=>h,CMCDStreamType:()=>s,CMCDStreamingFormat:()=>$,CMCDVersion:()=>D});var D=1,h;(function(N){N.MANIFEST="m",N.AUDIO="a",N.VIDEO="v",N.MUXED="av",N.INIT="i",N.CAPTION="c",N.TIMED_TEXT="tt",N.KEY="k",N.OTHER="o"})(h||(h={}));var $;(function(N){N.DASH="d",N.HLS="h",N.SMOOTH="s",N.OTHER="o"})($||($={}));var s;(function(N){N.VOD="v",N.LIVE="l"})(s||(s={}))},"./src/types/demuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{MetadataSchema:()=>D});var D;(function(h){h.audioId3="org.id3",h.dateRange="com.apple.quicktime.HLS",h.emsg="https://aomedia.org/emsg/ID3"})(D||(D={}))},"./src/types/level.ts":(i,r,a)=>{a.r(r),a.d(r,{HdcpLevels:()=>N,HlsSkip:()=>d,HlsUrlParameters:()=>k,Level:()=>v,getSkipValue:()=>g});function D(S,u){for(var I=0;I<u.length;I++){var T=u[I];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(S,$(T.key),T)}}function h(S,u,I){return u&&D(S.prototype,u),I&&D(S,I),Object.defineProperty(S,"prototype",{writable:!1}),S}function $(S){var u=s(S,"string");return typeof u=="symbol"?u:String(u)}function s(S,u){if(typeof S!="object"||S===null)return S;var I=S[Symbol.toPrimitive];if(I!==void 0){var T=I.call(S,u||"default");if(typeof T!="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(S)}var N=["NONE","TYPE-0","TYPE-1","TYPE-2",null],d;(function(S){S.No="",S.Yes="YES",S.v2="v2"})(d||(d={}));function g(S,u){var I=S.canSkipUntil,T=S.canSkipDateRanges,A=S.endSN,x=u!==void 0?u-A:0;return I&&x<I?T?d.v2:d.Yes:d.No}var k=function(){function S(I,T,A){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=I,this.part=T,this.skip=A}var u=S.prototype;return u.addDirectives=function(T){var A=new self.URL(T);return this.msn!==void 0&&A.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&A.searchParams.set("_HLS_part",this.part.toString()),this.skip&&A.searchParams.set("_HLS_skip",this.skip),A.href},S}(),v=function(){function S(u){this.attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.unknownCodecs=void 0,this.audioGroupIds=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.textGroupIds=void 0,this.url=void 0,this._urlId=0,this.url=[u.url],this.attrs=u.attrs,this.bitrate=u.bitrate,u.details&&(this.details=u.details),this.id=u.id||0,this.name=u.name,this.width=u.width||0,this.height=u.height||0,this.audioCodec=u.audioCodec,this.videoCodec=u.videoCodec,this.unknownCodecs=u.unknownCodecs,this.codecSet=[u.videoCodec,u.audioCodec].filter(function(I){return I}).join(",").replace(/\.[^.,]+/g,"")}return h(S,[{key:"maxBitrate",get:function(){return Math.max(this.realBitrate,this.bitrate)}},{key:"uri",get:function(){return this.url[this._urlId]||""}},{key:"urlId",get:function(){return this._urlId},set:function(I){var T=I%this.url.length;this._urlId!==T&&(this.details=void 0,this._urlId=T)}}]),S}()},"./src/types/loader.ts":(i,r,a)=>{a.r(r),a.d(r,{PlaylistContextType:()=>D,PlaylistLevelType:()=>h});var D;(function($){$.MANIFEST="manifest",$.LEVEL="level",$.AUDIO_TRACK="audioTrack",$.SUBTITLE_TRACK="subtitleTrack"})(D||(D={}));var h;(function($){$.MAIN="main",$.AUDIO="audio",$.SUBTITLE="subtitle"})(h||(h={}))},"./src/types/transmuxer.ts":(i,r,a)=>{a.r(r),a.d(r,{ChunkMetadata:()=>D});var D=function(s,N,d,g,k,v){g===void 0&&(g=0),k===void 0&&(k=-1),v===void 0&&(v=!1),this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=h(),this.buffering={audio:h(),video:h(),audiovideo:h()},this.level=s,this.sn=N,this.id=d,this.size=g,this.part=k,this.partial=v};function h(){return{start:0,executeStart:0,executeEnd:0,end:0}}},"./src/utils/attr-list.ts":(i,r,a)=>{a.r(r),a.d(r,{AttrList:()=>$});var D=/^(\d+)x(\d+)$/,h=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,$=function(){function s(d){typeof d=="string"&&(d=s.parseAttrList(d));for(var g in d)d.hasOwnProperty(g)&&(this[g]=d[g])}var N=s.prototype;return N.decimalInteger=function(g){var k=parseInt(this[g],10);return k>Number.MAX_SAFE_INTEGER?1/0:k},N.hexadecimalInteger=function(g){if(this[g]){var k=(this[g]||"0x").slice(2);k=(k.length&1?"0":"")+k;for(var v=new Uint8Array(k.length/2),S=0;S<k.length/2;S++)v[S]=parseInt(k.slice(S*2,S*2+2),16);return v}else return null},N.hexadecimalIntegerAsNumber=function(g){var k=parseInt(this[g],16);return k>Number.MAX_SAFE_INTEGER?1/0:k},N.decimalFloatingPoint=function(g){return parseFloat(this[g])},N.optionalFloat=function(g,k){var v=this[g];return v?parseFloat(v):k},N.enumeratedString=function(g){return this[g]},N.bool=function(g){return this[g]==="YES"},N.decimalResolution=function(g){var k=D.exec(this[g]);if(k!==null)return{width:parseInt(k[1],10),height:parseInt(k[2],10)}},s.parseAttrList=function(g){var k,v={},S='"';for(h.lastIndex=0;(k=h.exec(g))!==null;){var u=k[2];u.indexOf(S)===0&&u.lastIndexOf(S)===u.length-1&&(u=u.slice(1,-1)),v[k[1]]=u}return v},s}()},"./src/utils/binary-search.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>h});var D={search:function(s,N){for(var d=0,g=s.length-1,k=null,v=null;d<=g;){k=(d+g)/2|0,v=s[k];var S=N(v);if(S>0)d=k+1;else if(S<0)g=k-1;else return v}return null}};const h=D},"./src/utils/buffer-helper.ts":(i,r,a)=>{a.r(r),a.d(r,{BufferHelper:()=>$});var D=a("./src/utils/logger.ts"),h={length:0,start:function(){return 0},end:function(){return 0}},$=function(){function s(){}return s.isBuffered=function(d,g){try{if(d){for(var k=s.getBuffered(d),v=0;v<k.length;v++)if(g>=k.start(v)&&g<=k.end(v))return!0}}catch{}return!1},s.bufferInfo=function(d,g,k){try{if(d){var v=s.getBuffered(d),S=[],u;for(u=0;u<v.length;u++)S.push({start:v.start(u),end:v.end(u)});return this.bufferedInfo(S,g,k)}}catch{}return{len:0,start:g,end:g,nextStart:void 0}},s.bufferedInfo=function(d,g,k){g=Math.max(0,g),d.sort(function(y,w){var _=y.start-w.start;return _||w.end-y.end});var v=[];if(k)for(var S=0;S<d.length;S++){var u=v.length;if(u){var I=v[u-1].end;d[S].start-I<k?d[S].end>I&&(v[u-1].end=d[S].end):v.push(d[S])}else v.push(d[S])}else v=d;for(var T=0,A,x=g,b=g,m=0;m<v.length;m++){var E=v[m].start,C=v[m].end;if(g+k>=E&&g<C)x=E,b=C,T=b-g;else if(g+k<E){A=E;break}}return{len:T,start:x||0,end:b||0,nextStart:A}},s.getBuffered=function(d){try{return d.buffered}catch(g){return D.logger.log("failed to get media.buffered",g),h}},s}()},"./src/utils/cea-608-parser.ts":(i,r,a)=>{a.r(r),a.d(r,{CaptionScreen:()=>m,Row:()=>b,default:()=>P});var D=a("./src/utils/logger.ts"),h={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},$=function(c){var O=c;return h.hasOwnProperty(c)&&(O=h[c]),String.fromCharCode(O)},s=15,N=100,d={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},g={17:2,18:4,21:6,22:8,23:10,19:13,20:15},k={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},v={25:2,26:4,29:6,30:8,31:10,27:13,28:15},S=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],u;(function(L){L[L.ERROR=0]="ERROR",L[L.TEXT=1]="TEXT",L[L.WARNING=2]="WARNING",L[L.INFO=2]="INFO",L[L.DEBUG=3]="DEBUG",L[L.DATA=3]="DATA"})(u||(u={}));var I=function(){function L(){this.time=null,this.verboseLevel=u.ERROR}var c=L.prototype;return c.log=function(p,R){if(this.verboseLevel>=p){var B=typeof R=="function"?R():R;D.logger.log(this.time+" ["+p+"] "+B)}},L}(),T=function(c){for(var O=[],p=0;p<c.length;p++)O.push(c[p].toString(16));return O},A=function(){function L(O,p,R,B,M){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=O||"white",this.underline=p||!1,this.italics=R||!1,this.background=B||"black",this.flash=M||!1}var c=L.prototype;return c.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},c.setStyles=function(p){for(var R=["foreground","underline","italics","background","flash"],B=0;B<R.length;B++){var M=R[B];p.hasOwnProperty(M)&&(this[M]=p[M])}},c.isDefault=function(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash},c.equals=function(p){return this.foreground===p.foreground&&this.underline===p.underline&&this.italics===p.italics&&this.background===p.background&&this.flash===p.flash},c.copy=function(p){this.foreground=p.foreground,this.underline=p.underline,this.italics=p.italics,this.background=p.background,this.flash=p.flash},c.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},L}(),x=function(){function L(O,p,R,B,M,K){this.uchar=void 0,this.penState=void 0,this.uchar=O||" ",this.penState=new A(p,R,B,M,K)}var c=L.prototype;return c.reset=function(){this.uchar=" ",this.penState.reset()},c.setChar=function(p,R){this.uchar=p,this.penState.copy(R)},c.setPenState=function(p){this.penState.copy(p)},c.equals=function(p){return this.uchar===p.uchar&&this.penState.equals(p.penState)},c.copy=function(p){this.uchar=p.uchar,this.penState.copy(p.penState)},c.isEmpty=function(){return this.uchar===" "&&this.penState.isDefault()},L}(),b=function(){function L(O){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var p=0;p<N;p++)this.chars.push(new x);this.logger=O,this.pos=0,this.currPenState=new A}var c=L.prototype;return c.equals=function(p){for(var R=!0,B=0;B<N;B++)if(!this.chars[B].equals(p.chars[B])){R=!1;break}return R},c.copy=function(p){for(var R=0;R<N;R++)this.chars[R].copy(p.chars[R])},c.isEmpty=function(){for(var p=!0,R=0;R<N;R++)if(!this.chars[R].isEmpty()){p=!1;break}return p},c.setCursor=function(p){this.pos!==p&&(this.pos=p),this.pos<0?(this.logger.log(u.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>N&&(this.logger.log(u.DEBUG,"Too large cursor position "+this.pos),this.pos=N)},c.moveCursor=function(p){var R=this.pos+p;if(p>1)for(var B=this.pos+1;B<R+1;B++)this.chars[B].setPenState(this.currPenState);this.setCursor(R)},c.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},c.insertChar=function(p){var R=this;p>=144&&this.backSpace();var B=$(p);if(this.pos>=N){this.logger.log(u.ERROR,function(){return"Cannot insert "+p.toString(16)+" ("+B+") at position "+R.pos+". Skipping it!"});return}this.chars[this.pos].setChar(B,this.currPenState),this.moveCursor(1)},c.clearFromPos=function(p){var R;for(R=p;R<N;R++)this.chars[R].reset()},c.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},c.clearToEndOfRow=function(){this.clearFromPos(this.pos)},c.getTextString=function(){for(var p=[],R=!0,B=0;B<N;B++){var M=this.chars[B].uchar;M!==" "&&(R=!1),p.push(M)}return R?"":p.join("")},c.setPenStyles=function(p){this.currPenState.setStyles(p);var R=this.chars[this.pos];R.setPenState(this.currPenState)},L}(),m=function(){function L(O){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var p=0;p<s;p++)this.rows.push(new b(O));this.logger=O,this.currRow=s-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var c=L.prototype;return c.reset=function(){for(var p=0;p<s;p++)this.rows[p].clear();this.currRow=s-1},c.equals=function(p){for(var R=!0,B=0;B<s;B++)if(!this.rows[B].equals(p.rows[B])){R=!1;break}return R},c.copy=function(p){for(var R=0;R<s;R++)this.rows[R].copy(p.rows[R])},c.isEmpty=function(){for(var p=!0,R=0;R<s;R++)if(!this.rows[R].isEmpty()){p=!1;break}return p},c.backSpace=function(){var p=this.rows[this.currRow];p.backSpace()},c.clearToEndOfRow=function(){var p=this.rows[this.currRow];p.clearToEndOfRow()},c.insertChar=function(p){var R=this.rows[this.currRow];R.insertChar(p)},c.setPen=function(p){var R=this.rows[this.currRow];R.setPenStyles(p)},c.moveCursor=function(p){var R=this.rows[this.currRow];R.moveCursor(p)},c.setCursor=function(p){this.logger.log(u.INFO,"setCursor: "+p);var R=this.rows[this.currRow];R.setCursor(p)},c.setPAC=function(p){this.logger.log(u.INFO,function(){return"pacData = "+JSON.stringify(p)});var R=p.row-1;if(this.nrRollUpRows&&R<this.nrRollUpRows-1&&(R=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==R){for(var B=0;B<s;B++)this.rows[B].clear();var M=this.currRow+1-this.nrRollUpRows,K=this.lastOutputScreen;if(K){var V=K.rows[M].cueStartTime,z=this.logger.time;if(V&&z!==null&&V<z)for(var G=0;G<this.nrRollUpRows;G++)this.rows[R-this.nrRollUpRows+G+1].copy(K.rows[M+G])}}this.currRow=R;var Q=this.rows[this.currRow];if(p.indent!==null){var ee=p.indent,te=Math.max(ee-1,0);Q.setCursor(p.indent),p.color=Q.chars[te].penState.foreground}var se={foreground:p.color,underline:p.underline,italics:p.italics,background:"black",flash:!1};this.setPen(se)},c.setBkgData=function(p){this.logger.log(u.INFO,function(){return"bkgData = "+JSON.stringify(p)}),this.backSpace(),this.setPen(p),this.insertChar(32)},c.setRollUpRows=function(p){this.nrRollUpRows=p},c.rollUp=function(){var p=this;if(this.nrRollUpRows===null){this.logger.log(u.DEBUG,"roll_up but nrRollUpRows not set yet");return}this.logger.log(u.TEXT,function(){return p.getDisplayText()});var R=this.currRow+1-this.nrRollUpRows,B=this.rows.splice(R,1)[0];B.clear(),this.rows.splice(this.currRow,0,B),this.logger.log(u.INFO,"Rolling up")},c.getDisplayText=function(p){p=p||!1;for(var R=[],B="",M=-1,K=0;K<s;K++){var V=this.rows[K].getTextString();V&&(M=K+1,p?R.push("Row "+M+": '"+V+"'"):R.push(V.trim()))}return R.length>0&&(p?B="["+R.join(" | ")+"]":B=R.join(`
`)),B},c.getTextAndFormat=function(){return this.rows},L}(),E=function(){function L(O,p,R){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=O,this.outputFilter=p,this.mode=null,this.verbose=0,this.displayedMemory=new m(R),this.nonDisplayedMemory=new m(R),this.lastOutputScreen=new m(R),this.currRollUpRow=this.displayedMemory.rows[s-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=R}var c=L.prototype;return c.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[s-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},c.getHandler=function(){return this.outputFilter},c.setHandler=function(p){this.outputFilter=p},c.setPAC=function(p){this.writeScreen.setPAC(p)},c.setBkgData=function(p){this.writeScreen.setBkgData(p)},c.setMode=function(p){p!==this.mode&&(this.mode=p,this.logger.log(u.INFO,function(){return"MODE="+p}),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=p)},c.insertChars=function(p){for(var R=this,B=0;B<p.length;B++)this.writeScreen.insertChar(p[B]);var M=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(u.INFO,function(){return M+": "+R.writeScreen.getDisplayText(!0)}),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(u.TEXT,function(){return"DISPLAYED: "+R.displayedMemory.getDisplayText(!0)}),this.outputDataUpdate())},c.ccRCL=function(){this.logger.log(u.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},c.ccBS=function(){this.logger.log(u.INFO,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},c.ccAOF=function(){},c.ccAON=function(){},c.ccDER=function(){this.logger.log(u.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},c.ccRU=function(p){this.logger.log(u.INFO,"RU("+p+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(p)},c.ccFON=function(){this.logger.log(u.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},c.ccRDC=function(){this.logger.log(u.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},c.ccTR=function(){this.logger.log(u.INFO,"TR"),this.setMode("MODE_TEXT")},c.ccRTD=function(){this.logger.log(u.INFO,"RTD"),this.setMode("MODE_TEXT")},c.ccEDM=function(){this.logger.log(u.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},c.ccCR=function(){this.logger.log(u.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},c.ccENM=function(){this.logger.log(u.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},c.ccEOC=function(){var p=this;if(this.logger.log(u.INFO,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){var R=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=R,this.writeScreen=this.nonDisplayedMemory,this.logger.log(u.TEXT,function(){return"DISP: "+p.displayedMemory.getDisplayText()})}this.outputDataUpdate(!0)},c.ccTO=function(p){this.logger.log(u.INFO,"TO("+p+") - Tab Offset"),this.writeScreen.moveCursor(p)},c.ccMIDROW=function(p){var R={flash:!1};if(R.underline=p%2===1,R.italics=p>=46,R.italics)R.foreground="white";else{var B=Math.floor(p/2)-16,M=["white","green","blue","cyan","red","yellow","magenta"];R.foreground=M[B]}this.logger.log(u.INFO,"MIDROW: "+JSON.stringify(R)),this.writeScreen.setPen(R)},c.outputDataUpdate=function(p){p===void 0&&(p=!1);var R=this.logger.time;R!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=R:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,R,this.lastOutputScreen),p&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:R),this.lastOutputScreen.copy(this.displayedMemory))},c.cueSplitAtTime=function(p){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,p,this.displayedMemory),this.cueStartTime=p))},L}(),C=function(){function L(O,p,R){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var B=new I;this.channels=[null,new E(O,p,B),new E(O+1,R,B)],this.cmdHistory=_(),this.logger=B}var c=L.prototype;return c.getHandler=function(p){return this.channels[p].getHandler()},c.setHandler=function(p,R){this.channels[p].setHandler(R)},c.addData=function(p,R){var B,M,K,V=!1;this.logger.time=p;for(var z=0;z<R.length;z+=2)if(M=R[z]&127,K=R[z+1]&127,!(M===0&&K===0)){if(this.logger.log(u.DATA,"["+T([R[z],R[z+1]])+"] -> ("+T([M,K])+")"),B=this.parseCmd(M,K),B||(B=this.parseMidrow(M,K)),B||(B=this.parsePAC(M,K)),B||(B=this.parseBackgroundAttributes(M,K)),!B&&(V=this.parseChars(M,K),V)){var G=this.currentChannel;if(G&&G>0){var Q=this.channels[G];Q.insertChars(V)}else this.logger.log(u.WARNING,"No channel found yet. TEXT-MODE?")}!B&&!V&&this.logger.log(u.WARNING,"Couldn't parse cleaned data "+T([M,K])+" orig: "+T([R[z],R[z+1]]))}},c.parseCmd=function(p,R){var B=this.cmdHistory,M=(p===20||p===28||p===21||p===29)&&R>=32&&R<=47,K=(p===23||p===31)&&R>=33&&R<=35;if(!(M||K))return!1;if(w(p,R,B))return y(null,null,B),this.logger.log(u.DEBUG,"Repeated command ("+T([p,R])+") is dropped"),!0;var V=p===20||p===21||p===23?1:2,z=this.channels[V];return p===20||p===21||p===28||p===29?R===32?z.ccRCL():R===33?z.ccBS():R===34?z.ccAOF():R===35?z.ccAON():R===36?z.ccDER():R===37?z.ccRU(2):R===38?z.ccRU(3):R===39?z.ccRU(4):R===40?z.ccFON():R===41?z.ccRDC():R===42?z.ccTR():R===43?z.ccRTD():R===44?z.ccEDM():R===45?z.ccCR():R===46?z.ccENM():R===47&&z.ccEOC():z.ccTO(R-32),y(p,R,B),this.currentChannel=V,!0},c.parseMidrow=function(p,R){var B=0;if((p===17||p===25)&&R>=32&&R<=47){if(p===17?B=1:B=2,B!==this.currentChannel)return this.logger.log(u.ERROR,"Mismatch channel in midrow parsing"),!1;var M=this.channels[B];return M?(M.ccMIDROW(R),this.logger.log(u.DEBUG,"MIDROW ("+T([p,R])+")"),!0):!1}return!1},c.parsePAC=function(p,R){var B,M=this.cmdHistory,K=(p>=17&&p<=23||p>=25&&p<=31)&&R>=64&&R<=127,V=(p===16||p===24)&&R>=64&&R<=95;if(!(K||V))return!1;if(w(p,R,M))return y(null,null,M),!0;var z=p<=23?1:2;R>=64&&R<=95?B=z===1?d[p]:k[p]:B=z===1?g[p]:v[p];var G=this.channels[z];return G?(G.setPAC(this.interpretPAC(B,R)),y(p,R,M),this.currentChannel=z,!0):!1},c.interpretPAC=function(p,R){var B,M={color:null,italics:!1,indent:null,underline:!1,row:p};return R>95?B=R-96:B=R-64,M.underline=(B&1)===1,B<=13?M.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(B/2)]:B<=15?(M.italics=!0,M.color="white"):M.indent=Math.floor((B-16)/2)*4,M},c.parseChars=function(p,R){var B,M=null,K=null;if(p>=25?(B=2,K=p-8):(B=1,K=p),K>=17&&K<=19){var V;K===17?V=R+80:K===18?V=R+112:V=R+144,this.logger.log(u.INFO,"Special char '"+$(V)+"' in channel "+B),M=[V]}else p>=32&&p<=127&&(M=R===0?[p]:[p,R]);if(M){var z=T(M);this.logger.log(u.DEBUG,"Char codes =  "+z.join(",")),y(p,R,this.cmdHistory)}return M},c.parseBackgroundAttributes=function(p,R){var B=(p===16||p===24)&&R>=32&&R<=47,M=(p===23||p===31)&&R>=45&&R<=47;if(!(B||M))return!1;var K,V={};p===16||p===24?(K=Math.floor((R-32)/2),V.background=S[K],R%2===1&&(V.background=V.background+"_semi")):R===45?V.background="transparent":(V.foreground="black",R===47&&(V.underline=!0));var z=p<=23?1:2,G=this.channels[z];return G.setBkgData(V),y(p,R,this.cmdHistory),!0},c.reset=function(){for(var p=0;p<Object.keys(this.channels).length;p++){var R=this.channels[p];R&&R.reset()}this.cmdHistory=_()},c.cueSplitAtTime=function(p){for(var R=0;R<this.channels.length;R++){var B=this.channels[R];B&&B.cueSplitAtTime(p)}},L}();function y(L,c,O){O.a=L,O.b=c}function w(L,c,O){return O.a===L&&O.b===c}function _(){return{a:null,b:null}}const P=C},"./src/utils/codecs.ts":(i,r,a)=>{a.r(r),a.d(r,{isCodecSupportedInMp4:()=>$,isCodecType:()=>h});var D={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,av01:!0,drac:!0,dva1:!0,dvav:!0,dvh1:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0},text:{stpp:!0,wvtt:!0}};function h(s,N){var d=D[N];return!!d&&d[s.slice(0,4)]===!0}function $(s,N){return MediaSource.isTypeSupported((N||"video")+'/mp4;codecs="'+s+'"')}},"./src/utils/cues.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>d});var D=a("./src/utils/vttparser.ts"),h=a("./src/utils/webvtt-parser.ts"),$=a("./src/utils/texttrack-utils.ts"),s=/\s/,N={newCue:function(k,v,S,u){for(var I=[],T,A,x,b,m,E=self.VTTCue||self.TextTrackCue,C=0;C<u.rows.length;C++)if(T=u.rows[C],x=!0,b=0,m="",!T.isEmpty()){for(var y=0;y<T.chars.length;y++)s.test(T.chars[y].uchar)&&x?b++:(m+=T.chars[y].uchar,x=!1);T.cueStartTime=v,v===S&&(S+=1e-4),b>=16?b--:b++;var w=(0,D.fixLineBreaks)(m.trim()),_=(0,h.generateCueId)(v,S,w);(!k||!k.cues||!k.cues.getCueById(_))&&(A=new E(v,S,w),A.id=_,A.line=C+1,A.align="left",A.position=10+Math.min(80,Math.floor(b*8/32)*10),I.push(A))}return k&&I.length&&(I.sort(function(P,L){return P.line==="auto"||L.line==="auto"?0:P.line>8&&L.line>8?L.line-P.line:P.line-L.line}),I.forEach(function(P){return(0,$.addCueToTrack)(k,P)})),I}};const d=N},"./src/utils/discontinuities.ts":(i,r,a)=>{a.r(r),a.d(r,{adjustSlidingStart:()=>k,alignMediaPlaylistByPDT:()=>I,alignPDT:()=>u,alignStream:()=>v,findDiscontinuousReferenceFrag:()=>d,findFirstFragWithCC:()=>s,shouldAlignOnDiscontinuities:()=>N});var D=a("./src/polyfills/number.ts"),h=a("./src/utils/logger.ts"),$=a("./src/controller/level-helper.ts");function s(T,A){for(var x=null,b=0,m=T.length;b<m;b++){var E=T[b];if(E&&E.cc===A){x=E;break}}return x}function N(T,A,x){return!!(A.details&&(x.endCC>x.startCC||T&&T.cc<x.startCC))}function d(T,A,x){var b=T.fragments,m=A.fragments;if(!m.length||!b.length){h.logger.log("No fragments to align");return}var E=s(b,m[0].cc);if(!E||E&&!E.startPTS){h.logger.log("No frag in previous level to align on");return}return E}function g(T,A){if(T){var x=T.start+A;T.start=T.startPTS=x,T.endPTS=x+T.duration}}function k(T,A){for(var x=A.fragments,b=0,m=x.length;b<m;b++)g(x[b],T);A.fragmentHint&&g(A.fragmentHint,T),A.alignedSliding=!0}function v(T,A,x){!A||(S(T,x,A),!x.alignedSliding&&A.details&&u(x,A.details),!x.alignedSliding&&A.details&&!x.skippedSegments&&(0,$.adjustSliding)(A.details,x))}function S(T,A,x){if(N(T,x,A)){var b=d(x.details,A);b&&(0,D.isFiniteNumber)(b.start)&&(h.logger.log("Adjusting PTS using last level due to CC increase within current level "+A.url),k(b.start,A))}}function u(T,A){if(!(!A.fragments.length||!T.hasProgramDateTime||!A.hasProgramDateTime)){var x=A.fragments[0].programDateTime,b=T.fragments[0].programDateTime,m=(b-x)/1e3+A.fragments[0].start;m&&(0,D.isFiniteNumber)(m)&&(h.logger.log("Adjusting PTS using programDateTime delta "+(b-x)+"ms, sliding:"+m.toFixed(3)+" "+T.url+" "),k(m,T))}}function I(T,A){if(!(!T.hasProgramDateTime||!A.hasProgramDateTime)){var x=T.fragments,b=A.fragments;if(!(!x.length||!b.length)){var m=Math.round(b.length/2)-1,E=b[m],C=s(x,E.cc)||x[Math.round(x.length/2)-1],y=E.programDateTime,w=C.programDateTime;if(!(y===null||w===null)){var _=(w-y)/1e3-(C.start-E.start);k(_,T)}}}}},"./src/utils/ewma-bandwidth-estimator.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>$});var D=a("./src/utils/ewma.ts"),h=function(){function s(d,g,k){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultEstimate_=k,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new D.default(d),this.fast_=new D.default(g)}var N=s.prototype;return N.update=function(g,k){var v=this.slow_,S=this.fast_;this.slow_.halfLife!==g&&(this.slow_=new D.default(g,v.getEstimate(),v.getTotalWeight())),this.fast_.halfLife!==k&&(this.fast_=new D.default(k,S.getEstimate(),S.getTotalWeight()))},N.sample=function(g,k){g=Math.max(g,this.minDelayMs_);var v=8*k,S=g/1e3,u=v/S;this.fast_.sample(S,u),this.slow_.sample(S,u)},N.canEstimate=function(){var g=this.fast_;return g&&g.getTotalWeight()>=this.minWeight_},N.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},N.destroy=function(){},s}();const $=h},"./src/utils/ewma.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>h});var D=function(){function $(N,d,g){d===void 0&&(d=0),g===void 0&&(g=0),this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=N,this.alpha_=N?Math.exp(Math.log(.5)/N):0,this.estimate_=d,this.totalWeight_=g}var s=$.prototype;return s.sample=function(d,g){var k=Math.pow(this.alpha_,d);this.estimate_=g*(1-k)+k*this.estimate_,this.totalWeight_+=d},s.getTotalWeight=function(){return this.totalWeight_},s.getEstimate=function(){if(this.alpha_){var d=1-Math.pow(this.alpha_,this.totalWeight_);if(d)return this.estimate_/d}return this.estimate_},$}();const h=D},"./src/utils/fetch-loader.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>m,fetchSupported:()=>I});var D=a("./src/polyfills/number.ts"),h=a("./src/loader/load-stats.ts"),$=a("./src/demux/chunk-cache.ts");function s(E,C){E.prototype=Object.create(C.prototype),E.prototype.constructor=E,v(E,C)}function N(E){var C=typeof Map=="function"?new Map:void 0;return N=function(w){if(w===null||!k(w))return w;if(typeof w!="function")throw new TypeError("Super expression must either be null or a function");if(typeof C<"u"){if(C.has(w))return C.get(w);C.set(w,_)}function _(){return d(w,arguments,S(this).constructor)}return _.prototype=Object.create(w.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),v(_,w)},N(E)}function d(E,C,y){return g()?d=Reflect.construct.bind():d=function(_,P,L){var c=[null];c.push.apply(c,P);var O=Function.bind.apply(_,c),p=new O;return L&&v(p,L.prototype),p},d.apply(null,arguments)}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(E){return Function.toString.call(E).indexOf("[native code]")!==-1}function v(E,C){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(w,_){return w.__proto__=_,w},v(E,C)}function S(E){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(y){return y.__proto__||Object.getPrototypeOf(y)},S(E)}function u(){return u=Object.assign?Object.assign.bind():function(E){for(var C=1;C<arguments.length;C++){var y=arguments[C];for(var w in y)Object.prototype.hasOwnProperty.call(y,w)&&(E[w]=y[w])}return E},u.apply(this,arguments)}function I(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}var T=function(){function E(y){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=void 0,this.response=void 0,this.controller=void 0,this.context=void 0,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=y.fetchSetup||x,this.controller=new self.AbortController,this.stats=new h.LoadStats}var C=E.prototype;return C.destroy=function(){this.loader=this.callbacks=null,this.abortInternal()},C.abortInternal=function(){var w=this.response;(!w||!w.ok)&&(this.stats.aborted=!0,this.controller.abort())},C.abort=function(){var w;this.abortInternal(),(w=this.callbacks)!==null&&w!==void 0&&w.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)},C.load=function(w,_,P){var L=this,c=this.stats;if(c.loading.start)throw new Error("Loader can only be used once.");c.loading.start=self.performance.now();var O=A(w,this.controller.signal),p=P.onProgress,R=w.responseType==="arraybuffer",B=R?"byteLength":"length";this.context=w,this.config=_,this.callbacks=P,this.request=this.fetchSetup(w,O),self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(function(){L.abortInternal(),P.onTimeout(c,w,L.response)},_.timeout),self.fetch(this.request).then(function(M){if(L.response=L.loader=M,!M.ok){var K=M.status,V=M.statusText;throw new b(V||"fetch, bad network response",K,M)}return c.loading.first=Math.max(self.performance.now(),c.loading.start),c.total=parseInt(M.headers.get("Content-Length")||"0"),p&&(0,D.isFiniteNumber)(_.highWaterMark)?L.loadProgressively(M,c,w,_.highWaterMark,p):R?M.arrayBuffer():M.text()}).then(function(M){var K=L.response;self.clearTimeout(L.requestTimeout),c.loading.end=Math.max(self.performance.now(),c.loading.first);var V=M[B];V&&(c.loaded=c.total=V);var z={url:K.url,data:M};p&&!(0,D.isFiniteNumber)(_.highWaterMark)&&p(c,w,M,K),P.onSuccess(z,c,w,K)}).catch(function(M){if(self.clearTimeout(L.requestTimeout),!c.aborted){var K=M&&M.code||0,V=M?M.message:null;P.onError({code:K,text:V},w,M?M.details:null)}})},C.getCacheAge=function(){var w=null;if(this.response){var _=this.response.headers.get("age");w=_?parseFloat(_):null}return w},C.loadProgressively=function(w,_,P,L,c){L===void 0&&(L=0);var O=new $.default,p=w.body.getReader(),R=function B(){return p.read().then(function(M){if(M.done)return O.dataLength&&c(_,P,O.flush(),w),Promise.resolve(new ArrayBuffer(0));var K=M.value,V=K.length;return _.loaded+=V,V<L||O.dataLength?(O.push(K),O.dataLength>=L&&c(_,P,O.flush(),w)):c(_,P,K,w),B()}).catch(function(){return Promise.reject()})};return R()},E}();function A(E,C){var y={method:"GET",mode:"cors",credentials:"same-origin",signal:C,headers:new self.Headers(u({},E.headers))};return E.rangeEnd&&y.headers.set("Range","bytes="+E.rangeStart+"-"+String(E.rangeEnd-1)),y}function x(E,C){return new self.Request(E.url,C)}var b=function(E){s(C,E);function C(y,w,_){var P;return P=E.call(this,y)||this,P.code=void 0,P.details=void 0,P.code=w,P.details=_,P}return C}(N(Error));const m=T},"./src/utils/hex.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>h});var D={hexDump:function(s){for(var N="",d=0;d<s.length;d++){var g=s[d].toString(16);g.length<2&&(g="0"+g),N+=g}return N}};const h=D},"./src/utils/imsc1-ttml-parser.ts":(i,r,a)=>{a.r(r),a.d(r,{IMSC1_CODEC:()=>k,parseIMSC1:()=>I});var D=a("./src/utils/mp4-tools.ts"),h=a("./src/utils/vttparser.ts"),$=a("./src/utils/vttcue.ts"),s=a("./src/demux/id3.ts"),N=a("./src/utils/timescale-conversion.ts"),d=a("./src/utils/webvtt-parser.ts");function g(){return g=Object.assign?Object.assign.bind():function(P){for(var L=1;L<arguments.length;L++){var c=arguments[L];for(var O in c)Object.prototype.hasOwnProperty.call(c,O)&&(P[O]=c[O])}return P},g.apply(this,arguments)}var k="stpp.ttml.im1t",v=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,S=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,u={left:"start",center:"center",right:"end",start:"start",end:"end"};function I(P,L,c,O,p){var R=(0,D.findBox)(new Uint8Array(P),["mdat"]);if(R.length===0){p(new Error("Could not parse IMSC1 mdat"));return}var B=R.map(function(K){return(0,s.utf8ArrayToStr)(K)}),M=(0,N.toTimescaleFromScale)(L,1,c);try{B.forEach(function(K){return O(T(K,M))})}catch(K){p(K)}}function T(P,L){var c=new DOMParser,O=c.parseFromString(P,"text/xml"),p=O.getElementsByTagName("tt")[0];if(!p)throw new Error("Invalid ttml");var R={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},B=Object.keys(R).reduce(function(G,Q){return G[Q]=p.getAttribute("ttp:"+Q)||R[Q],G},{}),M=p.getAttribute("xml:space")!=="preserve",K=x(A(p,"styling","style")),V=x(A(p,"layout","region")),z=A(p,"body","[begin]");return[].map.call(z,function(G){var Q=b(G,M);if(!Q||!G.hasAttribute("begin"))return null;var ee=y(G.getAttribute("begin"),B),te=y(G.getAttribute("dur"),B),se=y(G.getAttribute("end"),B);if(ee===null)throw C(G);if(se===null){if(te===null)throw C(G);se=ee+te}var ue=new $.default(ee-L,se-L,Q);ue.id=(0,d.generateCueId)(ue.startTime,ue.endTime,ue.text);var q=V[G.getAttribute("region")],ne=K[G.getAttribute("style")],de=m(q,ne,K),le=de.textAlign;if(le){var pe=u[le];pe&&(ue.lineAlign=pe),ue.align=le}return g(ue,de),ue}).filter(function(G){return G!==null})}function A(P,L,c){var O=P.getElementsByTagName(L)[0];return O?[].slice.call(O.querySelectorAll(c)):[]}function x(P){return P.reduce(function(L,c){var O=c.getAttribute("xml:id");return O&&(L[O]=c),L},{})}function b(P,L){return[].slice.call(P.childNodes).reduce(function(c,O,p){var R;return O.nodeName==="br"&&p?c+`
`:(R=O.childNodes)!==null&&R!==void 0&&R.length?b(O,L):L?c+O.textContent.trim().replace(/\s+/g," "):c+O.textContent},"")}function m(P,L,c){var O="http://www.w3.org/ns/ttml#styling",p=null,R=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],B=P!=null&&P.hasAttribute("style")?P.getAttribute("style"):null;return B&&c.hasOwnProperty(B)&&(p=c[B]),R.reduce(function(M,K){var V=E(L,O,K)||E(P,O,K)||E(p,O,K);return V&&(M[K]=V),M},{})}function E(P,L,c){return P&&P.hasAttributeNS(L,c)?P.getAttributeNS(L,c):null}function C(P){return new Error("Could not parse ttml timestamp "+P)}function y(P,L){if(!P)return null;var c=(0,h.parseTimeStamp)(P);return c===null&&(v.test(P)?c=w(P,L):S.test(P)&&(c=_(P,L))),c}function w(P,L){var c=v.exec(P),O=(c[4]|0)+(c[5]|0)/L.subFrameRate;return(c[1]|0)*3600+(c[2]|0)*60+(c[3]|0)+O/L.frameRate}function _(P,L){var c=S.exec(P),O=Number(c[1]),p=c[2];switch(p){case"h":return O*3600;case"m":return O*60;case"ms":return O*1e3;case"f":return O/L.frameRate;case"t":return O/L.tickRate}return O}},"./src/utils/keysystem-util.ts":(i,r,a)=>{a.r(r),a.d(r,{changeEndianness:()=>$,convertDataUriToArrayBytes:()=>s,strToUtf8array:()=>N});var D=a("./src/utils/numeric-encoding-utils.ts");function h(d){var g=N(d).subarray(0,16),k=new Uint8Array(16);return k.set(g,16-g.length),k}function $(d){var g=function(v,S,u){var I=v[S];v[S]=v[u],v[u]=I};g(d,0,3),g(d,1,2),g(d,4,5),g(d,6,7)}function s(d){var g=d.split(":"),k=null;if(g[0]==="data"&&g.length===2){var v=g[1].split(";"),S=v[v.length-1].split(",");if(S.length===2){var u=S[0]==="base64",I=S[1];u?(v.splice(-1,1),k=(0,D.base64Decode)(I)):k=h(I)}}return k}function N(d){return Uint8Array.from(unescape(encodeURIComponent(d)),function(g){return g.charCodeAt(0)})}},"./src/utils/logger.ts":(i,r,a)=>{a.r(r),a.d(r,{enableLogs:()=>d,logger:()=>g});var D=function(){},h={trace:D,debug:D,log:D,warn:D,info:D,error:D},$=h;function s(k){var v=self.console[k];return v?v.bind(self.console,"["+k+"] >"):D}function N(k){for(var v=arguments.length,S=new Array(v>1?v-1:0),u=1;u<v;u++)S[u-1]=arguments[u];S.forEach(function(I){$[I]=k[I]?k[I].bind(k):s(I)})}function d(k,v){if(self.console&&k===!0||typeof k=="object"){N(k,"debug","log","info","warn","error");try{$.log('Debug logs enabled for "'+v+'"')}catch{$=h}}else $=h}var g=$},"./src/utils/mediakeys-helper.ts":(i,r,a)=>{a.r(r),a.d(r,{KeySystemFormats:()=>h,KeySystemIds:()=>s,KeySystems:()=>D,getKeySystemsForConfig:()=>g,getSupportedMediaKeySystemConfigurations:()=>v,keySystemDomainToKeySystemFormat:()=>d,keySystemFormatToKeySystemDomain:()=>$,keySystemIdToKeySystemDomain:()=>N,requestMediaKeySystemAccess:()=>k});var D;(function(u){u.CLEARKEY="org.w3.clearkey",u.FAIRPLAY="com.apple.fps",u.PLAYREADY="com.microsoft.playready",u.WIDEVINE="com.widevine.alpha"})(D||(D={}));var h;(function(u){u.CLEARKEY="org.w3.clearkey",u.FAIRPLAY="com.apple.streamingkeydelivery",u.PLAYREADY="com.microsoft.playready",u.WIDEVINE="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"})(h||(h={}));function $(u){switch(u){case h.FAIRPLAY:return D.FAIRPLAY;case h.PLAYREADY:return D.PLAYREADY;case h.WIDEVINE:return D.WIDEVINE;case h.CLEARKEY:return D.CLEARKEY}}var s;(function(u){u.WIDEVINE="edef8ba979d64acea3c827dcd51d21ed"})(s||(s={}));function N(u){if(u===s.WIDEVINE)return D.WIDEVINE}function d(u){switch(u){case D.FAIRPLAY:return h.FAIRPLAY;case D.PLAYREADY:return h.PLAYREADY;case D.WIDEVINE:return h.WIDEVINE;case D.CLEARKEY:return h.CLEARKEY}}function g(u){var I=u.drmSystems,T=u.widevineLicenseUrl,A=I?[D.FAIRPLAY,D.WIDEVINE,D.PLAYREADY,D.CLEARKEY].filter(function(x){return!!I[x]}):[];return!A[D.WIDEVINE]&&T&&A.push(D.WIDEVINE),A}var k=function(){return typeof self<"u"&&self.navigator&&self.navigator.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function v(u,I,T,A){var x;switch(u){case D.FAIRPLAY:x=["cenc","sinf"];break;case D.WIDEVINE:case D.PLAYREADY:x=["cenc"];break;case D.CLEARKEY:x=["cenc","keyids"];break;default:throw new Error("Unknown key-system: "+u)}return S(x,I,T,A)}function S(u,I,T,A){var x={initDataTypes:u,persistentState:A.persistentState||"not-allowed",distinctiveIdentifier:A.distinctiveIdentifier||"not-allowed",sessionTypes:A.sessionTypes||[A.sessionType||"temporary"],audioCapabilities:I.map(function(b){return{contentType:'audio/mp4; codecs="'+b+'"',robustness:A.audioRobustness||"",encryptionScheme:A.audioEncryptionScheme||null}}),videoCapabilities:T.map(function(b){return{contentType:'video/mp4; codecs="'+b+'"',robustness:A.videoRobustness||"",encryptionScheme:A.videoEncryptionScheme||null}})};return[x]}},"./src/utils/mediasource-helper.ts":(i,r,a)=>{a.r(r),a.d(r,{getMediaSource:()=>D});function D(){return self.MediaSource||self.WebKitMediaSource}},"./src/utils/mp4-tools.ts":(i,r,a)=>{a.r(r),a.d(r,{RemuxerTrackIdConfig:()=>k,appendUint8Array:()=>L,bin2str:()=>v,computeRawDurationFromSamples:()=>w,discardEPB:()=>B,findBox:()=>A,getDuration:()=>y,getStartDTS:()=>C,mp4Box:()=>K,mp4pssh:()=>V,offsetStartDTS:()=>_,parseEmsg:()=>M,parseInitSegment:()=>b,parsePssh:()=>z,parseSEIMessageFromNALu:()=>R,parseSamples:()=>c,parseSegmentIndex:()=>x,parseSinf:()=>E,patchEncyptionData:()=>m,readSint32:()=>I,readUint16:()=>S,readUint32:()=>u,segmentValidRange:()=>P,writeUint32:()=>T});var D=a("./src/loader/fragment.ts"),h=a("./src/utils/typed-array.ts"),$=a("./src/demux/id3.ts"),s=a("./src/utils/logger.ts"),N=a("./src/utils/hex.ts"),d=Math.pow(2,32)-1,g=[].push,k={video:1,audio:2,id3:3,text:4};function v(G){return String.fromCharCode.apply(null,G)}function S(G,Q){var ee=G[Q]<<8|G[Q+1];return ee<0?65536+ee:ee}function u(G,Q){var ee=I(G,Q);return ee<0?4294967296+ee:ee}function I(G,Q){return G[Q]<<24|G[Q+1]<<16|G[Q+2]<<8|G[Q+3]}function T(G,Q,ee){G[Q]=ee>>24,G[Q+1]=ee>>16&255,G[Q+2]=ee>>8&255,G[Q+3]=ee&255}function A(G,Q){var ee=[];if(!Q.length)return ee;for(var te=G.byteLength,se=0;se<te;){var ue=u(G,se),q=v(G.subarray(se+4,se+8)),ne=ue>1?se+ue:te;if(q===Q[0])if(Q.length===1)ee.push(G.subarray(se+8,ne));else{var de=A(G.subarray(se+8,ne),Q.slice(1));de.length&&g.apply(ee,de)}se=ne}return ee}function x(G){var Q=[],ee=G[0],te=8,se=u(G,te);te+=4;var ue=0,q=0;ee===0?te+=8:te+=16,te+=2;var ne=G.length+q,de=S(G,te);te+=2;for(var le=0;le<de;le++){var pe=te,ye=u(G,pe);pe+=4;var Ce=ye&2147483647,ge=(ye&2147483648)>>>31;if(ge===1)return console.warn("SIDX has hierarchical references (not supported)"),null;var ve=u(G,pe);pe+=4,Q.push({referenceSize:Ce,subsegmentDuration:ve,info:{duration:ve/se,start:ne,end:ne+Ce-1}}),ne+=Ce,pe+=4,te=pe}return{earliestPresentationTime:ue,timescale:se,version:ee,referencesCount:de,references:Q}}function b(G){for(var Q=[],ee=A(G,["moov","trak"]),te=0;te<ee.length;te++){var se=ee[te],ue=A(se,["tkhd"])[0];if(ue){var q=ue[0],ne=q===0?12:20,de=u(ue,ne),le=A(se,["mdia","mdhd"])[0];if(le){q=le[0],ne=q===0?12:20;var pe=u(le,ne),ye=A(se,["mdia","hdlr"])[0];if(ye){var Ce=v(ye.subarray(8,12)),ge={soun:D.ElementaryStreamTypes.AUDIO,vide:D.ElementaryStreamTypes.VIDEO}[Ce];if(ge){var ve=A(se,["mdia","minf","stbl","stsd"])[0],Ee=void 0;ve&&(Ee=v(ve.subarray(12,16))),Q[de]={timescale:pe,type:ge},Q[ge]={timescale:pe,id:de,codec:Ee}}}}}}var Ie=A(G,["moov","mvex","trex"]);return Ie.forEach(function(Le){var $e=u(Le,4),Fe=Q[$e];Fe&&(Fe.default={duration:u(Le,12),flags:u(Le,20)})}),Q}function m(G,Q){if(!G||!Q)return G;var ee=Q.keyId;if(ee&&Q.isCommonEncryption){var te=A(G,["moov","trak"]);te.forEach(function(se){var ue=A(se,["mdia","minf","stbl","stsd"])[0],q=ue.subarray(8),ne=A(q,["enca"]),de=ne.length>0;de||(ne=A(q,["encv"])),ne.forEach(function(le){var pe=de?le.subarray(28):le.subarray(78),ye=A(pe,["sinf"]);ye.forEach(function(Ce){var ge=E(Ce);if(ge){var ve=ge.subarray(8,24);ve.some(function(Ee){return Ee!==0})||(s.logger.log("[eme] Patching keyId in 'enc"+(de?"a":"v")+">sinf>>tenc' box: "+N.default.hexDump(ve)+" -> "+N.default.hexDump(ee)),ge.set(ee,8))}})})})}return G}function E(G){var Q=A(G,["schm"])[0];if(Q){var ee=v(Q.subarray(4,8));if(ee==="cbcs"||ee==="cenc")return A(G,["schi","tenc"])[0]}return s.logger.error("[eme] missing 'schm' box"),null}function C(G,Q){return A(Q,["moof","traf"]).reduce(function(ee,te){var se=A(te,["tfdt"])[0],ue=se[0],q=A(te,["tfhd"]).reduce(function(ne,de){var le=u(de,4),pe=G[le];if(pe){var ye=u(se,4);ue===1&&(ye*=Math.pow(2,32),ye+=u(se,8));var Ce=pe.timescale||9e4,ge=ye/Ce;if(isFinite(ge)&&(ne===null||ge<ne))return ge}return ne},null);return q!==null&&isFinite(q)&&(ee===null||q<ee)?q:ee},null)||0}function y(G,Q){for(var ee=0,te=0,se=0,ue=A(G,["moof","traf"]),q=0;q<ue.length;q++){var ne=ue[q],de=A(ne,["tfhd"])[0],le=u(de,4),pe=Q[le];if(!!pe){var ye=pe.default,Ce=u(de,0)|(ye==null?void 0:ye.flags),ge=ye==null?void 0:ye.duration;Ce&8&&(Ce&2?ge=u(de,12):ge=u(de,8));for(var ve=pe.timescale||9e4,Ee=A(ne,["trun"]),Ie=0;Ie<Ee.length;Ie++){if(ee=w(Ee[Ie]),!ee&&ge){var Le=u(Ee[Ie],4);ee=ge*Le}pe.type===D.ElementaryStreamTypes.VIDEO?te+=ee/ve:pe.type===D.ElementaryStreamTypes.AUDIO&&(se+=ee/ve)}}}if(te===0&&se===0){for(var $e=0,Fe=A(G,["sidx"]),Ve=0;Ve<Fe.length;Ve++){var Ge=x(Fe[Ve]);Ge!=null&&Ge.references&&($e+=Ge.references.reduce(function(Xe,qe){return Xe+qe.info.duration||0},0))}return $e}return te||se}function w(G){var Q=u(G,0),ee=8;Q&1&&(ee+=4),Q&4&&(ee+=4);for(var te=0,se=u(G,4),ue=0;ue<se;ue++){if(Q&256){var q=u(G,ee);te+=q,ee+=4}Q&512&&(ee+=4),Q&1024&&(ee+=4),Q&2048&&(ee+=4)}return te}function _(G,Q,ee){A(Q,["moof","traf"]).forEach(function(te){A(te,["tfhd"]).forEach(function(se){var ue=u(se,4),q=G[ue];if(!!q){var ne=q.timescale||9e4;A(te,["tfdt"]).forEach(function(de){var le=de[0],pe=u(de,4);if(le===0)pe-=ee*ne,pe=Math.max(pe,0),T(de,4,pe);else{pe*=Math.pow(2,32),pe+=u(de,8),pe-=ee*ne,pe=Math.max(pe,0);var ye=Math.floor(pe/(d+1)),Ce=Math.floor(pe%(d+1));T(de,4,ye),T(de,8,Ce)}})}})})}function P(G){var Q={valid:null,remainder:null},ee=A(G,["moof"]);if(ee){if(ee.length<2)return Q.remainder=G,Q}else return Q;var te=ee[ee.length-1];return Q.valid=(0,h.sliceUint8)(G,0,te.byteOffset-8),Q.remainder=(0,h.sliceUint8)(G,te.byteOffset-8),Q}function L(G,Q){var ee=new Uint8Array(G.length+Q.length);return ee.set(G),ee.set(Q,G.length),ee}function c(G,Q){var ee=[],te=Q.samples,se=Q.timescale,ue=Q.id,q=!1,ne=A(te,["moof"]);return ne.map(function(de){var le=de.byteOffset-8,pe=A(de,["traf"]);pe.map(function(ye){var Ce=A(ye,["tfdt"]).map(function(ge){var ve=ge[0],Ee=u(ge,4);return ve===1&&(Ee*=Math.pow(2,32),Ee+=u(ge,8)),Ee/se})[0];return Ce!==void 0&&(G=Ce),A(ye,["tfhd"]).map(function(ge){var ve=u(ge,4),Ee=u(ge,0)&16777215,Ie=(Ee&1)!==0,Le=(Ee&2)!==0,$e=(Ee&8)!==0,Fe=0,Ve=(Ee&16)!==0,Ge=0,Xe=(Ee&32)!==0,qe=8;ve===ue&&(Ie&&(qe+=8),Le&&(qe+=4),$e&&(Fe=u(ge,qe),qe+=4),Ve&&(Ge=u(ge,qe),qe+=4),Xe&&(qe+=4),Q.type==="video"&&(q=O(Q.codec)),A(ye,["trun"]).map(function(ot){var ft=ot[0],Se=u(ot,0)&16777215,dt=(Se&1)!==0,Nt=0,ut=(Se&4)!==0,Ze=(Se&256)!==0,Ft=0,Ut=(Se&512)!==0,Kt=0,Dt=(Se&1024)!==0,Lt=(Se&2048)!==0,Gt=0,Wt=u(ot,4),At=8;dt&&(Nt=u(ot,At),At+=4),ut&&(At+=4);for(var zt=Nt+le,Xt=0;Xt<Wt;Xt++){if(Ze?(Ft=u(ot,At),At+=4):Ft=Fe,Ut?(Kt=u(ot,At),At+=4):Kt=Ge,Dt&&(At+=4),Lt&&(ft===0?Gt=u(ot,At):Gt=I(ot,At),At+=4),Q.type===D.ElementaryStreamTypes.VIDEO)for(var Fn=0;Fn<Kt;){var vn=u(te,zt);if(zt+=4,p(q,te[zt])){var yn=te.subarray(zt,zt+vn);R(yn,q?2:1,G+Gt/se,ee)}zt+=vn,Fn+=vn+4}G+=Ft/se}}))})})}),ee}function O(G){if(!G)return!1;var Q=G.indexOf("."),ee=Q<0?G:G.substring(0,Q);return ee==="hvc1"||ee==="hev1"||ee==="dvh1"||ee==="dvhe"}function p(G,Q){if(G){var ee=Q>>1&63;return ee===39||ee===40}else{var te=Q&31;return te===6}}function R(G,Q,ee,te){var se=B(G),ue=0;ue+=Q;for(var q=0,ne=0,de=!1,le=0;ue<se.length;){q=0;do{if(ue>=se.length)break;le=se[ue++],q+=le}while(le===255);ne=0;do{if(ue>=se.length)break;le=se[ue++],ne+=le}while(le===255);var pe=se.length-ue;if(!de&&q===4&&ue<se.length){de=!0;var ye=se[ue++];if(ye===181){var Ce=S(se,ue);if(ue+=2,Ce===49){var ge=u(se,ue);if(ue+=4,ge===1195456820){var ve=se[ue++];if(ve===3){var Ee=se[ue++],Ie=31&Ee,Le=64&Ee,$e=Le?2+Ie*3:0,Fe=new Uint8Array($e);if(Le){Fe[0]=Ee;for(var Ve=1;Ve<$e;Ve++)Fe[Ve]=se[ue++]}te.push({type:ve,payloadType:q,pts:ee,bytes:Fe})}}}}}else if(q===5&&ne<pe){if(de=!0,ne>16){for(var Ge=[],Xe=0;Xe<16;Xe++){var qe=se[ue++].toString(16);Ge.push(qe.length==1?"0"+qe:qe),(Xe===3||Xe===5||Xe===7||Xe===9)&&Ge.push("-")}for(var ot=ne-16,ft=new Uint8Array(ot),Se=0;Se<ot;Se++)ft[Se]=se[ue++];te.push({payloadType:q,pts:ee,uuid:Ge.join(""),userData:(0,$.utf8ArrayToStr)(ft),userDataBytes:ft})}}else if(ne<pe)ue+=ne;else if(ne>pe)break}}function B(G){for(var Q=G.byteLength,ee=[],te=1;te<Q-2;)G[te]===0&&G[te+1]===0&&G[te+2]===3?(ee.push(te+2),te+=2):te++;if(ee.length===0)return G;var se=Q-ee.length,ue=new Uint8Array(se),q=0;for(te=0;te<se;q++,te++)q===ee[0]&&(q++,ee.shift()),ue[te]=G[q];return ue}function M(G){var Q=G[0],ee="",te="",se=0,ue=0,q=0,ne=0,de=0,le=0;if(Q===0){for(;v(G.subarray(le,le+1))!=="\0";)ee+=v(G.subarray(le,le+1)),le+=1;for(ee+=v(G.subarray(le,le+1)),le+=1;v(G.subarray(le,le+1))!=="\0";)te+=v(G.subarray(le,le+1)),le+=1;te+=v(G.subarray(le,le+1)),le+=1,se=u(G,12),ue=u(G,16),ne=u(G,20),de=u(G,24),le=28}else if(Q===1){le+=4,se=u(G,le),le+=4;var pe=u(G,le);le+=4;var ye=u(G,le);for(le+=4,q=Math.pow(2,32)*pe+ye,Number.isSafeInteger(q)||(q=Number.MAX_SAFE_INTEGER,console.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),ne=u(G,le),le+=4,de=u(G,le),le+=4;v(G.subarray(le,le+1))!=="\0";)ee+=v(G.subarray(le,le+1)),le+=1;for(ee+=v(G.subarray(le,le+1)),le+=1;v(G.subarray(le,le+1))!=="\0";)te+=v(G.subarray(le,le+1)),le+=1;te+=v(G.subarray(le,le+1)),le+=1}var Ce=G.subarray(le,G.byteLength);return{schemeIdUri:ee,value:te,timeScale:se,presentationTime:q,presentationTimeDelta:ue,eventDuration:ne,id:de,payload:Ce}}function K(G){for(var Q=arguments.length,ee=new Array(Q>1?Q-1:0),te=1;te<Q;te++)ee[te-1]=arguments[te];for(var se=ee.length,ue=8,q=se;q--;)ue+=ee[q].byteLength;var ne=new Uint8Array(ue);for(ne[0]=ue>>24&255,ne[1]=ue>>16&255,ne[2]=ue>>8&255,ne[3]=ue&255,ne.set(G,4),q=0,ue=8;q<se;q++)ne.set(ee[q],ue),ue+=ee[q].byteLength;return ne}function V(G,Q,ee){if(G.byteLength!==16)throw new RangeError("Invalid system id");var te,se;if(Q){te=1,se=new Uint8Array(Q.length*16);for(var ue=0;ue<Q.length;ue++){var q=Q[ue];if(q.byteLength!==16)throw new RangeError("Invalid key");se.set(q,ue*16)}}else te=0,se=new Uint8Array;var ne;te>0?(ne=new Uint8Array(4),Q.length>0&&new DataView(ne.buffer).setUint32(0,Q.length,!1)):ne=new Uint8Array;var de=new Uint8Array(4);return ee&&ee.byteLength>0&&new DataView(de.buffer).setUint32(0,ee.byteLength,!1),K([112,115,115,104],new Uint8Array([te,0,0,0]),G,ne,se,de,ee||new Uint8Array)}function z(G){if(!(G instanceof ArrayBuffer)||G.byteLength<32)return null;var Q={version:0,systemId:"",kids:null,data:null},ee=new DataView(G),te=ee.getUint32(0);if(G.byteLength!==te&&te>44)return null;var se=ee.getUint32(4);if(se!==1886614376||(Q.version=ee.getUint32(8)>>>24,Q.version>1))return null;Q.systemId=N.default.hexDump(new Uint8Array(G,12,16));var ue=ee.getUint32(28);if(Q.version===0){if(te-32<ue)return null;Q.data=new Uint8Array(G,32,ue)}else if(Q.version===1){Q.kids=[];for(var q=0;q<ue;q++)Q.kids.push(new Uint8Array(G,32+q*16,16))}return Q}},"./src/utils/numeric-encoding-utils.ts":(i,r,a)=>{a.r(r),a.d(r,{base64Decode:()=>d,base64DecodeToStr:()=>$,base64Encode:()=>s,base64ToBase64Url:()=>D,base64UrlEncode:()=>N,strToBase64Encode:()=>h});function D(g){return g.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function h(g){return btoa(g)}function $(g){return atob(g)}function s(g){return btoa(String.fromCharCode.apply(String,g))}function N(g){return D(s(g))}function d(g){return Uint8Array.from(atob(g),function(k){return k.charCodeAt(0)})}},"./src/utils/output-filter.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>D});var D=function(){function h(s,N){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=s,this.trackName=N}var $=h.prototype;return $.dispatchCue=function(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},$.newCue=function(N,d,g){(this.startTime===null||this.startTime>N)&&(this.startTime=N),this.endTime=d,this.screen=g,this.timelineController.createCaptionsTrack(this.trackName)},$.reset=function(){this.cueRanges=[],this.startTime=null},h}()},"./src/utils/texttrack-utils.ts":(i,r,a)=>{a.r(r),a.d(r,{addCueToTrack:()=>$,clearCurrentCues:()=>s,getCuesInRange:()=>g,removeCuesInRange:()=>N,sendAddTrackEvent:()=>h});var D=a("./src/utils/logger.ts");function h(k,v){var S;try{S=new Event("addtrack")}catch{S=document.createEvent("Event"),S.initEvent("addtrack",!1,!1)}S.track=k,v.dispatchEvent(S)}function $(k,v){var S=k.mode;if(S==="disabled"&&(k.mode="hidden"),k.cues&&!k.cues.getCueById(v.id))try{if(k.addCue(v),!k.cues.getCueById(v.id))throw new Error("addCue is failed for: "+v)}catch(I){D.logger.debug("[texttrack-utils]: "+I);var u=new self.TextTrackCue(v.startTime,v.endTime,v.text);u.id=v.id,k.addCue(u)}S==="disabled"&&(k.mode=S)}function s(k){var v=k.mode;if(v==="disabled"&&(k.mode="hidden"),k.cues)for(var S=k.cues.length;S--;)k.removeCue(k.cues[S]);v==="disabled"&&(k.mode=v)}function N(k,v,S,u){var I=k.mode;if(I==="disabled"&&(k.mode="hidden"),k.cues&&k.cues.length>0)for(var T=g(k.cues,v,S),A=0;A<T.length;A++)(!u||u(T[A]))&&k.removeCue(T[A]);I==="disabled"&&(k.mode=I)}function d(k,v){if(v<k[0].startTime)return 0;var S=k.length-1;if(v>k[S].endTime)return-1;for(var u=0,I=S;u<=I;){var T=Math.floor((I+u)/2);if(v<k[T].startTime)I=T-1;else if(v>k[T].startTime&&u<S)u=T+1;else return T}return k[u].startTime-v<v-k[I].startTime?u:I}function g(k,v,S){var u=[],I=d(k,v);if(I>-1)for(var T=I,A=k.length;T<A;T++){var x=k[T];if(x.startTime>=v&&x.endTime<=S)u.push(x);else if(x.startTime>S)return u}return u}},"./src/utils/time-ranges.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>h});var D={toString:function(s){for(var N="",d=s.length,g=0;g<d;g++)N+="["+s.start(g).toFixed(3)+"-"+s.end(g).toFixed(3)+"]";return N}};const h=D},"./src/utils/timescale-conversion.ts":(i,r,a)=>{a.r(r),a.d(r,{toMpegTsClockFromTimescale:()=>N,toMsFromMpegTsClock:()=>s,toTimescaleFromBase:()=>h,toTimescaleFromScale:()=>$});var D=9e4;function h(d,g,k,v){k===void 0&&(k=1),v===void 0&&(v=!1);var S=d*g*k;return v?Math.round(S):S}function $(d,g,k,v){return k===void 0&&(k=1),v===void 0&&(v=!1),h(d,g,1/k,v)}function s(d,g){return g===void 0&&(g=!1),h(d,1e3,1/D,g)}function N(d,g){return g===void 0&&(g=1),h(d,D,1/g)}},"./src/utils/typed-array.ts":(i,r,a)=>{a.r(r),a.d(r,{sliceUint8:()=>D});function D(h,$,s){return Uint8Array.prototype.slice?h.slice($,s):new Uint8Array(Array.prototype.slice.call(h,$,s))}},"./src/utils/vttcue.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>D});const D=function(){if(typeof self<"u"&&self.VTTCue)return self.VTTCue;var h=["","lr","rl"],$=["start","middle","end","left","right"];function s(v,S){if(typeof S!="string"||!Array.isArray(v))return!1;var u=S.toLowerCase();return~v.indexOf(u)?u:!1}function N(v){return s(h,v)}function d(v){return s($,v)}function g(v){for(var S=arguments.length,u=new Array(S>1?S-1:0),I=1;I<S;I++)u[I-1]=arguments[I];for(var T=1;T<arguments.length;T++){var A=arguments[T];for(var x in A)v[x]=A[x]}return v}function k(v,S,u){var I=this,T={enumerable:!0};I.hasBeenReset=!1;var A="",x=!1,b=v,m=S,E=u,C=null,y="",w=!0,_="auto",P="start",L=50,c="middle",O=50,p="middle";Object.defineProperty(I,"id",g({},T,{get:function(){return A},set:function(B){A=""+B}})),Object.defineProperty(I,"pauseOnExit",g({},T,{get:function(){return x},set:function(B){x=!!B}})),Object.defineProperty(I,"startTime",g({},T,{get:function(){return b},set:function(B){if(typeof B!="number")throw new TypeError("Start time must be set to a number.");b=B,this.hasBeenReset=!0}})),Object.defineProperty(I,"endTime",g({},T,{get:function(){return m},set:function(B){if(typeof B!="number")throw new TypeError("End time must be set to a number.");m=B,this.hasBeenReset=!0}})),Object.defineProperty(I,"text",g({},T,{get:function(){return E},set:function(B){E=""+B,this.hasBeenReset=!0}})),Object.defineProperty(I,"region",g({},T,{get:function(){return C},set:function(B){C=B,this.hasBeenReset=!0}})),Object.defineProperty(I,"vertical",g({},T,{get:function(){return y},set:function(B){var M=N(B);if(M===!1)throw new SyntaxError("An invalid or illegal string was specified.");y=M,this.hasBeenReset=!0}})),Object.defineProperty(I,"snapToLines",g({},T,{get:function(){return w},set:function(B){w=!!B,this.hasBeenReset=!0}})),Object.defineProperty(I,"line",g({},T,{get:function(){return _},set:function(B){if(typeof B!="number"&&B!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");_=B,this.hasBeenReset=!0}})),Object.defineProperty(I,"lineAlign",g({},T,{get:function(){return P},set:function(B){var M=d(B);if(!M)throw new SyntaxError("An invalid or illegal string was specified.");P=M,this.hasBeenReset=!0}})),Object.defineProperty(I,"position",g({},T,{get:function(){return L},set:function(B){if(B<0||B>100)throw new Error("Position must be between 0 and 100.");L=B,this.hasBeenReset=!0}})),Object.defineProperty(I,"positionAlign",g({},T,{get:function(){return c},set:function(B){var M=d(B);if(!M)throw new SyntaxError("An invalid or illegal string was specified.");c=M,this.hasBeenReset=!0}})),Object.defineProperty(I,"size",g({},T,{get:function(){return O},set:function(B){if(B<0||B>100)throw new Error("Size must be between 0 and 100.");O=B,this.hasBeenReset=!0}})),Object.defineProperty(I,"align",g({},T,{get:function(){return p},set:function(B){var M=d(B);if(!M)throw new SyntaxError("An invalid or illegal string was specified.");p=M,this.hasBeenReset=!0}})),I.displayState=void 0}return k.prototype.getCueAsHTML=function(){var v=self.WebVTT;return v.convertCueToDOMTree(self,this.text)},k}()},"./src/utils/vttparser.ts":(i,r,a)=>{a.r(r),a.d(r,{VTTParser:()=>S,fixLineBreaks:()=>v,parseTimeStamp:()=>$});var D=a("./src/utils/vttcue.ts"),h=function(){function u(){}var I=u.prototype;return I.decode=function(A,x){if(!A)return"";if(typeof A!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(A))},u}();function $(u){function I(A,x,b,m){return(A|0)*3600+(x|0)*60+(b|0)+parseFloat(m||0)}var T=u.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return T?parseFloat(T[2])>59?I(T[2],T[3],0,T[4]):I(T[1],T[2],T[3],T[4]):null}var s=function(){function u(){this.values=Object.create(null)}var I=u.prototype;return I.set=function(A,x){!this.get(A)&&x!==""&&(this.values[A]=x)},I.get=function(A,x,b){return b?this.has(A)?this.values[A]:x[b]:this.has(A)?this.values[A]:x},I.has=function(A){return A in this.values},I.alt=function(A,x,b){for(var m=0;m<b.length;++m)if(x===b[m]){this.set(A,x);break}},I.integer=function(A,x){/^-?\d+$/.test(x)&&this.set(A,parseInt(x,10))},I.percent=function(A,x){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(x)){var b=parseFloat(x);if(b>=0&&b<=100)return this.set(A,b),!0}return!1},u}();function N(u,I,T,A){var x=A?u.split(A):[u];for(var b in x)if(typeof x[b]=="string"){var m=x[b].split(T);if(m.length===2){var E=m[0],C=m[1];I(E,C)}}}var d=new D.default(0,0,""),g=d.align==="middle"?"middle":"center";function k(u,I,T){var A=u;function x(){var E=$(u);if(E===null)throw new Error("Malformed timestamp: "+A);return u=u.replace(/^[^\sa-zA-Z-]+/,""),E}function b(E,C){var y=new s;N(E,function(P,L){var c;switch(P){case"region":for(var O=T.length-1;O>=0;O--)if(T[O].id===L){y.set(P,T[O].region);break}break;case"vertical":y.alt(P,L,["rl","lr"]);break;case"line":c=L.split(","),y.integer(P,c[0]),y.percent(P,c[0])&&y.set("snapToLines",!1),y.alt(P,c[0],["auto"]),c.length===2&&y.alt("lineAlign",c[1],["start",g,"end"]);break;case"position":c=L.split(","),y.percent(P,c[0]),c.length===2&&y.alt("positionAlign",c[1],["start",g,"end","line-left","line-right","auto"]);break;case"size":y.percent(P,L);break;case"align":y.alt(P,L,["start",g,"end","left","right"]);break}},/:/,/\s/),C.region=y.get("region",null),C.vertical=y.get("vertical","");var w=y.get("line","auto");w==="auto"&&d.line===-1&&(w=-1),C.line=w,C.lineAlign=y.get("lineAlign","start"),C.snapToLines=y.get("snapToLines",!0),C.size=y.get("size",100),C.align=y.get("align",g);var _=y.get("position","auto");_==="auto"&&d.position===50&&(_=C.align==="start"||C.align==="left"?0:C.align==="end"||C.align==="right"?100:50),C.position=_}function m(){u=u.replace(/^\s+/,"")}if(m(),I.startTime=x(),m(),u.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+A);u=u.slice(3),m(),I.endTime=x(),m(),b(u,I)}function v(u){return u.replace(/<br(?: \/)?>/gi,`
`)}var S=function(){function u(){this.state="INITIAL",this.buffer="",this.decoder=new h,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}var I=u.prototype;return I.parse=function(A){var x=this;A&&(x.buffer+=x.decoder.decode(A,{stream:!0}));function b(){var _=x.buffer,P=0;for(_=v(_);P<_.length&&_[P]!=="\r"&&_[P]!==`
`;)++P;var L=_.slice(0,P);return _[P]==="\r"&&++P,_[P]===`
`&&++P,x.buffer=_.slice(P),L}function m(_){N(_,function(P,L){},/:/)}try{var E="";if(x.state==="INITIAL"){if(!/\r\n|\n/.test(x.buffer))return this;E=b();var C=E.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!C||!C[0])throw new Error("Malformed WebVTT signature.");x.state="HEADER"}for(var y=!1;x.buffer;){if(!/\r\n|\n/.test(x.buffer))return this;switch(y?y=!1:E=b(),x.state){case"HEADER":/:/.test(E)?m(E):E||(x.state="ID");continue;case"NOTE":E||(x.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(E)){x.state="NOTE";break}if(!E)continue;if(x.cue=new D.default(0,0,""),x.state="CUE",E.indexOf("-->")===-1){x.cue.id=E;continue}case"CUE":if(!x.cue){x.state="BADCUE";continue}try{k(E,x.cue,x.regionList)}catch{x.cue=null,x.state="BADCUE";continue}x.state="CUETEXT";continue;case"CUETEXT":{var w=E.indexOf("-->")!==-1;if(!E||w&&(y=!0)){x.oncue&&x.cue&&x.oncue(x.cue),x.cue=null,x.state="ID";continue}if(x.cue===null)continue;x.cue.text&&(x.cue.text+=`
`),x.cue.text+=E}continue;case"BADCUE":E||(x.state="ID")}}}catch{x.state==="CUETEXT"&&x.cue&&x.oncue&&x.oncue(x.cue),x.cue=null,x.state=x.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this},I.flush=function(){var A=this;try{if((A.cue||A.state==="HEADER")&&(A.buffer+=`

`,A.parse()),A.state==="INITIAL"||A.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(x){A.onparsingerror&&A.onparsingerror(x)}return A.onflush&&A.onflush(),this},u}()},"./src/utils/webvtt-parser.ts":(i,r,a)=>{a.r(r),a.d(r,{generateCueId:()=>S,parseWebVTT:()=>I});var D=a("./src/polyfills/number.ts"),h=a("./src/utils/vttparser.ts"),$=a("./src/demux/id3.ts"),s=a("./src/utils/timescale-conversion.ts"),N=a("./src/remux/mp4-remuxer.ts"),d=/\r\n|\n\r|\n|\r/g,g=function(A,x,b){return b===void 0&&(b=0),A.slice(b,b+x.length)===x},k=function(A){var x=parseInt(A.slice(-3)),b=parseInt(A.slice(-6,-4)),m=parseInt(A.slice(-9,-7)),E=A.length>9?parseInt(A.substring(0,A.indexOf(":"))):0;if(!(0,D.isFiniteNumber)(x)||!(0,D.isFiniteNumber)(b)||!(0,D.isFiniteNumber)(m)||!(0,D.isFiniteNumber)(E))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+A);return x+=1e3*b,x+=60*1e3*m,x+=60*60*1e3*E,x},v=function(A){for(var x=5381,b=A.length;b;)x=x*33^A.charCodeAt(--b);return(x>>>0).toString()};function S(T,A,x){return v(T.toString())+v(A.toString())+v(x)}var u=function(A,x,b){var m=A[x],E=A[m.prevCC];if(!E||!E.new&&m.new){A.ccOffset=A.presentationOffset=m.start,m.new=!1;return}for(;(C=E)!==null&&C!==void 0&&C.new;){var C;A.ccOffset+=m.start-E.start,m.new=!1,m=E,E=A[m.prevCC]}A.presentationOffset=b};function I(T,A,x,b,m,E,C,y){var w=new h.VTTParser,_=(0,$.utf8ArrayToStr)(new Uint8Array(T)).trim().replace(d,`
`).split(`
`),P=[],L=(0,s.toMpegTsClockFromTimescale)(A,x),c="00:00.000",O=0,p=0,R,B=!0;w.oncue=function(M){var K=b[m],V=b.ccOffset,z=(O-L)/9e4;K!=null&&K.new&&(p!==void 0?V=b.ccOffset=K.start:u(b,m,z)),z&&(V=z-b.presentationOffset);var G=M.endTime-M.startTime,Q=(0,N.normalizePts)((M.startTime+V-p)*9e4,E*9e4)/9e4;M.startTime=Math.max(Q,0),M.endTime=Math.max(Q+G,0);var ee=M.text.trim();M.text=decodeURIComponent(encodeURIComponent(ee)),M.id||(M.id=S(M.startTime,M.endTime,ee)),M.endTime>0&&P.push(M)},w.onparsingerror=function(M){R=M},w.onflush=function(){if(R){y(R);return}C(P)},_.forEach(function(M){if(B)if(g(M,"X-TIMESTAMP-MAP=")){B=!1,M.slice(16).split(",").forEach(function(K){g(K,"LOCAL:")?c=K.slice(6):g(K,"MPEGTS:")&&(O=parseInt(K.slice(7)))});try{p=k(c)/1e3}catch(K){R=K}return}else M===""&&(B=!1);w.parse(M+`
`)}),w.flush()}},"./src/utils/xhr-loader.ts":(i,r,a)=>{a.r(r),a.d(r,{default:()=>N});var D=a("./src/utils/logger.ts"),h=a("./src/loader/load-stats.ts"),$=/^age:\s*[\d.]+\s*$/m,s=function(){function d(k){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=void 0,this.loader=null,this.stats=void 0,this.xhrSetup=k?k.xhrSetup:null,this.stats=new h.LoadStats,this.retryDelay=0}var g=d.prototype;return g.destroy=function(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null},g.abortInternal=function(){var v=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),v&&(v.onreadystatechange=null,v.onprogress=null,v.readyState!==4&&(this.stats.aborted=!0,v.abort()))},g.abort=function(){var v;this.abortInternal(),(v=this.callbacks)!==null&&v!==void 0&&v.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)},g.load=function(v,S,u){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=v,this.config=S,this.callbacks=u,this.retryDelay=S.retryDelay,this.loadInternal()},g.loadInternal=function(){var v=this.config,S=this.context;if(!!v){var u=this.loader=new self.XMLHttpRequest,I=this.stats;I.loading.first=0,I.loaded=0;var T=this.xhrSetup;try{if(T)try{T(u,S.url)}catch{u.open("GET",S.url,!0),T(u,S.url)}u.readyState||u.open("GET",S.url,!0);var A=this.context.headers;if(A)for(var x in A)u.setRequestHeader(x,A[x])}catch(b){this.callbacks.onError({code:u.status,text:b.message},S,u);return}S.rangeEnd&&u.setRequestHeader("Range","bytes="+S.rangeStart+"-"+(S.rangeEnd-1)),u.onreadystatechange=this.readystatechange.bind(this),u.onprogress=this.loadprogress.bind(this),u.responseType=S.responseType,self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),v.timeout),u.send()}},g.readystatechange=function(){var v=this.context,S=this.loader,u=this.stats;if(!(!v||!S)){var I=S.readyState,T=this.config;if(!u.aborted&&I>=2)if(self.clearTimeout(this.requestTimeout),u.loading.first===0&&(u.loading.first=Math.max(self.performance.now(),u.loading.start)),I===4){S.onreadystatechange=null,S.onprogress=null;var A=S.status,x=S.responseType==="arraybuffer";if(A>=200&&A<300&&(x&&S.response||S.responseText!==null)){u.loading.end=Math.max(self.performance.now(),u.loading.first);var b,m;if(x?(b=S.response,m=b.byteLength):(b=S.responseText,m=b.length),u.loaded=u.total=m,!this.callbacks)return;var E=this.callbacks.onProgress;if(E&&E(u,v,b,S),!this.callbacks)return;var C={url:S.responseURL,data:b};this.callbacks.onSuccess(C,u,v,S)}else u.retry>=T.maxRetry||A>=400&&A<499?(D.logger.error(A+" while loading "+v.url),this.callbacks.onError({code:A,text:S.statusText},v,S)):(D.logger.warn(A+" while loading "+v.url+", retrying in "+this.retryDelay+"..."),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,T.maxRetryDelay),u.retry++)}else self.clearTimeout(this.requestTimeout),this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),T.timeout)}},g.loadtimeout=function(){D.logger.warn("timeout while loading "+this.context.url);var v=this.callbacks;v&&(this.abortInternal(),v.onTimeout(this.stats,this.context,this.loader))},g.loadprogress=function(v){var S=this.stats;S.loaded=v.loaded,v.lengthComputable&&(S.total=v.total)},g.getCacheAge=function(){var v=null;if(this.loader&&$.test(this.loader.getAllResponseHeaders())){var S=this.loader.getResponseHeader("age");v=S?parseFloat(S):null}return v},d}();const N=s},"./node_modules/eventemitter3/index.js":i=>{var r=Object.prototype.hasOwnProperty,a="~";function D(){}Object.create&&(D.prototype=Object.create(null),new D().__proto__||(a=!1));function h(d,g,k){this.fn=d,this.context=g,this.once=k||!1}function $(d,g,k,v,S){if(typeof k!="function")throw new TypeError("The listener must be a function");var u=new h(k,v||d,S),I=a?a+g:g;return d._events[I]?d._events[I].fn?d._events[I]=[d._events[I],u]:d._events[I].push(u):(d._events[I]=u,d._eventsCount++),d}function s(d,g){--d._eventsCount===0?d._events=new D:delete d._events[g]}function N(){this._events=new D,this._eventsCount=0}N.prototype.eventNames=function(){var g=[],k,v;if(this._eventsCount===0)return g;for(v in k=this._events)r.call(k,v)&&g.push(a?v.slice(1):v);return Object.getOwnPropertySymbols?g.concat(Object.getOwnPropertySymbols(k)):g},N.prototype.listeners=function(g){var k=a?a+g:g,v=this._events[k];if(!v)return[];if(v.fn)return[v.fn];for(var S=0,u=v.length,I=new Array(u);S<u;S++)I[S]=v[S].fn;return I},N.prototype.listenerCount=function(g){var k=a?a+g:g,v=this._events[k];return v?v.fn?1:v.length:0},N.prototype.emit=function(g,k,v,S,u,I){var T=a?a+g:g;if(!this._events[T])return!1;var A=this._events[T],x=arguments.length,b,m;if(A.fn){switch(A.once&&this.removeListener(g,A.fn,void 0,!0),x){case 1:return A.fn.call(A.context),!0;case 2:return A.fn.call(A.context,k),!0;case 3:return A.fn.call(A.context,k,v),!0;case 4:return A.fn.call(A.context,k,v,S),!0;case 5:return A.fn.call(A.context,k,v,S,u),!0;case 6:return A.fn.call(A.context,k,v,S,u,I),!0}for(m=1,b=new Array(x-1);m<x;m++)b[m-1]=arguments[m];A.fn.apply(A.context,b)}else{var E=A.length,C;for(m=0;m<E;m++)switch(A[m].once&&this.removeListener(g,A[m].fn,void 0,!0),x){case 1:A[m].fn.call(A[m].context);break;case 2:A[m].fn.call(A[m].context,k);break;case 3:A[m].fn.call(A[m].context,k,v);break;case 4:A[m].fn.call(A[m].context,k,v,S);break;default:if(!b)for(C=1,b=new Array(x-1);C<x;C++)b[C-1]=arguments[C];A[m].fn.apply(A[m].context,b)}}return!0},N.prototype.on=function(g,k,v){return $(this,g,k,v,!1)},N.prototype.once=function(g,k,v){return $(this,g,k,v,!0)},N.prototype.removeListener=function(g,k,v,S){var u=a?a+g:g;if(!this._events[u])return this;if(!k)return s(this,u),this;var I=this._events[u];if(I.fn)I.fn===k&&(!S||I.once)&&(!v||I.context===v)&&s(this,u);else{for(var T=0,A=[],x=I.length;T<x;T++)(I[T].fn!==k||S&&!I[T].once||v&&I[T].context!==v)&&A.push(I[T]);A.length?this._events[u]=A.length===1?A[0]:A:s(this,u)}return this},N.prototype.removeAllListeners=function(g){var k;return g?(k=a?a+g:g,this._events[k]&&s(this,k)):(this._events=new D,this._eventsCount=0),this},N.prototype.off=N.prototype.removeListener,N.prototype.addListener=N.prototype.on,N.prefixed=a,N.EventEmitter=N,i.exports=N},"./node_modules/url-toolkit/src/url-toolkit.js":function(i){(function(r){var a=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,D=/^(?=([^\/?#]*))\1([^]*)$/,h=/(?:\/|^)\.(?=\/)/g,$=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,s={buildAbsoluteURL:function(N,d,g){if(g=g||{},N=N.trim(),d=d.trim(),!d){if(!g.alwaysNormalize)return N;var k=s.parseURL(N);if(!k)throw new Error("Error trying to parse base URL.");return k.path=s.normalizePath(k.path),s.buildURLFromParts(k)}var v=s.parseURL(d);if(!v)throw new Error("Error trying to parse relative URL.");if(v.scheme)return g.alwaysNormalize?(v.path=s.normalizePath(v.path),s.buildURLFromParts(v)):d;var S=s.parseURL(N);if(!S)throw new Error("Error trying to parse base URL.");if(!S.netLoc&&S.path&&S.path[0]!=="/"){var u=D.exec(S.path);S.netLoc=u[1],S.path=u[2]}S.netLoc&&!S.path&&(S.path="/");var I={scheme:S.scheme,netLoc:v.netLoc,path:null,params:v.params,query:v.query,fragment:v.fragment};if(!v.netLoc&&(I.netLoc=S.netLoc,v.path[0]!=="/"))if(!v.path)I.path=S.path,v.params||(I.params=S.params,v.query||(I.query=S.query));else{var T=S.path,A=T.substring(0,T.lastIndexOf("/")+1)+v.path;I.path=s.normalizePath(A)}return I.path===null&&(I.path=g.alwaysNormalize?s.normalizePath(v.path):v.path),s.buildURLFromParts(I)},parseURL:function(N){var d=a.exec(N);return d?{scheme:d[1]||"",netLoc:d[2]||"",path:d[3]||"",params:d[4]||"",query:d[5]||"",fragment:d[6]||""}:null},normalizePath:function(N){for(N=N.split("").reverse().join("").replace(h,"");N.length!==(N=N.replace($,"")).length;);return N.split("").reverse().join("")},buildURLFromParts:function(N){return N.scheme+N.netLoc+N.path+N.params+N.query+N.fragment}};i.exports=s})()}},o={};function l(i){var r=o[i];if(r!==void 0)return r.exports;var a=o[i]={exports:{}};return n[i].call(a.exports,a,a.exports,l),a.exports}l.m=n,l.n=i=>{var r=i&&i.__esModule?()=>i.default:()=>i;return l.d(r,{a:r}),r},l.d=(i,r)=>{for(var a in r)l.o(r,a)&&!l.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:r[a]})},l.o=(i,r)=>Object.prototype.hasOwnProperty.call(i,r),l.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var f=l("./src/hls.ts");return f=f.default,f})())})(wu);const nl=ku(wu.exports);var xu={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(self,()=>(()=>{var n={916:(i,r,a)=>{var D=a(471);i.exports=function(h){var $,s="",N=(h=h||{}).video,d=h.options,g=D.$escape,k=h.tran,v=h.icons,S=h.index,u=D.$each;return h.$value,h.$index,s+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,$=a(568)(N),s+=$,s+=`
    `,d.logo&&(s+=`
    <div class="dplayer-logo">
        <img src="`,s+=g(d.logo),s+=`">
    </div>
    `),s+=`
    <div class="dplayer-danmaku"`,d.danmaku&&d.danmaku.bottom&&(s+=' style="margin-bottom:',s+=g(d.danmaku.bottom),s+='"'),s+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,d.danmaku&&(s+=`
        <span class="dplayer-danloading">`,s+=g(k("danmaku-loading")),s+=`</span>
        `),s+=`
        <span class="diplayer-loading-icon">`,s+=v.loading,s+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,s+=g(k("setting")),s+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,s+=v.pallette,s+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,s+=g(k("set-danmaku-color")),s+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,s+=g(S),s+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,s+=g(S),s+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,s+=g(S),s+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,s+=g(S),s+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,s+=g(S),s+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,s+=g(S),s+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,s+=g(k("set-danmaku-type")),s+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,s+=g(S),s+=`" value="1">
                    <span>`,s+=g(k("top")),s+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,s+=g(S),s+=`" value="0" checked>
                    <span>`,s+=g(k("rolling")),s+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,s+=g(S),s+=`" value="2">
                    <span>`,s+=g(k("bottom")),s+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,s+=g(k("input-danmaku-enter")),s+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,s+=g(k("send")),s+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,s+=v.send,s+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,s+=v.play,s+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,s+=v.volumeDown,s+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,s+=g(d.theme),s+=`;">
                        <span class="dplayer-thumb" style="background: `,s+=g(d.theme),s+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,d.live&&(s+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,s+=g(d.theme),s+=';"></span>',s+=g(k("live")),s+=`</span>
        `),s+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,d.video.quality&&(s+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,s+=g(d.video.quality[d.video.defaultQuality].name),s+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,u(d.video.quality,function(I,T){s+=`
                    <div class="dplayer-quality-item" data-index="`,s+=g(T),s+='">',s+=g(I.name),s+=`</div>
                `}),s+=`
                </div>
            </div>
        </div>
        `),s+=`
        `,d.screenshot&&(s+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,s+=g(k("screenshot")),s+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,s+=v.camera,s+=`</span>
        </div>
        `),s+=`
        `,d.airplay&&(s+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,s+=g(k("airplay")),s+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,s+=v.airplay,s+=`</span>
        </div>
        `),s+=`
        `,d.chromecast&&(s+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,s+=g(k("chromecast")),s+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,s+=v.chromecast,s+=`</span>
        </div>
        `),s+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,s+=g(k("send-danmaku")),s+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,s+=v.comment,s+=`</span>
            </button>
        </div>
        `,d.subtitle&&(s+=`
        `,typeof d.subtitle.url=="string"?(s+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,s+=g(k("hide-subs")),s+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,s+=v.subtitle,s+=`</span>
            </button>
        </div>
        `):(s+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,s+=g(k("subtitle")),s+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,s+=v.subtitle,s+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,u(d.subtitle.url,function(I,T){s+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,s+=g(I.url),s+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,s+=g(I.lang?I.name?I.name+" ("+k(I.lang)+")":k(I.lang):I.name),s+=`</span>
                        </div>
                    `}),s+=`
                </div>
            </div>
        </div>
        `),s+=`
        `),s+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,s+=g(k("setting")),s+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,s+=v.setting,s+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,s+=g(k("speed")),s+=`</span>
                        <div class="dplayer-toggle">`,s+=v.right,s+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,s+=g(k("loop")),s+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,s+=g(k("show-danmaku")),s+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,s+=g(k("unlimited-danmaku")),s+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,s+=g(k("opacity-danmaku")),s+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,u(d.playbackSpeed,function(I,T){s+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,s+=g(I),s+=`">
                            <span class="dplayer-label">`,s+=g(I===1?k("normal"):I),s+=`</span>
                        </div>
                    `}),s+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,s+=g(k("web-fullscreen")),s+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,s+=v.fullWeb,s+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,s+=g(k("fullscreen")),s+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,s+=v.full,s+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,s+=g(d.theme),s+=`">
                <span class="dplayer-thumb" style="background: `,s+=g(d.theme),s+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,d.danmaku&&(s+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),s+=`
</div>
<div class="dplayer-menu">
    `,u(d.contextmenu,function(I,T){s+=`
        <div class="dplayer-menu-item">
            <a`,I.link&&(s+=' target="_blank"'),s+=' href="',s+=g(I.link||"javascript:void(0);"),s+='">',I.key&&(s+=" ",s+=g(k(I.key))),I.text&&(s+=" ",s+=g(I.text)),s+=`</a>
        </div>
    `}),s+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,s+=v.play,s+=`
</button>`}},568:(i,r,a)=>{var D=a(471);i.exports=function(h){var $="",s=(h=h||{}).enableSubtitle,N=h.subtitle,d=h.current,g=h.airplay,k=h.pic,v=D.$escape,S=h.screenshot,u=h.preload,I=h.url;return s=N&&N.type==="webvtt",$+=`
<video
    class="dplayer-video `,d&&($+="dplayer-video-current"),$+=`"
    webkit-playsinline
    `,g&&($+=' x-webkit-airplay="allow" '),$+=`
    playsinline
    `,k&&($+='poster="',$+=v(k),$+='"'),$+=`
    `,(S||s)&&($+='crossorigin="anonymous"'),$+=`
    `,u&&($+='preload="',$+=v(u),$+='"'),$+=`
    `,g?$+=`
    nosrc
    `:I&&($+=`
    src="`,$+=v(I),$+=`"
    `),$+=`
    >
    `,g&&($+=`
    <source src="`,$+=v(I),$+=`">
    `),$+=`
    `,s&&($+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,$+=v(typeof N.url=="string"?N.url:N.url[N.index].url),$+=`"></track>
    `),$+`
</video>`}},49:(i,r,a)=>{a.d(r,{Z:()=>N});var D=a(415),h=a.n(D),$=a(352),s=a.n($)()(h());s.push([i.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const N=s},685:(i,r,a)=>{a.d(r,{Z:()=>u});var D=a(415),h=a.n(D),$=a(352),s=a.n($),N=a(49),d=a(80),g=a.n(d),k=new URL(a(831),a.b),v=s()(h());v.i(N.Z);var S=g()(k);v.push([i.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+S+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const u=v},856:i=>{var r=[];function a($){for(var s=-1,N=0;N<r.length;N++)if(r[N].identifier===$){s=N;break}return s}function D($,s){for(var N={},d=[],g=0;g<$.length;g++){var k=$[g],v=s.base?k[0]+s.base:k[0],S=N[v]||0,u="".concat(v," ").concat(S);N[v]=S+1;var I=a(u),T={css:k[1],media:k[2],sourceMap:k[3],supports:k[4],layer:k[5]};if(I!==-1)r[I].references++,r[I].updater(T);else{var A=h(T,s);s.byIndex=g,r.splice(g,0,{identifier:u,updater:A,references:1})}d.push(u)}return d}function h($,s){var N=s.domAPI(s);return N.update($),function(d){if(d){if(d.css===$.css&&d.media===$.media&&d.sourceMap===$.sourceMap&&d.supports===$.supports&&d.layer===$.layer)return;N.update($=d)}else N.remove()}}i.exports=function($,s){var N=D($=$||[],s=s||{});return function(d){d=d||[];for(var g=0;g<N.length;g++){var k=a(N[g]);r[k].references--}for(var v=D(d,s),S=0;S<N.length;S++){var u=a(N[S]);r[u].references===0&&(r[u].updater(),r.splice(u,1))}N=v}}},370:i=>{var r={};i.exports=function(a,D){var h=function($){if(r[$]===void 0){var s=document.querySelector($);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}r[$]=s}return r[$]}(a);if(!h)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");h.appendChild(D)}},278:i=>{i.exports=function(r){var a=document.createElement("style");return r.setAttributes(a,r.attributes),r.insert(a,r.options),a}},458:(i,r,a)=>{i.exports=function(D){var h=a.nc;h&&D.setAttribute("nonce",h)}},470:i=>{i.exports=function(r){var a=r.insertStyleElement(r);return{update:function(D){(function(h,$,s){var N="";s.supports&&(N+="@supports (".concat(s.supports,") {")),s.media&&(N+="@media ".concat(s.media," {"));var d=s.layer!==void 0;d&&(N+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),N+=s.css,d&&(N+="}"),s.media&&(N+="}"),s.supports&&(N+="}");var g=s.sourceMap;g&&typeof btoa<"u"&&(N+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),$.styleTagTransform(N,h,$.options)})(a,r,D)},remove:function(){(function(D){if(D.parentNode===null)return!1;D.parentNode.removeChild(D)})(a)}}}},488:i=>{i.exports=function(r,a){if(a.styleSheet)a.styleSheet.cssText=r;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(r))}}},251:i=>{i.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:i=>{i.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:i=>{i.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:i=>{i.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(i,r,a)=>{var D=typeof self<"u"?self:typeof window<"u"?window:a.g!==void 0?a.g:{},h=Object.create(D),$=/["&'<>]/;function s(N){return typeof N!="string"&&(N=N==null?"":typeof N=="function"?s(N.call(N)):JSON.stringify(N)),N}h.$escape=function(N){return function(d){var g=""+d,k=$.exec(g);if(!k)return d;var v="",S=void 0,u=void 0,I=void 0;for(S=k.index,u=0;S<g.length;S++){switch(g.charCodeAt(S)){case 34:I="&#34;";break;case 38:I="&#38;";break;case 39:I="&#39;";break;case 60:I="&#60;";break;case 62:I="&#62;";break;default:continue}u!==S&&(v+=g.substring(u,S)),u=S+1,v+=I}return u!==S?v+g.substring(u,S):v}(s(N))},h.$each=function(N,d){if(Array.isArray(N))for(var g=0,k=N.length;g<k;g++)d(N[g],g);else for(var v in N)d(N[v],v)},i.exports=h},471:(i,r,a)=>{i.exports=a(897)},352:i=>{i.exports=function(r){var a=[];return a.toString=function(){return this.map(function(D){var h="",$=D[5]!==void 0;return D[4]&&(h+="@supports (".concat(D[4],") {")),D[2]&&(h+="@media ".concat(D[2]," {")),$&&(h+="@layer".concat(D[5].length>0?" ".concat(D[5]):""," {")),h+=r(D),$&&(h+="}"),D[2]&&(h+="}"),D[4]&&(h+="}"),h}).join("")},a.i=function(D,h,$,s,N){typeof D=="string"&&(D=[[null,D,void 0]]);var d={};if($)for(var g=0;g<this.length;g++){var k=this[g][0];k!=null&&(d[k]=!0)}for(var v=0;v<D.length;v++){var S=[].concat(D[v]);$&&d[S[0]]||(N!==void 0&&(S[5]===void 0||(S[1]="@layer".concat(S[5].length>0?" ".concat(S[5]):""," {").concat(S[1],"}")),S[5]=N),h&&(S[2]&&(S[1]="@media ".concat(S[2]," {").concat(S[1],"}")),S[2]=h),s&&(S[4]?(S[1]="@supports (".concat(S[4],") {").concat(S[1],"}"),S[4]=s):S[4]="".concat(s)),a.push(S))}},a}},80:i=>{i.exports=function(r,a){return a||(a={}),r&&(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),a.hash&&(r+=a.hash),/["'() \t\n]|(%20)/.test(r)||a.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},415:i=>{i.exports=function(r){var a=r[1],D=r[3];if(!D)return a;if(typeof btoa=="function"){var h=btoa(unescape(encodeURIComponent(JSON.stringify(D)))),$="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(h),s="/*# ".concat($," */");return[a].concat([s]).join(`
`)}return[a].join(`
`)}},937:i=>{function r(a){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},r(a)}i.exports=(typeof self>"u"?"undefined":r(self))=="object"?self.FormData:window.FormData},831:i=>{i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},o={};function l(i){var r=o[i];if(r!==void 0)return r.exports;var a=o[i]={id:i,exports:{}};return n[i](a,a.exports,l),a.exports}l.m=n,l.n=i=>{var r=i&&i.__esModule?()=>i.default:()=>i;return l.d(r,{a:r}),r},l.d=(i,r)=>{for(var a in r)l.o(r,a)&&!l.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:r[a]})},l.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),l.o=(i,r)=>Object.prototype.hasOwnProperty.call(i,r),l.b=document.baseURI||self.location.href,l.nc=void 0;var f={};return(()=>{l.d(f,{default:()=>Rc});var i=l(856),r=l.n(i),a=l(470),D=l.n(a),h=l(370),$=l.n(h),s=l(458),N=l.n(s),d=l(278),g=l.n(d),k=l(488),v=l.n(k),S=l(685),u={};u.styleTagTransform=v(),u.setAttributes=N(),u.insert=$().bind(null,"head"),u.domAPI=D(),u.insertStyleElement=g(),r()(S.Z,u),S.Z&&S.Z.locals&&S.Z.locals;function I(U){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},I(U)}function T(U,W){this.name="AggregateError",this.errors=U,this.message=W||""}T.prototype=Error.prototype;function A(U){return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},A(U)}var x=setTimeout;function b(U){return Boolean(U&&U.length!==void 0)}function m(){}function E(U){if(!(this instanceof E))throw new TypeError("Promises must be constructed via new");if(typeof U!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],L(U,this)}function C(U,W){for(;U._state===3;)U=U._value;U._state!==0?(U._handled=!0,E._immediateFn(function(){var Z=U._state===1?W.onFulfilled:W.onRejected;if(Z!==null){var F;try{F=Z(U._value)}catch(H){return void w(W.promise,H)}y(W.promise,F)}else(U._state===1?y:w)(W.promise,U._value)})):U._deferreds.push(W)}function y(U,W){try{if(W===U)throw new TypeError("A promise cannot be resolved with itself.");if(W&&(A(W)==="object"||typeof W=="function")){var Z=W.then;if(W instanceof E)return U._state=3,U._value=W,void _(U);if(typeof Z=="function")return void L((F=Z,H=W,function(){F.apply(H,arguments)}),U)}U._state=1,U._value=W,_(U)}catch(Y){w(U,Y)}var F,H}function w(U,W){U._state=2,U._value=W,_(U)}function _(U){U._state===2&&U._deferreds.length===0&&E._immediateFn(function(){U._handled||E._unhandledRejectionFn(U._value)});for(var W=0,Z=U._deferreds.length;W<Z;W++)C(U,U._deferreds[W]);U._deferreds=null}function P(U,W,Z){this.onFulfilled=typeof U=="function"?U:null,this.onRejected=typeof W=="function"?W:null,this.promise=Z}function L(U,W){var Z=!1;try{U(function(F){Z||(Z=!0,y(W,F))},function(F){Z||(Z=!0,w(W,F))})}catch(F){if(Z)return;Z=!0,w(W,F)}}E.prototype.catch=function(U){return this.then(null,U)},E.prototype.then=function(U,W){var Z=new this.constructor(m);return C(this,new P(U,W,Z)),Z},E.prototype.finally=function(U){var W=this.constructor;return this.then(function(Z){return W.resolve(U()).then(function(){return Z})},function(Z){return W.resolve(U()).then(function(){return W.reject(Z)})})},E.all=function(U){return new E(function(W,Z){if(!b(U))return Z(new TypeError("Promise.all accepts an array"));var F=Array.prototype.slice.call(U);if(F.length===0)return W([]);var H=F.length;function Y(ie,oe){try{if(oe&&(A(oe)==="object"||typeof oe=="function")){var be=oe.then;if(typeof be=="function")return void be.call(oe,function(ke){Y(ie,ke)},Z)}F[ie]=oe,--H==0&&W(F)}catch(ke){Z(ke)}}for(var J=0;J<F.length;J++)Y(J,F[J])})},E.any=function(U){var W=this;return new W(function(Z,F){if(!U||U.length===void 0)return F(new TypeError("Promise.any accepts an array"));var H=Array.prototype.slice.call(U);if(H.length===0)return F();for(var Y=[],J=0;J<H.length;J++)try{W.resolve(H[J]).then(Z).catch(function(ie){Y.push(ie),Y.length===H.length&&F(new T(Y,"All promises were rejected"))})}catch(ie){F(ie)}})},E.allSettled=function(U){return new this(function(W,Z){if(!U||U.length===void 0)return Z(new TypeError(I(U)+" "+U+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var F=Array.prototype.slice.call(U);if(F.length===0)return W([]);var H=F.length;function Y(ie,oe){if(oe&&(I(oe)==="object"||typeof oe=="function")){var be=oe.then;if(typeof be=="function")return void be.call(oe,function(ke){Y(ie,ke)},function(ke){F[ie]={status:"rejected",reason:ke},--H==0&&W(F)})}F[ie]={status:"fulfilled",value:oe},--H==0&&W(F)}for(var J=0;J<F.length;J++)Y(J,F[J])})},E.resolve=function(U){return U&&A(U)==="object"&&U.constructor===E?U:new E(function(W){W(U)})},E.reject=function(U){return new E(function(W,Z){Z(U)})},E.race=function(U){return new E(function(W,Z){if(!b(U))return Z(new TypeError("Promise.race accepts an array"));for(var F=0,H=U.length;F<H;F++)E.resolve(U[F]).then(W,Z)})},E._immediateFn=typeof setImmediate=="function"&&function(U){setImmediate(U)}||function(U){x(U,0)},E._unhandledRejectionFn=function(U){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",U)};const c=E;var O=/mobile/i.test(window.navigator.userAgent);const p={secondToTime:function(U){if((U=U||0)===0||U===1/0||U.toString()==="NaN")return"00:00";var W=Math.floor(U/3600),Z=Math.floor((U-3600*W)/60),F=Math.floor(U-3600*W-60*Z);return(W>0?[W,Z,F]:[Z,F]).map(function(H){return H<10?"0"+H:""+H}).join(":")},getElementViewLeft:function(U){var W=U.offsetLeft,Z=U.offsetParent,F=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;Z!==null&&Z!==U;)W+=Z.offsetLeft,Z=Z.offsetParent;else for(;Z!==null;)W+=Z.offsetLeft,Z=Z.offsetParent;return W-F},getBoundingClientRectViewLeft:function(U){var W=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(U.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var Z=document.createElement("div");Z.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(Z),this.getBoundingClientRectViewLeft.offset=-Z.getBoundingClientRect().top-W,document.body.removeChild(Z),Z=null}var F=U.getBoundingClientRect(),H=this.getBoundingClientRectViewLeft.offset;return F.left+H}return this.getElementViewLeft(U)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(U){var W=U.left,Z=W===void 0?0:W,F=U.top,H=F===void 0?0:F;this.isFirefox?(document.documentElement.scrollLeft=Z,document.documentElement.scrollTop=H):window.scrollTo(Z,H)},isMobile:O,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(U,W){localStorage.setItem(U,W)},get:function(U){return localStorage.getItem(U)}},nameMap:{dragStart:O?"touchstart":"mousedown",dragMove:O?"touchmove":"mousemove",dragEnd:O?"touchend":"mouseup"},color2Number:function(U){return U[0]==="#"&&(U=U.substr(1)),U.length===3&&(U="".concat(U[0]).concat(U[0]).concat(U[1]).concat(U[1]).concat(U[2]).concat(U[2])),parseInt(U,16)+0&16777215},number2Color:function(U){return"#"+("00000"+U.toString(16)).slice(-6)},number2Type:function(U){switch(U){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function R(U,W){return function(){return U.apply(W,arguments)}}function B(U){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},B(U)}var M,K=Object.prototype.toString,V=Object.getPrototypeOf,z=(M=Object.create(null),function(U){var W=K.call(U);return M[W]||(M[W]=W.slice(8,-1).toLowerCase())}),G=function(U){return U=U.toLowerCase(),function(W){return z(W)===U}},Q=function(U){return function(W){return B(W)===U}},ee=Array.isArray,te=Q("undefined"),se=G("ArrayBuffer"),ue=Q("string"),q=Q("function"),ne=Q("number"),de=function(U){return U!==null&&B(U)==="object"},le=function(U){if(z(U)!=="object")return!1;var W=V(U);return!(W!==null&&W!==Object.prototype&&Object.getPrototypeOf(W)!==null||Symbol.toStringTag in U||Symbol.iterator in U)},pe=G("Date"),ye=G("File"),Ce=G("Blob"),ge=G("FileList"),ve=G("URLSearchParams");function Ee(U,W){var Z,F,H=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},Y=H.allOwnKeys,J=Y!==void 0&&Y;if(U!=null)if(B(U)!=="object"&&(U=[U]),ee(U))for(Z=0,F=U.length;Z<F;Z++)W.call(null,U[Z],Z,U);else{var ie,oe=J?Object.getOwnPropertyNames(U):Object.keys(U),be=oe.length;for(Z=0;Z<be;Z++)ie=oe[Z],W.call(null,U[ie],ie,U)}}function Ie(U,W){W=W.toLowerCase();for(var Z,F=Object.keys(U),H=F.length;H-- >0;)if(W===(Z=F[H]).toLowerCase())return Z;return null}var Le,$e,Fe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Tu,Ve=function(U){return!te(U)&&U!==Fe},Ge=(Le=typeof Uint8Array<"u"&&V(Uint8Array),function(U){return Le&&U instanceof Le}),Xe=G("HTMLFormElement"),qe=($e=Object.prototype.hasOwnProperty,function(U,W){return $e.call(U,W)}),ot=G("RegExp"),ft=function(U,W){var Z=Object.getOwnPropertyDescriptors(U),F={};Ee(Z,function(H,Y){W(H,Y,U)!==!1&&(F[Y]=H)}),Object.defineProperties(U,F)};const Se={isArray:ee,isArrayBuffer:se,isBuffer:function(U){return U!==null&&!te(U)&&U.constructor!==null&&!te(U.constructor)&&q(U.constructor.isBuffer)&&U.constructor.isBuffer(U)},isFormData:function(U){var W="[object FormData]";return U&&(typeof FormData=="function"&&U instanceof FormData||K.call(U)===W||q(U.toString)&&U.toString()===W)},isArrayBufferView:function(U){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(U):U&&U.buffer&&se(U.buffer)},isString:ue,isNumber:ne,isBoolean:function(U){return U===!0||U===!1},isObject:de,isPlainObject:le,isUndefined:te,isDate:pe,isFile:ye,isBlob:Ce,isRegExp:ot,isFunction:q,isStream:function(U){return de(U)&&q(U.pipe)},isURLSearchParams:ve,isTypedArray:Ge,isFileList:ge,forEach:Ee,merge:function U(){for(var W=Ve(this)&&this||{},Z=W.caseless,F={},H=function(ie,oe){var be=Z&&Ie(F,oe)||oe;le(F[be])&&le(ie)?F[be]=U(F[be],ie):le(ie)?F[be]=U({},ie):ee(ie)?F[be]=ie.slice():F[be]=ie},Y=0,J=arguments.length;Y<J;Y++)arguments[Y]&&Ee(arguments[Y],H);return F},extend:function(U,W,Z){var F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},H=F.allOwnKeys;return Ee(W,function(Y,J){Z&&q(Y)?U[J]=R(Y,Z):U[J]=Y},{allOwnKeys:H}),U},trim:function(U){return U.trim?U.trim():U.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(U){return U.charCodeAt(0)===65279&&(U=U.slice(1)),U},inherits:function(U,W,Z,F){U.prototype=Object.create(W.prototype,F),U.prototype.constructor=U,Object.defineProperty(U,"super",{value:W.prototype}),Z&&Object.assign(U.prototype,Z)},toFlatObject:function(U,W,Z,F){var H,Y,J,ie={};if(W=W||{},U==null)return W;do{for(Y=(H=Object.getOwnPropertyNames(U)).length;Y-- >0;)J=H[Y],F&&!F(J,U,W)||ie[J]||(W[J]=U[J],ie[J]=!0);U=Z!==!1&&V(U)}while(U&&(!Z||Z(U,W))&&U!==Object.prototype);return W},kindOf:z,kindOfTest:G,endsWith:function(U,W,Z){U=String(U),(Z===void 0||Z>U.length)&&(Z=U.length),Z-=W.length;var F=U.indexOf(W,Z);return F!==-1&&F===Z},toArray:function(U){if(!U)return null;if(ee(U))return U;var W=U.length;if(!ne(W))return null;for(var Z=new Array(W);W-- >0;)Z[W]=U[W];return Z},forEachEntry:function(U,W){for(var Z,F=(U&&U[Symbol.iterator]).call(U);(Z=F.next())&&!Z.done;){var H=Z.value;W.call(U,H[0],H[1])}},matchAll:function(U,W){for(var Z,F=[];(Z=U.exec(W))!==null;)F.push(Z);return F},isHTMLForm:Xe,hasOwnProperty:qe,hasOwnProp:qe,reduceDescriptors:ft,freezeMethods:function(U){ft(U,function(W,Z){if(q(U)&&["arguments","caller","callee"].indexOf(Z)!==-1)return!1;var F=U[Z];q(F)&&(W.enumerable=!1,"writable"in W?W.writable=!1:W.set||(W.set=function(){throw Error("Can not rewrite read-only method '"+Z+"'")}))})},toObjectSet:function(U,W){var Z={},F=function(H){H.forEach(function(Y){Z[Y]=!0})};return ee(U)?F(U):F(String(U).split(W)),Z},toCamelCase:function(U){return U.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(W,Z,F){return Z.toUpperCase()+F})},noop:function(){},toFiniteNumber:function(U,W){return U=+U,Number.isFinite(U)?U:W},findKey:Ie,global:Fe,isContextDefined:Ve,toJSONObject:function(U){var W=new Array(10);return function Z(F,H){if(de(F)){if(W.indexOf(F)>=0)return;if(!("toJSON"in F)){W[H]=F;var Y=ee(F)?[]:{};return Ee(F,function(J,ie){var oe=Z(J,H+1);!te(oe)&&(Y[ie]=oe)}),W[H]=void 0,Y}}return F}(U,0)}};function dt(U,W,Z,F,H){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=U,this.name="AxiosError",W&&(this.code=W),Z&&(this.config=Z),F&&(this.request=F),H&&(this.response=H)}Se.inherits(dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Se.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Nt=dt.prototype,ut={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(U){ut[U]={value:U}}),Object.defineProperties(dt,ut),Object.defineProperty(Nt,"isAxiosError",{value:!0}),dt.from=function(U,W,Z,F,H,Y){var J=Object.create(Nt);return Se.toFlatObject(U,J,function(ie){return ie!==Error.prototype},function(ie){return ie!=="isAxiosError"}),dt.call(J,U.message,W,Z,F,H),J.cause=U,J.name=U.name,Y&&Object.assign(J,Y),J};const Ze=dt,Ft=l(937);function Ut(U){return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Ut(U)}function Kt(U){return Se.isPlainObject(U)||Se.isArray(U)}function Dt(U){return Se.endsWith(U,"[]")?U.slice(0,-2):U}function Lt(U,W,Z){return U?U.concat(W).map(function(F,H){return F=Dt(F),!Z&&H?"["+F+"]":F}).join(Z?".":""):W}var Gt=Se.toFlatObject(Se,{},null,function(U){return/^is[A-Z]/.test(U)});const Wt=function(U,W,Z){if(!Se.isObject(U))throw new TypeError("target must be an object");W=W||new(Ft||FormData);var F,H=(Z=Se.toFlatObject(Z,{metaTokens:!0,dots:!1,indexes:!1},!1,function(He,We){return!Se.isUndefined(We[He])})).metaTokens,Y=Z.visitor||ke,J=Z.dots,ie=Z.indexes,oe=(Z.Blob||typeof Blob<"u"&&Blob)&&(F=W)&&Se.isFunction(F.append)&&F[Symbol.toStringTag]==="FormData"&&F[Symbol.iterator];if(!Se.isFunction(Y))throw new TypeError("visitor must be a function");function be(He){if(He===null)return"";if(Se.isDate(He))return He.toISOString();if(!oe&&Se.isBlob(He))throw new Ze("Blob is not supported. Use a Buffer instead.");return Se.isArrayBuffer(He)||Se.isTypedArray(He)?oe&&typeof Blob=="function"?new Blob([He]):Buffer.from(He):He}function ke(He,We,Re){var je=He;if(He&&!Re&&Ut(He)==="object"){if(Se.endsWith(We,"{}"))We=H?We:We.slice(0,-2),He=JSON.stringify(He);else if(Se.isArray(He)&&function(et){return Se.isArray(et)&&!et.some(Kt)}(He)||Se.isFileList(He)||Se.endsWith(We,"[]")&&(je=Se.toArray(He)))return We=Dt(We),je.forEach(function(et,Pt){!Se.isUndefined(et)&&et!==null&&W.append(ie===!0?Lt([We],Pt,J):ie===null?We:We+"[]",be(et))}),!1}return!!Kt(He)||(W.append(Lt(Re,We,J),be(He)),!1)}var Oe=[],Ue=Object.assign(Gt,{defaultVisitor:ke,convertValue:be,isVisitable:Kt});if(!Se.isObject(U))throw new TypeError("data must be an object");return function He(We,Re){if(!Se.isUndefined(We)){if(Oe.indexOf(We)!==-1)throw Error("Circular reference detected in "+Re.join("."));Oe.push(We),Se.forEach(We,function(je,et){(!(Se.isUndefined(je)||je===null)&&Y.call(W,je,Se.isString(et)?et.trim():et,Re,Ue))===!0&&He(je,Re?Re.concat(et):[et])}),Oe.pop()}}(U),W};function At(U){var W={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(U).replace(/[!'()~]|%20|%00/g,function(Z){return W[Z]})}function zt(U,W){this._pairs=[],U&&Wt(U,this,W)}var Xt=zt.prototype;Xt.append=function(U,W){this._pairs.push([U,W])},Xt.toString=function(U){var W=U?function(Z){return U.call(this,Z,At)}:At;return this._pairs.map(function(Z){return W(Z[0])+"="+W(Z[1])},"").join("&")};const Fn=zt;function vn(U){return encodeURIComponent(U).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yn(U,W,Z){if(!W)return U;var F,H=Z&&Z.encode||vn,Y=Z&&Z.serialize;if(F=Y?Y(W,Z):Se.isURLSearchParams(W)?W.toString():new Fn(W,Z).toString(H)){var J=U.indexOf("#");J!==-1&&(U=U.slice(0,J)),U+=(U.indexOf("?")===-1?"?":"&")+F}return U}function kn(U){return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},kn(U)}function nr(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(kn(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(kn(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),kn(H)==="symbol"?H:String(H)),F)}var H}var hi=function(){function U(){(function(F,H){if(!(F instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.handlers=[]}var W,Z;return W=U,Z=[{key:"use",value:function(F,H,Y){return this.handlers.push({fulfilled:F,rejected:H,synchronous:!!Y&&Y.synchronous,runWhen:Y?Y.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(F){this.handlers[F]&&(this.handlers[F]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(F){Se.forEach(this.handlers,function(H){H!==null&&F(H)})}}],Z&&nr(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const rr=hi,Aa={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ba=typeof URLSearchParams<"u"?URLSearchParams:Fn,wr=FormData;var Vt,Ea=(typeof navigator>"u"||(Vt=navigator.product)!=="ReactNative"&&Vt!=="NativeScript"&&Vt!=="NS")&&typeof window<"u"&&typeof document<"u",Sa=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const en={isBrowser:!0,classes:{URLSearchParams:ba,FormData:wr,Blob},isStandardBrowserEnv:Ea,isStandardBrowserWebWorkerEnv:Sa,protocols:["http","https","file","blob","url","data"]},Ca=function(U){function W(F,H,Y,J){var ie=F[J++],oe=Number.isFinite(+ie),be=J>=F.length;return ie=!ie&&Se.isArray(Y)?Y.length:ie,be?(Se.hasOwnProp(Y,ie)?Y[ie]=[Y[ie],H]:Y[ie]=H,!oe):(Y[ie]&&Se.isObject(Y[ie])||(Y[ie]=[]),W(F,H,Y[ie],J)&&Se.isArray(Y[ie])&&(Y[ie]=function(ke){var Oe,Ue,He={},We=Object.keys(ke),Re=We.length;for(Oe=0;Oe<Re;Oe++)He[Ue=We[Oe]]=ke[Ue];return He}(Y[ie])),!oe)}if(Se.isFormData(U)&&Se.isFunction(U.entries)){var Z={};return Se.forEachEntry(U,function(F,H){W(function(Y){return Se.matchAll(/\w+|\[(\w*)]/g,Y).map(function(J){return J[0]==="[]"?"":J[1]||J[0]})}(F),H,Z,0)}),Z}return null};var mi={"Content-Type":void 0},ar={transitional:Aa,adapter:["xhr","http"],transformRequest:[function(U,W){var Z,F=W.getContentType()||"",H=F.indexOf("application/json")>-1,Y=Se.isObject(U);if(Y&&Se.isHTMLForm(U)&&(U=new FormData(U)),Se.isFormData(U))return H&&H?JSON.stringify(Ca(U)):U;if(Se.isArrayBuffer(U)||Se.isBuffer(U)||Se.isStream(U)||Se.isFile(U)||Se.isBlob(U))return U;if(Se.isArrayBufferView(U))return U.buffer;if(Se.isURLSearchParams(U))return W.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),U.toString();if(Y){if(F.indexOf("application/x-www-form-urlencoded")>-1)return function(ie,oe){return Wt(ie,new en.classes.URLSearchParams,Object.assign({visitor:function(be,ke,Oe,Ue){return en.isNode&&Se.isBuffer(be)?(this.append(ke,be.toString("base64")),!1):Ue.defaultVisitor.apply(this,arguments)}},oe))}(U,this.formSerializer).toString();if((Z=Se.isFileList(U))||F.indexOf("multipart/form-data")>-1){var J=this.env&&this.env.FormData;return Wt(Z?{"files[]":U}:U,J&&new J,this.formSerializer)}}return Y||H?(W.setContentType("application/json",!1),function(ie,oe,be){if(Se.isString(ie))try{return(0,JSON.parse)(ie),Se.trim(ie)}catch(ke){if(ke.name!=="SyntaxError")throw ke}return(0,JSON.stringify)(ie)}(U)):U}],transformResponse:[function(U){var W=this.transitional||ar.transitional,Z=W&&W.forcedJSONParsing,F=this.responseType==="json";if(U&&Se.isString(U)&&(Z&&!this.responseType||F)){var H=!(W&&W.silentJSONParsing)&&F;try{return JSON.parse(U)}catch(Y){if(H)throw Y.name==="SyntaxError"?Ze.from(Y,Ze.ERR_BAD_RESPONSE,this,null,this.response):Y}}return U}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:en.classes.FormData,Blob:en.classes.Blob},validateStatus:function(U){return U>=200&&U<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Se.forEach(["delete","get","head"],function(U){ar.headers[U]={}}),Se.forEach(["post","put","patch"],function(U){ar.headers[U]=Se.merge(mi)});const xr=ar;var _r=Se.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function wn(U){return wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},wn(U)}function Ta(U,W){(W==null||W>U.length)&&(W=U.length);for(var Z=0,F=new Array(W);Z<W;Z++)F[Z]=U[Z];return F}function ka(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(wn(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(wn(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),wn(H)==="symbol"?H:String(H)),F)}var H}var es=Symbol("internals");function Lr(U){return U&&String(U).trim().toLowerCase()}function wa(U){return U===!1||U==null?U:Se.isArray(U)?U.map(wa):String(U)}function ts(U,W,Z,F){return Se.isFunction(F)?F.call(this,W,Z):Se.isString(W)?Se.isString(F)?W.indexOf(F)!==-1:Se.isRegExp(F)?F.test(W):void 0:void 0}var xa=function(U,W){function Z(J){(function(ie,oe){if(!(ie instanceof oe))throw new TypeError("Cannot call a class as a function")})(this,Z),J&&this.set(J)}var F,H,Y;return F=Z,H=[{key:"set",value:function(J,ie,oe){var be=this;function ke(et,Pt,Ct){var ct=Lr(Pt);if(!ct)throw new Error("header name must be a non-empty string");var Ln=Se.findKey(be,ct);(!Ln||be[Ln]===void 0||Ct===!0||Ct===void 0&&be[Ln]!==!1)&&(be[Ln||Pt]=wa(et))}var Oe,Ue,He,We,Re,je=function(et,Pt){return Se.forEach(et,function(Ct,ct){return ke(Ct,ct,Pt)})};return Se.isPlainObject(J)||J instanceof this.constructor?je(J,ie):Se.isString(J)&&(J=J.trim())&&!/^[-_a-zA-Z]+$/.test(J.trim())?je((Re={},(Oe=J)&&Oe.split(`
`).forEach(function(et){We=et.indexOf(":"),Ue=et.substring(0,We).trim().toLowerCase(),He=et.substring(We+1).trim(),!Ue||Re[Ue]&&_r[Ue]||(Ue==="set-cookie"?Re[Ue]?Re[Ue].push(He):Re[Ue]=[He]:Re[Ue]=Re[Ue]?Re[Ue]+", "+He:He)}),Re),ie):J!=null&&ke(ie,J,oe),this}},{key:"get",value:function(J,ie){if(J=Lr(J)){var oe=Se.findKey(this,J);if(oe){var be=this[oe];if(!ie)return be;if(ie===!0)return function(ke){for(var Oe,Ue=Object.create(null),He=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;Oe=He.exec(ke);)Ue[Oe[1]]=Oe[2];return Ue}(be);if(Se.isFunction(ie))return ie.call(this,be,oe);if(Se.isRegExp(ie))return ie.exec(be);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(J,ie){if(J=Lr(J)){var oe=Se.findKey(this,J);return!(!oe||ie&&!ts(0,this[oe],oe,ie))}return!1}},{key:"delete",value:function(J,ie){var oe=this,be=!1;function ke(Oe){if(Oe=Lr(Oe)){var Ue=Se.findKey(oe,Oe);!Ue||ie&&!ts(0,oe[Ue],Ue,ie)||(delete oe[Ue],be=!0)}}return Se.isArray(J)?J.forEach(ke):ke(J),be}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(J){var ie=this,oe={};return Se.forEach(this,function(be,ke){var Oe=Se.findKey(oe,ke);if(Oe)return ie[Oe]=wa(be),void delete ie[ke];var Ue=J?function(He){return He.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(We,Re,je){return Re.toUpperCase()+je})}(ke):String(ke).trim();Ue!==ke&&delete ie[ke],ie[Ue]=wa(be),oe[Ue]=!0}),this}},{key:"concat",value:function(){for(var J,ie=arguments.length,oe=new Array(ie),be=0;be<ie;be++)oe[be]=arguments[be];return(J=this.constructor).concat.apply(J,[this].concat(oe))}},{key:"toJSON",value:function(J){var ie=Object.create(null);return Se.forEach(this,function(oe,be){oe!=null&&oe!==!1&&(ie[be]=J&&Se.isArray(oe)?oe.join(", "):oe)}),ie}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(J){var ie,oe,be=(oe=2,function(ke){if(Array.isArray(ke))return ke}(ie=J)||function(ke,Oe){var Ue=ke==null?null:typeof Symbol<"u"&&ke[Symbol.iterator]||ke["@@iterator"];if(Ue!=null){var He,We,Re,je,et=[],Pt=!0,Ct=!1;try{if(Re=(Ue=Ue.call(ke)).next,Oe===0){if(Object(Ue)!==Ue)return;Pt=!1}else for(;!(Pt=(He=Re.call(Ue)).done)&&(et.push(He.value),et.length!==Oe);Pt=!0);}catch(ct){Ct=!0,We=ct}finally{try{if(!Pt&&Ue.return!=null&&(je=Ue.return(),Object(je)!==je))return}finally{if(Ct)throw We}}return et}}(ie,oe)||function(ke,Oe){if(ke){if(typeof ke=="string")return Ta(ke,Oe);var Ue=Object.prototype.toString.call(ke).slice(8,-1);return Ue==="Object"&&ke.constructor&&(Ue=ke.constructor.name),Ue==="Map"||Ue==="Set"?Array.from(ke):Ue==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ue)?Ta(ke,Oe):void 0}}(ie,oe)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return be[0]+": "+be[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],Y=[{key:"from",value:function(J){return J instanceof this?J:new this(J)}},{key:"concat",value:function(J){for(var ie=new this(J),oe=arguments.length,be=new Array(oe>1?oe-1:0),ke=1;ke<oe;ke++)be[ke-1]=arguments[ke];return be.forEach(function(Oe){return ie.set(Oe)}),ie}},{key:"accessor",value:function(J){var ie=(this[es]=this[es]={accessors:{}}).accessors,oe=this.prototype;function be(ke){var Oe=Lr(ke);ie[Oe]||(function(Ue,He){var We=Se.toCamelCase(" "+He);["get","set","has"].forEach(function(Re){Object.defineProperty(Ue,Re+We,{value:function(je,et,Pt){return this[Re].call(this,He,je,et,Pt)},configurable:!0})})}(oe,ke),ie[Oe]=!0)}return Se.isArray(J)?J.forEach(be):be(J),this}}],H&&ka(F.prototype,H),Y&&ka(F,Y),Object.defineProperty(F,"prototype",{writable:!1}),Z}();xa.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),Se.freezeMethods(xa.prototype),Se.freezeMethods(xa);const An=xa;function gi(U,W){var Z=this||xr,F=W||Z,H=An.from(F.headers),Y=F.data;return Se.forEach(U,function(J){Y=J.call(Z,Y,H.normalize(),W?W.status:void 0)}),H.normalize(),Y}function ns(U){return!(!U||!U.__CANCEL__)}function rs(U,W,Z){Ze.call(this,U==null?"canceled":U,Ze.ERR_CANCELED,W,Z),this.name="CanceledError"}Se.inherits(rs,Ze,{__CANCEL__:!0});const _a=rs,zu=en.isStandardBrowserEnv?{write:function(U,W,Z,F,H,Y){var J=[];J.push(U+"="+encodeURIComponent(W)),Se.isNumber(Z)&&J.push("expires="+new Date(Z).toGMTString()),Se.isString(F)&&J.push("path="+F),Se.isString(H)&&J.push("domain="+H),Y===!0&&J.push("secure"),document.cookie=J.join("; ")},read:function(U){var W=document.cookie.match(new RegExp("(^|;\\s*)("+U+")=([^;]*)"));return W?decodeURIComponent(W[3]):null},remove:function(U){this.write(U,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function as(U,W){return U&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(W)?function(Z,F){return F?Z.replace(/\/+$/,"")+"/"+F.replace(/^\/+/,""):Z}(U,W):W}const Vu=en.isStandardBrowserEnv?function(){var U,W=/(msie|trident)/i.test(navigator.userAgent),Z=document.createElement("a");function F(H){var Y=H;return W&&(Z.setAttribute("href",Y),Y=Z.href),Z.setAttribute("href",Y),{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:Z.pathname.charAt(0)==="/"?Z.pathname:"/"+Z.pathname}}return U=F(window.location.href),function(H){var Y=Se.isString(H)?F(H):H;return Y.protocol===U.protocol&&Y.host===U.host}}():function(){return!0};function is(U,W){var Z=0,F=function(H,Y){H=H||10;var J,ie=new Array(H),oe=new Array(H),be=0,ke=0;return Y=Y!==void 0?Y:1e3,function(Oe){var Ue=Date.now(),He=oe[ke];J||(J=Ue),ie[be]=Oe,oe[be]=Ue;for(var We=ke,Re=0;We!==be;)Re+=ie[We++],We%=H;if((be=(be+1)%H)===ke&&(ke=(ke+1)%H),!(Ue-J<Y)){var je=He&&Ue-He;return je?Math.round(1e3*Re/je):void 0}}}(50,250);return function(H){var Y=H.loaded,J=H.lengthComputable?H.total:void 0,ie=Y-Z,oe=F(ie);Z=Y;var be={loaded:Y,total:J,progress:J?Y/J:void 0,bytes:ie,rate:oe||void 0,estimated:oe&&J&&Y<=J?(J-Y)/oe:void 0,event:H};be[W?"download":"upload"]=!0,U(be)}}var vi={http:null,xhr:typeof XMLHttpRequest<"u"&&function(U){return new Promise(function(W,Z){var F,H=U.data,Y=An.from(U.headers).normalize(),J=U.responseType;function ie(){U.cancelToken&&U.cancelToken.unsubscribe(F),U.signal&&U.signal.removeEventListener("abort",F)}Se.isFormData(H)&&(en.isStandardBrowserEnv||en.isStandardBrowserWebWorkerEnv)&&Y.setContentType(!1);var oe=new XMLHttpRequest;if(U.auth){var be=U.auth.username||"",ke=U.auth.password?unescape(encodeURIComponent(U.auth.password)):"";Y.set("Authorization","Basic "+btoa(be+":"+ke))}var Oe=as(U.baseURL,U.url);function Ue(){if(oe){var je=An.from("getAllResponseHeaders"in oe&&oe.getAllResponseHeaders());(function(et,Pt,Ct){var ct=Ct.config.validateStatus;Ct.status&&ct&&!ct(Ct.status)?Pt(new Ze("Request failed with status code "+Ct.status,[Ze.ERR_BAD_REQUEST,Ze.ERR_BAD_RESPONSE][Math.floor(Ct.status/100)-4],Ct.config,Ct.request,Ct)):et(Ct)})(function(et){W(et),ie()},function(et){Z(et),ie()},{data:J&&J!=="text"&&J!=="json"?oe.response:oe.responseText,status:oe.status,statusText:oe.statusText,headers:je,config:U,request:oe}),oe=null}}if(oe.open(U.method.toUpperCase(),yn(Oe,U.params,U.paramsSerializer),!0),oe.timeout=U.timeout,"onloadend"in oe?oe.onloadend=Ue:oe.onreadystatechange=function(){oe&&oe.readyState===4&&(oe.status!==0||oe.responseURL&&oe.responseURL.indexOf("file:")===0)&&setTimeout(Ue)},oe.onabort=function(){oe&&(Z(new Ze("Request aborted",Ze.ECONNABORTED,U,oe)),oe=null)},oe.onerror=function(){Z(new Ze("Network Error",Ze.ERR_NETWORK,U,oe)),oe=null},oe.ontimeout=function(){var je=U.timeout?"timeout of "+U.timeout+"ms exceeded":"timeout exceeded",et=U.transitional||Aa;U.timeoutErrorMessage&&(je=U.timeoutErrorMessage),Z(new Ze(je,et.clarifyTimeoutError?Ze.ETIMEDOUT:Ze.ECONNABORTED,U,oe)),oe=null},en.isStandardBrowserEnv){var He=(U.withCredentials||Vu(Oe))&&U.xsrfCookieName&&zu.read(U.xsrfCookieName);He&&Y.set(U.xsrfHeaderName,He)}H===void 0&&Y.setContentType(null),"setRequestHeader"in oe&&Se.forEach(Y.toJSON(),function(je,et){oe.setRequestHeader(et,je)}),Se.isUndefined(U.withCredentials)||(oe.withCredentials=!!U.withCredentials),J&&J!=="json"&&(oe.responseType=U.responseType),typeof U.onDownloadProgress=="function"&&oe.addEventListener("progress",is(U.onDownloadProgress,!0)),typeof U.onUploadProgress=="function"&&oe.upload&&oe.upload.addEventListener("progress",is(U.onUploadProgress)),(U.cancelToken||U.signal)&&(F=function(je){oe&&(Z(!je||je.type?new _a(null,U,oe):je),oe.abort(),oe=null)},U.cancelToken&&U.cancelToken.subscribe(F),U.signal&&(U.signal.aborted?F():U.signal.addEventListener("abort",F)));var We,Re=(We=/^([-+\w]{1,25})(:?\/\/|:)/.exec(Oe))&&We[1]||"";Re&&en.protocols.indexOf(Re)===-1?Z(new Ze("Unsupported protocol "+Re+":",Ze.ERR_BAD_REQUEST,U)):oe.send(H||null)})}};Se.forEach(vi,function(U,W){if(U){try{Object.defineProperty(U,"name",{value:W})}catch{}Object.defineProperty(U,"adapterName",{value:W})}});function yi(U){if(U.cancelToken&&U.cancelToken.throwIfRequested(),U.signal&&U.signal.aborted)throw new _a(null,U)}function os(U){return yi(U),U.headers=An.from(U.headers),U.data=gi.call(U,U.transformRequest),["post","put","patch"].indexOf(U.method)!==-1&&U.headers.setContentType("application/x-www-form-urlencoded",!1),function(W){for(var Z,F,H=(W=Se.isArray(W)?W:[W]).length,Y=0;Y<H&&(Z=W[Y],!(F=Se.isString(Z)?vi[Z.toLowerCase()]:Z));Y++);if(!F)throw F===!1?new Ze("Adapter ".concat(Z," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(Se.hasOwnProp(vi,Z)?"Adapter '".concat(Z,"' is not available in the build"):"Unknown adapter '".concat(Z,"'"));if(!Se.isFunction(F))throw new TypeError("adapter is not a function");return F}(U.adapter||xr.adapter)(U).then(function(W){return yi(U),W.data=gi.call(U,U.transformResponse,W),W.headers=An.from(W.headers),W},function(W){return ns(W)||(yi(U),W&&W.response&&(W.response.data=gi.call(U,U.transformResponse,W.response),W.response.headers=An.from(W.response.headers))),Promise.reject(W)})}var ss=function(U){return U instanceof An?U.toJSON():U};function ir(U,W){W=W||{};var Z={};function F(be,ke,Oe){return Se.isPlainObject(be)&&Se.isPlainObject(ke)?Se.merge.call({caseless:Oe},be,ke):Se.isPlainObject(ke)?Se.merge({},ke):Se.isArray(ke)?ke.slice():ke}function H(be,ke,Oe){return Se.isUndefined(ke)?Se.isUndefined(be)?void 0:F(void 0,be,Oe):F(be,ke,Oe)}function Y(be,ke){if(!Se.isUndefined(ke))return F(void 0,ke)}function J(be,ke){return Se.isUndefined(ke)?Se.isUndefined(be)?void 0:F(void 0,be):F(void 0,ke)}function ie(be,ke,Oe){return Oe in W?F(be,ke):Oe in U?F(void 0,be):void 0}var oe={url:Y,method:Y,data:Y,baseURL:J,transformRequest:J,transformResponse:J,paramsSerializer:J,timeout:J,timeoutMessage:J,withCredentials:J,adapter:J,responseType:J,xsrfCookieName:J,xsrfHeaderName:J,onUploadProgress:J,onDownloadProgress:J,decompress:J,maxContentLength:J,maxBodyLength:J,beforeRedirect:J,transport:J,httpAgent:J,httpsAgent:J,cancelToken:J,socketPath:J,responseEncoding:J,validateStatus:ie,headers:function(be,ke){return H(ss(be),ss(ke),!0)}};return Se.forEach(Object.keys(U).concat(Object.keys(W)),function(be){var ke=oe[be]||H,Oe=ke(U[be],W[be],be);Se.isUndefined(Oe)&&ke!==ie||(Z[be]=Oe)}),Z}function La(U){return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},La(U)}var Ai={};["object","boolean","number","function","string","symbol"].forEach(function(U,W){Ai[U]=function(Z){return La(Z)===U||"a"+(W<1?"n ":" ")+U}});var ls={};Ai.transitional=function(U,W,Z){function F(H,Y){return"[Axios v1.2.3] Transitional option '"+H+"'"+Y+(Z?". "+Z:"")}return function(H,Y,J){if(U===!1)throw new Ze(F(Y," has been removed"+(W?" in "+W:"")),Ze.ERR_DEPRECATED);return W&&!ls[Y]&&(ls[Y]=!0,console.warn(F(Y," has been deprecated since v"+W+" and will be removed in the near future"))),!U||U(H,Y,J)}};const bi={assertOptions:function(U,W,Z){if(La(U)!=="object")throw new Ze("options must be an object",Ze.ERR_BAD_OPTION_VALUE);for(var F=Object.keys(U),H=F.length;H-- >0;){var Y=F[H],J=W[Y];if(J){var ie=U[Y],oe=ie===void 0||J(ie,Y,U);if(oe!==!0)throw new Ze("option "+Y+" must be "+oe,Ze.ERR_BAD_OPTION_VALUE)}else if(Z!==!0)throw new Ze("Unknown option "+Y,Ze.ERR_BAD_OPTION)}},validators:Ai};function Dr(U){return Dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Dr(U)}function ju(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Dr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Dr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Dr(H)==="symbol"?H:String(H)),F)}var H}var xn=bi.validators,Da=function(){function U(F){(function(H,Y){if(!(H instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,U),this.defaults=F,this.interceptors={request:new rr,response:new rr}}var W,Z;return W=U,(Z=[{key:"request",value:function(F,H){typeof F=="string"?(H=H||{}).url=F:H=F||{};var Y,J=H=ir(this.defaults,H),ie=J.transitional,oe=J.paramsSerializer,be=J.headers;ie!==void 0&&bi.assertOptions(ie,{silentJSONParsing:xn.transitional(xn.boolean),forcedJSONParsing:xn.transitional(xn.boolean),clarifyTimeoutError:xn.transitional(xn.boolean)},!1),oe!==void 0&&bi.assertOptions(oe,{encode:xn.function,serialize:xn.function},!0),H.method=(H.method||this.defaults.method||"get").toLowerCase(),(Y=be&&Se.merge(be.common,be[H.method]))&&Se.forEach(["delete","get","head","post","put","patch","common"],function(ct){delete be[ct]}),H.headers=An.concat(Y,be);var ke=[],Oe=!0;this.interceptors.request.forEach(function(ct){typeof ct.runWhen=="function"&&ct.runWhen(H)===!1||(Oe=Oe&&ct.synchronous,ke.unshift(ct.fulfilled,ct.rejected))});var Ue,He=[];this.interceptors.response.forEach(function(ct){He.push(ct.fulfilled,ct.rejected)});var We,Re=0;if(!Oe){var je=[os.bind(this),void 0];for(je.unshift.apply(je,ke),je.push.apply(je,He),We=je.length,Ue=Promise.resolve(H);Re<We;)Ue=Ue.then(je[Re++],je[Re++]);return Ue}We=ke.length;var et=H;for(Re=0;Re<We;){var Pt=ke[Re++],Ct=ke[Re++];try{et=Pt(et)}catch(ct){Ct.call(this,ct);break}}try{Ue=os.call(this,et)}catch(ct){return Promise.reject(ct)}for(Re=0,We=He.length;Re<We;)Ue=Ue.then(He[Re++],He[Re++]);return Ue}},{key:"getUri",value:function(F){return yn(as((F=ir(this.defaults,F)).baseURL,F.url),F.params,F.paramsSerializer)}}])&&ju(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();Se.forEach(["delete","get","head","options"],function(U){Da.prototype[U]=function(W,Z){return this.request(ir(Z||{},{method:U,url:W,data:(Z||{}).data}))}}),Se.forEach(["post","put","patch"],function(U){function W(Z){return function(F,H,Y){return this.request(ir(Y||{},{method:U,headers:Z?{"Content-Type":"multipart/form-data"}:{},url:F,data:H}))}}Da.prototype[U]=W(),Da.prototype[U+"Form"]=W(!0)});const Ia=Da;function Ir(U){return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Ir(U)}function us(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Ir(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Ir(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Ir(H)==="symbol"?H:String(H)),F)}var H}var Yu=function(){function U(H){if(function(ie,oe){if(!(ie instanceof oe))throw new TypeError("Cannot call a class as a function")}(this,U),typeof H!="function")throw new TypeError("executor must be a function.");var Y;this.promise=new Promise(function(ie){Y=ie});var J=this;this.promise.then(function(ie){if(J._listeners){for(var oe=J._listeners.length;oe-- >0;)J._listeners[oe](ie);J._listeners=null}}),this.promise.then=function(ie){var oe,be=new Promise(function(ke){J.subscribe(ke),oe=ke}).then(ie);return be.cancel=function(){J.unsubscribe(oe)},be},H(function(ie,oe,be){J.reason||(J.reason=new _a(ie,oe,be),Y(J.reason))})}var W,Z,F;return W=U,Z=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(H){this.reason?H(this.reason):this._listeners?this._listeners.push(H):this._listeners=[H]}},{key:"unsubscribe",value:function(H){if(this._listeners){var Y=this._listeners.indexOf(H);Y!==-1&&this._listeners.splice(Y,1)}}}],F=[{key:"source",value:function(){var H;return{token:new U(function(Y){H=Y}),cancel:H}}}],Z&&us(W.prototype,Z),F&&us(W,F),Object.defineProperty(W,"prototype",{writable:!1}),U}();const Gu=Yu;function ds(U,W){(W==null||W>U.length)&&(W=U.length);for(var Z=0,F=new Array(W);Z<W;Z++)F[Z]=U[Z];return F}var Ei={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ei).forEach(function(U){var W,Z,F=(Z=2,function(J){if(Array.isArray(J))return J}(W=U)||function(J,ie){var oe=J==null?null:typeof Symbol<"u"&&J[Symbol.iterator]||J["@@iterator"];if(oe!=null){var be,ke,Oe,Ue,He=[],We=!0,Re=!1;try{if(Oe=(oe=oe.call(J)).next,ie===0){if(Object(oe)!==oe)return;We=!1}else for(;!(We=(be=Oe.call(oe)).done)&&(He.push(be.value),He.length!==ie);We=!0);}catch(je){Re=!0,ke=je}finally{try{if(!We&&oe.return!=null&&(Ue=oe.return(),Object(Ue)!==Ue))return}finally{if(Re)throw ke}}return He}}(W,Z)||function(J,ie){if(J){if(typeof J=="string")return ds(J,ie);var oe=Object.prototype.toString.call(J).slice(8,-1);return oe==="Object"&&J.constructor&&(oe=J.constructor.name),oe==="Map"||oe==="Set"?Array.from(J):oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe)?ds(J,ie):void 0}}(W,Z)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),H=F[0],Y=F[1];Ei[Y]=H});const Xu=Ei;var It=function U(W){var Z=new Ia(W),F=R(Ia.prototype.request,Z);return Se.extend(F,Ia.prototype,Z,{allOwnKeys:!0}),Se.extend(F,Z,null,{allOwnKeys:!0}),F.create=function(H){return U(ir(W,H))},F}(xr);It.Axios=Ia,It.CanceledError=_a,It.CancelToken=Gu,It.isCancel=ns,It.VERSION="1.2.3",It.toFormData=Wt,It.AxiosError=Ze,It.Cancel=It.CanceledError,It.all=function(U){return Promise.all(U)},It.spread=function(U){return function(W){return U.apply(null,W)}},It.isAxiosError=function(U){return Se.isObject(U)&&U.isAxiosError===!0},It.mergeConfig=ir,It.AxiosHeaders=An,It.formToJSON=function(U){return Ca(Se.isHTMLForm(U)?new FormData(U):U)},It.HttpStatusCode=Xu,It.default=It;const cs=It,Qu={send:function(U){cs.post(U.url,U.data).then(function(W){var Z=W.data;Z&&Z.code===0?U.success&&U.success(Z):U.error&&U.error(Z&&Z.msg)}).catch(function(W){console.error(W),U.error&&U.error()})},read:function(U){cs.get(U.url).then(function(W){var Z=W.data;Z&&Z.code===0?U.success&&U.success(Z.data.map(function(F){return{time:F[0],type:F[1],color:F[2],author:F[3],text:F[4]}})):U.error&&U.error(Z&&Z.msg)}).catch(function(W){console.error(W),U.error&&U.error()})}};function Si(U){return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Si(U)}function qu(U){var W=this;this.lang=U,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(Z){return Z=Z.toLowerCase(),or[W.lang]&&or[W.lang][Z]?or[W.lang][Z]:or[W.fallbackLang]&&or[W.fallbackLang][Z]?or[W.fallbackLang][Z]:Ci[Z]?Ci[Z]:Z}}var Ci={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},or={en:Ci,"zh-cn":{"danmaku-loading":"\u5F39\u5E55\u52A0\u8F7D\u4E2D",top:"\u9876\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EDA\u52A8","input-danmaku-enter":"\u8F93\u5165\u5F39\u5E55\uFF0C\u56DE\u8F66\u53D1\u9001","about-author":"\u5173\u4E8E\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u89C1\u53CD\u9988","about-dplayer":"\u5173\u4E8E DPlayer \u64AD\u653E\u5668",loop:"\u6D17\u8111\u5FAA\u73AF",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F39\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8981\u8F93\u5165\u5F39\u5E55\u5185\u5BB9\u554A\u5582\uFF01","set-danmaku-color":"\u8BBE\u7F6E\u5F39\u5E55\u989C\u8272","set-danmaku-type":"\u8BBE\u7F6E\u5F39\u5E55\u7C7B\u578B","show-danmaku":"\u663E\u793A\u5F39\u5E55","video-failed":"\u89C6\u9891\u52A0\u8F7D\u5931\u8D25","danmaku-failed":"\u5F39\u5E55\u52A0\u8F7D\u5931\u8D25","danmaku-send-failed":"\u5F39\u5E55\u53D1\u9001\u5931\u8D25","switching-quality":"\u6B63\u5728\u5207\u6362\u81F3 %q \u753B\u8D28","switched-quality":"\u5DF2\u7ECF\u5207\u6362\u81F3 %q \u753B\u8D28",ff:"\u5FEB\u8FDB %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u6D77\u91CF\u5F39\u5E55","send-danmaku":"\u53D1\u9001\u5F39\u5E55",setting:"\u8BBE\u7F6E",fullscreen:"\u5168\u5C4F","web-fullscreen":"\u9875\u9762\u5168\u5C4F",send:"\u53D1\u9001",screenshot:"\u622A\u56FE",airplay:"\u65E0\u7EBF\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u5173\u95ED","show-subs":"\u663E\u793A\u5B57\u5E55","hide-subs":"\u9690\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u89C6\u9891\u7EDF\u8BA1\u4FE1\u606F"},"zh-tw":{"danmaku-loading":"\u5F48\u5E55\u8F09\u5165\u4E2D",top:"\u9802\u90E8",bottom:"\u5E95\u90E8",rolling:"\u6EFE\u52D5","input-danmaku-enter":"\u8F38\u5165\u5F48\u5E55\uFF0CEnter \u767C\u9001","about-author":"\u95DC\u65BC\u4F5C\u8005","dplayer-feedback":"\u64AD\u653E\u5668\u610F\u898B\u56DE\u994B","about-dplayer":"\u95DC\u65BC DPlayer \u64AD\u653E\u5668",loop:"\u5FAA\u74B0\u64AD\u653E",speed:"\u901F\u5EA6","opacity-danmaku":"\u5F48\u5E55\u900F\u660E\u5EA6",normal:"\u6B63\u5E38","please-input-danmaku":"\u8ACB\u8F38\u5165\u5F48\u5E55\u5167\u5BB9\u554A\uFF01","set-danmaku-color":"\u8A2D\u5B9A\u5F48\u5E55\u984F\u8272","set-danmaku-type":"\u8A2D\u5B9A\u5F48\u5E55\u985E\u578B","show-danmaku":"\u986F\u793A\u5F48\u5E55","video-failed":"\u5F71\u7247\u8F09\u5165\u5931\u6557","danmaku-failed":"\u5F48\u5E55\u8F09\u5165\u5931\u6557","danmaku-send-failed":"\u5F48\u5E55\u767C\u9001\u5931\u6557","switching-quality":"\u6B63\u5728\u5207\u63DB\u81F3 %q \u756B\u8CEA","switched-quality":"\u5DF2\u7D93\u5207\u63DB\u81F3 %q \u756B\u8CEA",ff:"\u5FEB\u9032 %s \u79D2",rew:"\u5FEB\u9000 %s \u79D2","unlimited-danmaku":"\u5DE8\u91CF\u5F48\u5E55","send-danmaku":"\u767C\u9001\u5F48\u5E55",setting:"\u8A2D\u5B9A",fullscreen:"\u5168\u87A2\u5E55","web-fullscreen":"\u9801\u9762\u5168\u87A2\u5E55",send:"\u767C\u9001",screenshot:"\u622A\u5716",airplay:"\u7121\u7DDA\u6295\u5C4F",chromecast:"ChromeCast",subtitle:"\u5B57\u5E55",off:"\u95DC\u9589","show-subs":"\u986F\u793A\u5B57\u5E55","hide-subs":"\u96B1\u85CF\u5B57\u5E55",volume:"\u97F3\u91CF",live:"\u76F4\u64AD","video-info":"\u5F71\u7247\u7D71\u8A08\u8A0A\u606F"},"ko-kr":{"danmaku-loading":"Danmaku\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku\uB97C \uC785\uB825\uD558\uACE0 Enter\uB97C \uB204\uB974\uC138\uC694.","about-author":"\uB9CC\uB4E0\uC774","dplayer-feedback":"\uD53C\uB4DC\uBC31 \uBCF4\uB0B4\uAE30","about-dplayer":"DPlayer \uC815\uBCF4",loop:"\uBC18\uBCF5",speed:"\uBC30\uC18D","opacity-danmaku":"Danmaku \uBD88\uD22C\uBA85\uB3C4",normal:"\uD45C\uC900","please-input-danmaku":"Danmaku\uB97C \uC785\uB825\uD558\uC138\uC694!","set-danmaku-color":"Danmaku \uC0C9\uC0C1","set-danmaku-type":"Danmaku \uC124\uC815","show-danmaku":"Danmaku \uD45C\uC2DC","video-failed":"\uBE44\uB514\uC624\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-failed":"Danmaku\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.","danmaku-send-failed":"Danmaku \uC804\uC1A1\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.","Switching to":"","Switched to":"","switching-quality":"\uC804\uD658 %q \uD654\uC9C8","switched-quality":"\uC804\uD658 \uB428 %q \uD654\uC9C8",ff:"\uC55E\uC73C\uB85C %s \uCD08",rew:"\uB4A4\uB85C %s \uCD08","unlimited-danmaku":"\uB05D\uC5C6\uB294 Danmaku","send-danmaku":"Danmaku \uBCF4\uB0B4\uAE30",setting:"\uC124\uC815",fullscreen:"\uC804\uCCB4 \uD654\uBA74","web-fullscreen":"\uC6F9 \uB0B4 \uC804\uCCB4\uD654\uBA74",send:"\uBCF4\uB0B4\uAE30",screenshot:"\uD654\uBA74 \uCEA1\uCCD0",airplay:"\uC5D0\uC5B4\uD50C\uB808\uC774",chromecast:"ChromeCast",subtitle:"\uBD80\uC81C",off:"\uB044\uB2E4","show-subs":"\uC790\uB9C9 \uBCF4\uC774\uAE30","hide-subs":"\uC790\uB9C9 \uC228\uAE30\uAE30",Volume:"\uBCFC\uB968",live:"\uC0DD\uBC29\uC1A1","video-info":"\uBE44\uB514\uC624 \uC815\uBCF4"},de:{"danmaku-loading":"Danmaku l\xE4dt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Dr\xFCcke Enter nach dem Einf\xFCgen vom Danmaku","about-author":"\xDCber den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"\xDCber DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz f\xFCr Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualit\xE4t","switched-quality":"Zur %q Qualit\xE4t gewechselt",ff:"%s s Vorw\xE4rts",rew:"%s s Zur\xFCck","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schlie\xDFung","hide-subs":"Verstecke Untertitel",volume:"Lautst\xE4rke",live:"Live","video-info":"Video Info"}},Zu=l(730),Ju=l.n(Zu),ed=l(74),td=l.n(ed),nd=l(437),rd=l.n(nd),ad=l(644),id=l.n(ad),od=l(324),sd=l.n(od),ld=l(574),ud=l.n(ld),dd=l(300),cd=l.n(dd),fd=l(934),pd=l.n(fd),hd=l(428),md=l.n(hd),gd=l(807),vd=l.n(gd),yd=l(338),Ad=l.n(yd),bd=l(254),Ed=l.n(bd),Sd=l(965),Cd=l.n(Sd),Td=l(113),kd=l.n(Td),wd=l(251),xd=l.n(wd),_d=l(410),Ld=l.n(_d),Dd=l(182),Id=l.n(Dd),Pd=l(193),Od=l.n(Pd);const sn={play:Ju(),pause:td(),volumeUp:rd(),volumeDown:id(),volumeOff:sd(),full:ud(),fullWeb:cd(),setting:pd(),right:md(),comment:vd(),commentOff:Ad(),send:Ed(),pallette:Cd(),camera:kd(),subtitle:Ld(),loading:Id(),airplay:xd(),chromecast:Od()};var Rd=l(916),Md=l.n(Rd);function Pr(U){return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Pr(U)}function fs(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Pr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Pr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Pr(H)==="symbol"?H:String(H)),F)}var H}var Bd=function(){function U(H){(function(Y,J){if(!(Y instanceof J))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=H.container,this.options=H.options,this.index=H.index,this.tran=H.tran,this.init()}var W,Z,F;return W=U,F=[{key:"NewNotice",value:function(H,Y,J){var ie=document.createElement("div");return ie.classList.add("dplayer-notice"),ie.style.opacity=Y,ie.innerText=H,J&&(ie.id="dplayer-notice-".concat(J)),ie}}],(Z=[{key:"init",value:function(){this.container.innerHTML=Md()({options:this.options,index:this.index,tran:this.tran,icons:sn,mobile:p.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!p.isSafari||p.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&fs(W.prototype,Z),F&&fs(W,F),Object.defineProperty(W,"prototype",{writable:!1}),U}();const ps=Bd;function sr(U){return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},sr(U)}function $d(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(sr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(sr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),sr(H)==="symbol"?H:String(H)),F)}var H}var Nd=function(){function U(F){(function(H,Y){if(!(H instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,U),this.options=F,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var W,Z;return W=U,Z=[{key:"load",value:function(){var F,H=this;F=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var Y=(this.options.api.addition||[]).slice(0);Y.push(F),this.events&&this.events.trigger("danmaku_load_start",Y),this._readAllEndpoints(Y,function(J){H.dan=[].concat.apply([],J).sort(function(ie,oe){return ie.time-oe.time}),window.requestAnimationFrame(function(){H.frame()}),H.options.callback(),H.events&&H.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(F){this.options.api=F,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(F,H){for(var Y=this,J=[],ie=0,oe=function(ke){Y.options.apiBackend.read({url:F[ke],success:function(Oe){J[ke]=Oe,++ie===F.length&&H(J)},error:function(Oe){Y.options.error(Oe||Y.options.tran("danmaku-failed")),J[ke]=[],++ie===F.length&&H(J)}})},be=0;be<F.length;++be)oe(be)}},{key:"send",value:function(F,H){var Y=this,J={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:F.text,color:F.color,type:F.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:J,success:H,error:function(oe){Y.options.error(oe||Y.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,J),this.danIndex++;var ie={text:this.htmlEncode(J.text),color:J.color,type:J.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(ie),this.events&&this.events.trigger("danmaku_send",J)}},{key:"frame",value:function(){var F=this;if(this.dan.length&&!this.paused&&this.showing){for(var H=this.dan[this.danIndex],Y=[];H&&this.options.time()>parseFloat(H.time);)Y.push(H),H=this.dan[++this.danIndex];this.draw(Y)}window.requestAnimationFrame(function(){F.frame()})}},{key:"opacity",value:function(F){if(F!==void 0){for(var H=this.container.getElementsByClassName("dplayer-danmaku-item"),Y=0;Y<H.length;Y++)H[Y].style.opacity=F;this._opacity=F,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(F){var H=this;if(this.showing){var Y=this.options.height,J=this.container.offsetWidth,ie=this.container.offsetHeight,oe=parseInt(ie/Y),be=function(Re){var je=Re.offsetWidth||parseInt(Re.style.width),et=Re.getBoundingClientRect().right||H.container.getBoundingClientRect().right+je;return H.container.getBoundingClientRect().right-et},ke=function(Re){return(J+Re)/5},Oe=function(Re,je,et){for(var Pt=J/ke(et),Ct=function(Un){var ur=H.danTunnel[je][Un+""];if(!ur||!ur.length)return H.danTunnel[je][Un+""]=[Re],Re.addEventListener("animationend",function(){H.danTunnel[je][Un+""].splice(0,1)}),{v:Un%oe};if(je!=="right")return"continue";for(var Xr=0;Xr<ur.length;Xr++){var As=be(ur[Xr])-10;if(As<=J-Pt*ke(parseInt(ur[Xr].style.width))||As<=0)break;if(Xr===ur.length-1)return H.danTunnel[je][Un+""].push(Re),Re.addEventListener("animationend",function(){H.danTunnel[je][Un+""].splice(0,1)}),{v:Un%oe}}},ct=0;H.unlimited||ct<oe;ct++){var Ln=Ct(ct);if(Ln!=="continue"&&sr(Ln)==="object")return Ln.v}return-1};Object.prototype.toString.call(F)!=="[object Array]"&&(F=[F]);for(var Ue=document.createDocumentFragment(),He=function(){F[We].type=p.number2Type(F[We].type),F[We].color||(F[We].color=16777215);var Re=document.createElement("div");Re.classList.add("dplayer-danmaku-item"),Re.classList.add("dplayer-danmaku-".concat(F[We].type)),F[We].border?Re.innerHTML='<span style="border:'.concat(F[We].border,'">').concat(F[We].text,"</span>"):Re.innerHTML=F[We].text,Re.style.opacity=H._opacity,Re.style.color=p.number2Color(F[We].color),Re.addEventListener("animationend",function(){H.container.removeChild(Re)});var je,et=H._measure(F[We].text);switch(F[We].type){case"right":(je=Oe(Re,F[We].type,et))>=0&&(Re.style.width=et+1+"px",Re.style.top=Y*je+"px",Re.style.transform="translateX(-".concat(J,"px)"));break;case"top":(je=Oe(Re,F[We].type))>=0&&(Re.style.top=Y*je+"px");break;case"bottom":(je=Oe(Re,F[We].type))>=0&&(Re.style.bottom=Y*je+"px");break;default:console.error("Can't handled danmaku type: ".concat(F[We].type))}je>=0&&(Re.classList.add("dplayer-danmaku-move"),Re.style.animationDuration=H._danAnimation(F[We].type),Ue.appendChild(Re))},We=0;We<F.length;We++)He();return this.container.appendChild(Ue),Ue}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(F){if(!this.context){var H=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=H.getPropertyValue("font")}return this.context.measureText(F).width}},{key:"seek",value:function(){this.clear();for(var F=0;F<this.dan.length;F++){if(this.dan[F].time>=this.options.time()){this.danIndex=F;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(F){return F.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var F=this.container.offsetWidth,H=this.container.getElementsByClassName("dplayer-danmaku-item"),Y=0;Y<H.length;Y++)H[Y].style.transform="translateX(-".concat(F,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(F){this.unlimited=F}},{key:"speed",value:function(F){this.options.api.speedRate=F}},{key:"_danAnimation",value:function(F){var H=this.options.api.speedRate||1,Y=!!this.player.fullScreen.isFullScreen();return{top:"".concat((Y?6:4)/H,"s"),right:"".concat((Y?8:5)/H,"s"),bottom:"".concat((Y?6:4)/H,"s")}[F]}}],Z&&$d(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const Fd=Nd;function Or(U){return Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Or(U)}function Ud(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Or(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Or(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Or(H)==="symbol"?H:String(H)),F)}var H}const Kd=function(){function U(){(function(F,H){if(!(F instanceof H))throw new TypeError("Cannot call a class as a function")})(this,U),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var W,Z;return W=U,(Z=[{key:"on",value:function(F,H){this.type(F)&&typeof H=="function"&&(this.events[F]||(this.events[F]=[]),this.events[F].push(H))}},{key:"trigger",value:function(F,H){if(this.events[F]&&this.events[F].length)for(var Y=0;Y<this.events[F].length;Y++)this.events[F][Y](H)}},{key:"type",value:function(F){return this.playerEvents.indexOf(F)!==-1?"player":this.videoEvents.indexOf(F)!==-1?"video":(console.error("Unknown event name: ".concat(F)),null)}}])&&Ud(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();function Rr(U){return Rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Rr(U)}function Wd(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Rr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Rr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Rr(H)==="symbol"?H:String(H)),F)}var H}var Hd=function(){function U(F){var H=this;(function(Y,J){if(!(Y instanceof J))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=F,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){H.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){H.player.resize(),p.setScrollPosition(H.lastScrollPosition)}),this.fullscreenchange=function(){H.player.resize(),H.isFullScreen("browser")?H.player.events.trigger("fullscreen"):(p.setScrollPosition(H.lastScrollPosition),H.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var Y=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;Y&&Y!==H.player.container||(H.player.resize(),Y?H.player.events.trigger("fullscreen"):(p.setScrollPosition(H.lastScrollPosition),H.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var W,Z;return W=U,Z=[{key:"isFullScreen",value:function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(F){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",H=F==="browser"?"web":"browser",Y=this.isFullScreen(H);switch(Y||(this.lastScrollPosition=p.getScrollPosition()),F){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}Y&&this.cancel(H)}},{key:"cancel",value:function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(F){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(F)?this.cancel(F):this.request(F)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],Z&&Wd(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const zd=Hd;function Mr(U){return Mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Mr(U)}function Vd(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Mr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Mr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Mr(H)==="symbol"?H:String(H)),F)}var H}var jd=function(){function U(F){(function(H,Y){if(!(H instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,U),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:F.options.hasOwnProperty("volume")?F.options.volume:.7,unlimited:(F.options.danmaku&&F.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var W,Z;return W=U,(Z=[{key:"init",value:function(){for(var F in this.storageName){var H=this.storageName[F];this.data[F]=parseFloat(p.storage.get(H)||this.default[F])}}},{key:"get",value:function(F){return this.data[F]}},{key:"set",value:function(F,H){this.data[F]=H,p.storage.set(this.storageName[F],H)}}])&&Vd(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const Yd=jd;function Br(U){return Br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Br(U)}function Gd(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Br(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Br(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Br(H)==="symbol"?H:String(H)),F)}var H}var Xd=function(){function U(F,H,Y,J){(function(ie,oe){if(!(ie instanceof oe))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=F,this.video=H,this.options=Y,this.events=J,this.init()}var W,Z;return W=U,Z=[{key:"init",value:function(){var F=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var H=this.video.textTracks[0];H.oncuechange=function(){var Y=H.activeCues[H.activeCues.length-1];if(F.container.innerHTML="",Y){var J=document.createElement("div");J.appendChild(Y.getCueAsHTML());var ie=J.innerHTML.split(/\r?\n/).map(function(oe){return"<p>".concat(oe,"</p>")}).join("");F.container.innerHTML=ie}F.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],Z&&Gd(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const Qd=Xd;function $r(U){return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},$r(U)}function qd(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if($r(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if($r(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),$r(H)==="symbol"?H:String(H)),F)}var H}var Zd=function(){function U(F){var H=this;(function(oe,be){if(!(oe instanceof be))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=F,this.player.template.mask.addEventListener("click",function(){H.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){H.adaptiveHeight(),H.show()});for(var Y=this.player.template.subtitlesItem.length-1,J=function(oe){H.player.template.subtitlesItem[oe].addEventListener("click",function(){H.hide(),H.player.options.subtitle.index!==oe&&(H.player.template.subtitle.innerHTML="<p></p>",H.player.template.subtrack.src=H.player.template.subtitlesItem[oe].dataset.subtitle,H.player.options.subtitle.index=oe,H.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&H.subContainerShow())})},ie=0;ie<Y;ie++)J(ie);this.player.template.subtitlesItem[Y].addEventListener("click",function(){H.hide(),H.player.options.subtitle.index!==Y&&(H.player.template.subtitle.innerHTML="<p></p>",H.player.template.subtrack.src="",H.player.options.subtitle.index=Y,H.subContainerHide())})}var W,Z;return W=U,(Z=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var F=30*this.player.template.subtitlesItem.length+14,H=.8*this.player.template.videoWrap.offsetHeight;F>=H-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=H-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=H-50+"px")}}])&&qd(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const Jd=Zd;function Nr(U){return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Nr(U)}function ec(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Nr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Nr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Nr(H)==="symbol"?H:String(H)),F)}var H}var tc=function(){function U(F){(function(H,Y){if(!(H instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,U),this.elements={},this.elements.volume=F.volumeBar,this.elements.played=F.playedBar,this.elements.loaded=F.loadedBar,this.elements.danmaku=F.danmakuOpacityBar}var W,Z;return W=U,(Z=[{key:"set",value:function(F,H,Y){H=Math.max(H,0),H=Math.min(H,1),this.elements[F].style[Y]=100*H+"%"}},{key:"get",value:function(F){return parseFloat(this.elements[F].style.width)/100}}])&&ec(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const nc=tc;function Fr(U){return Fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Fr(U)}function rc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Fr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Fr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Fr(H)==="symbol"?H:String(H)),F)}var H}var ac=function(){function U(F){(function(H,Y){if(!(H instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=F,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(H){window.setTimeout(H,1e3/60)},this.types=["loading","info","fps"],this.init()}var W,Z;return W=U,(Z=[{key:"init",value:function(){var F=this;this.types.map(function(H){return H!=="fps"&&F["init".concat(H,"Checker")](),H})}},{key:"initloadingChecker",value:function(){var F=this,H=0,Y=0,J=!1;this.loadingChecker=setInterval(function(){F.enableloadingChecker&&(Y=F.player.video.currentTime,J||Y!==H||F.player.video.paused||(F.player.container.classList.add("dplayer-loading"),J=!0),J&&Y>H&&!F.player.video.paused&&(F.player.container.classList.remove("dplayer-loading"),J=!1),H=Y)},100)}},{key:"initfpsChecker",value:function(){var F=this;window.requestAnimationFrame(function(){if(F.enablefpsChecker)if(F.initfpsChecker(),F.fpsStart){F.fpsIndex++;var H=new Date;H-F.fpsStart>1e3&&(F.player.infoPanel.fps(F.fpsIndex/(H-F.fpsStart)*1e3),F.fpsStart=new Date,F.fpsIndex=0)}else F.fpsStart=new Date,F.fpsIndex=0;else F.fpsStart=0,F.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var F=this;this.infoChecker=setInterval(function(){F.enableinfoChecker&&F.player.infoPanel.update()},1e3)}},{key:"enable",value:function(F){this["enable".concat(F,"Checker")]=!0,F==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(F){this["enable".concat(F,"Checker")]=!1}},{key:"destroy",value:function(){var F=this;this.types.map(function(H){return F["enable".concat(H,"Checker")]=!1,F["".concat(H,"Checker")]&&clearInterval(F["".concat(H,"Checker")]),H})}}])&&rc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const ic=ac;function Ur(U){return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Ur(U)}function oc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Ur(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Ur(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Ur(H)==="symbol"?H:String(H)),F)}var H}const sc=function(){function U(F){var H=this;(function(Y,J){if(!(Y instanceof J))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=F,this.container.addEventListener("animationend",function(){H.container.classList.remove("dplayer-bezel-transition")})}var W,Z;return W=U,(Z=[{key:"switch",value:function(F){this.container.innerHTML=F,this.container.classList.add("dplayer-bezel-transition")}}])&&oc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();function Kr(U){return Kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Kr(U)}function lc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Kr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Kr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Kr(H)==="symbol"?H:String(H)),F)}var H}var uc=function(){function U(F){(function(H,Y){if(!(H instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=F.container,this.barWidth=F.barWidth,this.container.style.backgroundImage="url('".concat(F.url,"')"),this.events=F.events}var W,Z;return W=U,(Z=[{key:"resize",value:function(F,H,Y){this.container.style.width="".concat(F,"px"),this.container.style.height="".concat(H,"px"),this.container.style.top="".concat(2-H,"px"),this.barWidth=Y}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(F){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(F/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(F-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&lc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const dc=uc;function Wr(U){return Wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Wr(U)}function cc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Wr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Wr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Wr(H)==="symbol"?H:String(H)),F)}var H}var _n,hs=!0,Ti=!1,fc=function(){function U(F){(function(H,Y){if(!(H instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=F,this.autoHideTimer=0,p.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),p.isMobile||this.initVolumeButton()}var W,Z;return W=U,(Z=[{key:"initPlayButton",value:function(){var F=this;this.player.template.playButton.addEventListener("click",function(){F.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){F.player.toggle()}),p.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){F.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){F.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){F.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){F.player.toggle()}))}},{key:"initHighlights",value:function(){var F=this;this.player.on("durationchange",function(){if(F.player.video.duration!==1&&F.player.video.duration!==1/0&&F.player.options.highlight){var H=F.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(H,0).forEach(function(ie){F.player.template.playedBarWrap.removeChild(ie)});for(var Y=0;Y<F.player.options.highlight.length;Y++)if(F.player.options.highlight[Y].text&&F.player.options.highlight[Y].time){var J=document.createElement("div");J.classList.add("dplayer-highlight"),J.style.left=F.player.options.highlight[Y].time/F.player.video.duration*100+"%",J.innerHTML='<span class="dplayer-highlight-text">'+F.player.options.highlight[Y].text+"</span>",F.player.template.playedBarWrap.insertBefore(J,F.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var F=this;this.player.options.video.thumbnails&&(this.thumbnails=new dc({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){F.thumbnails.resize(160,F.player.video.videoHeight/F.player.video.videoWidth*160,F.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var F=this,H=function(J){var ie=((J.clientX||J.changedTouches[0].clientX)-p.getBoundingClientRectViewLeft(F.player.template.playedBarWrap))/F.player.template.playedBarWrap.clientWidth;ie=Math.max(ie,0),ie=Math.min(ie,1),F.player.bar.set("played",ie,"width"),F.player.template.ptime.innerHTML=p.secondToTime(ie*F.player.video.duration)},Y=function J(ie){document.removeEventListener(p.nameMap.dragEnd,J),document.removeEventListener(p.nameMap.dragMove,H);var oe=((ie.clientX||ie.changedTouches[0].clientX)-p.getBoundingClientRectViewLeft(F.player.template.playedBarWrap))/F.player.template.playedBarWrap.clientWidth;oe=Math.max(oe,0),oe=Math.min(oe,1),F.player.bar.set("played",oe,"width"),F.player.seek(F.player.bar.get("played")*F.player.video.duration),F.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(p.nameMap.dragStart,function(){F.player.timer.disable("progress"),document.addEventListener(p.nameMap.dragMove,H),document.addEventListener(p.nameMap.dragEnd,Y)}),this.player.template.playedBarWrap.addEventListener(p.nameMap.dragMove,function(J){if(F.player.video.duration){var ie=F.player.template.playedBarWrap.getBoundingClientRect().left,oe=(J.clientX||J.changedTouches[0].clientX)-ie;if(oe<0||oe>F.player.template.playedBarWrap.offsetWidth)return;var be=F.player.video.duration*(oe/F.player.template.playedBarWrap.offsetWidth);p.isMobile&&F.thumbnails&&F.thumbnails.show(),F.thumbnails&&F.thumbnails.move(oe),F.player.template.playedBarTime.style.left="".concat(oe-(be>=3600?25:20),"px"),F.player.template.playedBarTime.innerText=p.secondToTime(be),F.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(p.nameMap.dragEnd,function(){p.isMobile&&F.thumbnails&&F.thumbnails.hide()}),p.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){F.player.video.duration&&(F.thumbnails&&F.thumbnails.show(),F.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){F.player.video.duration&&(F.thumbnails&&F.thumbnails.hide(),F.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var F=this;this.player.template.browserFullButton.addEventListener("click",function(){F.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){F.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var F=this,H=function(J){var ie=J||window.event,oe=((ie.clientX||ie.changedTouches[0].clientX)-p.getBoundingClientRectViewLeft(F.player.template.volumeBarWrap)-5.5)/35;F.player.volume(oe)},Y=function J(){document.removeEventListener(p.nameMap.dragEnd,J),document.removeEventListener(p.nameMap.dragMove,H),F.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(J){var ie=J||window.event,oe=((ie.clientX||ie.changedTouches[0].clientX)-p.getBoundingClientRectViewLeft(F.player.template.volumeBarWrap)-5.5)/35;F.player.volume(oe)}),this.player.template.volumeBarWrapWrap.addEventListener(p.nameMap.dragStart,function(){document.addEventListener(p.nameMap.dragMove,H),document.addEventListener(p.nameMap.dragEnd,Y),F.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){F.player.video.muted?(F.player.video.muted=!1,F.player.switchVolumeIcon(),F.player.bar.set("volume",F.player.volume(),"width")):(F.player.video.muted=!0,F.player.template.volumeIcon.innerHTML=sn.volumeOff,F.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var F=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(H){H.target.classList.contains("dplayer-quality-item")&&F.player.switchQuality(H.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var F=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var H,Y=document.createElement("canvas");Y.width=F.player.video.videoWidth,Y.height=F.player.video.videoHeight,Y.getContext("2d").drawImage(F.player.video,0,0,Y.width,Y.height),Y.toBlob(function(J){H=URL.createObjectURL(J);var ie=document.createElement("a");ie.href=H,ie.download="DPlayer.png",ie.style.display="none",document.body.appendChild(ie),ie.click(),document.body.removeChild(ie),URL.revokeObjectURL(H),F.player.events.trigger("screenshot",H)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(F){F.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var F=window.document.createElement("script");F.setAttribute("type","text/javascript"),F.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(F),window.__onGCastApiAvailable=function(H){if(H){var Y=new(_n=window.chrome.cast).SessionRequest(_n.media.DEFAULT_MEDIA_RECEIVER_APP_ID),J=new _n.ApiConfig(Y,function(){},function(ie){ie===_n.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",ie)});_n.initialize(J,function(){})}}}},{key:"initChromecastButton",value:function(){var F=this;if(this.player.options.chromecast){hs&&(hs=!1,this.initChromecast());var H=function(J,ie){F.currentMedia=ie},Y=function(J){console.error("Error launching media",J)};this.player.template.chromecastButton.addEventListener("click",function(){Ti?(Ti=!1,F.currentMedia.stop(),F.session.stop(),F.initChromecast()):(Ti=!0,_n.requestSession(function(J){var ie,oe,be;F.session=J,ie=F.player.options.video.url,oe=new _n.media.MediaInfo(ie),be=new _n.media.LoadRequest(oe),F.session?F.session.loadMedia(be,H.bind(F,"loadMedia"),Y).play():window.open(ie)},function(J){J.code==="cancel"?F.session=void 0:console.error("Error selecting a cast device",J)}))})}}},{key:"initSubtitleButton",value:function(){var F=this;this.player.events.on("subtitle_show",function(){F.player.template.subtitleButton.dataset.balloon=F.player.tran("hide-subs"),F.player.template.subtitleButtonInner.style.opacity="",F.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){F.player.template.subtitleButton.dataset.balloon=F.player.tran("show-subs"),F.player.template.subtitleButtonInner.style.opacity="0.4",F.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){F.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var F=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!F.player.video.played.length||F.player.paused||F.disableAutoHide||F.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){p.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&cc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const pc=fc;function Hr(U){return Hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Hr(U)}function hc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Hr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Hr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Hr(H)==="symbol"?H:String(H)),F)}var H}var mc=function(){function U(F){var H=this;(function(be,ke){if(!(be instanceof ke))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=F,this.player.template.mask.addEventListener("click",function(){H.hide()}),this.player.template.settingButton.addEventListener("click",function(){H.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){H.player.template.loopToggle.checked=!H.player.template.loopToggle.checked,H.player.template.loopToggle.checked?H.loop=!0:H.loop=!1,H.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){H.player.template.showDanmakuToggle.checked=!H.player.template.showDanmakuToggle.checked,H.player.template.showDanmakuToggle.checked?(H.showDanmaku=!0,H.player.danmaku.show()):(H.showDanmaku=!1,H.player.danmaku.hide()),H.player.user.set("danmaku",H.showDanmaku?1:0),H.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){H.player.template.unlimitDanmakuToggle.checked=!H.player.template.unlimitDanmakuToggle.checked,H.player.template.unlimitDanmakuToggle.checked?(H.unlimitDanmaku=!0,H.player.danmaku.unlimit(!0)):(H.unlimitDanmaku=!1,H.player.danmaku.unlimit(!1)),H.player.user.set("unlimited",H.unlimitDanmaku?1:0),H.hide()}),this.player.template.speed.addEventListener("click",function(){H.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),H.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var Y=function(be){H.player.template.speedItem[be].addEventListener("click",function(){H.player.speed(H.player.template.speedItem[be].dataset.speed),H.hide()})},J=0;J<this.player.template.speedItem.length;J++)Y(J);if(this.player.danmaku){this.player.on("danmaku_opacity",function(be){H.player.bar.set("danmaku",be,"width"),H.player.user.set("opacity",be)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var ie=function(be){var ke=be||window.event,Oe=((ke.clientX||ke.changedTouches[0].clientX)-p.getBoundingClientRectViewLeft(H.player.template.danmakuOpacityBarWrap))/130;Oe=Math.max(Oe,0),Oe=Math.min(Oe,1),H.player.danmaku.opacity(Oe)},oe=function be(){document.removeEventListener(p.nameMap.dragEnd,be),document.removeEventListener(p.nameMap.dragMove,ie),H.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(be){var ke=be||window.event,Oe=((ke.clientX||ke.changedTouches[0].clientX)-p.getBoundingClientRectViewLeft(H.player.template.danmakuOpacityBarWrap))/130;Oe=Math.max(Oe,0),Oe=Math.min(Oe,1),H.player.danmaku.opacity(Oe)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(p.nameMap.dragStart,function(){document.addEventListener(p.nameMap.dragMove,ie),document.addEventListener(p.nameMap.dragEnd,oe),H.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var W,Z;return W=U,(Z=[{key:"hide",value:function(){var F=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){F.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),F.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&hc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const gc=mc;function zr(U){return zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},zr(U)}function vc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(zr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(zr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),zr(H)==="symbol"?H:String(H)),F)}var H}var yc=function(){function U(F){var H=this;(function(Y,J){if(!(Y instanceof J))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=F,this.player.template.mask.addEventListener("click",function(){H.hide()}),this.player.template.commentButton.addEventListener("click",function(){H.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){H.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(H.player.template.commentColorSettingBox.querySelector("input:checked+span")){var Y=H.player.template.commentColorSettingBox.querySelector("input:checked").value;H.player.template.commentSettingFill.style.fill=Y,H.player.template.commentInput.style.color=Y,H.player.template.commentSendFill.style.fill=Y}}),this.player.template.commentInput.addEventListener("click",function(){H.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(Y){(Y||window.event).keyCode===13&&H.send()}),this.player.template.commentSendButton.addEventListener("click",function(){H.send()})}var W,Z;return W=U,(Z=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var F=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:p.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){F.player.template.commentInput.value="",F.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&vc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const Ac=yc;function Vr(U){return Vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Vr(U)}function bc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Vr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Vr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Vr(H)==="symbol"?H:String(H)),F)}var H}var Ec=function(){function U(F){(function(H,Y){if(!(H instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=F,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var W,Z;return W=U,(Z=[{key:"doHotKey",value:function(F){if(this.player.focus){var H=document.activeElement.tagName.toUpperCase(),Y=document.activeElement.getAttribute("contenteditable");if(H!=="INPUT"&&H!=="TEXTAREA"&&Y!==""&&Y!=="true"){var J,ie=F||window.event;switch(ie.keyCode){case 32:ie.preventDefault(),this.player.toggle();break;case 37:if(ie.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(ie.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:ie.preventDefault(),J=this.player.volume()+.1,this.player.volume(J);break;case 40:ie.preventDefault(),J=this.player.volume()-.1,this.player.volume(J)}}}}},{key:"cancelFullScreen",value:function(F){(F||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&bc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const Sc=Ec;function jr(U){return jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},jr(U)}function Cc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(jr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(jr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),jr(H)==="symbol"?H:String(H)),F)}var H}var Tc=function(){function U(F){var H=this;(function(Y,J){if(!(Y instanceof J))throw new TypeError("Cannot call a class as a function")})(this,U),this.player=F,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(Y,J){H.player.options.contextmenu[J].click&&Y.addEventListener("click",function(){H.player.options.contextmenu[J].click(H.player),H.hide()})}),this.contextmenuHandler=function(Y){if(H.shown)H.hide();else{var J=Y||window.event;J.preventDefault();var ie=H.player.container.getBoundingClientRect();H.show(J.clientX-ie.left,J.clientY-ie.top),H.player.template.mask.addEventListener("click",function(){H.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var W,Z;return W=U,(Z=[{key:"show",value:function(F,H){this.player.template.menu.classList.add("dplayer-menu-show");var Y=this.player.container.getBoundingClientRect();F+this.player.template.menu.offsetWidth>=Y.width?(this.player.template.menu.style.right=Y.width-F+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=F+"px",this.player.template.menu.style.right="initial"),H+this.player.template.menu.offsetHeight>=Y.height?(this.player.template.menu.style.bottom=Y.height-H+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=H+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Cc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const kc=Tc;function Yr(U){return Yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Yr(U)}function wc(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,(H=function(Y,J){if(Yr(Y)!=="object"||Y===null)return Y;var ie=Y[Symbol.toPrimitive];if(ie!==void 0){var oe=ie.call(Y,"string");if(Yr(oe)!=="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}(F.key),Yr(H)==="symbol"?H:String(H)),F)}var H}var xc=function(){function U(F){var H=this;(function(Y,J){if(!(Y instanceof J))throw new TypeError("Cannot call a class as a function")})(this,U),this.container=F.template.infoPanel,this.template=F.template,this.video=F.video,this.player=F,this.template.infoPanelClose.addEventListener("click",function(){H.hide()})}var W,Z;return W=U,(Z=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(F){this.template.infoFPS.innerHTML="".concat(F.toFixed(1))}}])&&wc(W.prototype,Z),Object.defineProperty(W,"prototype",{writable:!1}),U}();const _c=xc;var Lc=l(568),Dc=l.n(Lc);function Gr(U){return Gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},Gr(U)}function ms(U,W){var Z=Object.keys(U);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(U);W&&(F=F.filter(function(H){return Object.getOwnPropertyDescriptor(U,H).enumerable})),Z.push.apply(Z,F)}return Z}function Ic(U,W,Z){return(W=vs(W))in U?Object.defineProperty(U,W,{value:Z,enumerable:!0,configurable:!0,writable:!0}):U[W]=Z,U}function gs(U,W){for(var Z=0;Z<W.length;Z++){var F=W[Z];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(U,vs(F.key),F)}}function vs(U){var W=function(Z,F){if(Gr(Z)!=="object"||Z===null)return Z;var H=Z[Symbol.toPrimitive];if(H!==void 0){var Y=H.call(Z,"string");if(Gr(Y)!=="object")return Y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Z)}(U);return Gr(W)==="symbol"?W:String(W)}var ys=0,lr=[],Pc=function(){function U(H){var Y=this;(function(J,ie){if(!(J instanceof ie))throw new TypeError("Cannot call a class as a function")})(this,U),this.options=function(J){var ie={container:J.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:Qu,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var oe in ie)ie.hasOwnProperty(oe)&&!J.hasOwnProperty(oe)&&(J[oe]=ie[oe]);return J.video&&!J.video.type&&(J.video.type="auto"),Si(J.danmaku)==="object"&&J.danmaku&&!J.danmaku.user&&(J.danmaku.user="DIYgod"),J.subtitle&&(!J.subtitle.type&&(J.subtitle.type="webvtt"),!J.subtitle.fontSize&&(J.subtitle.fontSize="20px"),!J.subtitle.bottom&&(J.subtitle.bottom="40px"),!J.subtitle.color&&(J.subtitle.color="#fff")),J.video.quality&&(J.video.url=J.video.quality[J.video.defaultQuality].url),J.lang&&(J.lang=J.lang.toLowerCase()),J.contextmenu=J.contextmenu.concat([{key:"video-info",click:function(be){be.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),J}(function(J){for(var ie=1;ie<arguments.length;ie++){var oe=arguments[ie]!=null?arguments[ie]:{};ie%2?ms(Object(oe),!0).forEach(function(be){Ic(J,be,oe[be])}):Object.getOwnPropertyDescriptors?Object.defineProperties(J,Object.getOwnPropertyDescriptors(oe)):ms(Object(oe)).forEach(function(be){Object.defineProperty(J,be,Object.getOwnPropertyDescriptor(oe,be))})}return J}({preload:H.video.type==="webtorrent"?"none":"metadata"},H)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new qu(this.options.lang).tran,this.events=new Kd,this.user=new Yd(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),p.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(J){return J.lang===Y.options.subtitle.defaultSubtitle||J.name===Y.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(J){return J.lang===Y.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new ps({container:this.container,options:this.options,index:ys,tran:this.tran}),this.video=this.template.video,this.bar=new nc(this.template),this.bezel=new sc(this.template.bezel),this.fullScreen=new zd(this),this.controller=new pc(this),this.options.danmaku&&(this.danmaku=new Fd({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){Y.template.danmakuLoading.style.display="none",Y.options.autoplay&&Y.play()},0)},error:function(J){Y.notice(J)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return Y.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(J){return Y.tran(J)}}),this.comment=new Ac(this)),this.setting=new gc(this),this.plugins={},this.docClickFun=function(){Y.focus=!1},this.containerClickFun=function(){Y.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new ic(this),this.hotkey=new Sc(this),this.contextmenu=new kc(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new _c(this),!this.danmaku&&this.options.autoplay&&this.play(),ys++,lr.push(this)}var W,Z,F;return W=U,Z=[{key:"seek",value:function(H){H=Math.max(H,0),this.video.duration&&(H=Math.min(H,this.video.duration)),this.video.currentTime<H?this.notice("".concat(this.tran("ff").replace("%s",(H-this.video.currentTime).toFixed(0)))):this.video.currentTime>H&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-H).toFixed(0)))),this.video.currentTime=H,this.danmaku&&this.danmaku.seek(),this.bar.set("played",H/this.video.duration,"width"),this.template.ptime.innerHTML=p.secondToTime(H)}},{key:"play",value:function(H){var Y=this;if(this.paused=!1,this.video.paused&&!p.isMobile&&this.bezel.switch(sn.play),this.template.playButton.innerHTML=sn.pause,this.template.mobilePlayButton.innerHTML=sn.pause,H||c.resolve(this.video.play()).catch(function(){Y.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var J=0;J<lr.length;J++)this!==lr[J]&&lr[J].pause()}},{key:"pause",value:function(H){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||p.isMobile||this.bezel.switch(sn.pause),this.template.playButton.innerHTML=sn.play,this.template.mobilePlayButton.innerHTML=sn.play,H||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=sn.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=sn.volumeDown:this.template.volumeIcon.innerHTML=sn.volumeOff}},{key:"volume",value:function(H,Y,J){if(H=parseFloat(H),!isNaN(H)){H=Math.max(H,0),H=Math.min(H,1),this.bar.set("volume",H,"width");var ie="".concat((100*H).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=ie,Y||this.user.set("volume",H),J||this.notice("".concat(this.tran("volume")," ").concat((100*H).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=H,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(H,Y){this.events.on(H,Y)}},{key:"switchVideo",value:function(H,Y){this.pause(),this.video.poster=H.pic?H.pic:"",this.video.src=H.url,this.initMSE(this.video,H.type||"auto"),Y&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:Y.id,address:Y.api,token:Y.token,maximum:Y.maximum,addition:Y.addition,user:Y.user}))}},{key:"initMSE",value:function(H,Y){var J=this;if(this.type=Y,this.options.video.customType&&this.options.video.customType[Y])Object.prototype.toString.call(this.options.video.customType[Y])==="[object Function]"?this.options.video.customType[Y](this.video,this):console.error("Illegal customType: ".concat(Y));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(H.src)?this.type="hls":/.flv(#|\?|$)/i.exec(H.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(H.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(H.canPlayType("application/x-mpegURL")||H.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var ie=this.options.pluginOptions.hls,oe=new window.Hls(ie);this.plugins.hls=oe,oe.loadSource(H.src),oe.attachMedia(H),this.events.on("destroy",function(){oe.destroy(),delete J.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var be=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:H.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=be,be.attachMediaElement(H),be.load(),this.events.on("destroy",function(){be.unload(),be.detachMediaElement(),be.destroy(),delete J.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var ke=window.dashjs.MediaPlayer().create().initialize(H,H.src,!1),Oe=this.options.pluginOptions.dash;ke.updateSettings(Oe),this.plugins.dash=ke,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete J.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var Ue=this.options.pluginOptions.webtorrent,He=new window.WebTorrent(Ue);this.plugins.webtorrent=He;var We=H.src;H.src="",H.preload="metadata",H.addEventListener("durationchange",function(){return J.container.classList.remove("dplayer-loading")},{once:!0}),He.add(We,function(Re){Re.files.find(function(je){return je.name.endsWith(".mp4")}).renderTo(J.video,{autoplay:J.options.autoplay,controls:!1})}),this.events.on("destroy",function(){He.remove(We),He.destroy(),delete J.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(H,Y){var J=this;this.initMSE(H,Y),this.on("durationchange",function(){H.duration!==1&&H.duration!==1/0&&(J.template.dtime.innerHTML=p.secondToTime(H.duration))}),this.on("progress",function(){var be=H.buffered.length?H.buffered.end(H.buffered.length-1)/H.duration:0;J.bar.set("loaded",be,"width")}),this.on("error",function(){J.video.error&&J.tran&&J.notice&&J.type!=="webtorrent"&&J.notice(J.tran("video-failed"))}),this.on("ended",function(){J.bar.set("played",1,"width"),J.setting.loop?(J.seek(0),J.play()):J.pause(),J.danmaku&&(J.danmaku.danIndex=0)}),this.on("play",function(){J.paused&&J.play(!0)}),this.on("pause",function(){J.paused||J.pause(!0)}),this.on("timeupdate",function(){J.bar.set("played",J.video.currentTime/J.video.duration,"width");var be=p.secondToTime(J.video.currentTime);J.template.ptime.innerHTML!==be&&(J.template.ptime.innerHTML=be)});for(var ie=function(be){H.addEventListener(J.events.videoEvents[be],function(ke){J.events.trigger(J.events.videoEvents[be],ke)})},oe=0;oe<this.events.videoEvents.length;oe++)ie(oe);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Qd(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Jd(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(H){var Y=this;if(H=typeof H=="string"?parseInt(H):H,this.qualityIndex!==H&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=H,this.switchingQuality=!0,this.quality=this.options.video.quality[H],this.template.qualityButton.innerHTML=this.quality.name;var J=this.video.paused;this.video.pause();var ie=Dc()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),oe=new DOMParser().parseFromString(ie,"text/html").body.firstChild;this.template.videoWrap.insertBefore(oe,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=oe,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(Y.prevVideo){if(Y.video.currentTime!==Y.prevVideo.currentTime)return void Y.seek(Y.prevVideo.currentTime);Y.template.videoWrap.removeChild(Y.prevVideo),Y.video.classList.add("dplayer-video-current"),J||Y.video.play(),Y.prevVideo=null,Y.notice("".concat(Y.tran("switched-quality").replace("%q",Y.quality.name)),void 0,void 0,"switch-quality"),Y.switchingQuality=!1,Y.events.trigger("quality_end")}}),this.on("error",function(){Y.video.error&&Y.prevVideo&&(Y.template.videoWrap.removeChild(Y.video),Y.video=Y.prevVideo,J||Y.video.play(),Y.qualityIndex=Y.prevIndex,Y.quality=Y.options.video.quality[Y.qualityIndex],Y.noticeTime=setTimeout(function(){Y.template.notice.style.opacity=0,Y.events.trigger("notice_hide")},3e3),Y.prevVideo=null,Y.switchingQuality=!1)})}}},{key:"notice",value:function(H){var Y,J,ie,oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,be=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,ke=arguments.length>3?arguments[3]:void 0;if(ke&&((Y=document.getElementById("dplayer-notice-".concat(ke)))&&(Y.innerHTML=H),this.noticeList[ke]&&(clearTimeout(this.noticeList[ke]),this.noticeList[ke]=null)),!Y){var Oe=ps.NewNotice(H,be,ke);this.template.noticeList.appendChild(Oe),Y=Oe}this.events.trigger("notice_show",Y),oe>0&&(this.noticeList[ke]=setTimeout((J=Y,ie=this,function(){J.addEventListener("animationend",function(){ie.template.noticeList.removeChild(J)}),J.classList.add("remove-notice"),ie.events.trigger("notice_hide"),ie.noticeList[ke]=null}),oe))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(H){this.video.playbackRate=H}},{key:"destroy",value:function(){lr.splice(lr.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],F=[{key:"version",get:function(){return"1.27.1"}}],Z&&gs(W.prototype,Z),F&&gs(W,F),Object.defineProperty(W,"prototype",{writable:!1}),U}();const Oc=Pc;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Rc=Oc})(),f.default})())})(xu);const rl=ku(xu.exports);const fh=(e,t)=>{const n=e.__vccOpts||e;for(const[o,l]of t)n[o]=l;return n},ph={data(){return{link:"https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2023-02-03/e71eb453-4362-497c-a03a-026ce82fa7fd.jpg"}},mounted(){let e=new URL(document.location).searchParams.get("url");if(e!=null){let t=e;this.link=t,console.log(`video link is ${t}`)}this.dp=new rl({container:document.getElementById("dplayer"),video:{url:this.link,type:"customHls",customType:{customHls:function(t,n){const o=new nl;o.loadSource(t.src),o.attachMedia(t)}}}})},methods:{update(){return this.dp=new rl({container:document.getElementById("dplayer"),video:{url:this.link,type:"customHls",customType:{customHls:function(e,t){const n=new nl;n.loadSource(e.src),n.attachMedia(e)}}}}),this.dp.play()}}},hh=re("main",{style:{position:"relative",top:"20px"},class:"flex_center"},[re("div",{id:"dplayer"})],-1);function mh(e,t,n,o,l,f){const i=xe("nut-input"),r=xe("nut-button"),a=xe("nut-cell");return j(),X(De,null,[Ne(a,{style:{position:"relative",top:"20px","justify-content":"center"}},{default:Ke(()=>[Ne(i,{border:!1,style:{width:"80%",border:"solid 2px"},type:"text","clear-size":"18px",onKeyup:sh(f.update,["enter"]),placeholder:"\u8BF7\u8F93\u5165m3u8\u94FE\u63A5",clearable:"",modelValue:this.link,"onUpdate:modelValue":t[0]||(t[0]=D=>this.link=D)},null,8,["onKeyup","modelValue"]),Ne(r,{shape:"square",type:"primary",style:{height:"45px"},onClick:f.update},{default:Ke(()=>[nt("\u70B9\u51FB\u64AD\u653E")]),_:1},8,["onClick"])]),_:1}),hh],64)}const gh=fh(ph,[["render",mh]]);class _u{}var vh=Object.defineProperty,yh=(e,t,n)=>t in e?vh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ht=(e,t,n)=>(yh(e,typeof t!="symbol"?t+"":t,n),n);class Ah extends _u{constructor(){super(...arguments),ht(this,"save","\u4FDD\u5B58"),ht(this,"confirm","\u786E\u8BA4"),ht(this,"cancel","\u53D6\u6D88"),ht(this,"done","\u5B8C\u6210"),ht(this,"noData","\u6682\u65E0\u6570\u636E"),ht(this,"placeholder","\u8BF7\u8F93\u5165"),ht(this,"select","\u8BF7\u9009\u62E9"),ht(this,"video",{errorTip:"\u89C6\u9891\u52A0\u8F7D\u5931\u8D25",clickRetry:"\u70B9\u51FB\u91CD\u8BD5"}),ht(this,"fixednav",{activeText:"\u6536\u8D77\u5BFC\u822A",unActiveText:"\u5FEB\u901F\u5BFC\u822A"}),ht(this,"pagination",{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"}),ht(this,"calendaritem",{weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",monthTitle:(t,n)=>`${t}\u5E74${n}\u6708`,today:"\u4ECA\u5929"}),ht(this,"shortpassword",{title:"\u8BF7\u8F93\u5165\u5BC6\u7801",desc:"\u60A8\u4F7F\u7528\u4E86\u865A\u62DF\u8D44\u4EA7\uFF0C\u8BF7\u8FDB\u884C\u9A8C\u8BC1",tips:"\u5FD8\u8BB0\u5BC6\u7801"}),ht(this,"uploader",{ready:"\u51C6\u5907\u5B8C\u6210",readyUpload:"\u51C6\u5907\u4E0A\u4F20",waitingUpload:"\u7B49\u5F85\u4E0A\u4F20",uploading:"\u4E0A\u4F20\u4E2D",success:"\u4E0A\u4F20\u6210\u529F",error:"\u4E0A\u4F20\u5931\u8D25"}),ht(this,"countdown",{day:"\u5929",hour:"\u65F6",minute:"\u5206",second:"\u79D2"}),ht(this,"address",{selectRegion:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",deliveryTo:"\u914D\u9001\u81F3",chooseAnotherAddress:"\u9009\u62E9\u5176\u4ED6\u5730\u5740"}),ht(this,"signature",{reSign:"\u91CD\u7B7E",unSupportTpl:"\u5BF9\u4E0D\u8D77\uFF0C\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Canvas\uFF0C\u65E0\u6CD5\u4F7F\u7528\u672C\u63A7\u4EF6\uFF01"}),ht(this,"ecard",{chooseText:"\u8BF7\u9009\u62E9\u7535\u5B50\u5361\u9762\u503C",otherValueText:"\u5176\u4ED6\u9762\u503C",placeholder:"\u8BF7\u8F93\u51651-5000\u6574\u6570"}),ht(this,"timeselect",{pickupTime:"\u53D6\u4EF6\u65F6\u95F4"}),ht(this,"sku",{buyNow:"\u7ACB\u5373\u8D2D\u4E70",buyNumber:"\u8D2D\u4E70\u6570\u91CF",addToCart:"\u52A0\u5165\u8D2D\u7269\u8F66"}),ht(this,"skuheader",{skuId:"\u5546\u54C1\u7F16\u53F7"}),ht(this,"addresslist",{addAddress:"\u65B0\u5EFA\u5730\u5740",default:"\u9ED8\u8BA4"}),ht(this,"comment",{complaintsText:"\u6211\u8981\u6295\u8BC9",additionalReview:t=>`\u8D2D\u4E70${t}\u5929\u540E\u8FFD\u8BC4`,additionalImages:t=>`${t}\u5F20\u8FFD\u8BC4\u56FE\u7247`}),ht(this,"infiniteloading",{loading:"\u52A0\u8F7D\u4E2D...",pullTxt:"\u677E\u5F00\u5237\u65B0",loadMoreTxt:"\u54CE\u5440\uFF0C\u8FD9\u91CC\u662F\u5E95\u90E8\u4E86\u5566"}),ht(this,"datepicker",{year:"\u5E74",month:"\u6708",day:"\u65E5",hour:"\u65F6",min:"\u5206",seconds:"\u79D2"}),ht(this,"audiooperate",{back:"\u5012\u9000",start:"\u5F00\u59CB",pause:"\u6682\u505C",forward:"\u5FEB\u8FDB",mute:"\u9759\u97F3"}),ht(this,"pullrefresh",{pulling:"\u4E0B\u62C9\u5237\u65B0",loosing:"\u91CA\u653E\u5237\u65B0",loading:"\u52A0\u8F7D\u4E2D..."})}}var bh=Object.defineProperty,Eh=(e,t,n)=>t in e?bh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mt=(e,t,n)=>(Eh(e,typeof t!="symbol"?t+"":t,n),n);class Sh extends _u{constructor(){super(...arguments),mt(this,"save","Save"),mt(this,"confirm","Confirm"),mt(this,"cancel","Cancel"),mt(this,"done","Done"),mt(this,"noData","No Data"),mt(this,"placeholder","Placeholder"),mt(this,"select","Select"),mt(this,"video",{errorTip:"Error Tip",clickRetry:"Click Retry"}),mt(this,"fixednav",{activeText:"Close Nav",unActiveText:"Open Nav"}),mt(this,"pagination",{prev:"Previous",next:"Next"}),mt(this,"calendaritem",{weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],end:"End",start:"Start",title:"Calendar",monthTitle:(t,n)=>`${t}/${n}`,today:"Today"}),mt(this,"shortpassword",{title:"Please input a password",desc:"Verify",tips:"Forget password"}),mt(this,"uploader",{ready:"Ready",readyUpload:"Ready to upload",waitingUpload:"Waiting for upload",uploading:"Uploading",success:"Upload successful",error:"Upload failed"}),mt(this,"countdown",{day:" Day ",hour:" Hour ",minute:" Minute ",second:" Second "}),mt(this,"address",{selectRegion:"Select Region",deliveryTo:"Delivery To",chooseAnotherAddress:"Choose Another Address"}),mt(this,"signature",{reSign:"Re Sign",unSupportTpl:"Sorry, the current browser doesn't support canvas, so we can't use this control!"}),mt(this,"ecard",{chooseText:"Select",otherValueText:"Other Value",placeholder:"Placeholder"}),mt(this,"timeselect",{pickupTime:"Pickup Time"}),mt(this,"sku",{buyNow:"Buy Now",buyNumber:"Buy Number",addToCart:"Add to Cart"}),mt(this,"skuheader",{skuId:"Sku Number"}),mt(this,"addresslist",{addAddress:"Add New Address",default:"default"}),mt(this,"comment",{complaintsText:"I have a complaint",additionalReview:t=>`Review after ${t} days of purchase`,additionalImages:t=>`There are ${t} follow-up comments`}),mt(this,"infiniteloading",{loading:"Loading...",pullTxt:"Loose to refresh",loadMoreTxt:"Oops, this is the bottom"}),mt(this,"datepicker",{year:"Year",month:"Month",day:"Day",hour:"Hour",min:"Minute",seconds:"Second"}),mt(this,"audiooperate",{back:"Back",start:"Start",pause:"Pause",forward:"Forward",mute:"Mute"}),mt(this,"pullrefresh",{pulling:"Pull to refresh...",loosing:"Loose to refresh...",loading:"Loading..."})}}var Ch=Object.defineProperty,Th=(e,t,n)=>t in e?Ch(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kh=(e,t,n)=>(Th(e,typeof t!="symbol"?t+"":t,n),n);const al=e=>e!==null&&typeof e=="object",Lu=(e,t)=>(Object.keys(t).forEach(n=>{let o=e[n],l=t[n];al(o)&&al(l)?Lu(o,l):e[n]=l}),e),Fa=ze({"zh-CN":new Ah,"en-US":new Sh});class Yo{static languages(){return Fa[this.currentLang.value]}static use(t,n){n&&(Fa[t]=new n),this.currentLang.value=t}static merge(t,n){n&&(Fa[t]?Lu(Fa[t],n):this.use(t,n))}}kh(Yo,"currentLang",Te("zh-CN"));const Ja=e=>{if(e===null)return"null";const t=typeof e;if(t==="undefined"||t==="string")return t;switch(toString.call(e)){case"[object Array]":return"array";case"[object Date]":return"date";case"[object Boolean]":return"boolean";case"[object Number]":return"number";case"[object Function]":return"function";case"[object RegExp]":return"regexp";case"[object Object]":return e.nodeType!==void 0?e.nodeType==3?/\S/.test(e.nodeValue)?"textnode":"whitespace":"element":"object";default:return"unknow"}},Go=Array.isArray,wh=e=>e instanceof Date,Qi=e=>typeof e=="function",ia=e=>e!==null&&typeof e=="object",Du=e=>ia(e)&&Qi(e.then)&&Qi(e.catch),xh=document,il=xh.body,qi=(e,t)=>{try{return t.split(".").reduce((n,o)=>n[o],e)}catch{return""}},_h=(e,t,n)=>{let o=Object.assign({},e),l=Object.assign({},n);return Object.keys(t).length>0?(Object.keys(o).forEach(f=>{if(l.hasOwnProperty(f)){const i=Ja(l[f]);i=="function"&&(o[f]=l[f](t)),i=="string"&&(o[f]=t[l[f]])}else t[f]&&(o[f]=t[f])}),o):e};function Lh(e,t=2){return Object.is(parseFloat(e),NaN)?console.log(`\u4F20\u5165\u7684\u503C\uFF1A${e}\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57`):(e=parseFloat(e),(Math.round((e+Number.EPSILON)*Math.pow(10,t))/Math.pow(10,t)).toFixed(t))}function ei(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&e.stopPropagation()}const En=(e,t=2)=>{for(e+="";e.length<t;)e="0"+e;return e.toString()},Sn=(e,t,n)=>Math.min(Math.max(e,t),n),Iu=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;function we(e){const t="nut-"+e;return{componentName:t,translate(n,...o){const l=Yo.languages(),f=qi(l,`${e.replace("-","")}.${n}`)||qi(l,n);return Qi(f)?f(...o):f},create:function(n){return n.baseName=e,n.name=t,n.install=o=>{o.component(n.name,n)},at(n)},createDemo:function(n){return n.baseName=e,n.name="demo-"+e,at(n)}}}const Dh=["aria-labelledby"],Ih=re("path",{d:"M1741.19 227.497a121.654 121.654 0 1 1 127.858 206.812L1292.65 790.27a182.482 182.482 0 0 1-191.727 0L524.646 434.31a121.654 121.654 0 1 1 127.859-206.812l544.403 335.887c181.387-111.8 362.773-223.965 544.282-335.887",fill:"currentColor","fill-opacity":"0.9"},null,-1),Ph=[Ih],Pu=at({__name:"ArrowDown2",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2472 1024","aria-labelledby":e.name,role:"presentation"},Ph,14,Dh))}}),Oh=["aria-labelledby"],Rh=re("path",{d:"M623.406 815.479A129.722 129.722 0 1 1 487.068 594.95C691.9 468.083 896.73 341.993 1101.691 215.125a194.583 194.583 0 0 1 204.442 0l614.494 379.567a129.722 129.722 0 1 1-136.338 220.657l-580.506-358.292-580.377 358.422",fill:"currentColor","fill-opacity":"0.9"},null,-1),Mh=[Rh],Ou=at({__name:"ArrowUp2",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2472 1024","aria-labelledby":e.name,role:"presentation"},Mh,14,Oh))}}),Bh=["aria-labelledby"],$h=re("path",{d:"M510.613 2.837C229.793 2.837.032 232.598.032 513.418S229.793 1024 510.613 1024s510.582-229.762 510.582-510.582S794.27 2.837 510.613 2.837zm0 794.238c-156.01 0-283.656-127.646-283.656-283.657s127.645-283.656 283.656-283.656S794.27 357.407 794.27 513.418 666.624 797.075 510.613 797.075z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Nh=re("path",{d:"M382.968 513.418a127.645 127.645 0 1 0 255.29 0 127.645 127.645 0 1 0-255.29 0Z",fill:"currentColor","fill-opacity":"0.9"},null,-1),ol=at({__name:"CheckChecked",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1032 1024","aria-labelledby":e.name,role:"presentation"},[$h,nt(","),Nh],14,Bh))}}),Fh=["aria-labelledby"],Uh=re("path",{d:"M506.467 0C227.962 0 .094 227.868.094 506.374s227.868 506.373 506.373 506.373 506.374-227.868 506.374-506.373S787.786 0 506.467 0zm202.55 571.077H306.73c-45.01 0-67.516-22.506-67.516-67.517 0-45.01 22.505-67.516 67.516-67.516h402.286c45.01 0 67.516 22.505 67.516 67.516 0 45.011-22.505 67.517-67.516 67.517z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Kh=[Uh],Wh=at({__name:"CheckDisabled",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},Kh,14,Fh))}}),Hh=["aria-labelledby"],zh=re("path",{d:"M512 1024c-136.533 0-264.533-54.044-361.244-150.756C54.044 776.534 0 648.534 0 512c0-136.533 54.044-264.533 150.756-361.244C247.466 54.044 375.466 0 512 0c136.533 0 264.533 54.044 361.244 150.756C969.956 247.466 1024 375.466 1024 512s-54.044 264.533-150.756 361.244C776.534 969.956 648.534 1024 512 1024zm0-938.667c-113.778 0-221.867 45.511-301.511 125.156S85.333 398.222 85.333 512s45.511 221.867 125.156 301.511S398.222 938.667 512 938.667s221.867-45.511 301.511-125.156S938.667 625.778 938.667 512 893.156 290.133 813.51 210.489 625.778 85.333 512 85.333z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Vh=[zh],Zi=at({__name:"CheckNormal",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},Vh,14,Hh))}}),jh=["aria-labelledby"],Yh=re("path",{d:"M998.4 245.029c-219.429 153.6-398.629 332.8-552.229 552.228-40.228 58.514-128 54.857-164.571-3.657-69.486-106.057-149.943-186.514-256-256-51.2-32.914-18.286-113.371 40.229-98.743C182.857 460.8 274.286 508.343 358.4 585.143c157.257-190.172 358.4-340.114 588.8-435.2 62.171-25.6 106.057 58.514 51.2 95.086",fill:"currentColor","fill-opacity":"0.9"},null,-1),Gh=[Yh],Ru=at({__name:"Check",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},Gh,14,jh))}}),Xh=["aria-labelledby"],Qh=re("path",{d:"M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm281.6 369.778C779.378 381.156 600.178 500.622 472.178 691.2c0 0 0 2.844-2.845 2.844-8.533 5.69-48.355 36.978-88.177-8.533-39.823-51.2-62.578-99.555-142.223-142.222-2.844 0-2.844-2.845-2.844-2.845-8.533-11.377-39.822-56.888 19.911-56.888 45.511 0 91.022 11.377 162.133 73.955 5.69 5.689 14.223 5.689 17.067 0C469.333 517.69 608.711 366.933 768 318.578c0 0 19.911-2.845 31.289 14.222 5.689 11.378 11.378 22.756-5.689 36.978z",fill:"currentColor","fill-opacity":"0.9"},null,-1),qh=[Qh],Mu=at({__name:"Checked",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},qh,14,Xh))}}),Zh=["aria-labelledby"],Jh=re("path",{d:"M159.289 500.622c62.578 0 125.155 17.067 221.867 102.4 8.533 5.69 19.91 5.69 25.6 0 48.355-54.044 238.933-261.689 455.11-329.955 0 0 28.445-5.69 42.667 19.91 8.534 17.067 19.911 34.134-5.689 54.045-22.755 17.067-264.533 179.2-440.888 440.89l-2.845 2.844c-11.378 8.533-68.267 51.2-119.467-14.223-56.888-71.11-85.333-139.377-196.266-196.266-2.845 0-2.845-2.845-5.69-5.69-11.377-11.377-54.044-73.955 25.6-73.955z",fill:"currentColor","fill-opacity":"0.9"},null,-1),em=[Jh],tm=at({__name:"Checklist",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},em,14,Zh))}}),nm=["aria-labelledby"],rm=re("path",{d:"M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z",fill:"currentColor","fill-opacity":"0.9"},null,-1),am=[rm],Xo=at({__name:"CircleClose",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},am,14,nm))}}),im=["aria-labelledby"],om=re("path",{d:"M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",fill:"currentColor","fill-opacity":"0.9"},null,-1),sm=[om],pi=at({__name:"Close",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1026 1024","aria-labelledby":e.name,role:"presentation"},sm,14,im))}}),lm=["aria-labelledby"],um=re("path",{d:"M760.415 876.089H259.793c-132.741 0-242.726-109.985-242.726-242.726V242.726C17.067 109.986 127.052 0 259.793 0h504.414c132.741 0 242.726 109.985 242.726 242.726v394.43c-3.792 132.74-109.985 238.933-246.518 238.933zM259.793 113.778c-72.06 0-128.949 56.889-128.949 128.948v394.43c0 72.059 56.89 128.948 128.949 128.948h504.414c68.267 0 128.949-56.89 128.949-128.948v-394.43c0-72.06-56.89-128.948-128.949-128.948H259.793zm56.888 887.466c-15.17 0-30.34-3.792-41.718-15.17-22.756-22.755-22.756-56.889 0-79.644l109.985-109.986c22.756-22.755 56.889-22.755 79.645 0s22.755 56.89 0 79.645L354.607 986.074c-7.585 7.585-22.755 15.17-37.926 15.17zm193.423-398.222c-45.511 0-91.023-22.755-117.57-56.889-18.964-26.548-15.171-60.681 7.585-79.644 26.548-18.963 60.681-15.17 79.644 7.585 15.17 18.963 45.511 18.963 56.889 0 18.963-22.755 56.889-30.34 79.644-7.585s30.341 56.889 7.585 79.644c-22.755 37.926-68.266 56.89-113.777 56.89z",fill:"currentColor","fill-opacity":"0.9"},null,-1),dm=[um],cm=at({__name:"Comment",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},dm,14,lm))}}),fm=["aria-labelledby"],pm=re("path",{d:"M668.444 1024H355.556c-142.223 0-256-113.778-256-256V170.667h824.888V768c0 142.222-113.777 256-256 256zM184.89 256v512c0 93.867 76.8 170.667 170.667 170.667h312.888c93.867 0 170.667-76.8 170.667-170.667V256H184.89zm753.778 0H85.333c-22.755 0-42.666-19.911-42.666-42.667s19.91-42.666 42.666-42.666h853.334c22.755 0 42.666 19.91 42.666 42.666S961.423 256 938.667 256zM625.777 85.333H398.223c-22.755 0-42.666-19.91-42.666-42.666S375.466 0 398.222 0h227.556c22.755 0 42.666 19.911 42.666 42.667s-19.91 42.666-42.666 42.666z",fill:"currentColor","fill-opacity":"0.9"},null,-1),hm=[pm],Bu=at({__name:"Del",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},hm,14,fm))}}),mm=["aria-labelledby"],gm=re("path",{d:"M128 349.867C93.867 332.8 34.133 341.333 8.533 384-8.533 418.133 0 477.867 42.667 503.467 179.2 588.8 315.733 665.6 443.733 750.933c42.667 25.6 93.867 25.6 136.534 0C716.8 665.6 853.333 588.8 981.333 503.467c42.667-25.6 51.2-76.8 25.6-119.467s-76.8-51.2-119.466-25.6C768 435.2 640 512 512 588.8 384 512 256 435.2 128 349.867",fill:"currentColor","fill-opacity":"0.9"},null,-1),vm=[gm],$u=at({__name:"DownArrow",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},vm,14,mm))}}),ym=["aria-labelledby"],Am=re("path",{d:"M285.479 992.97H108.606c-27.927 0-55.854-12.412-77.576-31.03C9.31 940.217 0 915.393 0 884.363l3.103-155.152c0-24.824 9.31-46.545 27.927-65.164L626.812 65.164c83.782-83.782 220.315-83.782 307.2 0 83.782 83.781 83.782 223.418 0 307.2l-605.09 601.988c-12.413 12.412-27.928 18.618-43.443 18.618zM781.964 93.09c-31.03 0-65.164 12.413-89.988 37.237L96.194 729.212 93.09 884.364c0 9.309 6.206 15.515 15.515 15.515h161.358l598.884-595.782c49.649-49.649 49.649-127.224 0-173.77l-3.103-3.103c-21.72-21.721-52.751-34.133-83.781-34.133zm-201.946 78.508 65.816-65.847L882.812 342.73l-65.846 65.784zM946.424 992.97H217.212c-24.824 0-46.545-21.722-46.545-46.546s21.72-46.545 46.545-46.545h729.212c24.824 0 46.546 21.721 46.546 46.545s-21.722 46.546-46.546 46.546z",fill:"currentColor","fill-opacity":"0.9"},null,-1),bm=[Am],Em=at({__name:"Edit",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},bm,14,ym))}}),Sm=["aria-labelledby"],Cm=re("path",{d:"M584.06 1024H318.577C144.118 1024 0 883.674 0 705.422s140.326-318.578 318.578-318.578v113.778c-113.778 0-204.8 91.022-204.8 204.8s91.022 204.8 204.8 204.8h265.481V1024zm56.888 0h-53.096c-208.593 0-379.26-170.667-379.26-383.052 0-83.437 26.549-163.081 75.852-231.348l3.793-3.793c15.17-22.755 30.34-60.681 45.511-121.363l7.585-34.133c7.586-18.963 15.17-41.718 18.963-68.267C386.844 22.756 470.281 0 519.586 0c117.57 0 178.251 106.193 178.251 212.385v7.585c0 7.586-3.793 18.963-3.793 37.926C876.09 257.896 1024 405.807 1024 587.852v53.096C1024 853.333 853.333 1024 640.948 1024zM519.585 113.778c-30.34 0-41.718 53.096-49.304 87.23-3.792 34.133-11.377 60.68-15.17 83.436l-7.585 34.134c-11.378 45.51-34.133 113.778-60.682 155.496l-7.585 3.793A269.274 269.274 0 0 0 322.37 644.74c0 147.91 121.363 269.274 269.274 269.274h53.097c147.91 0 269.274-121.363 269.274-269.274v-53.097c0-117.57-98.608-216.177-216.178-216.177h-56.889c-18.963-3.793-37.926-15.17-49.304-30.341-11.377-15.17-15.17-37.926-15.17-56.889 7.585-41.718 11.378-64.474 11.378-75.852v-3.792c-3.793 0-3.793-94.815-68.267-94.815z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Tm=[Cm],km=at({__name:"Fabulous",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1061 1024","aria-labelledby":e.name,role:"presentation"},Tm,14,Sm))}}),wm=["aria-labelledby"],xm=re("path",{d:"M512 1024C229.831 1024 0 794.169 0 512S229.831 0 512 0s512 229.831 512 512-229.831 512-512 512zm0-955.733C266.24 68.267 68.267 266.24 68.267 512S266.24 955.733 512 955.733 955.733 757.76 955.733 512 757.76 68.267 512 68.267zm111.502 282.169c13.654-13.654 34.134-13.654 47.787 0 11.378 11.377 13.653 31.857 2.275 45.51l-2.275 2.276-111.502 111.502 111.502 111.503c13.653 13.653 13.653 34.133 0 47.786-13.653 13.654-34.133 13.654-47.787 0L512 557.511 400.498 669.013c-11.378 11.378-31.858 13.654-45.511 2.276l-2.276-2.276c-11.378-11.377-13.653-31.857-2.275-45.51l2.275-2.276 111.502-111.503-111.502-111.502c-13.653-13.653-13.653-34.133 0-47.786s34.133-13.654 47.787 0L512 461.938l111.502-111.502z",fill:"currentColor","fill-opacity":"0.9"},null,-1),_m=[xm],Lm=at({__name:"Failure",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},_m,14,wm))}}),Dm=["aria-labelledby"],Im=re("path",{d:"M696.43 465.25c40.61 0 73.53-32.72 73.53-73.09s-32.96-73.08-73.53-73.08-73.54 32.72-73.54 73.08 32.92 73.09 73.54 73.09zM535.74 650.62l-273.61-259.4a56.19 56.19 0 0 0-15.36 11.58l-114 119.63-6-222.77c-.73-26.82 20.84-49.41 47.67-50.14l201.77-5.44 47.34-50-250.43 6.75C119 202.33 76.33 247.17 77.78 301l7.32 271.4 4.5 166.78C91.06 793 136.05 835.47 190.2 834l176-4.75 12-.32 47.34-50 116.18-122.64z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Pm=re("path",{d:"m861.71 214.8-242.83-33.86-55.09 41.46L855 263a49.05 49.05 0 0 1 41.79 55.13l-54.33 389.59-120.87-159.05A59.86 59.86 0 0 0 638.06 537l-44 33.08 65.07 86.15L603.84 698l-79.57 60.1-54.92 41.48 34.17 4.76 270.73 37.76a97.55 97.55 0 0 0 109.88-79.6 22.37 22.37 0 0 0 .65-3.44l60.53-434.16c7.44-53.32-29.95-102.62-83.6-110.1z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Om=at({__name:"ImageError",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},[Im,nt(","),Pm],14,Dm))}}),Rm=["aria-labelledby"],Mm=re("path",{d:"M853.161 892.55H362.595l-209.433-.414a18.5 18.5 0 0 1-1.813-.092c-24.849-2.485-47.825-14.06-64.696-32.595-16.991-18.665-26.35-42.855-26.35-68.112V264.626c0-55.808 45.404-101.211 101.212-101.211H853.16c55.808 0 101.21 45.403 101.21 101.211v225.513c0 .275-.006.552-.018.826-.022.494-1.972 51.723 15.481 85.462 4.717 9.119 1.148 20.335-7.97 25.053-9.117 4.714-20.335 1.15-25.053-7.97-21.3-41.177-19.845-97.643-19.619-103.74V264.627c0-35.307-28.724-64.031-64.03-64.031H161.515c-35.308 0-64.032 28.724-64.032 64.031v526.711c0 32.755 24.321 59.958 56.718 63.62l208.431.412h490.53c35.306 0 64.03-28.725 64.03-64.032l-.382-93.677c-.105-1.75-1.587-19.548-19.55-42.5a9.548 9.548 0 0 1-.147-.19l-21.712-28.489-117.227-155.119c-.416-.55-38.995-50.852-86.272-45.534-38.335 4.315-75.955 45.164-108.79 118.132-17.615 39.141-34.65 68.269-52.082 89.046-17.607 20.986-35.68 33.52-55.251 38.317-43.423 10.638-81.05-18.995-120.887-50.373l-5.057-3.98c-46.555-36.578-68.75-28.224-158.33 59.602-7.33 7.188-19.1 7.071-26.289-.26-7.187-7.33-7.07-19.1.26-26.287 46.659-45.746 77.544-72.727 107.086-84.283 33.358-13.048 64.275-6.267 100.242 21.994l5.093 4.008c33.923 26.72 63.22 49.795 89.029 43.467 25.618-6.279 53.3-42.114 82.28-106.509 39.14-86.976 85.838-134.027 138.797-139.849 68.454-7.515 117.824 57.405 119.892 60.172l117.122 154.98 21.6 28.344c26.277 33.631 27.334 61.639 27.367 64.725l.001.128.384 94.06c.001 55.884-45.4 101.287-101.209 101.287z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Bm=re("path",{d:"M312.328 446.968c-42.325 0-76.759-34.434-76.759-76.76s34.434-76.759 76.76-76.759 76.759 34.435 76.759 76.76-34.434 76.759-76.76 76.759zm0-116.34c-21.824 0-39.579 17.756-39.579 39.58s17.755 39.58 39.58 39.58 39.579-17.756 39.579-39.58-17.755-39.58-39.58-39.58z",fill:"currentColor","fill-opacity":"0.9"},null,-1),$m=at({__name:"Image",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},[Mm,nt(","),Bm],14,Rm))}}),Nm=["aria-labelledby"],Fm=re("path",{d:"M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",fill:"currentColor","fill-opacity":"0.9"},null,-1),Um=[Fm],Km=at({__name:"JoySmile",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3072 1024","aria-labelledby":e.name,role:"presentation"},Um,14,Nm))}}),Wm=["aria-labelledby"],Hm=re("path",{d:"M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",fill:"currentColor","fill-opacity":"0.9"},null,-1),zm=[Hm],Qo=at({__name:"Left",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},zm,14,Wm))}}),Vm=["aria-labelledby"],jm=re("path",{d:"M313.034 1004.045c-66.848 0-124.402-24.156-170.798-70.577l-40.854-40.829C54.96 846.218 28.966 783.097 30.83 714.411c3.702-66.85 31.56-131.808 79.819-180.12l137.4-137.373c14.86-14.861 40.855-14.861 55.69 0 14.86 14.861 16.725 38.99 0 55.69l-137.348 137.4a187.47 187.47 0 0 0-55.69 126.24c-1.864 46.422 14.835 89.115 46.396 120.675l40.855 40.855c31.56 31.56 74.253 48.286 120.674 46.421 46.421-1.838 92.843-22.291 126.24-55.69l137.4-137.4c14.862-14.86 40.856-14.86 55.69 0 14.862 14.862 14.862 40.856 0 55.69l-137.4 137.427c-48.285 48.259-113.27 76.117-180.118 79.82a5.645 5.645 0 0 0-7.405 0zm475.294-382.477c-11.133 0-18.563-3.702-27.832-12.997-14.86-14.861-14.86-40.855 0-55.69l115.082-115.108a187.47 187.47 0 0 0 55.716-126.267c1.838-46.395-14.861-89.114-46.421-120.674l-40.855-40.855c-64.985-64.959-176.364-61.257-246.915 9.294L478.266 278.108c-14.835 14.835-40.829 14.835-55.69 0-14.86-14.861-14.86-40.855 0-55.716l118.81-118.81C643.524 1.444 803.163-2.232 899.734 94.287l40.829 40.855c46.421 46.421 72.415 109.541 70.55 178.228-3.702 66.85-31.56 131.807-79.819 180.093L816.186 608.571c-7.43 7.43-18.563 11.133-27.858 12.997zm-332.327-1.864c-11.16 0-18.564-3.702-27.832-12.997-14.888-14.835-14.888-40.829 0-55.69l148.506-148.532c14.861-14.862 40.855-14.862 55.69 0 14.861 14.86 14.861 40.854 0 55.69L483.832 606.706c-7.404 7.43-18.563 11.159-27.831 12.997z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Ym=[jm],Gm=at({__name:"Link",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},Ym,14,Vm))}}),Xm=["aria-labelledby"],Qm=re("path",{d:"M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",fill:"currentColor","fill-opacity":"0.9"},null,-1),qm=[Qm],Sr=at({__name:"Loading",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},qm,14,Xm))}}),Zm=["aria-labelledby"],Jm=re("path",{d:"M520.665 64.564a29.244 29.244 0 0 0-7.071-.894c-16.211 0-29.35 13.14-29.35 29.35 0 15.83 12.538 28.696 28.223 29.293v.073c.375 0 .751-.014 1.127-.014 216.493 0 389.629 173.942 389.629 390.433 0 216.496-173.136 388.827-389.63 388.827s-389.63-172.333-389.63-388.829c0-.27.01-.536.01-.804h-.01c0-16.209-13.141-29.35-29.35-29.35s-29.35 13.139-29.35 29.35c0 .055.007.11.007.164-.001.214-.007.425-.007.64 0 247.609 200.722 448.331 448.33 448.331 247.607 0 448.33-200.722 448.33-448.33-.002-245.242-196.917-444.456-441.258-448.24z",fill:"currentColor","fill-opacity":"0.9"},null,-1),e0=[Jm],t0=at({__name:"Loading1",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},e0,14,Zm))}}),n0=["aria-labelledby"],r0=re("path",{d:"M512 971.487C259.938 971.487 52.513 764.062 52.513 512S259.938 52.513 512 52.513 971.487 259.938 971.487 512 764.062 971.487 512 971.487zm0-840.205c-210.051 0-380.718 170.667-380.718 380.718S301.95 892.718 512 892.718 892.718 722.05 892.718 512 722.05 131.282 512 131.282zm0 577.641c-107.651 0-196.923-89.272-196.923-196.923S404.349 315.077 512 315.077 708.923 404.349 708.923 512 619.651 708.923 512 708.923zm0-315.077c-65.641 0-118.154 52.513-118.154 118.154S446.36 630.154 512 630.154 630.154 577.64 630.154 512 577.64 393.846 512 393.846zm0-210.051c-21.005 0-39.385-18.38-39.385-39.385V39.385C472.615 18.379 490.995 0 512 0s39.385 18.38 39.385 39.385V144.41c0 21.005-18.38 39.385-39.385 39.385zM512 1024c-21.005 0-39.385-18.38-39.385-39.385V879.59c0-21.005 18.38-39.385 39.385-39.385s39.385 18.38 39.385 39.385v105.025c0 21.006-18.38 39.385-39.385 39.385zm472.615-472.615H879.59c-21.005 0-39.385-18.38-39.385-39.385s18.38-39.385 39.385-39.385h105.025c21.006 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385zm-840.205 0H39.385C18.379 551.385 0 533.005 0 512s18.38-39.385 39.385-39.385H144.41c21.005 0 39.385 18.38 39.385 39.385s-18.38 39.385-39.385 39.385z",fill:"currentColor","fill-opacity":"0.9"},null,-1),a0=[r0],i0=at({__name:"Location",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},a0,14,n0))}}),o0=["aria-labelledby"],s0=re("path",{d:"m530.286 1005.714-25.6-10.971c-36.572-14.629-58.515-25.6-73.143-36.572-102.4-84.114-164.572-135.314-193.829-171.885-43.885-51.2-76.8-91.429-106.057-142.629C95.086 577.83 76.8 504.686 76.8 431.543c0-117.029 43.886-226.743 128-307.2C285.257 43.886 394.971 0 512 0s226.743 43.886 310.857 128c84.114 80.457 128 190.171 128 307.2 0 73.143-18.286 146.286-54.857 212.114-25.6 43.886-58.514 91.429-106.057 142.629-29.257 32.914-87.772 84.114-197.486 171.886 0 0-7.314 7.314-18.286 10.971l-43.885 32.914zM497.37 874.057s3.658 3.657 14.629 7.314c3.657-3.657 7.314-3.657 10.971-7.314C621.714 797.257 683.886 742.4 705.83 716.8c40.228-47.543 69.485-87.771 91.428-128 25.6-47.543 40.229-102.4 40.229-157.257 0-87.772-32.915-168.229-95.086-230.4-58.514-58.514-142.629-91.429-230.4-91.429S340.114 142.63 277.943 204.8c-62.172 62.171-95.086 142.629-95.086 230.4 0 54.857 14.629 109.714 40.229 157.257 25.6 43.886 54.857 80.457 95.085 124.343 25.6 29.257 84.115 80.457 179.2 157.257zm18.286-248.686c-102.4 0-182.857-80.457-182.857-182.857s80.457-182.857 182.857-182.857 182.857 80.457 182.857 182.857-80.457 182.857-182.857 182.857zm0-256c-40.228 0-73.143 32.915-73.143 73.143s32.915 73.143 73.143 73.143 73.143-32.914 73.143-73.143-32.914-73.143-73.143-73.143z",fill:"currentColor","fill-opacity":"0.9"},null,-1),l0=[s0],u0=at({__name:"Location2",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},l0,14,o0))}}),d0=["aria-labelledby"],c0=re("path",{d:"M512 14.897C238.594 14.897 14.897 238.594 14.897 512S238.594 1009.103 512 1009.103 1009.103 785.406 1009.103 512 785.406 14.897 512 14.897zm207.126 646.234c16.57 16.57 16.57 41.425 0 57.995s-41.425 16.57-57.995 0L512 569.996l-149.13 149.13c-16.57 16.57-41.426 16.57-57.996 0s-16.57-41.425 0-57.995L454.004 512l-149.13-149.13c-16.57-16.57-16.57-41.426 0-57.996s41.425-16.57 57.995 0L512 454.004l149.13-149.13c16.57-16.57 41.426-16.57 57.996 0s16.57 41.425 0 57.995L569.996 512l149.13 149.13z",fill:"currentColor","fill-opacity":"0.9"},null,-1),f0=[c0],p0=at({__name:"MaskClose",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},f0,14,d0))}}),h0=["aria-labelledby"],m0=re("path",{d:"M299.52 460.8h409.6c28.16 0 51.2 23.04 51.2 51.2s-23.04 51.2-51.2 51.2h-409.6c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2z",fill:"currentColor","fill-opacity":"0.9"},null,-1),g0=[m0],v0=at({__name:"Minus",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},g0,14,h0))}}),y0=["aria-labelledby"],A0=re("path",{d:"M937.115 428.218c-43.442 0-80.679 37.237-80.679 80.679s37.237 80.679 80.68 80.679c43.442 0 80.678-37.237 80.678-80.679s-34.133-80.679-80.679-80.679m-428.218-52.751c-74.473 0-133.43 58.957-133.43 133.43s58.957 133.43 133.43 133.43 133.43-58.957 133.43-133.43-58.957-133.43-133.43-133.43M83.782 428.218c-43.443 0-80.679 37.237-80.679 80.679s34.133 80.679 80.679 80.679 80.679-37.237 80.679-80.679-37.237-80.679-80.68-80.679",fill:"currentColor","fill-opacity":"0.9"},null,-1),b0=[A0],E0=at({__name:"MoreX",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},b0,14,y0))}}),S0=["aria-labelledby"],C0=re("path",{d:"M940.873 819.2h-85.334V430.933c0-192-153.6-345.6-341.333-345.6s-341.333 153.6-341.333 345.6V819.2H87.539V430.933C87.54 192 279.54 0 514.206 0s426.667 192 426.667 430.933V819.2zM514.633 1024c-68.267 0-132.267-29.867-174.934-85.333-17.066-17.067-12.8-42.667 4.267-59.734 17.067-12.8 46.933-12.8 59.733 8.534 29.867 34.133 68.267 51.2 110.934 51.2s81.066-17.067 106.666-51.2c12.8-17.067 42.667-21.334 59.734-8.534 17.066 12.8 21.333 42.667 8.533 59.734C646.899 994.133 582.899 1024 514.633 1024zm469.333-162.133h-12.8c-294.4-89.6-618.667-89.6-913.067 0-21.333 4.266-46.933-8.534-55.466-29.867-8.534-21.333 4.266-46.933 29.866-51.2 311.467-93.867 652.8-89.6 964.267 0 21.333 8.533 34.133 29.867 29.867 51.2-8.534 21.333-25.6 29.867-42.667 29.867z",fill:"currentColor","fill-opacity":"0.9"},null,-1),T0=[C0],k0=at({__name:"Notice",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1027 1024","aria-labelledby":e.name,role:"presentation"},T0,14,S0))}}),w0=["aria-labelledby"],x0=re("path",{d:"M570.514 789.943c-119.954 0-219.428-99.474-219.428-219.429s99.474-219.428 219.428-219.428 219.429 99.474 219.429 219.428-99.474 219.429-219.429 219.429zm0-351.086c-73.143 0-131.657 58.514-131.657 131.657s58.514 131.657 131.657 131.657 131.657-58.514 131.657-131.657-58.514-131.657-131.657-131.657zM877.714 1024h-614.4C117.03 1024 0 906.971 0 760.686V380.343c0-146.286 117.029-263.314 263.314-263.314h32.183c0-2.926 2.926-8.778 2.926-11.703C315.977 43.886 374.49 0 438.857 0h263.314c70.218 0 128.732 49.737 143.36 117.029h32.183c146.286 0 263.315 117.028 263.315 263.314v380.343C1141.029 906.97 1024 1024 877.714 1024zm-614.4-819.2c-96.548 0-175.543 78.994-175.543 175.543v380.343c0 96.548 78.995 175.543 175.543 175.543h614.4c96.549 0 175.543-78.995 175.543-175.543V380.343c0-96.549-78.994-175.543-175.543-175.543H819.2c-32.183 0-58.514-26.331-58.514-58.514S734.354 87.77 702.17 87.77H438.857c-26.331 0-49.737 17.555-55.588 40.96-2.926 5.852-2.926 11.703-2.926 17.555 0 32.183-26.332 58.514-58.514 58.514h-58.515zm-87.771 160.914a73.143 73.143 0 1 0 146.286 0 73.143 73.143 0 1 0-146.286 0Z",fill:"currentColor","fill-opacity":"0.9"},null,-1),_0=[x0],L0=at({__name:"Photograph",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1141 1024","aria-labelledby":e.name,role:"presentation"},_0,14,w0))}}),D0=["aria-labelledby"],I0=re("path",{d:"M345.6 460.8h409.6q51.2 0 51.2 51.2t-51.2 51.2H345.6q-51.2 0-51.2-51.2t51.2-51.2zM550.4 256q51.2 0 51.2 51.2v409.6q0 51.2-51.2 51.2t-51.2-51.2V307.2q0-51.2 51.2-51.2z",fill:"currentColor","fill-opacity":"0.9"},null,-1),P0=[I0],O0=at({__name:"Plus",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},P0,14,D0))}}),R0=["aria-labelledby"],M0=re("path",{d:"M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",fill:"currentColor","fill-opacity":"0.9"},null,-1),B0=[M0],qo=at({__name:"Right",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},B0,14,R0))}}),$0=["aria-labelledby"],N0=re("path",{d:"M1024 657.723H905.846v-126.03c0-228.431-177.23-413.54-393.846-413.54s-393.846 185.109-393.846 413.54v126.03H0v-126.03C0 236.307 228.43 0 512 0s512 236.308 512 531.692v126.031zM196.923 866.462C86.646 866.462 0 779.815 0 669.538s86.646-196.923 196.923-196.923 196.923 86.647 196.923 196.923S307.2 866.462 196.923 866.462zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm630.154 275.693c-110.277 0-196.923-86.647-196.923-196.924S716.8 472.615 827.077 472.615 1024 559.262 1024 669.538s-86.646 196.924-196.923 196.924zm0-275.693c-43.323 0-78.77 35.446-78.77 78.77s35.447 78.769 78.77 78.769 78.77-35.446 78.77-78.77-35.447-78.769-78.77-78.769zm-149.662 429.293c-23.63 0-47.261-15.754-55.138-43.324-7.877-31.507 7.877-63.015 39.385-74.83 102.4-31.508 189.046-102.4 236.307-196.923 15.754-27.57 51.2-39.385 78.77-23.631s39.384 51.2 23.63 78.77c-63.015 122.091-177.23 216.614-307.2 256-3.938 3.938-11.815 3.938-15.754 3.938z",fill:"currentColor","fill-opacity":"0.9"},null,-1),F0=[N0],U0=at({__name:"Service",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},F0,14,$0))}}),K0=["aria-labelledby"],W0=re("path",{d:"M1047.135 361.244 722.87 312.89 577.802 22.756c-2.844-8.534-11.378-14.223-19.911-17.067-19.911-8.533-45.511-2.845-54.045 17.067L358.78 312.889 34.513 358.4c-8.533 0-17.067 5.689-22.755 11.378-17.067 17.066-14.223 42.666 0 56.889l233.244 227.555-54.044 321.422c-2.845 8.534 0 17.067 2.844 25.6 11.378 19.912 34.133 28.445 54.044 17.067L537.98 867.556l290.133 150.755c8.533 2.845 17.067 5.689 25.6 2.845 22.756-2.845 36.978-25.6 34.133-45.512l-54.044-321.422 233.244-227.555c5.69-5.69 11.378-14.223 11.378-22.756 5.69-19.911-8.533-39.822-31.289-42.667z",fill:"currentColor","fill-opacity":"0.9"},null,-1),H0=[W0],sl=at({__name:"StarFillN",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1081 1024","aria-labelledby":e.name,role:"presentation"},H0,14,K0))}}),z0=["aria-labelledby"],V0=re("path",{d:"M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm0-938.667c-234.667 0-426.667 192-426.667 426.667s192 426.667 426.667 426.667 426.667-192 426.667-426.667S746.667 85.333 512 85.333zM448 320a64 64 0 1 0 128 0 64 64 0 1 0-128 0Zm-17.067 149.333h51.2c12.8 0 21.334 8.534 21.334 21.334v8.533c0 12.8-8.534 21.333-21.334 21.333h-51.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6zm51.2 0H524.8c25.6 0 51.2 21.334 51.2 51.2v8.534L537.6 755.2c0 8.533-8.533 17.067-21.333 17.067H473.6c-25.6 0-51.2-21.334-51.2-51.2v-8.534L460.8 486.4c4.267-8.533 12.8-17.067 21.333-17.067zm8.534 251.734h76.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6h-76.8c-12.8 0-21.334-8.534-21.334-21.334v-12.8c4.267-12.8 12.8-17.066 21.334-17.066z",fill:"currentColor","fill-opacity":"0.9"},null,-1),j0=[V0],Y0=at({__name:"Tips",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},j0,14,z0))}}),G0=["aria-labelledby"],X0=re("path",{d:"M136.533 540.444c-11.377 0-25.6-5.688-34.133-17.066-14.222-19.911-11.378-45.511 8.533-59.734L477.867 179.2c19.91-14.222 45.51-11.378 59.733 8.533s11.378 45.511-8.533 59.734L162.133 531.91c-5.689 5.689-14.222 8.533-25.6 8.533zm745.245 0c-8.534 0-17.067-2.844-25.6-8.533L489.244 247.467c-19.91-14.223-22.755-42.667-8.533-59.734 14.222-19.91 42.667-22.755 59.733-8.533l366.934 284.444c19.91 14.223 22.755 42.667 8.533 59.734-8.533 11.378-19.911 17.066-34.133 17.066zM512 1024c-22.756 0-42.667-19.911-42.667-42.667v-768c0-22.755 19.911-42.666 42.667-42.666s42.667 19.91 42.667 42.666v768c0 22.756-19.911 42.667-42.667 42.667zM884.622 85.333h-742.4c-22.755 0-42.666-19.91-42.666-42.666S119.466 0 142.222 0h742.4c22.756 0 42.667 19.911 42.667 42.667s-19.911 42.666-42.667 42.666z",fill:"currentColor","fill-opacity":"0.9"},null,-1),Q0=[X0],q0=at({__name:"Top",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},Q0,14,G0))}}),Z0=["aria-labelledby"],J0=re("path",{d:"m573.056 752 308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392L450.976 752a76.8 76.8 0 0 0 122.08 0z",fill:"currentColor","fill-opacity":"0.9"},null,-1),eg=[J0],tg=at({__name:"TriangleDown",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},eg,14,Z0))}}),ng=["aria-labelledby"],rg=re("path",{d:"m573.056 272 308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z",fill:"currentColor","fill-opacity":"0.9"},null,-1),ag=[rg],ig=at({__name:"TriangleUp",props:{class:{type:String,default:""},name:{type:String,default:""},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},emits:["click"],setup(e,{emit:t}){const n=e,o=r=>{t("click",r)},l=r=>{if(r)return isNaN(Number(r))?String(r):r+"px"},f=ae(()=>{const r="nut-icon";return{[n.class]:n.class,[r]:!0,[r+"-"+n.name]:n.name}}),i=ae(()=>{const r={};return r.height=l(n.height),r.width=l(n.width),r.color=n.color,r});return(r,a)=>(j(),X("svg",{class:fe(Be(f)),style:Ae(Be(i)),onClick:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024","aria-labelledby":e.name,role:"presentation"},ag,14,ng))}}),_e=(e,t)=>{const n=e.__vccOpts||e;for(const[o,l]of t)n[o]=l;return n},{componentName:og,create:sg}=we("button"),lg=sg({components:{Loading:Sr},props:{color:String,shape:{type:String,default:"round"},plain:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:"default"},size:{type:String,default:"normal"},block:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t,slots:n}){const{type:o,size:l,shape:f,disabled:i,loading:r,color:a,plain:D,block:h}=Qe(e),$=d=>{!r.value&&!i.value&&t("click",d)},s=ae(()=>{const d=og;return{[d]:!0,[`${d}--${o.value}`]:o.value,[`${d}--${l.value}`]:l.value,[`${d}--${f.value}`]:f.value,[`${d}--plain`]:D.value,[`${d}--block`]:h.value,[`${d}--disabled`]:i.value,[`${d}--loading`]:r.value}}),N=ae(()=>{var d;const g={};return a!=null&&a.value&&(D.value?(g.color=a.value,g.background="#fff",(d=a.value)!=null&&d.includes("gradient")||(g.borderColor=a.value)):(g.color="#fff",g.background=a.value)),g});return{handleClick:$,classes:s,getStyle:N}}}),ug={class:"nut-button__warp"};function dg(e,t,n,o,l,f){const i=xe("Loading");return j(),X("view",{class:fe(e.classes),style:Ae(e.getStyle),onClick:t[0]||(t[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[re("view",ug,[e.loading?(j(),Pe(i,{key:0,class:"nut-icon-loading"})):ce("",!0),e.$slots.icon&&!e.loading?he(e.$slots,"icon",{key:1}):ce("",!0),e.$slots.default?(j(),X("view",{key:2,class:fe({"nut-button__text":e.$slots.icon||e.loading})},[he(e.$slots,"default")],2)):ce("",!0)])],6)}const Jt=_e(lg,[["render",dg]]),cg=e=>e,fg=cg(Jt);function Zo(){return Yt().proxy.$router||null}const Bt=e=>isNaN(Number(e))?String(e):`${e}px`,{componentName:pg,create:hg}=we("cell"),mg=hg({components:{Right:qo},props:{title:{type:String,default:""},subTitle:{type:String,default:""},desc:{type:String,default:""},descTextAlign:{type:String,default:"right"},isLink:{type:Boolean,default:!1},to:[String,Object],replace:{type:Boolean,default:!1},roundRadius:{type:[String,Number],default:""},url:{type:String,default:""},center:{type:Boolean,default:!1},size:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const n=ae(()=>{const i=pg;return{[i]:!0,[`${i}--clickable`]:e.isLink||e.to,[`${i}--center`]:e.center,[`${i}--large`]:e.size=="large"}}),o=Zo(),l=ae(()=>({borderRadius:Bt(e.roundRadius)}));return{handleClick:i=>{t("click",i),e.to&&o?o[e.replace?"replace":"push"](e.to):e.url&&(e.replace?location.replace(e.url):location.href=e.url)},classes:n,baseStyle:l}}}),gg={key:0,class:"nut-cell__icon"},vg={key:1,class:"nut-cell__title"},yg={class:"title"},Ag={class:"nut-cell__title-desc"};function bg(e,t,n,o,l,f){const i=xe("Right");return j(),X("view",{class:fe(e.classes),style:Ae(e.baseStyle),onClick:t[0]||(t[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[he(e.$slots,"default",{},()=>[e.$slots.icon?(j(),X("view",gg,[he(e.$slots,"icon")])):ce("",!0),e.title||e.subTitle||e.$slots.title?(j(),X("view",vg,[e.subTitle?(j(),X(De,{key:0},[he(e.$slots,"title",{},()=>[re("view",yg,me(e.title),1)]),re("view",Ag,me(e.subTitle),1)],64)):he(e.$slots,"title",{key:1},()=>[nt(me(e.title),1)])])):ce("",!0),e.desc?(j(),X("view",{key:2,class:fe(["nut-cell__value",{"nut-cell__value--alone":!e.title&&!e.subTitle&&!e.$slots.title}]),style:Ae({"text-align":e.descTextAlign})},me(e.desc),7)):ce("",!0),he(e.$slots,"link",{},()=>[e.isLink||e.to?(j(),Pe(i,{key:0,class:"nut-cell__link"})):ce("",!0)])])],6)}const Ji=_e(mg,[["render",bg]]),Eg=e=>e,Sg=Eg(Ji),{componentName:Cg,create:Tg}=we("cell-group"),kg=Tg({props:{title:{type:String,default:""},desc:{type:String,default:""}},setup(){return{classes:ae(()=>({[Cg]:!0}))}}}),wg={key:1,class:"nut-cell-group__title"},xg={key:3,class:"nut-cell-group__desc"},_g={class:"nut-cell-group__warp"};function Lg(e,t,n,o,l,f){return j(),X("view",{class:fe(e.classes)},[e.$slots.title?he(e.$slots,"title",{key:0}):e.title?(j(),X("view",wg,me(e.title),1)):ce("",!0),e.$slots.desc?he(e.$slots,"desc",{key:2}):e.desc?(j(),X("view",xg,me(e.desc),1)):ce("",!0),re("view",_g,[he(e.$slots,"default")])],2)}const eo=_e(kg,[["render",Lg]]),Dg=e=>e,Ig=Dg(eo);let Zr=0;const ll="nut-overflow-hidden",Pg=e=>[()=>{if(e())try{!Zr&&il.classList.add(ll),Zr++}catch{}},()=>{if(e()&&Zr)try{Zr--,!Zr&&il.classList.remove(ll)}catch{}}],{componentName:Og,create:Rg}=we("overlay"),Mg=Rg({props:{visible:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:2e3},duration:{type:[Number,String],default:.3},lockScroll:{type:Boolean,default:!0},overlayClass:{type:String,default:""},overlayStyle:{type:Object},closeOnClickOverlay:{type:Boolean,default:!0}},emits:["click","update:visible"],setup(e,{emit:t}){const[n,o]=Pg(()=>e.lockScroll),l=ae(()=>({[Og]:!0,[e.overlayClass]:!0})),f=ae(()=>({transitionDuration:`${e.duration}s`,zIndex:e.zIndex,...e.overlayStyle}));return No(()=>{e.visible?n():o()}),{classes:l,style:f,onClick:r=>{e.closeOnClickOverlay&&(t("update:visible",!1),t("click",r))}}}});function Bg(e,t,n,o,l,f){return j(),Pe(ya,{name:"overlay-fade"},{default:Ke(()=>[Et(re("view",{class:fe(e.classes),onClick:t[0]||(t[0]=bt((...i)=>e.onClick&&e.onClick(...i),["stop"])),style:Ae(e.style)},[he(e.$slots,"default")],6),[[_t,e.visible]])]),_:3})}const ma=_e(Mg,[["render",Bg]]),$g=e=>e,Ng=$g(ma),Cr={visible:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:2e3},duration:{type:[Number,String],default:.3},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},position:{type:String,default:"center"},transition:{type:String,default:""},style:{type:Object,default:{}},popClass:{type:String,default:""},closeable:{type:Boolean,default:!1},closeIconPosition:{type:String,default:"top-right"},closeIcon:{type:String,default:"close"},destroyOnClose:{type:Boolean,default:!0},teleport:{type:[String,Element],default:"body"},overlay:{type:Boolean,default:!0},round:{type:Boolean,default:!1},teleportDisable:{type:Boolean,default:!1},safeAreaInsetBottom:{type:Boolean,default:!1},overlayClass:{type:String,default:""},overlayStyle:{type:Object,default:{}}},Nu=2e3;let ul=Nu;const Fg=(e,t)=>({components:t,props:{...Cr},emits:["click-pop","click-close-icon","open","close","opend","closed","click-overlay","update:visible"],setup(n,{emit:o}){const l=ze({zIndex:n.zIndex,showSlot:!0,closed:n.closeable}),f=ae(()=>({[e]:!0,round:n.round,[`nut-popup--${n.position}`]:!0,[`nut-popup--${n.position}--safebottom`]:n.position==="bottom"&&n.safeAreaInsetBottom,[n.popClass]:!0})),i=ae(()=>({zIndex:l.zIndex,transitionDuration:`${n.duration}s`,...n.style})),r=ae(()=>n.transition?n.transition:`nut-popup-slide-${n.position}`),a=()=>{n.zIndex!==Nu&&(ul=Number(n.zIndex)),o("update:visible",!0),l.zIndex=++ul,n.destroyOnClose&&(l.showSlot=!0),o("open")},D=()=>{o("update:visible",!1),o("close"),n.destroyOnClose&&setTimeout(()=>{l.showSlot=!1},+n.duration*1e3)},h=g=>{o("click-pop",g)},$=g=>{g.stopPropagation(),o("click-close-icon",g),o("update:visible",!1)},s=g=>{n.closeOnClickOverlay&&(o("click-overlay",g),o("update:visible",!1))},N=g=>{o("opend",g)},d=g=>{o("closed",g)};return Me(()=>n.visible,g=>{n.visible?a():D()}),No(()=>{l.closed=n.closeable}),{...Qe(l),popStyle:i,transitionName:r,classes:f,onClick:h,onClickCloseIcon:$,onClickOverlay:s,onOpened:N,onClosed:d}}}),{componentName:Ug,create:Kg}=we("popup"),Wg=Kg(Fg(Ug,{[ma.name]:ma,Close:pi}));function Hg(e,t,n,o,l,f){const i=xe("nut-overlay"),r=xe("Close");return j(),Pe(Ep,{to:e.teleport,disabled:!e.teleportDisable},[e.overlay?(j(),Pe(i,pa({key:0,visible:e.visible,"close-on-click-overlay":e.closeOnClickOverlay,"z-index":e.zIndex,"lock-scroll":e.lockScroll,duration:e.duration,"overlay-class":e.overlayClass,"overlay-style":e.overlayStyle,onClick:e.onClickOverlay},e.$attrs),null,16,["visible","close-on-click-overlay","z-index","lock-scroll","duration","overlay-class","overlay-style","onClick"])):ce("",!0),Ne(ya,{name:e.transitionName,onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:Ke(()=>[Et(re("view",{class:fe(e.classes),style:Ae(e.popStyle),onClick:t[1]||(t[1]=(...a)=>e.onClick&&e.onClick(...a))},[e.showSlot?he(e.$slots,"default",{key:0}):ce("",!0),e.closed?(j(),X("view",{key:1,onClick:t[0]||(t[0]=(...a)=>e.onClickCloseIcon&&e.onClickCloseIcon(...a)),class:fe(["nut-popup__close-icon","nut-popup__close-icon--"+e.closeIconPosition])},[he(e.$slots,"close-icon",{},()=>[Ne(r,{height:"12px"})])],2)):ce("",!0)],6),[[_t,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const pt=_e(Wg,[["render",Hg]]),zg=e=>e,Vg=zg(pt),{componentName:wI,create:jg}=we("config-provider"),Yg=jg({props:{theme:{type:String,default:""},themeVars:{type:Object,default:()=>{}},tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=f=>(f=f.replace(f.charAt(0),f.charAt(0).toLocaleLowerCase()),f.replace(/([a-z])([A-Z])/g,(i,r,a)=>r+"-"+a.toLowerCase())),o=f=>{if(!!f){var i=f.toLowerCase(),r=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(i&&r.test(i)){if(i.length===4){for(var a="#",D=1;D<4;D+=1)a+=i.slice(D,D+1).concat(i.slice(D,D+1));i=a}for(var h=[],D=1;D<7;D+=2)h.push(parseInt("0x"+i.slice(D,D+2)));return h.join(",")}return null}},l=f=>{var i;if(!f)return;const r={},a=(i=e==null?void 0:e.themeVars)==null?void 0:i.primaryColor;return a&&(r["--nut-address-region-tab-line"]=`linear-gradient(90deg, ${a} 0%, rgba(${o(a)},0.15) 100%) `,r["--nut-tabs-horizontal-tab-line-color"]=`linear-gradient(90deg, ${a} 0%, rgba(${o(a)},0.15)100%)`,r["--nut-tabs-vertical-tab-line-color"]=`linear-gradient(180deg, ${a} 0%, rgba(${o(a)},0.15) 100%) `),Object.keys(f).forEach(D=>{r[`--nut-${n(D)}`]=f[D]}),r};return()=>{var f;return kt(e.tag,{class:`nut-theme-${e.theme}`,style:l(e.themeVars)},(f=t.default)==null?void 0:f.call(t))}}}),Gg=e=>e,Xg=Gg(Yg),{componentName:Qg,create:qg}=we("image"),Zg=qg({props:{src:String,fit:{type:String,default:"fill"},position:{type:String,default:"center"},alt:{type:String,default:""},width:{type:String,default:"center"},height:{type:String,default:""},round:{type:Boolean,default:!1},radius:[String,Number],showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0}},components:{Image:$m,ImageError:Om},emits:["click","load","error"],setup(e,{emit:t}){const n=ze({loading:!0,isError:!1,slotLoding:Jn().loading,slotError:Jn().error}),o=ae(()=>{const D=Qg;return{[D]:!0,[`${D}-round`]:e.round}}),l=ae(()=>{let D={};return e.width&&(D.width=Bt(e.width)),e.height&&(D.height=Bt(e.height)),e.radius!==void 0&&e.radius!==null&&(D.overflow="hidden",D.borderRadius=Bt(e.radius)),D}),f=ae(()=>({objectFit:e.fit,objectPosition:e.position}));Me(()=>e.src,D=>{n.isError=!1,n.loading=!0});const i=()=>{n.loading=!1,t("load")},r=()=>{n.isError=!0,n.loading=!1,t("error")},a=D=>{t("click",D)};return{...Qe(n),imageClick:a,classes:o,styles:f,stylebox:l,error:r,load:i}}}),Jg=["src","alt"],ev={key:0,class:"nut-img-loading"},tv={key:1,class:"nut-img-error"};function nv(e,t,n,o,l,f){const i=xe("Image"),r=xe("ImageError");return j(),X("view",{class:fe(e.classes),style:Ae(e.stylebox),onClick:t[2]||(t[2]=(...a)=>e.imageClick&&e.imageClick(...a))},[re("img",{class:"nut-img",src:e.src,alt:e.alt,onLoad:t[0]||(t[0]=(...a)=>e.load&&e.load(...a)),onError:t[1]||(t[1]=(...a)=>e.error&&e.error(...a)),style:Ae(e.styles)},null,44,Jg),e.loading?(j(),X("view",ev,[e.slotLoding?ce("",!0):(j(),Pe(i,{key:0,width:"16px",height:"20px",name:"image"})),he(e.$slots,"loading")])):ce("",!0),e.isError&&!e.loading?(j(),X("view",tv,[e.slotError?ce("",!0):(j(),Pe(r,{key:0,width:"16px",height:"20px",name:"imageError"})),he(e.$slots,"error")])):ce("",!0)],6)}const rv=_e(Zg,[["render",nv]]),av=e=>e,iv=av(rv),{create:ov}=we("layout"),sv=ov({}),lv=e=>e,uv=lv(sv),{componentName:dv,create:cv}=we("col"),fv=cv({props:{span:{type:[String,Number],default:"24"},offset:{type:[String,Number],default:"0"}},emits:[],setup(e){const t=dv,n=xt("gutter"),o=ae(()=>({[t]:!0,[t+"-gutter"]:n,["nut-col-"+e.span]:!0,["nut-col-offset-"+e.offset]:!0})),l=ae(()=>({paddingLeft:n/2+"px",paddingRight:n/2+"px"}));return{classes:o,style:l}}});function pv(e,t,n,o,l,f){return j(),X("view",{class:fe(e.classes),style:Ae(e.style)},[he(e.$slots,"default")],6)}const hv=_e(fv,[["render",pv]]),mv=e=>e,gv=mv(hv),{componentName:vv,create:yv}=we("row"),Av=yv({props:{type:{type:String,default:""},gutter:{type:[String,Number],default:""},justify:{type:String,default:"start"},align:{type:String,default:"flex-start"},flexWrap:{type:String,default:"nowrap"}},emits:[],setup(e){const t=vv;Ot("gutter",e.gutter);const n=(l,f)=>l?f?`nut-row-${l}-${f}`:"":`nut-row-${f}`;return{getClasses:()=>`
              ${n("",e.type)}
              ${n("justify",e.justify)}
              ${n("align",e.align)}
              ${n("flex",e.flexWrap)}
              ${t}