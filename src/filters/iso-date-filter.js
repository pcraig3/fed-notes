module.exports = function isoDate(value) {
  const dateObject = new Date(value);

  return dateObject.toISOString().slice(0, 10);
};
