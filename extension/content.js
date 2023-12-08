const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
      const links = document.querySelectorAll('a');

      links.forEach(link => {
        if (link.href.endsWith('similar')) {
            link.remove();
        }
      });
  });
});

observer.observe(document.body, { childList: true, subtree: true });