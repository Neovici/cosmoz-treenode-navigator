import { component } from '@pionjs/pion';
import { render } from './render';
import styles from './styles';
import type { Props, TreeViewApi } from './types';
import { useTreeView } from './use-tree-view';

/**
 * A tree of nested rows, after the Untitled UI tree view.
 *
 * Clicking a row selects it; the chevron expands it. Double-click or Enter
 * activates the row (`activate` event). Only expanded branches are
 * flattened and the rows are virtualized, so very large trees stay fast.
 *
 * @fires selected-changed - `detail.value` is the selected id
 * @fires expanded-changed - `detail.value` is the array of expanded ids
 * @fires activate - `detail` is `{ id, node }`
 * @csspart tree - the scrolling container (`role="tree"`)
 * @csspart row - a row (`role="treeitem"`)
 * @csspart content - the highlighted part of a row
 * @csspart toggle - the chevron
 * @csspart label - the row text
 */
const TreenodeTreeView = <T>(host: HTMLElement & Props<T>) =>
	render(host, useTreeView(host, host));

customElements.define(
	'cosmoz-treenode-tree-view',
	component(TreenodeTreeView, {
		styleSheets: [styles],
		observedAttributes: ['size', 'label', 'selected'],
	}),
);

declare global {
	interface HTMLElementTagNameMap {
		'cosmoz-treenode-tree-view': HTMLElement & Props & TreeViewApi;
	}
}

export { TreenodeTreeView };
