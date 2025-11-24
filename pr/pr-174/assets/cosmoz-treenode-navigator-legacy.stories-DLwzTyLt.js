import{x as c}from"./iframe-DTnk9l0f.js";import{T as s,a as d}from"./tree-data-Dt5M9LLj.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/CosmozTreenodeNavigator/Legacy",component:"cosmoz-treenode-navigator",tags:["autodocs"],argTypes:{searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},opened:{control:"boolean"},nodePath:{control:"text"}}},t=e=>{const a=new s(d),n=e.nodePath?a.getNodeByPathLocator(e.nodePath):void 0;return c`
        <div
            style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
        >
            <cosmoz-treenode-navigator
                .tree=${a}
                .nodePath=${e.nodePath}
                .selectedNode=${n}
                .searchPlaceholder=${e.searchPlaceholder}
                .searchGlobalPlaceholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .opened=${e.opened}
            ></cosmoz-treenode-navigator>
        </div>
    `},o=t.bind({});o.args={searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,opened:!0,nodePath:""};const r=t.bind({});r.args={...o.args,searchPlaceholder:"Enter search term...",searchGlobalPlaceholder:"Search in the entire tree"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};const m=["Default","WithCustomPlaceholders"];export{o as Default,r as WithCustomPlaceholders,m as __namedExportsOrder,g as default};
