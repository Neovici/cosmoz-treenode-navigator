import { virtualize } from '@lit-labs/virtualizer/virtualize.js';
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
import { guard } from 'lit-html/directives/guard.js';
import { ref } from 'lit-html/directives/ref.js';
import { when } from 'lit-html/directives/when.js';

import '@neovici/cosmoz-button/cosmoz-button';
import '@neovici/cosmoz-input';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { t } from 'i18next';

import type { Node, Tree } from '@neovici/cosmoz-tree';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import style from './cosmoz-treenode-navigator.styles';
import { useNodes } from './hooks/useNodes';
import { computeRowClass } from './util/helpers';
import { treeSource, type NodeSource } from './util/source';

type TreenodeNavigatorProps = {
	tree: Tree;
	source?: NodeSource;
	searchMinLength?: number;
	opened?: boolean;
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
	 * The main node structure. Ignored when `source` is set.
	 */
	tree,
	/**
	 * Where to get nodes from. Defaults to serving `tree` from memory.
	 */
	source,
	/**
	 * Minimum length of searchValue to trigger a search
	 */
	searchMinLength = 3,
	opened,
	searchDebounceTimeout = 500,
}: TreenodeNavigatorProps) => {
	const listRef = useRef<HTMLElement>();
	const host = useHost();

	// nodePath is the single source of truth - external two-way binding
	const [nodePath, setNodePath] = useProperty<string>('nodePath', '');

	// highlightedNode is internal navigation state only
	const [highlightedNode, setHighlightedNode] = useState<Node | null>(null);

	const [search, setSearch] = useState<string>('');
	const [searchValue, setSearchValue] = useState<string>('');
	const [openNodePath, setOpenNodePath] = useState<string>('');

	const nodeSource = useMemo(() => source ?? treeSource(tree), [source, tree]);

	const { nodes: nodesOnNodePath } = useNodes(
		() => (nodePath ? nodeSource.getPath(nodePath) : []),
		[nodeSource, nodePath],
	);

	const { nodes: openNodes } = useNodes(
		() => (openNodePath ? nodeSource.getPath(openNodePath) : []),
		[nodeSource, openNodePath],
	);

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

	const {
		nodes: dataPlane,
		loading,
		error,
	} = useNodes(
		() =>
			search
				? nodeSource.search(search, openNodePath)
				: nodeSource.getLevel(openNodePath),
		[nodeSource, search, openNodePath],
	);

	/**
	 * Opens a node (renderLevel) based on a given path
	 *
	 * Don't update nodePath here - this is just navigation
	 * nodePath should only change on selection
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
	 * Handles node selection (e.g. on double-click or Enter)
	 * @param node
	 */
	const onNodeSelect = useCallback((node: Node | null) => {
		if (node?.pathLocator) {
			setNodePath(node.pathLocator);
		}
	}, []);

	// Clear highlightedNodePath when navigating to a new folder
	useEffect(() => {
		if (!openNodePath) {
			return;
		}

		notifyProperty(host, 'highlightedNodePath', '');
	}, [openNodePath]);

	// When nodePath changes externally, sync the view
	useEffect(() => {
		if (!nodesOnNodePath?.length || !opened) {
			return;
		}

		const lastNode = nodesOnNodePath[nodesOnNodePath.length - 1];
		if (!lastNode?.pathLocator) {
			return;
		}

		if (nodeSource.hasChildren(lastNode) !== false) {
			setOpenNodePath(lastNode.pathLocator);
			return;
		}

		// The parent as the path itself reports it, so a source that withholds an
		// ancestor falls back to the roots rather than opening something it never
		// handed out.
		setOpenNodePath(
			nodesOnNodePath[nodesOnNodePath.length - 2]?.pathLocator ?? '',
		);
		setHighlightedNode(lastNode);
	}, [nodesOnNodePath, nodeSource, opened]);

	// Notify highlightedNodePath when highlightedNode changes
	useEffect(() => {
		notifyProperty(
			host,
			'highlightedNodePath',
			highlightedNode?.pathLocator || '',
		);
	}, [highlightedNode]);

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

			const { dataPlane: items, highlightedNode: node } = meta;

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
						onNodeSelect(node);
					}
					break;

				default:
					break;
			}
		};

		document.addEventListener('keydown', handler, true);

		return () => document.removeEventListener('keydown', handler, true);
	}, [opened, meta, onNodeSelect]);

	// Double-click handler for node selection
	const handleNodeDblClick = () => {
		if (highlightedNode) {
			onNodeSelect(highlightedNode);
		}
	};

	const renderItem = (node: Node | null, index: number) => {
		if (!node) {
			return nothing as unknown as TemplateResult<1>;
		}

		return html` <div class="item">
			${when(search, () => {
				const parentPath = nodeSource.parentOf(node);
				const heading =
					index === 0 ||
					parentPath !== nodeSource.parentOf(dataPlane[index - 1])
						? nodeSource.pathLabel(parentPath)
						: undefined;
				return when(heading, () => html`<div class="section">${heading}</div>`);
			})}
			<div
				class=${computeRowClass('node', node, highlightedNode)}
				data-testid="node"
				@click=${() => setHighlightedNode(node)}
				@dblclick=${handleNodeDblClick}
			>
				<div class="name" data-testid="node-name">
					${nodeSource.label(node)}
				</div>
				${when(
					nodeSource.hasChildren(node) !== false,
					() => html`
						<span
							class="icon"
							data-testid="node-arrow"
							@click=${() => onNodeClick(node)}
						>
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
				<span
					class="icon"
					data-testid="home-icon"
					@click=${() => onNodeClick()}
				>
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						style="pointer-events: none; display: block; width: 100%; height: 100%;"
					>
						<g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
					</svg>
				</span>
				${guard([openNodes], () =>
					openNodes
						.filter((node): node is Node => node !== undefined)
						.map(
							(node) => html`
								<span class="slash">/</span>
								<span
									class="pointer"
									tabindex="0"
									@click=${() => onNodeClick(node)}
									>${nodeSource.label(node)}</span
								>
							`,
						),
				)}
			</h3>
			<cosmoz-input
				autofocus
				tabindex="0"
				data-testid="search-input"
				.value=${searchValue}
				.placeholder=${t('Search...')}
				@input=${(e: Event) =>
					setSearchValue((e.target as HTMLInputElement).value)}
			/>
		</div>
		<div class="items" ${ref((el) => (listRef.current = el as HTMLElement))}>
			<div virtualizer-sizer></div>
			${virtualize({
				items: dataPlane,
				renderItem,
				scroller: true,
			})}
		</div>
		${when(
			error,
			() =>
				html`<div class="status" data-testid="error">
					${t('Could not load nodes.')}
				</div>`,
			() =>
				when(
					loading && dataPlane.length === 0,
					() =>
						html`<div class="status" data-testid="loading">
							${t('Loading...')}
						</div>`,
				),
		)}
		${when(
			search && openNodePath && nodeSource.scopedSearch,
			() => html`
				<cosmoz-button
					class="global-search"
					variant="link"
					full-width
					data-testid="global-search-button"
					@click=${() => setOpenNodePath('')}
				>
					${t('Click to search again but globally')}
				</cosmoz-button>
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
