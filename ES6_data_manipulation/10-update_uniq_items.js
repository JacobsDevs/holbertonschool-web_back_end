export default function updateUniqueItems(inputMap) {
  if (inputMap instanceof Map) {
    inputMap.forEach((ele, key) => {
      if (ele === 1) {
        inputMap.set(key, 100);
      }
    });
  } else {
    throw new TypeError('Cannot process');
  }
  return inputMap;
}
