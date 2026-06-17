import{c as E,o as F,n as z,b as N,d as K,s as _,u as P,e as w,f as B,g as U,h as O,i as H,j as I,k as tt,l as et}from"./tree-data-1lHrSFis.js";import{w as ot,b as m,e as nt,A as rt,t as M}from"./iframe-DziPhVtT.js";const st=E`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,it=E`
	:host {
		display: block;
		container-type: inline-size;
	}

	h1,
	h2 {
		font-weight: 500;
	}

	nav {
		display: flex;
		gap: 8px;
	}

	cosmoz-tooltip {
		display: block;
		flex: 1;
		min-width: 0;
	}

	cosmoz-tooltip > cosmoz-button {
		min-width: 50px;
	}

	cosmoz-tooltip > cosmoz-button::part(button) {
		justify-content: flex-start;
	}

	.default-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.path-text {
		${st}
		direction: rtl;
		flex: 1;
		min-width: 0;
	}

	@container (max-width: 80px) {
		.path-text {
			display: none;
		}
	}

	dialog {
		width: 550px;
		min-width: 250px;
		padding: 0;
		border-radius: 10px;
		border: none;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	dialog > header {
		padding: 10px 10px 0 10px;
		cursor: move;
		user-select: none;
	}

	dialog h1 {
		margin-bottom: 2rem;
		padding: 0 8px;
		font-size: 1.25rem;
		font-weight: normal;
		color: var(--cz-text-color, inherit);
	}

	dialog > footer {
		padding: 0 10px 10px 10px;
		text-align: right;
	}

	dialog > footer > div {
		display: flex;
		gap: 8px;
		justify-content: flex-end;
		margin: 0;
	}
`,at=({slot:t,title:r,className:o,width:s="24",height:h="24",styles:c}={})=>m`
  <svg
    slot=${F(t)}
    class=${`x-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${s}
    height=${h}
    style=${F(c)}
  >
    ${z(r,()=>ot`<title>${r}</title>`)}
    <path d="M17 7 7 17M7 7l10 10" />
  </svg>
`,ct=E`
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
`;customElements.define("cosmoz-tooltip-content",N(()=>m`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[K,ct]}));const C=_(E`
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
`),X=(t,r,o)=>nt(m`<cosmoz-tooltip-content>
			${z(r,()=>m`<strong slot="heading">${r}</strong>`)}
			${z(o,()=>m`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),lt=(t,r)=>{const{for:o,heading:s,description:h,placement:c="top",delay:d=300,disabled:a=!1}=r,i=P();w(()=>{if(!o)return;const n=t.getRootNode(),f=n.adoptedStyleSheets??[];f.includes(C)||(n.adoptedStyleSheets=[...f,C]);const e=document.createElement("div");e.setAttribute("popover","manual"),e.setAttribute("role","tooltip"),e.classList.add("cosmoz-tooltip-popover"),t.after(e),i.current=e,X(e,s,h);const v=`[name="${o}"]`,y=`--tooltip-anchor-${o}`;let x;const b=l=>{a||(clearTimeout(x),l.style.anchorName=y,e.style.positionAnchor=y,e.style.positionArea=c,x=window.setTimeout(()=>e.showPopover(),d))},k=()=>{clearTimeout(x),e.hidePopover()},L=l=>{const p=l.target.closest?.(v);p&&b(p)},T=l=>{const p=l.target.closest?.(v);if(!p)return;const S=l.relatedTarget;S&&p.contains(S)||k()},$=l=>{const p=l.target.closest?.(v);p&&b(p)},A=l=>{l.target.closest?.(v)&&k()};return n.addEventListener("pointerover",L),n.addEventListener("pointerout",T),n.addEventListener("focusin",$),n.addEventListener("focusout",A),()=>{clearTimeout(x),n.removeEventListener("pointerover",L),n.removeEventListener("pointerout",T),n.removeEventListener("focusin",$),n.removeEventListener("focusout",A),e.hidePopover(),e.remove(),i.current=void 0}},[o,c,d,a]),w(()=>{!o||!i.current||X(i.current,s,h)},[s,h,o]),w(()=>{!a||!i.current||i.current.hidePopover()},[a])},dt=E`
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
`,pt=t=>{const{heading:r,description:o,for:s,placement:h="top",delay:c=300,disabled:d=!1}=t,a=P(),i=P(),n=B(()=>{d||(clearTimeout(i.current),i.current=window.setTimeout(()=>{a.current?.showPopover()},c))},[c,d]);w(()=>{d&&(clearTimeout(i.current),a.current?.hidePopover())},[d]);const f=B(()=>{clearTimeout(i.current),a.current?.hidePopover()},[]);return w(()=>{if(s)return;const e=v=>{const y=v.relatedTarget;y&&t.contains(y)||f()};return t.addEventListener("pointerover",n),t.addEventListener("pointerout",e),()=>{t.removeEventListener("pointerover",n),t.removeEventListener("pointerout",e)}},[s,n,f]),lt(t,{for:s,heading:r,description:o,placement:h,delay:c,disabled:d}),s?rt:m`
		<slot @focusin=${n} @focusout=${f}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${h}"
			${U(e=>{a.current=e})}
		>
			<cosmoz-tooltip-content>
				${z(r,()=>m`<strong slot="heading">${r}</strong>`)}
				${z(o,()=>m`<p slot="description">${o}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",N(pt,{styleSheets:[K,C,dt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const ut=(t,r)=>{const o=s=>{if(s.key===t&&r instanceof Function)return s.preventDefault(),r()};w(()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}))},mt=m`<svg
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
</svg>`,V=({tree:t,showReset:r=!1,searchMinLength:o=3,searchDebounceTimeout:s=500,variant:h="secondary"})=>{const c=P(null),d=P(),[a,i]=O("nodePath",""),[n,f]=O("opened",!1),[e,v]=H(""),[y,x]=H(!1),b=I(()=>tt(a,t),[a,t]),k=I(()=>!Array.isArray(b)||b.length===0?M("Select a node"):b.filter(u=>u).map(u=>u[t.searchProperty]).join(" / "),[b,t]);w(()=>{n?c.current?.showModal():c.current?.close()},[n]);const L=()=>{i("")},T=()=>f(!0),$=()=>{f(!1),x(!0),clearTimeout(d.current),d.current=setTimeout(()=>x(!1),500)};ut("Escape",n?$:void 0);const A=u=>{const g=c.current;if(!g)return;const q=u.clientX,G=u.clientY,D=g.getBoundingClientRect(),J=D.left,Q=D.top,j=Y=>{const W=Y.clientX-q,Z=Y.clientY-G;g.style.left=`${J+W}px`,g.style.top=`${Q+Z}px`,g.style.margin="0"},R=()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",R)};document.addEventListener("mousemove",j),document.addEventListener("mouseup",R)},l=u=>{u.preventDefault();const g=u.detail.value;g&&(i(g),$())},p=et(v),S=()=>{e&&(i(e),$())};return m`
		<nav part="actions">
			<cosmoz-tooltip
				placement="right"
				.description=${k}
				.delay=${1e3}
				.disabled=${y}
			>
				<cosmoz-button
					variant=${h}
					full-width
					data-testid="open-button"
					@click=${T}
					part="action-open"
				>
					<slot name="prefix" slot="prefix">${mt}</slot>
					<div class="path-text">
						<span>${k}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
			</cosmoz-tooltip>
			${z(r&&!!a,()=>m`<cosmoz-button
						variant="tertiary"
						@click=${L}
						data-testid="reset-button"
						part="action-reset"
					>
						${at({slot:"prefix"})}
					</cosmoz-button>`)}
		</nav>

		<dialog
			part="dialog"
			data-testid="dialog"
			${U(u=>{c.current=u})}
		>
			<header part="header" @mousedown=${A}>
				<h1 part="heading">${M("Search or navigate to chosen destination")}</h1>
			</header>
			<main part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					.nodePath=${a}
					@node-path-changed=${l}
					@highlighted-node-path-changed=${p}
					.searchMinLength=${o}
					.searchDebounceTimeout=${s}
					.tree=${t}
					.opened=${n}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer part="footer">
				<div>
					<cosmoz-button
						variant="primary"
						?disabled=${!e}
						@click=${S}
						data-testid="select-button"
						part="select-button"
					>
						${M("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${$}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${M("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};V.observedAttributes=["show-reset","search-min-length","variant"];customElements.define("cosmoz-treenode-button-view",N(V,{styleSheets:[it]}));
