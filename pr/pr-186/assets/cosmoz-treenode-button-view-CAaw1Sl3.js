import{c as y,u as O,b as R,d as X,e as w,f as Y,g as b,h as _,n as K,i as F,l as I}from"./tree-data-CUyYWzK_.js";import{b as p,t as l}from"./iframe-CQiKH-tD.js";const U=y`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,V=y`
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
		${U}
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
`,q=(o,n)=>{const s=a=>{if(a.key===o&&n instanceof Function)return a.preventDefault(),n()};O(()=>(document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}))},G=p`<svg
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
</svg>`,$=({tree:o,showReset:n=!1,searchMinLength:s=3,searchDebounceTimeout:a=2e3})=>{const i=X(null),[r,h]=w("nodePath",""),[k,g]=w("opened",!1),[u,z]=Y(""),c=b(()=>_(r,o),[r,o]),P=b(()=>!Array.isArray(c)||c.length===0?l("Select a node"):c.filter(t=>t).map(t=>t[o.searchProperty]).join(" / "),[c,o]),L=()=>{h("")},N=()=>{i.current?.showModal(),g(!0)},d=()=>{g(!1),i.current?.close()};q("Escape",d);const C=t=>{const e=i.current;if(!e)return;const D=t.clientX,j=t.clientY,f=e.getBoundingClientRect(),B=f.left,T=f.top,m=v=>{const A=v.clientX-D,H=v.clientY-j;e.style.left=`${B+A}px`,e.style.top=`${T+H}px`,e.style.margin="0"},x=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",x)},E=t=>{t.preventDefault();const e=t.detail.value;e&&(h(e),d())},M=I(z),S=()=>{u&&(h(u),d())};return p`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				data-testid="open-button"
				@click=${N}
				part="action-open"
			>
				<slot name="prefix" slot="prefix">${G}</slot>
				<div class="path-text">
					<span>${P}</span>
				</div>
				<slot name="suffix" slot="suffix"></slot>
			</cosmoz-button>
			${K(n&&!!r,()=>p`<cosmoz-button
						variant="tertiary"
						@click=${L}
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

		<dialog
			class="dialog"
			part="dialog"
			data-testid="dialog"
			${F(t=>{i.current=t})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${C}
			>
				<h1 class="dialog-heading" part="heading">
					${l("Search or navigate to chosen destination")}
				</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${r}
					@node-path-changed=${E}
					@highlighted-node-path-changed=${M}
					.searchMinLength=${s}
					.searchDebounceTimeout=${a}
					.tree=${o}
					.opened=${k}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!u}
						@click=${S}
						data-testid="select-button"
						part="select-button"
					>
						${l("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${d}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${l("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};$.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",R($,{styleSheets:[V]}));
