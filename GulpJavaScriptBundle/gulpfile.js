var gulp = require('gulp');
var browserify = require('browserify');
var fs = require('fs');

var paths = {
    js_files: "./src/js/**/*.js",
    js_entryPoint: "./src/js/lib.js"
};

var bundler = browserify(paths.js_entryPoint);

gulp.task('bundle-js', function () {
    bundler.bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(fs.createWriteStream('bin/miLibreria.js'));
});

gulp.task('watch', function () {
    gulp.watch(paths.js_files, ['bundle-js']);
});

gulp.task('specs', function () {
    return gulp.src('assets/js/spec/lib/*.js')
        .pipe(jasmine());
});

gulp.task('default', ['bundle-js']);

gulp.task('start', ['bundle-js', 'watch']);