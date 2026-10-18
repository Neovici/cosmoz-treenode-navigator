import type { Node } from '@neovici/cosmoz-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import {
	findByShadowTestId,
	queryByShadowTestId,
} from 'shadow-dom-testing-library';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-navigator';
import type { NodeSource } from '../src/util/source';
import {
	expectRows,
	findRow,
	rowNames,
	search,
	toggleRow,
} from './test-helpers';

/**
 * Stands in for a server-backed source: it answers asynchronously, it cannot say
 * whether a node has children, and its search is global and pre-ranked.
 */
const nodes: Record<string, Node> = {
	'1.1': { id: 'a', pathLocator: '1.1', name: 'Alpha' },
	'1.2': { id: 'b', pathLocator: '1.2', name: 'Beta' },
	'1.1.1': { id: 'c', pathLocator: '1.1.1', name: 'Alpha child' },
};

const ranked = ['1.2', '1.1.1', '1.1'];

const later = <T>(value: T) =>
	new Promise<T>((resolve) => setTimeout(() => resolve(value), 10));

const remoteSource: NodeSource = {
	getLevel: (pathLocator) =>
		later(
			Object.values(nodes).filter(
				(node) =>
					node.pathLocator.startsWith(pathLocator ? `${pathLocator}.` : '1.') &&
					node.pathLocator.split('.').length ===
						(pathLocator || '1').split('.').length + 1,
			),
		),
	getPath: (pathLocator) =>
		later(
			pathLocator
				.split('.')
				.map((_, index, parts) => nodes[parts.slice(0, index + 1).join('.')])
				.filter(Boolean),
		),
	search: () => later(ranked.map((pathLocator) => nodes[pathLocator])),
	hasChildren: () => undefined,
	label: (node) => node.name ?? '',
	pathLabel: () => undefined,
	parentOf: (node) =>
		node.pathLocator.slice(0, node.pathLocator.lastIndexOf('.')),
	scopedSearch: false,
};

const meta: Meta = {
	title: 'Tests/CosmozTreenodeNavigatorSource',
};

export default meta;

type Story = StoryObj;

const render = () => html`
	<div style="height: 400px; width: 500px;">
		<cosmoz-treenode-navigator
			.source=${remoteSource}
			.searchMinLength=${3}
			.searchDebounceTimeout=${50}
			.opened=${true}
		></cosmoz-treenode-navigator>
	</div>
`;

export const LoadsLevelsFromSource: Story = {
	render,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
		const child = await findRow(el, 'Alpha child');
		expect(child.getAttribute('aria-expanded')).toBe('false');
		await toggleRow(child);
		await waitFor(() =>
			expect(child.hasAttribute('aria-expanded')).toBe(false),
		);
	},
};

export const KeepsSearchRankingAndHidesScopedSearch: Story = {
	render,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
		const searchInput = await findByShadowTestId(el, 'search-input');
		const input = searchInput.shadowRoot!.querySelector('input')!;
		input.value = 'alpha';
		input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
		await expectRows(el, ['Beta', 'Alpha', 'Alpha child']);
		expect(queryByShadowTestId(el, 'global-search-button')).toBeNull();
	},
};

export const ShowsLoadingThenError: Story = {
	render: () =>
		html`<div style="height:400px;width:500px">
			<cosmoz-treenode-navigator
				.source=${{
					...remoteSource,
					getLevel: (path: string) =>
						path
							? Promise.reject(new Error('offline'))
							: remoteSource.getLevel(path),
				}}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>`,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await findByShadowTestId(el, 'error');
		expect(rowNames(el)).toEqual(['Alpha', 'Beta']);
	},
};

export const EmptyLevelSuggestsSearch: Story = {
	render: () =>
		html`<div style="height:400px;width:500px">
			<cosmoz-treenode-navigator
				.source=${{ ...remoteSource, getLevel: () => [], search: () => [] }}
				.searchDebounceTimeout=${10}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>`,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		expect((await findByShadowTestId(el, 'empty')).textContent?.trim()).toBe(
			'Search to find a node.',
		);
		const input = (
			await findByShadowTestId(el, 'search-input')
		).shadowRoot!.querySelector('input')!;
		input.value = 'missing';
		input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
		await waitFor(async () =>
			expect(
				(await findByShadowTestId(el, 'no-results')).textContent?.trim(),
			).toBe('No nodes match the search'),
		);
	},
};

export const RetriesFailedLevel: Story = {
	render: () => {
		const failed = new Set<string>();
		const source = {
			...remoteSource,
			getLevel: (path: string) => {
				if (path && !failed.has(path)) {
					failed.add(path);
					return Promise.reject(new Error('offline'));
				}
				return remoteSource.getLevel(path);
			},
		};
		return html`<div style="height:400px;width:500px">
			<cosmoz-treenode-navigator
				.source=${source}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>`;
	},
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await findByShadowTestId(el, 'error');
		el.shadowRoot!.querySelector<HTMLButtonElement>('.retry')!.click();
		await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
		await waitFor(() => expect(queryByShadowTestId(el, 'error')).toBeNull());
	},
};

export const ReplacesSearchWithoutStaleSelection: Story = {
	render: () =>
		html`<div style="height:400px;width:500px">
			<cosmoz-treenode-navigator
				.source=${{
					...remoteSource,
					search: (query: string) =>
						new Promise<Node[]>((resolve) =>
							setTimeout(
								() => resolve([nodes[query === 'alpha' ? '1.1' : '1.2']]),
								query === 'beta' ? 300 : 10,
							),
						),
				}}
				.searchDebounceTimeout=${10}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>`,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;
		await expectRows(el, ['Alpha', 'Alpha child', 'Beta']);
		await search(el, 'alpha');
		await expectRows(el, ['Alpha']);
		(await findRow(el, 'Alpha')).click();
		await search(el, 'beta');
		await findByShadowTestId(el, 'loading');
		expect(rowNames(el)).toEqual([]);
		await expectRows(el, ['Beta']);
		expect((await findRow(el, 'Beta')).getAttribute('aria-selected')).toBe(
			'false',
		);
	},
};
