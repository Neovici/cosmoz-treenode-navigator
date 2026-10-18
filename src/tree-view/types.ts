import type { TemplateResult } from 'lit-html';

export type TreeViewSize = 'sm' | 'md';

/**
 * How the tree reads a node. Each accessor has a default, so plain
 * `{ id, label, children }` data works without any configuration.
 */
export interface TreeViewAccessors<T> {
	/** Stable, unique id of a node. Defaults to `node.id`. */
	getId?: (node: T) => string;
	/** Visible text of a node. Defaults to `node.label ?? node.name`. */
	getLabel?: (node: T) => string;
	/** Child nodes, or nothing for a leaf. Defaults to `node.children`. */
	getChildren?: (node: T) => readonly T[] | null | undefined;
	/** Whether a node can expand, including children not loaded yet. */
	hasChildren?: (node: T) => boolean;
}

export interface TreeViewRowState {
	expanded: boolean;
	selected: boolean;
	hasChildren: boolean;
	level: number;
}

export interface Props<T = unknown> extends TreeViewAccessors<T> {
	/** Root nodes. */
	items?: readonly T[];
	/** Id of the selected node. Two-way: emits `selected-changed`. */
	selected?: string;
	/** Ids of expanded nodes. Two-way: emits `expanded-changed`. */
	expanded?: readonly string[];
	size?: TreeViewSize;
	/** Accessible name of the tree. */
	label?: string;
	/** Optional icon before the label. */
	renderIcon?: (node: T, state: TreeViewRowState) => TemplateResult | unknown;
}

/** One visible row of the flattened tree. */
export interface Row<T> {
	node: T;
	id: string;
	/** 1-based depth, as in `aria-level`. */
	level: number;
	/** 1-based position among its siblings, as in `aria-posinset`. */
	posinset: number;
	/** Number of siblings including itself, as in `aria-setsize`. */
	setsize: number;
	parentId?: string;
	hasChildren: boolean;
	expanded: boolean;
}

/** Methods on the internal tree view element. */
export interface TreeViewApi {
	/** Moves focus to the active row (the tree's tab stop) and scrolls it into view. */
	focusActiveItem(): void;
}

export interface ActivateEventDetail<T = unknown> {
	id: string;
	node: T;
}
