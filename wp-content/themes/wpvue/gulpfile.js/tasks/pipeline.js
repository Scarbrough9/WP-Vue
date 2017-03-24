var gulp     = require('gulp'),
	config   = require('../config'),
	changed  = require('gulp-changed'),
	imagemin = require('gulp-imagemin'),
    svgmin   = require('gulp-svgmin'),
    rename   = require('gulp-rename'),
    svgstore = require('gulp-svgstore');

gulp.task('fonts', function() {
    return gulp.src(config.pipeline.fonts.src)
        .pipe(changed(config.pipeline.fonts.dest))
        .pipe(gulp.dest(config.pipeline.fonts.dest));
});

gulp.task('images', function() {
    return gulp.src(config.pipeline.images.src)
        .pipe(imagemin())
        .pipe(changed(config.pipeline.images.dest))
        .pipe(gulp.dest(config.pipeline.images.dest));
});

gulp.task('svg', function() {
    return gulp.src(config.pipeline.svg.src)
        .pipe(svgmin({
            plugins: [
                {cleanupIDs: false},                  // don't remove  ids
                {removeViewBox: false},               // don't remove the viewbox atribute from the SVG
                {removeUselessStrokeAndFill: false},  // don't remove Useless Strokes and Fills
                {removeEmptyAttrs: false} 
            ]
        }))
        .pipe(changed(config.pipeline.svg.dest))
        .pipe(gulp.dest(config.pipeline.svg.dest));
});

gulp.task('svgSprite', function(){
    // result filename is the name of src directory
    return gulp.src(config.pipeline.svgSprite.src)
        .pipe(rename({prefix: 'icon-'}))  //prefixes all source filenames with 'icon-'
        .pipe(svgmin(function (file) {
            return {
                plugins: [{
                    cleanupIDs: {
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore({
            inlineSvg: true //output only <svg> element without <?xml ?> and DOCTYPE to use inline, default: false
        }))
        .pipe(gulp.dest(config.pipeline.svgSprite.dest))
});