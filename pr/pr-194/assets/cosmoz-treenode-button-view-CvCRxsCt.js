import{c as w,o as D,n as y,b as S,d as O,s as G,u as T,e as x,f as Y,g as H,h as R,i as J,j as F,k as Q,l as W}from"./tree-data-DDm-bA3t.js";import{w as Z,b as u,e as _,A as tt,t as L}from"./iframe-BGNqpGwE.js";const et=w`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,ot=w`
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
		${et}
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
`,nt=({slot:t,title:i,className:o,width:a="24",height:c="24",styles:l}={})=>u`
  <svg
    slot=${D(t)}
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
    ${y(i,()=>Z`<title>${i}</title>`)}
    <path d="M17 7 7 17M7 7l10 10" />
  </svg>
`,st=w`
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
`;customElements.define("cosmoz-tooltip-content",S(()=>u`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[O,st]}));const A=G(w`
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
`),B=(t,i,o)=>_(u`<cosmoz-tooltip-content>
			${y(i,()=>u`<strong slot="heading">${i}</strong>`)}
			${y(o,()=>u`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),rt=(t,i)=>{const{for:o,heading:a,description:c,placement:l="top",delay:m=300}=i,d=T();x(()=>{if(!o)return;const s=t.getRootNode(),h=s.adoptedStyleSheets??[];h.includes(A)||(s.adoptedStyleSheets=[...h,A]);const n=document.createElement("div");n.setAttribute("popover","manual"),n.setAttribute("role","tooltip"),n.classList.add("cosmoz-tooltip-popover"),t.after(n),d.current=n,B(n,a,c);const p=`[name="${o}"]`,f=`--tooltip-anchor-${o}`;let g;const z=e=>{clearTimeout(g),e.style.anchorName=f,n.style.positionAnchor=f,n.style.positionArea=l,g=window.setTimeout(()=>n.showPopover(),m)},v=()=>{clearTimeout(g),n.hidePopover()},$=e=>{const r=e.target.closest?.(p);r&&z(r)},b=e=>{const r=e.target.closest?.(p);if(!r)return;const P=e.relatedTarget;P&&r.contains(P)||v()},k=e=>{const r=e.target.closest?.(p);r&&z(r)},E=e=>{e.target.closest?.(p)&&v()};return s.addEventListener("pointerover",$),s.addEventListener("pointerout",b),s.addEventListener("focusin",k),s.addEventListener("focusout",E),()=>{clearTimeout(g),s.removeEventListener("pointerover",$),s.removeEventListener("pointerout",b),s.removeEventListener("focusin",k),s.removeEventListener("focusout",E),n.hidePopover(),n.remove(),d.current=void 0}},[o,l,m]),x(()=>{!o||!d.current||B(d.current,a,c)},[a,c,o])},it=w`
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
`,at=t=>{const{heading:i,description:o,for:a,placement:c="top",delay:l=300}=t,m=T(),d=T(),s=Y(()=>{clearTimeout(d.current),d.current=window.setTimeout(()=>{m.current?.showPopover()},l)},[l]),h=Y(()=>{clearTimeout(d.current),m.current?.hidePopover()},[]);return x(()=>{if(a)return;const n=p=>{const f=p.relatedTarget;f&&t.contains(f)||h()};return t.addEventListener("pointerover",s),t.addEventListener("pointerout",n),()=>{t.removeEventListener("pointerover",s),t.removeEventListener("pointerout",n)}},[a,s,h]),rt(t,{for:a,heading:i,description:o,placement:c,delay:l}),a?tt:u`
		<slot @focusin=${s} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${c}"
			${H(n=>{m.current=n})}
		>
			<cosmoz-tooltip-content>
				${y(i,()=>u`<strong slot="heading">${i}</strong>`)}
				${y(o,()=>u`<p slot="description">${o}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",S(at,{styleSheets:[O,A,it],observedAttributes:["heading","description","for","placement","delay"]}));const ct=(t,i)=>{const o=a=>{if(a.key===t&&i instanceof Function)return a.preventDefault(),i()};x(()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}))},lt=u`<svg
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
</svg>`,I=({tree:t,showReset:i=!1,searchMinLength:o=3,searchDebounceTimeout:a=500})=>{const c=T(null),[l,m]=R("nodePath",""),[d,s]=R("opened",!1),[h,n]=J(""),p=F(()=>Q(l,t),[l,t]),f=F(()=>!Array.isArray(p)||p.length===0?L("Select a node"):p.filter(e=>e).map(e=>e[t.searchProperty]).join(" / "),[p,t]);x(()=>{d?c.current?.showModal():c.current?.close()},[d]);const g=()=>{m("")},z=()=>s(!0),v=()=>s(!1);ct("Escape",v);const $=e=>{const r=c.current;if(!r)return;const P=e.clientX,X=e.clientY,M=r.getBoundingClientRect(),K=M.left,U=M.top,C=j=>{const V=j.clientX-P,q=j.clientY-X;r.style.left=`${K+V}px`,r.style.top=`${U+q}px`,r.style.margin="0"},N=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",N)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",N)},b=e=>{e.preventDefault();const r=e.detail.value;r&&(m(r),v())},k=W(n),E=()=>{h&&(m(h),v())};return u`
		<nav part="actions">
			<cosmoz-tooltip
				placement="right"
				.description=${f}
				.delay=${1e3}
			>
				<cosmoz-button
					variant="secondary"
					full-width
					data-testid="open-button"
					@click=${z}
					part="action-open"
				>
					<slot name="prefix" slot="prefix">${lt}</slot>
					<div class="path-text">
						<span>${f}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
			</cosmoz-tooltip>
			${y(i&&!!l,()=>u`<cosmoz-button
						variant="tertiary"
						@click=${g}
						data-testid="reset-button"
						part="action-reset"
					>
						${nt({slot:"prefix"})}
					</cosmoz-button>`)}
		</nav>

		<dialog
			part="dialog"
			data-testid="dialog"
			${H(e=>{c.current=e})}
		>
			<header part="header" @mousedown=${$}>
				<h1 part="heading">${L("Search or navigate to chosen destination")}</h1>
			</header>
			<main part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					.nodePath=${l}
					@node-path-changed=${b}
					@highlighted-node-path-changed=${k}
					.searchMinLength=${o}
					.searchDebounceTimeout=${a}
					.tree=${t}
					.opened=${d}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer part="footer">
				<div>
					<cosmoz-button
						variant="primary"
						?disabled=${!h}
						@click=${E}
						data-testid="select-button"
						part="select-button"
					>
						${L("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${v}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${L("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};I.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",S(I,{styleSheets:[ot]}));
