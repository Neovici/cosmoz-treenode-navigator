import{x as l}from"./iframe-DO9_uU87.js";import{T as c,a as s}from"./tree-data-CIfhIz_T.js";import"./cosmoz-treenode-button-view-BQgCWsBi.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"Components/CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},noReset:{control:"boolean"},multiSelection:{control:"boolean"}}},a=e=>{const n=new c(s);return l`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${n}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .noReset=${e.noReset}
                .multiSelection=${e.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    `},t=a.bind({});t.args={buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!1};const o=a.bind({});o.args={buttonTextPlaceholder:"Select multiple nodes",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!0};const r=a.bind({});r.args={buttonTextPlaceholder:"Select a node (no reset)",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!0,multiSelection:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                .noReset=\${args.noReset}
                .multiSelection=\${args.multiSelection}
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...r.parameters?.docs?.source}}};const m=["Default","WithMultiSelection","WithNoReset"];export{t as Default,o as WithMultiSelection,r as WithNoReset,m as __namedExportsOrder,g as default};
