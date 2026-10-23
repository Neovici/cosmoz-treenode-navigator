import{a as P,s as Q,c as M,b as L,d as y,n as C,u as j,e as q,f as F,g as st,o as r,h as U,i as K,l as ct}from"./tree-view-sOV-spM3.js";import{b as u,e as lt,A as W,w as dt,t as T}from"./iframe-f4Wa272W.js";import{t as ut,u as pt}from"./cosmoz-treenode-navigator-Dy7Ie33W.js";const ht=P`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,gt=P`
	:host {
		display: block;
		container-type: inline-size;
	}

	h1,
	h2 {
		font-weight: 500;
	}

	nav {
		display: flex;
		gap: 8px;
	}

	cosmoz-tooltip {
		display: block;
		flex: 1;
		min-width: 0;
	}

	cosmoz-tooltip > cosmoz-button::part(button) {
		justify-content: flex-start;
	}

	.default-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.path-text {
		${ht}
		direction: rtl;
		flex: 1;
		min-width: 0;
	}

	/* Too narrow for the label: the icon alone, centred, however narrow the
	   container gets — a 44px sidebar rail included. */
	@container (max-width: 80px) {
		.path-text {
			display: none;
		}
		cosmoz-tooltip > cosmoz-button::part(button) {
			justify-content: center;
			padding-inline: 0;
		}
	}

	dialog {
		width: min(36rem, calc(100vw - 32px));
		max-height: calc(100dvh - 32px);
		box-sizing: border-box;
		padding: 0;
		border-radius: var(--cz-radius-xl);
		border: 1px solid var(--cz-color-border-secondary);
		background: var(--cz-color-bg-primary);
		color: var(--cz-color-text-primary);
		box-shadow: var(--cz-shadow-xl);
	}

	dialog::backdrop {
		background: color-mix(in srgb, var(--cz-color-bg-overlay) 70%, transparent);
	}

	dialog > header {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 4);
		padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 4)
			calc(var(--cz-spacing) * 4) calc(var(--cz-spacing) * 5);
		cursor: move;
		user-select: none;
	}

	.featured-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
		width: 40px;
		height: 40px;
		box-sizing: border-box;
		border: 1px solid var(--cz-color-border-primary);
		border-radius: var(--cz-radius-md);
		box-shadow: var(--cz-shadow-xs);
		color: var(--cz-color-fg-secondary);
	}

	dialog h1 {
		flex: 1;
		margin: 0;
		font-size: var(--cz-text-lg);
		line-height: var(--cz-text-lg-line-height);
		font-weight: var(--cz-font-weight-semibold);
	}

	dialog > footer {
		padding: calc(var(--cz-spacing) * 4) calc(var(--cz-spacing) * 5);
		border-top: 1px solid var(--cz-color-border-secondary);
	}

	dialog > footer > div {
		display: flex;
		flex-direction: row-reverse;
		gap: calc(var(--cz-spacing) * 2);
		justify-content: flex-start;
	}

	@media (max-width: 480px) {
		dialog {
			width: calc(100vw - 16px);
			max-height: calc(100dvh - 16px);
		}
		dialog > header,
		dialog > footer {
			padding: calc(var(--cz-spacing) * 4);
		}
	}
`,_=Q(P`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),vt=P`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;customElements.define("cosmoz-tooltip-content",M(()=>u`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[_,vt]}));const N=Q(P`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),X=(t,e,o)=>lt(u`<cosmoz-tooltip-content>
			${C(e,()=>u`<strong slot="heading">${e}</strong>`)}
			${C(o,()=>u`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),bt=(t,e)=>{const{for:o,heading:a,description:s,placement:h="top",delay:b=300,disabled:c=!1}=e,l=L(),m=!!(a||s)&&!c;y(()=>{if(!o||!m)return;const i=t.getRootNode(),d=i.adoptedStyleSheets??[];d.includes(N)||(i.adoptedStyleSheets=[...d,N]);const n=document.createElement("div");n.setAttribute("popover","manual"),n.setAttribute("role","tooltip"),n.classList.add("cosmoz-tooltip-popover"),t.after(n),l.current=n,X(n,a,s);const f=`[name="${o}"]`,A=`--tooltip-anchor-${o}`;let w;const z=v=>{c||(clearTimeout(w),v.style.anchorName=A,n.style.positionAnchor=A,n.style.positionArea=h,w=window.setTimeout(()=>n.showPopover(),b))},E=()=>{clearTimeout(w),n.hidePopover()},S=v=>{const x=v.target.closest?.(f);x&&z(x)},R=v=>{const x=v.target.closest?.(f);if(!x)return;const B=v.relatedTarget;B&&x.contains(B)||E()},D=v=>{const x=v.target.closest?.(f);x&&z(x)},$=v=>{v.target.closest?.(f)&&E()};return i.addEventListener("pointerover",S),i.addEventListener("pointerout",R),i.addEventListener("focusin",D),i.addEventListener("focusout",$),()=>{clearTimeout(w),i.removeEventListener("pointerover",S),i.removeEventListener("pointerout",R),i.removeEventListener("focusin",D),i.removeEventListener("focusout",$),n.hidePopover(),n.remove(),l.current=void 0}},[o,h,b,m]),y(()=>{!o||!l.current||X(l.current,a,s)},[a,s,o]),y(()=>{!c||!l.current||l.current.hidePopover()},[c])},mt=t=>{const[e,o]=j(!1);return y(()=>{const a=t.current;if(!a)return;const s=()=>{o(a.assignedElements().length>0)};return s(),a.addEventListener("slotchange",s),()=>a.removeEventListener("slotchange",s)},[t.current]),e},ft=P`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,zt=t=>{const{heading:e,description:o,for:a,placement:s="top",delay:h=300,disabled:b=!1}=t,c=L(),l=L(),p=L(),m=mt(p),d=!!(e||o||m)&&!b,n=q(()=>{d&&(clearTimeout(l.current),l.current=window.setTimeout(()=>{c.current?.showPopover()},h))},[h,d]);y(()=>{b&&(clearTimeout(l.current),c.current?.hidePopover())},[b]);const f=q(()=>{clearTimeout(l.current),c.current?.hidePopover()},[]);return y(()=>{if(a)return;const A=w=>{const z=w.relatedTarget;z&&t.contains(z)||f()};return t.addEventListener("pointerover",n),t.addEventListener("pointerout",A),()=>{t.removeEventListener("pointerover",n),t.removeEventListener("pointerout",A)}},[a,n,f]),bt(t,{for:a,heading:e,description:o,placement:s,delay:h,disabled:b}),a?W:d?u`
		<slot @focusin=${n} @focusout=${f}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${F(c)}
		>
			<cosmoz-tooltip-content>
				${C(e,()=>u`<strong slot="heading">${e}</strong>`)}
				${C(o,()=>u`<p slot="description">${o}</p>`)}
				<slot name="content" ${F(p)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:u`
			<slot></slot>
			<slot name="content" ${F(p)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",M(zt,{styleSheets:[_,N,ft],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const V=(t,e)=>{t.type="submit",t.hidden=!0,t.disabled=!!(e.disabled||e.formDisabled),t.name=e.name??"",t.value=e.value??"";for(const o of["form","formaction","formenctype","formmethod","formnovalidate","formtarget"])e.hasAttribute(o)?t.setAttribute(o,e.getAttribute(o)):t.removeAttribute(o)};class xt extends HTMLElement{static formAssociated=!0;#o=this.attachInternals();#t;get form(){return this.#o.form}syncFormButton(){if(!this.isConnected||this.type!=="submit"||this.href!=null){this.#t?.remove(),this.#t=void 0;return}this.#t?V(this.#t,this):(this.#t=document.createElement("button"),V(this.#t,this),this.append(this.#t))}formAssociatedCallback(){this.syncFormButton()}formDisabledCallback(e){this.formDisabled=e,this.syncFormButton()}connectedCallback(){this.addEventListener("click",this.#e),this.syncFormButton()}disconnectedCallback(){this.removeEventListener("click",this.#e),this.#t?.remove(),this.#t=void 0}#e=e=>{this.#t&&e.composedPath().includes(this.#t)||setTimeout(()=>{if(e.defaultPrevented||!this.isConnected||this.disabled||this.formDisabled||this.href!=null)return;const o=this.form;o&&(this.type==="reset"?o.reset():this.type==="submit"&&(this.syncFormButton(),this.#t&&o.requestSubmit(this.#t)))},0)}}const yt=P`
	:host {
		display: inline-flex;

		--_wash: var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		--_wash-strong: var(
			--cz-color-bg-glass-hover,
			var(--cz-color-bg-secondary-hover)
		);
		--_hairline: var(--cz-color-border-glass, var(--cz-color-border-primary));
		--_sheen: var(--cz-glass-action-sheen, var(--cz-action-sheen, none));
		--_lift: var(--cz-shadow-xs);
		--_pressed-bg: var(
			--cz-color-bg-glass-action-pressed,
			var(--cz-color-bg-action-solid-hover)
		);
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 6px;
		width: 100%;
		height: var(--cz-control-height-md);
		padding: 0 14px;
		border: 1px solid transparent;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: calc((var(--cz-text-sm) + var(--cz-text-xs)) / 2);
		font-weight: var(--cz-font-weight-regular);
		line-height: 1.25;
		letter-spacing: normal;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		outline: 2px solid transparent;
		outline-offset: 2px;
		transition:
			background-color 120ms ease-out,
			color 120ms ease-out,
			box-shadow 120ms ease-out,
			outline-color 120ms ease-out;

		background:
			var(
				--cz-glass-button-action-sheen,
				var(--cz-glass-action-sheen, var(--cz-action-sheen, none))
			),
			var(--cz-color-bg-glass-action, var(--cz-color-bg-action-solid));
		border-color: var(--cz-color-border-glass-action, transparent);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
		color: var(--cz-color-text-on-glass-action, var(--cz-color-text-on-action));
		box-shadow: var(
			--cz-shadow-glass-button-action,
			var(--cz-shadow-glass-action, var(--cz-shadow-action))
		);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-action-hover,
				var(--cz-color-bg-action-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(iron-icon) {
		pointer-events: none;
		width: 20px;
		height: 20px;
		flex: none;
	}

	::slotted(svg) {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 12px;
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 14px;
		height: 14px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 16px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 18px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: 18px;
		height: 18px;
	}

	:host([icon-only]) .button {
		border-radius: var(--cz-radius-full);
		width: var(--cz-control-height-md);
		padding: 0;
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
	}

	:host([icon-only]) ::slotted(svg) {
		margin: 0;
	}

	/* Preserve the supplied geometry of standalone icons. */
	:host([icon-only]) ::slotted(svg[width]) {
		width: auto;
	}

	:host([icon-only]) ::slotted(svg[height]) {
		height: auto;
	}

	/* Variants */

	:host([variant='secondary']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-pressed,
			var(--cz-color-bg-secondary-hover)
		);
		background:
			var(--cz-glass-button-sheen, var(--cz-glass-sheen, none)),
			var(
				--cz-color-bg-glass-button,
				var(--cz-color-bg-glass, var(--cz-color-bg-tertiary))
			);
		color: var(--cz-color-text-primary);
		border-color: var(
			--cz-color-border-glass-button,
			var(--cz-color-border-glass, var(--cz-color-border-primary))
		);
		box-shadow: var(
			--cz-shadow-glass-button,
			var(--cz-shadow-glass, var(--cz-shadow-xs))
		);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-hover,
				var(--cz-color-bg-secondary-hover)
			);
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--cz-color-bg-tertiary);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='tertiary']) .button:active {
		background: var(--cz-color-bg-quaternary);
		box-shadow: none;
	}

	:host([variant='destructive']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-destructive-pressed,
			var(--cz-color-bg-error-solid-hover)
		);
		background:
			var(--_sheen),
			var(--cz-color-bg-glass-destructive, var(--cz-color-bg-error-solid));
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-destructive-hover,
				var(--cz-color-bg-error-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-link);
		box-shadow: none;
		border-radius: var(--cz-radius-xs);
		outline-offset: 3px;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 3px;
		transition-property: color, text-decoration-color, outline-color;

		&:hover {
			color: var(--cz-color-text-link-hover);
			text-decoration-color: currentColor;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-primary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	:host(:not([variant='tertiary']):not([variant='link']))
		.button:active:not(:disabled) {
		background-color: var(--_pressed-bg);
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--cz-color-bg-quaternary);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button,
	:host(:disabled) .button,
	.button:disabled {
		opacity: var(--cz-opacity-disabled, 0.45);
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	@media (forced-colors: active) {
		:host .button,
		:host([variant]) .button {
			border-color: ButtonText;
			background: ButtonFace;
			color: ButtonText;
		}
		:host([aria-pressed='true']) .button {
			outline: 2px solid Highlight;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}
	}
`,wt=["variant","size","disabled","full-width","icon-only","tooltip","tooltip-placement","type","value","href","target","rel","download","aria-expanded","aria-label","title","aria-pressed","aria-controls","aria-haspopup","aria-description","aria-busy","aria-current","control-role","tabindex","name","form","formaction","formenctype","formmethod","formnovalidate","formtarget"],$t=t=>{const{disabled:e=!1,tooltip:o,tooltipPlacement:a,type:s="button",href:h,target:b,rel:c,download:l}=t,p=!!(e||t.formDisabled);y(()=>{t.syncFormButton()}),y(()=>{const d=n=>{(t.disabled||t.formDisabled)&&(n.preventDefault(),n.stopImmediatePropagation())};return t.addEventListener("click",d,{capture:!0}),()=>t.removeEventListener("click",d,{capture:!0})},[t.disabled,t.formDisabled]),st(()=>{const d=t.shadowRoot?.querySelector(".button");d&&"ariaControlsElements"in d&&(d.ariaControlsElements=t.ariaControlsElements)});const m=u`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,i=C(h!=null,()=>u`
			<a
				role=${r(t.controlRole)}
				tabindex=${r(t.getAttribute("tabindex")??void 0)}
				aria-controls=${r(t.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${r(t.getAttribute("aria-haspopup")??void 0)}
				aria-description=${r(t.getAttribute("aria-description")??void 0)}
				aria-busy=${r(t.getAttribute("aria-busy")??void 0)}
				aria-current=${r(t.getAttribute("aria-current")??void 0)}
				href=${h}
				class="button"
				part="button"
				aria-disabled=${p?"true":W}
				aria-expanded=${r(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${r(t.getAttribute("aria-label")??(t.iconOnly&&t.title?t.title:void 0))}
				target=${r(b)}
				rel=${r(c)}
				download=${r(l)}
				>${m}</a
			>
		`,()=>u`
			<button
				role=${r(t.controlRole)}
				tabindex=${r(t.getAttribute("tabindex")??void 0)}
				aria-controls=${r(t.getAttribute("aria-controls")??void 0)}
				aria-haspopup=${r(t.getAttribute("aria-haspopup")??void 0)}
				aria-description=${r(t.getAttribute("aria-description")??void 0)}
				aria-busy=${r(t.getAttribute("aria-busy")??void 0)}
				aria-current=${r(t.getAttribute("aria-current")??void 0)}
				type=${s}
				class="button"
				part="button"
				?disabled=${p}
				aria-expanded=${r(t.getAttribute("aria-expanded")??void 0)}
				aria-label=${r(t.getAttribute("aria-label")??(t.iconOnly&&t.title?t.title:void 0))}
				aria-pressed=${r(t.getAttribute("aria-pressed")??void 0)}
			>
				${m}
			</button>
		`);return u`<cosmoz-tooltip
		heading=${r(o??void 0)}
		placement=${r(a??void 0)}
		?disabled=${p}
	>
		${i}
	</cosmoz-tooltip>`};customElements.define("cosmoz-button",M($t,{baseElement:xt,observedAttributes:wt,styleSheets:[_,yt],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const G=({slot:t,title:e,className:o,width:a="24",height:s="24",styles:h}={})=>u`
  <svg
    slot=${r(t)}
    class=${`x-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${s}
    style=${r(h)}
  >
    ${C(e,()=>dt`<title>${e}</title>`)}
    <path d="M17 7 7 17M7 7l10 10" />
  </svg>
`,kt=(t,e)=>{const o=a=>{if(a.key===t&&e instanceof Function)return a.preventDefault(),e()};y(()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}))},J=u`<svg
	class="default-icon"
	width="20"
	height="20"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="7" cy="7" r="2" />
	<circle cx="17" cy="17" r="2" />
	<path d="M7 9v3c0 1.66 1.34 3 3 3h7" />
</svg>`,Z=({tree:t,source:e,showReset:o=!1,searchMinLength:a=3,searchDebounceTimeout:s=500,variant:h="secondary",size:b})=>{const c=L(null),l=L(),[p,m]=U("nodePath",""),[i,d]=U("opened",!1),[n,f]=j(""),[A,w]=j(!1),z=K(()=>e??ut(t),[e,t]),{nodes:E}=pt(()=>p?z.getPath(p):[],[z,p]),S=K(()=>!Array.isArray(E)||E.length===0?T("Select a node"):E.filter(g=>g).map(g=>z.label(g)).join(" / "),[E,z]);y(()=>{i?c.current?.showModal():c.current?.close()},[i]);const R=()=>{m("")},D=()=>d(!0),$=()=>{f(""),d(!1),w(!0),clearTimeout(l.current),l.current=setTimeout(()=>w(!1),500)};kt("Escape",i?$:void 0);const v=g=>{const k=c.current;if(!k)return;const et=g.clientX,ot=g.clientY,O=k.getBoundingClientRect(),rt=O.left,nt=O.top,H=Y=>{const at=Y.clientX-et,it=Y.clientY-ot;k.style.left=`${rt+at}px`,k.style.top=`${nt+it}px`,k.style.margin="0"},I=()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",I)},x=g=>{g.preventDefault();const k=g.detail.value;k&&(m(k),$())},B=ct(f),tt=()=>{n&&(m(n),$())};return u`
		<nav part="actions">
			<cosmoz-tooltip
				placement="right"
				.description=${S}
				.delay=${1e3}
				.disabled=${A}
			>
				<cosmoz-button
					variant=${h}
					size=${r(b)}
					full-width
					data-testid="open-button"
					@click=${D}
					part="action-open"
					exportparts="button:action-open-button"
				>
					<slot name="prefix" slot="prefix">${J}</slot>
					<div class="path-text">
						<span>${S}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
			</cosmoz-tooltip>
			${C(o&&!!p,()=>u`<cosmoz-button
						variant="tertiary"
						@click=${R}
						data-testid="reset-button"
						part="action-reset"
					>
						${G({slot:"prefix"})}
					</cosmoz-button>`)}
		</nav>

		<dialog
			part="dialog"
			data-testid="dialog"
			aria-labelledby="node-picker-heading"
			${F(g=>{c.current=g})}
		>
			<header part="header" @mousedown=${v}>
				<span class="featured-icon" aria-hidden="true">${J}</span>
				<h1 id="node-picker-heading" part="heading">${T("Select a node")}</h1>
				<cosmoz-button
					variant="tertiary"
					size="sm"
					icon-only
					aria-label=${T("Close")}
					@mousedown=${g=>g.stopPropagation()}
					@click=${$}
					>${G()}</cosmoz-button
				>
			</header>
			<main part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					.nodePath=${p}
					@node-path-changed=${x}
					@highlighted-node-path-changed=${B}
					.searchMinLength=${a}
					.searchDebounceTimeout=${s}
					.tree=${t}
					.source=${z}
					.opened=${i}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer part="footer">
				<div>
					<cosmoz-button
						variant="primary"
						?disabled=${!n}
						@click=${tt}
						data-testid="select-button"
						part="select-button"
					>
						${T("Select")}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${$}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${T("Cancel")}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`};Z.observedAttributes=["show-reset","search-min-length","variant","size"];customElements.define("cosmoz-treenode-button-view",M(Z,{styleSheets:[gt]}));
