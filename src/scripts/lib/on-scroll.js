import srraf from 'srraf';

export default function onScroll(fn) {
  if (typeof fn !== 'function') {
    throw new Error('You must pass a callback function to `onScroll`');
  }

  srraf(({ x, px, y, py }) => {
    if (x !== px || y !== py) {
      fn();
    }
  });
}
