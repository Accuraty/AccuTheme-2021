const fs = require('fs');
const gulp = require('gulp');
const realFavicon = require('gulp-real-favicon');
const replace = require('gulp-replace');

const { paths, plugins, project } = require('../config');
const $ = plugins.realFavicon;

// File where the favicon HTML markup is stored
const FAVICON_DATA = 'real-favicon-generator.json';

// The settings in `generateFavicons` below should be fine for most icons.
// But if you want to customize them, go to https://RealFaviconGenerator.net,
// upload your favicon image (the file should be 512x512 for optimal results),
// and adjust the settings. When you are finished, generate your code and then
// click on the "Gulp" tab. Find the `design` property in the `generateFavicon`
// method. Copy the values from that object into the custom object below. Any
// values added here will override the default option found in `plugins.js`.
const CUSTOM_DESIGN_OPTIONS = {
  // ios: {},
  // windows: {},
  // androidChrome: {},
  // safariPinnedTab: {},
};

// Same thing applies the the settings. If you want to update these options,
// add the values from the `settings` property in the `generateFavicon` method.
const CUSTOM_SETTINGS_OPTIONS = {};

// Generate the icons. This task takes a few seconds to complete because
// it makes a request to RealFaviconGenerator.net to build all the assets.
function generateFavicons(done) {
  realFavicon.generateFavicon(
    {
      masterPicture: paths.favicons.src,
      dest: paths.favicons.dist,
      iconsPath: paths.favicons.iconsPath,
      design: {
        ...$.DEFAULT_DESIGN_OPTIONS,
        ...CUSTOM_DESIGN_OPTIONS,
      },
      settings: {
        ...$.DEFAULT_SETTINGS_OPTIONS,
        ...CUSTOM_SETTINGS_OPTIONS,
      },
      markupFile: FAVICON_DATA,
    },
    () => done()
  );
}

// Get the generated markup from the response and inject it into the
// function in `controls/meta.ascx` so that it is added to the `<head>` tag.
function injectFaviconsMarkup() {
  if (!project.faviconFile) return Promise.resolve();

  // We have to parse the JSON so we can grab only the `html_code` value.
  const htmlCode = JSON.parse(fs.readFileSync(FAVICON_DATA)).favicon.html_code;

  // Then convert the now-parsed HTML back to a string for our C# function.
  const htmlCodeInStringFormat = JSON.stringify(htmlCode);

  // Find the line in `meta.ascx` that starts with `string Favicons = "` and
  // replace it with our stringified HTML as the variable's value.
  const pattern = /string Favicons = "\\?.*/g;
  const updated = `string Favicons = ${htmlCodeInStringFormat};`;

  return gulp
    .src(paths.favicons.markupOutput)
    .pipe(replace(pattern, updated))
    .pipe(gulp.dest(paths.favicons.markupOutputDirectory));
}

exports.favicons = gulp.series(generateFavicons, injectFaviconsMarkup);
