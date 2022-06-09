import flatten from './flatten';
import nestedChildren from './nestedChildren';

export default function selectParentTree(
  treeList: any[],
  selectParentIdList: string[],
  keyName: string,
  parentsName: string,
) {
  return flatten(
    nestedChildren(treeList, keyName, parentsName, 'subTreeList', '').filter((nestedTree) =>
      selectParentIdList.includes(nestedTree[keyName]),
    ),
    'subTreeList',
  );
}
