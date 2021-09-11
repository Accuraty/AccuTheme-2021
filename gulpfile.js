// This needs to be the very first import so that it is the first to run,
// otherwise the env global variable might not contain the contents of the .env file.
import './gulpfileDir/config/envLoader.js';

// How to get around the no named exports from gulp error
import pkg from 'gulp';
const { parallel, series } = pkg;

import { clean } from './gulpfileDir/tasks/clean.js';
import { copy } from './gulpfileDir/tasks/copy.js';
import { favicons } from './gulpfileDir/tasks/favicons.js';
import { lintStyles } from './gulpfileDir/tasks/lint.js';
import { media } from './gulpfileDir/tasks/media.js';
import { scripts } from './gulpfileDir/tasks/scripts.js';
import { styles } from './gulpfileDir/tasks/styles.js';
import { watch } from './gulpfileDir/tasks/watch.js';

const base = series(clean, copy, media);
const compile = parallel(styles, scripts);

// Seems unnecessary to export the packages this way but that is how the auto-convert did it
const _clean = clean;
export { _clean as clean };
const _favicons = favicons;
export { _favicons as favicons };
const _scripts = scripts;
export { _scripts as scripts };
const _styles = styles;
export { _styles as styles };
const _watch = watch;
export { _watch as watch };

const _default = series(base, compile, [watch]);
export { _default as default };
export const build = series(base, lintStyles, compile);
