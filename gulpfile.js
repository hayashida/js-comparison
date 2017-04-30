const gulp = require('gulp');
const path = require('path');

const mocha = require('gulp-mocha');

const browserify = require('browserify');
const babelify = require('babelify');
const vueify = require('vueify');
const riotify = require('riotify');
const source = require('vinyl-source-stream');

gulp.task('react', () => {
	browserify(path.join(__dirname, 'src/client/react/app.js'), {
		extensions: ['.js', '.jsx'],
		transform: [
			babelify.configure({ 'presets': ['es2015', 'react'] })
		]
	})
	.bundle()
	.on('error', err => {
		console.log(err.message);
		console.log(err.stack);
	})
	.pipe(source('react.js'))
	.pipe(gulp.dest('./public/js'));
});

gulp.task('vue', () => {
	browserify(path.join(__dirname, 'src/client/vue/app.js'), {
		extensions: ['.js', '.vue'],
		transform: [
			vueify,
			babelify.configure({ 'presets': ['es2015'] })
		]
	})
	.bundle()
	.on('error', err => {
		console.log(err.message);
		console.log(err.stack)
	})
	.pipe(source('vue.js'))
	.pipe(gulp.dest('./public/js'));
});

gulp.task('riot', () => {
	browserify(path.join(__dirname, 'src/client/riot/app.js'), {
		extensions: ['.js', '.tag'],
		transform: [
			riotify,
			babelify.configure({ 'presets': ['es2015', 'es2015-riot'] })
		]
	})
	.bundle()
	.on('error', err => {
		console.log(err.message);
		console.log(err.stack)
	})
	.pipe(source('riot.js'))
	.pipe(gulp.dest('./public/js'));
});

gulp.task('mocha', () => {
	return gulp.src('test.js', { read: false })
		.pipe(mocha({ reporter: 'list' }));
});