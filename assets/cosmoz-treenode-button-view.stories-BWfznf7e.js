import{T as u,a as m}from"./tree-data-CEdOFwnq.js";import{j as h,b as i}from"./iframe-CjAZuo64.js";import"./cosmoz-treenode-button-view-CWkgsErj.js";import"./preload-helper-PPVm8Dsz.js";const{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,d=new u(m),v={title:"Components/CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},showReset:{control:"boolean"},nodePath:{control:"text"}},args:{searchMinLength:3,searchDebounceTimeout:500,showReset:!1,nodePath:""}},n={render:e=>i`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${d}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const a=e.querySelector("cosmoz-treenode-button-view");await r("Renders with placeholder text",async()=>{const t=await h(a,"open-button");c(t).toBeTruthy(),c(t?.textContent?.trim()).toContain("Select a node")})}},o={render:e=>i`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${d}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            >
                <svg
                    slot="prefix"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </cosmoz-treenode-button-view>
        </div>
    `},s={args:{nodePath:"1.2.3"},render:e=>i`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${d}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:r})=>{const a=e.querySelector("cosmoz-treenode-button-view");await r("Button renders selected path",async()=>{await l(async()=>{const t=await h(a,"open-button");c(t?.textContent?.trim()).toContain("C: / Windows / System")})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Renders with placeholder text', async () => {
      const button = await findByShadowTestId(el, 'open-button');
      expect(button).toBeTruthy();
      expect(button?.textContent?.trim()).toContain('Select a node');
    });
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            >
                <svg
                    slot="prefix"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </cosmoz-treenode-button-view>
        </div>
    \`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Button renders selected path', async () => {
      await waitFor(async () => {
        const button = await findByShadowTestId(el, 'open-button');
        // nodePath '1.2.3' corresponds to 'C: / Windows / System' in the tree
        expect(button?.textContent?.trim()).toContain('C: / Windows / System');
      });
    });
  }
}`,...s.parameters?.docs?.source}}};const y=["Default","WithCustomIcon","WithPreselectedNode"];export{n as Default,o as WithCustomIcon,s as WithPreselectedNode,y as __namedExportsOrder,v as default};
