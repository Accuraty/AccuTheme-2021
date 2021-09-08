import { isTrue } from '../utils/index.js';
// import { env } from 'process';

// const {
//   NODE_ENV,
//   PROJECT_MODE,
//   FAVICON_FILENAME,
//   LOCAL_FONTS,
//   LOCAL_SVG,
//   LOCAL_IMAGES,
//   LOCAL_VIDEOS,
//   SKIN_STYLES,
//   MODULE_STYLES,
//   CONTAINER_STYLES,
//   CUSTOM_SCRIPTS,
// } = env;

export const name = 'AccuTheme';
export const mode = 'production';
export const fonts = isTrue('true');
export const svg = isTrue('true');
export const images = isTrue('true');
export const videos = isTrue('false');
export const faviconFile = 'favicon.png';
export const styles = {
  skin: isTrue('true'),
  modules: isTrue('true'),
  containers: isTrue('false'),
};
export const scripts = isTrue('true');
