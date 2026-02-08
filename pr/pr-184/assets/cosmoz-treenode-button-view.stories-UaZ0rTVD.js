import{c as F,u as M,a as ne,b as ae,d as N,e as A,f as se,g as G,h as ce,i as re,n as le,j as ie,T as de,k as he}from"./tree-data-C9fqV6qj.js";import{b as p}from"./iframe-DkyyI9pv.js";import"./preload-helper-PPVm8Dsz.js";const ue=F`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,pe=F`
	:host {
		display: block;
		container-type: inline-size;
	}

	h1,
	h2 {
		font-weight: 500;
	}

	.actions {
		display: flex;
		gap: 8px;
	}

	.actions > cosmoz-button:first-child {
		flex: 1;
		min-width: 0;
	}

	.actions > cosmoz-button:first-child::part(button) {
		justify-content: flex-start;
	}

	.default-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	:host([has-prefix]) .default-icon {
		display: none;
	}

	.path-text {
		${ue}
		direction: rtl;
		flex: 1;
		min-width: 0;
	}

	@container (max-width: 80px) {
		.path-text {
			display: none;
		}
	}

	/* Safari only css fix */

	_:matches(x),
	_:lang(x) + _:-webkit-full-screen-document,
	.pathToNode span {
		display: inline-block;
	}

	.dialog {
		width: 550px;
		min-width: 250px;

		padding: 0;
		border-radius: 10px;
		border: none;
	}

	.dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	.dialog-header {
		padding: 10px 10px 0 10px;
		cursor: move;
		user-select: none;
	}

	.dialog-heading {
		margin-bottom: 2rem;
		padding: 0 8px;
		font-size: 1.25rem;
		font-weight: normal;
		color: var(--cz-text-color, inherit);
	}

	.dialog-footer {
		padding: 0 10px 10px 10px;
		text-align: right;
	}

	.dialog-footer-button-container {
		display: flex;
		gap: 8px;
		justify-content: flex-end;
		margin: 0;
	}
`,ge=(e,a)=>{const o=t=>{if(t.key===e&&a instanceof Function)return t.preventDefault(),a()};M(()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}))},we=p`<svg
	class="default-icon"
	width="20"
	height="20"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<path
		d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
	/>
</svg>`,I=({tree:e,dialogText:a,buttonTextPlaceholder:o,searchPlaceholder:t,showReset:r=!1,searchGlobalPlaceholder:g,searchMinLength:b=3,searchDebounceTimeout:z=2e3})=>{const c=ae(),s=N(null),d=N(null),[h,y]=A("nodePath",""),[u,D]=A("opened",!1),[q,W]=se(""),x=G(()=>ce(h,e),[h,e]),_=G(()=>!Array.isArray(x)||x.length===0?o||"":x.filter(i=>i).map(i=>i[e.searchProperty]).join(" / "),[x,e,o]),O=re(i=>{const L=i.target.assignedNodes().length>0;c.toggleAttribute("has-prefix",L)},[c]);M(()=>{s.current&&(d.current=s.current.querySelector("cosmoz-treenode-navigator")?.shadowRoot?.querySelector("cosmoz-input"))},[s.current]),M(()=>{u?(s.current?.showModal(),setTimeout(()=>d.current?.focus(),0)):s.current?.close()},[u]);const j=()=>{y("")},V=()=>{d.current&&d.current.focus()},Y=()=>{s.current?.showModal(),D(!0),setTimeout(V,0)},v=()=>{D(!1),s.current?.close()};ge("Escape",v);const K=i=>{const w=s.current;if(!w)return;const L=i.clientX,J=i.clientY,k=w.getBoundingClientRect(),Q=k.left,ee=k.top,E=H=>{const te=H.clientX-L,oe=H.clientY-J;w.style.left=`${Q+te}px`,w.style.top=`${ee+oe}px`,w.style.margin="0"},C=()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",C)},X=i=>{i.preventDefault();const w=i.detail.value;w&&(y(w),v())},U=i=>{W(i.detail.value)},Z=()=>{q&&(y(q),v())};return p`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				@click=${Y}
				part="action-open"
			>
				<span slot="prefix">
					<slot name="button-before" @slotchange=${O}></slot>
					${we}
				</span>
				<div class="path-text">
					<span>${_}</span>
				</div>
				<slot name="button-after" slot="suffix"></slot>
			</cosmoz-button>
			${le(r&&!!h,()=>p`<cosmoz-button
						variant="tertiary"
						@click=${j}
						part="action-reset"
					>
						<svg
							slot="prefix"
							width="10"
							height="9"
							viewBox="0 0 10 9"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="8.53033"
								y1="0.53033"
								x2="1.53033"
								y2="7.53033"
								stroke-width="1.5"
							></line>
							<line
								x1="8.46967"
								y1="7.53033"
								x2="1.46967"
								y2="0.530331"
								stroke-width="1.5"
							></line>
						</svg>
					</cosmoz-button>`)}
		</div>

		<dialog
			class="dialog"
			part="dialog"
			${ie(i=>{s.current=i})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${K}
			>
				<h1 class="dialog-heading" part="heading">${a}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${h}
					@node-path-changed=${X}
					@highlighted-node-path-changed=${U}
					.searchPlaceholder=${t}
					.searchGlobalPlaceholder=${g}
					.searchMinLength=${b}
					.searchDebounceTimeout=${z}
					.tree=${e}
					.opened=${u}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!q}
						@click=${Z}
						part="select-button"
					>
						Select
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${v}
						part="cancel-button"
					>
						Cancel
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};I.observedAttributes=["button-text-placeholder","dialog-text","search-placeholder","search-global-placeholder","show-reset","search-min-length"];customElements.define("cosmoz-treenode-button-view",ne(I,{styleSheets:[pe]}));const{expect:n,waitFor:l}=__STORYBOOK_MODULE_TEST__,m=new de(he),xe={title:"CosmozTreenodeButtonView",component:"cosmoz-treenode-button-view",tags:["autodocs"],argTypes:{buttonTextPlaceholder:{control:"text"},dialogText:{control:"text"},searchPlaceholder:{control:"text"},searchGlobalPlaceholder:{control:"text"},searchMinLength:{control:"number"},searchDebounceTimeout:{control:"number"},showReset:{control:"boolean"},nodePath:{control:"text"}},args:{buttonTextPlaceholder:"Select a node",dialogText:"Search or navigate to chosen destination",searchPlaceholder:"Search...",searchGlobalPlaceholder:"Click to search again but globally",searchMinLength:3,searchDebounceTimeout:2e3,showReset:!1,nodePath:""}},$={render:e=>p`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${m}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-button-view");await a("Renders with placeholder text",async()=>{const t=o.shadowRoot?.querySelector("cosmoz-button");n(t).toBeTruthy(),n(t?.textContent?.trim()).toContain("Select a node")}),await a("Has container-type: inline-size for container queries",async()=>{const t=window.getComputedStyle(o);n(t.containerType).toBe("inline-size")}),await a("Shows default icon when no prefix slot content",async()=>{const t=o.shadowRoot?.querySelector(".default-icon");n(t).toBeTruthy();const r=window.getComputedStyle(t);n(r.display).not.toBe("none")})}},f={args:{nodePath:"1.2.3"},render:e=>p`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${m}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-button-view");await a("Button renders selected path",async()=>{await l(()=>{const t=o.shadowRoot?.querySelector("cosmoz-button");n(t?.textContent?.trim()).toContain("C: / Windows / System")})})}},S={args:{showReset:!0,nodePath:"1.2.3"},render:e=>p`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${m}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a,userEvent:o})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is shown when showReset is true and node is selected",async()=>{await l(()=>{const r=t.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');n(r).toBeTruthy()})}),await a("Reset button clears selection",async()=>{const r=t.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');await o.click(r),await l(()=>{n(t.nodePath).toBe("")})})}},P={render:e=>p`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${m}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a,userEvent:o})=>{const t=e.querySelector("cosmoz-treenode-button-view");await a("Opens dialog on button click",async()=>{const r=t.shadowRoot?.querySelector("cosmoz-button");await o.click(r),await l(()=>{const g=t.shadowRoot?.querySelector("dialog");n(g.open).toBe(!0)})}),await a("Closes dialog on cancel button click",async()=>{const r=t.shadowRoot?.querySelector("dialog"),g=r.querySelector('cosmoz-button[part="cancel-button"]');await o.click(g),await l(()=>{n(r.open).toBe(!1)})})}},T={render:e=>p`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${m}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            >
                <span slot="button-before">Custom Icon</span>
            </cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-button-view");await a("Has has-prefix attribute when prefix slot has content",async()=>{await l(()=>{n(o.hasAttribute("has-prefix")).toBe(!0)})}),await a("Hides default icon when prefix slot has content",async()=>{const t=o.shadowRoot?.querySelector(".default-icon"),r=window.getComputedStyle(t);n(r.display).toBe("none")})}},B={args:{showReset:!1,nodePath:"1.2.3"},render:e=>p`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${m}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-treenode-button-view");await a("Reset button is hidden by default",async()=>{const t=o.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');n(t).toBeNull()})}},R={render:e=>p`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=${m}
                .nodePath=${e.nodePath||""}
                button-text-placeholder=${e.buttonTextPlaceholder}
                dialog-text=${e.dialogText}
                search-placeholder=${e.searchPlaceholder}
                search-global-placeholder=${e.searchGlobalPlaceholder}
                .searchMinLength=${e.searchMinLength}
                .searchDebounceTimeout=${e.searchDebounceTimeout}
                ?show-reset=${e.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    `,play:async({canvasElement:e,step:a,userEvent:o})=>{const t=e.querySelector("cosmoz-treenode-button-view"),r=async()=>{const c=t.shadowRoot?.querySelector('cosmoz-button[part="action-open"]');await o.click(c),await l(()=>{const s=t.shadowRoot?.querySelector("dialog");n(s.open).toBe(!0)})},g=()=>t.shadowRoot?.querySelector("cosmoz-treenode-navigator"),b=()=>t.shadowRoot?.querySelector("dialog")?.querySelector('cosmoz-button[part="select-button"]'),z=()=>t.shadowRoot?.querySelector("dialog")?.querySelector('cosmoz-button[part="cancel-button"]');await a("Select button is initially disabled",async()=>{await r(),await l(()=>{const c=b();n(c).toBeTruthy(),n(c.hasAttribute("disabled")).toBe(!0)})}),await a("Single-clicking a node enables the Select button",async()=>{const c=g();await l(()=>{const d=c.shadowRoot?.querySelectorAll(".node");n(d?.length).toBeGreaterThan(0)});const s=c.shadowRoot?.querySelector(".node");await o.click(s),await l(()=>{const d=b();n(d.hasAttribute("disabled")).toBe(!1)})}),await a("Clicking Select confirms selection and closes dialog",async()=>{const c=b();await o.click(c),await l(()=>{const s=t.shadowRoot?.querySelector("dialog");n(s.open).toBe(!1),n(t.nodePath).toBe("1")})}),await a("Cancel after highlighting does not change nodePath",async()=>{const c=t.nodePath;await r();const s=g();await l(()=>{const u=s.shadowRoot?.querySelectorAll(".node");n(u?.length).toBeGreaterThan(0)});const d=s.shadowRoot?.querySelector(".node .icon");await o.click(d),await l(()=>{const u=s.shadowRoot?.querySelectorAll(".node");n(u?.length).toBeGreaterThan(0)});const h=s.shadowRoot?.querySelector(".node");await o.click(h),await l(()=>{const u=b();n(u.hasAttribute("disabled")).toBe(!1)});const y=z();await o.click(y),await l(()=>{const u=t.shadowRoot?.querySelector("dialog");n(u.open).toBe(!1),n(t.nodePath).toBe(c)})}),await a("Double-click on a node selects it and closes dialog",async()=>{await r();const c=g();await l(()=>{const h=c.shadowRoot?.querySelectorAll(".node");n(h?.length).toBeGreaterThan(0)});const s=c.shadowRoot?.querySelector(".node .icon");await o.click(s),await l(()=>{const h=c.shadowRoot?.querySelectorAll(".node");n(h?.length).toBeGreaterThan(0)});const d=c.shadowRoot?.querySelector(".node");await o.dblClick(d),await l(()=>{const h=t.shadowRoot?.querySelector("dialog");n(h.open).toBe(!1),n(t.nodePath).not.toBe("1")})})}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      nodePath: string;
    };
    await step('Renders with placeholder text', async () => {
      const button = el.shadowRoot?.querySelector('cosmoz-button');
      expect(button).toBeTruthy();
      expect(button?.textContent?.trim()).toContain('Select a node');
    });
    await step('Has container-type: inline-size for container queries', async () => {
      const computedStyle = window.getComputedStyle(el);
      expect(computedStyle.containerType).toBe('inline-size');
    });
    await step('Shows default icon when no prefix slot content', async () => {
      const defaultIcon = el.shadowRoot?.querySelector('.default-icon');
      expect(defaultIcon).toBeTruthy();
      const computedStyle = window.getComputedStyle(defaultIcon as Element);
      expect(computedStyle.display).not.toBe('none');
    });
  }
}`,...$.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Button renders selected path', async () => {
      await waitFor(() => {
        const button = el.shadowRoot?.querySelector('cosmoz-button');
        // nodePath '1.2.3' corresponds to 'C: / Windows / System' in the tree
        expect(button?.textContent?.trim()).toContain('C: / Windows / System');
      });
    });
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    showReset: true,
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step,
    userEvent
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      nodePath: string;
    };
    await step('Reset button is shown when showReset is true and node is selected', async () => {
      await waitFor(() => {
        const resetButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');
        expect(resetButton).toBeTruthy();
      });
    });
    await step('Reset button clears selection', async () => {
      const resetButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]') as HTMLElement;
      await userEvent.click(resetButton);
      await waitFor(() => {
        expect(el.nodePath).toBe('');
      });
    });
  }
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step,
    userEvent
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Opens dialog on button click', async () => {
      const openButton = el.shadowRoot?.querySelector('cosmoz-button') as HTMLElement;
      await userEvent.click(openButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    });
    await step('Closes dialog on cancel button click', async () => {
      const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
      const cancelButton = dialog.querySelector('cosmoz-button[part="cancel-button"]') as HTMLElement;
      await userEvent.click(cancelButton);
      await waitFor(() => {
        expect(dialog.open).toBe(false);
      });
    });
  }
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            >
                <span slot="button-before">Custom Icon</span>
            </cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Has has-prefix attribute when prefix slot has content', async () => {
      await waitFor(() => {
        expect(el.hasAttribute('has-prefix')).toBe(true);
      });
    });
    await step('Hides default icon when prefix slot has content', async () => {
      const defaultIcon = el.shadowRoot?.querySelector('.default-icon');
      const computedStyle = window.getComputedStyle(defaultIcon as Element);
      expect(computedStyle.display).toBe('none');
    });
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    showReset: false,
    nodePath: '1.2.3'
  },
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement;
    await step('Reset button is hidden by default', async () => {
      const resetButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-reset"]');
      expect(resetButton).toBeNull();
    });
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <div style="padding: 20px;">
            <cosmoz-treenode-button-view
                .tree=\${tree}
                .nodePath=\${args.nodePath || ''}
                button-text-placeholder=\${args.buttonTextPlaceholder}
                dialog-text=\${args.dialogText}
                search-placeholder=\${args.searchPlaceholder}
                search-global-placeholder=\${args.searchGlobalPlaceholder}
                .searchMinLength=\${args.searchMinLength}
                .searchDebounceTimeout=\${args.searchDebounceTimeout}
                ?show-reset=\${args.showReset}
            ></cosmoz-treenode-button-view>
        </div>
    \`,
  play: async ({
    canvasElement,
    step,
    userEvent
  }) => {
    const el = canvasElement.querySelector('cosmoz-treenode-button-view') as HTMLElement & {
      nodePath: string;
    };
    const openDialog = async () => {
      const openButton = el.shadowRoot?.querySelector('cosmoz-button[part="action-open"]') as HTMLElement;
      await userEvent.click(openButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(true);
      });
    };
    const getNavigator = () => el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;
    const getSelectButton = () => el.shadowRoot?.querySelector('dialog')?.querySelector('cosmoz-button[part="select-button"]') as HTMLButtonElement;
    const getCancelButton = () => el.shadowRoot?.querySelector('dialog')?.querySelector('cosmoz-button[part="cancel-button"]') as HTMLElement;
    await step('Select button is initially disabled', async () => {
      await openDialog();
      await waitFor(() => {
        const selectButton = getSelectButton();
        expect(selectButton).toBeTruthy();
        expect(selectButton.hasAttribute('disabled')).toBe(true);
      });
    });
    await step('Single-clicking a node enables the Select button', async () => {
      const navigator = getNavigator();

      // Wait for nodes to render and click the first one
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });
      const firstNode = navigator.shadowRoot?.querySelector('.node') as HTMLElement;
      await userEvent.click(firstNode);
      await waitFor(() => {
        const selectButton = getSelectButton();
        expect(selectButton.hasAttribute('disabled')).toBe(false);
      });
    });
    await step('Clicking Select confirms selection and closes dialog', async () => {
      const selectButton = getSelectButton();
      await userEvent.click(selectButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should be updated (C: drive has path '1')
        expect(el.nodePath).toBe('1');
      });
    });
    await step('Cancel after highlighting does not change nodePath', async () => {
      // Store current nodePath
      const previousNodePath = el.nodePath;
      await openDialog();
      const navigator = getNavigator();

      // Navigate into C: drive first to see children
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });

      // Click arrow to navigate into C: drive
      const cDriveArrow = navigator.shadowRoot?.querySelector('.node .icon') as HTMLElement;
      await userEvent.click(cDriveArrow);

      // Wait for children to render and highlight a different node
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });
      const childNode = navigator.shadowRoot?.querySelector('.node') as HTMLElement;
      await userEvent.click(childNode);

      // Verify Select button is enabled
      await waitFor(() => {
        const selectButton = getSelectButton();
        expect(selectButton.hasAttribute('disabled')).toBe(false);
      });

      // Click Cancel
      const cancelButton = getCancelButton();
      await userEvent.click(cancelButton);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should remain unchanged
        expect(el.nodePath).toBe(previousNodePath);
      });
    });
    await step('Double-click on a node selects it and closes dialog', async () => {
      await openDialog();
      const navigator = getNavigator();

      // Navigate into C: drive first
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });

      // Click arrow to navigate into C: drive
      const cDriveArrow = navigator.shadowRoot?.querySelector('.node .icon') as HTMLElement;
      await userEvent.click(cDriveArrow);

      // Wait for children and double-click a node (e.g., Windows folder)
      await waitFor(() => {
        const nodes = navigator.shadowRoot?.querySelectorAll('.node');
        expect(nodes?.length).toBeGreaterThan(0);
      });
      const childNode = navigator.shadowRoot?.querySelector('.node') as HTMLElement;
      await userEvent.dblClick(childNode);
      await waitFor(() => {
        const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
        expect(dialog.open).toBe(false);
        // nodePath should be updated to the double-clicked node
        expect(el.nodePath).not.toBe('1'); // Changed from initial C: selection
      });
    });
  }
}`,...R.parameters?.docs?.source}}};const ve=["Default","WithPreselectedNode","WithShowReset","DialogInteraction","WithCustomPrefixIcon","ResetButtonHiddenByDefault","SelectButtonInteraction"];export{$ as Default,P as DialogInteraction,B as ResetButtonHiddenByDefault,R as SelectButtonInteraction,T as WithCustomPrefixIcon,f as WithPreselectedNode,S as WithShowReset,ve as __namedExportsOrder,xe as default};
