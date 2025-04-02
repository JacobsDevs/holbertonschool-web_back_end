export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (arr instanceof Array && typeof city === 'string' && newGrades instanceof Array) {
    return arr.filter((x) => x.location === city).map((y) => {
      let s = newGrades.filter((z) => z.studentId === y.id).reduce((acc, i) => acc + i.grade, 0);
      if (s === 0) {
        s = 'N/A';
      }
      return {
        ...y,
        grade: s,
      };
    });
  }
  return 0;
}
