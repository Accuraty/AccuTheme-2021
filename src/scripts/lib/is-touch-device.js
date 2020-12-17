export default function isTouchDevice() {
  if (typeof window !== 'undefined') {
    return Boolean(
      'ontouchstart' in window || 'ontouchstart' in document.documentElement
    );
  }

  return false;
}
