const webpack = require('webpack');

const { project } = require('../config');
const WEBPACK_CONFIG = require('../../webpack.config');

const statsOptions = {
  builtAt: false,
  chunks: false,
  colors: true,
  hash: false,
  modules: false,
  outputPath: false,
  timings: false,
  version: false,
};

function bundleScripts() {
  if (!project.scripts) return Promise.resolve();

  return new Promise(resolve =>
    webpack(WEBPACK_CONFIG, (err, stats) => {
      if (err) console.log('Webpack', err); // eslint-disable-line
      console.log(stats.toString(statsOptions)); // eslint-disable-line
      resolve();
    })
  );
}

exports.scripts = bundleScripts;
