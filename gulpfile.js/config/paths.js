const { name, faviconFile } = require('./project');

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

module.exports = {
  app: appPath,
  portal: portalPath,
  skin: skinPath,
  container: containerPath,
  src: srcPath,
  dist: distPath,

  package: {
    path: packagePath,
    name: name,
    temp: `${packagePath}/.tmp`,
    static: `${packagePath}/static`,
    code: `${appPath}/App_Code`,
    manifest: {
      src: `${packagePath}/static/manifest.dnn`,
      dest: `${packagePath}/${name}.dnn`,
    },
  },

  fonts: {
    src: `${srcPath}/${fontsDir}/*.{woff,woff2}`,
    dist: `${distPath}/${fontsDir}`,
  },
  svg: {
    src: `${srcPath}/${svgDir}/**/*.svg`,
    dist: `${distPath}/${svgDir}`,
  },
  images: {
    src: `${srcPath}/${imagesDir}/**/*.{jpg,jpeg,png,gif,svg}`,
    dist: `${distPath}/${imagesDir}`,
  },
  videos: {
    src: `${srcPath}/${videosDir}/**/*.mp4`,
    dist: `${distPath}/${videosDir}`,
  },
  favicons: {
    src: `${srcPath}/${imagesDir}/${faviconFile}`,
    dist: `${distPath}/${imagesDir}`,
    // Note: Absolute path is needed for Real Favicon Generator.
    iconsPath: `/Portals/_default/Skins/${name}/${DIST_NAME}/${imagesDir}`,
    markupOutput: `${skinPath}/controls/meta.ascx`,
    markupOutputDirectory: `${skinPath}/controls`,
  },
  styles: {
    dir: stylesDir,
    src: `${srcPath}/${stylesDir}/**/*.scss`,
    dist: distPath,
  },
  skinStyles: {
    dir: skinStylesDir,
    src: `${srcPath}/${skinStylesDir}/*.scss`,
    dist: skinPath,
  },
  moduleStyles: {
    dir: moduleStylesDir,
    src: `${srcPath}/${moduleStylesDir}/*.scss`,
    dist: distPath,
  },
  containerStyles: {
    dir: containerStylesDir,
    src: `${srcPath}/${containerStylesDir}/*.scss`,
    dist: containerPath,
  },
  scripts: {
    dir: scriptsDir,
    src: `${srcPath}/${scriptsDir}/**/*.js`,
    dist: distPath,
  },
};
