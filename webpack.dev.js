const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
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
				test: /\.s[ac]ss$/i,
				use: [
					{ loader: "css-loader", options: { sourceMap: true } },
					{ loader: "postcss-loader", options: { sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } },
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
};