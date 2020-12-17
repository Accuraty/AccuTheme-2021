const del = require('del');
const { paths } = require('../config');

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

exports.clean = cleanTask;
