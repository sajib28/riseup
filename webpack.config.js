const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
		

	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader']},
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties'],


					}
				}
			},
			{
				test: /\.scss?$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							minimize: true

						},
					},
					'css-loader',
					'sass-loader'
				]

			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'css'
						}
					}

				]
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						minimize: true,
						collapseWhitespace: true
					}
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: 'images'
						}
					}

				]
			},
			{
				test: /\.(mp4|webm|ogg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: 'media',
						},
					}

				]
			},

		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i,
				cache: true
				// mangle: true,
				// sourcemap: false,
				// debug: false,
				// compress: {
				//     warnings: false,
				//     screw_ie8: true,
				//     conditionals: true,
				//     unused: true,
				//     comparisons: true,
				//     sequences: true,
				//     dead_code: true,
				//     evaluate: true,
				//     if_return: true,
				//     join_vars: true
				// },
				// output: {
				//     comments: false
				// },

			}),
		],
	},
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, "dist/"),
		open: true,
		watchContentBase: true,
		hot: true,
		compress: true,
		overlay: {
			errors: true,
			warnings: true
		}

	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// all options are optional
			filename: '[name].css',
			chunkFilename: '[id].css'

		}),
		new ImageminPlugin({
			bail: false, // Ignore errors on corrupted images
			cache: true,
			// pngquant: ({quality: [0.5, 0.5]}),
			imageminOptions: {
				// Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

				// Lossless optimization with custom option
				// Feel free to experiment with options for better result for you
				plugins: [
					["gifsicle", { interlaced: true }],
					["jpegtran", {
						progressive: true,
						quality: 80
					}],
					["optipng", { optimizationLevel: 9 }],
					[
						"svgo",
						{
							plugins: [
								{
									removeViewBox: false
								}
							]
						}
					]
				]
			}
		}),
		new SWPrecacheWebpackPlugin({
			cacheId: 'offline-app',
			dontCacheBustUrlsMatching: /\.\w{8}\./,
			filename: 'service-worker.js',
			minify: true,
			navigateFallback: 'index.html',
			staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],

		})

	]
};