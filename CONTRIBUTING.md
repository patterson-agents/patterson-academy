# Contributing

Canonical contribution guidelines for the Patterson org live in
[`patterson-corp/CONTRIBUTING.md`](https://github.com/patterson-agents/patterson-corp/blob/main/CONTRIBUTING.md).
Read that first.

## Notes specific to this repo

- This is a static prototype: no build step, no `package.json`, no framework runtime. Open the
  `.dc.html` files directly or serve the directory root over HTTP (`npx serve .`).
- The `_ds/` design-system snapshot directory is a fixed point-in-time copy the canvases bind to
  — see [README.md](README.md#the-design-system-binding). Do not edit it as if it were the live
  `patterson-design-system` project.
- Font binaries are excluded pending a licensing decision — see [README.md](README.md#fonts). Do
  not add font binaries back without resolving that first.
- See [REFERENCES.md](REFERENCES.md) for import provenance.
