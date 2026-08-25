import { escapeHtml } from "./StatusBadge.js";

export function WeatherSummary({ summary }) {
  const items = [
    { key: "alerts", label: "有警特報縣市", value: summary.alertCityCount, unit: "縣市", tone: "warning" },
    { key: "suspensions", label: "已公告停班停課", value: summary.suspensionCityCount, unit: "縣市", tone: "danger" },
    { key: "maxTemp", label: "全台最高溫", value: summary.maxTempC, unit: "°C", tone: "info" },
    { key: "rain", label: "全台平均降雨機率", value: summary.avgRainChance, unit: "%", tone: "ok" }
  ];

  return `
    <section class="weather-summary" aria-label="全台摘要">
      <h2 class="section-title">全台摘要</h2>
      <ul class="weather-summary__grid">
        ${items
          .map(
            (item) => `
          <li class="weather-summary__item weather-summary__item--${item.tone}">
            <p class="weather-summary__label">${escapeHtml(item.label)}</p>
            <p class="weather-summary__value">
              <span>${item.value}</span>
              <small>${escapeHtml(item.unit)}</small>
            </p>
          </li>`
          )
          .join("")}
      </ul>
    </section>
  `;
}
