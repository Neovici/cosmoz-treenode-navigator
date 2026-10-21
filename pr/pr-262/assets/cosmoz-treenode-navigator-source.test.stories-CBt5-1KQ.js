import{j as o,b as i,D as B}from"./iframe-DRS9Zdeu.js";import"./cosmoz-treenode-navigator-CmCi7-l9.js";import{e as s,f as S,t as A,a as x,r as E}from"./test-helpers-CnQZqzuU.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-De_-8Iue.js";const{expect:n,waitFor:v}=__STORYBOOK_MODULE_TEST__,w={"1.1":{id:"a",pathLocator:"1.1",name:"Alpha"},"1.2":{id:"b",pathLocator:"1.2",name:"Beta"},"1.1.1":{id:"c",pathLocator:"1.1.1",name:"Alpha child"}},z=["1.2","1.1.1","1.1"],y=t=>new Promise(e=>setTimeout(()=>e(t),10)),r={getLevel:t=>y(Object.values(w).filter(e=>e.pathLocator.startsWith(t?`${t}.`:"1.")&&e.pathLocator.split(".").length===(t||"1").split(".").length+1)),getPath:t=>y(t.split(".").map((e,a,c)=>w[c.slice(0,a+1).join(".")]).filter(Boolean)),search:()=>y(z.map(t=>w[t])),hasChildren:()=>{},label:t=>t.name??"",pathLabel:()=>{},parentOf:t=>t.pathLocator.slice(0,t.pathLocator.lastIndexOf(".")),scopedSearch:!1},q={title:"Tests/CosmozTreenodeNavigatorSource"},f=()=>i`
    <div style="height: 400px; width: 500px;">
        <cosmoz-treenode-navigator
            .source=${r}
            .searchMinLength=${3}
            .searchDebounceTimeout=${50}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,l={render:f,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await s(e,["Alpha","Alpha child","Beta"]);const a=await S(e,"Alpha child");n(a.getAttribute("aria-expanded")).toBe("false"),await A(a),await v(()=>n(a.hasAttribute("aria-expanded")).toBe(!1))}},d={render:f,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await s(e,["Alpha","Alpha child","Beta"]);const c=(await o(e,"search-input")).shadowRoot.querySelector("input");c.value="alpha",c.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await s(e,["Beta","Alpha","Alpha child"]),n(B(e,"global-search-button")).toBeNull()}},h={render:()=>i`<cosmoz-treenode-navigator
            .source=${{...r,getPath:t=>new Promise(e=>setTimeout(()=>e(r.getPath(t)),300))}}
            .nodePath=${"1.1.1"}
            .opened=${!0}
        ></cosmoz-treenode-navigator>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await o(e,"loading");const a=e.getBoundingClientRect().height;await o(e,"path"),await v(()=>n(B(e,"loading")).toBeNull()),n(e.getBoundingClientRect().height).toBe(a)}},p={render:()=>i`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...r,getLevel:t=>t?Promise.reject(new Error("offline")):r.getLevel(t)}}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await o(e,"error"),n(E(e)).toEqual(["Alpha","Beta"])}},u={render:()=>i`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...r,getLevel:()=>[],search:()=>[]}}
                .searchDebounceTimeout=${10}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");n((await o(e,"empty")).textContent?.trim()).toBe("Search to find a node.");const a=(await o(e,"search-input")).shadowRoot.querySelector("input");a.value="missing",a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await v(async()=>n((await o(e,"no-results")).textContent?.trim()).toBe("No nodes match the search"))}},m={render:()=>{const t=new Set,e={...r,getLevel:a=>a&&!t.has(a)?(t.add(a),Promise.reject(new Error("offline"))):r.getLevel(a)};return i`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${e}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`},play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await o(e,"error"),e.shadowRoot.querySelector(".retry").click(),await s(e,["Alpha","Alpha child","Beta"]),await v(()=>n(B(e,"error")).toBeNull())}},g={render:()=>i`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...r,search:t=>new Promise(e=>setTimeout(()=>e([w[t==="alpha"?"1.1":"1.2"]]),t==="beta"?300:10))}}
                .searchDebounceTimeout=${10}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await s(e,["Alpha","Alpha child","Beta"]),await x(e,"alpha"),await s(e,["Alpha"]),(await S(e,"Alpha")).click();const a=e.getBoundingClientRect().height;await x(e,"beta"),await o(e,"loading"),n(E(e)).toEqual([]),n(e.getBoundingClientRect().height).toBe(a),await s(e,["Beta"]),n(e.getBoundingClientRect().height).toBe(a),n((await S(e,"Beta")).getAttribute("aria-selected")).toBe("false")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
    const child = await findRow(el, 'Alpha child');
    expect(child.getAttribute('aria-expanded')).toBe('false');
    await toggleRow(child);
    await waitFor(() => expect(child.hasAttribute('aria-expanded')).toBe(false));
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
    const searchInput = await findByShadowTestId(el, 'search-input');
    const input = searchInput.shadowRoot!.querySelector('input')!;
    input.value = 'alpha';
    input.dispatchEvent(new Event('input', {
      bubbles: true,
      composed: true
    }));
    await expectRows(el, ['Beta', 'Alpha', 'Alpha child']);
    expect(queryByShadowTestId(el, 'global-search-button')).toBeNull();
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-treenode-navigator
            .source=\${{
    ...remoteSource,
    getPath: (path: string) => new Promise(resolve => setTimeout(() => resolve(remoteSource.getPath(path)), 300))
  }}
            .nodePath=\${'1.1.1'}
            .opened=\${true}
        ></cosmoz-treenode-navigator>\`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await findByShadowTestId(el, 'loading');
    const height = el.getBoundingClientRect().height;
    await findByShadowTestId(el, 'path');
    await waitFor(() => expect(queryByShadowTestId(el, 'loading')).toBeNull());
    expect(el.getBoundingClientRect().height).toBe(height);
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=\${{
    ...remoteSource,
    getLevel: (path: string) => path ? Promise.reject(new Error('offline')) : remoteSource.getLevel(path)
  }}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>\`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await findByShadowTestId(el, 'error');
    expect(rowNames(el)).toEqual(['Alpha', 'Beta']);
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=\${{
    ...remoteSource,
    getLevel: () => [],
    search: () => []
  }}
                .searchDebounceTimeout=\${10}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>\`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    expect((await findByShadowTestId(el, 'empty')).textContent?.trim()).toBe('Search to find a node.');
    const input = (await findByShadowTestId(el, 'search-input')).shadowRoot!.querySelector('input')!;
    input.value = 'missing';
    input.dispatchEvent(new Event('input', {
      bubbles: true,
      composed: true
    }));
    await waitFor(async () => expect((await findByShadowTestId(el, 'no-results')).textContent?.trim()).toBe('No nodes match the search'));
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const failed = new Set<string>();
    const source = {
      ...remoteSource,
      getLevel: (path: string) => {
        if (path && !failed.has(path)) {
          failed.add(path);
          return Promise.reject(new Error('offline'));
        }
        return remoteSource.getLevel(path);
      }
    };
    return html\`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=\${source}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>\`;
  },
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await findByShadowTestId(el, 'error');
    el.shadowRoot!.querySelector<HTMLButtonElement>('.retry')!.click();
    await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
    await waitFor(() => expect(queryByShadowTestId(el, 'error')).toBeNull());
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=\${{
    ...remoteSource,
    search: (query: string) => new Promise<Node[]>(resolve => setTimeout(() => resolve([nodes[query === 'alpha' ? '1.1' : '1.2']]), query === 'beta' ? 300 : 10))
  }}
                .searchDebounceTimeout=\${10}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>\`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
    await search(el, 'alpha');
    await expectRows(el, ['Alpha']);
    (await findRow(el, 'Alpha')).click();
    const height = el.getBoundingClientRect().height;
    await search(el, 'beta');
    await findByShadowTestId(el, 'loading');
    expect(rowNames(el)).toEqual([]);
    expect(el.getBoundingClientRect().height).toBe(height);
    await expectRows(el, ['Beta']);
    expect(el.getBoundingClientRect().height).toBe(height);
    expect((await findRow(el, 'Beta')).getAttribute('aria-selected')).toBe('false');
  }
}`,...g.parameters?.docs?.source}}};const I=["LoadsLevelsFromSource","KeepsSearchRankingAndHidesScopedSearch","KeepsHeightWhileOpeningOnANode","ShowsLoadingThenError","EmptyLevelSuggestsSearch","RetriesFailedLevel","ReplacesSearchWithoutStaleSelection"];export{u as EmptyLevelSuggestsSearch,h as KeepsHeightWhileOpeningOnANode,d as KeepsSearchRankingAndHidesScopedSearch,l as LoadsLevelsFromSource,g as ReplacesSearchWithoutStaleSelection,m as RetriesFailedLevel,p as ShowsLoadingThenError,I as __namedExportsOrder,q as default};
