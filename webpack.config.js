import { resolve } from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpackPkg from 'webpack';
const { ProvidePlugin } = webpackPkg;

import { project, paths } from './gulpfileDir/config/index.js';
import { getWebpackEntries } from './gulpfileDir/utils/index.js';

// ES6 doesn't have __filename or __dirname global variables so this creates them for us.
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const devMode = project.mode !== 'production';

const webpackPlugins = [
  new ESLintPlugin({
    context: `${paths.src}/scripts`,
    failOnError: false,
  }),
  new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
];

// The auto-convert broke up the modules.export object into individual exports.
// import * as WEBPACK_CONFIG from './Path/to/This/File' will import everything as a single object named WEBPACK_CONFIG
export const mode = project.mode;
export const entry = getWebpackEntries();
export const output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, paths.dist),
  pathinfo: devMode,
  publicPath: paths.dist.replace(paths.app, ''),
};
export const devtool = devMode ? 'eval-cheap-source-map' : false;
export const optimization = {
  minimize: !devMode,
  minimizer: [
    new TerserPlugin({
      exclude: /vendors/,
      extractComments: false,
      parallel: true,
      terserOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
    }),
  ],
  removeEmptyChunks: !devMode,
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      defaultVendors: {
        chunks: 'initial',
        minChunks: 2,
        minSize: 0,
        name: 'vendors',
        priority: -10,
        reuseExistingChunk: true,
        test: /[\\/]node_modules[\\/]/,
      },
      common: {
        chunks: 'all',
        enforce: true,
        name: 'common',
        priority: -20,
        test: /[\\/]scripts\/(App|config)[\\/]/i,
      },
    },
  },
};
export const module = {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      include: resolve(__dirname, paths.src),
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                bugfixes: true,
                corejs: '3.13',
                debug: false,
                useBuiltIns: 'entry',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    },
  ],
};
export const plugins = webpackPlugins;
export const watchOptions = {
  ignored: ['./node_modules/'],
};
