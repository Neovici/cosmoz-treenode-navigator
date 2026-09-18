import{c as L,o as F,n as z,a as C,b as K,s as et,u as P,d as $,e as B,f as U,g as O,h as H,i as I,t as ot,j as nt,l as rt}from"./cosmoz-treenode-navigator-C_QL79Zk.js";import{w as st,b as m,e as it,A as at,t as M}from"./iframe-B8nujFHe.js";const ct=L`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,lt=L`
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
		${ct}
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
`,dt=({slot:t,title:r,className:e,width:i="24",height:f="24",styles:h}={})=>m`
  <svg
    slot=${F(t)}
    class=${`x-icon ${e??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${i}
    height=${f}
    style=${F(h)}
  >
    ${z(r,()=>st`<title>${r}</title>`)}
    <path d="M17 7 7 17M7 7l10 10" />
  </svg>
`,pt=L`
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
`;customElements.define("cosmoz-tooltip-content",C(()=>m`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[K,pt]}));const N=et(L`
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
`),X=(t,r,e)=>it(m`<cosmoz-tooltip-content>
			${z(r,()=>m`<strong slot="heading">${r}</strong>`)}
			${z(e,()=>m`<p slot="description">${e}</p>`)}
		</cosmoz-tooltip-content>`,t),ut=(t,r)=>{const{for:e,heading:i,description:f,placement:h="top",delay:c=300,disabled:l=!1}=r,s=P();$(()=>{if(!e)return;const n=t.getRootNode(),d=n.adoptedStyleSheets??[];d.includes(N)||(n.adoptedStyleSheets=[...d,N]);const o=document.createElement("div");o.setAttribute("popover","manual"),o.setAttribute("role","tooltip"),o.classList.add("cosmoz-tooltip-popover"),t.after(o),s.current=o,X(o,i,f);const v=`[name="${e}"]`,b=`--tooltip-anchor-${e}`;let w;const k=a=>{l||(clearTimeout(w),a.style.anchorName=b,o.style.positionAnchor=b,o.style.positionArea=h,w=window.setTimeout(()=>o.showPopover(),c))},g=()=>{clearTimeout(w),o.hidePopover()},x=a=>{const p=a.target.closest?.(v);p&&k(p)},E=a=>{const p=a.target.closest?.(v);if(!p)return;const A=a.relatedTarget;A&&p.contains(A)||g()},T=a=>{const p=a.target.closest?.(v);p&&k(p)},S=a=>{a.target.closest?.(v)&&g()};return n.addEventListener("pointerover",x),n.addEventListener("pointerout",E),n.addEventListener("focusin",T),n.addEventListener("focusout",S),()=>{clearTimeout(w),n.removeEventListener("pointerover",x),n.removeEventListener("pointerout",E),n.removeEventListener("focusin",T),n.removeEventListener("focusout",S),o.hidePopover(),o.remove(),s.current=void 0}},[e,h,c,l]),$(()=>{!e||!s.current||X(s.current,i,f)},[i,f,e]),$(()=>{!l||!s.current||s.current.hidePopover()},[l])},mt=L`
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
`,ft=t=>{const{heading:r,description:e,for:i,placement:f="top",delay:h=300,disabled:c=!1}=t,l=P(),s=P(),n=B(()=>{c||(clearTimeout(s.current),s.current=window.setTimeout(()=>{l.current?.showPopover()},h))},[h,c]);$(()=>{c&&(clearTimeout(s.current),l.current?.hidePopover())},[c]);const d=B(()=>{clearTimeout(s.current),l.current?.hidePopover()},[]);return $(()=>{if(i)return;const o=v=>{const b=v.relatedTarget;b&&t.contains(b)||d()};return t.addEventListener("pointerover",n),t.addEventListener("pointerout",o),()=>{t.removeEventListener("pointerover",n),t.removeEventListener("pointerout",o)}},[i,n,d]),ut(t,{for:i,heading:r,description:e,placement:f,delay:h,disabled:c}),i?at:m`
		<slot @focusin=${n} @focusout=${d}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${f}"
			${U(o=>{l.current=o})}
		>
			<cosmoz-tooltip-content>
				${z(r,()=>m`<strong slot="heading">${r}</strong>`)}
				${z(e,()=>m`<p slot="description">${e}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",C(ft,{styleSheets:[K,N,mt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const ht=(t,r)=>{const e=i=>{if(i.key===t&&r instanceof Function)return i.preventDefault(),r()};$(()=>(document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}))},vt=m`<svg
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
</svg>`,V=({tree:t,source:r,showReset:e=!1,searchMinLength:i=3,searchDebounceTimeout:f=500,variant:h="secondary"})=>{const c=P(null),l=P(),[s,n]=O("nodePath",""),[d,o]=O("opened",!1),[v,b]=H(""),[w,k]=H(!1),g=I(()=>r??ot(t),[r,t]),{nodes:x}=nt(()=>s?g.getPath(s):[],[g,s]),E=I(()=>!Array.isArray(x)||x.length===0?M("Select a node"):x.filter(u=>u).map(u=>g.label(u)).join(" / "),[x,g]);$(()=>{d?c.current?.showModal():c.current?.close()},[d]);const T=()=>{n("")},S=()=>o(!0),a=()=>{o(!1),k(!0),clearTimeout(l.current),l.current=setTimeout(()=>k(!1),500)};ht("Escape",d?a:void 0);const p=u=>{const y=c.current;if(!y)return;const J=u.clientX,Q=u.clientY,D=y.getBoundingClientRect(),W=D.left,Z=D.top,j=Y=>{const _=Y.clientX-J,tt=Y.clientY-Q;y.style.left=`${W+_}px`,y.style.top=`${Z+tt}px`,y.style.margin="0"},R=()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",R)};document.addEventListener("mousemove",j),document.addEventListener("mouseup",R)},A=u=>{u.preventDefault();const y=u.detail.value;y&&(n(y),a())},q=rt(b),G=()=>{v&&(n(v),a())};return m`
		<nav part="actions">
			<cosmoz-tooltip
				placement="right"
				.description=${E}
				.delay=${1e3}
				.disabled=${w}
			>
				<cosmoz-button
					variant=${h}
					full-width
					data-testid="open-button"
					@click=${S}
					part="action-open"
					exportparts="button:action-open-button"
				>
					<slot name="prefix" slot="prefix">${vt}</slot>
					<div class="path-text">
						<span>${E}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
			</cosmoz-tooltip>
			${z(e&&!!s,()=>m`<cosmoz-button
						variant="tertiary"
						@click=${T}
						data-testid="reset-button"
						part="action-reset"
					>
						${dt({slot:"prefix"})}
					</cosmoz-button>`)}
		</nav>

		<dialog
			part="dialog"
			data-testid="dialog"
			${U(u=>{c.current=u})}
		>
			<header part="header" @mousedown=${p}>
				<h1 part="heading">${M("Search or navigate to chosen destination")}</h1>
			</header>
			<main part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					.nodePath=${s}
					@node-path-changed=${A}
					@highlighted-node-path-changed=${q}
					.searchMinLength=${i}
					.searchDebounceTimeout=${f}
					.tree=${t}
					.source=${g}
					.opened=${d}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer part="footer">
				<div>
					<cosmoz-button
						variant="primary"
						?disabled=${!v}
						@click=${G}
						data-testid="select-button"
						part="select-button"
					>
						${M("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${a}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${M("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};V.observedAttributes=["show-reset","search-min-length","variant"];customElements.define("cosmoz-treenode-button-view",C(V,{styleSheets:[lt]}));
