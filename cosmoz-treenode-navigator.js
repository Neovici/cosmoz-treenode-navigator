import {
	component,
	useEffect,
	useState,
	useMemo,
	useCallback,
	useRef,
} from 'haunted';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { guard } from 'lit-html/directives/guard.js';
import { ref } from 'lit-html/directives/ref.js';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';

import '@neovici/cosmoz-input';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';

import {
	getParentPath,
	computeDataPlane,
	computeRowClass,
	onNodeDblClicked,
} from './helpers';
import styles from './cosmoz-treenode-navigator.styles';

const TreenodeNavigator = (host) => {
	const {
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
			searchMinLength,
			nodePath,
			opened,
		} = host,
		/**
		 * The path of the opened node
		 */
		[openNodePath, setOpenNodePath] = useState(''),
		/**
		 * The highlighted (focused) node
		 * This is the node which is currently selected in the list
		 */
		[highlightedNode, setHighlightedNode] = useState(),
		/**
		 * The search string
		 */
		[searchValue, setSearchValue] = useState(''),
		search = useMemo(
			() => (searchValue?.length > searchMinLength && searchValue) || undefined,
			[searchValue, searchMinLength]
		),
		/**
		 * The currently displayed node list
		 */
		dataPlane = useMemo(
			() => computeDataPlane(tree, search, openNodePath),
			[tree, search, openNodePath]
		),
		/**
		 * Opens a node (renderLevel) based on a given path
		 * @param {object} clickedNode - The clicked node
		 * @return {undefined}
		 */
		openNode = useCallback(
			(clickedNode) => {
				setOpenNodePath(clickedNode?.pathLocator || '');
				setSearchValue('');
				setHighlightedNode();
			},
			[tree]
		),
		listRef = useRef();

	useEffect(() => {
		if (!openNodePath) {
			notifyProperty(host, 'highlightedNodePath', '');
			notifyProperty(host, 'nodesOnNodePath', []);
		}
	}, [openNodePath]);

	useEffect(() => {
		if (nodePath !== undefined) {
			host.dispatchEvent(new CustomEvent('select-node'));
		}
	}, [nodePath]);

	useEffect(() => {
		notifyProperty(
			host,
			'highlightedNodePath',
			highlightedNode?.pathLocator || ''
		);
	}, [highlightedNode]);

	const meta = useMeta({ dataPlane, highlightedNode, openNode });

	useEffect(() => {
		if (!opened) {
			return;
		}

		const getVlist = () => {
				const list = listRef.current,
					vlist = list[Object.getOwnPropertySymbols(list)[0]];
				return vlist;
			},
			// eslint-disable-next-line max-lines-per-function, max-statements
			handler = (e) => {
				if ((e.ctrlKey && e.altKey) || e.defaultPrevented) {
					return;
				}
				const {
						dataPlane: items,
						highlightedNode: node,
						openNode: open,
					} = meta,
					vlist = getVlist(),
					getIndex = () =>
						items.findIndex((i) => i.pathLocator === node?.pathLocator);

				switch (e.key) {
					case 'Up':
					case 'ArrowUp':
						{
							const idx = getIndex(),
								nidx = Math.max(idx - 1, 0);
							e.preventDefault();
							setHighlightedNode(items[nidx]);
							if (nidx < vlist._firstVisible) {
								vlist.scrollToIndex = { index: nidx, position: 'start' };
							}
						}
						break;
					case 'Down':
					case 'ArrowDown':
						{
							const idx = getIndex();
							if (idx < items.length - 1) {
								const nidx = idx + 1;
								e.preventDefault();
								setHighlightedNode(items[nidx]);
								if (nidx > vlist._lastVisible) {
									vlist.scrollToIndex = { index: nidx, position: 'end' };
								}
							}
						}
						break;

					case 'Enter':
						if (node) {
							e.preventDefault();
							host.dispatchEvent(new CustomEvent('node-dblclicked'));
						}
						break;

					case 'Right':
					case 'ArrowRight':
						if (node && tree.hasChildren(node)) {
							e.preventDefault();
							open(node);
						}
						break;
					default:
						break;
				}
			};

		// autoscroll on open
		(() => {
			getVlist().scrollToIndex = {
				index: meta.dataPlane?.indexOf(meta.highlightedNode),
				position: 'center',
			};
		})();

		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);
	}, [opened, meta]);

	const renderItem = (node, index) => html` <div class="item">
		${((parentPath) =>
			when(
				search &&
					(index === 0 ||
						parentPath !== getParentPath(tree, dataPlane[index - 1])),
				() =>
					html`
						<div class="section">
							${tree.getPathString(parentPath, tree.searchProperty)}
						</div>
					`
			))(getParentPath(tree, node))}
		<div
			class=${computeRowClass('node', node, highlightedNode)}
			@click=${() => setHighlightedNode(node)}
			@dblclick=${(e) => onNodeDblClicked(e, host)}
		>
			${when(
				tree.hasChildren(node),
				() => html`
					<span class="icon" @click=${() => openNode(node)}>
						<svg
							width="7"
							height="16"
							viewBox="0 0 7 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M1 1L6 8L1 15" stroke="#101010" stroke-width="1.5" />
						</svg>
					</span>
				`
			)}
			<div class="name">${node[tree.searchProperty]}</div>
		</div>
	</div>`;

	return html`
		<style>
			${styles}
		</style>
		<div class="header">
			<h3 class="path">
				<span class="icon" @click=${() => openNode()}>
					<svg
						width="20"
						height="18"
						viewBox="0 0 20 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17 4H2"
							stroke="#0B0B0B"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<path
							d="M17 15H12C10.8954 15 10 14.1046 10 13V4"
							stroke="#0B0B0B"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<circle
							cx="4"
							cy="4"
							r="3.25"
							fill="white"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<circle
							cx="17"
							cy="4"
							r="2.25"
							fill="white"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<circle
							cx="17"
							cy="15"
							r="2.25"
							fill="white"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
					</svg>
				</span>
				${guard([tree, openNodePath], () =>
					((openNodePath && tree?.getPathNodes(openNodePath)) || []).map(
						(node) => html`
							<span class="slash">/</span>
							<span class="pointer" tabindex="0" @click=${() => openNode(node)}
								>${node[tree.searchProperty]}</span
							>
						`
					)
				)}
			</h3>
			<cosmoz-input
				type="search"
				tabindex="0"
				.value=${searchValue}
				.placeholder=${searchPlaceholder}
				@input=${(e) => setSearchValue(e.target.value)}
			/>
		</div>
		${when(
			tree,
			() => html` <div class="items" ${ref((el) => (listRef.current = el))}>
				<div virtualizer-sizer></div>
				${virtualize({
					items: dataPlane,
					renderItem,
					scroller: true,
				})}
			</div>`
		)}
		${when(
			search && openNodePath,
			() => html`
				<button class="btn-ghost" @click=${() => setOpenNodePath('')}>
					${searchGlobalPlaceholder}
				</button>
			`
		)}
	`;
};

customElements.define(
	'cosmoz-treenode-navigator',
	component(TreenodeNavigator)
);
