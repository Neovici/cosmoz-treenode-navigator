import { Tree, TreeNode } from './types';
export declare const //
getParentPath: (tree: Tree, node: TreeNode) => string, 
/**
 * Returns a node array with the children of a node on the given path
 * If the node doesn't have children, the node gets returned
 * @param {Tree} tree - The main tree
 * @param {String} pathLocator - The separated address parts of a node
 * @return {Array} - Nodes
 */
renderLevel: (tree: Tree, pathLocator: string) => TreeNode | TreeNode[], 
/**
 * Returns the found nodes based on a search string and a given tree to be searched
 * @param {Tree} tree - The main tree
 * @param {String|undefined} search - The search string
 * @param {String} pathLocator - The separated address parts of a node
 * @return {Array} - The found nodes
 */
computeDataPlane: (tree: Tree, search?: string, pathLocator?: string) => TreeNode[], 
/**
 * Returns the classes of a row based its selection state
 * @param {String} classes - The default classes
 * @param {object} node - Node to check
 * @param {object} highlightedNode - Currently highlighted node
 * @return {String} - The CSS classes
 */
computeRowClass: (classes: string, node: TreeNode, highlightedNode?: TreeNode) => string, 
/**
 * Selects the doubled clicked node and dispatches a node-dblclicked event.
 * @param {Event} event The triggering event
 * @param {object} host Host
 * @return {undefined}
 */
onNodeDblClicked: (event: Event, host: HTMLElement) => void, 
/**
 * Returns the nodes on a path specified by a given path locator
 * @param {String} pathLocator - The separated address parts of a node
 * @param {Tree} tree - The main tree
 * @return {Array} - The found nodes or empty array
 */
getTreePathParts: (pathLocator: string, tree: Tree) => TreeNode[], 
/**
 * Returns a node based on a given path locator.
 * If pathLocator is empty or not defined, null gets returned.
 * If pathLocator is only partly valid, the last valid node gets returned.
 * @param {String} pathLocator - The separated address parts of a node
 * @param {Tree} tree - The main tree
 * @return {Object} - The found node
 */
getNode: (pathLocator: string, tree: Tree) => TreeNode | null;
//# sourceMappingURL=helpers.d.ts.map