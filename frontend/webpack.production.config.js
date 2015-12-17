var path = require('path');
var webpack = require('webpack');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    home: ['./src/Home.js'],
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.resolve(__dirname, './../public/assets/'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    },
    {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[hash:base64:5]!autoprefixer!sass?sourceMap')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[chunkhash].js'),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ManifestPlugin()
  ]
};
