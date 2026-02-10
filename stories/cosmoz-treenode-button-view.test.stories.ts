import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import {
	findAllByShadowTestId,
	findByShadowTestId,
	queryByShadowTestId,
} from 'shadow-dom-testing-library';
import { expect, userEvent, waitFor } from 'storybook/test';
import '../src/cosmoz-treenode-button-view';
import { adminFilesTree } from './data/tree-data';

const tree = new DefaultTree(adminFilesTree);

const meta: Meta = {
	title: 'Tests/CosmozTreenodeButtonView',
};

export default meta;

type Story = StoryObj;

export const WithShowReset: Story = {
	render: () => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${'1.2.3'}
				show-reset
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
				await waitFor(async () => {
					const resetButton = await findByShadowTestId(el, 'reset-button');
					expect(resetButton).toBeTruthy();
				});
			},
		);

		await step('Reset button clears selection', async () => {
			const resetButton = await findByShadowTestId(el, 'reset-button');
			await userEvent.click(resetButton);

			await waitFor(() => {
				expect(el.nodePath).toBe('');
				// Reset button should disappear when no node is selected
				const resetButtonAfter = queryByShadowTestId(el, 'reset-button');
				expect(resetButtonAfter).toBeNull();
			});
		});
	},
};

export const WithoutReset: Story = {
	render: () => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${'1.2.3'}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement;

		await step('Reset button is hidden when showReset is false', async () => {
			await waitFor(() => {
				const resetButton = queryByShadowTestId(el, 'reset-button');
				expect(resetButton).toBeNull();
			});
		});
	},
};

export const DialogInteraction: Story = {
	render: () => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view .tree=${tree}></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement;

		await step('Opens dialog on button click', async () => {
			const openButton = await findByShadowTestId(el, 'open-button');
			await userEvent.click(openButton);

			await waitFor(async () => {
				const dialog = (await findByShadowTestId(
					el,
					'dialog',
				)) as HTMLDialogElement;
				expect(dialog.open).toBe(true);
			});
		});

		await step('Closes dialog on cancel button click', async () => {
			const dialog = (await findByShadowTestId(
				el,
				'dialog',
			)) as HTMLDialogElement;
			const cancelButton = await findByShadowTestId(el, 'cancel-button');
			await userEvent.click(cancelButton);

			await waitFor(() => {
				expect(dialog.open).toBe(false);
			});
		});
	},
};

export const SelectButtonInteraction: Story = {
	render: () => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view .tree=${tree}></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement & { nodePath: string };

		const openDialog = async () => {
			const openButton = await findByShadowTestId(el, 'open-button');
			await userEvent.click(openButton);
			await waitFor(async () => {
				const dialog = (await findByShadowTestId(
					el,
					'dialog',
				)) as HTMLDialogElement;
				expect(dialog.open).toBe(true);
			});
		};

		const getNavigator = () =>
			el.shadowRoot?.querySelector('cosmoz-treenode-navigator') as HTMLElement;

		const getSelectButton = async () =>
			(await findByShadowTestId(el, 'select-button')) as HTMLElement;

		const getCancelButton = async () =>
			await findByShadowTestId(el, 'cancel-button');

		await step('Select button is initially disabled', async () => {
			await openDialog();

			await waitFor(async () => {
				const selectButton = await getSelectButton();
				expect(selectButton).toBeTruthy();
				expect(selectButton.hasAttribute('disabled')).toBe(true);
			});
		});

		await step('Single-clicking a node enables the Select button', async () => {
			const navigator = getNavigator();

			// Wait for nodes to render and click the first one
			await waitFor(async () => {
				const nodes = await findAllByShadowTestId(navigator, 'node');
				expect(nodes.length).toBeGreaterThan(0);
			});

			const allNodes = await findAllByShadowTestId(navigator, 'node');
			await userEvent.click(allNodes[0]);

			await waitFor(async () => {
				const selectButton = await getSelectButton();
				expect(selectButton.hasAttribute('disabled')).toBe(false);
			});
		});

		await step(
			'Clicking Select confirms selection and closes dialog',
			async () => {
				const selectButton = await getSelectButton();
				await userEvent.click(selectButton);

				await waitFor(async () => {
					const dialog = (await findByShadowTestId(
						el,
						'dialog',
					)) as HTMLDialogElement;
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
				await waitFor(async () => {
					const nodes = await findAllByShadowTestId(navigator, 'node');
					expect(nodes.length).toBeGreaterThan(0);
				});

				// Click arrow to navigate into C: drive
				const allArrows = await findAllByShadowTestId(navigator, 'node-arrow');
				await userEvent.click(allArrows[0]);

				// Wait for children to render and highlight a different node
				await waitFor(async () => {
					const nodes = await findAllByShadowTestId(navigator, 'node');
					expect(nodes.length).toBeGreaterThan(0);
				});

				const allNodes = await findAllByShadowTestId(navigator, 'node');
				await userEvent.click(allNodes[0]);

				// Verify Select button is enabled
				await waitFor(async () => {
					const selectButton = await getSelectButton();
					expect(selectButton.hasAttribute('disabled')).toBe(false);
				});

				// Click Cancel
				const cancelButton = await getCancelButton();
				await userEvent.click(cancelButton);

				await waitFor(async () => {
					const dialog = (await findByShadowTestId(
						el,
						'dialog',
					)) as HTMLDialogElement;
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
				await waitFor(async () => {
					const nodes = await findAllByShadowTestId(navigator, 'node');
					expect(nodes.length).toBeGreaterThan(0);
				});

				// Click arrow to navigate into C: drive
				const allArrows = await findAllByShadowTestId(navigator, 'node-arrow');
				await userEvent.click(allArrows[0]);

				// Wait for children and double-click a node (e.g., Windows folder)
				await waitFor(async () => {
					const nodes = await findAllByShadowTestId(navigator, 'node');
					expect(nodes.length).toBeGreaterThan(0);
				});

				const allNodes = await findAllByShadowTestId(navigator, 'node');
				await userEvent.dblClick(allNodes[0]);

				await waitFor(async () => {
					const dialog = (await findByShadowTestId(
						el,
						'dialog',
					)) as HTMLDialogElement;
					expect(dialog.open).toBe(false);
					// nodePath should be updated to the double-clicked node
					expect(el.nodePath).not.toBe('1'); // Changed from initial C: selection
				});
			},
		);
	},
};

export const ExternalDialogControl: Story = {
	render: () => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.opened=${true}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement & { opened: boolean };

		await step(
			'Dialog opens when opened property is set externally',
			async () => {
				await waitFor(async () => {
					const dialog = (await findByShadowTestId(
						el,
						'dialog',
					)) as HTMLDialogElement;
					expect(dialog.open).toBe(true);
				});
			},
		);

		await step(
			'Dialog closes when opened property is set to false externally',
			async () => {
				el.opened = false;

				await waitFor(async () => {
					const dialog = (await findByShadowTestId(
						el,
						'dialog',
					)) as HTMLDialogElement;
					expect(dialog.open).toBe(false);
				});
			},
		);

		await step(
			'Dialog re-opens when opened property is set to true again',
			async () => {
				el.opened = true;

				await waitFor(async () => {
					const dialog = (await findByShadowTestId(
						el,
						'dialog',
					)) as HTMLDialogElement;
					expect(dialog.open).toBe(true);
				});
			},
		);
	},
};

export const WithInvalidNodePath: Story = {
	render: () => html`
		<div style="padding: 20px;">
			<cosmoz-treenode-button-view
				.tree=${tree}
				.nodePath=${'999.888.777'}
			></cosmoz-treenode-button-view>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector(
			'cosmoz-treenode-button-view',
		) as HTMLElement & { nodePath: string };

		await step('Button shows placeholder text for invalid path', async () => {
			const button = await findByShadowTestId(el, 'open-button');
			expect(button).toBeTruthy();
			expect(button?.textContent?.trim()).toContain('Select a node');
		});

		await step('Opens dialog to root nodes', async () => {
			const openButton = await findByShadowTestId(el, 'open-button');
			await userEvent.click(openButton);

			await waitFor(async () => {
				const dialog = (await findByShadowTestId(
					el,
					'dialog',
				)) as HTMLDialogElement;
				expect(dialog.open).toBe(true);
			});

			const navigator = el.shadowRoot?.querySelector(
				'cosmoz-treenode-navigator',
			) as HTMLElement;

			await waitFor(async () => {
				const nodes = await findAllByShadowTestId(navigator, 'node');
				// Root has C: and D: drives
				expect(nodes.length).toBe(2);
			});
		});

		await step('Can select a node successfully', async () => {
			const navigator = el.shadowRoot?.querySelector(
				'cosmoz-treenode-navigator',
			) as HTMLElement;

			// Click on first node to highlight it
			const allNodes = await findAllByShadowTestId(navigator, 'node');
			await userEvent.click(allNodes[0]);

			// Click Select button
			await waitFor(async () => {
				const selectButton = await findByShadowTestId(el, 'select-button');
				expect(selectButton.hasAttribute('disabled')).toBe(false);
			});

			const selectButton = await findByShadowTestId(el, 'select-button');
			await userEvent.click(selectButton);

			await waitFor(async () => {
				const dialog = (await findByShadowTestId(
					el,
					'dialog',
				)) as HTMLDialogElement;
				expect(dialog.open).toBe(false);
				// nodePath should be updated (C: drive has path '1')
				expect(el.nodePath).toBe('1');
			});
		});
	},
};
