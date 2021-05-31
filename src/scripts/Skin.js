//  Bootstrap v4 JavaScript plugins
//
//  Use only what you need to keep the bundle size as small as possible.
//
//  - Util          REQUIRED! DON'T REMOVE!
//  - Alert*        make alerts dismissable
//  - Button*       control button states for toolbar-like behavior
//  - Carousel      (disable if using a different third-party library)
//  - Collapse      toggle visibility of content, e.g., accordions
//  - Dropdown      toggle overlays for displaying lists of links
//  - Modal         functionality for lightboxes, popups, etc.
//  - Popover*      add message when you click on an element
//  - Scrollspy*    update navs or lists based on scroll position
//  - Tab           create tabbable panes of local content
//  - Toast*        push notifications
//  - Tooltip       (required if using Popover)
//
//  * Not typically used in AccuTheme projects. Your project may vary.

import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

import App from './App';

import Header from './components/Header';
import NavMenu from './components/NavMenu';

import skipToContent from './lib/skip-to-content';

skipToContent();

// Components that should be globally available in this theme.
const ComponentManifest = {
  Header,
  NavMenu,
};

// Instatiate the app.
new App(ComponentManifest);
