import{w as ve,b as f,f as be,E as _,A as M,p as me,t as x}from"./iframe-C-pQiK35.js";import{o as $,n as k,j as ye,k as we,t as R,i as D,m as xe,H as ze,b as B,e as S,p as $e,d as y,c as I,s as te,f as Y,a as F,u as g,h as ke}from"./tree-view-Dpkx9aVe.js";const Le=({slot:e,title:t,className:o,width:r="24",height:a="24",styles:i}={})=>f`
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
    ${k(t,()=>ve`<title>${t}</title>`)}
    <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </svg>
`;const Z=ye(class extends we{constructor(e){if(super(e),e.type!==R.PROPERTY&&e.type!==R.ATTRIBUTE&&e.type!==R.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!be(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===_||t===M)return t;const o=e.element,r=e.name;if(e.type===R.PROPERTY){if(t===o[r])return _}else if(e.type===R.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return _}else if(e.type===R.ATTRIBUTE&&o.getAttribute(r)===t+"")return _;return me(e),t}}),oe=(e,{label:t,invalid:o,errorMessage:r})=>f`
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
	`,re=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],ae=(e,...t)=>e.flatMap((o,r)=>[o,t[r]??""]).join(""),J=ae`
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
`,ne=ae`
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
		${J}
	}
	@container style(--focused: focused) {
		${J}
	}
`,Pe=e=>D(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),Ee=xe(class extends ze{update(){return this.state.host}}),Ce=/([A-Z])/gu,j=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(Ce,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},se=e=>{const t=B(void 0),o=S(l=>t.current=l,[]),r=e.shadowRoot,a=S(l=>e.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),i=S(l=>j(e,"value",l.target.value),[]),n=S(l=>j(e,"focused",l.type==="focus"),[]),p=S(()=>{const l=t.current?.checkValidity();return e.toggleAttribute("invalid",!l),l},[]);return $e({validate:p},[p]),y(()=>{const l=()=>{e.matches(":focus-within")||e.focus()};return r.addEventListener("mousedown",l),()=>r.removeEventListener("mousedown",l)},[]),{onChange:a,onFocus:n,onInput:i,onRef:o}},Se=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",Ae=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...re],Te=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:a,value:i,readonly:n,disabled:p,min:l,max:s,step:d,maxlength:h}=e,{onChange:m,onFocus:u,onInput:b,onRef:A}=se(e),T=Pe(r);return oe(f`
			<input
				${Y(A)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${$(o)}
				autocomplete=${$(a)}
				placeholder=${Se(e)}
				?readonly=${n}
				?aria-disabled=${p}
				?disabled=${p}
				.value=${Z(i??"")}
				maxlength=${$(h)}
				@beforeinput=${T}
				@input=${b}
				@change=${m}
				@focus=${u}
				@blur=${u}
				min=${$(l)}
				max=${$(s)}
				step=${$(d)}
			/>
		`,e)};customElements.define("cosmoz-input",I(Te,{observedAttributes:Ae,styleSheets:[te(ne)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const K=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Re=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Ie=e=>{const{value:t,maxRows:o}=e,r=D(()=>()=>e.shadowRoot.querySelector("#input"),[]);y(()=>Re(r(),o),[o,r]),y(()=>K(r()),[r,t]),y(()=>{const a=r(),i=new ResizeObserver(()=>requestAnimationFrame(()=>K(a)));return i.observe(a),()=>i.unobserve(a)},[r])},Ne=["rows","placeholder",...re],Oe=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:a,disabled:i,rows:n,cols:p,maxlength:l}=e,{onChange:s,onFocus:d,onInput:h,onRef:m}=se(e);return Ie(e),oe(f`
			<textarea id="input" part="input"
				${Y(m)}
				autocomplete=${$(t)}
				placeholder=${r||" "}
				rows=${n??1} cols=${$(p)}
				?readonly=${a} ?aria-disabled=${i} ?disabled=${i}
				.value=${Z(o??"")} maxlength=${$(l)} @input=${h}
				@change=${s} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",I(Oe,{observedAttributes:Ne,styleSheets:[te(ne)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const _e=e=>{const{label:t,value:o,disabled:r,error:a}=e,i=S(n=>e.dispatchEvent(new CustomEvent("change",{detail:n.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Z(!!o)}
			?disabled=${r}
			@change=${i}
		/>
		${k(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${k(a,n=>f`<div class="failure">${n}</div>`)} `},Me=F`
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
`,Be=F`
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
`;customElements.define("cosmoz-toggle",I(_e,{styleSheets:[Be,Me],observedAttributes:["disabled"]}));const Ye=F`
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
`,De=()=>M,Fe=I(De,{styleSheets:[Ye]});customElements.define("cosmoz-spinner",Fe);const He=F`
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
	.retry,
	.link {
		pointer-events: auto;
		border: 0;
		padding: 0;
		background: none;
		font: inherit;
		color: var(--cz-color-text-brand-primary);
		cursor: pointer;
		text-decoration: underline;
	}
	.retry:focus-visible,
	.link:focus-visible {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	@media (max-width: 480px) {
		.header {
			margin-inline: calc(var(--cz-spacing) * 4);
		}
	}
`,qe=(e,t)=>{const[o,r]=g([]),[a,i]=g(!0),[n,p]=g(),l=B(0);return y(()=>{const s=(l.current??0)+1;l.current=s,i(!0),p(void 0),Promise.resolve().then(e).then(d=>{s===l.current&&(r(d??[]),i(!1))},d=>{s===l.current&&(r([]),p(d),i(!1))})},t),{nodes:o,loading:a,error:n}},V=(e,t)=>{const o=new Map(t.map(a=>[a.pathLocator,a])),r=new Map;for(const a of o.values()){const i=e.parentOf(a);if(i===a.pathLocator)continue;const n=r.get(i)??[];n.push(a),r.set(i,n)}return{roots:[...o.values()].filter(a=>e.parentOf(a)===a.pathLocator||!o.has(e.parentOf(a))),getChildren:a=>r.get(a.pathLocator)??[],expanded:[...r.keys()].filter(a=>o.has(a))}},Ue=e=>{const t=new Map;let o=V(e,[]);const r=new Map,a=new Map,i=new Set,n=new Set,p=()=>n.forEach(s=>s()),l=s=>{for(const d of s)t.set(d.pathLocator,d);o=V(e,[...t.values()])};return{subscribe:s=>(n.add(s),()=>{n.delete(s)}),roots:()=>{const s=r.get("")??[],d=new Set(s.map(h=>h.pathLocator));return[...s,...o.roots.filter(h=>!d.has(h.pathLocator))]},getChildren:s=>r.get(s.pathLocator)??o.getChildren(s),hasChildren:s=>r.has(s.pathLocator)?r.get(s.pathLocator).length>0:e.hasChildren(s)!==!1,pending:a,errors:i,loadPath:async s=>{const d=await e.getPath(s);return l(d),p(),d},loadLevel:s=>{if(r.has(s))return Promise.resolve();const d=a.get(s);if(d)return d;i.delete(s);const h=Promise.resolve().then(()=>e.getLevel(s)).then(m=>{r.set(s,m),l(m)},()=>{i.add(s)}).finally(()=>{a.delete(s),p()});return a.set(s,h),p(),h}}},je=async(e,t,o="")=>{const r=await e.search(t,o),a=n=>!o||n.pathLocator===o||n.pathLocator.startsWith(`${o}.`),i=await Promise.all(r.map(async n=>{try{return[...await e.getPath(n.pathLocator),n]}catch{return[n]}}));return{...V(e,i.flat().filter(a)),matches:r.length}},Ve=(e,t,o)=>{const[,r]=g(0),a=D(()=>Ue(e),[e,o]),[i,n]=g([]),[p,l]=g(""),[s,d]=g(),[h,m]=g(!1),[u,b]=g(!1),[A,T]=g(0);return y(()=>a.subscribe(()=>r(v=>v+1)),[a]),y(()=>{if(l(""),n([]),d(void 0),o===!1)return;const v=new AbortController;return b(!0),m(!1),(t?a.loadPath(t):Promise.resolve([])).then(async w=>{if(v.signal.aborted)return;const E=w[w.length-1];if(E?.pathLocator===t)d(E),n([t]),l(t),e.hasChildren(E)!==!1&&await a.loadLevel(t);else if(E)n(w.map(z=>z.pathLocator)),await Promise.all([a.loadLevel(""),...w.filter(z=>e.hasChildren(z)!==!1).map(z=>a.loadLevel(z.pathLocator))]);else{if(await a.loadLevel(""),v.signal.aborted)return;const z=a.roots();n(z.map(C=>C.pathLocator)),await Promise.all(z.filter(C=>e.hasChildren(C)!==!1).map(C=>a.loadLevel(C.pathLocator)))}},()=>{v.signal.aborted||m(!0)}).finally(()=>{v.signal.aborted||b(!1)}),()=>v.abort()},[a,t,A]),{model:a,expanded:i,setExpanded:n,highlighted:p,setHighlighted:l,scope:s,setScope:d,error:h,loading:u,retry:()=>T(v=>v+1)}},Ze=(e,t,o="")=>{const[r,a]=g(),[i,n]=g(!1),[p,l]=g(!1),[s,d]=g(0);return y(()=>{const h=new AbortController;if(l(!1),!t){a(void 0),n(!1);return}return n(!0),a(void 0),je(e,t,o).then(m=>{h.signal.aborted||a(m)},()=>{h.signal.aborted||(a(void 0),l(!0))}).finally(()=>{h.signal.aborted||n(!1)}),()=>h.abort()},[e,t,o,s]),{found:r,loading:i,error:p,retry:()=>d(h=>h+1)}},Qe=(e,t)=>{const o=t.pathLocator||t.path||"",{pathLocatorSeparator:r}=e;return o.includes(r)?o.substring(0,o.lastIndexOf(r)):o},We=(e,t)=>{if(!e)return;const o=e.getNodeByPathLocator(t),r=o?e.getChildren(o):[],{searchProperty:a}=e,i=(n,p)=>{if(e.hasChildren(n)){if(!e.hasChildren(p))return-1}else if(e.hasChildren(p))return 1;const l=n[a],s=p[a];return l>s?1:l<s?-1:0};return r.length>0?r.sort(i):o},ee=(e,t,o)=>{if(!e)return[];const r=We(e,o);return t?e.searchNodes(t,r,!1):r},Xe=(e,t)=>{if(!t||!e)return[];const o=t.getPathNodes(e);return o?o.filter(r=>r!==void 0):[]},Ge=e=>({getLevel:t=>{const o=ee(e,"",t);return Array.isArray(o)?o:[]},getPath:t=>Xe(t,e),search:(t,o)=>ee(e,t,o),hasChildren:t=>e?.hasChildren(t),label:t=>(e?t[e.searchProperty]:"")??"",pathLabel:t=>e?.getPathString(t,e.searchProperty),parentOf:t=>e?Qe(e,t):"",scopedSearch:!0}),Je=(e,t,o)=>{const[r,a]=g("");return y(()=>{const i=setTimeout(()=>{const n=e.trim();a(n.length>=t?n:"")},o);return()=>clearTimeout(i)},[e,t,o]),e.trim().length>=t?r:""},Ke=({tree:e,source:t,searchMinLength:o=3,searchDebounceTimeout:r=500,opened:a})=>{const i=Ee(),n=B(),p=B(),[l,s]=ke("nodePath",""),d=D(()=>t??Ge(e),[t,e]),[h,m]=g(""),u=Je(h,o,r),{model:b,expanded:A,setExpanded:T,highlighted:v,setHighlighted:N,scope:w,setScope:E,error:z,loading:C,retry:ie}=Ve(d,l,a),[le,Q]=g(!1);y(()=>Q(!1),[a,w]);const W=d.scopedSearch&&!le?w?.pathLocator??"":"",P=Ze(d,u,W),[ce,X]=g([]),{nodes:O}=qe(()=>v?d.getPath(v):[],[d,v]);y(()=>{X(P.found?.expanded??[])},[P.found]),y(()=>{a&&(m(""),p.current?.focus())},[a]),y(()=>{j(i,"highlightedNodePath",v)},[v]),y(()=>{u&&N("")},[u]);const G=S(c=>{c&&s(c)},[]),de=u?P.loading:C||b.pending.size>0,pe=u?P.error:z||b.errors.size>0,he=w?[w]:b.roots(),H=u?P.found?.roots??[]:he,ue=c=>{if(u){X(c);return}for(const L of c)A.includes(L)||b.loadLevel(L);T(c)},fe=()=>{if(u){P.retry();return}if(z){ie();return}for(const c of b.errors)b.loadLevel(c)},ge=(c,L)=>{const{pathLocator:q}=c;N(q),!u&&(w&&L===0?(E(void 0),b.loadLevel("")):w&&L<O.findIndex(U=>U.pathLocator===w.pathLocator)&&E(c),T(U=>[...new Set([...U,q])]),b.loadLevel(q))};return f`
		<div class="header">
			<cosmoz-input
				data-testid="search-input"
				${Y(c=>{p.current=c})}
				label=${x("Search nodes")}
				.value=${h}
				.placeholder=${x("Search nodes")}
				@input=${c=>m(c.target.value)}
				@keydown=${c=>{c.key==="ArrowDown"?(c.preventDefault(),n.current?.focusActiveItem()):c.key==="Enter"&&(c.preventDefault(),G(v))}}
			>
				${Le({slot:"prefix",width:"20",height:"20"})}
			</cosmoz-input>
			<div class="crumbs">
				${k(O.length,()=>f`<nav class="path" aria-label=${x("Path")} data-testid="path">
							${O.map((c,L)=>f`${L?f`<span class="slash" aria-hidden="true">/</span>`:M}<button
											type="button"
											class="crumb"
											aria-current=${L===O.length-1?"location":M}
											title=${d.label(c)}
											@click=${()=>ge(c,L)}
										>
											${d.label(c)}
										</button>`)}
						</nav>`,()=>f`<span class="hint"
							>${u?x("Pick a node from the results."):x("Search, or browse the tree.")}</span
						>`)}
			</div>
		</div>
		<div class="list">
			<cosmoz-treenode-tree-view
				class="items"
				data-testid="tree"
				label=${x("Nodes")}
				.items=${H}
				.getId=${c=>c.pathLocator}
				.getLabel=${d.label}
				.getChildren=${u?P.found?.getChildren:b.getChildren}
				.hasChildren=${u?c=>(P.found?.getChildren(c).length??0)>0:b.hasChildren}
				.expanded=${u?ce:A}
				.selected=${v||void 0}
				@expanded-changed=${c=>{c.preventDefault(),ue(c.detail.value)}}
				@selected-changed=${c=>{c.preventDefault(),N(c.detail.value)}}
				@activate=${c=>G(c.detail.id)}
				${Y(c=>{n.current=c})}
			></cosmoz-treenode-tree-view>
			<div
				class="status"
				?data-over=${H.length>0}
				role="status"
				aria-live="polite"
			>
				${k(pe,()=>f`<span data-testid="error">${x("Could not load nodes.")}</span
							><button class="retry" type="button" @click=${fe}>
								${x("Try again")}
							</button>`,()=>k(de,()=>f`<cosmoz-spinner
									data-testid="loading"
									role="img"
									aria-label=${x("Loading...")}
								></cosmoz-spinner>`,()=>f`${k(!H.length,()=>f`<span data-testid=${u?"no-results":"empty"}
											>${u?x("No nodes match the search"):x("Search to find a node.")}</span
										>`)}${k(u&&W,()=>f`<button
											class="link"
											type="button"
											data-testid="search-everywhere"
											@click=${()=>Q(!0)}
										>
											${x("Search all nodes")}
										</button>`)}`))}
			</div>
		</div>
	`};customElements.define("cosmoz-treenode-navigator",I(Ke,{styleSheets:[He]}));export{Ge as t,qe as u};
