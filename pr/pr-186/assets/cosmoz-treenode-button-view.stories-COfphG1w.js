import{c as W,u as C,b as ae,d as se,e as F,f as q,g as ie,h as H,i as ce,j as re,n as de,k as le,T as ue,a as he}from"./tree-data-C9KaDP9e.js";import{b as y,t as S,j as c,N as w,D as O}from"./iframe-B2XSesrN.js";import"./preload-helper-PPVm8Dsz.js";const we=W`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,ge=W`
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
		${we}
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
`,pe=(e,a)=>{const t=o=>{if(o.key===e&&a instanceof Function)return o.preventDefault(),a()};C(()=>(document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}))},me=y`<svg
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
</svg>`,_=({tree:e,showReset:a=!1,searchMinLength:t=3,searchDebounceTimeout:o=2e3})=>{const d=se(),r=F(null),p=F(null),[i,l]=q("nodePath",""),[g,m]=q("opened",!1),[f,b]=ie(""),T=H(()=>ce(i,e),[i,e]),G=H(()=>!Array.isArray(T)||T.length===0?S("Select a node"):T.filter(u=>u).map(u=>u[e.searchProperty]).join(" / "),[T,e]),j=re(u=>{const M=u.target.assignedNodes().length>0;d.toggleAttribute("has-prefix",M)},[d]);C(()=>{r.current&&(p.current=r.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[r.current]),C(()=>{g?(r.current?.showModal(),setTimeout(()=>p.current?.focus(),0)):r.current?.close()},[g]);const V=()=>{l("")},Y=()=>{p.current&&p.current.focus()},K=()=>{r.current?.showModal(),m(!0),setTimeout(Y,0)},x=()=>{m(!1),r.current?.close()};pe("Escape",x);const X=u=>{const v=r.current;if(!v)return;const M=u.clientX,Q=u.clientY,R=v.getBoundingClientRect(),ee=R.left,te=R.top,I=A=>{const ne=A.clientX-M,oe=A.clientY-Q;v.style.left=`${ee+ne}px`,v.style.top=`${te+oe}px`,v.style.margin="0"},N=()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",N)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",N)},U=u=>{u.preventDefault();const v=u.detail.value;v&&(l(v),x())},Z=u=>{b(u.detail.value)},J=()=>{f&&(l(f),x())};return y`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				data-testid="open-button"
				@click=${K}
				part="action-open"
			>
				<span slot="prefix">
					<slot name="button-before" @slotchange=${j}></slot>
					${me}
				</span>
				<div class="path-text">
					<span>${G}</span>
				</div>
				<slot name="button-after" slot="suffix"></slot>
			</cosmoz-button>
			${de(a&&!!i,()=>y`<cosmoz-button
						variant="tertiary"
						@click=${V}
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
			${le(u=>{r.current=u})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${X}
			>
				<h1 class="dialog-heading" part="heading">
					${S("Search or navigate to chosen destination")}
				</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${i}
					@node-path-changed=${U}
					@highlighted-node-path-changed=${Z}
					.searchMinLength=${t}
					.searchDebounceTimeout=${o}
					.tree=${e}
					.opened=${g}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!f}
						@click=${J}
						data-testid="select-button"
						part="select-button"
					>
						${S("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${x}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${S("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};_.observedAttributes=["show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",ae(_,{styleSheets:[ge]}));const{expect:n,userEvent:h,waitFor:s}=__STORYBOOK_MODULE_TEST__,B=new ue(he),Be={title:"Components/CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},showReset:{control:"boolean"},nodePath:{control:"text"}},args:{searchMinLength:3,searchDebounceTimeout:2e3,showReset:!1,nodePath:""}},$={render:e=>y`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Renders with placeholder text",async()=>{const o=await c(t,"open-button");n(o).toBeTruthy(),n(o?.textContent?.trim()).toContain("Select a node")})}},P={args:{nodePath:"1.2.3"},render:e=>y`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Button renders selected path",async()=>{await s(async()=>{const o=await c(t,"open-button");n(o?.textContent?.trim()).toContain("C: / Windows / System")})})}},z={args:{showReset:!0,nodePath:"1.2.3"},render:e=>y`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is shown when showReset is true and node is selected",async()=>{await s(async()=>{const o=await c(t,"reset-button");n(o).toBeTruthy()})}),await a("Reset button clears selection",async()=>{const o=await c(t,"reset-button");await h.click(o),await s(()=>{n(t.nodePath).toBe("");const d=O(t,"reset-button");n(d).toBeNull()})})}},k={args:{showReset:!1,nodePath:"1.2.3"},render:e=>y`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is hidden when showReset is false",async()=>{await s(()=>{const o=O(t,"reset-button");n(o).toBeNull()})})}},D={render:e=>y`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Opens dialog on button click",async()=>{const o=await c(t,"open-button");await h.click(o),await s(async()=>{const d=await c(t,"dialog");n(d.open).toBe(!0)})}),await a("Closes dialog on cancel button click",async()=>{const o=await c(t,"dialog"),d=await c(t,"cancel-button");await h.click(d),await s(()=>{n(o.open).toBe(!1)})})}},E={render:e=>y`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view"),o=async()=>{const i=await c(t,"open-button");await h.click(i),await s(async()=>{const l=await c(t,"dialog");n(l.open).toBe(!0)})},d=()=>t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),r=async()=>await c(t,"select-button"),p=async()=>await c(t,"cancel-button");await a("Select button is initially disabled",async()=>{await o(),await s(async()=>{const i=await r();n(i).toBeTruthy(),n(i.hasAttribute("disabled")).toBe(!0)})}),await a("Single-clicking a node enables the Select button",async()=>{const i=d();await s(async()=>{const g=await w(i,"node");n(g.length).toBeGreaterThan(0)});const l=await w(i,"node");await h.click(l[0]),await s(async()=>{const g=await r();n(g.hasAttribute("disabled")).toBe(!1)})}),await a("Clicking Select confirms selection and closes dialog",async()=>{const i=await r();await h.click(i),await s(async()=>{const l=await c(t,"dialog");n(l.open).toBe(!1),n(t.nodePath).toBe("1")})}),await a("Cancel after highlighting does not change nodePath",async()=>{const i=t.nodePath;await o();const l=d();await s(async()=>{const b=await w(l,"node");n(b.length).toBeGreaterThan(0)});const g=await w(l,"node-arrow");await h.click(g[0]),await s(async()=>{const b=await w(l,"node");n(b.length).toBeGreaterThan(0)});const m=await w(l,"node");await h.click(m[0]),await s(async()=>{const b=await r();n(b.hasAttribute("disabled")).toBe(!1)});const f=await p();await h.click(f),await s(async()=>{const b=await c(t,"dialog");n(b.open).toBe(!1),n(t.nodePath).toBe(i)})}),await a("Double-click on a node selects it and closes dialog",async()=>{await o();const i=d();await s(async()=>{const m=await w(i,"node");n(m.length).toBeGreaterThan(0)});const l=await w(i,"node-arrow");await h.click(l[0]),await s(async()=>{const m=await w(i,"node");n(m.length).toBeGreaterThan(0)});const g=await w(i,"node");await h.dblClick(g[0]),await s(async()=>{const m=await c(t,"dialog");n(m.open).toBe(!1),n(t.nodePath).not.toBe("1")})})}},L={args:{nodePath:"999.888.777"},render:e=>y`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Button shows placeholder text for invalid path",async()=>{const o=await c(t,"open-button");n(o).toBeTruthy(),n(o?.textContent?.trim()).toContain("Select a node")}),await a("Opens dialog to root nodes",async()=>{const o=await c(t,"open-button");await h.click(o),await s(async()=>{const r=await c(t,"dialog");n(r.open).toBe(!0)});const d=t.shadowRoot?.querySelector("cosmoz-treenode-navigator");await s(async()=>{const r=await w(d,"node");n(r.length).toBe(2)})}),await a("Can select a node successfully",async()=>{const o=t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),d=await w(o,"node");await h.click(d[0]),await s(async()=>{const p=await c(t,"select-button");n(p.hasAttribute("disabled")).toBe(!1)});const r=await c(t,"select-button");await h.click(r),await s(async()=>{const p=await c(t,"dialog");n(p.open).toBe(!1),n(t.nodePath).toBe("1")})})}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
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
}`,...$.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
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
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    showReset: true,
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
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
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    showReset: false,
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
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
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
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
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
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
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '999.888.777'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
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
    await step('Button shows placeholder text for invalid path', async () => {
      const button = await findByShadowTestId(el, 'open-button');
      expect(button).toBeTruthy();
      expect(button?.textContent?.trim()).toContain('Select a node');
    });
    await step('Opens dialog to root nodes', async () => {
      const openButton = await findByShadowTestId(el, 'open-button');
      await userEvent.click(openButton);
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
      const navigator = el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(navigator, 'node');
        // Root has C: and D: drives
        expect(nodes.length).toBe(2);
      });
    });
    await step('Can select a node successfully', async () => {
      const navigator = el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;

      // Click on first node to highlight it
      const allNodes = await findAllByShadowTestId(navigator, 'node');
      await userEvent.click(allNodes[0]);

      // Click Select button
      await waitFor(async () => {
        const selectButton = await findByShadowTestId(el, 'select-button');
        expect(selectButton.hasAttribute('disabled')).toBe(false);
      });
      const selectButton = await findByShadowTestId(el, 'select-button');
      await userEvent.click(selectButton);
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should be updated (C: drive has path '1')
        expect(el.nodePath).toBe('1');
      });
    });
  }
}`,...L.parameters?.docs?.source}}};const fe=["Default","WithPreselectedNode","WithShowReset","WithoutReset","DialogInteraction","SelectButtonInteraction","WithInvalidNodePath"];export{$ as Default,D as DialogInteraction,E as SelectButtonInteraction,L as WithInvalidNodePath,P as WithPreselectedNode,z as WithShowReset,k as WithoutReset,fe as __namedExportsOrder,Be as default};
