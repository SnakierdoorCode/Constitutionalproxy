// Register renamed service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/proxy-engine/proxy-sw.js', {
    scope: '/p/'           // ← MUST match prefix in proxy-config.js
  })
  .then(reg => console.log('Proxy engine ready'))
  .catch(err => console.error('Service worker error', err));
}

// Launch proxied site
function launch() {
  let input = document.getElementById('u').value.trim();
  if (!input) return;

  if (!input.startsWith('http')) {
    input = 'https://' + input;
  }

  // Using the renamed config object
  const encoded = self.__proxy$config.encodeUrl(input);
  location.assign('/p/' + encoded);
}

// Enter key support
document.getElementById('u').onkeypress = function(e) {
  if (e.key === 'Enter') launch();
};
