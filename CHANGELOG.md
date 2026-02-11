## [8.1.2](https://github.com/Neovici/cosmoz-treenode-navigator/compare/v8.1.1...v8.1.2) (2026-02-11)

### Bug Fixes

* add margin-block to global search button ([#192](https://github.com/Neovici/cosmoz-treenode-navigator/issues/192)) ([fe97f39](https://github.com/Neovici/cosmoz-treenode-navigator/commit/fe97f39758ac9a8ca4a920f2b7a2cbade9cefd79))

## [8.1.1](https://github.com/Neovici/cosmoz-treenode-navigator/compare/v8.1.0...v8.1.1) (2026-02-11)

### Bug Fixes

* replace reset icon with xIcon and clean up CSS ([#190](https://github.com/Neovici/cosmoz-treenode-navigator/issues/190)) ([22a8428](https://github.com/Neovici/cosmoz-treenode-navigator/commit/22a84285fb612eca3c2bab907bbdd295bdde1d45))

## [8.1.0](https://github.com/Neovici/cosmoz-treenode-navigator/compare/v8.0.0...v8.1.0) (2026-02-11)

### Features

* add tooltip to treenode-button-view showing full node path ([#189](https://github.com/Neovici/cosmoz-treenode-navigator/issues/189)) ([67cbe57](https://github.com/Neovici/cosmoz-treenode-navigator/commit/67cbe5740521745ed27eb7d7def845774818e1ce))

## [8.0.0](https://github.com/Neovici/cosmoz-treenode-navigator/compare/v7.9.1...v8.0.0) (2026-02-10)

### ⚠ BREAKING CHANGES

* cosmoz-treenode-button-view: removed properties
dialogText, buttonTextPlaceholder, searchPlaceholder,
searchGlobalPlaceholder, selectedNode, multiSelection, nodesOnNodePath,
highlightedNode. noReset replaced by showReset (inverted logic). opened
changed from internal useState to external useProperty. Slots renamed:
button-before to prefix, button-after to suffix. Native button elements
replaced by cosmoz-button. Removed CSS custom properties for button
styling.
* cosmoz-treenode-navigator: removed properties
searchPlaceholder, searchGlobalPlaceholder, selectedNode,
nodesOnNodePath, highlightedNode (use highlightedNodePath string).
Removed node-dblclicked event. Ghost buttons replaced by
cosmoz-button variant=link.
* @neovici/cosmoz-i18next removed, i18next@^23.12.2
added as direct dependency. @neovici/cosmoz-button@^1.0.0 and
@neovici/cosmoz-tokens@^3.2.1 added. @pionjs/pion minimum bumped to ^2.12.0.

### Features

* simplify state management and add container query support ([#186](https://github.com/Neovici/cosmoz-treenode-navigator/issues/186)) ([5080b0a](https://github.com/Neovici/cosmoz-treenode-navigator/commit/5080b0a2cbd535bc965f7aee481d128734767417))

## [7.9.1](https://github.com/Neovici/cosmoz-treenode-navigator/compare/v7.9.0...v7.9.1) (2026-02-09)

### Bug Fixes

- handle invalid nodePath gracefully in helper functions ([#187](https://github.com/Neovici/cosmoz-treenode-navigator/issues/187)) ([8774da4](https://github.com/Neovici/cosmoz-treenode-navigator/commit/8774da4d14ff928f37dc2539583eb3064dc46833))

# [7.9.0](https://github.com/Neovici/cosmoz-treenode-navigator/compare/v7.8.0...v7.9.0) (2026-01-28)

### Bug Fixes

- repository URL case sensitivity ([2fdd508](https://github.com/Neovici/cosmoz-treenode-navigator/commit/2fdd508b22eaaed04991de33c8a5c7db7c765d1c))

### Features

- add duplicate web component check ([#183](https://github.com/Neovici/cosmoz-treenode-navigator/issues/183)) ([9cf57e7](https://github.com/Neovici/cosmoz-treenode-navigator/commit/9cf57e7a5ddee5c7b4757f007c64546e50235260))

# [7.8.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.7.0...v7.8.0) (2025-11-27)

### Bug Fixes

- don't change node button selection when navigating ([3a17fff](https://github.com/neovici/cosmoz-treenode-navigator/commit/3a17fff49f9856e0012acb35ff950a4b95c4c6ba))

### Features

- don't change button state while navigating + fixes ([#176](https://github.com/neovici/cosmoz-treenode-navigator/issues/176)) ([7428d90](https://github.com/neovici/cosmoz-treenode-navigator/commit/7428d9031ba142d999808ea0c3a85573ca74c17c))

## [7.7.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.7.0...v7.7.1) (2025-11-27)

### Bug Fixes

- don't change node button selection when navigating ([3a17fff](https://github.com/neovici/cosmoz-treenode-navigator/commit/3a17fff49f9856e0012acb35ff950a4b95c4c6ba))

# [7.7.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.6.1...v7.7.0) (2025-11-24)

### Features

- text color variables ([#169](https://github.com/neovici/cosmoz-treenode-navigator/issues/169)) ([f602494](https://github.com/neovici/cosmoz-treenode-navigator/commit/f6024945cdf16707b2c3bb9337758c20c65cbe2a))

## [7.6.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.6.0...v7.6.1) (2025-11-24)

### Bug Fixes

- don't select node until user clicks select ([#174](https://github.com/neovici/cosmoz-treenode-navigator/issues/174)) ([fa68432](https://github.com/neovici/cosmoz-treenode-navigator/commit/fa68432c99062234a50b098a7f78acc29e870bff))

# [7.6.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.5.1...v7.6.0) (2025-10-10)

### Features

- color variable for icons ([#167](https://github.com/neovici/cosmoz-treenode-navigator/issues/167)) ([5f99fa3](https://github.com/neovici/cosmoz-treenode-navigator/commit/5f99fa358c255f43ee97b8e780aa12e0b9718fd0))

## [7.5.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.5.0...v7.5.1) (2025-09-10)

### Bug Fixes

- add storybook plugin for documentation ([12c15ef](https://github.com/neovici/cosmoz-treenode-navigator/commit/12c15ef48643c807ea430394436604bf5768bc45))

# [7.5.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.4.2...v7.5.0) (2025-09-03)

### Features

- new color variable ([a28199f](https://github.com/neovici/cosmoz-treenode-navigator/commit/a28199f15d19cb267d5014c9ae4a28393daf58c0))

## [7.4.2](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.4.1...v7.4.2) (2025-08-04)

### Bug Fixes

- automerge workflow ([380b328](https://github.com/neovici/cosmoz-treenode-navigator/commit/380b328a9377c6feb742b7b87ad6ac6d4db572e8))

## [7.4.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.4.0...v7.4.1) (2025-08-03)

### Bug Fixes

- **button-view:** correct the extra slots ([6489e07](https://github.com/neovici/cosmoz-treenode-navigator/commit/6489e07763b304b2998f3a59bcaf0d59aeeeac54))

# [7.4.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.3.0...v7.4.0) (2025-08-03)

### Features

- **button-view:** add more slots ([83b0420](https://github.com/neovici/cosmoz-treenode-navigator/commit/83b0420334ba66fc1a9a15d14f0be707ce2ccc42))

# [7.3.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.2.0...v7.3.0) (2025-07-21)

### Features

- new automerge workflow ([ec780e9](https://github.com/neovici/cosmoz-treenode-navigator/commit/ec780e982d45ca7e929cdd7381b0cf729a005a13))

# [7.2.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.1.1...v7.2.0) (2025-07-09)

### Features

- add backwards compatibility for "nodePath" and "selectedNode" ([8000ba8](https://github.com/neovici/cosmoz-treenode-navigator/commit/8000ba80a3228fef8c4454cb7cd207b8713bd3ad))

## [7.1.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.1.0...v7.1.1) (2025-06-23)

### Bug Fixes

- font styles didn't follow convert pr ([#159](https://github.com/neovici/cosmoz-treenode-navigator/issues/159)) ([e23d120](https://github.com/neovici/cosmoz-treenode-navigator/commit/e23d120f17c41b9681d82852f276ff01543eb340))

# [7.1.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.0.2...v7.1.0) (2025-04-10)

### Features

- debounce search and optimize state ([#149](https://github.com/neovici/cosmoz-treenode-navigator/issues/149)) ([1774f3e](https://github.com/neovici/cosmoz-treenode-navigator/commit/1774f3e62585ef0ee50546259359796462b4bfec))

## [7.0.2](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.0.1...v7.0.2) (2025-03-31)

### Bug Fixes

- **style:** vars allowing styling from outside coherently with new color theme guidelines ([26b9405](https://github.com/neovici/cosmoz-treenode-navigator/commit/26b9405ee0cd6c827f8cde93308092634b6624a0))

## [7.0.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v7.0.0...v7.0.1) (2025-03-21)

### Bug Fixes

- use "nodesOnNodePath" as main state ([0727392](https://github.com/neovici/cosmoz-treenode-navigator/commit/072739272a436358d26f12d9632048d1783b14eb))

# [7.0.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v6.0.2...v7.0.0) (2025-03-19)

- refactor!: convert codebase to TS (#146) ([5961c77](https://github.com/neovici/cosmoz-treenode-navigator/commit/5961c77e2e714b191647d114dae7d742741e718f)), closes [#146](https://github.com/neovici/cosmoz-treenode-navigator/issues/146)

### BREAKING CHANGES

- convert "<cosmoz-treenode-button-view>" to Pion

## [6.0.2](https://github.com/neovici/cosmoz-treenode-navigator/compare/v6.0.1...v6.0.2) (2025-02-14)

### Bug Fixes

- **styles:** added styling that underlines the hovered part of the path ([#144](https://github.com/neovici/cosmoz-treenode-navigator/issues/144)) ([13aab03](https://github.com/neovici/cosmoz-treenode-navigator/commit/13aab03d73ff0f6973df3519cc9d517c968f5c24))

## [6.0.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v6.0.0...v6.0.1) (2024-04-19)

### Bug Fixes

- **dependencies:** newest input dependencies are needed in all the repos using them ([5ce9675](https://github.com/neovici/cosmoz-treenode-navigator/commit/5ce9675d7fa4b0f73a0dd1a85f7d21e9834ed3f9))

# [6.0.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.7.0...v6.0.0) (2024-01-11)

### Features

- update to pion ([8090232](https://github.com/neovici/cosmoz-treenode-navigator/commit/80902326968e366ac0a6d7300db63ebf2ba173a7))

### BREAKING CHANGES

- Update to @pionjs/pion

# [5.7.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.6.0...v5.7.0) (2023-12-22)

### Features

- include test data in package ([110b002](https://github.com/neovici/cosmoz-treenode-navigator/commit/110b002b4042ded96b52ea60f9e7ed68b5b96e53))

# [5.6.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.5.0...v5.6.0) (2023-12-22)

### Features

- handle undefined node in virtualizer ([2113d89](https://github.com/neovici/cosmoz-treenode-navigator/commit/2113d89042e51a71f4b144cfab7e9130fdb75cb0))
- update packaged files ([65de45b](https://github.com/neovici/cosmoz-treenode-navigator/commit/65de45b1a974d8aa476dc31a66c0b41cd7565f18))

# [5.5.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.4.2...v5.5.0) (2023-04-25)

### Features

- update virtualizer ([5112227](https://github.com/neovici/cosmoz-treenode-navigator/commit/51122278c26cbe01b90d1bc155b0dcb5c3a5e0b0))

## [5.4.2](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.4.1...v5.4.2) (2022-12-01)

### Bug Fixes

- handle missing tree ([8a45a18](https://github.com/neovici/cosmoz-treenode-navigator/commit/8a45a1828ff0304b760bbafb94e21fc8eac4af52))

## [5.4.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.4.0...v5.4.1) (2022-11-08)

### Bug Fixes

- **button-view:** update safari rule ([c98f7fc](https://github.com/neovici/cosmoz-treenode-navigator/commit/c98f7fc63328724fbd0e19ca06a9dc2b7acd8633))

# [5.4.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.3.0...v5.4.0) (2022-11-03)

### Features

- **select:** close dialog manually ([3abb0d0](https://github.com/neovici/cosmoz-treenode-navigator/commit/3abb0d0d75c11ad3e77001ba401f4fe998ad66a7))

# [5.3.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.2.0...v5.3.0) (2022-08-01)

### Bug Fixes

- close on enter ([e7cd4d1](https://github.com/neovici/cosmoz-treenode-navigator/commit/e7cd4d191abdf1b9486a5d097154f530130d4a96))
- **cosmoz-treenode-button-view:** pass opened to treenode ([4f43ade](https://github.com/neovici/cosmoz-treenode-navigator/commit/4f43ade0844fe5168cf84f6f7833dc61a608e176))
- **renderLevel:** handle leaf nodes ([760f6bf](https://github.com/neovici/cosmoz-treenode-navigator/commit/760f6bf4888ccbec0184ca72ea21ab4781e66f46))

### Features

- **treenode-navigator:** autoscroll to highlighed node ([5c55a38](https://github.com/neovici/cosmoz-treenode-navigator/commit/5c55a38ad406b3d711405b8173c388fb26d5eb6c))

# [5.2.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.1.0...v5.2.0) (2022-08-01)

### Features

- **cosmoz-treenode-navigator:** improve performance ([ac12d74](https://github.com/neovici/cosmoz-treenode-navigator/commit/ac12d74345501e34cdccde6962563a24d6efed4f))

# [5.1.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.0.1...v5.1.0) (2022-07-28)

### Bug Fixes

- **ci:** worflow typo ([17b92aa](https://github.com/neovici/cosmoz-treenode-navigator/commit/17b92aa332f0411b6548729002fd9cf62a99d223))

### Features

- **cosmoz-treenode-navigator:** add keyboard navigation ([26b6d42](https://github.com/neovici/cosmoz-treenode-navigator/commit/26b6d42d99737d0b48a7fbc21a8677117b1d8a9e))
- refactor with lit-virtualizer instead of listbox ([7b69ab4](https://github.com/neovici/cosmoz-treenode-navigator/commit/7b69ab4e0e049c9c7f8e03c3b781f02fab83eb18))
- support `Right` key ([28a4df6](https://github.com/neovici/cosmoz-treenode-navigator/commit/28a4df6d35bc62ac49aba81135891ce8fcacfa05))

## [5.0.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v5.0.0...v5.0.1) (2022-07-27)

### Bug Fixes

- **search:** remove label ([950ed7c](https://github.com/neovici/cosmoz-treenode-navigator/commit/950ed7cef3ab282f5fea8925dae121c771723eab))

# [5.0.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v4.0.0...v5.0.0) (2022-07-19)

### Features

- upgrade to cosmoz-utils@5 ([8c70d76](https://github.com/neovici/cosmoz-treenode-navigator/commit/8c70d76d8157e0793f10566a7f75e98f44d0a67f))

### BREAKING CHANGES

- Upgrade to cosmoz-utils@5

# [4.0.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.1.1...v4.0.0) (2022-07-05)

### Code Refactoring

- **migration:** index.html - Remove formatting changes ([c12af88](https://github.com/neovici/cosmoz-treenode-navigator/commit/c12af889c5b4f5f3b191538e2280c4b29b185b3e))

### BREAKING CHANGES

- **migration:** migration to haunted.js and Lit

## [3.1.1](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.1.0...v3.1.1) (2022-06-02)

### Bug Fixes

- **chips:** scrollbar for many chips ([dc68de6](https://github.com/neovici/cosmoz-treenode-navigator/commit/dc68de694ebedc8a78b4df8ecdf13d108a82f1f8))

# [3.1.0](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.0.8...v3.1.0) (2021-12-07)

### Features

- add button and icon slots ([d7ea96d](https://github.com/neovici/cosmoz-treenode-navigator/commit/d7ea96dc06bf01e3dc33cbf76fa523524d67ba2c))

## [3.0.8](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.0.7...v3.0.8) (2021-10-17)

### Bug Fixes

- css comments ([f9d97f3](https://github.com/neovici/cosmoz-treenode-navigator/commit/f9d97f3e257044e6ebd78f69f3571c8663a741a9))

## [3.0.7](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.0.6...v3.0.7) (2021-10-17)

### Bug Fixes

- **cosmoz-treenode-button-view:** ios rtl overflow ([80725a7](https://github.com/neovici/cosmoz-treenode-navigator/commit/80725a763f29171cb6af20af81a02a82d1304369))

## [3.0.6](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.0.5...v3.0.6) (2021-10-16)

### Bug Fixes

- **cosmoz-treenode-button-view:** rtl fixes ([43e70a3](https://github.com/neovici/cosmoz-treenode-navigator/commit/43e70a3684ce2187d0afbb0666613d62067ef02a))

## [3.0.5](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.0.4...v3.0.5) (2021-10-16)

### Bug Fixes

- **cosmoz-treenode-button-view:** mobile tweaks ([d9444c4](https://github.com/neovici/cosmoz-treenode-navigator/commit/d9444c47f1bf587579fade958efab47dd9687e3c))
- **cosmoz-treenode-navigator:** remove iron-flex-layout ([6cc69b6](https://github.com/neovici/cosmoz-treenode-navigator/commit/6cc69b67e75e92f2c0953f95061b0199e41fa5e3))
- replace tap with click ([505d103](https://github.com/neovici/cosmoz-treenode-navigator/commit/505d103f6f84ccdcbdcf5571bdb53abed0703386))

## [3.0.4](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.0.3...v3.0.4) (2020-01-06)

### Bug Fixes

- sections were incorrectly created ([dfb4919](https://github.com/neovici/cosmoz-treenode-navigator/commit/dfb4919943379464a676a55e06348413a1d9c550))

## [3.0.3](https://github.com/neovici/cosmoz-treenode-navigator/compare/v3.0.2...v3.0.3) (2019-10-10)

### Bug Fixes

- **ci:** adopt semantic release ([c3ea8c0](https://github.com/neovici/cosmoz-treenode-navigator/commit/c3ea8c08f68d86942b9aef1319a0ee60390dadd7))
