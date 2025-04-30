var Zt=Object.defineProperty;var Gt=(s,t,e)=>t in s?Zt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var u=(s,t,e)=>Gt(s,typeof t!="symbol"?t+"":t,e);import{f as Rt,B as Xt,E as U,T as A,p as te,v as N,r as F,M as ot,m as Nt,x as E}from"./lit-element-D-o1_RG-.js";import{_ as ee}from"./iframe-DO7s0hfi.js";const se=(s,t)=>{const e=h=>h===void 0,i=h=>h,r=s.filter(e).length,n=t.filter(e).length,o=s.filter(i).length,l=t.filter(i).length;return r<n?-1:r>n||o<l?1:o>l?-1:0};class os{constructor(t,e={}){u(this,"_treeData");u(this,"_roots");u(this,"childProperty");u(this,"searchProperty");u(this,"pathLocatorSeparator");u(this,"pathStringSeparator");this._treeData=t,this._roots=Object.values(t),this.pathLocatorSeparator=e.pathLocatorSeparator||".",this.pathStringSeparator=e.pathStringSeparator||"/",this.childProperty=e.childProperty||"children",this.searchProperty=e.searchProperty||"name"}getNodeByProperty(t,e=this.searchProperty,i=this._roots){if(t!==void 0)return this.findNode(t,e,i)}searchNodes(t,e,i,r=this.searchProperty){const n={propertyName:r,exact:i!==void 0?i:!0,firstHitOnly:!1};return this._searchNodes(t,n,e)}findNode(t,e=this.searchProperty,i){const r={propertyName:e,exact:!0,firstHitOnly:!0};return this._searchNodes(t,r,i).shift()}_searchNodes(t,e,i=this._roots){const r=[];for(const n of i){const o=this.search(n,t,e);if(e.firstHitOnly&&o.length>0)return o;r.push(...o)}return r}getNodeByPathLocator(t,e=this._treeData,i=this.pathLocatorSeparator){return t?this.getPathNodes(t,e,i).pop():this._roots}getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){return t?Object.keys(e).map(r=>{const n={};return n[r]=e[r],this._getPathNodes(t,n,i)}).filter(r=>r&&r.length>0).sort(se)[0]:e}_getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){const r=t.split(i),n=this._pathToNodes(r,e,i);for(;n.length>0&&n[0]===void 0;)n.shift();return n}_pathToNodes(t,e,i){let r=e;return t.map((n,o)=>{if(!r)return;const l=r[n]??r[t.slice(0,o+1).join(i)];return l&&(r=l[this.childProperty]),l})}getPathString(t,e=this.searchProperty,i=this.pathStringSeparator,r=this.pathLocatorSeparator){const n=this.getPathNodes(t,this._treeData,r);if(Array.isArray(n))return n.filter(o=>o!=null).map(o=>o[e]).join(i)}getPathStringByProperty(t,e=this.searchProperty,i=this.searchProperty,r=this.pathStringSeparator,n=this.pathLocatorSeparator){if(t===void 0)return;if(e==="pathLocator")return this.getPathString(t,i,r,n);const o=this.getNodeByProperty(t,e);if(o){const l=o.pathLocator||o.path;return this.getPathString(l,i,r)}}getChildren(t){return!t||!t[this.childProperty]?[]:Object.values(t[this.childProperty])}hasChildren(t){if(!t)return!1;const e=t[this.childProperty];if(!e)return!1;for(const i in e)return!0;return!1}getProperty(t,e){if(!(!t||!e))return t[e]}nodeConformsSearch(t,e,i){const r=i?t[i.propertyName]:void 0;if(!r){console.error("options.propertyName needs to be specified.");return}if(i!=null&&i.exact)return r===e;if(e===void 0)return!1;const n=r.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase(),o=e.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase();return n.indexOf(o)>-1}search(t,e,i,r=[]){const n=this.nodeConformsSearch(t,e,i),o=this.getChildren(t);n&&r.push(t);for(const l of o){const h=this.search(l,e,i,r);if(!Array.isArray(h))return[h]}return r}}let Z,Ot=0;function vt(s){Z=s}function bt(){Z=null,Ot=0}function ie(){return Ot++}const lt=Symbol("haunted.phase"),K=Symbol("haunted.hook"),yt=Symbol("haunted.update"),wt=Symbol("haunted.commit"),O=Symbol("haunted.effects"),H=Symbol("haunted.layoutEffects"),ut="haunted.context";var Pt,kt,At;At=K,kt=O,Pt=H;class re{constructor(t,e){u(this,"update");u(this,"host");u(this,"virtual");u(this,At);u(this,kt);u(this,Pt);this.update=t,this.host=e,this[K]=new Map,this[O]=[],this[H]=[]}run(t){vt(this);let e=t();return bt(),e}_runEffects(t){let e=this[t];vt(this);for(let i of e)i.call(this);bt()}runEffects(){this._runEffects(O)}runLayoutEffects(){this._runEffects(H)}teardown(){this[K].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}const ne=Promise.resolve().then.bind(Promise.resolve());function Mt(){let s=[],t;function e(){t=null;let i=s;s=[];for(var r=0,n=i.length;r<n;r++)i[r]()}return function(i){s.push(i),t==null&&(t=ne(e))}}const oe=Mt(),Ct=Mt();var Tt;Tt=lt;class le{constructor(t,e){u(this,"renderer");u(this,"host");u(this,"state");u(this,Tt);u(this,"_updateQueued");this.renderer=t,this.host=e,this.state=new re(this.update.bind(this),e),this[lt]=null,this._updateQueued=!1}update(){this._updateQueued||(oe(()=>{let t=this.handlePhase(yt);Ct(()=>{this.handlePhase(wt,t),Ct(()=>{this.handlePhase(O)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(t,e){switch(this[lt]=t,t){case wt:this.commit(e),this.runEffects(H);return;case yt:return this.render();case O:return this.runEffects(O)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}const dt=(...s)=>{const t=new CSSStyleSheet;return t.replaceSync(s.join("")),t},ae=s=>s==null?void 0:s.map(t=>typeof t=="string"?dt(t):t),he=(s,...t)=>s.flatMap((e,i)=>[e,t[i]||""]).join(""),ce=he,ue=(s="")=>s.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");function de(s){class t extends le{constructor(n,o,l){super(n,l||o);u(this,"frag");u(this,"renderResult");this.frag=o}commit(n){this.renderResult=s(n,this.frag)}}function e(i,r,n){const o=(n||r||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:h=!0,shadowRootInit:a={},styleSheets:g}=n||r||{},d=ae(i.styleSheets||g);class f extends o{constructor(){super();u(this,"_scheduler");if(h===!1)this._scheduler=new t(i,this);else{const p=this.attachShadow({mode:"open",...a});d&&(p.adoptedStyleSheets=d),this._scheduler=new t(i,p,this)}}static get observedAttributes(){return i.observedAttributes||l||[]}connectedCallback(){var p;this._scheduler.update(),(p=this._scheduler.renderResult)==null||p.setConnected(!0)}disconnectedCallback(){var p;this._scheduler.teardown(),(p=this._scheduler.renderResult)==null||p.setConnected(!1)}attributeChangedCallback(p,y,w){if(y===w)return;let I=w===""?!0:w;Reflect.set(this,ue(p),I)}}function _(v){let m=v,p=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){p&&m===y||(p=!0,m=y,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(o.prototype,{getPrototypeOf(v){return v},set(v,m,p,y){let w;return m in v?(w=Object.getOwnPropertyDescriptor(v,m),w&&w.set?(w.set.call(y,p),!0):(Reflect.set(v,m,p,y),!0)):(typeof m=="symbol"||m[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:p}:w=_(p),Object.defineProperty(y,m,w),w.set&&w.set.call(y,p),!0)}});return Object.setPrototypeOf(f.prototype,b),f}return e}class T{constructor(t,e){u(this,"id");u(this,"state");this.id=t,this.state=e}}function pe(s,...t){let e=ie(),i=Z[K],r=i.get(e);return r||(r=new s(e,Z,...t),i.set(e,r)),r.update(...t)}function R(s){return pe.bind(null,s)}function It(s){return R(class extends T{constructor(e,i,r,n){super(e,i);u(this,"callback");u(this,"lastValues");u(this,"values");u(this,"_teardown");s(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function Dt(s,t){s[O].push(t)}const $=It(Dt),fe=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,_e=R(class extends T{constructor(t,e,i){super(t,e);u(this,"Context");u(this,"value");u(this,"_ranEffect");u(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Dt(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};fe(this.state.host).dispatchEvent(new CustomEvent(ut,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:n}=e;this.value=r?n:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function me(s){return t=>{const e={Provider:class extends HTMLElement{constructor(){super();u(this,"listeners");u(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(ut,this)}disconnectedCallback(){this.removeEventListener(ut,this)}handleEvent(r){const{detail:n}=r;n.Context===e&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let n of this.listeners)n(r)}get value(){return this._value}},Consumer:s(function({render:i}){const r=_e(e);return i(r)},{useShadowDOM:!1}),defaultValue:t};return e}}const M=R(class extends T{constructor(t,e,i,r){super(t,e);u(this,"value");u(this,"values");this.value=i(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),x=(s,t)=>M(()=>s,t);function ge(s,t){s[H].push(t)}It(ge);const at=R(class extends T{constructor(t,e,i){super(t,e);u(this,"args");this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});R(class extends T{constructor(t,e,i,r,n){super(t,e);u(this,"reducer");u(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const ve=/([A-Z])/gu,Et=R(class extends T{constructor(t,e,i,r){super(t,e);u(this,"property");u(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(ve,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),ls=s=>t=>{t.preventDefault(),s(t.detail.value)};function Vt(s){return M(()=>({current:s}),[])}function be({render:s}){const t=de(s),e=me(t);return{component:t,createContext:e}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Y=s=>(...t)=>({_$litDirective$:s,values:t});let tt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=(s,t)=>{var i;const e=s._$AN;if(e===void 0)return!1;for(const r of e)(i=r._$AO)==null||i.call(r,t,!1),j(r,t);return!0},G=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},Bt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Ce(t)}};function ye(s){this._$AN!==void 0?(G(this),this._$AM=s,Bt(this)):this._$AM=s}function we(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)j(i[n],!1),G(i[n]);else i!=null&&(j(i,!1),G(i));else j(this,s)}const Ce=s=>{s.type==z.CHILD&&(s._$AP??(s._$AP=we),s._$AQ??(s._$AQ=ye))};class Ft extends tt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Bt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),e&&(j(this,t),G(this))}setValue(t){if(Rt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:pt}=be({render:Xt}),ht=new WeakMap,ft=Y(class extends Ft{render(s){return U}update(s,[t]){var i;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=s.options)==null?void 0:i.host,this.rt(this.ct=s.element)),U}rt(s){if(this.isConnected||(s=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=ht.get(t);e===void 0&&(e=new WeakMap,ht.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){var s,t;return typeof this.Y=="function"?(s=ht.get(this.ht??globalThis))==null?void 0:s.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(s,t,e){return s?t(s):e==null?void 0:e(s)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee={},Se=Y(class extends tt{constructor(){super(...arguments),this.ot=Ee}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,r)=>i===this.ot[r]))return A}else if(this.ot===t)return A;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=(s,t,e)=>{const i=new Map;for(let r=t;r<=e;r++)i.set(s[r],r);return i},xe=Y(class extends tt{constructor(s){if(super(s),s.type!==z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const r=[],n=[];let o=0;for(const l of s)r[o]=i?i(l,o):o,n[o]=e(l,o),o++;return{values:n,keys:r}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){const r=te(s),{values:n,keys:o}=this.dt(t,e,i);if(!Array.isArray(r))return this.ut=o,n;const l=this.ut??(this.ut=[]),h=[];let a,g,d=0,f=r.length-1,_=0,b=n.length-1;for(;d<=f&&_<=b;)if(r[d]===null)d++;else if(r[f]===null)f--;else if(l[d]===o[_])h[_]=N(r[d],n[_]),d++,_++;else if(l[f]===o[b])h[b]=N(r[f],n[b]),f--,b--;else if(l[d]===o[b])h[b]=N(r[d],n[b]),F(s,h[b+1],r[d]),d++,b--;else if(l[f]===o[_])h[_]=N(r[f],n[_]),F(s,r[d],r[f]),f--,_++;else if(a===void 0&&(a=St(o,_,b),g=St(l,d,f)),a.has(l[d]))if(a.has(l[f])){const v=g.get(o[_]),m=v!==void 0?r[v]:null;if(m===null){const p=F(s,r[d]);N(p,n[_]),h[_]=p}else h[_]=N(m,n[_]),F(s,r[d],m),r[v]=null;_++}else ot(r[f]),f--;else ot(r[d]),d++;for(;_<=b;){const v=F(s,h[b+1]);N(v,n[_]),h[_++]=v}for(;d<=f;){const v=r[d++];v!==null&&ot(v)}return this.ut=o,Nt(s,h),A}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class et extends Event{constructor(t){super(et.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}et.eventName="rangeChanged";class st extends Event{constructor(t){super(st.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}st.eventName="visibilityChanged";class it extends Event{constructor(){super(it.eventName,{bubbles:!1})}}it.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ze{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Le extends ze{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(i)}scrollBy(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:i}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,i){return this._scrollTo(t,e,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const n=Math.abs(i-t),o=Math.abs(r-e);n<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let xt=typeof window<"u"?window.ResizeObserver:void 0;const $e=Symbol("virtualizerRef"),Q="virtualizer-sizer";let zt;class Pe{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new xt(()=>this._hostElementSizeChanged()),this._childrenRO=new xt(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[$e]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Te(this._hostElement,t),this._scrollerController=new Le(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var t,e,i,r;this._scrollEventListeners.forEach(n=>n.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(t=this._scrollerController)==null||t.detach(this),this._scrollerController=null,(e=this._mutationObserver)==null||e.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(r=this._childrenRO)==null||r.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${Q}]`);e||(e=document.createElement("div"),e.setAttribute(Q,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(Q,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||zt;if(typeof e=="function"&&this._layout instanceof e){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let e,i;if(typeof t.type=="function"){i=t.type;const r={...t};delete r.type,e=r}else e=t;i===void 0&&(zt=i=(await ee(()=>import("./flow-DQ61c9Hr.js"),[],import.meta.url)).FlowLayout),this._layout=new i(r=>this._handleLayoutMessage(r),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(n=>n.startTime>=this._benchmarkStart&&n.startTime<t).reduce((n,o)=>n+o.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:r}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<e.length;r++){const n=e[r],o=this._first+r;(this._itemsChanged||this._toBeMeasured.has(n))&&(t[o]=i.call(this,n,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},ke(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var t;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((t=this._layout)==null||t.unpin()),this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",t)}}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new it)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(Q)||t.push(e),e=e.nextElementSibling;return t}_updateView(){var r;const t=this._hostElement,e=(r=this._scrollerController)==null?void 0:r.element,i=this._layout;if(t&&e&&i){let n,o,l,h;const a=t.getBoundingClientRect();n=0,o=0,l=window.innerHeight,h=window.innerWidth;const g=this._clippingAncestors.map(y=>y.getBoundingClientRect());g.unshift(a);for(const y of g)n=Math.max(n,y.top),o=Math.max(o,y.left),l=Math.min(l,y.bottom),h=Math.min(h,y.right);const d=e.getBoundingClientRect(),f={left:a.left-d.left,top:a.top-d.top},_={width:e.scrollWidth,height:e.scrollHeight},b=n-a.top+t.scrollTop,v=o-a.left+t.scrollLeft,m=Math.max(0,l-n),p=Math.max(0,h-o);i.viewportSize={width:p,height:m},i.viewportScroll={top:b,left:v},i.totalScrollSize=_,i.offsetWithinScroller=f}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,r=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const n=this._hostElement.style;n.minWidth=i?`${i}px`:"100%",n.minHeight=r?`${r}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:i,width:r,height:n,xOffset:o,yOffset:l},h)=>{const a=this._children[h-this._first];a&&(a.style.position="absolute",a.style.boxSizing="border-box",a.style.transform=`translate(${i}px, ${e}px)`,r!==void 0&&(a.style.width=r+"px"),n!==void 0&&(a.style.height=n+"px"),a.style.left=o===void 0?null:o+"px",a.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:r,_lastVisible:n}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==n}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:e-r})}}element(t){var e;return t===1/0&&(t=this._items.length-1),((e=this._items)==null?void 0:e[t])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&(t!=null&&t.has(e))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new et({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new st({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){var e;if((e=this._layout)!=null&&e.measureChildren){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function ke(s){const t=window.getComputedStyle(s);return{marginTop:J(t.marginTop),marginRight:J(t.marginRight),marginBottom:J(t.marginBottom),marginLeft:J(t.marginLeft)}}function J(s){const t=s?parseFloat(s):NaN;return Number.isNaN(t)?0:t}function Lt(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const t=s.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Ae(s,t=!1){const e=[];let i=t?s:Lt(s);for(;i!==null;)e.push(i),i=Lt(i);return e}function Te(s,t=!1){let e=!1;return Ae(s,t).filter(i=>{if(e)return!1;const r=getComputedStyle(i);return e=r.position==="fixed",r.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=s=>s,Ne=(s,t)=>E`${t}: ${JSON.stringify(s,null,2)}`;class Oe extends Ft{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,i)=>Ne(e,i+this._first),this._keyFunction=(e,i)=>Re(e,i+this._first),this._items=[],t.type!==z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)e.push(this._items[i]);return xe(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const i=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),i?A:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const r=t.parentNode;this._makeVirtualizer(r,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(r,n)=>e(r,n+this._first)),i&&(this._keyFunction=(r,n)=>i(r,n+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:n}=e;this._virtualizer=new Pe({hostElement:t,layout:i,scroller:r}),this._virtualizer.items=n,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(i,e))}disconnected(){var t;(t=this._virtualizer)==null||t.disconnected()}reconnected(){var t;(t=this._virtualizer)==null||t.connected()}}const Me=Y(Oe);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=Y(class extends tt{constructor(s){if(super(s),s.type!==z.PROPERTY&&s.type!==z.ATTRIBUTE&&s.type!==z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Rt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===A||t===U)return t;const e=s.element,i=s.name;if(s.type===z.PROPERTY){if(t===e[i])return A}else if(s.type===z.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return A}else if(s.type===z.ATTRIBUTE&&e.getAttribute(i)===t+"")return A;return Nt(s),t}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=s=>s??U,jt=R(class extends T{constructor(t,e,i,r){super(t,e);u(this,"values");Object.assign(e.host,i),this.values=r}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),Ie=R(class extends T{update(){return this.state.host}}),De=/([A-Z])/gu,X=(s,t,e)=>{s[t]=e,s.dispatchEvent(new CustomEvent(t.replace(De,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},Ut=s=>{const t=Vt(void 0),e=x(a=>t.current=a,[]),i=s.shadowRoot,r=x(a=>s.dispatchEvent(new Event(a.type,{bubbles:a.bubbles})),[]),n=x(a=>X(s,"value",a.target.value),[]),o=x(a=>X(s,"focused",a.type==="focus"),[]),l=x(()=>{var a;return(a=t.current)==null?void 0:a.focus()},[]),h=x(()=>{var g;const a=(g=t.current)==null?void 0:g.checkValidity();return s.toggleAttribute("invalid",!a),a},[]);return jt({focus:l,validate:h},[l,h]),$(()=>{const a=g=>{g.defaultPrevented||s.disabled||g.target.matches("input, textarea, label")||(g.preventDefault(),s.matches(":focus-within")||l())};return i.addEventListener("mousedown",a),()=>i.removeEventListener("mousedown",a)},[l]),{onChange:r,onFocus:o,onInput:n,onRef:e}},Ve=s=>M(()=>{if(s==null)return;const t=new RegExp(s,"u");return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[s]),Yt=(s,{label:t,invalid:e,errorMessage:i})=>E`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${D(t,()=>E`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${D(e&&i,()=>E`<div class="error" part="error">${i}</div>`)}
	`,Wt=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Be=({placeholder:s,noLabelFloat:t,label:e})=>(t?e:void 0)||s||" ",Fe=(s,...t)=>s.flatMap((e,i)=>[e,t[i]??""]).join(""),qt=Fe`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	:host(:focus-within) .wrap {
		background: var(--focused-bg);
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
	}
	.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
	.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}
	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) slot[name='suffix']::slotted(*),
	:host([always-float-label]) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}

	:host(:not(always-float-label):focus-within) #input::placeholder,
	:host(:focus-within) label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}
	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}
	:host(:focus-within) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
	:host(:focus-within) .line {
		border-bottom-color: var(--focused-color);
	}

	:host(:focus-within) {
		--contour-color: var(--focused-color);
		caret-color: var(--focused-color);
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) label {
		display: none;
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}
`,He=["type","pattern","allowed-pattern","min","max","step","autosize","label",...Wt],je=s=>{var p;const{type:t="text",pattern:e,allowedPattern:i,autocomplete:r,value:n,readonly:o,disabled:l,min:h,max:a,step:g,maxlength:d}=s,{onChange:f,onFocus:_,onInput:b,onRef:v}=Ut(s),m=Ve(i);return jt({focus:()=>{var y,w;return(w=(y=s.shadowRoot)==null?void 0:y.querySelector("#input"))==null?void 0:w.focus()}},[]),Yt(E`
			<input
				${ft(v)}
				style="--chars: ${((p=n==null?void 0:n.toString())==null?void 0:p.length)??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${L(e)}
				autocomplete=${L(r)}
				placeholder=${Be(s)}
				?readonly=${o}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${Ht(n??"")}
				maxlength=${L(d)}
				@beforeinput=${m}
				@input=${b}
				@change=${f}
				@focus=${_}
				@blur=${_}
				min=${L(h)}
				max=${L(a)}
				step=${L(g)}
			/>
		`,s)};customElements.define("cosmoz-input",pt(je,{observedAttributes:He,styleSheets:[dt(qt)]}));const $t=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},Ue=(s,t=0)=>{if(t>0){const e=s.getAttribute("rows")??"",i=s.style.height;s.style.height="",s.setAttribute("rows",t),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=i,s.setAttribute("rows",e)}},Ye=s=>{const{value:t,maxRows:e}=s,i=M(()=>()=>s.shadowRoot.querySelector("#input"),[]);$(()=>Ue(i(),e),[e,i]),$(()=>$t(i()),[i,t]),$(()=>{const r=i(),n=new ResizeObserver(()=>requestAnimationFrame(()=>$t(r)));return n.observe(r),()=>n.unobserve(r)},[i])},We=["rows",...Wt],qe=s=>{const{autocomplete:t,value:e,placeholder:i,readonly:r,disabled:n,rows:o,cols:l,maxlength:h}=s,{onChange:a,onFocus:g,onInput:d,onRef:f}=Ut(s);return Ye(s),Yt(E`
			<textarea id="input" part="input"
				${ft(f)}
				autocomplete=${L(t)}
				placeholder=${i||" "}
				rows=${o??1} cols=${L(l)}
				?readonly=${r} ?aria-disabled=${n} ?disabled=${n}
				.value=${Ht(e??"")} maxlength=${L(h)} @input=${d}
				@change=${a} @focus=${g} @blur=${g}>`,s)};customElements.define("cosmoz-textarea",pt(qe,{observedAttributes:We,styleSheets:[dt(qt)]}));const Qe=s=>{const t=M(()=>({}),[]);return M(()=>Object.assign(t,s),[t,...Object.values(s)])},ct=(s,t)=>{const e=t.pathLocator||t.path||"",{pathLocatorSeparator:i}=s;return e.includes(i)?e.substring(0,e.lastIndexOf(i)):e},Je=(s,t)=>{if(!s)return;const e=s.getNodeByPathLocator(t),i=e?s.getChildren(e):[],{searchProperty:r}=s,n=(o,l)=>{if(s.hasChildren(o)){if(!s.hasChildren(l))return-1}else if(s.hasChildren(l))return 1;const h=o[r],a=l[r];return h>a?1:h<a?-1:0};return i.length>0?i.sort(n):e},Ke=(s,t,e)=>{if(!s)return[];const i=Je(s,e);return t?s.searchNodes(t,i,!1):i},Ze=(s,t,e)=>{let i=!1;return e&&(i=t===e||t.id&&t.id===e.id||t.pathLocator===e.pathLocator),i?`${s} selected`:s},Ge=(s,t)=>{t.dispatchEvent(new CustomEvent("node-dblclicked",{detail:{model:s.model}}))},Xe=(s,t)=>!t||!s?[]:t.getPathNodes(s).filter(e=>e!==void 0),ts=ce`
	:host {
		--cosmoz-treenode-navigator-select-node-icon-color: var(
			--primary-color,
			white
		);
		--cosmoz-treenode-navigator-list-item-focused-color: #f0f8ff;
	}

	.header {
		margin: 0 16px;
	}

	.header a {
		text-decoration: none;
		color: inherit;
	}

	.icon {
		display: inline-block;
		position: relative;
		padding: 8px;
		outline: none;
		user-select: none;
		cursor: pointer;
		z-index: 0;
		line-height: 1;
		width: 40px;
		height: 40px;
		box-sizing: border-box;
	}

	.path {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin: 0;
	}

	.slash {
		margin: 0 2px;
	}

	.pointer {
	}

	.items {
		height: var(--cosmoz-treenode-navigator-list-height, 50vh);
		width: 100%;
	}

	.section {
		background-color: #f5f5f5;
		padding: 5px;
	}

	.pointer {
		cursor: pointer;
	}

	.item {
		width: 100%;
	}

	.node {
		align-items: center;
		display: flex;
		font-family: 'Roboto', 'Noto', sans-serif;
		font-size: 16px;
		font-weight: 400;
		height: 40px;
		line-height: 24px;
		padding: 6px 12px 6px 16px;
		cursor: pointer;
	}

	.name {
		flex: auto;
	}

	.icon {
		box-sizing: border-box;
		cursor: pointer;
		display: inline-block;
		height: 40px;
		line-height: 1;
		outline: none;
		padding: 8px;
		position: relative;
		user-select: none;
		width: 40px;
		z-index: 0;
	}

	.node.selected {
		background-color: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
		transition: background-color 0.2s ease-out;
	}

	.node.selected .icon svg {
		fill: var(--cosmoz-treenode-navigator-select-node-icon-color);
		transition: color 0.8s ease-out;
	}

	.btn-ghost {
		background: transparent;
		border: none;
		cursor: pointer;
		margin: 0 20px;
		padding: 0.7em 0.57em;
		width: calc(100% - 50px);
		border: solid 1px #a4abae;
		border-radius: 16px;
		font-size: 14px;
		font-family: inherit;
	}

	.path > .pointer:hover,
	.path > .pointer:has(~ .pointer:hover) {
		text-decoration: underline;
	}
`,es=({tree:s,searchPlaceholder:t,searchGlobalPlaceholder:e,searchMinLength:i=3,opened:r,searchDebounceTimeout:n=2e3})=>{const o=Vt(),l=Ie(),[h,a]=Et("highlightedNode"),[g,d]=Et("nodesOnNodePath",[]),[f,_]=at(""),[b,v]=at(""),[m,p]=at("");$(()=>{const c=setTimeout(()=>{const S=b.trim().length;S>0&&S<i||_(b.trim())},n);return()=>clearTimeout(c)},[b]);const y=M(()=>Ke(s,f,m),[s,f,m]),w=x(c=>{if(!(c!=null&&c.pathLocator)||!s){d([]);return}const S=Xe(c.pathLocator,s);d(S)},[s]),I=x(c=>{p((c==null?void 0:c.pathLocator)||""),v(""),a(null)},[]),rt=x(c=>{c&&(a(c),w(c))},[w]);$(()=>{m&&X(l,"highlightedNodePath","")},[m]),$(()=>{if(!(g!=null&&g.length)||!s||!r)return;const c=g[g.length-1];if(!(c!=null&&c.pathLocator))return;if(s.hasChildren(c)){p(c.pathLocator);return}const S=ct(s,c);p(S),a(c)},[g,s,r]),$(()=>{X(l,"highlightedNodePath",(h==null?void 0:h.pathLocator)||"")},[h]);const V=Qe({dataPlane:y,highlightedNode:h??null,onNodeClick:I});$(()=>{var _t;if(!r)return;const c=()=>{const C=o.current;return C?C[Object.getOwnPropertySymbols(C)[0]]:null},S=c();if(S&&V.highlightedNode){const C=(_t=V.dataPlane)==null?void 0:_t.indexOf(V.highlightedNode);C!==void 0&&C>=0&&(S.scrollToIndex={index:C,position:"center"})}const B=C=>{if(C.ctrlKey&&C.altKey||C.defaultPrevented)return;const{dataPlane:W,highlightedNode:P,onNodeClick:Kt}=V,q=c();if(!q)return;const nt=W.findIndex(k=>k.pathLocator===(P==null?void 0:P.pathLocator)),mt=(k,gt)=>k>=0&&k<W.length?(a(W[k]),(gt==="start"?k<q._firstVisible:k>q._lastVisible)&&(q.scrollToIndex={index:k,position:gt}),!0):!1;switch(C.key){case"Up":case"ArrowUp":{C.preventDefault(),mt(Math.max(nt-1,0),"start");break}case"Down":case"ArrowDown":{C.preventDefault(),nt<W.length-1&&mt(nt+1,"end");break}case"Enter":C.preventDefault(),P&&(l.dispatchEvent(new CustomEvent("node-dblclicked")),rt(P));break;case"Right":case"ArrowRight":C.preventDefault(),P&&s.hasChildren(P)&&Kt(P);break}};return document.addEventListener("keydown",B,!0),()=>document.removeEventListener("keydown",B,!0)},[r,V,rt]);const Qt=c=>{Ge(c,l),h&&rt(h)},Jt=(c,S)=>c?E` <div class="item">
			${(B=>D(f&&(S===0||B!==ct(s,y[S-1])),()=>E`
						<div class="section">
							${s.getPathString(B,s.searchProperty)}
						</div>
					`))(ct(s,c))}
			<div
				class=${Ze("node",c,h)}
				@click=${()=>a(c)}
				@dblclick=${Qt}
			>
				<div class="name">${c[s.searchProperty]}</div>
				${D(s.hasChildren(c),()=>E`
						<span class="icon" @click=${()=>I(c)}>
							<svg
								viewBox="0 0 24 24"
								preserveAspectRatio="xMidYMid meet"
								focusable="false"
								style="pointer-events: none; display: block; width: 100%; height: 100%;"
							>
								<g>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
									></path>
								</g>
							</svg>
						</span>
					`)}
			</div>
		</div>`:U;return E`
		<div class="header">
			<h3 class="path">
				<span class="icon" @click=${()=>I()}>
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
					</svg>
				</span>
				${Se([s,m],()=>(m&&(s==null?void 0:s.getPathNodes(m))||[]).filter(c=>c!==void 0).map(c=>E`
								<span class="slash">/</span>
								<span
									class="pointer"
									tabindex="0"
									@click=${()=>I(c)}
									>${c[s.searchProperty]}</span
								>
							`))}
			</h3>
			<cosmoz-input
				tabindex="0"
				.value=${b}
				.placeholder=${t}
				@input=${c=>v(c.target.value)}
			/>
		</div>
		${D(s,()=>E` <div
					class="items"
					${ft(c=>o.current=c)}
				>
					<div virtualizer-sizer></div>
					${Me({items:y,renderItem:Jt,scroller:!0})}
				</div>`)}
		${D(f&&m,()=>E`
				<button class="btn-ghost" @click=${()=>p("")}>
					${e}
				</button>
			`)}
	`};customElements.define("cosmoz-treenode-navigator",pt(es,{styleSheets:[ts]}));const hs={1:{name:"C:",pathLocator:"1",children:{2:{name:"Windows",pathLocator:"1.2",children:{3:{name:"System",pathLocator:"1.2.3",children:{}},4:{name:"Microsoft.NET",pathLocator:"1.2.4",children:{}}}},5:{name:"Program Files",pathLocator:"1.5",children:{6:{name:"Microsoft VS Code",pathLocator:"1.5.6"},7:{name:"Git",pathLocator:"1.5.7"}}},100:{name:"Users",pathLocator:"1.100",children:{200:{name:"Default",pathLocator:"1.100.200",children:{201:{name:"Documents",pathLocator:"1.100.200.201"},202:{name:"Music",pathLocator:"1.100.200.202"},203:{name:"Pictures",pathLocator:"1.100.200.203"}}},300:{name:"John",pathLocator:"1.100.300",children:{301:{name:"Documents",pathLocator:"1.100.300.301"},302:{name:"Music",pathLocator:"1.100.300.302"},303:{name:"Pictures",pathLocator:"1.100.300.303"}}},400:{name:"Public",pathLocator:"1.100.400",children:{401:{name:"Public Documents",pathLocator:"1.100.400.401"},402:{name:"Public Music",pathLocator:"1.100.400.402"},403:{name:"Public Pictures",pathLocator:"1.100.400.403"}}}}}}},1e3:{name:"D:",pathLocator:"1000",children:{1001:{name:"Data",pathLocator:"1000.1001",children:{1002:{name:"John",pathLocator:"1000.1001.1002"}}},1002:{name:"Backup",pathLocator:"1000.1002"}}}};export{os as T,hs as a,pt as b,ce as c,Vt as d,Et as e,at as f,M as g,ft as h,ls as l,D as n,$ as u};
