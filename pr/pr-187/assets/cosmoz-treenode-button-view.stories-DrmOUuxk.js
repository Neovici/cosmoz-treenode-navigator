import{x as s}from"./iframe-BSl8y6zx.js";import{T as c,a as i}from"./tree-data-SJIYHCYY.js";import"./cosmoz-treenode-button-view-BDcE_BmN.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Components/CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},noReset:{control:"boolean"},multiSelection:{control:"boolean"}}},l=e=>{const r=new c(i);return s`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${r}
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
    `},t=l.bind({});t.args={buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!1};const o=l.bind({});o.args={buttonTextPlaceholder:"Select multiple nodes",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!0};const n=l.bind({});n.args={buttonTextPlaceholder:"Select a node (no reset)",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!0,multiSelection:!1};const h=e=>{const r=new c(i);return s`
        <div style="padding: 20px;">
            <h3>Testing Navigation Behavior</h3>
            <p>
                This story demonstrates that the selected node path should remain
                visible even when navigating through the tree dialog.
            </p>
            <ol>
                <li>
                    The button shows a pre-selected path: "C: / Program Files / Git"
                </li>
                <li>Click the button to open the dialog</li>
                <li>Click on folders or arrows to navigate around</li>
                <li>
                    <strong>Expected:</strong> The button text should remain "C: / Program
                    Files / Git"
                </li>
                <li>
                    <strong>Bug (if present):</strong> The button text changes to "Select
                    a node"
                </li>
            </ol>
            <cosmoz-treenode-button-view
                .tree=${r}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                .noReset=${e.noReset}
                .multiSelection=${e.multiSelection}
                node-path="1.5.7"
            ></cosmoz-treenode-button-view>
        </div>
    `},a=h.bind({});a.args={buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const tree = new DefaultTree(adminFilesTree);
  return html\`
        <div style="padding: 20px;">
            <h3>Testing Navigation Behavior</h3>
            <p>
                This story demonstrates that the selected node path should remain
                visible even when navigating through the tree dialog.
            </p>
            <ol>
                <li>
                    The button shows a pre-selected path: "C: / Program Files / Git"
                </li>
                <li>Click the button to open the dialog</li>
                <li>Click on folders or arrows to navigate around</li>
                <li>
                    <strong>Expected:</strong> The button text should remain "C: / Program
                    Files / Git"
                </li>
                <li>
                    <strong>Bug (if present):</strong> The button text changes to "Select
                    a node"
                </li>
            </ol>
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
                node-path="1.5.7"
            ></cosmoz-treenode-button-view>
        </div>
    \`;
}`,...a.parameters?.docs?.source}}};const p=["Default","WithMultiSelection","WithNoReset","WithPreselectedNode"];export{t as Default,o as WithMultiSelection,n as WithNoReset,a as WithPreselectedNode,p as __namedExportsOrder,b as default};
