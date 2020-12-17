/* eslint-disable */
const text = `


 █████╗  ██████╗ ██████╗██╗   ██╗
██╔══██╗██╔════╝██╔════╝██║   ██║
███████║██║     ██║     ██║   ██║
██╔══██║██║     ██║     ██║   ██║
██║  ██║╚██████╗╚██████╗╚██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝


`
/* eslint-enable */

export default class Demo {
  static defaults = {};

  constructor(element, config = {}) {
    this.element = element;
    this.config = { ...Demo.defaults, ...config };
    this.message = text;
    this.init();
  }

  init() {
    this.createChildRefs().layout().enable();
    return this;
  }

  createChildRefs() {
    // Create references to the DOM elements you need.
    this.images = [...this.element.querySelectorAll('img')];

    return this;
  }

  layout() {
    // If you need to make any initial layout or visual changes.
    this.images.forEach(img => {
      if (!img.getAttribute('alt')) {
        img.style = 'border: 5px solid red';
      }
    });

    return this;
  }

  enable() {
    // Finally, what should happen once this component is ready.
    this.sayHello();

    return this;
  }

  sayHello = () => {
    console.log(this.message); // eslint-disable-line
  };
}
