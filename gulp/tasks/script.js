const uglify = require("gulp-uglify"),
  concat = require("gulp-concat");

module.exports = function() {
  $.gulp.task("libs-js:dev", function() {
    return $.gulp
      .src([
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/svg4everybody/dist/svg4everybody.min.js",
        "node_modules/nouislider/distribute/nouislider.js",
        "node_modules/wnumb/wNumb.js"
      ]) //через запятую перечисление библиотек
      .pipe(concat("libs.js"))
      .pipe($.gulp.dest("build/js/"))
      .pipe(
        $.webserver.reload({
          stream: true
        })
      );
  });
  $.gulp.task("libs-js:build", function() {
    return $.gulp
      .src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/svg4everybody/dist/svg4everybody.min.js",
        "node_modules/nouislider/distribute/nouislider.js",
        "node_modules/wnumb/wNumb.js"
      ]) //через запятую перечисление библиотек
      .pipe(concat("libs.js"))
      .pipe(uglify())
      .pipe($.gulp.dest("build/js/"));
  });
  $.gulp.task("scripts:dev", function() {
    return $.gulp
      .src(["src/static/js/*.js", "!src/static/js/libs.js"])
      .pipe(concat("main.js"))
      .pipe($.gulp.dest("build/js/"))
      .pipe(
        $.webserver.reload({
          stream: true
        })
      );
  });
  $.gulp.task("scripts:build", function() {
    return $.gulp
      .src(["src/static/js/*.js", "!src/static/js/libs.js"])
      .pipe(concat("main.js"))
      .pipe(uglify())
      .pipe($.gulp.dest("build/js/"));
  });
};
