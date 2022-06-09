export default function appendZeroOneDigit(num: string | number) {
  return num < 10 && num >= 0 ? `0${num}` : `${num}`;
}
