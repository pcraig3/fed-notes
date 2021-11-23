module.exports = function (text) {
  if (!text) {
    return 0;
  }

  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
};
