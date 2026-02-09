import{c as $,u as k,b as R,d as X,e as b,f as Y,g as y,h as _,n as K,i as F,l as I}from"./tree-data-DgBPYy1X.js";import{b as g,t as l}from"./iframe-p6FdhhoM.js";const U=$`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,V=$`
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
`,q=(o,n)=>{const s=a=>{if(a.key===o&&n instanceof Function)return a.preventDefault(),n()};k(()=>(document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}))},G=g`<svg
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
</svg>`,z=({tree:o,showReset:n=!1,searchMinLength:s=3,searchDebounceTimeout:a=2e3})=>{const i=X(null),[r,h]=b("nodePath",""),[u,f]=b("opened",!1),[p,P]=Y(""),c=y(()=>_(r,o),[r,o]),L=y(()=>!Array.isArray(c)||c.length===0?l("Select a node"):c.filter(t=>t).map(t=>t[o.searchProperty]).join(" / "),[c,o]);k(()=>{u?i.current?.showModal():i.current?.close()},[u]);const N=()=>{h("")},C=()=>f(!0),d=()=>f(!1);q("Escape",d);const E=t=>{const e=i.current;if(!e)return;const j=t.clientX,B=t.clientY,m=e.getBoundingClientRect(),T=m.left,A=m.top,x=w=>{const H=w.clientX-j,O=w.clientY-B;e.style.left=`${T+H}px`,e.style.top=`${A+O}px`,e.style.margin="0"},v=()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",v)},M=t=>{t.preventDefault();const e=t.detail.value;e&&(h(e),d())},S=I(P),D=()=>{p&&(h(p),d())};return g`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				data-testid="open-button"
				@click=${C}
				part="action-open"
			>
				<slot name="prefix" slot="prefix">${G}</slot>
				<div class="path-text">
					<span>${L}</span>
				</div>
				<slot name="suffix" slot="suffix"></slot>
			</cosmoz-button>
			${K(n&&!!r,()=>g`<cosmoz-button
						variant="tertiary"
						@click=${N}
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
				@mousedown=${E}
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
					@node-path-changed=${M}
					@highlighted-node-path-changed=${S}
					.searchMinLength=${s}
					.searchDebounceTimeout=${a}
					.tree=${o}
					.opened=${u}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!p}
						@click=${D}
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
	`};z.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",R(z,{styleSheets:[V]}));
