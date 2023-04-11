const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'production',
	entry: './src/index.js',

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
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
			{
				test: /\.scss$/i,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					"css-loader",
					'postcss-loader',
					'sass-loader',
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new MiniCssExtractPlugin({ filename: '[name].css' })
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
};