//
// Lazy Load YouTube
// =================
//
// Resource: https://developers.google.com/youtube/player_parameters
// ----------------------------------------------------------------------------

export default function lazyLoadYouTube() {
  const videos = [...document.querySelectorAll('.lazy-yt')];
  if (!videos.length) return;

  videos.forEach(video => {
    // Skip if there is no `data-id` attribute.
    if (!video.dataset.id) return;

    // Build the play button.
    const btn = document.createElement('div');
    btn.className = 'lazy-yt-btn';
    video.appendChild(btn);

    // Grab the thumbnail from YouTube.
    const img = document.createElement('img');
    img.className = 'lazy-yt-thumbnail';
    img.src = `https://img.youtube.com/vi/${video.dataset.id}/hqdefault.jpg`;
    video.appendChild(img);

    // Once a user clicks on the video, then build the iframe.
    video.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.className = 'lazy-yt-item';
      iframe.setAttribute(
        'src',
        `https://www.youtube.com/embed/${video.dataset.id}?rel=0&autoplay=1&modestbranding=1&iv_load_policy=3`
      );
      iframe.setAttribute('allowfullscreen', '');
      while (video.firstChild) {
        video.removeChild(video.firstChild);
      }
      video.appendChild(iframe);
    });
  });
}
