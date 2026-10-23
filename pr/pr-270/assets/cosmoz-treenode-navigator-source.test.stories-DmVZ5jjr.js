import{j as r,b as i,D as x}from"./iframe-DNEaFNPb.js";import"./cosmoz-treenode-navigator-DGT5NVw6.js";import{e as s,f as B,t as z,a as E,r as f}from"./test-helpers-DjM6aZsz.js";import"./preload-helper-PPVm8Dsz.js";import"./tree-view-gwnpQ5_b.js";const{expect:n,waitFor:y}=__STORYBOOK_MODULE_TEST__,v={"1.1":{id:"a",pathLocator:"1.1",name:"Alpha"},"1.2":{id:"b",pathLocator:"1.2",name:"Beta"},"1.1.1":{id:"c",pathLocator:"1.1.1",name:"Alpha child"}},L=["1.2","1.1.1","1.1"],S=t=>new Promise(e=>setTimeout(()=>e(t),10)),o={getLevel:t=>S(Object.values(v).filter(e=>e.pathLocator.startsWith(t?`${t}.`:"1.")&&e.pathLocator.split(".").length===(t||"1").split(".").length+1)),getPath:t=>S(t.split(".").map((e,a,c)=>v[c.slice(0,a+1).join(".")]).filter(Boolean)),search:()=>S(L.map(t=>v[t])),hasChildren:()=>{},label:t=>t.name??"",pathLabel:()=>{},parentOf:t=>t.pathLocator.slice(0,t.pathLocator.lastIndexOf(".")),scopedSearch:!1},P={title:"Tests/CosmozTreenodeNavigatorSource"},A=()=>i`
    <div style="height: 400px; width: 500px;">
        <cosmoz-treenode-navigator
            .source=${o}
            .searchMinLength=${3}
            .searchDebounceTimeout=${50}
            .opened=${!0}
        ></cosmoz-treenode-navigator>
    </div>
`,l={render:A,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await s(e,["Alpha","Alpha child","Beta"]);const a=await B(e,"Alpha child");n(a.getAttribute("aria-expanded")).toBe("false"),await z(a),await y(()=>n(a.hasAttribute("aria-expanded")).toBe(!1))}},d={render:A,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await s(e,["Alpha","Alpha child","Beta"]);const c=(await r(e,"search-input")).shadowRoot.querySelector("input");c.value="alpha",c.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await s(e,["Beta","Alpha","Alpha child"]),n(x(e,"global-search-button")).toBeNull()}},h={render:()=>i`<cosmoz-treenode-navigator
            .source=${{...o,getPath:t=>new Promise(e=>setTimeout(()=>e(o.getPath(t)),300))}}
            .nodePath=${"1.1.1"}
            .opened=${!0}
        ></cosmoz-treenode-navigator>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await r(e,"loading");const a=e.getBoundingClientRect().height;await r(e,"path"),await y(()=>n(x(e,"loading")).toBeNull()),n(e.getBoundingClientRect().height).toBe(a)}},p={render:()=>i`<div style="height: 400px; width: 500px;">
            <cosmoz-treenode-navigator
                .source=${o}
                .nodePath=${"1.1.1"}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await s(e,["Alpha","Alpha child","Beta"])}},u={render:()=>i`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...o,getLevel:t=>t?Promise.reject(new Error("offline")):o.getLevel(t)}}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await r(e,"error"),n(f(e)).toEqual(["Alpha","Beta"])}},m={render:()=>i`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...o,getLevel:()=>[],search:()=>[]}}
                .searchDebounceTimeout=${10}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");n((await r(e,"empty")).textContent?.trim()).toBe("Search to find a node.");const a=(await r(e,"search-input")).shadowRoot.querySelector("input");a.value="missing",a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await y(async()=>n((await r(e,"no-results")).textContent?.trim()).toBe("No nodes match the search"))}},g={render:()=>{const t=new Set,e={...o,getLevel:a=>a&&!t.has(a)?(t.add(a),Promise.reject(new Error("offline"))):o.getLevel(a)};return i`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${e}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`},play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await r(e,"error"),e.shadowRoot.querySelector(".retry").click(),await s(e,["Alpha","Alpha child","Beta"]),await y(()=>n(x(e,"error")).toBeNull())}},w={render:()=>i`<div style="height:400px;width:500px">
            <cosmoz-treenode-navigator
                .source=${{...o,search:t=>new Promise(e=>setTimeout(()=>e([v[t==="alpha"?"1.1":"1.2"]]),t==="beta"?300:10))}}
                .searchDebounceTimeout=${10}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>`,play:async({canvasElement:t})=>{const e=t.querySelector("cosmoz-treenode-navigator");await s(e,["Alpha","Alpha child","Beta"]),await E(e,"alpha"),await s(e,["Alpha"]),(await B(e,"Alpha")).click();const a=e.getBoundingClientRect().height;await E(e,"beta"),await r(e,"loading"),n(f(e)).toEqual([]),n(e.getBoundingClientRect().height).toBe(a),await s(e,["Beta"]),n(e.getBoundingClientRect().height).toBe(a),n((await B(e,"Beta")).getAttribute("aria-selected")).toBe("false")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  render: () => html\`<div style="height: 400px; width: 500px;">
            <cosmoz-treenode-navigator
                .source=\${remoteSource}
                .nodePath=\${'1.1.1'}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>\`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const I=["LoadsLevelsFromSource","KeepsSearchRankingAndHidesScopedSearch","KeepsHeightWhileOpeningOnANode","ListsTopLevelBesideThePath","ShowsLoadingThenError","EmptyLevelSuggestsSearch","RetriesFailedLevel","ReplacesSearchWithoutStaleSelection"];export{m as EmptyLevelSuggestsSearch,h as KeepsHeightWhileOpeningOnANode,d as KeepsSearchRankingAndHidesScopedSearch,p as ListsTopLevelBesideThePath,l as LoadsLevelsFromSource,w as ReplacesSearchWithoutStaleSelection,g as RetriesFailedLevel,u as ShowsLoadingThenError,I as __namedExportsOrder,P as default};
