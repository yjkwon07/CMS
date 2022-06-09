import _cloneDeep from 'lodash/cloneDeep';

/**
 * flatten list to list has a nested children list, like T & { [childrenKeyName]: T[] }[]
 * @param list flatten list
 * @param currentKeyName
 * @param parentKeyName
 * @param childrenKeyName add the nestedChildren 'key name'
 * @param parentValue to check current parentValue of obj === parameter parentValue (obj[parentKeyName] === parentValue)
 */

export default function nestedChildren<T extends Record<string | K, any>, P, K extends keyof any>(
  list: T[],
  currentKeyName: string,
  parentKeyName: string,
  childrenKeyName: K,
  parentValue: P,
) {
  const out: (T & Record<K, T[]>)[] = [];
  list.forEach((data) => {
    const cloneData = _cloneDeep(data);
    if (cloneData[currentKeyName] && cloneData[parentKeyName] === parentValue) {
      const children = nestedChildren(list, currentKeyName, parentKeyName, childrenKeyName, cloneData[currentKeyName]);
      if (children.length) (cloneData[childrenKeyName] as T[]) = children;
      else (cloneData[childrenKeyName] as T[]) = [];
      out.push(cloneData);
    }
  });
  return out;
}
