const imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
		jpgCompress  = require('imagemin-jpeg-recompress'),
		pngquant = require('imagemin-pngquant'); // плагин для сжатия png


module.exports = function (){
	$.gulp.task('img:build', function(){
		return $.gulp.src([
			'./src/static/img/**/*.{jpg,png,gif}',
			'!src/static/img/icon/*.png'
		])
    .pipe(cache(imagemin([ 
      imagemin.gifsicle({interlaced: true}),
			jpgCompress({
				loops: 4,
				progressive: true,
				max: 90,
				min: 80
			}),
			pngquant()
		])))
		.pipe($.gulp.dest('./build/img'));
	});
	$.gulp.task('img:dev', function(){
		return $.gulp.src([
			'./src/static/img/**/*.{jpg,png,gif}',
			'!src/static/img/icon/**/*.png'
		])
		.pipe($.gulp.dest('./build/img'));
	});
}
