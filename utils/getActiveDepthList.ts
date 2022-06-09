export default function getActiveDepthList<T, C extends { [key: string]: any }>(
  categoryList: C[],
  keyName: string,
  parentName: string,
  keyId: T,
) {
  const activeCategoryList = [];
  let findCategory: C | undefined = categoryList.find((category) => category[keyName] === keyId);
  while (findCategory) {
    activeCategoryList.push(findCategory);
    // eslint-disable-next-line no-loop-func
    findCategory = categoryList.find((category) => category[keyName] === findCategory?.[parentName]);
  }
  return activeCategoryList;
}
