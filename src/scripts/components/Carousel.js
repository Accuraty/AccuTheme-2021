import buildFlickity from '../lib/build-flickity';

export default class Carousel {
  static defaults = {};

  constructor(element, config = {}) {
    this.element = element;
    this.config = { ...Carousel.defaults, ...config };
    this.init();
  }

  init() {
    this.createChildRefs().enable();
    return this;
  }

  createChildRefs() {
    return this;
  }

  enable() {
    buildFlickity(this.element, {});
  }
}
