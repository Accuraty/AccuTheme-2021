# Scripts

This folder contains all custom JavaScript used in the project.

## Architecture

- `App/`
- `components/`
- `lib/`
- individual files

### App

This is how components are loaded and executed.

### Components

Each component is an encapsulated piece of functionality.

### Lib

Utility functions and helpers.

### Individual files

Any file at the root of the `scripts/` directory will be compiled into separate JavaScript bundles. Scripts needed for the entire site are in `Skin.js`. Add new files for page- and component-specific scripts.

_Note: When you add new individual files at the root of this directory, they will automatically be included in the build process. However, you must manually add them to the template they belong with._

## What about vendor files?

Vendor files (e.g., Bootstrap, Flickity) won't usually be included here because they do not need to be processed through the Gulp build. Instead, you should install the package (via NPM) and import the vendor script into whichever component or file needed.
