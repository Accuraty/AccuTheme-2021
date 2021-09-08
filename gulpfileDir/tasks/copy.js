import pkg from 'gulp';
const { src, dest, parallel } = pkg;

import { paths } from '../config/index.js';

function copyBootstrapIcons() {
  const srcPath = './node_modules/bootstrap-icons/bootstrap-icons.svg';

  return src(srcPath).pipe(dest(paths.svg.dist));
}

export const copy = parallel(copyBootstrapIcons);
