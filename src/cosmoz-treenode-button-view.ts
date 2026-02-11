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

import '@neovici/cosmoz-button/cosmoz-button';
import '@neovici/cosmoz-tooltip';
import type { Tree } from '@neovici/cosmoz-tree';
import { t } from 'i18next';
import { when } from 'lit-html/directives/when.js';
import './cosmoz-treenode-navigator';
import { useKeyDown } from './hooks/useKeyDown';
import { getTreePathParts } from './util/helpers';

type ButtonViewProps = {
	tree: Tree;
	showReset?: boolean;
	searchMinLength?: number;
	searchDebounceTimeout: number;
};

type ObservedAttributes = 'show-reset' | 'search-min-length';

type ButtonViewDialog = HTMLDialogElement & {
	fit: () => void;
};

const defaultIcon = html`<svg
	class="default-icon"
	width="20"
	height="20"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="7" cy="7" r="2" />
	<circle cx="17" cy="17" r="2" />
	<path d="M7 9v3c0 1.66 1.34 3 3 3h7" />
</svg>`;

const CosmozNodeButtonView = ({
	tree,
	showReset = false,
	searchMinLength = 3,
	searchDebounceTimeout = 2000,
}: ButtonViewProps) => {
	const dialogRef = useRef<ButtonViewDialog | null>(null);

	// nodePath is the single source of truth - external two-way binding
	const [nodePath, setNodePath] = useProperty<string>('nodePath', '');

	// opened is controllable externally
	const [opened, setOpened] = useProperty<boolean>('opened', false);

	// Track highlighted node path from navigator for Select button
	const [highlightedNodePath, setHighlightedNodePath] = useState<string>('');

	// nodesOnNodePath derived from nodePath + tree
	const nodesOnNodePath = useMemo(
		() => getTreePathParts(nodePath, tree),
		[nodePath, tree],
	);

	// buttonLabel derived from nodesOnNodePath
	const buttonLabel = useMemo(() => {
		if (!Array.isArray(nodesOnNodePath) || nodesOnNodePath.length === 0) {
			return t('Select a node');
		}

		return nodesOnNodePath
			.filter((n) => n)
			.map((part) => part[tree.searchProperty])
			.join(' / ');
	}, [nodesOnNodePath, tree]);

	// Sync dialog DOM state with opened property
	useEffect(() => {
		if (opened) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [opened]);

	const reset = () => {
		setNodePath('');
	};

	const onOpen = () => setOpened(true);

	const onClose = () => setOpened(false);

	useKeyDown('Escape', onClose);

	// Dialog dragging support
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

	// Handle node-path-changed from navigator - close dialog on selection
	const onNodePathChanged = (e: CustomEvent<{ value: string }>) => {
		e.preventDefault();
		const newPath = e.detail.value;
		if (newPath) {
			setNodePath(newPath);
			onClose();
		}
	};

	// Handle highlighted-node-path-changed from navigator
	const onHighlightedNodePathChanged = lift(setHighlightedNodePath);

	// Handle Select button click
	const onSelect = () => {
		if (highlightedNodePath) {
			setNodePath(highlightedNodePath);
			onClose();
		}
	};

	return html`
		<cosmoz-tooltip
			placement="right"
			.description=${buttonLabel}
			.delay=${1000}
		>
			<div class="actions" part="actions">
				<cosmoz-button
					variant="secondary"
					full-width
					data-testid="open-button"
					@click=${onOpen}
					part="action-open"
				>
					<slot name="prefix" slot="prefix">${defaultIcon}</slot>
					<div class="path-text">
						<span>${buttonLabel}</span>
					</div>
					<slot name="suffix" slot="suffix"></slot>
				</cosmoz-button>
				${when(
					showReset && !!nodePath,
					() =>
						html`<cosmoz-button
							variant="tertiary"
							@click=${reset}
							data-testid="reset-button"
							part="action-reset"
						>
							<svg
								slot="prefix"
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
						</cosmoz-button>`,
				)}
			</div>
		</cosmoz-tooltip>

		<dialog
			class="dialog"
			part="dialog"
			data-testid="dialog"
			${ref((el) => {
				dialogRef.current = el as ButtonViewDialog;
			})}
		>
			<header
				class="dialog-header"
				part="header"
				@mousedown=${onHeaderMouseDown}
			>
				<h1 class="dialog-heading" part="heading">
					${t('Search or navigate to chosen destination')}
				</h1>
			</header>
			<main class="dialog-main" part="main">
				<cosmoz-treenode-navigator
					id="treeNavigator"
					class="dialog-treenode-navigator no-padding"
					.nodePath=${nodePath}
					@node-path-changed=${onNodePathChanged}
					@highlighted-node-path-changed=${onHighlightedNodePathChanged}
					.searchMinLength=${searchMinLength}
					.searchDebounceTimeout=${searchDebounceTimeout}
					.tree=${tree}
					.opened=${opened}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<div class="dialog-footer-button-container">
					<cosmoz-button
						variant="primary"
						?disabled=${!highlightedNodePath}
						@click=${onSelect}
						data-testid="select-button"
						part="select-button"
					>
						${t('Select')}
					</cosmoz-button>
					<cosmoz-button
						variant="secondary"
						@click=${onClose}
						data-testid="cancel-button"
						part="cancel-button"
					>
						${t('Cancel')}
					</cosmoz-button>
				</div>
			</footer>
		</dialog>
	`;
};

CosmozNodeButtonView.observedAttributes = [
	'show-reset',
	'search-min-length',
] as readonly ObservedAttributes[];

customElements.define(
	'cosmoz-treenode-button-view',
	component(CosmozNodeButtonView, {
		styleSheets: [style],
	}),
);
