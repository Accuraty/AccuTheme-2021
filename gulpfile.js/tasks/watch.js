const gulp = require('gulp');
const { media: mediaTask } = require('./media');

const stylesTask = require('./styles');
const { scripts: scriptsTask } = require('./scripts');

const { paths, project } = require('../config');

function watch() {
  // Compile *all* styles if variables, functions, or mixins change.
  const CORE_FILES = `${paths.src}/${paths.styles.dir}/theme/*.scss`;
  gulp.watch(CORE_FILES, stylesTask.styles);

  // Anything in a subdirectory in the theme, but not one of the CORE_FILES.
  const THEME_FILES = `${paths.src}/${paths.styles.dir}/theme/*/*.scss`;
  if (project.styles.skin) {
    gulp.watch([THEME_FILES, paths.skinStyles.src], stylesTask.skinStyles);
  }

  if (project.styles.modules) {
    gulp.watch(paths.moduleStyles.src, stylesTask.moduleStyles);
  }

  if (project.styles.containers) {
    gulp.watch(paths.containerStyles.src, stylesTask.containerStyles);
  }

  if (project.scripts) {
    gulp.watch(paths.scripts.src, scriptsTask);
  }

  if (project.fonts || project.svg || project.images) {
    gulp.watch([paths.fonts.src, paths.svg.src, paths.images.src], mediaTask);
  }
}

exports.watch = watch;
