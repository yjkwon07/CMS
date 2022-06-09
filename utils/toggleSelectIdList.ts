export default function toggleSelectIdList<T>(selectList: T[], selectId: T, isChecked: boolean) {
  return isChecked ? selectList.concat(selectId) : selectList.filter((prevSelect) => prevSelect !== selectId);
}
