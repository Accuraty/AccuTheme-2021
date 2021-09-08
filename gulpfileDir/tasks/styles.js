import autoprefixer from 'autoprefixer';
import cssImport from 'postcss-import';
import cssnano from 'cssnano';
import pkg from 'gulp';
const { src, dest, parallel } = pkg;
import postcss from 'gulp-postcss';
import gulpSass from 'gulp-sass';
import pkg2 from 'gulp-sourcemaps';
const { init, write } = pkg2;
import nodeSass from 'node-sass';
import { paths, plugins, project } from '../config/index.js';
const { skinStyles, moduleStyles, containerStyles } = paths;

// explicitly set compiler (https://github.com/dlmanning/gulp-sass#basic-usage)
const sass = gulpSass(nodeSass);

const devMode = project.mode !== 'production';

const postcssProcessors = [
  cssImport(),
  autoprefixer(plugins.autoprefixer.options),
];

if (!devMode) {
  postcssProcessors.push(cssnano());
}

function skinStylesTask() {
  if (!project.styles.skin) return Promise.resolve();

  return src(skinStyles.src)
    .pipe(init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(write(devMode ? null : '.'))
    .pipe(dest(skinStyles.dist));
}

function moduleStylesTask() {
  if (!project.styles.modules) return Promise.resolve();

  return src(moduleStyles.src)
    .pipe(init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(write(devMode ? null : '.'))
    .pipe(dest(moduleStyles.dist));
}

function containerStylesTask() {
  if (!project.styles.containers) return Promise.resolve();

  return src(containerStyles.src)
    .pipe(init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(write(devMode ? null : '.'))
    .pipe(dest(containerStyles.dist));
}

const _skinStyles = skinStylesTask;
export { _skinStyles as skinStyles };
const _moduleStyles = moduleStylesTask;
export { _moduleStyles as moduleStyles };
const _containerStyles = containerStylesTask;
export { _containerStyles as containerStyles };

export const styles = parallel(
  skinStylesTask,
  moduleStylesTask,
  containerStylesTask
);
