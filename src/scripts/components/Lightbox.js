import { buildLuminous, buildLuminousGallery } from '../lib/build-luminous';

export default class Lightbox {
  static defaults = {
    isGallery: false,
  };

  constructor(element, config = {}) {
    this.element = element;
    this.config = { ...Lightbox.defaults, ...config };
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
    const build = this.config.isGallery ? buildLuminousGallery : buildLuminous;
    build(this.element, {});
  }
}
