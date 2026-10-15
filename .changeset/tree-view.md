---
'@neovici/cosmoz-treenode-navigator': major
---

Show the tree as an expandable `cosmoz-tree-view` (Untitled UI tree view) instead of a one-level drill-down list.

- Click highlights, the chevron expands, double-click or Enter selects; full tree keyboard navigation.
- Opens on the current node with its ancestors and children open; the highlighted node's path sits above the search, each step clickable.
- Search covers the whole tree and shows matches in place under their ancestors.
- Children are sorted once per node and cached, on a copy — the tree's own arrays are no longer reordered.

Breaking: the drill-down header, home icon and "search again globally" button are gone; the `--cosmoz-treenode-navigator-select-node-icon-color`, `--cosmoz-treenode-navigator-list-item-focused-color` and `--cosmoz-treenode-navigator-icon-color` custom properties are removed; the `node`, `node-name`, `node-arrow`, `home-icon` and `global-search-button` test ids are replaced by `treeitem` roles and the `tree`, `path` and `no-results` test ids. See the README's migration notes.
