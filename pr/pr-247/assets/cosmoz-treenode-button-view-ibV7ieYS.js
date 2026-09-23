import{c as L,o as C,n as z,b as D,d as K,s as tt,u as E,e as w,f as B,g as U,h as O,i as H,j as I,k as et,l as ot}from"./tree-data-NTBQXqbK.js";import{w as nt,b as m,e as rt,A as st,t as M}from"./iframe-CFC5wr91.js";const it=L`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,at=L`
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
		${it}
		direction: rtl;
		flex: 1;
		min-width: 0;
	}

	/* Too narrow for the label: the icon alone, centred, however narrow the
	   container gets — a 44px sidebar rail included. */
	@container (max-width: 80px) {
		.path-text {
			display: none;
		}
		cosmoz-tooltip > cosmoz-button::part(button) {
			justify-content: center;
			padding-inline: 0;
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
`,ct=({slot:t,title:r,className:e,width:i="24",height:h="24",styles:f}={})=>m`
  <svg
    slot=${C(t)}
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
    height=${h}
    style=${C(f)}
  >
    ${z(r,()=>nt`<title>${r}</title>`)}
    <path d="M17 7 7 17M7 7l10 10" />
  </svg>
`,lt=L`
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
`;customElements.define("cosmoz-tooltip-content",D(()=>m`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[K,lt]}));const N=tt(L`
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
`),X=(t,r,e)=>rt(m`<cosmoz-tooltip-content>
			${z(r,()=>m`<strong slot="heading">${r}</strong>`)}
			${z(e,()=>m`<p slot="description">${e}</p>`)}
		</cosmoz-tooltip-content>`,t),dt=(t,r)=>{const{for:e,heading:i,description:h,placement:f="top",delay:a=300,disabled:c=!1}=r,s=E();w(()=>{if(!e)return;const n=t.getRootNode(),d=n.adoptedStyleSheets??[];d.includes(N)||(n.adoptedStyleSheets=[...d,N]);const o=document.createElement("div");o.setAttribute("popover","manual"),o.setAttribute("role","tooltip"),o.classList.add("cosmoz-tooltip-popover"),t.after(o),s.current=o,X(o,i,h);const v=`[name="${e}"]`,y=`--tooltip-anchor-${e}`;let $;const k=l=>{c||(clearTimeout($),l.style.anchorName=y,o.style.positionAnchor=y,o.style.positionArea=f,$=window.setTimeout(()=>o.showPopover(),a))},b=()=>{clearTimeout($),o.hidePopover()},P=l=>{const p=l.target.closest?.(v);p&&k(p)},T=l=>{const p=l.target.closest?.(v);if(!p)return;const S=l.relatedTarget;S&&p.contains(S)||b()},A=l=>{const p=l.target.closest?.(v);p&&k(p)},x=l=>{l.target.closest?.(v)&&b()};return n.addEventListener("pointerover",P),n.addEventListener("pointerout",T),n.addEventListener("focusin",A),n.addEventListener("focusout",x),()=>{clearTimeout($),n.removeEventListener("pointerover",P),n.removeEventListener("pointerout",T),n.removeEventListener("focusin",A),n.removeEventListener("focusout",x),o.hidePopover(),o.remove(),s.current=void 0}},[e,f,a,c]),w(()=>{!e||!s.current||X(s.current,i,h)},[i,h,e]),w(()=>{!c||!s.current||s.current.hidePopover()},[c])},pt=L`
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
`,ut=t=>{const{heading:r,description:e,for:i,placement:h="top",delay:f=300,disabled:a=!1}=t,c=E(),s=E(),n=B(()=>{a||(clearTimeout(s.current),s.current=window.setTimeout(()=>{c.current?.showPopover()},f))},[f,a]);w(()=>{a&&(clearTimeout(s.current),c.current?.hidePopover())},[a]);const d=B(()=>{clearTimeout(s.current),c.current?.hidePopover()},[]);return w(()=>{if(i)return;const o=v=>{const y=v.relatedTarget;y&&t.contains(y)||d()};return t.addEventListener("pointerover",n),t.addEventListener("pointerout",o),()=>{t.removeEventListener("pointerover",n),t.removeEventListener("pointerout",o)}},[i,n,d]),dt(t,{for:i,heading:r,description:e,placement:h,delay:f,disabled:a}),i?st:m`
		<slot @focusin=${n} @focusout=${d}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${h}"
			${U(o=>{c.current=o})}
		>
			<cosmoz-tooltip-content>
				${z(r,()=>m`<strong slot="heading">${r}</strong>`)}
				${z(e,()=>m`<p slot="description">${e}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",D(ut,{styleSheets:[K,N,pt],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const mt=(t,r)=>{const e=i=>{if(i.key===t&&r instanceof Function)return i.preventDefault(),r()};w(()=>(document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}))},ht=m`<svg
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
</svg>`,V=({tree:t,showReset:r=!1,searchMinLength:e=3,searchDebounceTimeout:i=500,variant:h="secondary",size:f})=>{const a=E(null),c=E(),[s,n]=O("nodePath",""),[d,o]=O("opened",!1),[v,y]=H(""),[$,k]=H(!1),b=I(()=>et(s,t),[s,t]),P=I(()=>!Array.isArray(b)||b.length===0?M("Select a node"):b.filter(u=>u).map(u=>u[t.searchProperty]).join(" / "),[b,t]);w(()=>{d?a.current?.showModal():a.current?.close()},[d]);const T=()=>{n("")},A=()=>o(!0),x=()=>{o(!1),k(!0),clearTimeout(c.current),c.current=setTimeout(()=>k(!1),500)};mt("Escape",d?x:void 0);const l=u=>{const g=a.current;if(!g)return;const G=u.clientX,J=u.clientY,j=g.getBoundingClientRect(),Q=j.left,W=j.top,R=F=>{const Z=F.clientX-G,_=F.clientY-J;g.style.left=`${Q+Z}px`,g.style.top=`${W+_}px`,g.style.margin="0"},Y=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",Y)},p=u=>{u.preventDefault();const g=u.detail.value;g&&(n(g),x())},S=ot(y),q=()=>{v&&(n(v),x())};return m`
		<nav part="actions">
			<cosmoz-tooltip
				placement="right"
				.description=${P}
				.delay=${1e3}
				.disabled=${$}
			>
				<cosmoz-button
					variant=${h}
					size=${C(f)}
					full-width
					data-testid="open-button"
					@click=${A}
					part="action-open"
					exportparts="button:action-open-button"
				>
					<slot name="prefix" slot="prefix">${ht}</slot>
					<div class="path-text">
						<span>${P}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
			</cosmoz-tooltip>
			${z(r&&!!s,()=>m`<cosmoz-button
						variant="tertiary"
						@click=${T}
						data-testid="reset-button"
						part="action-reset"
					>
						${ct({slot:"prefix"})}
					</cosmoz-button>`)}
		</nav>

		<dialog
			part="dialog"
			data-testid="dialog"
			${U(u=>{a.current=u})}
		>
			<header part="header" @mousedown=${l}>
				<h1 part="heading">${M("Search or navigate to chosen destination")}</h1>
			</header>
			<main part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					.nodePath=${s}
					@node-path-changed=${p}
					@highlighted-node-path-changed=${S}
					.searchMinLength=${e}
					.searchDebounceTimeout=${i}
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
						?disabled=${!v}
						@click=${q}
						data-testid="select-button"
						part="select-button"
					>
						${M("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${x}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${M("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};V.observedAttributes=["show-reset","search-min-length","variant","size"];customElements.define("cosmoz-treenode-button-view",D(V,{styleSheets:[at]}));
