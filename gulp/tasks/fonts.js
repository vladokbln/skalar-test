module.exports = function () {
	$.gulp.task('fonts', () => {
		return $.gulp.src([
			'./src/static/fonts/**/*.*',
			'./src/node_module/components-font-awesome/webfonts/**/*.*'
		])
			.pipe($.gulp.dest('./build/fonts/'));
	});
};