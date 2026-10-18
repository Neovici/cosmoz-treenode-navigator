---
'@neovici/cosmoz-treenode-navigator': major
---

Use Max's expandable tree view with both in-memory trees and asynchronous NodeSource providers. Branches load on expansion; search matches appear below their ancestors in source order. Keep selected paths, support retry after failed requests, and style the responsive dialog with semantic theme tokens. Row test IDs and drill-down navigation are replaced by treeitem roles and breadcrumbs.

Keep the virtualized tree renderer inside the navigator package, including lazy branch and keyboard-focus behavior, without requiring a separate tree-view dependency.
