const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: '/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}