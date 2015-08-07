'use strict';

var gulp = require('gulp');
var newer = require('gulp-newer');
var htmlreplace = require('gulp-html-replace');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var del = require('del');

var DEST = 'dist';

var webpackConfig = require('./webpack.config.js');
var defaultStatsOptions = {
  colors: true,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: false,
  cachedAssets: false,
  reasons: false,
  source: false,
  errorDetails: false
};

gulp.task('default', ['webpack', 'override', 'images']);

gulp.task('webpack', function(done) {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new err;
    console.log('[webpack]', stats.toString(defaultStatsOptions));
    done();
  });
});

gulp.task('override', function() {
  return gulp.src('src/index.html', { base: 'src' })
    .pipe(newer(DEST))
    .pipe(htmlreplace({ 'js': 'resources/bundle.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*.*', { base: 'src' })
    .pipe(newer(DEST))
    .pipe(gulp.dest(DEST));
});

gulp.task('clean', function(done) {
  del([DEST], done);
});

gulp.task('server', function(done) {
  new WebpackDevServer(webpack(webpackConfig), {
    contentBase: './dist',
    publicPath: '/resources/',
    filename: 'bundle.js',
    stats: defaultStatsOptions
  })
  .listen(8080, 'localhost', function(err) {
    if(err) throw new err;
    console.log('[webpack-dev-server]',
      'http://localhost:8080/webpack-dev-server/index.html');
    done();
  });
});
