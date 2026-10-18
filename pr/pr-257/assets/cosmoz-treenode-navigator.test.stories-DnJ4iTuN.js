import{T,a as f}from"./tree-data-COwffZGJ.js";import{j as O,D as C,b as P}from"./iframe-DNzSCrex.js";import"./cosmoz-treenode-navigator-CFzWvvcl.js";import{e as s,t as b,f as w,s as o,a as p}from"./test-helpers-2utkJt_B.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-DaxZbWmL.js";const{expect:n,userEvent:h,waitFor:r}=__STORYBOOK_MODULE_TEST__,D=new T(f),d=["C:","Program Files","Users","Windows","D:","Data","Backup"],_={title:"Tests/CosmozTreenodeNavigator"},i=(t="")=>P`
    <div style="height: 480px; width: 500px; padding: 10px;">
        <cosmoz-treenode-navigator
            .tree=${D}
            .nodePath=${t}
            .searchMinLength=${3}
            .searchDebounceTimeout=${100}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,c=t=>t.querySelector("cosmoz-treenode-navigator"),m={render:()=>i(),play:async({canvasElement:t,step:a})=>{const e=c(t);await a("With no current node, every root is open",async()=>{await s(e,d)}),await a("Nothing is selected and there is no path",async()=>{n(o(e)).toEqual([]),n(C(e,"path")).toBeNull()})}},u={render:()=>i("1.100"),play:async({canvasElement:t,step:a})=>{const e=c(t);await a("The current node is selected and opened",async()=>{await s(e,["C:","Program Files","Users","Default","John","Public","Windows"]),n(o(e)).toEqual(["Users"])}),await a("The path shows where it sits",async()=>{const l=await O(e,"path");n(l.textContent?.replace(/\s+/gu," ").trim()).toBe("C: / Users")})}},y={render:()=>i(),play:async({canvasElement:t,step:a})=>{const e=c(t);await s(e,d),await a("The chevron expands without selecting",async()=>{await b(await w(e,"Users")),await r(async()=>w(e,"John")),n(o(e)).toEqual([])}),await a("Clicking a row highlights it and updates the path",async()=>{await h.click(await w(e,"John")),n(o(e)).toEqual(["John"]);const l=await O(e,"path");n(l.textContent).toContain("Users")}),await a("Highlighting does not change nodePath",async()=>{n(e.nodePath).toBe("")}),await a("A path step selects that ancestor",async()=>{const S=[...(await O(e,"path")).querySelectorAll("button")].find(R=>R.textContent?.trim()==="C:");await h.click(S),await r(()=>n(o(e)).toEqual(["C:"]))}),await a("Double-clicking a row confirms it",async()=>{await h.dblClick(await w(e,"Windows")),await r(()=>n(e.nodePath).toBe("1.2"))})}},g={render:()=>i("1.100"),play:async({canvasElement:t,step:a})=>{const e=c(t);await r(()=>n(o(e)).toEqual(["Users"])),await a("ArrowDown in the search moves into the tree",async()=>{(await p(e,"")).focus(),await h.keyboard("{ArrowDown}");const S=await w(e,"Users");await r(()=>n(S.matches(":focus")).toBe(!0))}),await a("Arrow keys move, Space highlights, Enter confirms",async()=>{await h.keyboard("{ArrowDown}"),await h.keyboard(" "),n(o(e)).toEqual(["Default"]),await h.keyboard("{Enter}"),await r(()=>n(e.nodePath).toBe("1.100.200"))})}},E={render:()=>i(),play:async({canvasElement:t,step:a})=>{const e=c(t);await s(e,d),await a("Matches show in place, under their ancestors",async()=>{await p(e,"John"),await s(e,["C:","Users","John","D:","Data","John"])}),await a("Clearing the search restores the tree",async()=>{await p(e,""),await s(e,d)}),await a("A search with no matches says so",async()=>{await p(e,"nothing like this"),await r(async()=>n(await O(e,"no-results")).toBeTruthy())})}},v={render:()=>i(),play:async({canvasElement:t,step:a})=>{const e=c(t);await s(e,d),await a("Shorter than the minimum does not search",async()=>{await p(e,"Jo"),await new Promise(l=>setTimeout(l,250)),await s(e,d)}),await a("Reaching the minimum searches",async()=>{await p(e,"Joh"),await s(e,["C:","Users","John","D:","Data","John"])})}},x={render:()=>i("999.888.777"),play:async({canvasElement:t,step:a})=>{const e=c(t);await a("Falls back to the open roots, nothing selected",async()=>{await s(e,d),n(o(e)).toEqual([])})}},N={render:()=>i("1.2.999"),play:async({canvasElement:t,step:a})=>{const e=c(t);await a("Opens the last valid node (C:/Windows)",async()=>{await r(async()=>w(e,"System")),await w(e,"Microsoft.NET")}),await a("Nothing is selected, since the path is not a node",async()=>{n(o(e)).toEqual([])})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => navigator(),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await step('With no current node, every root is open', async () => {
      await expectRows(el, ROOTS_OPEN);
    });
    await step('Nothing is selected and there is no path', async () => {
      expect(selectedNames(el)).toEqual([]);
      expect(queryByShadowTestId(el, 'path')).toBeNull();
    });
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1.100'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await step('The current node is selected and opened', async () => {
      await expectRows(el, ['C:', 'Program Files', 'Users', 'Default', 'John', 'Public', 'Windows']);
      expect(selectedNames(el)).toEqual(['Users']);
    });
    await step('The path shows where it sits', async () => {
      const path = await findByShadowTestId(el, 'path');
      expect(path.textContent?.replace(/\\s+/gu, ' ').trim()).toBe('C: / Users');
    });
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => navigator(),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await expectRows(el, ROOTS_OPEN);
    await step('The chevron expands without selecting', async () => {
      await toggleRow(await findRow(el, 'Users'));
      await waitFor(async () => findRow(el, 'John'));
      expect(selectedNames(el)).toEqual([]);
    });
    await step('Clicking a row highlights it and updates the path', async () => {
      await userEvent.click(await findRow(el, 'John'));
      expect(selectedNames(el)).toEqual(['John']);
      const path = await findByShadowTestId(el, 'path');
      expect(path.textContent).toContain('Users');
    });
    await step('Highlighting does not change nodePath', async () => {
      expect(el.nodePath).toBe('');
    });
    await step('A path step selects that ancestor', async () => {
      const path = await findByShadowTestId(el, 'path');
      const crumb = [...path.querySelectorAll('button')].find(b => b.textContent?.trim() === 'C:')!;
      await userEvent.click(crumb);
      await waitFor(() => expect(selectedNames(el)).toEqual(['C:']));
    });
    await step('Double-clicking a row confirms it', async () => {
      await userEvent.dblClick(await findRow(el, 'Windows'));
      await waitFor(() => expect(el.nodePath).toBe('1.2'));
    });
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1.100'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await waitFor(() => expect(selectedNames(el)).toEqual(['Users']));
    await step('ArrowDown in the search moves into the tree', async () => {
      const input = await search(el, '');
      input.focus();
      await userEvent.keyboard('{ArrowDown}');
      const users = await findRow(el, 'Users');
      await waitFor(() => expect(users.matches(':focus')).toBe(true));
    });
    await step('Arrow keys move, Space highlights, Enter confirms', async () => {
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard(' ');
      expect(selectedNames(el)).toEqual(['Default']);
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(el.nodePath).toBe('1.100.200'));
    });
  }
}`,...g.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => navigator(),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await expectRows(el, ROOTS_OPEN);
    await step('Matches show in place, under their ancestors', async () => {
      await search(el, 'John');
      await expectRows(el, ['C:', 'Users', 'John', 'D:', 'Data', 'John']);
    });
    await step('Clearing the search restores the tree', async () => {
      await search(el, '');
      await expectRows(el, ROOTS_OPEN);
    });
    await step('A search with no matches says so', async () => {
      await search(el, 'nothing like this');
      await waitFor(async () => expect(await findByShadowTestId(el, 'no-results')).toBeTruthy());
    });
  }
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => navigator(),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await expectRows(el, ROOTS_OPEN);
    await step('Shorter than the minimum does not search', async () => {
      await search(el, 'Jo');
      await new Promise(r => setTimeout(r, 250));
      await expectRows(el, ROOTS_OPEN);
    });
    await step('Reaching the minimum searches', async () => {
      await search(el, 'Joh');
      await expectRows(el, ['C:', 'Users', 'John', 'D:', 'Data', 'John']);
    });
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => navigator('999.888.777'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await step('Falls back to the open roots, nothing selected', async () => {
      await expectRows(el, ROOTS_OPEN);
      expect(selectedNames(el)).toEqual([]);
    });
  }
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1.2.999'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await step('Opens the last valid node (C:/Windows)', async () => {
      await waitFor(async () => findRow(el, 'System'));
      await findRow(el, 'Microsoft.NET');
    });
    await step('Nothing is selected, since the path is not a node', async () => {
      expect(selectedNames(el)).toEqual([]);
    });
  }
}`,...N.parameters?.docs?.source}}};const F=["OpensOnRoots","OpensOnCurrentNode","ExpandAndSelect","Keyboard","Search","SearchMinLength","WithInvalidNodePath","WithPartiallyValidNodePath"];export{y as ExpandAndSelect,g as Keyboard,u as OpensOnCurrentNode,m as OpensOnRoots,E as Search,v as SearchMinLength,x as WithInvalidNodePath,N as WithPartiallyValidNodePath,F as __namedExportsOrder,_ as default};
