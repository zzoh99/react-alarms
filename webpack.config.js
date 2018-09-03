const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
      // 'react-hot-loader/patch',
      './src/index.js'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          }),
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin({filename: 'style.bulid.css'},),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      // publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      port : 3000,
      contentBase: './dist',
      hot: true,
      historyApiFallback: true
    }
};