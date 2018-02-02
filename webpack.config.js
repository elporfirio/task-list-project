const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'app/src'),
    APP: path.resolve(__dirname, 'app'),
};

module.exports = {
    entry: path.join(paths.SRC, 'main.es6'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: paths.SRC
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.APP, 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6']
    },
};