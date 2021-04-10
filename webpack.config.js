const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    entry: path.join(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')]
                            }
                        }
                    }, 
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css' 
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html')
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'src/img'),
                    to: path.join(__dirname, 'dist/img'),
                    noErrorOnMissing: true
                },
            ]
        }),
    ]
}