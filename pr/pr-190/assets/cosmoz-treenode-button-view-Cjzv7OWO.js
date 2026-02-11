import{c as x,o as D,n as v,b as A,d as H,s as q,u as L,e as T,f as Y,g as I,h as R,i as G,j as F,k as J,l as Q}from"./tree-data-Bc7U-NWf.js";import{w as W,b as p,e as Z,t as E}from"./iframe-kTN957Yv.js";const tt=x`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,ot=x`
	:host {
		display: block;
		container-type: inline-size;
	}

	h1,
	h2 {
		font-weight: 500;
	}

	cosmoz-tooltip {
		display: block;
	}

	.actions {
		display: flex;
		gap: 8px;
	}

	.actions > cosmoz-button:first-child {
		flex: 1;
		min-width: 0;
	}

	.actions > cosmoz-button:first-child::part(button) {
		justify-content: flex-start;
	}

	.default-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.path-text {
		${tt}
		direction: rtl;
		flex: 1;
		min-width: 0;
	}

	@container (max-width: 80px) {
		.path-text {
			display: none;
		}
	}

	/* Safari only css fix */

	_:matches(x),
	_:lang(x) + _:-webkit-full-screen-document,
	.pathToNode span {
		display: inline-block;
	}

	.dialog {
		width: 550px;
		min-width: 250px;

		padding: 0;
		border-radius: 10px;
		border: none;
	}

	.dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	.dialog-header {
		padding: 10px 10px 0 10px;
		cursor: move;
		user-select: none;
	}

	.dialog-heading {
		margin-bottom: 2rem;
		padding: 0 8px;
		font-size: 1.25rem;
		font-weight: normal;
		color: var(--cz-text-color, inherit);
	}

	.dialog-footer {
		padding: 0 10px 10px 10px;
		text-align: right;
	}

	.dialog-footer-button-container {
		display: flex;
		gap: 8px;
		justify-content: flex-end;
		margin: 0;
	}
`,et=({slot:n,title:s,className:o,width:a="24",height:c="24",styles:l}={})=>p`
  <svg
    slot=${D(n)}
    class=${`x-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${c}
    style=${D(l)}
  >
    ${v(s,()=>W`<title>${s}</title>`)}
    <path d="M17 7 7 17M7 7l10 10" />
  </svg>
`,nt=x`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cz-spacing);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
	}

	::slotted([slot='heading']) {
		font-weight: var(--cz-font-weight-semibold);
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
		color: var(--cz-color-gray-300);
	}
`;customElements.define("cosmoz-tooltip-content",A(()=>p`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[H,nt]}));const S=q(x`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3);
		background: var(--cz-color-gray-900);
		color: var(--cz-color-white);
		border-radius: var(--cz-radius-sm);
		max-width: 20rem;
		box-shadow: var(--cz-shadow-lg);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),B=(n,s,o)=>Z(p`<cosmoz-tooltip-content>
			${v(s,()=>p`<strong slot="heading">${s}</strong>`)}
			${v(o,()=>p`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,n),st=(n,s)=>{const{for:o,heading:a,description:c,placement:l="top",delay:u=300}=s,d=L();T(()=>{if(!o)return;const r=n.getRootNode(),m=r.adoptedStyleSheets??[];m.includes(S)||(r.adoptedStyleSheets=[...m,S]);const i=document.createElement("div");i.setAttribute("popover","manual"),i.setAttribute("role","tooltip"),i.classList.add("cosmoz-tooltip-popover"),n.after(i),d.current=i,B(i,a,c);const h=`[name="${o}"]`,y=`--tooltip-anchor-${o}`;let g;const b=t=>{clearTimeout(g),t.style.anchorName=y,i.style.positionAnchor=y,i.style.positionArea=l,g=window.setTimeout(()=>i.showPopover(),u)},f=()=>{clearTimeout(g),i.hidePopover()},$=t=>{const e=t.target.closest?.(h);e&&b(e)},w=t=>{const e=t.target.closest?.(h);if(!e)return;const P=t.relatedTarget;P&&e.contains(P)||f()},z=t=>{const e=t.target.closest?.(h);e&&b(e)},k=t=>{t.target.closest?.(h)&&f()};return r.addEventListener("pointerover",$),r.addEventListener("pointerout",w),r.addEventListener("focusin",z),r.addEventListener("focusout",k),()=>{clearTimeout(g),r.removeEventListener("pointerover",$),r.removeEventListener("pointerout",w),r.removeEventListener("focusin",z),r.removeEventListener("focusout",k),i.hidePopover(),i.remove(),d.current=void 0}},[o,l,u]),T(()=>{!o||!d.current||B(d.current,a,c)},[a,c,o])},rt=x`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,it=n=>{const{heading:s,description:o,for:a,placement:c="top",delay:l=300}=n,u=L(),d=L(),r=Y(()=>{clearTimeout(d.current),d.current=window.setTimeout(()=>{u.current?.showPopover()},l)},[l]),m=Y(()=>{clearTimeout(d.current),u.current?.hidePopover()},[]);return st(n,{for:a,heading:s,description:o,placement:c,delay:l}),a?p``:p`
		<slot
			@pointerenter=${r}
			@pointerleave=${m}
			@focusin=${r}
			@focusout=${m}
		></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${c}"
			${I(i=>{u.current=i})}
		>
			<cosmoz-tooltip-content>
				${v(s,()=>p`<strong slot="heading">${s}</strong>`)}
				${v(o,()=>p`<p slot="description">${o}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",A(it,{styleSheets:[H,S,rt],observedAttributes:["heading","description","for","placement","delay"]}));const at=(n,s)=>{const o=a=>{if(a.key===n&&s instanceof Function)return a.preventDefault(),s()};T(()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}))},ct=p`<svg
	class="default-icon"
	width="20"
	height="20"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="7" cy="7" r="2" />
	<circle cx="17" cy="17" r="2" />
	<path d="M7 9v3c0 1.66 1.34 3 3 3h7" />
</svg>`,O=({tree:n,showReset:s=!1,searchMinLength:o=3,searchDebounceTimeout:a=2e3})=>{const c=L(null),[l,u]=R("nodePath",""),[d,r]=R("opened",!1),[m,i]=G(""),h=F(()=>J(l,n),[l,n]),y=F(()=>!Array.isArray(h)||h.length===0?E("Select a node"):h.filter(t=>t).map(t=>t[n.searchProperty]).join(" / "),[h,n]);T(()=>{d?c.current?.showModal():c.current?.close()},[d]);const g=()=>{u("")},b=()=>r(!0),f=()=>r(!1);at("Escape",f);const $=t=>{const e=c.current;if(!e)return;const P=t.clientX,X=t.clientY,M=e.getBoundingClientRect(),_=M.left,K=M.top,N=j=>{const U=j.clientX-P,V=j.clientY-X;e.style.left=`${_+U}px`,e.style.top=`${K+V}px`,e.style.margin="0"},C=()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",N),document.addEventListener("mouseup",C)},w=t=>{t.preventDefault();const e=t.detail.value;e&&(u(e),f())},z=Q(i),k=()=>{m&&(u(m),f())};return p`
		<cosmoz-tooltip
			placement="right"
			.description=${y}
			.delay=${1e3}
		>
			<div class="actions" part="actions">
				<cosmoz-button
					variant="secondary"
					full-width
					data-testid="open-button"
					@click=${b}
					part="action-open"
				>
					<slot name="prefix" slot="prefix">${ct}</slot>
					<div class="path-text">
						<span>${y}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
				${v(s&&!!l,()=>p`<cosmoz-button
							variant="tertiary"
							@click=${g}
							data-testid="reset-button"
							part="action-reset"
						>
							${et({slot:"prefix"})}
						</cosmoz-button>`)}
			</div>
		</cosmoz-tooltip>

		<dialog
			class="dialog"
			part="dialog"
			data-testid="dialog"
			${I(t=>{c.current=t})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${$}
			>
				<h1 class="dialog-heading" part="heading">
					${E("Search or navigate to chosen destination")}
				</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${l}
					@node-path-changed=${w}
					@highlighted-node-path-changed=${z}
					.searchMinLength=${o}
					.searchDebounceTimeout=${a}
					.tree=${n}
					.opened=${d}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!m}
						@click=${k}
						data-testid="select-button"
						part="select-button"
					>
						${E("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${f}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${E("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};O.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",A(O,{styleSheets:[ot]}));
