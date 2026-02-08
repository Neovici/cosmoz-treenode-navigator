import{b as i}from"./iframe-N9_VETUO.js";import{T as g,a as u,n as m}from"./tree-data-Ca8mA2vN.js";import"./cosmoz-treenode-button-view-4jzznPWa.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Components/CosmozTreenodeButtonView/Legacy",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},noReset:{control:"boolean"},multiSelection:{control:"boolean"},nodePath:{control:"text"}}},d=e=>{const s=new g(u),n=e.nodePath?s.getNodeByPathLocator(e.nodePath):void 0;return i`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${s}
                .nodePath=${e.nodePath}
                .selectedNode=${n}
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
    `},t=d.bind({});t.args={buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!1,nodePath:""};const a=d.bind({});a.args={...t.args,multiSelection:!0};const r=d.bind({});r.args={...t.args,noReset:!0};const l=d.bind({});l.args={...t.args,nodePath:"1.2.3"};const c=e=>{const s=new g(u);let n;const h=o=>{n&&(n.textContent+=`
`+o)};return i`
        <style>
            .log {
                border: 1px solid #ccc;
                padding: 4px;
                height: 80px;
                overflow: auto;
                font-family: monospace;
                white-space: pre;
            }
        </style>
        <cosmoz-treenode-button-view
            .tree=${s}
            .nodePath=${e.nodePath||"1.2.3"}
            button-text-placeholder=${e.buttonTextPlaceholder}
            dialog-text=${e.dialogText}
            search-placeholder=${e.searchPlaceholder}
            search-global-placeholder=${e.searchGlobalPlaceholder}
            .searchMinLength=${e.searchMinLength}
            .searchDebounceTimeout=${e.searchDebounceTimeout}
            .noReset=${e.noReset}
            .multiSelection=${e.multiSelection}
            @node-path-changed=${o=>h("node-path-changed → "+o.detail.value)}
            @selected-node-changed=${o=>h("selected-node-changed → "+(o.detail.value&&o.detail.value.pathLocator||""))}
        ></cosmoz-treenode-button-view>
        <pre class="log" ${m(o=>n=o)}>
Interact to see legacy events...</pre
        >
    `};c.args={...t.args,nodePath:"1.2.3"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  // @ts-expect-error legacy interface
  const tree = new DefaultTree(adminFilesTree);
  const selectedNode = args.nodePath ? tree.getNodeByPathLocator(args.nodePath) : undefined;
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .selectedNode=\${selectedNode}
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  // @ts-expect-error legacy interface
  const tree = new DefaultTree(adminFilesTree);
  const selectedNode = args.nodePath ? tree.getNodeByPathLocator(args.nodePath) : undefined;
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .selectedNode=\${selectedNode}
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  // @ts-expect-error legacy interface
  const tree = new DefaultTree(adminFilesTree);
  const selectedNode = args.nodePath ? tree.getNodeByPathLocator(args.nodePath) : undefined;
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .selectedNode=\${selectedNode}
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  // @ts-expect-error legacy interface
  const tree = new DefaultTree(adminFilesTree);
  const selectedNode = args.nodePath ? tree.getNodeByPathLocator(args.nodePath) : undefined;
  return html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath}
                .selectedNode=\${selectedNode}
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  // @ts-expect-error demo typing
  const tree = new DefaultTree(adminFilesTree);
  let logEl;
  const log = (msg: string) => {
    if (logEl) {
      logEl.textContent += '\\n' + msg;
    }
  };
  return html\`
        <style>
            .log {
                border: 1px solid #ccc;
                padding: 4px;
                height: 80px;
                overflow: auto;
                font-family: monospace;
                white-space: pre;
            }
        </style>
        <cosmoz-treenode-button-view
            .tree=\${tree}
            .nodePath=\${args.nodePath || '1.2.3'}
            button-text-placeholder=\${args.buttonTextPlaceholder}
            dialog-text=\${args.dialogText}
            search-placeholder=\${args.searchPlaceholder}
            search-global-placeholder=\${args.searchGlobalPlaceholder}
            .searchMinLength=\${args.searchMinLength}
            .searchDebounceTimeout=\${args.searchDebounceTimeout}
            .noReset=\${args.noReset}
            .multiSelection=\${args.multiSelection}
            @node-path-changed=\${(e: any) => log('node-path-changed → ' + e.detail.value)}
            @selected-node-changed=\${(e: any) => log('selected-node-changed → ' + (e.detail.value && e.detail.value.pathLocator || ''))}
        ></cosmoz-treenode-button-view>
        <pre class="log" \${ref(el => logEl = el)}>
Interact to see legacy events...</pre
        >
    \`;
}`,...c.parameters?.docs?.source}}};const T=["Default","WithMultiSelection","WithNoReset","WithPreselectedNode","WithEvents"];export{t as Default,c as WithEvents,a as WithMultiSelection,r as WithNoReset,l as WithPreselectedNode,T as __namedExportsOrder,x as default};
