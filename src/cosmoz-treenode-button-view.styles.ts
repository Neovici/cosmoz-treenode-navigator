import { truncate } from '@neovici/cosmoz-tokens/truncate';
import { css } from '@pionjs/pion';

export default css`
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
		${truncate}
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
		justify-content: space-between;
		gap: calc(var(--cz-spacing) * 3);
		padding: calc(var(--cz-spacing) * 5) calc(var(--cz-spacing) * 5)
			calc(var(--cz-spacing) * 4);
		cursor: move;
		user-select: none;
	}

	dialog h1 {
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
`;
