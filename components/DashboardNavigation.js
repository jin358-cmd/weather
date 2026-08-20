import { iconSvg } from "./icons.js";
import { escapeHtml } from "./StatusBadge.js";

const NAV_ITEMS = [
  { id: "city", label: "縣市詳情", icon: "city" },
  { id: "subscription", label: "訂閱設定", icon: "bell" },
  { id: "history", label: "通知歷史", icon: "history" }
];

export function DashboardNavigation({ activeView = "city", variant = "side" }) {
  return `
    <nav class="dash-nav dash-nav--${variant}" aria-label="主要導覽">
      <ul class="dash-nav__list">
        ${NAV_ITEMS.map((item) => {
          const active = item.id === activeView;
          return `
            <li>
              <button
                type="button"
                class="dash-nav__link ${active ? "is-active" : ""}"
                data-view="${escapeHtml(item.id)}"
                aria-current="${active ? "page" : "false"}"
                aria-label="${escapeHtml(item.label)}"
              >
                <span class="dash-nav__icon" aria-hidden="true">${iconSvg(item.icon, { size: 20 })}</span>
                <span class="dash-nav__label">${escapeHtml(item.label)}</span>
              </button>
            </li>`;
        }).join("")}
      </ul>
    </nav>
  `;
}

export { NAV_ITEMS };
