// Check to see if user prefers reduced motion
// https://developers.google.com/web/updates/2019/03/prefers-reduced-motion
export default function isReducedMotion() {
  return (
    'matchMedia' in window &&
    window.matchMedia('(prefers-reduced-motion)').matches
  );
}
