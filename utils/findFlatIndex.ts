export default function findFlatIndex(lengthList: number[], index: number) {
  return lengthList.slice(0, index).reduce((acc, value) => acc + value, 0);
}
