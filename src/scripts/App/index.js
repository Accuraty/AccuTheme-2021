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

// function DEMO(ComponentManifest = {}, config = {}) {
//   const self = {};

//   self.config = {
//     componentAttr: 'data-component',
//     configAttr: 'data-component-config',
//     ...config,
//   };

//   function init() {
//     registerComponents(document.body);
//   }

//   /**
//    * Get the options off a component based on the `configAttr`
//    * configuration value. Add a bit of safety around parsing JSON so
//    * we get a clear error message if that JSON is invalid.
//    *
//    * @param {Node} component
//    */
//   function getComponentOptions(component) {
//     let options = {};

//     // Does this component have an options attribute?
//     if (component.hasAttribute(self.config.configAttr)) {
//       const optionString = component.getAttribute(self.config.configAttr);

//       // Safely run `JSON.parse` just in case the JSON is invalid,
//       // and log the exception to the console instead of blowing up.
//       try {
//         options = JSON.parse(optionString);
//       } catch (error) {
//         const name = component.getAttribute(self.config.componentAttr);
//         console.error(`Invalid JSON in "${name}" component options`, {
//           name,
//           component,
//         });
//       }
//     }

//     return options;
//   }

//   /**
//    * Find all components in the defined scope, loop over them,
//    * and initialize each one with options, if it exists.
//    *
//    * @param {Node} scope
//    */
//   function registerComponents(scope = document) {
//     const components = scope.querySelectorAll(`[${self.config.componentAttr}]`);

//     components.forEach(component => {
//       const name = component.getAttribute(self.config.componentAttr);
//       const options = getComponentOptions(component);

//       const Constructor = ComponentManifest[name];

//       if (Constructor) {
//         new Constructor(component, options); // eslint-disable-line
//       }
//     });
//   }

//   // Initialize and return the `self` object.
//   // This must be the last actions in the function.
//   init();
//   return self;
// }
