var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var csso = require('gulp-csso');
// var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
// var cleanDest = require('gulp-clean-dest');
var webserver = require('gulp-webserver');

var del = require('del');

//SERVER
gulp.task('server-run', function () {
    gulp.src('./app')
        .pipe(webserver({
            // path: 'app',
            fallback: 'index.html',
            port: 9101,
            livereload: true,
            directoryListing: {
                enable: true,
                path: 'app/index.html'
            },
            open: false
        }));
});

//STYLES
gulp.task('styles', function () {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/css'));
});


gulp.task('watch', function () {
    gulp.watch('./app/sass/**/*.scss', ['styles']);
});


// DEFAULT
gulp.task('default', ['server-run', 'watch']);