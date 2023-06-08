// How to get around the no named exports from gulp error
import pkg from 'gulp';
const { src, dest } = pkg;

import stylelint from '@ronilaukkarinen/gulp-stylelint';
import stylelintFormatter from 'stylelint-formatter-pretty';

import { paths, project } from '../config/index.js';

function lintStyles() {
  if (!project.styles) return Promise.resolve();

  return src(paths.styles.src)
    .pipe(
      stylelint({
        failAfterError: true,
        fix: true,
        reporters: [{ formatter: stylelintFormatter, console: true }],
      })
    )
    .pipe(dest(`${paths.src}/${paths.styles.dir}`));
}

const _lintStyles = lintStyles;
export { _lintStyles as lintStyles };
