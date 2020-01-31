const spritesmith = require('gulp.spritesmith'); // сборка спрайтов 

module.exports = function (){
	$.gulp.task('sprite', function () {
		var spriteData = $.gulp.src('./src/static/img/icon/*.png')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.scss',
			imgPath: '../img/sprite/sprite.png'
		}));
		return spriteData.pipe($.gulp.dest('./src/static/img/sprite'));
	});
}