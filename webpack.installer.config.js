// UNUSED EXPERIMENT JRF
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'install'),
  },
  plugins: [
    new FileManagerPlugin({
      // OPTIONAL: defaults to the Webpack output path (above)
      // can be relative (to Webpack output path) or absolute
      path: 'zip',

      // OPTIONAL: defaults to the Webpack output filename (above) or,
      // if not present, the basename of the path
      filename: '[name].Install.zip',

      // OPTIONAL: defaults to 'zip'
      // the file extension to use instead of 'zip'
      // extension: 'ext',

      // OPTIONAL: defaults to the empty string
      // the prefix for the files included in the zip file
      // pathPrefix: 'relative/path',

      // OPTIONAL: defaults to including everything
      // can be a string, a RegExp, or an array of strings and RegExps
      include: [/\.md$/, /\.ascx$/, /\.css$/, /\.js$/],

      // OPTIONAL: defaults to excluding nothing
      // can be a string, a RegExp, or an array of strings and RegExps
      // if a file matches both include and exclude, exclude takes precedence
      exclude: [/\.zip$/, /\.html$/],
    }),
  ],
  resolve: {
    extensions: ['.css', '.ascx'],
  },
};
