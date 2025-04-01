export default class HolbertonCourse {
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('length must be a number');
    }
  }

  set students(students) {
    if (students.isArray()) {
      this._students = students;
    }
  }

  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
}
