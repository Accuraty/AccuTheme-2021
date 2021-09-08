import webpack from 'webpack';

import { project } from '../config/index.js';
import * as WEBPACK_CONFIG from '../../webpack.config.js';

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

export const scripts = bundleScripts;
