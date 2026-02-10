# cosmoz-treenode-navigator

[![Build Status](https://github.com/Neovici/cosmoz-treenode-navigator/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-treenode-navigator/actions?workflow=Github+CI)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A [PionJS](https://github.com/nicholaspmccracken/pion)-based web component for navigating, searching, and selecting nodes in a hierarchical tree structure.

## Installation

```sh
npm install @neovici/cosmoz-treenode-navigator
```

## Quick Start

```js
import { component, html } from '@pionjs/pion';
import '@neovici/cosmoz-treenode-navigator/cosmoz-treenode-button-view';
import { DefaultTree } from '@neovici/cosmoz-tree';

const treeData = {
	1: {
		name: 'Root',
		pathLocator: '1',
		children: {
			2: {
				name: 'Child A',
				pathLocator: '1.2',
				children: {},
			},
			3: {
				name: 'Child B',
				pathLocator: '1.3',
				children: {
					4: { name: 'Grandchild', pathLocator: '1.3.4', children: {} },
				},
			},
		},
	},
};

const tree = new DefaultTree(treeData);

const MyApp = () => html`
	<cosmoz-treenode-button-view
		.tree=${tree}
		show-reset
		@node-path-changed=${(e) => console.log('Selected:', e.detail.value)}
	></cosmoz-treenode-button-view>
`;

customElements.define('my-app', component(MyApp));
```

## Tree Data Structure

The component expects a `Tree` object from [`@neovici/cosmoz-tree`](https://github.com/Neovici/cosmoz-tree), typically instantiated with `new DefaultTree(data)`.

The data is a nested object keyed by node IDs:

```json
{
	"1": {
		"name": "Root",
		"pathLocator": "1",
		"children": {
			"7": {
				"name": "child seven",
				"pathLocator": "1.7",
				"children": {}
			},
			"8": {
				"name": "child eight",
				"pathLocator": "1.8",
				"children": {
					"9": {
						"name": "child nine",
						"pathLocator": "1.8.9",
						"children": {}
					}
				}
			}
		}
	}
}
```

The property names `name` and `children` are configurable via `DefaultTree` options (`searchProperty`, `childProperty`). The `pathLocatorSeparator` defaults to `"."`.

## Components

### `<cosmoz-treenode-button-view>`

A trigger button that opens a dialog containing the tree navigator. This is the main component most consumers will use.

#### Properties / Attributes

| Property                | Attribute           | Type      | Default | Description                                     |
| ----------------------- | ------------------- | --------- | ------- | ----------------------------------------------- |
| `tree`                  | --                  | `Tree`    | --      | The tree data structure (set via JS)            |
| `nodePath`              | --                  | `string`  | `''`    | Selected node's path locator (two-way bindable) |
| `opened`                | --                  | `boolean` | `false` | Whether the dialog is open (two-way bindable)   |
| `showReset`             | `show-reset`        | `boolean` | `false` | Show the reset/clear button                     |
| `searchMinLength`       | `search-min-length` | `number`  | `3`     | Minimum characters to trigger search            |
| `searchDebounceTimeout` | --                  | `number`  | `2000`  | Debounce timeout (ms) before search triggers    |

#### Events

| Event               | Detail               | Description                               |
| ------------------- | -------------------- | ----------------------------------------- |
| `node-path-changed` | `{ value: string }`  | Fired when the selected node path changes |
| `opened-changed`    | `{ value: boolean }` | Fired when the dialog opens or closes     |

#### Slots

| Slot        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `prefix`    | Button icon (defaults to folder icon, override to customize) |
| `suffix`    | Content after the button label                               |
| _(default)_ | Passed through to the inner `<cosmoz-treenode-navigator>`    |

#### CSS Parts

| Part            | Description                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `actions`       | Container for the open button and optional reset button                        |
| `action-open`   | The main trigger button (`cosmoz-button`)                                      |
| `action-reset`  | The reset/clear button (`cosmoz-button`, visible when `showReset && nodePath`) |
| `dialog`        | The `<dialog>` element                                                         |
| `header`        | Dialog header                                                                  |
| `heading`       | Dialog heading (`<h1>`)                                                        |
| `main`          | Dialog main content area                                                       |
| `footer`        | Dialog footer                                                                  |
| `select-button` | The "Select" confirmation button                                               |
| `cancel-button` | The "Cancel" button                                                            |

#### Container Query Support

The host element is declared as a CSS container (`container-type: inline-size`). When the component's width shrinks to 80px or less, the selected node path text is automatically hidden, leaving only the icon. This allows graceful degradation in narrow layouts without media queries.

```css
/* Built-in behavior */
:host {
	container-type: inline-size;
}

@container (max-width: 80px) {
	.path-text {
		display: none;
	}
}
```

---

### `<cosmoz-treenode-navigator>`

The inner navigator component that provides tree browsing, search, and keyboard navigation. Typically used inside `<cosmoz-treenode-button-view>`, but can be used standalone.

#### Properties

| Property                | Type      | Default     | Description                                     |
| ----------------------- | --------- | ----------- | ----------------------------------------------- |
| `tree`                  | `Tree`    | --          | The tree data structure (set via JS)            |
| `nodePath`              | `string`  | `''`        | Selected node's path locator (two-way bindable) |
| `highlightedNodePath`   | `string`  | `''`        | Currently highlighted node's path (notify only) |
| `opened`                | `boolean` | `undefined` | Controls keyboard listeners and scroll behavior |
| `searchMinLength`       | `number`  | `3`         | Minimum characters to trigger search            |
| `searchDebounceTimeout` | `number`  | `2000`      | Debounce timeout (ms) before search triggers    |

#### Events

| Event                           | Detail              | Description                               |
| ------------------------------- | ------------------- | ----------------------------------------- |
| `node-path-changed`             | `{ value: string }` | Fired when the selected node path changes |
| `highlighted-node-path-changed` | `{ value: string }` | Fired when the highlighted node changes   |

#### CSS Custom Properties

| Property                                              | Default                         | Description                                 |
| ----------------------------------------------------- | ------------------------------- | ------------------------------------------- |
| `--cosmoz-treenode-navigator-icon-color`              | `currentColor`                  | Color of navigation icons (home, arrow)     |
| `--cosmoz-treenode-navigator-select-node-icon-color`  | `var(--primary-color, #3a91e2)` | Color of the selected/highlighted node icon |
| `--cosmoz-treenode-navigator-list-item-focused-color` | `#f0f8ff`                       | Background color of focused list items      |
| `--cosmoz-treenode-navigator-list-height`             | `50vh`                          | Height of the scrollable node list          |
| `--cz-text-color`                                     | `inherit`                       | General text color                          |
| `--cz-bg-color`                                       | `#f5f5f5`                       | Section header background color             |

## Internationalization

All UI text is managed via [`i18next`](https://www.i18next.com/). The English text is used as the translation key, so it works out of the box when no translations are loaded (i18next returns the key as-is).

Consumers must initialize i18next before using the components:

```js
import i18next from 'i18next';

i18next.init({ lng: 'en', resources: {} });
```

To provide translations, use `i18next.addResourceBundle()` or any i18next backend:

```js
i18next.addResourceBundle('sv', 'translation', {
	'Select a node': 'Valj en nod',
	'Search or navigate to chosen destination':
		'Sok eller navigera till vald destination',
	'Search...': 'Sok...',
	'Click to search again but globally': 'Klicka for att soka igen men globalt',
	Select: 'Valj',
	Cancel: 'Avbryt',
});
```

### Translation Keys

| Key                                        | Used in                                     |
| ------------------------------------------ | ------------------------------------------- |
| `Select a node`                            | Button placeholder when no node is selected |
| `Search or navigate to chosen destination` | Dialog heading                              |
| `Search...`                                | Search input placeholder                    |
| `Click to search again but globally`       | Global search button label                  |
| `Select`                                   | Dialog confirm button                       |
| `Cancel`                                   | Dialog cancel button                        |

## Migrating from v7

This version includes breaking changes to the component API.

### Property Changes

| Before                    | After                | Notes                                                        |
| ------------------------- | -------------------- | ------------------------------------------------------------ |
| `noReset` (opt-out)       | `showReset` (opt-in) | Inverted logic: set `show-reset` to display the reset button |
| `selectedNode`            | _removed_            | Use `nodePath` instead                                       |
| `highlightedNode`         | _removed_            | Use `highlightedNodePath` (on the navigator) instead         |
| `dialogText`              | _removed_            | Now managed via `i18next.t()`                                |
| `buttonTextPlaceholder`   | _removed_            | Now managed via `i18next.t()`                                |
| `searchPlaceholder`       | _removed_            | Now managed via `i18next.t()`                                |
| `searchGlobalPlaceholder` | _removed_            | Now managed via `i18next.t()`                                |

`nodePath` is now the single source of truth for the selected node. Dialog navigation no longer affects the selected node until explicitly confirmed via the Select button.

### Dependency Changes

| Before                    | After                         |
| ------------------------- | ----------------------------- |
| `@neovici/cosmoz-i18next` | `i18next` (direct dependency) |

All UI text is now translated via `i18next.t()` instead of being passed as component properties. See [Internationalization](#internationalization) for details.

### Selector Changes

All buttons have been converted to `cosmoz-button` components. Update any CSS selectors accordingly:

| Before                         | After                                 |
| ------------------------------ | ------------------------------------- |
| `button.action-open`           | `cosmoz-button[part="action-open"]`   |
| `button.action-reset`          | `cosmoz-button[part="action-reset"]`  |
| `button[part="select-button"]` | `cosmoz-button[part="select-button"]` |
| `button[part="cancel-button"]` | `cosmoz-button[part="cancel-button"]` |
| `button.btn-ghost`             | `cosmoz-button[variant="link"]`       |

### Slot Changes

| Before          | After    | Notes                                                      |
| --------------- | -------- | ---------------------------------------------------------- |
| `button-before` | `prefix` | Now uses default slot content instead of JS-based toggling |
| `button-after`  | `suffix` | Renamed for consistency                                    |

## Development

| Command                   | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `npm start`               | Start Storybook dev server on port 8000            |
| `npm test`                | Run all tests (unit + storybook interaction tests) |
| `npm run test:unit`       | Run unit tests only                                |
| `npm run test:storybook`  | Run storybook interaction tests only               |
| `npm run test:watch`      | Run tests in watch mode                            |
| `npm run lint`            | Lint with ESLint                                   |
| `npm run build`           | Compile TypeScript                                 |
| `npm run storybook:build` | Build static Storybook                             |

Tests use [Vitest](https://vitest.dev/) with two projects: `unit` (jsdom) for helper function tests, and `storybook` (Playwright browser mode) for component interaction tests via Storybook play functions.

## License

[Apache-2.0](LICENSE)
