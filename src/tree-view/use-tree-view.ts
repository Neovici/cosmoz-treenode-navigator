import type { RangeChangedEvent } from '@lit-labs/virtualizer/events.js';
import {
	virtualizerRef,
	type VirtualizerHostElement,
} from '@lit-labs/virtualizer/virtualize.js';
import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import {
	useCallback,
	useEffect,
	useMemo,
	useProperty,
	useRef,
	useState,
} from '@pionjs/pion';
import { flatten, keyAction, toggleId } from './flatten';
import type { ActivateEventDetail, Props, Row } from './types';

type ScrollerRef = { current: VirtualizerHostElement | undefined };

const NO_IDS: readonly string[] = [];

const rowSelector = (id: string) =>
	`[role='treeitem'][data-id='${CSS.escape(id)}']`;

/**
 * Brings the row at `index` into view and, once the virtualizer has
 * rendered it, gives it focus. Rows outside the viewport do not exist in
 * the DOM, so the focus has to wait for the scroll.
 */
const revealRow = (
	scroller: VirtualizerHostElement | undefined,
	index: number,
	id: string,
	{ focus = true, block = 'nearest' as ScrollLogicalPosition } = {},
) => {
	if (!scroller) return;
	scroller[virtualizerRef]?.element(index)?.scrollIntoView({ block });
	if (!focus) return;
	let frames = 0;
	const tryFocus = () => {
		const el = scroller.querySelector<HTMLElement>(rowSelector(id));
		if (el) {
			el.focus({ preventScroll: true });
			return;
		}
		if (++frames < 10) requestAnimationFrame(tryFocus);
	};
	tryFocus();
};

/**
 * Resolves once the virtualizer has laid out its rows. On first render it
 * has no layout yet, and scrolling to an index then would throw. The
 * timeout covers an idle virtualizer, whose promise only settles after the
 * next layout pass.
 */
const whenLaidOut = async (scroller: VirtualizerHostElement | undefined) => {
	await new Promise(requestAnimationFrame);
	const virtualizer = scroller?.[virtualizerRef];
	if (!virtualizer) return;
	await Promise.race([
		virtualizer.layoutComplete.catch(() => undefined),
		new Promise((resolve) => setTimeout(resolve, 500)),
	]);
};

/** The row holding the tab stop: the active one, else the selected, else the first. */
const pickTabStop = <T>(
	rows: readonly Row<T>[],
	indexOf: ReadonlyMap<string, number>,
	...candidates: (string | undefined)[]
) => candidates.find((id) => id != null && indexOf.has(id)) ?? rows[0]?.id;

const useRows = <T>({ items, getId, getChildren, hasChildren }: Props<T>) => {
	const [expandedProp, setExpanded] = useProperty<readonly string[]>(
		'expanded',
		() => [],
	);
	const expanded = expandedProp ?? NO_IDS;
	const expandedSet = useMemo(() => new Set(expanded), [expanded]);
	const rows = useMemo(
		() => flatten(items, expandedSet, { getId, getChildren, hasChildren }),
		[items, expandedSet, getId, getChildren, hasChildren],
	);
	const indexOf = useMemo(
		() => new Map(rows.map((row, i) => [row.id, i] as const)),
		[rows],
	);
	const toggle = useCallback(
		(id: string, open?: boolean) =>
			setExpanded((current) => toggleId(current ?? NO_IDS, id, open)),
		[],
	);
	return { rows, indexOf, toggle };
};

/**
 * When the selection is set from outside (or the tree loads with one),
 * scroll it into view once, centred, so the reader sees where they are.
 * Selections made by clicking are already in view and are skipped.
 */
const useRevealSelection = (
	selected: string | undefined,
	indexOf: ReadonlyMap<string, number>,
	scrollerRef: ScrollerRef,
) => {
	const revealed = useRef<string | undefined>(undefined);
	useEffect(() => {
		if (selected == null || revealed.current === selected) return;
		const index = indexOf.get(selected);
		if (index == null) return;
		revealed.current = selected;
		whenLaidOut(scrollerRef.current).then(() =>
			revealRow(scrollerRef.current, index, selected, {
				focus: false,
				block: 'center',
			}),
		);
	}, [selected, indexOf]);
	return revealed;
};

interface KeyContext<T> {
	rows: readonly Row<T>[];
	index: number;
	select: (row: Row<T>) => void;
	activate: (row: Row<T>) => void;
	toggle: (id: string, open?: boolean) => void;
	focus: (index: number) => void;
}

const handleKey = <T>(e: KeyboardEvent, ctx: KeyContext<T>) => {
	if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
	const row = ctx.rows[ctx.index];
	if (row && (e.key === 'Enter' || e.key === ' ')) {
		e.preventDefault();
		(e.key === 'Enter' ? ctx.activate : ctx.select)(row);
		return;
	}
	const action = keyAction(ctx.rows, ctx.index, e.key);
	if (!action) return;
	e.preventDefault();
	if (action.type === 'focus') ctx.focus(action.index);
	else ctx.toggle(action.id, action.type === 'expand');
};

export const useTreeView = <T>(host: HTMLElement, props: Props<T>) => {
	const [selected, setSelected] = useProperty<string | undefined>('selected');
	const [activeId, setActiveId] = useState<string | undefined>(undefined);
	const [range, setRange] = useState({ first: -1, last: -1 });
	useEffect(() => setActiveId(selected), [selected]);
	const scrollerRef = useRef<VirtualizerHostElement | undefined>(undefined);
	const { rows, indexOf, toggle } = useRows(props);
	const revealed = useRevealSelection(selected, indexOf, scrollerRef);
	const tabStopId = pickTabStop(rows, indexOf, activeId, selected);
	const tabStopIndex = indexOf.get(tabStopId!) ?? -1;
	const treeTabIndex =
		rows.length && (tabStopIndex < range.first || tabStopIndex > range.last)
			? 0
			: -1;
	const focusActiveItem = () => {
		if (tabStopIndex >= 0) {
			revealRow(scrollerRef.current, tabStopIndex, tabStopId!);
		}
	};

	const select = useCallback((row: Row<T>) => {
		revealed.current = row.id;
		setActiveId(row.id);
		setSelected(row.id);
	}, []);

	const activate = useCallback((row: Row<T>) => {
		select(row);
		host.dispatchEvent(
			new CustomEvent<ActivateEventDetail<T>>('activate', {
				detail: { id: row.id, node: row.node },
				bubbles: true,
				composed: true,
			}),
		);
	}, []);

	// `focusActiveItem()` moves focus to the tab-stop row, as tabbing into
	// the tree would. Native `focus()` is left alone: frameworks and test
	// tools call it on the host and must not have focus redirected.
	useImperativeApi(
		{
			focusActiveItem,
		},
		[indexOf, tabStopId],
	);

	const onKeyDown = (e: KeyboardEvent) =>
		handleKey(e, {
			rows,
			index: indexOf.get(tabStopId!) ?? -1,
			select,
			activate,
			toggle,
			focus: (index: number) => {
				const target = rows[index];
				setActiveId(target.id);
				revealRow(scrollerRef.current, index, target.id);
			},
		});

	return {
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
		onRowFocus: (row: Row<T>) => setActiveId(row.id),
		onRangeChanged: ({ first, last }: RangeChangedEvent) =>
			setRange({ first, last }),
	};
};
