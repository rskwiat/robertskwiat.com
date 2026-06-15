import fs from "node:fs";
import path from "node:path";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { config } from "dotenv";
import esbuild from "esbuild";
import postcss from "postcss";
import postcssImport from "postcss-import";

import { currentYear } from "./src/_data/helpers.ts";

config();

// biome-ignore lint/suspicious/noExplicitAny: EleventyConfig type is not available in this context
export default async function (eleventyConfig: any) {
	eleventyConfig.addWatchTarget("./src/");
	eleventyConfig.addPassthroughCopy("./src/styles/");
	eleventyConfig.addPassthroughCopy("src/scripts/*.ts");

	eleventyConfig.addGlobalData("env", {
		workerUrl: process.env.CLOUDFLARE_WORKER_URL,
	});

	eleventyConfig.addGlobalData("helpers", {
		currentYear,
	});

	// eleventyConfig.addCollection("blog", (collectionApi) => {
	// 	return collectionApi.getFilteredByGlob("src/_content/posts/*.md");
	// });

	eleventyConfig.addTemplateFormats("mdx");

	eleventyConfig.on("eleventy.before", async () => {
		const cssInput = path.resolve("./src/styles/main.css");
		const compiledCSSOutput = "./dist/styles/main.css";

		const cssContent = fs.readFileSync(cssInput, "utf8");
		const outputDir = path.dirname(compiledCSSOutput);
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}

		const processor = postcss([
			postcssImport(),
			autoprefixer(),
			cssnano({
				preset: "default",
			}),
		]);

		const result = await processor.process(cssContent, {
			from: cssInput,
			to: compiledCSSOutput,
		});

		fs.writeFileSync(compiledCSSOutput, result.css);

		await esbuild.build({
			entryPoints: ["./src/scripts/main.ts"],
			outfile: "./dist/scripts/main.js",
			bundle: true,
			minify: true,
			platform: "browser",
			target: "es2020",
			sourcemap: false,
		});
	});

	eleventyConfig.addTemplateFormats("mdx");

	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
}
