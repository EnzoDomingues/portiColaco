var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var fileinclude = require('gulp-file-include')


gulp.task('default',["html","sass","connect","fileinclude","watch"], function() {
})
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/styles/css'))
    .pipe(gulp.dest('./dist/assets/styles/css'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch('./src/assets/styles/sass/**/*.scss', ['sass']),
  gulp.watch(['./src/html/**/*.html'], ['html']);
  gulp.watch(['./src/html/**/*.html'], ['fileinclude']);
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


gulp.task('fileinclude', function() {
  gulp.src(['./src/html/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/html'))
    .pipe(gulp.dest('./src/html'));
});

 