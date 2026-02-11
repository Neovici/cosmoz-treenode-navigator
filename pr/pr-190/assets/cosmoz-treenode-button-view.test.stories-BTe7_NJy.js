import{T as z,a as I}from"./tree-data-Bc7U-NWf.js";import{j as o,b as h,N as r,D as E}from"./iframe-kTN957Yv.js";import"./cosmoz-treenode-button-view-Cjzv7OWO.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,userEvent:c,waitFor:a}=__STORYBOOK_MODULE_TEST__,B=new z(I),A={title:"Tests/CosmozTreenodeButtonView"},m={render:()=>h`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${"1.2.3"}
                show-reset
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:w,step:s})=>{const e=w.querySelector("cosmoz-treenode-button-view");await s("Reset button is shown when showReset is true and node is selected",async()=>{await a(async()=>{const n=await o(e,"reset-button");t(n).toBeTruthy()})}),await s("Reset button clears selection",async()=>{const n=await o(e,"reset-button");await c.click(n),await a(()=>{t(e.nodePath).toBe("");const l=E(e,"reset-button");t(l).toBeNull()})})}},b={render:()=>h`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${"1.2.3"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:w,step:s})=>{const e=w.querySelector("cosmoz-treenode-button-view");await s("Reset button is hidden when showReset is false",async()=>{await a(()=>{const n=E(e,"reset-button");t(n).toBeNull()})})}},S={render:()=>h`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${B}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:w,step:s})=>{const e=w.querySelector("cosmoz-treenode-button-view");await s("Opens dialog on button click",async()=>{const n=await o(e,"open-button");await c.click(n),await a(async()=>{const l=await o(e,"dialog");t(l.open).toBe(!0)})}),await s("Closes dialog on cancel button click",async()=>{const n=await o(e,"dialog"),l=await o(e,"cancel-button");await c.click(l),await a(()=>{t(n.open).toBe(!1)})})}},f={render:()=>h`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${B}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:w,step:s})=>{const e=w.querySelector("cosmoz-treenode-button-view"),n=async()=>{const i=await o(e,"open-button");await c.click(i),await a(async()=>{const d=await o(e,"dialog");t(d.open).toBe(!0)})},l=()=>e.shadowRoot?.querySelector("cosmoz-treenode-navigator"),u=async()=>await o(e,"select-button"),v=async()=>await o(e,"cancel-button");await s("Select button is initially disabled",async()=>{await n(),await a(async()=>{const i=await u();t(i).toBeTruthy(),t(i.hasAttribute("disabled")).toBe(!0)})}),await s("Single-clicking a node enables the Select button",async()=>{const i=l();await a(async()=>{const p=await r(i,"node");t(p.length).toBeGreaterThan(0)});const d=await r(i,"node");await c.click(d[0]),await a(async()=>{const p=await u();t(p.hasAttribute("disabled")).toBe(!1)})}),await s("Clicking Select confirms selection and closes dialog",async()=>{const i=await u();await c.click(i),await a(async()=>{const d=await o(e,"dialog");t(d.open).toBe(!1),t(e.nodePath).toBe("1")})}),await s("Cancel after highlighting does not change nodePath",async()=>{const i=e.nodePath;await n();const d=l();await a(async()=>{const y=await r(d,"node");t(y.length).toBeGreaterThan(0)});const p=await r(d,"node-arrow");await c.click(p[0]),await a(async()=>{const y=await r(d,"node");t(y.length).toBeGreaterThan(0)});const g=await r(d,"node");await c.click(g[0]),await a(async()=>{const y=await u();t(y.hasAttribute("disabled")).toBe(!1)});const k=await v();await c.click(k),await a(async()=>{const y=await o(e,"dialog");t(y.open).toBe(!1),t(e.nodePath).toBe(i)})}),await s("Double-click on a node selects it and closes dialog",async()=>{await n();const i=l();await a(async()=>{const g=await r(i,"node");t(g.length).toBeGreaterThan(0)});const d=await r(i,"node-arrow");await c.click(d[0]),await a(async()=>{const g=await r(i,"node");t(g.length).toBeGreaterThan(0)});const p=await r(i,"node");await c.dblClick(p[0]),await a(async()=>{const g=await o(e,"dialog");t(g.open).toBe(!1),t(e.nodePath).not.toBe("1")})})}},T={render:()=>h`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .opened=${!0}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:w,step:s})=>{const e=w.querySelector("cosmoz-treenode-button-view");await s("Dialog opens when opened property is set externally",async()=>{await a(async()=>{const n=await o(e,"dialog");t(n.open).toBe(!0)})}),await s("Dialog closes when opened property is set to false externally",async()=>{e.opened=!1,await a(async()=>{const n=await o(e,"dialog");t(n.open).toBe(!1)})}),await s("Dialog re-opens when opened property is set to true again",async()=>{e.opened=!0,await a(async()=>{const n=await o(e,"dialog");t(n.open).toBe(!0)})})}},x={render:()=>h`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${B}
                .nodePath=${"999.888.777"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:w,step:s})=>{const e=w.querySelector("cosmoz-treenode-button-view");await s("Button shows placeholder text for invalid path",async()=>{const n=await o(e,"open-button");t(n).toBeTruthy(),t(n?.textContent?.trim()).toContain("Select a node")}),await s("Opens dialog to root nodes",async()=>{const n=await o(e,"open-button");await c.click(n),await a(async()=>{const u=await o(e,"dialog");t(u.open).toBe(!0)});const l=e.shadowRoot?.querySelector("cosmoz-treenode-navigator");await a(async()=>{const u=await r(l,"node");t(u.length).toBe(2)})}),await s("Can select a node successfully",async()=>{const n=e.shadowRoot?.querySelector("cosmoz-treenode-navigator"),l=await r(n,"node");await c.click(l[0]),await a(async()=>{const v=await o(e,"select-button");t(v.hasAttribute("disabled")).toBe(!1)});const u=await o(e,"select-button");await c.click(u),await a(async()=>{const v=await o(e,"dialog");t(v.open).toBe(!1),t(e.nodePath).toBe("1")})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
                .opened=\${true}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      opened: boolean;
    };
    await step('Dialog opens when opened property is set externally', async () => {
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    });
    await step('Dialog closes when opened property is set to false externally', async () => {
      el.opened = false;
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(false);
      });
    });
    await step('Dialog re-opens when opened property is set to true again', async () => {
      el.opened = true;
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    });
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const F=["WithShowReset","WithoutReset","DialogInteraction","SelectButtonInteraction","ExternalDialogControl","WithInvalidNodePath"];export{S as DialogInteraction,T as ExternalDialogControl,f as SelectButtonInteraction,x as WithInvalidNodePath,m as WithShowReset,b as WithoutReset,F as __namedExportsOrder,A as default};
