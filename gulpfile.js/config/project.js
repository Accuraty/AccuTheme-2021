const { isTrue } = require('../utils');

const {
  NODE_ENV,
  PROJECT_MODE,
  FAVICON_FILENAME,
  LOCAL_FONTS,
  LOCAL_SVG,
  LOCAL_IMAGES,
  LOCAL_VIDEOS,
  SKIN_STYLES,
  MODULE_STYLES,
  CONTAINER_STYLES,
  CUSTOM_SCRIPTS,
} = process.env;

module.exports = {
  name: 'AccuTheme',
  mode: NODE_ENV || PROJECT_MODE || 'development',
  fonts: isTrue(LOCAL_FONTS),
  svg: isTrue(LOCAL_SVG),
  images: isTrue(LOCAL_IMAGES),
  videos: isTrue(LOCAL_VIDEOS),
  faviconFile: FAVICON_FILENAME,
  styles: {
    skin: isTrue(SKIN_STYLES),
    modules: isTrue(MODULE_STYLES),
    containers: isTrue(CONTAINER_STYLES),
  },
  scripts: isTrue(CUSTOM_SCRIPTS),
};
