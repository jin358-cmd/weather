/** Inline SVG icons (no emoji, no extra icon packages). */

export function iconSvg(name, { size = 20, className = "" } = {}) {
  const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" class="${className}"`;
  const paths = {
    overview:
      '<rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect>',
    city: '<path d="M3 21h18"></path><path d="M5 21V8l7-4 7 4v13"></path><path d="M9 21v-6h6v6"></path>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10 21a2 2 0 0 0 4 0"></path>',
    history:
      '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    refresh:
      '<path d="M21 12a9 9 0 1 1-2.6-6.3"></path><path d="M21 3v6h-6"></path>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"></path>',
    close: '<path d="M18 6 6 18M6 6l12 12"></path>',
    sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>',
    cloud: '<path d="M17 18H7a4 4 0 1 1 1.1-7.9A6 6 0 1 1 17 18z"></path>',
    rain: '<path d="M17 18H7a4 4 0 1 1 1.1-7.9A6 6 0 1 1 17 18z"></path><path d="M8 20v2M12 19v3M16 20v2"></path>',
    storm:
      '<path d="M17 16H8a4 4 0 1 1 .9-7.9A6 6 0 1 1 17 16z"></path><path d="m13 11-3 5h3l-2 4"></path>',
    fog: '<path d="M4 9h16M3 13h18M5 17h14"></path>',
    alert: '<path d="M12 3 2 21h20L12 3z"></path><path d="M12 10v5M12 18h.01"></path>',
    check: '<path d="M20 6 9 17l-5-5"></path>',
    empty: '<rect x="4" y="5" width="16" height="14" rx="2"></rect><path d="M8 10h8M8 14h5"></path>',
    chevron: '<path d="m9 18 6-6-6-6"></path>'
  };
  return `<svg ${common}>${paths[name] || paths.empty}</svg>`;
}

export function weatherIcon(condition, size = 28) {
  const map = {
    clear: "sun",
    cloudy: "cloud",
    rain: "rain",
    storm: "storm",
    fog: "fog"
  };
  return iconSvg(map[condition] || "cloud", { size, className: `wx-icon wx-icon-${condition || "cloudy"}` });
}
