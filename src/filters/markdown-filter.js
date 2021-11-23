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

module.exports = function markdown(value) {
  return markdownIt.render(value);
};
