---
'@neovici/cosmoz-treenode-navigator': minor
---

Open on the current node: list only it and what is below it, and search within it. A "Search in" toggle under the search field switches between the current node and all nodes, and a search with no matches in the node shows matches from all nodes instead. A step in the path above it moves the list up there, and the first step lists the top level. Sources that can't scope their search (`scopedSearch: false`) still search everywhere.
