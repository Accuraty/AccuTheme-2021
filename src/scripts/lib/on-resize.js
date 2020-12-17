import srraf from 'srraf';

export default function onResize(fn) {
  if (typeof fn !== 'function') {
    throw new Error('You must pass a callback function to `onResize`');
  }

  srraf(({ vh, pvh, vw, pvw }) => {
    if (vh !== pvh || vw !== pvw) {
      fn();
    }
  });
}
