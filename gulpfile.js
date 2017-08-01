'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');

gulp.task('default', () => {
  gulp.watch(['src/**', 'test/**'], ['mocha']);
});

gulp.task('mocha', () => {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({ reporter: 'list' }))
    .on('error', gutil.log);
});