//
// Transform on scroll
// ===================
//
// 1. Distance from the top that triggers the visibility change.
//
// 2. The class you want to toggle for the element.
//
// 3. Function to trigger when scrolling down.
//
// 3. Function to trigger when scrolling up.
// ------------------------------------------------------------------------

import monitorScroll from 'srraf';

export default function transformOnScroll(element, options = {}) {
  if (typeof element === 'undefined') {
    throw new Error('transformOnScroll requires an element');
  }

  const {
    transformPosition = 0, // 1
    transformClass, // 2
    onScrollDown,
    onScrollUp,
  } = options;

  let direction;

  if (transformClass || onScrollDown || onScrollUp) {
    monitorScroll(({ y }) => {
      if (y > transformPosition) {
        if (direction !== 'down') {
          transformClass && element.classList.add(transformClass);
          onScrollDown && onScrollDown();
          direction = 'down';
        }
      } else {
        if (direction !== 'up') {
          transformClass && element.classList.remove(transformClass);
          onScrollUp && onScrollUp();
          direction = 'up';
        }
      }
    }).update();
  }
}
