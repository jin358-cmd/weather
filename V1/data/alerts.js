/**
 * Mock weather alert datasets.
 */

/**
 * @typedef {'info'|'watch'|'warning'|'severe'} AlertLevel
 *
 * @typedef {Object} WeatherAlert
 * @property {string} id
 * @property {string} type
 * @property {string} title
 * @property {string[]} cityIds
 * @property {string[]} cityNames
 * @property {string} issuedAt
 * @property {AlertLevel} level
 * @property {string} summary
 */

/** @type {WeatherAlert[]} */
export const MOCK_WEATHER_ALERTS = [
  {
    id: "alert-rain-north",
    type: "大雨特報",
    title: "北部地區大雨特報",
    cityIds: ["keelung", "taipei", "newtaipei", "yilan"],
    cityNames: ["基隆市", "臺北市", "新北市", "宜蘭縣"],
    issuedAt: "2026-08-20T09:30:00+08:00",
    level: "warning",
    summary: "午後對流發展，留意瞬間大雨、雷擊與強陣風。"
  },
  {
    id: "alert-typhoon-watch",
    type: "颱風警報",
    title: "海上陸上颱風警報（警戒）",
    cityIds: ["pingtung", "kaohsiung", "taitung"],
    cityNames: ["屏東縣", "高雄市", "臺東縣"],
    issuedAt: "2026-08-20T08:00:00+08:00",
    level: "severe",
    summary: "外圍環流影響，沿海與山區請加強防颱整備。"
  },
  {
    id: "alert-heat",
    type: "高溫資訊",
    title: "中南部高溫資訊",
    cityIds: ["taichung", "tainan", "chiayi_city", "chiayi_county"],
    cityNames: ["臺中市", "臺南市", "嘉義市", "嘉義縣"],
    issuedAt: "2026-08-20T07:15:00+08:00",
    level: "watch",
    summary: "白天高溫可達 35°C 以上，請注意防曬與補水。"
  },
  {
    id: "alert-fog",
    type: "濃霧特報",
    title: "金馬地區濃霧特報",
    cityIds: ["lienchiang", "kinmen"],
    cityNames: ["連江縣", "金門縣"],
    issuedAt: "2026-08-20T06:40:00+08:00",
    level: "info",
    summary: "能見度局部偏低，用路請減速並保持安全車距。"
  }
];
