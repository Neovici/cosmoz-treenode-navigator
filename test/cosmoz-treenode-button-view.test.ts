import { assert, fixture, html, nextFrame } from '@open-wc/testing';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import rtlData from './data/rtlTest';
import '../src/cosmoz-treenode-button-view';

suite('rtl', () => {
	let treeButton: any;

	suiteSetup(async () => {
		treeButton = await fixture(
			html`<cosmoz-treenode-button-view
				.tree=${new DefaultTree(rtlData)}
			></cosmoz-treenode-button-view>`,
		);
	});

	test('button renders selected path', (done) => {
		treeButton.nodePath = '1.2.3';
		setTimeout(() => {
			const buttonLabel = treeButton.shadowRoot
				.querySelector('.actions__open-dialog')
				.textContent.trim();
			assert.isTrue(buttonLabel.endsWith('1 / 2 / 3'));
			done();
		}, 500);
	});

	test('opens dialog on button click', async () => {
		const openButton = treeButton.shadowRoot.querySelector(
			'.actions__open-dialog',
		);
		openButton.click();

		await nextFrame();

		const dialog = treeButton.shadowRoot.querySelector('dialog');
		const isVisible = window.getComputedStyle(dialog).display !== 'none';
		assert.isTrue(isVisible, 'Dialog should be visible');

		const cancelButton = dialog.querySelector(
			'.dialog-footer-button[part="cancel-button"]',
		);
		cancelButton.click();

		await nextFrame();
	});

	test('closes dialog on cancel button click', async () => {
		const openButton = treeButton.shadowRoot.querySelector(
			'.actions__open-dialog',
		);
		openButton.click();

		await nextFrame();

		const dialog = treeButton.shadowRoot.querySelector('dialog');
		const cancelButton = dialog.querySelector(
			'.dialog-footer-button[part="cancel-button"]',
		);
		cancelButton.click();

		await nextFrame();

		assert.isFalse(!!dialog.open, 'Dialog should be closed');
	});

	test('sets button label from nodePath', async () => {
		treeButton.nodePath = '1.2.3';

		await nextFrame();

		const buttonLabel = treeButton.shadowRoot
			.querySelector('.actions__open-dialog')
			.textContent.trim();

		assert.isTrue(
			buttonLabel.endsWith('1 / 2 / 3'),
			'Button should display the path',
		);

		treeButton.nodePath = '';
		await nextFrame();
	});

	/*
			// commented out because test is unstable
			function isIdActiveElement(id, element, idPreviouslyFound) {
				let idFound = idPreviouslyFound || element && element.id === id;

				if (element != null && element.shadowRoot != null) {
					return isIdActiveElement(id, element.shadowRoot.activeElement, idFound);
				}

				// active element not null means that it has focus
				return element != null && idFound;
			}

			test('search input has focus when dialog has opened', done => {
				treeButton.$$('.pathToNode').click();
				Polymer.Base.async(() => {
					// real focus can only be tested here, not valid outside test()
					if (window.document.hasFocus()) {
						assert.equal(isIdActiveElement('searchInput', window.document.activeElement), true);
					}
					if (treeButton.$.dialogTree != null) {
						treeButton.$.dialogTree.close();
					}
					done();
				}, 50);
			});
		*/
});
