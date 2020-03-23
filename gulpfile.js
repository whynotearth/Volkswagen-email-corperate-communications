const gulp = require("gulp");
const mjml = require("gulp-mjml");
const browsersync = require("browser-sync").create();
const mjmlEngine = require("mjml");

function mjmlTask() {
  return (
    gulp
      .src("./src/templates/*.mjml", { allowEmpty: true })
      // validationLevel: "strict"
      .pipe(mjml(mjmlEngine, { minify: false }))
      .pipe(gulp.dest("./dist"))
      .pipe(browsersync.stream())
  );
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    port: 4500
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchTask() {
  gulp.watch("./src/**/*.mjml", mjmlTask);
}

const watch = gulp.parallel(watchTask, browserSync);

exports.default = watch;
