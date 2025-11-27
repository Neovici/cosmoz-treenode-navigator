import {
	component,
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useRef,
	useState,
} from '@pionjs/pion';
import { html, nothing, type TemplateResult } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { guard } from 'lit-html/directives/guard.js';
import { ref } from 'lit-html/directives/ref.js';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';

import '@neovici/cosmoz-input';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';

import {
	computeDataPlane,
	computeRowClass,
	getParentPath,
	onNodeDblClicked,
	getTreePathParts,
} from './util/helpers';
import style from './cosmoz-treenode-navigator.styles';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import type { Node, Tree } from '@neovici/cosmoz-tree';

type TreenodeNavigatorProps = {
	tree: Tree;
	searchPlaceholder?: string;
	searchGlobalPlaceholder?: string;
	searchMinLength?: number;
	opened?: boolean;
	nodesOnNodePath?: Node[];
	searchDebounceTimeout: number;
};

type NavigatorMeta = {
	dataPlane: Node[];
	highlightedNode: Node | null;
	onNodeClick: (node: Node | null) => void;
};

// eslint-disable-next-line max-statements
const NodeNavigator = ({
	/**
	 * The main node structure
	 */
	tree,
	/**
	 * Placeholder for search field.
	 */
	searchPlaceholder,
	/**
	 * Text displayed when local search has finished
	 * to suggest a search on the entire tree
	 */
	searchGlobalPlaceholder,
	/**
	 * Minimum length of searchValue to trigger a search
	 */
	searchMinLength = 3,
	opened,
	searchDebounceTimeout = 2000,
}: TreenodeNavigatorProps) => {
	const listRef = useRef<HTMLElement>();
	const host = useHost();

	const [highlightedNode, setHighlightedNode] = useProperty<Node | null>(
		'highlightedNode',
	);

	const [nodesOnNodePath, setNodesOnNodePath] = useProperty<Node[]>(
		'nodesOnNodePath',
		[],
	);

	const [search, setSearch] = useState<string>('');
	const [searchValue, setSearchValue] = useState<string>('');
	const [openNodePath, setOpenNodePath] = useState<string>('');

	const [selectedNode, setSelectedNode] = useProperty<Node | null>(
		'selectedNode',
	);
	const [nodePath, setNodePath] = useProperty<string>('nodePath', '');

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const searchLength = searchValue.trim().length;

			if (searchLength > 0 && searchLength < searchMinLength) {
				return;
			}

			setSearch(searchValue.trim());
		}, searchDebounceTimeout);

		return () => clearTimeout(timeoutId);
	}, [searchValue]);

	const dataPlane = useMemo(
		() => computeDataPlane(tree, search, openNodePath),
		[tree, search, openNodePath],
	);

	/**
	 * Updates the nodes on path when a node is selected
	 * @param node
	 */
	const updateNodesOnPath = useCallback(
		(node: Node | null) => {
			if (!node?.pathLocator || !tree) {
				setNodesOnNodePath([]);
				return;
			}

			const pathNodes = getTreePathParts(node.pathLocator, tree);
			setNodesOnNodePath(pathNodes);
		},
		[tree],
	);

	/**
	 * Opens a node (renderLevel) based on a given path
	 *
	 * Don't update nodesOnNodePath here - this is just navigation
	 * nodesOnNodePath should only change on selection
	 *
	 * @param clickedNode - The clicked node
	 * @return undefined
	 */
	const onNodeClick = useCallback((clickedNode?: Node | null) => {
		setOpenNodePath(clickedNode?.pathLocator || '');
		setSearchValue('');
		setHighlightedNode(null);
	}, []);

	/**
	 * Handles node selection (e.g. on double-click)
	 * @param node
	 */
	const onNodeSelect = useCallback(
		(node: Node | null) => {
			if (node) {
				setHighlightedNode(node);
				// keep legacy props in sync
				setSelectedNode(node);
				setNodePath(node.pathLocator ?? '');
				updateNodesOnPath(node);
			}
		},
		[updateNodesOnPath],
	);

	useEffect(() => {
		if (!nodesOnNodePath?.length || !tree || !opened) {
			return;
		}

		const lastNode = nodesOnNodePath[nodesOnNodePath.length - 1];
		if (!lastNode?.pathLocator) {
			return;
		}

		if (tree.hasChildren(lastNode)) {
			setOpenNodePath(lastNode.pathLocator);
			return;
		}

		const parentPath = getParentPath(tree, lastNode);

		setOpenNodePath(parentPath);
		setHighlightedNode(lastNode);
	}, [nodesOnNodePath, tree, opened]);

	useEffect(() => {
		notifyProperty(
			host,
			'highlightedNodePath',
			highlightedNode?.pathLocator || '',
		);
	}, [highlightedNode]);

	// Sync selectedNode to highlightedNode when selectedNode changes externally
	useEffect(() => {
		if (selectedNode && selectedNode !== highlightedNode) {
			setHighlightedNode(selectedNode);
		}
	}, [selectedNode]);

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

	const meta = useMeta<NavigatorMeta>({
		dataPlane,
		highlightedNode: highlightedNode ?? null,
		onNodeClick,
	});

	useEffect(() => {
		if (!opened) {
			return;
		}

		const getVlist = () => {
			const list = listRef.current;
			if (!list) return null;
			return list[Object.getOwnPropertySymbols(list)[0]];
		};

		const vlist = getVlist();
		if (vlist && meta.highlightedNode) {
			const index = meta.dataPlane?.indexOf(meta.highlightedNode);
			if (index !== undefined && index >= 0) {
				vlist.scrollToIndex = {
					index,
					position: 'center',
				};
			}
		}

		// eslint-disable-next-line max-statements
		const handler = (e: KeyboardEvent) => {
			if ((e.ctrlKey && e.altKey) || e.defaultPrevented) {
				return;
			}

			const {
				dataPlane: items,
				highlightedNode: node,
				onNodeClick: open,
			} = meta;

			const vlist = getVlist();
			if (!vlist) return;

			const currentIndex = items.findIndex(
				(i) => i.pathLocator === node?.pathLocator,
			);

			const navigateToIndex = (newIndex: number, position: string) => {
				if (newIndex >= 0 && newIndex < items.length) {
					setHighlightedNode(items[newIndex]);

					const needsScroll =
						position === 'start'
							? newIndex < vlist._firstVisible
							: newIndex > vlist._lastVisible;

					if (needsScroll) {
						vlist.scrollToIndex = { index: newIndex, position };
					}

					return true;
				}
				return false;
			};

			switch (e.key) {
				case 'Up':
				case 'ArrowUp': {
					e.preventDefault();
					navigateToIndex(Math.max(currentIndex - 1, 0), 'start');
					break;
				}
				case 'Down':
				case 'ArrowDown': {
					e.preventDefault();
					if (currentIndex < items.length - 1) {
						navigateToIndex(currentIndex + 1, 'end');
					}
					break;
				}
				case 'Enter':
					e.preventDefault();
					if (node) {
						host.dispatchEvent(new CustomEvent('node-dblclicked'));
						onNodeSelect(node);
					}
					break;

				case 'Right':
				case 'ArrowRight':
					e.preventDefault();
					if (node && tree.hasChildren(node)) {
						open(node);
					}
					break;
				default:
					break;
			}
		};

		document.addEventListener('keydown', handler, true);

		return () => document.removeEventListener('keydown', handler, true);
	}, [opened, meta, onNodeSelect]);

	// update the event handler for double-click
	const handleNodeDblClick = (node: Node) => (e: Event) => {
		onNodeDblClicked(e, host);

		// select the node that was double-clicked
		onNodeSelect(node);
	};

	const renderItem = (node: Node | null, index: number) => {
		if (!node) {
			return nothing as unknown as TemplateResult<1>;
		}

		return html` <div class="item">
			${((parentPath: string) =>
				when(
					search &&
						(index === 0 ||
							parentPath !== getParentPath(tree, dataPlane[index - 1])),
					() => html`
						<div class="section">
							${tree.getPathString(parentPath, tree.searchProperty)}
						</div>
					`,
				))(getParentPath(tree, node))}
			<div
				class=${computeRowClass('node', node, highlightedNode)}
				@click=${() => setHighlightedNode(node)}
				@dblclick=${handleNodeDblClick(node)}
			>
				<div class="name">${node[tree.searchProperty]}</div>
				${when(
					tree.hasChildren(node),
					() => html`
						<span class="icon" @click=${() => onNodeClick(node)}>
							<svg
								viewBox="0 0 24 24"
								preserveAspectRatio="xMidYMid meet"
								focusable="false"
								style="pointer-events: none; display: block; width: 100%; height: 100%;"
							>
								<g>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
									></path>
								</g>
							</svg>
						</span>
					`,
				)}
			</div>
		</div>`;
	};

	return html`
		<div class="header">
			<h3 class="path">
				<span class="icon" @click=${() => onNodeClick()}>
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
					</svg>
				</span>
				${guard([tree, openNodePath], () =>
					((openNodePath && tree?.getPathNodes(openNodePath)) || [])
						.filter((node): node is Node => node !== undefined)
						.map(
							(node) => html`
								<span class="slash">/</span>
								<span
									class="pointer"
									tabindex="0"
									@click=${() => onNodeClick(node)}
									>${node[tree.searchProperty]}</span
								>
							`,
						),
				)}
			</h3>
			<cosmoz-input
				tabindex="0"
				.value=${searchValue}
				.placeholder=${searchPlaceholder}
				@input=${(e: Event) =>
					setSearchValue((e.target as HTMLInputElement).value)}
			/>
		</div>
		${when(
			tree,
			() =>
				html` <div
					class="items"
					${ref((el) => (listRef.current = el as HTMLElement))}
				>
					<div virtualizer-sizer></div>
					${virtualize({
						items: dataPlane,
						renderItem,
						scroller: true,
					})}
				</div>`,
		)}
		${when(
			search && openNodePath,
			() => html`
				<button class="btn-ghost" @click=${() => setOpenNodePath('')}>
					${searchGlobalPlaceholder}
				</button>
			`,
		)}
	`;
};

customElements.define(
	'cosmoz-treenode-navigator',
	component(NodeNavigator, {
		styleSheets: [style],
	}),
);
