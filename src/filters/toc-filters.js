function onlyToC(value) {
  return value.slice(0, value.indexOf("</nav>") + "</nav>".length);
}

function noToC(value) {
  return value.slice(value.indexOf("</nav>") + "</nav>".length);
}
module.exports = {
  onlyToC,
  noToC,
};
