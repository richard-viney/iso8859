export function decode_bytes(bits, encoding) {
  const partNumber = encoding.constructor.name.substring(4);

  const encodingName = [
    undefined,
    "iso-8859-1",
    "iso-8859-2",
    "iso-8859-3",
    "iso-8859-4",
    "iso-8859-5",
    "iso-8859-6",
    "iso-8859-7",
    "iso-8859-8",
    "iso-8859-9",
    "iso-8859-10",
    "iso-8859-11",
    undefined,
    "iso-8859-13",
    "iso-8859-14",
    "iso-8859-15",
    "iso-8859-16",
  ][partNumber];

  if (encodingName === undefined) {
    throw Error(`Invalid encoding: ${String(encoding)}`);
  }

  return new TextDecoder(encodingName, { fatal: false }).decode(bits.buffer);
}
