const webpack = require('webpack');

const entry = './app/app.js';
const path = __dirname;
const publicPath = '/';
const filename = './public/dist/bundle.js';

module.exports = {
  entry: [
    entry
  ],
  output: {
    path,
    publicPath,
    filename
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ]
};
