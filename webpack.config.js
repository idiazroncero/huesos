// Path es parte de Node.js y permite crear rutas
const path = require('path');

// Cargamos los plugins en un archivo aparte
const plugins = require('./webpack.plugins');

// Un objeto constante que incluye todos nuestros PATHS
const PATHS = {
	src: path.join(__dirname, 'src/js'),
	build: path.join(__dirname, 'dist'),
};

module.exports = {
	entry: {
		src : PATHS.src,
	},
	output: {
		filename: 'js/[name].[hash:6].js',
		path: PATHS.build,
	},
	module: {
		rules: [
			// JS BABEL
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
					},
				},
			},
			// JS LINTING
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					emitWarning: true,
				},
			},
			// HANDLEBARS TEMPLATES
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
			},
			// CSS Y SCSS
			{
				test: /\.scss$/,
				use: plugins.extraeCSS.extract({
					use: [
						'css-loader', // translates CSS into CommonJS
						'postcss-loader',
						{
							loader : 'sass-loader', // compiles Sass to CSS
							options : {
								includePaths : ['node_modules'],
							},
						},
					],
					fallback: 'style-loader',
				}),
			},
			// FILES
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/images'
					} 
				} 
			},
			{
				test: /\.(woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/fonts'
					} 
				} 
			}
		],
	},
	plugins: [
		plugins.limpiaBuild,
		plugins.generaHTML,
		plugins.extraeCSS,
		plugins.generateKSS,
	],
};