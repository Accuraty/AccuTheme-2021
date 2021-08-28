const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { ProvidePlugin } = require('webpack');

const { project, paths } = require('./gulpfile.js/config');
const { getWebpackEntries } = require('./gulpfile.js/utils');

const FileManagerPlugin = require('filemanager-webpack-plugin');
const { TRUE } = require('node-sass');

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
  new FileManagerPlugin({
    runTasksInSeries: true,
    events: {
      onEnd: [
        {
          delete: [`${paths.package.temp}`], // TODO move this to after
        },
        {
          mkdir: [`${paths.package.temp}`],
        },
        // Containers
        {
          archive: [
            {
              source: `${paths.container}`,
              destination: `${paths.package.temp}/cont.zip`,
            },
          ],
        },
        // Skins
        {
          archive: [
            {
              source: `${paths.skin}`,
              destination: `${paths.package.temp}/main.zip`,
            },
          ],
        },
        // Code (AccuTheme.cshtml)
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
              destination: `${paths.package.path}/${paths.package.name}-000000-Install.zip`, // TODO version?
            },
          ],
        },
      ], // end of onEnd
    },
  }),
];

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
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, paths.src),
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
  },
  plugins: webpackPlugins,
  watchOptions: {
    ignored: ['./node_modules/'],
  },
};
