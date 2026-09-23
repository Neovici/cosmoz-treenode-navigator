import type { Node, Tree } from '@neovici/cosmoz-tree';
import { computeDataPlane, getParentPath, getTreePathParts } from './helpers';

/**
 * Where the navigator gets its nodes.
 *
 * A `Tree` holds the whole hierarchy in memory, which stops being an option once
 * it is an organization of a few hundred thousand nodes. Everything the
 * navigator needs is behind this interface instead, so a caller can serve the
 * levels from an API one at a time. Every method may answer synchronously.
 */
export interface NodeSource {
	/** Children of a node; the roots when the path locator is empty. */
	getLevel(pathLocator: string): Node[] | Promise<Node[]>;

	/** The node and its ancestors, outermost first. */
	getPath(pathLocator: string): Node[] | Promise<Node[]>;

	/**
	 * Matches, in the order they are meant to be rendered — a server that ranks
	 * its results has already decided the order, and re-sorting throws that away.
	 */
	search(query: string, scope: string): Node[] | Promise<Node[]>;

	/** `undefined` where the source cannot tell, which renders the arrow anyway. */
	hasChildren(node: Node): boolean | undefined;

	label(node: Node): string;

	/** Label for a whole path, heading the search results grouped under it. */
	pathLabel(pathLocator: string): string | undefined;

	parentOf(node: Node): string;

	/** Whether {@link search} honours its scope argument. */
	scopedSearch: boolean;
}

/**
 * Serves an in-memory {@link Tree}, which is what the navigator did before it
 * took a source at all.
 */
export const treeSource = (tree: Tree): NodeSource => ({
	getLevel: (pathLocator) => computeDataPlane(tree, '', pathLocator),

	getPath: (pathLocator) => getTreePathParts(pathLocator, tree),

	search: (query, scope) => computeDataPlane(tree, query, scope),

	hasChildren: (node) => tree?.hasChildren(node),

	label: (node) => (tree ? (node[tree.searchProperty] as string) : '') ?? '',

	pathLabel: (pathLocator) =>
		tree?.getPathString(pathLocator, tree.searchProperty),

	parentOf: (node) => (tree ? getParentPath(tree, node) : ''),

	scopedSearch: true,
});
