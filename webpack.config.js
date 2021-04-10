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
                    {
                        loader: "css-loader",
                         options: {
                             url: false,
                         }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require('autoprefixer')]
                            }
                        }
                    },
                    {   
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
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
                {
                    from: path.join(__dirname, 'src/fonts'),
                    to: path.join(__dirname, 'dist/fonts'),
                    noErrorOnMissing: true
                },
            ]
        }),
    ]
}