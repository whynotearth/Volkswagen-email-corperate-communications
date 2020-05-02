module.exports = function (file_url, transformations) {
  var updated_file_url = file_url.replace(
    "/upload/",
    "/upload/" + transformations + '/'
  );
  return updated_file_url;
};
