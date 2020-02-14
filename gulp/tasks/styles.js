const plumber = require("gulp-plumber"),
  scss = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cleanCSS = require("gulp-clean-css"),
  sourcemaps = require("gulp-sourcemaps"),
  rename = require("gulp-rename");

module.exports = function() {
  $.gulp.task("styles:dev", function() {
    return $.gulp
      .src("./src/static/styles/main.scss")
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(scss())
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 3 versions"]
        })
      )
      .pipe(rename("style.css"))
      .pipe(sourcemaps.write("./"))
      .pipe($.gulp.dest("build/css/"))
      .pipe($.webserver.reload({ stream: true }));
  });

  $.gulp.task("styles:build", function() {
    return $.gulp
      .src("./src/static/styles/main.scss")
      .pipe(scss())
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 3 versions"]
        })
      )
      .pipe(cleanCSS())
      .pipe(rename("style.css"))
      .pipe($.gulp.dest("build/css/"));
  });
};
