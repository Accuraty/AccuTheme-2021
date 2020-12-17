export default function onReady(fn) {
  const readyState = document.attachEvent
    ? document.readyState === 'complete'
    : document.readyState !== 'loading';

  if (readyState) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
