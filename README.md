electron-wasm-rust-example
==========================

A minimal Electron + WebAssembly (WASM) + Rust example.

<img src="https://user-images.githubusercontent.com/3704611/55944698-73ff7400-5c49-11e9-82f0-ade167ae2754.png" width="269px">

This example application is based on:

 - https://gist.github.com/jarek-foksa/0f6e82bdaf8fb1962c9e14035a8725e4
 - https://github.com/rustwasm/wasm-bindgen/tree/master/examples/without-a-bundler
 - https://github.com/anderejd/wasm-bindgen-minimal-example

Prerequisites:
--------------

 - Install Rust
 - Add the WASM target, `rustup target add wasm32-unknown-unknown`
 - Install wasm-bindgen, the __same version__ as in Cargo.toml, `cargo install -f --version 0.2.41 wasm-bindgen-cli`
 - Install Node.js & NPM
 - Install Electron, `npm install electron --save-dev`, <https://electronjs.org/docs/tutorial/installation>

Building
--------

Use the `build.sh` or `build.ps1` script to build the WebAssembly module.

Running the app during development
----------------------------------

`npm start`

Packaging
---------

TODO: Depend on and add scripts(?) for https://github.com/electron-userland/electron-builder

