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
import { getTreePathParts } from './util/helpers';
import { when } from 'lit-html/directives/when.js';
import { debounce$ } from '@neovici/cosmoz-utils/promise';
import { Node, Tree } from '@neovici/cosmoz-tree';

type ButtonViewProps = {
	tree: Tree;
	multiSelection?: boolean;
	dialogText?: string;
	buttonTextPlaceholder?: string;
	searchPlaceholder?: string;
	noReset?: boolean;
	searchGlobalPlaceholder?: string;
	searchMinLength?: number;
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
	searchMinLength,
}: ButtonViewProps) => {
	const dialogRef = useRef<ButtonViewDialog | null>(null);
	const searchInputRef = useRef<HTMLInputElement | null>(null);

	const [highlightedNode, setHighlightedNode] = useProperty<Node | null>(
		'highlightedNode',
	);
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
	};

	const enableReset = !noReset && !!highlightedNode;

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

	const selectNode = () => {
		if (!highlightedNode?.pathLocator) {
			return;
		}

		setNodesOnNodePath(getTreePathParts(highlightedNode.pathLocator, tree));

		if (
			multiSelection &&
			!selectedNodes.some((n) => n.pathLocator === highlightedNode.pathLocator)
		) {
			setSelectedNodes([...selectedNodes, highlightedNode]);
		}

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
				<div class="path-text">
					<span>${buttonLabel}</span>
				</div>
			</button>
			${when(
				enableReset,
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
			<header class="dialog-header" part="header">
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
	'no-reset',
] as readonly ObservedAttributes[];

customElements.define(
	'cosmoz-treenode-button-view',
	component(CosmozNodeButtonView, {
		styleSheets: [style],
	}),
);
