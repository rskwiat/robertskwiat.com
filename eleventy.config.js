export default async function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/');
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};

