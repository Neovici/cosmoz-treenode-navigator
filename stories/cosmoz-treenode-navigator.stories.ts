import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-navigator';
import { adminFilesTree } from './data/tree-data';

interface StoryArgs {
	searchPlaceholder: string;
	searchGlobalPlaceholder: string;
	searchMinLength: number;
	searchDebounceTimeout: number;
	opened: boolean;
}

const tree = new DefaultTree(adminFilesTree);

const meta: Meta<StoryArgs> = {
	title: 'CosmozTreenodeNavigator',
	component: 'cosmoz-treenode-navigator',
	tags: ['autodocs'],
	argTypes: {
		searchPlaceholder: { control: 'text' },
		searchGlobalPlaceholder: { control: 'text' },
		searchMinLength: { control: 'number' },
		searchDebounceTimeout: { control: 'number' },
		opened: { control: 'boolean' },
	},
	args: {
		searchPlaceholder: 'Search...',
		searchGlobalPlaceholder: 'Click to search again but globally',
		searchMinLength: 3,
		searchDebounceTimeout: 2000,
		opened: true,
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
	render: (args) => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchPlaceholder=${args.searchPlaceholder}
				.searchGlobalPlaceholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.opened=${args.opened}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await step('Instantiates the element', async () => {
			expect(el.tagName).toBe('COSMOZ-TREENODE-NAVIGATOR');
		});

		await step('Sets proper search placeholder', async () => {
			await waitFor(() => {
				const input = el.shadowRoot
					?.querySelector('cosmoz-input')
					?.shadowRoot?.querySelector('input');
				expect(input?.placeholder).toBe('Search...');
			});
		});
	},
};

export const WithCustomPlaceholders: Story = {
	args: {
		searchPlaceholder: 'Enter search term...',
		searchGlobalPlaceholder: 'Search in the entire tree',
		searchMinLength: 2,
		searchDebounceTimeout: 1000,
		opened: true,
	},
	render: (args) => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchPlaceholder=${args.searchPlaceholder}
				.searchGlobalPlaceholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.opened=${args.opened}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await step('Sets custom search placeholder', async () => {
			await waitFor(() => {
				const input = el.shadowRoot
					?.querySelector('cosmoz-input')
					?.shadowRoot?.querySelector('input');
				expect(input?.placeholder).toBe('Enter search term...');
			});
		});
	},
};

export const SearchFiltering: Story = {
	args: {
		searchPlaceholder: 'Search...',
		searchMinLength: 3,
		searchDebounceTimeout: 100, // Short debounce for faster tests
		opened: true,
	},
	render: (args) => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchPlaceholder=${args.searchPlaceholder}
				.searchGlobalPlaceholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.opened=${args.opened}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		const getInput = () =>
			el.shadowRoot
				?.querySelector('cosmoz-input')
				?.shadowRoot?.querySelector('input') as HTMLInputElement;

		await step('Shows all root nodes initially', async () => {
			await waitFor(() => {
				const nodes = el.shadowRoot?.querySelectorAll('.node');
				// Root has C: and D: drives
				expect(nodes?.length).toBe(2);
			});
		});

		await step('Type search term and verify filtering', async () => {
			const input = getInput();
			input.focus();
			input.value = 'John';
			input.dispatchEvent(
				new Event('input', { bubbles: true, composed: true }),
			);

			// Wait for debounce + filtering
			await waitFor(
				() => {
					const nodes = el.shadowRoot?.querySelectorAll('.node');
					// "John" appears twice in tree
					expect(nodes?.length).toBe(2);
				},
				{ timeout: 500 },
			);
		});

		await step('Clear search restores full list', async () => {
			const input = getInput();
			input.value = '';
			input.dispatchEvent(
				new Event('input', { bubbles: true, composed: true }),
			);

			await waitFor(
				() => {
					const nodes = el.shadowRoot?.querySelectorAll('.node');
					expect(nodes?.length).toBe(2); // Back to root level
				},
				{ timeout: 500 },
			);
		});
	},
};

export const SearchMinLength: Story = {
	args: {
		searchPlaceholder: 'Search (min 3 chars)...',
		searchMinLength: 3,
		searchDebounceTimeout: 100,
		opened: true,
	},
	render: (args) => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchPlaceholder=${args.searchPlaceholder}
				.searchGlobalPlaceholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.opened=${args.opened}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		const getInput = () =>
			el.shadowRoot
				?.querySelector('cosmoz-input')
				?.shadowRoot?.querySelector('input') as HTMLInputElement;

		await step('Type less than minLength - no filtering', async () => {
			const input = getInput();
			input.focus();
			input.value = 'Jo'; // Only 2 chars
			input.dispatchEvent(
				new Event('input', { bubbles: true, composed: true }),
			);

			// Wait for debounce
			await new Promise((r) => setTimeout(r, 200));

			const nodes = el.shadowRoot?.querySelectorAll('.node');
			// Should still show root nodes (no filtering happened)
			expect(nodes?.length).toBe(2);
		});

		await step('Type exactly minLength - triggers filtering', async () => {
			const input = getInput();
			input.value = 'Joh'; // Now 3 chars
			input.dispatchEvent(
				new Event('input', { bubbles: true, composed: true }),
			);

			await waitFor(
				() => {
					const nodes = el.shadowRoot?.querySelectorAll('.node');
					// "John" matches
					expect(nodes?.length).toBe(2);
				},
				{ timeout: 500 },
			);
		});
	},
};

export const GlobalSearchButton: Story = {
	args: {
		searchPlaceholder: 'Search...',
		searchGlobalPlaceholder: 'Click to search globally',
		searchMinLength: 3,
		searchDebounceTimeout: 100,
		opened: true,
	},
	render: (args) => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchPlaceholder=${args.searchPlaceholder}
				.searchGlobalPlaceholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				.opened=${args.opened}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		const getNodeNames = () =>
			Array.from(el.shadowRoot?.querySelectorAll('.node .name') ?? []).map(
				(n) => n.textContent?.trim(),
			);

		await step('Navigate into C: > Users folder', async () => {
			// Wait for root nodes
			await waitFor(() => {
				const nodes = el.shadowRoot?.querySelectorAll('.node');
				expect(nodes?.length).toBe(2); // C: and D:
			});

			// Click the arrow icon on C: to navigate into it
			const cDriveArrow = el.shadowRoot?.querySelector(
				'.node .icon',
			) as HTMLElement;
			await userEvent.click(cDriveArrow);

			await waitFor(() => {
				// C: has 3 children: Windows, Program Files, Users
				const nodeNames = getNodeNames();
				expect(nodeNames).toContain('Users');
				expect(nodeNames.length).toBe(3);
			});

			// Find the Users node and click its arrow
			const allNodes = el.shadowRoot?.querySelectorAll('.node');
			const usersNode = Array.from(allNodes ?? []).find(
				(n) => n.querySelector('.name')?.textContent?.trim() === 'Users',
			);
			const usersArrow = usersNode?.querySelector('.icon') as HTMLElement;
			await userEvent.click(usersArrow);

			await waitFor(() => {
				// Users has 3 children: Default, John, Public
				const nodeNames = getNodeNames();
				expect(nodeNames).toContain('John');
				expect(nodeNames.length).toBe(3);
			});
		});

		await step(
			'Local search for "John" returns 1 result (only in C:/Users)',
			async () => {
				const input = el.shadowRoot
					?.querySelector('cosmoz-input')
					?.shadowRoot?.querySelector('input') as HTMLInputElement;

				input.focus();
				input.value = 'John';
				input.dispatchEvent(
					new Event('input', { bubbles: true, composed: true }),
				);

				await waitFor(
					() => {
						const nodeNames = getNodeNames();
						// Local search in C:/Users finds only 1 John
						expect(nodeNames.length).toBe(1);
						expect(nodeNames[0]).toBe('John');

						// Global search button should be visible
						const globalBtn = el.shadowRoot?.querySelector('button.btn-ghost');
						expect(globalBtn).toBeTruthy();
						expect(globalBtn?.textContent).toContain(
							'Click to search globally',
						);
					},
					{ timeout: 1000 },
				);
			},
		);

		await step(
			'Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)',
			async () => {
				const globalBtn = el.shadowRoot?.querySelector(
					'button.btn-ghost',
				) as HTMLButtonElement;
				await userEvent.click(globalBtn);

				await waitFor(
					() => {
						const nodeNames = getNodeNames();
						// Global search finds 2 Johns: one in C:/Users, one in D:/Data
						expect(nodeNames.length).toBe(2);
						expect(nodeNames.every((name) => name === 'John')).toBe(true);

						// Global search button should disappear (now searching from root)
						const globalBtnAfter =
							el.shadowRoot?.querySelector('button.btn-ghost');
						expect(globalBtnAfter).toBeNull();
					},
					{ timeout: 500 },
				);
			},
		);
	},
};
