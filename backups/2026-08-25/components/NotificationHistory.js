import {
  NOTIFICATION_STATUS_LABELS,
  NOTIFICATION_TYPE_LABELS
} from "../data/notifications.js";
import { EmptyState, StatusBadge, escapeHtml, formatDateTime } from "./StatusBadge.js";

function statusTone(status) {
  if (status === "sent" || status === "read") return "ok";
  if (status === "pending") return "watch";
  if (status === "failed") return "danger";
  return "neutral";
}

export function NotificationHistory({ items, activeType = "all" }) {
  const filters = [
    { value: "all", label: "全部" },
    { value: "weather-alert", label: "天氣警特報" },
    { value: "suspension", label: "停班停課" },
    { value: "heavy-rain", label: "大雨或豪雨" },
    { value: "typhoon", label: "颱風" }
  ];

  return `
    <section class="notification-history" aria-label="通知歷史">
      <div class="notification-history__toolbar">
        <h2 class="section-title">通知歷史</h2>
        <div class="filter-chips" role="group" aria-label="篩選通知類型">
          ${filters
            .map(
              (filter) => `
            <button
              type="button"
              class="filter-chip ${activeType === filter.value ? "is-active" : ""}"
              data-notify-filter="${escapeHtml(filter.value)}"
              aria-pressed="${activeType === filter.value ? "true" : "false"}"
              aria-label="篩選：${escapeHtml(filter.label)}"
            >${escapeHtml(filter.label)}</button>`
            )
            .join("")}
        </div>
      </div>

      ${
        !items?.length
          ? EmptyState({ title: "沒有符合的通知", description: "請調整篩選條件或稍後再查看。" })
          : `<ul class="notification-list">
            ${items
              .map((item) => {
                const typeLabel = NOTIFICATION_TYPE_LABELS[item.type] || item.type;
                const statusLabel = NOTIFICATION_STATUS_LABELS[item.status] || item.status;
                return `
                <li class="notification-item card-panel">
                  <div class="notification-item__top">
                    ${StatusBadge({ tone: "info", label: typeLabel })}
                    ${StatusBadge({ tone: statusTone(item.status), label: statusLabel })}
                  </div>
                  <h3 class="notification-item__title">${escapeHtml(item.title)}</h3>
                  <p class="notification-item__cities">影響縣市：${escapeHtml(item.cityNames.join("、"))}</p>
                  <p class="notification-item__time">發布時間：${escapeHtml(formatDateTime(item.issuedAt))}</p>
                  ${item.body ? `<p class="notification-item__body">${escapeHtml(item.body)}</p>` : ""}
                </li>`;
              })
              .join("")}
          </ul>`
      }
    </section>
  `;
}
