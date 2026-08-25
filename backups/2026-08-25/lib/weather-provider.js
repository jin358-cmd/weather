/**
 * Weather data provider interface.
 * Swap MockWeatherProvider with an API-backed implementation later.
 *
 * Future API endpoints (placeholders):
 * - getWeatherByCity(cityId)
 * - getAllCitiesWeather()
 * - getWeatherAlerts()
 * - getSuspensionStatuses()
 * - getNotificationHistory()
 */

import { MOCK_CITY_WEATHER, computeTaiwanSummary, CITIES } from "../data/weather.js";
import { MOCK_WEATHER_ALERTS } from "../data/alerts.js";
import { MOCK_SUSPENSIONS } from "../data/suspensions.js";
import { MOCK_NOTIFICATIONS } from "../data/notifications.js";

/**
 * @typedef {Object} SubscriptionSettings
 * @property {string[]} cityIds
 * @property {{ weatherAlert: boolean, suspension: boolean, heavyRain: boolean, typhoon: boolean }} types
 * @property {'immediate'|'hourly'|'daily'} frequency
 */

/** @type {SubscriptionSettings} */
const defaultSubscription = {
  cityIds: ["taipei", "newtaipei"],
  types: {
    weatherAlert: true,
    suspension: true,
    heavyRain: true,
    typhoon: true
  },
  frequency: "immediate"
};

/**
 * @returns {Promise<void>}
 */
function delay(ms = 180) {
  const timer = typeof globalThis !== "undefined" ? globalThis.setTimeout : setTimeout;
  return new Promise((resolve) => timer(resolve, ms));
}

function cloneData(value) {
  if (typeof globalThis.structuredClone === "function") {
    return globalThis.structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

export class MockWeatherProvider {
  constructor() {
    /** @type {SubscriptionSettings} */
    this._subscription = cloneData(defaultSubscription);
    this._lastUpdatedAt = new Date().toISOString();
  }

  async getAllCitiesWeather() {
    await delay();
    return cloneData(MOCK_CITY_WEATHER);
  }

  /**
   * @param {string} cityId
   */
  async getWeatherByCity(cityId) {
    await delay();
    const city = MOCK_CITY_WEATHER.find((item) => item.cityId === cityId);
    if (!city) {
      throw new Error(`找不到縣市資料：${cityId}`);
    }
    return cloneData(city);
  }

  async getWeatherAlerts() {
    await delay();
    return cloneData(MOCK_WEATHER_ALERTS);
  }

  async getSuspensionStatuses() {
    await delay();
    return cloneData(MOCK_SUSPENSIONS);
  }

  /**
   * @param {{ type?: string }} [filters]
   */
  async getNotificationHistory(filters = {}) {
    await delay();
    let rows = cloneData(MOCK_NOTIFICATIONS);
    if (filters.type && filters.type !== "all") {
      rows = rows.filter((item) => item.type === filters.type);
    }
    return rows.sort((a, b) => String(b.issuedAt).localeCompare(String(a.issuedAt)));
  }

  async getTaiwanOverview() {
    const [cities, alerts, suspensions] = await Promise.all([
      this.getAllCitiesWeather(),
      this.getWeatherAlerts(),
      this.getSuspensionStatuses()
    ]);
    return {
      cities,
      alerts,
      suspensions,
      summary: computeTaiwanSummary(cities, alerts, suspensions),
      lastUpdatedAt: this._lastUpdatedAt,
      citiesMeta: CITIES
    };
  }

  async getSubscriptionSettings() {
    await delay(80);
    return cloneData(this._subscription);
  }

  /**
   * @param {SubscriptionSettings} settings
   */
  async saveSubscriptionSettings(settings) {
    await delay(120);
    // Mock persistence only (in-memory). Replace with API POST later.
    this._subscription = cloneData(settings);
    return cloneData(this._subscription);
  }

  async refresh() {
    await delay(220);
    this._lastUpdatedAt = new Date().toISOString();
    return this.getTaiwanOverview();
  }
}

/** @type {MockWeatherProvider} */
let activeProvider = new MockWeatherProvider();

/**
 * Inject a custom provider (API-backed) without changing UI code.
 * @param {MockWeatherProvider} provider
 */
export function setWeatherProvider(provider) {
  activeProvider = provider;
}

export function getWeatherProvider() {
  return activeProvider;
}

// Named helpers matching the requested API surface.
export const getWeatherByCity = (cityId) => getWeatherProvider().getWeatherByCity(cityId);
export const getAllCitiesWeather = () => getWeatherProvider().getAllCitiesWeather();
export const getWeatherAlerts = () => getWeatherProvider().getWeatherAlerts();
export const getSuspensionStatuses = () => getWeatherProvider().getSuspensionStatuses();
export const getNotificationHistory = (filters) => getWeatherProvider().getNotificationHistory(filters);
