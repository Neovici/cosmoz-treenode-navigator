import{c as W,u as C,a as ce,b as re,d as F,e as H,f as le,g as q,h as ie,i as de,n as he,j as ue,T as we,k as ge}from"./tree-data-I0dGb9z1.js";import{b as m,j as d,N as p,D as _}from"./iframe-CsJmwwL_.js";import"./preload-helper-PPVm8Dsz.js";const pe=W`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,be=W`
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

	:host([has-prefix]) .default-icon {
		display: none;
	}

	.path-text {
		${pe}
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
`,me=(e,a)=>{const t=o=>{if(o.key===e&&a instanceof Function)return o.preventDefault(),a()};C(()=>(document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}))},ye=m`<svg
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
</svg>`,O=({tree:e,dialogText:a,buttonTextPlaceholder:t,searchPlaceholder:o,showReset:u=!1,searchGlobalPlaceholder:y,searchMinLength:D=3,searchDebounceTimeout:s=2e3})=>{const l=re(),r=F(null),h=F(null),[v,w]=H("nodePath",""),[L,R]=H("opened",!1),[M,j]=le(""),f=q(()=>ie(v,e),[v,e]),V=q(()=>!Array.isArray(f)||f.length===0?t||"":f.filter(i=>i).map(i=>i[e.searchProperty]).join(" / "),[f,e,t]),Y=de(i=>{const E=i.target.assignedNodes().length>0;l.toggleAttribute("has-prefix",E)},[l]);C(()=>{r.current&&(h.current=r.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[r.current]),C(()=>{L?(r.current?.showModal(),setTimeout(()=>h.current?.focus(),0)):r.current?.close()},[L]);const K=()=>{w("")},X=()=>{h.current&&h.current.focus()},U=()=>{r.current?.showModal(),R(!0),setTimeout(X,0)},$=()=>{R(!1),r.current?.close()};me("Escape",$);const Z=i=>{const b=r.current;if(!b)return;const E=i.clientX,te=i.clientY,N=b.getBoundingClientRect(),ne=N.left,oe=N.top,I=G=>{const ae=G.clientX-E,se=G.clientY-te;b.style.left=`${ne+ae}px`,b.style.top=`${oe+se}px`,b.style.margin="0"},A=()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",A)},J=i=>{i.preventDefault();const b=i.detail.value;b&&(w(b),$())},Q=i=>{j(i.detail.value)},ee=()=>{M&&(w(M),$())};return m`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				data-testid="open-button"
				@click=${U}
				part="action-open"
			>
				<span slot="prefix">
					<slot name="button-before" @slotchange=${Y}></slot>
					${ye}
				</span>
				<div class="path-text">
					<span>${V}</span>
				</div>
				<slot name="button-after" slot="suffix"></slot>
			</cosmoz-button>
			${he(u&&!!v,()=>m`<cosmoz-button
						variant="tertiary"
						@click=${K}
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
			${ue(i=>{r.current=i})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${Z}
			>
				<h1 class="dialog-heading" part="heading">${a}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${v}
					@node-path-changed=${J}
					@highlighted-node-path-changed=${Q}
					.searchPlaceholder=${o}
					.searchGlobalPlaceholder=${y}
					.searchMinLength=${D}
					.searchDebounceTimeout=${s}
					.tree=${e}
					.opened=${L}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!M}
						@click=${ee}
						data-testid="select-button"
						part="select-button"
					>
						Select
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${$}
						data-testid="cancel-button"
						part="cancel-button"
					>
						Cancel
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};O.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",ce(O,{styleSheets:[be]}));const{expect:n,userEvent:g,waitFor:c}=__STORYBOOK_MODULE_TEST__,x=new we(ge),$e={title:"CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},showReset:{control:"boolean"},nodePath:{control:"text"}},args:{buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,showReset:!1,nodePath:""}},B={render:e=>m`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${x}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Renders with placeholder text",async()=>{const o=await d(t,"open-button");n(o).toBeTruthy(),n(o?.textContent?.trim()).toContain("Select a node")})}},T={args:{nodePath:"1.2.3"},render:e=>m`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${x}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Button renders selected path",async()=>{await c(async()=>{const o=await d(t,"open-button");n(o?.textContent?.trim()).toContain("C: / Windows / System")})})}},P={args:{showReset:!0,nodePath:"1.2.3"},render:e=>m`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${x}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is shown when showReset is true and node is selected",async()=>{await c(async()=>{const o=await d(t,"reset-button");n(o).toBeTruthy()})}),await a("Reset button clears selection",async()=>{const o=await d(t,"reset-button");await g.click(o),await c(()=>{n(t.nodePath).toBe("");const u=_(t,"reset-button");n(u).toBeNull()})})}},S={args:{showReset:!1,nodePath:"1.2.3"},render:e=>m`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${x}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is hidden when showReset is false",async()=>{await c(()=>{const o=_(t,"reset-button");n(o).toBeNull()})})}},k={render:e=>m`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${x}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Opens dialog on button click",async()=>{const o=await d(t,"open-button");await g.click(o),await c(async()=>{const u=await d(t,"dialog");n(u.open).toBe(!0)})}),await a("Closes dialog on cancel button click",async()=>{const o=await d(t,"dialog"),u=await d(t,"cancel-button");await g.click(u),await c(()=>{n(o.open).toBe(!1)})})}},z={render:e=>m`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${x}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view"),o=async()=>{const s=await d(t,"open-button");await g.click(s),await c(async()=>{const l=await d(t,"dialog");n(l.open).toBe(!0)})},u=()=>t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),y=async()=>await d(t,"select-button"),D=async()=>await d(t,"cancel-button");await a("Select button is initially disabled",async()=>{await o(),await c(async()=>{const s=await y();n(s).toBeTruthy(),n(s.hasAttribute("disabled")).toBe(!0)})}),await a("Single-clicking a node enables the Select button",async()=>{const s=u();await c(async()=>{const r=await p(s,"node");n(r.length).toBeGreaterThan(0)});const l=await p(s,"node");await g.click(l[0]),await c(async()=>{const r=await y();n(r.hasAttribute("disabled")).toBe(!1)})}),await a("Clicking Select confirms selection and closes dialog",async()=>{const s=await y();await g.click(s),await c(async()=>{const l=await d(t,"dialog");n(l.open).toBe(!1),n(t.nodePath).toBe("1")})}),await a("Cancel after highlighting does not change nodePath",async()=>{const s=t.nodePath;await o();const l=u();await c(async()=>{const w=await p(l,"node");n(w.length).toBeGreaterThan(0)});const r=await p(l,"node-arrow");await g.click(r[0]),await c(async()=>{const w=await p(l,"node");n(w.length).toBeGreaterThan(0)});const h=await p(l,"node");await g.click(h[0]),await c(async()=>{const w=await y();n(w.hasAttribute("disabled")).toBe(!1)});const v=await D();await g.click(v),await c(async()=>{const w=await d(t,"dialog");n(w.open).toBe(!1),n(t.nodePath).toBe(s)})}),await a("Double-click on a node selects it and closes dialog",async()=>{await o();const s=u();await c(async()=>{const h=await p(s,"node");n(h.length).toBeGreaterThan(0)});const l=await p(s,"node-arrow");await g.click(l[0]),await c(async()=>{const h=await p(s,"node");n(h.length).toBeGreaterThan(0)});const r=await p(s,"node");await g.dblClick(r[0]),await c(async()=>{const h=await d(t,"dialog");n(h.open).toBe(!1),n(t.nodePath).not.toBe("1")})})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      nodePath: string;
    };
    await step('Renders with placeholder text', async () => {
      const button = await findByShadowTestId(el, 'open-button');
      expect(button).toBeTruthy();
      expect(button?.textContent?.trim()).toContain('Select a node');
    });
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Button renders selected path', async () => {
      await waitFor(async () => {
        const button = await findByShadowTestId(el, 'open-button');
        // nodePath '1.2.3' corresponds to 'C: / Windows / System' in the tree
        expect(button?.textContent?.trim()).toContain('C: / Windows / System');
      });
    });
  }
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    showReset: true,
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      nodePath: string;
    };
    await step('Reset button is shown when showReset is true and node is selected', async () => {
      await waitFor(async () => {
        const resetButton = await findByShadowTestId(el, 'reset-button');
        expect(resetButton).toBeTruthy();
      });
    });
    await step('Reset button clears selection', async () => {
      const resetButton = await findByShadowTestId(el, 'reset-button');
      await userEvent.click(resetButton);
      await waitFor(() => {
        expect(el.nodePath).toBe('');
        // Reset button should disappear when no node is selected
        const resetButtonAfter = queryByShadowTestId(el, 'reset-button');
        expect(resetButtonAfter).toBeNull();
      });
    });
  }
}`,...P.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    showReset: false,
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Reset button is hidden when showReset is false', async () => {
      await waitFor(() => {
        const resetButton = queryByShadowTestId(el, 'reset-button');
        expect(resetButton).toBeNull();
      });
    });
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Opens dialog on button click', async () => {
      const openButton = await findByShadowTestId(el, 'open-button');
      await userEvent.click(openButton);
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    });
    await step('Closes dialog on cancel button click', async () => {
      const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
      const cancelButton = await findByShadowTestId(el, 'cancel-button');
      await userEvent.click(cancelButton);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
      });
    });
  }
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      nodePath: string;
    };
    const openDialog = async () => {
      const openButton = await findByShadowTestId(el, 'open-button');
      await userEvent.click(openButton);
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    };
    const getNavigator = () => el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    const getSelectButton = async () => (await findByShadowTestId(el, 'select-button')) as HTMLElement;
    const getCancelButton = async () => await findByShadowTestId(el, 'cancel-button');
    await step('Select button is initially disabled', async () => {
      await openDialog();
      await waitFor(async () => {
        const selectButton = await getSelectButton();
        expect(selectButton).toBeTruthy();
        expect(selectButton.hasAttribute('disabled')).toBe(true);
      });
    });
    await step('Single-clicking a node enables the Select button', async () => {
      const navigator = getNavigator();

      // Wait for nodes to render and click the first one
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(navigator, 'node');
        expect(nodes.length).toBeGreaterThan(0);
      });
      const allNodes = await findAllByShadowTestId(navigator, 'node');
      await userEvent.click(allNodes[0]);
      await waitFor(async () => {
        const selectButton = await getSelectButton();
        expect(selectButton.hasAttribute('disabled')).toBe(false);
      });
    });
    await step('Clicking Select confirms selection and closes dialog', async () => {
      const selectButton = await getSelectButton();
      await userEvent.click(selectButton);
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should be updated (C: drive has path '1')
        expect(el.nodePath).toBe('1');
      });
    });
    await step('Cancel after highlighting does not change nodePath', async () => {
      // Store current nodePath
      const previousNodePath = el.nodePath;
      await openDialog();
      const navigator = getNavigator();

      // Navigate into C: drive first to see children
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(navigator, 'node');
        expect(nodes.length).toBeGreaterThan(0);
      });

      // Click arrow to navigate into C: drive
      const allArrows = await findAllByShadowTestId(navigator, 'node-arrow');
      await userEvent.click(allArrows[0]);

      // Wait for children to render and highlight a different node
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(navigator, 'node');
        expect(nodes.length).toBeGreaterThan(0);
      });
      const allNodes = await findAllByShadowTestId(navigator, 'node');
      await userEvent.click(allNodes[0]);

      // Verify Select button is enabled
      await waitFor(async () => {
        const selectButton = await getSelectButton();
        expect(selectButton.hasAttribute('disabled')).toBe(false);
      });

      // Click Cancel
      const cancelButton = await getCancelButton();
      await userEvent.click(cancelButton);
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should remain unchanged
        expect(el.nodePath).toBe(previousNodePath);
      });
    });
    await step('Double-click on a node selects it and closes dialog', async () => {
      await openDialog();
      const navigator = getNavigator();

      // Navigate into C: drive first
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(navigator, 'node');
        expect(nodes.length).toBeGreaterThan(0);
      });

      // Click arrow to navigate into C: drive
      const allArrows = await findAllByShadowTestId(navigator, 'node-arrow');
      await userEvent.click(allArrows[0]);

      // Wait for children and double-click a node (e.g., Windows folder)
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(navigator, 'node');
        expect(nodes.length).toBeGreaterThan(0);
      });
      const allNodes = await findAllByShadowTestId(navigator, 'node');
      await userEvent.dblClick(allNodes[0]);
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should be updated to the double-clicked node
        expect(el.nodePath).not.toBe('1'); // Changed from initial C: selection
      });
    });
  }
}`,...z.parameters?.docs?.source}}};const Be=["Default","WithPreselectedNode","WithShowReset","WithoutReset","DialogInteraction","SelectButtonInteraction"];export{B as Default,k as DialogInteraction,z as SelectButtonInteraction,T as WithPreselectedNode,P as WithShowReset,S as WithoutReset,Be as __namedExportsOrder,$e as default};
