const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { ProvidePlugin } = require('webpack');

const { project, paths } = require('./gulpfile.js/config');
const { getWebpackEntries } = require('./gulpfile.js/utils');

const devMode = project.mode !== 'production';

module.exports = {
  mode: project.mode,
  entry: getWebpackEntries(),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, paths.dist),
    pathinfo: devMode,
    publicPath: paths.dist.replace(paths.app, ''),
  },
  devtool: devMode ? 'eval-cheap-source-map' : false,
  optimization: {
    minimize: !devMode,
    minimizer: [
      new TerserPlugin({
        cache: true,
        exclude: /vendors/,
        extractComments: false,
        parallel: true,
        sourceMap: false,
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
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
          minChunks: 2,
          minSize: 0,
        },
        common: {
          test: /[\\/]scripts\/(App|config)[\\/]/i,
          name: 'common',
          chunks: 'all',
          minSize: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  bugfixes: true,
                  corejs: 3,
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
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  watchOptions: {
    ignored: ['./node_modules/'],
  },
};
