(() => {
  const STORAGE_KEY = "legacyElegantTheme";
  const THEMES = ["cloud", "ink", "dusk"];
  const DEFAULT_THEME = "cloud";

  function readTheme() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("theme");
    if (THEMES.includes(fromQuery)) {
      return fromQuery;
    }
    try {
      const saved = window.sessionStorage.getItem(STORAGE_KEY);
      if (THEMES.includes(saved)) {
        return saved;
      }
    } catch {
      /* ignore */
    }
    return DEFAULT_THEME;
  }

  function applyTheme(theme) {
    const next = THEMES.includes(theme) ? theme : DEFAULT_THEME;
    document.body.classList.remove("theme-cyberpunk-2700");
    document.body.classList.add("theme-elegant");
    document.body.setAttribute("data-legacy-theme", next);
    const meta = document.querySelector('meta[name="theme-color"]');
    const colors = { cloud: "#10233f", ink: "#1c1814", dusk: "#161d27" };
    if (meta) {
      meta.setAttribute("content", colors[next]);
    }
    document.querySelectorAll(".theme-option").forEach((button) => {
      const active = button.dataset.theme === next;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    try {
      window.sessionStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    const url = new URL(window.location.href);
    url.searchParams.set("theme", next);
    window.history.replaceState({}, "", url);
  }

  function init() {
    applyTheme(readTheme());
    document.querySelectorAll(".theme-option").forEach((button) => {
      button.addEventListener("click", () => applyTheme(button.dataset.theme));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
