var gulp = require('gulp');
var browserify = require('browserify');
var fs = require('fs');
var jasmine = require('gulp-jasmine');
var uglify = require('uglifyify');

var bundler = browserify("./src/js/lib.js");
bundler.transform('uglifyify');

gulp.task('specs', function () {
    return gulp.src('./.tests/gestorPadres.Spec.js')
        .pipe(jasmine());
});

gulp.task('bundle-js', function () {
    bundler.bundle()

    .pipe(fs.createWriteStream('bin/miLibreria.js'));
});

gulp.task('default', ['specs', 'bundle-js']);
