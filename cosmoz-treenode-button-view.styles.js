import { html } from 'lit-html';

export const css = html`<style>
	.actions {
		display: flex;
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

	#dialogTree {
		min-width: 250px !important;
		width: 450px;
	}
</style>`;
