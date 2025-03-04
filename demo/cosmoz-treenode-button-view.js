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
import '../src/cosmoz-treenode-navigator';
import { useKeyDown } from '../src/hooks/useKeyDown';
import { getNode, getTreePathParts } from '../src/util';
import { when } from 'lit-html/directives/when.js';
import { debounce$ } from '@neovici/cosmoz-utils/promise';

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
}) => {
	const dialogRef = useRef(null);

	const [highlightedNode, setHighlightedNode] = useProperty('highlightedNode');
	const [opened, setOpened] = useState(false);
	const [nodesOnNodePath, setNodesOnNodePath] = useState([]);
	const [selectedNodes, setSelectedNodes] = useState([]);
	const [buttonLabel, setButtonLabel] = useState(buttonTextPlaceholder);

	// Handle nodePath changes
	useEffect(() => {
		if (nodePath && tree) {
			setNodesOnNodePath(getTreePathParts(nodePath, tree));
		}
	}, [nodePath, tree]);

	const reset = () => {
		setNodesOnNodePath([]);
		setSelectedNodes([]);
		setHighlightedNode('');
	};

	const enableReset = () => {
		if (noReset) {
			return false;
		}

		return !!highlightedNode;
	};

	const clearItemSelection = ({ item, ev }) => {
		setSelectedNodes(selectedNodes.filter((node) => node !== item));
		ev.preventDefault();
		ev.stopPropagation();
	};

	const getChipText = (node) => {
		return node.name;
	};

	const showSelectedNodes = (multiSelection, selectedNodesLength) => {
		return multiSelection && selectedNodesLength > 0;
	};

	const refit = debounce$(() => {
		dialogRef.current.fit();
	}, 50);

	const onOpen = () => {
		dialogRef.current.showModal();
		setOpened(true);
	};

	const onClose = () => {
		setOpened(false);
		dialogRef.current.close();
	};

	useKeyDown('Escape', onClose);

	useEffect(() => {
		if (!Array.isArray(nodesOnNodePath) || nodesOnNodePath.length === 0) {
			setButtonLabel(buttonTextPlaceholder);
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
			showSelectedNodes,
			() => html`
				<div id="chips" class="row">
					${selectedNodes.map(
						(item) => html`
							<div class="chip">
								<span>${getChipText(item)}</span>
								<button
									class="chip__clear"
									@click=${(ev) => clearItemSelection({ item, ev })}
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
				dialogRef.current = el;
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

CosmozTreenodeButtonView.observedAttributes = [
	'button-text-placeholder',
	'dialog-text',
	'search-placeholder',
	'search-global-placeholder',
	'node-path',
];
customElements.define(
	'cosmoz-treenode-button-view',
	component(CosmozTreenodeButtonView),
);
