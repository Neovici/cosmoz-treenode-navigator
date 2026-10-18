import { Tree, type Node } from '@neovici/cosmoz-tree';
import { describe, expect, it, vi } from 'vitest';
import { treeSource, type NodeSource } from '../src/util/source';
import { forest, searchTree, sourceTree } from '../src/util/source-tree';

const node = (pathLocator: string, name = pathLocator): Node => ({
	id: pathLocator,
	pathLocator,
	name,
});
const source = (overrides: Partial<NodeSource> = {}): NodeSource => ({
	getLevel: () => [],
	getPath: () => [],
	search: () => [],
	hasChildren: () => undefined,
	label: (node) => node.name ?? '',
	parentOf: (node) =>
		node.pathLocator.slice(0, node.pathLocator.lastIndexOf('.')),
	pathLabel: () => undefined,
	scopedSearch: false,
	...overrides,
});

describe('source tree', () => {
	it('keeps a root whose parent is itself without introducing a cycle', () => {
		const root = node('root');
		const tree = forest(source({ parentOf: () => 'root' }), [root]);
		expect(tree.roots).toEqual([root]);
		expect(tree.getChildren(root)).toEqual([]);
	});

	it('connects an ancestor chain before fetching a level', async () => {
		const root = node('1.2'),
			current = node('1.2.3');
		const getLevel = vi.fn().mockResolvedValue([node('1.2.3.4')]);
		const model = sourceTree(
			source({ getPath: () => [root, current], getLevel }),
		);
		await model.loadPath(current.pathLocator);
		expect(model.roots()).toEqual([root]);
		expect(model.getChildren(root)).toEqual([current]);
		expect(getLevel).not.toHaveBeenCalled();
		await model.loadLevel(current.pathLocator);
		expect(model.getChildren(current)).toEqual([node('1.2.3.4')]);
		expect(getLevel).toHaveBeenCalledTimes(1);
	});

	it('deduplicates in-flight levels and caches completed levels', async () => {
		const getLevel = vi.fn().mockResolvedValue([node('1.2.3')]);
		const model = sourceTree(source({ getLevel }));
		await Promise.all([model.loadLevel('1.2'), model.loadLevel('1.2')]);
		await model.loadLevel('1.2');
		expect(getLevel).toHaveBeenCalledTimes(1);
	});

	it('keeps unknown branches expandable and removes the arrow on an empty result', async () => {
		const model = sourceTree(source());
		const leaf = node('1.2');
		expect(model.hasChildren(leaf)).toBe(true);
		await model.loadLevel(leaf.pathLocator);
		expect(model.hasChildren(leaf)).toBe(false);
	});

	it('retries a failed expansion without losing the ancestor chain', async () => {
		const root = node('1.2');
		const getLevel = vi
			.fn()
			.mockRejectedValueOnce(new Error('offline'))
			.mockResolvedValue([node('1.2.3')]);
		const model = sourceTree(source({ getPath: () => [root], getLevel }));
		await model.loadPath(root.pathLocator);
		await model.loadLevel(root.pathLocator);
		expect(model.errors.has(root.pathLocator)).toBe(true);
		expect(model.roots()).toEqual([root]);
		await model.loadLevel(root.pathLocator);
		expect(model.errors.size).toBe(0);
		expect(model.getChildren(root)).toEqual([node('1.2.3')]);
	});

	it('places ranked search matches under their ancestors, without unrelated siblings', async () => {
		const root = node('1.2'),
			first = node('1.2.7'),
			second = node('1.2.3');
		const result = await searchTree(
			source({
				search: () => [first, second],
				getPath: (path) => [root, path === first.pathLocator ? first : second],
			}),
			'match',
		);
		expect(result.roots).toEqual([root]);
		expect(result.getChildren(root)).toEqual([first, second]);
		expect(result.expanded).toEqual([root.pathLocator]);
	});

	it('keeps a search match when loading its path fails', async () => {
		const match = node('1.2.3');
		const result = await searchTree(
			source({
				search: () => [match],
				getPath: () => Promise.reject(new Error('offline')),
			}),
			'match',
		);
		expect(result.roots).toEqual([match]);
		expect(result.matches).toBe(1);
	});
});

describe('in-memory source', () => {
	it('returns an empty level for a leaf root', async () => {
		const root = node('1', 'Leaf');
		const adapter = treeSource(new Tree({ '1': root }));
		expect(adapter.getLevel('')).toEqual([root]);
		expect(adapter.getLevel('1')).toEqual([]);
		const model = sourceTree(adapter);
		await model.loadLevel('1');
		expect(model.errors.size).toBe(0);
	});
});
