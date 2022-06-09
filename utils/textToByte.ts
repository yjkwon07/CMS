export default function textToByte(text: string) {
  let totalByte = 0;
  for (let i = 0; i < text.length; i += 1) {
    const unicode = escape(text.charAt(i)); // 유니코드 형식으로 변환
    if (unicode.length > 4) {
      totalByte += 3;
    } else {
      totalByte += 1;
    }
  }
  return totalByte;
}
