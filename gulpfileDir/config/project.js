import { isTrue } from '../utils/index.js';
import { env } from 'process'; //How to access process.env in ES6

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
} = env;

export const name = 'AccuTheme';
export const mode = NODE_ENV || PROJECT_MODE || 'development';
export const fonts = isTrue(LOCAL_FONTS);
export const svg = isTrue(LOCAL_SVG);
export const images = isTrue(LOCAL_IMAGES);
export const videos = isTrue(LOCAL_VIDEOS);
export const faviconFile = FAVICON_FILENAME;
export const styles = {
  skin: isTrue(SKIN_STYLES),
  modules: isTrue(MODULE_STYLES),
  containers: isTrue(CONTAINER_STYLES),
};
export const scripts = isTrue(CUSTOM_SCRIPTS);
