var Bt=Object.defineProperty;var Ft=(s,t,e)=>t in s?Bt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var h=(s,t,e)=>Ft(s,typeof t!="symbol"?t+"":t,e);import{f as zt,B as jt,E as F,T as L,p as Ht,v as T,r as I,M as et,m as Lt,x as C}from"./lit-element-D-o1_RG-.js";import{_ as Ut}from"./iframe-fj4Q5HIO.js";const Yt=(s,t)=>{const e=c=>c===void 0,i=c=>c,r=s.filter(e).length,n=t.filter(e).length,o=s.filter(i).length,l=t.filter(i).length;return r<n?-1:r>n||o<l?1:o>l?-1:0};class Ge{constructor(t,e={}){h(this,"_treeData");h(this,"_roots");h(this,"childProperty");h(this,"searchProperty");h(this,"pathLocatorSeparator");h(this,"pathStringSeparator");this._treeData=t,this._roots=Object.values(t),this.pathLocatorSeparator=e.pathLocatorSeparator||".",this.pathStringSeparator=e.pathStringSeparator||"/",this.childProperty=e.childProperty||"children",this.searchProperty=e.searchProperty||"name"}getNodeByProperty(t,e=this.searchProperty,i=this._roots){if(t!==void 0)return this.findNode(t,e,i)}searchNodes(t,e,i,r=this.searchProperty){const n={propertyName:r,exact:i!==void 0?i:!0,firstHitOnly:!1};return this._searchNodes(t,n,e)}findNode(t,e=this.searchProperty,i){const r={propertyName:e,exact:!0,firstHitOnly:!0};return this._searchNodes(t,r,i).shift()}_searchNodes(t,e,i=this._roots){const r=[];for(const n of i){const o=this.search(n,t,e);if(e.firstHitOnly&&o.length>0)return o;r.push(...o)}return r}getNodeByPathLocator(t,e=this._treeData,i=this.pathLocatorSeparator){return t?this.getPathNodes(t,e,i).pop():this._roots}getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){return t?Object.keys(e).map(r=>{const n={};return n[r]=e[r],this._getPathNodes(t,n,i)}).filter(r=>r&&r.length>0).sort(Yt)[0]:e}_getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){const r=t.split(i),n=this._pathToNodes(r,e,i);for(;n.length>0&&n[0]===void 0;)n.shift();return n}_pathToNodes(t,e,i){let r=e;return t.map((n,o)=>{if(!r)return;const l=r[n]??r[t.slice(0,o+1).join(i)];return l&&(r=l[this.childProperty]),l})}getPathString(t,e=this.searchProperty,i=this.pathStringSeparator,r=this.pathLocatorSeparator){const n=this.getPathNodes(t,this._treeData,r);if(Array.isArray(n))return n.filter(o=>o!=null).map(o=>o[e]).join(i)}getPathStringByProperty(t,e=this.searchProperty,i=this.searchProperty,r=this.pathStringSeparator,n=this.pathLocatorSeparator){if(t===void 0)return;if(e==="pathLocator")return this.getPathString(t,i,r,n);const o=this.getNodeByProperty(t,e);if(o){const l=o.pathLocator||o.path;return this.getPathString(l,i,r)}}getChildren(t){return!t||!t[this.childProperty]?[]:Object.values(t[this.childProperty])}hasChildren(t){if(!t)return!1;const e=t[this.childProperty];if(!e)return!1;for(const i in e)return!0;return!1}getProperty(t,e){if(!(!t||!e))return t[e]}nodeConformsSearch(t,e,i){const r=i?t[i.propertyName]:void 0;if(!r){console.error("options.propertyName needs to be specified.");return}if(i!=null&&i.exact)return r===e;if(e===void 0)return!1;const n=r.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase(),o=e.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase();return n.indexOf(o)>-1}search(t,e,i,r=[]){const n=this.nodeConformsSearch(t,e,i),o=this.getChildren(t);n&&r.push(t);for(const l of o){const c=this.search(l,e,i,r);if(!Array.isArray(c))return[c]}return r}}let Q,$t=0;function ct(s){Q=s}function ut(){Q=null,$t=0}function Wt(){return $t++}const st=Symbol("haunted.phase"),q=Symbol("haunted.hook"),dt=Symbol("haunted.update"),pt=Symbol("haunted.commit"),N=Symbol("haunted.effects"),D=Symbol("haunted.layoutEffects"),rt="haunted.context";var Ct,Et,St;St=q,Et=N,Ct=D;class qt{constructor(t,e){h(this,"update");h(this,"host");h(this,"virtual");h(this,St);h(this,Et);h(this,Ct);this.update=t,this.host=e,this[q]=new Map,this[N]=[],this[D]=[]}run(t){ct(this);let e=t();return ut(),e}_runEffects(t){let e=this[t];ct(this);for(let i of e)i.call(this);ut()}runEffects(){this._runEffects(N)}runLayoutEffects(){this._runEffects(D)}teardown(){this[q].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}const Qt=Promise.resolve().then.bind(Promise.resolve());function Pt(){let s=[],t;function e(){t=null;let i=s;s=[];for(var r=0,n=i.length;r<n;r++)i[r]()}return function(i){s.push(i),t==null&&(t=Qt(e))}}const Jt=Pt(),ft=Pt();var xt;xt=st;class Kt{constructor(t,e){h(this,"renderer");h(this,"host");h(this,"state");h(this,xt);h(this,"_updateQueued");this.renderer=t,this.host=e,this.state=new qt(this.update.bind(this),e),this[st]=null,this._updateQueued=!1}update(){this._updateQueued||(Jt(()=>{let t=this.handlePhase(dt);ft(()=>{this.handlePhase(pt,t),ft(()=>{this.handlePhase(N)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(t,e){switch(this[st]=t,t){case pt:this.commit(e),this.runEffects(D);return;case dt:return this.render();case N:return this.runEffects(N)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}const Zt=(...s)=>{const t=new CSSStyleSheet;return t.replaceSync(s.join("")),t},Gt=s=>s==null?void 0:s.map(t=>typeof t=="string"?Zt(t):t),Xt=(s,...t)=>s.flatMap((e,i)=>[e,t[i]||""]).join(""),te=Xt,ee=(s="")=>s.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");function se(s){class t extends Kt{constructor(n,o,l){super(n,l||o);h(this,"frag");h(this,"renderResult");this.frag=o}commit(n){this.renderResult=s(n,this.frag)}}function e(i,r,n){const o=(n||r||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:c=!0,shadowRootInit:a={},styleSheets:b}=n||r||{},d=Gt(i.styleSheets||b);class _ extends o{constructor(){super();h(this,"_scheduler");if(c===!1)this._scheduler=new t(i,this);else{const f=this.attachShadow({mode:"open",...a});d&&(f.adoptedStyleSheets=d),this._scheduler=new t(i,f,this)}}static get observedAttributes(){return i.observedAttributes||l||[]}connectedCallback(){var f;this._scheduler.update(),(f=this._scheduler.renderResult)==null||f.setConnected(!0)}disconnectedCallback(){var f;this._scheduler.teardown(),(f=this._scheduler.renderResult)==null||f.setConnected(!1)}attributeChangedCallback(f,u,y){if(u===y)return;let E=y===""?!0:y;Reflect.set(this,ee(f),E)}}function p(m){let g=m,f=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(u){f&&g===u||(f=!0,g=u,this._scheduler&&this._scheduler.update())}})}const v=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,g,f,u){let y;return g in m?(y=Object.getOwnPropertyDescriptor(m,g),y&&y.set?(y.set.call(u,f),!0):(Reflect.set(m,g,f,u),!0)):(typeof g=="symbol"||g[0]==="_"?y={enumerable:!0,configurable:!0,writable:!0,value:f}:y=p(f),Object.defineProperty(u,g,y),y.set&&y.set.call(u,f),!0)}});return Object.setPrototypeOf(_.prototype,v),_}return e}class P{constructor(t,e){h(this,"id");h(this,"state");this.id=t,this.state=e}}function ie(s,...t){let e=Wt(),i=Q[q],r=i.get(e);return r||(r=new s(e,Q,...t),i.set(e,r)),r.update(...t)}function A(s){return ie.bind(null,s)}function At(s){return A(class extends P{constructor(e,i,r,n){super(e,i);h(this,"callback");h(this,"lastValues");h(this,"values");h(this,"_teardown");s(i,this)}update(e,i){this.callback=e,this.values=i}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,i)=>this.lastValues[i]!==e)}})}function kt(s,t){s[N].push(t)}const O=At(kt),re=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,ne=A(class extends P{constructor(t,e,i){super(t,e);h(this,"Context");h(this,"value");h(this,"_ranEffect");h(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,kt(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};re(this.state.host).dispatchEvent(new CustomEvent(rt,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:n}=e;this.value=r?n:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function oe(s){return t=>{const e={Provider:class extends HTMLElement{constructor(){super();h(this,"listeners");h(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(rt,this)}disconnectedCallback(){this.removeEventListener(rt,this)}handleEvent(r){const{detail:n}=r;n.Context===e&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let n of this.listeners)n(r)}get value(){return this._value}},Consumer:s(function({render:i}){const r=ne(e);return i(r)},{useShadowDOM:!1}),defaultValue:t};return e}}const $=A(class extends P{constructor(t,e,i,r){super(t,e);h(this,"value");h(this,"values");this.value=i(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),R=(s,t)=>$(()=>s,t);function le(s,t){s[D].push(t)}At(le);const _t=A(class extends P{constructor(t,e,i){super(t,e);h(this,"args");this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});A(class extends P{constructor(t,e,i,r,n){super(t,e);h(this,"reducer");h(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const ae=/([A-Z])/gu,he=A(class extends P{constructor(t,e,i,r){super(t,e);h(this,"property");h(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(ae,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}}),Xe=s=>t=>{t.preventDefault(),s(t.detail.value)};function Tt(s){return $(()=>({current:s}),[])}function ce({render:s}){const t=se(s),e=oe(t);return{component:t,createContext:e}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},j=s=>(...t)=>({_$litDirective$:s,values:t});let K=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=(s,t)=>{var i;const e=s._$AN;if(e===void 0)return!1;for(const r of e)(i=r._$AO)==null||i.call(r,t,!1),V(r,t);return!0},J=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},Rt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),pe(t)}};function ue(s){this._$AN!==void 0?(J(this),this._$AM=s,Rt(this)):this._$AM=s}function de(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)V(i[n],!1),J(i[n]);else i!=null&&(V(i,!1),J(i));else V(this,s)}const pe=s=>{s.type==S.CHILD&&(s._$AP??(s._$AP=de),s._$AQ??(s._$AQ=ue))};class Nt extends K{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Rt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),e&&(V(this,t),J(this))}setValue(t){if(zt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:nt}=ce({render:jt}),it=new WeakMap,ot=j(class extends Nt{render(s){return F}update(s,[t]){var i;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=s.options)==null?void 0:i.host,this.rt(this.ct=s.element)),F}rt(s){if(this.isConnected||(s=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=it.get(t);e===void 0&&(e=new WeakMap,it.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,s),s!==void 0&&this.Y.call(this.ht,s)}else this.Y.value=s}get lt(){var s,t;return typeof this.Y=="function"?(s=it.get(this.ht??globalThis))==null?void 0:s.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(s,t,e){return s?t(s):e==null?void 0:e(s)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe={},_e=j(class extends K{constructor(){super(...arguments),this.ot=fe}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,r)=>i===this.ot[r]))return L}else if(this.ot===t)return L;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=(s,t,e)=>{const i=new Map;for(let r=t;r<=e;r++)i.set(s[r],r);return i},me=j(class extends K{constructor(s){if(super(s),s.type!==S.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const r=[],n=[];let o=0;for(const l of s)r[o]=i?i(l,o):o,n[o]=e(l,o),o++;return{values:n,keys:r}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){const r=Ht(s),{values:n,keys:o}=this.dt(t,e,i);if(!Array.isArray(r))return this.ut=o,n;const l=this.ut??(this.ut=[]),c=[];let a,b,d=0,_=r.length-1,p=0,v=n.length-1;for(;d<=_&&p<=v;)if(r[d]===null)d++;else if(r[_]===null)_--;else if(l[d]===o[p])c[p]=T(r[d],n[p]),d++,p++;else if(l[_]===o[v])c[v]=T(r[_],n[v]),_--,v--;else if(l[d]===o[v])c[v]=T(r[d],n[v]),I(s,c[v+1],r[d]),d++,v--;else if(l[_]===o[p])c[p]=T(r[_],n[p]),I(s,r[d],r[_]),_--,p++;else if(a===void 0&&(a=mt(o,p,v),b=mt(l,d,_)),a.has(l[d]))if(a.has(l[_])){const m=b.get(o[p]),g=m!==void 0?r[m]:null;if(g===null){const f=I(s,r[d]);T(f,n[p]),c[p]=f}else c[p]=T(g,n[p]),I(s,r[d],g),r[m]=null;p++}else et(r[_]),_--;else et(r[d]),d++;for(;p<=v;){const m=I(s,c[v+1]);T(m,n[p]),c[p++]=m}for(;d<=_;){const m=r[d++];m!==null&&et(m)}return this.ut=o,Lt(s,c),L}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z extends Event{constructor(t){super(Z.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Z.eventName="rangeChanged";class G extends Event{constructor(t){super(G.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}G.eventName="visibilityChanged";class X extends Event{constructor(){super(X.eventName,{bubbles:!1})}}X.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class ve extends ge{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(i)}scrollBy(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:i}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,i){return this._scrollTo(t,e,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const n=Math.abs(i-t),o=Math.abs(r-e);n<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let gt=window==null?void 0:window.ResizeObserver;const be=Symbol("virtualizerRef"),Y="virtualizer-sizer";let vt;class ye{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new gt(()=>this._hostElementSizeChanged()),this._childrenRO=new gt(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[be]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Ee(this._hostElement,t),this._scrollerController=new ve(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen()}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var t,e,i,r;this._scrollEventListeners.forEach(n=>n.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(t=this._scrollerController)==null||t.detach(this),this._scrollerController=null,(e=this._mutationObserver)==null||e.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(r=this._childrenRO)==null||r.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected")}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${Y}]`);e||(e=document.createElement("div"),e.setAttribute(Y,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(Y,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||vt;if(typeof e=="function"&&this._layout instanceof e){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let e,i;if(typeof t.type=="function"){i=t.type;const r={...t};delete r.type,e=r}else e=t;i===void 0&&(vt=i=(await Ut(()=>import("./flow-DQ61c9Hr.js"),[],import.meta.url)).FlowLayout),this._layout=new i(r=>this._handleLayoutMessage(r),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(n=>n.startTime>=this._benchmarkStart&&n.startTime<t).reduce((n,o)=>n+o.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:r}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<e.length;r++){const n=e[r],o=this._first+r;(this._itemsChanged||this._toBeMeasured.has(n))&&(t[o]=i.call(this,n,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},we(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_updateLayout(){this._layout&&this._scrollerController&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var t;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((t=this._layout)==null||t.unpin()),this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",t)}}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new X)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(Y)||t.push(e),e=e.nextElementSibling;return t}_updateView(){var r;const t=this._hostElement,e=(r=this._scrollerController)==null?void 0:r.element,i=this._layout;if(t&&e&&i){let n,o,l,c;const a=t.getBoundingClientRect();n=0,o=0,l=window.innerHeight,c=window.innerWidth;const b=this._clippingAncestors.map(u=>u.getBoundingClientRect());b.unshift(a);for(const u of b)n=Math.max(n,u.top),o=Math.max(o,u.left),l=Math.min(l,u.bottom),c=Math.min(c,u.right);const d=e.getBoundingClientRect(),_={left:a.left-d.left,top:a.top-d.top},p={width:e.scrollWidth,height:e.scrollHeight},v=n-a.top+t.scrollTop,m=o-a.left+t.scrollLeft,g=l-n,f=c-o;i.viewportSize={width:f,height:g},i.viewportScroll={top:v,left:m},i.totalScrollSize=p,i.offsetWithinScroller=_}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,r=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const n=this._hostElement.style;n.minWidth=i?`${i}px`:"100%",n.minHeight=r?`${r}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:i,width:r,height:n,xOffset:o,yOffset:l},c)=>{const a=this._children[c-this._first];a&&(a.style.position="absolute",a.style.boxSizing="border-box",a.style.transform=`translate(${i}px, ${e}px)`,r!==void 0&&(a.style.width=r+"px"),n!==void 0&&(a.style.height=n+"px"),a.style.left=o===void 0?null:o+"px",a.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:r,_lastVisible:n}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==n}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:e-r})}}element(t){var e;return t===1/0&&(t=this._items.length-1),((e=this._items)==null?void 0:e[t])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&(t!=null&&t.has(e))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Z({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new G({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){var e;if((e=this._layout)!=null&&e.measureChildren){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function we(s){const t=window.getComputedStyle(s);return{marginTop:W(t.marginTop),marginRight:W(t.marginRight),marginBottom:W(t.marginBottom),marginLeft:W(t.marginLeft)}}function W(s){const t=s?parseFloat(s):NaN;return Number.isNaN(t)?0:t}function bt(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const t=s.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Ce(s,t=!1){const e=[];let i=t?s:bt(s);for(;i!==null;)e.push(i),i=bt(i);return e}function Ee(s,t=!1){let e=!1;return Ce(s,t).filter(i=>{if(e)return!1;const r=getComputedStyle(i);return e=r.position==="fixed",r.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=s=>s,xe=(s,t)=>C`${t}: ${JSON.stringify(s,null,2)}`;class ze extends Nt{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,i)=>xe(e,i+this._first),this._keyFunction=(e,i)=>Se(e,i+this._first),this._items=[],t.type!==S.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)e.push(this._items[i]);return me(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const i=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),i?L:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const r=t.parentNode;this._makeVirtualizer(r,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(r,n)=>e(r,n+this._first)),i&&(this._keyFunction=(r,n)=>i(r,n+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:n}=e;this._virtualizer=new ye({hostElement:t,layout:i,scroller:r}),this._virtualizer.items=n,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(i,e))}disconnected(){var t;(t=this._virtualizer)==null||t.disconnected()}reconnected(){var t;(t=this._virtualizer)==null||t.connected()}}const Le=j(ze);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=j(class extends K{constructor(s){if(super(s),s.type!==S.PROPERTY&&s.type!==S.ATTRIBUTE&&s.type!==S.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!zt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===L||t===F)return t;const e=s.element,i=s.name;if(s.type===S.PROPERTY){if(t===e[i])return L}else if(s.type===S.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return L}else if(s.type===S.ATTRIBUTE&&e.getAttribute(i)===t+"")return L;return Lt(s),t}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=s=>s??F,$e=A(class extends P{constructor(t,e,i,r){super(t,e);h(this,"values");Object.assign(e.host,i),this.values=r}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,i)=>this.values[i]!==e)}}),Pe=A(class extends P{update(){return this.state.host}}),Ae=/([A-Z])/gu,B=(s,t,e)=>{s[t]=e,s.dispatchEvent(new CustomEvent(t.replace(Ae,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},Mt=s=>{const t=Tt(void 0),e=R(a=>t.current=a,[]),i=s.shadowRoot,r=R(a=>s.dispatchEvent(new Event(a.type,{bubbles:a.bubbles})),[]),n=R(a=>B(s,"value",a.target.value),[]),o=R(a=>B(s,"focused",a.type==="focus"),[]),l=R(()=>{var a;return(a=t.current)==null?void 0:a.focus()},[]),c=R(()=>{var b;const a=(b=t.current)==null?void 0:b.checkValidity();return s.toggleAttribute("invalid",!a),a},[]);return $e({focus:l,validate:c},[l,c]),O(()=>{const a=b=>{b.defaultPrevented||s.disabled||b.target.matches("input, textarea, label")||(b.preventDefault(),s.matches(":focus-within")||l())};return i.addEventListener("mousedown",a),()=>i.removeEventListener("mousedown",a)},[l]),{onChange:r,onFocus:o,onInput:n,onRef:e}},ke=s=>$(()=>{if(s==null)return;const t=new RegExp(s,"u");return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[s]),Te=(s,...t)=>s.flatMap((e,i)=>[e,t[i]??""]).join(""),Re=Te`
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
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
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
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
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
		transform: scale3d(0, 1, 1);
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
`,It=(s,{label:t,invalid:e,errorMessage:i})=>C`
		<style>
			${Re}
		</style>
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${M(t,()=>C`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${M(e&&i,()=>C`<div class="error" part="error">${i}</div>`)}
	`,Dt=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ne=({placeholder:s,noLabelFloat:t,label:e})=>(t?e:void 0)||s||" ",Oe=["type","pattern","allowed-pattern","min","max","step","autosize","label",...Dt],Me=s=>{var f;const{type:t="text",pattern:e,allowedPattern:i,autocomplete:r,value:n,readonly:o,disabled:l,min:c,max:a,step:b,maxlength:d}=s,{onChange:_,onFocus:p,onInput:v,onRef:m}=Mt(s),g=ke(i);return It(C`
			<input
				${ot(m)}
				style="--chars: ${((f=n==null?void 0:n.toString())==null?void 0:f.length)??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${x(e)}
				autocomplete=${x(r)}
				placeholder=${Ne(s)}
				?readonly=${o}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${Ot(n??"")}
				maxlength=${x(d)}
				@beforeinput=${g}
				@input=${v}
				@change=${_}
				@focus=${p}
				@blur=${p}
				min=${x(c)}
				max=${x(a)}
				step=${x(b)}
			/>
		`,s)};customElements.define("cosmoz-input",nt(Me,{observedAttributes:Oe}));const yt=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},Ie=(s,t=0)=>{if(t>0){const e=s.getAttribute("rows")??"",i=s.style.height;s.style.height="",s.setAttribute("rows",t),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=i,s.setAttribute("rows",e)}},De=s=>{const{value:t,maxRows:e}=s,i=$(()=>()=>s.shadowRoot.querySelector("#input"),[]);O(()=>Ie(i(),e),[e,i]),O(()=>yt(i()),[i,t]),O(()=>{const r=i(),n=new ResizeObserver(()=>requestAnimationFrame(()=>yt(r)));return n.observe(r),()=>n.unobserve(r)},[i])},Ve=["rows",...Dt],Be=s=>{const{autocomplete:t,value:e,placeholder:i,readonly:r,disabled:n,rows:o,cols:l,maxlength:c}=s,{onChange:a,onFocus:b,onInput:d,onRef:_}=Mt(s);return De(s),It(C`
			<textarea id="input" part="input"
				${ot(_)}
				autocomplete=${x(t)}
				placeholder=${i||" "}
				rows=${o??1} cols=${x(l)}
				?readonly=${r} ?aria-disabled=${n} ?disabled=${n}
				.value=${Ot(e??"")} maxlength=${x(c)} @input=${d}
				@change=${a} @focus=${b} @blur=${b}>`,s)};customElements.define("cosmoz-textarea",nt(Be,{observedAttributes:Ve}));const Fe=s=>{const t=$(()=>({}),[]);return $(()=>Object.assign(t,s),[t,...Object.values(s)])},wt=(s,t)=>{const e=t.pathLocator||t.path||"",{pathLocatorSeparator:i}=s;return e.includes(i)?e.substring(0,e.lastIndexOf(i)):e},je=(s,t)=>{if(!s)return;const e=s.getNodeByPathLocator(t),i=e?s.getChildren(e):[],{searchProperty:r}=s,n=(o,l)=>{if(s.hasChildren(o)){if(!s.hasChildren(l))return-1}else if(s.hasChildren(l))return 1;const c=o[r],a=l[r];return c>a?1:c<a?-1:0};return i.length>0?i.sort(n):e},He=(s,t,e)=>{if(!s)return[];const i=je(s,e);return t?s.searchNodes(t,i,!1):i},Ue=(s,t,e)=>{let i=!1;return e&&(i=t===e||t.id&&t.id===e.id||t.pathLocator===e.pathLocator),i?`${s} selected`:s},Ye=(s,t)=>{t.dispatchEvent(new CustomEvent("node-dblclicked",{detail:{model:s.model}}))},es=(s,t)=>!t||!s?[]:t.getPathNodes(s).filter(e=>e!==void 0),ss=(s,t)=>{if(!t||!s)return null;const e=t.getNodeByPathLocator(s);let i;return e||(i=t.getPathNodes(s).filter(r=>r!=null)),i&&i.length>0?i.pop()||null:e||null},We=te`
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
`,qe=({tree:s,searchPlaceholder:t,searchGlobalPlaceholder:e,searchMinLength:i,opened:r})=>{const n=Tt(),o=Pe(),[l,c]=he("highlightedNode"),[a,b]=_t(""),[d,_]=_t(""),p=$(()=>(a==null?void 0:a.length)>(i??2)-1&&a||void 0,[a,i]),v=$(()=>He(s,p,d),[s,p,d]),m=R(u=>{_((u==null?void 0:u.pathLocator)||""),b(""),c(null)},[s]);O(()=>{d&&(B(o,"highlightedNodePath",""),B(o,"nodesOnNodePath",[]))},[d]),O(()=>{B(o,"highlightedNodePath",(l==null?void 0:l.pathLocator)||"")},[l]);const g=Fe({dataPlane:v,highlightedNode:l??null,onNodeClick:m});O(()=>{var lt;if(!r)return;const u=()=>{const w=n.current;return w?w[Object.getOwnPropertySymbols(w)[0]]:null},y=u();if(y&&g.highlightedNode){const w=(lt=g.dataPlane)==null?void 0:lt.indexOf(g.highlightedNode);w!==void 0&&w>=0&&(y.scrollToIndex={index:w,position:"center"})}const E=w=>{if(w.ctrlKey&&w.altKey||w.defaultPrevented)return;const{dataPlane:H,highlightedNode:k,onNodeClick:Vt}=g,U=u();if(!U)return;const tt=H.findIndex(z=>z.pathLocator===(k==null?void 0:k.pathLocator)),at=(z,ht)=>z>=0&&z<H.length?(c(H[z]),(ht==="start"?z<U._firstVisible:z>U._lastVisible)&&(U.scrollToIndex={index:z,position:ht}),!0):!1;switch(w.key){case"Up":case"ArrowUp":{w.preventDefault(),at(Math.max(tt-1,0),"start");break}case"Down":case"ArrowDown":{w.preventDefault(),tt<H.length-1&&at(tt+1,"end");break}case"Enter":w.preventDefault(),k&&o.dispatchEvent(new CustomEvent("node-dblclicked"));break;case"Right":case"ArrowRight":w.preventDefault(),k&&s.hasChildren(k)&&Vt(k);break}};return document.addEventListener("keydown",E,!0),()=>document.removeEventListener("keydown",E,!0)},[r,g]);const f=(u,y)=>u?C` <div class="item">
			${(E=>M(p&&(y===0||E!==wt(s,v[y-1])),()=>C`
						<div class="section">
							${s.getPathString(E,s.searchProperty)}
						</div>
					`))(wt(s,u))}
			<div
				class=${Ue("node",u,l)}
				@click=${()=>c(u)}
				@dblclick=${E=>Ye(E,o)}
			>
				<div class="name">${u[s.searchProperty]}</div>
				${M(s.hasChildren(u),()=>C`
						<span class="icon" @click=${()=>m(u)}>
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
		</div>`:F;return C`
		<div class="header">
			<h3 class="path">
				<span class="icon" @click=${()=>m()}>
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
					</svg>
				</span>
				${_e([s,d],()=>(d&&(s==null?void 0:s.getPathNodes(d))||[]).filter(u=>u!==void 0).map(u=>C`
								<span class="slash">/</span>
								<span
									class="pointer"
									tabindex="0"
									@click=${()=>m(u)}
									>${u[s.searchProperty]}</span
								>
							`))}
			</h3>
			<cosmoz-input
				tabindex="0"
				.value=${a}
				.placeholder=${t}
				@input=${u=>b(u.target.value)}
			/>
		</div>
		${M(s,()=>C` <div
					class="items"
					${ot(u=>n.current=u)}
				>
					<div virtualizer-sizer></div>
					${Le({items:v,renderItem:f,scroller:!0})}
				</div>`)}
		${M(p&&d,()=>C`
				<button class="btn-ghost" @click=${()=>_("")}>
					${e}
				</button>
			`)}
	`};customElements.define("cosmoz-treenode-navigator",nt(qe,{styleSheets:[We]}));const is={1:{name:"C:",pathLocator:"1",children:{2:{name:"Windows",pathLocator:"1.2",children:{3:{name:"System",pathLocator:"1.2.3",children:{}},4:{name:"Microsoft.NET",pathLocator:"1.2.4",children:{}}}},5:{name:"Program Files",pathLocator:"1.5",children:{6:{name:"Microsoft VS Code",pathLocator:"1.5.6"},7:{name:"Git",pathLocator:"1.5.7"}}},100:{name:"Users",pathLocator:"1.100",children:{200:{name:"Default",pathLocator:"1.100.200",children:{201:{name:"Documents",pathLocator:"1.100.200.201"},202:{name:"Music",pathLocator:"1.100.200.202"},203:{name:"Pictures",pathLocator:"1.100.200.203"}}},300:{name:"John",pathLocator:"1.100.300",children:{301:{name:"Documents",pathLocator:"1.100.300.301"},302:{name:"Music",pathLocator:"1.100.300.302"},303:{name:"Pictures",pathLocator:"1.100.300.303"}}},400:{name:"Public",pathLocator:"1.100.400",children:{401:{name:"Public Documents",pathLocator:"1.100.400.401"},402:{name:"Public Music",pathLocator:"1.100.400.402"},403:{name:"Public Pictures",pathLocator:"1.100.400.403"}}}}}}},1e3:{name:"D:",pathLocator:"1000",children:{1001:{name:"Data",pathLocator:"1000.1001",children:{1002:{name:"John",pathLocator:"1000.1001.1002"}}},1002:{name:"Backup",pathLocator:"1000.1002"}}}};export{Ge as T,is as a,nt as b,te as c,Tt as d,he as e,_t as f,es as g,$ as h,ot as i,ss as j,Xe as l,M as n,O as u};
