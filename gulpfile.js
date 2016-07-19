var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var es = require('event-stream');

gulp.task('clean', function () {
    return gulp.src('dist/js')
        .pipe(clean());
});

gulp.task('dist', function () {
    return es.merge([
            gulp.src('src/*.js')
        ])
        .pipe(concat('ng-address.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('default', function (cb) {
    return runSequence('clean', ['dist'], cb)
});