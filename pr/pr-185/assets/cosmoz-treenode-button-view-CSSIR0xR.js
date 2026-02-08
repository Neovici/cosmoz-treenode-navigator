import{c as oo,u as f,b as to,d as D,e as b,f as O,g as R,h as eo,i as A,n as no,l as ro}from"./tree-data-Ch9gCzga.js";import{b as g}from"./iframe-BctXiqCg.js";const ao=oo`
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

	.dialog-footer-button[part='select-button'] {
		background: var(--cosmoz-button-primary-bg-color, #2196f3);
		color: var(--cosmoz-button-primary-color, #fff);
		border-color: var(--cosmoz-button-primary-bg-color, #2196f3);
	}

	.dialog-footer-button[part='select-button']:not(:disabled):hover {
		background: var(--cosmoz-button-primary-hover-bg-color, #1976d2);
		border-color: var(--cosmoz-button-primary-hover-bg-color, #1976d2);
	}

	.dialog-footer-button[part='select-button']:not(:disabled):active {
		background: hsl(
			from var(--cosmoz-button-primary-hover-bg-color, #1976d2) h s calc(l - 5)
		);
	}

	.dialog-footer-button[part='cancel-button'] {
		background: var(--cosmoz-button-secondary-bg-color, white);
		color: var(--cosmoz-button-secondary-color, #000);
		border: 1px solid var(--cosmoz-button-secondary-border-color, #ccc);
	}

	.dialog-footer-button[part='cancel-button']:hover {
		background: var(--cosmoz-button-secondary-hover-bg-color, #f5f5f5);
	}

	.dialog-footer-button[part='cancel-button']:active {
		background: hsl(
			from var(--cosmoz-button-secondary-hover-bg-color, #f5f5f5) h s
				calc(l - 5)
		);
	}
`,so=(n,s)=>{let i;const a=[];return(...m)=>new Promise((x,v)=>{clearTimeout(i),i=setTimeout(()=>{const u=[...a];a.length=0,Promise.resolve(n(...m)).then(c=>{u.forEach(({resolve:e})=>e(c))},c=>{u.forEach(({reject:e})=>e(c))})},s),a.push({resolve:x,reject:v})})},io=(n,s)=>{const i=a=>{if(a.key===n&&s instanceof Function)return a.preventDefault(),s()};f(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}))},B=({tree:n,multiSelection:s=!1,dialogText:i,buttonTextPlaceholder:a,searchPlaceholder:m,noReset:x=!1,searchGlobalPlaceholder:v,searchMinLength:u=3,searchDebounceTimeout:c=2e3})=>{const e=D(null),w=D(null),[r,h]=b("highlightedNode"),[d,P]=b("selectedNode"),[y,L]=b("nodePath",""),[l,k]=b("nodesOnNodePath",[]),[I,E]=O(!1),[p,$]=O([]);f(()=>{e.current&&(w.current=e.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[e.current]),f(()=>{d&&d!==r&&h(d)},[d]),f(()=>{if(!(y||n))return;const o=R(y,n);k(o);const t=o.length>0?o[o.length-1]:null;t&&t!==r&&h(t)},[y,n]);const X=eo(()=>!Array.isArray(l)||l.length===0?a||"":l.filter(o=>o).map(o=>o[n.searchProperty]).join(" / "),[l,n]),Y=()=>{k([]),$([]),h(null),P(null),L("")},j=({item:o,ev:t})=>{$(p.filter(N=>N!==o)),t.preventDefault(),t.stopPropagation()},q=o=>o.name,H=(o,t)=>o&&t>0,K=so(()=>{e.current?.fit?.()},50),F=()=>{w.current&&w.current.focus()},G=()=>{e.current?.showModal(),E(!0),setTimeout(F,0)},z=()=>{E(!1),e.current?.close()};io("Escape",z);const U=o=>{const t=e.current;if(!t)return;const N=o.clientX,V=o.clientY,T=t.getBoundingClientRect(),J=T.left,Q=T.top,M=C=>{const W=C.clientX-N,Z=C.clientY-V;t.style.left=`${J+W}px`,t.style.top=`${Q+Z}px`,t.style.margin="0"},_=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",_)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",_)},S=()=>{r?.pathLocator&&(s&&!p.some(o=>o.pathLocator===r.pathLocator)&&$([...p,r]),P(r),L(r.pathLocator),k(R(r.pathLocator,n)),z())};return g`
		<div class="actions" part="actions">
			<button
				class="action-open"
				type="button"
				data-testid="open-button"
				@click=${G}
				part="action-open"
			>
				<slot name="button-before"></slot>
				<div class="path-text">
					<span>${X}</span>
				</div>
				<slot name="button-after"></slot>
			</button>
			${A(!x&&!!d,()=>g` <button
						@click=${Y}
						class="action-reset"
						data-testid="reset-button"
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
		${A(H(s,p.length),()=>g`
				<div id="chips" part="chips" class="row">
					${p.map(o=>g`
							<div class="chip">
								<span>${q(o)}</span>
								<button
									class="chip__clear"
									@click=${t=>j({item:o,ev:t})}
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
			data-testid="dialog"
			${no(o=>{e.current=o})}
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
					@highlighted-node-changed=${ro(h)}
					.searchPlaceholder=${m}
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
						data-testid="select-button"
						part="select-button"
						@click=${S}
					>
						Select
					</button>
					<button
						class="dialog-footer-button"
						data-testid="cancel-button"
						part="cancel-button"
						@click=${z}
					>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`};B.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","node-path","selected-node","no-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",to(B,{styleSheets:[ao]}));
