export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    return 'Position outside range';
  }
  const buff = new ArrayBuffer(length);
  const view = new DataView(buff);
  view.setUint8(position, value);
  return view;
}
