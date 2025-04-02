export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && array instanceof Array) {
    return array.every((x) => set.has(x));
  }
}
