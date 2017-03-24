var gulp    = require('gulp'),
	webpack = require('webpack-stream'),
	handleErrors = require('../lib/handleErrors'),
    config  = require('../config.js'),
	webpackConfig  = require('../../webpack.config.js'),
	webpackProduction = require('webpack');

gulp.task('scripts', function() {
	webpackConfig.devtool = '#inline-source-map';
	return gulp.src('../.' + config.scripts.entries.theme)
		.pipe(webpack( webpackConfig ))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.scripts.dir.dest));
});

gulp.task('scripts:production', function() {
	webpackConfig.plugins = [
		new webpackProduction.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
	];
	return gulp.src('../.' + config.scripts.entries.theme)
		.pipe(webpack( webpackConfig ))
		.pipe(gulp.dest(config.scripts.dir.dest));
});
