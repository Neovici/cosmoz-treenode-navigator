import{w as le,b as f,f as ce,E as I,A as N,p as de,t as z}from"./iframe-DNEaFNPb.js";import{o as $,n as k,j as pe,k as he,t as S,i as M,m as ue,H as fe,b as O,e as C,p as ge,d as b,c as R,s as X,f as _,a as B,u as g,h as ve}from"./tree-view-gwnpQ5_b.js";const me=({slot:e,title:t,className:o,width:r="24",height:a="24",styles:s}={})=>f`
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
    style=${$(s)}
  >
    ${k(t,()=>le`<title>${t}</title>`)}
    <path d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
  </svg>
`;const q=pe(class extends he{constructor(e){if(super(e),e.type!==S.PROPERTY&&e.type!==S.ATTRIBUTE&&e.type!==S.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ce(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===I||t===N)return t;const o=e.element,r=e.name;if(e.type===S.PROPERTY){if(t===o[r])return I}else if(e.type===S.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return I}else if(e.type===S.ATTRIBUTE&&o.getAttribute(r)===t+"")return I;return de(e),t}}),G=(e,{label:t,invalid:o,errorMessage:r})=>f`
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
`,be=e=>M(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),ye=ue(class extends fe{update(){return this.state.host}}),xe=/([A-Z])/gu,F=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(xe,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},ee=e=>{const t=O(void 0),o=C(l=>t.current=l,[]),r=e.shadowRoot,a=C(l=>e.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),s=C(l=>F(e,"value",l.target.value),[]),d=C(l=>F(e,"focused",l.type==="focus"),[]),p=C(()=>{const l=t.current?.checkValidity();return e.toggleAttribute("invalid",!l),l},[]);return ge({validate:p},[p]),b(()=>{const l=()=>{e.matches(":focus-within")||e.focus()};return r.addEventListener("mousedown",l),()=>r.removeEventListener("mousedown",l)},[]),{onChange:a,onFocus:d,onInput:s,onRef:o}},we=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",ze=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...J],$e=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:a,value:s,readonly:d,disabled:p,min:l,max:n,step:c,maxlength:u}=e,{onChange:y,onFocus:h,onInput:m,onRef:v}=ee(e),T=be(r);return G(f`
			<input
				${_(v)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${$(o)}
				autocomplete=${$(a)}
				placeholder=${we(e)}
				?readonly=${d}
				?aria-disabled=${p}
				?disabled=${p}
				.value=${q(s??"")}
				maxlength=${$(u)}
				@beforeinput=${T}
				@input=${m}
				@change=${y}
				@focus=${h}
				@blur=${h}
				min=${$(l)}
				max=${$(n)}
				step=${$(c)}
			/>
		`,e)};customElements.define("cosmoz-input",R($e,{observedAttributes:ze,styleSheets:[X(W)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Z=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},ke=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},Pe=e=>{const{value:t,maxRows:o}=e,r=M(()=>()=>e.shadowRoot.querySelector("#input"),[]);b(()=>ke(r(),o),[o,r]),b(()=>Z(r()),[r,t]),b(()=>{const a=r(),s=new ResizeObserver(()=>requestAnimationFrame(()=>Z(a)));return s.observe(a),()=>s.unobserve(a)},[r])},Le=["rows","placeholder",...J],Ee=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:a,disabled:s,rows:d,cols:p,maxlength:l}=e,{onChange:n,onFocus:c,onInput:u,onRef:y}=ee(e);return Pe(e),G(f`
			<textarea id="input" part="input"
				${_(y)}
				autocomplete=${$(t)}
				placeholder=${r||" "}
				rows=${d??1} cols=${$(p)}
				?readonly=${a} ?aria-disabled=${s} ?disabled=${s}
				.value=${q(o??"")} maxlength=${$(l)} @input=${u}
				@change=${n} @focus=${c} @blur=${c}>`,e)};customElements.define("cosmoz-textarea",R(Ee,{observedAttributes:Le,styleSheets:[X(W)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ce=e=>{const{label:t,value:o,disabled:r,error:a}=e,s=C(d=>e.dispatchEvent(new CustomEvent("change",{detail:d.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${q(!!o)}
			?disabled=${r}
			@change=${s}
		/>
		${k(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${k(a,d=>f`<div class="failure">${d}</div>`)} `},Ae=B`
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
`,Se=B`
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
`;customElements.define("cosmoz-toggle",R(Ce,{styleSheets:[Se,Ae],observedAttributes:["disabled"]}));const Te=B`
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
`,Re=()=>N,Ie=R(Re,{styleSheets:[Te]});customElements.define("cosmoz-spinner",Ie);const Ne=B`
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

	/* Reserved while the path loads, so the list below doesn't shift. */
	.crumbs {
		min-height: 1lh;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.path {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 2px;
		color: var(--cz-color-text-tertiary);
	}

	.hint {
		color: var(--cz-color-text-tertiary);
	}

	.slash {
		color: var(--cz-color-text-quaternary);
	}

	.crumb {
		all: unset;
		cursor: pointer;
		padding: 0 4px;
		border-radius: var(--cz-radius-xs);
		font-weight: var(--cz-font-weight-medium);
	}

	.crumb:hover {
		color: var(--cz-color-text-secondary-hover);
		background: var(--cz-color-bg-primary-hover);
	}

	.crumb:focus-visible {
		box-shadow: var(--cz-focus-ring);
	}

	.crumb[aria-current] {
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
`,Oe=(e,t)=>{const[o,r]=g([]),[a,s]=g(!0),[d,p]=g(),l=O(0);return b(()=>{const n=(l.current??0)+1;l.current=n,s(!0),p(void 0),Promise.resolve().then(e).then(c=>{n===l.current&&(r(c??[]),s(!1))},c=>{n===l.current&&(r([]),p(c),s(!1))})},t),{nodes:o,loading:a,error:d}},H=(e,t)=>{const o=new Map(t.map(a=>[a.pathLocator,a])),r=new Map;for(const a of o.values()){const s=e.parentOf(a);if(s===a.pathLocator)continue;const d=r.get(s)??[];d.push(a),r.set(s,d)}return{roots:[...o.values()].filter(a=>e.parentOf(a)===a.pathLocator||!o.has(e.parentOf(a))),getChildren:a=>r.get(a.pathLocator)??[],expanded:[...r.keys()].filter(a=>o.has(a))}},_e=e=>{const t=new Map;let o=H(e,[]);const r=new Map,a=new Map,s=new Set,d=new Set,p=()=>d.forEach(n=>n()),l=n=>{for(const c of n)t.set(c.pathLocator,c);o=H(e,[...t.values()])};return{subscribe:n=>(d.add(n),()=>{d.delete(n)}),roots:()=>{const n=r.get("")??[],c=new Set(n.map(u=>u.pathLocator));return[...n,...o.roots.filter(u=>!c.has(u.pathLocator))]},getChildren:n=>r.get(n.pathLocator)??o.getChildren(n),hasChildren:n=>r.has(n.pathLocator)?r.get(n.pathLocator).length>0:e.hasChildren(n)!==!1,pending:a,errors:s,loadPath:async n=>{const c=await e.getPath(n);return l(c),p(),c},loadLevel:n=>{if(r.has(n))return Promise.resolve();const c=a.get(n);if(c)return c;s.delete(n);const u=Promise.resolve().then(()=>e.getLevel(n)).then(y=>{r.set(n,y),l(y)},()=>{s.add(n)}).finally(()=>{a.delete(n),p()});return a.set(n,u),p(),u}}},Me=async(e,t)=>{const o=await e.search(t,""),r=await Promise.all(o.map(async a=>{try{return[...await e.getPath(a.pathLocator),a]}catch{return[a]}}));return{...H(e,r.flat()),matches:o.length}},Be=(e,t,o)=>{const[,r]=g(0),a=M(()=>_e(e),[e,o]),[s,d]=g([]),[p,l]=g(""),[n,c]=g(!1),[u,y]=g(!1),[h,m]=g(0);return b(()=>a.subscribe(()=>r(v=>v+1)),[a]),b(()=>{if(l(""),d([]),o===!1)return;const v=new AbortController;return y(!0),c(!1),(t?a.loadPath(t):Promise.resolve([])).then(async x=>{if(v.signal.aborted)return;const A=x[x.length-1];if(d(x.map(w=>w.pathLocator)),l(A?.pathLocator===t?t:""),A)await Promise.all([a.loadLevel(""),...x.filter(w=>e.hasChildren(w)!==!1).map(w=>a.loadLevel(w.pathLocator))]);else{if(await a.loadLevel(""),v.signal.aborted)return;const w=a.roots();d(w.map(L=>L.pathLocator)),await Promise.all(w.filter(L=>e.hasChildren(L)!==!1).map(L=>a.loadLevel(L.pathLocator)))}},()=>{v.signal.aborted||c(!0)}).finally(()=>{v.signal.aborted||y(!1)}),()=>v.abort()},[a,t,h]),{model:a,expanded:s,setExpanded:d,highlighted:p,setHighlighted:l,error:n,loading:u,retry:()=>m(v=>v+1)}},Ye=(e,t)=>{const[o,r]=g(),[a,s]=g(!1),[d,p]=g(!1),[l,n]=g(0);return b(()=>{const c=new AbortController;if(p(!1),!t){r(void 0),s(!1);return}return s(!0),r(void 0),Me(e,t).then(u=>{c.signal.aborted||r(u)},()=>{c.signal.aborted||(r(void 0),p(!0))}).finally(()=>{c.signal.aborted||s(!1)}),()=>c.abort()},[e,t,l]),{found:o,loading:a,error:d,retry:()=>n(c=>c+1)}},De=(e,t)=>{const o=t.pathLocator||t.path||"",{pathLocatorSeparator:r}=e;return o.includes(r)?o.substring(0,o.lastIndexOf(r)):o},Fe=(e,t)=>{if(!e)return;const o=e.getNodeByPathLocator(t),r=o?e.getChildren(o):[],{searchProperty:a}=e,s=(d,p)=>{if(e.hasChildren(d)){if(!e.hasChildren(p))return-1}else if(e.hasChildren(p))return 1;const l=d[a],n=p[a];return l>n?1:l<n?-1:0};return r.length>0?r.sort(s):o},Q=(e,t,o)=>{if(!e)return[];const r=Fe(e,o);return t?e.searchNodes(t,r,!1):r},He=(e,t)=>{if(!t||!e)return[];const o=t.getPathNodes(e);return o?o.filter(r=>r!==void 0):[]},qe=e=>({getLevel:t=>{const o=Q(e,"",t);return Array.isArray(o)?o:[]},getPath:t=>He(t,e),search:(t,o)=>Q(e,t,o),hasChildren:t=>e?.hasChildren(t),label:t=>(e?t[e.searchProperty]:"")??"",pathLabel:t=>e?.getPathString(t,e.searchProperty),parentOf:t=>e?De(e,t):"",scopedSearch:!0}),Ue=(e,t,o)=>{const[r,a]=g("");return b(()=>{const s=setTimeout(()=>{const d=e.trim();a(d.length>=t?d:"")},o);return()=>clearTimeout(s)},[e,t,o]),e.trim().length>=t?r:""},je=({tree:e,source:t,searchMinLength:o=3,searchDebounceTimeout:r=500,opened:a})=>{const s=ye(),d=O(),p=O(),[l,n]=ve("nodePath",""),c=M(()=>t??qe(e),[t,e]),[u,y]=g(""),h=Ue(u,o,r),{model:m,expanded:v,setExpanded:T,highlighted:x,setHighlighted:A,error:w,loading:L,retry:te}=Be(c,l,a),P=Ye(c,h),[oe,U]=g([]),{nodes:Y}=Oe(()=>x?c.getPath(x):[],[c,x]);b(()=>{U(P.found?.expanded??[])},[P.found]),b(()=>{a&&(y(""),p.current?.focus())},[a]),b(()=>{F(s,"highlightedNodePath",x)},[x]),b(()=>{h&&A("")},[h]);const j=C(i=>{i&&n(i)},[]),re=h?P.loading:L||m.pending.size>0,ae=h?P.error:w||m.errors.size>0,D=h?P.found?.roots??[]:m.roots(),ne=i=>{if(h){U(i);return}for(const E of i)v.includes(E)||m.loadLevel(E);T(i)},se=()=>{if(h){P.retry();return}if(w){te();return}for(const i of m.errors)m.loadLevel(i)},ie=i=>{A(i),h||(T(E=>[...new Set([...E,i])]),m.loadLevel(i))};return f`
		<div class="header">
			<cosmoz-input
				data-testid="search-input"
				${_(i=>{p.current=i})}
				label=${z("Search nodes")}
				.value=${u}
				.placeholder=${z("Search nodes")}
				@input=${i=>y(i.target.value)}
				@keydown=${i=>{i.key==="ArrowDown"?(i.preventDefault(),d.current?.focusActiveItem()):i.key==="Enter"&&(i.preventDefault(),j(x))}}
			>
				${me({slot:"prefix",width:"20",height:"20"})}
			</cosmoz-input>
			<div class="crumbs">
				${k(Y.length,()=>f`<nav class="path" aria-label=${z("Path")} data-testid="path">
							${Y.map((i,E)=>f`${E?f`<span class="slash" aria-hidden="true">/</span>`:N}<button
											type="button"
											class="crumb"
											aria-current=${E===Y.length-1?"location":N}
											@click=${()=>ie(i.pathLocator)}
										>
											${c.label(i)}
										</button>`)}
						</nav>`,()=>f`<span class="hint"
							>${h?z("Pick a node from the results."):z("Search, or browse the tree.")}</span
						>`)}
			</div>
		</div>
		<div class="list">
			<cosmoz-treenode-tree-view
				class="items"
				data-testid="tree"
				label=${z("Nodes")}
				.items=${D}
				.getId=${i=>i.pathLocator}
				.getLabel=${c.label}
				.getChildren=${h?P.found?.getChildren:m.getChildren}
				.hasChildren=${h?i=>(P.found?.getChildren(i).length??0)>0:m.hasChildren}
				.expanded=${h?oe:v}
				.selected=${x||void 0}
				@expanded-changed=${i=>{i.preventDefault(),ne(i.detail.value)}}
				@selected-changed=${i=>{i.preventDefault(),A(i.detail.value)}}
				@activate=${i=>j(i.detail.id)}
				${_(i=>{d.current=i})}
			></cosmoz-treenode-tree-view>
			<div
				class="status"
				?data-over=${D.length>0}
				role="status"
				aria-live="polite"
			>
				${k(ae,()=>f`<span data-testid="error">${z("Could not load nodes.")}</span
							><button class="retry" type="button" @click=${se}>
								${z("Try again")}
							</button>`,()=>k(re,()=>f`<cosmoz-spinner
									data-testid="loading"
									role="img"
									aria-label=${z("Loading...")}
								></cosmoz-spinner>`,()=>k(!D.length,()=>f`<span data-testid=${h?"no-results":"empty"}
											>${h?z("No nodes match the search"):z("Search to find a node.")}</span
										>`)))}
			</div>
		</div>
	`};customElements.define("cosmoz-treenode-navigator",R(je,{styleSheets:[Ne]}));export{qe as t,Oe as u};
