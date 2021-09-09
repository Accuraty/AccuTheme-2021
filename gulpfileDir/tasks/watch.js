// How to get around the no named exports from gulp error
import pkg from 'gulp';
const { watch: __watch } = pkg;

import { media as mediaTask } from './media.js';

import { styles, skinStyles, moduleStyles, containerStyles } from './styles.js';
import { scripts as scriptsTask } from './scripts.js';

import { paths, project } from '../config/index.js';

function watch() {
  // Compile *all* styles if variables, functions, or mixins change.
  const CORE_FILES = `${paths.src}/${paths.styles.dir}/theme/*.scss`;
  __watch(CORE_FILES, styles);

  // Anything in a subdirectory in the theme, but not one of the CORE_FILES.
  const THEME_FILES = `${paths.src}/${paths.styles.dir}/theme/*/*.scss`;
  if (project.styles.skin) {
    __watch([THEME_FILES, paths.skinStyles.src], skinStyles);
  }

  if (project.styles.modules) {
    __watch(paths.moduleStyles.src, moduleStyles);
  }

  if (project.styles.containers) {
    __watch(paths.containerStyles.src, containerStyles);
  }

  if (project.scripts) {
    __watch(paths.scripts.src, scriptsTask);
  }

  if (project.fonts || project.svg || project.images) {
    __watch([paths.fonts.src, paths.svg.src, paths.images.src], mediaTask);
  }
}

const _watch = watch;
export { _watch as watch };
