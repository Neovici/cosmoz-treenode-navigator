import{c as P,u as f,b as _,d as $,e as k,f as q,g as z,h as I,n as K,i as V}from"./tree-data-CkLQyo2D.js";import{b as m,t as u}from"./iframe-b7Yf6_bs.js";const F=P`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,U=P`
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
		${F}
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
`,Z=(n,s)=>{const a=i=>{if(i.key===n&&s instanceof Function)return i.preventDefault(),s()};f(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}))},G=m`<svg
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
</svg>`,S=({tree:n,showReset:s=!1,searchMinLength:a=3,searchDebounceTimeout:i=2e3})=>{const e=$(null),r=$(null),[c,h]=k("nodePath",""),[p,x]=k("opened",!1),[g,L]=q(""),d=z(()=>I(c,n),[c,n]),M=z(()=>!Array.isArray(d)||d.length===0?u("Select a node"):d.filter(t=>t).map(t=>t[n.searchProperty]).join(" / "),[d,n]);f(()=>{e.current&&(r.current=e.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[e.current]),f(()=>{p?(e.current?.showModal(),setTimeout(()=>r.current?.focus(),0)):e.current?.close()},[p]);const N=()=>{h("")},C=()=>{r.current&&r.current.focus()},E=()=>{e.current?.showModal(),x(!0),setTimeout(C,0)},l=()=>{x(!1),e.current?.close()};Z("Escape",l);const D=t=>{const o=e.current;if(!o)return;const A=t.clientX,B=t.clientY,v=o.getBoundingClientRect(),H=v.left,O=v.top,w=y=>{const X=y.clientX-A,Y=y.clientY-B;o.style.left=`${H+X}px`,o.style.top=`${O+Y}px`,o.style.margin="0"},b=()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",b)},T=t=>{t.preventDefault();const o=t.detail.value;o&&(h(o),l())},j=t=>{L(t.detail.value)},R=()=>{g&&(h(g),l())};return m`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				data-testid="open-button"
				@click=${E}
				part="action-open"
			>
				<slot name="prefix" slot="prefix">${G}</slot>
				<div class="path-text">
					<span>${M}</span>
				</div>
				<slot name="suffix" slot="suffix"></slot>
			</cosmoz-button>
			${K(s&&!!c,()=>m`<cosmoz-button
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
			${V(t=>{e.current=t})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${D}
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
					@node-path-changed=${T}
					@highlighted-node-path-changed=${j}
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
						@click=${R}
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
	`};S.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",_(S,{styleSheets:[U]}));
