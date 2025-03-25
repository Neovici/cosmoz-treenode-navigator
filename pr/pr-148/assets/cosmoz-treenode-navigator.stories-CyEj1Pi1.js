import{x as i}from"./lit-element-D-o1_RG-.js";import{T as p,a as g}from"./tree-data-t3cwjFHA.js";import"./iframe-9Kt8lfrT.js";const b={title:"Components/CosmozTreenodeNavigator",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},opened:{control:"boolean"}}},d=o=>{const h=new p(g);return i`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${h}
                .searchPlaceholder=${o.searchPlaceholder}
                .searchGlobalPlaceholder=${o.searchGlobalPlaceholder}
                .searchMinLength=${o.searchMinLength}
                .opened=${o.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `},e=d.bind({});e.args={searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,opened:!0};const r=d.bind({});r.args={searchPlaceholder:"Enter search term...",searchGlobalPlaceholder:"Search in the entire tree",searchMinLength:2,opened:!0};var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
                .opened=\${args.opened}
            ></cosmoz-treenode-navigator>
        </div>
    \`;
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var s,c,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
                .opened=\${args.opened}
            ></cosmoz-treenode-navigator>
        </div>
    \`;
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const x=["Default","WithCustomPlaceholders"];export{e as Default,r as WithCustomPlaceholders,x as __namedExportsOrder,b as default};
