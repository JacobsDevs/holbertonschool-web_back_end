export default function getListStudentIds(arr, city) {
  if (arr instanceof Array && typeof city === 'string') {
    const res = arr.filter((x) => x.location === city);
    return res;
  }
  return [];
}
