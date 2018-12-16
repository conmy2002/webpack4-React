const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							import: true
						}
					},
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true
						}
					}
				]
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							import: true
						}
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	},
	devServer: {
		open: true,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			file: "index.html"
		})
	]
};
