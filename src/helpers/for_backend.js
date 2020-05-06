// Used to generate conditions or variables for handlebars in backend
// This is because of preventing evaluation of these expressions in development

module.exports = function (contentForBackend, contentForLocal = "") {
  if (process.env.FOR_BACKEND === "true") {
    return contentForBackend;
  }
  return contentForLocal;
};
