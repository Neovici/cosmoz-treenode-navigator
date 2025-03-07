import { assert, fixture, html } from '@open-wc/testing';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import basicTree from './data/basicTree';
import '../demo/cosmoz-treenode-button-view';
import { TreeNode } from '../src/util/types';

suite('cosmoz-treenode-button-view', () => {
	let buttonView: any;

	setup(async () => {
		buttonView = await fixture(
			html` <cosmoz-treenode-button-view
				.tree=${new DefaultTree(basicTree as any)}
				.buttonTextPlaceholder="${'Select a node'}"
				.dialogText="${'Select a node'}"
				.searchPlaceholder="${'Search'}"
				.searchGlobalPlaceholder="${'Search in entire tree'}"
				.searchMinLength="${2}"
			></cosmoz-treenode-button-view>`,
		);
	});

	test('instantiating the element', () => {
		assert.equal(buttonView.tagName, 'COSMOZ-TREENODE-BUTTON-VIEW');
	});

	test('button text placeholder', () => {
		assert.equal(
			buttonView.shadowRoot.querySelector('.actions__node-select').textContent.trim(),
			'Select a node',
		);
	});

	test('select a node', async () => {
		const node: TreeNode = {
			name: 'D:',
			pathLocator: '1000',
		};

		buttonView.highlightedNode = node;
		buttonView.shadowRoot.querySelector('.tree-nav-dialog__footer-button').click();

		assert.equal(
			buttonView.shadowRoot.querySelector('.actions__node-select').textContent.trim(),
			'D:',
		);
	});

	test('multi selection', async () => {
		buttonView.multiSelection = true;

		const node1: TreeNode = {
			name: 'D:',
			pathLocator: '1000',
		};
		const node2: TreeNode = {
			name: 'C:',
			pathLocator: '1',
		};

		buttonView.highlightedNode = node1;
		buttonView.shadowRoot.querySelector('.tree-nav-dialog__footer-button').click();
		buttonView.highlightedNode = node2;
		buttonView.shadowRoot.querySelector('.tree-nav-dialog__footer-button').click();

		const chips = buttonView.shadowRoot.querySelectorAll('.chip');
		assert.equal(chips.length, 2);
		assert.equal(chips[0].querySelector('span').textContent, 'D:');
		assert.equal(chips[1].querySelector('span').textContent, 'C:');
	});

	test('clear selection', async () => {
		const node: TreeNode = {
			name: 'D:',
			pathLocator: '1000',
		};
		buttonView.highlightedNode = node;
		buttonView.shadowRoot.querySelector('.tree-nav-dialog__footer-button').click();

		buttonView.shadowRoot.querySelector('.actions__clear').click();

		assert.equal(
			buttonView.shadowRoot.querySelector('.actions__node-select').textContent.trim(),
			'Select a node',
		);
	});
});