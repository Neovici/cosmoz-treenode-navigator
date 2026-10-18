import{b as d,w as k}from"./iframe-DxS_z9Tt.js";import{o as x,n as T,c as $,u as f}from"./tree-view-DfsUXBH5.js";import"./preload-helper-PPVm8Dsz.js";const N=({slot:e,title:t,className:a,width:n="24",height:r="24",styles:i}={})=>d`
  <svg
    slot=${x(e)}
    class=${`building-07-icon ${a??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${r}
    style=${x(i)}
  >
    ${T(t,()=>k`<title>${t}</title>`)}
    <path
      d="M7.5 11H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V21m13.5-10h2.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6V21m-4.5 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.98 3 14.42 3 13.3 3h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.5 4.52 7.5 5.08 7.5 6.2V21M22 21H2m9-14h2m-2 4h2m-2 4h2"
    />
  </svg>
`,H=({slot:e,title:t,className:a,width:n="24",height:r="24",styles:i}={})=>d`
  <svg
    slot=${x(e)}
    class=${`folder-icon ${a??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${r}
    style=${x(i)}
  >
    ${T(t,()=>k`<title>${t}</title>`)}
    <path
      d="m13 7-1.116-2.231c-.32-.642-.481-.963-.72-1.198a2 2 0 0 0-.748-.462C10.1 3 9.74 3 9.022 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2V7m0 0h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V7Z"
    />
  </svg>
`,L=[{id:"root",label:"Root",children:[{id:"ica",label:"Client ICA",children:[{id:"ica.north",label:"Region North",children:[{id:"ica.north.lulea",label:"Luleå"},{id:"ica.north.umea",label:"Umeå"},{id:"ica.north.kiruna",label:"Kiruna"}]},{id:"ica.south",label:"Region South",children:[{id:"ica.south.malmo",label:"Malmö"},{id:"ica.south.lund",label:"Lund"}]},{id:"ica.hq",label:"Head office"}]},{id:"rexel",label:"Client Rexel",children:[{id:"rexel.se",label:"Sweden"},{id:"rexel.no",label:"Norway"}]},{id:"food",label:"Food Market"},{id:"demo",label:"Demo structure",children:[]}]}],F=e=>[{id:"wide",label:`Wide node (${e.toLocaleString()} children)`,children:Array.from({length:e},(t,a)=>({id:`wide.${a}`,label:`Store ${String(a+1).padStart(6,"0")}`,children:a%1e3===0?[{id:`wide.${a}.a`,label:"Department A"},{id:`wide.${a}.b`,label:"Department B"}]:void 0}))}],q=[{pathLocator:"1",name:"C:",children:{2:{pathLocator:"1.2",name:"Windows",children:{3:{pathLocator:"1.2.3",name:"System"},4:{pathLocator:"1.2.4",name:"Fonts"}}},5:{pathLocator:"1.5",name:"Users",children:{6:{pathLocator:"1.5.6",name:"John"}}}}},{pathLocator:"7",name:"D:"}],{expect:o,fn:R,waitFor:s}=__STORYBOOK_MODULE_TEST__,E=(e,{hasChildren:t})=>(t?H:N)({width:"16",height:"16"}),_={title:"Tests/TreeView",component:"cosmoz-treenode-tree-view",argTypes:{size:{control:"inline-radio",options:["sm","md"]},icons:{control:"boolean"}},args:{size:"sm",items:L,expanded:["root"],icons:!1,onSelected:R(),onActivate:R()},render:e=>d`<cosmoz-treenode-tree-view
            style="height: 360px; width: 320px"
            label="Organisation"
            size=${e.size}
            .items=${e.items}
            .expanded=${e.expanded}
            .selected=${e.selected}
            .renderIcon=${e.icons?E:void 0}
            @selected-changed=${t=>e.onSelected(t.detail.value)}
            @activate=${t=>e.onActivate(t.detail.id)}
        ></cosmoz-treenode-tree-view>`},S=e=>e.getAllByShadowRole("treeitem"),c=(e,t)=>e.getByShadowText(t).closest('[role="treeitem"]'),l=e=>!!e?.matches(":focus"),h={play:async({canvas:e,step:t,userEvent:a,args:n})=>{await t("Shows the root and its children",async()=>{await e.findByShadowText("Client ICA"),o(S(e)).toHaveLength(5)}),await t("Clicking the chevron expands without selecting",async()=>{const r=c(e,"Client ICA");await a.click(r.querySelector(".toggle")),await e.findByShadowText("Region North"),o(r.getAttribute("aria-expanded")).toBe("true"),o(r.getAttribute("aria-selected")).toBe("false"),o(n.onSelected).not.toHaveBeenCalled()}),await t("Clicking a row selects it",async()=>{await a.click(e.getByShadowText("Region South")),o(n.onSelected).toHaveBeenCalledWith("ica.south"),o(c(e,"Region South").getAttribute("aria-selected")).toBe("true")}),await t("Double-click activates",async()=>{await a.dblClick(e.getByShadowText("Head office")),o(n.onActivate).toHaveBeenCalledWith("ica.hq")})}},w={args:{selected:"ica"},play:async({canvas:e,step:t,userEvent:a,args:n})=>{const r=await s(()=>c(e,"Client ICA"));await t("The selected row holds the tab stop",async()=>{o(r.tabIndex).toBe(0),r.focus()}),await t("ArrowRight expands, then moves into the children",async()=>{await a.keyboard("{ArrowRight}"),await e.findByShadowText("Region North"),await a.keyboard("{ArrowRight}"),await s(()=>o(l(c(e,"Region North"))).toBe(!0))}),await t("ArrowDown / ArrowLeft move and go back to the parent",async()=>{await a.keyboard("{ArrowDown}"),await s(()=>o(l(c(e,"Region South"))).toBe(!0)),await a.keyboard("{ArrowLeft}"),await s(()=>o(l(c(e,"Client ICA"))).toBe(!0))}),await t("ArrowLeft on an open node collapses it",async()=>{await a.keyboard("{ArrowLeft}"),await s(()=>o(e.queryByShadowText("Region North")).toBeNull())}),await t("Space selects, Enter activates",async()=>{await a.keyboard("{ArrowDown} "),o(n.onSelected).toHaveBeenLastCalledWith("rexel"),await a.keyboard("{Enter}"),o(n.onActivate).toHaveBeenCalledWith("rexel")})}},p={args:{icons:!0,expanded:["root","ica","ica.north"],selected:"ica.north.umea"}},u={args:{size:"md",icons:!0,expanded:["root","ica"]}},I=F(1e5),m={args:{items:I,expanded:["wide"],selected:"wide.50000"},play:async({canvas:e,step:t})=>{await t("Renders only the rows in view, centred on the selection",async()=>{await e.findByShadowText("Store 050001"),o(S(e).length).toBeLessThan(100)}),await t("Keeps a keyboard entry point after the active row scrolls out",async()=>{const a=e.getByShadowRole("tree");await new Promise(n=>requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>n())))),a.scrollTop=0,await s(()=>o(a.querySelector('[data-id="wide.50000"]')).toBeNull()),await s(()=>o(a.tabIndex).toBe(0)),a.focus(),await s(()=>o(l(a.querySelector('[data-id="wide.50000"]'))).toBe(!0))})}};customElements.define("controlled-treenode-tree-demo",$(()=>{const[e,t]=f("ica.hq"),[a,n]=f(["root","ica"]);return d`
            <p style="font: var(--cz-text-sm) var(--cz-font-body)">
                selected: <b data-testid="selected">${e??"—"}</b> · expanded:
                <b data-testid="expanded">${a.join(", ")}</b>
            </p>
            <button @click=${()=>n([])}>Collapse all</button>
            <button @click=${()=>t("rexel.no")}>Select Norway</button>
            <cosmoz-treenode-tree-view
                style="height: 300px; width: 320px"
                label="Organisation"
                .items=${L}
                .selected=${e}
                .expanded=${a}
                @selected-changed=${r=>{r.preventDefault(),t(r.detail.value)}}
                @expanded-changed=${r=>{r.preventDefault(),n(r.detail.value)}}
            ></cosmoz-treenode-tree-view>
        `}));const y={render:()=>d`<controlled-treenode-tree-demo></controlled-treenode-tree-demo>`,play:async({canvas:e,step:t,userEvent:a})=>{await t("The host state drives the tree",async()=>{await e.findByShadowText("Head office"),o(c(e,"Head office").getAttribute("aria-selected")).toBe("true")}),await t("Tree interactions update the host state",async()=>{await a.click(e.getByShadowText("Region North")),await s(()=>o(e.getByShadowTestId("selected").textContent).toBe("ica.north"))}),await t("Host changes are reflected in the tree",async()=>{await a.click(e.getByShadowRole("button",{name:"Collapse all"})),await s(()=>o(S(e)).toHaveLength(1))})}},z=e=>e.pathLocator,D=e=>e.name,O=e=>e.children?Object.values(e.children):void 0,g={render:()=>d`<cosmoz-treenode-tree-view
            style="height: 240px; width: 320px"
            label="Files"
            .items=${q}
            .getId=${z}
            .getLabel=${D}
            .getChildren=${O}
            .expanded=${["1","1.2"]}
            .selected=${"1.2.3"}
        ></cosmoz-treenode-tree-view>`,play:async({canvas:e,step:t})=>{await t("Reads ids, labels and children through the accessors",async()=>{await e.findByShadowText("System"),o(c(e,"System").dataset.id).toBe("1.2.3"),o(S(e)).toHaveLength(6)})}},b={args:{items:[]},play:async({canvas:e,step:t})=>{await t("Renders an empty tree without rows",async()=>{await e.findByShadowRole("tree"),o(e.queryAllByShadowRole("treeitem")).toHaveLength(0)})}};customElements.define("late-tree-ancestors-demo",$(()=>{const[e,t]=f([{id:"root",label:"Root",children:[{id:"selected",label:"Selected"}]}]);return d`
            <button
                @click=${()=>t([{id:"root",label:"Root",children:[...Array.from({length:1e3},(a,n)=>({id:`sibling-${n}`,label:`Sibling ${n}`})),{id:"selected",label:"Selected"}]}])}
            >
                Load ancestor siblings
            </button>
            <cosmoz-treenode-tree-view
                style="height: 300px; width: 320px"
                label="Nodes"
                .items=${e}
                .expanded=${["root"]}
                .selected=${"selected"}
            ></cosmoz-treenode-tree-view>
        `}));const B={render:()=>d`<late-tree-ancestors-demo></late-tree-ancestors-demo>`,play:async({canvas:e,userEvent:t})=>{await e.findByShadowText("Selected");const a=e.getByShadowRole("button",{name:"Load ancestor siblings"});await t.click(a),await s(()=>{const n=c(e,"Selected");o(n.getAttribute("aria-posinset")).toBe("1001");const r=n.getBoundingClientRect(),i=e.getByShadowRole("tree").getBoundingClientRect();o(r.top).toBeGreaterThanOrEqual(i.top),o(r.bottom).toBeLessThanOrEqual(i.bottom)}),o(l(a)).toBe(!0)}},v={args:{items:[{id:"branch",label:"Branch",children:Array.from({length:1e3},(e,t)=>({id:`child-${t}`,label:`Child ${t}`}))},{id:"selected",label:"Selected"}],expanded:[],selected:"selected"},play:async({canvas:e,userEvent:t,step:a})=>{const n=await s(()=>c(e,"Branch")),r=()=>{const i=c(e,"Branch");o(i.getAttribute("aria-expanded")).toBe("true");const C=i.getBoundingClientRect(),A=e.getByShadowRole("tree").getBoundingClientRect();o(C.top).toBeGreaterThanOrEqual(A.top),o(C.bottom).toBeLessThanOrEqual(A.bottom),o(l(i)).toBe(!0)};await a("Keyboard expansion keeps the active branch visible",async()=>{n.focus(),await t.keyboard("{ArrowRight}"),await e.findByShadowText("Child 0"),await new Promise(i=>setTimeout(i,600)),r()}),await a("Chevron expansion keeps the active branch visible",async()=>{await t.keyboard("{ArrowLeft}"),await s(()=>o(n.getAttribute("aria-expanded")).toBe("false")),await t.click(n.querySelector(".toggle")),await e.findByShadowText("Child 0"),await new Promise(i=>setTimeout(i,600)),r()})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    userEvent,
    args
  }) => {
    await step('Shows the root and its children', async () => {
      await canvas.findByShadowText('Client ICA');
      expect(rows(canvas)).toHaveLength(5);
    });
    await step('Clicking the chevron expands without selecting', async () => {
      const ica = rowByName(canvas, 'Client ICA');
      await userEvent.click(ica.querySelector('.toggle')!);
      await canvas.findByShadowText('Region North');
      expect(ica.getAttribute('aria-expanded')).toBe('true');
      expect(ica.getAttribute('aria-selected')).toBe('false');
      expect(args.onSelected).not.toHaveBeenCalled();
    });
    await step('Clicking a row selects it', async () => {
      await userEvent.click(canvas.getByShadowText('Region South'));
      expect(args.onSelected).toHaveBeenCalledWith('ica.south');
      expect(rowByName(canvas, 'Region South').getAttribute('aria-selected')).toBe('true');
    });
    await step('Double-click activates', async () => {
      await userEvent.dblClick(canvas.getByShadowText('Head office'));
      expect(args.onActivate).toHaveBeenCalledWith('ica.hq');
    });
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    selected: 'ica'
  },
  play: async ({
    canvas,
    step,
    userEvent,
    args
  }) => {
    const ica = await waitFor(() => rowByName(canvas, 'Client ICA'));
    await step('The selected row holds the tab stop', async () => {
      expect(ica.tabIndex).toBe(0);
      ica.focus();
    });
    await step('ArrowRight expands, then moves into the children', async () => {
      await userEvent.keyboard('{ArrowRight}');
      await canvas.findByShadowText('Region North');
      await userEvent.keyboard('{ArrowRight}');
      await waitFor(() => expect(hasFocus(rowByName(canvas, 'Region North'))).toBe(true));
    });
    await step('ArrowDown / ArrowLeft move and go back to the parent', async () => {
      await userEvent.keyboard('{ArrowDown}');
      await waitFor(() => expect(hasFocus(rowByName(canvas, 'Region South'))).toBe(true));
      await userEvent.keyboard('{ArrowLeft}');
      await waitFor(() => expect(hasFocus(rowByName(canvas, 'Client ICA'))).toBe(true));
    });
    await step('ArrowLeft on an open node collapses it', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      await waitFor(() => expect(canvas.queryByShadowText('Region North')).toBeNull());
    });
    await step('Space selects, Enter activates', async () => {
      await userEvent.keyboard('{ArrowDown} ');
      expect(args.onSelected).toHaveBeenLastCalledWith('rexel');
      await userEvent.keyboard('{Enter}');
      expect(args.onActivate).toHaveBeenCalledWith('rexel');
    });
  }
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icons: true,
    expanded: ['root', 'ica', 'ica.north'],
    selected: 'ica.north.umea'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    icons: true,
    expanded: ['root', 'ica']
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: big,
    expanded: ['wide'],
    selected: 'wide.50000'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders only the rows in view, centred on the selection', async () => {
      await canvas.findByShadowText('Store 050001');
      expect(rows(canvas).length).toBeLessThan(100);
    });
    await step('Keeps a keyboard entry point after the active row scrolls out', async () => {
      const tree = canvas.getByShadowRole('tree');
      // Initial scroll corrections settle over two animation frames.
      await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
      tree.scrollTop = 0;
      await waitFor(() => expect(tree.querySelector('[data-id="wide.50000"]')).toBeNull());
      await waitFor(() => expect(tree.tabIndex).toBe(0));
      tree.focus();
      await waitFor(() => expect(hasFocus(tree.querySelector('[data-id="wide.50000"]'))).toBe(true));
    });
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<controlled-treenode-tree-demo></controlled-treenode-tree-demo>\`,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('The host state drives the tree', async () => {
      await canvas.findByShadowText('Head office');
      expect(rowByName(canvas, 'Head office').getAttribute('aria-selected')).toBe('true');
    });
    await step('Tree interactions update the host state', async () => {
      await userEvent.click(canvas.getByShadowText('Region North'));
      await waitFor(() => expect(canvas.getByShadowTestId('selected').textContent).toBe('ica.north'));
    });
    await step('Host changes are reflected in the tree', async () => {
      await userEvent.click(canvas.getByShadowRole('button', {
        name: 'Collapse all'
      }));
      await waitFor(() => expect(rows(canvas)).toHaveLength(1));
    });
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-treenode-tree-view
            style="height: 240px; width: 320px"
            label="Files"
            .items=\${pathNodes}
            .getId=\${getPathId}
            .getLabel=\${getPathLabel}
            .getChildren=\${getPathChildren}
            .expanded=\${['1', '1.2']}
            .selected=\${'1.2.3'}
        ></cosmoz-treenode-tree-view>\`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Reads ids, labels and children through the accessors', async () => {
      await canvas.findByShadowText('System');
      expect(rowByName(canvas, 'System').dataset.id).toBe('1.2.3');
      expect(rows(canvas)).toHaveLength(6);
    });
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders an empty tree without rows', async () => {
      await canvas.findByShadowRole('tree');
      expect(canvas.queryAllByShadowRole('treeitem')).toHaveLength(0);
    });
  }
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => html\`<late-tree-ancestors-demo></late-tree-ancestors-demo>\`,
  play: async ({
    canvas,
    userEvent
  }) => {
    await canvas.findByShadowText('Selected');
    const button = canvas.getByShadowRole('button', {
      name: 'Load ancestor siblings'
    });
    await userEvent.click(button);
    await waitFor(() => {
      const row = rowByName(canvas, 'Selected');
      expect(row.getAttribute('aria-posinset')).toBe('1001');
      const bounds = row.getBoundingClientRect();
      const viewport = canvas.getByShadowRole('tree').getBoundingClientRect();
      expect(bounds.top).toBeGreaterThanOrEqual(viewport.top);
      expect(bounds.bottom).toBeLessThanOrEqual(viewport.bottom);
    });
    expect(hasFocus(button)).toBe(true);
  }
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'branch',
      label: 'Branch',
      children: Array.from({
        length: 1000
      }, (_, i) => ({
        id: \`child-\${i}\`,
        label: \`Child \${i}\`
      }))
    }, {
      id: 'selected',
      label: 'Selected'
    }],
    expanded: [],
    selected: 'selected'
  },
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const branch = await waitFor(() => rowByName(canvas, 'Branch'));
    const assertBranchVisible = () => {
      const activeBranch = rowByName(canvas, 'Branch');
      expect(activeBranch.getAttribute('aria-expanded')).toBe('true');
      const bounds = activeBranch.getBoundingClientRect();
      const viewport = canvas.getByShadowRole('tree').getBoundingClientRect();
      expect(bounds.top).toBeGreaterThanOrEqual(viewport.top);
      expect(bounds.bottom).toBeLessThanOrEqual(viewport.bottom);
      expect(hasFocus(activeBranch)).toBe(true);
    };
    await step('Keyboard expansion keeps the active branch visible', async () => {
      branch.focus();
      await userEvent.keyboard('{ArrowRight}');
      await canvas.findByShadowText('Child 0');
      await new Promise(resolve => setTimeout(resolve, 600));
      assertBranchVisible();
    });
    await step('Chevron expansion keeps the active branch visible', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      await waitFor(() => expect(branch.getAttribute('aria-expanded')).toBe('false'));
      await userEvent.click(branch.querySelector('.toggle')!);
      await canvas.findByShadowText('Child 0');
      await new Promise(resolve => setTimeout(resolve, 600));
      assertBranchVisible();
    });
  }
}`,...v.parameters?.docs?.source}}};const M=["Default","Keyboard","WithIcons","Medium","HundredThousandChildren","Controlled","CustomAccessors","Empty","KeepsSelectionVisibleWhileLoading","PreservesBranchNavigation"];export{y as Controlled,g as CustomAccessors,h as Default,b as Empty,m as HundredThousandChildren,B as KeepsSelectionVisibleWhileLoading,w as Keyboard,u as Medium,v as PreservesBranchNavigation,p as WithIcons,M as __namedExportsOrder,_ as default};
