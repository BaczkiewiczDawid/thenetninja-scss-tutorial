const { watch } = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
}

function watchTask() {
    watch(['style.scss'], buildStyles);
}

exports.default = gulp.series(buildStyles, watchTask);