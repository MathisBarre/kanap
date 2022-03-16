export function deepCopy(item: any) {
  return JSON.parse(JSON.stringify(item));
}

export function uniq(a: any[]) {
  return Array.from(new Set(a));
}
