const fs = require('fs');
const path = require('path');

// Each JS file at the root `scripts` directory needs to be given
// to Webpack as an entry so it will be turned into its own bundle.
function getWebpackEntries() {
  const baseDir = `./src/scripts`;
  const ext = '.js';
  const entries = {};

  fs.readdirSync(baseDir).forEach(file => {
    if (path.extname(file) === ext) {
      const name = path.basename(file, ext);
      const filepath = `${baseDir}/${name}`;
      entries[name] = filepath;
    }
  });

  return entries;
}

module.exports = getWebpackEntries;
