import{T as B,o as g,a as P}from"./tree-data-Cl2vDCQ0.js";import{b as w}from"./iframe-DfRP2NYU.js";import"./cosmoz-treenode-button-view-BfPteVKp.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o,waitFor:c}=__STORYBOOK_MODULE_TEST__,p=new B(P),L={title:"CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},noReset:{control:"boolean"},nodePath:{control:"text"}},args:{buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,nodePath:""}},m={render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                node-path=${g(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const n=e.querySelector("cosmoz-treenode-button-view");await r("Renders with placeholder text",async()=>{const t=n.shadowRoot?.querySelector("button.action-open");o(t).toBeTruthy(),o(t?.textContent?.trim()).toContain("Select a node")})}},y={args:{nodePath:"1.2.3"},render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                node-path=${g(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const n=e.querySelector("cosmoz-treenode-button-view");await r("Button renders selected path",async()=>{await c(()=>{const t=n.shadowRoot?.querySelector("button.action-open");o(t?.textContent?.trim()).toContain("C: / Windows / System")})})}},v={args:{noReset:!0,nodePath:"1.2.3"},render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                node-path=${g(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const n=e.querySelector("cosmoz-treenode-button-view");await r("Reset button is hidden when noReset is true",async()=>{await c(()=>{const t=n.shadowRoot?.querySelector("button.action-reset");o(t).toBeNull()})})}},S={render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                node-path=${g(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:r,userEvent:n})=>{const t=e.querySelector("cosmoz-treenode-button-view");await r("Opens dialog on button click",async()=>{const s=t.shadowRoot?.querySelector("button.action-open");await n.click(s),await c(()=>{const i=t.shadowRoot?.querySelector("dialog");o(i.open).toBe(!0)})}),await r("Closes dialog on cancel button click",async()=>{const s=t.shadowRoot?.querySelector("dialog"),i=s.querySelector('button[part="cancel-button"]');await n.click(i),await c(()=>{o(s.open).toBe(!1)})})}},x={render:e=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                node-path=${g(e.nodePath||void 0)}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?no-reset=${e.noReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:r,userEvent:n})=>{const t=e.querySelector("cosmoz-treenode-button-view"),s=async()=>{const a=t.shadowRoot?.querySelector("button.action-open");await n.click(a),await c(()=>{const l=t.shadowRoot?.querySelector("dialog");o(l.open).toBe(!0)})},i=()=>t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),b=()=>t.shadowRoot?.querySelector("dialog")?.querySelector('button[part="select-button"]'),T=()=>t.shadowRoot?.querySelector("dialog")?.querySelector('button[part="cancel-button"]');await r("Select button is initially disabled",async()=>{await s(),await c(()=>{const a=b();o(a).toBeTruthy(),o(a.disabled).toBe(!0)})}),await r("Single-clicking a node enables the Select button",async()=>{const a=i();await c(()=>{const d=a.shadowRoot?.querySelectorAll(".node");o(d?.length).toBeGreaterThan(0)});const l=a.shadowRoot?.querySelector(".node");await n.click(l),await c(()=>{const d=b();o(d.disabled).toBe(!1)})}),await r("Clicking Select confirms selection and closes dialog",async()=>{const a=b();await n.click(a),await c(()=>{const l=t.shadowRoot?.querySelector("dialog");o(l.open).toBe(!1),o(t.nodePath).toBe("1")})}),await r("Cancel after highlighting does not change nodePath",async()=>{const a=t.nodePath;await s();const l=i();await c(()=>{const u=l.shadowRoot?.querySelectorAll(".node");o(u?.length).toBeGreaterThan(0)});const d=l.shadowRoot?.querySelector(".node .icon");await n.click(d),await c(()=>{const u=l.shadowRoot?.querySelectorAll(".node");o(u?.length).toBeGreaterThan(0)});const h=l.shadowRoot?.querySelector(".node");await n.click(h),await c(()=>{const u=b();o(u.disabled).toBe(!1)});const $=T();await n.click($),await c(()=>{const u=t.shadowRoot?.querySelector("dialog");o(u.open).toBe(!1),o(t.nodePath).toBe(a)})}),await r("Double-click on a node selects it and closes dialog",async()=>{await s();const a=i();await c(()=>{const h=a.shadowRoot?.querySelectorAll(".node");o(h?.length).toBeGreaterThan(0)});const l=a.shadowRoot?.querySelector(".node .icon");await n.click(l),await c(()=>{const h=a.shadowRoot?.querySelectorAll(".node");o(h?.length).toBeGreaterThan(0)});const d=a.shadowRoot?.querySelector(".node");await n.dblClick(d),await c(()=>{const h=t.shadowRoot?.querySelector("dialog");o(h.open).toBe(!1),o(t.nodePath).not.toBe("1")})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      const button = el.shadowRoot?.querySelector('button.action-open');
      expect(button).toBeTruthy();
      expect(button?.textContent?.trim()).toContain('Select a node');
    });
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      await waitFor(() => {
        const button = el.shadowRoot?.querySelector('button.action-open');
        // nodePath '1.2.3' corresponds to 'C: / Windows / System' in the tree
        expect(button?.textContent?.trim()).toContain('C: / Windows / System');
      });
    });
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        const resetButton = el.shadowRoot?.querySelector('button.action-reset');
        expect(resetButton).toBeNull();
      });
    });
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      const openButton = el.shadowRoot?.querySelector('button.action-open') as HTMLElement;
      await userEvent.click(openButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    });
    await step('Closes dialog on cancel button click', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
      const cancelButton = dialog.querySelector('button[part="cancel-button"]') as HTMLElement;
      await userEvent.click(cancelButton);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
      });
    });
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      const openButton = el.shadowRoot?.querySelector('button.action-open') as HTMLElement;
      await userEvent.click(openButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    };
    const getNavigator = () => el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    const getSelectButton = () => el.shadowRoot?.querySelector('dialog')?.querySelector('button[part="select-button"]') as HTMLButtonElement;
    const getCancelButton = () => el.shadowRoot?.querySelector('dialog')?.querySelector('button[part="cancel-button"]') as HTMLElement;
    await step('Select button is initially disabled', async () => {
      await openDialog();
      await waitFor(() => {
        const selectButton = getSelectButton();
        expect(selectButton).toBeTruthy();
        expect(selectButton.disabled).toBe(true);
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
        expect(selectButton.disabled).toBe(false);
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
        expect(selectButton.disabled).toBe(false);
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
}`,...x.parameters?.docs?.source}}};const M=["Default","WithPreselectedNode","WithNoReset","DialogInteraction","SelectButtonInteraction"];export{m as Default,S as DialogInteraction,x as SelectButtonInteraction,v as WithNoReset,y as WithPreselectedNode,M as __namedExportsOrder,L as default};
