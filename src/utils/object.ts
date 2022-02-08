export function filter(object: object) {
  return Object.fromEntries(Object.entries(object).filter(([_key, value]) => value))
}
