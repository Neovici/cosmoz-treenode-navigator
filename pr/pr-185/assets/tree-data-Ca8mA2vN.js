import{r as Rt,a as Zt,A as H,M as Xt,u as N,v as V,h as at,E as T,p as Ot,b as C}from"./iframe-N9_VETUO.js";import{_ as te}from"./preload-helper-PPVm8Dsz.js";const ee=(s,t)=>{const e=c=>c===void 0,i=c=>c,r=s.filter(e).length,n=t.filter(e).length,o=s.filter(i).length,l=t.filter(i).length;return r<n?-1:r>n||o<l?1:o>l?-1:0};class ns{_treeData;_roots;childProperty;searchProperty;pathLocatorSeparator;pathStringSeparator;constructor(t,e={}){this._treeData=t,this._roots=Object.values(t),this.pathLocatorSeparator=e.pathLocatorSeparator||".",this.pathStringSeparator=e.pathStringSeparator||"/",this.childProperty=e.childProperty||"children",this.searchProperty=e.searchProperty||"name"}getNodeByProperty(t,e=this.searchProperty,i=this._roots){if(t!==void 0)return this.findNode(t,e,i)}searchNodes(t,e,i,r=this.searchProperty){const n={propertyName:r,exact:i!==void 0?i:!0,firstHitOnly:!1};return this._searchNodes(t,n,e)}findNode(t,e=this.searchProperty,i){const r={propertyName:e,exact:!0,firstHitOnly:!0};return this._searchNodes(t,r,i).shift()}_searchNodes(t,e,i=this._roots){const r=[];for(const n of i){const o=this.search(n,t,e);if(e.firstHitOnly&&o.length>0)return o;r.push(...o)}return r}getNodeByPathLocator(t,e=this._treeData,i=this.pathLocatorSeparator){return t?this.getPathNodes(t,e,i).pop():this._roots}getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){return t?Object.keys(e).map(r=>{const n={};return n[r]=e[r],this._getPathNodes(t,n,i)}).filter(r=>r&&r.length>0).sort(ee)[0]:e}_getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){const r=t.split(i),n=this._pathToNodes(r,e,i);for(;n.length>0&&n[0]===void 0;)n.shift();return n}_pathToNodes(t,e,i){let r=e;return t.map((n,o)=>{if(!r)return;const l=r[n]??r[t.slice(0,o+1).join(i)];return l&&(r=l[this.childProperty]),l})}getPathString(t,e=this.searchProperty,i=this.pathStringSeparator,r=this.pathLocatorSeparator){const n=this.getPathNodes(t,this._treeData,r);if(Array.isArray(n))return n.filter(o=>o!=null).map(o=>o[e]).join(i)}getPathStringByProperty(t,e=this.searchProperty,i=this.searchProperty,r=this.pathStringSeparator,n=this.pathLocatorSeparator){if(t===void 0)return;if(e==="pathLocator")return this.getPathString(t,i,r,n);const o=this.getNodeByProperty(t,e);if(o){const l=o.pathLocator||o.path;return this.getPathString(l,i,r)}}getChildren(t){return!t||!t[this.childProperty]?[]:Object.values(t[this.childProperty])}hasChildren(t){if(!t)return!1;const e=t[this.childProperty];if(!e)return!1;for(const i in e)return!0;return!1}getProperty(t,e){if(!(!t||!e))return t[e]}nodeConformsSearch(t,e,i){const r=i?t[i.propertyName]:void 0;if(!r){console.error("options.propertyName needs to be specified.");return}if(i?.exact)return r===e;if(e===void 0)return!1;const n=r.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase(),o=e.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase();return n.indexOf(o)>-1}search(t,e,i,r=[]){const n=this.nodeConformsSearch(t,e,i),o=this.getChildren(t);n&&r.push(t);for(const l of o){const c=this.search(l,e,i,r);if(!Array.isArray(c))return[c]}return r}}let K,Mt=0;function Ct(s){K=s}function xt(){K=null,Mt=0}function se(){return Mt++}const ht=Symbol("haunted.phase"),J=Symbol("haunted.hook"),Et=Symbol("haunted.update"),St=Symbol("haunted.commit"),R=Symbol("haunted.effects"),B=Symbol("haunted.layoutEffects"),pt="haunted.context";class ie{update;host;virtual;[J];[R];[B];constructor(t,e){this.update=t,this.host=e,this[J]=new Map,this[R]=[],this[B]=[]}run(t){Ct(this);let e=t();return xt(),e}_runEffects(t){let e=this[t];Ct(this);for(let i of e)i.call(this);xt()}runEffects(){this._runEffects(R)}runLayoutEffects(){this._runEffects(B)}teardown(){this[J].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}const re=Promise.resolve().then.bind(Promise.resolve());function It(){let s=[],t;function e(){t=null;let i=s;s=[];for(var r=0,n=i.length;r<n;r++)i[r]()}return function(i){s.push(i),t==null&&(t=re(e))}}const ne=It(),zt=It();class oe{renderer;host;state;[ht];_updateQueued;_active;constructor(t,e){this.renderer=t,this.host=e,this.state=new ie(this.update.bind(this),e),this[ht]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(ne(()=>{let t=this.handlePhase(Et);zt(()=>{this.handlePhase(St,t),zt(()=>{this.handlePhase(R)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,e){switch(this[ht]=t,t){case St:this.commit(e),this.runEffects(B);return;case Et:return this.render();case R:return this.runEffects(R)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const _t=(...s)=>{const t=new CSSStyleSheet;return t.replaceSync(s.join("")),t},le=s=>s?.map(t=>typeof t=="string"?_t(t):t),ae=(s,...t)=>s.flatMap((e,i)=>[e,t[i]||""]).join(""),mt=ae,he=(s="")=>s.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");function ce(s){class t extends oe{frag;renderResult;constructor(r,n,o){super(r,o||n),this.frag=n}commit(r){this.renderResult=s(r,this.frag)}}function e(i,r,n){const o=(n||r||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:c=!0,shadowRootInit:a={},styleSheets:v}=n||r||{},u=le(i.styleSheets||v);class p extends o{_scheduler;static get observedAttributes(){return i.observedAttributes||l||[]}constructor(){if(super(),c===!1)this._scheduler=new t(i,this);else{const d=this.attachShadow({mode:"open",...a});u&&(d.adoptedStyleSheets=u),this._scheduler=new t(i,d,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(d,m,y){if(m===y)return;let x=y===""?!0:y;Reflect.set(this,he(d),x)}}function f(_){let d=_,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return d},set(y){m&&d===y||(m=!0,d=y,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(o.prototype,{getPrototypeOf(_){return _},set(_,d,m,y){let x;return d in _?(x=Object.getOwnPropertyDescriptor(_,d),x&&x.set?(x.set.call(y,m),!0):(Reflect.set(_,d,m,y),!0)):(typeof d=="symbol"||d[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:m}:x=f(m),Object.defineProperty(y,d,x),x.set&&x.set.call(y,m),!0)}});return Object.setPrototypeOf(p.prototype,g),p}return e}class P{id;state;constructor(t,e){this.id=t,this.state=e}}function ue(s,...t){let e=se(),i=K[J],r=i.get(e);return r||(r=new s(e,K,...t),i.set(e,r)),r.update(...t)}function k(s){return ue.bind(null,s)}function Dt(s){return k(class extends P{callback;lastValues;values;_teardown;constructor(t,e,i,r){super(t,e),s(e,this)}update(t,e){this.callback=t,this.values=e}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,e)=>this.lastValues[e]!==t)}})}function Vt(s,t){s[R].push(t)}const E=Dt(Vt),de=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,pe=k(class extends P{Context;value;_ranEffect;_unsubscribe;constructor(s,t,e){super(s,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Vt(t,this)}update(s){return this.Context!==s&&(this._subscribe(s),this.Context=s),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(s){this.value=s,this.state.update()}_subscribe(s){const t={Context:s,callback:this._updater};de(this.state.host).dispatchEvent(new CustomEvent(pt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:r}=t;this.value=i?r:s.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function fe(s){return t=>{const e={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(pt,this)}disconnectedCallback(){this.removeEventListener(pt,this)}handleEvent(i){const{detail:r}=i;r.Context===e&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let r of this.listeners)r(i)}get value(){return this._value}},Consumer:s(function({render:i}){const r=pe(e);return i(r)},{useShadowDOM:!1}),defaultValue:t};return e}}const O=k(class extends P{value;values;constructor(s,t,e,i){super(s,t),this.value=e(),this.values=i}update(s,t){return this.hasChanged(t)&&(this.values=t,this.value=s()),this.value}hasChanged(s=[]){return s.some((t,e)=>this.values[e]!==t)}}),S=(s,t)=>O(()=>s,t);function _e(s,t){s[B].push(t)}Dt(_e);const ct=k(class extends P{args;constructor(s,t,e){super(s,t),this.updater=this.updater.bind(this),typeof e=="function"&&(e=e()),this.makeArgs(e)}update(){return this.args}updater(s){const[t]=this.args;typeof s=="function"&&(s=s(t)),!Object.is(t,s)&&(this.makeArgs(s),this.state.update())}makeArgs(s){this.args=Object.freeze([s,this.updater])}});k(class extends P{reducer;currentState;constructor(s,t,e,i,r){super(s,t),this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(i):i}update(s){return this.reducer=s,[this.currentState,this.dispatch]}dispatch(s){this.currentState=this.reducer(this.currentState,s),this.state.update()}});const me=/([A-Z])/gu,Y=k(class extends P{property;eventName;constructor(s,t,e,i){if(super(s,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=e,this.eventName=e.replace(me,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(s,t){return[this.state.host[this.property],this.updater]}updater(s){const t=this.state.host[this.property];typeof s=="function"&&(s=s(t)),!Object.is(t,s)&&this.updateProp(s)}updateProp(s){this.notify(s).defaultPrevented||(this.state.host[this.property]=s)}notify(s){const t=new CustomEvent(this.eventName,{detail:{value:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}}),os=s=>t=>{t.preventDefault(),s(t.detail.value)};function Bt(s){return O(()=>({current:s}),[])}k(class extends P{update(){return this.state.host}});function ge({render:s}){const t=ce(s),e=fe(t);return{component:t,createContext:e}}const z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},j=s=>(...t)=>({_$litDirective$:s,values:t});let X=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const F=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const i of e)i._$AO?.(t,!1),F(i,t);return!0},Z=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Ft=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),ye(t)}};function ve(s){this._$AN!==void 0?(Z(this),this._$AM=s,Ft(this)):this._$AM=s}function be(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)F(i[n],!1),Z(i[n]);else i!=null&&(F(i,!1),Z(i));else F(this,s)}const ye=s=>{s.type==z.CHILD&&(s._$AP??=be,s._$AQ??=ve)};class Ht extends X{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Ft(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(F(this,t),Z(this))}setValue(t){if(Rt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:tt}=ge({render:Zt}),ut=new WeakMap,gt=j(class extends Ht{render(s){return H}update(s,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),H}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=ut.get(t);e===void 0&&(e=new WeakMap,ut.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?ut.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function $(s,t,e){return s?t(s):e?.(s)}const Lt=(s,t,e)=>{const i=new Map;for(let r=t;r<=e;r++)i.set(s[r],r);return i},we=j(class extends X{constructor(s){if(super(s),s.type!==z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const r=[],n=[];let o=0;for(const l of s)r[o]=i?i(l,o):o,n[o]=e(l,o),o++;return{values:n,keys:r}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){const r=Xt(s),{values:n,keys:o}=this.dt(t,e,i);if(!Array.isArray(r))return this.ut=o,n;const l=this.ut??=[],c=[];let a,v,u=0,p=r.length-1,f=0,g=n.length-1;for(;u<=p&&f<=g;)if(r[u]===null)u++;else if(r[p]===null)p--;else if(l[u]===o[f])c[f]=N(r[u],n[f]),u++,f++;else if(l[p]===o[g])c[g]=N(r[p],n[g]),p--,g--;else if(l[u]===o[g])c[g]=N(r[u],n[g]),V(s,c[g+1],r[u]),u++,g--;else if(l[p]===o[f])c[f]=N(r[p],n[f]),V(s,r[u],r[p]),p--,f++;else if(a===void 0&&(a=Lt(o,f,g),v=Lt(l,u,p)),a.has(l[u]))if(a.has(l[p])){const _=v.get(o[f]),d=_!==void 0?r[_]:null;if(d===null){const m=V(s,r[u]);N(m,n[f]),c[f]=m}else c[f]=N(d,n[f]),V(s,r[u],d),r[_]=null;f++}else at(r[p]),p--;else at(r[u]),u++;for(;f<=g;){const _=V(s,c[g+1]);N(_,n[f]),c[f++]=_}for(;u<=p;){const _=r[u++];_!==null&&at(_)}return this.ut=o,Ot(s,c),T}});class et extends Event{constructor(t){super(et.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}et.eventName="rangeChanged";class st extends Event{constructor(t){super(st.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}st.eventName="visibilityChanged";class it extends Event{constructor(){super(it.eventName,{bubbles:!1})}}it.eventName="unpinned";class Ce{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class xe extends Ce{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(i)}scrollBy(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:i}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,i){return this._scrollTo(t,e,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const n=Math.abs(i-t),o=Math.abs(r-e);n<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let $t=typeof window<"u"?window.ResizeObserver:void 0;const Ee=Symbol("virtualizerRef"),q="virtualizer-sizer";let Pt;class Se{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new $t(()=>this._hostElementSizeChanged()),this._childrenRO=new $t(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[Ee]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=$e(this._hostElement,t),this._scrollerController=new xe(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${q}]`);e||(e=document.createElement("div"),e.setAttribute(q,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(q,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||Pt;if(typeof e=="function"&&this._layout instanceof e){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let e,i;if(typeof t.type=="function"){i=t.type;const r={...t};delete r.type,e=r}else e=t;i===void 0&&(Pt=i=(await te(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new i(r=>this._handleLayoutMessage(r),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(n=>n.startTime>=this._benchmarkStart&&n.startTime<t).reduce((n,o)=>n+o.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:r}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<e.length;r++){const n=e[r],o=this._first+r;(this._itemsChanged||this._toBeMeasured.has(n))&&(t[o]=i.call(this,n,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},ze(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new it)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(q)||t.push(e),e=e.nextElementSibling;return t}_updateView(){const t=this._hostElement,e=this._scrollerController?.element,i=this._layout;if(t&&e&&i){let r,n,o,l;const c=t.getBoundingClientRect();r=0,n=0,o=window.innerHeight,l=window.innerWidth;const a=this._clippingAncestors.map(m=>m.getBoundingClientRect());a.unshift(c);for(const m of a)r=Math.max(r,m.top),n=Math.max(n,m.left),o=Math.min(o,m.bottom),l=Math.min(l,m.right);const v=e.getBoundingClientRect(),u={left:c.left-v.left,top:c.top-v.top},p={width:e.scrollWidth,height:e.scrollHeight},f=r-c.top+t.scrollTop,g=n-c.left+t.scrollLeft,_=Math.max(0,o-r),d=Math.max(0,l-n);i.viewportSize={width:d,height:_},i.viewportScroll={top:f,left:g},i.totalScrollSize=p,i.offsetWithinScroller=u}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,r=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const n=this._hostElement.style;n.minWidth=i?`${i}px`:"100%",n.minHeight=r?`${r}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:i,width:r,height:n,xOffset:o,yOffset:l},c)=>{const a=this._children[c-this._first];a&&(a.style.position="absolute",a.style.boxSizing="border-box",a.style.transform=`translate(${i}px, ${e}px)`,r!==void 0&&(a.style.width=r+"px"),n!==void 0&&(a.style.height=n+"px"),a.style.left=o===void 0?null:o+"px",a.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:r,_lastVisible:n}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==n}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:e-r})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(e={})=>this._scrollElementIntoView({...e,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&t?.has(e)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new et({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new st({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const e of t)this._toBeMeasured.set(e.target,e.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function ze(s){const t=window.getComputedStyle(s);return{marginTop:Q(t.marginTop),marginRight:Q(t.marginRight),marginBottom:Q(t.marginBottom),marginLeft:Q(t.marginLeft)}}function Q(s){const t=s?parseFloat(s):NaN;return Number.isNaN(t)?0:t}function kt(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const t=s.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Le(s,t=!1){const e=[];let i=t?s:kt(s);for(;i!==null;)e.push(i),i=kt(i);return e}function $e(s,t=!1){let e=!1;return Le(s,t).filter(i=>{if(e)return!1;const r=getComputedStyle(i);return e=r.position==="fixed",r.overflow!=="visible"})}const Pe=s=>s,ke=(s,t)=>C`${t}: ${JSON.stringify(s,null,2)}`;class Ae extends Ht{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,i)=>ke(e,i+this._first),this._keyFunction=(e,i)=>Pe(e,i+this._first),this._items=[],t.type!==z.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)e.push(this._items[i]);return we(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const i=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),i?T:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const r=t.parentNode;this._makeVirtualizer(r,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(r,n)=>e(r,n+this._first)),i&&(this._keyFunction=(r,n)=>i(r,n+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:n}=e;this._virtualizer=new Se({hostElement:t,layout:i,scroller:r}),this._virtualizer.items=n,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(i,e))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Te=j(Ae);const Ne={},Re=j(class extends X{constructor(){super(...arguments),this.ot=Ne}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,r)=>i===this.ot[r]))return T}else if(this.ot===t)return T;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});const vt=j(class extends X{constructor(s){if(super(s),s.type!==z.PROPERTY&&s.type!==z.ATTRIBUTE&&s.type!==z.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Rt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===T||t===H)return t;const e=s.element,i=s.name;if(s.type===z.PROPERTY){if(t===e[i])return T}else if(s.type===z.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return T}else if(s.type===z.ATTRIBUTE&&e.getAttribute(i)===t+"")return T;return Ot(s),t}});const L=s=>s??H,Oe=k(class extends P{values;constructor(s,t,e,i){super(s,t),Object.assign(t.host,e),this.values=i}update(s,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,s))}hasChanged(s=[]){return s.some((t,e)=>this.values[e]!==t)}}),Me=k(class extends P{update(){return this.state.host}}),Ie=/([A-Z])/gu,ft=(s,t,e)=>{s[t]=e,s.dispatchEvent(new CustomEvent(t.replace(Ie,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},jt=s=>{const t=Bt(void 0),e=S(a=>t.current=a,[]),i=s.shadowRoot,r=S(a=>s.dispatchEvent(new Event(a.type,{bubbles:a.bubbles})),[]),n=S(a=>ft(s,"value",a.target.value),[]),o=S(a=>ft(s,"focused",a.type==="focus"),[]),l=S(()=>t.current?.focus(),[]),c=S(()=>{const a=t.current?.checkValidity();return s.toggleAttribute("invalid",!a),a},[]);return Oe({focus:l,validate:c},[l,c]),E(()=>{const a=v=>{v.defaultPrevented||s.disabled||v.target.matches("input, textarea, label")||(v.preventDefault(),s.matches(":focus-within")||l())};return i.addEventListener("mousedown",a),()=>i.removeEventListener("mousedown",a)},[l]),{onChange:r,onFocus:o,onInput:n,onRef:e}},De=s=>O(()=>{if(s==null)return;const t=new RegExp(s,"u");return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[s]),Ut=(s,{label:t,invalid:e,errorMessage:i})=>C`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${$(t,()=>C`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${$(e&&i,()=>C`<div class="error" part="error">${i}</div>`)}
	`,Wt=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ve=({placeholder:s,noLabelFloat:t,label:e})=>(t?e:void 0)||s||" ",Gt=(s,...t)=>s.flatMap((e,i)=>[e,t[i]??""]).join(""),At=Gt`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,Yt=Gt`
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
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
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
		user-select: none;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
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

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
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

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
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

	:host(:focus-within) {
		${At}
	}
	@container style(--focused: focused) {
		${At}
	}
`,Be=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Wt],Fe=s=>{const{type:t="text",pattern:e,allowedPattern:i,autocomplete:r,value:n,readonly:o,disabled:l,min:c,max:a,step:v,maxlength:u}=s,{onChange:p,onFocus:f,onInput:g,onRef:_}=jt(s),d=De(i);return Ut(C`
			<input
				${gt(_)}
				style="--chars: ${n?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${L(e)}
				autocomplete=${L(r)}
				placeholder=${Ve(s)}
				?readonly=${o}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${vt(n??"")}
				maxlength=${L(u)}
				@beforeinput=${d}
				@input=${g}
				@change=${p}
				@focus=${f}
				@blur=${f}
				min=${L(c)}
				max=${L(a)}
				step=${L(v)}
			/>
		`,s)};customElements.define("cosmoz-input",tt(Fe,{observedAttributes:Be,styleSheets:[_t(Yt)]}));const Tt=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},He=(s,t=0)=>{if(t>0){const e=s.getAttribute("rows")??"",i=s.style.height;s.style.height="",s.setAttribute("rows",t),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=i,s.setAttribute("rows",e)}},je=s=>{const{value:t,maxRows:e}=s,i=O(()=>()=>s.shadowRoot.querySelector("#input"),[]);E(()=>He(i(),e),[e,i]),E(()=>Tt(i()),[i,t]),E(()=>{const r=i(),n=new ResizeObserver(()=>requestAnimationFrame(()=>Tt(r)));return n.observe(r),()=>n.unobserve(r)},[i])},Ue=["rows","placeholder",...Wt],We=s=>{const{autocomplete:t,value:e,placeholder:i,readonly:r,disabled:n,rows:o,cols:l,maxlength:c}=s,{onChange:a,onFocus:v,onInput:u,onRef:p}=jt(s);return je(s),Ut(C`
			<textarea id="input" part="input"
				${gt(p)}
				autocomplete=${L(t)}
				placeholder=${i||" "}
				rows=${o??1} cols=${L(l)}
				?readonly=${r} ?aria-disabled=${n} ?disabled=${n}
				.value=${vt(e??"")} maxlength=${L(c)} @input=${u}
				@change=${a} @focus=${v} @blur=${v}>`,s)};customElements.define("cosmoz-textarea",tt(We,{observedAttributes:Ue,styleSheets:[_t(Yt)]}));const Ge=s=>{const{label:t,value:e,disabled:i,error:r}=s,n=S(o=>s.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return C`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${vt(!!e)}
			?disabled=${i}
			@change=${n}
		/>
		${$(t,()=>C`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${$(r,o=>C`<div class="failure">${o}</div>`)} `},Ye=mt`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,qe=mt`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",tt(Ge,{styleSheets:[qe,Ye],observedAttributes:["disabled"]}));const Qe=s=>{const t=O(()=>({}),[]);return O(()=>Object.assign(t,s),[t,...Object.values(s)])},Je=mt`
	:host {
		--cosmoz-treenode-navigator-select-node-icon-color: var(
			--primary-color,
			#3a91e2
		);
		--cosmoz-treenode-navigator-list-item-focused-color: #f0f8ff;
	}

	.header {
		margin: 0 16px;
		color: var(--cz-text-color, inherit);
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
		color: var(--cosmoz-treenode-navigator-icon-color, currentColor);
	}

	.icon svg {
		fill: currentColor;
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
		overflow-y: auto;
	}

	.section {
		background-color: var(--cz-bg-color, #f5f5f5);
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
		color: var(--cz-text-color, inherit);
		height: 40px;
		line-height: 24px;
		padding: 6px 12px 6px 16px;
		cursor: pointer;
	}

	.name {
		flex: auto;
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
`,dt=(s,t)=>{const e=t.pathLocator||t.path||"",{pathLocatorSeparator:i}=s;return e.includes(i)?e.substring(0,e.lastIndexOf(i)):e},Ke=(s,t)=>{if(!s)return;const e=s.getNodeByPathLocator(t),i=e?s.getChildren(e):[],{searchProperty:r}=s,n=(o,l)=>{if(s.hasChildren(o)){if(!s.hasChildren(l))return-1}else if(s.hasChildren(l))return 1;const c=o[r],a=l[r];return c>a?1:c<a?-1:0};return i.length>0?i.sort(n):e},Ze=(s,t,e)=>{if(!s)return[];const i=Ke(s,e);return t?s.searchNodes(t,i,!1):i},Xe=(s,t,e)=>{let i=!1;return e&&(i=t===e||t.id&&t.id===e.id||t.pathLocator===e.pathLocator),i?`${s} selected`:s},ts=(s,t)=>{t.dispatchEvent(new CustomEvent("node-dblclicked",{detail:{model:s.model}}))},Nt=(s,t)=>!t||!s?[]:t.getPathNodes(s).filter(e=>e!==void 0),es=({tree:s,searchPlaceholder:t,searchGlobalPlaceholder:e,searchMinLength:i=3,opened:r,searchDebounceTimeout:n=2e3})=>{const o=Bt(),l=Me(),[c,a]=Y("highlightedNode"),[v,u]=Y("nodesOnNodePath",[]),[p,f]=ct(""),[g,_]=ct(""),[d,m]=ct(""),[y,x]=Y("selectedNode"),[rt,qt]=Y("nodePath","");E(()=>{const h=setTimeout(()=>{const b=g.trim().length;b>0&&b<i||f(g.trim())},n);return()=>clearTimeout(h)},[g]);const nt=O(()=>Ze(s,p,d),[s,p,d]),bt=S(h=>{if(!h?.pathLocator||!s){u([]);return}const b=Nt(h.pathLocator,s);u(b)},[s]),U=S(h=>{m(h?.pathLocator||""),_(""),a(null)},[]),ot=S(h=>{h&&(a(h),x(h),qt(h.pathLocator??""),bt(h))},[bt]);E(()=>{if(!v?.length||!s||!r)return;const h=v[v.length-1];if(!h?.pathLocator)return;if(s.hasChildren(h)){m(h.pathLocator);return}const b=dt(s,h);m(b),a(h)},[v,s,r]),E(()=>{ft(l,"highlightedNodePath",c?.pathLocator||"")},[c]),E(()=>{y&&y!==c&&a(y)},[y]),E(()=>{if(!(rt||s))return;const h=Nt(rt,s);u(h);const b=h.length>0?h[h.length-1]:null;b&&b!==c&&a(b)},[rt,s]);const I=Qe({dataPlane:nt,highlightedNode:c??null,onNodeClick:U});E(()=>{if(!r)return;const h=()=>{const w=o.current;return w?w[Object.getOwnPropertySymbols(w)[0]]:null},b=h();if(b&&I.highlightedNode){const w=I.dataPlane?.indexOf(I.highlightedNode);w!==void 0&&w>=0&&(b.scrollToIndex={index:w,position:"center"})}const D=w=>{if(w.ctrlKey&&w.altKey||w.defaultPrevented)return;const{dataPlane:W,highlightedNode:M,onNodeClick:Kt}=I,G=h();if(!G)return;const lt=W.findIndex(A=>A.pathLocator===M?.pathLocator),yt=(A,wt)=>A>=0&&A<W.length?(a(W[A]),(wt==="start"?A<G._firstVisible:A>G._lastVisible)&&(G.scrollToIndex={index:A,position:wt}),!0):!1;switch(w.key){case"Up":case"ArrowUp":{w.preventDefault(),yt(Math.max(lt-1,0),"start");break}case"Down":case"ArrowDown":{w.preventDefault(),lt<W.length-1&&yt(lt+1,"end");break}case"Enter":w.preventDefault(),M&&(l.dispatchEvent(new CustomEvent("node-dblclicked")),ot(M));break;case"Right":case"ArrowRight":w.preventDefault(),M&&s.hasChildren(M)&&Kt(M);break}};return document.addEventListener("keydown",D,!0),()=>document.removeEventListener("keydown",D,!0)},[r,I,ot]);const Qt=h=>b=>{ts(b,l),ot(h)},Jt=(h,b)=>h?C` <div class="item">
			${$(p,()=>{const D=dt(s,h);return $(b===0||D!==dt(s,nt[b-1]),()=>C`
						<div class="section">
							${s.getPathString(D,s.searchProperty)}
						</div>
					`)})}
			<div
				class=${Xe("node",h,c)}
				data-testid="node"
				@click=${()=>a(h)}
				@dblclick=${Qt(h)}
			>
				<div class="name" data-testid="node-name">
					${h[s.searchProperty]}
				</div>
				${$(s.hasChildren(h),()=>C`
						<span
							class="icon"
							data-testid="node-arrow"
							@click=${()=>U(h)}
						>
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
		</div>`:H;return C`
		<div class="header">
			<h3 class="path">
				<span
					class="icon"
					data-testid="home-icon"
					@click=${()=>U()}
				>
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
					</svg>
				</span>
				${Re([s,d],()=>(d&&s?.getPathNodes(d)||[]).filter(h=>h!==void 0).map(h=>C`
								<span class="slash">/</span>
								<span
									class="pointer"
									tabindex="0"
									@click=${()=>U(h)}
									>${h[s.searchProperty]}</span
								>
							`))}
			</h3>
			<cosmoz-input
				tabindex="0"
				data-testid="search-input"
				.value=${g}
				.placeholder=${t}
				@input=${h=>_(h.target.value)}
			/>
		</div>
		${$(s,()=>C` <div
					class="items"
					${gt(h=>o.current=h)}
				>
					<div virtualizer-sizer></div>
					${Te({items:nt,renderItem:Jt,scroller:!0})}
				</div>`)}
		${$(p&&d,()=>C`
				<button
					class="btn-ghost"
					data-testid="global-search-button"
					@click=${()=>m("")}
				>
					${e}
				</button>
			`)}
	`};customElements.define("cosmoz-treenode-navigator",tt(es,{styleSheets:[Je]}));const as={1:{name:"C:",pathLocator:"1",children:{2:{name:"Windows",pathLocator:"1.2",children:{3:{name:"System",pathLocator:"1.2.3",children:{}},4:{name:"Microsoft.NET",pathLocator:"1.2.4",children:{}}}},5:{name:"Program Files",pathLocator:"1.5",children:{6:{name:"Microsoft VS Code",pathLocator:"1.5.6"},7:{name:"Git",pathLocator:"1.5.7"}}},100:{name:"Users",pathLocator:"1.100",children:{200:{name:"Default",pathLocator:"1.100.200",children:{201:{name:"Documents",pathLocator:"1.100.200.201"},202:{name:"Music",pathLocator:"1.100.200.202"},203:{name:"Pictures",pathLocator:"1.100.200.203"}}},300:{name:"John",pathLocator:"1.100.300",children:{301:{name:"Documents",pathLocator:"1.100.300.301"},302:{name:"Music",pathLocator:"1.100.300.302"},303:{name:"Pictures",pathLocator:"1.100.300.303"}}},400:{name:"Public",pathLocator:"1.100.400",children:{401:{name:"Public Documents",pathLocator:"1.100.400.401"},402:{name:"Public Music",pathLocator:"1.100.400.402"},403:{name:"Public Pictures",pathLocator:"1.100.400.403"}}}}}}},1e3:{name:"D:",pathLocator:"1000",children:{1001:{name:"Data",pathLocator:"1000.1001",children:{1002:{name:"John",pathLocator:"1000.1001.1002"}}},1002:{name:"Backup",pathLocator:"1000.1002"}}}};export{ns as T,as as a,tt as b,mt as c,Bt as d,Y as e,ct as f,Nt as g,O as h,$ as i,os as l,gt as n,L as o,E as u};
