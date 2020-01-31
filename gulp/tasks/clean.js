module.exports = function () {
	$.gulp.task('clean', function () {
			return $.del([
				'./build',
				'./src/static/img/sprite'
			])
	})
};