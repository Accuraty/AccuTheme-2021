const eslint = require('gulp-eslint');
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

function lintScripts() {
  if (!project.scripts) return Promise.resolve();

  return gulp
    .src(paths.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format('pretty'))
    .pipe(eslint.failAfterError());
}

exports.lintStyles = lintStyles;
exports.lintScripts = lintScripts;
