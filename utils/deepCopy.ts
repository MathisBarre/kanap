export function deepCopy(item: any) {
  return JSON.parse(JSON.stringify(item))
}