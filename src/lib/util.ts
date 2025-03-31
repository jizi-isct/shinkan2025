export const generateRandomString = (charCount = 7): string => {
  const str = Math.random().toString(36).substring(2).slice(-charCount)
  return str.length < charCount ? str + 'a'.repeat(charCount - str.length) : str
}

export function shortenUrl(url: string, maxLength = 30) {
  if (url.length <= maxLength) return url;
  return url.slice(0, maxLength - 3) + "...";
}