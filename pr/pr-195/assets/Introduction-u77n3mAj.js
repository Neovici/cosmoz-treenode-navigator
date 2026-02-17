import{j as e,M as r}from"./blocks-B-zc02_f.js";import{useMDXComponents as o}from"./index-qmY8GZRP.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Ct0EEPth.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"cosmoz-treenode-navigator",children:"Cosmoz Treenode Navigator"}),`
`,e.jsx(n.p,{children:"A PionJS component for navigating, searching, and selecting nodes in a hierarchical tree structure."}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/components-cosmoztreenodebuttonview--default",children:"CosmozTreenodeButtonView"})," — A trigger button that opens a dialog with the navigator. This is the main component most consumers will use."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/components-cosmoztreenodenavigator--default",children:"CosmozTreenodeNavigator"})," — The inner navigator for browsing and searching the tree. Can also be used standalone."]}),`
`]}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Navigate through hierarchical tree structures"}),`
`,e.jsx(n.li,{children:"Search within the current level or globally"}),`
`,e.jsx(n.li,{children:"Keyboard navigation (arrow keys, Enter to select)"}),`
`,e.jsx(n.li,{children:"Container query support — graceful degradation in narrow layouts"}),`
`,e.jsx(n.li,{children:"Select and Cancel dialog flow with explicit confirmation"}),`
`,e.jsxs(n.li,{children:["Internationalization via ",e.jsx(n.code,{children:"i18next.t()"})]}),`
`,e.jsxs(n.li,{children:["Reset selection option (opt-in via ",e.jsx(n.code,{children:"show-reset"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick Start"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import i18next from 'i18next';
import { component, html } from '@pionjs/pion';
import '@neovici/cosmoz-treenode-navigator/cosmoz-treenode-button-view';
import { DefaultTree } from '@neovici/cosmoz-tree';

i18next.init({ lng: 'en', resources: {} });

const tree = new DefaultTree(treeData);

const MyApp = () => html\`
  <cosmoz-treenode-button-view
    .tree=\${tree}
    show-reset
    @node-path-changed=\${(e) => console.log('Selected:', e.detail.value)}
  ></cosmoz-treenode-button-view>
\`;

customElements.define('my-app', component(MyApp));
`})}),`
`,e.jsx(n.h2,{id:"internationalization",children:"Internationalization"}),`
`,e.jsxs(n.p,{children:["All UI text is managed via ",e.jsx(n.code,{children:"i18next.t()"})," with English text as translation keys. Load translations with ",e.jsx(n.code,{children:"i18next.addResourceBundle()"}),":"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Key"}),e.jsx(n.th,{children:"Used in"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Select a node"})}),e.jsx(n.td,{children:"Button placeholder"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Search or navigate to chosen destination"})}),e.jsx(n.td,{children:"Dialog heading"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Search..."})}),e.jsx(n.td,{children:"Search input placeholder"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Click to search again but globally"})}),e.jsx(n.td,{children:"Global search button"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Select"})}),e.jsx(n.td,{children:"Confirm button"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"Cancel"})}),e.jsx(n.td,{children:"Cancel button"})]})]})]})]})}function a(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default};
