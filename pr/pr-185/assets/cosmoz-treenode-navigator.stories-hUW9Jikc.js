import{T as S,a as B}from"./tree-data-Ca8mA2vN.js";import{j as d,b as p,N as l,D as P}from"./iframe-N9_VETUO.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a,userEvent:T,waitFor:c}=__STORYBOOK_MODULE_TEST__,m=new S(B),E={title:"CosmozTreenodeNavigator",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},opened:{control:"boolean"}},args:{searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,opened:!0}},g={render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${m}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const t=e.querySelector("cosmoz-treenode-navigator");await r("Instantiates the element",async()=>{a(t.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await r("Sets proper search placeholder",async()=>{await c(async()=>{const n=(await d(t,"search-input")).shadowRoot?.querySelector("input");a(n?.placeholder).toBe("Search...")})})}},w={args:{searchPlaceholder:"Enter search term...",searchGlobalPlaceholder:"Search in the entire tree",searchMinLength:2,searchDebounceTimeout:1e3,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${m}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const t=e.querySelector("cosmoz-treenode-navigator");await r("Sets custom search placeholder",async()=>{await c(async()=>{const n=(await d(t,"search-input")).shadowRoot?.querySelector("input");a(n?.placeholder).toBe("Enter search term...")})})}},y={args:{searchPlaceholder:"Search...",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${m}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const t=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await d(t,"search-input")).shadowRoot?.querySelector("input");await r("Shows all root nodes initially",async()=>{await c(async()=>{const n=await l(t,"node");a(n.length).toBe(2)})}),await r("Type search term and verify filtering",async()=>{const n=await s();n.focus(),n.value="John",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const o=await l(t,"node");a(o.length).toBe(2)},{timeout:500})}),await r("Clear search restores full list",async()=>{const n=await s();n.value="",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const o=await l(t,"node");a(o.length).toBe(2)},{timeout:500})})}},b={args:{searchPlaceholder:"Search (min 3 chars)...",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${m}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const t=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await d(t,"search-input")).shadowRoot?.querySelector("input");await r("Type less than minLength - no filtering",async()=>{const n=await s();n.focus(),n.value="Jo",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await new Promise(h=>setTimeout(h,200));const o=await l(t,"node");a(o.length).toBe(2)}),await r("Type exactly minLength - triggers filtering",async()=>{const n=await s();n.value="Joh",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const o=await l(t,"node");a(o.length).toBe(2)},{timeout:500})})}},v={args:{searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search globally",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>p`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${m}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const t=e.querySelector("cosmoz-treenode-navigator"),s=async()=>(await l(t,"node-name")).map(o=>o.textContent?.trim());await r("Navigate into C: > Users folder",async()=>{await c(async()=>{const i=await l(t,"node");a(i.length).toBe(2)});const n=await l(t,"node-arrow");await T.click(n[0]),await c(async()=>{const i=await s();a(i).toContain("Users"),a(i.length).toBe(3)});const o=await l(t,"node"),u=(await l(t,"node-name")).findIndex(i=>i.textContent?.trim()==="Users"),x=o[u]?.querySelector('[data-testid="node-arrow"]');await T.click(x),await c(async()=>{const i=await s();a(i).toContain("John"),a(i.length).toBe(3)})}),await r('Local search for "John" returns 1 result (only in C:/Users)',async()=>{const o=(await d(t,"search-input")).shadowRoot?.querySelector("input");o.focus(),o.value="John",o.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(async()=>{const h=await s();a(h.length).toBe(1),a(h[0]).toBe("John");const u=await d(t,"global-search-button");a(u).toBeTruthy(),a(u?.textContent).toContain("Click to search globally")},{timeout:1e3})}),await r('Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)',async()=>{const n=await d(t,"global-search-button");await T.click(n),await c(async()=>{const o=await s();a(o.length).toBe(2),a(o.every(u=>u==="John")).toBe(!0);const h=P(t,"global-search-button");a(h).toBeNull()},{timeout:500})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const L=["Default","WithCustomPlaceholders","SearchFiltering","SearchMinLength","GlobalSearchButton"];export{g as Default,v as GlobalSearchButton,y as SearchFiltering,b as SearchMinLength,w as WithCustomPlaceholders,L as __namedExportsOrder,E as default};
