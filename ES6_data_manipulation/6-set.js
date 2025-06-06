export default function setFromArray(array) {
  if (array instanceof Array) {
    return new Set(array);
  }
  throw new TypeError('array must be an array');
}
