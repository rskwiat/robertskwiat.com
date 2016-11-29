const webpack = require('webpack');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const dashboard = new Dashboard();
const entry = './app/app.js';
const path = __dirname;
const publicPath = '/';
const filename = './dist/bundle.js';

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
    new DashboardPlugin(dashboard.setData)
  ],
  devServer: {
    historyApiFallback: true,
    quiet: true,
    contentBase: './public'
  }
};
