import{T as u,a as l}from"./tree-data-CWq1TC-e.js";import{j as s,b as i}from"./iframe-C19U6lpl.js";import"./preload-helper-PPVm8Dsz.js";const{expect:c,waitFor:h}=__STORYBOOK_MODULE_TEST__,p=new u(l),v={title:"Components/CosmozTreenodeNavigator",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},opened:{control:"boolean"},nodePath:{control:"text"}},args:{searchMinLength:3,searchDebounceTimeout:2e3,opened:!0,nodePath:""}},a={render:e=>i`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${p}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:n})=>{const t=e.querySelector("cosmoz-treenode-navigator");await n("Instantiates the element",async()=>{c(t.tagName).toBe("COSMOZ-TREENODE-NAVIGATOR")}),await n("Sets proper search placeholder",async()=>{await h(async()=>{const r=(await s(t,"search-input")).shadowRoot?.querySelector("input");c(r?.placeholder).toBe("Search...")})})}},o={args:{searchMinLength:2,searchDebounceTimeout:1e3,opened:!0},render:e=>i`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${p}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `,play:async({canvasElement:e,step:n})=>{const t=e.querySelector("cosmoz-treenode-navigator");await n("Sets search placeholder via i18next",async()=>{await h(async()=>{const r=(await s(t,"search-input")).shadowRoot?.querySelector("input");c(r?.placeholder).toBe("Search...")})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["Default","WithCustomSearchMinLength"];export{a as Default,o as WithCustomSearchMinLength,w as __namedExportsOrder,v as default};
