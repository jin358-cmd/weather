/**
 * Mock school / work suspension datasets.
 */

/**
 * @typedef {'normal'|'suspended'|'delayed'|'none'} SuspensionStatus
 *
 * @typedef {Object} SuspensionRow
 * @property {string} id
 * @property {string} cityId
 * @property {string} cityName
 * @property {SuspensionStatus} workStatus
 * @property {SuspensionStatus} schoolStatus
 * @property {string} announcedAt
 * @property {string} source
 * @property {string} [note]
 */

/** @type {SuspensionRow[]} */
export const MOCK_SUSPENSIONS = [
  {
    id: "sus-pingtung",
    cityId: "pingtung",
    cityName: "屏東縣",
    workStatus: "suspended",
    schoolStatus: "suspended",
    announcedAt: "2026-08-20T05:20:00+08:00",
    source: "屏東縣政府",
    note: "全縣停班停課"
  },
  {
    id: "sus-kaohsiung",
    cityId: "kaohsiung",
    cityName: "高雄市",
    workStatus: "delayed",
    schoolStatus: "suspended",
    announcedAt: "2026-08-20T05:35:00+08:00",
    source: "高雄市政府",
    note: "停課；上班延後至 10:00"
  },
  {
    id: "sus-taitung",
    cityId: "taitung",
    cityName: "臺東縣",
    workStatus: "suspended",
    schoolStatus: "suspended",
    announcedAt: "2026-08-20T05:10:00+08:00",
    source: "臺東縣政府",
    note: "全縣停班停課"
  },
  {
    id: "sus-yilan",
    cityId: "yilan",
    cityName: "宜蘭縣",
    workStatus: "normal",
    schoolStatus: "delayed",
    announcedAt: "2026-08-20T06:00:00+08:00",
    source: "宜蘭縣政府",
    note: "上課延後至 09:00"
  },
  {
    id: "sus-taipei",
    cityId: "taipei",
    cityName: "臺北市",
    workStatus: "none",
    schoolStatus: "none",
    announcedAt: "",
    source: "—",
    note: "尚未公告"
  },
  {
    id: "sus-newtaipei",
    cityId: "newtaipei",
    cityName: "新北市",
    workStatus: "none",
    schoolStatus: "none",
    announcedAt: "",
    source: "—",
    note: "尚未公告"
  },
  {
    id: "sus-taichung",
    cityId: "taichung",
    cityName: "臺中市",
    workStatus: "normal",
    schoolStatus: "normal",
    announcedAt: "2026-08-20T06:30:00+08:00",
    source: "臺中市政府",
    note: "照常上班上課"
  }
];
