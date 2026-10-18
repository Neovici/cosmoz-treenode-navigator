# Changelog

## 9.0.0

### Major Changes

- bfd7c6a: Use Max's expandable tree view with both in-memory trees and asynchronous NodeSource providers. Branches load on expansion; search matches appear below their ancestors in source order. Keep selected paths, support retry after failed requests, and style the responsive dialog with semantic theme tokens. Row test IDs and drill-down navigation are replaced by treeitem roles and breadcrumbs.

  Keep the virtualized tree renderer inside the navigator package, including lazy branch and keyboard-focus behavior, without requiring a separate tree-view dependency.

## 8.5.0

### Minor Changes

- dc13918: `cosmoz-treenode-navigator` and `cosmoz-treenode-button-view` accept a `source` property, so a caller can serve the tree one level at a time instead of handing over the whole hierarchy as a `Tree`. A source may answer asynchronously; the navigator keeps the previous level on screen while the next one loads, and shows a loading and an error row. An empty level suggests searching, and a search with no hits says so. `treeSource(tree)` wraps a `Tree` and is what the navigator uses when no source is given, so existing callers are unaffected. The `NodeSource` type and `treeSource` are exported from `@neovici/cosmoz-treenode-navigator/source`.

## 8.4.1

### Patch Changes

- 5309041: Use cosmoz-tokens for the selected node, its icon and the dialog backdrop

  The selected node fills with `--cz-color-bg-tertiary` and its icon uses
  `--cz-color-fg-secondary`, instead of the old blue defaults. The section
  header falls back to `--cz-color-bg-secondary`, node names inherit the app
  font instead of Roboto, and the button view's backdrop matches
  cosmoz-dialog. The unused `--cosmoz-treenode-navigator-list-item-focused-color`
  is removed. `--cosmoz-listbox-active-color` and
  `--cosmoz-treenode-navigator-select-node-icon-color` still override.

## 8.4.0

### Minor Changes

- 6b9f16e: `cosmoz-treenode-button-view` accepts a `size` attribute (`sm` | `md` | `lg` | `xl`) and passes it to its trigger button. When the container is too narrow for the label, the trigger no longer insists on a 50px minimum and centres its icon instead, so it fits an icon-only sidebar rail.
- e850531: Allow `@neovici/cosmoz-tokens` ^3 || ^4 (light-dark() adoption)

  The JS surface used by the component (`truncate`) is unchanged between
  tokens v3 and v4, so the widened range keeps the component compatible
  with hosts on either major. The Storybook build takes the shared cfg
  preset so `light-dark()` survives CSS minification.

## 8.3.1

### Patch Changes

- 37ff083: Document the exported `action-open-button` part for styling the open button's inner button element.

## 8.3.0

### Minor Changes

- c7ac475: Add `variant` attribute to `cosmoz-treenode-button-view`. Defaults to `secondary`, allowing consumers to change the open button variant (e.g. to `tertiary`).

## 8.2.0

### Features

- expand i18next range to >=23.0.0 <27.0.0
- add variant attribute to cosmoz-treenode-button-view (defaults to 'secondary')
