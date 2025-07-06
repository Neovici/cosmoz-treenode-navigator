var se=Object.defineProperty;var ie=(s,t,e)=>t in s?se(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var u=(s,t,e)=>ie(s,typeof t!="symbol"?t+"":t,e);import{f as Dt,B as re,E as U,T as A,p as ne,v as N,r as F,M as ct,m as Vt,x as S}from"./lit-element-D-o1_RG-.js";import{_ as oe}from"./iframe-BCVyvl2y.js";const le=(s,t)=>{const e=l=>l===void 0,i=l=>l,r=s.filter(e).length,n=t.filter(e).length,o=s.filter(i).length,h=t.filter(i).length;return r<n?-1:r>n||o<h?1:o>h?-1:0};class cs{constructor(t,e={}){u(this,"_treeData");u(this,"_roots");u(this,"childProperty");u(this,"searchProperty");u(this,"pathLocatorSeparator");u(this,"pathStringSeparator");this._treeData=t,this._roots=Object.values(t),this.pathLocatorSeparator=e.pathLocatorSeparator||".",this.pathStringSeparator=e.pathStringSeparator||"/",this.childProperty=e.childProperty||"children",this.searchProperty=e.searchProperty||"name"}getNodeByProperty(t,e=this.searchProperty,i=this._roots){if(t!==void 0)return this.findNode(t,e,i)}searchNodes(t,e,i,r=this.searchProperty){const n={propertyName:r,exact:i!==void 0?i:!0,firstHitOnly:!1};return this._searchNodes(t,n,e)}findNode(t,e=this.searchProperty,i){const r={propertyName:e,exact:!0,firstHitOnly:!0};return this._searchNodes(t,r,i).shift()}_searchNodes(t,e,i=this._roots){const r=[];for(const n of i){const o=this.search(n,t,e);if(e.firstHitOnly&&o.length>0)return o;r.push(...o)}return r}getNodeByPathLocator(t,e=this._treeData,i=this.pathLocatorSeparator){return t?this.getPathNodes(t,e,i).pop():this._roots}getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){return t?Object.keys(e).map(r=>{const n={};return n[r]=e[r],this._getPathNodes(t,n,i)}).filter(r=>r&&r.length>0).sort(le)[0]:e}_getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){const r=t.split(i),n=this._pathToNodes(r,e,i);for(;n.length>0&&n[0]===void 0;)n.shift();return n}_pathToNodes(t,e,i){let r=e;return t.map((n,o)=>{if(!r)return;const h=r[n]??r[t.slice(0,o+1).join(i)];return h&&(r=h[this.childProperty]),h})}getPathString(t,e=this.searchProperty,i=this.pathStringSeparator,r=this.pathLocatorSeparator){const n=this.getPathNodes(t,this._treeData,r);if(Array.isArray(n))return n.filter(o=>o!=null).map(o=>o[e]).join(i)}getPathStringByProperty(t,e=this.searchProperty,i=this.searchProperty,r=this.pathStringSeparator,n=this.pathLocatorSeparator){if(t===void 0)return;if(e==="pathLocator")return this.getPathString(t,i,r,n);const o=this.getNodeByProperty(t,e);if(o){const h=o.pathLocator||o.path;return this.getPathString(h,i,r)}}getChildren(t){return!t||!t[this.childProperty]?[]:Object.values(t[this.childProperty])}hasChildren(t){if(!t)return!1;const e=t[this.childProperty];if(!e)return!1;for(const i in e)return!0;return!1}getProperty(t,e){if(!(!t||!e))return t[e]}nodeConformsSearch(t,e,i){const r=i?t[i.propertyName]:void 0;if(!r){console.error("options.propertyName needs to be specified.");return}if(i!=null&&i.exact)return r===e;if(e===void 0)return!1;const n=r.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase(),o=e.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase();return n.indexOf(o)>-1}search(t,e,i,r=[]){const n=this.nodeConformsSearch(t,e,i),o=this.getChildren(t);n&&r.push(t);for(const h of o){const l=this.search(h,e,i,r);if(!Array.isArray(l))return[l]}return r}}let X,Bt=0;function Et(s){X=s}function St(){X=null,Bt=0}function ae(){return Bt++}const ut=Symbol("haunted.phase"),G=Symbol("haunted.hook"),xt=Symbol("haunted.update"),Lt=Symbol("haunted.commit"),O=Symbol("haunted.effects"),H=Symbol("haunted.layoutEffects"),_t="haunted.context";var Nt,Ot,Mt;Mt=G,Ot=O,Nt=H;class he{constructor(t,e){u(this,"update");u(this,"host");u(this,"virtual");u(this,Mt);u(this,Ot);u(this,Nt);this.update=t,this.host=e,this[G]=new Map,this[O]=[],this[H]=[]}run(t){Et(this);let e=t();return St(),e}_runEffects(t){let e=this[t];Et(this);for(let i of e)i.call(this);St()}runEffects(){this._runEffects(O)}runLayoutEffects(){this._runEffects(H)}teardown(){this[G].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}const ce=Promise.resolve().then.bind(Promise.resolve());function Ft(){let s=[],t;function e(){t=null;let i=s;s=[];for(var r=0,n=i.length;r<n;r++)i[r]()}return function(i){s.push(i),t==null&&(t=ce(e))}}const ue=Ft(),zt=Ft();var It;It=ut;class de{constructor(t,e){u(this,"renderer");u(this,"host");u(this,"state");u(this,It);u(this,"_updateQueued");this.renderer=t,this.host=e,this.state=new he(this.update.bind(this),e),this[ut]=null,this._updateQueued=!1}update(){this._updateQueued||(ue(()=>{let t=this.handlePhase(xt);zt(()=>{this.handlePhase(Lt,t),zt(()=>{this.handlePhase(O)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(t,e){switch(this[ut]=t,t){case Lt:this.commit(e),this.runEffects(H);return;case xt:return this.render();case O:return this.runEffects(O)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}const mt=(...s)=>{const t=new CSSStyleSheet;return t.replaceSync(s.join("")),t},pe=s=>s==null?void 0:s.map(t=>typeof t=="string"?mt(t):t),fe=(s,...t)=>s.flatMap((e,i)=>[e,t[i]||""]).join(""),_e=fe,me=(s="")=>s.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");function ve(s){class t extends de{constructor(n,o,h){super(n,h||o);u(this,"frag");u(this,"renderResult");this.frag=o}commit(n){this.renderResult=s(n,this.frag)}}function e(i,r,n){const o=(n||r||{}).baseElement||HTMLElement,{observedAttributes:h=[],useShadowDOM:l=!0,shadowRootInit:a={},styleSheets:v}=n||r||{},d=pe(i.styleSheets||v);class f extends o{constructor(){super();u(this,"_scheduler");if(l===!1)this._scheduler=new t(i,this);else{const p=this.attachShadow({mode:"open",...a});d&&(p.adoptedStyleSheets=d),this._scheduler=new t(i,p,this)}}static get observedAttributes(){return i.observedAttributes||h||[]}connectedCallback(){var p;this._scheduler.update(),(p=this._scheduler.renderResult)==null||p.setConnected(!0)}disconnectedCallback(){var p;this._scheduler.teardown(),(p=this._scheduler.renderResult)==null||p.setConnected(!1)}attributeChangedCallback(p,y,w){if(y===w)return;let I=w===""?!0:w;Reflect.set(this,me(p),I)}}function _(g){let m=g,p=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){p&&m===y||(p=!0,m=y,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,m,p,y){let w;return m in g?(w=Object.getOwnPropertyDescriptor(g,m),w&&w.set?(w.set.call(y,p),!0):(Reflect.set(g,m,p,y),!0)):(typeof m=="symbol"||m[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:p}:w=_(p),Object.defineProperty(y,m,w),w.set&&w.set.call(y,p),!0)}});return Object.setPrototypeOf(f.prototype,b),f}return e}class T{constructor(t,e){u(this,"id");u(this,"state");this.id=t,this.state=e}}function ge(s,...t){let e=ae(),i=X[G],r=i.get(e);return r||(r=new s(e,X,...t),i.set(e,r)),r.update(...t)}function R(s){return ge.bind(null,s)}function Ht(s){return R(class extends T{constructor(e,i,r,n){super(e,i);u(this,"callback");u(this,"lastValues");u(this,"values");u(this,"_teardown");s(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function jt(s,t){s[O].push(t)}const x=Ht(jt),be=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,ye=R(class extends T{constructor(t,e,i){super(t,e);u(this,"Context");u(this,"value");u(this,"_ranEffect");u(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,jt(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};be(this.state.host).dispatchEvent(new CustomEvent(_t,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:n}=e;this.value=r?n:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function we(s){return t=>{const e={Provider:class extends HTMLElement{constructor(){super();u(this,"listeners");u(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(_t,this)}disconnectedCallback(){this.removeEventListener(_t,this)}handleEvent(r){const{detail:n}=r;n.Context===e&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let n of this.listeners)n(r)}get value(){return this._value}},Consumer:s(function({render:i}){const r=ye(e);return i(r)},{useShadowDOM:!1}),defaultValue:t};return e}}const M=R(class extends T{constructor(t,e,i,r){super(t,e);u(this,"value");u(this,"values");this.value=i(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),L=(s,t)=>M(()=>s,t);function Ce(s,t){s[H].push(t)}Ht(Ce);const dt=R(class extends T{constructor(t,e,i){super(t,e);u(this,"args");this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});R(class extends T{constructor(t,e,i,r,n){super(t,e);u(this,"reducer");u(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const Ee=/([A-Z])/gu,J=R(class extends T{constructor(t,e,i,r){super(t,e);u(this,"property");u(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(Ee,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),us=s=>t=>{t.preventDefault(),s(t.detail.value)};function Ut(s){return M(()=>({current:s}),[])}function Se({render:s}){const t=ve(s),e=we(t);return{component:t,createContext:e}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Y=s=>(...t)=>({_$litDirective$:s,values:t});let st=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=(s,t)=>{var i;const e=s._$AN;if(e===void 0)return!1;for(const r of e)(i=r._$AO)==null||i.call(r,t,!1),j(r,t);return!0},tt=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},Yt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),ze(t)}};function xe(s){this._$AN!==void 0?(tt(this),this._$AM=s,Yt(this)):this._$AM=s}function Le(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)j(i[n],!1),tt(i[n]);else i!=null&&(j(i,!1),tt(i));else j(this,s)}const ze=s=>{s.type==z.CHILD&&(s._$AP??(s._$AP=Le),s._$AQ??(s._$AQ=xe))};class Wt extends st{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Yt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),e&&(j(this,t),tt(this))}setValue(t){if(Dt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:vt}=Se({render:re}),pt=new WeakMap,gt=Y(class extends Wt{render(s){return U}update(s,[t]){var i;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=s.options)==null?void 0:i.host,this.rt(this.ct=s.element)),U}rt(s){if(this.isConnected||(s=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=pt.get(t);e===void 0&&(e=new WeakMap,pt.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){var s,t;return typeof this.Y=="function"?(s=pt.get(this.ht??globalThis))==null?void 0:s.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(s,t,e){return s?t(s):e==null?void 0:e(s)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe={},$e=Y(class extends st{constructor(){super(...arguments),this.ot=Pe}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,r)=>i===this.ot[r]))return A}else if(this.ot===t)return A;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=(s,t,e)=>{const i=new Map;for(let r=t;r<=e;r++)i.set(s[r],r);return i},ke=Y(class extends st{constructor(s){if(super(s),s.type!==z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const r=[],n=[];let o=0;for(const h of s)r[o]=i?i(h,o):o,n[o]=e(h,o),o++;return{values:n,keys:r}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){const r=ne(s),{values:n,keys:o}=this.dt(t,e,i);if(!Array.isArray(r))return this.ut=o,n;const h=this.ut??(this.ut=[]),l=[];let a,v,d=0,f=r.length-1,_=0,b=n.length-1;for(;d<=f&&_<=b;)if(r[d]===null)d++;else if(r[f]===null)f--;else if(h[d]===o[_])l[_]=N(r[d],n[_]),d++,_++;else if(h[f]===o[b])l[b]=N(r[f],n[b]),f--,b--;else if(h[d]===o[b])l[b]=N(r[d],n[b]),F(s,l[b+1],r[d]),d++,b--;else if(h[f]===o[_])l[_]=N(r[f],n[_]),F(s,r[d],r[f]),f--,_++;else if(a===void 0&&(a=Pt(o,_,b),v=Pt(h,d,f)),a.has(h[d]))if(a.has(h[f])){const g=v.get(o[_]),m=g!==void 0?r[g]:null;if(m===null){const p=F(s,r[d]);N(p,n[_]),l[_]=p}else l[_]=N(m,n[_]),F(s,r[d],m),r[g]=null;_++}else ct(r[f]),f--;else ct(r[d]),d++;for(;_<=b;){const g=F(s,l[b+1]);N(g,n[_]),l[_++]=g}for(;d<=f;){const g=r[d++];g!==null&&ct(g)}return this.ut=o,Vt(s,l),A}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class it extends Event{constructor(t){super(it.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}it.eventName="rangeChanged";class rt extends Event{constructor(t){super(rt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}rt.eventName="visibilityChanged";class nt extends Event{constructor(){super(nt.eventName,{bubbles:!1})}}nt.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ae{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Te extends Ae{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(i)}scrollBy(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:i}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,i){return this._scrollTo(t,e,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const n=Math.abs(i-t),o=Math.abs(r-e);n<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let $t=typeof window<"u"?window.ResizeObserver:void 0;const Re=Symbol("virtualizerRef"),K="virtualizer-sizer";let kt;class Ne{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new $t(()=>this._hostElementSizeChanged()),this._childrenRO=new $t(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[Re]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Ie(this._hostElement,t),this._scrollerController=new Te(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var t,e,i,r;this._scrollEventListeners.forEach(n=>n.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(t=this._scrollerController)==null||t.detach(this),this._scrollerController=null,(e=this._mutationObserver)==null||e.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(r=this._childrenRO)==null||r.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${K}]`);e||(e=document.createElement("div"),e.setAttribute(K,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(K,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||kt;if(typeof e=="function"&&this._layout instanceof e){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let e,i;if(typeof t.type=="function"){i=t.type;const r={...t};delete r.type,e=r}else e=t;i===void 0&&(kt=i=(await oe(()=>import("./flow-DQ61c9Hr.js"),[],import.meta.url)).FlowLayout),this._layout=new i(r=>this._handleLayoutMessage(r),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(n=>n.startTime>=this._benchmarkStart&&n.startTime<t).reduce((n,o)=>n+o.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:r}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<e.length;r++){const n=e[r],o=this._first+r;(this._itemsChanged||this._toBeMeasured.has(n))&&(t[o]=i.call(this,n,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},Oe(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var t;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((t=this._layout)==null||t.unpin()),this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",t)}}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new nt)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(K)||t.push(e),e=e.nextElementSibling;return t}_updateView(){var r;const t=this._hostElement,e=(r=this._scrollerController)==null?void 0:r.element,i=this._layout;if(t&&e&&i){let n,o,h,l;const a=t.getBoundingClientRect();n=0,o=0,h=window.innerHeight,l=window.innerWidth;const v=this._clippingAncestors.map(y=>y.getBoundingClientRect());v.unshift(a);for(const y of v)n=Math.max(n,y.top),o=Math.max(o,y.left),h=Math.min(h,y.bottom),l=Math.min(l,y.right);const d=e.getBoundingClientRect(),f={left:a.left-d.left,top:a.top-d.top},_={width:e.scrollWidth,height:e.scrollHeight},b=n-a.top+t.scrollTop,g=o-a.left+t.scrollLeft,m=Math.max(0,h-n),p=Math.max(0,l-o);i.viewportSize={width:p,height:m},i.viewportScroll={top:b,left:g},i.totalScrollSize=_,i.offsetWithinScroller=f}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,r=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const n=this._hostElement.style;n.minWidth=i?`${i}px`:"100%",n.minHeight=r?`${r}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:i,width:r,height:n,xOffset:o,yOffset:h},l)=>{const a=this._children[l-this._first];a&&(a.style.position="absolute",a.style.boxSizing="border-box",a.style.transform=`translate(${i}px, ${e}px)`,r!==void 0&&(a.style.width=r+"px"),n!==void 0&&(a.style.height=n+"px"),a.style.left=o===void 0?null:o+"px",a.style.top=h===void 0?null:h+"px")})}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:r,_lastVisible:n}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==n}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:e-r})}}element(t){var e;return t===1/0&&(t=this._items.length-1),((e=this._items)==null?void 0:e[t])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&(t!=null&&t.has(e))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new it({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new rt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){var e;if((e=this._layout)!=null&&e.measureChildren){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Oe(s){const t=window.getComputedStyle(s);return{marginTop:Z(t.marginTop),marginRight:Z(t.marginRight),marginBottom:Z(t.marginBottom),marginLeft:Z(t.marginLeft)}}function Z(s){const t=s?parseFloat(s):NaN;return Number.isNaN(t)?0:t}function At(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const t=s.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Me(s,t=!1){const e=[];let i=t?s:At(s);for(;i!==null;)e.push(i),i=At(i);return e}function Ie(s,t=!1){let e=!1;return Me(s,t).filter(i=>{if(e)return!1;const r=getComputedStyle(i);return e=r.position==="fixed",r.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=s=>s,Ve=(s,t)=>S`${t}: ${JSON.stringify(s,null,2)}`;class Be extends Wt{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,i)=>Ve(e,i+this._first),this._keyFunction=(e,i)=>De(e,i+this._first),this._items=[],t.type!==z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)e.push(this._items[i]);return ke(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const i=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),i?A:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const r=t.parentNode;this._makeVirtualizer(r,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(r,n)=>e(r,n+this._first)),i&&(this._keyFunction=(r,n)=>i(r,n+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:n}=e;this._virtualizer=new Ne({hostElement:t,layout:i,scroller:r}),this._virtualizer.items=n,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(i,e))}disconnected(){var t;(t=this._virtualizer)==null||t.disconnected()}reconnected(){var t;(t=this._virtualizer)==null||t.connected()}}const Fe=Y(Be);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=Y(class extends st{constructor(s){if(super(s),s.type!==z.PROPERTY&&s.type!==z.ATTRIBUTE&&s.type!==z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Dt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===A||t===U)return t;const e=s.element,i=s.name;if(s.type===z.PROPERTY){if(t===e[i])return A}else if(s.type===z.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return A}else if(s.type===z.ATTRIBUTE&&e.getAttribute(i)===t+"")return A;return Vt(s),t}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=s=>s??U,Qt=R(class extends T{constructor(t,e,i,r){super(t,e);u(this,"values");Object.assign(e.host,i),this.values=r}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),He=R(class extends T{update(){return this.state.host}}),je=/([A-Z])/gu,et=(s,t,e)=>{s[t]=e,s.dispatchEvent(new CustomEvent(t.replace(je,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},Jt=s=>{const t=Ut(void 0),e=L(a=>t.current=a,[]),i=s.shadowRoot,r=L(a=>s.dispatchEvent(new Event(a.type,{bubbles:a.bubbles})),[]),n=L(a=>et(s,"value",a.target.value),[]),o=L(a=>et(s,"focused",a.type==="focus"),[]),h=L(()=>{var a;return(a=t.current)==null?void 0:a.focus()},[]),l=L(()=>{var v;const a=(v=t.current)==null?void 0:v.checkValidity();return s.toggleAttribute("invalid",!a),a},[]);return Qt({focus:h,validate:l},[h,l]),x(()=>{const a=v=>{v.defaultPrevented||s.disabled||v.target.matches("input, textarea, label")||(v.preventDefault(),s.matches(":focus-within")||h())};return i.addEventListener("mousedown",a),()=>i.removeEventListener("mousedown",a)},[h]),{onChange:r,onFocus:o,onInput:n,onRef:e}},Ue=s=>M(()=>{if(s==null)return;const t=new RegExp(s,"u");return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[s]),Kt=(s,{label:t,invalid:e,errorMessage:i})=>S`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${D(t,()=>S`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${D(e&&i,()=>S`<div class="error" part="error">${i}</div>`)}
	`,Zt=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ye=({placeholder:s,noLabelFloat:t,label:e})=>(t?e:void 0)||s||" ",We=(s,...t)=>s.flatMap((e,i)=>[e,t[i]??""]).join(""),Gt=We`
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
`,qe=["type","pattern","allowed-pattern","min","max","step","autosize","label",...Zt],Qe=s=>{var p;const{type:t="text",pattern:e,allowedPattern:i,autocomplete:r,value:n,readonly:o,disabled:h,min:l,max:a,step:v,maxlength:d}=s,{onChange:f,onFocus:_,onInput:b,onRef:g}=Jt(s),m=Ue(i);return Qt({focus:()=>{var y,w;return(w=(y=s.shadowRoot)==null?void 0:y.querySelector("#input"))==null?void 0:w.focus()}},[]),Kt(S`
			<input
				${gt(g)}
				style="--chars: ${((p=n==null?void 0:n.toString())==null?void 0:p.length)??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${P(e)}
				autocomplete=${P(r)}
				placeholder=${Ye(s)}
				?readonly=${o}
				?aria-disabled=${h}
				?disabled=${h}
				.value=${qt(n??"")}
				maxlength=${P(d)}
				@beforeinput=${m}
				@input=${b}
				@change=${f}
				@focus=${_}
				@blur=${_}
				min=${P(l)}
				max=${P(a)}
				step=${P(v)}
			/>
		`,s)};customElements.define("cosmoz-input",vt(Qe,{observedAttributes:qe,styleSheets:[mt(Gt)]}));const Tt=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},Je=(s,t=0)=>{if(t>0){const e=s.getAttribute("rows")??"",i=s.style.height;s.style.height="",s.setAttribute("rows",t),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=i,s.setAttribute("rows",e)}},Ke=s=>{const{value:t,maxRows:e}=s,i=M(()=>()=>s.shadowRoot.querySelector("#input"),[]);x(()=>Je(i(),e),[e,i]),x(()=>Tt(i()),[i,t]),x(()=>{const r=i(),n=new ResizeObserver(()=>requestAnimationFrame(()=>Tt(r)));return n.observe(r),()=>n.unobserve(r)},[i])},Ze=["rows",...Zt],Ge=s=>{const{autocomplete:t,value:e,placeholder:i,readonly:r,disabled:n,rows:o,cols:h,maxlength:l}=s,{onChange:a,onFocus:v,onInput:d,onRef:f}=Jt(s);return Ke(s),Kt(S`
			<textarea id="input" part="input"
				${gt(f)}
				autocomplete=${P(t)}
				placeholder=${i||" "}
				rows=${o??1} cols=${P(h)}
				?readonly=${r} ?aria-disabled=${n} ?disabled=${n}
				.value=${qt(e??"")} maxlength=${P(l)} @input=${d}
				@change=${a} @focus=${v} @blur=${v}>`,s)};customElements.define("cosmoz-textarea",vt(Ge,{observedAttributes:Ze,styleSheets:[mt(Gt)]}));const Xe=s=>{const t=M(()=>({}),[]);return M(()=>Object.assign(t,s),[t,...Object.values(s)])},ft=(s,t)=>{const e=t.pathLocator||t.path||"",{pathLocatorSeparator:i}=s;return e.includes(i)?e.substring(0,e.lastIndexOf(i)):e},ts=(s,t)=>{if(!s)return;const e=s.getNodeByPathLocator(t),i=e?s.getChildren(e):[],{searchProperty:r}=s,n=(o,h)=>{if(s.hasChildren(o)){if(!s.hasChildren(h))return-1}else if(s.hasChildren(h))return 1;const l=o[r],a=h[r];return l>a?1:l<a?-1:0};return i.length>0?i.sort(n):e},es=(s,t,e)=>{if(!s)return[];const i=ts(s,e);return t?s.searchNodes(t,i,!1):i},ss=(s,t,e)=>{let i=!1;return e&&(i=t===e||t.id&&t.id===e.id||t.pathLocator===e.pathLocator),i?`${s} selected`:s},is=(s,t)=>{t.dispatchEvent(new CustomEvent("node-dblclicked",{detail:{model:s.model}}))},Rt=(s,t)=>!t||!s?[]:t.getPathNodes(s).filter(e=>e!==void 0),rs=_e`
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
`,ns=({tree:s,searchPlaceholder:t,searchGlobalPlaceholder:e,searchMinLength:i=3,opened:r,searchDebounceTimeout:n=2e3})=>{const o=Ut(),h=He(),[l,a]=J("highlightedNode"),[v,d]=J("nodesOnNodePath",[]),[f,_]=dt(""),[b,g]=dt(""),[m,p]=dt(""),[y,w]=J("selectedNode"),[I,ot]=J("nodePath","");x(()=>{const c=setTimeout(()=>{const C=b.trim().length;C>0&&C<i||_(b.trim())},n);return()=>clearTimeout(c)},[b]);const lt=M(()=>es(s,f,m),[s,f,m]),bt=L(c=>{if(!(c!=null&&c.pathLocator)||!s){d([]);return}const C=Rt(c.pathLocator,s);d(C)},[s]),W=L(c=>{p((c==null?void 0:c.pathLocator)||""),g(""),a(null)},[]),at=L(c=>{c&&(a(c),w(c),ot(c.pathLocator??""),bt(c))},[bt]);x(()=>{m&&(et(h,"highlightedNodePath",""),ot(""))},[m]),x(()=>{if(!(v!=null&&v.length)||!s||!r)return;const c=v[v.length-1];if(!(c!=null&&c.pathLocator))return;if(s.hasChildren(c)){p(c.pathLocator);return}const C=ft(s,c);p(C),a(c)},[v,s,r]),x(()=>{et(h,"highlightedNodePath",(l==null?void 0:l.pathLocator)||""),(l==null?void 0:l.pathLocator)!==I&&ot((l==null?void 0:l.pathLocator)??""),l!==y&&w(l)},[l]),x(()=>{y!==l&&a(y)},[y]),x(()=>{if(!(I||s))return;const c=Rt(I,s);d(c);const C=c.length>0?c[c.length-1]:null;C&&C!==l&&a(C)},[I,s]);const V=Xe({dataPlane:lt,highlightedNode:l??null,onNodeClick:W});x(()=>{var yt;if(!r)return;const c=()=>{const E=o.current;return E?E[Object.getOwnPropertySymbols(E)[0]]:null},C=c();if(C&&V.highlightedNode){const E=(yt=V.dataPlane)==null?void 0:yt.indexOf(V.highlightedNode);E!==void 0&&E>=0&&(C.scrollToIndex={index:E,position:"center"})}const B=E=>{if(E.ctrlKey&&E.altKey||E.defaultPrevented)return;const{dataPlane:q,highlightedNode:$,onNodeClick:ee}=V,Q=c();if(!Q)return;const ht=q.findIndex(k=>k.pathLocator===($==null?void 0:$.pathLocator)),wt=(k,Ct)=>k>=0&&k<q.length?(a(q[k]),(Ct==="start"?k<Q._firstVisible:k>Q._lastVisible)&&(Q.scrollToIndex={index:k,position:Ct}),!0):!1;switch(E.key){case"Up":case"ArrowUp":{E.preventDefault(),wt(Math.max(ht-1,0),"start");break}case"Down":case"ArrowDown":{E.preventDefault(),ht<q.length-1&&wt(ht+1,"end");break}case"Enter":E.preventDefault(),$&&(h.dispatchEvent(new CustomEvent("node-dblclicked")),at($));break;case"Right":case"ArrowRight":E.preventDefault(),$&&s.hasChildren($)&&ee($);break}};return document.addEventListener("keydown",B,!0),()=>document.removeEventListener("keydown",B,!0)},[r,V,at]);const Xt=c=>{is(c,h),l&&at(l)},te=(c,C)=>c?S` <div class="item">
			${(B=>D(f&&(C===0||B!==ft(s,lt[C-1])),()=>S`
						<div class="section">
							${s.getPathString(B,s.searchProperty)}
						</div>
					`))(ft(s,c))}
			<div
				class=${ss("node",c,l)}
				@click=${()=>a(c)}
				@dblclick=${Xt}
			>
				<div class="name">${c[s.searchProperty]}</div>
				${D(s.hasChildren(c),()=>S`
						<span class="icon" @click=${()=>W(c)}>
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
		</div>`:U;return S`
		<div class="header">
			<h3 class="path">
				<span class="icon" @click=${()=>W()}>
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
					</svg>
				</span>
				${$e([s,m],()=>(m&&(s==null?void 0:s.getPathNodes(m))||[]).filter(c=>c!==void 0).map(c=>S`
								<span class="slash">/</span>
								<span
									class="pointer"
									tabindex="0"
									@click=${()=>W(c)}
									>${c[s.searchProperty]}</span
								>
							`))}
			</h3>
			<cosmoz-input
				tabindex="0"
				.value=${b}
				.placeholder=${t}
				@input=${c=>g(c.target.value)}
			/>
		</div>
		${D(s,()=>S` <div
					class="items"
					${gt(c=>o.current=c)}
				>
					<div virtualizer-sizer></div>
					${Fe({items:lt,renderItem:te,scroller:!0})}
				</div>`)}
		${D(f&&m,()=>S`
				<button class="btn-ghost" @click=${()=>p("")}>
					${e}
				</button>
			`)}
	`};customElements.define("cosmoz-treenode-navigator",vt(ns,{styleSheets:[rs]}));const ps={1:{name:"C:",pathLocator:"1",children:{2:{name:"Windows",pathLocator:"1.2",children:{3:{name:"System",pathLocator:"1.2.3",children:{}},4:{name:"Microsoft.NET",pathLocator:"1.2.4",children:{}}}},5:{name:"Program Files",pathLocator:"1.5",children:{6:{name:"Microsoft VS Code",pathLocator:"1.5.6"},7:{name:"Git",pathLocator:"1.5.7"}}},100:{name:"Users",pathLocator:"1.100",children:{200:{name:"Default",pathLocator:"1.100.200",children:{201:{name:"Documents",pathLocator:"1.100.200.201"},202:{name:"Music",pathLocator:"1.100.200.202"},203:{name:"Pictures",pathLocator:"1.100.200.203"}}},300:{name:"John",pathLocator:"1.100.300",children:{301:{name:"Documents",pathLocator:"1.100.300.301"},302:{name:"Music",pathLocator:"1.100.300.302"},303:{name:"Pictures",pathLocator:"1.100.300.303"}}},400:{name:"Public",pathLocator:"1.100.400",children:{401:{name:"Public Documents",pathLocator:"1.100.400.401"},402:{name:"Public Music",pathLocator:"1.100.400.402"},403:{name:"Public Pictures",pathLocator:"1.100.400.403"}}}}}}},1e3:{name:"D:",pathLocator:"1000",children:{1001:{name:"Data",pathLocator:"1000.1001",children:{1002:{name:"John",pathLocator:"1000.1001.1002"}}},1002:{name:"Backup",pathLocator:"1000.1002"}}}};export{cs as T,ps as a,vt as b,_e as c,Ut as d,J as e,dt as f,Rt as g,M as h,D as i,us as l,gt as n,x as u};
