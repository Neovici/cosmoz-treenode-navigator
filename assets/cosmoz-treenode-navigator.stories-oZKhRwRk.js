import{x as i}from"./lit-element-D5YJkDF8.js";import{T as m,a as p}from"./tree-data-CXI3kqpg.js";import"./iframe-D9sFQmMn.js";const P={title:"Components/CosmozTreenodeNavigator",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},opened:{control:"boolean"}}},h=e=>{const d=new m(p);return i`
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
    `},r=h.bind({});r.args={searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,opened:!0};const o=h.bind({});o.args={searchPlaceholder:"Enter search term...",searchGlobalPlaceholder:"Search in the entire tree",searchMinLength:2,searchDebounceTimeout:1e3,opened:!0};var a,n,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
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
    \`;
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var t,s,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
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
    \`;
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const T=["Default","WithCustomPlaceholders"];export{r as Default,o as WithCustomPlaceholders,T as __namedExportsOrder,P as default};
