function onlyToC(text) {
  return text.slice(0, text.indexOf("</nav>") + "</nav>".length);
}

function noToC(text) {
  return text.slice(text.indexOf("</nav>") + "</nav>".length);
}
module.exports = {
  onlyToC,
  noToC,
};
