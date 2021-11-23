const string = require("string");
const slugify = (s) => string(s).slugify().toString();

const markdownIt = require("markdown-it");
const anchor = require("markdown-it-anchor");
// create a new markdown-it instance with the plugin
const markdownLib = markdownIt({ html: true, breaks: true, linkify: true })
  .use(anchor, {
    permalink: anchor.permalink.headerLink({ safariReaderFix: true }),
    permalinkBefore: true,
    permalinkSymbol: "#",
    slugify,
  })
  .use(require("markdown-it-toc-done-right"), {
    slugify,
  });

function markdownFilter(value) {
  return markdownLib.render(value);
}

// Import filters
const displayDateFilter = require("./src/filters/display-date-filter.js");
const isoDateFilter = require("./src/filters/iso-date-filter.js");
const { onlyToC, noToC } = require("./src/filters/toc-filters.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  // Filters
  eleventyConfig.addFilter("markdownFilter", markdownFilter);
  eleventyConfig.addFilter("displayDateFilter", displayDateFilter);
  eleventyConfig.addFilter("isoDateFilter", isoDateFilter);
  eleventyConfig.addFilter("onlyToC", onlyToC);
  eleventyConfig.addFilter("noToC", noToC);

  // replace the default markdown-it instance
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
