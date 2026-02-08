import{c as O,u as R,a as le,b as re,d as q,e as H,f as ie,g as W,h as de,i as he,n as ue,j as we,T as ge,k as pe}from"./tree-data-YzS3Hrrq.js";import{b as m,j as c,N as p,D as _}from"./iframe-DXS043xj.js";import"./preload-helper-PPVm8Dsz.js";const be=O`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,me=O`
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
		${be}
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
`,ye=(e,a)=>{const t=o=>{if(o.key===e&&a instanceof Function)return o.preventDefault(),a()};R(()=>(document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}))},ve=m`<svg
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
</svg>`,j=({tree:e,dialogText:a,buttonTextPlaceholder:t,searchPlaceholder:o,showReset:i=!1,searchGlobalPlaceholder:w,searchMinLength:v=3,searchDebounceTimeout:l=2e3})=>{const d=re(),r=q(null),g=q(null),[B,b]=H("nodePath",""),[L,I]=H("opened",!1),[M,V]=ie(""),f=W(()=>de(B,e),[B,e]),Y=W(()=>!Array.isArray(f)||f.length===0?t||"":f.filter(h=>h).map(h=>h[e.searchProperty]).join(" / "),[f,e,t]),K=he(h=>{const C=h.target.assignedNodes().length>0;d.toggleAttribute("has-prefix",C)},[d]);R(()=>{r.current&&(g.current=r.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[r.current]),R(()=>{L?(r.current?.showModal(),setTimeout(()=>g.current?.focus(),0)):r.current?.close()},[L]);const X=()=>{b("")},U=()=>{g.current&&g.current.focus()},Z=()=>{r.current?.showModal(),I(!0),setTimeout(U,0)},$=()=>{I(!1),r.current?.close()};ye("Escape",$);const J=h=>{const y=r.current;if(!y)return;const C=h.clientX,ne=h.clientY,N=y.getBoundingClientRect(),oe=N.left,ae=N.top,A=F=>{const se=F.clientX-C,ce=F.clientY-ne;y.style.left=`${oe+se}px`,y.style.top=`${ae+ce}px`,y.style.margin="0"},G=()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",G)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",G)},Q=h=>{h.preventDefault();const y=h.detail.value;y&&(b(y),$())},ee=h=>{V(h.detail.value)},te=()=>{M&&(b(M),$())};return m`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				data-testid="open-button"
				@click=${Z}
				part="action-open"
			>
				<span slot="prefix">
					<slot name="button-before" @slotchange=${K}></slot>
					${ve}
				</span>
				<div class="path-text">
					<span>${Y}</span>
				</div>
				<slot name="button-after" slot="suffix"></slot>
			</cosmoz-button>
			${ue(i&&!!B,()=>m`<cosmoz-button
						variant="tertiary"
						@click=${X}
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
			${we(h=>{r.current=h})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${J}
			>
				<h1 class="dialog-heading" part="heading">${a}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${B}
					@node-path-changed=${Q}
					@highlighted-node-path-changed=${ee}
					.searchPlaceholder=${o}
					.searchGlobalPlaceholder=${w}
					.searchMinLength=${v}
					.searchDebounceTimeout=${l}
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
						@click=${te}
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
	`};j.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",le(j,{styleSheets:[me]}));const{expect:n,userEvent:u,waitFor:s}=__STORYBOOK_MODULE_TEST__,x=new ge(pe),$e={title:"CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},showReset:{control:"boolean"},nodePath:{control:"text"}},args:{buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,showReset:!1,nodePath:""}},T={render:e=>m`
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Renders with placeholder text",async()=>{const o=await c(t,"open-button");n(o).toBeTruthy(),n(o?.textContent?.trim()).toContain("Select a node")})}},P={args:{nodePath:"1.2.3"},render:e=>m`
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Button renders selected path",async()=>{await s(async()=>{const o=await c(t,"open-button");n(o?.textContent?.trim()).toContain("C: / Windows / System")})})}},S={args:{showReset:!0,nodePath:"1.2.3"},render:e=>m`
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is shown when showReset is true and node is selected",async()=>{await s(async()=>{const o=await c(t,"reset-button");n(o).toBeTruthy()})}),await a("Reset button clears selection",async()=>{const o=await c(t,"reset-button");await u.click(o),await s(()=>{n(t.nodePath).toBe("");const i=_(t,"reset-button");n(i).toBeNull()})})}},z={args:{showReset:!1,nodePath:"1.2.3"},render:e=>m`
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is hidden when showReset is false",async()=>{await s(()=>{const o=_(t,"reset-button");n(o).toBeNull()})})}},k={render:e=>m`
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Opens dialog on button click",async()=>{const o=await c(t,"open-button");await u.click(o),await s(async()=>{const i=await c(t,"dialog");n(i.open).toBe(!0)})}),await a("Closes dialog on cancel button click",async()=>{const o=await c(t,"dialog"),i=await c(t,"cancel-button");await u.click(i),await s(()=>{n(o.open).toBe(!1)})})}},D={render:e=>m`
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view"),o=async()=>{const l=await c(t,"open-button");await u.click(l),await s(async()=>{const d=await c(t,"dialog");n(d.open).toBe(!0)})},i=()=>t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),w=async()=>await c(t,"select-button"),v=async()=>await c(t,"cancel-button");await a("Select button is initially disabled",async()=>{await o(),await s(async()=>{const l=await w();n(l).toBeTruthy(),n(l.hasAttribute("disabled")).toBe(!0)})}),await a("Single-clicking a node enables the Select button",async()=>{const l=i();await s(async()=>{const r=await p(l,"node");n(r.length).toBeGreaterThan(0)});const d=await p(l,"node");await u.click(d[0]),await s(async()=>{const r=await w();n(r.hasAttribute("disabled")).toBe(!1)})}),await a("Clicking Select confirms selection and closes dialog",async()=>{const l=await w();await u.click(l),await s(async()=>{const d=await c(t,"dialog");n(d.open).toBe(!1),n(t.nodePath).toBe("1")})}),await a("Cancel after highlighting does not change nodePath",async()=>{const l=t.nodePath;await o();const d=i();await s(async()=>{const b=await p(d,"node");n(b.length).toBeGreaterThan(0)});const r=await p(d,"node-arrow");await u.click(r[0]),await s(async()=>{const b=await p(d,"node");n(b.length).toBeGreaterThan(0)});const g=await p(d,"node");await u.click(g[0]),await s(async()=>{const b=await w();n(b.hasAttribute("disabled")).toBe(!1)});const B=await v();await u.click(B),await s(async()=>{const b=await c(t,"dialog");n(b.open).toBe(!1),n(t.nodePath).toBe(l)})}),await a("Double-click on a node selects it and closes dialog",async()=>{await o();const l=i();await s(async()=>{const g=await p(l,"node");n(g.length).toBeGreaterThan(0)});const d=await p(l,"node-arrow");await u.click(d[0]),await s(async()=>{const g=await p(l,"node");n(g.length).toBeGreaterThan(0)});const r=await p(l,"node");await u.dblClick(r[0]),await s(async()=>{const g=await c(t,"dialog");n(g.open).toBe(!1),n(t.nodePath).not.toBe("1")})})}},E={args:{nodePath:"999.888.777"},render:e=>m`
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
    `,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Button shows placeholder text for invalid path",async()=>{const o=await c(t,"open-button");n(o).toBeTruthy(),n(o?.textContent?.trim()).toContain("Select a node")}),await a("Opens dialog to root nodes",async()=>{const o=await c(t,"open-button");await u.click(o),await s(async()=>{const w=await c(t,"dialog");n(w.open).toBe(!0)});const i=t.shadowRoot?.querySelector("cosmoz-treenode-navigator");await s(async()=>{const w=await p(i,"node");n(w.length).toBe(2)})}),await a("Can select a node successfully",async()=>{const o=t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),i=await p(o,"node");await u.click(i[0]),await s(async()=>{const v=await c(t,"select-button");n(v.hasAttribute("disabled")).toBe(!1)});const w=await c(t,"select-button");await u.click(w),await s(async()=>{const v=await c(t,"dialog");n(v.open).toBe(!1),n(t.nodePath).toBe("1")})})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '999.888.777'
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
}`,...E.parameters?.docs?.source}}};const Te=["Default","WithPreselectedNode","WithShowReset","WithoutReset","DialogInteraction","SelectButtonInteraction","WithInvalidNodePath"];export{T as Default,k as DialogInteraction,D as SelectButtonInteraction,E as WithInvalidNodePath,P as WithPreselectedNode,S as WithShowReset,z as WithoutReset,Te as __namedExportsOrder,$e as default};
