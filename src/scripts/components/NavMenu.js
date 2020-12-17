import isTouchDevice from '../lib/is-touch-device';

export default class NavMenu {
  static defaults = {
    activeClass: 'show',
    dropdown: '.dropdown',
    dropdownMenuItem: '.dropdown-item',
    dropdownOnHover: true,
    dropdownOnHoverClass: 'dropdown--hoverable',
    dropdownToggle: '.dropdown-toggle',
  };

  constructor(element, config = {}) {
    this.element = element;
    this.config = { ...NavMenu.defaults, ...config };
    this.MAP = new Map();
    this.isTouchDevice = isTouchDevice();
    this.init();
  }

  init() {
    this.createChildRefs().layout().enable();

    return this;
  }

  createChildRefs() {
    // Build a cache map of key DOM elements for each dropdown.
    // Each item group is stored using its DNN tab id as the key.
    // Bootstrap v4 requires jQuery for some functionality.
    this.element.querySelectorAll(this.config.dropdown).forEach(dropdown => {
      this.MAP.set(dropdown.id, {
        node: dropdown, // not jQuery on purpose
        $dropdown: $(`#${dropdown.id}`),
        $toggle: $(`#${dropdown.id} > ${this.config.dropdownToggle}`),
        $menuItems: $(`#${dropdown.id} ${this.config.dropdownMenuItem}`),
      });
    });

    return this;
  }

  layout() {
    if (!this.isTouchDevice && this.config.dropdownOnHover) {
      this.MAP.forEach(({ $menuItems }) => {
        $menuItems.attr('tabindex', '-1');
      });
    }

    return this;
  }

  enable() {
    if (!this.isTouchDevice && this.config.dropdownOnHover) {
      this.MAP.forEach(({ node, $dropdown }) => {
        // Extend the hoverable area behind the dropdown menu so it
        // doesn't close as soon as your cursor leaves the the element.
        $dropdown.addClass(this.config.dropdownOnHoverClass);

        $dropdown.on('mouseenter', this.handleDropdownMouseEvent);
        $dropdown.on('mouseleave', this.handleDropdownMouseEvent);

        $dropdown.on('show.bs.dropdown', this.handleBootstrapShowEvent);
        $dropdown.on('hide.bs.dropdown', this.handleBootstrapHideEvent);

        // jQuery's click event is unreliable. Use vanilla JS here.
        const toggle = node.querySelector(this.config.dropdownToggle);
        toggle.addEventListener('click', this.handleToggleClick);
      });
    }

    return this;
  }

  handleDropdownMouseEvent = event => {
    const dropdown = this.MAP.get(event.target.parentElement.id);
    if (!dropdown) return;

    if (event.type === 'mouseenter') {
      dropdown.$toggle.dropdown('show');
    } else {
      dropdown.$toggle.dropdown('hide');
      dropdown.$toggle.blur();
    }
  };

  handleBootstrapShowEvent = event => {
    event.stopPropagation();
    const dropdown = this.MAP.get(event.target.id);
    if (!dropdown) return;
    dropdown.$menuItems.removeAttr('tabindex');
  };

  handleBootstrapHideEvent = event => {
    event.stopPropagation();
    const dropdown = this.MAP.get(event.target.id);
    if (!dropdown) return;
    dropdown.$menuItems.attr('tabindex', '-1');
  };

  handleToggleClick = event => {
    const toggle = event.target;

    if (toggle.getAttribute('aria-expanded') === 'true') {
      const href = toggle.getAttribute('href');

      if (href && href !== '#') {
        location.href = href;
      }
    }

    event.preventDefault();
  };
}
