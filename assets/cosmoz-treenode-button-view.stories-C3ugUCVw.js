import{x as h}from"./lit-element-D-o1_RG-.js";import{c as Z,u as A,b as ee,d as z,e as D,f as L,g as oe,n as R,h as te,l as M,T as ne,a as re}from"./tree-data-CthYucwk.js";import"./iframe-DDon6Cxa.js";const ae=Z`
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
		font-size: 14px;

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
`,se=(o,a)=>{const c=s=>{if(s.key===o&&a instanceof Function)return s.preventDefault(),a()};A(()=>(document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}))},ce=(o,a)=>{let c;const s=[];return(...m)=>new Promise((x,f)=>{clearTimeout(c),c=setTimeout(()=>{const b=[...s];s.length=0,Promise.resolve(o(...m)).then(i=>{b.forEach(({resolve:n})=>n(i))},i=>{b.forEach(({reject:n})=>n(i))})},a),s.push({resolve:x,reject:f})})},I=({tree:o,multiSelection:a=!1,dialogText:c,buttonTextPlaceholder:s,searchPlaceholder:m,noReset:x=!1,searchGlobalPlaceholder:f,searchMinLength:b=3,searchDebounceTimeout:i=2e3})=>{const n=z(null),v=z(null),[r,y]=D("highlightedNode"),[l,P]=D("nodesOnNodePath",[]),[V,S]=L(!1),[d,w]=L([]);A(()=>{var e,t;n.current&&(v.current=(t=(e=n.current.querySelector("cosmoz-treenode-navigator"))==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("cosmoz-input"))},[n.current]);const j=oe(()=>!Array.isArray(l)||l.length===0?s||"":l.filter(e=>e).map(e=>e[o.searchProperty]).join(" / "),[l,o]),q=()=>{P([]),w([]),y(null)},K=({item:e,ev:t})=>{w(d.filter(Y=>Y!==e)),t.preventDefault(),t.stopPropagation()},H=e=>e.name,J=(e,t)=>e&&t>0,Q=ce(()=>{var e,t;(t=(e=n.current)==null?void 0:e.fit)==null||t.call(e)},50),U=()=>{v.current&&v.current.focus()},X=()=>{var e;(e=n.current)==null||e.showModal(),S(!0),setTimeout(U,0)},$=()=>{var e;S(!1),(e=n.current)==null||e.close()};se("Escape",$);const k=()=>{r!=null&&r.pathLocator&&(a&&!d.some(e=>e.pathLocator===r.pathLocator)&&w([...d,r]),$())};return h`
		<div class="actions" part="actions">
			<button
				class="action-open"
				type="button"
				@click=${X}
				part="action-open"
			>
				<div class="path-text">
					<span>${j}</span>
				</div>
			</button>
			${R(!x&&!!r,()=>h` <button
						@click=${q}
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
		${R(J(a,d.length),()=>h`
				<div id="chips" part="chips" class="row">
					${d.map(e=>h`
							<div class="chip">
								<span>${H(e)}</span>
								<button
									class="chip__clear"
									@click=${t=>K({item:e,ev:t})}
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
			${te(e=>{n.current=e})}
		>
			<header class="dialog-header" part="header">
				<h1 class="dialog-heading" part="heading">${c}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.highlightedNode=${r}
					@highlighted-node-changed=${M(y)}
					.searchPlaceholder=${m}
					.searchGlobalPlaceholder=${f}
					.searchMinLength=${b}
					.searchDebounceTimeout=${i}
					.tree=${o}
					.opened=${V}
					.nodesOnNodePath=${l}
					@nodes-on-node-path-changed=${M(P)}
					@node-dblclicked=${k}
					@on-data-plane-changed=${Q}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<p class="dialog-footer-button-container">
					<button
						?disabled=${!(r!=null&&r.pathLocator)}
						autofocus
						class="dialog-footer-button"
						part="select-button"
						@click=${k}
					>
						Select
					</button>
					<button
						class="dialog-footer-button"
						part="cancel-button"
						@click=${$}
					>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`};I.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","no-reset"];customElements.define("cosmoz-treenode-button-view",ee(I,{styleSheets:[ae]}));const he={title:"Components/CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},noReset:{control:"boolean"},multiSelection:{control:"boolean"}}},T=o=>{const a=new ne(re);return h`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${a}
                button-text-placeholder=${o.buttonTextPlaceholder}
                dialog-text=${o.dialogText}
                search-placeholder=${o.searchPlaceholder}
                search-global-placeholder=${o.searchGlobalPlaceholder}
                .searchMinLength=${o.searchMinLength}
                .searchDebounceTimeout=${o.searchDebounceTimeout}
                .noReset=${o.noReset}
                .multiSelection=${o.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    `},u=T.bind({});u.args={buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!1};const p=T.bind({});p.args={buttonTextPlaceholder:"Select multiple nodes",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!0};const g=T.bind({});g.args={buttonTextPlaceholder:"Select a node (no reset)",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!0,multiSelection:!1};var N,C,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var G,E,O;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var F,B,W;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...(W=(B=g.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const ue=["Default","WithMultiSelection","WithNoReset"];export{u as Default,p as WithMultiSelection,g as WithNoReset,ue as __namedExportsOrder,he as default};
