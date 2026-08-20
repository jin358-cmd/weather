import { weatherIcon } from "./icons.js";
import { CitySelector } from "./CitySelector.js";
import { AlertCard } from "./AlertCard.js";
import { SuspensionTable } from "./SuspensionTable.js";
import { EmptyState, escapeHtml, formatDateTime, alertLevelMeta } from "./StatusBadge.js";

export function CityDetail({ weather, alerts = [], suspensions = [], selectedCityId }) {
  if (!weather) {
    return EmptyState({ title: "找不到縣市天氣", description: "請重新選擇縣市。" });
  }

  const cityAlerts = alerts.filter((alert) => alert.cityIds.includes(weather.cityId));
  const citySuspensions = suspensions.filter((row) => row.cityId === weather.cityId);

  return `
    <section class="city-detail" aria-label="${escapeHtml(weather.cityName)}詳情">
      ${CitySelector({ selectedCityId: selectedCityId || weather.cityId, id: "cityDetailSelect", label: "縣市詳情" })}

      <div class="city-detail__now card-panel">
        <div class="city-detail__now-main">
          <div class="city-detail__icon" aria-hidden="true">${weatherIcon(weather.condition, 48)}</div>
          <div>
            <h2 class="city-detail__name">${escapeHtml(weather.cityName)}</h2>
            <p class="city-detail__condition">${escapeHtml(weather.conditionLabel)}</p>
            <p class="city-detail__updated">資料時間：${escapeHtml(formatDateTime(weather.updatedAt))}</p>
          </div>
        </div>
        <p class="city-detail__temp">${weather.tempC}<span>°C</span></p>
        <dl class="city-detail__stats">
          <div><dt>體感溫度</dt><dd>${weather.feelsLikeC}°C</dd></div>
          <div><dt>最高／最低</dt><dd>${weather.highC}° / ${weather.lowC}°</dd></div>
          <div><dt>降雨機率</dt><dd>${weather.rainChance}%</dd></div>
          <div><dt>風速／風向</dt><dd>${weather.windSpeedMps} m/s・${escapeHtml(weather.windDirection)}</dd></div>
          <div><dt>濕度</dt><dd>${weather.humidity}%</dd></div>
        </dl>
      </div>

      <section class="card-panel" aria-label="未來 6 小時預報">
        <h3 class="section-title section-title--sm">未來 6 小時預報</h3>
        <ul class="forecast-hourly">
          ${weather.hourly
            .map(
              (hour) => `
            <li>
              <span>${escapeHtml(hour.time)}</span>
              <span aria-hidden="true">${weatherIcon(hour.condition, 20)}</span>
              <strong>${hour.tempC}°</strong>
              <span>雨 ${hour.rainChance}%</span>
            </li>`
            )
            .join("")}
        </ul>
      </section>

      <section class="card-panel" aria-label="未來 7 天預報">
        <h3 class="section-title section-title--sm">未來 7 天預報</h3>
        <div class="table-scroll" tabindex="0" aria-label="七日預報表，可左右滑動">
          <table class="forecast-daily-table">
            <thead>
              <tr>
                <th scope="col">日期</th>
                <th scope="col">天氣</th>
                <th scope="col">高／低溫</th>
                <th scope="col">降雨機率</th>
              </tr>
            </thead>
            <tbody>
              ${weather.daily
                .map(
                  (day) => `
                <tr>
                  <th scope="row">${escapeHtml(day.weekday)} ${escapeHtml(day.date)}</th>
                  <td><span class="forecast-daily-wx">${weatherIcon(day.condition, 18)} ${escapeHtml(day.condition === "clear" ? "晴" : day.condition === "rain" ? "雨" : day.condition === "storm" ? "雷雨" : day.condition === "fog" ? "霧" : "多雲")}</span></td>
                  <td>${day.highC}° / ${day.lowC}°</td>
                  <td>${day.rainChance}%</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="card-panel" aria-label="該縣市警特報">
        <h3 class="section-title section-title--sm">該縣市警特報</h3>
        ${
          cityAlerts.length
            ? cityAlerts
                .map((alert) => {
                  const level = alertLevelMeta(alert.level);
                  return `
                  <div class="city-detail__alert-row">
                    ${AlertCard({ alert })}
                    <p class="sr-only">等級 ${level.label}</p>
                  </div>`;
                })
                .join("")
            : EmptyState({ title: "此縣市目前無警特報" })
        }
      </section>

      <section class="card-panel" aria-label="該縣市停班停課公告">
        <h3 class="section-title section-title--sm">該縣市停班停課公告</h3>
        ${
          citySuspensions.length
            ? SuspensionTable({ rows: citySuspensions })
            : EmptyState({ title: "此縣市尚未有停班停課公告" })
        }
      </section>
    </section>
  `;
}
