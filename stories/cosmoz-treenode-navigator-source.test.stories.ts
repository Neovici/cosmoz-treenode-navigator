import type { Node } from '@neovici/cosmoz-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import {
	findAllByShadowTestId,
	findByShadowTestId,
	queryByShadowTestId,
} from 'shadow-dom-testing-library';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-navigator';
import type { NodeSource } from '../src/util/source';

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
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await step('Roots arrive once the source resolves', async () => {
			await waitFor(async () => {
				const rows = await findAllByShadowTestId(el, 'node');
				expect(rows.length).toBe(2);
			});
		});

		await step('An unknown child count still offers the arrow', async () => {
			const arrows = await findAllByShadowTestId(el, 'node-arrow');
			expect(arrows.length).toBe(2);
		});

		await step('Opening a node loads its children', async () => {
			const [firstArrow] = await findAllByShadowTestId(el, 'node-arrow');
			firstArrow.click();

			await waitFor(async () => {
				const names = await findAllByShadowTestId(el, 'node-name');
				expect(names.map((n) => n.textContent?.trim())).toEqual([
					'Alpha child',
				]);
			});
		});
	},
};

export const KeepsSearchRankingAndHidesScopedSearch: Story = {
	render,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await waitFor(async () => {
			expect((await findAllByShadowTestId(el, 'node')).length).toBe(2);
		});

		// Open a node first: the re-search button is only ever offered while a
		// search is scoped to one, so asserting its absence from the roots would
		// pass whatever `scopedSearch` said.
		await step('Open a node, so a search would be scoped to it', async () => {
			const [firstArrow] = await findAllByShadowTestId(el, 'node-arrow');
			firstArrow.click();

			await waitFor(async () => {
				const names = await findAllByShadowTestId(el, 'node-name');
				expect(names.map((n) => n.textContent?.trim())).toEqual([
					'Alpha child',
				]);
			});
		});

		await step(
			'Results keep the order the source returned them in',
			async () => {
				const searchInput = await findByShadowTestId(el, 'search-input');
				const input = searchInput.shadowRoot?.querySelector(
					'input',
				) as HTMLInputElement;
				input.focus();
				input.value = 'alpha';
				input.dispatchEvent(
					new Event('input', { bubbles: true, composed: true }),
				);

				await waitFor(async () => {
					const names = await findAllByShadowTestId(el, 'node-name');
					expect(names.map((n) => n.textContent?.trim())).toEqual([
						'Beta',
						'Alpha child',
						'Alpha',
					]);
				});
			},
		);

		await step('A source that searches globally offers no re-search', () => {
			expect(queryByShadowTestId(el, 'global-search-button')).toBeNull();
		});
	},
};
