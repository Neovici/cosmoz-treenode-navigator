import { Tree, TreeNode } from './types';

export const //
  getParentPath = (tree: Tree, node: TreeNode): string => {
    const path = node.pathLocator || node.path || '';
    const { pathLocatorSeparator } = tree;

    return path.includes(pathLocatorSeparator)
      ? path.substring(0, path.lastIndexOf(pathLocatorSeparator))
      : path;
  },
  /**
   * Returns a node array with the children of a node on the given path
   * If the node doesn't have children, the node gets returned
   * @param {Tree} tree - The main tree
   * @param {String} pathLocator - The separated address parts of a node
   * @return {Array} - Nodes
   */
  renderLevel = (tree: Tree, pathLocator: string): TreeNode | TreeNode[] => {
    if (!tree) {
      return [];
    }
    const node = tree.getNodeByPathLocator(pathLocator),
      children = node ? tree.getChildren(node) : [],
      { searchProperty } = tree,
      sortFunc = (a: TreeNode, b: TreeNode): number => {
        // First sort based on "folder" status (containing children)
        if (tree.hasChildren(a)) {
          if (!tree.hasChildren(b)) {
            return -1;
          }
        } else if (tree.hasChildren(b)) {
          return 1;
        }
        // Then sort on searchProperty
        const val1: string|number = a[searchProperty],
          val2: string|number = b[searchProperty];

        if (val1 > val2) {
          return 1;
        }
        if (val1 < val2) {
          return -1;
        }
        return 0;
      };
    return children.length > 0 ? children.sort(sortFunc) : node || [];
  },
  /**
   * Returns the found nodes based on a search string and a given tree to be searched
   * @param {Tree} tree - The main tree
   * @param {String|undefined} search - The search string
   * @param {String} pathLocator - The separated address parts of a node
   * @return {Array} - The found nodes
   */
  computeDataPlane = (tree: Tree, search?: string, pathLocator?: string): TreeNode[] => {
    if (!tree) {
      return [];
    }
    const nodes = renderLevel(tree, pathLocator || '');
    const nodeArray = Array.isArray(nodes) ? nodes : [nodes];
    return search ? tree.searchNodes(search, nodeArray, false) : nodeArray;
  },
  /**
   * Returns the classes of a row based its selection state
   * @param {String} classes - The default classes
   * @param {object} node - Node to check
   * @param {object} highlightedNode - Currently highlighted node
   * @return {String} - The CSS classes
   */
  computeRowClass = (classes: string, node: TreeNode, highlightedNode?: TreeNode): string => {
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
   * @param {Event} event The triggering event
   * @param {object} host Host
   * @return {undefined}
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
   * @param {String} pathLocator - The separated address parts of a node
   * @param {Tree} tree - The main tree
   * @return {Array} - The found nodes or empty array
   */
  getTreePathParts = (pathLocator: string, tree: Tree): TreeNode[] => {
    if (!tree || !pathLocator) {
      return [];
    }
    return tree.getPathNodes(pathLocator);
  },
  /**
   * Returns a node based on a given path locator.
   * If pathLocator is empty or not defined, null gets returned.
   * If pathLocator is only partly valid, the last valid node gets returned.
   * @param {String} pathLocator - The separated address parts of a node
   * @param {Tree} tree - The main tree
   * @return {Object} - The found node
   */
  getNode = (pathLocator: string, tree: Tree): TreeNode | null => {
    if (!tree || !pathLocator) {
      return null;
    }

    const node = tree.getNodeByPathLocator(pathLocator);
    let nodes;

    if (!node) {
      nodes = tree.getPathNodes(pathLocator).filter((n) => n != null);
    }
    return nodes && nodes.length > 0 ? nodes.pop() || null : node;
  };