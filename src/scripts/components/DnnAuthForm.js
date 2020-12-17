export default class DnnAuthForm {
  static defaults = {
    authForm: '[data-authentication-form]',
    buttonPrimaryClassName: 'btn btn-primary',
    buttonSecondaryClassName: 'btn btn-outline-primary',
    dnnInput: '.dnnFormItem input:not([type=checkbox]):not([type=radio])',
    dnnPrimaryButton: '.dnnPrimaryAction',
    dnnSecondaryButton: '.dnnSecondaryAction',
    inputClass: 'form-control',
    visibleClass: 'is-visible',
  };

  constructor(element, config = {}) {
    this.element = element;
    this.config = { ...DnnAuthForm.defaults, ...config };
    this.init();
  }

  init() {
    this.createChildRefs().layout().enable();
    return this;
  }

  createChildRefs() {
    this.authForm = this.element.querySelector(this.config.authForm);

    this.inputs = [...this.element.querySelectorAll(this.config.dnnInput)];

    this.primaryButtons = [
      ...this.element.querySelectorAll(this.config.dnnPrimaryButton),
    ];

    this.secondaryButtons = [
      ...this.element.querySelectorAll(this.config.dnnSecondaryButton),
    ];

    return this;
  }

  layout() {
    this.inputs.forEach(input => {
      input.className = this.config.inputClass;
    });

    this.primaryButtons.forEach(btn => {
      btn.className = this.config.buttonPrimaryClassName;
    });

    this.secondaryButtons.forEach(btn => {
      btn.className = this.config.buttonSecondaryClassName;
    });

    return this;
  }

  enable() {
    setTimeout(() => {
      this.authForm.classList.add(this.config.visibleClass);
    }, 350);

    return this;
  }
}
