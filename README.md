# cosmoz-treenode-navigator

[![Build Status](https://github.com/Neovici/cosmoz-treenode-navigator/workflows/CI/badge.svg)](https://github.com/Neovici/cosmoz-treenode-navigator/actions?workflow=CI)

A [PionJS](https://github.com/pionjs/pion)-based web component for browsing, searching, and selecting nodes in a hierarchical tree structure. The tree is an expandable [`cosmoz-tree-view`](https://github.com/Neovici/cosmoz-tree-view) (after the Untitled UI tree view), with the highlighted node's path above the search so you keep your bearings in deep trees.

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

## Modes

Every mode has a live story and play-tests in Storybook (`npm start`).

### Browse

With no current node, every root is open. The chevron expands a node, a click **highlights** it (the dialog's Select button confirms it), and double-click or <kbd>Enter</kbd> **selects** it straight away.

```js
html`<cosmoz-treenode-navigator
	.tree=${tree}
	.opened=${true}
></cosmoz-treenode-navigator>`;
```

Story: _CosmozTreenodeNavigator › Browse_.

### Current node

With a `nodePath`, the navigator opens on it: highlighted, its ancestors and its own children open, and scrolled into view. A path that is only partly valid (`1.2.999`) opens its last valid node with nothing highlighted; an invalid one falls back to the open roots.

```js
html`<cosmoz-treenode-navigator
	.tree=${tree}
	.nodePath=${'1.100.300'}
	.opened=${true}
></cosmoz-treenode-navigator>`;
```

Story: _Open On Current Node_.

### Path

Above the search sits the highlighted node's path — `C: / Users / John` — with the node itself in bold. Each step is a button that selects that ancestor and scrolls the tree to it.

Story: _Open On Current Node_.

### Search

Typing at least `searchMinLength` characters (debounced by `searchDebounceTimeout`) searches the **whole** tree. Matches show in place, under their ancestors, all open, so you see where each match lives; their own children are hidden. With no matches a message replaces the tree. Clearing the search brings the tree back.

```js
html`<cosmoz-treenode-navigator
	.tree=${tree}
	.searchMinLength=${2}
	.searchDebounceTimeout=${300}
></cosmoz-treenode-navigator>`;
```

Story: _Searching_.

### Large trees

Children are sorted (folders first, then by name) once per node and cached; only expanded branches are read and rows are virtualized. A node with 274,000 children expands in under 100 ms. Sorting works on a copy: the tree's own child arrays are never reordered.

Story: _Large Tree_ (100,000 children).

### Dialog

In `<cosmoz-treenode-button-view>`, highlighting changes nothing until it is confirmed with **Select**, double-click or <kbd>Enter</kbd>. **Cancel** or <kbd>Esc</kbd> closes without changing `nodePath`.

Story: _CosmozTreenodeButtonView › With Preselected Node_.

## Keyboard

| Key                            | Where  | Action                                                  |
| ------------------------------ | ------ | ------------------------------------------------------- |
| <kbd>↓</kbd>                   | Search | Move into the tree, on the highlighted node             |
| <kbd>Enter</kbd>               | Search | Select the highlighted node                             |
| <kbd>↑</kbd> <kbd>↓</kbd>      | Tree   | Previous / next row                                     |
| <kbd>→</kbd> / <kbd>←</kbd>    | Tree   | Expand or enter children / collapse or go to the parent |
| <kbd>Home</kbd> <kbd>End</kbd> | Tree   | First / last row                                        |
| <kbd>Space</kbd>               | Tree   | Highlight the focused row                               |
| <kbd>Enter</kbd>               | Tree   | Select the focused row                                  |
| <kbd>Esc</kbd>                 | Dialog | Close without changing the selection                    |

## Updating the tree

Pass a new `tree` when the data changes. Nodes added to the same tree object in place are picked up the next time the navigator opens.

## Components

### `<cosmoz-treenode-button-view>`

A trigger button that opens a dialog containing the tree navigator. This is the main component most consumers will use.

#### Properties / Attributes

| Property                | Attribute           | Type      | Default       | Description                                                                                               |
| ----------------------- | ------------------- | --------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `tree`                  | --                  | `Tree`    | --            | The tree data structure (set via JS)                                                                      |
| `nodePath`              | --                  | `string`  | `''`          | Selected node's path locator (two-way bindable)                                                           |
| `opened`                | --                  | `boolean` | `false`       | Whether the dialog is open (two-way bindable)                                                             |
| `variant`               | `variant`           | `string`  | `'secondary'` | Button variant for the open trigger (`'primary'`, `'secondary'`, `'tertiary'`, `'destructive'`, `'link'`) |
| `showReset`             | `show-reset`        | `boolean` | `false`       | Show the reset/clear button                                                                               |
| `searchMinLength`       | `search-min-length` | `number`  | `3`           | Minimum characters to trigger search                                                                      |
| `searchDebounceTimeout` | --                  | `number`  | `500`         | Debounce timeout (ms) before search triggers                                                              |

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

The open button also exports the inner `cosmoz-button`'s `button` part as `action-open-button`, allowing consumers to style the native button element through the component boundary:

```css
cosmoz-treenode-button-view::part(action-open-button) {
	/* styles applied to the open button's inner button part */
}
```

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

The inner navigator: the highlighted node's path, a search field and the tree. Typically used inside `<cosmoz-treenode-button-view>`, but can be used standalone.

#### Properties

| Property                | Type      | Default     | Description                                                            |
| ----------------------- | --------- | ----------- | ---------------------------------------------------------------------- |
| `tree`                  | `Tree`    | --          | The tree data structure (set via JS)                                   |
| `nodePath`              | `string`  | `''`        | Selected node's path locator (two-way bindable)                        |
| `highlightedNodePath`   | `string`  | `''`        | Currently highlighted node's path (notify only)                        |
| `opened`                | `boolean` | `undefined` | Resets the view to the current node on open; `false` unmounts the tree |
| `searchMinLength`       | `number`  | `3`         | Minimum characters to trigger search                                   |
| `searchDebounceTimeout` | `number`  | `500`       | Debounce timeout (ms) before search triggers                           |

#### Events

| Event                           | Detail              | Description                               |
| ------------------------------- | ------------------- | ----------------------------------------- |
| `node-path-changed`             | `{ value: string }` | Fired when the selected node path changes |
| `highlighted-node-path-changed` | `{ value: string }` | Fired when the highlighted node changes   |

#### CSS Custom Properties

| Property                                  | Default | Description                  |
| ----------------------------------------- | ------- | ---------------------------- |
| `--cosmoz-treenode-navigator-list-height` | `50vh`  | Height of the scrolling tree |

Colors, type and spacing come from `@neovici/cosmoz-tokens` (`--cz-*`). Tree rows can be styled through [`cosmoz-tree-view`'s CSS parts](https://github.com/Neovici/cosmoz-tree-view#styling).

#### Test ids

`search-input`, `path`, `tree` and `no-results`. Tree rows are `role="treeitem"`, with `aria-selected` and `aria-expanded`.

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
	Path: 'Sökväg',
	Nodes: 'Noder',
	'No nodes match the search': 'Inga noder matchar sökningen',
	Select: 'Valj',
	Cancel: 'Avbryt',
});
```

### Translation Keys

| Key                                        | Used in                                      |
| ------------------------------------------ | -------------------------------------------- |
| `Select a node`                            | Button placeholder when no node is selected  |
| `Search or navigate to chosen destination` | Dialog heading                               |
| `Search...`                                | Search input placeholder                     |
| `Path`                                     | Accessible name of the path above the search |
| `Nodes`                                    | Accessible name of the tree                  |
| `No nodes match the search`                | Shown when a search has no matches           |
| `Select`                                   | Dialog confirm button                        |
| `Cancel`                                   | Dialog cancel button                         |

## Migrating from v8

The one-level drill-down list is replaced by an expandable tree. The public properties and events, and the button view's slots and CSS parts, are unchanged.

| Before                                                                          | After                                                                       |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Drill-down list with a home icon and the open folder's breadcrumb               | Expandable tree; the path above the search follows the **highlighted** node |
| Search in the open folder, then "search again globally"                         | Search is always global, matches shown in place                             |
| `--cosmoz-treenode-navigator-icon-color`                                        | _removed_ (tokens)                                                          |
| `--cosmoz-treenode-navigator-select-node-icon-color`                            | _removed_ (tokens)                                                          |
| `--cosmoz-treenode-navigator-list-item-focused-color`                           | _removed_; style `cosmoz-tree-view`'s CSS parts                             |
| Test ids `node`, `node-name`, `node-arrow`, `home-icon`, `global-search-button` | `role="treeitem"` rows; test ids `tree`, `path`, `no-results`               |
| Translation key `Click to search again but globally`                            | _removed_; new keys `Path`, `Nodes`, `No nodes match the search`            |
| Capturing `keydown` listener on `document`                                      | Keys handled by the search field and the tree                               |
| The tree's `children` arrays sorted in place                                    | Sorted on a copy, cached per node                                           |

New dependency: [`@neovici/cosmoz-tree-view`](https://github.com/Neovici/cosmoz-tree-view).

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
| `npm run changeset`       | Create a changeset for version bump                |
| `npm run storybook:build` | Build static Storybook                             |

Tests use [Vitest](https://vitest.dev/) with two projects: `unit` (jsdom) for helper function tests, and `storybook` (Playwright browser mode) for component interaction tests via Storybook play functions.

## License

[Apache-2.0](LICENSE)
