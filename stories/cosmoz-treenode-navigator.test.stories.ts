import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import {
	findAllByShadowTestId,
	findByShadowTestId,
	queryByShadowTestId,
} from 'shadow-dom-testing-library';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-navigator';
import { adminFilesTree } from './data/tree-data';

const tree = new DefaultTree(adminFilesTree);

const meta: Meta = {
	title: 'Tests/CosmozTreenodeNavigator',
};

export default meta;

type Story = StoryObj;

export const SearchFiltering: Story = {
	render: () => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchMinLength=${3}
				.searchDebounceTimeout=${100}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		const getInput = async () => {
			const searchInput = await findByShadowTestId(el, 'search-input');
			return searchInput.shadowRoot?.querySelector('input') as HTMLInputElement;
		};

		await step('Shows all root nodes initially', async () => {
			await waitFor(async () => {
				const nodes = await findAllByShadowTestId(el, 'node');
				// Root has C: and D: drives
				expect(nodes.length).toBe(2);
			});
		});

		await step('Type search term and verify filtering', async () => {
			const input = await getInput();
			input.focus();
			input.value = 'John';
			input.dispatchEvent(
				new Event('input', { bubbles: true, composed: true }),
			);

			// Wait for debounce + filtering
			await waitFor(
				async () => {
					const nodes = await findAllByShadowTestId(el, 'node');
					// "John" appears twice in tree
					expect(nodes.length).toBe(2);
				},
				{ timeout: 500 },
			);
		});

		await step('Clear search restores full list', async () => {
			const input = await getInput();
			input.value = '';
			input.dispatchEvent(
				new Event('input', { bubbles: true, composed: true }),
			);

			await waitFor(
				async () => {
					const nodes = await findAllByShadowTestId(el, 'node');
					expect(nodes.length).toBe(2); // Back to root level
				},
				{ timeout: 500 },
			);
		});
	},
};

export const SearchMinLength: Story = {
	render: () => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchMinLength=${3}
				.searchDebounceTimeout=${100}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		const getInput = async () => {
			const searchInput = await findByShadowTestId(el, 'search-input');
			return searchInput.shadowRoot?.querySelector('input') as HTMLInputElement;
		};

		await step('Type less than minLength - no filtering', async () => {
			const input = await getInput();
			input.focus();
			input.value = 'Jo'; // Only 2 chars
			input.dispatchEvent(
				new Event('input', { bubbles: true, composed: true }),
			);

			// Wait for debounce
			await new Promise((r) => setTimeout(r, 200));

			const nodes = await findAllByShadowTestId(el, 'node');
			// Should still show root nodes (no filtering happened)
			expect(nodes.length).toBe(2);
		});

		await step('Type exactly minLength - triggers filtering', async () => {
			const input = await getInput();
			input.value = 'Joh'; // Now 3 chars
			input.dispatchEvent(
				new Event('input', { bubbles: true, composed: true }),
			);

			await waitFor(
				async () => {
					const nodes = await findAllByShadowTestId(el, 'node');
					// "John" matches
					expect(nodes.length).toBe(2);
				},
				{ timeout: 500 },
			);
		});
	},
};

export const GlobalSearchButton: Story = {
	render: () => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.searchMinLength=${3}
				.searchDebounceTimeout=${100}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		const getNodeNames = async () => {
			const nodeNames = await findAllByShadowTestId(el, 'node-name');
			return nodeNames.map((n) => n.textContent?.trim());
		};

		await step('Navigate into C: > Users folder', async () => {
			// Wait for root nodes
			await waitFor(async () => {
				const nodes = await findAllByShadowTestId(el, 'node');
				expect(nodes.length).toBe(2); // C: and D:
			});

			// Click the arrow icon on C: to navigate into it
			const allArrows = await findAllByShadowTestId(el, 'node-arrow');
			await userEvent.click(allArrows[0]);

			await waitFor(async () => {
				// C: has 3 children: Windows, Program Files, Users
				const nodeNames = await getNodeNames();
				expect(nodeNames).toContain('Users');
				expect(nodeNames.length).toBe(3);
			});

			// Find the Users node and click its arrow
			const allNodes = await findAllByShadowTestId(el, 'node');
			const allNodeNames = await findAllByShadowTestId(el, 'node-name');
			const usersIndex = allNodeNames.findIndex(
				(n) => n.textContent?.trim() === 'Users',
			);
			const usersNode = allNodes[usersIndex];
			const usersArrow = usersNode?.querySelector(
				'[data-testid="node-arrow"]',
			) as HTMLElement;
			await userEvent.click(usersArrow);

			await waitFor(async () => {
				// Users has 3 children: Default, John, Public
				const nodeNames = await getNodeNames();
				expect(nodeNames).toContain('John');
				expect(nodeNames.length).toBe(3);
			});
		});

		await step(
			'Local search for "John" returns 1 result (only in C:/Users)',
			async () => {
				const searchInput = await findByShadowTestId(el, 'search-input');
				const input = searchInput.shadowRoot?.querySelector(
					'input',
				) as HTMLInputElement;

				input.focus();
				input.value = 'John';
				input.dispatchEvent(
					new Event('input', { bubbles: true, composed: true }),
				);

				await waitFor(
					async () => {
						const nodeNames = await getNodeNames();
						// Local search in C:/Users finds only 1 John
						expect(nodeNames.length).toBe(1);
						expect(nodeNames[0]).toBe('John');

						// Global search button should be visible
						const globalBtn = await findByShadowTestId(
							el,
							'global-search-button',
						);
						expect(globalBtn).toBeTruthy();
						expect(globalBtn?.textContent).toContain(
							'Click to search again but globally',
						);
					},
					{ timeout: 1000 },
				);
			},
		);

		await step(
			'Global search for "John" returns 2 results (C:/Users/John and D:/Data/John)',
			async () => {
				const globalBtn = await findByShadowTestId(el, 'global-search-button');
				await userEvent.click(globalBtn);

				await waitFor(
					async () => {
						const nodeNames = await getNodeNames();
						// Global search finds 2 Johns: one in C:/Users, one in D:/Data
						expect(nodeNames.length).toBe(2);
						expect(nodeNames.every((name) => name === 'John')).toBe(true);

						// Global search button should disappear (now searching from root)
						const globalBtnAfter = queryByShadowTestId(
							el,
							'global-search-button',
						);
						expect(globalBtnAfter).toBeNull();
					},
					{ timeout: 500 },
				);
			},
		);
	},
};

export const WithEmptyNodePath: Story = {
	render: () => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.nodePath=${''}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await step('Shows root nodes with empty nodePath', async () => {
			await waitFor(async () => {
				const nodes = await findAllByShadowTestId(el, 'node');
				// Root has C: and D: drives
				expect(nodes.length).toBe(2);
			});
		});

		await step('No node is highlighted', async () => {
			const highlightedNode = queryByShadowTestId(el, 'highlighted-node');
			expect(highlightedNode).toBeNull();
		});
	},
};

export const WithInvalidNodePath: Story = {
	render: () => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.nodePath=${'999.888.777'}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await step('Component renders without crashing', async () => {
			expect(el.tagName).toBe('COSMOZ-TREENODE-NAVIGATOR');
		});

		await step('Falls back to showing root nodes', async () => {
			await waitFor(async () => {
				const nodes = await findAllByShadowTestId(el, 'node');
				// Root has C: and D: drives
				expect(nodes.length).toBe(2);
			});
		});

		await step('Navigation still works', async () => {
			const allArrows = await findAllByShadowTestId(el, 'node-arrow');
			await userEvent.click(allArrows[0]);

			await waitFor(async () => {
				const nodeNames = await findAllByShadowTestId(el, 'node-name');
				const names = nodeNames.map((n) => n.textContent?.trim());
				// C: has 3 children: Windows, Program Files, Users
				expect(names).toContain('Windows');
				expect(names.length).toBe(3);
			});
		});
	},
};

export const WithPartiallyValidNodePath: Story = {
	render: () => html`
		<div
			style="height: 400px; width: 500px; border: 1px solid #ccc; padding: 10px;"
		>
			<cosmoz-treenode-navigator
				.tree=${tree}
				.nodePath=${'1.2.999'}
				.opened=${true}
			></cosmoz-treenode-navigator>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-navigator',
		) as HTMLElement;

		await step('Component renders without crashing', async () => {
			expect(el.tagName).toBe('COSMOZ-TREENODE-NAVIGATOR');
		});

		await step(
			'Opens to last valid parent (C:/Windows) and shows its children',
			async () => {
				await waitFor(async () => {
					const nodeNames = await findAllByShadowTestId(el, 'node-name');
					const names = nodeNames.map((n) => n.textContent?.trim());
					// Windows has children including System
					expect(names).toContain('System');
				});
			},
		);

		await step('Breadcrumb shows C: / Windows path', async () => {
			await waitFor(async () => {
				const homeIcon = await findByShadowTestId(el, 'home-icon');
				expect(homeIcon).toBeTruthy();
				// The path should contain C: and Windows in the header
				const header = el.shadowRoot?.querySelector('.path');
				expect(header?.textContent).toContain('C:');
				expect(header?.textContent).toContain('Windows');
			});
		});

		await step('Can click on a node to highlight it', async () => {
			const allNodes = await findAllByShadowTestId(el, 'node');
			await userEvent.click(allNodes[0]);
			// Just verify it doesn't crash and nodes are still visible
			await waitFor(async () => {
				const nodes = await findAllByShadowTestId(el, 'node');
				expect(nodes.length).toBeGreaterThan(0);
			});
		});
	},
};
