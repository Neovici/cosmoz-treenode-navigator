/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,M=C.trustedTypes,j=M?M.createPolicy("lit-html",{createHTML:r=>r}):void 0,tt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+_,ot=`<${et}>`,g=document,w=()=>g.createComment(""),x=r=>r===null||typeof r!="object"&&typeof r!="function",z=Array.isArray,ht=r=>z(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",R=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,V=/>/g,A=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,Z=/"/g,st=/^(?:script|style|textarea|title)$/i,lt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Ut=lt(1),v=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),J=new WeakMap,m=g.createTreeWalker(g,129);function it(r,t){if(!z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return j!==void 0?j.createHTML(t):t}const at=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=b;for(let a=0;a<e;a++){const h=r[a];let l,d,c=-1,p=0;for(;p<h.length&&(n.lastIndex=p,d=n.exec(h),d!==null);)p=n.lastIndex,n===b?d[1]==="!--"?n=W:d[1]!==void 0?n=V:d[2]!==void 0?(st.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=A):d[3]!==void 0&&(n=A):n===A?d[0]===">"?(n=i??b,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?A:d[3]==='"'?Z:q):n===Z||n===q?n=A:n===W||n===V?n=b:(n=A,i=void 0);const u=n===A&&r[a+1].startsWith("/>")?" ":"";o+=n===b?h+ot:c>=0?(s.push(l),h.slice(0,c)+tt+h.slice(c)+_+u):h+_+(c===-2?a:u)}return[it(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,h=this.parts,[l,d]=at(t,e);if(this.el=U.createElement(l,s),m.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=m.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(tt)){const p=d[n++],u=i.getAttribute(c).split(_),H=/([.?@])?(.*)/.exec(p);h.push({type:1,index:o,name:H[2],strings:u,ctor:H[1]==="."?dt:H[1]==="?"?$t:H[1]==="@"?pt:N}),i.removeAttribute(c)}else c.startsWith(_)&&(h.push({type:6,index:o}),i.removeAttribute(c));if(st.test(i.tagName)){const c=i.textContent.split(_),p=c.length-1;if(p>0){i.textContent=M?M.emptyScript:"";for(let u=0;u<p;u++)i.append(c[u],w()),m.nextNode(),h.push({type:2,index:++o});i.append(c[p],w())}}}else if(i.nodeType===8)if(i.data===et)h.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(_,c+1))!==-1;)h.push({type:7,index:o}),c+=_.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function E(r,t,e=r,s){var n,a;if(t===v)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=x(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=E(r,i._$AS(r,t.values),i,s)),t}let ct=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??g).importNode(e,!0);m.currentNode=i;let o=m.nextNode(),n=0,a=0,h=s[0];for(;h!==void 0;){if(n===h.index){let l;h.type===2?l=new S(o,o.nextSibling,this,t):h.type===1?l=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(l=new ut(o,this,t)),this._$AV.push(l),h=s[++a]}n!==(h==null?void 0:h.index)&&(o=m.nextNode(),n++)}return m.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}};class S{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),x(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(it(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new ct(i,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=J.get(t.strings);return e===void 0&&J.set(t.strings,e=new U(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new S(this.O(w()),this.O(w()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==v,n&&(this._$AH=t);else{const a=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=E(this,a[s+h],e,h),l===v&&(l=this._$AH[h]),n||(n=!x(l)||l!==this._$AH[h]),l===$?t=$:t!==$&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}n&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class dt extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class $t extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class pt extends N{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??$)===v)return;const s=this._$AH,i=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==$&&(s===$||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const _t={I:S},k=C.litHtmlPolyfillSupport;k==null||k(U,S),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const ft=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new S(t.insertBefore(w(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:At}=_t,Tt=(r,t)=>t===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===t,Ot=r=>r.strings===void 0,K=()=>document.createComment(""),Mt=(r,t,e)=>{var o;const s=r._$AA.parentNode,i=t===void 0?r._$AB:t._$AA;if(e===void 0){const n=s.insertBefore(K(),i),a=s.insertBefore(K(),i);e=new At(n,a,r,r.options)}else{const n=e._$AB.nextSibling,a=e._$AM,h=a!==r;if(h){let l;(o=e._$AQ)==null||o.call(e,r),e._$AM=r,e._$AP!==void 0&&(l=r._$AU)!==a._$AU&&e._$AP(l)}if(n!==i||h){let l=e._$AA;for(;l!==n;){const d=l.nextSibling;s.insertBefore(l,i),l=d}}}return e},Nt=(r,t,e=r)=>(r._$AI(t,e),r),mt={},Rt=(r,t=mt)=>r._$AH=t,kt=r=>r._$AH,Bt=r=>{var s;(s=r._$AP)==null||s.call(r,!1,!0);let t=r._$AA;const e=r._$AB.nextSibling;for(;t!==e;){const i=t.nextSibling;t.remove(),t=i}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,D=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),F=new WeakMap;let gt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(D&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&F.set(e,t))}return t}toString(){return this.cssText}};const yt=r=>new gt(typeof r=="string"?r:r+"",void 0,rt),vt=(r,t)=>{if(D)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Q=D?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return yt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:St,getOwnPropertyDescriptor:bt,getOwnPropertyNames:Ct,getOwnPropertySymbols:Pt,getPrototypeOf:wt}=Object,f=globalThis,G=f.trustedTypes,xt=G?G.emptyScript:"",B=f.reactiveElementPolyfillSupport,P=(r,t)=>r,L={toAttribute(r,t){switch(t){case Boolean:r=r?xt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nt=(r,t)=>!Et(r,t),X={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&St(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=bt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const a=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...Ct(e),...Pt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Q(i))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:L).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:L;this._$Em=i,this[i]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??nt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[P("elementProperties")]=new Map,y[P("finalized")]=new Map,B==null||B({ReactiveElement:y}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return v}}var Y;O._$litElement$=!0,O.finalized=!0,(Y=globalThis.litElementHydrateSupport)==null||Y.call(globalThis,{LitElement:O});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:O});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");export{ft as B,$ as E,Bt as M,v as T,Tt as e,Ot as f,Rt as m,kt as p,Mt as r,Nt as v,Ut as x};
