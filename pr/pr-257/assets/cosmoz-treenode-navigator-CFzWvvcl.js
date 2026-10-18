import{j as ie,k as le,t as T,n as P,i as I,m as ce,H as de,b as F,e as C,p as ue,d as m,c as N,s as Z,f as H,o as z,a as Y,u as h,h as pe}from"./tree-view-DaxZbWmL.js";import{f as he,E as R,A as _,p as fe,b as f,t as w}from"./iframe-DNzSCrex.js";const M=ie(class extends le{constructor(e){if(super(e),e.type!==T.PROPERTY&&e.type!==T.ATTRIBUTE&&e.type!==T.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!he(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===R||t===_)return t;const o=e.element,a=e.name;if(e.type===T.PROPERTY){if(t===o[a])return R}else if(e.type===T.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(a))return R}else if(e.type===T.ATTRIBUTE&&o.getAttribute(a)===t+"")return R;return fe(e),t}}),G=(e,{label:t,invalid:o,errorMessage:a})=>f`
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
		${P(o&&a,()=>f`<div class="error" part="error">${a}</div>`)}
	`,J=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],K=(e,...t)=>e.flatMap((o,a)=>[o,t[a]??""]).join(""),V=K`
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
`,ge=e=>I(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),ve=ce(class extends de{update(){return this.state.host}}),be=/([A-Z])/gu,B=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(be,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},ee=e=>{const t=F(void 0),o=C(s=>t.current=s,[]),a=e.shadowRoot,r=C(s=>e.dispatchEvent(new Event(s.type,{bubbles:s.bubbles})),[]),i=C(s=>B(e,"value",s.target.value),[]),c=C(s=>B(e,"focused",s.type==="focus"),[]),u=C(()=>{const s=t.current?.checkValidity();return e.toggleAttribute("invalid",!s),s},[]);return ue({validate:u},[u]),m(()=>{const s=()=>{e.matches(":focus-within")||e.focus()};return a.addEventListener("mousedown",s),()=>a.removeEventListener("mousedown",s)},[]),{onChange:r,onFocus:c,onInput:i,onRef:o}},me=({placeholder:e,noLabelFloat:t,label:o})=>(t?o:void 0)||e||" ",ye=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...J],xe=e=>{const{type:t="text",pattern:o,allowedPattern:a,autocomplete:r,value:i,readonly:c,disabled:u,min:s,max:n,step:d,maxlength:b}=e,{onChange:p,onFocus:g,onInput:A,onRef:v}=ee(e),y=ge(a);return G(f`
			<input
				${H(v)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${z(o)}
				autocomplete=${z(r)}
				placeholder=${me(e)}
				?readonly=${c}
				?aria-disabled=${u}
				?disabled=${u}
				.value=${M(i??"")}
				maxlength=${z(b)}
				@beforeinput=${y}
				@input=${A}
				@change=${p}
				@focus=${g}
				@blur=${g}
				min=${z(s)}
				max=${z(n)}
				step=${z(d)}
			/>
		`,e)};customElements.define("cosmoz-input",N(xe,{observedAttributes:ye,styleSheets:[Z(W)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Q=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},we=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",a=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=a,e.setAttribute("rows",o)}},ze=e=>{const{value:t,maxRows:o}=e,a=I(()=>()=>e.shadowRoot.querySelector("#input"),[]);m(()=>we(a(),o),[o,a]),m(()=>Q(a()),[a,t]),m(()=>{const r=a(),i=new ResizeObserver(()=>requestAnimationFrame(()=>Q(r)));return i.observe(r),()=>i.unobserve(r)},[a])},$e=["rows","placeholder",...J],ke=e=>{const{autocomplete:t,value:o,placeholder:a,readonly:r,disabled:i,rows:c,cols:u,maxlength:s}=e,{onChange:n,onFocus:d,onInput:b,onRef:p}=ee(e);return ze(e),G(f`
			<textarea id="input" part="input"
				${H(p)}
				autocomplete=${z(t)}
				placeholder=${a||" "}
				rows=${c??1} cols=${z(u)}
				?readonly=${r} ?aria-disabled=${i} ?disabled=${i}
				.value=${M(o??"")} maxlength=${z(s)} @input=${b}
				@change=${n} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",N(ke,{observedAttributes:$e,styleSheets:[Z(W)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Pe=e=>{const{label:t,value:o,disabled:a,error:r}=e,i=C(c=>e.dispatchEvent(new CustomEvent("change",{detail:c.target.checked})),[]);return f`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${M(!!o)}
			?disabled=${a}
			@change=${i}
		/>
		${P(t,()=>f`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${P(r,c=>f`<div class="failure">${c}</div>`)} `},Le=Y`
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
`,Ee=Y`
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
`;customElements.define("cosmoz-toggle",N(Pe,{styleSheets:[Ee,Le],observedAttributes:["disabled"]}));const Ce=Y`
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

	.path {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 2px;
		min-height: var(--cz-text-sm-line-height);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
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

	.items {
		height: var(--cosmoz-treenode-navigator-list-height, min(44dvh, 24rem));
		margin: 0 8px;
	}

	.status {
		margin: 0 calc(var(--cz-spacing) * 5);
		min-height: var(--cz-text-sm-line-height);
		padding-block: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-tertiary);
		font-size: var(--cz-text-sm);
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
	}
	.status:empty {
		display: none;
	}
	.retry {
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
		.header,
		.status {
			margin-inline: calc(var(--cz-spacing) * 4);
		}
	}
`,Ae=(e,t)=>{const[o,a]=h([]),[r,i]=h(!0),[c,u]=h(),s=F(0);return m(()=>{const n=(s.current??0)+1;s.current=n,i(!0),u(void 0),Promise.resolve().then(e).then(d=>{n===s.current&&(a(d??[]),i(!1))},d=>{n===s.current&&(a([]),u(d),i(!1))})},t),{nodes:o,loading:r,error:c}},D=(e,t)=>{const o=new Map(t.map(r=>[r.pathLocator,r])),a=new Map;for(const r of o.values()){const i=e.parentOf(r);if(i===r.pathLocator)continue;const c=a.get(i)??[];c.push(r),a.set(i,c)}return{roots:[...o.values()].filter(r=>e.parentOf(r)===r.pathLocator||!o.has(e.parentOf(r))),getChildren:r=>a.get(r.pathLocator)??[],expanded:[...a.keys()].filter(r=>o.has(r))}},Te=e=>{const t=new Map;let o=D(e,[]);const a=new Map,r=new Map,i=new Set,c=new Set,u=()=>c.forEach(n=>n()),s=n=>{for(const d of n)t.set(d.pathLocator,d);o=D(e,[...t.values()])};return{subscribe:n=>(c.add(n),()=>{c.delete(n)}),roots:()=>o.roots,getChildren:n=>a.get(n.pathLocator)??o.getChildren(n),hasChildren:n=>a.has(n.pathLocator)?a.get(n.pathLocator).length>0:e.hasChildren(n)!==!1,pending:r,errors:i,loadPath:async n=>{const d=await e.getPath(n);return s(d),u(),d},loadLevel:n=>{if(a.has(n))return Promise.resolve();const d=r.get(n);if(d)return d;i.delete(n);const b=Promise.resolve().then(()=>e.getLevel(n)).then(p=>{a.set(n,p),s(p)},()=>{i.add(n)}).finally(()=>{r.delete(n),u()});return r.set(n,b),u(),b}}},Se=async(e,t)=>{const o=await e.search(t,""),a=await Promise.all(o.map(async r=>{try{return[...await e.getPath(r.pathLocator),r]}catch{return[r]}}));return{...D(e,a.flat()),matches:o.length}},Re=(e,t,o)=>{const[,a]=h(0),r=I(()=>Te(e),[e,o]),[i,c]=h([]),[u,s]=h(""),[n,d]=h(!1),[b,p]=h(!1),[g,A]=h(0);return m(()=>r.subscribe(()=>a(v=>v+1)),[r]),m(()=>{if(s(""),c([]),o===!1)return;const v=new AbortController;return p(!0),d(!1),(t?r.loadPath(t):Promise.resolve([])).then(async $=>{if(v.signal.aborted)return;const S=$[$.length-1];if(c($.map(x=>x.pathLocator)),s(S?.pathLocator===t?t:""),S)await Promise.all($.filter(x=>e.hasChildren(x)!==!1).map(x=>r.loadLevel(x.pathLocator)));else{if(await r.loadLevel(""),v.signal.aborted)return;const x=r.roots();c(x.map(L=>L.pathLocator)),await Promise.all(x.filter(L=>e.hasChildren(L)!==!1).map(L=>r.loadLevel(L.pathLocator)))}},()=>{v.signal.aborted||d(!0)}).finally(()=>{v.signal.aborted||p(!1)}),()=>v.abort()},[r,t,g]),{model:r,expanded:i,setExpanded:c,highlighted:u,setHighlighted:s,error:n,loading:b,retry:()=>A(v=>v+1)}},Ie=(e,t)=>{const[o,a]=h(),[r,i]=h(!1),[c,u]=h(!1),[s,n]=h(0);return m(()=>{const d=new AbortController;if(u(!1),!t){a(void 0),i(!1);return}return i(!0),a(void 0),Se(e,t).then(b=>{d.signal.aborted||a(b)},()=>{d.signal.aborted||(a(void 0),u(!0))}).finally(()=>{d.signal.aborted||i(!1)}),()=>d.abort()},[e,t,s]),{found:o,loading:r,error:c,retry:()=>n(d=>d+1)}},Ne=(e,t)=>{const o=t.pathLocator||t.path||"",{pathLocatorSeparator:a}=e;return o.includes(a)?o.substring(0,o.lastIndexOf(a)):o},Oe=(e,t)=>{if(!e)return;const o=e.getNodeByPathLocator(t),a=o?e.getChildren(o):[],{searchProperty:r}=e,i=(c,u)=>{if(e.hasChildren(c)){if(!e.hasChildren(u))return-1}else if(e.hasChildren(u))return 1;const s=c[r],n=u[r];return s>n?1:s<n?-1:0};return a.length>0?a.sort(i):o},X=(e,t,o)=>{if(!e)return[];const a=Oe(e,o);return t?e.searchNodes(t,a,!1):a},_e=(e,t)=>{if(!t||!e)return[];const o=t.getPathNodes(e);return o?o.filter(a=>a!==void 0):[]},Be=e=>({getLevel:t=>{const o=X(e,"",t);return Array.isArray(o)?o:[]},getPath:t=>_e(t,e),search:(t,o)=>X(e,t,o),hasChildren:t=>e?.hasChildren(t),label:t=>(e?t[e.searchProperty]:"")??"",pathLabel:t=>e?.getPathString(t,e.searchProperty),parentOf:t=>e?Ne(e,t):"",scopedSearch:!0}),De=(e,t,o)=>{const[a,r]=h("");return m(()=>{const i=setTimeout(()=>{const c=e.trim();r(c.length>=t?c:"")},o);return()=>clearTimeout(i)},[e,t,o]),e.trim().length>=t?a:""},Fe=({tree:e,source:t,searchMinLength:o=3,searchDebounceTimeout:a=500,opened:r})=>{const i=ve(),c=F(),[u,s]=pe("nodePath",""),n=I(()=>t??Be(e),[t,e]),[d,b]=h(""),p=De(d,o,a),{model:g,expanded:A,setExpanded:v,highlighted:y,setHighlighted:$,error:S,loading:x,retry:L}=Re(n,u,r),k=Ie(n,p),[te,q]=h([]),{nodes:O}=Ae(()=>y?n.getPath(y):[],[n,y]);m(()=>{q(k.found?.expanded??[])},[k.found]),m(()=>{r&&b("")},[r]),m(()=>{B(i,"highlightedNodePath",y)},[y]),m(()=>{p&&$("")},[p]);const U=C(l=>{l&&s(l)},[]),oe=p?k.loading:x||g.pending.size>0,ae=p?k.error:S||g.errors.size>0,j=p?k.found?.roots??[]:g.roots(),re=l=>{if(p){q(l);return}for(const E of l)A.includes(E)||g.loadLevel(E);v(l)},ne=()=>{if(p){k.retry();return}if(S){L();return}for(const l of g.errors)g.loadLevel(l)},se=l=>{$(l),p||(v(E=>[...new Set([...E,l])]),g.loadLevel(l))};return f`
		<div class="header">
			${P(O.length,()=>f`<nav class="path" aria-label=${w("Path")} data-testid="path">
						${O.map((l,E)=>f`${E?f`<span class="slash" aria-hidden="true">/</span>`:_}<button
										type="button"
										class="crumb"
										aria-current=${E===O.length-1?"location":_}
										@click=${()=>se(l.pathLocator)}
									>
										${n.label(l)}
									</button>`)}
					</nav>`)}
			<cosmoz-input
				autofocus
				data-testid="search-input"
				label=${w("Search nodes")}
				.value=${d}
				.placeholder=${w("Search...")}
				@input=${l=>b(l.target.value)}
				@keydown=${l=>{l.key==="ArrowDown"?(l.preventDefault(),c.current?.focusActiveItem()):l.key==="Enter"&&(l.preventDefault(),U(y))}}
			></cosmoz-input>
		</div>
		<cosmoz-treenode-tree-view
			class="items"
			data-testid="tree"
			label=${w("Nodes")}
			.items=${j}
			.getId=${l=>l.pathLocator}
			.getLabel=${n.label}
			.getChildren=${p?k.found?.getChildren:g.getChildren}
			.hasChildren=${p?l=>(k.found?.getChildren(l).length??0)>0:g.hasChildren}
			.expanded=${p?te:A}
			.selected=${y||void 0}
			@expanded-changed=${l=>{l.preventDefault(),re(l.detail.value)}}
			@selected-changed=${l=>{l.preventDefault(),$(l.detail.value)}}
			@activate=${l=>U(l.detail.id)}
			${H(l=>{c.current=l})}
		></cosmoz-treenode-tree-view>
		<div class="status" role="status" aria-live="polite">
			${P(ae,()=>f`<span data-testid="error">${w("Could not load nodes.")}</span
						><button class="retry" type="button" @click=${ne}>
							${w("Try again")}
						</button>`,()=>P(oe,()=>f`<span class="loading" data-testid="loading"
								>${w("Loading...")}</span
							>`,()=>P(!j.length,()=>f`<span data-testid=${p?"no-results":"empty"}
										>${p?w("No nodes match the search"):w("Search to find a node.")}</span
									>`)))}
		</div>
	`};customElements.define("cosmoz-treenode-navigator",N(Fe,{styleSheets:[Ce]}));export{Be as t,Ae as u};
