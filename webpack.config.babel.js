import path from 'path';

import webpack from 'webpack';

const config = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'tool', 'imports.js'),
    path.resolve(__dirname, 'build', 'web', 'main.dart.js')
  ],
  module: {
    rules: [
      {
        exclude: path.resolve(__dirname, 'node_modules'),
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: 'style-loader'
          }, 
          { 
            loader: 'css-loader' 
          }
        ]
      }
    ]
  },
  output: {
    filename: 'main.dart.js',
    path: path.resolve(__dirname, 'build', 'web')
  },
  plugins: []
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        mangle: true,
        output: {
          beautify: false
        }
      }
    }));
} else {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        mangle: true,
        output: {
          beautify: false
        }
      }
    }));
}

export default config;