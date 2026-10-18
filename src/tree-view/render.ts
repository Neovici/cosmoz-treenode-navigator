import type { RangeChangedEvent } from '@lit-labs/virtualizer/events.js';
import {
	virtualize,
	type VirtualizerHostElement,
} from '@lit-labs/virtualizer/virtualize.js';
import { chevronRightIcon } from '@neovici/cosmoz-icons/untitled';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { ref } from 'lit-html/directives/ref.js';
import { defaultGetLabel } from './flatten';
import type { Props, Row } from './types';

interface State<T> {
	rows: Row<T>[];
	selected?: string;
	tabStopId?: string;
	scrollerRef: { current: VirtualizerHostElement | undefined };
	toggle: (id: string) => void;
	select: (row: Row<T>) => void;
	activate: (row: Row<T>) => void;
	onKeyDown: (e: KeyboardEvent) => void;
	treeTabIndex: number;
	focusActiveItem: () => void;
	onRowFocus: (row: Row<T>) => void;
	onRangeChanged: (event: RangeChangedEvent) => void;
}

const stop = (e: Event) => e.stopPropagation();

export const render = <T>(
	{ label, renderIcon, getLabel = defaultGetLabel }: Props<T>,
	{
		rows,
		selected,
		tabStopId,
		scrollerRef,
		toggle,
		select,
		activate,
		onKeyDown,
		treeTabIndex,
		focusActiveItem,
		onRowFocus,
		onRangeChanged,
	}: State<T>,
) => {
	const renderRow = (row: Row<T> | undefined) => {
		// While the rows shrink, the virtualizer can render once from its
		// previous range and hand us indexes past the end.
		if (!row) return html``;
		const isSelected = row.id === selected;
		return html`<div
			role="treeitem"
			class="row"
			part="row"
			data-id=${row.id}
			aria-level=${row.level}
			aria-posinset=${row.posinset}
			aria-setsize=${row.setsize}
			aria-expanded=${row.hasChildren ? String(row.expanded) : nothing}
			aria-selected=${String(isSelected)}
			tabindex=${row.id === tabStopId ? 0 : -1}
			@focus=${() => onRowFocus(row)}
			@click=${() => select(row)}
			@dblclick=${() => activate(row)}
		>
			${Array.from(
				{ length: row.level - 1 },
				() => html`<span class="guide" part="guide"></span>`,
			)}
			<span class="content" part="content">
				<span
					class="toggle"
					part="toggle"
					aria-hidden="true"
					@click=${row.hasChildren
						? (e: Event) => {
								stop(e);
								toggle(row.id);
							}
						: nothing}
					@dblclick=${stop}
					>${row.hasChildren
						? chevronRightIcon({ width: '16', height: '16' })
						: nothing}</span
				>${renderIcon
					? html`<span class="icon" part="icon"
							>${renderIcon(row.node, {
								expanded: row.expanded,
								selected: isSelected,
								hasChildren: row.hasChildren,
								level: row.level,
							})}</span
						>`
					: nothing}<span class="label" part="label"
					>${getLabel(row.node)}</span
				>
			</span>
		</div>`;
	};

	return html`<div
		role="tree"
		class="tree"
		part="tree"
		aria-label=${ifDefined(label)}
		tabindex=${treeTabIndex}
		@rangeChanged=${onRangeChanged}
		@focus=${(event: FocusEvent) => {
			if (event.target === event.currentTarget) focusActiveItem();
		}}
		@keydown=${onKeyDown}
		${ref((el) => {
			scrollerRef.current = el as VirtualizerHostElement | undefined;
		})}
	>
		${virtualize({
			items: rows,
			renderItem: renderRow,
			keyFunction: (row: Row<T> | undefined, index: number) => row?.id ?? index,
			scroller: true,
		})}
	</div>`;
};
