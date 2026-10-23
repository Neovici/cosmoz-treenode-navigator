import{w as ie,b as f,f as le,E as I,A as N,p as ce,t as y}from"./iframe-Dpy9cU7f.js";import{o as w,n as $,j as de,k as pe,t as S,i as O,m as he,H as ue,b as F,e as C,p as fe,d as b,c as R,s as X,f as H,a as _,u as g,h as ge}from"./tree-view-DN94vMNT.js";const ve=({slot:e,title:t,className:o,width:r="24",height:a="24",styles:s}={})=>f`
  <svg
    slot=${w(e)}
    class=${`search-md-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${a}
    style=${w(s)}
  >
    ${$(t,()=>ie`<title>${t}</title>`)}
    <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </svg>
`;const q=de(class extends pe{constructor(e){if(super(e),e.type!==S.PROPERTY&&e.type!==S.ATTRIBUTE&&e.type!==S.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!le(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===I||t===N)return t;const o=e.element,r=e.name;if(e.type===S.PROPERTY){if(t===o[r])return I}else if(e.type===S.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return I}else if(e.type===S.ATTRIBUTE&&o.getAttribute(r)===t+"")return I;return ce(e),t}}),G=(e,{label:t,invalid:o,errorMessage:r})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${$(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${$(o&&r,()=>f`<div class="error" part="error">${r}</div>`)}
	`,J=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],K=(e,...t)=>e.flatMap((o,r)=>[o,t[r]??""]).join(""),V=K`
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
`,W=K`
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
		${V}
	}
	@container style(--focused: focused) {
		${V}
	}
`,me=e=>O(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),be=he(class extends ue{update(){return this.state.host}}),ye=/([A-Z])/gu,Y=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(ye,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},ee=e=>{const t=F(void 0),o=C(i=>t.current=i,[]),r=e.shadowRoot,a=C(i=>e.dispatchEvent(new Event(i.type,{bubbles:i.bubbles})),[]),s=C(i=>Y(e,"value",i.target.value),[]),c=C(i=>Y(e,"focused",i.type==="focus"),[]),p=C(()=>{const i=t.current?.checkValidity();return e.toggleAttribute("invalid",!i),i},[]);return fe({validate:p},[p]),b(()=>{const i=()=>{e.matches(":focus-within")||e.focus()};return r.addEventListener("mousedown",i),()=>r.removeEventListener("mousedown",i)},[]),{onChange:a,onFocus:c,onInput:s,onRef:o}},we=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",xe=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...J],ze=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:a,value:s,readonly:c,disabled:p,min:i,max:n,step:d,maxlength:u}=e,{onChange:h,onFocus:v,onInput:A,onRef:m}=ee(e),x=me(r);return G(f`
			<input
				${H(m)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${w(o)}
				autocomplete=${w(a)}
				placeholder=${we(e)}
				?readonly=${c}
				?aria-disabled=${p}
				?disabled=${p}
				.value=${q(s??"")}
				maxlength=${w(u)}
				@beforeinput=${x}
				@input=${A}
				@change=${h}
				@focus=${v}
				@blur=${v}
				min=${w(i)}
				max=${w(n)}
				step=${w(d)}
			/>
		`,e)};customElements.define("cosmoz-input",R(ze,{observedAttributes:xe,styleSheets:[X(W)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Z=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},$e=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},ke=e=>{const{value:t,maxRows:o}=e,r=O(()=>()=>e.shadowRoot.querySelector("#input"),[]);b(()=>$e(r(),o),[o,r]),b(()=>Z(r()),[r,t]),b(()=>{const a=r(),s=new ResizeObserver(()=>requestAnimationFrame(()=>Z(a)));return s.observe(a),()=>s.unobserve(a)},[r])},Pe=["rows","placeholder",...J],Le=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:a,disabled:s,rows:c,cols:p,maxlength:i}=e,{onChange:n,onFocus:d,onInput:u,onRef:h}=ee(e);return ke(e),G(f`
			<textarea id="input" part="input"
				${H(h)}
				autocomplete=${w(t)}
				placeholder=${r||" "}
				rows=${c??1} cols=${w(p)}
				?readonly=${a} ?aria-disabled=${s} ?disabled=${s}
				.value=${q(o??"")} maxlength=${w(i)} @input=${u}
				@change=${n} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",R(Le,{observedAttributes:Pe,styleSheets:[X(W)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ee=e=>{const{label:t,value:o,disabled:r,error:a}=e,s=C(c=>e.dispatchEvent(new CustomEvent("change",{detail:c.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${q(!!o)}
			?disabled=${r}
			@change=${s}
		/>
		${$(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${$(a,c=>f`<div class="failure">${c}</div>`)} `},Ce=_`
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
`,Ae=_`
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
`;customElements.define("cosmoz-toggle",R(Ee,{styleSheets:[Ae,Ce],observedAttributes:["disabled"]}));const Se=_`
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		--cosmoz-spinner-width: 20px;
		--cosmoz-spinner-height: 20px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: var(--cosmoz-spinner-width, 22px);
		height: var(--cosmoz-spinner-height, 22px);
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
		flex: none !important;
	}
`,Te=()=>N,Re=R(Te,{styleSheets:[Se]});customElements.define("cosmoz-spinner",Re);const Ie=_`
	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 3);
		min-width: 0;
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 2);
		margin: 0 calc(var(--cz-spacing) * 5);
	}

	/* The placeholder says the same; the label stays for assistive tech. */
	cosmoz-input::part(label) {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	cosmoz-input svg {
		color: var(--cz-color-fg-quaternary);
	}

	/* One line, reserved while the path loads, so the list below never shifts. */
	.crumbs {
		height: 1lh;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	/* The padding keeps the focus ring clear of the clipping. */
	.path {
		display: flex;
		align-items: center;
		gap: 2px;
		overflow: hidden;
		padding: 3px;
		margin: -3px;
		color: var(--cz-color-text-tertiary);
	}

	.hint {
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: var(--cz-color-text-tertiary);
	}

	.slash {
		flex: none;
		color: var(--cz-color-text-quaternary);
	}

	.crumb {
		all: unset;
		cursor: pointer;
		padding: 0 4px;
		border-radius: var(--cz-radius-xs);
		font-weight: var(--cz-font-weight-medium);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.crumb:hover {
		color: var(--cz-color-text-secondary-hover);
		background: var(--cz-color-bg-primary-hover);
	}

	.crumb:focus-visible {
		box-shadow: var(--cz-focus-ring);
	}

	/* Ancestors give way first. */
	.crumb[aria-current] {
		flex-shrink: 0;
		max-width: 60%;
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-semibold);
	}

	.list {
		position: relative;
		margin: 0 8px;
	}

	.items {
		height: var(--cosmoz-treenode-navigator-list-height, min(44dvh, 24rem));
	}

	/* Overlays the fixed-height list, so loading never resizes the dialog. */
	.status {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: calc(var(--cz-spacing) * 2);
		padding: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-tertiary);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		text-align: center;
		pointer-events: none;
	}
	.status[data-over] {
		top: auto;
		padding-block: calc(var(--cz-spacing) * 2);
		background: var(--cz-color-bg-primary);
	}
	.status:empty {
		display: none;
	}
	.retry {
		pointer-events: auto;
		border: 0;
		padding: 0;
		background: none;
		font: inherit;
		color: var(--cz-color-text-brand-primary);
		cursor: pointer;
		text-decoration: underline;
	}
	.retry:focus-visible {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	@media (max-width: 480px) {
		.header {
			margin-inline: calc(var(--cz-spacing) * 4);
		}
	}
`,Ne=(e,t)=>{const[o,r]=g([]),[a,s]=g(!0),[c,p]=g(),i=F(0);return b(()=>{const n=(i.current??0)+1;i.current=n,s(!0),p(void 0),Promise.resolve().then(e).then(d=>{n===i.current&&(r(d??[]),s(!1))},d=>{n===i.current&&(r([]),p(d),s(!1))})},t),{nodes:o,loading:a,error:c}},D=(e,t)=>{const o=new Map(t.map(a=>[a.pathLocator,a])),r=new Map;for(const a of o.values()){const s=e.parentOf(a);if(s===a.pathLocator)continue;const c=r.get(s)??[];c.push(a),r.set(s,c)}return{roots:[...o.values()].filter(a=>e.parentOf(a)===a.pathLocator||!o.has(e.parentOf(a))),getChildren:a=>r.get(a.pathLocator)??[],expanded:[...r.keys()].filter(a=>o.has(a))}},Oe=e=>{const t=new Map;let o=D(e,[]);const r=new Map,a=new Map,s=new Set,c=new Set,p=()=>c.forEach(n=>n()),i=n=>{for(const d of n)t.set(d.pathLocator,d);o=D(e,[...t.values()])};return{subscribe:n=>(c.add(n),()=>{c.delete(n)}),roots:()=>{const n=r.get("")??[],d=new Set(n.map(u=>u.pathLocator));return[...n,...o.roots.filter(u=>!d.has(u.pathLocator))]},getChildren:n=>r.get(n.pathLocator)??o.getChildren(n),hasChildren:n=>r.has(n.pathLocator)?r.get(n.pathLocator).length>0:e.hasChildren(n)!==!1,pending:a,errors:s,loadPath:async n=>{const d=await e.getPath(n);return i(d),p(),d},loadLevel:n=>{if(r.has(n))return Promise.resolve();const d=a.get(n);if(d)return d;s.delete(n);const u=Promise.resolve().then(()=>e.getLevel(n)).then(h=>{r.set(n,h),i(h)},()=>{s.add(n)}).finally(()=>{a.delete(n),p()});return a.set(n,u),p(),u}}},_e=async(e,t)=>{const o=await e.search(t,""),r=await Promise.all(o.map(async a=>{try{return[...await e.getPath(a.pathLocator),a]}catch{return[a]}}));return{...D(e,r.flat()),matches:o.length}},Me=(e,t,o)=>{const[,r]=g(0),a=O(()=>Oe(e),[e,o]),[s,c]=g([]),[p,i]=g(""),[n,d]=g(!1),[u,h]=g(!1),[v,A]=g(0);return b(()=>a.subscribe(()=>r(m=>m+1)),[a]),b(()=>{if(i(""),c([]),o===!1)return;const m=new AbortController;return h(!0),d(!1),(t?a.loadPath(t):Promise.resolve([])).then(async k=>{if(m.signal.aborted)return;const T=k[k.length-1];if(c(k.map(z=>z.pathLocator)),i(T?.pathLocator===t?t:""),T)await Promise.all([a.loadLevel(""),...k.filter(z=>e.hasChildren(z)!==!1).map(z=>a.loadLevel(z.pathLocator))]);else{if(await a.loadLevel(""),m.signal.aborted)return;const z=a.roots();c(z.map(L=>L.pathLocator)),await Promise.all(z.filter(L=>e.hasChildren(L)!==!1).map(L=>a.loadLevel(L.pathLocator)))}},()=>{m.signal.aborted||d(!0)}).finally(()=>{m.signal.aborted||h(!1)}),()=>m.abort()},[a,t,v]),{model:a,expanded:s,setExpanded:c,highlighted:p,setHighlighted:i,error:n,loading:u,retry:()=>A(m=>m+1)}},Be=(e,t)=>{const[o,r]=g(),[a,s]=g(!1),[c,p]=g(!1),[i,n]=g(0);return b(()=>{const d=new AbortController;if(p(!1),!t){r(void 0),s(!1);return}return s(!0),r(void 0),_e(e,t).then(u=>{d.signal.aborted||r(u)},()=>{d.signal.aborted||(r(void 0),p(!0))}).finally(()=>{d.signal.aborted||s(!1)}),()=>d.abort()},[e,t,i]),{found:o,loading:a,error:c,retry:()=>n(d=>d+1)}},Ye=(e,t)=>{const o=t.pathLocator||t.path||"",{pathLocatorSeparator:r}=e;return o.includes(r)?o.substring(0,o.lastIndexOf(r)):o},De=(e,t)=>{if(!e)return;const o=e.getNodeByPathLocator(t),r=o?e.getChildren(o):[],{searchProperty:a}=e,s=(c,p)=>{if(e.hasChildren(c)){if(!e.hasChildren(p))return-1}else if(e.hasChildren(p))return 1;const i=c[a],n=p[a];return i>n?1:i<n?-1:0};return r.length>0?r.sort(s):o},Q=(e,t,o)=>{if(!e)return[];const r=De(e,o);return t?e.searchNodes(t,r,!1):r},Fe=(e,t)=>{if(!t||!e)return[];const o=t.getPathNodes(e);return o?o.filter(r=>r!==void 0):[]},He=e=>({getLevel:t=>{const o=Q(e,"",t);return Array.isArray(o)?o:[]},getPath:t=>Fe(t,e),search:(t,o)=>Q(e,t,o),hasChildren:t=>e?.hasChildren(t),label:t=>(e?t[e.searchProperty]:"")??"",pathLabel:t=>e?.getPathString(t,e.searchProperty),parentOf:t=>e?Ye(e,t):"",scopedSearch:!0}),qe=(e,t,o)=>{const[r,a]=g("");return b(()=>{const s=setTimeout(()=>{const c=e.trim();a(c.length>=t?c:"")},o);return()=>clearTimeout(s)},[e,t,o]),e.trim().length>=t?r:""},Ue=({tree:e,source:t,searchMinLength:o=3,searchDebounceTimeout:r=500,opened:a})=>{const s=be(),c=F(),[p,i]=ge("nodePath",""),n=O(()=>t??He(e),[t,e]),[d,u]=g(""),h=qe(d,o,r),{model:v,expanded:A,setExpanded:m,highlighted:x,setHighlighted:k,error:T,loading:z,retry:L}=Me(n,p,a),P=Be(n,h),[te,U]=g([]),{nodes:M}=Ne(()=>x?n.getPath(x):[],[n,x]);b(()=>{U(P.found?.expanded??[])},[P.found]),b(()=>{a&&u("")},[a]),b(()=>{Y(s,"highlightedNodePath",x)},[x]),b(()=>{h&&k("")},[h]);const j=C(l=>{l&&i(l)},[]),oe=h?P.loading:z||v.pending.size>0,re=h?P.error:T||v.errors.size>0,B=h?P.found?.roots??[]:v.roots(),ae=l=>{if(h){U(l);return}for(const E of l)A.includes(E)||v.loadLevel(E);m(l)},ne=()=>{if(h){P.retry();return}if(T){L();return}for(const l of v.errors)v.loadLevel(l)},se=l=>{k(l),h||(m(E=>[...new Set([...E,l])]),v.loadLevel(l))};return f`
		<div class="header">
			<cosmoz-input
				autofocus
				data-testid="search-input"
				label=${y("Search nodes")}
				.value=${d}
				.placeholder=${y("Search nodes")}
				@input=${l=>u(l.target.value)}
				@keydown=${l=>{l.key==="ArrowDown"?(l.preventDefault(),c.current?.focusActiveItem()):l.key==="Enter"&&(l.preventDefault(),j(x))}}
			>
				${ve({slot:"prefix",width:"20",height:"20"})}
			</cosmoz-input>
			<div class="crumbs">
				${$(M.length,()=>f`<nav class="path" aria-label=${y("Path")} data-testid="path">
							${M.map((l,E)=>f`${E?f`<span class="slash" aria-hidden="true">/</span>`:N}<button
											type="button"
											class="crumb"
											aria-current=${E===M.length-1?"location":N}
											title=${n.label(l)}
											@click=${()=>se(l.pathLocator)}
										>
											${n.label(l)}
										</button>`)}
						</nav>`,()=>f`<span class="hint"
							>${h?y("Pick a node from the results."):y("Search, or browse the tree.")}</span
						>`)}
			</div>
		</div>
		<div class="list">
			<cosmoz-treenode-tree-view
				class="items"
				data-testid="tree"
				label=${y("Nodes")}
				.items=${B}
				.getId=${l=>l.pathLocator}
				.getLabel=${n.label}
				.getChildren=${h?P.found?.getChildren:v.getChildren}
				.hasChildren=${h?l=>(P.found?.getChildren(l).length??0)>0:v.hasChildren}
				.expanded=${h?te:A}
				.selected=${x||void 0}
				@expanded-changed=${l=>{l.preventDefault(),ae(l.detail.value)}}
				@selected-changed=${l=>{l.preventDefault(),k(l.detail.value)}}
				@activate=${l=>j(l.detail.id)}
				${H(l=>{c.current=l})}
			></cosmoz-treenode-tree-view>
			<div
				class="status"
				?data-over=${B.length>0}
				role="status"
				aria-live="polite"
			>
				${$(re,()=>f`<span data-testid="error">${y("Could not load nodes.")}</span
							><button class="retry" type="button" @click=${ne}>
								${y("Try again")}
							</button>`,()=>$(oe,()=>f`<cosmoz-spinner
									data-testid="loading"
									role="img"
									aria-label=${y("Loading...")}
								></cosmoz-spinner>`,()=>$(!B.length,()=>f`<span data-testid=${h?"no-results":"empty"}
											>${h?y("No nodes match the search"):y("Search to find a node.")}</span
										>`)))}
			</div>
		</div>
	`};customElements.define("cosmoz-treenode-navigator",R(Ue,{styleSheets:[Ie]}));export{He as t,Ne as u};
