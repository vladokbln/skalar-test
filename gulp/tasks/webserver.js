module.exports = function (){
	$.gulp.task('webserver', function () {
		$.webserver.init({
			server: {
				baseDir: './build'
			},
			notify: false,
		});
	});
}	