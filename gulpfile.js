import dotenv from 'dotenv';
dotenv.config();
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
