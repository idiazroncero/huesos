const path = require('path');
const plugins = require('./webpack.plugins');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			// JS
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			// CSS Y SCSS
			{
				test: /\.scss$/,
				use: plugins.extraeCSS.extract({
					use: [
						'css-loader', // translates CSS into CommonJS
						'sass-loader' // compiles Sass to CSS
					],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
	    plugins.extraeCSS
	]
};