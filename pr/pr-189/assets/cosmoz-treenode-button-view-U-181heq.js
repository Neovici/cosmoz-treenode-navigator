import{c as x,b as N,n as B,s as V,u as L,d as T,e as y,f as j,g as H,h as Y,i as q,j as F,k as G,l as J}from"./tree-data-DdzSSPYI.js";import{b as p,e as Q,t as E}from"./iframe-KH00VQP0.js";const W=x`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,Z=x`
	:host {
		display: block;
		container-type: inline-size;
	}

	h1,
	h2 {
		font-weight: 500;
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
		${W}
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
`,tt=x`
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
`;customElements.define("cosmoz-tooltip-content",N(()=>p`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[B,tt]}));const S=V(x`
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
`),R=(r,i,o)=>Q(p`<cosmoz-tooltip-content>
			${y(i,()=>p`<strong slot="heading">${i}</strong>`)}
			${y(o,()=>p`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,r),ot=(r,i)=>{const{for:o,heading:c,description:l,placement:d="top",delay:u=300}=i,a=L();T(()=>{if(!o)return;const n=r.getRootNode(),m=n.adoptedStyleSheets??[];m.includes(S)||(n.adoptedStyleSheets=[...m,S]);const s=document.createElement("div");s.setAttribute("popover","manual"),s.setAttribute("role","tooltip"),s.classList.add("cosmoz-tooltip-popover"),r.after(s),a.current=s,R(s,c,l);const h=`[name="${o}"]`,v=`--tooltip-anchor-${o}`;let f;const w=t=>{clearTimeout(f),t.style.anchorName=v,s.style.positionAnchor=v,s.style.positionArea=d,f=window.setTimeout(()=>s.showPopover(),u)},g=()=>{clearTimeout(f),s.hidePopover()},b=t=>{const e=t.target.closest?.(h);e&&w(e)},z=t=>{const e=t.target.closest?.(h);if(!e)return;const P=t.relatedTarget;P&&e.contains(P)||g()},$=t=>{const e=t.target.closest?.(h);e&&w(e)},k=t=>{t.target.closest?.(h)&&g()};return n.addEventListener("pointerover",b),n.addEventListener("pointerout",z),n.addEventListener("focusin",$),n.addEventListener("focusout",k),()=>{clearTimeout(f),n.removeEventListener("pointerover",b),n.removeEventListener("pointerout",z),n.removeEventListener("focusin",$),n.removeEventListener("focusout",k),s.hidePopover(),s.remove(),a.current=void 0}},[o,d,u]),T(()=>{!o||!a.current||R(a.current,c,l)},[c,l,o])},et=x`
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
`,nt=r=>{const{heading:i,description:o,for:c,placement:l="top",delay:d=300}=r,u=L(),a=L(),n=j(()=>{clearTimeout(a.current),a.current=window.setTimeout(()=>{u.current?.showPopover()},d)},[d]),m=j(()=>{clearTimeout(a.current),u.current?.hidePopover()},[]);return ot(r,{for:c,heading:i,description:o,placement:l,delay:d}),c?p``:p`
		<slot
			@pointerenter=${n}
			@pointerleave=${m}
			@focusin=${n}
			@focusout=${m}
		></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${l}"
			${H(s=>{u.current=s})}
		>
			<cosmoz-tooltip-content>
				${y(i,()=>p`<strong slot="heading">${i}</strong>`)}
				${y(o,()=>p`<p slot="description">${o}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",N(nt,{styleSheets:[B,S,et],observedAttributes:["heading","description","for","placement","delay"]}));const st=(r,i)=>{const o=c=>{if(c.key===r&&i instanceof Function)return c.preventDefault(),i()};T(()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}))},rt=p`<svg
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
</svg>`,O=({tree:r,showReset:i=!1,searchMinLength:o=3,searchDebounceTimeout:c=2e3})=>{const l=L(null),[d,u]=Y("nodePath",""),[a,n]=Y("opened",!1),[m,s]=q(""),h=F(()=>G(d,r),[d,r]),v=F(()=>!Array.isArray(h)||h.length===0?E("Select a node"):h.filter(t=>t).map(t=>t[r.searchProperty]).join(" / "),[h,r]);T(()=>{a?l.current?.showModal():l.current?.close()},[a]);const f=()=>{u("")},w=()=>n(!0),g=()=>n(!1);st("Escape",g);const b=t=>{const e=l.current;if(!e)return;const P=t.clientX,X=t.clientY,A=e.getBoundingClientRect(),_=A.left,I=A.top,C=D=>{const K=D.clientX-P,U=D.clientY-X;e.style.left=`${_+K}px`,e.style.top=`${I+U}px`,e.style.margin="0"},M=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",M)},z=t=>{t.preventDefault();const e=t.detail.value;e&&(u(e),g())},$=J(s),k=()=>{m&&(u(m),g())};return p`
		<cosmoz-tooltip
			placement="right"
			.description=${v}
			.delay=${1e3}
		>
			<div class="actions" part="actions">
				<cosmoz-button
					variant="secondary"
					full-width
					data-testid="open-button"
					@click=${w}
					part="action-open"
				>
					<slot name="prefix" slot="prefix">${rt}</slot>
					<div class="path-text">
						<span>${v}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
				${y(i&&!!d,()=>p`<cosmoz-button
							variant="tertiary"
							@click=${f}
							data-testid="reset-button"
							part="action-reset"
						>
							<svg
								slot="prefix"
								width="10"
								height="9"
								viewBox="0 0 10 9"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line
									x1="8.53033"
									y1="0.53033"
									x2="1.53033"
									y2="7.53033"
									stroke-width="1.5"
								></line>
								<line
									x1="8.46967"
									y1="7.53033"
									x2="1.46967"
									y2="0.530331"
									stroke-width="1.5"
								></line>
							</svg>
						</cosmoz-button>`)}
			</div>
		</cosmoz-tooltip>

		<dialog
			class="dialog"
			part="dialog"
			data-testid="dialog"
			${H(t=>{l.current=t})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${b}
			>
				<h1 class="dialog-heading" part="heading">
					${E("Search or navigate to chosen destination")}
				</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${d}
					@node-path-changed=${z}
					@highlighted-node-path-changed=${$}
					.searchMinLength=${o}
					.searchDebounceTimeout=${c}
					.tree=${r}
					.opened=${a}
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
						@click=${g}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${E("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};O.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",N(O,{styleSheets:[Z]}));
