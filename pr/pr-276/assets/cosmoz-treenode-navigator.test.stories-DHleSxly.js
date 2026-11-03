import{T,a as R}from"./tree-data-COwffZGJ.js";import{j as u,D as P,b as U}from"./iframe-C-pQiK35.js";import"./cosmoz-treenode-navigator-iHt33viW.js";import{e as s,t as k,f as w,s as o,a as p,r as J}from"./test-helpers-BJcf1nUN.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-Dpkx9aVe.js";const{expect:n,userEvent:r,waitFor:h}=__STORYBOOK_MODULE_TEST__,q=new T(R),d=["C:","Program Files","Users","Windows","D:","Data","Backup"],I={title:"Tests/CosmozTreenodeNavigator"},i=(t="")=>U`
    <div style="height: 480px; width: 500px; padding: 10px;">
        <cosmoz-treenode-navigator
            .tree=${q}
            .nodePath=${t}
            .searchMinLength=${3}
            .searchDebounceTimeout=${100}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,c=t=>t.querySelector("cosmoz-treenode-navigator"),m={render:()=>i(),play:async({canvasElement:t,step:a})=>{const e=c(t);await a("With no current node, every root is open",async()=>{await s(e,d)}),await a("Nothing is selected and there is no path",async()=>{n(o(e)).toEqual([]),n(P(e,"path")).toBeNull()})}},y={render:()=>i("1.100"),play:async({canvasElement:t,step:a})=>{const e=c(t);await a("Only the current node and what is below it are listed",async()=>{await s(e,["Users","Default","John","Public"]),n(o(e)).toEqual(["Users"])}),await a("The path shows where it sits",async()=>{const l=await u(e,"path");n(l.textContent?.replace(/\s+/gu," ").trim()).toBe("C: / Users")})}},C=async(t,a)=>{const e=await u(t,"path");await r.click([...e.querySelectorAll("button")].find(l=>l.textContent?.trim()===a))},g={render:()=>i("1.100.200"),play:async({canvasElement:t,step:a})=>{const e=c(t);await s(e,["Default","Documents","Music","Pictures"]),await a("A step above lists that node and what is below it",async()=>{await C(e,"Users"),await s(e,["Users","Default","Documents","Music","Pictures","John","Public"]),n(o(e)).toEqual(["Users"])}),await a("A step inside the list keeps it",async()=>{await r.click(await w(e,"Music")),await C(e,"Default"),n(J(e)[0]).toBe("Users"),n(o(e)).toEqual(["Default"])}),await a("The first step lists the top level",async()=>{await C(e,"C:"),await s(e,["C:","Program Files","Users","Default","Documents","Music","Pictures","John","Public","Windows","D:"]),n(o(e)).toEqual(["C:"])})}},v={render:()=>i(),play:async({canvasElement:t,step:a})=>{const e=c(t);await s(e,d),await a("The chevron expands without selecting",async()=>{await k(await w(e,"Users")),await h(async()=>w(e,"John")),n(o(e)).toEqual([])}),await a("Clicking a row highlights it and updates the path",async()=>{await r.click(await w(e,"John")),n(o(e)).toEqual(["John"]);const l=await u(e,"path");n(l.textContent).toContain("Users")}),await a("Highlighting does not change nodePath",async()=>{n(e.nodePath).toBe("")}),await a("A path step selects that ancestor",async()=>{const b=[...(await u(e,"path")).querySelectorAll("button")].find(O=>O.textContent?.trim()==="C:");await r.click(b),await h(()=>n(o(e)).toEqual(["C:"]))}),await a("Double-clicking a row confirms it",async()=>{await r.dblClick(await w(e,"Windows")),await h(()=>n(e.nodePath).toBe("1.2"))})}},E={render:()=>i("1.100"),play:async({canvasElement:t,step:a})=>{const e=c(t);await h(()=>n(o(e)).toEqual(["Users"])),await a("ArrowDown in the search moves into the tree",async()=>{(await p(e,"")).focus(),await r.keyboard("{ArrowDown}");const b=await w(e,"Users");await h(()=>n(b.matches(":focus")).toBe(!0))}),await a("Arrow keys move, Space highlights, Enter confirms",async()=>{await r.keyboard("{ArrowDown}"),await r.keyboard(" "),n(o(e)).toEqual(["Default"]),await r.keyboard("{Enter}"),await h(()=>n(e.nodePath).toBe("1.100.200"))})}},x={render:()=>i(),play:async({canvasElement:t,step:a})=>{const e=c(t);await s(e,d),await a("Matches show in place, under their ancestors",async()=>{await p(e,"John"),await s(e,["C:","Users","John","D:","Data","John"])}),await a("Clearing the search restores the tree",async()=>{await p(e,""),await s(e,d)}),await a("A search with no matches says so",async()=>{await p(e,"nothing like this"),await h(async()=>n(await u(e,"no-results")).toBeTruthy())})}},f={render:()=>i("1.100"),play:async({canvasElement:t,step:a})=>{const e=c(t);await s(e,["Users","Default","John","Public"]),await a("Only matches below the current node are found",async()=>{await p(e,"Joh"),await s(e,["Users","John"])}),await a("Searching all nodes finds the rest",async()=>{await r.click(await u(e,"search-everywhere")),await s(e,["C:","Users","John","D:","Data","John"]),n(P(e,"search-everywhere")).toBeNull()})}},N={render:()=>i(),play:async({canvasElement:t,step:a})=>{const e=c(t);await s(e,d),await a("Shorter than the minimum does not search",async()=>{await p(e,"Jo"),await new Promise(l=>setTimeout(l,250)),await s(e,d)}),await a("Reaching the minimum searches",async()=>{await p(e,"Joh"),await s(e,["C:","Users","John","D:","Data","John"])})}},D={render:()=>i("999.888.777"),play:async({canvasElement:t,step:a})=>{const e=c(t);await a("Falls back to the open roots, nothing selected",async()=>{await s(e,d),n(o(e)).toEqual([])})}},S={render:()=>i("1.2.999"),play:async({canvasElement:t,step:a})=>{const e=c(t);await a("Opens the last valid node (C:/Windows)",async()=>{await h(async()=>w(e,"System")),await w(e,"Microsoft.NET")}),await a("Nothing is selected, since the path is not a node",async()=>{n(o(e)).toEqual([])})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      await userEvent.click(await findByShadowTestId(el, 'search-everywhere'));
      await expectRows(el, ['C:', 'Users', 'John', 'D:', 'Data', 'John']);
      expect(queryByShadowTestId(el, 'search-everywhere')).toBeNull();
    });
  }
}`,...f.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const $=["OpensOnRoots","OpensOnCurrentNode","MovesUpThroughThePath","ExpandAndSelect","Keyboard","Search","SearchesWithinTheCurrentNode","SearchMinLength","WithInvalidNodePath","WithPartiallyValidNodePath"];export{v as ExpandAndSelect,E as Keyboard,g as MovesUpThroughThePath,y as OpensOnCurrentNode,m as OpensOnRoots,x as Search,N as SearchMinLength,f as SearchesWithinTheCurrentNode,D as WithInvalidNodePath,S as WithPartiallyValidNodePath,$ as __namedExportsOrder,I as default};
