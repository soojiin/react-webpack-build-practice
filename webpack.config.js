const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.buldle.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react', { runtime: 'automatic' }],
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                exclude: /node_modules/,
              },
        ],
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(), // css를 줄여주는 플러그인
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css',
        }),
    ],
};