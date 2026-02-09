import{T as I,a as C}from"./tree-data-C9KaDP9e.js";import{j as l,b as p,N as i,D as B}from"./iframe-B2XSesrN.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a,userEvent:w,waitFor:c}=__STORYBOOK_MODULE_TEST__,u=new I(C),D={title:"Components/CosmozTreenodeNavigator",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},opened:{control:"boolean"},nodePath:{control:"text"}},args:{searchMinLength:3,searchDebounceTimeout:2e3,opened:!0,nodePath:""}},g={render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Instantiates the element",async()=>{a(n.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await o("Sets proper search placeholder",async()=>{await c(async()=>{const t=(await l(n,"search-input")).shadowRoot?.querySelector("input");a(t?.placeholder).toBe("Search...")})})}},y={args:{searchMinLength:2,searchDebounceTimeout:1e3,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Sets search placeholder via i18next",async()=>{await c(async()=>{const t=(await l(n,"search-input")).shadowRoot?.querySelector("input");a(t?.placeholder).toBe("Search...")})})}},v={args:{searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await l(n,"search-input")).shadowRoot?.querySelector("input");await o("Shows all root nodes initially",async()=>{await c(async()=>{const t=await i(n,"node");a(t.length).toBe(2)})}),await o("Type search term and verify filtering",async()=>{const t=await s();t.focus(),t.value="John",t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const r=await i(n,"node");a(r.length).toBe(2)},{timeout:500})}),await o("Clear search restores full list",async()=>{const t=await s();t.value="",t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const r=await i(n,"node");a(r.length).toBe(2)},{timeout:500})})}},b={args:{searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await l(n,"search-input")).shadowRoot?.querySelector("input");await o("Type less than minLength - no filtering",async()=>{const t=await s();t.focus(),t.value="Jo",t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await new Promise(d=>setTimeout(d,200));const r=await i(n,"node");a(r.length).toBe(2)}),await o("Type exactly minLength - triggers filtering",async()=>{const t=await s();t.value="Joh",t.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const r=await i(n,"node");a(r.length).toBe(2)},{timeout:500})})}},x={args:{searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await i(n,"node-name")).map(r=>r.textContent?.trim());await o("Navigate into C: > Users folder",async()=>{await c(async()=>{const h=await i(n,"node");a(h.length).toBe(2)});const t=await i(n,"node-arrow");await w.click(t[0]),await c(async()=>{const h=await s();a(h).toContain("Users"),a(h.length).toBe(3)});const r=await i(n,"node"),m=(await i(n,"node-name")).findIndex(h=>h.textContent?.trim()==="Users"),E=r[m]?.querySelector('[data-testid="node-arrow"]');await w.click(E),await c(async()=>{const h=await s();a(h).toContain("John"),a(h.length).toBe(3)})}),await o('Local search for "John" returns 1 result (only in C:/Users)',async()=>{const r=(await l(n,"search-input")).shadowRoot?.querySelector("input");r.focus(),r.value="John",r.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const d=await s();a(d.length).toBe(1),a(d[0]).toBe("John");const m=await l(n,"global-search-button");a(m).toBeTruthy(),a(m?.textContent).toContain("Click to search again but globally")},{timeout:1e3})}),await o('Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)',async()=>{const t=await l(n,"global-search-button");await w.click(t),await c(async()=>{const r=await s();a(r.length).toBe(2),a(r.every(m=>m==="John")).toBe(!0);const d=B(n,"global-search-button");a(d).toBeNull()},{timeout:500})})}},T={args:{nodePath:"",opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .nodePath=${e.nodePath}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Shows root nodes with empty nodePath",async()=>{await c(async()=>{const s=await i(n,"node");a(s.length).toBe(2)})}),await o("No node is highlighted",async()=>{const s=B(n,"highlighted-node");a(s).toBeNull()})}},N={args:{nodePath:"999.888.777",opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .nodePath=${e.nodePath}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Component renders without crashing",async()=>{a(n.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await o("Falls back to showing root nodes",async()=>{await c(async()=>{const s=await i(n,"node");a(s.length).toBe(2)})}),await o("Navigation still works",async()=>{const s=await i(n,"node-arrow");await w.click(s[0]),await c(async()=>{const r=(await i(n,"node-name")).map(d=>d.textContent?.trim());a(r).toContain("Windows"),a(r.length).toBe(3)})})}},S={args:{nodePath:"1.2.999",opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .nodePath=${e.nodePath}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Component renders without crashing",async()=>{a(n.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await o("Opens to last valid parent (C:/Windows) and shows its children",async()=>{await c(async()=>{const t=(await i(n,"node-name")).map(r=>r.textContent?.trim());a(t).toContain("System")})}),await o("Breadcrumb shows C: / Windows path",async()=>{await c(async()=>{const s=await l(n,"home-icon");a(s).toBeTruthy();const t=n.shadowRoot?.querySelector(".path");a(t?.textContent).toContain("C:"),a(t?.textContent).toContain("Windows")})}),await o("Can click on a node to highlight it",async()=>{const s=await i(n,"node");await w.click(s[0]),await c(async()=>{const t=await i(n,"node");a(t.length).toBeGreaterThan(0)})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await step('Instantiates the element', async () => {
      expect(el.tagName).toBe('COSMOZ-TREENODE-NAVIGATOR');
    });
    await step('Sets proper search placeholder', async () => {
      await waitFor(async () => {
        const searchInput = await findByShadowTestId(el, 'search-input');
        const input = searchInput.shadowRoot?.querySelector('input');
        expect(input?.placeholder).toBe('Search...');
      });
    });
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    searchMinLength: 2,
    searchDebounceTimeout: 1000,
    opened: true
  },
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
            ></cosmoz-treenode-navigator>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    await step('Sets search placeholder via i18next', async () => {
      await waitFor(async () => {
        const searchInput = await findByShadowTestId(el, 'search-input');
        const input = searchInput.shadowRoot?.querySelector('input');
        expect(input?.placeholder).toBe('Search...');
      });
    });
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    searchMinLength: 3,
    searchDebounceTimeout: 100,
    // Short debounce for faster tests
    opened: true
  },
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    searchMinLength: 3,
    searchDebounceTimeout: 100,
    opened: true
  },
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    searchMinLength: 3,
    searchDebounceTimeout: 100,
    opened: true
  },
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
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
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '',
    opened: true
  },
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
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
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '999.888.777',
    opened: true
  },
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
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
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '1.2.999',
    // C:/Windows valid, .999 invalid
    opened: true
  },
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
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
}`,...S.parameters?.docs?.source}}};const z=["Default","WithCustomSearchMinLength","SearchFiltering","SearchMinLength","GlobalSearchButton","WithEmptyNodePath","WithInvalidNodePath","WithPartiallyValidNodePath"];export{g as Default,x as GlobalSearchButton,v as SearchFiltering,b as SearchMinLength,y as WithCustomSearchMinLength,T as WithEmptyNodePath,N as WithInvalidNodePath,S as WithPartiallyValidNodePath,z as __namedExportsOrder,D as default};
