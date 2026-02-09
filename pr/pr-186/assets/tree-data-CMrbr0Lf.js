import{r as Lt,e as Wt,A as H,b as v,M as Gt,u as N,v as B,h as at,E as T,p as $t,t as bt}from"./iframe-iPBwYnbQ.js";import{_ as Yt}from"./preload-helper-PPVm8Dsz.js";const qt=(s,t)=>{const e=c=>c===void 0,i=c=>c,r=s.filter(e).length,o=t.filter(e).length,n=s.filter(i).length,a=t.filter(i).length;return r<o?-1:r>o||n<a?1:n>a?-1:0};class rs{_treeData;_roots;childProperty;searchProperty;pathLocatorSeparator;pathStringSeparator;constructor(t,e={}){this._treeData=t,this._roots=Object.values(t),this.pathLocatorSeparator=e.pathLocatorSeparator||".",this.pathStringSeparator=e.pathStringSeparator||"/",this.childProperty=e.childProperty||"children",this.searchProperty=e.searchProperty||"name"}getNodeByProperty(t,e=this.searchProperty,i=this._roots){if(t!==void 0)return this.findNode(t,e,i)}searchNodes(t,e,i,r=this.searchProperty){const o={propertyName:r,exact:i!==void 0?i:!0,firstHitOnly:!1};return this._searchNodes(t,o,e)}findNode(t,e=this.searchProperty,i){const r={propertyName:e,exact:!0,firstHitOnly:!0};return this._searchNodes(t,r,i).shift()}_searchNodes(t,e,i=this._roots){const r=[];for(const o of i){const n=this.search(o,t,e);if(e.firstHitOnly&&n.length>0)return n;r.push(...n)}return r}getNodeByPathLocator(t,e=this._treeData,i=this.pathLocatorSeparator){return t?this.getPathNodes(t,e,i).pop():this._roots}getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){return t?Object.keys(e).map(r=>{const o={};return o[r]=e[r],this._getPathNodes(t,o,i)}).filter(r=>r&&r.length>0).sort(qt)[0]:e}_getPathNodes(t,e=this._treeData,i=this.pathLocatorSeparator){const r=t.split(i),o=this._pathToNodes(r,e,i);for(;o.length>0&&o[0]===void 0;)o.shift();return o}_pathToNodes(t,e,i){let r=e;return t.map((o,n)=>{if(!r)return;const a=r[o]??r[t.slice(0,n+1).join(i)];return a&&(r=a[this.childProperty]),a})}getPathString(t,e=this.searchProperty,i=this.pathStringSeparator,r=this.pathLocatorSeparator){const o=this.getPathNodes(t,this._treeData,r);if(Array.isArray(o))return o.filter(n=>n!=null).map(n=>n[e]).join(i)}getPathStringByProperty(t,e=this.searchProperty,i=this.searchProperty,r=this.pathStringSeparator,o=this.pathLocatorSeparator){if(t===void 0)return;if(e==="pathLocator")return this.getPathString(t,i,r,o);const n=this.getNodeByProperty(t,e);if(n){const a=n.pathLocator||n.path;return this.getPathString(a,i,r)}}getChildren(t){return!t||!t[this.childProperty]?[]:Object.values(t[this.childProperty])}hasChildren(t){if(!t)return!1;const e=t[this.childProperty];if(!e)return!1;for(const i in e)return!0;return!1}getProperty(t,e){if(!(!t||!e))return t[e]}nodeConformsSearch(t,e,i){const r=i?t[i.propertyName]:void 0;if(!r){console.error("options.propertyName needs to be specified.");return}if(i?.exact)return r===e;if(e===void 0)return!1;const o=r.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase(),n=e.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toUpperCase();return o.indexOf(n)>-1}search(t,e,i,r=[]){const o=this.nodeConformsSearch(t,e,i),n=this.getChildren(t);o&&r.push(t);for(const a of n){const c=this.search(a,e,i,r);if(!Array.isArray(c))return[c]}return r}}let K,Pt=0;function gt(s){K=s}function _t(){K=null,Pt=0}function Qt(){return Pt++}const lt=Symbol("haunted.phase"),J=Symbol("haunted.hook"),vt=Symbol("haunted.update"),yt=Symbol("haunted.commit"),O=Symbol("haunted.effects"),F=Symbol("haunted.layoutEffects"),dt="haunted.context";class Zt{update;host;virtual;[J];[O];[F];constructor(t,e){this.update=t,this.host=e,this[J]=new Map,this[O]=[],this[F]=[]}run(t){gt(this);let e=t();return _t(),e}_runEffects(t){let e=this[t];gt(this);for(let i of e)i.call(this);_t()}runEffects(){this._runEffects(O)}runLayoutEffects(){this._runEffects(F)}teardown(){this[J].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}const Jt=Promise.resolve().then.bind(Promise.resolve());function At(){let s=[],t;function e(){t=null;let i=s;s=[];for(var r=0,o=i.length;r<o;r++)i[r]()}return function(i){s.push(i),t==null&&(t=Jt(e))}}const Kt=At(),wt=At();class Xt{renderer;host;state;[lt];_updateQueued;_active;constructor(t,e){this.renderer=t,this.host=e,this.state=new Zt(this.update.bind(this),e),this[lt]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(Kt(()=>{let t=this.handlePhase(vt);wt(()=>{this.handlePhase(yt,t),wt(()=>{this.handlePhase(O)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,e){switch(this[lt]=t,t){case yt:this.commit(e),this.runEffects(F);return;case vt:return this.render();case O:return this.runEffects(O)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const et=(...s)=>{const t=new CSSStyleSheet;return t.replaceSync(s.join("")),t},te=s=>s?.map(t=>typeof t=="string"?et(t):t),ee=(s,...t)=>s.flatMap((e,i)=>[e,t[i]||""]).join(""),I=ee,se=(s="")=>s.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");function ie(s){class t extends Xt{frag;renderResult;constructor(r,o,n){super(r,n||o),this.frag=o}commit(r){this.renderResult=s(r,this.frag)}}function e(i,r,o){const n=(o||r||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:c=!0,shadowRootInit:l={},styleSheets:_}=o||r||{},d=te(i.styleSheets||_);class u extends n{_scheduler;static get observedAttributes(){return i.observedAttributes||a||[]}constructor(){if(super(),c===!1)this._scheduler=new t(i,this);else{const m=this.attachShadow({mode:"open",...l});d&&(m.adoptedStyleSheets=d),this._scheduler=new t(i,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,g,y){if(g===y)return;let x=y===""?!0:y;Reflect.set(this,se(m),x)}}function p(b){let m=b,g=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){g&&m===y||(g=!0,m=y,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(n.prototype,{getPrototypeOf(b){return b},set(b,m,g,y){let x;return m in b?(x=Object.getOwnPropertyDescriptor(b,m),x&&x.set?(x.set.call(y,g),!0):(Reflect.set(b,m,g,y),!0)):(typeof m=="symbol"||m[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:g}:x=p(g),Object.defineProperty(y,m,x),x.set&&x.set.call(y,g),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return e}class ${id;state;constructor(t,e){this.id=t,this.state=e}}function re(s,...t){let e=Qt(),i=K[J],r=i.get(e);return r||(r=new s(e,K,...t),i.set(e,r)),r.update(...t)}function P(s){return re.bind(null,s)}function Tt(s){return P(class extends ${callback;lastValues;values;_teardown;constructor(t,e,i,r){super(t,e),s(e,this)}update(t,e){this.callback=t,this.values=e}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,e)=>this.lastValues[e]!==t)}})}function Rt(s,t){s[O].push(t)}const k=Tt(Rt),oe=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,ne=P(class extends ${Context;value;_ranEffect;_unsubscribe;constructor(s,t,e){super(s,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Rt(t,this)}update(s){return this.Context!==s&&(this._subscribe(s),this.Context=s),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(s){this.value=s,this.state.update()}_subscribe(s){const t={Context:s,callback:this._updater};oe(this.state.host).dispatchEvent(new CustomEvent(dt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:r}=t;this.value=i?r:s.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function ae(s){return t=>{const e={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(dt,this)}disconnectedCallback(){this.removeEventListener(dt,this)}handleEvent(i){const{detail:r}=i;r.Context===e&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let r of this.listeners)r(i)}get value(){return this._value}},Consumer:s(function({render:i}){const r=ne(e);return i(r)},{useShadowDOM:!1}),defaultValue:t};return e}}const R=P(class extends ${value;values;constructor(s,t,e,i){super(s,t),this.value=e(),this.values=i}update(s,t){return this.hasChanged(t)&&(this.values=t,this.value=s()),this.value}hasChanged(s=[]){return s.some((t,e)=>this.values[e]!==t)}}),S=(s,t)=>R(()=>s,t);function le(s,t){s[F].push(t)}Tt(le);const q=P(class extends ${args;constructor(s,t,e){super(s,t),this.updater=this.updater.bind(this),typeof e=="function"&&(e=e()),this.makeArgs(e)}update(){return this.args}updater(s){const[t]=this.args;typeof s=="function"&&(s=s(t)),!Object.is(t,s)&&(this.makeArgs(s),this.state.update())}makeArgs(s){this.args=Object.freeze([s,this.updater])}});P(class extends ${reducer;currentState;constructor(s,t,e,i,r){super(s,t),this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(i):i}update(s){return this.reducer=s,[this.currentState,this.dispatch]}dispatch(s){this.currentState=this.reducer(this.currentState,s),this.state.update()}});const ce=/([A-Z])/gu,he=P(class extends ${property;eventName;constructor(s,t,e,i){if(super(s,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=e,this.eventName=e.replace(ce,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(s,t){return[this.state.host[this.property],this.updater]}updater(s){const t=this.state.host[this.property];typeof s=="function"&&(s=s(t)),!Object.is(t,s)&&this.updateProp(s)}updateProp(s){this.notify(s).defaultPrevented||(this.state.host[this.property]=s)}notify(s){const t=new CustomEvent(this.eventName,{detail:{value:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function Nt(s){return R(()=>({current:s}),[])}P(class extends ${update(){return this.state.host}});function de({render:s}){const t=ie(s),e=ae(t);return{component:t,createContext:e}}const C={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},U=s=>(...t)=>({_$litDirective$:s,values:t});let st=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const j=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const i of e)i._$AO?.(t,!1),j(i,t);return!0},X=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Ot=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),fe(t)}};function ue(s){this._$AN!==void 0?(X(this),this._$AM=s,Ot(this)):this._$AM=s}function pe(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let o=e;o<i.length;o++)j(i[o],!1),X(i[o]);else i!=null&&(j(i,!1),X(i));else j(this,s)}const fe=s=>{s.type==C.CHILD&&(s._$AP??=pe,s._$AQ??=ue)};class Mt extends st{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Ot(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(j(this,t),X(this))}setValue(t){if(Lt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:W}=de({render:Wt}),me=P(class extends ${update(){return this.state.host}}),ct=new WeakMap,ut=U(class extends Mt{render(s){return H}update(s,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),H}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=ct.get(t);e===void 0&&(e=new WeakMap,ct.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?ct.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),be=et(I`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),ge=I`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`,_e=I`
	:host {
		display: inline-flex;
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${ge}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`,ve=["variant","size","disabled","full-width","type"],ye=s=>{const t=s.hasAttribute("disabled"),e=s.getAttribute("type")||"button";return v`
		<button type=${e} class="button" ?disabled=${t} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",W(ye,{observedAttributes:ve,styleSheets:[be,_e],shadowRootInit:{mode:"open",delegatesFocus:!0}}));function L(s,t,e){return s?t(s):e?.(s)}const xt=(s,t,e)=>{const i=new Map;for(let r=t;r<=e;r++)i.set(s[r],r);return i},we=U(class extends st{constructor(s){if(super(s),s.type!==C.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const r=[],o=[];let n=0;for(const a of s)r[n]=i?i(a,n):n,o[n]=e(a,n),n++;return{values:o,keys:r}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){const r=Gt(s),{values:o,keys:n}=this.dt(t,e,i);if(!Array.isArray(r))return this.ut=n,o;const a=this.ut??=[],c=[];let l,_,d=0,u=r.length-1,p=0,f=o.length-1;for(;d<=u&&p<=f;)if(r[d]===null)d++;else if(r[u]===null)u--;else if(a[d]===n[p])c[p]=N(r[d],o[p]),d++,p++;else if(a[u]===n[f])c[f]=N(r[u],o[f]),u--,f--;else if(a[d]===n[f])c[f]=N(r[d],o[f]),B(s,c[f+1],r[d]),d++,f--;else if(a[u]===n[p])c[p]=N(r[u],o[p]),B(s,r[d],r[u]),u--,p++;else if(l===void 0&&(l=xt(n,p,f),_=xt(a,d,u)),l.has(a[d]))if(l.has(a[u])){const b=_.get(n[p]),m=b!==void 0?r[b]:null;if(m===null){const g=B(s,r[d]);N(g,o[p]),c[p]=g}else c[p]=N(m,o[p]),B(s,r[d],m),r[b]=null;p++}else at(r[u]),u--;else at(r[d]),d++;for(;p<=f;){const b=B(s,c[f+1]);N(b,o[p]),c[p++]=b}for(;d<=u;){const b=r[d++];b!==null&&at(b)}return this.ut=n,$t(s,c),T}});class it extends Event{constructor(t){super(it.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}it.eventName="rangeChanged";class rt extends Event{constructor(t){super(rt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}rt.eventName="visibilityChanged";class ot extends Event{constructor(){super(ot.eventName,{bubbles:!1})}}ot.eventName="unpinned";class xe{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class ze extends xe{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(i)}scrollBy(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:i}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,i){return this._scrollTo(t,e,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const o=Math.abs(i-t),n=Math.abs(r-e);o<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let zt=typeof window<"u"?window.ResizeObserver:void 0;const Se=Symbol("virtualizerRef"),Q="virtualizer-sizer";let St;class Ce{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new zt(()=>this._hostElementSizeChanged()),this._childrenRO=new zt(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[Se]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Le(this._hostElement,t),this._scrollerController=new ze(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${Q}]`);e||(e=document.createElement("div"),e.setAttribute(Q,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(Q,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||St;if(typeof e=="function"&&this._layout instanceof e){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let e,i;if(typeof t.type=="function"){i=t.type;const r={...t};delete r.type,e=r}else e=t;i===void 0&&(St=i=(await Yt(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new i(r=>this._handleLayoutMessage(r),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<t).reduce((o,n)=>o+n.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:r}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<e.length;r++){const o=e[r],n=this._first+r;(this._itemsChanged||this._toBeMeasured.has(o))&&(t[n]=i.call(this,o,this._items[n]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},Ee(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new ot)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(Q)||t.push(e),e=e.nextElementSibling;return t}_updateView(){const t=this._hostElement,e=this._scrollerController?.element,i=this._layout;if(t&&e&&i){let r,o,n,a;const c=t.getBoundingClientRect();r=0,o=0,n=window.innerHeight,a=window.innerWidth;const l=this._clippingAncestors.map(g=>g.getBoundingClientRect());l.unshift(c);for(const g of l)r=Math.max(r,g.top),o=Math.max(o,g.left),n=Math.min(n,g.bottom),a=Math.min(a,g.right);const _=e.getBoundingClientRect(),d={left:c.left-_.left,top:c.top-_.top},u={width:e.scrollWidth,height:e.scrollHeight},p=r-c.top+t.scrollTop,f=o-c.left+t.scrollLeft,b=Math.max(0,n-r),m=Math.max(0,a-o);i.viewportSize={width:m,height:b},i.viewportScroll={top:p,left:f},i.totalScrollSize=u,i.offsetWithinScroller=d}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,r=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const o=this._hostElement.style;o.minWidth=i?`${i}px`:"100%",o.minHeight=r?`${r}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:i,width:r,height:o,xOffset:n,yOffset:a},c)=>{const l=this._children[c-this._first];l&&(l.style.position="absolute",l.style.boxSizing="border-box",l.style.transform=`translate(${i}px, ${e}px)`,r!==void 0&&(l.style.width=r+"px"),o!==void 0&&(l.style.height=o+"px"),l.style.left=n===void 0?null:n+"px",l.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:r,_lastVisible:o}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:e-r})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(e={})=>this._scrollElementIntoView({...e,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&t?.has(e)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new it({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new rt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const e of t)this._toBeMeasured.set(e.target,e.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Ee(s){const t=window.getComputedStyle(s);return{marginTop:Z(t.marginTop),marginRight:Z(t.marginRight),marginBottom:Z(t.marginBottom),marginLeft:Z(t.marginLeft)}}function Z(s){const t=s?parseFloat(s):NaN;return Number.isNaN(t)?0:t}function Ct(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const t=s.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function ke(s,t=!1){const e=[];let i=t?s:Ct(s);for(;i!==null;)e.push(i),i=Ct(i);return e}function Le(s,t=!1){let e=!1;return ke(s,t).filter(i=>{if(e)return!1;const r=getComputedStyle(i);return e=r.position==="fixed",r.overflow!=="visible"})}const $e=s=>s,Pe=(s,t)=>v`${t}: ${JSON.stringify(s,null,2)}`;class Ae extends Mt{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,i)=>Pe(e,i+this._first),this._keyFunction=(e,i)=>$e(e,i+this._first),this._items=[],t.type!==C.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)e.push(this._items[i]);return we(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const i=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),i?T:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const r=t.parentNode;this._makeVirtualizer(r,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(r,o)=>e(r,o+this._first)),i&&(this._keyFunction=(r,o)=>i(r,o+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:o}=e;this._virtualizer=new Ce({hostElement:t,layout:i,scroller:r}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(i,e))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Te=U(Ae);const Re={},Ne=U(class extends st{constructor(){super(...arguments),this.ot=Re}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,r)=>i===this.ot[r]))return T}else if(this.ot===t)return T;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});const pt=U(class extends st{constructor(s){if(super(s),s.type!==C.PROPERTY&&s.type!==C.ATTRIBUTE&&s.type!==C.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Lt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===T||t===H)return t;const e=s.element,i=s.name;if(s.type===C.PROPERTY){if(t===e[i])return T}else if(s.type===C.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return T}else if(s.type===C.ATTRIBUTE&&e.getAttribute(i)===t+"")return T;return $t(s),t}});const E=s=>s??H,Oe=P(class extends ${values;constructor(s,t,e,i){super(s,t),Object.assign(t.host,e),this.values=i}update(s,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,s))}hasChanged(s=[]){return s.some((t,e)=>this.values[e]!==t)}}),Me=/([A-Z])/gu,tt=(s,t,e)=>{s[t]=e,s.dispatchEvent(new CustomEvent(t.replace(Me,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},It=s=>{const t=Nt(void 0),e=S(l=>t.current=l,[]),i=s.shadowRoot,r=S(l=>s.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),o=S(l=>tt(s,"value",l.target.value),[]),n=S(l=>tt(s,"focused",l.type==="focus"),[]),a=S(()=>t.current?.focus(),[]),c=S(()=>{const l=t.current?.checkValidity();return s.toggleAttribute("invalid",!l),l},[]);return Oe({focus:a,validate:c},[a,c]),k(()=>{const l=_=>{_.defaultPrevented||s.disabled||_.target.matches("input, textarea, label")||(_.preventDefault(),s.matches(":focus-within")||a())};return i.addEventListener("mousedown",l),()=>i.removeEventListener("mousedown",l)},[a]),{onChange:r,onFocus:n,onInput:o,onRef:e}},Ie=s=>R(()=>{if(s==null)return;const t=new RegExp(s,"u");return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[s]),Dt=(s,{label:t,invalid:e,errorMessage:i})=>v`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${L(t,()=>v`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${L(e&&i,()=>v`<div class="error" part="error">${i}</div>`)}
	`,Vt=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],De=({placeholder:s,noLabelFloat:t,label:e})=>(t?e:void 0)||s||" ",Bt=(s,...t)=>s.flatMap((e,i)=>[e,t[i]??""]).join(""),Et=Bt`
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
`,Ft=Bt`
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
		${Et}
	}
	@container style(--focused: focused) {
		${Et}
	}
`,Ve=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Vt],Be=s=>{const{type:t="text",pattern:e,allowedPattern:i,autocomplete:r,value:o,readonly:n,disabled:a,min:c,max:l,step:_,maxlength:d}=s,{onChange:u,onFocus:p,onInput:f,onRef:b}=It(s),m=Ie(i);return Dt(v`
			<input
				${ut(b)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${E(e)}
				autocomplete=${E(r)}
				placeholder=${De(s)}
				?readonly=${n}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${pt(o??"")}
				maxlength=${E(d)}
				@beforeinput=${m}
				@input=${f}
				@change=${u}
				@focus=${p}
				@blur=${p}
				min=${E(c)}
				max=${E(l)}
				step=${E(_)}
			/>
		`,s)};customElements.define("cosmoz-input",W(Be,{observedAttributes:Ve,styleSheets:[et(Ft)]}));const kt=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},Fe=(s,t=0)=>{if(t>0){const e=s.getAttribute("rows")??"",i=s.style.height;s.style.height="",s.setAttribute("rows",t),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=i,s.setAttribute("rows",e)}},je=s=>{const{value:t,maxRows:e}=s,i=R(()=>()=>s.shadowRoot.querySelector("#input"),[]);k(()=>Fe(i(),e),[e,i]),k(()=>kt(i()),[i,t]),k(()=>{const r=i(),o=new ResizeObserver(()=>requestAnimationFrame(()=>kt(r)));return o.observe(r),()=>o.unobserve(r)},[i])},He=["rows","placeholder",...Vt],Ue=s=>{const{autocomplete:t,value:e,placeholder:i,readonly:r,disabled:o,rows:n,cols:a,maxlength:c}=s,{onChange:l,onFocus:_,onInput:d,onRef:u}=It(s);return je(s),Dt(v`
			<textarea id="input" part="input"
				${ut(u)}
				autocomplete=${E(t)}
				placeholder=${i||" "}
				rows=${n??1} cols=${E(a)}
				?readonly=${r} ?aria-disabled=${o} ?disabled=${o}
				.value=${pt(e??"")} maxlength=${E(c)} @input=${d}
				@change=${l} @focus=${_} @blur=${_}>`,s)};customElements.define("cosmoz-textarea",W(Ue,{observedAttributes:He,styleSheets:[et(Ft)]}));const We=s=>{const{label:t,value:e,disabled:i,error:r}=s,o=S(n=>s.dispatchEvent(new CustomEvent("change",{detail:n.target.checked})),[]);return v`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${pt(!!e)}
			?disabled=${i}
			@change=${o}
		/>
		${L(t,()=>v`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${L(r,n=>v`<div class="failure">${n}</div>`)} `},Ge=I`
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
`,Ye=I`
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
`;customElements.define("cosmoz-toggle",W(We,{styleSheets:[Ye,Ge],observedAttributes:["disabled"]}));const qe=s=>{const t=R(()=>({}),[]);return R(()=>Object.assign(t,s),[t,...Object.values(s)])},Qe=I`
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

	.path > .pointer:hover,
	.path > .pointer:has(~ .pointer:hover) {
		text-decoration: underline;
	}
`,ht=(s,t)=>{const e=t.pathLocator||t.path||"",{pathLocatorSeparator:i}=s;return e.includes(i)?e.substring(0,e.lastIndexOf(i)):e},Ze=(s,t)=>{if(!s)return;const e=s.getNodeByPathLocator(t),i=e?s.getChildren(e):[],{searchProperty:r}=s,o=(n,a)=>{if(s.hasChildren(n)){if(!s.hasChildren(a))return-1}else if(s.hasChildren(a))return 1;const c=n[r],l=a[r];return c>l?1:c<l?-1:0};return i.length>0?i.sort(o):e},Je=(s,t,e)=>{if(!s)return[];const i=Ze(s,e);return t?s.searchNodes(t,i,!1):i},Ke=(s,t,e)=>{let i=!1;return e&&(i=t===e||t.id&&t.id===e.id||t.pathLocator===e.pathLocator),i?`${s} selected`:s},Xe=(s,t)=>{if(!t||!s)return[];const e=t.getPathNodes(s);return e?e.filter(i=>i!==void 0):[]},ts=({tree:s,searchMinLength:t=3,opened:e,searchDebounceTimeout:i=2e3})=>{const r=Nt(),o=me(),[n,a]=he("nodePath",""),[c,l]=q(null),[_,d]=q(""),[u,p]=q(""),[f,b]=q(""),m=R(()=>Xe(n,s),[n,s]);k(()=>{const h=setTimeout(()=>{const z=u.trim().length;z>0&&z<t||d(u.trim())},i);return()=>clearTimeout(h)},[u]);const g=R(()=>Je(s,_,f),[s,_,f]),y=S(h=>{b(h?.pathLocator||""),p(""),l(null)},[]),x=S(h=>{h?.pathLocator&&a(h.pathLocator)},[]);k(()=>{f&&tt(o,"highlightedNodePath","")},[f]),k(()=>{if(!m?.length||!s||!e)return;const h=m[m.length-1];if(!h?.pathLocator)return;if(s.hasChildren(h)){b(h.pathLocator);return}const z=ht(s,h);b(z),l(h)},[m,s,e]),k(()=>{tt(o,"highlightedNodePath",c?.pathLocator||"")},[c]);const D=qe({dataPlane:g,highlightedNode:c??null,onNodeClick:y});k(()=>{if(!e)return;const h=()=>{const w=r.current;return w?w[Object.getOwnPropertySymbols(w)[0]]:null},z=h();if(z&&D.highlightedNode){const w=D.dataPlane?.indexOf(D.highlightedNode);w!==void 0&&w>=0&&(z.scrollToIndex={index:w,position:"center"})}const V=w=>{if(w.ctrlKey&&w.altKey||w.defaultPrevented)return;const{dataPlane:G,highlightedNode:M,onNodeClick:Ut}=D,Y=h();if(!Y)return;const nt=G.findIndex(A=>A.pathLocator===M?.pathLocator),ft=(A,mt)=>A>=0&&A<G.length?(l(G[A]),(mt==="start"?A<Y._firstVisible:A>Y._lastVisible)&&(Y.scrollToIndex={index:A,position:mt}),!0):!1;switch(w.key){case"Up":case"ArrowUp":{w.preventDefault(),ft(Math.max(nt-1,0),"start");break}case"Down":case"ArrowDown":{w.preventDefault(),nt<G.length-1&&ft(nt+1,"end");break}case"Enter":w.preventDefault(),M&&x(M);break;case"Right":case"ArrowRight":w.preventDefault(),M&&s.hasChildren(M)&&Ut(M);break}};return document.addEventListener("keydown",V,!0),()=>document.removeEventListener("keydown",V,!0)},[e,D,x]);const jt=()=>{c&&x(c)},Ht=(h,z)=>h?v` <div class="item">
			${L(_,()=>{const V=ht(s,h);return L(z===0||V!==ht(s,g[z-1]),()=>v`
						<div class="section">
							${s.getPathString(V,s.searchProperty)}
						</div>
					`)})}
			<div
				class=${Ke("node",h,c)}
				data-testid="node"
				@click=${()=>l(h)}
				@dblclick=${jt}
			>
				<div class="name" data-testid="node-name">
					${h[s.searchProperty]}
				</div>
				${L(s.hasChildren(h),()=>v`
						<span
							class="icon"
							data-testid="node-arrow"
							@click=${()=>y(h)}
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
		</div>`:H;return v`
		<div class="header">
			<h3 class="path">
				<span
					class="icon"
					data-testid="home-icon"
					@click=${()=>y()}
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
				${Ne([s,f],()=>(f&&s?.getPathNodes(f)||[]).filter(h=>h!==void 0).map(h=>v`
								<span class="slash">/</span>
								<span
									class="pointer"
									tabindex="0"
									@click=${()=>y(h)}
									>${h[s.searchProperty]}</span
								>
							`))}
			</h3>
			<cosmoz-input
				tabindex="0"
				data-testid="search-input"
				.value=${u}
				.placeholder=${bt("Search...")}
				@input=${h=>p(h.target.value)}
			/>
		</div>
		${L(s,()=>v` <div
					class="items"
					${ut(h=>r.current=h)}
				>
					<div virtualizer-sizer></div>
					${Te({items:g,renderItem:Ht,scroller:!0})}
				</div>`)}
		${L(_&&f,()=>v`
				<cosmoz-button
					variant="link"
					full-width
					data-testid="global-search-button"
					@click=${()=>b("")}
				>
					${bt("Click to search again but globally")}
				</cosmoz-button>
			`)}
	`};customElements.define("cosmoz-treenode-navigator",W(ts,{styleSheets:[Qe]}));const ns={1:{name:"C:",pathLocator:"1",children:{2:{name:"Windows",pathLocator:"1.2",children:{3:{name:"System",pathLocator:"1.2.3",children:{}},4:{name:"Microsoft.NET",pathLocator:"1.2.4",children:{}}}},5:{name:"Program Files",pathLocator:"1.5",children:{6:{name:"Microsoft VS Code",pathLocator:"1.5.6"},7:{name:"Git",pathLocator:"1.5.7"}}},100:{name:"Users",pathLocator:"1.100",children:{200:{name:"Default",pathLocator:"1.100.200",children:{201:{name:"Documents",pathLocator:"1.100.200.201"},202:{name:"Music",pathLocator:"1.100.200.202"},203:{name:"Pictures",pathLocator:"1.100.200.203"}}},300:{name:"John",pathLocator:"1.100.300",children:{301:{name:"Documents",pathLocator:"1.100.300.301"},302:{name:"Music",pathLocator:"1.100.300.302"},303:{name:"Pictures",pathLocator:"1.100.300.303"}}},400:{name:"Public",pathLocator:"1.100.400",children:{401:{name:"Public Documents",pathLocator:"1.100.400.401"},402:{name:"Public Music",pathLocator:"1.100.400.402"},403:{name:"Public Pictures",pathLocator:"1.100.400.403"}}}}}}},1e3:{name:"D:",pathLocator:"1000",children:{1001:{name:"Data",pathLocator:"1000.1001",children:{1002:{name:"John",pathLocator:"1000.1001.1002"}}},1002:{name:"Backup",pathLocator:"1000.1002"}}}};export{rs as T,ns as a,W as b,I as c,me as d,Nt as e,he as f,q as g,R as h,Xe as i,S as j,ut as k,L as n,k as u};
