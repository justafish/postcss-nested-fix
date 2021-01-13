const gulp = require('gulp');
const postcss = require('gulp-postcss');

gulp.task('default', function() {
  return gulp
    .src('style.css')
    .pipe(postcss([
      require('postcss-nested'),
      require('postcss-autoreset')({
        reset: {
          margin: 0,
          padding: 0,
          border: 0,
        },
        rulesMatcher: 'bem',
      }),
    ]))
    .pipe(gulp.dest('output'));
});