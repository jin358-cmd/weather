import { CITIES } from "../data/weather.js";
import { escapeHtml } from "./StatusBadge.js";

/**
 * @param {{ selectedCityId: string, id?: string, label?: string, includeAll?: boolean }} props
 */
export function CitySelector({
  selectedCityId,
  id = "cityDetailSelect",
  label = "選擇縣市",
  includeAll = false,
  cities = CITIES
}) {
  return `
    <div class="city-selector">
      <label class="city-selector__label" for="${escapeHtml(id)}">${escapeHtml(label)}</label>
      <select id="${escapeHtml(id)}" class="city-selector__select" aria-label="${escapeHtml(label)}">
        ${includeAll ? `<option value="all">全部縣市</option>` : ""}
        ${cities
          .map(
            (city) =>
              `<option value="${escapeHtml(city.id)}" ${city.id === selectedCityId ? "selected" : ""}>${escapeHtml(city.name)}</option>`
          )
          .join("")}
      </select>
    </div>
  `;
}
