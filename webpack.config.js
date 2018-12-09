var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var STATIC_DIR = path.resolve(__dirname, 'assets');
const copy = new CopyWebpackPlugin([
    { from: ROOT + '/assets/images', to: 'images' }
]);

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        },
        {
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        copy()
    ]
};

module.exports = config;