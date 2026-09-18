import{N as o,j as m,D as y,b as f}from"./iframe-B8nujFHe.js";import"./cosmoz-treenode-navigator-C_QL79Zk.js";import"./preload-helper-PPVm8Dsz.js";const{expect:r,waitFor:i}=__STORYBOOK_MODULE_TEST__,h={"1.1":{id:"a",pathLocator:"1.1",name:"Alpha"},"1.2":{id:"b",pathLocator:"1.2",name:"Beta"},"1.1.1":{id:"c",pathLocator:"1.1.1",name:"Alpha child"}},S=["1.2","1.1.1","1.1"],p=e=>new Promise(a=>setTimeout(()=>a(e),10)),v={getLevel:e=>p(Object.values(h).filter(a=>a.pathLocator.startsWith(e?`${e}.`:"1.")&&a.pathLocator.split(".").length===(e||"1").split(".").length+1)),getPath:e=>p(e.split(".").map((a,t,n)=>h[n.slice(0,t+1).join(".")]).filter(Boolean)),search:()=>p(S.map(e=>h[e])),hasChildren:()=>{},label:e=>e.name??"",pathLabel:()=>{},parentOf:e=>e.pathLocator.slice(0,e.pathLocator.lastIndexOf(".")),scopedSearch:!1},b={title:"Tests/CosmozTreenodeNavigatorSource"},w=()=>f`
    <div style="height: 400px; width: 500px;">
        <cosmoz-treenode-navigator
            .source=${v}
            .searchMinLength=${3}
            .searchDebounceTimeout=${50}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,l={render:w,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-navigator");await a("Roots arrive once the source resolves",async()=>{await i(async()=>{const n=await o(t,"node");r(n.length).toBe(2)})}),await a("An unknown child count still offers the arrow",async()=>{const n=await o(t,"node-arrow");r(n.length).toBe(2)}),await a("Opening a node loads its children",async()=>{const[n]=await o(t,"node-arrow");n.click(),await i(async()=>{const s=await o(t,"node-name");r(s.map(c=>c.textContent?.trim())).toEqual(["Alpha child"])})})}},d={render:w,play:async({canvasElement:e,step:a})=>{const t=e.querySelector("cosmoz-treenode-navigator");await i(async()=>{r((await o(t,"node")).length).toBe(2)}),await a("Open a node, so a search would be scoped to it",async()=>{const[n]=await o(t,"node-arrow");n.click(),await i(async()=>{const s=await o(t,"node-name");r(s.map(c=>c.textContent?.trim())).toEqual(["Alpha child"])})}),await a("Results keep the order the source returned them in",async()=>{const s=(await m(t,"search-input")).shadowRoot?.querySelector("input");s.focus(),s.value="alpha",s.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(async()=>{const c=await o(t,"node-name");r(c.map(u=>u.textContent?.trim())).toEqual(["Beta","Alpha child","Alpha"])})}),await a("A source that searches globally offers no re-search",()=>{r(y(t,"global-search-button")).toBeNull()})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const E=["LoadsLevelsFromSource","KeepsSearchRankingAndHidesScopedSearch"];export{d as KeepsSearchRankingAndHidesScopedSearch,l as LoadsLevelsFromSource,E as __namedExportsOrder,b as default};
