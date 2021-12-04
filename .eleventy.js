// Import filters
const {
  displayDateFilter,
  isoDateFilter,
} = require("./src/filters/date-filters.js");
const { onlyToC, noToC } = require("./src/filters/toc-filters.js");
const readingTime = require("./src/filters/reading-time.js");
const {
  markdownFilter,
  markdownLib,
} = require("./src/filters/markdown-filter.js");

const footnotes = require("eleventy-plugin-footnotes");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  // add JS file
  eleventyConfig.addPassthroughCopy("./src/js/");
  // Copy `img/favicon/` to `_site/`
  eleventyConfig.addPassthroughCopy({ "./src/img/favicon": "/" });

  eleventyConfig.addPlugin(footnotes);

  // Filters
  eleventyConfig.addFilter("markdownFilter", markdownFilter);
  eleventyConfig.addFilter("displayDateFilter", displayDateFilter);
  eleventyConfig.addFilter("isoDateFilter", isoDateFilter);
  eleventyConfig.addFilter("onlyToC", onlyToC);
  eleventyConfig.addFilter("noToC", noToC);
  eleventyConfig.addFilter("readingTime", readingTime);

  // replace the default markdown-it instance
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
