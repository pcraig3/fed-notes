// Import filters
const {
  displayDateFilter,
  isoDateFilter,
} = require("./src/_filters/date-filters.js");
const { onlyToC, noToC } = require("./src/_filters/toc-filters.js");
const readingTime = require("./src/_filters/reading-time.js");
const {
  markdownFilter,
  markdownLib,
} = require("./src/_filters/markdown-filter.js");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const footnotes = require("eleventy-plugin-footnotes");
const externalLinks = require("@aloskutov/eleventy-plugin-external-links");

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addWatchTarget("./src/_sass/");
  // add JS file
  eleventyConfig.addPassthroughCopy({ "./src/_js/": "/js" });
  // Copy `img/favicon/` to `public/`
  eleventyConfig.addPassthroughCopy({ "./src/_img/favicon": "/" });
  // Copy `img/og/` to `public/`
  eleventyConfig.addPassthroughCopy({ "./src/_img/og": "/" });

  eleventyConfig.addPlugin(footnotes);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(externalLinks, {
    url: "https://federal-field-notes.ca",
    rel: ["noopener", "external"],
  });

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
