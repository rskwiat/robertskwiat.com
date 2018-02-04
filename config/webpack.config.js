/* eslint-disable */

const webpack = require('webpack');
const path = require('path');
const HTMLWebpack = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-router-dom',
  'react-markdown',
  'gsap',
  'classnames'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules|images|css)/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          ['css-loader?importLoaders=1', 'postcss-loader']
        )
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
          use: [
            'css-loader?-url&sourceMap',
            'postcss-loader',
            'sass-loader?sourceMap'
          ]
        })
      },
      {
        test: /\.svg$/,
        use: 'raw-loader'
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HTMLWebpack({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
