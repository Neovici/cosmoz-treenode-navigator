import{T as S,o as p,a as D}from"./tree-data-Ca8mA2vN.js";import{j as l,b,N as r,D as k}from"./iframe-N9_VETUO.js";import"./cosmoz-treenode-button-view-4jzznPWa.js";import"./preload-helper-PPVm8Dsz.js";const{expect:n,waitFor:c}=__STORYBOOK_MODULE_TEST__,y=new S(D),E={title:"CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},noReset:{control:"boolean"},nodePath:{control:"text"}},args:{buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,nodePath:""}},B={render:e=>b`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
                node-path=${p(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:s})=>{const a=e.querySelector("cosmoz-treenode-button-view");await s("Renders with placeholder text",async()=>{const t=await l(a,"open-button");n(t).toBeTruthy(),n(t?.textContent?.trim()).toContain("Select a node")})}},v={args:{nodePath:"1.2.3"},render:e=>b`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
                node-path=${p(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:s})=>{const a=e.querySelector("cosmoz-treenode-button-view");await s("Button renders selected path",async()=>{await c(async()=>{const t=await l(a,"open-button");n(t?.textContent?.trim()).toContain("C: / Windows / System")})})}},T={args:{noReset:!0,nodePath:"1.2.3"},render:e=>b`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
                node-path=${p(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:s})=>{const a=e.querySelector("cosmoz-treenode-button-view");await s("Reset button is hidden when noReset is true",async()=>{await c(()=>{const t=k(a,"reset-button");n(t).toBeNull()})})}},x={render:e=>b`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
                node-path=${p(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:s,userEvent:a})=>{const t=e.querySelector("cosmoz-treenode-button-view");await s("Opens dialog on button click",async()=>{const d=await l(t,"open-button");await a.click(d),await c(async()=>{const h=await l(t,"dialog");n(h.open).toBe(!0)})}),await s("Closes dialog on cancel button click",async()=>{const d=await l(t,"dialog"),h=await l(t,"cancel-button");await a.click(h),await c(()=>{n(d.open).toBe(!1)})})}},$={render:e=>b`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${y}
                node-path=${p(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:s,userEvent:a})=>{const t=e.querySelector("cosmoz-treenode-button-view"),d=async()=>{const o=await l(t,"open-button");await a.click(o),await c(async()=>{const i=await l(t,"dialog");n(i.open).toBe(!0)})},h=()=>t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),m=async()=>await l(t,"select-button"),P=async()=>await l(t,"cancel-button");await s("Select button is initially disabled",async()=>{await d(),await c(async()=>{const o=await m();n(o).toBeTruthy(),n(o.disabled).toBe(!0)})}),await s("Single-clicking a node enables the Select button",async()=>{const o=h();await c(async()=>{const u=await r(o,"node");n(u.length).toBeGreaterThan(0)});const i=await r(o,"node");await a.click(i[0]),await c(async()=>{const u=await m();n(u.disabled).toBe(!1)})}),await s("Clicking Select confirms selection and closes dialog",async()=>{const o=await m();await a.click(o),await c(async()=>{const i=await l(t,"dialog");n(i.open).toBe(!1),n(t.nodePath).toBe("1")})}),await s("Cancel after highlighting does not change nodePath",async()=>{const o=t.nodePath;await d();const i=h();await c(async()=>{const g=await r(i,"node");n(g.length).toBeGreaterThan(0)});const u=await r(i,"node-arrow");await a.click(u[0]),await c(async()=>{const g=await r(i,"node");n(g.length).toBeGreaterThan(0)});const w=await r(i,"node");await a.click(w[0]),await c(async()=>{const g=await m();n(g.disabled).toBe(!1)});const f=await P();await a.click(f),await c(async()=>{const g=await l(t,"dialog");n(g.open).toBe(!1),n(t.nodePath).toBe(o)})}),await s("Double-click on a node selects it and closes dialog",async()=>{await d();const o=h();await c(async()=>{const w=await r(o,"node");n(w.length).toBeGreaterThan(0)});const i=await r(o,"node-arrow");await a.click(i[0]),await c(async()=>{const w=await r(o,"node");n(w.length).toBeGreaterThan(0)});const u=await r(o,"node");await a.dblClick(u[0]),await c(async()=>{const w=await l(t,"dialog");n(w.open).toBe(!1),n(t.nodePath).not.toBe("1")})})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                node-path=\${ifDefined(args.nodePath || undefined)}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?no-reset=\${args.noReset}
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
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                node-path=\${ifDefined(args.nodePath || undefined)}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?no-reset=\${args.noReset}
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
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    noReset: true,
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                node-path=\${ifDefined(args.nodePath || undefined)}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?no-reset=\${args.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Reset button is hidden when noReset is true', async () => {
      await waitFor(() => {
        const resetButton = queryByShadowTestId(el, 'reset-button');
        expect(resetButton).toBeNull();
      });
    });
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                node-path=\${ifDefined(args.nodePath || undefined)}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?no-reset=\${args.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step,
    userEvent
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
}`,...x.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                node-path=\${ifDefined(args.nodePath || undefined)}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?no-reset=\${args.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step,
    userEvent
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
    const getSelectButton = async () => (await findByShadowTestId(el, 'select-button')) as HTMLButtonElement;
    const getCancelButton = async () => await findByShadowTestId(el, 'cancel-button');
    await step('Select button is initially disabled', async () => {
      await openDialog();
      await waitFor(async () => {
        const selectButton = await getSelectButton();
        expect(selectButton).toBeTruthy();
        expect(selectButton.disabled).toBe(true);
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
        expect(selectButton.disabled).toBe(false);
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
        expect(selectButton.disabled).toBe(false);
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
}`,...$.parameters?.docs?.source}}};const I=["Default","WithPreselectedNode","WithNoReset","DialogInteraction","SelectButtonInteraction"];export{B as Default,x as DialogInteraction,$ as SelectButtonInteraction,T as WithNoReset,v as WithPreselectedNode,I as __namedExportsOrder,E as default};
