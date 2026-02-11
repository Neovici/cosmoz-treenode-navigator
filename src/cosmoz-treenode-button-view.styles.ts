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

	cosmoz-tooltip > cosmoz-button {
		min-width: 50px;
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

	@container (max-width: 80px) {
		.path-text {
			display: none;
		}
	}

	dialog {
		width: 550px;
		min-width: 250px;
		padding: 0;
		border-radius: 10px;
		border: none;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	dialog > header {
		padding: 10px 10px 0 10px;
		cursor: move;
		user-select: none;
	}

	dialog h1 {
		margin-bottom: 2rem;
		padding: 0 8px;
		font-size: 1.25rem;
		font-weight: normal;
		color: var(--cz-text-color, inherit);
	}

	dialog > footer {
		padding: 0 10px 10px 10px;
		text-align: right;
	}

	dialog > footer > div {
		display: flex;
		gap: 8px;
		justify-content: flex-end;
		margin: 0;
	}
`;
