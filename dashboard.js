import { getWeatherProvider } from "./lib/weather-provider.js";
import { DashboardHeader } from "./components/DashboardHeader.js";
import { DashboardNavigation } from "./components/DashboardNavigation.js";
import { CityDetail } from "./components/CityDetail.js";
import { SubscriptionPanel } from "./components/SubscriptionPanel.js";
import { NotificationHistory } from "./components/NotificationHistory.js";
import { EmptyState } from "./components/StatusBadge.js";

const state = {
  view: "city",
  selectedCityId: "taipei",
  notifyFilter: "all",
  overview: null,
  subscription: null,
  notifications: [],
  subscriptionMessage: "",
  refreshing: false,
  loading: true,
  error: ""
};

const provider = getWeatherProvider();

function byCityId(list, cityId) {
  return list?.find((item) => item.cityId === cityId) || null;
}

function renderShell() {
  const app = document.querySelector("#dashboardApp");
  if (!app) return;

  const lastUpdatedAt = state.overview?.lastUpdatedAt || "";
  app.innerHTML = `
    <div class="dash-layout">
      <aside class="dash-sidebar" aria-label="側邊導覽">
        <div class="dash-sidebar__brand">
          <strong>災防天氣平台</strong>
          <span>縣市詳情與訂閱</span>
        </div>
        ${DashboardNavigation({ activeView: state.view, variant: "side" })}
        <p class="dash-sidebar__legacy">
          <a class="legacy-link" href="./index.html" aria-label="返回滾動式首頁">← 滾動式首頁</a>
          <a class="legacy-link" href="./legacy.html" aria-label="開啟即時災害通報舊版頁面">即時災害通報（舊版）</a>
        </p>
      </aside>

      <div class="dash-main">
        ${DashboardHeader({
          title: "天氣與停班停課資訊",
          lastUpdatedAt,
          refreshing: state.refreshing
        })}
        <main id="dashboardView" class="dash-view" aria-live="polite"></main>
      </div>

      <div class="dash-mobile-nav">
        ${DashboardNavigation({ activeView: state.view, variant: "bottom" })}
      </div>
    </div>
  `;

  bindShellEvents();
  renderView();
}

function renderView() {
  const viewRoot = document.querySelector("#dashboardView");
  if (!viewRoot) return;

  if (state.loading) {
    viewRoot.innerHTML = `<p class="loading-state" role="status">資料載入中…</p>`;
    return;
  }

  if (state.error) {
    viewRoot.innerHTML = EmptyState({
      title: "資料載入失敗",
      description: state.error,
      actionHtml: `<button type="button" class="btn btn--primary btn--touch" id="retryLoadBtn" aria-label="重新載入資料">重新載入</button>`
    });
    document.querySelector("#retryLoadBtn")?.addEventListener("click", () => loadAll());
    return;
  }

  if (state.view === "subscription") {
    viewRoot.innerHTML = SubscriptionPanel({
      settings: state.subscription,
      message: state.subscriptionMessage
    });
  } else if (state.view === "history") {
    viewRoot.innerHTML = NotificationHistory({
      items: state.notifications,
      activeType: state.notifyFilter
    });
  } else {
    const weather = byCityId(state.overview.cities, state.selectedCityId);
    viewRoot.innerHTML = CityDetail({
      weather,
      alerts: state.overview.alerts,
      suspensions: state.overview.suspensions,
      selectedCityId: state.selectedCityId
    });
  }

  bindViewEvents();
}

function bindShellEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = button.getAttribute("data-view");
      if (!next || next === state.view) return;
      state.view = next;
      state.subscriptionMessage = "";
      renderShell();
    });
  });

  document.querySelector("#refreshDashboardBtn")?.addEventListener("click", async () => {
    state.refreshing = true;
    renderShell();
    try {
      state.overview = await provider.refresh();
      state.notifications = await provider.getNotificationHistory({ type: state.notifyFilter });
      state.error = "";
    } catch (error) {
      state.error = error.message || "更新失敗";
    } finally {
      state.refreshing = false;
      renderShell();
    }
  });
}

function bindViewEvents() {
  document.querySelectorAll("[data-city-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCityId = button.getAttribute("data-city-id");
      state.view = "city";
      renderShell();
    });
  });

  document.querySelector("#cityDetailSelect")?.addEventListener("change", (event) => {
    state.selectedCityId = event.target.value;
    renderView();
  });

  document.querySelector("#subscriptionForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const cityIds = [...form.querySelectorAll('input[name="cityIds"]:checked')].map((input) => input.value);
    const typeValues = new Set(
      [...form.querySelectorAll('input[name="types"]:checked')].map((input) => input.value)
    );
    const frequency = form.querySelector("#notifyFrequency")?.value || "immediate";
    const payload = {
      cityIds,
      types: {
        weatherAlert: typeValues.has("weatherAlert"),
        suspension: typeValues.has("suspension"),
        heavyRain: typeValues.has("heavyRain"),
        typhoon: typeValues.has("typhoon")
      },
      frequency
    };
    state.subscription = await provider.saveSubscriptionSettings(payload);
    state.subscriptionMessage = "設定已儲存（目前為 mock state，尚未寫入遠端 API）。";
    renderView();
  });

  document.querySelectorAll("[data-notify-filter]").forEach((button) => {
    button.addEventListener("click", async () => {
      state.notifyFilter = button.getAttribute("data-notify-filter") || "all";
      state.notifications = await provider.getNotificationHistory({ type: state.notifyFilter });
      renderView();
    });
  });
}

async function loadAll() {
  state.loading = true;
  state.error = "";
  renderShell();
  try {
    const [overview, subscription, notifications] = await Promise.all([
      provider.getTaiwanOverview(),
      provider.getSubscriptionSettings(),
      provider.getNotificationHistory({ type: state.notifyFilter })
    ]);
    state.overview = overview;
    state.subscription = subscription;
    state.notifications = notifications;
  } catch (error) {
    state.error = error?.message || "無法載入資料";
  } finally {
    state.loading = false;
    renderShell();
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    loadAll();
  });
}
