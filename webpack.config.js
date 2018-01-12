const path = require('path');

const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NodeEnvPlugin = require('node-env-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    webpack: ['normalize.css', path.join(__dirname, 'web/assets/webpack.js')],
  },
  devtool: NodeEnvPlugin.devtool,
  output: {
    filename: '[name].js',
    library: 'firebase',
    libraryTarget: 'var',
    path: path.join(__dirname, 'build/web/assets'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('webpack.css'),
    new NodeEnvPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new UglifyJsPlugin(),
  ],
};
