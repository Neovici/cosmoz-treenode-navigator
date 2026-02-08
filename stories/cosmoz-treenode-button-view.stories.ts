import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-button-view';
import { adminFilesTree } from './data/tree-data';

interface StoryArgs {
	buttonTextPlaceholder: string;
	dialogText: string;
	searchPlaceholder: string;
	searchGlobalPlaceholder: string;
	searchMinLength: number;
	searchDebounceTimeout: number;
	showReset: boolean;
	nodePath: string;
}

const tree = new DefaultTree(adminFilesTree);

const meta: Meta<StoryArgs> = {
	title: 'CosmozTreenodeButtonView',
	component: 'cosmoz-treenode-button-view',
	tags: ['autodocs'],
	argTypes: {
		buttonTextPlaceholder: { control: 'text' },
		dialogText: { control: 'text' },
		searchPlaceholder: { control: 'text' },
		searchGlobalPlaceholder: { control: 'text' },
		searchMinLength: { control: 'number' },
		searchDebounceTimeout: { control: 'number' },
		showReset: { control: 'boolean' },
		nodePath: { control: 'text' },
	},
	args: {
		buttonTextPlaceholder: 'Select a node',
		dialogText: 'Search or navigate to chosen destination',
		searchPlaceholder: 'Search...',
		searchGlobalPlaceholder: 'Click to search again but globally',
		searchMinLength: 3,
		searchDebounceTimeout: 2000,
		showReset: false,
		nodePath: '',
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
	render: (args) => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath || ''}
				button-text-placeholder=${args.buttonTextPlaceholder}
				dialog-text=${args.dialogText}
				search-placeholder=${args.searchPlaceholder}
				search-global-placeholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				?show-reset=${args.showReset}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement & { nodePath: string };

		await step('Renders with placeholder text', async () => {
			const button = el.shadowRoot?.querySelector(
				'cosmoz-button[part="action-open"]',
			);
			expect(button).toBeTruthy();
			expect(button?.textContent?.trim()).toContain('Select a node');
		});
	},
};

export const WithPreselectedNode: Story = {
	args: {
		nodePath: '1.2.3',
	},
	render: (args) => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath || ''}
				button-text-placeholder=${args.buttonTextPlaceholder}
				dialog-text=${args.dialogText}
				search-placeholder=${args.searchPlaceholder}
				search-global-placeholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				?show-reset=${args.showReset}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement;

		await step('Button renders selected path', async () => {
			await waitFor(() => {
				const button = el.shadowRoot?.querySelector(
					'cosmoz-button[part="action-open"]',
				);
				// nodePath '1.2.3' corresponds to 'C: / Windows / System' in the tree
				expect(button?.textContent?.trim()).toContain('C: / Windows / System');
			});
		});
	},
};

export const WithShowReset: Story = {
	args: {
		showReset: true,
		nodePath: '1.2.3',
	},
	render: (args) => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath || ''}
				button-text-placeholder=${args.buttonTextPlaceholder}
				dialog-text=${args.dialogText}
				search-placeholder=${args.searchPlaceholder}
				search-global-placeholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				?show-reset=${args.showReset}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement & { nodePath: string };

		await step(
			'Reset button is shown when showReset is true and node is selected',
			async () => {
				await waitFor(() => {
					const resetButton = el.shadowRoot?.querySelector(
						'cosmoz-button[part="action-reset"]',
					);
					expect(resetButton).toBeTruthy();
				});
			},
		);

		await step('Reset button clears selection', async () => {
			const resetButton = el.shadowRoot?.querySelector(
				'cosmoz-button[part="action-reset"]',
			) as HTMLElement;
			await userEvent.click(resetButton);

			await waitFor(() => {
				expect(el.nodePath).toBe('');
				// Reset button should disappear when no node is selected
				const resetButtonAfter = el.shadowRoot?.querySelector(
					'cosmoz-button[part="action-reset"]',
				);
				expect(resetButtonAfter).toBeNull();
			});
		});
	},
};

export const ResetButtonHiddenByDefault: Story = {
	args: {
		showReset: false,
		nodePath: '1.2.3',
	},
	render: (args) => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath || ''}
				button-text-placeholder=${args.buttonTextPlaceholder}
				dialog-text=${args.dialogText}
				search-placeholder=${args.searchPlaceholder}
				search-global-placeholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				?show-reset=${args.showReset}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement;

		await step('Reset button is hidden by default', async () => {
			const resetButton = el.shadowRoot?.querySelector(
				'cosmoz-button[part="action-reset"]',
			);
			expect(resetButton).toBeNull();
		});
	},
};

export const DialogInteraction: Story = {
	render: (args) => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath || ''}
				button-text-placeholder=${args.buttonTextPlaceholder}
				dialog-text=${args.dialogText}
				search-placeholder=${args.searchPlaceholder}
				search-global-placeholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				?show-reset=${args.showReset}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement;

		await step('Opens dialog on button click', async () => {
			const openButton = el.shadowRoot?.querySelector(
				'cosmoz-button[part="action-open"]',
			) as HTMLElement;
			await userEvent.click(openButton);

			await waitFor(() => {
				const dialog = el.shadowRoot?.querySelector(
					'dialog',
				) as HTMLDialogElement;
				expect(dialog.open).toBe(true);
			});
		});

		await step('Closes dialog on cancel button click', async () => {
			const dialog = el.shadowRoot?.querySelector(
				'dialog',
			) as HTMLDialogElement;
			const cancelButton = dialog.querySelector(
				'cosmoz-button[part="cancel-button"]',
			) as HTMLElement;
			await userEvent.click(cancelButton);

			await waitFor(() => {
				expect(dialog.open).toBe(false);
			});
		});
	},
};

export const SelectButtonInteraction: Story = {
	render: (args) => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${args.nodePath || ''}
				button-text-placeholder=${args.buttonTextPlaceholder}
				dialog-text=${args.dialogText}
				search-placeholder=${args.searchPlaceholder}
				search-global-placeholder=${args.searchGlobalPlaceholder}
				.searchMinLength=${args.searchMinLength}
				.searchDebounceTimeout=${args.searchDebounceTimeout}
				?show-reset=${args.showReset}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement & { nodePath: string };

		const openDialog = async () => {
			const openButton = el.shadowRoot?.querySelector(
				'cosmoz-button[part="action-open"]',
			) as HTMLElement;
			await userEvent.click(openButton);
			await waitFor(() => {
				const dialog = el.shadowRoot?.querySelector(
					'dialog',
				) as HTMLDialogElement;
				expect(dialog.open).toBe(true);
			});
		};

		const getNavigator = () =>
			el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;

		const getSelectButton = () =>
			el.shadowRoot
				?.querySelector('dialog')
				?.querySelector('cosmoz-button[part="select-button"]') as HTMLElement;

		const getCancelButton = () =>
			el.shadowRoot
				?.querySelector('dialog')
				?.querySelector('cosmoz-button[part="cancel-button"]') as HTMLElement;

		await step('Select button is initially disabled', async () => {
			await openDialog();

			await waitFor(() => {
				const selectButton = getSelectButton();
				expect(selectButton).toBeTruthy();
				expect(selectButton.hasAttribute('disabled')).toBe(true);
			});
		});

		await step('Single-clicking a node enables the Select button', async () => {
			const navigator = getNavigator();

			// Wait for nodes to render and click the first one
			await waitFor(() => {
				const nodes = navigator.shadowRoot?.querySelectorAll('.node');
				expect(nodes?.length).toBeGreaterThan(0);
			});

			const firstNode = navigator.shadowRoot?.querySelector(
				'.node',
			) as HTMLElement;
			await userEvent.click(firstNode);

			await waitFor(() => {
				const selectButton = getSelectButton();
				expect(selectButton.hasAttribute('disabled')).toBe(false);
			});
		});

		await step(
			'Clicking Select confirms selection and closes dialog',
			async () => {
				const selectButton = getSelectButton();
				await userEvent.click(selectButton);

				await waitFor(() => {
					const dialog = el.shadowRoot?.querySelector(
						'dialog',
					) as HTMLDialogElement;
					expect(dialog.open).toBe(false);
					// nodePath should be updated (C: drive has path '1')
					expect(el.nodePath).toBe('1');
				});
			},
		);

		await step(
			'Cancel after highlighting does not change nodePath',
			async () => {
				// Store current nodePath
				const previousNodePath = el.nodePath;

				await openDialog();

				const navigator = getNavigator();

				// Navigate into C: drive first to see children
				await waitFor(() => {
					const nodes = navigator.shadowRoot?.querySelectorAll('.node');
					expect(nodes?.length).toBeGreaterThan(0);
				});

				// Click arrow to navigate into C: drive
				const cDriveArrow = navigator.shadowRoot?.querySelector(
					'.node .icon',
				) as HTMLElement;
				await userEvent.click(cDriveArrow);

				// Wait for children to render and highlight a different node
				await waitFor(() => {
					const nodes = navigator.shadowRoot?.querySelectorAll('.node');
					expect(nodes?.length).toBeGreaterThan(0);
				});

				const childNode = navigator.shadowRoot?.querySelector(
					'.node',
				) as HTMLElement;
				await userEvent.click(childNode);

				// Verify Select button is enabled
				await waitFor(() => {
					const selectButton = getSelectButton();
					expect(selectButton.hasAttribute('disabled')).toBe(false);
				});

				// Click Cancel
				const cancelButton = getCancelButton();
				await userEvent.click(cancelButton);

				await waitFor(() => {
					const dialog = el.shadowRoot?.querySelector(
						'dialog',
					) as HTMLDialogElement;
					expect(dialog.open).toBe(false);
					// nodePath should remain unchanged
					expect(el.nodePath).toBe(previousNodePath);
				});
			},
		);

		await step(
			'Double-click on a node selects it and closes dialog',
			async () => {
				await openDialog();

				const navigator = getNavigator();

				// Navigate into C: drive first
				await waitFor(() => {
					const nodes = navigator.shadowRoot?.querySelectorAll('.node');
					expect(nodes?.length).toBeGreaterThan(0);
				});

				// Click arrow to navigate into C: drive
				const cDriveArrow = navigator.shadowRoot?.querySelector(
					'.node .icon',
				) as HTMLElement;
				await userEvent.click(cDriveArrow);

				// Wait for children and double-click a node (e.g., Windows folder)
				await waitFor(() => {
					const nodes = navigator.shadowRoot?.querySelectorAll('.node');
					expect(nodes?.length).toBeGreaterThan(0);
				});

				const childNode = navigator.shadowRoot?.querySelector(
					'.node',
				) as HTMLElement;
				await userEvent.dblClick(childNode);

				await waitFor(() => {
					const dialog = el.shadowRoot?.querySelector(
						'dialog',
					) as HTMLDialogElement;
					expect(dialog.open).toBe(false);
					// nodePath should be updated to the double-clicked node
					expect(el.nodePath).not.toBe('1'); // Changed from initial C: selection
				});
			},
		);
	},
};
