'use strict';

const exec = require('child_process').exec;
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');

gulp.task('default', ['nodemonServer'], () => {
  gulp.watch(['src/**/*', 'test/**/*'], ['mocha']);
});

gulp.task('mocha', () => {
  return gulp.src(['test/**/*.js'], { read: false })
    .pipe(mocha({ reporter: 'list', compilers: 'js:babel-core/register' }))
    .on('error', gutil.log);
});

gulp.task('transpileNode', ['copy'], () => {
  return gulp.src(['src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('lib'));
});

gulp.task('copy', () => {
  return gulp.src(['src/**/*.json']).pipe(gulp.dest('lib/'));
});

gulp.task('nodemonServer', ['transpileNode'], () => {
  nodemon({
    script: 'lib/app.js',
    ext: 'js',
    watch: 'src',
    tasks: 'transpileNode',
    env: { 'NODE_ENV': 'development' }
  })
})