import type { Row, TreeViewAccessors } from './types';

type Node = Record<string, unknown>;

export const defaultGetId = (node: unknown) => String((node as Node).id);

export const defaultGetLabel = (node: unknown) =>
	String((node as Node).label ?? (node as Node).name ?? '');

export const defaultGetChildren = (node: unknown) =>
	(node as Node).children as readonly unknown[] | undefined;

/**
 * The rows a reader sees: roots, and the children of every expanded node,
 * depth first. Only expanded branches are walked, so a node with a huge
 * number of children costs nothing until it is opened.
 */
export const flatten = <T>(
	items: readonly T[] | null | undefined,
	expanded: ReadonlySet<string>,
	{
		getId = defaultGetId,
		getChildren = defaultGetChildren as NonNullable<
			TreeViewAccessors<T>['getChildren']
		>,
		hasChildren: canExpand,
	}: TreeViewAccessors<T> = {},
): Row<T>[] => {
	const rows: Row<T>[] = [];
	const visit = (nodes: readonly T[], level: number, parentId?: string) => {
		const setsize = nodes.length;
		nodes.forEach((node, i) => {
			const id = getId(node);
			const children = getChildren(node);
			const hasChildren = canExpand?.(node) ?? (children?.length ?? 0) > 0;
			const isExpanded = hasChildren && expanded.has(id);
			rows.push({
				node,
				id,
				level,
				posinset: i + 1,
				setsize,
				parentId,
				hasChildren,
				expanded: isExpanded,
			});
			if (isExpanded) {
				visit(children ?? [], level + 1, id);
			}
		});
	};
	if (items?.length) {
		visit(items, 1);
	}
	return rows;
};

export type KeyAction =
	| { type: 'focus'; index: number }
	| { type: 'expand'; id: string }
	| { type: 'collapse'; id: string };

/**
 * What a navigation key does on the row at `index`, following the WAI-ARIA
 * tree pattern. Returns nothing when the key has no effect there, so the
 * caller can leave the event alone (and native scrolling working).
 */
export const keyAction = <T>(
	rows: readonly Row<T>[],
	index: number,
	key: string,
): KeyAction | undefined => {
	const row = rows[index];
	if (!row) {
		return rows.length > 0 ? { type: 'focus', index: 0 } : undefined;
	}
	switch (key) {
		case 'ArrowDown':
			return index < rows.length - 1
				? { type: 'focus', index: index + 1 }
				: undefined;
		case 'ArrowUp':
			return index > 0 ? { type: 'focus', index: index - 1 } : undefined;
		case 'Home':
			return index > 0 ? { type: 'focus', index: 0 } : undefined;
		case 'End':
			return index < rows.length - 1
				? { type: 'focus', index: rows.length - 1 }
				: undefined;
		case 'ArrowRight':
			if (!row.hasChildren) return undefined;
			if (!row.expanded) return { type: 'expand', id: row.id };
			return rows[index + 1]?.parentId === row.id
				? { type: 'focus', index: index + 1 }
				: undefined;
		case 'ArrowLeft': {
			if (row.expanded) return { type: 'collapse', id: row.id };
			if (row.parentId == null) return undefined;
			const parent = rows.findIndex(
				(r, i) => i < index && r.id === row.parentId,
			);
			return parent >= 0 ? { type: 'focus', index: parent } : undefined;
		}
		default:
			return undefined;
	}
};

/** `expanded` with `id` added or removed. */
export const toggleId = (
	expanded: readonly string[],
	id: string,
	open = !expanded.includes(id),
): string[] => {
	const has = expanded.includes(id);
	if (open === has) return [...expanded];
	return open ? [...expanded, id] : expanded.filter((e) => e !== id);
};
