export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const view = new DataView(buff);
  view.setUint8(position, value);
  return view;
}
