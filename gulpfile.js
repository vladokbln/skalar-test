'use strict';

global.$ = {
	gulp: require('gulp'), 
	webserver: require('browser-sync').create(),
	del: require('del'),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
}
//вызываем все таски
$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
})

// сборка dev
$.gulp.task('dev', $.gulp.series(
	'clean',
	'sprite',
	$.gulp.parallel('pug','styles:dev','libs-js:dev','scripts:dev','img:dev','svg','fonts')
));

// сборка на продакш
$.gulp.task('build', $.gulp.series(
	'clean',
	'sprite',
	$.gulp.parallel('pug','styles:build','libs-js:build','scripts:build','img:build','svg','fonts')
));

// задача по умолчанию
$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel('watch','webserver')
));