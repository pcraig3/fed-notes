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

// The TOC plugin flattens heading tokens before formatting its link labels.
const renderTocBody = markdownLib.renderer.rules.tocBody;
markdownLib.renderer.rules.tocBody = (tokens, index, ...args) => {
  const toc = renderTocBody(tokens, index, ...args);
  const labels = new Map();

  for (const [headingIndex, heading] of tokens.entries()) {
    if (heading.type !== "heading_open") continue;

    const label = tokens[headingIndex + 1].children
      .map(({ type, content }) => {
        if (type === "text" || type === "code_inline") {
          return markdownLib.utils.escapeHtml(content);
        }
        if (type === "s_open") return "<s>";
        if (type === "s_close") return "</s>";
        if (type === "html_inline" && /^<\/?del>$/.test(content)) {
          return content;
        }
        return "";
      })
      .join("");

    if (/<(del|s)>.*?<\/\1>/.test(label)) {
      labels.set(heading.attrGet("id"), label);
    }
  }

  return toc.replace(
    /(<a\b[^>]* href="#([^"]+)">)[^<]*(<\/a>)/g,
    (link, open, id, close) =>
      labels.has(id) ? open + labels.get(id) + close : link,
  );
};

const markdownFilter = function (value) {
  return markdownLib.render(value);
};

module.exports = {
  markdownLib,
  markdownFilter,
};
