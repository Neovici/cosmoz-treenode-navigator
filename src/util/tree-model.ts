import type { Node, Tree } from '@neovici/cosmoz-tree';

type GetChildren = (node: Node) => Node[];

/**
 * Folders first, then by the tree's search property — the order the
 * navigator has always shown.
 */
const byFolderThenName = (tree: Tree) => {
	const { searchProperty } = tree;
	return (a: Node, b: Node) => {
		const folderA = tree.hasChildren(a),
			folderB = tree.hasChildren(b);
		if (folderA !== folderB) {
			return folderA ? -1 : 1;
		}
		const nameA = a[searchProperty],
			nameB = b[searchProperty];
		if (nameA > nameB) return 1;
		if (nameA < nameB) return -1;
		return 0;
	};
};

/**
 * Sorted children, computed once per node. Sorts a copy: the tree's own
 * child arrays are shared with every other consumer of the tree.
 */
export const sortedChildren = (tree: Tree): GetChildren => {
	const cache = new WeakMap<Node, Node[]>();
	const compare = byFolderThenName(tree);
	return (node) => {
		let children = cache.get(node);
		if (!children) {
			children = [...(tree.getChildren(node) ?? [])].sort(compare);
			cache.set(node, children);
		}
		return children;
	};
};

export const sortedRoots = (tree?: Tree): Node[] =>
	tree ? [...(tree._roots ?? [])].sort(byFolderThenName(tree)) : [];

/** Path locators of every ancestor of `pathLocator`, outermost first. */
export const ancestorPaths = (tree: Tree, pathLocator?: string): string[] => {
	if (!pathLocator) return [];
	const parts = pathLocator.split(tree.pathLocatorSeparator);
	return parts
		.slice(0, -1)
		.map((_, i) => parts.slice(0, i + 1).join(tree.pathLocatorSeparator));
};

export interface SearchView {
	roots: Node[];
	getChildren: GetChildren;
	expanded: string[];
	matches: number;
}

/**
 * The tree pruned to the nodes matching `search` and their ancestors, with
 * every ancestor expanded so all matches are visible in place.
 */
export const searchView = (
	tree: Tree,
	search: string,
	getChildren: GetChildren,
): SearchView => {
	const found = tree.searchNodes(search, undefined, false);
	const include = new Set<string>();
	const expanded = new Set<string>();
	for (const node of found) {
		include.add(node.pathLocator);
		for (const path of ancestorPaths(tree, node.pathLocator)) {
			include.add(path);
			expanded.add(path);
		}
	}
	const keep = (nodes: Node[]) =>
		nodes.filter((n) => include.has(n.pathLocator));
	const pruned = new WeakMap<Node, Node[]>();
	return {
		roots: keep(sortedRoots(tree)),
		getChildren: (node) => {
			let children = pruned.get(node);
			if (!children) {
				children = keep(getChildren(node));
				pruned.set(node, children);
			}
			return children;
		},
		expanded: [...expanded],
		matches: found.length,
	};
};
