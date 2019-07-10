electron-wasm-rust-example
==========================

A minimal Electron + WebAssembly (WASM) + Rust example.

<img src="https://user-images.githubusercontent.com/3704611/55944698-73ff7400-5c49-11e9-82f0-ade167ae2754.png" width="269px">

This example application is based on:

 - https://gist.github.com/jarek-foksa/0f6e82bdaf8fb1962c9e14035a8725e4
 - https://github.com/rustwasm/wasm-bindgen/tree/master/examples/without-a-bundler
 - https://github.com/anderejd/wasm-bindgen-minimal-example

Rust setup
----------

 1. Install Rust <https://www.rust-lang.org/>
 1. Add the WASM target, `rustup target add wasm32-unknown-unknown`
 1. Install wasm-bindgen, the __same version__ as in this [Cargo.toml](Cargo.toml), `cargo install -f --version 0.2.47 wasm-bindgen-cli`

NPM setup
---------

 1. Install Node.js & NPM
 1. Clone this repository `git clone git@github.com:anderejd/electron-wasm-rust-example.git`
 1. Enter the new directory `cd electron-wasm-rust-example`
 1. Download/install npm dependencies (Electron) for this example, `npm install` <https://electronjs.org/docs/tutorial/installation>

Build the Rust code into WASM
-----------------------------

Use the `build.sh` or `build.ps1` script to build the WebAssembly module.

Run the app during development
------------------------------

`npm start`

Packaging the application for end-users
---------------------------------------

TODO: Depend on and add scripts(?) for <https://github.com/electron-userland/electron-builder>, see issue [#7].

[#7]: https://github.com/anderejd/electron-wasm-rust-example/issues/7
