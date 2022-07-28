export const //
	/**
	 * Returns true, if a search string is eligable to trigger a search
	 * @param {String} value - The search string
	 * @param {Number} searchMinLength - The minimum length of value to be valid
	 * @return {Boolean} - If a search should be triggered
	 */
	computeSearching = (value, searchMinLength) => {
		return value && value.length >= searchMinLength && value !== '';
	},
	/**
	 * Normalizes and returns an Array of nodes
	 * with the properties name, path, parentSectionName, children
	 * @param {Object} tree - The cosmoz tree
	 * @param {Array} nodes - The input nodes
	 * @return {Array} - The normalized nodes
	 */
	normalizeNodes = (tree, nodes) => {
		if (!Array.isArray(nodes)) {
			return [];
		}
		return nodes.map((node) => {
			if (!node) {
				return node;
			}
			const path = node.pathLocator || node.path,
				pathLocatorSeparator = tree.pathLocatorSeparator,
				parentPath = path.includes(pathLocatorSeparator)
					? path.substring(0, path.lastIndexOf(pathLocatorSeparator))
					: path;
			return {
				name: node[tree.searchProperty],
				path,
				children: node[tree.childProperty],
				parentSectionName: tree.getPathString(parentPath, tree.searchProperty),
				id: node.id,
				pathLocator: node.pathLocator,
			};
		});
	},
	/**
	 * Returns the found nodes based on a search string and a given tree to be searched
	 * @param {Boolean} searching - If true, a search should be executed
	 * @param {String} searchString - The search string
	 * @param {Array} renderedLevel - The node list on which the search should be executed
	 * @param {Tree} tree - The main tree
	 * @return {Array} - The found nodes
	 */
	computeDataPlane = (searching, searchString, renderedLevel, tree) => {
		if (searching && tree) {
			const results = tree.searchNodes(searchString, renderedLevel, false);
			return normalizeNodes(tree, results);
		}
		return renderedLevel;
	},
	/**
	 * Returns a node array with the children of a node on the given path
	 * If the node doesn't have children, the node gets returned
	 * @param {String} pathLocator - The separated address parts of a node
	 * @param {Tree} tree - The main tree
	 * @return {Array} - Nodes
	 */
	renderLevel = (pathLocator, tree) => {
		if (!tree) {
			return;
		}
		const node = tree.getNodeByPathLocator(pathLocator),
			children = tree.getChildren(node),
			level = tree.hasChildren(node) ? children : node,
			sortFunc = (a, b) => {
				// First sort based on "folder" status (containing children)
				if (tree.hasChildren(a)) {
					if (!tree.hasChildren(b)) {
						return -1;
					}
				} else if (tree.hasChildren(b)) {
					return 1;
				}
				// Then sort on searchProperty
				const val1 = a[tree.searchProperty],
					val2 = b[tree.searchProperty];

				if (val1 > val2) {
					return 1;
				}
				if (val1 < val2) {
					return -1;
				}
				return 0;
			};
		return normalizeNodes(tree, level).sort(sortFunc);
	},
	/**
	 * Returns the classes of a row based its selection state
	 * @param {String} classes - The default classes
	 * @param {object} node - Node to check
	 * @param {object} highlightedNode - Currently highlighted node
	 * @return {String} - The CSS classes
	 */
	computeRowClass = (classes, node, highlightedNode) => {
		let selected = false;
		if (highlightedNode) {
			selected =
				node === highlightedNode ||
				(node.id && node.id === highlightedNode.id) ||
				node.pathLocator === highlightedNode.pathLocator;
		}
		return selected ? classes + ' selected' : classes;
	},
	/**
	 * Selects the doubled clicked node and dispatches an node-dblclicked event.
	 * @param {Event} event The triggering event
	 * @param {object} host Host
	 * @return {undefined}
	 */
	onNodeDblClicked = (event, host) => {
		host.dispatchEvent(
			new CustomEvent('node-dblclicked', {
				detail: {
					model: event.model,
				},
			})
		);
	},
	/**
	 * Returns true, if the button should be visible
	 * @param {Boolean} searching - If a search is currently executed
	 * @param {String} openNodeLevelPath - The open node level
	 * @return {Boolean} - The visibility of the button
	 */
	showGlobalSearchBtn = (searching, openNodeLevelPath) => {
		return searching && openNodeLevelPath !== '';
	},
	/**
	 * Returns the nodes on a path specified by a given path locator
	 * @param {String} pathLocator - The separated address parts of a node
	 * @param {Tree} tree - The main tree
	 * @return {Array} - The found nodes or empty array
	 */
	getTreePathParts = (pathLocator, tree) => {
		if (!tree || !pathLocator) {
			return [];
		}
		return normalizeNodes(tree, tree.getPathNodes(pathLocator));
	},
	/**
	 * Returns a node based on a given path locator.
	 * If pathLocator is empty or not defined, null gets returned.
	 * If pathLocator is only partly valid, the last valid node gets returned.
	 * @param {String} pathLocator - The separated address parts of a node
	 * @param {Tree} tree - The main tree
	 * @return {Object} - The found node
	 */
	getNode = (pathLocator, tree) => {
		if (!tree || !pathLocator) {
			return null;
		}

		const node = tree.getNodeByPathLocator(pathLocator);
		let nodes;

		if (!node) {
			nodes = tree.getPathNodes(pathLocator).filter((n) => n != null);
		}
		return nodes && nodes.length > 0 ? nodes.pop() : node;
	};
