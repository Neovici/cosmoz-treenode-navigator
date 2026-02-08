import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import {
	component,
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useRef,
} from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit/directives/ref.js';
import style from './cosmoz-treenode-button-view.styles';

import '@neovici/cosmoz-button/cosmoz-button';
import type { Tree } from '@neovici/cosmoz-tree';
import { when } from 'lit-html/directives/when.js';
import './cosmoz-treenode-navigator';
import { useKeyDown } from './hooks/useKeyDown';
import { getTreePathParts } from './util/helpers';

type ButtonViewProps = {
	tree: Tree;
	dialogText?: string;
	buttonTextPlaceholder?: string;
	searchPlaceholder?: string;
	showReset?: boolean;
	searchGlobalPlaceholder?: string;
	searchMinLength?: number;
	searchDebounceTimeout: number;
};

type ObservedAttributes =
	| 'button-text-placeholder'
	| 'dialog-text'
	| 'search-placeholder'
	| 'search-global-placeholder'
	| 'show-reset'
	| 'search-min-length';

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
>
	<path
		d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
	/>
</svg>`;

const CosmozNodeButtonView = ({
	tree,
	dialogText,
	buttonTextPlaceholder,
	searchPlaceholder,
	showReset = false,
	searchGlobalPlaceholder,
	searchMinLength = 3,
	searchDebounceTimeout = 2000,
}: ButtonViewProps) => {
	const host = useHost();
	const dialogRef = useRef<ButtonViewDialog | null>(null);
	const searchInputRef = useRef<HTMLInputElement | null>(null);

	// nodePath is the single source of truth - external two-way binding
	const [nodePath, setNodePath] = useProperty<string>('nodePath', '');

	// opened is controllable externally
	const [opened, setOpened] = useProperty<boolean>('opened', false);

	// nodesOnNodePath derived from nodePath + tree
	const nodesOnNodePath = useMemo(
		() => getTreePathParts(nodePath, tree),
		[nodePath, tree],
	);

	// buttonLabel derived from nodesOnNodePath
	const buttonLabel = useMemo(() => {
		if (!Array.isArray(nodesOnNodePath) || nodesOnNodePath.length === 0) {
			return buttonTextPlaceholder || '';
		}

		return nodesOnNodePath
			.filter((n) => n)
			.map((part) => part[tree.searchProperty])
			.join(' / ');
	}, [nodesOnNodePath, tree, buttonTextPlaceholder]);

	const onPrefixSlotChange = useCallback(
		(e: Event) => {
			const slot = e.target as HTMLSlotElement;
			const hasContent = slot.assignedNodes().length > 0;
			host.toggleAttribute('has-prefix', hasContent);
		},
		[host],
	);

	useEffect(() => {
		if (dialogRef.current) {
			searchInputRef.current = dialogRef.current
				.querySelector('cosmoz-treenode-navigator')
				?.shadowRoot?.querySelector('cosmoz-input') as HTMLInputElement | null;
		}
	}, [dialogRef.current]);

	// Sync dialog open state with opened property
	useEffect(() => {
		if (opened) {
			dialogRef.current?.showModal();
			setTimeout(() => searchInputRef.current?.focus(), 0);
		} else {
			dialogRef.current?.close();
		}
	}, [opened]);

	const reset = () => {
		setNodePath('');
	};

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

	return html`
		<div class="actions" part="actions">
			<cosmoz-button
				variant="secondary"
				full-width
				@click=${onOpen}
				part="action-open"
			>
				<span slot="prefix">
					<slot name="button-before" @slotchange=${onPrefixSlotChange}></slot>
					${defaultIcon}
				</span>
				<div class="path-text">
					<span>${buttonLabel}</span>
				</div>
				<slot name="button-after" slot="suffix"></slot>
			</cosmoz-button>
			${when(
				showReset && !!nodePath,
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
					.nodePath=${nodePath}
					@node-path-changed=${onNodePathChanged}
					.searchPlaceholder=${searchPlaceholder}
					.searchGlobalPlaceholder=${searchGlobalPlaceholder}
					.searchMinLength=${searchMinLength}
					.searchDebounceTimeout=${searchDebounceTimeout}
					.tree=${tree}
					.opened=${opened}
				>
					<slot></slot>
				</cosmoz-treenode-navigator>
			</main>
			<footer class="dialog-footer" part="footer">
				<p class="dialog-footer-button-container">
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
	'show-reset',
	'search-min-length',
] as readonly ObservedAttributes[];

customElements.define(
	'cosmoz-treenode-button-view',
	component(CosmozNodeButtonView, {
		styleSheets: [style],
	}),
);
