import { StatusBadge, escapeHtml, formatDateTime, alertLevelMeta, EmptyState } from "./StatusBadge.js";
import { iconSvg } from "./icons.js";

export function AlertCard({ alert }) {
  const level = alertLevelMeta(alert.level);
  return `
    <article class="alert-card alert-card--${alert.level}" aria-label="${escapeHtml(alert.title)}">
      <div class="alert-card__icon" aria-hidden="true">${iconSvg("alert", { size: 22 })}</div>
      <div class="alert-card__body">
        <div class="alert-card__top">
          <h3 class="alert-card__title">${escapeHtml(alert.title)}</h3>
          ${StatusBadge({ ...level, title: `警示等級：${level.label}` })}
        </div>
        <p class="alert-card__type">警報類型：${escapeHtml(alert.type)}</p>
        <p class="alert-card__cities">影響縣市：${escapeHtml(alert.cityNames.join("、"))}</p>
        <p class="alert-card__time">發布時間：${escapeHtml(formatDateTime(alert.issuedAt))}</p>
        <p class="alert-card__summary">${escapeHtml(alert.summary)}</p>
      </div>
    </article>
  `;
}

export function AlertCardList({ alerts }) {
  if (!alerts?.length) {
    return EmptyState({ title: "目前無天氣警特報", description: "全台暫無生效中的警特報。" });
  }
  return `
    <section class="alert-card-list" aria-label="天氣警特報">
      <h2 class="section-title">天氣警特報</h2>
      <div class="alert-card-list__items">
        ${alerts.map((alert) => AlertCard({ alert })).join("")}
      </div>
    </section>
  `;
}
