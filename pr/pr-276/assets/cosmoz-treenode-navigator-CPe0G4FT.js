import{w as xe,b as f,f as ze,E as H,A as O,p as $e,t as w}from"./iframe-C2GcziZa.js";import{o as k,n as L,j as ke,k as Le,t as I,i as j,m as Pe,H as Se,b as q,e as A,p as Ce,d as x,c as _,s as ne,f as U,a as V,u as g,h as Ee}from"./tree-view-Bam9GJ5E.js";const Ae=({slot:e,title:t,className:o,width:r="24",height:a="24",styles:c}={})=>f`
  <svg
    slot=${k(e)}
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
    style=${k(c)}
  >
    ${L(t,()=>xe`<title>${t}</title>`)}
    <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </svg>
`;const X=ke(class extends Le{constructor(e){if(super(e),e.type!==I.PROPERTY&&e.type!==I.ATTRIBUTE&&e.type!==I.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ze(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===H||t===O)return t;const o=e.element,r=e.name;if(e.type===I.PROPERTY){if(t===o[r])return H}else if(e.type===I.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return H}else if(e.type===I.ATTRIBUTE&&o.getAttribute(r)===t+"")return H;return $e(e),t}}),se=(e,{label:t,invalid:o,errorMessage:r})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${L(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${L(o&&r,()=>f`<div class="error" part="error">${r}</div>`)}
	`,ie=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],le=(e,...t)=>e.flatMap((o,r)=>[o,t[r]??""]).join(""),te=le`
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
`,ce=le`
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
		${te}
	}
	@container style(--focused: focused) {
		${te}
	}
`,Te=e=>j(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Re=Pe(class extends Se{update(){return this.state.host}}),Ie=/([A-Z])/gu,Q=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Ie,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},de=e=>{const t=q(void 0),o=A(l=>t.current=l,[]),r=e.shadowRoot,a=A(l=>e.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),c=A(l=>Q(e,"value",l.target.value),[]),n=A(l=>Q(e,"focused",l.type==="focus"),[]),p=A(()=>{const l=t.current?.checkValidity();return e.toggleAttribute("invalid",!l),l},[]);return Ce({validate:p},[p]),x(()=>{const l=()=>{e.matches(":focus-within")||e.focus()};return r.addEventListener("mousedown",l),()=>r.removeEventListener("mousedown",l)},[]),{onChange:a,onFocus:n,onInput:c,onRef:o}},Ne=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",Oe=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...ie],_e=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:a,value:c,readonly:n,disabled:p,min:l,max:s,step:d,maxlength:u}=e,{onChange:v,onFocus:h,onInput:b,onRef:T}=de(e),R=Te(r);return se(f`
			<input
				${U(T)}
				style="--chars: ${c?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${k(o)}
				autocomplete=${k(a)}
				placeholder=${Ne(e)}
				?readonly=${n}
				?aria-disabled=${p}
				?disabled=${p}
				.value=${X(c??"")}
				maxlength=${k(u)}
				@beforeinput=${R}
				@input=${b}
				@change=${v}
				@focus=${h}
				@blur=${h}
				min=${k(l)}
				max=${k(s)}
				step=${k(d)}
			/>
		`,e)};customElements.define("cosmoz-input",_(_e,{observedAttributes:Oe,styleSheets:[ne(ce)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const oe=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Me=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Be=e=>{const{value:t,maxRows:o}=e,r=j(()=>()=>e.shadowRoot.querySelector("#input"),[]);x(()=>Me(r(),o),[o,r]),x(()=>oe(r()),[r,t]),x(()=>{const a=r(),c=new ResizeObserver(()=>requestAnimationFrame(()=>oe(a)));return c.observe(a),()=>c.unobserve(a)},[r])},Ye=["rows","placeholder",...ie],De=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:a,disabled:c,rows:n,cols:p,maxlength:l}=e,{onChange:s,onFocus:d,onInput:u,onRef:v}=de(e);return Be(e),se(f`
			<textarea id="input" part="input"
				${U(v)}
				autocomplete=${k(t)}
				placeholder=${r||" "}
				rows=${n??1} cols=${k(p)}
				?readonly=${a} ?aria-disabled=${c} ?disabled=${c}
				.value=${X(o??"")} maxlength=${k(l)} @input=${u}
				@change=${s} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",_(De,{observedAttributes:Ye,styleSheets:[ne(ce)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Fe=e=>{const{label:t,value:o,disabled:r,error:a}=e,c=A(n=>e.dispatchEvent(new CustomEvent("change",{detail:n.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${X(!!o)}
			?disabled=${r}
			@change=${c}
		/>
		${L(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${L(a,n=>f`<div class="failure">${n}</div>`)} `},He=V`
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
`,qe=V`
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
`;customElements.define("cosmoz-toggle",_(Fe,{styleSheets:[qe,He],observedAttributes:["disabled"]}));const Ue=V`
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
`,je=()=>O,Ve=_(je,{styleSheets:[Ue]});customElements.define("cosmoz-spinner",Ve);const Ze=V`
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
`,Qe=(e,t)=>{const[o,r]=g([]),[a,c]=g(!0),[n,p]=g(),l=q(0);return x(()=>{const s=(l.current??0)+1;l.current=s,c(!0),p(void 0),Promise.resolve().then(e).then(d=>{s===l.current&&(r(d??[]),c(!1))},d=>{s===l.current&&(r([]),p(d),c(!1))})},t),{nodes:o,loading:a,error:n}},W=(e,t)=>{const o=new Map(t.map(a=>[a.pathLocator,a])),r=new Map;for(const a of o.values()){const c=e.parentOf(a);if(c===a.pathLocator)continue;const n=r.get(c)??[];n.push(a),r.set(c,n)}return{roots:[...o.values()].filter(a=>e.parentOf(a)===a.pathLocator||!o.has(e.parentOf(a))),getChildren:a=>r.get(a.pathLocator)??[],expanded:[...r.keys()].filter(a=>o.has(a))}},We=e=>{const t=new Map;let o=W(e,[]);const r=new Map,a=new Map,c=new Set,n=new Set,p=()=>n.forEach(s=>s()),l=s=>{for(const d of s)t.set(d.pathLocator,d);o=W(e,[...t.values()])};return{subscribe:s=>(n.add(s),()=>{n.delete(s)}),roots:()=>{const s=r.get("")??[],d=new Set(s.map(u=>u.pathLocator));return[...s,...o.roots.filter(u=>!d.has(u.pathLocator))]},getChildren:s=>r.get(s.pathLocator)??o.getChildren(s),hasChildren:s=>r.has(s.pathLocator)?r.get(s.pathLocator).length>0:e.hasChildren(s)!==!1,pending:a,errors:c,loadPath:async s=>{const d=await e.getPath(s);return l(d),p(),d},loadLevel:s=>{if(r.has(s))return Promise.resolve();const d=a.get(s);if(d)return d;c.delete(s);const u=Promise.resolve().then(()=>e.getLevel(s)).then(v=>{r.set(s,v),l(v)},()=>{c.add(s)}).finally(()=>{a.delete(s),p()});return a.set(s,u),p(),u}}},re=async(e,t,o="")=>{const r=await e.search(t,o),a=n=>!o||n.pathLocator===o||n.pathLocator.startsWith(`${o}.`),c=await Promise.all(r.map(async n=>{try{return[...await e.getPath(n.pathLocator),n]}catch{return[n]}}));return{...W(e,c.flat().filter(a)),matches:r.length}},Xe=(e,t,o)=>{const[,r]=g(0),a=j(()=>We(e),[e,o]),[c,n]=g([]),[p,l]=g(""),[s,d]=g(),[u,v]=g(!1),[h,b]=g(!1),[T,R]=g(0);return x(()=>a.subscribe(()=>r(m=>m+1)),[a]),x(()=>{if(l(""),n([]),d(void 0),o===!1)return;const m=new AbortController;return b(!0),v(!1),(t?a.loadPath(t):Promise.resolve([])).then(async y=>{if(m.signal.aborted)return;const S=y[y.length-1];if(S?.pathLocator===t&&y.length>1)d(S),n([t]),l(t),e.hasChildren(S)!==!1&&await a.loadLevel(t);else if(S)S.pathLocator===t&&l(t),n(y.map(z=>z.pathLocator)),await Promise.all([a.loadLevel(""),...y.filter(z=>e.hasChildren(z)!==!1).map(z=>a.loadLevel(z.pathLocator))]);else{if(await a.loadLevel(""),m.signal.aborted)return;const z=a.roots();n(z.map(C=>C.pathLocator)),await Promise.all(z.filter(C=>e.hasChildren(C)!==!1).map(C=>a.loadLevel(C.pathLocator)))}},()=>{m.signal.aborted||v(!0)}).finally(()=>{m.signal.aborted||b(!1)}),()=>m.abort()},[a,t,T]),{model:a,expanded:c,setExpanded:n,highlighted:p,setHighlighted:l,scope:s,setScope:d,error:u,loading:h,retry:()=>R(m=>m+1)}},Ge=(e,t,o="")=>{const[r,a]=g(),[c,n]=g(!1),[p,l]=g(!1),[s,d]=g(0);return x(()=>{const u=new AbortController;if(l(!1),!t){a(void 0),n(!1);return}return n(!0),a(void 0),re(e,t,o).then(async v=>o&&!v.roots.length?{...await re(e,t),widened:!0}:v).then(v=>{u.signal.aborted||a(v)},()=>{u.signal.aborted||(a(void 0),l(!0))}).finally(()=>{u.signal.aborted||n(!1)}),()=>u.abort()},[e,t,o,s]),{found:r,loading:c,error:p,retry:()=>d(u=>u+1)}},Je=(e,t)=>{const o=t.pathLocator||t.path||"",{pathLocatorSeparator:r}=e;return o.includes(r)?o.substring(0,o.lastIndexOf(r)):o},Ke=(e,t)=>{if(!e)return;const o=e.getNodeByPathLocator(t),r=o?e.getChildren(o):[],{searchProperty:a}=e,c=(n,p)=>{if(e.hasChildren(n)){if(!e.hasChildren(p))return-1}else if(e.hasChildren(p))return 1;const l=n[a],s=p[a];return l>s?1:l<s?-1:0};return r.length>0?r.sort(c):o},ae=(e,t,o)=>{if(!e)return[];const r=Ke(e,o);return t?e.searchNodes(t,r,!1):r},et=(e,t)=>{if(!t||!e)return[];const o=t.getPathNodes(e);return o?o.filter(r=>r!==void 0):[]},tt=e=>({getLevel:t=>{const o=ae(e,"",t);return Array.isArray(o)?o:[]},getPath:t=>et(t,e),search:(t,o)=>ae(e,t,o),hasChildren:t=>e?.hasChildren(t),label:t=>(e?t[e.searchProperty]:"")??"",pathLabel:t=>e?.getPathString(t,e.searchProperty),parentOf:t=>e?Je(e,t):"",scopedSearch:!0}),ot=(e,t,o)=>{const[r,a]=g("");return x(()=>{const c=setTimeout(()=>{const n=e.trim();a(n.length>=t?n:"")},o);return()=>clearTimeout(c)},[e,t,o]),e.trim().length>=t?r:""},rt=({tree:e,source:t,searchMinLength:o=3,searchDebounceTimeout:r=500,opened:a})=>{const c=Re(),n=q(),p=q(),[l,s]=Ee("nodePath",""),d=j(()=>t??tt(e),[t,e]),[u,v]=g(""),h=ot(u,o,r),{model:b,expanded:T,setExpanded:R,highlighted:m,setHighlighted:M,scope:y,setScope:S,error:z,loading:C,retry:pe}=Xe(d,l,a),[B,Z]=g(!1);x(()=>Z(!1),[a,y]);const he=d.scopedSearch&&!B?y?.pathLocator??"":"",P=Ge(d,h,he),Y=h&&!B&&!!P.found?.widened,[G,J]=g([]),{nodes:D}=Qe(()=>m?d.getPath(m):[],[d,m]);x(()=>{J(P.found?.expanded??[])},[P.found]),x(()=>{a&&(v(""),p.current?.focus())},[a]),x(()=>{Q(c,"highlightedNodePath",m)},[m]),x(()=>{h&&M("")},[h]);const K=A(i=>{i&&s(i)},[]),ue=(h?P.loading:C)||b.pending.size>0,fe=h?P.error:z||b.errors.size>0,ge=y?[y]:b.roots(),F=h?P.found?.roots??[]:ge,ee=i=>P.found?.getChildren(i)??[],ve=i=>{const $=ee(i);return $.length?$:b.getChildren(i)},be=i=>ee(i).length>0||b.hasChildren(i),me=i=>{const $=h?G:T,N=h?P.found?.expanded??[]:[];for(const E of i)!$.includes(E)&&!N.includes(E)&&b.loadLevel(E);(h?J:R)(i)},ye=()=>{if(h){P.retry();return}if(z){pe();return}for(const i of b.errors)b.loadLevel(i)},we=(i,$)=>{const{pathLocator:N}=i;M(N),!h&&(y&&$===0?(S(void 0),b.loadLevel("")):y&&$<D.findIndex(E=>E.pathLocator===y.pathLocator)&&S(i),R(E=>[...new Set([...E,N])]),b.loadLevel(N))};return f`
		<div class="header">
			<cosmoz-input
				data-testid="search-input"
				${U(i=>{p.current=i})}
				label=${w("Search nodes")}
				.value=${u}
				.placeholder=${w("Search nodes")}
				@input=${i=>v(i.target.value)}
				@keydown=${i=>{i.key==="ArrowDown"?(i.preventDefault(),n.current?.focusActiveItem()):i.key==="Enter"&&(i.preventDefault(),K(m))}}
			>
				${Ae({slot:"prefix",width:"20",height:"20"})}
			</cosmoz-input>
			${L(d.scopedSearch&&y,()=>f`<div class="scope" role="group" aria-label=${w("Search in")}>
						<span aria-hidden="true">${w("Search in")}</span>
						<button
							type="button"
							data-testid="search-within"
							title=${d.label(y)}
							aria-pressed=${String(!B&&!Y)}
							?disabled=${Y}
							@click=${()=>Z(!1)}
						>
							${d.label(y)}
						</button>
						<button
							type="button"
							data-testid="search-everywhere"
							aria-pressed=${String(B||Y)}
							@click=${()=>Z(!0)}
						>
							${w("All nodes")}
						</button>
					</div>`)}
			<div class="crumbs">
				${L(D.length,()=>f`<nav class="path" aria-label=${w("Path")} data-testid="path">
							${D.map((i,$)=>f`${$?f`<span class="slash" aria-hidden="true">/</span>`:O}<button
											type="button"
											class="crumb"
											aria-current=${$===D.length-1?"location":O}
											title=${d.label(i)}
											@click=${()=>we(i,$)}
										>
											${d.label(i)}
										</button>`)}
						</nav>`,()=>h?O:f`<span class="hint"
									>${w("Search, or browse the tree.")}</span
								>`)}
			</div>
		</div>
		<div class="list">
			<cosmoz-treenode-tree-view
				class="items"
				data-testid="tree"
				label=${w("Nodes")}
				.items=${F}
				.getId=${i=>i.pathLocator}
				.getLabel=${d.label}
				.getChildren=${h?ve:b.getChildren}
				.hasChildren=${h?be:b.hasChildren}
				.expanded=${h?G:T}
				.selected=${m||void 0}
				@expanded-changed=${i=>{i.preventDefault(),me(i.detail.value)}}
				@selected-changed=${i=>{i.preventDefault(),M(i.detail.value)}}
				@activate=${i=>K(i.detail.id)}
				${U(i=>{n.current=i})}
			></cosmoz-treenode-tree-view>
			<div
				class="status"
				?data-over=${F.length>0}
				role="status"
				aria-live="polite"
			>
				${L(fe,()=>f`<span data-testid="error">${w("Could not load nodes.")}</span
							><button class="retry" type="button" @click=${ye}>
								${w("Try again")}
							</button>`,()=>L(ue,()=>f`<cosmoz-spinner
									data-testid="loading"
									role="img"
									aria-label=${w("Loading...")}
								></cosmoz-spinner>`,()=>f`${L(!F.length,()=>f`<span data-testid=${h?"no-results":"empty"}
											>${h?w("No nodes match the search"):w("Search to find a node.")}</span
										>`)}${L(Y&&F.length,()=>f`<span data-testid="widened"
											>${w("No matches in this node. Showing all nodes.")}</span
										>`)}`))}
			</div>
		</div>
	`};customElements.define("cosmoz-treenode-navigator",_(rt,{styleSheets:[Ze]}));export{tt as t,Qe as u};
