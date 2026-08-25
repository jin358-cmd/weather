import { CITIES } from "../data/weather.js";
import { escapeHtml } from "./StatusBadge.js";
import { iconSvg } from "./icons.js";

/**
 * @param {{ settings: import('../lib/weather-provider.js').SubscriptionSettings, message?: string }} props
 */
export function SubscriptionPanel({ settings, message = "" }) {
  const typeOptions = [
    { key: "weatherAlert", label: "天氣警特報" },
    { key: "suspension", label: "停班停課" },
    { key: "heavyRain", label: "大雨或豪雨" },
    { key: "typhoon", label: "颱風" }
  ];

  return `
    <section class="subscription-panel card-panel" aria-label="訂閱設定">
      <h2 class="section-title">訂閱設定</h2>
      <p class="panel-lead">選擇關注縣市與通知類型。目前為 mock state，之後可接正式 API。</p>

      <form id="subscriptionForm" class="subscription-form" novalidate>
        <fieldset class="subscription-fieldset">
          <legend>關注縣市</legend>
          <div class="subscription-cities" role="group" aria-label="選擇關注縣市">
            ${CITIES.map((city) => {
              const checked = settings.cityIds.includes(city.id) ? "checked" : "";
              return `
                <label class="check-pill">
                  <input type="checkbox" name="cityIds" value="${escapeHtml(city.id)}" ${checked} aria-label="${escapeHtml(city.name)}" />
                  <span>${escapeHtml(city.name)}</span>
                </label>`;
            }).join("")}
          </div>
        </fieldset>

        <fieldset class="subscription-fieldset">
          <legend>通知類型</legend>
          <div class="subscription-types">
            ${typeOptions
              .map((option) => {
                const checked = settings.types[option.key] ? "checked" : "";
                return `
                <label class="check-row">
                  <input type="checkbox" name="types" value="${escapeHtml(option.key)}" ${checked} aria-label="${escapeHtml(option.label)}" />
                  <span>${escapeHtml(option.label)}</span>
                </label>`;
              })
              .join("")}
          </div>
        </fieldset>

        <div class="form-field">
          <label for="notifyFrequency">通知頻率</label>
          <select id="notifyFrequency" name="frequency" aria-label="通知頻率選擇">
            <option value="immediate" ${settings.frequency === "immediate" ? "selected" : ""}>即時推播</option>
            <option value="hourly" ${settings.frequency === "hourly" ? "selected" : ""}>每小時摘要</option>
            <option value="daily" ${settings.frequency === "daily" ? "selected" : ""}>每日一次</option>
          </select>
        </div>

        <button type="submit" class="btn btn--primary btn--touch" aria-label="儲存訂閱設定">
          ${iconSvg("check", { size: 18 })}
          <span>儲存設定</span>
        </button>
        ${message ? `<p class="form-message" role="status">${escapeHtml(message)}</p>` : ""}
      </form>
    </section>
  `;
}
