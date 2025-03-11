
export type TreeNode = {
  name: string;
  pathLocator: string;
  path?: string;
  id?: string | number;
  children?: Record<string | number, TreeNode>;
  parentSectionName?: string;
  [key: string]: any;
};

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

export type TreenodeNavigatorProps = {
  tree: Tree;
  searchPlaceholder?: string;
  searchGlobalPlaceholder?: string;
  searchMinLength?: number;
  opened?: boolean;
};

export type NavigatorMeta = {
  dataPlane: TreeNode[];
  highlightedNode: TreeNode | null;
  onNodeClick: (node: TreeNode | null) => void;
};