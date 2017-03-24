var gulp        = require('gulp'),
    config      = require('../config'),
    watch 		= require('gulp-watch'),
    browserSync = require('browser-sync');

gulp.task('default', ['build:development', 'browser-sync'], function() {
    watch(config.watch.styles, function(){ gulp.start('styles'); });
	watch(config.watch.scripts, function(){ gulp.start('scripts'); });
	watch(config.watch.images, function(){ gulp.start('images'); });
	watch(config.watch.svg, function(){ gulp.start('svg'); });
	watch(config.watch.icons, function(){ gulp.start('svgSprite'); });
	watch(config.watch.fonts, function(){ gulp.start('fonts'); });
});
