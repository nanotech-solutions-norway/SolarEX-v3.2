(function () {
  const externalMailLinks = document.querySelectorAll('a[href^="mailto:"]');
  for (const link of externalMailLinks) {
    link.setAttribute('rel', 'noopener');
  }
})();
