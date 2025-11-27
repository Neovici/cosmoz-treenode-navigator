import{c as ee,u as m,b as oe,d as D,e as g,f as O,g as R,h as te,i as A,n as ne,l as re}from"./tree-data-XeC6_yG9.js";import{x as f}from"./iframe-DVSRx4UG.js";const ae=ee`
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
`,se=(n,s)=>{const i=a=>{if(a.key===n&&s instanceof Function)return a.preventDefault(),s()};m(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}))},ie=(n,s)=>{let i;const a=[];return(...b)=>new Promise((x,v)=>{clearTimeout(i),i=setTimeout(()=>{const u=[...a];a.length=0,Promise.resolve(n(...b)).then(c=>{u.forEach(({resolve:t})=>t(c))},c=>{u.forEach(({reject:t})=>t(c))})},s),a.push({resolve:x,reject:v})})},B=({tree:n,multiSelection:s=!1,dialogText:i,buttonTextPlaceholder:a,searchPlaceholder:b,noReset:x=!1,searchGlobalPlaceholder:v,searchMinLength:u=3,searchDebounceTimeout:c=2e3})=>{const t=D(null),w=D(null),[r,h]=g("highlightedNode"),[d,P]=g("selectedNode"),[y,L]=g("nodePath",""),[l,$]=g("nodesOnNodePath",[]),[I,E]=O(!1),[p,k]=O([]);m(()=>{t.current&&(w.current=t.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[t.current]),m(()=>{d&&d!==r&&h(d)},[d]),m(()=>{if(!(y||n))return;const e=R(y,n);$(e);const o=e.length>0?e[e.length-1]:null;o&&o!==r&&h(o)},[y,n]);const X=te(()=>!Array.isArray(l)||l.length===0?a||"":l.filter(e=>e).map(e=>e[n.searchProperty]).join(" / "),[l,n]),Y=()=>{$([]),k([]),h(null),P(null),L("")},j=({item:e,ev:o})=>{k(p.filter(z=>z!==e)),o.preventDefault(),o.stopPropagation()},q=e=>e.name,H=(e,o)=>e&&o>0,K=ie(()=>{t.current?.fit?.()},50),F=()=>{w.current&&w.current.focus()},G=()=>{t.current?.showModal(),E(!0),setTimeout(F,0)},N=()=>{E(!1),t.current?.close()};se("Escape",N);const U=e=>{const o=t.current;if(!o)return;const z=e.clientX,V=e.clientY,T=o.getBoundingClientRect(),J=T.left,Q=T.top,M=C=>{const W=C.clientX-z,Z=C.clientY-V;o.style.left=`${J+W}px`,o.style.top=`${Q+Z}px`,o.style.margin="0"},_=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",_)},S=()=>{r?.pathLocator&&(s&&!p.some(e=>e.pathLocator===r.pathLocator)&&k([...p,r]),P(r),L(r.pathLocator),$(R(r.pathLocator,n)),N())};return f`
		<div class="actions" part="actions">
			<button
				class="action-open"
				type="button"
				@click=${G}
				part="action-open"
			>
				<slot name="button-before"></slot>
				<div class="path-text">
					<span>${X}</span>
				</div>
				<slot name="button-after"></slot>
			</button>
			${A(!x&&!!d,()=>f` <button
						@click=${Y}
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
		${A(H(s,p.length),()=>f`
				<div id="chips" part="chips" class="row">
					${p.map(e=>f`
							<div class="chip">
								<span>${q(e)}</span>
								<button
									class="chip__clear"
									@click=${o=>j({item:e,ev:o})}
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
			${ne(e=>{t.current=e})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${U}
			>
				<h1 class="dialog-heading" part="heading">${i}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.highlightedNode=${r}
					@highlighted-node-changed=${re(h)}
					.searchPlaceholder=${b}
					.searchGlobalPlaceholder=${v}
					.searchMinLength=${u}
					.searchDebounceTimeout=${c}
					.tree=${n}
					.opened=${I}
					.nodesOnNodePath=${l}
					@node-dblclicked=${S}
					@on-data-plane-changed=${K}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<p class="dialog-footer-button-container">
					<button
						?disabled=${!r?.pathLocator}
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
	`};B.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","node-path","selected-node","no-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",oe(B,{styleSheets:[ae]}));
