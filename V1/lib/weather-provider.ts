/**
 * TypeScript contract for weather data providers.
 * Runtime implementation: ./weather-provider.js (ES module for GitHub Pages).
 * Swap MockWeatherProvider with an HTTP-backed class without changing UI code.
 */

export type WeatherCondition = "clear" | "cloudy" | "rain" | "storm" | "fog";
export type AlertLevel = "info" | "watch" | "warning" | "severe";
export type SuspensionStatus = "normal" | "suspended" | "delayed" | "none";
export type NotificationType = "weather-alert" | "suspension" | "heavy-rain" | "typhoon";
export type NotificationStatus = "sent" | "failed" | "pending" | "read";

export interface CityWeather {
  cityId: string;
  cityName: string;
  condition: WeatherCondition;
  conditionLabel: string;
  tempC: number;
  feelsLikeC: number;
  highC: number;
  lowC: number;
  rainChance: number;
  humidity: number;
  windSpeedMps: number;
  windDirection: string;
  updatedAt: string;
  hourly: Array<{ time: string; tempC: number; rainChance: number; condition: WeatherCondition }>;
  daily: Array<{ date: string; weekday: string; highC: number; lowC: number; rainChance: number; condition: WeatherCondition }>;
}

export interface WeatherAlert {
  id: string;
  type: string;
  title: string;
  cityIds: string[];
  cityNames: string[];
  issuedAt: string;
  level: AlertLevel;
  summary: string;
}

export interface SuspensionRow {
  id: string;
  cityId: string;
  cityName: string;
  workStatus: SuspensionStatus;
  schoolStatus: SuspensionStatus;
  announcedAt: string;
  source: string;
  note?: string;
}

export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  cityNames: string[];
  issuedAt: string;
  status: NotificationStatus;
  body?: string;
}

export interface SubscriptionSettings {
  cityIds: string[];
  types: {
    weatherAlert: boolean;
    suspension: boolean;
    heavyRain: boolean;
    typhoon: boolean;
  };
  frequency: "immediate" | "hourly" | "daily";
}

export interface WeatherProvider {
  getWeatherByCity(cityId: string): Promise<CityWeather>;
  getAllCitiesWeather(): Promise<CityWeather[]>;
  getWeatherAlerts(): Promise<WeatherAlert[]>;
  getSuspensionStatuses(): Promise<SuspensionRow[]>;
  getNotificationHistory(filters?: { type?: string }): Promise<NotificationItem[]>;
  getSubscriptionSettings(): Promise<SubscriptionSettings>;
  saveSubscriptionSettings(settings: SubscriptionSettings): Promise<SubscriptionSettings>;
  getTaiwanOverview(): Promise<{
    cities: CityWeather[];
    alerts: WeatherAlert[];
    suspensions: SuspensionRow[];
    summary: {
      alertCityCount: number;
      suspensionCityCount: number;
      maxTempC: number;
      avgRainChance: number;
    };
    lastUpdatedAt: string;
  }>;
  refresh(): Promise<ReturnType<WeatherProvider["getTaiwanOverview"]>>;
}

export declare function getWeatherByCity(cityId: string): Promise<CityWeather>;
export declare function getAllCitiesWeather(): Promise<CityWeather[]>;
export declare function getWeatherAlerts(): Promise<WeatherAlert[]>;
export declare function getSuspensionStatuses(): Promise<SuspensionRow[]>;
export declare function getNotificationHistory(filters?: { type?: string }): Promise<NotificationItem[]>;
export declare function getWeatherProvider(): WeatherProvider;
export declare function setWeatherProvider(provider: WeatherProvider): void;
