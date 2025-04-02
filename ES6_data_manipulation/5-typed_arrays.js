export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new RangeError('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const view = new DataView(buff);
  view.setUint8(position, value);
  return view;
}
