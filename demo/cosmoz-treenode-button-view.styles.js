import { html } from 'lit-html';

export const css = html` <style>
	.actions {
		display: flex;
	}

	.actions button {
		display: inline-block;
		width: 100%;
		padding: 1rem;
		background-color: white;
		border: outset;
		border-color: lightgray;
		cursor: pointer;
		text-transform: uppercase;
		box-shadow:
			0 2px 2px 0 rgba(0, 0, 0, 0.14),
			0 1px 5px 0 rgba(0, 0, 0, 0.12),
			0 3px 1px -2px rgba(0, 0, 0, 0.2);
	}

	.actions .actions__clear {
		width: 10%;
		font-size: 2rem;
		padding: 0;
	}

	.actions .actions__reset-button {
	}

	.actions button:active {
		border: inset;
	}

	.open {
		flex: auto;
	}

	.pathToNode {
		max-width: 320px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		direction: rtl;
		text-align: left;
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
		max-width: 90%;
		padding: 20px;
		overflow-y: auto;
		max-height: 30vh;
	}

	.chip {
		border-radius: 500px;
		background-color: #e0e0e0;
		margin: 1px 4px 1px 0;
		white-space: nowrap;
		overflow: hidden;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.chip .chip__clear {
		background: #a6a6a6;
		border: none;
		cursor: pointer;
		font-size: 1.25rem;
		color: white;
		margin-left: 0.25rem;
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

	#dialogTree,
	.tree-nav-dialog {
		min-width: 250px !important;
		width: 450px;
	}

	.tree-nav-dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	.tree-nav-dialog__heading {
		margin-bottom: 2rem;
		font-size: 1.25rem;
		font-weight: normal;
		text-align: center;
	}

	.tree-nav-dialog__footer {
		text-align: right;
	}

	.tree-nav-dialog__footer-button {
		margin: 0 0.25rem;
		padding: 0.5rem;
		color: #3f51b5;
		background: none;
		border: none;
		font-size: 0.875rem;
		text-transform: uppercase;
		cursor: pointer;
	}

	.tree-nav-dialog__footer-button:not(:disabled):active {
		border: 1px outset #ccc;
	}

	.tree-nav-dialog__footer-button:disabled {
		color: #a8a8a8;
	}
</style>`;
