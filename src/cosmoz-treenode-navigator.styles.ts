import { css } from '@pionjs/pion';

export default css`
	:host {
		--cosmoz-treenode-navigator-select-node-icon-color: var(
			--primary-color,
			white
		);
		--cosmoz-treenode-navigator-list-item-focused-color: #f0f8ff;
	}

	.header {
		margin: 0 16px;
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
	}

	.items {
		height: var(--cosmoz-treenode-navigator-list-height, 50vh);
		width: 100%;
	}

	.section {
		background-color: var(--cz-bg-color, #f5f5f5);
		padding: 5px;
	}

	.pointer {
		cursor: pointer;
	}

	.item {
		width: 100%;
	}

	.node {
		align-items: center;
		display: flex;
		font-family: 'Roboto', 'Noto', sans-serif;
		font-size: 16px;
		font-weight: 400;
		height: 40px;
		line-height: 24px;
		padding: 6px 12px 6px 16px;
		cursor: pointer;
	}

	.name {
		flex: auto;
	}

	.icon {
		box-sizing: border-box;
		cursor: pointer;
		display: inline-block;
		height: 40px;
		line-height: 1;
		outline: none;
		padding: 8px;
		position: relative;
		user-select: none;
		width: 40px;
		z-index: 0;
	}

	.node.selected {
		background-color: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
		transition: background-color 0.2s ease-out;
	}

	.node.selected .icon svg {
		fill: var(--cosmoz-treenode-navigator-select-node-icon-color);
		transition: color 0.8s ease-out;
	}

	.btn-ghost {
		background: transparent;
		border: none;
		cursor: pointer;
		margin: 0 20px;
		padding: 0.7em 0.57em;
		width: calc(100% - 50px);
		border: solid 1px #a4abae;
		border-radius: 16px;
		font-size: 14px;
		font-family: inherit;
	}

	.path > .pointer:hover,
	.path > .pointer:has(~ .pointer:hover) {
		text-decoration: underline;
	}
`;
