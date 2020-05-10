// create a root variable
// example:
// {{set_variable "myVariable" (math-minus articleWidth @root.settings.articleLightStaticPartsWidth)}}
// usage:
// {{@root.myVariable}}
module.exports = function (variableName, variableValue, options) {
  options.data.root[variableName] = variableValue;
};
