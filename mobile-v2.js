/* PMOS Weather Mobile v2.2: light, concise, five-tab interface.
   Existing Windy and hazard map nodes are moved without recreating them. */
(function () {
  "use strict";
  function init() {
    const app = document.querySelector("main.app");
    if (!app || document.getElementById("v2-mobile-shell")) return;

    const shell = document.createElement("div");
    shell.id = "v2-mobile-shell";
    shell.className = "v2-shell";
    shell.innerHTML = [
      '<div class="v2-quickloc" aria-label="地區與資料更新">',
        '<div class="v2-place-line"><span aria-hidden="true">📍</span><div><b id="v2-place">選擇所在地區</b><small id="v2-update">資料更新中</small></div></div>',
        '<div class="v2-loc-actions"><button type="button" id="v2-geolocate" title="依設備定位" aria-label="依設備定位">⌖</button><button type="button" id="v2-change-place">地區／設定</button><button type="button" id="v2-refresh-top" title="立即更新" aria-label="立即更新資料">↻</button></div>',
      '</div>',
      '<div id="v2-content" class="v2-column"></div>',
      '<nav class="v2-bottomnav" aria-label="五項防災功能">',
        '<a href="#v2-notices" data-panel="v2-notices"><span class="v2-nav-icon" aria-hidden="true">▣</span><span>停班停課</span></a>',
        '<a href="#v2-windy" data-panel="v2-windy"><span class="v2-nav-icon" aria-hidden="true">🌀</span><span>颱風動態</span></a>',
        '<a href="#v2-conditions" data-panel="v2-conditions"><span class="v2-nav-icon" aria-hidden="true">☀</span><span>天氣現況</span></a>',
        '<a href="#v2-earthquake" data-panel="v2-earthquake"><span class="v2-nav-icon" aria-hidden="true">⌁</span><span>地震資訊</span></a>',
        '<a href="#v2-monitor" data-panel="v2-monitor"><span class="v2-nav-icon" aria-hidden="true">⬡</span><span>災害地圖</span></a>',
      '</nav>',
      '<section id="v2-settings" class="v2-settings" aria-label="地區與應用程式設定">',
        '<div class="v2-settings-head"><b>地區與資料更新</b><button type="button" id="v2-settings-close" aria-label="關閉設定">✕</button></div>',
        '<div id="v2-region-box"></div>',
        '<details class="v2-drawer"><summary>防災通知與訂閱 <span>展開 ＋</span></summary><div class="v2-drawer-body" id="v2-alert-box"></div></details>',
        '<div class="v2-install"><button type="button" id="v2-install-app">＋ 安裝為手機 App（PWA）</button><p id="v2-install-hint">使用 Chrome 可安裝至手機主畫面。</p></div>',
      '</section>'
    ].join("");
    app.insertBefore(shell, app.firstChild);

    const column = shell.querySelector("#v2-content");
    function panel(id, selector) {
      const node = app.querySelector(selector);
      const section = document.createElement("section");
      section.id = id;
      section.className = "v2-panel";
      section.setAttribute("aria-label", ({
        "v2-notices": "停班停課",
        "v2-windy": "颱風動態",
        "v2-conditions": "天氣現況",
        "v2-earthquake": "地震資訊",
        "v2-monitor": "災害地圖"
      })[id]);
      if (node) section.appendChild(node);
      else section.innerHTML = '<p class="v2-empty">此服務暫時無法顯示，請稍後重試。</p>';
      column.appendChild(section);
      return section;
    }

    panel("v2-notices", ".closure-card");
    panel("v2-windy", ".typhoon-card");
    panel("v2-conditions", ".weather-block");
    panel("v2-earthquake", ".earthquake-card");
    panel("v2-monitor", ".map-card");
    // Keep existing controls and their original event handlers.
    const controls = app.querySelector(".controls");
    if (controls) shell.querySelector("#v2-region-box").appendChild(controls);
    const alerts = app.querySelector(".alert-block");
    if (alerts) shell.querySelector("#v2-alert-box").appendChild(alerts);
    const hero = app.querySelector(".hero");
    const locate = hero && hero.querySelector(".locate-wrap");
    if (locate && controls) controls.insertBefore(locate, controls.firstChild);

    const settings = shell.querySelector("#v2-settings");
    function openSettings() {
      settings.classList.add("is-open");
      document.getElementById("v2-settings-close").focus();
    }
    function closeSettings() { settings.classList.remove("is-open"); }
    document.getElementById("v2-change-place").addEventListener("click", openSettings);
    document.getElementById("v2-settings-close").addEventListener("click", closeSettings);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeSettings();
    });
    document.getElementById("v2-geolocate").addEventListener("click", () => {
      const button = document.getElementById("locateBtn");
      if (button) button.click();
      else openSettings();
    });
    document.getElementById("v2-refresh-top").addEventListener("click", () => {
      document.getElementById("refreshBtn")?.click();
    });

    function syncPlace() {
      const city = document.getElementById("citySelect");
      const town = document.getElementById("townshipSelect");
      const names = [city?.selectedOptions?.[0]?.textContent, town?.selectedOptions?.[0]?.textContent]
        .filter(x => x && !/選擇|請選/.test(x));
      document.getElementById("v2-place").textContent = names.join(" · ") || "請定位或選擇地區";
      const time = document.getElementById("lastUpdated")?.textContent?.trim();
      document.getElementById("v2-update").textContent = time || "尚未更新資料";
    }
    syncPlace();
    ["citySelect", "townshipSelect"].forEach(id => {
      document.getElementById(id)?.addEventListener("change", syncPlace);
    });
    const stamp = document.getElementById("lastUpdated");
    if (stamp) new MutationObserver(syncPlace).observe(stamp, { childList: true, subtree: true, characterData: true });
    // Some region updates are asynchronous after geolocation completes.
    setInterval(syncPlace, 8000);

    function activate(id) {
      if (!window.matchMedia("(max-width: 767px)").matches) return;
      shell.querySelectorAll(".v2-panel").forEach(p => {
        const active = p.id === id;
        p.classList.toggle("is-active", active);
        p.setAttribute("aria-hidden", String(!active));
      });
      shell.querySelectorAll(".v2-bottomnav a").forEach(a => {
        const active = a.dataset.panel === id;
        a.classList.toggle("is-active", active);
        if (active) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
      closeSettings();
      window.scrollTo(0, 0);
      // Leaflet/embedded map requires a resize once its panel becomes visible.
      window.setTimeout(() => window.dispatchEvent(new Event("resize")), 120);
      window.setTimeout(() => window.dispatchEvent(new Event("resize")), 500);
    }
    shell.querySelectorAll(".v2-bottomnav a").forEach(a => {
      a.addEventListener("click", event => {
        if (!window.matchMedia("(max-width: 767px)").matches) return;
        event.preventDefault();
        activate(a.dataset.panel);
      });
    });
    const initial = shell.querySelector(".v2-bottomnav a[href='" + location.hash + "']");
    activate(initial?.dataset.panel || "v2-notices");

    const install = document.getElementById("v2-install-app");
    const hint = document.getElementById("v2-install-hint");
    install?.addEventListener("click", async () => {
      const existing = document.getElementById("pwaInstallBtn");
      if (window.__jinPwaPrompt && typeof window.__jinPwaPrompt.prompt === "function") {
        const prompt = window.__jinPwaPrompt;
        window.__jinPwaPrompt = null;
        await prompt.prompt();
        hint.textContent = "請依 Chrome 安裝提示操作。";
      } else if (existing && !existing.disabled && !existing.hidden) {
        existing.click();
        hint.textContent = "已開啟安裝流程；若沒有提示，請使用 Chrome 選單。";
      } else if (window.matchMedia("(display-mode: standalone)").matches) {
        hint.textContent = "此裝置已以 App 模式開啟。";
      } else {
        hint.textContent = "請點 Chrome 右上角「⋮」→「安裝應用程式」或「加到主畫面」。";
      }
    });

    window.setTimeout(() => window.dispatchEvent(new Event("resize")), 650);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();