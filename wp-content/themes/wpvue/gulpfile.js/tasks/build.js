var gulp = require('gulp');

gulp.task('build:development', [
    'styles',
    'scripts',
    'images',
    'svg',
    'svgSprite',
    'fonts'
]);

gulp.task('build:production', [
    'styles:production',
    'scripts:production',
    'images',
    'svg',
    'svgSprite',
    'fonts'
]);
