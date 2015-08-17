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
        exclude: /node_modules/
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
  }
}
