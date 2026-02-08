import{c as F,u as L,a as ne,b as ae,d as H,e as A,f as se,g as G,h as re,i as ce,n as le,j as ie,T as de,k as he}from"./tree-data-BObDBIfY.js";import{b as w}from"./iframe-Bi2p_YJy.js";import"./preload-helper-PPVm8Dsz.js";const ue=F`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,ge=F`
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
		${ue}
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
`,pe=(e,a)=>{const t=n=>{if(n.key===e&&a instanceof Function)return n.preventDefault(),a()};L(()=>(document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}))},we=w`<svg
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
</svg>`,W=({tree:e,dialogText:a,buttonTextPlaceholder:t,searchPlaceholder:n,showReset:h=!1,searchGlobalPlaceholder:m,searchMinLength:R=3,searchDebounceTimeout:s=2e3})=>{const l=ae(),r=H(null),d=H(null),[b,u]=A("nodePath",""),[z,M]=A("opened",!1),[q,_]=se(""),v=G(()=>re(b,e),[b,e]),O=G(()=>!Array.isArray(v)||v.length===0?t||"":v.filter(i=>i).map(i=>i[e.searchProperty]).join(" / "),[v,e,t]),j=ce(i=>{const k=i.target.assignedNodes().length>0;l.toggleAttribute("has-prefix",k)},[l]);L(()=>{r.current&&(d.current=r.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[r.current]),L(()=>{z?(r.current?.showModal(),setTimeout(()=>d.current?.focus(),0)):r.current?.close()},[z]);const I=()=>{u("")},V=()=>{d.current&&d.current.focus()},Y=()=>{r.current?.showModal(),M(!0),setTimeout(V,0)},x=()=>{M(!1),r.current?.close()};pe("Escape",x);const K=i=>{const p=r.current;if(!p)return;const k=i.clientX,J=i.clientY,E=p.getBoundingClientRect(),Q=E.left,ee=E.top,D=N=>{const te=N.clientX-k,oe=N.clientY-J;p.style.left=`${Q+te}px`,p.style.top=`${ee+oe}px`,p.style.margin="0"},C=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",C)},X=i=>{i.preventDefault();const p=i.detail.value;p&&(u(p),x())},U=i=>{_(i.detail.value)},Z=()=>{q&&(u(q),x())};return w`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				@click=${Y}
				part="action-open"
			>
				<span slot="prefix">
					<slot name="button-before" @slotchange=${j}></slot>
					${we}
				</span>
				<div class="path-text">
					<span>${O}</span>
				</div>
				<slot name="button-after" slot="suffix"></slot>
			</cosmoz-button>
			${le(h&&!!b,()=>w`<cosmoz-button
						variant="tertiary"
						@click=${I}
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
			${ie(i=>{r.current=i})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${K}
			>
				<h1 class="dialog-heading" part="heading">${a}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${b}
					@node-path-changed=${X}
					@highlighted-node-path-changed=${U}
					.searchPlaceholder=${n}
					.searchGlobalPlaceholder=${m}
					.searchMinLength=${R}
					.searchDebounceTimeout=${s}
					.tree=${e}
					.opened=${z}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!q}
						@click=${Z}
						part="select-button"
					>
						Select
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${x}
						part="cancel-button"
					>
						Cancel
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};W.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",ne(W,{styleSheets:[ge]}));const{expect:o,userEvent:g,waitFor:c}=__STORYBOOK_MODULE_TEST__,y=new de(he),ve={title:"CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},showReset:{control:"boolean"},nodePath:{control:"text"}},args:{buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,showReset:!1,nodePath:""}},$={render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Renders with placeholder text",async()=>{const n=t.shadowRoot?.querySelector('cosmoz-button[part="action-open"]');o(n).toBeTruthy(),o(n?.textContent?.trim()).toContain("Select a node")})}},S={args:{nodePath:"1.2.3"},render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Button renders selected path",async()=>{await c(()=>{const n=t.shadowRoot?.querySelector('cosmoz-button[part="action-open"]');o(n?.textContent?.trim()).toContain("C: / Windows / System")})})}},f={args:{showReset:!0,nodePath:"1.2.3"},render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is shown when showReset is true and node is selected",async()=>{await c(()=>{const n=t.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');o(n).toBeTruthy()})}),await a("Reset button clears selection",async()=>{const n=t.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');await g.click(n),await c(()=>{o(t.nodePath).toBe("");const h=t.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');o(h).toBeNull()})})}},P={args:{showReset:!1,nodePath:"1.2.3"},render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is hidden by default",async()=>{const n=t.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');o(n).toBeNull()})}},T={render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Opens dialog on button click",async()=>{const n=t.shadowRoot?.querySelector('cosmoz-button[part="action-open"]');await g.click(n),await c(()=>{const h=t.shadowRoot?.querySelector("dialog");o(h.open).toBe(!0)})}),await a("Closes dialog on cancel button click",async()=>{const n=t.shadowRoot?.querySelector("dialog"),h=n.querySelector('cosmoz-button[part="cancel-button"]');await g.click(h),await c(()=>{o(n.open).toBe(!1)})})}},B={render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view"),n=async()=>{const s=t.shadowRoot?.querySelector('cosmoz-button[part="action-open"]');await g.click(s),await c(()=>{const l=t.shadowRoot?.querySelector("dialog");o(l.open).toBe(!0)})},h=()=>t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),m=()=>t.shadowRoot?.querySelector("dialog")?.querySelector('cosmoz-button[part="select-button"]'),R=()=>t.shadowRoot?.querySelector("dialog")?.querySelector('cosmoz-button[part="cancel-button"]');await a("Select button is initially disabled",async()=>{await n(),await c(()=>{const s=m();o(s).toBeTruthy(),o(s.hasAttribute("disabled")).toBe(!0)})}),await a("Single-clicking a node enables the Select button",async()=>{const s=h();await c(()=>{const r=s.shadowRoot?.querySelectorAll(".node");o(r?.length).toBeGreaterThan(0)});const l=s.shadowRoot?.querySelector(".node");await g.click(l),await c(()=>{const r=m();o(r.hasAttribute("disabled")).toBe(!1)})}),await a("Clicking Select confirms selection and closes dialog",async()=>{const s=m();await g.click(s),await c(()=>{const l=t.shadowRoot?.querySelector("dialog");o(l.open).toBe(!1),o(t.nodePath).toBe("1")})}),await a("Cancel after highlighting does not change nodePath",async()=>{const s=t.nodePath;await n();const l=h();await c(()=>{const u=l.shadowRoot?.querySelectorAll(".node");o(u?.length).toBeGreaterThan(0)});const r=l.shadowRoot?.querySelector(".node .icon");await g.click(r),await c(()=>{const u=l.shadowRoot?.querySelectorAll(".node");o(u?.length).toBeGreaterThan(0)});const d=l.shadowRoot?.querySelector(".node");await g.click(d),await c(()=>{const u=m();o(u.hasAttribute("disabled")).toBe(!1)});const b=R();await g.click(b),await c(()=>{const u=t.shadowRoot?.querySelector("dialog");o(u.open).toBe(!1),o(t.nodePath).toBe(s)})}),await a("Double-click on a node selects it and closes dialog",async()=>{await n();const s=h();await c(()=>{const d=s.shadowRoot?.querySelectorAll(".node");o(d?.length).toBeGreaterThan(0)});const l=s.shadowRoot?.querySelector(".node .icon");await g.click(l),await c(()=>{const d=s.shadowRoot?.querySelectorAll(".node");o(d?.length).toBeGreaterThan(0)});const r=s.shadowRoot?.querySelector(".node");await g.dblClick(r),await c(()=>{const d=t.shadowRoot?.querySelector("dialog");o(d.open).toBe(!1),o(t.nodePath).not.toBe("1")})})}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
      const button = el.shadowRoot?.querySelector('cosmoz-button[part="action-open"]');
      expect(button).toBeTruthy();
      expect(button?.textContent?.trim()).toContain('Select a node');
    });
  }
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      await waitFor(() => {
        const button = el.shadowRoot?.querySelector('cosmoz-button[part="action-open"]');
        // nodePath '1.2.3' corresponds to 'C: / Windows / System' in the tree
        expect(button?.textContent?.trim()).toContain('C: / Windows / System');
      });
    });
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      await waitFor(() => {
        const resetButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');
        expect(resetButton).toBeTruthy();
      });
    });
    await step('Reset button clears selection', async () => {
      const resetButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]') as HTMLElement;
      await userEvent.click(resetButton);
      await waitFor(() => {
        expect(el.nodePath).toBe('');
        // Reset button should disappear when no node is selected
        const resetButtonAfter = el.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');
        expect(resetButtonAfter).toBeNull();
      });
    });
  }
}`,...f.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    await step('Reset button is hidden by default', async () => {
      const resetButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');
      expect(resetButton).toBeNull();
    });
  }
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      const openButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-open"]') as HTMLElement;
      await userEvent.click(openButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    });
    await step('Closes dialog on cancel button click', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
      const cancelButton = dialog.querySelector('cosmoz-button[part="cancel-button"]') as HTMLElement;
      await userEvent.click(cancelButton);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
      });
    });
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      const openButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-open"]') as HTMLElement;
      await userEvent.click(openButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    };
    const getNavigator = () => el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    const getSelectButton = () => el.shadowRoot?.querySelector('dialog')?.querySelector('cosmoz-button[part="select-button"]') as HTMLElement;
    const getCancelButton = () => el.shadowRoot?.querySelector('dialog')?.querySelector('cosmoz-button[part="cancel-button"]') as HTMLElement;
    await step('Select button is initially disabled', async () => {
      await openDialog();
      await waitFor(() => {
        const selectButton = getSelectButton();
        expect(selectButton).toBeTruthy();
        expect(selectButton.hasAttribute('disabled')).toBe(true);
      });
    });
    await step('Single-clicking a node enables the Select button', async () => {
      const navigator = getNavigator();

      // Wait for nodes to render and click the first one
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });
      const firstNode = navigator.shadowRoot?.querySelector('.node') as HTMLElement;
      await userEvent.click(firstNode);
      await waitFor(() => {
        const selectButton = getSelectButton();
        expect(selectButton.hasAttribute('disabled')).toBe(false);
      });
    });
    await step('Clicking Select confirms selection and closes dialog', async () => {
      const selectButton = getSelectButton();
      await userEvent.click(selectButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
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
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });

      // Click arrow to navigate into C: drive
      const cDriveArrow = navigator.shadowRoot?.querySelector('.node .icon') as HTMLElement;
      await userEvent.click(cDriveArrow);

      // Wait for children to render and highlight a different node
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });
      const childNode = navigator.shadowRoot?.querySelector('.node') as HTMLElement;
      await userEvent.click(childNode);

      // Verify Select button is enabled
      await waitFor(() => {
        const selectButton = getSelectButton();
        expect(selectButton.hasAttribute('disabled')).toBe(false);
      });

      // Click Cancel
      const cancelButton = getCancelButton();
      await userEvent.click(cancelButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should remain unchanged
        expect(el.nodePath).toBe(previousNodePath);
      });
    });
    await step('Double-click on a node selects it and closes dialog', async () => {
      await openDialog();
      const navigator = getNavigator();

      // Navigate into C: drive first
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });

      // Click arrow to navigate into C: drive
      const cDriveArrow = navigator.shadowRoot?.querySelector('.node .icon') as HTMLElement;
      await userEvent.click(cDriveArrow);

      // Wait for children and double-click a node (e.g., Windows folder)
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });
      const childNode = navigator.shadowRoot?.querySelector('.node') as HTMLElement;
      await userEvent.dblClick(childNode);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should be updated to the double-clicked node
        expect(el.nodePath).not.toBe('1'); // Changed from initial C: selection
      });
    });
  }
}`,...B.parameters?.docs?.source}}};const xe=["Default","WithPreselectedNode","WithShowReset","ResetButtonHiddenByDefault","DialogInteraction","SelectButtonInteraction"];export{$ as Default,T as DialogInteraction,P as ResetButtonHiddenByDefault,B as SelectButtonInteraction,S as WithPreselectedNode,f as WithShowReset,xe as __namedExportsOrder,ve as default};
