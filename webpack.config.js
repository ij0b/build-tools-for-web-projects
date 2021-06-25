const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
	mode: 'development',
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bandle.js'
    },
	
	module: {
		rules: [
			{ 
				test: /\.(png|jpe?g|gif|mp3)$/i, 
				use: 'file-loader',
			},
			{ 
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}
		]
	},
	
	plugins: [
//		new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'css.css'
		})
	]

};