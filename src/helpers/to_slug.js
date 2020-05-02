module.exports = function (content) {
  return content.normalize().toLowerCase().replace(/\s/g, "-");
};
