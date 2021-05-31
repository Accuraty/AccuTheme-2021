const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const stylelintFormatter = require('stylelint-formatter-pretty');

const { paths, project } = require('../config');

function lintStyles() {
  if (!project.styles) return Promise.resolve();

  return gulp
    .src(paths.styles.src)
    .pipe(
      stylelint({
        failAfterError: true,
        fix: true,
        reporters: [{ formatter: stylelintFormatter, console: true }],
      })
    )
    .pipe(gulp.dest(`${paths.src}/${paths.styles.dir}`));
}

exports.lintStyles = lintStyles;
