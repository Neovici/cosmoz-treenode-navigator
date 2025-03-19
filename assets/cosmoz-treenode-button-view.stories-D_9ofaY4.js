import{x as d}from"./lit-element-D-o1_RG-.js";import{c as Z,u as k,b as ee,d as R,e as oe,f as P,g as M,h as te,n as N,i as ne,l as ae,j as re,T as se,a as le}from"./tree-data-C9d7u8KF.js";import"./iframe-fj4Q5HIO.js";const ie=Z`
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

		color: #101010;
		font-size: 14px;

		background-color: white;
		border: 0px none rgb(16, 16, 16);
		box-shadow: 0 2px 4px 0 #e5e5e5;

		transition-behavior: normal, normal;
		transition-delay: 0s, 0s;
		transition-duration: 0.28s, 0.3s;
		transition-property: box-shadow, background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), ease;
	}

	.actions button:hover {
		box-shadow: 0 2px 3px 0 rgb(0 0 0 / 30%);
	}

	.actions__open-dialog {
		min-width: 180px;
	}

	.actions__clear {
		flex-basis: 100px;
		flex-grow: 0;
		flex-shrink: 0;
	}

	.actions__open-dialog + .actions__clear {
		margin-left: 0;
	}

	.open {
		flex: auto;
	}

	.pathToNode {
		max-width: 320px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		direction: rtl;
		text-align: left;
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
	}

	.dialog-footer-button:not(:disabled):active {
		border: 1px outset rgb(164, 171, 174);
	}

	.dialog-footer-button:disabled {
		color: #a8a8a8;
		background-color: #f2f2f2;
		cursor: default;
		user-select: none;
	}
`,ce=(o,a)=>{const s=r=>{if(r.key===o&&a instanceof Function)return r.preventDefault(),a()};k(()=>(document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}))},de=(o,a)=>{let s;const r=[];return(...m)=>new Promise((x,f)=>{clearTimeout(s),s=setTimeout(()=>{const g=[...r];r.length=0,Promise.resolve(o(...m)).then(l=>{g.forEach(({resolve:n})=>n(l))},l=>{g.forEach(({reject:n})=>n(l))})},a),r.push({resolve:x,reject:f})})},A=({tree:o,multiSelection:a=!1,dialogText:s,buttonTextPlaceholder:r,searchPlaceholder:m,noReset:x=!1,searchGlobalPlaceholder:f,searchMinLength:g,nodePath:l})=>{const n=R(null),w=R(null),[i,_]=oe("highlightedNode"),[I,L]=P(!1),[b,$]=P([]),[c,v]=P([]);k(()=>{l&&o&&$(M(l,o))},[l,o]),k(()=>{var e,t;n.current&&(w.current=(t=(e=n.current.querySelector("cosmoz-treenode-navigator"))==null?void 0:e.shadowRoot)==null?void 0:t.querySelector("cosmoz-input"))},[n.current]);const V=te(()=>!Array.isArray(b)||b.length===0?r||"":b.filter(e=>e).map(e=>e[o.searchProperty]).join(" / "),[b,o]),q=()=>{$([]),v([]),_(null)},K=!x&&!!i,H=({item:e,ev:t})=>{v(c.filter(S=>S!==e)),t.preventDefault(),t.stopPropagation()},J=e=>e.name,Q=(e,t)=>e&&t>0,U=de(()=>{var e,t;(t=(e=n.current)==null?void 0:e.fit)==null||t.call(e)},50),X=()=>{w.current&&w.current.focus()},Y=()=>{var e;(e=n.current)==null||e.showModal(),L(!0),setTimeout(X,0)},y=()=>{var e;L(!1),(e=n.current)==null||e.close()};ce("Escape",y);const T=()=>{if(!i)return;const e=i.pathLocator,t=re(e,o);$(M(e,o)),a&&t&&(c.some(S=>S.pathLocator===e)||v([...c,t])),y()};return d`
		<div class="actions" part="actions">
			<button
				class="actions__open-dialog"
				type="button"
				@click=${Y}
				part="action-open"
			>
				${V}
			</button>
			${N(K,()=>d` <button
						@click=${q}
						class="actions__clear"
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
		${N(Q(a,c.length),()=>d`
				<div id="chips" part="chips" class="row">
					${c.map(e=>d`
							<div class="chip">
								<span>${J(e)}</span>
								<button
									class="chip__clear"
									@click=${t=>H({item:e,ev:t})}
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
			${ne(e=>{n.current=e})}
		>
			<header class="dialog-header" part="header">
				<h1 class="dialog-heading" part="heading">${s}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.highlightedNode=${i}
					@highlighted-node-changed=${ae(_)}
					.searchPlaceholder=${m}
					.searchGlobalPlaceholder=${f}
					.searchMinLength=${g}
					.tree=${o}
					.opened=${I}
					@select-node=${T}
					@node-dblclicked=${T}
					@on-data-plane-changed=${U}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<p class="dialog-footer-button-container">
					<button
						?disabled=${!(i!=null&&i.pathLocator)}
						autofocus
						class="dialog-footer-button"
						part="select-button"
						@click=${T}
					>
						Select
					</button>
					<button
						class="dialog-footer-button"
						part="cancel-button"
						@click=${y}
					>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`};A.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","node-path"];customElements.define("cosmoz-treenode-button-view",ee(A,{styleSheets:[ie]}));const ge={title:"Components/CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},noReset:{control:"boolean"},multiSelection:{control:"boolean"}}},z=o=>{const a=new se(le);return d`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${a}
                button-text-placeholder=${o.buttonTextPlaceholder}
                dialog-text=${o.dialogText}
                search-placeholder=${o.searchPlaceholder}
                search-global-placeholder=${o.searchGlobalPlaceholder}
                .searchMinLength=${o.searchMinLength}
                .noReset=${o.noReset}
                .multiSelection=${o.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    `},h=z.bind({});h.args={buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,noReset:!1,multiSelection:!1};const p=z.bind({});p.args={buttonTextPlaceholder:"Select multiple nodes",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,noReset:!1,multiSelection:!0};const u=z.bind({});u.args={buttonTextPlaceholder:"Select a node (no reset)",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,noReset:!0,multiSelection:!1};var C,D,G;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...(G=(D=h.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var E,F,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var B,W,j;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...(j=(W=u.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const be=["Default","WithMultiSelection","WithNoReset"];export{h as Default,p as WithMultiSelection,u as WithNoReset,be as __namedExportsOrder,ge as default};
