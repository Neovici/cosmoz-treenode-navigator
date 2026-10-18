import type { Node } from '@neovici/cosmoz-tree';
import type { NodeSource } from './source';

export const forest = (source: NodeSource, nodes: readonly Node[]) => {
	const byPath = new Map(nodes.map((node) => [node.pathLocator, node]));
	const children = new Map<string, Node[]>();
	for (const node of byPath.values()) {
		const parent = source.parentOf(node);
		if (parent === node.pathLocator) continue;
		const siblings = children.get(parent) ?? [];
		siblings.push(node);
		children.set(parent, siblings);
	}
	return {
		roots: [...byPath.values()].filter(
			(node) =>
				source.parentOf(node) === node.pathLocator ||
				!byPath.has(source.parentOf(node)),
		),
		getChildren: (node: Node) => children.get(node.pathLocator) ?? [],
		expanded: [...children.keys()].filter((path) => byPath.has(path)),
	};
};

/** Loaded levels and the ancestor chains connecting them. */
export const sourceTree = (source: NodeSource) => {
	const nodes = new Map<string, Node>();
	let hierarchy = forest(source, []);
	const levels = new Map<string, Node[]>();
	const pending = new Map<string, Promise<void>>();
	const errors = new Set<string>();
	const listeners = new Set<() => void>();
	const notify = () => listeners.forEach((listener) => listener());
	const absorb = (items: readonly Node[]) => {
		for (const node of items) nodes.set(node.pathLocator, node);
		hierarchy = forest(source, [...nodes.values()]);
	};
	return {
		subscribe: (listener: () => void) => {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		},
		roots: () => hierarchy.roots,
		getChildren: (node: Node) =>
			levels.get(node.pathLocator) ?? hierarchy.getChildren(node),
		hasChildren: (node: Node) =>
			levels.has(node.pathLocator)
				? levels.get(node.pathLocator)!.length > 0
				: source.hasChildren(node) !== false,
		pending,
		errors,
		loadPath: async (path: string) => {
			const items = await source.getPath(path);
			absorb(items);
			notify();
			return items;
		},
		loadLevel: (path: string) => {
			if (levels.has(path)) return Promise.resolve();
			const current = pending.get(path);
			if (current) return current;
			errors.delete(path);
			const request = Promise.resolve()
				.then(() => source.getLevel(path))
				.then(
					(items) => {
						levels.set(path, items);
						absorb(items);
					},
					() => {
						errors.add(path);
					},
				)
				.finally(() => {
					pending.delete(path);
					notify();
				});
			pending.set(path, request);
			notify();
			return request;
		},
	};
};

/** Ancestors are inserted in match order, preserving the source's ranking. */
export const searchTree = async (source: NodeSource, query: string) => {
	const matches = await source.search(query, '');
	const paths = await Promise.all(
		matches.map(async (node) => {
			try {
				return [...(await source.getPath(node.pathLocator)), node];
			} catch {
				return [node];
			}
		}),
	);
	return { ...forest(source, paths.flat()), matches: matches.length };
};
