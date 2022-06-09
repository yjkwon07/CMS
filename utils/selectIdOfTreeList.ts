import flatten from './flatten';
import getActiveDepthList from './getActiveDepthList';

function selectDepthIdList(
  selectedIdList: string[],
  selectIdList: string[],
  totalIdList: string[],
  parentCheckSubList: { [key: string]: string[] },
  isCheck: boolean,
) {
  if (isCheck) {
    const idList = Array.from(new Set(selectedIdList.concat(selectIdList)));
    Object.entries(parentCheckSubList)
      .reverse()
      .forEach(([parentId, subTreeList]) => {
        if (idList.filter((prevId) => subTreeList.includes(prevId)).length === subTreeList.length) {
          idList.push(parentId);
        }
      });
    return idList;
  }

  return selectedIdList.filter((prevId) => !totalIdList.includes(prevId));
}

export default function selectIdOfTreeList<C extends { [key: string]: any; subTreeList: C[] }>(
  selectedIdList: string[],
  treeList: C[],
  keyName: string,
  parentName: string,
  selectId: string,
  isCheck: boolean,
) {
  const parentTreeList = getActiveDepthList(treeList, keyName, parentName, selectId).filter(
    (parentTree) => parentTree[keyName] !== selectId,
  );

  const parentIdList = parentTreeList.map((parentTree) => parentTree[keyName]);

  const parentCheckSubList = parentTreeList.reduce<{ [key: string]: string[] }>((acc, parentTree) => {
    acc[parentTree[keyName]] = parentTree.subTreeList.map((subTree) => subTree[keyName]);
    return acc;
  }, {});

  const selectIdList = flatten(
    treeList.filter((parentTree) => parentTree[keyName] === selectId),
    'subTreeList',
  ).map((eduTree) => eduTree[keyName]);

  const totalIdList = parentIdList.concat(selectIdList);

  return selectDepthIdList(selectedIdList, selectIdList, totalIdList, parentCheckSubList, isCheck);
}
