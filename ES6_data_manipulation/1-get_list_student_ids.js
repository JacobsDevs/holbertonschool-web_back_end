export default function getListStudentIds(arr) {
  if (typeof arr === 'object') {
    const res = arr.map((x) => x.id);
    return res;
  }
  return [];
}
