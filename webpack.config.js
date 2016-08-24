var webpack = require('webpack');
var path = require("path");

if(process.env.NODE_ENV === 'test'){
  var entry = './test/testSpecs.js';
  var publicPath = '/test';
  var path = './test';
  var filename = 'spec.js';
} else if (process.env.NODE_ENV === 'production') {
  var entry = './app/app.js';
  var path =  __dirname;
  var publicPath = '/';
  var filename = './public/dist/bundle.js';
} else {
  var entry = './app/app.js';
  var path =  __dirname;
  var publicPath = '/';
  var filename = './dist/bundle.js';
}

module.exports = {
  entry: [
    entry
  ],
  output: {
    path: path,
    publicPath: publicPath,
    filename: filename
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
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};
