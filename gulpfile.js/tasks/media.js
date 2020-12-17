const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const { paths, plugins, project } = require('../config');
const { fonts, svg } = paths;
const $ = plugins.imagemin;

function fontsTask() {
  if (!project.fonts) return Promise.resolve();
  return gulp.src(fonts.src).pipe(gulp.dest(fonts.dist));
}

function svgTask() {
  if (!project.svg) return Promise.resolve();
  return gulp
    .src(svg.src)
    .pipe(imagemin($.plugins, $.options))
    .pipe(gulp.dest(svg.dist));
}

function imagesTask() {
  if (!project.images) return Promise.resolve();
  return gulp
    .src(paths.images.src)
    .pipe(imagemin($.plugins, $.options))
    .pipe(gulp.dest(paths.images.dist));
}

function videosTask() {
  if (!project.videos) return Promise.resolve();
  return gulp.src(paths.videos.src).pipe(gulp.dest(paths.videos.dist));
}

exports.media = gulp.parallel(fontsTask, svgTask, imagesTask, videosTask);
