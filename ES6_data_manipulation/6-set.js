export default function setFromArray(array) {
  if (array instanceof Array) {
    return Set(array);
  }
  throw new TypeError('array must be an array');
}
