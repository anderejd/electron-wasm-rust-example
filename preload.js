let {
	webFrame
} = require("electron");

process.once("loaded", () => {
	// Allow window.fetch() to access app files
	webFrame.registerURLSchemeAsPrivileged("app", {
		secure: true,
		bypassCSP: false,
		allowServiceWorkers: true,
		supportFetchAPI: true,
		corsEnabled: false
	});
});
