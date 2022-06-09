export default function allEqual<T>(arr: T[]) {
  return arr.every((val) => val === arr[0]);
}
