import { weatherIcon } from "./icons.js";
import { StatusBadge, escapeHtml, suspensionMeta, alertLevelMeta } from "./StatusBadge.js";

/**
 * City weather card for overview grid.
 */
export function WeatherCard({ weather, alertLevel = null, suspension = null, onSelectAttr = "" }) {
  const alertMeta = alertLevel ? alertLevelMeta(alertLevel) : { tone: "neutral", label: "無警報" };
  const work = suspensionMeta(suspension?.workStatus || "none");
  const school = suspensionMeta(suspension?.schoolStatus || "none");

  return `
    <article class="weather-card" ${onSelectAttr}>
      <header class="weather-card__head">
        <h3 class="weather-card__city">${escapeHtml(weather.cityName)}</h3>
        <div class="weather-card__icon" aria-hidden="true">${weatherIcon(weather.condition, 26)}</div>
      </header>
      <p class="weather-card__temp"><span class="weather-card__temp-value">${weather.tempC}</span><span class="weather-card__unit">°C</span></p>
      <p class="weather-card__condition">${escapeHtml(weather.conditionLabel)}</p>
      <dl class="weather-card__meta">
        <div><dt>降雨機率</dt><dd>${weather.rainChance}%</dd></div>
        <div><dt>警特報</dt><dd>${StatusBadge(alertMeta)}</dd></div>
        <div><dt>上班</dt><dd>${StatusBadge(work)}</dd></div>
        <div><dt>上課</dt><dd>${StatusBadge(school)}</dd></div>
      </dl>
      <button type="button" class="weather-card__action" data-city-id="${escapeHtml(weather.cityId)}" aria-label="查看${escapeHtml(weather.cityName)}詳情">
        查看詳情
      </button>
    </article>
  `;
}
