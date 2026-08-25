(() => {
  document.body.classList.remove("theme-cyberpunk-2700");
  document.body.classList.add("theme-elegant");
  document.body.setAttribute("data-legacy-theme", "dusk");
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", "#161d27");
  }
})();
