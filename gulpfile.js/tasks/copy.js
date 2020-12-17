const gulp = require('gulp');

const { paths } = require('../config');

function copyBootstrapIcons() {
  const srcPath = './node_modules/bootstrap-icons/bootstrap-icons.svg';

  return gulp.src(srcPath).pipe(gulp.dest(paths.svg.dist));
}

exports.copy = gulp.parallel(copyBootstrapIcons);
