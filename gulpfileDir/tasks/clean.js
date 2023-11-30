import { deleteAsync as del } from 'del';
import { paths } from '../config/index.js';

function cleanTask() {
  const allCompiledFiles = [
    `${paths.skin}/*.css`,
    `${paths.skin}/*.css.map`,
    `${paths.container}/*.css`,
    `${paths.container}/*.css.map`,
    `${paths.dist}/*`,
    `real-favicon-generator.json`,
  ];

  return del(allCompiledFiles, { force: true });
}

export const clean = cleanTask;
