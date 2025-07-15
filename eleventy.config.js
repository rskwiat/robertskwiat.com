import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { evaluate } from '@mdx-js/mdx';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import * as runtime from 'react/jsx-runtime';
import { renderToStaticMarkup } from 'react-dom/server';

export default async function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/');

  eleventyConfig.addExtension('mdx', {
    compile: async (str, inputPath) => {
      const { default: mdxContent } = await evaluate(str, {
        ...runtime,
        baseUrl: pathToFileURL(inputPath),
      });
      return async (data) => {
        const res = await mdxContent(data);
        return renderToStaticMarkup(res);
      };
    },
  });

  eleventyConfig.on('eleventy.before', async () => {
    const cssInput = path.resolve('./src/styles/main.css');
    const compiledCSSOutput = './dist/styles/main.css';

    const cssContent = fs.readFileSync(cssInput, 'utf8');
    const outputDir = path.dirname(compiledCSSOutput);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const processor = postcss([
      postcssImport,
      autoprefixer,
      cssnano({
        preset: 'default',
      }),
    ]);

    const result = await processor.process(cssContent, {
      from: cssInput,
      to: compiledCSSOutput,
    });

    fs.writeFileSync(compiledCSSOutput, result.css);
  });

  eleventyConfig.addTemplateFormats('mdx');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
}
