import { css } from '@pionjs/pion';

export default css`
	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 2);
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 2);
		margin: 0 16px;
	}

	.path {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 2px;
		min-height: var(--cz-text-sm-line-height);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-tertiary);
	}

	.slash {
		color: var(--cz-color-text-quaternary);
	}

	.crumb {
		all: unset;
		cursor: pointer;
		padding: 0 4px;
		border-radius: var(--cz-radius-xs);
		font-weight: var(--cz-font-weight-medium);
	}

	.crumb:hover {
		color: var(--cz-color-text-secondary-hover);
		background: var(--cz-color-bg-primary-hover);
	}

	.crumb:focus-visible {
		box-shadow: var(--cz-focus-ring);
	}

	.crumb[aria-current] {
		color: var(--cz-color-text-primary);
		font-weight: var(--cz-font-weight-semibold);
	}

	.items {
		height: var(--cosmoz-treenode-navigator-list-height, 50vh);
		margin: 0 8px;
	}

	.empty {
		margin: 0 16px;
		padding-block: calc(var(--cz-spacing) * 4);
		color: var(--cz-color-text-tertiary);
		font-size: var(--cz-text-sm);
		text-align: center;
	}
`;
