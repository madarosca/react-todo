const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const optimizeCssAssets = new OptimizeCssAssetsPlugin();

module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            })
        ],
    },
    plugins: [
        optimizeCssAssets
    ],
}