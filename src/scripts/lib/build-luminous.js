import { Luminous, LuminousGallery } from 'luminous-lightbox';

// Most common Luminous settings used in our projects.
const DEFAULT_OPTIONS = {
  caption: trigger => trigger.querySelector('img').getAttribute('data-caption'),
  onOpen: () => {
    document.body.classList.add('has-overlay');
  },
  onClose: () => {
    document.body.classList.remove('has-overlay');
  },
};

export function buildLuminous(element, providedOptions) {
  if (typeof element === 'undefined') {
    throw new Error('You must pass Luminous an element');
  }

  // Create a new options object. Default properties must be first so
  // any provided option properties will override them, if necessary.
  const options = {
    ...DEFAULT_OPTIONS,
    ...providedOptions,
  };

  // Initialize a lightbox. Pass in the target element and the options.
  return new Luminous(element, options);
}

export function buildLuminousGallery(
  elements,
  providedGalleryOptions,
  providedOptions
) {
  if (typeof elements === 'undefined') {
    throw new Error('You must pass Luminous Gallery an array of elements');
  }

  // Create a new gallery options object.
  const galleryOptions = {
    arrowNavigation: true,
    ...providedGalleryOptions,
  };

  // Create a new options object. Default properties must be first so
  // any provided option properties will override them, if necessary.
  const options = {
    ...DEFAULT_OPTIONS,
    ...providedOptions,
  };

  // Initialize a lightbox. Pass in the target element and the options.
  return new LuminousGallery(elements, galleryOptions, options);
}
