require('dotenv').config();

const { parallel, series } = require('gulp');

const { clean } = require('./tasks/clean');
const { copy } = require('./tasks/copy');
const { favicons } = require('./tasks/favicons');
const { lintStyles } = require('./tasks/lint');
const { media } = require('./tasks/media');
const { scripts } = require('./tasks/scripts');
const { styles } = require('./tasks/styles');
const { watch } = require('./tasks/watch');

const base = series(clean, copy, media);
const compile = parallel(styles, scripts);

exports.clean = clean;
exports.favicons = favicons;
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watch;

exports.default = series(base, compile, [watch]);
exports.build = series(base, lintStyles, compile);
