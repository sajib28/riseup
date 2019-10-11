const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'

	},
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, "dist/"),
		compress: true,
		port: 3025,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
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
				test: /\.(jpe?g|png|gif|svg|mp4)$/i,
				use: [
				  {
					loader: "file-loader"
				  }
				]
			  }
		]
	},
	optimization: {
		minimizer: [
		  new UglifyJsPlugin({
			test: /\.js(\?.*)?$/i,
			cache: true,
		  }),
		],
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
			imageminOptions: {
			  // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them
	   
			  // Lossless optimization with custom option
			  // Feel free to experiment with options for better result for you
			  plugins: [
				["gifsicle", { interlaced: true }],
				["jpegtran", { progressive: true }],
				["optipng", { optimizationLevel: 2 }],
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
		  })
	]
};