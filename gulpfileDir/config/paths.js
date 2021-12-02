// import { env } from 'process'; //How to access process.env in ES6
import { name, faviconFile } from './project.js';
// const name = 'AccuTheme';
// const { faviconFile } = env;
const SRC_NAME = 'src';
const DIST_NAME = 'dist';

const appPath = `./app`;
const portalPath = `${appPath}/Portals/_default`;
const skinPath = `${portalPath}/Skins/${name}`;
const containerPath = `${portalPath}/Containers/${name}`;

const srcPath = `./${SRC_NAME}`;
const distPath = `${skinPath}/${DIST_NAME}`;

// These directories are only available at `src`.
const scriptsDir = `scripts`;
const stylesDir = `styles`;
const skinStylesDir = `${stylesDir}`;
const moduleStylesDir = `${stylesDir}/Modules`;
const containerStylesDir = `${stylesDir}/Containers`;

// Available both at `src` and `dist`.
const fontsDir = `media/fonts`;
const svgDir = `media/svg`;
const imagesDir = `media/images`;
const videosDir = `media/videos`;

// Package; packaging to create a Zipped install for Dnn
const packagePath = `./package`;

export const app = appPath;
export const portal = portalPath;
export const skin = skinPath;
export const container = containerPath;
export const src = srcPath;
export const dist = distPath;
export const pkg = {
  path: packagePath,
  name: name,
  temp: `${packagePath}/.tmp`,
  static: `${packagePath}/static`,
  code: `${appPath}/App_Code`,
  manifest: {
    src: `${packagePath}/static/manifest.dnn`,
    dest: `${packagePath}/${name}.dnn`,
  },
};
export const fonts = {
  src: `${srcPath}/${fontsDir}/*.{woff,woff2}`,
  dist: `${distPath}/${fontsDir}`,
};
export const svg = {
  src: `${srcPath}/${svgDir}/**/*.svg`,
  dist: `${distPath}/${svgDir}`,
};
export const images = {
  src: `${srcPath}/${imagesDir}/**/*.{jpg,jpeg,png,gif,svg}`,
  dist: `${distPath}/${imagesDir}`,
};
export const videos = {
  src: `${srcPath}/${videosDir}/**/*.mp4`,
  dist: `${distPath}/${videosDir}`,
};
export const favicons = {
  src: `${srcPath}/${imagesDir}/${faviconFile}`,
  dist: `${distPath}/${imagesDir}`,
  // Note: Absolute path is needed for Real Favicon Generator.
  iconsPath: `/Portals/_default/Skins/${name}/${DIST_NAME}/${imagesDir}`,
  markupOutput: `${skinPath}/controls/meta.ascx`,
  markupOutputDirectory: `${skinPath}/controls`,
};
export const styles = {
  dir: stylesDir,
  src: `${srcPath}/${stylesDir}/**/*.scss`,
  dist: distPath,
};
export const skinStyles = {
  dir: skinStylesDir,
  src: `${srcPath}/${skinStylesDir}/*.scss`,
  dist: skinPath,
};
export const moduleStyles = {
  dir: moduleStylesDir,
  src: `${srcPath}/${moduleStylesDir}/*.scss`,
  dist: distPath,
};
export const containerStyles = {
  dir: containerStylesDir,
  src: `${srcPath}/${containerStylesDir}/*.scss`,
  dist: containerPath,
};
export const scripts = {
  dir: scriptsDir,
  src: `${srcPath}/${scriptsDir}/**/*.js`,
  dist: distPath,
};
