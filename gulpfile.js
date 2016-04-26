var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', function () {
  gulp.src('source/*.jpg')
    .pipe(imageResize({
      height : 200
    }))
    .pipe(gulp.dest('imgs'));
});
