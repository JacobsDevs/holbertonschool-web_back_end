export default class HolbertonCourse {
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    this._name = value;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }

  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    if (typeof students === 'object') {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
