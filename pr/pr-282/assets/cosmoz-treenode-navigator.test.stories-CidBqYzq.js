import{T as J,a as k}from"./tree-data-COwffZGJ.js";import{j as p,a as y,b as q}from"./iframe-DGy0q5PQ.js";import"./cosmoz-treenode-navigator-Cx12ef63.js";import{e as s,a as w,t as B,f as h,s as o,r as A}from"./test-helpers-DjwcJNNK.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-A6q9NiFU.js";const{expect:n,userEvent:l,waitFor:d}=__STORYBOOK_MODULE_TEST__,M=new J(k),u=["C:","Program Files","Users","Windows","D:","Data","Backup"],z={title:"Tests/CosmozTreenodeNavigator"},r=(t="")=>q`
    <div style="height: 480px; width: 500px; padding: 10px;">
        <cosmoz-treenode-navigator
            .tree=${M}
            .nodePath=${t}
            .searchMinLength=${3}
            .searchDebounceTimeout=${100}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,i=t=>t.querySelector("cosmoz-treenode-navigator"),m={render:()=>r(),play:async({canvasElement:t,step:a})=>{const e=i(t);await a("With no current node, every root is open",async()=>{await s(e,u)}),await a("Nothing is selected and there is no path",async()=>{n(o(e)).toEqual([]),n(y(e,"path")).toBeNull()})}},g={render:()=>r("1.100"),play:async({canvasElement:t,step:a})=>{const e=i(t);await a("Only the current node and what is below it are listed",async()=>{await s(e,["Users","Default","John","Public"]),n(o(e)).toEqual(["Users"])}),await a("The path shows where it sits",async()=>{const c=await p(e,"path");n(c.textContent?.replace(/\s+/gu," ").trim()).toBe("C: / Users")})}},P=async(t,a)=>{const e=await p(t,"path");await l.click([...e.querySelectorAll("button")].find(c=>c.textContent?.trim()===a))},v={render:()=>r("1.100.200"),play:async({canvasElement:t,step:a})=>{const e=i(t);await s(e,["Default","Documents","Music","Pictures"]),await a("A step above lists that node and what is below it",async()=>{await P(e,"Users"),await s(e,["Users","Default","Documents","Music","Pictures","John","Public"]),n(o(e)).toEqual(["Users"])}),await a("A step inside the list keeps it",async()=>{await l.click(await h(e,"Music")),await P(e,"Default"),n(A(e)[0]).toBe("Users"),n(o(e)).toEqual(["Default"])}),await a("The first step lists the top level",async()=>{await P(e,"C:"),await s(e,["C:","Program Files","Users","Default","Documents","Music","Pictures","John","Public","Windows","D:"]),n(o(e)).toEqual(["C:"])})}},E={render:()=>r(),play:async({canvasElement:t,step:a})=>{const e=i(t);await s(e,u),await a("The chevron expands without selecting",async()=>{await B(await h(e,"Users")),await d(async()=>h(e,"John")),n(o(e)).toEqual([])}),await a("Clicking a row highlights it and updates the path",async()=>{await l.click(await h(e,"John")),n(o(e)).toEqual(["John"]);const c=await p(e,"path");n(c.textContent).toContain("Users")}),await a("Highlighting does not change nodePath",async()=>{n(e.nodePath).toBe("")}),await a("A path step selects that ancestor",async()=>{const R=[...(await p(e,"path")).querySelectorAll("button")].find(O=>O.textContent?.trim()==="C:");await l.click(R),await d(()=>n(o(e)).toEqual(["C:"]))}),await a("Double-clicking a row confirms it",async()=>{await l.dblClick(await h(e,"Windows")),await d(()=>n(e.nodePath).toBe("1.2"))})}},x={render:()=>r("1.100"),play:async({canvasElement:t,step:a})=>{const e=i(t);await d(()=>n(o(e)).toEqual(["Users"])),await a("ArrowDown in the search moves into the tree",async()=>{(await w(e,"")).focus(),await l.keyboard("{ArrowDown}");const R=await h(e,"Users");await d(()=>n(R.matches(":focus")).toBe(!0))}),await a("Arrow keys move, Space highlights, Enter confirms",async()=>{await l.keyboard("{ArrowDown}"),await l.keyboard(" "),n(o(e)).toEqual(["Default"]),await l.keyboard("{Enter}"),await d(()=>n(e.nodePath).toBe("1.100.200"))})}},N={render:()=>r(),play:async({canvasElement:t,step:a})=>{const e=i(t);await s(e,u),await a("Matches show in place, under their ancestors",async()=>{await w(e,"John"),await s(e,["C:","Users","John","D:","Data","John"])}),await a("Clearing the search restores the tree",async()=>{await w(e,""),await s(e,u)}),await a("A search with no matches says so",async()=>{await w(e,"nothing like this"),await d(async()=>n(await p(e,"no-results")).toBeTruthy())})}},f={render:()=>r("1.100"),play:async({canvasElement:t,step:a})=>{const e=i(t);await s(e,["Users","Default","John","Public"]),await a("The scope shows only while searching",async()=>{n(y(e,"search-within")).toBeNull()}),await a("Only matches below the current node are found",async()=>{await w(e,"Joh"),await s(e,["Users","John"])}),await a("Searching all nodes finds the rest",async()=>{const c=await p(e,"search-everywhere");await l.click(c),await s(e,["C:","Users","John","D:","Data","John"]),n(c.getAttribute("aria-pressed")).toBe("true")}),await a("Searching the node again narrows it back",async()=>{await l.click(await p(e,"search-within")),await s(e,["Users","John"])})}},S={render:()=>r("1.100"),play:async({canvasElement:t,step:a})=>{const e=i(t);await s(e,["Users","Default","John","Public"]),await a("A miss below the node shows matches from all nodes",async()=>{await w(e,"Backup"),await s(e,["D:","Backup"]),n(await p(e,"widened")).toBeTruthy(),n(y(e,"search-within")).toBeNull()}),await a("A search that hits stays within the node",async()=>{await w(e,"Joh"),await s(e,["Users","John"]),n(y(e,"widened")).toBeNull()})}},T={render:()=>r("1"),play:async({canvasElement:t,step:a})=>{const e=i(t);await a("Lists the top level with the node open",async()=>{await s(e,["C:","Program Files","Users","Windows","D:"]),n(o(e)).toEqual(["C:"]),n(y(e,"search-everywhere")).toBeNull()})}},D={render:()=>r(),play:async({canvasElement:t,step:a})=>{const e=i(t);await s(e,u),await w(e,"Users"),await s(e,["C:","Users"]),await a("Expanding a result lists its children",async()=>{await B(await h(e,"Users")),await s(e,["C:","Users","Default","John","Public"])})}},b={render:()=>r(),play:async({canvasElement:t,step:a})=>{const e=i(t);await s(e,u),await a("Shorter than the minimum does not search",async()=>{await w(e,"Jo"),await new Promise(c=>setTimeout(c,250)),await s(e,u)}),await a("Reaching the minimum searches",async()=>{await w(e,"Joh"),await s(e,["C:","Users","John","D:","Data","John"])})}},U={render:()=>r("999.888.777"),play:async({canvasElement:t,step:a})=>{const e=i(t);await a("Falls back to the open roots, nothing selected",async()=>{await s(e,u),n(o(e)).toEqual([])})}},C={render:()=>r("1.2.999"),play:async({canvasElement:t,step:a})=>{const e=i(t);await a("Opens the last valid node (C:/Windows)",async()=>{await d(async()=>h(e,"System")),await h(e,"Microsoft.NET")}),await a("Nothing is selected, since the path is not a node",async()=>{n(o(e)).toEqual([])})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1.100'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await expectRows(el, ['Users', 'Default', 'John', 'Public']);
    await step('The scope shows only while searching', async () => {
      expect(queryByShadowTestId(el, 'search-within')).toBeNull();
    });
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      expect(queryByShadowTestId(el, 'search-within')).toBeNull();
    });
    await step('A search that hits stays within the node', async () => {
      await search(el, 'Joh');
      await expectRows(el, ['Users', 'John']);
      expect(queryByShadowTestId(el, 'widened')).toBeNull();
    });
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => navigator('1'),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await step('Lists the top level with the node open', async () => {
      await expectRows(el, ['C:', 'Program Files', 'Users', 'Windows', 'D:']);
      expect(selectedNames(el)).toEqual(['C:']);
      expect(queryByShadowTestId(el, 'search-everywhere')).toBeNull();
    });
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => navigator(),
  play: async ({
    canvasElement,
    step
  }) => {
    const el = getNavigator(canvasElement);
    await expectRows(el, ROOTS_OPEN);
    await search(el, 'Users');
    await expectRows(el, ['C:', 'Users']);
    await step('Expanding a result lists its children', async () => {
      await toggleRow(await findRow(el, 'Users'));
      await expectRows(el, ['C:', 'Users', 'Default', 'John', 'Public']);
    });
  }
}`,...D.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const K=["OpensOnRoots","OpensOnCurrentNode","MovesUpThroughThePath","ExpandAndSelect","Keyboard","Search","SearchesWithinTheCurrentNode","WidensASearchThatMissesTheCurrentNode","OpensOnATopLevelNodeUnscoped","BrowsesBelowASearchResult","SearchMinLength","WithInvalidNodePath","WithPartiallyValidNodePath"];export{D as BrowsesBelowASearchResult,E as ExpandAndSelect,x as Keyboard,v as MovesUpThroughThePath,T as OpensOnATopLevelNodeUnscoped,g as OpensOnCurrentNode,m as OpensOnRoots,N as Search,b as SearchMinLength,f as SearchesWithinTheCurrentNode,S as WidensASearchThatMissesTheCurrentNode,U as WithInvalidNodePath,C as WithPartiallyValidNodePath,K as __namedExportsOrder,z as default};
