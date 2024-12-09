const fs = require("fs");
const path = require("path");
const Terser = require("terser");

module.exports = function (eleventyConfig) {
	// Load i18n data
	eleventyConfig.addFilter("loadI18n", (dir) => {
		const filePath = path.join("content", dir, "i18n.json");
		if (fs.existsSync(filePath)) {
			return JSON.parse(fs.readFileSync(filePath, "utf-8"));
		}
		return {};
	});

	// Replace placeholders with translations and minify script
	eleventyConfig.addFilter("localizeScript", (dir, lang) => {
		const scriptPath = path.join("content", dir, "script.js");
		const i18nPath = path.join("content", dir, "i18n.json");

		const scriptCode = fs.readFileSync(scriptPath, "utf-8");
		const i18nData = fs.existsSync(i18nPath)
			? JSON.parse(fs.readFileSync(i18nPath, "utf-8"))
			: {};

		// Replace placeholders (e.g., %%alertMessage%%)
		for (const key in i18nData) {
			const localizedStr = i18nData[key][lang] || "";
			scriptCode = scriptCode.replace(new RegExp(`%%${key}%%`, "g"), localizedStr);
		}

		// Minify the script
		const minified = Terser.minify(scriptCode);
		return minified.code;
	});

	// Define directories
	return {
		dir: {
			input: "content",
			output: "_site",
			includes: "_includes",
			layouts: "_includes/layouts"
		}
	};
};
