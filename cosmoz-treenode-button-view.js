/* eslint-disable max-statements */
import { html, nothing } from 'lit-html';
import { component, useState, useEffect } from '@pionjs/pion';
import { css } from './cosmoz-treenode-button-view.styles';
import { t } from 'i18next';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';

import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-button/paper-button';
import '@polymer/iron-icons/iron-icons';

import '@neovici/cosmoz-dialog';
import { Tree } from '@neovici/cosmoz-tree';

import './cosmoz-treenode-navigator';
import { getNode, getTreePathParts } from './helpers';

/*
export interface CosmozTreenodeButtonView {
	multiSelection?: Boolean;
	tree: Tree;
	selectedNode?: object;
	selectedNodes?: object[];
	noReset?: boolean;
	opened?: boolean;
	searchPlaceholder: string;
	buttonTextPlaceholder?: string;
	buttonText?: string;
	nodePath: string;
	nodesOnNodePath: string[];
	searchGlobalPlaceholder?: string;
	dialogText?: string;
	searchMinLength?: number;
	highlightedNodePath: string;
}
*/

/**
 * Get a text label for the node selection button.
 * @param {boolean} multiSelection Multi selection setting.
 * @returns {string} Text label.
 */
const getButtonTextPlaceholder = (multiSelection) => {
	return multiSelection ? t('Select a node') : t('No selection made');
};

/**
 * Get a button label based on path parts or a placeholder.
 * @param {array} pathParts Nodes on the node path.
 * @param {string} placeholder Replacement placeholder if no nodes are available.
 * @returns {string} Button label.
 */
const _getButtonLabel = (pathParts, placeholder, searchProperty) => {
	if (!Array.isArray(pathParts) || pathParts.length === 0) {
		return placeholder;
	}
	return pathParts
		.filter((n) => n)
		.map((part) => part[searchProperty])
		.join(' / ');
};

/**
 * Navigator through object with treelike datastructure.
 */
export const CosmozTreenodeButtonView = ({
	/**
	 * Allow multiple selections
	 */
	multiSelection = false,
	/**
	 * The required tree object
	 */
	tree,
	/**
	 * If true, reset button gets hidden
	 */
	noReset = false,
	/**
	 * If true opened
	 */
	opened = false,
	/*
	 * Placeholder for the search field
	 */
	searchPlaceholder,
	/*
	 * The nodes on the path of the selected node
	 */
	nodesOnNodePath = [],
	/*
	 * Placeholder for button text
	 */
	buttonTextPlaceholder = getButtonTextPlaceholder(),
	buttonText: _buttonText,
	/*
	 * Text displayed when local search has finished
	 * to suggest a search on the entire tree
	 */
	searchGlobalPlaceholder = 'Click to search again but globally.',
	/*
	 * Settable text for dialog title.
	 */
	dialogText = 'Search or navigate to chosen destination',
	/*
	 * Minimum length before an search
	 * starts.
	 */
	searchMinLength = 1,
	...props
}) => {
	/*
	 * The path of the selected node
	 */
	const [nodePath, setNodePath] = useState(props.nodePath);

	/*
	 * Currently selected node object
	 */
	const [selectedNode, setSelectedNode] = useState(props.selectedNode);

	/**
	 * Selected nodes
	 */
	const [selectedNodes, setSelectedNodes] = useState([]);
	/*
	 * Path string of highlighted (focused) node
	 */
	const [highlightedNodePath, setHighlightedNodePath] = useState('');

	const buttonText =
		_buttonText ??
		_getButtonLabel(
			nodesOnNodePath,
			buttonTextPlaceholder,
			tree.searchProperty,
		);

	const host = useHost();

	useEffect(() => {
		notifyProperty(host, 'nodePath', nodePath);
	}, [nodePath]);

	useEffect(() => {
		notifyProperty(host, 'selectedNode', selectedNode);
	}, [selectedNode]);

	/**
	 * Event handler for node chip removal button, removes a node chip.
	 * @param {object} event Polymer event object.
	 * @returns {void}
	 */
	const _clearItemSelection = (event) => {
		const item = event.model.item;
		const selectedIndex = selectedNodes.indexOf(item);

		// This will remove from the DOM the source element of the processed event ...
		const newSelectedNodes = selectedNodes.concat([]);
		newSelectedNodes.splice(selectedIndex, 1);
		// ... so we must prevent further propagation of this event, because its source is now invalid.
		// (This has caused troubles in app-drawer-layout click event handler).

		if (!newSelectedNodes.length) {
			reset();
		}

		setSelectedNodes(newSelectedNodes);

		event.preventDefault();
		event.stopPropagation();
	};

	/**
	 * Whether the reset button should be enabled or not.
	 * @param {string} nodePath Node path to check.
	 * @param {boolean} noReset Bypass to force disabled.
	 * @returns {boolean} Whether the button should be enabled or not.
	 */
	const _enableReset = (nodePath, noReset) => {
		if (noReset) {
			return false;
		}

		return !!nodePath;
	};

	/**
	 * Get text from a node to set on a node chip.
	 * @param {object} node Node to get text from.
	 * @returns {string} Chip text.
	 */
	const _getChipText = (node) => {
		return node.name;
	};

	/**
	 * Open the treenode navigator dialog.
	 * @returns {void}
	 */
	const openDialogTree = () => {
		host.shadowRoot.querySelector('#dialogTree')?.open();
	};

	/**
	 * Focus on the treenode navigator in the treenode navigator dialog.
	 * @returns {void}
	 */
	const focusSearch = () => {
		host.shadowRoot
			.querySelector('#dialogTree')
			?.paperDialog.querySelector('#treeNavigator')
			.shadowRoot.querySelector('cosmoz-input')
			.focus();
	};

	/**
	 * Reset the component to make it ready for reuse
	 * @returns {void}
	 */
	const reset = () => {
		setNodePath('');
		setSelectedNode({});
		setNodesOnNodePath([]); // TODO: update this line
		setSelectedNodes([]);
		setHighlightedNodePath('');
	};

	/**
	 * Select the node in the treenode navigator.
	 * @returns {void}
	 */
	const selectNode = () => {
		// nodePath selects the node, without it no selectedNode

		this.selectedNode = getNode(
			this.highlightedNodePath || this.nodePath,
			this.tree,
		);
		if (this.highlightedNodePath) {
			this.nodePath = this.highlightedNodePath;
		}
		this.nodesOnNodePath = getTreePathParts(
			this.highlightedNodePath || this.nodePath,
			this.tree,
		);

		if (this.multiSelection) {
			if (
				!this.selectedNodes.some(
					(node) => node.pathLocator === this.highlightedNodePath,
				)
			) {
				this.push('selectedNodes', this.selectedNode);
			}
			this.nodePath = '';
			this.selectedNode = {};
		}
		this.$.dialogTree.close();
	};

	/**
	 * Selects node and closes the dialog
	 * @returns {void}
	 */
	const _selectNodeAndCloseDialog = () => {
		this.selectNode();
	};

	/**
	 * Determine if selected nodes container should be visible or not.
	 * @param {boolean} multiSelection Multi selection setting.
	 * @param {number} selectedNodesLength Selected nodes quantity.
	 * @returns {boolean} Whether the selected nodes container should be visible or not.
	 */
	const _showSelectedNodes = (multiSelection, selectedNodesLength) => {
		return multiSelection && selectedNodesLength > 0;
	};

	/**
	 * Callback event handler to refit the treenode navigator dialog when
	 * data plane has changed.
	 * @returns {void}
	 */
	const refit = () => {
		this._debouncer = Debouncer.debounce(
			this._debouncer,
			timeOut.after(50), // 5 was enough during test
			() => {
				this.$.dialogTree.fit();
			},
		);
	};

	const onOpened = () => {
		this.opened = true;
		this.focusSearch();
	};

	const onClosed = () => {
		this.opened = false;
	};

	return html`
		${css}
		<div class="actions">
			<paper-button
				part="button"
				class="open"
				raised
				@click=${openDialogTree}
				title=${buttonText}
			>
				<div class="pathToNode">&lrm;<span>${buttonText}</span></div>
			</paper-button>
			<paper-icon-button
				part="clear"
				.icon="clear"
				@click="reset"
				?hidden=${_enableReset(nodePath, noReset)}
			></paper-icon-button>
		</div>
		${_showSelectedNodes(multiSelection, selectedNodes.length)
			? html`<div id="chips" class="row">
					${selectedNodes.map(
						(item) =>
							html`<div class="chip">
								<span>${_getChipText(item, tree)}</span
								><iron-icon
									icon="clear"
									@click=${_clearItemSelection}
								></iron-icon>
							</div>`,
					)}
				</div>`
			: nothing}

		<cosmoz-dialog
			id="dialogTree"
			class="treeDialog"
			@iron-overlay-opened=${onOpened}
			@iron-overlay-closed=${onClosed}
			modal
			prerender
		>
			<template>
				<h2>${dialogText}</h2>
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="no-padding"
					tree=${tree}
					selected-node=${selectedNode}
					@data-plane-changed=${refit}
					highlighted-node-path=${highlightedNodePath}
					search-placeholder="${searchPlaceholder}"
					search-global-placeholder=${searchGlobalPlaceholder}
					search-min-length=${searchMinLength}
					node-path=${nodePath}
					nodes-on-node-path=${nodesOnNodePath}
					@node-dblclicked=${_selectNodeAndCloseDialog}
					@select-node=${selectNode}
					opened=${opened}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
				<div class="buttons">
					<paper-button
						disabled=${!highlightedNodePath}
						autofocus
						@click=${selectNode}
						>${_('Select', t)}</paper-button
					>
					<paper-button dialog-dismiss>${t('Cancel')}</paper-button>
				</div>
			</template>
		</cosmoz-dialog>
	`;
};

customElements.define(
	'cosmoz-treenode-button-view',
	component(CosmozTreenodeButtonView),
);
