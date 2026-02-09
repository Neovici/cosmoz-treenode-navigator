import{T as v,a as S}from"./tree-data-Bb3zRk66.js";import{x as i}from"./iframe-BXQGnz4d.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,userEvent:y,waitFor:c}=__STORYBOOK_MODULE_TEST__,d=new v(S),$={title:"CosmozTreenodeNavigator",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},opened:{control:"boolean"}},args:{searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,opened:!0}},u={render:e=>i`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${d}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-navigator");await a("Instantiates the element",async()=>{t(o.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await a("Sets proper search placeholder",async()=>{await c(()=>{const s=o.shadowRoot?.querySelector("cosmoz-input")?.shadowRoot?.querySelector("input");t(s?.placeholder).toBe("Search...")})})}},p={args:{searchPlaceholder:"Enter search term...",searchGlobalPlaceholder:"Search in the entire tree",searchMinLength:2,searchDebounceTimeout:1e3,opened:!0},render:e=>i`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${d}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-navigator");await a("Sets custom search placeholder",async()=>{await c(()=>{const s=o.shadowRoot?.querySelector("cosmoz-input")?.shadowRoot?.querySelector("input");t(s?.placeholder).toBe("Enter search term...")})})}},m={args:{searchPlaceholder:"Search...",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>i`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${d}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-navigator"),s=()=>o.shadowRoot?.querySelector("cosmoz-input")?.shadowRoot?.querySelector("input");await a("Shows all root nodes initially",async()=>{await c(()=>{const n=o.shadowRoot?.querySelectorAll(".node");t(n?.length).toBe(2)})}),await a("Type search term and verify filtering",async()=>{const n=s();n.focus(),n.value="John",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(()=>{const r=o.shadowRoot?.querySelectorAll(".node");t(r?.length).toBe(2)},{timeout:500})}),await a("Clear search restores full list",async()=>{const n=s();n.value="",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(()=>{const r=o.shadowRoot?.querySelectorAll(".node");t(r?.length).toBe(2)},{timeout:500})})}},g={args:{searchPlaceholder:"Search (min 3 chars)...",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>i`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${d}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-navigator"),s=()=>o.shadowRoot?.querySelector("cosmoz-input")?.shadowRoot?.querySelector("input");await a("Type less than minLength - no filtering",async()=>{const n=s();n.focus(),n.value="Jo",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await new Promise(h=>setTimeout(h,200));const r=o.shadowRoot?.querySelectorAll(".node");t(r?.length).toBe(2)}),await a("Type exactly minLength - triggers filtering",async()=>{const n=s();n.value="Joh",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(()=>{const r=o.shadowRoot?.querySelectorAll(".node");t(r?.length).toBe(2)},{timeout:500})})}},w={args:{searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search globally",searchMinLength:3,searchDebounceTimeout:100,opened:!0},render:e=>i`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${d}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-navigator"),s=()=>Array.from(o.shadowRoot?.querySelectorAll(".node .name")??[]).map(n=>n.textContent?.trim());await a("Navigate into C: > Users folder",async()=>{await c(()=>{const l=o.shadowRoot?.querySelectorAll(".node");t(l?.length).toBe(2)});const n=o.shadowRoot?.querySelector(".node .icon");await y.click(n),await c(()=>{const l=s();t(l).toContain("Users"),t(l.length).toBe(3)});const r=o.shadowRoot?.querySelectorAll(".node"),b=Array.from(r??[]).find(l=>l.querySelector(".name")?.textContent?.trim()==="Users")?.querySelector(".icon");await y.click(b),await c(()=>{const l=s();t(l).toContain("John"),t(l.length).toBe(3)})}),await a('Local search for "John" returns 1 result (only in C:/Users)',async()=>{const n=o.shadowRoot?.querySelector("cosmoz-input")?.shadowRoot?.querySelector("input");n.focus(),n.value="John",n.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),await c(()=>{const r=s();t(r.length).toBe(1),t(r[0]).toBe("John");const h=o.shadowRoot?.querySelector("button.btn-ghost");t(h).toBeTruthy(),t(h?.textContent).toContain("Click to search globally")},{timeout:1e3})}),await a('Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)',async()=>{const n=o.shadowRoot?.querySelector("button.btn-ghost");await y.click(n),await c(()=>{const r=s();t(r.length).toBe(2),t(r.every(b=>b==="John")).toBe(!0);const h=o.shadowRoot?.querySelector("button.btn-ghost");t(h).toBeNull()},{timeout:500})})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      await waitFor(() => {
        const input = el.shadowRoot?.querySelector('cosmoz-input')?.shadowRoot?.querySelector('input');
        expect(input?.placeholder).toBe('Search...');
      });
    });
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      await waitFor(() => {
        const input = el.shadowRoot?.querySelector('cosmoz-input')?.shadowRoot?.querySelector('input');
        expect(input?.placeholder).toBe('Enter search term...');
      });
    });
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    const getInput = () => el.shadowRoot?.querySelector('cosmoz-input')?.shadowRoot?.querySelector('input') as HTMLInputElement;
    await step('Shows all root nodes initially', async () => {
      await waitFor(() => {
        const nodes = el.shadowRoot?.querySelectorAll('.node');
        // Root has C: and D: drives
        expect(nodes?.length).toBe(2);
      });
    });
    await step('Type search term and verify filtering', async () => {
      const input = getInput();
      input.focus();
      input.value = 'John';
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));

      // Wait for debounce + filtering
      await waitFor(() => {
        const nodes = el.shadowRoot?.querySelectorAll('.node');
        // "John" appears twice in tree
        expect(nodes?.length).toBe(2);
      }, {
        timeout: 500
      });
    });
    await step('Clear search restores full list', async () => {
      const input = getInput();
      input.value = '';
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));
      await waitFor(() => {
        const nodes = el.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBe(2); // Back to root level
      }, {
        timeout: 500
      });
    });
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    const getInput = () => el.shadowRoot?.querySelector('cosmoz-input')?.shadowRoot?.querySelector('input') as HTMLInputElement;
    await step('Type less than minLength - no filtering', async () => {
      const input = getInput();
      input.focus();
      input.value = 'Jo'; // Only 2 chars
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));

      // Wait for debounce
      await new Promise(r => setTimeout(r, 200));
      const nodes = el.shadowRoot?.querySelectorAll('.node');
      // Should still show root nodes (no filtering happened)
      expect(nodes?.length).toBe(2);
    });
    await step('Type exactly minLength - triggers filtering', async () => {
      const input = getInput();
      input.value = 'Joh'; // Now 3 chars
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));
      await waitFor(() => {
        const nodes = el.shadowRoot?.querySelectorAll('.node');
        // "John" matches
        expect(nodes?.length).toBe(2);
      }, {
        timeout: 500
      });
    });
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    const getNodeNames = () => Array.from(el.shadowRoot?.querySelectorAll('.node .name') ?? []).map(n => n.textContent?.trim());
    await step('Navigate into C: > Users folder', async () => {
      // Wait for root nodes
      await waitFor(() => {
        const nodes = el.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBe(2); // C: and D:
      });

      // Click the arrow icon on C: to navigate into it
      const cDriveArrow = el.shadowRoot?.querySelector('.node .icon') as HTMLElement;
      await userEvent.click(cDriveArrow);
      await waitFor(() => {
        // C: has 3 children: Windows, Program Files, Users
        const nodeNames = getNodeNames();
        expect(nodeNames).toContain('Users');
        expect(nodeNames.length).toBe(3);
      });

      // Find the Users node and click its arrow
      const allNodes = el.shadowRoot?.querySelectorAll('.node');
      const usersNode = Array.from(allNodes ?? []).find(n => n.querySelector('.name')?.textContent?.trim() === 'Users');
      const usersArrow = usersNode?.querySelector('.icon') as HTMLElement;
      await userEvent.click(usersArrow);
      await waitFor(() => {
        // Users has 3 children: Default, John, Public
        const nodeNames = getNodeNames();
        expect(nodeNames).toContain('John');
        expect(nodeNames.length).toBe(3);
      });
    });
    await step('Local search for "John" returns 1 result (only in C:/Users)', async () => {
      const input = el.shadowRoot?.querySelector('cosmoz-input')?.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.focus();
      input.value = 'John';
      input.dispatchEvent(new Event('input', {
        bubbles: true,
        composed: true
      }));
      await waitFor(() => {
        const nodeNames = getNodeNames();
        // Local search in C:/Users finds only 1 John
        expect(nodeNames.length).toBe(1);
        expect(nodeNames[0]).toBe('John');

        // Global search button should be visible
        const globalBtn = el.shadowRoot?.querySelector('button.btn-ghost');
        expect(globalBtn).toBeTruthy();
        expect(globalBtn?.textContent).toContain('Click to search globally');
      }, {
        timeout: 1000
      });
    });
    await step('Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)', async () => {
      const globalBtn = el.shadowRoot?.querySelector('button.btn-ghost') as HTMLButtonElement;
      await userEvent.click(globalBtn);
      await waitFor(() => {
        const nodeNames = getNodeNames();
        // Global search finds 2 Johns: one in C:/Users, one in D:/Data
        expect(nodeNames.length).toBe(2);
        expect(nodeNames.every(name => name === 'John')).toBe(true);

        // Global search button should disappear (now searching from root)
        const globalBtnAfter = el.shadowRoot?.querySelector('button.btn-ghost');
        expect(globalBtnAfter).toBeNull();
      }, {
        timeout: 500
      });
    });
  }
}`,...w.parameters?.docs?.source}}};const q=["Default","WithCustomPlaceholders","SearchFiltering","SearchMinLength","GlobalSearchButton"];export{u as Default,w as GlobalSearchButton,m as SearchFiltering,g as SearchMinLength,p as WithCustomPlaceholders,q as __namedExportsOrder,$ as default};
