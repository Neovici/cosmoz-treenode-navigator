import{c as P,o as Y,n as $,b as C,d as X,s as Z,u as k,e as w,f as F,g as K,h as B,i as O,j as H,k as _,l as tt}from"./tree-data-CEdOFwnq.js";import{w as et,b as h,e as ot,A as nt,t as S}from"./iframe-CjAZuo64.js";const rt=P`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,st=P`
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
		${rt}
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
`,it=({slot:t,title:r,className:e,width:s="24",height:c="24",styles:u}={})=>h`
  <svg
    slot=${Y(t)}
    class=${`x-icon ${e??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${s}
    height=${c}
    style=${Y(u)}
  >
    ${$(r,()=>et`<title>${r}</title>`)}
    <path d="M17 7 7 17M7 7l10 10" />
  </svg>
`,at=P`
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
`;customElements.define("cosmoz-tooltip-content",C(()=>h`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[X,at]}));const M=Z(P`
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
`),I=(t,r,e)=>ot(h`<cosmoz-tooltip-content>
			${$(r,()=>h`<strong slot="heading">${r}</strong>`)}
			${$(e,()=>h`<p slot="description">${e}</p>`)}
		</cosmoz-tooltip-content>`,t),ct=(t,r)=>{const{for:e,heading:s,description:c,placement:u="top",delay:l=300,disabled:d=!1}=r,i=k();w(()=>{if(!e)return;const n=t.getRootNode(),f=n.adoptedStyleSheets??[];f.includes(M)||(n.adoptedStyleSheets=[...f,M]);const o=document.createElement("div");o.setAttribute("popover","manual"),o.setAttribute("role","tooltip"),o.classList.add("cosmoz-tooltip-popover"),t.after(o),i.current=o,I(o,s,c);const g=`[name="${e}"]`,y=`--tooltip-anchor-${e}`;let v;const z=p=>{d||(clearTimeout(v),p.style.anchorName=y,o.style.positionAnchor=y,o.style.positionArea=u,v=window.setTimeout(()=>o.showPopover(),l))},E=()=>{clearTimeout(v),o.hidePopover()},L=p=>{const m=p.target.closest?.(g);m&&z(m)},b=p=>{const m=p.target.closest?.(g);if(!m)return;const a=p.relatedTarget;a&&m.contains(a)||E()},T=p=>{const m=p.target.closest?.(g);m&&z(m)},A=p=>{p.target.closest?.(g)&&E()};return n.addEventListener("pointerover",L),n.addEventListener("pointerout",b),n.addEventListener("focusin",T),n.addEventListener("focusout",A),()=>{clearTimeout(v),n.removeEventListener("pointerover",L),n.removeEventListener("pointerout",b),n.removeEventListener("focusin",T),n.removeEventListener("focusout",A),o.hidePopover(),o.remove(),i.current=void 0}},[e,u,l,d]),w(()=>{!e||!i.current||I(i.current,s,c)},[s,c,e]),w(()=>{!d||!i.current||i.current.hidePopover()},[d])},lt=P`
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
`,dt=t=>{const{heading:r,description:e,for:s,placement:c="top",delay:u=300,disabled:l=!1}=t,d=k(),i=k(),n=F(()=>{l||(clearTimeout(i.current),i.current=window.setTimeout(()=>{d.current?.showPopover()},u))},[u,l]);w(()=>{l&&(clearTimeout(i.current),d.current?.hidePopover())},[l]);const f=F(()=>{clearTimeout(i.current),d.current?.hidePopover()},[]);return w(()=>{if(s)return;const o=g=>{const y=g.relatedTarget;y&&t.contains(y)||f()};return t.addEventListener("pointerover",n),t.addEventListener("pointerout",o),()=>{t.removeEventListener("pointerover",n),t.removeEventListener("pointerout",o)}},[s,n,f]),ct(t,{for:s,heading:r,description:e,placement:c,delay:u,disabled:l}),s?nt:h`
		<slot @focusin=${n} @focusout=${f}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${c}"
			${K(o=>{d.current=o})}
		>
			<cosmoz-tooltip-content>
				${$(r,()=>h`<strong slot="heading">${r}</strong>`)}
				${$(e,()=>h`<p slot="description">${e}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",C(dt,{styleSheets:[X,M,lt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const pt=(t,r)=>{const e=s=>{if(s.key===t&&r instanceof Function)return s.preventDefault(),r()};w(()=>(document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}))},ut=h`<svg
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
</svg>`,U=({tree:t,showReset:r=!1,searchMinLength:e=3,searchDebounceTimeout:s=500})=>{const c=k(null),u=k(),[l,d]=B("nodePath",""),[i,n]=B("opened",!1),[f,o]=O(""),[g,y]=O(!1),v=H(()=>_(l,t),[l,t]),z=H(()=>!Array.isArray(v)||v.length===0?S("Select a node"):v.filter(a=>a).map(a=>a[t.searchProperty]).join(" / "),[v,t]);w(()=>{i?c.current?.showModal():c.current?.close()},[i]);const E=()=>{d("")},L=()=>n(!0),b=()=>{n(!1),y(!0),clearTimeout(u.current),u.current=setTimeout(()=>y(!1),500)};pt("Escape",b);const T=a=>{const x=c.current;if(!x)return;const V=a.clientX,q=a.clientY,N=x.getBoundingClientRect(),G=N.left,J=N.top,D=R=>{const Q=R.clientX-V,W=R.clientY-q;x.style.left=`${G+Q}px`,x.style.top=`${J+W}px`,x.style.margin="0"},j=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",j)},A=a=>{a.preventDefault();const x=a.detail.value;x&&(d(x),b())},p=tt(o),m=()=>{f&&(d(f),b())};return h`
		<nav part="actions">
			<cosmoz-tooltip
				placement="right"
				.description=${z}
				.delay=${1e3}
				.disabled=${g}
			>
				<cosmoz-button
					variant="secondary"
					full-width
					data-testid="open-button"
					@click=${L}
					part="action-open"
				>
					<slot name="prefix" slot="prefix">${ut}</slot>
					<div class="path-text">
						<span>${z}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
			</cosmoz-tooltip>
			${$(r&&!!l,()=>h`<cosmoz-button
						variant="tertiary"
						@click=${E}
						data-testid="reset-button"
						part="action-reset"
					>
						${it({slot:"prefix"})}
					</cosmoz-button>`)}
		</nav>

		<dialog
			part="dialog"
			data-testid="dialog"
			${K(a=>{c.current=a})}
		>
			<header part="header" @mousedown=${T}>
				<h1 part="heading">${S("Search or navigate to chosen destination")}</h1>
			</header>
			<main part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					.nodePath=${l}
					@node-path-changed=${A}
					@highlighted-node-path-changed=${p}
					.searchMinLength=${e}
					.searchDebounceTimeout=${s}
					.tree=${t}
					.opened=${i}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer part="footer">
				<div>
					<cosmoz-button
						variant="primary"
						?disabled=${!f}
						@click=${m}
						data-testid="select-button"
						part="select-button"
					>
						${S("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${b}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${S("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};U.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",C(U,{styleSheets:[st]}));
