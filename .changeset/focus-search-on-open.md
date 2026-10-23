---
'@neovici/cosmoz-treenode-navigator': patch
---

Focus the search field when the node picker opens, so you can type to search right away. The dialog's `autofocus` lookup couldn't reach the input inside the navigator's shadow root, so the close button took focus instead.
