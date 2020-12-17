export default function skipToContent() {
  const main = document.querySelector('main');
  const link = document.createElement('a');

  main.setAttribute('tabindex', '-1');
  main.style.outline = 'none';

  if (!main.id) {
    main.setAttribute('id', 'content');
  }

  link.setAttribute('class', 'skip-link btn btn-light');
  link.setAttribute('href', `#${main.id}`);
  link.innerText = 'Skip to content';

  link.addEventListener('click', event => {
    event.preventDefault();
    main.focus();
  });

  document.body.insertAdjacentElement('afterbegin', link);
}
