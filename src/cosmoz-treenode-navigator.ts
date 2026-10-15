import {
	component,
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useRef,
	useState,
} from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { when } from 'lit-html/directives/when.js';

import '@neovici/cosmoz-input';
import type { TreeViewApi } from '@neovici/cosmoz-tree-view';
import '@neovici/cosmoz-tree-view/cosmoz-tree-view';
import { t } from 'i18next';

import type { Node, Tree } from '@neovici/cosmoz-tree';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import style from './cosmoz-treenode-navigator.styles';
import { getTreePathParts } from './util/helpers';
import {
	ancestorPaths,
	searchView,
	sortedChildren,
	sortedRoots,
} from './util/tree-model';

type TreenodeNavigatorProps = {
	tree: Tree;
	searchMinLength?: number;
	opened?: boolean;
	searchDebounceTimeout: number;
};

const useDebouncedSearch = (
	value: string,
	minLength: number,
	timeout: number,
) => {
	const [search, setSearch] = useState('');
	useEffect(() => {
		const id = setTimeout(() => {
			const trimmed = value.trim();
			if (trimmed.length > 0 && trimmed.length < minLength) return;
			setSearch(trimmed);
		}, timeout);
		return () => clearTimeout(id);
	}, [value]);
	return search;
};

/**
 * What the tree shows: the whole tree, sorted, or — while searching — only
 * the matches and their ancestors, all expanded.
 *
 * The sorted children are cached per tree and rebuilt on every open, so a
 * new tree — or nodes added to the same tree in place — show up the next
 * time the navigator opens. Sorting is lazy, per expanded node.
 */
const useTreeModel = (
	tree: Tree | undefined,
	search: string,
	opened?: boolean,
) => {
	const getChildren = useMemo(
		() => (tree && opened !== false ? sortedChildren(tree) : undefined),
		[tree, opened],
	);
	const roots = useMemo(() => sortedRoots(tree), [tree, opened]);
	const found = useMemo(
		() =>
			tree && search && getChildren
				? searchView(tree, search, getChildren)
				: undefined,
		[tree, search, getChildren],
	);
	return { getChildren, roots, found };
};

/**
 * Where the highlighted node sits, root first, so the reader keeps their
 * bearings while scrolling a deep tree. Each step selects that ancestor.
 */
const renderPath = (
	tree: Tree | undefined,
	path: string,
	select: (path: string) => void,
) => {
	const nodes = tree && path ? getTreePathParts(path, tree) : [];
	if (!nodes.length) return nothing;
	const last = nodes.length - 1;
	return html`<nav class="path" data-testid="path" aria-label=${t('Path')}>
		${nodes.map(
			(node, i) =>
				html`${i > 0
						? html`<span class="slash" aria-hidden="true">/</span>`
						: nothing}<button
						type="button"
						class="crumb"
						aria-current=${i === last ? 'location' : nothing}
						@click=${() => select(node.pathLocator)}
					>
						${node[tree!.searchProperty]}
					</button>`,
		)}
	</nav>`;
};

const NodeNavigator = ({
	/**
	 * The main node structure
	 */
	tree,
	/**
	 * Minimum length of searchValue to trigger a search
	 */
	searchMinLength = 3,
	opened,
	searchDebounceTimeout = 500,
}: TreenodeNavigatorProps) => {
	const host = useHost();
	const treeViewRef = useRef<(HTMLElement & TreeViewApi) | undefined>(
		undefined,
	);

	// nodePath is the single source of truth - external two-way binding
	const [nodePath, setNodePath] = useProperty<string>('nodePath', '');
	// The node the reader has picked out but not confirmed yet.
	const [highlighted, setHighlighted] = useState<string>('');
	const [expanded, setExpanded] = useState<readonly string[]>([]);
	const [searchExpanded, setSearchExpanded] = useState<readonly string[]>([]);
	const [searchValue, setSearchValue] = useState('');
	const search = useDebouncedSearch(
		searchValue,
		searchMinLength,
		searchDebounceTimeout,
	);
	const { getChildren, roots, found } = useTreeModel(tree, search, opened);

	// On open, show where the reader is: the current node selected, its
	// ancestors expanded, and — like opening a folder — its own children.
	// A path that is only partly valid opens its last valid node; with no
	// current node, the roots are opened.
	useEffect(() => {
		if (!opened || !tree) return;
		const parts = getTreePathParts(nodePath, tree);
		const current = parts[parts.length - 1]?.pathLocator;
		const own = current ? [current] : roots.map((n) => n.pathLocator);
		setExpanded([...ancestorPaths(tree, current), ...own]);
		setHighlighted(current === nodePath ? nodePath : '');
	}, [opened, nodePath, tree, roots]);

	useEffect(() => setSearchExpanded(found?.expanded ?? []), [found]);

	useEffect(() => {
		notifyProperty(host, 'highlightedNodePath', highlighted);
	}, [highlighted]);

	const confirm = useCallback((path?: string) => {
		if (path) setNodePath(path);
	}, []);

	const onSearchKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			treeViewRef.current?.focusActiveItem();
		} else if (e.key === 'Enter') {
			e.preventDefault();
			confirm(highlighted);
		}
	};

	return html`
		<div class="header">
			${renderPath(tree, highlighted, setHighlighted)}
			<cosmoz-input
				autofocus
				data-testid="search-input"
				.value=${searchValue}
				.placeholder=${t('Search...')}
				@input=${(e: Event) =>
					setSearchValue((e.target as HTMLInputElement).value)}
				@keydown=${onSearchKeyDown}
			></cosmoz-input>
		</div>
		${when(
			tree && opened !== false,
			() =>
				html`<cosmoz-tree-view
					class="items"
					data-testid="tree"
					label=${t('Nodes')}
					.items=${found?.roots ?? roots}
					.getChildren=${found?.getChildren ?? getChildren}
					.getId=${(node: Node) => node.pathLocator}
					.getLabel=${(node: Node) => node[tree.searchProperty]}
					.expanded=${found ? searchExpanded : expanded}
					.selected=${highlighted || undefined}
					@expanded-changed=${(e: CustomEvent<{ value: string[] }>) => {
						e.preventDefault();
						(found ? setSearchExpanded : setExpanded)(e.detail.value);
					}}
					@selected-changed=${(e: CustomEvent<{ value: string }>) => {
						e.preventDefault();
						setHighlighted(e.detail.value);
					}}
					@activate=${(e: CustomEvent<{ id: string }>) => confirm(e.detail.id)}
					${ref(
						(el) => (treeViewRef.current = el as HTMLElement & TreeViewApi),
					)}
				></cosmoz-tree-view>`,
		)}
		${when(
			found && found.matches === 0,
			() =>
				html`<div class="empty" data-testid="no-results">
					${t('No nodes match the search')}
				</div>`,
		)}
	`;
};

customElements.define(
	'cosmoz-treenode-navigator',
	component(NodeNavigator, {
		styleSheets: [style],
	}),
);
