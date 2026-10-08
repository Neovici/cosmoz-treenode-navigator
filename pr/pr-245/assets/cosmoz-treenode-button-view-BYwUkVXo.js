import{c as L,o as N,n as z,a as D,b as K,s as ot,u as P,d as $,e as B,f as U,g as O,h as H,i as I,t as nt,j as rt,l as st}from"./cosmoz-treenode-navigator-DUyfySJZ.js";import{w as it,b as p,e as at,A as ct,t as M}from"./iframe-0DuE9EzL.js";const lt=L`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,dt=L`
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
		${lt}
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
`,pt=({slot:o,title:r,className:n,width:s="24",height:u="24",styles:m}={})=>p`
  <svg
    slot=${N(o)}
    class=${`x-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${s}
    height=${u}
    style=${N(m)}
  >
    ${z(r,()=>it`<title>${r}</title>`)}
    <path d="M17 7 7 17M7 7l10 10" />
  </svg>
`,ut=L`
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
`;customElements.define("cosmoz-tooltip-content",D(()=>p`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[K,ut]}));const C=ot(L`
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
`),X=(o,r,n)=>at(p`<cosmoz-tooltip-content>
			${z(r,()=>p`<strong slot="heading">${r}</strong>`)}
			${z(n,()=>p`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,o),mt=(o,r)=>{const{for:n,heading:s,description:u,placement:m="top",delay:h=300,disabled:i=!1}=r,a=P();$(()=>{if(!n)return;const e=o.getRootNode(),f=e.adoptedStyleSheets??[];f.includes(C)||(e.adoptedStyleSheets=[...f,C]);const t=document.createElement("div");t.setAttribute("popover","manual"),t.setAttribute("role","tooltip"),t.classList.add("cosmoz-tooltip-popover"),o.after(t),a.current=t,X(t,s,u);const v=`[name="${n}"]`,g=`--tooltip-anchor-${n}`;let w;const T=l=>{i||(clearTimeout(w),l.style.anchorName=g,t.style.positionAnchor=g,t.style.positionArea=m,w=window.setTimeout(()=>t.showPopover(),h))},k=()=>{clearTimeout(w),t.hidePopover()},y=l=>{const c=l.target.closest?.(v);c&&T(c)},x=l=>{const c=l.target.closest?.(v);if(!c)return;const A=l.relatedTarget;A&&c.contains(A)||k()},E=l=>{const c=l.target.closest?.(v);c&&T(c)},S=l=>{l.target.closest?.(v)&&k()};return e.addEventListener("pointerover",y),e.addEventListener("pointerout",x),e.addEventListener("focusin",E),e.addEventListener("focusout",S),()=>{clearTimeout(w),e.removeEventListener("pointerover",y),e.removeEventListener("pointerout",x),e.removeEventListener("focusin",E),e.removeEventListener("focusout",S),t.hidePopover(),t.remove(),a.current=void 0}},[n,m,h,i]),$(()=>{!n||!a.current||X(a.current,s,u)},[s,u,n]),$(()=>{!i||!a.current||a.current.hidePopover()},[i])},ht=L`
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
`,ft=o=>{const{heading:r,description:n,for:s,placement:u="top",delay:m=300,disabled:h=!1}=o,i=P(),a=P(),e=B(()=>{h||(clearTimeout(a.current),a.current=window.setTimeout(()=>{i.current?.showPopover()},m))},[m,h]);$(()=>{h&&(clearTimeout(a.current),i.current?.hidePopover())},[h]);const f=B(()=>{clearTimeout(a.current),i.current?.hidePopover()},[]);return $(()=>{if(s)return;const t=v=>{const g=v.relatedTarget;g&&o.contains(g)||f()};return o.addEventListener("pointerover",e),o.addEventListener("pointerout",t),()=>{o.removeEventListener("pointerover",e),o.removeEventListener("pointerout",t)}},[s,e,f]),mt(o,{for:s,heading:r,description:n,placement:u,delay:m,disabled:h}),s?ct:p`
		<slot @focusin=${e} @focusout=${f}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${u}"
			${U(t=>{i.current=t})}
		>
			<cosmoz-tooltip-content>
				${z(r,()=>p`<strong slot="heading">${r}</strong>`)}
				${z(n,()=>p`<p slot="description">${n}</p>`)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
		</div>
	`};customElements.define("cosmoz-tooltip",D(ft,{styleSheets:[K,C,ht],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const vt=(o,r)=>{const n=s=>{if(s.key===o&&r instanceof Function)return s.preventDefault(),r()};$(()=>(document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}))},gt=p`<svg
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
</svg>`,V=({tree:o,source:r,showReset:n=!1,searchMinLength:s=3,searchDebounceTimeout:u=500,variant:m="secondary",size:h})=>{const i=P(null),a=P(),[e,f]=O("nodePath",""),[t,v]=O("opened",!1),[g,w]=H(""),[T,k]=H(!1),y=I(()=>r??nt(o),[r,o]),{nodes:x}=rt(()=>e?y.getPath(e):[],[y,e]),E=I(()=>!Array.isArray(x)||x.length===0?M("Select a node"):x.filter(d=>d).map(d=>y.label(d)).join(" / "),[x,y]);$(()=>{t?i.current?.showModal():i.current?.close()},[t]);const S=()=>{f("")},l=()=>v(!0),c=()=>{v(!1),k(!0),clearTimeout(a.current),a.current=setTimeout(()=>k(!1),500)};vt("Escape",t?c:void 0);const A=d=>{const b=i.current;if(!b)return;const Q=d.clientX,W=d.clientY,j=b.getBoundingClientRect(),Z=j.left,_=j.top,R=F=>{const tt=F.clientX-Q,et=F.clientY-W;b.style.left=`${Z+tt}px`,b.style.top=`${_+et}px`,b.style.margin="0"},Y=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",Y)},q=d=>{d.preventDefault();const b=d.detail.value;b&&(f(b),c())},G=st(w),J=()=>{g&&(f(g),c())};return p`
		<nav part="actions">
			<cosmoz-tooltip
				placement="right"
				.description=${E}
				.delay=${1e3}
				.disabled=${T}
			>
				<cosmoz-button
					variant=${m}
					size=${N(h)}
					full-width
					data-testid="open-button"
					@click=${l}
					part="action-open"
					exportparts="button:action-open-button"
				>
					<slot name="prefix" slot="prefix">${gt}</slot>
					<div class="path-text">
						<span>${E}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
			</cosmoz-tooltip>
			${z(n&&!!e,()=>p`<cosmoz-button
						variant="tertiary"
						@click=${S}
						data-testid="reset-button"
						part="action-reset"
					>
						${pt({slot:"prefix"})}
					</cosmoz-button>`)}
		</nav>

		<dialog
			part="dialog"
			data-testid="dialog"
			${U(d=>{i.current=d})}
		>
			<header part="header" @mousedown=${A}>
				<h1 part="heading">${M("Search or navigate to chosen destination")}</h1>
			</header>
			<main part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					.nodePath=${e}
					@node-path-changed=${q}
					@highlighted-node-path-changed=${G}
					.searchMinLength=${s}
					.searchDebounceTimeout=${u}
					.tree=${o}
					.source=${y}
					.opened=${t}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer part="footer">
				<div>
					<cosmoz-button
						variant="primary"
						?disabled=${!g}
						@click=${J}
						data-testid="select-button"
						part="select-button"
					>
						${M("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${c}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${M("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};V.observedAttributes=["show-reset","search-min-length","variant","size"];customElements.define("cosmoz-treenode-button-view",D(V,{styleSheets:[dt]}));
