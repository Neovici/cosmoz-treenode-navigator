---
'@neovici/cosmoz-treenode-navigator': patch
---

Use cosmoz-tokens for the selected node, its icon and the dialog backdrop

The selected node fills with `--cz-color-bg-tertiary` and its icon uses
`--cz-color-fg-secondary`, instead of the old blue defaults. The section
header falls back to `--cz-color-bg-secondary`, node names inherit the app
font instead of Roboto, and the button view's backdrop matches
cosmoz-dialog. The unused `--cosmoz-treenode-navigator-list-item-focused-color`
is removed. `--cosmoz-listbox-active-color` and
`--cosmoz-treenode-navigator-select-node-icon-color` still override.
