// Import filters
const markdownFilter = require("./src/filters/markdown-filter.js");
const displayDateFilter = require("./src/filters/display-date-filter.js");
const isoDateFilter = require("./src/filters/iso-date-filter.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  // Filters
  eleventyConfig.addFilter("markdownFilter", markdownFilter);
  eleventyConfig.addFilter("displayDateFilter", displayDateFilter);
  eleventyConfig.addFilter("isoDateFilter", isoDateFilter);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
