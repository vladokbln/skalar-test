module.exports = function() {
  $.gulp.task("watch", function() {
    $.gulp.watch("src/pug/**/*.pug", $.gulp.series("pug"));
    $.gulp.watch("src/static/styles/**/*.scss", $.gulp.series("styles:dev"));
    $.gulp.watch("src/static/js/**/*.js", $.gulp.series("scripts:dev"));
    $.gulp.watch(
      ["src/static/img/*.{png,jpg,gif}", "!src/static/img/sprite/*"],
      $.gulp.series("img:dev")
    );
    $.gulp.watch("src/static/img/icon/*", $.gulp.series("sprite", "img:dev"));
    $.gulp.watch("src/static/img/svg/*.svg", $.gulp.series("svg"));
  });
};
