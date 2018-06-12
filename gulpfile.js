var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('default',["html","sass","connect","watch"], function() {
})
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/styles/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/assets/styles/sass/**/*.scss', ['sass']),
  gulp.watch(['./src/html/**/*.html'], ['html']);
});
 
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('./dist/html'))
    .pipe(connect.reload());
});


 