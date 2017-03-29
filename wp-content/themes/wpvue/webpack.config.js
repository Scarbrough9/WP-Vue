var webpack = require('webpack'),
	config  = require('./gulpfile.js/config')
    path    = require("path");

module.exports = {
    context: './'+config.scripts.dir.src,
    resolve: {
        root: [
            './'+config.scripts.dir.src,
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'components': path.resolve(__dirname, 'source/scripts/components')
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
        fallback: [path.join(__dirname, '../node_modules')]
    },
    entry: config.scripts.entries,
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /.vue$/,
            loader: 'vue'
        }, {
            test: /\.s[a|c]ss$/,
            loader: 'style!css!sass'
        }]
    },
    vue: {
        loaders: {
            js: 'babel?presets[]=es2015',
            scss: 'style!css!sass'
        }
    }
};