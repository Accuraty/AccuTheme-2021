import monitorScroll from 'srraf';

export default function whenVisible(node, providedThreshold = 0) {
  return function handlers(onEnter, onExit) {
    let visible = false;

    const threshold = parseFloat(
      node.getAttribute('data-threshold') || providedThreshold
    );

    return monitorScroll((...args) => {
      const [{ y, vh }] = args;

      // Get the size of the element and its position relative to the viewport.
      // https://developer.mozilla.org/Web/API/Element/getBoundingClientRect
      const bounds = node.getBoundingClientRect();

      const nodeTop = bounds.top + y;
      const nodeBottom = nodeTop + bounds.height;

      // allow pixel vals
      const offset = threshold >= 0.5 ? threshold : threshold * vh;
      const inView = nodeBottom - offset >= y && nodeTop + offset <= y + vh;

      if (inView && !visible) {
        visible = true;
        onEnter && onEnter(...args);
      } else if (!inView && visible) {
        visible = false;
        onExit && onExit(...args);
      }
    });
  };
}
