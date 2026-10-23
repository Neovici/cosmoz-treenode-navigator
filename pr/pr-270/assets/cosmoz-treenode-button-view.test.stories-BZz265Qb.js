import{T as R,a as C}from"./tree-data-COwffZGJ.js";import{j as o,b as w,D as z}from"./iframe-DNEaFNPb.js";import"./cosmoz-treenode-button-view-B3wC1g68.js";import{t as q}from"./cosmoz-treenode-navigator-DGT5NVw6.js";import{f as p,s as T}from"./test-helpers-DjM6aZsz.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-gwnpQ5_b.js";const{expect:t,userEvent:c,waitFor:s}=__STORYBOOK_MODULE_TEST__,u=new R(C),A={title:"Tests/CosmozTreenodeButtonView"},h={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${u}
                .nodePath=${"1.2.3"}
                show-reset
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:i,step:n})=>{const e=i.querySelector("cosmoz-treenode-button-view");await n("Reset button is shown when showReset is true and node is selected",async()=>{await s(async()=>{const a=await o(e,"reset-button");t(a).toBeTruthy()})}),await n("Reset button clears selection",async()=>{const a=await o(e,"reset-button");await c.click(a),await s(()=>{t(e.nodePath).toBe("");const l=z(e,"reset-button");t(l).toBeNull()})})}},g={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${u}
                .nodePath=${"1.2.3"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:i,step:n})=>{const e=i.querySelector("cosmoz-treenode-button-view");await n("Reset button is hidden when showReset is false",async()=>{await s(()=>{const a=z(e,"reset-button");t(a).toBeNull()})})}},m={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${u}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:i,step:n})=>{const e=i.querySelector("cosmoz-treenode-button-view");await n("Opens dialog on button click",async()=>{const a=await o(e,"open-button");await c.click(a),await s(async()=>{const l=await o(e,"dialog");t(l.open).toBe(!0)})}),await n("The icon-only close button has a native accessible name",async()=>{const a=e.shadowRoot.querySelector("header cosmoz-button");t(a.shadowRoot.querySelector("button").getAttribute("aria-label")).toBe("Close")}),await n("Closes dialog on cancel button click",async()=>{const a=await o(e,"dialog"),l=await o(e,"cancel-button");await c.click(l),await s(()=>{t(a.open).toBe(!1)})})}},v={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${u}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:i,step:n})=>{const e=i.querySelector("cosmoz-treenode-button-view"),a=async()=>{const r=await o(e,"open-button");await c.click(r),await s(async()=>{const y=await o(e,"dialog");t(y.open).toBe(!0)})},l=()=>e.shadowRoot?.querySelector("cosmoz-treenode-navigator"),d=async()=>await o(e,"select-button"),k=async()=>await o(e,"cancel-button");await n("Select button is initially disabled",async()=>{await a(),await s(async()=>{const r=await d();t(r).toBeTruthy(),t(r.hasAttribute("disabled")).toBe(!0)})}),await n("Single-clicking a node enables the Select button",async()=>{await c.click(await p(l(),"C:")),await s(async()=>{const r=await d();t(r.hasAttribute("disabled")).toBe(!1)})}),await n("Clicking Select confirms selection and closes dialog",async()=>{const r=await d();await c.click(r),await s(async()=>{const y=await o(e,"dialog");t(y.open).toBe(!1),t(e.nodePath).toBe("1")})}),await n("Cancel after highlighting does not change nodePath",async()=>{const r=e.nodePath;await a();const y=l();await c.click(await p(y,"Users")),t(T(y)).toEqual(["Users"]),await s(async()=>{const E=await d();t(E.hasAttribute("disabled")).toBe(!1)});const P=await k();await c.click(P),await s(async()=>{const E=await o(e,"dialog");t(E.open).toBe(!1),t(e.nodePath).toBe(r)})}),await n("Double-click on a node selects it and closes dialog",async()=>{await a(),await c.dblClick(await p(l(),"Windows")),await s(async()=>{const r=await o(e,"dialog");t(r.open).toBe(!1),t(e.nodePath).toBe("1.2")})})}},b={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${u}
                .opened=${!0}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:i,step:n})=>{const e=i.querySelector("cosmoz-treenode-button-view");await n("Dialog opens when opened property is set externally",async()=>{await s(async()=>{const a=await o(e,"dialog");t(a.open).toBe(!0)})}),await n("Dialog closes when opened property is set to false externally",async()=>{e.opened=!1,await s(async()=>{const a=await o(e,"dialog");t(a.open).toBe(!1)})}),await n("Dialog re-opens when opened property is set to true again",async()=>{e.opened=!0,await s(async()=>{const a=await o(e,"dialog");t(a.open).toBe(!0)})})}},B={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${u}
                .nodePath=${"999.888.777"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:i,step:n})=>{const e=i.querySelector("cosmoz-treenode-button-view");await n("Button shows placeholder text for invalid path",async()=>{const a=await o(e,"open-button");t(a).toBeTruthy(),t(a?.textContent?.trim()).toContain("Select a node")}),await n("Opens dialog to root nodes",async()=>{const a=await o(e,"open-button");await c.click(a),await s(async()=>{const d=await o(e,"dialog");t(d.open).toBe(!0)});const l=e.shadowRoot?.querySelector("cosmoz-treenode-navigator");await p(l,"C:"),await p(l,"D:"),t(T(l)).toEqual([])}),await n("Can select a node successfully",async()=>{const a=e.shadowRoot?.querySelector("cosmoz-treenode-navigator");await c.click(await p(a,"C:")),await s(async()=>{const d=await o(e,"select-button");t(d.hasAttribute("disabled")).toBe(!1)});const l=await o(e,"select-button");await c.click(l),await s(async()=>{const d=await o(e,"dialog");t(d.open).toBe(!1),t(e.nodePath).toBe("1")})})}},S={render:()=>{const i=q(u);return w`<cosmoz-treenode-button-view
            .source=${{...i,getPath:n=>new Promise(e=>setTimeout(()=>e(i.getPath(n)),200))}}
            .nodePath=${"1"}
        ></cosmoz-treenode-button-view>`},play:async({canvasElement:i})=>{const n=i.querySelector("cosmoz-treenode-button-view"),e=await o(n,"open-button");await c.click(e);const a=n.shadowRoot.querySelector("cosmoz-treenode-navigator");await s(async()=>c.click(await p(a,"Users")));const l=await o(n,"select-button");await s(()=>t(l.hasAttribute("disabled")).toBe(!1)),await c.click(await o(n,"cancel-button")),await c.click(e),await o(a,"loading"),t(l.hasAttribute("disabled")).toBe(!0),await c.click(l),t(n.nodePath).toBe("1"),await s(()=>t(T(a)).toEqual(["C:"]))}},x=()=>{let i=document.activeElement;for(;i?.shadowRoot?.activeElement;)i=i.shadowRoot.activeElement;return i},f={render:()=>w`
        <cosmoz-treenode-button-view .tree=${u}></cosmoz-treenode-button-view>
    `,play:async({canvasElement:i})=>{const n=i.querySelector("cosmoz-treenode-button-view"),e=async()=>(await o(n,"search-input")).shadowRoot.querySelector("input");await c.click(await o(n,"open-button")),await s(async()=>t(x()).toBe(await e())),await c.keyboard("{Escape}"),await s(()=>t(n.opened).toBe(!1)),await c.click(await o(n,"open-button")),await s(async()=>t(x()).toBe(await e()))}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-treenode-button-view .tree=\${tree}></cosmoz-treenode-button-view>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      opened: boolean;
    };
    const search = async () => (await findByShadowTestId(el, 'search-input')).shadowRoot!.querySelector('input');
    await userEvent.click(await findByShadowTestId(el, 'open-button'));
    await waitFor(async () => expect(deepActiveElement()).toBe(await search()));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(el.opened).toBe(false));
    await userEvent.click(await findByShadowTestId(el, 'open-button'));
    await waitFor(async () => expect(deepActiveElement()).toBe(await search()));
  }
}`,...f.parameters?.docs?.source}}};const N=["WithShowReset","WithoutReset","DialogInteraction","SelectButtonInteraction","ExternalDialogControl","WithInvalidNodePath","ReopensWithoutCanceledSelection","FocusesSearchOnOpen"];export{m as DialogInteraction,b as ExternalDialogControl,f as FocusesSearchOnOpen,S as ReopensWithoutCanceledSelection,v as SelectButtonInteraction,B as WithInvalidNodePath,h as WithShowReset,g as WithoutReset,N as __namedExportsOrder,A as default};
