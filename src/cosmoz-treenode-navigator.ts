import {
  component,
  useCallback,
  useEffect,
  useMemo,
  useProperty,
  useRef,
  useState,
} from '@pionjs/pion';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { guard } from 'lit-html/directives/guard.js';
import { ref } from 'lit-html/directives/ref.js';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';

import '@neovici/cosmoz-input';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';

import {
  computeDataPlane,
  computeRowClass,
  getParentPath,
  onNodeDblClicked,
}             from './util/helpers';
import styles from './cosmoz-treenode-navigator.styles';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { notifyProperty }                                  from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { NavigatorMeta, TreeNode, TreenodeNavigatorProps } from './util/types';

const TreenodeNavigator = ({
  /**
   * The main node structure
   */
  tree,
  /**
   * Placeholder for search field.
   */
  searchPlaceholder,
  /**
   * Text displayed when local search has finished
   * to suggest a search on the entire tree
   */
  searchGlobalPlaceholder,
  /**
   * Minimum length of searchValue to trigger a search
   */
  searchMinLength,
  opened,
}: TreenodeNavigatorProps) => {
  const listRef = useRef<HTMLElement>();
  const host = useHost();

  const [highlightedNode, setHighlightedNode] = useProperty<TreeNode | null>('highlightedNode');

  const [searchValue, setSearchValue] = useState('');
  const [openNodePath, setOpenNodePath] = useState('');

  const search = useMemo(
    () =>
      (searchValue?.length > (searchMinLength ?? 2) - 1 && searchValue) || undefined,
    [searchValue, searchMinLength],
  );

  const dataPlane = useMemo(
    () => computeDataPlane(tree, search, openNodePath),
    [tree, search, openNodePath],
  );

  /**
   * Opens a node (renderLevel) based on a given path
   * @param clickedNode - The clicked node
   * @return undefined
   */
  const onNodeClick = useCallback(
    (clickedNode?: TreeNode | null) => {
      setOpenNodePath(clickedNode?.pathLocator || '');
      setSearchValue('');

      setHighlightedNode(null);
    },
    [tree],
  );

  useEffect(() => {
    if (!openNodePath) {
      return;
    }

    notifyProperty(host, 'highlightedNodePath', '');
    notifyProperty(host, 'nodesOnNodePath', []);
  }, [openNodePath]);

  useEffect(() => {
    notifyProperty(
      host,
      'highlightedNodePath',
      highlightedNode?.pathLocator || '',
    );
  }, [highlightedNode]);

  const meta = useMeta<NavigatorMeta>({ dataPlane, highlightedNode: highlightedNode ?? null, onNodeClick });

  useEffect(() => {
    if (!opened) {
      return;
    }

    const getVlist = () => {
      const list = listRef.current;
      if (!list) return null;
      return list[Object.getOwnPropertySymbols(list)[0]];
    };

    // autoscroll to highlighted node
    const vlist = getVlist();
    if (vlist) {
      vlist.scrollToIndex = {
        index: meta.dataPlane?.indexOf(meta.highlightedNode as TreeNode),
        position: 'center',
      };
    }

    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.altKey) || e.defaultPrevented) {
        return;
      }

      const {
        dataPlane: items,
        highlightedNode: node,
        onNodeClick: open,
      } = meta;

      const vlist = getVlist();
      if (!vlist) return;

      const currentIndex = items.findIndex(
        (i) => i.pathLocator === node?.pathLocator,
      );

      const navigateToIndex = (newIndex: number, position: string) => {
        if (newIndex >= 0 && newIndex < items.length) {
          setHighlightedNode(items[newIndex]);

          // check if scrolling is needed
          const needsScroll =
            position === 'start'
              ? newIndex < vlist._firstVisible
              : newIndex > vlist._lastVisible;

          if (needsScroll) {
            vlist.scrollToIndex = { index: newIndex, position };
          }

          return true;
        }
        return false;
      };

      switch (e.key) {
        case 'Up':
        case 'ArrowUp': {
          e.preventDefault();
          navigateToIndex(Math.max(currentIndex - 1, 0), 'start');
          break;
        }
        case 'Down':
        case 'ArrowDown': {
          e.preventDefault();
          if (currentIndex < items.length - 1) {
            navigateToIndex(currentIndex + 1, 'end');
          }
          break;
        }
        case 'Enter':
          e.preventDefault();
          if (node) {
            host.dispatchEvent(new CustomEvent('node-dblclicked'));
          }
          break;

        case 'Right':
        case 'ArrowRight':
          e.preventDefault();
          if (node && tree.hasChildren(node)) {
            open(node);
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handler, true);

    return () => document.removeEventListener('keydown', handler, true);
  }, [opened, meta]);

  const renderItem = (node: TreeNode | null, index: number) => {
    if (!node) return html``;
    
    return html` <div class="item">
      ${((parentPath: string) =>
        when(
          search &&
            (index === 0 ||
              parentPath !== getParentPath(tree, dataPlane[index - 1])),
          () => html`
            <div class="section">
              ${tree.getPathString(parentPath, tree.searchProperty)}
            </div>
          `,
        ))(getParentPath(tree, node))}
      <div
        class=${computeRowClass('node', node, highlightedNode)}
        @click=${() => setHighlightedNode(node)}
        @dblclick=${(e: Event) => onNodeDblClicked(e, host)}
      >
        <div class="name">${node[tree.searchProperty]}</div>
        ${when(
          tree.hasChildren(node),
          () => html`
            <span class="icon" @click=${() => onNodeClick(node)}>
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                style="pointer-events: none; display: block; width: 100%; height: 100%;"
              >
                <g>
                  <path
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </g>
              </svg>
            </span>
          `,
        )}
      </div>
    </div>`;
  };

  return html`
    <style>
      ${styles}
    </style>
    <div class="header">
      <h3 class="path">
        <span class="icon" @click=${() => onNodeClick()}>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            style="pointer-events: none; display: block; width: 100%; height: 100%;"
          >
            <g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
          </svg>
        </span>
        ${guard([tree, openNodePath], () =>
          ((openNodePath && tree?.getPathNodes(openNodePath)) || []).map(
            (node) => html`
              <span class="slash">/</span>
              <span
                class="pointer"
                tabindex="0"
                @click=${() => onNodeClick(node)}
                >${node[tree.searchProperty]}</span
              >
            `,
          ),
        )}
      </h3>
      <cosmoz-input
        tabindex="0"
        .value=${searchValue}
        .placeholder=${searchPlaceholder}
        @input=${(e: Event) => setSearchValue((e.target as HTMLInputElement).value)}
      />
    </div>
    ${when(
      tree,
      () =>
        html` <div class="items" ${ref((el) => (listRef.current = el as HTMLElement))}>
          <div virtualizer-sizer></div>
          ${virtualize({
            items: dataPlane,
            renderItem,
            scroller: true,
          })}
        </div>`,
    )}
    ${when(
      search && openNodePath,
      () => html`
        <button class="btn-ghost" @click=${() => setOpenNodePath('')}>
          ${searchGlobalPlaceholder}
        </button>
      `,
    )}
  `;
};

customElements.define(
  'cosmoz-treenode-navigator',
  component(TreenodeNavigator),
);