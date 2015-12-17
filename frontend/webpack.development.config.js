const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    home: ['webpack-dev-server/client?http://localhost:9001', 'webpack/hot/only-dev-server', './src/Home.js'],
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.join(__dirname, './../public/assets/'),
    filename: '[name].js',
    publicPath: 'http://localhost:9001/assets/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /(\.scss|\.css)$/,
      loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer!sass?sourceMap'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],
};
