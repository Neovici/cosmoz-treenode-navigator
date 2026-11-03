import{w as me,b as f,f as ye,E as D,A as I,p as we,t as w}from"./iframe-Be8ENJ1f.js";import{o as $,n as k,j as xe,k as ze,t as R,i as q,m as $e,H as ke,b as F,e as C,p as Le,d as x,c as N,s as re,f as H,a as U,u as g,h as Pe}from"./tree-view-sUUsIhYx.js";const Se=({slot:e,title:t,className:o,width:r="24",height:a="24",styles:i}={})=>f`
  <svg
    slot=${$(e)}
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
    style=${$(i)}
  >
    ${k(t,()=>me`<title>${t}</title>`)}
    <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </svg>
`;const X=xe(class extends ze{constructor(e){if(super(e),e.type!==R.PROPERTY&&e.type!==R.ATTRIBUTE&&e.type!==R.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ye(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===D||t===I)return t;const o=e.element,r=e.name;if(e.type===R.PROPERTY){if(t===o[r])return D}else if(e.type===R.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return D}else if(e.type===R.ATTRIBUTE&&o.getAttribute(r)===t+"")return D;return we(e),t}}),ae=(e,{label:t,invalid:o,errorMessage:r})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${k(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${k(o&&r,()=>f`<div class="error" part="error">${r}</div>`)}
	`,ne=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],se=(e,...t)=>e.flatMap((o,r)=>[o,t[r]??""]).join(""),K=se`
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
`,ie=se`
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
		${K}
	}
	@container style(--focused: focused) {
		${K}
	}
`,Ee=e=>q(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Ce=$e(class extends ke{update(){return this.state.host}}),Ae=/([A-Z])/gu,Q=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Ae,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},le=e=>{const t=F(void 0),o=C(l=>t.current=l,[]),r=e.shadowRoot,a=C(l=>e.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),i=C(l=>Q(e,"value",l.target.value),[]),n=C(l=>Q(e,"focused",l.type==="focus"),[]),p=C(()=>{const l=t.current?.checkValidity();return e.toggleAttribute("invalid",!l),l},[]);return Le({validate:p},[p]),x(()=>{const l=()=>{e.matches(":focus-within")||e.focus()};return r.addEventListener("mousedown",l),()=>r.removeEventListener("mousedown",l)},[]),{onChange:a,onFocus:n,onInput:i,onRef:o}},Te=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",Re=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ne],Ie=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:a,value:i,readonly:n,disabled:p,min:l,max:s,step:d,maxlength:h}=e,{onChange:v,onFocus:u,onInput:m,onRef:A}=le(e),T=Ee(r);return ae(f`
			<input
				${H(A)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${$(o)}
				autocomplete=${$(a)}
				placeholder=${Te(e)}
				?readonly=${n}
				?aria-disabled=${p}
				?disabled=${p}
				.value=${X(i??"")}
				maxlength=${$(h)}
				@beforeinput=${T}
				@input=${m}
				@change=${v}
				@focus=${u}
				@blur=${u}
				min=${$(l)}
				max=${$(s)}
				step=${$(d)}
			/>
		`,e)};customElements.define("cosmoz-input",N(Ie,{observedAttributes:Re,styleSheets:[re(ie)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const ee=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Ne=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Oe=e=>{const{value:t,maxRows:o}=e,r=q(()=>()=>e.shadowRoot.querySelector("#input"),[]);x(()=>Ne(r(),o),[o,r]),x(()=>ee(r()),[r,t]),x(()=>{const a=r(),i=new ResizeObserver(()=>requestAnimationFrame(()=>ee(a)));return i.observe(a),()=>i.unobserve(a)},[r])},_e=["rows","placeholder",...ne],Me=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:a,disabled:i,rows:n,cols:p,maxlength:l}=e,{onChange:s,onFocus:d,onInput:h,onRef:v}=le(e);return Oe(e),ae(f`
			<textarea id="input" part="input"
				${H(v)}
				autocomplete=${$(t)}
				placeholder=${r||" "}
				rows=${n??1} cols=${$(p)}
				?readonly=${a} ?aria-disabled=${i} ?disabled=${i}
				.value=${X(o??"")} maxlength=${$(l)} @input=${h}
				@change=${s} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",N(Me,{observedAttributes:_e,styleSheets:[re(ie)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Be=e=>{const{label:t,value:o,disabled:r,error:a}=e,i=C(n=>e.dispatchEvent(new CustomEvent("change",{detail:n.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${X(!!o)}
			?disabled=${r}
			@change=${i}
		/>
		${k(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${k(a,n=>f`<div class="failure">${n}</div>`)} `},Ye=U`
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
`,De=U`
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
`;customElements.define("cosmoz-toggle",N(Be,{styleSheets:[De,Ye],observedAttributes:["disabled"]}));const Fe=U`
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
`,He=()=>I,qe=N(He,{styleSheets:[Fe]});customElements.define("cosmoz-spinner",qe);const Ue=U`
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

	.scope {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
		min-width: 0;
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		color: var(--cz-color-text-tertiary);
	}

	.scope span {
		flex: none;
	}

	.scope button {
		all: unset;
		cursor: pointer;
		padding: 2px calc(var(--cz-spacing) * 2.5);
		border: 1px solid var(--cz-color-border-primary);
		border-radius: var(--cz-radius-full);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-secondary);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.scope button:first-of-type {
		min-width: 0;
		max-width: 60%;
	}

	.scope button:last-of-type {
		flex: none;
	}

	.scope button:hover:not(:disabled, [aria-pressed='true']) {
		background: var(--cz-color-bg-primary-hover);
	}

	.scope button[aria-pressed='true'] {
		border-color: var(--cz-color-text-primary);
		background: var(--cz-color-bg-secondary);
		color: var(--cz-color-text-primary);
	}

	.scope button:disabled {
		cursor: default;
		color: var(--cz-color-text-quaternary);
	}

	.scope button:focus-visible {
		box-shadow: var(--cz-focus-ring);
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
`,je=(e,t)=>{const[o,r]=g([]),[a,i]=g(!0),[n,p]=g(),l=F(0);return x(()=>{const s=(l.current??0)+1;l.current=s,i(!0),p(void 0),Promise.resolve().then(e).then(d=>{s===l.current&&(r(d??[]),i(!1))},d=>{s===l.current&&(r([]),p(d),i(!1))})},t),{nodes:o,loading:a,error:n}},W=(e,t)=>{const o=new Map(t.map(a=>[a.pathLocator,a])),r=new Map;for(const a of o.values()){const i=e.parentOf(a);if(i===a.pathLocator)continue;const n=r.get(i)??[];n.push(a),r.set(i,n)}return{roots:[...o.values()].filter(a=>e.parentOf(a)===a.pathLocator||!o.has(e.parentOf(a))),getChildren:a=>r.get(a.pathLocator)??[],expanded:[...r.keys()].filter(a=>o.has(a))}},Ve=e=>{const t=new Map;let o=W(e,[]);const r=new Map,a=new Map,i=new Set,n=new Set,p=()=>n.forEach(s=>s()),l=s=>{for(const d of s)t.set(d.pathLocator,d);o=W(e,[...t.values()])};return{subscribe:s=>(n.add(s),()=>{n.delete(s)}),roots:()=>{const s=r.get("")??[],d=new Set(s.map(h=>h.pathLocator));return[...s,...o.roots.filter(h=>!d.has(h.pathLocator))]},getChildren:s=>r.get(s.pathLocator)??o.getChildren(s),hasChildren:s=>r.has(s.pathLocator)?r.get(s.pathLocator).length>0:e.hasChildren(s)!==!1,pending:a,errors:i,loadPath:async s=>{const d=await e.getPath(s);return l(d),p(),d},loadLevel:s=>{if(r.has(s))return Promise.resolve();const d=a.get(s);if(d)return d;i.delete(s);const h=Promise.resolve().then(()=>e.getLevel(s)).then(v=>{r.set(s,v),l(v)},()=>{i.add(s)}).finally(()=>{a.delete(s),p()});return a.set(s,h),p(),h}}},te=async(e,t,o="")=>{const r=await e.search(t,o),a=n=>!o||n.pathLocator===o||n.pathLocator.startsWith(`${o}.`),i=await Promise.all(r.map(async n=>{try{return[...await e.getPath(n.pathLocator),n]}catch{return[n]}}));return{...W(e,i.flat().filter(a)),matches:r.length}},Ze=(e,t,o)=>{const[,r]=g(0),a=q(()=>Ve(e),[e,o]),[i,n]=g([]),[p,l]=g(""),[s,d]=g(),[h,v]=g(!1),[u,m]=g(!1),[A,T]=g(0);return x(()=>a.subscribe(()=>r(b=>b+1)),[a]),x(()=>{if(l(""),n([]),d(void 0),o===!1)return;const b=new AbortController;return m(!0),v(!1),(t?a.loadPath(t):Promise.resolve([])).then(async y=>{if(b.signal.aborted)return;const S=y[y.length-1];if(S?.pathLocator===t)d(S),n([t]),l(t),e.hasChildren(S)!==!1&&await a.loadLevel(t);else if(S)n(y.map(z=>z.pathLocator)),await Promise.all([a.loadLevel(""),...y.filter(z=>e.hasChildren(z)!==!1).map(z=>a.loadLevel(z.pathLocator))]);else{if(await a.loadLevel(""),b.signal.aborted)return;const z=a.roots();n(z.map(E=>E.pathLocator)),await Promise.all(z.filter(E=>e.hasChildren(E)!==!1).map(E=>a.loadLevel(E.pathLocator)))}},()=>{b.signal.aborted||v(!0)}).finally(()=>{b.signal.aborted||m(!1)}),()=>b.abort()},[a,t,A]),{model:a,expanded:i,setExpanded:n,highlighted:p,setHighlighted:l,scope:s,setScope:d,error:h,loading:u,retry:()=>T(b=>b+1)}},Qe=(e,t,o="")=>{const[r,a]=g(),[i,n]=g(!1),[p,l]=g(!1),[s,d]=g(0);return x(()=>{const h=new AbortController;if(l(!1),!t){a(void 0),n(!1);return}return n(!0),a(void 0),te(e,t,o).then(async v=>o&&!v.roots.length?{...await te(e,t),widened:!0}:v).then(v=>{h.signal.aborted||a(v)},()=>{h.signal.aborted||(a(void 0),l(!0))}).finally(()=>{h.signal.aborted||n(!1)}),()=>h.abort()},[e,t,o,s]),{found:r,loading:i,error:p,retry:()=>d(h=>h+1)}},We=(e,t)=>{const o=t.pathLocator||t.path||"",{pathLocatorSeparator:r}=e;return o.includes(r)?o.substring(0,o.lastIndexOf(r)):o},Xe=(e,t)=>{if(!e)return;const o=e.getNodeByPathLocator(t),r=o?e.getChildren(o):[],{searchProperty:a}=e,i=(n,p)=>{if(e.hasChildren(n)){if(!e.hasChildren(p))return-1}else if(e.hasChildren(p))return 1;const l=n[a],s=p[a];return l>s?1:l<s?-1:0};return r.length>0?r.sort(i):o},oe=(e,t,o)=>{if(!e)return[];const r=Xe(e,o);return t?e.searchNodes(t,r,!1):r},Ge=(e,t)=>{if(!t||!e)return[];const o=t.getPathNodes(e);return o?o.filter(r=>r!==void 0):[]},Je=e=>({getLevel:t=>{const o=oe(e,"",t);return Array.isArray(o)?o:[]},getPath:t=>Ge(t,e),search:(t,o)=>oe(e,t,o),hasChildren:t=>e?.hasChildren(t),label:t=>(e?t[e.searchProperty]:"")??"",pathLabel:t=>e?.getPathString(t,e.searchProperty),parentOf:t=>e?We(e,t):"",scopedSearch:!0}),Ke=(e,t,o)=>{const[r,a]=g("");return x(()=>{const i=setTimeout(()=>{const n=e.trim();a(n.length>=t?n:"")},o);return()=>clearTimeout(i)},[e,t,o]),e.trim().length>=t?r:""},et=({tree:e,source:t,searchMinLength:o=3,searchDebounceTimeout:r=500,opened:a})=>{const i=Ce(),n=F(),p=F(),[l,s]=Pe("nodePath",""),d=q(()=>t??Je(e),[t,e]),[h,v]=g(""),u=Ke(h,o,r),{model:m,expanded:A,setExpanded:T,highlighted:b,setHighlighted:O,scope:y,setScope:S,error:z,loading:E,retry:ce}=Ze(d,l,a),[_,j]=g(!1);x(()=>j(!1),[a,y]);const de=d.scopedSearch&&!_?y?.pathLocator??"":"",L=Qe(d,u,de),M=u&&!_&&!!L.found?.widened,[pe,G]=g([]),{nodes:B}=je(()=>b?d.getPath(b):[],[d,b]);x(()=>{G(L.found?.expanded??[])},[L.found]),x(()=>{a&&(v(""),p.current?.focus())},[a]),x(()=>{Q(i,"highlightedNodePath",b)},[b]),x(()=>{u&&O("")},[u]);const J=C(c=>{c&&s(c)},[]),he=u?L.loading:E||m.pending.size>0,ue=u?L.error:z||m.errors.size>0,fe=y?[y]:m.roots(),Y=u?L.found?.roots??[]:fe,ge=c=>{if(u){G(c);return}for(const P of c)A.includes(P)||m.loadLevel(P);T(c)},ve=()=>{if(u){L.retry();return}if(z){ce();return}for(const c of m.errors)m.loadLevel(c)},be=(c,P)=>{const{pathLocator:V}=c;O(V),!u&&(y&&P===0?(S(void 0),m.loadLevel("")):y&&P<B.findIndex(Z=>Z.pathLocator===y.pathLocator)&&S(c),T(Z=>[...new Set([...Z,V])]),m.loadLevel(V))};return f`
		<div class="header">
			<cosmoz-input
				data-testid="search-input"
				${H(c=>{p.current=c})}
				label=${w("Search nodes")}
				.value=${h}
				.placeholder=${w("Search nodes")}
				@input=${c=>v(c.target.value)}
				@keydown=${c=>{c.key==="ArrowDown"?(c.preventDefault(),n.current?.focusActiveItem()):c.key==="Enter"&&(c.preventDefault(),J(b))}}
			>
				${Se({slot:"prefix",width:"20",height:"20"})}
			</cosmoz-input>
			${k(d.scopedSearch&&y,()=>f`<div class="scope" role="group" aria-label=${w("Search in")}>
						<span aria-hidden="true">${w("Search in")}</span>
						<button
							type="button"
							data-testid="search-within"
							title=${d.label(y)}
							aria-pressed=${String(!_&&!M)}
							?disabled=${M}
							@click=${()=>j(!1)}
						>
							${d.label(y)}
						</button>
						<button
							type="button"
							data-testid="search-everywhere"
							aria-pressed=${String(_||M)}
							@click=${()=>j(!0)}
						>
							${w("All nodes")}
						</button>
					</div>`)}
			<div class="crumbs">
				${k(B.length,()=>f`<nav class="path" aria-label=${w("Path")} data-testid="path">
							${B.map((c,P)=>f`${P?f`<span class="slash" aria-hidden="true">/</span>`:I}<button
											type="button"
											class="crumb"
											aria-current=${P===B.length-1?"location":I}
											title=${d.label(c)}
											@click=${()=>be(c,P)}
										>
											${d.label(c)}
										</button>`)}
						</nav>`,()=>u?I:f`<span class="hint"
									>${w("Search, or browse the tree.")}</span
								>`)}
			</div>
		</div>
		<div class="list">
			<cosmoz-treenode-tree-view
				class="items"
				data-testid="tree"
				label=${w("Nodes")}
				.items=${Y}
				.getId=${c=>c.pathLocator}
				.getLabel=${d.label}
				.getChildren=${u?L.found?.getChildren:m.getChildren}
				.hasChildren=${u?c=>(L.found?.getChildren(c).length??0)>0:m.hasChildren}
				.expanded=${u?pe:A}
				.selected=${b||void 0}
				@expanded-changed=${c=>{c.preventDefault(),ge(c.detail.value)}}
				@selected-changed=${c=>{c.preventDefault(),O(c.detail.value)}}
				@activate=${c=>J(c.detail.id)}
				${H(c=>{n.current=c})}
			></cosmoz-treenode-tree-view>
			<div
				class="status"
				?data-over=${Y.length>0}
				role="status"
				aria-live="polite"
			>
				${k(ue,()=>f`<span data-testid="error">${w("Could not load nodes.")}</span
							><button class="retry" type="button" @click=${ve}>
								${w("Try again")}
							</button>`,()=>k(he,()=>f`<cosmoz-spinner
									data-testid="loading"
									role="img"
									aria-label=${w("Loading...")}
								></cosmoz-spinner>`,()=>f`${k(!Y.length,()=>f`<span data-testid=${u?"no-results":"empty"}
											>${u?w("No nodes match the search"):w("Search to find a node.")}</span
										>`)}${k(M&&Y.length,()=>f`<span data-testid="widened"
											>${w("No matches in this node. Showing all nodes.")}</span
										>`)}`))}
			</div>
		</div>
	`};customElements.define("cosmoz-treenode-navigator",N(et,{styleSheets:[Ue]}));export{Je as t,je as u};
