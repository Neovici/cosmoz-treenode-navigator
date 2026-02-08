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

	button {
		position: relative;
		overflow: hidden;
		outline: none;

		cursor: pointer;
		border-radius: 500px;
	}

	button:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 5px;
		height: 5px;
		background: rgba(189, 195, 199, 0.5);
		opacity: 0;
		border-radius: 100%;
		transform: scale(1, 1) translate(-50%);
		transform-origin: 50% 50%;
	}

	@keyframes ripple {
		0% {
			transform: scale(0, 0);
			opacity: 1;
		}
		20% {
			transform: scale(25, 25);
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: scale(40, 40);
		}
	}

	button:not(:disabled):active::after {
		animation: ripple 1s ease-out;
	}

	.actions {
		display: flex;
		gap: 8px;
	}

	cosmoz-button {
		flex: 1;
		min-width: 0;
	}

	cosmoz-button::part(button) {
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

	.action-reset {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 10px 16px;

		color: var(--cosmoz-treenode-actions-button-text-color, #101010);
		font: inherit;
		font-size: inherit;
		line-height: inherit;

		background-color: var(
			--cosmoz-treenode-actions-button-background-color,
			white
		);
		border: 0px none rgb(16, 16, 16);
		box-shadow: var(
			--cosmoz-treenode-actions-button-box-shadow,
			0 2px 4px 0 #e5e5e5
		);

		transition-behavior: normal, normal;
		transition-delay: 0s, 0s;
		transition-duration: 0.28s, 0.3s;
		transition-property: box-shadow, background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), ease;
	}

	.action-reset:hover {
		box-shadow: var(
			--cosmoz-treenode-actions-button-box-shadow-hover,
			0 2px 3px 0 rgb(0 0 0 / 30%)
		);
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
		margin: 0;
	}

	.dialog-footer-button {
		margin: 0 0.25rem;
		padding: 8px 14px;
		background: none;
		border: 1px solid rgb(164, 171, 174);
		font-size: 15px;
		cursor: pointer;
		user-select: none;
	}

	.dialog-footer-button:not(:disabled):active {
		border: 1px outset rgb(164, 171, 174);
	}

	.dialog-footer-button:disabled {
		color: #a8a8a8;
		background-color: #f2f2f2;
		cursor: default;
	}

	.dialog-footer-button[part='select-button'] {
		background: var(--cosmoz-button-primary-bg-color, #2196f3);
		color: var(--cosmoz-button-primary-color, #fff);
		border-color: var(--cosmoz-button-primary-bg-color, #2196f3);
	}

	.dialog-footer-button[part='select-button']:not(:disabled):hover {
		background: var(--cosmoz-button-primary-hover-bg-color, #1976d2);
		border-color: var(--cosmoz-button-primary-hover-bg-color, #1976d2);
	}

	.dialog-footer-button[part='select-button']:not(:disabled):active {
		background: hsl(
			from var(--cosmoz-button-primary-hover-bg-color, #1976d2) h s calc(l - 5)
		);
	}

	.dialog-footer-button[part='cancel-button'] {
		background: var(--cosmoz-button-secondary-bg-color, white);
		color: var(--cosmoz-button-secondary-color, #000);
		border: 1px solid var(--cosmoz-button-secondary-border-color, #ccc);
	}

	.dialog-footer-button[part='cancel-button']:hover {
		background: var(--cosmoz-button-secondary-hover-bg-color, #f5f5f5);
	}

	.dialog-footer-button[part='cancel-button']:active {
		background: hsl(
			from var(--cosmoz-button-secondary-hover-bg-color, #f5f5f5) h s
				calc(l - 5)
		);
	}
`;
