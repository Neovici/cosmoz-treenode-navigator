import{T as k,a as P}from"./tree-data-COwffZGJ.js";import{j as o,b as u,D as E}from"./iframe-f4Wa272W.js";import"./cosmoz-treenode-button-view-BPFFbVUS.js";import{t as C}from"./cosmoz-treenode-navigator-Dy7Ie33W.js";import{f as w,s as T}from"./test-helpers-DxcWsz4L.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-sOV-spM3.js";const{expect:t,userEvent:c,waitFor:s}=__STORYBOOK_MODULE_TEST__,p=new k(P),F={title:"Tests/CosmozTreenodeButtonView"},g={render:()=>u`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                .nodePath=${"1.2.3"}
                show-reset
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:l,step:a})=>{const e=l.querySelector("cosmoz-treenode-button-view");await a("Reset button is shown when showReset is true and node is selected",async()=>{await s(async()=>{const n=await o(e,"reset-button");t(n).toBeTruthy()})}),await a("Reset button clears selection",async()=>{const n=await o(e,"reset-button");await c.click(n),await s(()=>{t(e.nodePath).toBe("");const i=E(e,"reset-button");t(i).toBeNull()})})}},h={render:()=>u`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                .nodePath=${"1.2.3"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:l,step:a})=>{const e=l.querySelector("cosmoz-treenode-button-view");await a("Reset button is hidden when showReset is false",async()=>{await s(()=>{const n=E(e,"reset-button");t(n).toBeNull()})})}},m={render:()=>u`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${p}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:l,step:a})=>{const e=l.querySelector("cosmoz-treenode-button-view");await a("Opens dialog on button click",async()=>{const n=await o(e,"open-button");await c.click(n),await s(async()=>{const i=await o(e,"dialog");t(i.open).toBe(!0)})}),await a("The icon-only close button has a native accessible name",async()=>{const n=e.shadowRoot.querySelector("header cosmoz-button");t(n.shadowRoot.querySelector("button").getAttribute("aria-label")).toBe("Close")}),await a("Closes dialog on cancel button click",async()=>{const n=await o(e,"dialog"),i=await o(e,"cancel-button");await c.click(i),await s(()=>{t(n.open).toBe(!1)})})}},B={render:()=>u`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${p}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:l,step:a})=>{const e=l.querySelector("cosmoz-treenode-button-view"),n=async()=>{const r=await o(e,"open-button");await c.click(r),await s(async()=>{const y=await o(e,"dialog");t(y.open).toBe(!0)})},i=()=>e.shadowRoot?.querySelector("cosmoz-treenode-navigator"),d=async()=>await o(e,"select-button"),x=async()=>await o(e,"cancel-button");await a("Select button is initially disabled",async()=>{await n(),await s(async()=>{const r=await d();t(r).toBeTruthy(),t(r.hasAttribute("disabled")).toBe(!0)})}),await a("Single-clicking a node enables the Select button",async()=>{await c.click(await w(i(),"C:")),await s(async()=>{const r=await d();t(r.hasAttribute("disabled")).toBe(!1)})}),await a("Clicking Select confirms selection and closes dialog",async()=>{const r=await d();await c.click(r),await s(async()=>{const y=await o(e,"dialog");t(y.open).toBe(!1),t(e.nodePath).toBe("1")})}),await a("Cancel after highlighting does not change nodePath",async()=>{const r=e.nodePath;await n();const y=i();await c.click(await w(y,"Users")),t(T(y)).toEqual(["Users"]),await s(async()=>{const f=await d();t(f.hasAttribute("disabled")).toBe(!1)});const z=await x();await c.click(z),await s(async()=>{const f=await o(e,"dialog");t(f.open).toBe(!1),t(e.nodePath).toBe(r)})}),await a("Double-click on a node selects it and closes dialog",async()=>{await n(),await c.dblClick(await w(i(),"Windows")),await s(async()=>{const r=await o(e,"dialog");t(r.open).toBe(!1),t(e.nodePath).toBe("1.2")})})}},b={render:()=>u`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                .opened=${!0}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:l,step:a})=>{const e=l.querySelector("cosmoz-treenode-button-view");await a("Dialog opens when opened property is set externally",async()=>{await s(async()=>{const n=await o(e,"dialog");t(n.open).toBe(!0)})}),await a("Dialog closes when opened property is set to false externally",async()=>{e.opened=!1,await s(async()=>{const n=await o(e,"dialog");t(n.open).toBe(!1)})}),await a("Dialog re-opens when opened property is set to true again",async()=>{e.opened=!0,await s(async()=>{const n=await o(e,"dialog");t(n.open).toBe(!0)})})}},v={render:()=>u`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${p}
                .nodePath=${"999.888.777"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:l,step:a})=>{const e=l.querySelector("cosmoz-treenode-button-view");await a("Button shows placeholder text for invalid path",async()=>{const n=await o(e,"open-button");t(n).toBeTruthy(),t(n?.textContent?.trim()).toContain("Select a node")}),await a("Opens dialog to root nodes",async()=>{const n=await o(e,"open-button");await c.click(n),await s(async()=>{const d=await o(e,"dialog");t(d.open).toBe(!0)});const i=e.shadowRoot?.querySelector("cosmoz-treenode-navigator");await w(i,"C:"),await w(i,"D:"),t(T(i)).toEqual([])}),await a("Can select a node successfully",async()=>{const n=e.shadowRoot?.querySelector("cosmoz-treenode-navigator");await c.click(await w(n,"C:")),await s(async()=>{const d=await o(e,"select-button");t(d.hasAttribute("disabled")).toBe(!1)});const i=await o(e,"select-button");await c.click(i),await s(async()=>{const d=await o(e,"dialog");t(d.open).toBe(!1),t(e.nodePath).toBe("1")})})}},S={render:()=>{const l=C(p);return u`<cosmoz-treenode-button-view
            .source=${{...l,getPath:a=>new Promise(e=>setTimeout(()=>e(l.getPath(a)),200))}}
            .nodePath=${"1"}
        ></cosmoz-treenode-button-view>`},play:async({canvasElement:l})=>{const a=l.querySelector("cosmoz-treenode-button-view"),e=await o(a,"open-button");await c.click(e);const n=a.shadowRoot.querySelector("cosmoz-treenode-navigator");await s(async()=>c.click(await w(n,"Users")));const i=await o(a,"select-button");await s(()=>t(i.hasAttribute("disabled")).toBe(!1)),await c.click(await o(a,"cancel-button")),await c.click(e),await o(n,"loading"),t(i.hasAttribute("disabled")).toBe(!0),await c.click(i),t(a.nodePath).toBe("1"),await s(()=>t(T(n)).toEqual(["C:"]))}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    await step('The icon-only close button has a native accessible name', async () => {
      const close = el.shadowRoot!.querySelector('header cosmoz-button')!;
      expect(close.shadowRoot!.querySelector('button')!.getAttribute('aria-label')).toBe('Close');
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
}`,...m.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      await userEvent.click(await findRow(getNavigator(), 'C:'));
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

      // C: is current, so its children are open: highlight one of them
      const navigator = getNavigator();
      await userEvent.click(await findRow(navigator, 'Users'));
      expect(selectedNames(navigator)).toEqual(['Users']);

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
      await userEvent.dblClick(await findRow(getNavigator(), 'Windows'));
      await waitFor(async () => {
        const dialog = (await findByShadowTestId(el, 'dialog')) as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath is the double-clicked node, C:/Windows
        expect(el.nodePath).toBe('1.2');
      });
    });
  }
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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

      // The roots are open and nothing is highlighted
      await findRow(navigator, 'C:');
      await findRow(navigator, 'D:');
      expect(selectedNames(navigator)).toEqual([]);
    });
    await step('Can select a node successfully', async () => {
      const navigator = el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;
      await userEvent.click(await findRow(navigator, 'C:'));

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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const source = treeSource(tree);
    return html\`<cosmoz-treenode-button-view
            .source=\${{
      ...source,
      getPath: (path: string) => new Promise(resolve => setTimeout(() => resolve(source.getPath(path)), 200))
    }}
            .nodePath=\${'1'}
        ></cosmoz-treenode-button-view>\`;
  },
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      nodePath: string;
    };
    const open = await findByShadowTestId(el, 'open-button');
    await userEvent.click(open);
    const navigator = el.shadowRoot!.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await waitFor(async () => userEvent.click(await findRow(navigator, 'Users')));
    const select = await findByShadowTestId(el, 'select-button');
    await waitFor(() => expect(select.hasAttribute('disabled')).toBe(false));
    await userEvent.click(await findByShadowTestId(el, 'cancel-button'));
    await userEvent.click(open);
    await findByShadowTestId(navigator, 'loading');
    expect(select.hasAttribute('disabled')).toBe(true);
    await userEvent.click(select);
    expect(el.nodePath).toBe('1');
    await waitFor(() => expect(selectedNames(navigator)).toEqual(['C:']));
  }
}`,...S.parameters?.docs?.source}}};const H=["WithShowReset","WithoutReset","DialogInteraction","SelectButtonInteraction","ExternalDialogControl","WithInvalidNodePath","ReopensWithoutCanceledSelection"];export{m as DialogInteraction,b as ExternalDialogControl,S as ReopensWithoutCanceledSelection,B as SelectButtonInteraction,v as WithInvalidNodePath,g as WithShowReset,h as WithoutReset,H as __namedExportsOrder,F as default};
