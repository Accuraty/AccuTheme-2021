// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

// import { parallel, series } from 'gulp';

import { clean } from './tasks/clean.js';
// import { copy } from './tasks/copy.js';
// import { favicons } from './tasks/favicons.js';
// import { lintStyles } from './tasks/lint.js';
// import { media } from './tasks/media.js';
// import { scripts } from './tasks/scripts.js';
// import { styles } from './tasks/styles.js';
// import { watch } from './tasks/watch.js';

// const base = series(clean, copy, media);
const base = clean;
// const compile = parallel(styles, scripts);

const _clean = clean;
export { _clean as clean };
// const _favicons = favicons;
// export { _favicons as favicons };
// const _scripts = scripts;
// export { _scripts as scripts };
// const _styles = styles;
// export { _styles as styles };
// const _watch = watch;
// export { _watch as watch };

// const _default = series(base, compile, [watch]);
// export { _default as default };
// export const build = series(base, lintStyles, compile);
export const build = base;
