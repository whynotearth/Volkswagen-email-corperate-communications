const gulp = require("gulp");
const mjml = require("gulp-mjml");
const browsersync = require("browser-sync").create();
const mjmlEngine = require("mjml");
const hb = require("gulp-hb");
const rename = require("gulp-rename");

function changeExtension(ext) {
  return rename(function(path) {
    return {
      dirname: path.dirname,
      basename: path.basename,
      extname: ext
    };
  });
}

function mjmlTask() {
  return gulp
    .src("./build/mjml/*.mjml", { allowEmpty: true })
    .pipe(mjml(mjmlEngine, { validationLevel: "strict", minify: false }))
    .pipe(gulp.dest("./dist"))
    .pipe(browsersync.stream());
}

function handlebars() {
  return gulp
    .src("./src/templates/**/*.html")
    .pipe(
      hb()
        .partials("./src/partials/**/*.hbs")
        .helpers("./src/helpers/*.js")
        .data("./src/data/**/*.{js,json}")
    )
    .pipe(changeExtension(".mjml"))
    .pipe(gulp.dest("./build/mjml/"));
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    port: 4500,
    open: false
  });
  done();
}

// Watch files
function watchTask(done) {
  gulp.watch("./src/**/*.html", handlebars);
  gulp.watch("./build/mjml/**/*.mjml", mjmlTask);
  done();
}

const watch = gulp.series(handlebars, gulp.parallel(watchTask, browserSync));

exports.default = watch;
