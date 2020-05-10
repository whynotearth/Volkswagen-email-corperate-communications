const Handlebars = require("handlebars");
const rootPath = '../'
Handlebars.registerHelper('cloudinary_transform', require(rootPath + 'src/helpers/cloudinary_transform.js'));
var fs = require('fs');
const twoColumnHtmlFilePath = rootPath + 'dist/two-column.html';
const threeColumnHtmlFilePath = rootPath + 'dist/three-column.html';

readTextFile( twoColumnHtmlFilePath, function (err, words) {
    const template = Handlebars.compile(words);
    const data = require('./all-data.json');
    console.log(template(data));
});
readTextFile( threeColumnHtmlFilePath, function (err, words) {
    const template = Handlebars.compile(words);
    const data = require('./all-data.json');
    console.log(template(data));
});


function readTextFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}

