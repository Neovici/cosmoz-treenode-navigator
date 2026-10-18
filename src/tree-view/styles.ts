import { css } from '@pionjs/pion';

// Rows follow the Untitled UI tree view and the main menu's gray scale:
// rest, hover and selected are three steps of one gray, and indent guides
// run through the full row height so they read as continuous lines.
export default css`
	:host {
		display: block;
		overflow: hidden;
		font-family: var(--cz-font-body, inherit);
		--row-height: 32px;
		--indent: 20px;
	}

	:host([size='md']) {
		--row-height: 40px;
	}

	.tree {
		height: 100%;
		overflow: auto;
		outline: none;
	}

	.row {
		display: flex;
		align-items: stretch;
		width: 100%;
		height: var(--row-height);
		box-sizing: border-box;
		cursor: pointer;
		user-select: none;
		outline: none;
		color: var(--cz-color-text-secondary);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
	}

	:host([size='md']) .row {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
	}

	.guide {
		flex: 0 0 var(--indent);
		position: relative;
	}

	.guide::before {
		content: '';
		position: absolute;
		inset-block: 0;
		inset-inline-start: calc(var(--indent) / 2 + 4px);
		border-inline-start: 1px solid var(--cz-color-border-secondary);
	}

	.content {
		flex: 1;
		min-width: 0;
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 1);
		margin-block: 1px;
		padding-inline: calc(var(--cz-spacing) * 1) calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-sm);
		transition:
			background 0.15s,
			color 0.15s;
	}

	.row:hover .content {
		background: var(--cz-color-bg-primary-hover);
		color: var(--cz-color-text-secondary-hover);
	}

	.row[aria-selected='true'] .content {
		background: var(--cz-color-bg-tertiary);
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-semibold);
	}

	.row:focus-visible .content {
		box-shadow: var(--cz-focus-ring);
	}

	.toggle {
		flex: 0 0 var(--indent);
		height: var(--indent);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--cz-radius-xs);
		color: var(--cz-color-fg-quaternary);
	}

	.toggle svg {
		transition: rotate 0.15s ease-in-out;
	}

	.row[aria-expanded='true'] .toggle svg {
		rotate: 90deg;
	}

	.row[aria-expanded] .toggle:hover {
		color: var(--cz-color-text-secondary);
		background: var(--cz-color-bg-tertiary);
	}

	.icon {
		display: inline-flex;
		flex: none;
		color: var(--cz-color-fg-quaternary);
	}

	.row[aria-selected='true'] .icon {
		color: var(--cz-color-text-primary);
	}

	.label {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	@media (prefers-reduced-motion: reduce) {
		.content,
		.toggle svg {
			transition: none;
		}
	}
`;
