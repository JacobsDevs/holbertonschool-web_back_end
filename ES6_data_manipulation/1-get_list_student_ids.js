export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    const res = arr.map((x) => x.id);
    return res;
  }
  return [];
}
