import flatten from './flatten';
import nestedChildren from './nestedChildren';

export default function removeParentTree(
  treeList: any[],
  removeParentIdList: string[],
  keyName: string,
  parentsName: string,
) {
  return flatten(
    nestedChildren(treeList, keyName, parentsName, 'subTreeList', '').filter(
      (nestedTree) => !removeParentIdList.includes(nestedTree[keyName]),
    ),
    'subTreeList',
  );
}
