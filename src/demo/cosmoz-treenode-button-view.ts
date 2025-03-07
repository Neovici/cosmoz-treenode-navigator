import {
	component,
	lift,
	useEffect,
	useProperty,
	useRef,
	useState,
} from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit/directives/ref.js';
import { css } from './cosmoz-treenode-button-view.styles';

import '@neovici/cosmoz-dialog';
import '../cosmoz-treenode-navigator';
import { useKeyDown }                from '../hooks/useKeyDown';
import { getNode, getTreePathParts } from '../util/helpers';
import { when }                      from 'lit-html/directives/when.js';
import { debounce$ }      from '@neovici/cosmoz-utils/promise';
import { Tree, TreeNode } from '../util/types';

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
	const dialogRef = useRef<HTMLDialogElement | null>(null);

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

	const clearItemSelection = ({ item, ev }: ClearItemSelectionParams) => {
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
		if (dialogRef.current) {
			// @ts-expect-error - fit is added by cosmoz-dialog
			dialogRef.current.fit();
		}
	}, 50);

	const onOpen = () => {
		if (dialogRef.current) {
			dialogRef.current.showModal();
		}
		setOpened(true);
	};

	const onClose = () => {
		setOpened(false);
		if (dialogRef.current) {
			dialogRef.current.close();
		}
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
		if (!highlightedNode) return;
		
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
		${css}
		<div class="actions">
			<button class="actions__node-select" type="button" @click=${onOpen}>
				${buttonLabel}
			</button>
			${when(
				enableReset(),
				() =>
					html` <button @click=${reset} class="actions__clear">
						&times;
					</button>`,
			)}
		</div>
		${when(
			showSelectedNodes(multiSelection, selectedNodes.length),
			() => html`
				<div id="chips" class="row">
					${selectedNodes.map(
						(item) => html`
							<div class="chip">
								<span>${getChipText(item)}</span>
								<button
									class="chip__clear"
									@click=${(ev: Event) => clearItemSelection({ item, ev })}
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
			${ref((el) => {
				dialogRef.current = el as HTMLDialogElement;
			})}
		>
			<header class="tree-nav-dialog__header">
				<h1 class="tree-nav-dialog__heading">${dialogText}</h1>
			</header>
			<main class="tree-nav-dialog__main">
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
			<footer class="tree-nav-dialog__footer">
				<p>
					<button
						?disabled=${!highlightedNode?.pathLocator}
						autofocus
						class="tree-nav-dialog__footer-button"
						@click=${selectNode}
					>
						Select
					</button>
					<button class="tree-nav-dialog__footer-button" @click=${onClose}>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`;
};

// Define the attribute names as a type
type ObservedAttributes =
  | 'button-text-placeholder'
  | 'dialog-text'
  | 'search-placeholder'
  | 'search-global-placeholder'
  | 'node-path'
  | 'multi-selection'
  | 'no-reset'
  | 'search-min-length';

// Cast the array to the correct type
CosmozTreenodeButtonView.observedAttributes = [
	'button-text-placeholder',
	'dialog-text',
	'search-placeholder',
	'search-global-placeholder',
	'node-path',
] as readonly ObservedAttributes[];

customElements.define(
	'cosmoz-treenode-button-view',
	component(CosmozTreenodeButtonView),
);
