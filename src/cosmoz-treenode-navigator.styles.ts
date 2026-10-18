import { css } from '@pionjs/pion';

export default css`
	:host {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 3);
		min-width: 0;
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: calc(var(--cz-spacing) * 2);
		margin: 0 calc(var(--cz-spacing) * 5);
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
		height: var(--cosmoz-treenode-navigator-list-height, min(44dvh, 24rem));
		margin: 0 8px;
	}

	.status {
		margin: 0 calc(var(--cz-spacing) * 5);
		min-height: var(--cz-text-sm-line-height);
		padding-block: 0 calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-tertiary);
		font-size: var(--cz-text-sm);
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
	}
	.status:empty {
		display: none;
	}
	.retry {
		border: 0;
		padding: 0;
		background: none;
		font: inherit;
		color: var(--cz-color-text-brand-primary);
		cursor: pointer;
		text-decoration: underline;
	}
	.retry:focus-visible {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	@media (max-width: 480px) {
		.header,
		.status {
			margin-inline: calc(var(--cz-spacing) * 4);
		}
	}
`;
