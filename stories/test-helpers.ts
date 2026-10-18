import {
	findAllByShadowRole,
	findByShadowTestId,
	queryAllByShadowRole,
} from 'shadow-dom-testing-library';
import { userEvent, waitFor } from 'storybook/test';

/** The visible text of a tree row. */
export const rowName = (row: HTMLElement) =>
	row.querySelector('.label')?.textContent?.trim();

/** Names of all rendered tree rows, top to bottom. */
export const rowNames = (el: HTMLElement) =>
	queryAllByShadowRole(el, 'treeitem').map(rowName);

/** The rendered row with the given name. */
export const findRow = async (el: HTMLElement, name: string, nth = 0) => {
	const rows = await findAllByShadowRole(el, 'treeitem');
	const matches = rows.filter((row) => rowName(row) === name);
	if (!matches[nth]) throw new Error(`No row named "${name}" (#${nth})`);
	return matches[nth];
};

/** Names of the selected rows (at most one). */
export const selectedNames = (el: HTMLElement) =>
	queryAllByShadowRole(el, 'treeitem')
		.filter((row) => row.getAttribute('aria-selected') === 'true')
		.map(rowName);

/** Clicks a row's chevron, which expands or collapses it. */
export const toggleRow = async (row: HTMLElement) =>
	userEvent.click(row.querySelector('.toggle') as HTMLElement);

/** Types into the navigator's search input. */
export const search = async (el: HTMLElement, value: string) => {
	const host = await findByShadowTestId(el, 'search-input');
	const input = host.shadowRoot?.querySelector('input') as HTMLInputElement;
	input.focus();
	input.value = value;
	input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
	return input;
};

/** Waits until the rendered rows are exactly `names`. */
export const expectRows = (el: HTMLElement, names: string[], timeout = 1000) =>
	waitFor(
		() => {
			const actual = rowNames(el);
			if (JSON.stringify(actual) !== JSON.stringify(names)) {
				throw new Error(
					`Rows were ${JSON.stringify(actual)}, expected ${JSON.stringify(names)}`,
				);
			}
		},
		{ timeout },
	);
