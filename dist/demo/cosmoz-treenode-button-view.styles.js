import { tagged as css } from '@neovici/cosmoz-utils';
export default css`
	:host {
		display: block;
	}

	.actions {
		display: flex;
		align-items: center;
	}

	.actions__node-select {
		background: transparent;
		border: none;
		cursor: pointer;
		margin: 0;
		padding: 0.7em 0.57em;
		width: 100%;
		border: solid 1px #a4abae;
		border-radius: 16px;
		font-size: 14px;
		font-family: inherit;
	}

	.actions__clear {
		background: transparent;
		border: none;
		cursor: pointer;
		margin: 0;
		padding: 0.7em 0.57em;
		font-size: 14px;
		font-family: inherit;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin-top: 5px;
	}

	.chip {
		display: flex;
		align-items: center;
		background-color: #e0e0e0;
		border-radius: 16px;
		padding: 0 8px;
		margin: 2px;
	}

	.chip__clear {
		background: transparent;
		border: none;
		cursor: pointer;
		margin: 0;
		padding: 0.7em 0.57em;
		font-size: 14px;
		font-family: inherit;
	}

	.tree-nav-dialog {
		width: 80vw;
		height: 80vh;
		border: none;
		padding: 0;
		border-radius: 4px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	.tree-nav-dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}

	.tree-nav-dialog__header {
		padding: 16px;
		border-bottom: 1px solid #e0e0e0;
	}

	.tree-nav-dialog__heading {
		margin: 0;
		font-size: 18px;
		font-weight: 500;
	}

	.tree-nav-dialog__main {
		padding: 16px;
		height: calc(80vh - 120px);
		overflow: auto;
	}

	.tree-nav-dialog__footer {
		padding: 16px;
		border-top: 1px solid #e0e0e0;
		display: flex;
		justify-content: flex-end;
	}

	.tree-nav-dialog__footer-button {
		background-color: #f5f5f5;
		border: 1px solid #e0e0e0;
		border-radius: 4px;
		padding: 8px 16px;
		margin-left: 8px;
		cursor: pointer;
		font-family: inherit;
	}

	.tree-nav-dialog__footer-button:hover {
		background-color: #e0e0e0;
	}

	.tree-nav-dialog__footer-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.tree-nav-dialog__treenode {
		height: 100%;
	}

	.no-padding {
		padding: 0;
	}
`;
