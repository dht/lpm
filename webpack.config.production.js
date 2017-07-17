process.env.NODE_ENV = 'production';

var path = require('path')
var webpack = require('webpack')
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
	debug: false,
	pathinfo: false,
	devtool: 'source-map',
	entry: [
		'./app/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false}
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/,
			include: __dirname
		},
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }]
	}
}

