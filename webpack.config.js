var webpack = require("webpack");

module.exports = {
  entry: __dirname + '/src/js/main.js',
  output: {
    path: __dirname + '/dist/resources/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: /src/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png|\.woff2?|\.ttf|\.eot|\.svg$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}
