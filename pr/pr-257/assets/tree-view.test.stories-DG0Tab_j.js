import{b as c,w as f}from"./iframe-DNzSCrex.js";import{o as x,n as C,c as $,u as B}from"./tree-view-DaxZbWmL.js";import"./preload-helper-PPVm8Dsz.js";const k=({slot:e,title:t,className:a,width:r="24",height:n="24",styles:b}={})=>c`
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
    width=${r}
    height=${n}
    style=${x(b)}
  >
    ${C(t,()=>f`<title>${t}</title>`)}
    <path
      d="M7.5 11H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V21m13.5-10h2.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6V21m-4.5 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.98 3 14.42 3 13.3 3h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.5 4.52 7.5 5.08 7.5 6.2V21M22 21H2m9-14h2m-2 4h2m-2 4h2"
    />
  </svg>
`,R=({slot:e,title:t,className:a,width:r="24",height:n="24",styles:b}={})=>c`
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
    width=${r}
    height=${n}
    style=${x(b)}
  >
    ${C(t,()=>f`<title>${t}</title>`)}
    <path
      d="m13 7-1.116-2.231c-.32-.642-.481-.963-.72-1.198a2 2 0 0 0-.748-.462C10.1 3 9.74 3 9.022 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2V7m0 0h15.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V7Z"
    />
  </svg>
`,A=[{id:"root",label:"Root",children:[{id:"ica",label:"Client ICA",children:[{id:"ica.north",label:"Region North",children:[{id:"ica.north.lulea",label:"Luleå"},{id:"ica.north.umea",label:"Umeå"},{id:"ica.north.kiruna",label:"Kiruna"}]},{id:"ica.south",label:"Region South",children:[{id:"ica.south.malmo",label:"Malmö"},{id:"ica.south.lund",label:"Lund"}]},{id:"ica.hq",label:"Head office"}]},{id:"rexel",label:"Client Rexel",children:[{id:"rexel.se",label:"Sweden"},{id:"rexel.no",label:"Norway"}]},{id:"food",label:"Food Market"},{id:"demo",label:"Demo structure",children:[]}]}],T=e=>[{id:"wide",label:`Wide node (${e.toLocaleString()} children)`,children:Array.from({length:e},(t,a)=>({id:`wide.${a}`,label:`Store ${String(a+1).padStart(6,"0")}`,children:a%1e3===0?[{id:`wide.${a}.a`,label:"Department A"},{id:`wide.${a}.b`,label:"Department B"}]:void 0}))}],L=[{pathLocator:"1",name:"C:",children:{2:{pathLocator:"1.2",name:"Windows",children:{3:{pathLocator:"1.2.3",name:"System"},4:{pathLocator:"1.2.4",name:"Fonts"}}},5:{pathLocator:"1.5",name:"Users",children:{6:{pathLocator:"1.5.6",name:"John"}}}}},{pathLocator:"7",name:"D:"}],{expect:o,fn:S,waitFor:i}=__STORYBOOK_MODULE_TEST__,H=(e,{hasChildren:t})=>(t?R:k)({width:"16",height:"16"}),W={title:"Tests/TreeView",component:"cosmoz-treenode-tree-view",argTypes:{size:{control:"inline-radio",options:["sm","md"]},icons:{control:"boolean"}},args:{size:"sm",items:A,expanded:["root"],icons:!1,onSelected:S(),onActivate:S()},render:e=>c`<cosmoz-treenode-tree-view
            style="height: 360px; width: 320px"
            label="Organisation"
            size=${e.size}
            .items=${e.items}
            .expanded=${e.expanded}
            .selected=${e.selected}
            .renderIcon=${e.icons?H:void 0}
            @selected-changed=${t=>e.onSelected(t.detail.value)}
            @activate=${t=>e.onActivate(t.detail.id)}
        ></cosmoz-treenode-tree-view>`},v=e=>e.getAllByShadowRole("treeitem"),s=(e,t)=>e.getByShadowText(t).closest('[role="treeitem"]'),g=e=>!!e?.matches(":focus"),d={play:async({canvas:e,step:t,userEvent:a,args:r})=>{await t("Shows the root and its children",async()=>{await e.findByShadowText("Client ICA"),o(v(e)).toHaveLength(5)}),await t("Clicking the chevron expands without selecting",async()=>{const n=s(e,"Client ICA");await a.click(n.querySelector(".toggle")),await e.findByShadowText("Region North"),o(n.getAttribute("aria-expanded")).toBe("true"),o(n.getAttribute("aria-selected")).toBe("false"),o(r.onSelected).not.toHaveBeenCalled()}),await t("Clicking a row selects it",async()=>{await a.click(e.getByShadowText("Region South")),o(r.onSelected).toHaveBeenCalledWith("ica.south"),o(s(e,"Region South").getAttribute("aria-selected")).toBe("true")}),await t("Double-click activates",async()=>{await a.dblClick(e.getByShadowText("Head office")),o(r.onActivate).toHaveBeenCalledWith("ica.hq")})}},l={args:{selected:"ica"},play:async({canvas:e,step:t,userEvent:a,args:r})=>{const n=await i(()=>s(e,"Client ICA"));await t("The selected row holds the tab stop",async()=>{o(n.tabIndex).toBe(0),n.focus()}),await t("ArrowRight expands, then moves into the children",async()=>{await a.keyboard("{ArrowRight}"),await e.findByShadowText("Region North"),await a.keyboard("{ArrowRight}"),await i(()=>o(g(s(e,"Region North"))).toBe(!0))}),await t("ArrowDown / ArrowLeft move and go back to the parent",async()=>{await a.keyboard("{ArrowDown}"),await i(()=>o(g(s(e,"Region South"))).toBe(!0)),await a.keyboard("{ArrowLeft}"),await i(()=>o(g(s(e,"Client ICA"))).toBe(!0))}),await t("ArrowLeft on an open node collapses it",async()=>{await a.keyboard("{ArrowLeft}"),await i(()=>o(e.queryByShadowText("Region North")).toBeNull())}),await t("Space selects, Enter activates",async()=>{await a.keyboard("{ArrowDown} "),o(r.onSelected).toHaveBeenLastCalledWith("rexel"),await a.keyboard("{Enter}"),o(r.onActivate).toHaveBeenCalledWith("rexel")})}},h={args:{icons:!0,expanded:["root","ica","ica.north"],selected:"ica.north.umea"}},w={args:{size:"md",icons:!0,expanded:["root","ica"]}},N=T(1e5),p={args:{items:N,expanded:["wide"],selected:"wide.50000"},play:async({canvas:e,step:t})=>{await t("Renders only the rows in view, centred on the selection",async()=>{await e.findByShadowText("Store 050001"),o(v(e).length).toBeLessThan(100)}),await t("Keeps a keyboard entry point after the active row scrolls out",async()=>{const a=e.getByShadowRole("tree");await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>r())))),a.scrollTop=0,await i(()=>o(a.querySelector('[data-id="wide.50000"]')).toBeNull()),await i(()=>o(a.tabIndex).toBe(0)),a.focus(),await i(()=>o(g(a.querySelector('[data-id="wide.50000"]'))).toBe(!0))})}};customElements.define("controlled-treenode-tree-demo",$(()=>{const[e,t]=B("ica.hq"),[a,r]=B(["root","ica"]);return c`
            <p style="font: var(--cz-text-sm) var(--cz-font-body)">
                selected: <b data-testid="selected">${e??"—"}</b> · expanded:
                <b data-testid="expanded">${a.join(", ")}</b>
            </p>
            <button @click=${()=>r([])}>Collapse all</button>
            <button @click=${()=>t("rexel.no")}>Select Norway</button>
            <cosmoz-treenode-tree-view
                style="height: 300px; width: 320px"
                label="Organisation"
                .items=${A}
                .selected=${e}
                .expanded=${a}
                @selected-changed=${n=>{n.preventDefault(),t(n.detail.value)}}
                @expanded-changed=${n=>{n.preventDefault(),r(n.detail.value)}}
            ></cosmoz-treenode-tree-view>
        `}));const u={render:()=>c`<controlled-treenode-tree-demo></controlled-treenode-tree-demo>`,play:async({canvas:e,step:t,userEvent:a})=>{await t("The host state drives the tree",async()=>{await e.findByShadowText("Head office"),o(s(e,"Head office").getAttribute("aria-selected")).toBe("true")}),await t("Tree interactions update the host state",async()=>{await a.click(e.getByShadowText("Region North")),await i(()=>o(e.getByShadowTestId("selected").textContent).toBe("ica.north"))}),await t("Host changes are reflected in the tree",async()=>{await a.click(e.getByShadowRole("button",{name:"Collapse all"})),await i(()=>o(v(e)).toHaveLength(1))})}},F=e=>e.pathLocator,I=e=>e.name,q=e=>e.children?Object.values(e.children):void 0,m={render:()=>c`<cosmoz-treenode-tree-view
            style="height: 240px; width: 320px"
            label="Files"
            .items=${L}
            .getId=${F}
            .getLabel=${I}
            .getChildren=${q}
            .expanded=${["1","1.2"]}
            .selected=${"1.2.3"}
        ></cosmoz-treenode-tree-view>`,play:async({canvas:e,step:t})=>{await t("Reads ids, labels and children through the accessors",async()=>{await e.findByShadowText("System"),o(s(e,"System").dataset.id).toBe("1.2.3"),o(v(e)).toHaveLength(6)})}},y={args:{items:[]},play:async({canvas:e,step:t})=>{await t("Renders an empty tree without rows",async()=>{await e.findByShadowRole("tree"),o(e.queryAllByShadowRole("treeitem")).toHaveLength(0)})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icons: true,
    expanded: ['root', 'ica', 'ica.north'],
    selected: 'ica.north.umea'
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    icons: true,
    expanded: ['root', 'ica']
  }
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const M=["Default","Keyboard","WithIcons","Medium","HundredThousandChildren","Controlled","CustomAccessors","Empty"];export{u as Controlled,m as CustomAccessors,d as Default,y as Empty,p as HundredThousandChildren,l as Keyboard,w as Medium,h as WithIcons,M as __namedExportsOrder,W as default};
