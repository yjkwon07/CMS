import textToByte from './textToByte';

export default function sliceByte(text: string, len: number) {
  let size = 0;
  let rIndex = text.length;

  for (let i = 0; i < text.length; i += 1) {
    size += textToByte(text.charAt(i));
    if (size === len) {
      rIndex = i + 1;
      break;
    } else if (size > len) {
      rIndex = i;
      break;
    }
  }

  return text.substring(0, rIndex);
}
