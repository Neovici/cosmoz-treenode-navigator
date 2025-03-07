import { TreeNode } from '../../src/util/types';

type TreeStructure = {
  [key: string]: TreeNode;
};

const rtlTest: TreeStructure = {
  1: {
    name: 'שורש',
    pathLocator: '1',
    children: {
      2: {
        name: 'ילד',
        pathLocator: '1.2',
        children: {
          3: {
            name: 'נכד',
            pathLocator: '1.2.3',
            children: {},
          },
        },
      },
    },
  },
};

export default rtlTest;