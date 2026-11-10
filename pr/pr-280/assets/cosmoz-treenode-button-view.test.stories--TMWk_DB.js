import{D as R,b as w,j as a,a as k}from"./iframe-DmGVdQ3c.js";import{b as I}from"./building-07-CcrcQYyp.js";import{T as C,a as D}from"./tree-data-COwffZGJ.js";import"./cosmoz-treenode-button-view-D5CPcI9s.js";import{t as F}from"./cosmoz-treenode-navigator-B9hUHnjm.js";import{f as p,s as x}from"./test-helpers-CSLo4IPp.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-BY1cM-_4.js";const{expect:n,userEvent:l,waitFor:i}=__STORYBOOK_MODULE_TEST__,u=new C(D),_={title:"Tests/CosmozTreenodeButtonView"},h={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${u}
                .nodePath=${"1.2.3"}
                show-reset
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:s,step:t})=>{const e=s.querySelector("cosmoz-treenode-button-view");await t("Reset button is shown when showReset is true and node is selected",async()=>{await i(async()=>{const o=await a(e,"reset-button");n(o).toBeTruthy()})}),await t("Reset button clears selection",async()=>{const o=await a(e,"reset-button");await l.click(o),await i(()=>{n(e.nodePath).toBe("");const c=k(e,"reset-button");n(c).toBeNull()})})}},g={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${u}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:s})=>{const t=s.querySelector("cosmoz-treenode-button-view"),e=document.createElement("div");R(I(),e);const o=e.querySelector("path")?.getAttribute("d");await i(()=>{const c=[...t.shadowRoot.querySelectorAll(".default-icon path")].map(r=>r.getAttribute("d"));n(c).toEqual([o,o])})}},m={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${u}
                .nodePath=${"1.2.3"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:s,step:t})=>{const e=s.querySelector("cosmoz-treenode-button-view");await t("Reset button is hidden when showReset is false",async()=>{await i(()=>{const o=k(e,"reset-button");n(o).toBeNull()})})}},b={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${u}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:s,step:t})=>{const e=s.querySelector("cosmoz-treenode-button-view");await t("Opens dialog on button click",async()=>{const o=await a(e,"open-button");await l.click(o),await i(async()=>{const c=await a(e,"dialog");n(c.open).toBe(!0)})}),await t("The icon-only close button has a native accessible name",async()=>{const o=e.shadowRoot.querySelector("header cosmoz-button");n(o.shadowRoot.querySelector("button").getAttribute("aria-label")).toBe("Close")}),await t("Closes dialog on cancel button click",async()=>{const o=await a(e,"dialog"),c=await a(e,"cancel-button");await l.click(c),await i(()=>{n(o.open).toBe(!1)})})}},v={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view .tree=${u}></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:s,step:t})=>{const e=s.querySelector("cosmoz-treenode-button-view"),o=async()=>{const d=await a(e,"open-button");await l.click(d),await i(async()=>{const y=await a(e,"dialog");n(y.open).toBe(!0)})},c=()=>e.shadowRoot?.querySelector("cosmoz-treenode-navigator"),r=async()=>await a(e,"select-button"),q=async()=>await a(e,"cancel-button");await t("Select button is initially disabled",async()=>{await o(),await i(async()=>{const d=await r();n(d).toBeTruthy(),n(d.hasAttribute("disabled")).toBe(!0)})}),await t("Single-clicking a node enables the Select button",async()=>{await l.click(await p(c(),"C:")),await i(async()=>{const d=await r();n(d.hasAttribute("disabled")).toBe(!1)})}),await t("Clicking Select confirms selection and closes dialog",async()=>{const d=await r();await l.click(d),await i(async()=>{const y=await a(e,"dialog");n(y.open).toBe(!1),n(e.nodePath).toBe("1")})}),await t("Cancel after highlighting does not change nodePath",async()=>{const d=e.nodePath;await o();const y=c();await l.click(await p(y,"Users")),n(x(y)).toEqual(["Users"]),await i(async()=>{const T=await r();n(T.hasAttribute("disabled")).toBe(!1)});const P=await q();await l.click(P),await i(async()=>{const T=await a(e,"dialog");n(T.open).toBe(!1),n(e.nodePath).toBe(d)})}),await t("Double-click on a node selects it and closes dialog",async()=>{await o(),await l.dblClick(await p(c(),"Windows")),await i(async()=>{const d=await a(e,"dialog");n(d.open).toBe(!1),n(e.nodePath).toBe("1.2")})})}},B={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${u}
                .opened=${!0}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:s,step:t})=>{const e=s.querySelector("cosmoz-treenode-button-view");await t("Dialog opens when opened property is set externally",async()=>{await i(async()=>{const o=await a(e,"dialog");n(o.open).toBe(!0)})}),await t("Dialog closes when opened property is set to false externally",async()=>{e.opened=!1,await i(async()=>{const o=await a(e,"dialog");n(o.open).toBe(!1)})}),await t("Dialog re-opens when opened property is set to true again",async()=>{e.opened=!0,await i(async()=>{const o=await a(e,"dialog");n(o.open).toBe(!0)})})}},S={render:()=>w`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${u}
                .nodePath=${"999.888.777"}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:s,step:t})=>{const e=s.querySelector("cosmoz-treenode-button-view");await t("Button shows placeholder text for invalid path",async()=>{const o=await a(e,"open-button");n(o).toBeTruthy(),n(o?.textContent?.trim()).toContain("Select a node")}),await t("Opens dialog to root nodes",async()=>{const o=await a(e,"open-button");await l.click(o),await i(async()=>{const r=await a(e,"dialog");n(r.open).toBe(!0)});const c=e.shadowRoot?.querySelector("cosmoz-treenode-navigator");await p(c,"C:"),await p(c,"D:"),n(x(c)).toEqual([])}),await t("Can select a node successfully",async()=>{const o=e.shadowRoot?.querySelector("cosmoz-treenode-navigator");await l.click(await p(o,"C:")),await i(async()=>{const r=await a(e,"select-button");n(r.hasAttribute("disabled")).toBe(!1)});const c=await a(e,"select-button");await l.click(c),await i(async()=>{const r=await a(e,"dialog");n(r.open).toBe(!1),n(e.nodePath).toBe("1")})})}},f={render:()=>{const s=F(u);return w`<cosmoz-treenode-button-view
            .source=${{...s,getPath:t=>new Promise(e=>setTimeout(()=>e(s.getPath(t)),200))}}
            .nodePath=${"1"}
        ></cosmoz-treenode-button-view>`},play:async({canvasElement:s})=>{const t=s.querySelector("cosmoz-treenode-button-view"),e=await a(t,"open-button");await l.click(e);const o=t.shadowRoot.querySelector("cosmoz-treenode-navigator");await i(async()=>l.click(await p(o,"Users")));const c=await a(t,"select-button");await i(()=>n(c.hasAttribute("disabled")).toBe(!1)),await l.click(await a(t,"cancel-button")),await l.click(e),await a(o,"loading"),n(c.hasAttribute("disabled")).toBe(!0),await l.click(c),n(t.nodePath).toBe("1"),await i(()=>n(x(o)).toEqual(["C:"]))}},z=()=>{let s=document.activeElement;for(;s?.shadowRoot?.activeElement;)s=s.shadowRoot.activeElement;return s},E={render:()=>w`
        <cosmoz-treenode-button-view .tree=${u}></cosmoz-treenode-button-view>
    `,play:async({canvasElement:s})=>{const t=s.querySelector("cosmoz-treenode-button-view"),e=async()=>(await a(t,"search-input")).shadowRoot.querySelector("input");await l.click(await a(t,"open-button")),await i(async()=>n(z()).toBe(await e())),await l.keyboard("{Escape}"),await i(()=>n(t.opened).toBe(!1)),await l.click(await a(t,"open-button")),await i(async()=>n(z()).toBe(await e()))}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
            <cosmoz-treenode-button-view .tree=\${tree}></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    const building = document.createElement('div');
    render(building07Icon(), building);
    const expected = building.querySelector('path')?.getAttribute('d');
    await waitFor(() => {
      const icons = [...el.shadowRoot!.querySelectorAll('.default-icon path')].map(path => path.getAttribute('d'));
      expect(icons).toEqual([expected, expected]);
    });
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const U=["WithShowReset","DefaultIcon","WithoutReset","DialogInteraction","SelectButtonInteraction","ExternalDialogControl","WithInvalidNodePath","ReopensWithoutCanceledSelection","FocusesSearchOnOpen"];export{g as DefaultIcon,b as DialogInteraction,B as ExternalDialogControl,E as FocusesSearchOnOpen,f as ReopensWithoutCanceledSelection,v as SelectButtonInteraction,S as WithInvalidNodePath,h as WithShowReset,m as WithoutReset,U as __namedExportsOrder,_ as default};
