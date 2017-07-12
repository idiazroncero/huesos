// Importa los plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const KssWebpackPlugin = require('kss-webpack-plugin');


// Exporta las configuraciones para su uso en webpack.config.js
exports.extraeCSS = new ExtractTextPlugin({
	filename: 'css/[name].[contenthash:6].css',
});

exports.generaHTML = new HtmlWebpackPlugin({
	title: 'Huesecillos',
	template: 'src/html/index.hbs'
});

exports.limpiaBuild = new CleanWebpackPlugin(['dist'], {
	verbose: true,
	dry: false,
});

exports.generateKSS = new KssWebpackPlugin({
	source: 'src/scss',
	builder: 'styleguide/kss-demo'
})