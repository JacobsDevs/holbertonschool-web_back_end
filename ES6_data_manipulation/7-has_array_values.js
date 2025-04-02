export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && array instanceof Array) {
    return array.every((x) => set.has(x));
  }
  throw new TypeError('array must be array and set must be set');
}
