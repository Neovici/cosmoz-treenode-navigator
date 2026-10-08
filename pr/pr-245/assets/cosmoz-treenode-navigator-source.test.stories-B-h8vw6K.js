import{N as o,j as u,D as y,b as g}from"./iframe-0DuE9EzL.js";import"./cosmoz-treenode-navigator-DUyfySJZ.js";import"./preload-helper-PPVm8Dsz.js";const{expect:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,h={"1.1":{id:"a",pathLocator:"1.1",name:"Alpha"},"1.2":{id:"b",pathLocator:"1.2",name:"Beta"},"1.1.1":{id:"c",pathLocator:"1.1.1",name:"Alpha child"}},S=["1.2","1.1.1","1.1"],p=e=>new Promise(t=>setTimeout(()=>t(e),10)),m={getLevel:e=>p(Object.values(h).filter(t=>t.pathLocator.startsWith(e?`${e}.`:"1.")&&t.pathLocator.split(".").length===(e||"1").split(".").length+1)),getPath:e=>p(e.split(".").map((t,a,n)=>h[n.slice(0,a+1).join(".")]).filter(Boolean)),search:()=>p(S.map(e=>h[e])),hasChildren:()=>{},label:e=>e.name??"",pathLabel:()=>{},parentOf:e=>e.pathLocator.slice(0,e.pathLocator.lastIndexOf(".")),scopedSearch:!1},E={title:"Tests/CosmozTreenodeNavigatorSource"},v=()=>g`
    <div style="height: 400px; width: 500px;">
        <cosmoz-treenode-navigator
            .source=${m}
            .searchMinLength=${3}
            .searchDebounceTimeout=${50}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,l={render:v,play:async({canvasElement:e,step:t})=>{const a=e.querySelector("cosmoz-treenode-navigator");await t("Roots arrive once the source resolves",async()=>{await i(async()=>{const n=await o(a,"node");s(n.length).toBe(2)})}),await t("An unknown child count still offers the arrow",async()=>{const n=await o(a,"node-arrow");s(n.length).toBe(2)}),await t("Opening a node loads its children",async()=>{const[n]=await o(a,"node-arrow");n.click(),await i(async()=>{const r=await o(a,"node-name");s(r.map(c=>c.textContent?.trim())).toEqual(["Alpha child"])})})}},d={render:v,play:async({canvasElement:e,step:t})=>{const a=e.querySelector("cosmoz-treenode-navigator");await i(async()=>{s((await o(a,"node")).length).toBe(2)}),await t("Open a node, so a search would be scoped to it",async()=>{const[n]=await o(a,"node-arrow");n.click(),await i(async()=>{const r=await o(a,"node-name");s(r.map(c=>c.textContent?.trim())).toEqual(["Alpha child"])})}),await t("Results keep the order the source returned them in",async()=>{const r=(await u(a,"search-input")).shadowRoot?.querySelector("input");r.focus(),r.value="alpha",r.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(async()=>{const c=await o(a,"node-name");s(c.map(f=>f.textContent?.trim())).toEqual(["Beta","Alpha child","Alpha"])})}),await t("A source that searches globally offers no re-search",()=>{s(y(a,"global-search-button")).toBeNull()})}},A={...m,getLevel:e=>e?new Promise((t,a)=>setTimeout(()=>a(new Error("boom")),300)):m.getLevel(e)},w={render:()=>g`
        <div style="height: 400px; width: 500px;">
            <cosmoz-treenode-navigator
                .source=${A}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:t})=>{const a=e.querySelector("cosmoz-treenode-navigator");await i(async()=>{s((await o(a,"node")).length).toBe(2)});const[n]=await o(a,"node-arrow");n.click(),await t("Loading shows while the previous level is still up",async()=>{await u(a,"loading"),s((await o(a,"node")).length).toBe(2)}),await t("A failed level says so",async()=>{await u(a,"error"),s(y(a,"loading")).toBeNull()})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const b=["LoadsLevelsFromSource","KeepsSearchRankingAndHidesScopedSearch","ShowsLoadingThenError"];export{d as KeepsSearchRankingAndHidesScopedSearch,l as LoadsLevelsFromSource,w as ShowsLoadingThenError,b as __namedExportsOrder,E as default};
