import {component, lift, useEffect, useProperty, useRef, useState,} from '@pionjs/pion';
import {html}                                                       from 'lit-html';
import {ref}                                                        from 'lit/directives/ref.js';
import style                                                        from './cosmoz-treenode-button-view.styles';

import '@neovici/cosmoz-dialog';
import './cosmoz-treenode-navigator';
import {useKeyDown}                                                 from './hooks/useKeyDown';
import {getNode, getTreePathParts}                                  from './util/helpers';
import {when}                                                       from 'lit-html/directives/when.js';
import {debounce$}                                                  from '@neovici/cosmoz-utils/promise';
import {Tree, TreeNode} from './util/types';

type ButtonViewProps = {
	tree: Tree;
	multiSelection?: boolean;
	dialogText?: string;
	buttonTextPlaceholder?: string;
	searchPlaceholder?: string;
	noReset?: boolean;
	searchGlobalPlaceholder?: string;
	searchMinLength?: number;
	nodePath?: string;
};

type ClearItemSelectionParams = {
	item: TreeNode;
	ev: Event;
};

type ObservedAttributes =
	| 'button-text-placeholder'
	| 'dialog-text'
	| 'search-placeholder'
	| 'search-global-placeholder'
	| 'node-path'
	| 'no-reset'
	| 'search-min-length';

type ButtonViewDialog = HTMLDialogElement & {
	fit: () => void;
};

const CosmozTreenodeButtonView = ({
	tree,
	multiSelection = false,
	dialogText,
	buttonTextPlaceholder,
	searchPlaceholder,
	noReset = false,
	searchGlobalPlaceholder,
	searchMinLength,
	nodePath,
}: ButtonViewProps) => {
	const dialogRef = useRef<ButtonViewDialog | null>(null);
	const searchInputRef = useRef<HTMLInputElement | null>(null);

	const [highlightedNode, setHighlightedNode] = useProperty<TreeNode | null>('highlightedNode');
	const [opened, setOpened] = useState(false);
	const [nodesOnNodePath, setNodesOnNodePath] = useState<TreeNode[]>([]);
	const [selectedNodes, setSelectedNodes] = useState<TreeNode[]>([]);
	const [buttonLabel, setButtonLabel] = useState(buttonTextPlaceholder);

	useEffect(() => {
		if (nodePath && tree) {
			setNodesOnNodePath(getTreePathParts(nodePath, tree));
		}
	}, [nodePath, tree]);

	useEffect(() => {
		if (dialogRef.current) {
			searchInputRef.current = dialogRef
				.current
				.querySelector('cosmoz-treenode-navigator')
				?.shadowRoot
				?.querySelector('cosmoz-input') as HTMLInputElement | null;
		}
	}, [dialogRef.current]);

	const reset = () => {
		setNodesOnNodePath([]);
		setSelectedNodes([]);
		setHighlightedNode(null);
	};

	const enableReset = () => {
		if (noReset) {
			return false;
		}

		return !!highlightedNode;
	};

	const clearItemSelection = ({item, ev}: ClearItemSelectionParams) => {
		setSelectedNodes(selectedNodes.filter((node) => node !== item));
		ev.preventDefault();
		ev.stopPropagation();
	};

	const getChipText = (node: TreeNode) => {
		return node.name;
	};

	const showSelectedNodes = (multiSelection: boolean, selectedNodesLength: number) => {
		return multiSelection && selectedNodesLength > 0;
	};

	const refit = debounce$(() => {
		dialogRef.current?.fit?.();
	}, 50);

	const focusSearch = () => {
		if (searchInputRef.current) {
			searchInputRef.current.focus()
		}
	}

	const onOpen = () => {
		dialogRef.current?.showModal();
		setOpened(true);
		setTimeout(focusSearch, 0);
	};

	const onClose = () => {
		setOpened(false);
		dialogRef.current?.close();
	};

	useKeyDown('Escape', onClose);

	useEffect(() => {
		if (!Array.isArray(nodesOnNodePath) || nodesOnNodePath.length === 0) {
			setButtonLabel(buttonTextPlaceholder || '');
			return;
		}

		setButtonLabel(
			nodesOnNodePath
				.filter((n) => n)
				.map((part) => part[tree.searchProperty])
				.join(' / '),
		);
	}, [nodesOnNodePath]);

	const selectNode = () => {
		if (!highlightedNode) {
			return;
		}

		const path = highlightedNode.pathLocator;
		const node = getNode(path, tree);

		setNodesOnNodePath(getTreePathParts(path, tree));

		if (multiSelection && node) {
			if (!selectedNodes.some((n) => n.pathLocator === path)) {
				setSelectedNodes([...selectedNodes, node]);
			}
		}

		onClose();
	};

	return html`
		<div class="actions" part="actions">
			<button class="actions__open-dialog" type="button" @click=${onOpen} part="action-open">
				${buttonLabel}
			</button>
			${when(
					enableReset(),
					() =>
							html`
								<button @click=${reset} class="actions__clear" part="action-reset">
									<svg width="10" height="9" viewBox="0 0 10 9" stroke="currentColor"
									     xmlns="http://www.w3.org/2000/svg">
										<line x1="8.53033" y1="0.53033" x2="1.53033" y2="7.53033" stroke-width="1.5"></line>
										<line x1="8.46967" y1="7.53033" x2="1.46967" y2="0.530331" stroke-width="1.5"></line>
									</svg>
								</button>`,
			)}
		</div>
		${when(
				showSelectedNodes(multiSelection, selectedNodes.length),
				() => html`
					<div id="chips" part="chips" class="row">
						${selectedNodes.map(
								(item) => html`
									<div class="chip">
										<span>${getChipText(item)}</span>
										<button
												class="chip__clear"
												@click=${(ev: Event) => clearItemSelection({item, ev})}
												type="button"
										>
											&times;
										</button>
									</div>
								`,
						)}
					</div>
				`,
		)}
		<dialog
				class="tree-nav-dialog"
				part="dialog"
				${ref((el) => {
					dialogRef.current = el as ButtonViewDialog;
				})}
		>
			<header class="tree-nav-dialog__header" part="header">
				<h1 class="tree-nav-dialog__heading" part="heading">${dialogText}</h1>
			</header>
			<main class="tree-nav-dialog__main" part="main">
				<cosmoz-treenode-navigator
						id="treeNavigator"
						class="tree-nav-dialog__treenode no-padding"
						.highlightedNode=${highlightedNode}
						@highlighted-node-changed=${lift(setHighlightedNode)}
						.searchPlaceholder=${searchPlaceholder}
						.searchGlobalPlaceholder=${searchGlobalPlaceholder}
						.searchMinLength=${searchMinLength}
						.tree=${tree}
						.opened=${opened}
						@select-node=${selectNode}
						@node-dblclicked=${selectNode}
						@on-data-plane-changed=${refit}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="tree-nav-dialog__footer" part="footer">
				<p class="tree-nav-dialog__footer-button-container">
					<button
							?disabled=${!highlightedNode?.pathLocator}
							autofocus
							class="tree-nav-dialog__footer-button"
							part="select-button"
							@click=${selectNode}
					>
						Select
					</button>
					<button class="tree-nav-dialog__footer-button" part="cancel-button" @click=${onClose}>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`;
};

CosmozTreenodeButtonView.observedAttributes = [
	'button-text-placeholder',
	'dialog-text',
	'search-placeholder',
	'search-global-placeholder',
	'node-path',
] as readonly ObservedAttributes[];

customElements.define(
	'cosmoz-treenode-button-view',
	component(CosmozTreenodeButtonView, {
		styleSheets: [style]
	}),
);
