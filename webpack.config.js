const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const cssPlugin = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
    disable: process.env.NODE_ENV !== 'production'
  })

module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-react']
                      }
                },
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                include: path.resolve(__dirname, 'assets'),
                use: {
                    loader: 'file-loader',
                    options: {
                        context: './assets',
                        name: 'root[path][name].[ext]'
                    }
                }
            },
        ],
    },
    plugins: [
        htmlPlugin,
        cssPlugin
    ]
};