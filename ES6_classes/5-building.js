export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error("Abstract classes can't be instantiated");
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
