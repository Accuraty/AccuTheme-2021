import monitorScroll from 'srraf';

export default class Header {
  static defaults = {
    scrollClass: 'has-scrolled',
    transformOnScroll: true,
    transformPosition: 0,
    transformClass: 'transform-on-scroll',
  };

  constructor(element, config = {}) {
    this.element = element;
    this.config = { ...Header.defaults, ...config };
    this.scrollingDown = null;
    this.scrollingUp = null;
    this.init();
  }

  init() {
    this.createChildRefs().layout().enable();
    return this;
  }

  createChildRefs() {
    return this;
  }

  layout() {
    if (this.config.transformOnScroll) {
      this.element.classList.add(this.config.transformClass);
    }

    return this;
  }

  enable() {
    if (this.config.transformOnScroll) {
      this.transformHeader();
    }
  }

  onScrollDown = () => {
    if (!this.scrollingDown) {
      this.element.classList.add(this.config.scrollClass);
      this.scrollingDown = true;
      this.scrollingUp = false;
    }
  };

  onScrollUp = () => {
    if (!this.scrollingUp) {
      this.element.classList.remove(this.config.scrollClass);
      this.scrollingUp = true;
      this.scrollingDown = false;
    }
  };

  transformHeader = () => {
    monitorScroll(({ y, py }) => {
      if (y <= this.config.transformPosition || y < py) {
        this.onScrollUp();
      } else {
        this.onScrollDown();
      }
    });
  };
}
