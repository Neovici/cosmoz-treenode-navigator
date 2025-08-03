import{x as g}from"./lit-element-D5YJkDF8.js";import{T as m,a as p}from"./tree-data-DDf9mH4V.js";import"./iframe-aInBdM9S.js";const $={title:"Components/CosmozTreenodeNavigator/Legacy",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},opened:{control:"boolean"},nodePath:{control:"text"}}},h=e=>{const a=new m(p),i=e.nodePath?a.getNodeByPathLocator(e.nodePath):void 0;return g`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${a}
                .nodePath=${e.nodePath}
                .selectedNode=${i}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `},o=h.bind({});o.args={searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,opened:!0,nodePath:""};const r=h.bind({});r.args={...o.args,searchPlaceholder:"Enter search term...",searchGlobalPlaceholder:"Search in the entire tree"};var t,n,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  // @ts-expect-error legacy interface
  const tree = new DefaultTree(adminFilesTree);
  const selectedNode = args.nodePath ? tree.getNodeByPathLocator(args.nodePath) : undefined;
  return html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .selectedNode=\${selectedNode}
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
            ></cosmoz-treenode-navigator>
        </div>
    \`;
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  // @ts-expect-error legacy interface
  const tree = new DefaultTree(adminFilesTree);
  const selectedNode = args.nodePath ? tree.getNodeByPathLocator(args.nodePath) : undefined;
  return html\`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .selectedNode=\${selectedNode}
                .searchPlaceholder=\${args.searchPlaceholder}
                .searchGlobalPlaceholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .opened=\${args.opened}
            ></cosmoz-treenode-navigator>
        </div>
    \`;
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const x=["Default","WithCustomPlaceholders"];export{o as Default,r as WithCustomPlaceholders,x as __namedExportsOrder,$ as default};
