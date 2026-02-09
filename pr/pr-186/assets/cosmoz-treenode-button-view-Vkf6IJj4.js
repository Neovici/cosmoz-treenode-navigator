import{c as S,u as m,b as I,d as K,e as z,f as P,g as V,h as C,i as F,j as U,n as Z,k as G}from"./tree-data-BuLhcJzY.js";import{b as x,t as u}from"./iframe-Bjtw74-6.js";const J=S`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,Q=S`
	:host {
		display: block;
		container-type: inline-size;
		width: 100%;
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

	:host([has-prefix]) .default-icon {
		display: none;
	}

	.path-text {
		${J}
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
`,W=(n,s)=>{const a=i=>{if(i.key===n&&s instanceof Function)return i.preventDefault(),s()};m(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}))},tt=x`<svg
	class="default-icon"
	width="20"
	height="20"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path
		d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
	/>
</svg>`,N=({tree:n,showReset:s=!1,searchMinLength:a=3,searchDebounceTimeout:i=2e3})=>{const v=K(),e=z(null),r=z(null),[c,h]=P("nodePath",""),[p,b]=P("opened",!1),[g,L]=V(""),d=C(()=>F(c,n),[c,n]),M=C(()=>!Array.isArray(d)||d.length===0?u("Select a node"):d.filter(t=>t).map(t=>t[n.searchProperty]).join(" / "),[d,n]),E=U(t=>{const f=t.target.assignedNodes().length>0;v.toggleAttribute("has-prefix",f)},[v]);m(()=>{e.current&&(r.current=e.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[e.current]),m(()=>{p?(e.current?.showModal(),setTimeout(()=>r.current?.focus(),0)):e.current?.close()},[p]);const j=()=>{h("")},D=()=>{r.current&&r.current.focus()},T=()=>{e.current?.showModal(),b(!0),setTimeout(D,0)},l=()=>{b(!1),e.current?.close()};W("Escape",l);const A=t=>{const o=e.current;if(!o)return;const f=t.clientX,O=t.clientY,w=o.getBoundingClientRect(),X=w.left,Y=w.top,y=k=>{const _=k.clientX-f,q=k.clientY-O;o.style.left=`${X+_}px`,o.style.top=`${Y+q}px`,o.style.margin="0"},$=()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",$)};document.addEventListener("mousemove",y),document.addEventListener("mouseup",$)},H=t=>{t.preventDefault();const o=t.detail.value;o&&(h(o),l())},R=t=>{L(t.detail.value)},B=()=>{g&&(h(g),l())};return x`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				data-testid="open-button"
				@click=${T}
				part="action-open"
			>
				<span slot="prefix">
					<slot name="button-before" @slotchange=${E}></slot>
					${tt}
				</span>
				<div class="path-text">
					<span>${M}</span>
				</div>
				<slot name="button-after" slot="suffix"></slot>
			</cosmoz-button>
			${Z(s&&!!c,()=>x`<cosmoz-button
						variant="tertiary"
						@click=${j}
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
			${G(t=>{e.current=t})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${A}
			>
				<h1 class="dialog-heading" part="heading">
					${u("Search or navigate to chosen destination")}
				</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${c}
					@node-path-changed=${H}
					@highlighted-node-path-changed=${R}
					.searchMinLength=${a}
					.searchDebounceTimeout=${i}
					.tree=${n}
					.opened=${p}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!g}
						@click=${B}
						data-testid="select-button"
						part="select-button"
					>
						${u("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${l}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${u("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};N.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",I(N,{styleSheets:[Q]}));
