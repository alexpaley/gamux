var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var nib = require('nib');
var rupture = require('rupture');
var jeet = require('jeet');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var es = require('event-stream');

gulp.task('stylus', function() {
    gulp.src('./client/stylus/**/*.styl')
        .pipe(stylus({use: [nib(), rupture(), jeet()]}))
        .pipe(gulp.dest('./client/app/static/css/'));
});

gulp.task('jade', function() {
    return es.concat(
        gulp.src('./client/jade/partials/*.jade')
            .pipe(jade())
            .pipe(gulp.dest('./client/app/static/partials/')),

        gulp.src('./client/jade/*.jade')
            .pipe(jade())
            .pipe(gulp.dest('./client/app/'))
    );
});

gulp.task('watch', function() {
    gulp.watch('./client/stylus/**/*.styl', ['stylus']);
    gulp.watch('./client/jade/**/*.jade', ['jade']);
});

gulp.task('dev', ['stylus', 'jade', 'watch']);

