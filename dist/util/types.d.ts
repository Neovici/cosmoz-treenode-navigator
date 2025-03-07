/**
 * Tree node interface
 */
export type TreeNode = {
    name: string;
    pathLocator: string;
    path?: string;
    id?: string | number;
    children?: Record<string | number, TreeNode>;
    parentSectionName?: string;
    [key: string]: any;
};
/**
 * Tree interface
 */
export type Tree = {
    searchProperty: string;
    pathLocatorSeparator: string;
    getNodeByPathLocator: (pathLocator: string) => TreeNode | null;
    getChildren: (node: TreeNode | null) => TreeNode[];
    hasChildren: (node: TreeNode | null) => boolean;
    getPathNodes: (pathLocator: string) => TreeNode[];
    getPathString: (path: string, property: string) => string;
    searchNodes: (search: string, nodes: TreeNode[] | TreeNode, exact?: boolean) => TreeNode[];
};
/**
 * TreenodeNavigator component props
 */
export type TreenodeNavigatorProps = {
    /**
     * The main node structure
     */
    tree: Tree;
    /**
     * Placeholder for search field.
     */
    searchPlaceholder?: string;
    /**
     * Text displayed when local search has finished
     * to suggest a search on the entire tree
     */
    searchGlobalPlaceholder?: string;
    /**
     * Minimum length of searchValue to trigger a search
     */
    searchMinLength?: number;
    opened?: boolean;
};
/**
 * Meta data for the navigator
 */
export type NavigatorMeta = {
    dataPlane: TreeNode[];
    highlightedNode: TreeNode | null;
    onNodeClick: (node: TreeNode | null) => void;
};
//# sourceMappingURL=types.d.ts.map