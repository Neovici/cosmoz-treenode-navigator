(function () {
	'use strict';

	Polymer({
		behaviors: [
			Cosmoz.TranslatableBehavior
		],

		is: 'cosmoz-treenode-button-view',

		properties: {
			/*
			 * The main node structure
			 */
			tree: {
				type: Cosmoz.tree
			},
			/*
			 * Currently selected node object
			 */
			selectedNode: {
				type: Object,
				value: function (){
					return {};
				},
				notify: true
			},
			/**
			 * If true, reset button gets hidden
			 */
			noReset: {
				type: Boolean,
				value: false
			},
			/*
			 * Placeholder for the search field
			 */
			searchPlaceholder: {
				type: String
			},
			/*
			 * Placeholder for button text
			 */
			buttonTextPlaceholder: {
				type: String,
				value: 'No selection made'
			},
			/*
			 * The path of the selected node
			 */
			nodePath: {
				type: String,
				notify: true
			},
			/*
			 * The nodes on the path of the selected node
			 */
			nodesOnNodePath: {
				type: Array
			},
			/*
			 * The (by serachProperty) resolved path of the selected node
			 */
			resolvedNodePath: {
				type: String
			},
			/*
			 * Text displayed when local search has finished
			 * to suggest a search on the entire tree
			 */
			searchGlobalPlaceholder: {
				type: String
			},
			/*
			 * Settable text for dialog title.
			 */
			dialogText: {
				type: String,
				value: 'Search or navigate to chosen destination'
			},
			/*
			 * Minimum length before an search
			 * starts.
			 */
			searchMinLength: {
				type: Number
			},
			/*
			 * Path string of highlighted (focused) node
			 */
			highlightedNodePath: {
				type: String
			}
		},
		_enableReset: function (nodePath, noReset) {
			if (noReset) {
				return false;
			}
			return !!nodePath;
		},

		_openCollapse() {
			if (!this.resolvedNodePath) {
				return;
			}
			this.$.collapse.opened = true;
			this.$.collapseIcon.icon = 'icons:arrow-drop-up';
		},

		_closeCollapse() {
			this.$.collapse.opened = false;
			this.$.collapseIcon.icon = 'icons:arrow-drop-down';
		},

		_handleButtonTrack(e) {
			if (e.detail.state !== 'end') {
				return;
			}
			if (e.detail.dy > 10) {
				// swipe down
				this._openCollapse();
			}
			if (e.detail.dy < -10) {
				// swipe up
				this._closeCollapse();
			}
		},
		_getButtonLabelName(selectedNode, placeholder) {
			return selectedNode && this.tree ? selectedNode[this.tree.searchProperty] : placeholder;
		},
		openDialogTree: function () {
			this.$.dialogTree.open();
		},
		focusSearch: function () {
			this.$.treeNavigator.focus();
		},
		reset: function () {
			this.nodePath = '';
		},
		selectNode: function () {
			this.nodePath = this.highlightedNodePath;
		},
		refit: function () {
			this.debounce('refit', function () {
				this.$.dialogTree.fit();
			}.bind(this), 50); // 5 was enough during test
		}
	});
}());
