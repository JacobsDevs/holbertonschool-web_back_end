export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    const res = arr.reduce((acc, x) => acc + x.id, 0);
    return res;
  }
  return 0;
}
