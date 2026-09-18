import{r as Pt,e as Zt,A as H,b as w,M as Kt,u as P,v as F,h as dt,E as R,p as Ot,t as Z}from"./iframe-B8nujFHe.js";import{_ as Xt}from"./preload-helper-PPVm8Dsz.js";let tt,Mt=0;function wt(s){tt=s}function xt(){tt=null,Mt=0}function Jt(){return Mt++}const ut=Symbol("haunted.phase"),J=Symbol("haunted.hook"),zt=Symbol("haunted.update"),Et=Symbol("haunted.commit"),M=Symbol("haunted.effects"),D=Symbol("haunted.layoutEffects"),mt="haunted.context";class te{update;host;virtual;[J];[M];[D];constructor(t,e){this.update=t,this.host=e,this[J]=new Map,this[M]=[],this[D]=[]}run(t){wt(this);let e=t();return xt(),e}_runEffects(t){let e=this[t];wt(this);for(let i of e)i.call(this);xt()}runEffects(){this._runEffects(M)}runLayoutEffects(){this._runEffects(D)}teardown(){this[J].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}const ee=Promise.resolve().then.bind(Promise.resolve());function It(){let s=[],t;function e(){t=null;let i=s;s=[];for(var o=0,r=i.length;o<r;o++)i[o]()}return function(i){s.push(i),t==null&&(t=ee(e))}}const se=It(),Ct=It();class ie{renderer;host;state;[ut];_updateQueued;_active;constructor(t,e){this.renderer=t,this.host=e,this.state=new te(this.update.bind(this),e),this[ut]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(se(()=>{let t=this.handlePhase(zt);Ct(()=>{this.handlePhase(Et,t),Ct(()=>{this.handlePhase(M)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,e){switch(this[ut]=t,t){case Et:this.commit(e),this.runEffects(D);return;case zt:return this.render();case M:return this.runEffects(M)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const it=(...s)=>{const t=new CSSStyleSheet;return t.replaceSync(s.join("")),t},oe=s=>s?.map(t=>typeof t=="string"?it(t):t),re=(s,...t)=>s.flatMap((e,i)=>[e,t[i]||""]).join(""),N=re,ne=(s="")=>s.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");function le(s){class t extends ie{frag;renderResult;constructor(o,r,n){super(o,n||r),this.frag=r}commit(o){this.renderResult=s(o,this.frag)}}function e(i,o,r){const n=(r||o||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:h={},styleSheets:v}=r||o||{},d=oe(i.styleSheets||v);class b extends n{_scheduler;static get observedAttributes(){return i.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(i,this);else{const m=this.attachShadow({mode:"open",...h});d&&(m.adoptedStyleSheets=d),this._scheduler=new t(i,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,c,_){if(c===_)return;let x=_===""?!0:_;Reflect.set(this,ne(m),x)}}function p(u){let m=u,c=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(_){c&&m===_||(c=!0,m=_,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(n.prototype,{getPrototypeOf(u){return u},set(u,m,c,_){let x;return m in u?(x=Object.getOwnPropertyDescriptor(u,m),x&&x.set?(x.set.call(_,c),!0):(Reflect.set(u,m,c,_),!0)):(typeof m=="symbol"||m[0]==="_"?x={enumerable:!0,configurable:!0,writable:!0,value:c}:x=p(c),Object.defineProperty(_,m,x),x.set&&x.set.call(_,c),!0)}});return Object.setPrototypeOf(b.prototype,g),b}return e}class k{id;state;constructor(t,e){this.id=t,this.state=e}}function ae(s,...t){let e=Jt(),i=tt[J],o=i.get(e);return o||(o=new s(e,tt,...t),i.set(e,o)),o.update(...t)}function $(s){return ae.bind(null,s)}function Nt(s){return $(class extends k{callback;lastValues;values;_teardown;constructor(t,e,i,o){super(t,e),s(e,this)}update(t,e){this.callback=t,this.values=e}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,e)=>this.lastValues[e]!==t)}})}function Vt(s,t){s[M].push(t)}const E=Nt(Vt),ce=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,he=$(class extends k{Context;value;_ranEffect;_unsubscribe;constructor(s,t,e){super(s,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Vt(t,this)}update(s){return this.Context!==s&&(this._subscribe(s),this.Context=s),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(s){this.value=s,this.state.update()}_subscribe(s){const t={Context:s,callback:this._updater};ce(this.state.host).dispatchEvent(new CustomEvent(mt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:o}=t;this.value=i?o:s.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function de(s){return t=>{const e={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(mt,this)}disconnectedCallback(){this.removeEventListener(mt,this)}handleEvent(i){const{detail:o}=i;o.Context===e&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let o of this.listeners)o(i)}get value(){return this._value}},Consumer:s(function({render:i}){const o=he(e);return i(o)},{useShadowDOM:!1}),defaultValue:t};return e}}const I=$(class extends k{value;values;constructor(s,t,e,i){super(s,t),this.value=e(),this.values=i}update(s,t){return this.hasChanged(t)&&(this.values=t,this.value=s()),this.value}hasChanged(s=[]){return s.some((t,e)=>this.values[e]!==t)}}),T=(s,t)=>I(()=>s,t);function ue(s,t){s[D].push(t)}Nt(ue);const O=$(class extends k{args;constructor(s,t,e){super(s,t),this.updater=this.updater.bind(this),typeof e=="function"&&(e=e()),this.makeArgs(e)}update(){return this.args}updater(s){const[t]=this.args;typeof s=="function"&&(s=s(t)),!Object.is(t,s)&&(this.makeArgs(s),this.state.update())}makeArgs(s){this.args=Object.freeze([s,this.updater])}});$(class extends k{reducer;currentState;constructor(s,t,e,i,o){super(s,t),this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(i):i}update(s){return this.reducer=s,[this.currentState,this.dispatch]}dispatch(s){this.currentState=this.reducer(this.currentState,s),this.state.update()}});const pe=/([A-Z])/gu,fe=$(class extends k{property;eventName;constructor(s,t,e,i){if(super(s,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=e,this.eventName=e.replace(pe,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(s,t){return[this.state.host[this.property],this.updater]}updater(s){const t=this.state.host[this.property];typeof s=="function"&&(s=s(t)),!Object.is(t,s)&&this.updateProp(s)}updateProp(s){this.notify(s).defaultPrevented||(this.state.host[this.property]=s)}notify(s){const t=new CustomEvent(this.eventName,{detail:{value:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}}),cs=s=>t=>{t.preventDefault(),s(t.detail.value)};function bt(s){return I(()=>({current:s}),[])}$(class extends k{update(){return this.state.host}});function me({render:s}){const t=le(s),e=de(t);return{component:t,createContext:e}}const C={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},U=s=>(...t)=>({_$litDirective$:s,values:t});let ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const j=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const i of e)i._$AO?.(t,!1),j(i,t);return!0},et=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Bt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),ve(t)}};function be(s){this._$AN!==void 0?(et(this),this._$AM=s,Bt(this)):this._$AM=s}function ge(s,t=!1,e=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=e;r<i.length;r++)j(i[r],!1),et(i[r]);else i!=null&&(j(i,!1),et(i));else j(this,s)}const ve=s=>{s.type==C.CHILD&&(s._$AP??=ge,s._$AQ??=be)};class Ft extends ot{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Bt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(j(this,t),et(this))}setValue(t){if(Pt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:W}=me({render:Zt}),pt=new WeakMap,gt=U(class extends Ft{render(s){return H}update(s,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),H}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=pt.get(t);e===void 0&&(e=new WeakMap,pt.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?pt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),_e=it(N`
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
`),ye=N`
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
`,we=N`
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
		${ye}
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
`,xe=["variant","size","disabled","full-width","type"],ze=s=>{const t=s.hasAttribute("disabled"),e=s.getAttribute("type")||"button";return w`
		<button type=${e} class="button" ?disabled=${t} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",W(ze,{observedAttributes:xe,styleSheets:[_e,we],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const S=s=>s??H;function z(s,t,e){return s?t(s):e?.(s)}const St=(s,t,e)=>{const i=new Map;for(let o=t;o<=e;o++)i.set(s[o],o);return i},Ee=U(class extends ot{constructor(s){if(super(s),s.type!==C.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const o=[],r=[];let n=0;for(const a of s)o[n]=i?i(a,n):n,r[n]=e(a,n),n++;return{values:r,keys:o}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){const o=Kt(s),{values:r,keys:n}=this.dt(t,e,i);if(!Array.isArray(o))return this.ut=n,r;const a=this.ut??=[],l=[];let h,v,d=0,b=o.length-1,p=0,g=r.length-1;for(;d<=b&&p<=g;)if(o[d]===null)d++;else if(o[b]===null)b--;else if(a[d]===n[p])l[p]=P(o[d],r[p]),d++,p++;else if(a[b]===n[g])l[g]=P(o[b],r[g]),b--,g--;else if(a[d]===n[g])l[g]=P(o[d],r[g]),F(s,l[g+1],o[d]),d++,g--;else if(a[b]===n[p])l[p]=P(o[b],r[p]),F(s,o[d],o[b]),b--,p++;else if(h===void 0&&(h=St(n,p,g),v=St(a,d,b)),h.has(a[d]))if(h.has(a[b])){const u=v.get(n[p]),m=u!==void 0?o[u]:null;if(m===null){const c=F(s,o[d]);P(c,r[p]),l[p]=c}else l[p]=P(m,r[p]),F(s,o[d],m),o[u]=null;p++}else dt(o[b]),b--;else dt(o[d]),d++;for(;p<=g;){const u=F(s,l[g+1]);P(u,r[p]),l[p++]=u}for(;d<=b;){const u=o[d++];u!==null&&dt(u)}return this.ut=n,Ot(s,l),R}});class rt extends Event{constructor(t){super(rt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}rt.eventName="rangeChanged";class nt extends Event{constructor(t){super(nt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}nt.eventName="visibilityChanged";class lt extends Event{constructor(){super(lt.eventName,{bubbles:!1})}}lt.eventName="unpinned";class Ce{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Se extends Ce{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(i)}scrollBy(t,e){const i=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:i}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,i){return this._scrollTo(t,e,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:i,left:o}=this._destination;i=Math.min(i||0,this.maxScrollTop),o=Math.min(o||0,this.maxScrollLeft);const r=Math.abs(i-t),n=Math.abs(o-e);r<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let kt=typeof window<"u"?window.ResizeObserver:void 0;const ke=Symbol("virtualizerRef"),K="virtualizer-sizer";let $t;class $e{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new kt(()=>this._hostElementSizeChanged()),this._childrenRO=new kt(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[ke]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Te(this._hostElement,t),this._scrollerController=new Se(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${K}]`);e||(e=document.createElement("div"),e.setAttribute(K,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(K,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||$t;if(typeof e=="function"&&this._layout instanceof e){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let e,i;if(typeof t.type=="function"){i=t.type;const o={...t};delete o.type,e=o}else e=t;i===void 0&&($t=i=(await Xt(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new i(o=>this._handleLayoutMessage(o),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,o=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,n)=>r+n.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:o}}return null}_measureChildren(){const t={},e=this._children,i=this._measureChildOverride||this._measureChild;for(let o=0;o<e.length;o++){const r=e[o],n=this._first+o;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[n]=i.call(this,r,this._items[n]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:i}=t.getBoundingClientRect();return Object.assign({width:e,height:i},Ae(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new lt)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(K)||t.push(e),e=e.nextElementSibling;return t}_updateView(){const t=this._hostElement,e=this._scrollerController?.element,i=this._layout;if(t&&e&&i){let o,r,n,a;const l=t.getBoundingClientRect();o=0,r=0,n=window.innerHeight,a=window.innerWidth;const h=this._clippingAncestors.map(c=>c.getBoundingClientRect());h.unshift(l);for(const c of h)o=Math.max(o,c.top),r=Math.max(r,c.left),n=Math.min(n,c.bottom),a=Math.min(a,c.right);const v=e.getBoundingClientRect(),d={left:l.left-v.left,top:l.top-v.top},b={width:e.scrollWidth,height:e.scrollHeight},p=o-l.top+t.scrollTop,g=r-l.left+t.scrollLeft,u=Math.max(0,n-o),m=Math.max(0,a-r);i.viewportSize={width:m,height:u},i.viewportScroll={top:p,left:g},i.totalScrollSize=b,i.offsetWithinScroller=d}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,o=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${o}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=o?`${o}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:i,width:o,height:r,xOffset:n,yOffset:a},l)=>{const h=this._children[l-this._first];h&&(h.style.position="absolute",h.style.boxSizing="border-box",h.style.transform=`translate(${i}px, ${e}px)`,o!==void 0&&(h.style.width=o+"px"),r!==void 0&&(h.style.height=r+"px"),h.style.left=n===void 0?null:n+"px",h.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:e,_last:i,_firstVisible:o,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:i,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:e-o})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(e={})=>this._scrollElementIntoView({...e,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&t?.has(e)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new rt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new nt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const e of t)this._toBeMeasured.set(e.target,e.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Ae(s){const t=window.getComputedStyle(s);return{marginTop:X(t.marginTop),marginRight:X(t.marginRight),marginBottom:X(t.marginBottom),marginLeft:X(t.marginLeft)}}function X(s){const t=s?parseFloat(s):NaN;return Number.isNaN(t)?0:t}function At(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const t=s.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Le(s,t=!1){const e=[];let i=t?s:At(s);for(;i!==null;)e.push(i),i=At(i);return e}function Te(s,t=!1){let e=!1;return Le(s,t).filter(i=>{if(e)return!1;const o=getComputedStyle(i);return e=o.position==="fixed",o.overflow!=="visible"})}const Re=s=>s,Pe=(s,t)=>w`${t}: ${JSON.stringify(s,null,2)}`;class Oe extends Ft{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,i)=>Pe(e,i+this._first),this._keyFunction=(e,i)=>Re(e,i+this._first),this._items=[],t.type!==C.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)e.push(this._items[i]);return Ee(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const i=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),i?R:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const o=t.parentNode;this._makeVirtualizer(o,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:i}=t;e&&(this._renderItem=(o,r)=>e(o,r+this._first)),i&&(this._keyFunction=(o,r)=>i(o,r+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:o,items:r}=e;this._virtualizer=new $e({hostElement:t,layout:i,scroller:o}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,e){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",o=>{this._first=o.first,this._last=o.last,this.setValue(this.render())}),this._makeVirtualizer(i,e))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Me=U(Oe);const Ie={},Ne=U(class extends ot{constructor(){super(...arguments),this.ot=Ie}render(s,t){return t()}update(s,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,o)=>i===this.ot[o]))return R}else if(this.ot===t)return R;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});const vt=U(class extends ot{constructor(s){if(super(s),s.type!==C.PROPERTY&&s.type!==C.ATTRIBUTE&&s.type!==C.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Pt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===R||t===H)return t;const e=s.element,i=s.name;if(s.type===C.PROPERTY){if(t===e[i])return R}else if(s.type===C.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return R}else if(s.type===C.ATTRIBUTE&&e.getAttribute(i)===t+"")return R;return Ot(s),t}}),Dt=(s,{label:t,invalid:e,errorMessage:i})=>w`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${z(t,()=>w`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${z(e&&i,()=>w`<div class="error" part="error">${i}</div>`)}
	`,jt=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ht=(s,...t)=>s.flatMap((e,i)=>[e,t[i]??""]).join(""),Lt=Ht`
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
`,Ut=Ht`
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
		${Lt}
	}
	@container style(--focused: focused) {
		${Lt}
	}
`,Ve=s=>I(()=>{if(s==null)return;const t=new RegExp(s,"u");return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[s]),Be=$(class extends k{values;constructor(s,t,e,i){super(s,t),Object.assign(t.host,e),this.values=i}update(s,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,s))}hasChanged(s=[]){return s.some((t,e)=>this.values[e]!==t)}}),Fe=$(class extends k{update(){return this.state.host}}),De=/([A-Z])/gu,st=(s,t,e)=>{s[t]=e,s.dispatchEvent(new CustomEvent(t.replace(De,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},Wt=s=>{const t=bt(void 0),e=T(l=>t.current=l,[]),i=s.shadowRoot,o=T(l=>s.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=T(l=>st(s,"value",l.target.value),[]),n=T(l=>st(s,"focused",l.type==="focus"),[]),a=T(()=>{const l=t.current?.checkValidity();return s.toggleAttribute("invalid",!l),l},[]);return Be({validate:a},[a]),E(()=>{const l=()=>{s.matches(":focus-within")||s.focus()};return i.addEventListener("mousedown",l),()=>i.removeEventListener("mousedown",l)},[]),{onChange:o,onFocus:n,onInput:r,onRef:e}},je=({placeholder:s,noLabelFloat:t,label:e})=>(t?e:void 0)||s||" ",He=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...jt],Ue=s=>{const{type:t="text",pattern:e,allowedPattern:i,autocomplete:o,value:r,readonly:n,disabled:a,min:l,max:h,step:v,maxlength:d}=s,{onChange:b,onFocus:p,onInput:g,onRef:u}=Wt(s),m=Ve(i);return Dt(w`
			<input
				${gt(u)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${S(e)}
				autocomplete=${S(o)}
				placeholder=${je(s)}
				?readonly=${n}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${vt(r??"")}
				maxlength=${S(d)}
				@beforeinput=${m}
				@input=${g}
				@change=${b}
				@focus=${p}
				@blur=${p}
				min=${S(l)}
				max=${S(h)}
				step=${S(v)}
			/>
		`,s)};customElements.define("cosmoz-input",W(Ue,{observedAttributes:He,styleSheets:[it(Ut)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Tt=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},We=(s,t=0)=>{if(t>0){const e=s.getAttribute("rows")??"",i=s.style.height;s.style.height="",s.setAttribute("rows",t),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=i,s.setAttribute("rows",e)}},Ye=s=>{const{value:t,maxRows:e}=s,i=I(()=>()=>s.shadowRoot.querySelector("#input"),[]);E(()=>We(i(),e),[e,i]),E(()=>Tt(i()),[i,t]),E(()=>{const o=i(),r=new ResizeObserver(()=>requestAnimationFrame(()=>Tt(o)));return r.observe(o),()=>r.unobserve(o)},[i])},Ge=["rows","placeholder",...jt],qe=s=>{const{autocomplete:t,value:e,placeholder:i,readonly:o,disabled:r,rows:n,cols:a,maxlength:l}=s,{onChange:h,onFocus:v,onInput:d,onRef:b}=Wt(s);return Ye(s),Dt(w`
			<textarea id="input" part="input"
				${gt(b)}
				autocomplete=${S(t)}
				placeholder=${i||" "}
				rows=${n??1} cols=${S(a)}
				?readonly=${o} ?aria-disabled=${r} ?disabled=${r}
				.value=${vt(e??"")} maxlength=${S(l)} @input=${d}
				@change=${h} @focus=${v} @blur=${v}>`,s)};customElements.define("cosmoz-textarea",W(qe,{observedAttributes:Ge,styleSheets:[it(Ut)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Qe=s=>{const{label:t,value:e,disabled:i,error:o}=s,r=T(n=>s.dispatchEvent(new CustomEvent("change",{detail:n.target.checked})),[]);return w`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${vt(!!e)}
			?disabled=${i}
			@change=${r}
		/>
		${z(t,()=>w`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${z(o,n=>w`<div class="failure">${n}</div>`)} `},Ze=N`
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
`,Ke=N`
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
`;customElements.define("cosmoz-toggle",W(Qe,{styleSheets:[Ke,Ze],observedAttributes:["disabled"]}));const Xe=s=>{const t=I(()=>({}),[]);return I(()=>Object.assign(t,s),[t,...Object.values(s)])},Je=N`
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
		cursor: pointer;
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

	.global-search {
		margin-block: calc(var(--cz-spacing) * 4);
	}

	.status {
		padding: 6px 16px;
		color: var(--cosmoz-treenode-navigator-status-color, #757575);
		font-size: 13px;
	}
`,ft=(s,t)=>{const[e,i]=O([]),[o,r]=O(!0),[n,a]=O(),l=bt(0);return E(()=>{const h=++l.current;r(!0),a(void 0),Promise.resolve().then(s).then(v=>{h===l.current&&(i(v??[]),r(!1))},v=>{h===l.current&&(i([]),a(v),r(!1))})},t),{nodes:e,loading:o,error:n}},ts=(s,t)=>{const e=t.pathLocator||t.path||"",{pathLocatorSeparator:i}=s;return e.includes(i)?e.substring(0,e.lastIndexOf(i)):e},es=(s,t)=>{if(!s)return;const e=s.getNodeByPathLocator(t),i=e?s.getChildren(e):[],{searchProperty:o}=s,r=(n,a)=>{if(s.hasChildren(n)){if(!s.hasChildren(a))return-1}else if(s.hasChildren(a))return 1;const l=n[o],h=a[o];return l>h?1:l<h?-1:0};return i.length>0?i.sort(r):e},Rt=(s,t,e)=>{if(!s)return[];const i=es(s,e);return t?s.searchNodes(t,i,!1):i},ss=(s,t,e)=>{let i=!1;return e&&(i=t===e||t.id&&t.id===e.id||t.pathLocator===e.pathLocator),i?`${s} selected`:s},is=(s,t)=>{if(!t||!s)return[];const e=t.getPathNodes(s);return e?e.filter(i=>i!==void 0):[]},os=s=>({getLevel:t=>Rt(s,"",t),getPath:t=>is(t,s),search:(t,e)=>Rt(s,t,e),hasChildren:t=>s?.hasChildren(t),label:t=>(s?t[s.searchProperty]:"")??"",pathLabel:t=>s?.getPathString(t,s.searchProperty),parentOf:t=>s?ts(s,t):"",scopedSearch:!0}),rs=({tree:s,source:t,searchMinLength:e=3,opened:i,searchDebounceTimeout:o=500})=>{const r=bt(),n=Fe(),[a,l]=fe("nodePath",""),[h,v]=O(null),[d,b]=O(""),[p,g]=O(""),[u,m]=O(""),c=I(()=>t??os(s),[t,s]),{nodes:_}=ft(()=>a?c.getPath(a):[],[c,a]),{nodes:x}=ft(()=>u?c.getPath(u):[],[c,u]);E(()=>{const f=setTimeout(()=>{const A=p.trim().length;A>0&&A<e||b(p.trim())},o);return()=>clearTimeout(f)},[p]);const{nodes:Y,loading:Yt,error:Gt}=ft(()=>d?c.search(d,u):c.getLevel(u),[c,d,u]),G=T(f=>{m(f?.pathLocator||""),g(""),v(null)},[]),at=T(f=>{f?.pathLocator&&l(f.pathLocator)},[]);E(()=>{u&&st(n,"highlightedNodePath","")},[u]),E(()=>{if(!_?.length||!i)return;const f=_[_.length-1];if(f?.pathLocator){if(c.hasChildren(f)!==!1){m(f.pathLocator);return}m(_[_.length-2]?.pathLocator??""),v(f)}},[_,c,i]),E(()=>{st(n,"highlightedNodePath",h?.pathLocator||"")},[h]);const V=Xe({dataPlane:Y,highlightedNode:h??null,onNodeClick:G});E(()=>{if(!i)return;const f=()=>{const y=r.current;return y?y[Object.getOwnPropertySymbols(y)[0]]:null},A=f();if(A&&V.highlightedNode){const y=V.dataPlane?.indexOf(V.highlightedNode);y!==void 0&&y>=0&&(A.scrollToIndex={index:y,position:"center"})}const B=y=>{if(y.ctrlKey&&y.altKey||y.defaultPrevented)return;const{dataPlane:q,highlightedNode:ct}=V,Q=f();if(!Q)return;const ht=q.findIndex(L=>L.pathLocator===ct?.pathLocator),_t=(L,yt)=>L>=0&&L<q.length?(v(q[L]),(yt==="start"?L<Q._firstVisible:L>Q._lastVisible)&&(Q.scrollToIndex={index:L,position:yt}),!0):!1;switch(y.key){case"Up":case"ArrowUp":{y.preventDefault(),_t(Math.max(ht-1,0),"start");break}case"Down":case"ArrowDown":{y.preventDefault(),ht<q.length-1&&_t(ht+1,"end");break}case"Enter":y.preventDefault(),ct&&at(ct);break}};return document.addEventListener("keydown",B,!0),()=>document.removeEventListener("keydown",B,!0)},[i,V,at]);const qt=()=>{h&&at(h)},Qt=(f,A)=>f?w` <div class="item">
			${z(d,()=>{const B=c.parentOf(f),y=A===0||B!==c.parentOf(Y[A-1])?c.pathLabel(B):void 0;return z(y,()=>w`<div class="section">${y}</div>`)})}
			<div
				class=${ss("node",f,h)}
				data-testid="node"
				@click=${()=>v(f)}
				@dblclick=${qt}
			>
				<div class="name" data-testid="node-name">
					${c.label(f)}
				</div>
				${z(c.hasChildren(f)!==!1,()=>w`
						<span
							class="icon"
							data-testid="node-arrow"
							@click=${()=>G(f)}
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
		</div>`:H;return w`
		<div class="header">
			<h3 class="path">
				<span
					class="icon"
					data-testid="home-icon"
					@click=${()=>G()}
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
				${Ne([x],()=>x.filter(f=>f!==void 0).map(f=>w`
								<span class="slash">/</span>
								<span
									class="pointer"
									tabindex="0"
									@click=${()=>G(f)}
									>${c.label(f)}</span
								>
							`))}
			</h3>
			<cosmoz-input
				autofocus
				tabindex="0"
				data-testid="search-input"
				.value=${p}
				.placeholder=${Z("Search...")}
				@input=${f=>g(f.target.value)}
			/>
		</div>
		<div class="items" ${gt(f=>r.current=f)}>
			<div virtualizer-sizer></div>
			${Me({items:Y,renderItem:Qt,scroller:!0})}
		</div>
		${z(Gt,()=>w`<div class="status" data-testid="error">
					${Z("Could not load nodes.")}
				</div>`,()=>z(Yt&&Y.length===0,()=>w`<div class="status" data-testid="loading">
							${Z("Loading...")}
						</div>`))}
		${z(d&&u&&c.scopedSearch,()=>w`
				<cosmoz-button
					class="global-search"
					variant="link"
					full-width
					data-testid="global-search-button"
					@click=${()=>m("")}
				>
					${Z("Click to search again but globally")}
				</cosmoz-button>
			`)}
	`};customElements.define("cosmoz-treenode-navigator",W(rs,{styleSheets:[Je]}));export{W as a,_e as b,N as c,E as d,T as e,gt as f,fe as g,O as h,I as i,ft as j,cs as l,z as n,S as o,it as s,os as t,bt as u};
