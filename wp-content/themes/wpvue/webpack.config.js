var webpack = require('webpack'),
	config  = require('./gulpfile.js/config')
    path = require("path");

module.exports = {
    context: './'+config.scripts.dir.src,
    resolve: {
        root: [
            './'+config.scripts.dir.src,
            path.join(__dirname, 'node_modules')
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    entry: config.scripts.entries,
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
