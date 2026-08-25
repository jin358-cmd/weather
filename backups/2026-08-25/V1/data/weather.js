/**
 * Mock weather datasets for Taiwan cities.
 * Replace via WeatherProvider when connecting to live APIs.
 */

/** @typedef {'clear'|'cloudy'|'rain'|'storm'|'fog'} WeatherCondition */

/**
 * @typedef {Object} HourlyForecast
 * @property {string} time
 * @property {number} tempC
 * @property {number} rainChance
 * @property {WeatherCondition} condition
 */

/**
 * @typedef {Object} DailyForecast
 * @property {string} date
 * @property {string} weekday
 * @property {number} highC
 * @property {number} lowC
 * @property {number} rainChance
 * @property {WeatherCondition} condition
 */

/**
 * @typedef {Object} CityWeather
 * @property {string} cityId
 * @property {string} cityName
 * @property {WeatherCondition} condition
 * @property {string} conditionLabel
 * @property {number} tempC
 * @property {number} feelsLikeC
 * @property {number} highC
 * @property {number} lowC
 * @property {number} rainChance
 * @property {number} humidity
 * @property {number} windSpeedMps
 * @property {string} windDirection
 * @property {string} updatedAt
 * @property {HourlyForecast[]} hourly
 * @property {DailyForecast[]} daily
 */

export const CITIES = [
  { id: "taipei", name: "臺北市" },
  { id: "newtaipei", name: "新北市" },
  { id: "taoyuan", name: "桃園市" },
  { id: "taichung", name: "臺中市" },
  { id: "tainan", name: "臺南市" },
  { id: "kaohsiung", name: "高雄市" },
  { id: "keelung", name: "基隆市" },
  { id: "hsinchu_city", name: "新竹市" },
  { id: "hsinchu_county", name: "新竹縣" },
  { id: "miaoli", name: "苗栗縣" },
  { id: "changhua", name: "彰化縣" },
  { id: "nantou", name: "南投縣" },
  { id: "yunlin", name: "雲林縣" },
  { id: "chiayi_city", name: "嘉義市" },
  { id: "chiayi_county", name: "嘉義縣" },
  { id: "pingtung", name: "屏東縣" },
  { id: "yilan", name: "宜蘭縣" },
  { id: "hualien", name: "花蓮縣" },
  { id: "taitung", name: "臺東縣" },
  { id: "penghu", name: "澎湖縣" },
  { id: "kinmen", name: "金門縣" },
  { id: "lienchiang", name: "連江縣" }
];

const CONDITION_LABELS = {
  clear: "晴",
  cloudy: "多雲",
  rain: "降雨",
  storm: "雷雨",
  fog: "霧"
};

/**
 * @param {string} cityId
 * @param {Partial<CityWeather>} overrides
 * @returns {CityWeather}
 */
function buildCityWeather(cityId, overrides = {}) {
  const city = CITIES.find((item) => item.id === cityId) || { id: cityId, name: cityId };
  const condition = overrides.condition || "cloudy";
  const baseTemp = overrides.tempC ?? 28;
  const hourly = overrides.hourly || Array.from({ length: 6 }, (_, index) => ({
    time: `${String((8 + index) % 24).padStart(2, "0")}:00`,
    tempC: baseTemp - (index % 3),
    rainChance: Math.min(95, (overrides.rainChance ?? 30) + index * 5),
    condition: index > 3 ? "rain" : condition
  }));
  const weekdays = ["一", "二", "三", "四", "五", "六", "日"];
  const daily = overrides.daily || Array.from({ length: 7 }, (_, index) => ({
    date: `08/${20 + index}`,
    weekday: `週${weekdays[index % 7]}`,
    highC: baseTemp + 2 - (index % 2),
    lowC: baseTemp - 5 - (index % 3),
    rainChance: Math.min(90, (overrides.rainChance ?? 30) + index * 4),
    condition: index === 2 || index === 5 ? "rain" : condition
  }));

  return {
    cityId: city.id,
    cityName: city.name,
    condition,
    conditionLabel: CONDITION_LABELS[condition] || "多雲",
    tempC: baseTemp,
    feelsLikeC: overrides.feelsLikeC ?? baseTemp + 1,
    highC: overrides.highC ?? baseTemp + 3,
    lowC: overrides.lowC ?? baseTemp - 5,
    rainChance: overrides.rainChance ?? 30,
    humidity: overrides.humidity ?? 68,
    windSpeedMps: overrides.windSpeedMps ?? 3.2,
    windDirection: overrides.windDirection ?? "東北風",
    updatedAt: overrides.updatedAt || "2026-08-20T12:00:00+08:00",
    hourly,
    daily,
    ...overrides,
    cityId: city.id,
    cityName: city.name,
    conditionLabel: CONDITION_LABELS[overrides.condition || condition] || "多雲"
  };
}

/** @type {CityWeather[]} */
export const MOCK_CITY_WEATHER = [
  buildCityWeather("taipei", { tempC: 31, rainChance: 40, condition: "cloudy", windDirection: "東風" }),
  buildCityWeather("newtaipei", { tempC: 30, rainChance: 45, condition: "rain" }),
  buildCityWeather("taoyuan", { tempC: 32, rainChance: 20, condition: "clear" }),
  buildCityWeather("taichung", { tempC: 33, rainChance: 15, condition: "clear", highC: 35 }),
  buildCityWeather("tainan", { tempC: 34, rainChance: 25, condition: "cloudy", highC: 36 }),
  buildCityWeather("kaohsiung", { tempC: 33, rainChance: 35, condition: "rain" }),
  buildCityWeather("keelung", { tempC: 28, rainChance: 70, condition: "rain" }),
  buildCityWeather("hsinchu_city", { tempC: 31, rainChance: 25, condition: "cloudy" }),
  buildCityWeather("hsinchu_county", { tempC: 30, rainChance: 30, condition: "cloudy" }),
  buildCityWeather("miaoli", { tempC: 31, rainChance: 20, condition: "clear" }),
  buildCityWeather("changhua", { tempC: 32, rainChance: 18, condition: "clear" }),
  buildCityWeather("nantou", { tempC: 29, rainChance: 40, condition: "cloudy" }),
  buildCityWeather("yunlin", { tempC: 32, rainChance: 22, condition: "cloudy" }),
  buildCityWeather("chiayi_city", { tempC: 33, rainChance: 28, condition: "cloudy" }),
  buildCityWeather("chiayi_county", { tempC: 32, rainChance: 30, condition: "rain" }),
  buildCityWeather("pingtung", { tempC: 33, rainChance: 50, condition: "storm" }),
  buildCityWeather("yilan", { tempC: 27, rainChance: 75, condition: "rain" }),
  buildCityWeather("hualien", { tempC: 28, rainChance: 60, condition: "rain" }),
  buildCityWeather("taitung", { tempC: 30, rainChance: 55, condition: "cloudy" }),
  buildCityWeather("penghu", { tempC: 29, rainChance: 35, condition: "cloudy", windSpeedMps: 7.5 }),
  buildCityWeather("kinmen", { tempC: 30, rainChance: 10, condition: "clear" }),
  buildCityWeather("lienchiang", { tempC: 27, rainChance: 20, condition: "fog" })
];

/**
 * @returns {{ alertCityCount: number, suspensionCityCount: number, maxTempC: number, avgRainChance: number }}
 */
export function computeTaiwanSummary(cities = MOCK_CITY_WEATHER, alerts = [], suspensions = []) {
  const alertCityIds = new Set(alerts.flatMap((alert) => alert.cityIds || []));
  const suspensionCityIds = new Set(
    suspensions
      .filter((row) => row.workStatus === "suspended" || row.schoolStatus === "suspended")
      .map((row) => row.cityId)
  );
  const maxTempC = Math.max(...cities.map((city) => city.tempC));
  const avgRainChance = Math.round(
    cities.reduce((sum, city) => sum + city.rainChance, 0) / Math.max(1, cities.length)
  );
  return {
    alertCityCount: alertCityIds.size,
    suspensionCityCount: suspensionCityIds.size,
    maxTempC,
    avgRainChance
  };
}
