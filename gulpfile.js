var gulp = require('gulp')
var gulpBrowser = require('gulp-browser')
var reactify = require('reactify');
var del = require('del');
var size = require('gulp-size');

gulp.task('transform', () => {
  var stream = gulp.src('./project/static/scripts/jsx/*.js')
    .pipe(gulpBrowser.browserify({transform: ['reactify']}))
    .pipe(gulp.dest('./project/static/scripts/js/'))
    .pipe(size());
  return stream;
})

gulp.task('del', () => {
  return del(['./project/static/scripts/js']);
})

gulp.task('default', ['del'], () => {
  gulp.start('transform');
  gulp.watch('./project/static/scripts/jsx/*.js', ['transform']);
})