# Gleam ISO/IEC 8859 Decoder

This Gleam library decodes ISO/IEC 8859 binary data into native UTF-8 strings. All 15
ISO/IEC 8859 encodings are supported.

When targeting JavaScript the native `TextDecoder` is used instead.

See https://en.wikipedia.org/wiki/ISO/IEC_8859 for details on the ISO/IEC 8859
encodings.

[![Package Version](https://img.shields.io/hexpm/v/iso_8859)](https://hex.pm/packages/iso_8859)
[![Hex Docs](https://img.shields.io/badge/hex-docs-ffaff3)](https://hexdocs.pm/iso_8859/)

## Usage

To add this library to your Gleam project:

```sh
gleam add iso_8859
```

To use it:

```gleam
> iso_8859.to_string(<<0xB4, 0xEC, 0xE0>>, iso_8859.Part5)
"Дьр"
```

Its documentation can be found at <https://hexdocs.pm/iso_8859>.

## License

This library is published under the MIT license, a copy of which is included.
