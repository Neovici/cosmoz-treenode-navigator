/*eslint-disable max-statements */
import {
	component,
	lift,
	useEffect,
	useMemo,
	useProperty,
	useRef,
	useState,
} from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit/directives/ref.js';
import style from './cosmoz-treenode-button-view.styles';

import './cosmoz-treenode-navigator';
import { useKeyDown } from './hooks/useKeyDown';
import { when } from 'lit-html/directives/when.js';
import { debounce$ } from '@neovici/cosmoz-utils/promise';
import type { Node, Tree } from '@neovici/cosmoz-tree';
import { getTreePathParts } from './util/helpers';

type ButtonViewProps = {
	tree: Tree;
	multiSelection?: boolean;
	dialogText?: string;
	buttonTextPlaceholder?: string;
	searchPlaceholder?: string;
	noReset?: boolean;
	searchGlobalPlaceholder?: string;
	searchMinLength?: number;
	searchDebounceTimeout: number;
	nodePath?: string;
	selectedNode?: Node | null;
};

type ClearItemSelectionParams = {
	item: Node;
	ev: Event;
};

type ObservedAttributes =
	| 'button-text-placeholder'
	| 'dialog-text'
	| 'search-placeholder'
	| 'search-global-placeholder'
	| 'node-path'
	| 'selected-node'
	| 'no-reset'
	| 'search-min-length';

type ButtonViewDialog = HTMLDialogElement & {
	fit: () => void;
};

const CosmozNodeButtonView = ({
	tree,
	multiSelection = false,
	dialogText,
	buttonTextPlaceholder,
	searchPlaceholder,
	noReset = false,
	searchGlobalPlaceholder,
	searchMinLength = 3,
	searchDebounceTimeout = 2000,
}: ButtonViewProps) => {
	const dialogRef = useRef<ButtonViewDialog | null>(null);
	const searchInputRef = useRef<HTMLInputElement | null>(null);

	const [highlightedNode, setHighlightedNode] = useProperty<Node | null>(
		'highlightedNode',
	);

	// legacy props
	const [selectedNode, setSelectedNode] = useProperty<Node | null>(
		'selectedNode',
	);
	const [nodePath, setNodePath] = useProperty<string>('nodePath', '');

	const [nodesOnNodePath, setNodesOnNodePath] = useProperty<Node[]>(
		'nodesOnNodePath',
		[],
	);
	const [opened, setOpened] = useState(false);
	const [selectedNodes, setSelectedNodes] = useState<Node[]>([]);

	useEffect(() => {
		if (dialogRef.current) {
			searchInputRef.current = dialogRef.current
				.querySelector('cosmoz-treenode-navigator')
				?.shadowRoot?.querySelector('cosmoz-input') as HTMLInputElement | null;
		}
	}, [dialogRef.current]);

	// external updates to "selectedNode"
	useEffect(() => {
		if (selectedNode && selectedNode !== highlightedNode) {
			setHighlightedNode(selectedNode);
		}
	}, [selectedNode]);

	// external updates to "nodePath"
	useEffect(() => {
		if (!(nodePath || tree)) {
			return;
		}

		const parts = getTreePathParts(nodePath, tree);
		setNodesOnNodePath(parts);

		const last = parts.length > 0 ? parts[parts.length - 1] : null;
		if (last && last !== highlightedNode) {
			setHighlightedNode(last);
		}
	}, [nodePath, tree]);

	const buttonLabel = useMemo(() => {
		if (!Array.isArray(nodesOnNodePath) || nodesOnNodePath.length === 0) {
			return buttonTextPlaceholder || '';
		}

		return nodesOnNodePath
			.filter((n) => n)
			.map((part) => part[tree.searchProperty])
			.join(' / ');
	}, [nodesOnNodePath, tree]);

	const reset = () => {
		setNodesOnNodePath([]);
		setSelectedNodes([]);
		setHighlightedNode(null);
		setSelectedNode(null);
		setNodePath('');
	};

	const clearItemSelection = ({ item, ev }: ClearItemSelectionParams) => {
		setSelectedNodes(selectedNodes.filter((node) => node !== item));
		ev.preventDefault();
		ev.stopPropagation();
	};

	const getChipText = (node: Node) => {
		return node.name;
	};

	const showSelectedNodes = (
		multiSelection: boolean,
		selectedNodesLength: number,
	) => {
		return multiSelection && selectedNodesLength > 0;
	};

	const refit = debounce$(() => {
		dialogRef.current?.fit?.();
	}, 50);

	const focusSearch = () => {
		if (searchInputRef.current) {
			searchInputRef.current.focus();
		}
	};

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

	const onHeaderMouseDown = (e: MouseEvent) => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		const startX = e.clientX;
		const startY = e.clientY;
		const rect = dialog.getBoundingClientRect();
		const startLeft = rect.left;
		const startTop = rect.top;

		const onMouseMove = (moveEvent: MouseEvent) => {
			const dx = moveEvent.clientX - startX;
			const dy = moveEvent.clientY - startY;

			dialog.style.left = `${startLeft + dx}px`;
			dialog.style.top = `${startTop + dy}px`;
			dialog.style.margin = '0';
		};

		const onMouseUp = () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
		};

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	};

	// `cosmoz-treenode-navigator` handles updating nodesOnNodePath
	const selectNode = () => {
		if (!highlightedNode?.pathLocator) {
			return;
		}

		if (
			multiSelection &&
			!selectedNodes.some((n) => n.pathLocator === highlightedNode.pathLocator)
		) {
			setSelectedNodes([...selectedNodes, highlightedNode]);
		}

		// update legacy props
		setSelectedNode(highlightedNode);
		setNodePath(highlightedNode.pathLocator);
		setNodesOnNodePath(getTreePathParts(highlightedNode.pathLocator, tree));

		onClose();
	};

	return html`
		<div class="actions" part="actions">
			<button
				class="action-open"
				type="button"
				@click=${onOpen}
				part="action-open"
			>
				<slot name="button-before"></slot>
				<div class="path-text">
					<span>${buttonLabel}</span>
				</div>
				<slot name="button-after"></slot>
			</button>
			${when(
				!noReset && !!selectedNode,
				() =>
					html` <button
						@click=${reset}
						class="action-reset"
						part="action-reset"
					>
						<svg
							width="10"
							height="9"
							viewBox="0 0 10 9"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="8.53033"
								y1="0.53033"
								x2="1.53033"
								y2="7.53033"
								stroke-width="1.5"
							></line>
							<line
								x1="8.46967"
								y1="7.53033"
								x2="1.46967"
								y2="0.530331"
								stroke-width="1.5"
							></line>
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
			class="dialog"
			part="dialog"
			${ref((el) => {
				dialogRef.current = el as ButtonViewDialog;
			})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${onHeaderMouseDown}
			>
				<h1 class="dialog-heading" part="heading">${dialogText}</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.highlightedNode=${highlightedNode}
					@highlighted-node-changed=${lift(setHighlightedNode)}
					.searchPlaceholder=${searchPlaceholder}
					.searchGlobalPlaceholder=${searchGlobalPlaceholder}
					.searchMinLength=${searchMinLength}
					.searchDebounceTimeout=${searchDebounceTimeout}
					.tree=${tree}
					.opened=${opened}
					.nodesOnNodePath=${nodesOnNodePath}
					@node-dblclicked=${selectNode}
					@on-data-plane-changed=${refit}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<p class="dialog-footer-button-container">
					<button
						?disabled=${!highlightedNode?.pathLocator}
						autofocus
						class="dialog-footer-button"
						part="select-button"
						@click=${selectNode}
					>
						Select
					</button>
					<button
						class="dialog-footer-button"
						part="cancel-button"
						@click=${onClose}
					>
						Cancel
					</button>
				</p>
			</footer>
		</dialog>
	`;
};

CosmozNodeButtonView.observedAttributes = [
	'button-text-placeholder',
	'dialog-text',
	'search-placeholder',
	'search-global-placeholder',
	'node-path',
	'selected-node',
	'no-reset',
	'search-min-length',
] as readonly ObservedAttributes[];

customElements.define(
	'cosmoz-treenode-button-view',
	component(CosmozNodeButtonView, {
		styleSheets: [style],
	}),
);
