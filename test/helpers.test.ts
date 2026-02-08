import type { Node } from '@neovici/cosmoz-tree';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import { describe, expect, it } from 'vitest';
import {
	computeDataPlane,
	computeRowClass,
	getNode,
	getParentPath,
	getTreePathParts,
} from '../src/util/helpers';
import basicTree from './data/basicTree';

const tree = new DefaultTree(basicTree);

describe('computeDataPlane', () => {
	it('returns empty array when tree is undefined', () => {
		const result = computeDataPlane(undefined as any, '', '');
		expect(result).toEqual([]);
	});

	it('returns children sorted with folders first', () => {
		const dataPlane = computeDataPlane(tree, '', '1000');
		expect(dataPlane[0].name).toBe('Data');
		expect(dataPlane[1].name).toBe('Backup');
		expect(dataPlane.length).toBe(2);
	});

	it('matches search string and returns matching nodes', () => {
		const dataPlane = computeDataPlane(tree, 'John', '1000');
		expect(dataPlane.length).toBe(1);
		expect(dataPlane[0].name).toBe('John');
	});

	it('returns empty array when search does not match', () => {
		const dataPlane = computeDataPlane(tree, 'NONEXISTING', '1000');
		expect(dataPlane.length).toBe(0);
	});
});

describe('getTreePathParts', () => {
	it('returns empty array when tree is undefined', () => {
		const result = getTreePathParts('1.2.3', undefined as any);
		expect(result).toEqual([]);
	});

	it('returns empty array when pathLocator is empty', () => {
		const result = getTreePathParts('', tree);
		expect(result).toEqual([]);
	});

	it('returns nodes on path', () => {
		const result = getTreePathParts('1.2.3', tree);
		expect(result.length).toBe(3);
		expect(result[0].name).toBe('C:');
		expect(result[1].name).toBe('Windows');
		expect(result[2].name).toBe('System');
	});
});

describe('getNode', () => {
	it('returns null when tree is undefined', () => {
		const result = getNode('1.2.3', undefined as any);
		expect(result).toBeNull();
	});

	it('returns null when pathLocator is empty', () => {
		const result = getNode('', tree);
		expect(result).toBeNull();
	});

	it('returns node for valid path', () => {
		const result = getNode('1.2.3', tree);
		expect(result?.name).toBe('System');
	});

	it('returns last valid node for partially valid path', () => {
		const result = getNode('1.2.999', tree);
		expect(result?.name).toBe('Windows');
	});
});

describe('getParentPath', () => {
	it('returns parent path for nested node', () => {
		const node: Node = { pathLocator: '1.2.3', name: 'Test' };
		const result = getParentPath(tree, node);
		expect(result).toBe('1.2');
	});

	it('returns same path for root node', () => {
		const node: Node = { pathLocator: '1', name: 'Test' };
		const result = getParentPath(tree, node);
		expect(result).toBe('1');
	});
});

describe('computeRowClass', () => {
	it('returns base class when no highlighted node', () => {
		const node: Node = { pathLocator: '1.2.3', name: 'Test' };
		const result = computeRowClass('node', node, null);
		expect(result).toBe('node');
	});

	it('returns selected class when node matches highlighted node', () => {
		const node: Node = { pathLocator: '1.2.3', name: 'Test' };
		const result = computeRowClass('node', node, node);
		expect(result).toBe('node selected');
	});

	it('returns selected class when pathLocator matches', () => {
		const node: Node = { pathLocator: '1.2.3', name: 'Test' };
		const highlightedNode: Node = { pathLocator: '1.2.3', name: 'Other' };
		const result = computeRowClass('node', node, highlightedNode);
		expect(result).toBe('node selected');
	});

	it('returns selected class when id matches', () => {
		const node: Node = { pathLocator: '1.2.3', name: 'Test', id: 'abc' };
		const highlightedNode: Node = {
			pathLocator: '9.9.9',
			name: 'Other',
			id: 'abc',
		};
		const result = computeRowClass('node', node, highlightedNode);
		expect(result).toBe('node selected');
	});
});

describe('tree.hasChildren', () => {
	it('returns true for node with children', () => {
		const node: Node = {
			id: '1000',
			name: 'D:',
			path: '1000',
			children: {
				1001: {
					name: 'Data',
					pathLocator: '1000.1001',
					children: { 1002: { name: 'John', pathLocator: '1000.1001.1002' } },
				} as unknown as Node,
			},
			pathLocator: '1000',
		};
		expect(tree.hasChildren(node)).toBe(true);
	});

	it('returns false for node without children', () => {
		const node: Node = {
			id: '1.5.7',
			name: 'Git',
			path: '1.5.7',
			pathLocator: '1.5.7',
		};
		expect(tree.hasChildren(node)).toBe(false);
	});
});
