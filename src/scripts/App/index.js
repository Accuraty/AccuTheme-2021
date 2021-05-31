export default class App {
  static defaults = {
    componentAttr: 'data-component',
    configAttr: 'data-component-config',
    scope: document.body,
  };

  constructor(ComponentManifest = {}, AppConfig = {}) {
    this.ComponentManifest = ComponentManifest;
    this.config = { ...App.defaults, ...AppConfig };
    this.init();
  }

  init() {
    this.registerComponents(this.config.scope);
    return this;
  }

  /**
   * Loop over all components in the defined scope, get any config values,
   * and initialize each one if it exists in the `ComponentManifest` object.
   *
   * @param {Node} scope
   */
  registerComponents(scope) {
    const components = scope.querySelectorAll(`[${this.config.componentAttr}]`);

    components.forEach(component => {
      const name = component.getAttribute(this.config.componentAttr);
      const Constructor = this.ComponentManifest[name];

      if (Constructor) {
        const options = this.getComponentConfig(component);
        new Constructor(component, options);
      }
    });

    return this;
  }

  /**
   * Get the component's config object based on the `configAttr` value.
   * Safely parse the JSON so we get a clear error message if it's invalid.
   *
   * @param {Node} component
   */
  getComponentConfig(component) {
    let options = {};

    if (component.hasAttribute(this.config.configAttr)) {
      const optionString = component.getAttribute(this.config.configAttr);

      // Safely run `JSON.parse` just in case the JSON is invalid,
      // and log the exception to the console instead of blowing up.
      try {
        options = JSON.parse(optionString);
      } catch (error) {
        const name = component.getAttribute(this.config.componentAttr);
        console.error(`Invalid JSON in "${name}" component options`, {
          name,
          optionString,
        });
      }
    }

    return options;
  }
}
