---
'@neovici/cosmoz-treenode-navigator': minor
---

`cosmoz-treenode-navigator` and `cosmoz-treenode-button-view` accept a `source` property, so a caller can serve the tree one level at a time instead of handing over the whole hierarchy as a `Tree`. A source may answer asynchronously; the navigator keeps the previous level on screen while the next one loads, and shows a loading and an error row. An empty level suggests searching, and a search with no hits says so. `treeSource(tree)` wraps a `Tree` and is what the navigator uses when no source is given, so existing callers are unaffected. The `NodeSource` type and `treeSource` are exported from `@neovici/cosmoz-treenode-navigator/source`.
