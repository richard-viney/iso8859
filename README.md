# Gleam ISO/IEC 8859 Decoder

This Gleam library decodes ISO/IEC 8859 binary data into a native string. All 15
ISO/IEC 8859 encodings are supported.

See https://en.wikipedia.org/wiki/ISO/IEC_8859 for details on the ISO/IEC 8859
encodings.

[![Package Version](https://img.shields.io/hexpm/v/iso_8859)](https://hex.pm/packages/iso_8859)
[![Hex Docs](https://img.shields.io/badge/hex-docs-ffaff3)](https://hexdocs.pm/iso_8859/)
![Erlang Compatible](https://img.shields.io/badge/target-erlang-a90432)
![JavaScript Compatible](https://img.shields.io/badge/target-javascript-f3e155)
[![Semantic Release](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Usage

To add this library to your Gleam project:

```sh
gleam add iso_8859
```

To use it:

```gleam
> iso_8859.decode_bytes(<<0xB4, 0xEC, 0xE0>>, iso_8859.Part5)
"Дьр"
```

API documentation can be found at <https://hexdocs.pm/iso_8859>.

## License

This library is published under the MIT license, a copy of which is included.
