import { Tree, TreeNode } from './types';
export declare const //
getParentPath: (tree: Tree, node: TreeNode) => string, 
/**
 * Returns a node array with the children of a node on the given path
 * If the node doesn't have children, the node gets returned
 * @param tree - The main tree
 * @param pathLocator - The separated address parts of a node
 * @return - Nodes
 */
renderLevel: (tree: Tree, pathLocator: string) => TreeNode[] | TreeNode | null | undefined, 
/**
 * Returns the found nodes based on a search string and a given tree to be searched
 * @param tree - The main tree
 * @param search - The search string
 * @param pathLocator - The separated address parts of a node
 * @return - The found nodes
 */
computeDataPlane: (tree: Tree, search: string | undefined, pathLocator: string) => TreeNode[], 
/**
 * Returns the classes of a row based its selection state
 * @param classes - The default classes
 * @param node - Node to check
 * @param highlightedNode - Currently highlighted node
 * @return - The CSS classes
 */
computeRowClass: (classes: string, node: TreeNode, highlightedNode?: TreeNode | null) => string, 
/**
 * Selects the doubled clicked node and dispatches a node-dblclicked event.
 * @param event The triggering event
 * @param host Host
 * @return undefined
 */
onNodeDblClicked: (event: Event, host: HTMLElement) => void, 
/**
 * Returns the nodes on a path specified by a given path locator
 * @param pathLocator - The separated address parts of a node
 * @param tree - The main tree
 * @return - The found nodes or empty array
 */
getTreePathParts: (pathLocator: string, tree: Tree) => TreeNode[], 
/**
 * Returns a node based on a given path locator.
 * If pathLocator is empty or not defined, null gets returned.
 * If pathLocator is only partly valid, the last valid node gets returned.
 * @param pathLocator - The separated address parts of a node
 * @param tree - The main tree
 * @return - The found node
 */
getNode: (pathLocator: string, tree: Tree) => TreeNode | null;
//# sourceMappingURL=helpers.d.ts.map