const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/';

module.exports = {
	entry: {
		index: path.join(__dirname, srcDir + 'index.ts')
	},
	output: {
		path: path.join(__dirname, '../dist/js'),
		filename: '[name].js'
	},
	optimization: {
		splitChunks: {
			name: 'vendor',
			chunks: "initial"
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpeg|svg)$/,
				loader: 'file-loader',
				exclude: /node_modules/,
				options: {
					publicPath: '../dist/js',
					name: '[name].[ext]'
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	plugins: [
		// exclude locale files in moment
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
	]
};