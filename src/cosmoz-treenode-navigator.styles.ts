import { css } from '@pionjs/pion';

export default css`
	.header {
		margin: 0 16px;
		color: var(--cz-text-color, inherit);
	}

	.header a {
		text-decoration: none;
		color: inherit;
	}

	.icon {
		display: inline-block;
		position: relative;
		padding: 8px;
		outline: none;
		user-select: none;
		cursor: pointer;
		z-index: 0;
		line-height: 1;
		width: 40px;
		height: 40px;
		box-sizing: border-box;
		color: var(--cosmoz-treenode-navigator-icon-color, currentColor);
	}

	.icon svg {
		fill: currentColor;
	}

	.path {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin: 0;
	}

	.slash {
		margin: 0 2px;
	}

	.pointer {
		cursor: pointer;
	}

	.items {
		height: var(--cosmoz-treenode-navigator-list-height, 50vh);
		width: 100%;
		overflow-y: auto;
	}

	.section {
		background-color: var(--cz-bg-color, var(--cz-color-bg-secondary));
		padding: 5px;
	}

	.item {
		width: 100%;
	}

	.node {
		align-items: center;
		display: flex;
		font-size: 16px;
		font-weight: 400;
		color: var(--cz-text-color, inherit);
		height: 40px;
		line-height: 24px;
		padding: 6px 12px 6px 16px;
		cursor: pointer;
	}

	.name {
		flex: auto;
	}

	.node.selected {
		background-color: var(
			--cosmoz-listbox-active-color,
			var(--cz-color-bg-tertiary)
		);
		transition: background-color 0.2s ease-out;
	}

	.node.selected .icon svg {
		fill: var(
			--cosmoz-treenode-navigator-select-node-icon-color,
			var(--cz-color-fg-secondary)
		);
		transition: color 0.8s ease-out;
	}

	.path > .pointer:hover,
	.path > .pointer:has(~ .pointer:hover) {
		text-decoration: underline;
	}

	.global-search {
		margin-block: calc(var(--cz-spacing) * 4);
	}

	.status {
		padding: 6px 16px;
		color: var(--cosmoz-treenode-navigator-status-color, #757575);
		font-size: 13px;
	}
`;
