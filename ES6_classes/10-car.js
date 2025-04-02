export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value === 'string') {
      this._brand = value;
    } else {
      this._brand = undefined;
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value === 'string') {
      this._motor = value;
    } else {
      this._motor = undefined;
    }
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value === 'string') {
      this._color = value;
    } else {
      this._color = undefined;
    }
  }

  cloneCar() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), {});
  }
}
