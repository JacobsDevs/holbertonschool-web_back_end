export default function updateUniqueItems(input_map) {
  input_map.forEach((ele, key) => {
    if (ele === 1) {
      input_map.set(key, 100);
    }
  });
  return input_map;
}
