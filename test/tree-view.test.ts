import { describe, expect, it } from 'vitest';
import { flatten, keyAction, toggleId } from '../src/tree-view/flatten';

const tree = [
	{
		id: 'a',
		label: 'A',
		children: [
			{ id: 'a1', label: 'A1', children: [{ id: 'a1x', label: 'A1x' }] },
			{ id: 'a2', label: 'A2' },
		],
	},
	{ id: 'b', label: 'B', children: [] },
];

const ids = (rows: { id: string }[]) => rows.map((r) => r.id);

describe('flatten', () => {
	it('offers expansion for children that have not loaded yet', () => {
		const rows = flatten(
			[{ id: 'remote' }, { id: 'sibling' }],
			new Set(['remote']),
			{ hasChildren: (node) => node.id === 'remote' },
		);
		expect(rows[0]).toMatchObject({ hasChildren: true, expanded: true });
		expect(keyAction(rows, 0, 'ArrowRight')).toBeUndefined();
		expect(keyAction(rows, 0, 'ArrowLeft')).toEqual({
			type: 'collapse',
			id: 'remote',
		});
	});
	it('shows only roots when nothing is expanded', () => {
		expect(ids(flatten(tree, new Set()))).toEqual(['a', 'b']);
	});

	it('walks expanded branches depth first', () => {
		const rows = flatten(tree, new Set(['a', 'a1']));
		expect(ids(rows)).toEqual(['a', 'a1', 'a1x', 'a2', 'b']);
		expect(rows.map((r) => r.level)).toEqual([1, 2, 3, 2, 1]);
	});

	it('does not walk children of a collapsed node under an expanded one', () => {
		expect(ids(flatten(tree, new Set(['a1'])))).toEqual(['a', 'b']);
	});

	it('sets position, set size, parent and expansion state', () => {
		const [a, a1, a2, b] = flatten(tree, new Set(['a']));
		expect(a).toMatchObject({
			posinset: 1,
			setsize: 2,
			hasChildren: true,
			expanded: true,
		});
		expect(a1).toMatchObject({
			posinset: 1,
			setsize: 2,
			parentId: 'a',
			expanded: false,
		});
		expect(a2).toMatchObject({ posinset: 2, setsize: 2, hasChildren: false });
		expect(b).toMatchObject({ hasChildren: false, expanded: false });
	});

	it('treats an empty children array as a leaf, even when "expanded"', () => {
		const rows = flatten(tree, new Set(['b']));
		expect(rows.at(-1)).toMatchObject({
			id: 'b',
			hasChildren: false,
			expanded: false,
		});
	});

	it('uses custom accessors', () => {
		interface Item {
			key: string;
			kids?: Item[];
		}
		const data: Item[] = [{ key: 'x', kids: [{ key: 'y' }] }];
		const rows = flatten(data, new Set(['x']), {
			getId: (n) => n.key,
			getChildren: (n) => n.kids,
		});
		expect(ids(rows)).toEqual(['x', 'y']);
	});

	it('handles missing items', () => {
		expect(flatten(undefined, new Set())).toEqual([]);
	});

	it('flattens a very wide expanded node', () => {
		const children = Array.from({ length: 200_000 }, (_, i) => ({
			id: `c${i}`,
		}));
		const rows = flatten([{ id: 'root', children }], new Set(['root']));
		expect(rows).toHaveLength(200_001);
		expect(rows.at(-1)).toMatchObject({ posinset: 200_000, setsize: 200_000 });
	});
});

describe('keyAction', () => {
	const rows = flatten(tree, new Set(['a']));
	// rows: a, a1, a2, b

	it('moves down and up, stopping at the ends', () => {
		expect(keyAction(rows, 0, 'ArrowDown')).toEqual({
			type: 'focus',
			index: 1,
		});
		expect(keyAction(rows, 3, 'ArrowDown')).toBeUndefined();
		expect(keyAction(rows, 1, 'ArrowUp')).toEqual({ type: 'focus', index: 0 });
		expect(keyAction(rows, 0, 'ArrowUp')).toBeUndefined();
	});

	it('jumps to the first and last row', () => {
		expect(keyAction(rows, 2, 'Home')).toEqual({ type: 'focus', index: 0 });
		expect(keyAction(rows, 0, 'End')).toEqual({ type: 'focus', index: 3 });
		expect(keyAction(rows, 3, 'End')).toBeUndefined();
	});

	it('ArrowRight expands a closed parent, then enters its first child', () => {
		expect(keyAction(rows, 1, 'ArrowRight')).toEqual({
			type: 'expand',
			id: 'a1',
		});
		expect(keyAction(rows, 0, 'ArrowRight')).toEqual({
			type: 'focus',
			index: 1,
		});
		expect(keyAction(rows, 2, 'ArrowRight')).toBeUndefined();
	});

	it('ArrowLeft collapses an open node, otherwise goes to the parent', () => {
		expect(keyAction(rows, 0, 'ArrowLeft')).toEqual({
			type: 'collapse',
			id: 'a',
		});
		expect(keyAction(rows, 2, 'ArrowLeft')).toEqual({
			type: 'focus',
			index: 0,
		});
		expect(keyAction(rows, 3, 'ArrowLeft')).toBeUndefined();
	});

	it('ignores other keys', () => {
		expect(keyAction(rows, 0, 'a')).toBeUndefined();
	});

	it('falls back to the first row when nothing is active', () => {
		expect(keyAction(rows, -1, 'ArrowDown')).toEqual({
			type: 'focus',
			index: 0,
		});
		expect(keyAction([], -1, 'ArrowDown')).toBeUndefined();
	});
});

describe('toggleId', () => {
	it('adds and removes ids', () => {
		expect(toggleId([], 'a')).toEqual(['a']);
		expect(toggleId(['a', 'b'], 'a')).toEqual(['b']);
	});

	it('respects an explicit direction', () => {
		expect(toggleId(['a'], 'a', true)).toEqual(['a']);
		expect(toggleId([], 'a', false)).toEqual([]);
	});
});
