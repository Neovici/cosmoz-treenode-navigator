import{T as h,a as u}from"./tree-data-CMrbr0Lf.js";import{j as c,b as i}from"./iframe-iPBwYnbQ.js";import"./cosmoz-treenode-button-view-DMfX-eVN.js";import"./preload-helper-PPVm8Dsz.js";const{expect:r,waitFor:m}=__STORYBOOK_MODULE_TEST__,d=new h(u),y={title:"Components/CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},showReset:{control:"boolean"},nodePath:{control:"text"}},args:{searchMinLength:3,searchDebounceTimeout:2e3,showReset:!1,nodePath:""}},n={render:e=>i`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${d}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:s})=>{const a=e.querySelector("cosmoz-treenode-button-view");await s("Renders with placeholder text",async()=>{const t=await c(a,"open-button");r(t).toBeTruthy(),r(t?.textContent?.trim()).toContain("Select a node")})}},o={args:{nodePath:"1.2.3"},render:e=>i`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${d}
                .nodePath=${e.nodePath||""}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:s})=>{const a=e.querySelector("cosmoz-treenode-button-view");await s("Button renders selected path",async()=>{await m(async()=>{const t=await c(a,"open-button");r(t?.textContent?.trim()).toContain("C: / Windows / System")})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const g=["Default","WithPreselectedNode"];export{n as Default,o as WithPreselectedNode,g as __namedExportsOrder,y as default};
