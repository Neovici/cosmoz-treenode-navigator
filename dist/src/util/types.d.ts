export type TreeNode = {
    name: string;
    pathLocator: string;
    path?: string;
    id?: string | number;
    children?: Record<string | number, TreeNode>;
    [key: string]: any;
};
export type Tree = {
    searchProperty: string;
    pathLocatorSeparator: string;
    hasChildren: (node: TreeNode) => boolean;
    getNodeByPathLocator: (pathLocator: string) => TreeNode | null;
    getChildren: (node: TreeNode) => TreeNode[];
    getPathNodes: (pathLocator: string) => TreeNode[];
    getPathString: (path: string, property: string) => string;
    searchNodes: (searchString: string, nodes: TreeNode[], exact?: boolean) => TreeNode[];
};
export type TreenodeNavigatorProps = {
    tree: Tree;
    searchPlaceholder?: string;
    searchGlobalPlaceholder?: string;
    searchMinLength?: number;
    opened?: boolean;
    highlightedNode?: TreeNode;
};
export type TreenodeButtonViewProps = {
    tree: Tree;
    multiSelection?: boolean;
    dialogText?: string;
    buttonTextPlaceholder?: string;
    searchPlaceholder?: string;
    noReset?: boolean;
    searchGlobalPlaceholder?: string;
    searchMinLength?: number;
    nodePath?: string;
    highlightedNode?: TreeNode;
};
//# sourceMappingURL=types.d.ts.map