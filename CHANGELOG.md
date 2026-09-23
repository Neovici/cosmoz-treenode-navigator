# Changelog

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
