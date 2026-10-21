import '@neovici/cosmoz-input';
import '@neovici/cosmoz-spinner';
import type { Node, Tree } from '@neovici/cosmoz-tree';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import {
	component,
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useRef,
	useState,
} from '@pionjs/pion';
import { t } from 'i18next';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { when } from 'lit-html/directives/when.js';
import style from './cosmoz-treenode-navigator.styles';
import { useNodes } from './hooks/useNodes';
import { useSearchTree, useSourceTree } from './hooks/useSourceTree';
import './tree-view/tree-view';
import type { TreeViewApi } from './tree-view/types';
import { treeSource, type NodeSource } from './util/source';

type Props = {
	tree?: Tree;
	source?: NodeSource;
	searchMinLength?: number;
	opened?: boolean;
	searchDebounceTimeout?: number;
};

const useSearch = (value: string, minLength: number, timeout: number) => {
	const [query, setQuery] = useState('');
	useEffect(() => {
		const id = setTimeout(() => {
			const trimmed = value.trim();
			setQuery(trimmed.length >= minLength ? trimmed : '');
		}, timeout);
		return () => clearTimeout(id);
	}, [value, minLength, timeout]);
	return value.trim().length >= minLength ? query : '';
};

const NodeNavigator = ({
	tree,
	source,
	searchMinLength = 3,
	searchDebounceTimeout = 500,
	opened,
}: Props) => {
	const host = useHost();
	const view = useRef<HTMLElement & TreeViewApi>();
	const [nodePath, setNodePath] = useProperty<string>('nodePath', '');
	const nodeSource = useMemo(() => source ?? treeSource(tree!), [source, tree]);
	const [value, setValue] = useState('');
	const query = useSearch(value, searchMinLength, searchDebounceTimeout);
	const {
		model,
		expanded,
		setExpanded,
		highlighted,
		setHighlighted,
		error,
		loading,
		retry: retryPath,
	} = useSourceTree(nodeSource, nodePath, opened);
	const search = useSearchTree(nodeSource, query);
	const [searchExpanded, setSearchExpanded] = useState<readonly string[]>([]);
	const { nodes: path } = useNodes(
		() => (highlighted ? nodeSource.getPath(highlighted) : []),
		[nodeSource, highlighted],
	);
	useEffect(() => {
		setSearchExpanded(search.found?.expanded ?? []);
	}, [search.found]);
	useEffect(() => {
		if (opened) setValue('');
	}, [opened]);
	useEffect(() => {
		notifyProperty(host, 'highlightedNodePath', highlighted);
	}, [highlighted]);
	useEffect(() => {
		if (query) setHighlighted('');
	}, [query]);
	const confirm = useCallback((path: string) => {
		if (path) setNodePath(path);
	}, []);
	const isLoading = query ? search.loading : loading || model.pending.size > 0;
	const hasError = query ? search.error : error || model.errors.size > 0;
	const items = query ? (search.found?.roots ?? []) : model.roots();
	const expand = (paths: readonly string[]) => {
		if (query) {
			setSearchExpanded(paths);
			return;
		}
		for (const path of paths) {
			if (!expanded.includes(path)) model.loadLevel(path);
		}
		setExpanded(paths);
	};
	const retry = () => {
		if (query) {
			search.retry();
			return;
		}
		if (error) {
			retryPath();
			return;
		}
		for (const path of model.errors) {
			model.loadLevel(path);
		}
	};
	const pickAncestor = (path: string) => {
		setHighlighted(path);
		if (!query) {
			setExpanded((current) => [...new Set([...current, path])]);
			model.loadLevel(path);
		}
	};
	return html`
		<div class="header">
			<div class="crumbs">
				${when(
					path.length,
					() =>
						html`<nav class="path" aria-label=${t('Path')} data-testid="path">
							${path.map(
								(node, index) =>
									html`${index
											? html`<span class="slash" aria-hidden="true">/</span>`
											: nothing}<button
											type="button"
											class="crumb"
											aria-current=${index === path.length - 1
												? 'location'
												: nothing}
											@click=${() => pickAncestor(node.pathLocator)}
										>
											${nodeSource.label(node)}
										</button>`,
							)}
						</nav>`,
				)}
			</div>
			<cosmoz-input
				autofocus
				data-testid="search-input"
				label=${t('Search nodes')}
				.value=${value}
				.placeholder=${t('Search...')}
				@input=${(event: Event) =>
					setValue((event.target as HTMLInputElement).value)}
				@keydown=${(event: KeyboardEvent) => {
					if (event.key === 'ArrowDown') {
						event.preventDefault();
						view.current?.focusActiveItem();
					} else if (event.key === 'Enter') {
						event.preventDefault();
						confirm(highlighted);
					}
				}}
			></cosmoz-input>
		</div>
		<div class="list">
			<cosmoz-treenode-tree-view
				class="items"
				data-testid="tree"
				label=${t('Nodes')}
				.items=${items}
				.getId=${(node: Node) => node.pathLocator}
				.getLabel=${nodeSource.label}
				.getChildren=${query ? search.found?.getChildren : model.getChildren}
				.hasChildren=${query
					? (node: Node) => (search.found?.getChildren(node).length ?? 0) > 0
					: model.hasChildren}
				.expanded=${query ? searchExpanded : expanded}
				.selected=${highlighted || undefined}
				@expanded-changed=${(event: CustomEvent<{ value: string[] }>) => {
					event.preventDefault();
					expand(event.detail.value);
				}}
				@selected-changed=${(event: CustomEvent<{ value: string }>) => {
					event.preventDefault();
					setHighlighted(event.detail.value);
				}}
				@activate=${(event: CustomEvent<{ id: string }>) =>
					confirm(event.detail.id)}
				${ref((el) => {
					view.current = el as HTMLElement & TreeViewApi;
				})}
			></cosmoz-treenode-tree-view>
			<div
				class="status"
				?data-over=${items.length > 0}
				role="status"
				aria-live="polite"
			>
				${when(
					hasError,
					() =>
						html`<span data-testid="error">${t('Could not load nodes.')}</span
							><button class="retry" type="button" @click=${retry}>
								${t('Try again')}
							</button>`,
					() =>
						when(
							isLoading,
							() =>
								html`<cosmoz-spinner
									data-testid="loading"
									role="img"
									aria-label=${t('Loading...')}
								></cosmoz-spinner>`,
							() =>
								when(
									!items.length,
									() =>
										html`<span data-testid=${query ? 'no-results' : 'empty'}
											>${query
												? t('No nodes match the search')
												: t('Search to find a node.')}</span
										>`,
								),
						),
				)}
			</div>
		</div>
	`;
};

customElements.define(
	'cosmoz-treenode-navigator',
	component(NodeNavigator, { styleSheets: [style] }),
);
