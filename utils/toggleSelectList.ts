export default function toggleSelectList<T extends { [key: string]: any }>(
  selectList: T[],
  select: T,
  selectName: string,
  isChecked: boolean,
) {
  return isChecked
    ? selectList.concat(select)
    : selectList.filter((prevSelect) => prevSelect[selectName] !== select[selectName]);
}
