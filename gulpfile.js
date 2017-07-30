var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', function () {
    gulp.start(['dev']);
})
gulp.task('dev', function () {
    gulp.watch('*.html');
    browserSync({
        files: '**',
        server: {
            baseDir: './'
        },
        index: './index.html'   //可以省略
    });
})