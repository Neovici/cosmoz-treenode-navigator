import { Node, Tree } from '@neovici/cosmoz-tree';

export const //
	getParentPath = (tree: Tree, node: Node): string => {
		const path = node.pathLocator || node.path || '';
		const { pathLocatorSeparator } = tree;

		return path.includes(pathLocatorSeparator)
			? path.substring(0, path.lastIndexOf(pathLocatorSeparator))
			: path;
	},
	/**
	 * Returns a node array with the children of a node on the given path
	 * If the node doesn't have children, the node gets returned
	 * @param tree - The main tree
	 * @param pathLocator - The separated address parts of a node
	 * @return - Nodes
	 */
	renderLevel = (
		tree: Tree,
		pathLocator: string,
	): Node[] | Node | null | undefined => {
		if (!tree) {
			return undefined;
		}

		const node = tree.getNodeByPathLocator(pathLocator);
		const children = node ? tree.getChildren(node) : [];

		const { searchProperty } = tree,
			sortFunc = (a: Node, b: Node): number => {
				// First sort based on "folder" status (containing children)
				if (tree.hasChildren(a)) {
					if (!tree.hasChildren(b)) {
						return -1;
					}
				} else if (tree.hasChildren(b)) {
					return 1;
				}
				// Then sort on searchProperty
				const val1 = a[searchProperty],
					val2 = b[searchProperty];

				if (val1 > val2) {
					return 1;
				}
				if (val1 < val2) {
					return -1;
				}
				return 0;
			};
		return children.length > 0 ? children.sort(sortFunc) : node;
	},
	/**
	 * Returns the found nodes based on a search string and a given tree to be searched
	 * @param tree - The main tree
	 * @param search - The search string
	 * @param pathLocator - The separated address parts of a node
	 * @return - The found nodes
	 */
	computeDataPlane = (
		tree: Tree,
		search: string | undefined,
		pathLocator: string,
	): Node[] => {
		if (!tree) {
			return [];
		}

		const nodes = renderLevel(tree, pathLocator);

		return search
			? tree.searchNodes(search, nodes as Node[], false)
			: (nodes as Node[]);
	},
	/**
	 * Returns the classes of a row based its selection state
	 * @param classes - The default classes
	 * @param node - Node to check
	 * @param highlightedNode - Currently highlighted node
	 * @return - The CSS classes
	 */
	computeRowClass = (
		classes: string,
		node: Node,
		highlightedNode?: Node | null,
	): string => {
		let selected = false;

		if (highlightedNode) {
			selected =
				node === highlightedNode ||
				(node.id && node.id === highlightedNode.id) ||
				node.pathLocator === highlightedNode.pathLocator;
		}

		return selected ? `${classes} selected` : classes;
	},
	/**
	 * Selects the doubled clicked node and dispatches a node-dblclicked event.
	 * @param event The triggering event
	 * @param host Host
	 * @return undefined
	 */
	onNodeDblClicked = (event: Event, host: HTMLElement): void => {
		host.dispatchEvent(
			new CustomEvent('node-dblclicked', {
				detail: {
					model: (event as any).model,
				},
			}),
		);
	},
	/**
	 * Returns the nodes on a path specified by a given path locator
	 * @param pathLocator - The separated address parts of a node
	 * @param tree - The main tree
	 * @return - The found nodes or empty array
	 */
	getTreePathParts = (pathLocator: string, tree: Tree): Node[] => {
		if (!tree || !pathLocator) {
			return [];
		}
		return tree
			.getPathNodes(pathLocator)
			.filter((node): node is Node => node !== undefined);
	},
	/**
	 * Returns a node based on a given path locator.
	 * If pathLocator is empty or not defined, null gets returned.
	 * If pathLocator is only partly valid, the last valid node gets returned.
	 * @param pathLocator - The separated address parts of a node
	 * @param tree - The main tree
	 * @return - The found node
	 */
	getNode = (pathLocator: string, tree: Tree): Node | null => {
		if (!tree || !pathLocator) {
			return null;
		}

		const node = tree.getNodeByPathLocator(pathLocator);
		let nodes;

		if (!node) {
			nodes = tree.getPathNodes(pathLocator).filter((n) => n != null);
		}
		return nodes && nodes.length > 0
			? (nodes.pop() as Node) || null
			: node || null;
	};
