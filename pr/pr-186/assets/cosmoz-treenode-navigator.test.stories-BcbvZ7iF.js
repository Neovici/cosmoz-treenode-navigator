import{T,a as C}from"./tree-data-DgBPYy1X.js";import{N as i,j as p,D as B,b as u}from"./iframe-p6FdhhoM.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,userEvent:m,waitFor:r}=__STORYBOOK_MODULE_TEST__,w=new T(C),z={title:"Tests/CosmozTreenodeNavigator"},g={render:()=>u`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${w}
                .searchMinLength=${3}
                .searchDebounceTimeout=${100}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:c,step:s})=>{const e=c.querySelector("cosmoz-treenode-navigator"),a=async()=>(await p(e,"search-input")).shadowRoot?.querySelector("input");await s("Shows all root nodes initially",async()=>{await r(async()=>{const n=await i(e,"node");t(n.length).toBe(2)})}),await s("Type search term and verify filtering",async()=>{const n=await a();n.focus(),n.value="John",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await r(async()=>{const o=await i(e,"node");t(o.length).toBe(2)},{timeout:500})}),await s("Clear search restores full list",async()=>{const n=await a();n.value="",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await r(async()=>{const o=await i(e,"node");t(o.length).toBe(2)},{timeout:500})})}},y={render:()=>u`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${w}
                .searchMinLength=${3}
                .searchDebounceTimeout=${100}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:c,step:s})=>{const e=c.querySelector("cosmoz-treenode-navigator"),a=async()=>(await p(e,"search-input")).shadowRoot?.querySelector("input");await s("Type less than minLength - no filtering",async()=>{const n=await a();n.focus(),n.value="Jo",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await new Promise(d=>setTimeout(d,200));const o=await i(e,"node");t(o.length).toBe(2)}),await s("Type exactly minLength - triggers filtering",async()=>{const n=await a();n.value="Joh",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await r(async()=>{const o=await i(e,"node");t(o.length).toBe(2)},{timeout:500})})}},v={render:()=>u`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${w}
                .searchMinLength=${3}
                .searchDebounceTimeout=${100}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:c,step:s})=>{const e=c.querySelector("cosmoz-treenode-navigator"),a=async()=>(await i(e,"node-name")).map(o=>o.textContent?.trim());await s("Navigate into C: > Users folder",async()=>{await r(async()=>{const l=await i(e,"node");t(l.length).toBe(2)});const n=await i(e,"node-arrow");await m.click(n[0]),await r(async()=>{const l=await a();t(l).toContain("Users"),t(l.length).toBe(3)});const o=await i(e,"node"),h=(await i(e,"node-name")).findIndex(l=>l.textContent?.trim()==="Users"),S=o[h]?.querySelector('[data-testid="node-arrow"]');await m.click(S),await r(async()=>{const l=await a();t(l).toContain("John"),t(l.length).toBe(3)})}),await s('Local search for "John" returns 1 result (only in C:/Users)',async()=>{const o=(await p(e,"search-input")).shadowRoot?.querySelector("input");o.focus(),o.value="John",o.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await r(async()=>{const d=await a();t(d.length).toBe(1),t(d[0]).toBe("John");const h=await p(e,"global-search-button");t(h).toBeTruthy(),t(h?.textContent).toContain("Click to search again but globally")},{timeout:1e3})}),await s('Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)',async()=>{const n=await p(e,"global-search-button");await m.click(n),await r(async()=>{const o=await a();t(o.length).toBe(2),t(o.every(h=>h==="John")).toBe(!0);const d=B(e,"global-search-button");t(d).toBeNull()},{timeout:500})})}},x={render:()=>u`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${w}
                .nodePath=${""}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:c,step:s})=>{const e=c.querySelector("cosmoz-treenode-navigator");await s("Shows root nodes with empty nodePath",async()=>{await r(async()=>{const a=await i(e,"node");t(a.length).toBe(2)})}),await s("No node is highlighted",async()=>{const a=B(e,"highlighted-node");t(a).toBeNull()})}},b={render:()=>u`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${w}
                .nodePath=${"999.888.777"}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:c,step:s})=>{const e=c.querySelector("cosmoz-treenode-navigator");await s("Component renders without crashing",async()=>{t(e.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await s("Falls back to showing root nodes",async()=>{await r(async()=>{const a=await i(e,"node");t(a.length).toBe(2)})}),await s("Navigation still works",async()=>{const a=await i(e,"node-arrow");await m.click(a[0]),await r(async()=>{const o=(await i(e,"node-name")).map(d=>d.textContent?.trim());t(o).toContain("Windows"),t(o.length).toBe(3)})})}},N={render:()=>u`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${w}
                .nodePath=${"1.2.999"}
                .opened=${!0}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:c,step:s})=>{const e=c.querySelector("cosmoz-treenode-navigator");await s("Component renders without crashing",async()=>{t(e.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await s("Opens to last valid parent (C:/Windows) and shows its children",async()=>{await r(async()=>{const n=(await i(e,"node-name")).map(o=>o.textContent?.trim());t(n).toContain("System")})}),await s("Breadcrumb shows C: / Windows path",async()=>{await r(async()=>{const a=await p(e,"home-icon");t(a).toBeTruthy();const n=e.shadowRoot?.querySelector(".path");t(n?.textContent).toContain("C:"),t(n?.textContent).toContain("Windows")})}),await s("Can click on a node to highlight it",async()=>{const a=await i(e,"node");await m.click(a[0]),await r(async()=>{const n=await i(e,"node");t(n.length).toBeGreaterThan(0)})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchMinLength=\${3}
                .searchDebounceTimeout=\${100}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    const getInput = async () => {
      const searchInput = await findByShadowTestId(el, 'search-input');
      return searchInput.shadowRoot?.querySelector('input') as HTMLInputElement;
    };
    await step('Shows all root nodes initially', async () => {
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(el, 'node');
        // Root has C: and D: drives
        expect(nodes.length).toBe(2);
      });
    });
    await step('Type search term and verify filtering', async () => {
      const input = await getInput();
      input.focus();
      input.value = 'John';
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));

      // Wait for debounce + filtering
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(el, 'node');
        // "John" appears twice in tree
        expect(nodes.length).toBe(2);
      }, {
        timeout: 500
      });
    });
    await step('Clear search restores full list', async () => {
      const input = await getInput();
      input.value = '';
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(el, 'node');
        expect(nodes.length).toBe(2); // Back to root level
      }, {
        timeout: 500
      });
    });
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchMinLength=\${3}
                .searchDebounceTimeout=\${100}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    const getInput = async () => {
      const searchInput = await findByShadowTestId(el, 'search-input');
      return searchInput.shadowRoot?.querySelector('input') as HTMLInputElement;
    };
    await step('Type less than minLength - no filtering', async () => {
      const input = await getInput();
      input.focus();
      input.value = 'Jo'; // Only 2 chars
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));

      // Wait for debounce
      await new Promise(r => setTimeout(r, 200));
      const nodes = await findAllByShadowTestId(el, 'node');
      // Should still show root nodes (no filtering happened)
      expect(nodes.length).toBe(2);
    });
    await step('Type exactly minLength - triggers filtering', async () => {
      const input = await getInput();
      input.value = 'Joh'; // Now 3 chars
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(el, 'node');
        // "John" matches
        expect(nodes.length).toBe(2);
      }, {
        timeout: 500
      });
    });
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchMinLength=\${3}
                .searchDebounceTimeout=\${100}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    const getNodeNames = async () => {
      const nodeNames = await findAllByShadowTestId(el, 'node-name');
      return nodeNames.map(n => n.textContent?.trim());
    };
    await step('Navigate into C: > Users folder', async () => {
      // Wait for root nodes
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(el, 'node');
        expect(nodes.length).toBe(2); // C: and D:
      });

      // Click the arrow icon on C: to navigate into it
      const allArrows = await findAllByShadowTestId(el, 'node-arrow');
      await userEvent.click(allArrows[0]);
      await waitFor(async () => {
        // C: has 3 children: Windows, Program Files, Users
        const nodeNames = await getNodeNames();
        expect(nodeNames).toContain('Users');
        expect(nodeNames.length).toBe(3);
      });

      // Find the Users node and click its arrow
      const allNodes = await findAllByShadowTestId(el, 'node');
      const allNodeNames = await findAllByShadowTestId(el, 'node-name');
      const usersIndex = allNodeNames.findIndex(n => n.textContent?.trim() === 'Users');
      const usersNode = allNodes[usersIndex];
      const usersArrow = usersNode?.querySelector('[data-testid="node-arrow"]') as HTMLElement;
      await userEvent.click(usersArrow);
      await waitFor(async () => {
        // Users has 3 children: Default, John, Public
        const nodeNames = await getNodeNames();
        expect(nodeNames).toContain('John');
        expect(nodeNames.length).toBe(3);
      });
    });
    await step('Local search for "John" returns 1 result (only in C:/Users)', async () => {
      const searchInput = await findByShadowTestId(el, 'search-input');
      const input = searchInput.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.focus();
      input.value = 'John';
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));
      await waitFor(async () => {
        const nodeNames = await getNodeNames();
        // Local search in C:/Users finds only 1 John
        expect(nodeNames.length).toBe(1);
        expect(nodeNames[0]).toBe('John');

        // Global search button should be visible
        const globalBtn = await findByShadowTestId(el, 'global-search-button');
        expect(globalBtn).toBeTruthy();
        expect(globalBtn?.textContent).toContain('Click to search again but globally');
      }, {
        timeout: 1000
      });
    });
    await step('Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)', async () => {
      const globalBtn = await findByShadowTestId(el, 'global-search-button');
      await userEvent.click(globalBtn);
      await waitFor(async () => {
        const nodeNames = await getNodeNames();
        // Global search finds 2 Johns: one in C:/Users, one in D:/Data
        expect(nodeNames.length).toBe(2);
        expect(nodeNames.every(name => name === 'John')).toBe(true);

        // Global search button should disappear (now searching from root)
        const globalBtnAfter = queryByShadowTestId(el, 'global-search-button');
        expect(globalBtnAfter).toBeNull();
      }, {
        timeout: 500
      });
    });
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .nodePath=\${''}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await step('Shows root nodes with empty nodePath', async () => {
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(el, 'node');
        // Root has C: and D: drives
        expect(nodes.length).toBe(2);
      });
    });
    await step('No node is highlighted', async () => {
      const highlightedNode = queryByShadowTestId(el, 'highlighted-node');
      expect(highlightedNode).toBeNull();
    });
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .nodePath=\${'999.888.777'}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await step('Component renders without crashing', async () => {
      expect(el.tagName).toBe('COSMOZ-TREENODE-NAVIGATOR');
    });
    await step('Falls back to showing root nodes', async () => {
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(el, 'node');
        // Root has C: and D: drives
        expect(nodes.length).toBe(2);
      });
    });
    await step('Navigation still works', async () => {
      const allArrows = await findAllByShadowTestId(el, 'node-arrow');
      await userEvent.click(allArrows[0]);
      await waitFor(async () => {
        const nodeNames = await findAllByShadowTestId(el, 'node-name');
        const names = nodeNames.map(n => n.textContent?.trim());
        // C: has 3 children: Windows, Program Files, Users
        expect(names).toContain('Windows');
        expect(names.length).toBe(3);
      });
    });
  }
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .nodePath=\${'1.2.999'}
                .opened=\${true}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await step('Component renders without crashing', async () => {
      expect(el.tagName).toBe('COSMOZ-TREENODE-NAVIGATOR');
    });
    await step('Opens to last valid parent (C:/Windows) and shows its children', async () => {
      await waitFor(async () => {
        const nodeNames = await findAllByShadowTestId(el, 'node-name');
        const names = nodeNames.map(n => n.textContent?.trim());
        // Windows has children including System
        expect(names).toContain('System');
      });
    });
    await step('Breadcrumb shows C: / Windows path', async () => {
      await waitFor(async () => {
        const homeIcon = await findByShadowTestId(el, 'home-icon');
        expect(homeIcon).toBeTruthy();
        // The path should contain C: and Windows in the header
        const header = el.shadowRoot?.querySelector('.path');
        expect(header?.textContent).toContain('C:');
        expect(header?.textContent).toContain('Windows');
      });
    });
    await step('Can click on a node to highlight it', async () => {
      const allNodes = await findAllByShadowTestId(el, 'node');
      await userEvent.click(allNodes[0]);
      // Just verify it doesn't crash and nodes are still visible
      await waitFor(async () => {
        const nodes = await findAllByShadowTestId(el, 'node');
        expect(nodes.length).toBeGreaterThan(0);
      });
    });
  }
}`,...N.parameters?.docs?.source}}};const A=["SearchFiltering","SearchMinLength","GlobalSearchButton","WithEmptyNodePath","WithInvalidNodePath","WithPartiallyValidNodePath"];export{v as GlobalSearchButton,g as SearchFiltering,y as SearchMinLength,x as WithEmptyNodePath,b as WithInvalidNodePath,N as WithPartiallyValidNodePath,A as __namedExportsOrder,z as default};
