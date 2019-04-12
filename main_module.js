// Use ES module import syntax to import functionality from the module
// that we have compiled.
//
// Note that the `default` import is an initialization function which
// will "boot" the module and make it ready to use. Currently browsers
// don't support natively imported WebAssembly as an ES module, but
// eventually the manual initialization won't be required!
import {
	add,
	default as init
} from './wasm/wasm_bindgen_minimal_example.js';
async function run() {
	// First up we need to actually load the wasm file, so we use the
	// default export to inform it where the wasm file is located on the
	// server, and then we wait on the returned promise to wait for the
	// wasm to be loaded.
	//
	// Note that instead of a string here you can also pass in an instance
	// of `WebAssembly.Module` which allows you to compile your own module.
	// Also note that the promise, when resolved, yields the wasm module's
	// exports which is the same as importing the `*_bg` module in other
	// modes
	await init('./wasm/wasm_bindgen_minimal_example_bg.wasm');
	// And afterwards we can use all the functionality defined in wasm.
	const result = add(1, 2);
	console.log(`1 + 2 = ${result}`);
	if (result !== 3) {
		throw new Error("wasm addition doesn't work!");
	}
}
run();