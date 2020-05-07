const Handlebars = require("handlebars");
const rootPath = '../'
Handlebars.registerHelper('cloudinary_transform', require(rootPath + 'src/helpers/cloudinary_transform.js'));
Handlebars.registerHelper('equals', require(rootPath + 'src/helpers/equals.js'));
Handlebars.registerHelper('not_equals', require(rootPath + 'src/helpers/not_equals.js'));
var fs = require('fs');
const htmlFilePath = rootPath + 'dist/two-column.html';

readTextFile( htmlFilePath, function (err, words) {
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

