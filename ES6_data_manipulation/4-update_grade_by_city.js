export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (arr instanceof Array && typeof city === 'string' && newGrades instanceof Array) {
    const res = arr.filter((x) => x.location === city);
    const final = res.map((x) => ({ ...x, grade: newGrades.filter((y) => y.id === x.id).grade }));
    return final;
  }
  return 0;
}
