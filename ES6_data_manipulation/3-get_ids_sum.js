export default function getListStudentIds(arr, city) {
  if (arr instanceof Array && typeof city === 'string') {
    const res = arr.reduce((acc, x) => acc + x.id, 0);
    return res;
  }
  return [];
}
