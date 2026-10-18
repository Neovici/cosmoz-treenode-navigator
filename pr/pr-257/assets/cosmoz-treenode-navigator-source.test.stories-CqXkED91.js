import{j as n,b as c,D as x}from"./iframe-DNzSCrex.js";import"./cosmoz-treenode-navigator-CFzWvvcl.js";import{e as r,f as g,t as E,a as S,r as B}from"./test-helpers-2utkJt_B.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-DaxZbWmL.js";const{expect:o,waitFor:y}=__STORYBOOK_MODULE_TEST__,w={"1.1":{id:"a",pathLocator:"1.1",name:"Alpha"},"1.2":{id:"b",pathLocator:"1.2",name:"Beta"},"1.1.1":{id:"c",pathLocator:"1.1.1",name:"Alpha child"}},A=["1.2","1.1.1","1.1"],v=t=>new Promise(e=>setTimeout(()=>e(t),10)),s={getLevel:t=>v(Object.values(w).filter(e=>e.pathLocator.startsWith(t?`${t}.`:"1.")&&e.pathLocator.split(".").length===(t||"1").split(".").length+1)),getPath:t=>v(t.split(".").map((e,a,i)=>w[i.slice(0,a+1).join(".")]).filter(Boolean)),search:()=>v(A.map(t=>w[t])),hasChildren:()=>{},label:t=>t.name??"",pathLabel:()=>{},parentOf:t=>t.pathLocator.slice(0,t.pathLocator.lastIndexOf(".")),scopedSearch:!1},q={title:"Tests/CosmozTreenodeNavigatorSource"},f=()=>c`
    <div style="height: 400px; width: 500px;">
        <cosmoz-treenode-navigator
            .source=${s}
            .searchMinLength=${3}
            .searchDebounceTimeout=${50}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,l={render:f,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await r(e,["Alpha","Alpha child","Beta"]);const a=await g(e,"Alpha child");o(a.getAttribute("aria-expanded")).toBe("false"),await E(a),await y(()=>o(a.hasAttribute("aria-expanded")).toBe(!1))}},d={render:f,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await r(e,["Alpha","Alpha child","Beta"]);const i=(await n(e,"search-input")).shadowRoot.querySelector("input");i.value="alpha",i.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await r(e,["Beta","Alpha","Alpha child"]),o(x(e,"global-search-button")).toBeNull()}},p={render:()=>c`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...s,getLevel:t=>t?Promise.reject(new Error("offline")):s.getLevel(t)}}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await n(e,"error"),o(B(e)).toEqual(["Alpha","Beta"])}},h={render:()=>c`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...s,getLevel:()=>[],search:()=>[]}}
                .searchDebounceTimeout=${10}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");o((await n(e,"empty")).textContent?.trim()).toBe("Search to find a node.");const a=(await n(e,"search-input")).shadowRoot.querySelector("input");a.value="missing",a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await y(async()=>o((await n(e,"no-results")).textContent?.trim()).toBe("No nodes match the search"))}},u={render:()=>{const t=new Set,e={...s,getLevel:a=>a&&!t.has(a)?(t.add(a),Promise.reject(new Error("offline"))):s.getLevel(a)};return c`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${e}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`},play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await n(e,"error"),e.shadowRoot.querySelector(".retry").click(),await r(e,["Alpha","Alpha child","Beta"]),await y(()=>o(x(e,"error")).toBeNull())}},m={render:()=>c`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...s,search:t=>new Promise(e=>setTimeout(()=>e([w[t==="alpha"?"1.1":"1.2"]]),t==="beta"?300:10))}}
                .searchDebounceTimeout=${10}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await r(e,["Alpha","Alpha child","Beta"]),await S(e,"alpha"),await r(e,["Alpha"]),(await g(e,"Alpha")).click(),await S(e,"beta"),await n(e,"loading"),o(B(e)).toEqual([]),await r(e,["Beta"]),o((await g(e,"Beta")).getAttribute("aria-selected")).toBe("false")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    await search(el, 'beta');
    await findByShadowTestId(el, 'loading');
    expect(rowNames(el)).toEqual([]);
    await expectRows(el, ['Beta']);
    expect((await findRow(el, 'Beta')).getAttribute('aria-selected')).toBe('false');
  }
}`,...m.parameters?.docs?.source}}};const $=["LoadsLevelsFromSource","KeepsSearchRankingAndHidesScopedSearch","ShowsLoadingThenError","EmptyLevelSuggestsSearch","RetriesFailedLevel","ReplacesSearchWithoutStaleSelection"];export{h as EmptyLevelSuggestsSearch,d as KeepsSearchRankingAndHidesScopedSearch,l as LoadsLevelsFromSource,m as ReplacesSearchWithoutStaleSelection,u as RetriesFailedLevel,p as ShowsLoadingThenError,$ as __namedExportsOrder,q as default};
