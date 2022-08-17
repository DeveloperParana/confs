export function maxChars(value: string, max: number) {
  return value.length > max ? value.slice(0, max) + '...' : value;
}
