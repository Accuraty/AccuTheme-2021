export default function getElementStyle(element, property) {
  if (!element || !property) {
    throw new Error(
      'getElementStyle requires two parameters: (1) the element and (2) the style property'
    );
  }

  if (typeof element !== 'object' && element.nodeType !== 1) {
    // https://developer.mozilla.org/Web/API/Element
    throw new Error('getElementStyle element value must be an Element node');
  }

  if (typeof property !== 'string') {
    throw new Error('getElementStyle property value must be a string');
  }

  return window.getComputedStyle(element).getPropertyValue(property);
}
