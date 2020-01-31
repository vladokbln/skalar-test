const svgSprite = require('gulp-svg-sprite'),
      svgmin = require('gulp-svgmin'),
      cheerio = require('gulp-cheerio'), // удаление атрибутов
      replace = require('gulp-replace');

module.exports = function () {
	$.gulp.task('svg', () => {
		return $.gulp.src('./src/static/img/svg/*.svg')
			.pipe(svgmin({
					js2svg: {
							pretty: true
					}
			}))
			.pipe(cheerio({
					run: function ($) {
							$('[fill]').removeAttr('fill');
							$('[stroke]').removeAttr('stroke');
							$('[style]').removeAttr('style');
					},
					parserOptions: {xmlMode: true}
			}))
			.pipe(replace('&gt;', '>'))
			.pipe(svgSprite({
					mode: {
							symbol: {
									sprite: "sprite.svg"
							}
					}
			}))
			.pipe($.gulp.dest('./build/img/svg/'));
	});
};