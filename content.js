console.log('extensions')

// Select all <a> elements
const links = document.querySelectorAll('a');

console.log(links.length)
console.log(links)

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
      // Select all <a> elements
      const links = document.querySelectorAll('a');

      // Iterate through the collected elements
      links.forEach(link => {
        // Check if the href attribute ends with 'similar'
        if (link.href.endsWith('similar')) {
            // Remove the entire <a> element
            console.log('removing')
            link.remove();
        }
      });
  });
});

observer.observe(document.body, { childList: true, subtree: true });