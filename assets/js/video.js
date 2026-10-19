// Reemplaza la portada por el iframe de YouTube (sin cookies) solo al hacer clic.
(function () {
  if (window.__fcVideo) return;
  window.__fcVideo = true;

  document.addEventListener('click', function (e) {
    var link = e.target.closest('.video-facade');
    if (!link) return;
    e.preventDefault();
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' +
      encodeURIComponent(link.dataset.youtubeId) + '?autoplay=1&rel=0';
    iframe.title = link.dataset.youtubeTitle || 'Video de YouTube';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    iframe.className = 'video-frame';
    link.replaceWith(iframe);
    iframe.focus();
  });
})();
