export default class LazyYouTube {
  static defaults = {
    baseClass: 'lazy-yt',
    iframeClass: 'lazy-yt-item',
    imageClass: 'lazy-yt-thumbnail',
    buttonClass: 'lazy-yt-btn',
  };

  constructor(element, config = {}) {
    this.element = element;
    this.config = { ...LazyYouTube.defaults, ...config };
    this.video_id = this.config.video_id;
    this.init();
  }

  init() {
    if (this.video_id) {
      this.layout().enable();
      return this;
    }

    throw new Error('No YouTube video ID was found');
  }

  enable() {
    this.element.addEventListener('click', this.handleVideoClick);
  }

  layout() {
    // Set base class.
    this.element.classList.add(LazyYouTube.defaults.baseClass);

    // Build the play button.
    const btn = document.createElement('div');
    btn.className = LazyYouTube.defaults.buttonClass;
    this.element.appendChild(btn);

    // Grab the thumbnail from YouTube.
    const img = document.createElement('img');
    img.className = LazyYouTube.defaults.imageClass;
    img.src = `https://img.youtube.com/vi/${this.video_id}/hqdefault.jpg`;
    this.element.appendChild(img);

    return this;
  }

  handleVideoClick = event => {
    event.preventDefault();
    const iframe = document.createElement('iframe');
    iframe.className = LazyYouTube.defaults.iframeClass;
    iframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${this.video_id}?rel=0&autoplay=1&modestbranding=1&iv_load_policy=3`
    );
    iframe.setAttribute('allowfullscreen', '');
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
    this.element.appendChild(iframe);
  };
}
