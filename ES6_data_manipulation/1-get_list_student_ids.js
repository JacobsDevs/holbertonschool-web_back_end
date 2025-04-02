export default function getListStudentIds(arr) {
  if (typeof arr === 'object') {
    return arr.map((x) => x.id);
  }
  return [];
}
