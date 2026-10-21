import{j as ie,k as le,t as S,n as P,i as O,m as ce,H as de,b as Y,e as C,p as pe,d as m,c as R,s as Z,f as M,o as z,a as _,u as h,h as ue}from"./tree-view-RGkjNuVu.js";import{f as he,E as I,A as N,p as fe,b as f,t as w}from"./iframe-dIFRFSO3.js";const q=ie(class extends le{constructor(e){if(super(e),e.type!==S.PROPERTY&&e.type!==S.ATTRIBUTE&&e.type!==S.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!he(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===I||t===N)return t;const o=e.element,r=e.name;if(e.type===S.PROPERTY){if(t===o[r])return I}else if(e.type===S.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return I}else if(e.type===S.ATTRIBUTE&&o.getAttribute(r)===t+"")return I;return fe(e),t}}),G=(e,{label:t,invalid:o,errorMessage:r})=>f`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${P(t,()=>f`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${P(o&&r,()=>f`<div class="error" part="error">${r}</div>`)}
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
`,ge=e=>O(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),ve=ce(class extends de{update(){return this.state.host}}),be=/([A-Z])/gu,F=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(be,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},ee=e=>{const t=Y(void 0),o=C(s=>t.current=s,[]),r=e.shadowRoot,a=C(s=>e.dispatchEvent(new Event(s.type,{bubbles:s.bubbles})),[]),i=C(s=>F(e,"value",s.target.value),[]),c=C(s=>F(e,"focused",s.type==="focus"),[]),p=C(()=>{const s=t.current?.checkValidity();return e.toggleAttribute("invalid",!s),s},[]);return pe({validate:p},[p]),m(()=>{const s=()=>{e.matches(":focus-within")||e.focus()};return r.addEventListener("mousedown",s),()=>r.removeEventListener("mousedown",s)},[]),{onChange:a,onFocus:c,onInput:i,onRef:o}},me=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",ye=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...J],xe=e=>{const{type:t="text",pattern:o,allowedPattern:r,autocomplete:a,value:i,readonly:c,disabled:p,min:s,max:n,step:d,maxlength:b}=e,{onChange:u,onFocus:g,onInput:A,onRef:v}=ee(e),y=ge(r);return G(f`
			<input
				${M(v)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${z(o)}
				autocomplete=${z(a)}
				placeholder=${me(e)}
				?readonly=${c}
				?aria-disabled=${p}
				?disabled=${p}
				.value=${q(i??"")}
				maxlength=${z(b)}
				@beforeinput=${y}
				@input=${A}
				@change=${u}
				@focus=${g}
				@blur=${g}
				min=${z(s)}
				max=${z(n)}
				step=${z(d)}
			/>
		`,e)};customElements.define("cosmoz-input",R(xe,{observedAttributes:ye,styleSheets:[Z(W)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Q=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},we=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",r=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=r,e.setAttribute("rows",o)}},ze=e=>{const{value:t,maxRows:o}=e,r=O(()=>()=>e.shadowRoot.querySelector("#input"),[]);m(()=>we(r(),o),[o,r]),m(()=>Q(r()),[r,t]),m(()=>{const a=r(),i=new ResizeObserver(()=>requestAnimationFrame(()=>Q(a)));return i.observe(a),()=>i.unobserve(a)},[r])},$e=["rows","placeholder",...J],ke=e=>{const{autocomplete:t,value:o,placeholder:r,readonly:a,disabled:i,rows:c,cols:p,maxlength:s}=e,{onChange:n,onFocus:d,onInput:b,onRef:u}=ee(e);return ze(e),G(f`
			<textarea id="input" part="input"
				${M(u)}
				autocomplete=${z(t)}
				placeholder=${r||" "}
				rows=${c??1} cols=${z(p)}
				?readonly=${a} ?aria-disabled=${i} ?disabled=${i}
				.value=${q(o??"")} maxlength=${z(s)} @input=${b}
				@change=${n} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",R(ke,{observedAttributes:$e,styleSheets:[Z(W)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Pe=e=>{const{label:t,value:o,disabled:r,error:a}=e,i=C(c=>e.dispatchEvent(new CustomEvent("change",{detail:c.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${q(!!o)}
			?disabled=${r}
			@change=${i}
		/>
		${P(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${P(a,c=>f`<div class="failure">${c}</div>`)} `},Le=_`
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
`,Ee=_`
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
`;customElements.define("cosmoz-toggle",R(Pe,{styleSheets:[Ee,Le],observedAttributes:["disabled"]}));const Ce=_`
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
`,Ae=()=>N,Se=R(Ae,{styleSheets:[Ce]});customElements.define("cosmoz-spinner",Se);const Te=_`
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
`,Re=(e,t)=>{const[o,r]=h([]),[a,i]=h(!0),[c,p]=h(),s=Y(0);return m(()=>{const n=(s.current??0)+1;s.current=n,i(!0),p(void 0),Promise.resolve().then(e).then(d=>{n===s.current&&(r(d??[]),i(!1))},d=>{n===s.current&&(r([]),p(d),i(!1))})},t),{nodes:o,loading:a,error:c}},H=(e,t)=>{const o=new Map(t.map(a=>[a.pathLocator,a])),r=new Map;for(const a of o.values()){const i=e.parentOf(a);if(i===a.pathLocator)continue;const c=r.get(i)??[];c.push(a),r.set(i,c)}return{roots:[...o.values()].filter(a=>e.parentOf(a)===a.pathLocator||!o.has(e.parentOf(a))),getChildren:a=>r.get(a.pathLocator)??[],expanded:[...r.keys()].filter(a=>o.has(a))}},Ie=e=>{const t=new Map;let o=H(e,[]);const r=new Map,a=new Map,i=new Set,c=new Set,p=()=>c.forEach(n=>n()),s=n=>{for(const d of n)t.set(d.pathLocator,d);o=H(e,[...t.values()])};return{subscribe:n=>(c.add(n),()=>{c.delete(n)}),roots:()=>o.roots,getChildren:n=>r.get(n.pathLocator)??o.getChildren(n),hasChildren:n=>r.has(n.pathLocator)?r.get(n.pathLocator).length>0:e.hasChildren(n)!==!1,pending:a,errors:i,loadPath:async n=>{const d=await e.getPath(n);return s(d),p(),d},loadLevel:n=>{if(r.has(n))return Promise.resolve();const d=a.get(n);if(d)return d;i.delete(n);const b=Promise.resolve().then(()=>e.getLevel(n)).then(u=>{r.set(n,u),s(u)},()=>{i.add(n)}).finally(()=>{a.delete(n),p()});return a.set(n,b),p(),b}}},Ne=async(e,t)=>{const o=await e.search(t,""),r=await Promise.all(o.map(async a=>{try{return[...await e.getPath(a.pathLocator),a]}catch{return[a]}}));return{...H(e,r.flat()),matches:o.length}},Oe=(e,t,o)=>{const[,r]=h(0),a=O(()=>Ie(e),[e,o]),[i,c]=h([]),[p,s]=h(""),[n,d]=h(!1),[b,u]=h(!1),[g,A]=h(0);return m(()=>a.subscribe(()=>r(v=>v+1)),[a]),m(()=>{if(s(""),c([]),o===!1)return;const v=new AbortController;return u(!0),d(!1),(t?a.loadPath(t):Promise.resolve([])).then(async $=>{if(v.signal.aborted)return;const T=$[$.length-1];if(c($.map(x=>x.pathLocator)),s(T?.pathLocator===t?t:""),T)await Promise.all($.filter(x=>e.hasChildren(x)!==!1).map(x=>a.loadLevel(x.pathLocator)));else{if(await a.loadLevel(""),v.signal.aborted)return;const x=a.roots();c(x.map(L=>L.pathLocator)),await Promise.all(x.filter(L=>e.hasChildren(L)!==!1).map(L=>a.loadLevel(L.pathLocator)))}},()=>{v.signal.aborted||d(!0)}).finally(()=>{v.signal.aborted||u(!1)}),()=>v.abort()},[a,t,g]),{model:a,expanded:i,setExpanded:c,highlighted:p,setHighlighted:s,error:n,loading:b,retry:()=>A(v=>v+1)}},_e=(e,t)=>{const[o,r]=h(),[a,i]=h(!1),[c,p]=h(!1),[s,n]=h(0);return m(()=>{const d=new AbortController;if(p(!1),!t){r(void 0),i(!1);return}return i(!0),r(void 0),Ne(e,t).then(b=>{d.signal.aborted||r(b)},()=>{d.signal.aborted||(r(void 0),p(!0))}).finally(()=>{d.signal.aborted||i(!1)}),()=>d.abort()},[e,t,s]),{found:o,loading:a,error:c,retry:()=>n(d=>d+1)}},Be=(e,t)=>{const o=t.pathLocator||t.path||"",{pathLocatorSeparator:r}=e;return o.includes(r)?o.substring(0,o.lastIndexOf(r)):o},De=(e,t)=>{if(!e)return;const o=e.getNodeByPathLocator(t),r=o?e.getChildren(o):[],{searchProperty:a}=e,i=(c,p)=>{if(e.hasChildren(c)){if(!e.hasChildren(p))return-1}else if(e.hasChildren(p))return 1;const s=c[a],n=p[a];return s>n?1:s<n?-1:0};return r.length>0?r.sort(i):o},X=(e,t,o)=>{if(!e)return[];const r=De(e,o);return t?e.searchNodes(t,r,!1):r},Fe=(e,t)=>{if(!t||!e)return[];const o=t.getPathNodes(e);return o?o.filter(r=>r!==void 0):[]},He=e=>({getLevel:t=>{const o=X(e,"",t);return Array.isArray(o)?o:[]},getPath:t=>Fe(t,e),search:(t,o)=>X(e,t,o),hasChildren:t=>e?.hasChildren(t),label:t=>(e?t[e.searchProperty]:"")??"",pathLabel:t=>e?.getPathString(t,e.searchProperty),parentOf:t=>e?Be(e,t):"",scopedSearch:!0}),Ye=(e,t,o)=>{const[r,a]=h("");return m(()=>{const i=setTimeout(()=>{const c=e.trim();a(c.length>=t?c:"")},o);return()=>clearTimeout(i)},[e,t,o]),e.trim().length>=t?r:""},Me=({tree:e,source:t,searchMinLength:o=3,searchDebounceTimeout:r=500,opened:a})=>{const i=ve(),c=Y(),[p,s]=ue("nodePath",""),n=O(()=>t??He(e),[t,e]),[d,b]=h(""),u=Ye(d,o,r),{model:g,expanded:A,setExpanded:v,highlighted:y,setHighlighted:$,error:T,loading:x,retry:L}=Oe(n,p,a),k=_e(n,u),[te,U]=h([]),{nodes:B}=Re(()=>y?n.getPath(y):[],[n,y]);m(()=>{U(k.found?.expanded??[])},[k.found]),m(()=>{a&&b("")},[a]),m(()=>{F(i,"highlightedNodePath",y)},[y]),m(()=>{u&&$("")},[u]);const j=C(l=>{l&&s(l)},[]),oe=u?k.loading:x||g.pending.size>0,re=u?k.error:T||g.errors.size>0,D=u?k.found?.roots??[]:g.roots(),ae=l=>{if(u){U(l);return}for(const E of l)A.includes(E)||g.loadLevel(E);v(l)},ne=()=>{if(u){k.retry();return}if(T){L();return}for(const l of g.errors)g.loadLevel(l)},se=l=>{$(l),u||(v(E=>[...new Set([...E,l])]),g.loadLevel(l))};return f`
		<div class="header">
			<div class="crumbs">
				${P(B.length,()=>f`<nav class="path" aria-label=${w("Path")} data-testid="path">
							${B.map((l,E)=>f`${E?f`<span class="slash" aria-hidden="true">/</span>`:N}<button
											type="button"
											class="crumb"
											aria-current=${E===B.length-1?"location":N}
											@click=${()=>se(l.pathLocator)}
										>
											${n.label(l)}
										</button>`)}
						</nav>`)}
			</div>
			<cosmoz-input
				autofocus
				data-testid="search-input"
				label=${w("Search nodes")}
				.value=${d}
				.placeholder=${w("Search...")}
				@input=${l=>b(l.target.value)}
				@keydown=${l=>{l.key==="ArrowDown"?(l.preventDefault(),c.current?.focusActiveItem()):l.key==="Enter"&&(l.preventDefault(),j(y))}}
			></cosmoz-input>
		</div>
		<div class="list">
			<cosmoz-treenode-tree-view
				class="items"
				data-testid="tree"
				label=${w("Nodes")}
				.items=${D}
				.getId=${l=>l.pathLocator}
				.getLabel=${n.label}
				.getChildren=${u?k.found?.getChildren:g.getChildren}
				.hasChildren=${u?l=>(k.found?.getChildren(l).length??0)>0:g.hasChildren}
				.expanded=${u?te:A}
				.selected=${y||void 0}
				@expanded-changed=${l=>{l.preventDefault(),ae(l.detail.value)}}
				@selected-changed=${l=>{l.preventDefault(),$(l.detail.value)}}
				@activate=${l=>j(l.detail.id)}
				${M(l=>{c.current=l})}
			></cosmoz-treenode-tree-view>
			<div
				class="status"
				?data-over=${D.length>0}
				role="status"
				aria-live="polite"
			>
				${P(re,()=>f`<span data-testid="error">${w("Could not load nodes.")}</span
							><button class="retry" type="button" @click=${ne}>
								${w("Try again")}
							</button>`,()=>P(oe,()=>f`<cosmoz-spinner
									data-testid="loading"
									role="img"
									aria-label=${w("Loading...")}
								></cosmoz-spinner>`,()=>P(!D.length,()=>f`<span data-testid=${u?"no-results":"empty"}
											>${u?w("No nodes match the search"):w("Search to find a node.")}</span
										>`)))}
			</div>
		</div>
	`};customElements.define("cosmoz-treenode-navigator",R(Me,{styleSheets:[Te]}));export{He as t,Re as u};
