var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var minify = require('gulp-minify');
var replace = require('gulp-replace');
var bump = require('gulp-bump');
var shell = require('gulp-shell')
var p = require('./package.json')
var webpack = require('webpack-stream');

gulp.task('clean', function () {
	return del([
		'dist',
	]);
});

gulp.task('copyIndexOriginal', function () {
    gulp.src("./src/index.js")
        .pipe(rename("index.es.js"))
        .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md
});

gulp.task('removePackage', function () {
	return del([
		'dist/package.json',
	]);
});

gulp.task('bump', function(){
	return gulp.src('./package.json')
		.pipe(bump({type:'patch'}))
		.pipe(gulp.dest('./'));
});

/* global gulp */
gulp.task('copy', function () {
	return gulp
		.src(['package.json', 'README.md', 'LICENSE'])
		.pipe(gulp.dest('dist'));
});

// 	'parse deploy',
gulp.task('publish', shell.task([
	'npm publish',
], {cwd: 'dist/'}))

// 	'parse deploy',
gulp.task('babel', shell.task([
	'babel src --out-dir dist',
]))


gulp.task('cleanDocs', function () {
    return del([
        'docs/'
    ]);
});

gulp.task('copyDocs', function () {
    return gulp
        .src(['app/index.html'], {base: './app'})
        .pipe(gulp.dest('docs'));
});

gulp.task('webpack', function () {
    return gulp.src('./libs/base.js')
        .pipe(webpack( require('./webpack.config.production.js') ))
        .pipe(gulp.dest('docs/static/'));
});

gulp.task('default', ['build']);

gulp.task('set-dev-node-env', function() {
	return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
	return process.env.NODE_ENV = 'production';
});

gulp.task('build', ['set-prod-node-env'], function(callback) {
	runSequence(
		['clean', 'cleanDocs'],
		'bump',
		'babel',
		'webpack',
		['copy', 'copyDocs', 'copyIndexOriginal'],
		callback);
});

gulp.task('deploy', function(callback) {
	runSequence(
		'build',
		'publish',
		callback);
});

gulp.task('default', ['build']);