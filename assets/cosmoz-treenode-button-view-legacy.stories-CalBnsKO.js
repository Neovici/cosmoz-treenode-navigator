import{x as L}from"./lit-element-D5YJkDF8.js";import{T as D,a as N,n as R}from"./tree-data-D6XDig43.js";import"./cosmoz-treenode-button-view-BU57KYXR.js";import"./iframe-GQn2qLnj.js";const W={title:"Components/CosmozTreenodeButtonView/Legacy",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},noReset:{control:"boolean"},multiSelection:{control:"boolean"},nodePath:{control:"text"}}},d=e=>{const s=new D(N),n=e.nodePath?s.getNodeByPathLocator(e.nodePath):void 0;return L`
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
    `},t=d.bind({});t.args={buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,noReset:!1,multiSelection:!1,nodePath:""};const a=d.bind({});a.args={...t.args,multiSelection:!0};const r=d.bind({});r.args={...t.args,noReset:!0};const l=d.bind({});l.args={...t.args,nodePath:"1.2.3"};const c=e=>{const s=new D(N);let n;const h=o=>{n&&(n.textContent+=`
`+o)};return L`
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
        <pre class="log" ${R(o=>n=o)}>
Interact to see legacy events...</pre
        >
    `};c.args={...t.args,nodePath:"1.2.3"};var i,g,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,p,$;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...($=(p=a.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};var b,P,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(x=(P=r.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var T,v,f;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,w,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const B=["Default","WithMultiSelection","WithNoReset","WithPreselectedNode","WithEvents"];export{t as Default,c as WithEvents,a as WithMultiSelection,r as WithNoReset,l as WithPreselectedNode,B as __namedExportsOrder,W as default};
