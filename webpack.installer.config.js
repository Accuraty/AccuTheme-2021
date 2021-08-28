const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

// const { paths } = require('./gulpfile.js/config');

const name = 'AccuTheme';
const SRC_NAME = 'src';
const DIST_NAME = 'dist';

const appPath = `./app`;
const portalPath = `${appPath}/Portals/_default`;
const skinPath = `${portalPath}/Skins/${name}`;
const containerPath = `${portalPath}/Containers/${name}`;

const srcPath = `./${SRC_NAME}`;
const distPath = `${skinPath}/${DIST_NAME}`;

// Package; packaging to create a Zipped install for Dnn
const packagePath = `./package`;

const paths = {
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
};

const webpackPlugins = [
  new FileManagerPlugin({
    runTasksInSeries: true,
    events: {
      onEnd: [
        {
          delete: [`${paths.package.temp}`],
        },
        {
          delete: [`${paths.package.path}/main.js`],
        },
        {
          mkdir: [`${paths.package.temp}`],
        },
        {
          archive: [
            {
              source: `${paths.container}`,
              destination: `${paths.package.temp}/cont.zip`,
            },
          ],
        },
        {
          archive: [
            {
              source: `${paths.skin}`,
              destination: `${paths.package.temp}/main.zip`,
            },
          ],
        },
        {
          archive: [
            {
              source: `${paths.package.code}`,
              destination: `${paths.package.temp}/appc.zip`,
            },
          ],
        },
        {
          copy: [
            {
              source: `${paths.package.path}/*.dnn`,
              destination: `${paths.package.temp}`,
            },
          ],
        },
        {
          copy: [
            {
              source: `${paths.package.static}/*.{png,txt}`,
              destination: `${paths.package.temp}`,
            },
          ],
        },
        {
          archive: [
            {
              source: `${paths.package.temp}`,
              destination: `${paths.package.path}/${paths.package.name}-000000-Install.zip`,
            },
          ],
        },
      ],
    },
  }),
];

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'package/static/manifest.dnn'),
  output: {
    path: path.resolve(__dirname, `${paths.package.path}`),
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
          path.resolve(__dirname, 'package/static/DNN-manifest-loader.js'),
        ],
      },
    ],
  },
  plugins: webpackPlugins,
};
