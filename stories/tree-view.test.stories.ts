import { building07Icon, folderIcon } from '@neovici/cosmoz-icons/untitled';
import { component, html, useState } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, fn, waitFor } from 'storybook/test';
import '../src/tree-view/tree-view';
import type { TreeViewRowState } from '../src/tree-view/types';
import {
	organisation,
	pathNodes,
	wide,
	type Item,
	type PathNode,
} from './data/tree-view-data';

interface StoryArgs {
	size: 'sm' | 'md';
	items: Item[];
	expanded: string[];
	selected?: string;
	icons: boolean;
	onSelected: (id: string) => void;
	onActivate: (id: string) => void;
}

const icon = (_node: unknown, { hasChildren }: TreeViewRowState) =>
	(hasChildren ? folderIcon : building07Icon)({ width: '16', height: '16' });

const meta: Meta<StoryArgs> = {
	title: 'Tests/TreeView',
	component: 'cosmoz-treenode-tree-view',
	argTypes: {
		size: { control: 'inline-radio', options: ['sm', 'md'] },
		icons: { control: 'boolean' },
	},
	args: {
		size: 'sm',
		items: organisation,
		expanded: ['root'],
		icons: false,
		onSelected: fn(),
		onActivate: fn(),
	},
	render: (args) =>
		html`<cosmoz-treenode-tree-view
			style="height: 360px; width: 320px"
			label="Organisation"
			size=${args.size}
			.items=${args.items}
			.expanded=${args.expanded}
			.selected=${args.selected}
			.renderIcon=${args.icons ? icon : undefined}
			@selected-changed=${(e: CustomEvent<{ value: string }>) =>
				args.onSelected(e.detail.value)}
			@activate=${(e: CustomEvent<{ id: string }>) =>
				args.onActivate(e.detail.id)}
		></cosmoz-treenode-tree-view>`,
};

export default meta;

type Story = StoryObj<StoryArgs>;

const rows = (canvas: { getAllByShadowRole: (r: string) => HTMLElement[] }) =>
	canvas.getAllByShadowRole('treeitem');

const rowByName = (
	canvas: { getByShadowText: (t: string) => HTMLElement },
	name: string,
) => canvas.getByShadowText(name).closest<HTMLElement>('[role="treeitem"]')!;

// toHaveFocus() checks document.activeElement, which is the shadow host.
const hasFocus = (el: Element | null) => !!el?.matches(':focus');

export const Default: Story = {
	play: async ({ canvas, step, userEvent, args }) => {
		await step('Shows the root and its children', async () => {
			await canvas.findByShadowText('Client ICA');
			expect(rows(canvas)).toHaveLength(5);
		});

		await step('Clicking the chevron expands without selecting', async () => {
			const ica = rowByName(canvas, 'Client ICA');
			await userEvent.click(ica.querySelector('.toggle')!);
			await canvas.findByShadowText('Region North');
			expect(ica.getAttribute('aria-expanded')).toBe('true');
			expect(ica.getAttribute('aria-selected')).toBe('false');
			expect(args.onSelected).not.toHaveBeenCalled();
		});

		await step('Clicking a row selects it', async () => {
			await userEvent.click(canvas.getByShadowText('Region South'));
			expect(args.onSelected).toHaveBeenCalledWith('ica.south');
			expect(
				rowByName(canvas, 'Region South').getAttribute('aria-selected'),
			).toBe('true');
		});

		await step('Double-click activates', async () => {
			await userEvent.dblClick(canvas.getByShadowText('Head office'));
			expect(args.onActivate).toHaveBeenCalledWith('ica.hq');
		});
	},
};

export const Keyboard: Story = {
	args: { selected: 'ica' },
	play: async ({ canvas, step, userEvent, args }) => {
		const ica = await waitFor(() => rowByName(canvas, 'Client ICA'));

		await step('The selected row holds the tab stop', async () => {
			expect(ica.tabIndex).toBe(0);
			ica.focus();
		});

		await step('ArrowRight expands, then moves into the children', async () => {
			await userEvent.keyboard('{ArrowRight}');
			await canvas.findByShadowText('Region North');
			await userEvent.keyboard('{ArrowRight}');
			await waitFor(() =>
				expect(hasFocus(rowByName(canvas, 'Region North'))).toBe(true),
			);
		});

		await step(
			'ArrowDown / ArrowLeft move and go back to the parent',
			async () => {
				await userEvent.keyboard('{ArrowDown}');
				await waitFor(() =>
					expect(hasFocus(rowByName(canvas, 'Region South'))).toBe(true),
				);
				await userEvent.keyboard('{ArrowLeft}');
				await waitFor(() =>
					expect(hasFocus(rowByName(canvas, 'Client ICA'))).toBe(true),
				);
			},
		);

		await step('ArrowLeft on an open node collapses it', async () => {
			await userEvent.keyboard('{ArrowLeft}');
			await waitFor(() =>
				expect(canvas.queryByShadowText('Region North')).toBeNull(),
			);
		});

		await step('Space selects, Enter activates', async () => {
			await userEvent.keyboard('{ArrowDown} ');
			expect(args.onSelected).toHaveBeenLastCalledWith('rexel');
			await userEvent.keyboard('{Enter}');
			expect(args.onActivate).toHaveBeenCalledWith('rexel');
		});
	},
};

export const WithIcons: Story = {
	args: {
		icons: true,
		expanded: ['root', 'ica', 'ica.north'],
		selected: 'ica.north.umea',
	},
};

export const Medium: Story = {
	args: { size: 'md', icons: true, expanded: ['root', 'ica'] },
};

const big = wide(100_000);

export const HundredThousandChildren: Story = {
	args: { items: big, expanded: ['wide'], selected: 'wide.50000' },
	play: async ({ canvas, step }) => {
		await step(
			'Renders only the rows in view, centred on the selection',
			async () => {
				await canvas.findByShadowText('Store 050001');
				expect(rows(canvas).length).toBeLessThan(100);
			},
		);
		await step(
			'Keeps a keyboard entry point after the active row scrolls out',
			async () => {
				const tree = canvas.getByShadowRole('tree');
				// Initial scroll corrections settle over two animation frames.
				await new Promise<void>((resolve) =>
					requestAnimationFrame(() =>
						requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
					),
				);
				tree.scrollTop = 0;
				await waitFor(() =>
					expect(tree.querySelector('[data-id="wide.50000"]')).toBeNull(),
				);
				await waitFor(() => expect(tree.tabIndex).toBe(0));
				tree.focus();
				await waitFor(() =>
					expect(hasFocus(tree.querySelector('[data-id="wide.50000"]'))).toBe(
						true,
					),
				);
			},
		);
	},
};

// A host that owns `selected` and `expanded`, the way an app would.
customElements.define(
	'controlled-treenode-tree-demo',
	component(() => {
		const [selected, setSelected] = useState<string | undefined>('ica.hq');
		const [expanded, setExpanded] = useState<string[]>(['root', 'ica']);
		return html`
			<p style="font: var(--cz-text-sm) var(--cz-font-body)">
				selected: <b data-testid="selected">${selected ?? '—'}</b> · expanded:
				<b data-testid="expanded">${expanded.join(', ')}</b>
			</p>
			<button @click=${() => setExpanded([])}>Collapse all</button>
			<button @click=${() => setSelected('rexel.no')}>Select Norway</button>
			<cosmoz-treenode-tree-view
				style="height: 300px; width: 320px"
				label="Organisation"
				.items=${organisation}
				.selected=${selected}
				.expanded=${expanded}
				@selected-changed=${(e: CustomEvent<{ value: string }>) => {
					e.preventDefault();
					setSelected(e.detail.value);
				}}
				@expanded-changed=${(e: CustomEvent<{ value: string[] }>) => {
					e.preventDefault();
					setExpanded(e.detail.value);
				}}
			></cosmoz-treenode-tree-view>
		`;
	}),
);

export const Controlled: Story = {
	render: () =>
		html`<controlled-treenode-tree-demo></controlled-treenode-tree-demo>`,
	play: async ({ canvas, step, userEvent }) => {
		await step('The host state drives the tree', async () => {
			await canvas.findByShadowText('Head office');
			expect(
				rowByName(canvas, 'Head office').getAttribute('aria-selected'),
			).toBe('true');
		});

		await step('Tree interactions update the host state', async () => {
			await userEvent.click(canvas.getByShadowText('Region North'));
			await waitFor(() =>
				expect(canvas.getByShadowTestId('selected').textContent).toBe(
					'ica.north',
				),
			);
		});

		await step('Host changes are reflected in the tree', async () => {
			await userEvent.click(
				canvas.getByShadowRole('button', { name: 'Collapse all' }),
			);
			await waitFor(() => expect(rows(canvas)).toHaveLength(1));
		});
	},
};

const getPathId = (node: PathNode) => node.pathLocator;
const getPathLabel = (node: PathNode) => node.name;
const getPathChildren = (node: PathNode) =>
	node.children ? Object.values(node.children) : undefined;

export const CustomAccessors: Story = {
	render: () =>
		html`<cosmoz-treenode-tree-view
			style="height: 240px; width: 320px"
			label="Files"
			.items=${pathNodes}
			.getId=${getPathId}
			.getLabel=${getPathLabel}
			.getChildren=${getPathChildren}
			.expanded=${['1', '1.2']}
			.selected=${'1.2.3'}
		></cosmoz-treenode-tree-view>`,
	play: async ({ canvas, step }) => {
		await step(
			'Reads ids, labels and children through the accessors',
			async () => {
				await canvas.findByShadowText('System');
				expect(rowByName(canvas, 'System').dataset.id).toBe('1.2.3');
				expect(rows(canvas)).toHaveLength(6);
			},
		);
	},
};

export const Empty: Story = {
	args: { items: [] },
	play: async ({ canvas, step }) => {
		await step('Renders an empty tree without rows', async () => {
			await canvas.findByShadowRole('tree');
			expect(canvas.queryAllByShadowRole('treeitem')).toHaveLength(0);
		});
	},
};
