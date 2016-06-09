if(process.env.NODE_ENV === 'test'){
  var entry = './test/testSpecs.js';
  var publicPath = '/test';
  var path = './test';
  var filename = 'spec.js';
} else {
  var entry = './app/app.js';
  var path =  __dirname;
  var publicPath = '/';
  var filename = 'dist/bundle.js';
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
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};
