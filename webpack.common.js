const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: { import: './src/js/index.js', dependOn: 'shared' },
		result: { import: './src/js/result.js', dependOn: 'shared' },
		shared: 'lodash',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
};