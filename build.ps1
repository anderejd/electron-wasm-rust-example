
cargo build --target wasm32-unknown-unknown --release
mkdir -ErrorAction Ignore wasm > $null
wasm-bindgen `
    target/wasm32-unknown-unknown/release/wasm_bindgen_minimal_example.wasm `
    --out-dir wasm `
    --target web