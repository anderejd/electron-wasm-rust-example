electron-wasm-rust-example
==========================

A minimal Electron + WebAssembly (WASM) + Rust example.

This example application is based on:

 - https://gist.github.com/jarek-foksa/0f6e82bdaf8fb1962c9e14035a8725e4
 - https://github.com/rustwasm/wasm-bindgen/tree/master/examples/without-a-bundler
 - https://github.com/anderejd/wasm-bindgen-minimal-example

Prerequisites:
--------------

 - Install Rust
 - Add the WASM target, `rustup target add wasm32-unknown-unknown`
 - Install wasm-bindgen (0.2.40+), `cargo install wasm-bindgen-cli`
 - Install Node.js & NPM
 - Install Electron, `npm install electron --save-dev`, <https://electronjs.org/docs/tutorial/installation>

Building
--------

Use the `build.sh` script to build the WebAssembly module. On Windows, use git
bash or port it to batch script.

Running the app during development
----------------------------------

`npm start`

Packaging
---------

TODO: Write me.

