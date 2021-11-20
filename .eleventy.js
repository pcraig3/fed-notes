// Import filters
const markdownFilter = require("./src/filters/markdown-filter.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  // Filters
  eleventyConfig.addFilter("markdownFilter", markdownFilter);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
