const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access bult-in plugins
const path = require('path');

module.exports = {
    entry: './src/App.jsx',
    output: {
        filename:'./dist/myapp.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/, use: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};
