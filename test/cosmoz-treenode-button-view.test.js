import { assert, fixture, html } from '@open-wc/testing';
import { DefaultTree } from '@neovici/cosmoz-tree/cosmoz-default-tree';
import rtlData from './data/rtlTest.js';
import '../cosmoz-treenode-button-view';

suite('rtl', () => {
	let treeButton;

	suiteSetup(async () => {
		treeButton = await fixture(
			html`<cosmoz-treenode-button-view
				.tree=${new DefaultTree(rtlData)}
			></cosmoz-treenode-button-view>`,
		);
	});

	// test('button renders selected path', (done) => {
	// 	treeButton.nodePath = '1.2.3';
	// 	// Button view label depends on a binding in a cosmoz-treenode-navigator
	// 	// stamped asynchronously, so we need to wait a bit.
	// 	setTimeout(() => {
	// 		const buttonLabel = treeButton.shadowRoot
	// 			.querySelector('div > paper-button > div > cosmoz-treenode')
	// 			.shadowRoot.querySelector('span').textContent;
	// 		assert.isTrue(buttonLabel.endsWith('1 / 2 / 3'));
	// 		done();
	// 	}, 500);
	// });

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
