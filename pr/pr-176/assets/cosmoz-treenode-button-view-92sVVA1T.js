import{c as G,u as f,b as H,d as E,e as g,f as T,g as _,h as V,i as O,n as J,l as Q}from"./tree-data-DoQ_5jc9.js";import{x as b}from"./iframe-DiBFxewx.js";const U=G`
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
		color: var(--cz-text-color, inherit);
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
`,W=(o,i)=>{const s=a=>{if(a.key===o&&i instanceof Function)return a.preventDefault(),i()};f(()=>(document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}))},X=(o,i)=>{let s;const a=[];return(...x)=>new Promise((m,w)=>{clearTimeout(s),s=setTimeout(()=>{const h=[...a];a.length=0,Promise.resolve(o(...x)).then(c=>{h.forEach(({resolve:t})=>t(c))},c=>{h.forEach(({reject:t})=>t(c))})},i),a.push({resolve:m,reject:w})})},C=({tree:o,multiSelection:i=!1,dialogText:s,buttonTextPlaceholder:a,searchPlaceholder:x,noReset:m=!1,searchGlobalPlaceholder:w,searchMinLength:h=3,searchDebounceTimeout:c=2e3})=>{const t=E(null),v=E(null),[n,u]=g("highlightedNode"),[d,z]=g("selectedNode"),[y,P]=g("nodePath",""),[l,k]=g("nodesOnNodePath",[]),[D,L]=T(!1),[p,$]=T([]);f(()=>{t.current&&(v.current=t.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[t.current]),f(()=>{d&&d!==n&&u(d)},[d]),f(()=>{if(!(y||o))return;const e=_(y,o);k(e);const r=e.length>0?e[e.length-1]:null;r&&r!==n&&u(r)},[y,o]);const R=V(()=>!Array.isArray(l)||l.length===0?a||"":l.filter(e=>e).map(e=>e[o.searchProperty]).join(" / "),[l,o]),A=()=>{k([]),$([]),u(null),z(null),P("")},I=({item:e,ev:r})=>{$(p.filter(F=>F!==e)),r.preventDefault(),r.stopPropagation()},M=e=>e.name,j=(e,r)=>e&&r>0,q=X(()=>{t.current?.fit?.()},50),B=()=>{v.current&&v.current.focus()},K=()=>{t.current?.showModal(),L(!0),setTimeout(B,0)},N=()=>{L(!1),t.current?.close()};W("Escape",N);const S=()=>{n?.pathLocator&&(i&&!p.some(e=>e.pathLocator===n.pathLocator)&&$([...p,n]),z(n),P(n.pathLocator),k(_(n.pathLocator,o)),N())};return b`
		<div class="actions" part="actions">
			<button
				class="action-open"
				type="button"
				@click=${K}
				part="action-open"
			>
				<slot name="button-before"></slot>
				<div class="path-text">
					<span>${R}</span>
				</div>
				<slot name="button-after"></slot>
			</button>
			${O(!m&&!!d,()=>b` <button
						@click=${A}
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
		${O(j(i,p.length),()=>b`
				<div id="chips" part="chips" class="row">
					${p.map(e=>b`
							<div class="chip">
								<span>${M(e)}</span>
								<button
									class="chip__clear"
									@click=${r=>I({item:e,ev:r})}
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
			${J(e=>{t.current=e})}
		>
			<header class="dialog-header" part="header">
				<h1 class="dialog-heading" part="heading">${s}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.highlightedNode=${n}
					@highlighted-node-changed=${Q(u)}
					.searchPlaceholder=${x}
					.searchGlobalPlaceholder=${w}
					.searchMinLength=${h}
					.searchDebounceTimeout=${c}
					.tree=${o}
					.opened=${D}
					.nodesOnNodePath=${l}
					@node-dblclicked=${S}
					@on-data-plane-changed=${q}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<p class="dialog-footer-button-container">
					<button
						?disabled=${!n?.pathLocator}
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
						@click=${N}
					>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`};C.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","node-path","selected-node","no-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",H(C,{styleSheets:[U]}));
