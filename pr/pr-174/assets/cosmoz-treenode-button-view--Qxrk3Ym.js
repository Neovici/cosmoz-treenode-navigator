import{c as H,u as h,b as V,d as E,e as x,f as T,g as _,h as J,i as O,n as Q,l as C}from"./tree-data-CEGK7sFg.js";import{x as m}from"./iframe-DTLXohIn.js";const U=H`
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
`,W=(t,i)=>{const s=a=>{if(a.key===t&&i instanceof Function)return a.preventDefault(),i()};h(()=>(document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}))},X=(t,i)=>{let s;const a=[];return(...w)=>new Promise((v,y)=>{clearTimeout(s),s=setTimeout(()=>{const u=[...a];a.length=0,Promise.resolve(t(...w)).then(c=>{u.forEach(({resolve:n})=>n(c))},c=>{u.forEach(({reject:n})=>n(c))})},i),a.push({resolve:v,reject:y})})},D=({tree:t,multiSelection:i=!1,dialogText:s,buttonTextPlaceholder:a,searchPlaceholder:w,noReset:v=!1,searchGlobalPlaceholder:y,searchMinLength:u=3,searchDebounceTimeout:c=2e3})=>{const n=E(null),k=E(null),[o,g]=x("highlightedNode"),[d,$]=x("selectedNode"),[f,N]=x("nodePath",""),[l,b]=x("nodesOnNodePath",[]),[R,L]=T(!1),[p,P]=T([]);h(()=>{n.current&&(k.current=n.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[n.current]),h(()=>{o!==d&&$(o),o?.pathLocator!==f&&N(o?.pathLocator??"")},[o]),h(()=>{d&&d!==o&&g(d)},[d]),h(()=>{if(!(f||t))return;const e=_(f,t);b(e);const r=e.length>0?e[e.length-1]:null;r&&r!==o&&g(r)},[f,t]);const A=J(()=>!Array.isArray(l)||l.length===0?a||"":l.filter(e=>e).map(e=>e[t.searchProperty]).join(" / "),[l,t]),I=()=>{b([]),P([]),g(null),$(null),N("")},M=({item:e,ev:r})=>{P(p.filter(G=>G!==e)),r.preventDefault(),r.stopPropagation()},j=e=>e.name,q=(e,r)=>e&&r>0,B=X(()=>{n.current?.fit?.()},50),K=()=>{k.current&&k.current.focus()},F=()=>{n.current?.showModal(),L(!0),setTimeout(K,0)},z=()=>{L(!1),n.current?.close()};W("Escape",z);const S=()=>{o?.pathLocator&&(i&&!p.some(e=>e.pathLocator===o.pathLocator)&&P([...p,o]),$(o),N(o.pathLocator),b(_(o.pathLocator,t)),z())};return m`
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
		${O(q(i,p.length),()=>m`
				<div id="chips" part="chips" class="row">
					${p.map(e=>m`
							<div class="chip">
								<span>${j(e)}</span>
								<button
									class="chip__clear"
									@click=${r=>M({item:e,ev:r})}
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
			${Q(e=>{n.current=e})}
		>
			<header class="dialog-header" part="header">
				<h1 class="dialog-heading" part="heading">${s}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.highlightedNode=${o}
					@highlighted-node-changed=${C(g)}
					.searchPlaceholder=${w}
					.searchGlobalPlaceholder=${y}
					.searchMinLength=${u}
					.searchDebounceTimeout=${c}
					.tree=${t}
					.opened=${R}
					.nodesOnNodePath=${l}
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
						?disabled=${!o?.pathLocator}
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
						@click=${z}
					>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`};D.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","node-path","selected-node","no-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",V(D,{styleSheets:[U]}));
