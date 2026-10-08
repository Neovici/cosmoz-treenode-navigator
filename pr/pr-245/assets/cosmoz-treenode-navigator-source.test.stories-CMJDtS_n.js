import{j as l,b as g,N as s,D as v}from"./iframe-BT-O1z1x.js";import"./cosmoz-treenode-navigator-DOK1qSlm.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o,waitFor:c}=__STORYBOOK_MODULE_TEST__,y={"1.1":{id:"a",pathLocator:"1.1",name:"Alpha"},"1.2":{id:"b",pathLocator:"1.2",name:"Beta"},"1.1.1":{id:"c",pathLocator:"1.1.1",name:"Alpha child"}},A=["1.2","1.1.1","1.1"],d=t=>new Promise(n=>setTimeout(()=>n(t),10)),m={getLevel:t=>d(Object.values(y).filter(n=>n.pathLocator.startsWith(t?`${t}.`:"1.")&&n.pathLocator.split(".").length===(t||"1").split(".").length+1)),getPath:t=>d(t.split(".").map((n,e,a)=>y[a.slice(0,e+1).join(".")]).filter(Boolean)),search:()=>d(A.map(t=>y[t])),hasChildren:()=>{},label:t=>t.name??"",pathLabel:()=>{},parentOf:t=>t.pathLocator.slice(0,t.pathLocator.lastIndexOf(".")),scopedSearch:!1},I={title:"Tests/CosmozTreenodeNavigatorSource"},S=()=>g`
    <div style="height: 400px; width: 500px;">
        <cosmoz-treenode-navigator
            .source=${m}
            .searchMinLength=${3}
            .searchDebounceTimeout=${50}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,h={render:S,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-treenode-navigator");await n("Roots arrive once the source resolves",async()=>{await c(async()=>{const a=await s(e,"node");o(a.length).toBe(2)})}),await n("An unknown child count still offers the arrow",async()=>{const a=await s(e,"node-arrow");o(a.length).toBe(2)}),await n("Opening a node loads its children",async()=>{const[a]=await s(e,"node-arrow");a.click(),await c(async()=>{const r=await s(e,"node-name");o(r.map(i=>i.textContent?.trim())).toEqual(["Alpha child"])})})}},p={render:S,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-treenode-navigator");await c(async()=>{o((await s(e,"node")).length).toBe(2)}),await n("Open a node, so a search would be scoped to it",async()=>{const[a]=await s(e,"node-arrow");a.click(),await c(async()=>{const r=await s(e,"node-name");o(r.map(i=>i.textContent?.trim())).toEqual(["Alpha child"])})}),await n("Results keep the order the source returned them in",async()=>{const r=(await l(e,"search-input")).shadowRoot?.querySelector("input");r.focus(),r.value="alpha",r.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const i=await s(e,"node-name");o(i.map(f=>f.textContent?.trim())).toEqual(["Beta","Alpha child","Alpha"])})}),await n("A source that searches globally offers no re-search",()=>{o(v(e,"global-search-button")).toBeNull()})}},B={...m,getLevel:t=>t?new Promise((n,e)=>setTimeout(()=>e(new Error("boom")),300)):m.getLevel(t)},w={render:()=>g`
        <div style="height: 400px; width: 500px;">
            <cosmoz-treenode-navigator
                .source=${B}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-treenode-navigator");await c(async()=>{o((await s(e,"node")).length).toBe(2)});const[a]=await s(e,"node-arrow");a.click(),await n("Loading shows while the previous level is still up",async()=>{await l(e,"loading"),o((await s(e,"node")).length).toBe(2)}),await n("A failed level says so",async()=>{await l(e,"error"),o(v(e,"loading")).toBeNull()})}},T={...m,getLevel:()=>d([]),search:()=>d([])},u={render:()=>g`
        <div style="height: 400px; width: 500px;">
            <cosmoz-treenode-navigator
                .source=${T}
                .searchMinLength=${3}
                .searchDebounceTimeout=${50}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:t,step:n})=>{const e=t.querySelector("cosmoz-treenode-navigator");await n("A level with nothing to list points to search",async()=>{const a=await l(e,"empty");o(a.textContent?.trim()).toBe("Search to find a node.")}),await n("A search with no hits says so",async()=>{const r=(await l(e,"search-input")).shadowRoot?.querySelector("input");r.value="nothing",r.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const i=await l(e,"empty");o(i.textContent?.trim()).toBe("No matches.")})})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await step('Roots arrive once the source resolves', async () => {
      await waitFor(async () => {
        const rows = await findAllByShadowTestId(el, 'node');
        expect(rows.length).toBe(2);
      });
    });
    await step('An unknown child count still offers the arrow', async () => {
      const arrows = await findAllByShadowTestId(el, 'node-arrow');
      expect(arrows.length).toBe(2);
    });
    await step('Opening a node loads its children', async () => {
      const [firstArrow] = await findAllByShadowTestId(el, 'node-arrow');
      firstArrow.click();
      await waitFor(async () => {
        const names = await findAllByShadowTestId(el, 'node-name');
        expect(names.map(n => n.textContent?.trim())).toEqual(['Alpha child']);
      });
    });
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await waitFor(async () => {
      expect((await findAllByShadowTestId(el, 'node')).length).toBe(2);
    });

    // Open a node first: the re-search button is only ever offered while a
    // search is scoped to one, so asserting its absence from the roots would
    // pass whatever \`scopedSearch\` said.
    await step('Open a node, so a search would be scoped to it', async () => {
      const [firstArrow] = await findAllByShadowTestId(el, 'node-arrow');
      firstArrow.click();
      await waitFor(async () => {
        const names = await findAllByShadowTestId(el, 'node-name');
        expect(names.map(n => n.textContent?.trim())).toEqual(['Alpha child']);
      });
    });
    await step('Results keep the order the source returned them in', async () => {
      const searchInput = await findByShadowTestId(el, 'search-input');
      const input = searchInput.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.focus();
      input.value = 'alpha';
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));
      await waitFor(async () => {
        const names = await findAllByShadowTestId(el, 'node-name');
        expect(names.map(n => n.textContent?.trim())).toEqual(['Beta', 'Alpha child', 'Alpha']);
      });
    });
    await step('A source that searches globally offers no re-search', () => {
      expect(queryByShadowTestId(el, 'global-search-button')).toBeNull();
    });
  }
}`,...p.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="height: 400px; width: 500px;">
            <cosmoz-treenode-navigator
                .source=\${failingSource}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await waitFor(async () => {
      expect((await findAllByShadowTestId(el, 'node')).length).toBe(2);
    });
    const [firstArrow] = await findAllByShadowTestId(el, 'node-arrow');
    firstArrow.click();
    await step('Loading shows while the previous level is still up', async () => {
      await findByShadowTestId(el, 'loading');
      expect((await findAllByShadowTestId(el, 'node')).length).toBe(2);
    });
    await step('A failed level says so', async () => {
      await findByShadowTestId(el, 'error');
      expect(queryByShadowTestId(el, 'loading')).toBeNull();
    });
  }
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="height: 400px; width: 500px;">
            <cosmoz-treenode-navigator
                .source=\${searchOnlySource}
                .searchMinLength=\${3}
                .searchDebounceTimeout=\${50}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await step('A level with nothing to list points to search', async () => {
      const empty = await findByShadowTestId(el, 'empty');
      expect(empty.textContent?.trim()).toBe('Search to find a node.');
    });
    await step('A search with no hits says so', async () => {
      const searchInput = await findByShadowTestId(el, 'search-input');
      const input = searchInput.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = 'nothing';
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));
      await waitFor(async () => {
        const empty = await findByShadowTestId(el, 'empty');
        expect(empty.textContent?.trim()).toBe('No matches.');
      });
    });
  }
}`,...u.parameters?.docs?.source}}};const L=["LoadsLevelsFromSource","KeepsSearchRankingAndHidesScopedSearch","ShowsLoadingThenError","EmptyLevelSuggestsSearch"];export{u as EmptyLevelSuggestsSearch,p as KeepsSearchRankingAndHidesScopedSearch,h as LoadsLevelsFromSource,w as ShowsLoadingThenError,L as __namedExportsOrder,I as default};
