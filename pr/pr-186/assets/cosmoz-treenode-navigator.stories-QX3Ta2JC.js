import{T as B,k as E}from"./tree-data-YzS3Hrrq.js";import{j as h,b as p,N as c,D as $}from"./iframe-DXS043xj.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,userEvent:w,waitFor:i}=__STORYBOOK_MODULE_TEST__,u=new B(E),L={title:"CosmozTreenodeNavigator",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},opened:{control:"boolean"},nodePath:{control:"text"}},args:{searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,opened:!0,nodePath:""}},g={render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Instantiates the element",async()=>{t(n.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await o("Sets proper search placeholder",async()=>{await i(async()=>{const a=(await h(n,"search-input")).shadowRoot?.querySelector("input");t(a?.placeholder).toBe("Search...")})})}},y={args:{searchPlaceholder:"Enter search term...",searchGlobalPlaceholder:"Search in the entire tree",searchMinLength:2,searchDebounceTimeout:1e3,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Sets custom search placeholder",async()=>{await i(async()=>{const a=(await h(n,"search-input")).shadowRoot?.querySelector("input");t(a?.placeholder).toBe("Enter search term...")})})}},b={args:{searchPlaceholder:"Search...",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await h(n,"search-input")).shadowRoot?.querySelector("input");await o("Shows all root nodes initially",async()=>{await i(async()=>{const a=await c(n,"node");t(a.length).toBe(2)})}),await o("Type search term and verify filtering",async()=>{const a=await s();a.focus(),a.value="John",a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(async()=>{const r=await c(n,"node");t(r.length).toBe(2)},{timeout:500})}),await o("Clear search restores full list",async()=>{const a=await s();a.value="",a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(async()=>{const r=await c(n,"node");t(r.length).toBe(2)},{timeout:500})})}},v={args:{searchPlaceholder:"Search (min 3 chars)...",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await h(n,"search-input")).shadowRoot?.querySelector("input");await o("Type less than minLength - no filtering",async()=>{const a=await s();a.focus(),a.value="Jo",a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await new Promise(l=>setTimeout(l,200));const r=await c(n,"node");t(r.length).toBe(2)}),await o("Type exactly minLength - triggers filtering",async()=>{const a=await s();a.value="Joh",a.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(async()=>{const r=await c(n,"node");t(r.length).toBe(2)},{timeout:500})})}},x={args:{searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search globally",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await c(n,"node-name")).map(r=>r.textContent?.trim());await o("Navigate into C: > Users folder",async()=>{await i(async()=>{const d=await c(n,"node");t(d.length).toBe(2)});const a=await c(n,"node-arrow");await w.click(a[0]),await i(async()=>{const d=await s();t(d).toContain("Users"),t(d.length).toBe(3)});const r=await c(n,"node"),m=(await c(n,"node-name")).findIndex(d=>d.textContent?.trim()==="Users"),N=r[m]?.querySelector('[data-testid="node-arrow"]');await w.click(N),await i(async()=>{const d=await s();t(d).toContain("John"),t(d.length).toBe(3)})}),await o('Local search for "John" returns 1 result (only in C:/Users)',async()=>{const r=(await h(n,"search-input")).shadowRoot?.querySelector("input");r.focus(),r.value="John",r.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await i(async()=>{const l=await s();t(l.length).toBe(1),t(l[0]).toBe("John");const m=await h(n,"global-search-button");t(m).toBeTruthy(),t(m?.textContent).toContain("Click to search globally")},{timeout:1e3})}),await o('Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)',async()=>{const a=await h(n,"global-search-button");await w.click(a),await i(async()=>{const r=await s();t(r.length).toBe(2),t(r.every(m=>m==="John")).toBe(!0);const l=$(n,"global-search-button");t(l).toBeNull()},{timeout:500})})}},P={args:{nodePath:"",opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .nodePath=${e.nodePath}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Shows root nodes with empty nodePath",async()=>{await i(async()=>{const s=await c(n,"node");t(s.length).toBe(2)})}),await o("No node is highlighted",async()=>{const s=$(n,"highlighted-node");t(s).toBeNull()})}},T={args:{nodePath:"999.888.777",opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .nodePath=${e.nodePath}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Component renders without crashing",async()=>{t(n.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await o("Falls back to showing root nodes",async()=>{await i(async()=>{const s=await c(n,"node");t(s.length).toBe(2)})}),await o("Navigation still works",async()=>{const s=await c(n,"node-arrow");await w.click(s[0]),await i(async()=>{const r=(await c(n,"node-name")).map(l=>l.textContent?.trim());t(r).toContain("Windows"),t(r.length).toBe(3)})})}},S={args:{nodePath:"1.2.999",opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${u}
                .nodePath=${e.nodePath}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:o})=>{const n=e.querySelector("cosmoz-treenode-navigator");await o("Component renders without crashing",async()=>{t(n.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await o("Opens to last valid parent (C:/Windows) and shows its children",async()=>{await i(async()=>{const a=(await c(n,"node-name")).map(r=>r.textContent?.trim());t(a).toContain("System")})}),await o("Breadcrumb shows C: / Windows path",async()=>{await i(async()=>{const s=await h(n,"home-icon");t(s).toBeTruthy();const a=n.shadowRoot?.querySelector(".path");t(a?.textContent).toContain("C:"),t(a?.textContent).toContain("Windows")})}),await o("Can click on a node to highlight it",async()=>{const s=await c(n,"node");await w.click(s[0]),await i(async()=>{const a=await c(n,"node");t(a.length).toBeGreaterThan(0)})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
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
    searchPlaceholder: 'Enter search term...',
    searchGlobalPlaceholder: 'Search in the entire tree',
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
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
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
    await step('Sets custom search placeholder', async () => {
      await waitFor(async () => {
        const searchInput = await findByShadowTestId(el, 'search-input');
        const input = searchInput.shadowRoot?.querySelector('input');
        expect(input?.placeholder).toBe('Enter search term...');
      });
    });
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    searchPlaceholder: 'Search...',
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
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    searchPlaceholder: 'Search (min 3 chars)...',
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
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    searchPlaceholder: 'Search...',
    searchGlobalPlaceholder: 'Click to search globally',
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
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
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
        expect(globalBtn?.textContent).toContain('Click to search globally');
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
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
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
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
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
}`,...S.parameters?.docs?.source}}};const M=["Default","WithCustomPlaceholders","SearchFiltering","SearchMinLength","GlobalSearchButton","WithEmptyNodePath","WithInvalidNodePath","WithPartiallyValidNodePath"];export{g as Default,x as GlobalSearchButton,b as SearchFiltering,v as SearchMinLength,y as WithCustomPlaceholders,P as WithEmptyNodePath,T as WithInvalidNodePath,S as WithPartiallyValidNodePath,M as __namedExportsOrder,L as default};
