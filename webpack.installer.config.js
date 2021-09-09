import path, { resolve } from 'path';
import FileManagerPlugin from 'filemanager-webpack-plugin';
import * as paths from './gulpfileDir/config/paths.js';

// ES6 doesn't have __filename or __dirname global variables so this creates them for us.
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackPlugins = [
  new FileManagerPlugin({
    runTasksInSeries: true,
    events: {
      onEnd: [
        {
          delete: [`${paths.pkg.temp}`],
        },
        {
          delete: [`${paths.pkg.path}/main.js`],
        },
        {
          mkdir: [`${paths.pkg.temp}`],
        },
        {
          archive: [
            {
              source: `${paths.container}`,
              destination: `${paths.pkg.temp}/cont.zip`,
            },
          ],
        },
        {
          archive: [
            {
              source: `${paths.skin}`,
              destination: `${paths.pkg.temp}/main.zip`,
            },
          ],
        },
        {
          archive: [
            {
              source: `${paths.pkg.code}`,
              destination: `${paths.pkg.temp}/appc.zip`,
            },
          ],
        },
        {
          copy: [
            {
              source: `${paths.pkg.path}/*.dnn`,
              destination: `${paths.pkg.temp}`,
            },
          ],
        },
        {
          copy: [
            {
              source: `${paths.pkg.static}/*.{png,txt}`,
              destination: `${paths.pkg.temp}`,
            },
          ],
        },
        {
          archive: [
            {
              source: `${paths.pkg.temp}`,
              destination: `${paths.pkg.path}/${paths.pkg.name}-000001-Install.zip`,
            },
          ],
        },
      ],
    },
  }),
];

export default {
  mode: 'production',
  entry: resolve(__dirname, 'package/static/manifest.dnn'),
  output: {
    path: resolve(__dirname, `${paths.pkg.path}`),
  },
  module: {
    rules: [
      {
        test: /\.dnn/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './',
              name: 'manifest.dnn',
            },
          },
          resolve(__dirname, 'package/static/DNN-manifest-loader.cjs'),
        ],
      },
    ],
  },
  plugins: webpackPlugins,
};
