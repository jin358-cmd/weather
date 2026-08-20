import { iconSvg } from "./icons.js";
import { escapeHtml, formatDateTime } from "./StatusBadge.js";

export function DashboardHeader({ title, lastUpdatedAt, refreshing = false }) {
  return `
    <header class="dash-header" role="banner">
      <div class="dash-header__brand">
        <p class="dash-header__eyebrow">Taiwan Weather Dashboard</p>
        <h1 class="dash-header__title">${escapeHtml(title)}</h1>
      </div>
      <div class="dash-header__actions">
        <p class="dash-header__updated" id="lastUpdatedLabel">
          最後更新：<time datetime="${escapeHtml(lastUpdatedAt || "")}">${escapeHtml(formatDateTime(lastUpdatedAt))}</time>
        </p>
        <button
          type="button"
          id="refreshDashboardBtn"
          class="btn btn--primary btn--touch"
          aria-label="更新全台天氣與停班停課資料"
          ${refreshing ? "disabled" : ""}
        >
          ${iconSvg("refresh", { size: 18 })}
          <span>${refreshing ? "更新中…" : "資料更新"}</span>
        </button>
      </div>
    </header>
  `;
}
