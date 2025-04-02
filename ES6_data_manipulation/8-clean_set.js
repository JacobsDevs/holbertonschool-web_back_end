export default function cleanSet(set, startString) {
  const stringArray = [];
  if (set instanceof Set && typeof startString === 'string' && startString !== '') {
    set.forEach((x) => {
      if (x.startsWith(startString)) {
        stringArray.push(x.slice(3));
      }
    });
  }
  return stringArray.join('-');
}
