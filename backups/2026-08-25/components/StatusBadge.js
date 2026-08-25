import { iconSvg } from "./icons.js";

/**
 * @param {{ tone?: string, label: string, title?: string }} props
 */
export function StatusBadge({ tone = "neutral", label, title = "" }) {
  return `<span class="status-badge status-badge--${tone}" title="${escapeAttr(title || label)}">${escapeHtml(label)}</span>`;
}

export function EmptyState({ title = "目前沒有資料", description = "", actionHtml = "" } = {}) {
  return `
    <div class="empty-state" role="status">
      <div class="empty-state__icon" aria-hidden="true">${iconSvg("empty", { size: 36 })}</div>
      <h3 class="empty-state__title">${escapeHtml(title)}</h3>
      ${description ? `<p class="empty-state__desc">${escapeHtml(description)}</p>` : ""}
      ${actionHtml}
    </div>
  `;
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

export function formatDateTime(iso) {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return String(iso);
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}

export function alertLevelMeta(level) {
  const map = {
    info: { tone: "info", label: "資訊" },
    watch: { tone: "watch", label: "注意" },
    warning: { tone: "warning", label: "警戒" },
    severe: { tone: "severe", label: "嚴重" }
  };
  return map[level] || map.info;
}

export function suspensionMeta(status) {
  const map = {
    normal: { tone: "ok", label: "照常" },
    suspended: { tone: "danger", label: "停止" },
    delayed: { tone: "watch", label: "延後" },
    none: { tone: "neutral", label: "未公告" }
  };
  return map[status] || map.none;
}
