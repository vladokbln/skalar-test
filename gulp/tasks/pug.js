const plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    	pug = require('gulp-pug'),
    	cached = require('gulp-cached');

module.exports = function (){
	$.gulp.task('pug', function(){
		return $.gulp.src('src/pug/*.pug')
			.pipe(plumber())
			.pipe(pug({
				pretty: true
			}))
			.pipe(plumber.stop())
			.pipe(cached('pug'))
			.pipe($.gulp.dest('build'))
			.on('end', $.webserver.reload)
	});
}