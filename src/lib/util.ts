export const generateRandomString = (charCount = 7): string => {
  const str = Math.random().toString(36).substring(2).slice(-charCount)
  return str.length < charCount ? str + 'a'.repeat(charCount - str.length) : str
}

export function shortenUrl(url: string, maxLength = 30) {
  if (url.length <= maxLength) return url;
  return url.slice(0, maxLength - 3) + "...";
}

export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    // 0～iの範囲のランダムなインデックスを生成
    const j = Math.floor(Math.random() * (i + 1));
    // 配列の要素を交換
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}