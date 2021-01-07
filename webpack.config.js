const webpack = require('webpack'),
      path = require("path"),
      HtmlWebpack = require('html-webpack-plugin'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, './js/index.js'),
    output: {
        filename: "app.[contentHash].js",
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        contentBase: './build'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpeg|jpg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs',
                        esModule: false
                    }
                }
            },
            {
                test: /\.(woff|eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'fonts'
                    }
                }
            },
            {
                test: /\.pdf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'documents',
                        esModule: false
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new HtmlWebpack({
            template: 'template.html'
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ]
}