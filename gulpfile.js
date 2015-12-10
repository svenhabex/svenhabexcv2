// /////////////////////////////////////////////////////////
// Required
// /////////////////////////////////////////////////////////

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;


// /////////////////////////////////////////////////////////
// Script Task
// /////////////////////////////////////////////////////////
gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
	.pipe(plumber())
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(reload({stream:true}));
});


// /////////////////////////////////////////////////////////
// Sass Task
// /////////////////////////////////////////////////////////
gulp.task('sass', function(){
	gulp.src('app/sass/style.scss')
	.pipe(plumber())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));
});


// /////////////////////////////////////////////////////////
// HTML Task
// /////////////////////////////////////////////////////////
gulp.task('html', function(){
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}));

});


// /////////////////////////////////////////////////////////
// Browser-Sync Task
// /////////////////////////////////////////////////////////
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir:"./app/"
		}
	});
}); 


// /////////////////////////////////////////////////////////
// Watch Task
// /////////////////////////////////////////////////////////
gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/**/*.html', ['html']);
});


// /////////////////////////////////////////////////////////
// Default Task
// /////////////////////////////////////////////////////////
gulp.task('default', ['scripts', 'sass', 'html', 'browser-sync', 'watch']);