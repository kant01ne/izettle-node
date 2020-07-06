let gulp = require('gulp');
let babel = require('gulp-babel');
let eslint = require('gulp-eslint');
let excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('babel', function () {
  return gulp
    .src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
  return gulp
    .src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
