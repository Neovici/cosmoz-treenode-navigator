import{c as H,u,b as V,d as E,e as x,f as T,g as _,h as J,i as O,n as Q,l as C}from"./tree-data-CXI3kqpg.js";import{x as m}from"./lit-element-D5YJkDF8.js";const U=H`
	h1,
	h2 {
		font-weight: 500;
	}

	button {
		position: relative;
		overflow: hidden;
		outline: none;

		cursor: pointer;
		border-radius: 500px;
	}

	button:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 5px;
		height: 5px;
		background: rgba(189, 195, 199, 0.5);
		opacity: 0;
		border-radius: 100%;
		transform: scale(1, 1) translate(-50%);
		transform-origin: 50% 50%;
	}

	@keyframes ripple {
		0% {
			transform: scale(0, 0);
			opacity: 1;
		}
		20% {
			transform: scale(25, 25);
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: scale(40, 40);
		}
	}

	button:not(:disabled):active::after {
		animation: ripple 1s ease-out;
	}

	.actions {
		display: flex;
	}

	.actions button {
		display: inline-block;

		padding: 10px 16px 10px 16px;
		margin: 14px 14px 12px 14px;

		color: var(--cosmoz-treenode-actions-button-text-color, #101010);
		font: inherit;
		font-size: inherit;
		line-height: inherit;

		background-color: var(
			--cosmoz-treenode-actions-button-background-color,
			white
		);
		border: 0px none rgb(16, 16, 16);
		box-shadow: var(
			--cosmoz-treenode-actions-button-box-shadow,
			0 2px 4px 0 #e5e5e5
		);

		transition-behavior: normal, normal;
		transition-delay: 0s, 0s;
		transition-duration: 0.28s, 0.3s;
		transition-property: box-shadow, background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), ease;
	}

	.actions button:hover {
		box-shadow: var(
			--cosmoz-treenode-actions-button-box-shadow-hover,
			0 2px 3px 0 rgb(0 0 0 / 30%)
		);
	}

	.action-open {
		flex: auto;
	}

	.path-text {
		display: block;

		overflow: hidden;
		white-space: nowrap;

		text-overflow: ellipsis;
		direction: rtl;
	}

	.action-reset {
		flex-basis: 100px;
		flex-grow: 0;
		flex-shrink: 0;
	}

	.action-open + .action-reset {
		margin-left: 0;
	}

	/* Safari only css fix */

	_:matches(x),
	_:lang(x) + _:-webkit-full-screen-document,
	.pathToNode span {
		display: inline-block;
	}

	#chips {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		overflow-y: auto;
		max-height: 30vh;
	}

	.chip {
		display: flex;
		margin: 1px 4px 1px 0;
		padding: 0.25rem 0.45rem 0.25rem 0.5rem;

		gap: 0.25rem;

		border-radius: 500px;
		background-color: #e0e0e0;
		white-space: nowrap;
		overflow: hidden;
		align-items: center;
	}

	.chip .chip__clear {
		margin: 0 0 0 0.5rem;

		background: #a6a6a6;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		color: white;
		border-radius: 50%;
	}

	.chip > span {
		color: #424242;
		margin-left: 10px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.chip iron-icon {
		margin: 2px 4px;
		color: #cdcdcd;
		background-color: #a6a6a6;
		border-radius: 500px;
		cursor: pointer;
		min-width: 16px;
		width: 16px;
		min-height: 16px;
		height: 16px;
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
	}

	.dialog-heading {
		margin-bottom: 2rem;
		padding: 0 8px;
		font-size: 1.25rem;
		font-weight: normal;
	}

	.dialog-footer {
		padding: 0 10px 10px 10px;
		text-align: right;
	}

	.dialog-footer-button-container {
		margin: 0;
	}

	.dialog-footer-button {
		margin: 0 0.25rem;
		padding: 8px 14px;
		background: none;
		border: 1px solid rgb(164, 171, 174);
		font-size: 15px;
		cursor: pointer;
		user-select: none;
	}

	.dialog-footer-button:not(:disabled):active {
		border: 1px outset rgb(164, 171, 174);
	}

	.dialog-footer-button:disabled {
		color: #a8a8a8;
		background-color: #f2f2f2;
		cursor: default;
	}
`,W=(n,s)=>{const i=a=>{if(a.key===n&&s instanceof Function)return a.preventDefault(),s()};u(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}))},X=(n,s)=>{let i;const a=[];return(...w)=>new Promise((v,y)=>{clearTimeout(i),i=setTimeout(()=>{const h=[...a];a.length=0,Promise.resolve(n(...w)).then(c=>{h.forEach(({resolve:r})=>r(c))},c=>{h.forEach(({reject:r})=>r(c))})},s),a.push({resolve:v,reject:y})})},D=({tree:n,multiSelection:s=!1,dialogText:i,buttonTextPlaceholder:a,searchPlaceholder:w,noReset:v=!1,searchGlobalPlaceholder:y,searchMinLength:h=3,searchDebounceTimeout:c=2e3})=>{const r=E(null),k=E(null),[o,g]=x("highlightedNode"),[l,$]=x("selectedNode"),[f,P]=x("nodePath",""),[d,b]=x("nodesOnNodePath",[]),[R,N]=T(!1),[p,z]=T([]);u(()=>{var e,t;r.current&&(k.current=(t=(e=r.current.querySelector("cosmoz-treenode-navigator"))==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("cosmoz-input"))},[r.current]),u(()=>{o!==l&&$(o),(o==null?void 0:o.pathLocator)!==f&&P((o==null?void 0:o.pathLocator)??"")},[o]),u(()=>{l&&l!==o&&g(l)},[l]),u(()=>{if(!(f||n))return;const e=_(f,n);b(e);const t=e.length>0?e[e.length-1]:null;t&&t!==o&&g(t)},[f,n]);const A=J(()=>!Array.isArray(d)||d.length===0?a||"":d.filter(e=>e).map(e=>e[n.searchProperty]).join(" / "),[d,n]),I=()=>{b([]),z([]),g(null),$(null),P("")},M=({item:e,ev:t})=>{z(p.filter(G=>G!==e)),t.preventDefault(),t.stopPropagation()},j=e=>e.name,q=(e,t)=>e&&t>0,B=X(()=>{var e,t;(t=(e=r.current)==null?void 0:e.fit)==null||t.call(e)},50),K=()=>{k.current&&k.current.focus()},F=()=>{var e;(e=r.current)==null||e.showModal(),N(!0),setTimeout(K,0)},L=()=>{var e;N(!1),(e=r.current)==null||e.close()};W("Escape",L);const S=()=>{o!=null&&o.pathLocator&&(s&&!p.some(e=>e.pathLocator===o.pathLocator)&&z([...p,o]),$(o),P(o.pathLocator),b(_(o.pathLocator,n)),L())};return m`
		<div class="actions" part="actions">
			<button
				class="action-open"
				type="button"
				@click=${F}
				part="action-open"
			>
				<slot name="button-before"></slot>
				<div class="path-text">
					<span>${A}</span>
				</div>
				<slot name="button-after"></slot>
			</button>
			${O(!v&&!!o,()=>m` <button
						@click=${I}
						class="action-reset"
						part="action-reset"
					>
						<svg
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
					</button>`)}
		</div>
		${O(q(s,p.length),()=>m`
				<div id="chips" part="chips" class="row">
					${p.map(e=>m`
							<div class="chip">
								<span>${j(e)}</span>
								<button
									class="chip__clear"
									@click=${t=>M({item:e,ev:t})}
									type="button"
								>
									&times;
								</button>
							</div>
						`)}
				</div>
			`)}

		<dialog
			class="dialog"
			part="dialog"
			${Q(e=>{r.current=e})}
		>
			<header class="dialog-header" part="header">
				<h1 class="dialog-heading" part="heading">${i}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.highlightedNode=${o}
					@highlighted-node-changed=${C(g)}
					.searchPlaceholder=${w}
					.searchGlobalPlaceholder=${y}
					.searchMinLength=${h}
					.searchDebounceTimeout=${c}
					.tree=${n}
					.opened=${R}
					.nodesOnNodePath=${d}
					@nodes-on-node-path-changed=${C(b)}
					@node-dblclicked=${S}
					@on-data-plane-changed=${B}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<p class="dialog-footer-button-container">
					<button
						?disabled=${!(o!=null&&o.pathLocator)}
						autofocus
						class="dialog-footer-button"
						part="select-button"
						@click=${S}
					>
						Select
					</button>
					<button
						class="dialog-footer-button"
						part="cancel-button"
						@click=${L}
					>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`};D.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","node-path","selected-node","no-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",V(D,{styleSheets:[U]}));
