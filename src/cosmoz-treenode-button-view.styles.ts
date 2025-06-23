import { css } from '@pionjs/pion';

export default css`
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
	}

	.actions button {
		display: inline-block;

		padding: 10px 16px 10px 16px;
		margin: 14px 14px 12px 14px;

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

	.actions button:hover {
		box-shadow: var(
			--cosmoz-treenode-actions-button-box-shadow-hover,
			0 2px 3px 0 rgb(0 0 0 / 30%)
		);
	}

	.action-open {
		flex: auto;
	}

	.path-text {
		display: block;

		overflow: hidden;
		white-space: nowrap;

		text-overflow: ellipsis;
		direction: rtl;
	}

	.action-reset {
		flex-basis: 100px;
		flex-grow: 0;
		flex-shrink: 0;
	}

	.action-open + .action-reset {
		margin-left: 0;
	}

	/* Safari only css fix */

	_:matches(x),
	_:lang(x) + _:-webkit-full-screen-document,
	.pathToNode span {
		display: inline-block;
	}

	#chips {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		overflow-y: auto;
		max-height: 30vh;
	}

	.chip {
		display: flex;
		margin: 1px 4px 1px 0;
		padding: 0.25rem 0.45rem 0.25rem 0.5rem;

		gap: 0.25rem;

		border-radius: 500px;
		background-color: #e0e0e0;
		white-space: nowrap;
		overflow: hidden;
		align-items: center;
	}

	.chip .chip__clear {
		margin: 0 0 0 0.5rem;

		background: #a6a6a6;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		color: white;
		border-radius: 50%;
	}

	.chip > span {
		color: #424242;
		margin-left: 10px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.chip iron-icon {
		margin: 2px 4px;
		color: #cdcdcd;
		background-color: #a6a6a6;
		border-radius: 500px;
		cursor: pointer;
		min-width: 16px;
		width: 16px;
		min-height: 16px;
		height: 16px;
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
	}

	.dialog-heading {
		margin-bottom: 2rem;
		padding: 0 8px;
		font-size: 1.25rem;
		font-weight: normal;
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
`;
