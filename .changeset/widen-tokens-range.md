---
'@neovici/cosmoz-treenode-navigator': minor
---

Allow `@neovici/cosmoz-tokens` ^3 || ^4 (light-dark() adoption)

The JS surface used by the component (`truncate`) is unchanged between
tokens v3 and v4, so the widened range keeps the component compatible
with hosts on either major. The Storybook build takes the shared cfg
preset so `light-dark()` survives CSS minification.
