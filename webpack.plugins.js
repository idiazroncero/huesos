 // Importa los plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");


// Exporta las configuraciones para su uso en webpack.config.js
exports.extraeCSS = new ExtractTextPlugin({
    filename: "css/[name].[contenthash:6].css",
    disable: process.env.NODE_ENV === "development"
});