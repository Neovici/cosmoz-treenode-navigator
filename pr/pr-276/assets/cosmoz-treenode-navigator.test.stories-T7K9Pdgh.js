import{T as k,a as J}from"./tree-data-COwffZGJ.js";import{j as w,D as P,b as U}from"./iframe-Be8ENJ1f.js";import"./cosmoz-treenode-navigator-D69EsQUe.js";import{e as s,t as B,f as d,s as r,a as h,r as O}from"./test-helpers-Rdiv7MNR.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-sUUsIhYx.js";const{expect:n,userEvent:i,waitFor:p}=__STORYBOOK_MODULE_TEST__,A=new k(J),u=["C:","Program Files","Users","Windows","D:","Data","Backup"],$={title:"Tests/CosmozTreenodeNavigator"},c=(t="")=>U`
    <div style="height: 480px; width: 500px; padding: 10px;">
        <cosmoz-treenode-navigator
            .tree=${A}
            .nodePath=${t}
            .searchMinLength=${3}
            .searchDebounceTimeout=${100}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,l=t=>t.querySelector("cosmoz-treenode-navigator"),y={render:()=>c(),play:async({canvasElement:t,step:a})=>{const e=l(t);await a("With no current node, every root is open",async()=>{await s(e,u)}),await a("Nothing is selected and there is no path",async()=>{n(r(e)).toEqual([]),n(P(e,"path")).toBeNull()})}},m={render:()=>c("1.100"),play:async({canvasElement:t,step:a})=>{const e=l(t);await a("Only the current node and what is below it are listed",async()=>{await s(e,["Users","Default","John","Public"]),n(r(e)).toEqual(["Users"])}),await a("The path shows where it sits",async()=>{const o=await w(e,"path");n(o.textContent?.replace(/\s+/gu," ").trim()).toBe("C: / Users")})}},C=async(t,a)=>{const e=await w(t,"path");await i.click([...e.querySelectorAll("button")].find(o=>o.textContent?.trim()===a))},g={render:()=>c("1.100.200"),play:async({canvasElement:t,step:a})=>{const e=l(t);await s(e,["Default","Documents","Music","Pictures"]),await a("A step above lists that node and what is below it",async()=>{await C(e,"Users"),await s(e,["Users","Default","Documents","Music","Pictures","John","Public"]),n(r(e)).toEqual(["Users"])}),await a("A step inside the list keeps it",async()=>{await i.click(await d(e,"Music")),await C(e,"Default"),n(O(e)[0]).toBe("Users"),n(r(e)).toEqual(["Default"])}),await a("The first step lists the top level",async()=>{await C(e,"C:"),await s(e,["C:","Program Files","Users","Default","Documents","Music","Pictures","John","Public","Windows","D:"]),n(r(e)).toEqual(["C:"])})}},v={render:()=>c(),play:async({canvasElement:t,step:a})=>{const e=l(t);await s(e,u),await a("The chevron expands without selecting",async()=>{await B(await d(e,"Users")),await p(async()=>d(e,"John")),n(r(e)).toEqual([])}),await a("Clicking a row highlights it and updates the path",async()=>{await i.click(await d(e,"John")),n(r(e)).toEqual(["John"]);const o=await w(e,"path");n(o.textContent).toContain("Users")}),await a("Highlighting does not change nodePath",async()=>{n(e.nodePath).toBe("")}),await a("A path step selects that ancestor",async()=>{const T=[...(await w(e,"path")).querySelectorAll("button")].find(R=>R.textContent?.trim()==="C:");await i.click(T),await p(()=>n(r(e)).toEqual(["C:"]))}),await a("Double-clicking a row confirms it",async()=>{await i.dblClick(await d(e,"Windows")),await p(()=>n(e.nodePath).toBe("1.2"))})}},E={render:()=>c("1.100"),play:async({canvasElement:t,step:a})=>{const e=l(t);await p(()=>n(r(e)).toEqual(["Users"])),await a("ArrowDown in the search moves into the tree",async()=>{(await h(e,"")).focus(),await i.keyboard("{ArrowDown}");const T=await d(e,"Users");await p(()=>n(T.matches(":focus")).toBe(!0))}),await a("Arrow keys move, Space highlights, Enter confirms",async()=>{await i.keyboard("{ArrowDown}"),await i.keyboard(" "),n(r(e)).toEqual(["Default"]),await i.keyboard("{Enter}"),await p(()=>n(e.nodePath).toBe("1.100.200"))})}},x={render:()=>c(),play:async({canvasElement:t,step:a})=>{const e=l(t);await s(e,u),await a("Matches show in place, under their ancestors",async()=>{await h(e,"John"),await s(e,["C:","Users","John","D:","Data","John"])}),await a("Clearing the search restores the tree",async()=>{await h(e,""),await s(e,u)}),await a("A search with no matches says so",async()=>{await h(e,"nothing like this"),await p(async()=>n(await w(e,"no-results")).toBeTruthy())})}},f={render:()=>c("1.100"),play:async({canvasElement:t,step:a})=>{const e=l(t);await s(e,["Users","Default","John","Public"]),await a("Only matches below the current node are found",async()=>{await h(e,"Joh"),await s(e,["Users","John"])}),await a("Searching all nodes finds the rest",async()=>{const o=await w(e,"search-everywhere");await i.click(o),await s(e,["C:","Users","John","D:","Data","John"]),n(o.getAttribute("aria-pressed")).toBe("true")}),await a("Searching the node again narrows it back",async()=>{await i.click(await w(e,"search-within")),await s(e,["Users","John"])})}},b={render:()=>c("1.100"),play:async({canvasElement:t,step:a})=>{const e=l(t);await s(e,["Users","Default","John","Public"]),await a("A miss below the node shows matches from all nodes",async()=>{await h(e,"Backup"),await s(e,["D:","Backup"]),n(await w(e,"widened")).toBeTruthy();const o=await w(e,"search-within");n(o.hasAttribute("disabled")).toBe(!0),n((await w(e,"search-everywhere")).getAttribute("aria-pressed")).toBe("true")}),await a("A search that hits stays within the node",async()=>{await h(e,"Joh"),await s(e,["Users","John"]),n(P(e,"widened")).toBeNull()})}},N={render:()=>c(),play:async({canvasElement:t,step:a})=>{const e=l(t);await s(e,u),await a("Shorter than the minimum does not search",async()=>{await h(e,"Jo"),await new Promise(o=>setTimeout(o,250)),await s(e,u)}),await a("Reaching the minimum searches",async()=>{await h(e,"Joh"),await s(e,["C:","Users","John","D:","Data","John"])})}},S={render:()=>c("999.888.777"),play:async({canvasElement:t,step:a})=>{const e=l(t);await a("Falls back to the open roots, nothing selected",async()=>{await s(e,u),n(r(e)).toEqual([])})}},D={render:()=>c("1.2.999"),play:async({canvasElement:t,step:a})=>{const e=l(t);await a("Opens the last valid node (C:/Windows)",async()=>{await p(async()=>d(e,"System")),await d(e,"Microsoft.NET")}),await a("Nothing is selected, since the path is not a node",async()=>{n(r(e)).toEqual([])})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1.100'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await step('Only the current node and what is below it are listed', async () => {
      await expectRows(el, ['Users', 'Default', 'John', 'Public']);
      expect(selectedNames(el)).toEqual(['Users']);
    });
    await step('The path shows where it sits', async () => {
      const path = await findByShadowTestId(el, 'path');
      expect(path.textContent?.replace(/\\s+/gu, ' ').trim()).toBe('C: / Users');
    });
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1.100.200'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await expectRows(el, ['Default', 'Documents', 'Music', 'Pictures']);
    await step('A step above lists that node and what is below it', async () => {
      await clickCrumb(el, 'Users');
      await expectRows(el, ['Users', 'Default', 'Documents', 'Music', 'Pictures', 'John', 'Public']);
      expect(selectedNames(el)).toEqual(['Users']);
    });
    await step('A step inside the list keeps it', async () => {
      await userEvent.click(await findRow(el, 'Music'));
      await clickCrumb(el, 'Default');
      expect(rowNames(el)[0]).toBe('Users');
      expect(selectedNames(el)).toEqual(['Default']);
    });
    await step('The first step lists the top level', async () => {
      await clickCrumb(el, 'C:');
      await expectRows(el, ['C:', 'Program Files', 'Users', 'Default', 'Documents', 'Music', 'Pictures', 'John', 'Public', 'Windows', 'D:']);
      expect(selectedNames(el)).toEqual(['C:']);
    });
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1.100'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await expectRows(el, ['Users', 'Default', 'John', 'Public']);
    await step('Only matches below the current node are found', async () => {
      await search(el, 'Joh');
      await expectRows(el, ['Users', 'John']);
    });
    await step('Searching all nodes finds the rest', async () => {
      const everywhere = await findByShadowTestId(el, 'search-everywhere');
      await userEvent.click(everywhere);
      await expectRows(el, ['C:', 'Users', 'John', 'D:', 'Data', 'John']);
      expect(everywhere.getAttribute('aria-pressed')).toBe('true');
    });
    await step('Searching the node again narrows it back', async () => {
      await userEvent.click(await findByShadowTestId(el, 'search-within'));
      await expectRows(el, ['Users', 'John']);
    });
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1.100'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await expectRows(el, ['Users', 'Default', 'John', 'Public']);
    await step('A miss below the node shows matches from all nodes', async () => {
      await search(el, 'Backup');
      await expectRows(el, ['D:', 'Backup']);
      expect(await findByShadowTestId(el, 'widened')).toBeTruthy();
      const within = await findByShadowTestId(el, 'search-within');
      expect(within.hasAttribute('disabled')).toBe(true);
      expect((await findByShadowTestId(el, 'search-everywhere')).getAttribute('aria-pressed')).toBe('true');
    });
    await step('A search that hits stays within the node', async () => {
      await search(el, 'Joh');
      await expectRows(el, ['Users', 'John']);
      expect(queryByShadowTestId(el, 'widened')).toBeNull();
    });
  }
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const z=["OpensOnRoots","OpensOnCurrentNode","MovesUpThroughThePath","ExpandAndSelect","Keyboard","Search","SearchesWithinTheCurrentNode","WidensASearchThatMissesTheCurrentNode","SearchMinLength","WithInvalidNodePath","WithPartiallyValidNodePath"];export{v as ExpandAndSelect,E as Keyboard,g as MovesUpThroughThePath,m as OpensOnCurrentNode,y as OpensOnRoots,x as Search,N as SearchMinLength,f as SearchesWithinTheCurrentNode,b as WidensASearchThatMissesTheCurrentNode,S as WithInvalidNodePath,D as WithPartiallyValidNodePath,z as __namedExportsOrder,$ as default};
