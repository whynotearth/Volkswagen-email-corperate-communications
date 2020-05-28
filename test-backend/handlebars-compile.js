const fs = require('fs');
const Handlebars = require('handlebars');
const rootPath = '../';
Handlebars.registerHelper('cloudinary_transform', require(rootPath + 'src/helpers/cloudinary_transform.js'));
const twoColumnHtmlFilePath = rootPath + 'dist/two-column.html';
const threeColumnHtmlFilePath = rootPath + 'dist/three-column.html';
const outputFolder = './test-backend/'

readTextFile(twoColumnHtmlFilePath, function (err, words) {
  const template = Handlebars.compile(words);
  const data = require('./all-data.js');
  const outputPath = outputFolder + 'two-column.html';
  fs.writeFileSync(outputPath, template(data));
  console.log(outputPath);
});
readTextFile(threeColumnHtmlFilePath, function (err, words) {
  const template = Handlebars.compile(words);
  const data = require('./all-data.js');
  const outputPath = outputFolder + 'three-column.html';
  fs.writeFileSync(outputPath, template(data));
  console.log(outputPath);
});

function readTextFile(path, callback) {
  try {
    var filename = require.resolve(path);
    fs.readFile(filename, 'utf8', callback);
  } catch (e) {
    callback(e);
  }
}
