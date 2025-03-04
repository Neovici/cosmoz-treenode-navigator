import { assert, fixture, html } from '@open-wc/testing';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import basicTree from './data/basicTree.js';
import '../src/cosmoz-treenode-navigator';
import { computeDataPlane } from '../src/util';

suite('cosmoz-treenode-navigator', () => {
	let navigator;

	setup(async () => {
		navigator = await fixture(
			html` <cosmoz-treenode-navigator
				.tree=${new DefaultTree(basicTree)}
				.searchPlaceholder="${'Custom search placeholder'}"
				.searchMinLength="${2}"
			></cosmoz-treenode-navigator>`,
		);
	});

	test('instantiating the element', () => {
		assert.equal(navigator.tagName, 'COSMOZ-TREENODE-NAVIGATOR');
	});

	test('tree length and sort', () => {
		// given a node navigator with some data

		// when I enter the first node
		navigator.openNodePath = '1000';

		const dataPlane = computeDataPlane(
			navigator.tree,
			navigator.searchValue,
			navigator.openNodePath,
		);
		// then I can see the contents of the node
		// and it is ordered folder-first, then alphabetically
		assert.equal(dataPlane[0].name, 'Data');
		assert.equal(dataPlane[1].name, 'Backup');
		assert.equal(dataPlane.length, 2);
	});

	test('set proper search placeholder', () => {
		assert.equal(
			navigator.shadowRoot
				.querySelector('cosmoz-input')
				.shadowRoot.querySelector('input').placeholder,
			'Custom search placeholder',
		);
	});

	test('should check if node has children', () => {
		const node = {
			name: 'D:',
			path: '1000',
			children: {
				1001: {
					name: 'Data',
					pathLocator: '1000.1001',
					children: { 1002: { name: 'John', pathLocator: '1000.1001.1002' } },
				},
			},
			parentSectionName: 'D:',
			pathLocator: '1000',
		};
		assert.equal(navigator.tree.hasChildren(node), true);
		const node2 = {
			name: 'Git',
			path: '1.5.7',
			parentSectionName: 'C:/Program Files',
			pathLocator: '1.5.7',
		};
		assert.equal(navigator.tree.hasChildren(node2), false);
	});

	test('match search string', () => {
		// given a node navigator with some data
		// when I search for 'John'
		navigator.searchValue = 'John';

		const dataPlane = computeDataPlane(
			navigator.tree,
			navigator.searchValue,
			'1000',
		);

		//then I can see only 1 item matching 'John'
		assert.lengthOf(dataPlane, 1);
		assert.equal(dataPlane[0].name, 'John');
	});

	test('not match search string', () => {
		// given a node navigator with some data
		// when I search for 'NONEXISTING'
		navigator.searchValue = 'NONEXISTING';
		const dataPlane = computeDataPlane(
			navigator.tree,
			navigator.searchValue,
			'1000',
		);

		//then I can see that is no contents
		assert.lengthOf(dataPlane, 0);
	});
});
