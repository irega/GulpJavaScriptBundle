var gulp = require('gulp');
var browserify = require('browserify');
var fs = require('fs');

var bundler = browserify("./src/js/lib.js");

gulp.task('bundle-js', function () {
    bundler.bundle()
    .pipe(fs.createWriteStream('bin/miLibreria.js'));
});

gulp.task('default', ['bundle-js']);