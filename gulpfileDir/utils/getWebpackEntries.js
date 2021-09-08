import { readdirSync } from 'fs';
import { extname, basename } from 'path';

// Each JS file at the root `scripts` directory needs to be given
// to Webpack as an entry so it will be turned into its own bundle.
function getWebpackEntries() {
  const baseDir = `./src/scripts`;
  const ext = '.js';
  const entries = {};

  readdirSync(baseDir).forEach(file => {
    if (extname(file) === ext) {
      const name = basename(file, ext);
      const filepath = `${baseDir}/${name}`;
      entries[name] = filepath;
    }
  });

  return entries;
}

export default getWebpackEntries;
