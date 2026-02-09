import{T as E,a as I}from"./tree-data-BuLhcJzY.js";import{j as o,b as B,N as r,D as k}from"./iframe-Bjtw74-6.js";import"./cosmoz-treenode-button-view-Vkf6IJj4.js";import"./preload-helper-PPVm8Dsz.js";const{expect:e,userEvent:c,waitFor:n}=__STORYBOOK_MODULE_TEST__,v=new E(I),A={title:"Tests/CosmozTreenodeButtonView"},b={render:()=>B`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${v}
                .nodePath=${"1.2.3"}
                show-reset
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:u,step:s})=>{const t=u.querySelector("cosmoz-treenode-button-view");await s("Reset button is shown when showReset is true and node is selected",async()=>{await n(async()=>{const a=await o(t,"reset-button");e(a).toBeTruthy()})}),await s("Reset button clears selection",async()=>{const a=await o(t,"reset-button");await c.click(a),await n(()=>{e(t.nodePath).toBe("");const l=k(t,"reset-button");e(l).toBeNull()})})}},m={render:()=>B`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${v}
                .nodePath=${"1.2.3"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:u,step:s})=>{const t=u.querySelector("cosmoz-treenode-button-view");await s("Reset button is hidden when showReset is false",async()=>{await n(()=>{const a=k(t,"reset-button");e(a).toBeNull()})})}},S={render:()=>B`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${v}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:u,step:s})=>{const t=u.querySelector("cosmoz-treenode-button-view");await s("Opens dialog on button click",async()=>{const a=await o(t,"open-button");await c.click(a),await n(async()=>{const l=await o(t,"dialog");e(l.open).toBe(!0)})}),await s("Closes dialog on cancel button click",async()=>{const a=await o(t,"dialog"),l=await o(t,"cancel-button");await c.click(l),await n(()=>{e(a.open).toBe(!1)})})}},f={render:()=>B`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${v}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:u,step:s})=>{const t=u.querySelector("cosmoz-treenode-button-view"),a=async()=>{const i=await o(t,"open-button");await c.click(i),await n(async()=>{const d=await o(t,"dialog");e(d.open).toBe(!0)})},l=()=>t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),w=async()=>await o(t,"select-button"),p=async()=>await o(t,"cancel-button");await s("Select button is initially disabled",async()=>{await a(),await n(async()=>{const i=await w();e(i).toBeTruthy(),e(i.hasAttribute("disabled")).toBe(!0)})}),await s("Single-clicking a node enables the Select button",async()=>{const i=l();await n(async()=>{const h=await r(i,"node");e(h.length).toBeGreaterThan(0)});const d=await r(i,"node");await c.click(d[0]),await n(async()=>{const h=await w();e(h.hasAttribute("disabled")).toBe(!1)})}),await s("Clicking Select confirms selection and closes dialog",async()=>{const i=await w();await c.click(i),await n(async()=>{const d=await o(t,"dialog");e(d.open).toBe(!1),e(t.nodePath).toBe("1")})}),await s("Cancel after highlighting does not change nodePath",async()=>{const i=t.nodePath;await a();const d=l();await n(async()=>{const y=await r(d,"node");e(y.length).toBeGreaterThan(0)});const h=await r(d,"node-arrow");await c.click(h[0]),await n(async()=>{const y=await r(d,"node");e(y.length).toBeGreaterThan(0)});const g=await r(d,"node");await c.click(g[0]),await n(async()=>{const y=await w();e(y.hasAttribute("disabled")).toBe(!1)});const x=await p();await c.click(x),await n(async()=>{const y=await o(t,"dialog");e(y.open).toBe(!1),e(t.nodePath).toBe(i)})}),await s("Double-click on a node selects it and closes dialog",async()=>{await a();const i=l();await n(async()=>{const g=await r(i,"node");e(g.length).toBeGreaterThan(0)});const d=await r(i,"node-arrow");await c.click(d[0]),await n(async()=>{const g=await r(i,"node");e(g.length).toBeGreaterThan(0)});const h=await r(i,"node");await c.dblClick(h[0]),await n(async()=>{const g=await o(t,"dialog");e(g.open).toBe(!1),e(t.nodePath).not.toBe("1")})})}},T={render:()=>B`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${v}
                .nodePath=${"999.888.777"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:u,step:s})=>{const t=u.querySelector("cosmoz-treenode-button-view");await s("Button shows placeholder text for invalid path",async()=>{const a=await o(t,"open-button");e(a).toBeTruthy(),e(a?.textContent?.trim()).toContain("Select a node")}),await s("Opens dialog to root nodes",async()=>{const a=await o(t,"open-button");await c.click(a),await n(async()=>{const w=await o(t,"dialog");e(w.open).toBe(!0)});const l=t.shadowRoot?.querySelector("cosmoz-treenode-navigator");await n(async()=>{const w=await r(l,"node");e(w.length).toBe(2)})}),await s("Can select a node successfully",async()=>{const a=t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),l=await r(a,"node");await c.click(l[0]),await n(async()=>{const p=await o(t,"select-button");e(p.hasAttribute("disabled")).toBe(!1)});const w=await o(t,"select-button");await c.click(w),await n(async()=>{const p=await o(t,"dialog");e(p.open).toBe(!1),e(t.nodePath).toBe("1")})})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${'1.2.3'}
                show-reset
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
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${'1.2.3'}
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
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=\${tree}></cosmoz-treenode-button-view>
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=\${tree}></cosmoz-treenode-button-view>
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
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${'999.888.777'}
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
}`,...T.parameters?.docs?.source}}};const F=["WithShowReset","WithoutReset","DialogInteraction","SelectButtonInteraction","WithInvalidNodePath"];export{S as DialogInteraction,f as SelectButtonInteraction,T as WithInvalidNodePath,b as WithShowReset,m as WithoutReset,F as __namedExportsOrder,A as default};
