/**
 * Mock notification history datasets.
 */

/**
 * @typedef {'weather-alert'|'suspension'|'heavy-rain'|'typhoon'} NotificationType
 * @typedef {'sent'|'failed'|'pending'|'read'} NotificationStatus
 *
 * @typedef {Object} NotificationItem
 * @property {string} id
 * @property {NotificationType} type
 * @property {string} title
 * @property {string[]} cityNames
 * @property {string} issuedAt
 * @property {NotificationStatus} status
 * @property {string} [body]
 */

/** @type {NotificationItem[]} */
export const MOCK_NOTIFICATIONS = [
  {
    id: "ntf-001",
    type: "typhoon",
    title: "海上陸上颱風警報已發布",
    cityNames: ["屏東縣", "高雄市", "臺東縣"],
    issuedAt: "2026-08-20T08:05:00+08:00",
    status: "sent",
    body: "請立即完成防颱整備並留意最新停班停課公告。"
  },
  {
    id: "ntf-002",
    type: "suspension",
    title: "屏東縣公告全縣停班停課",
    cityNames: ["屏東縣"],
    issuedAt: "2026-08-20T05:22:00+08:00",
    status: "sent",
    body: "來源：屏東縣政府官方公告。"
  },
  {
    id: "ntf-003",
    type: "heavy-rain",
    title: "北部大雨特報",
    cityNames: ["基隆市", "臺北市", "新北市", "宜蘭縣"],
    issuedAt: "2026-08-20T09:32:00+08:00",
    status: "read",
    body: "請注意積水與雷擊。"
  },
  {
    id: "ntf-004",
    type: "weather-alert",
    title: "中南部高溫資訊",
    cityNames: ["臺中市", "臺南市", "嘉義市", "嘉義縣"],
    issuedAt: "2026-08-20T07:18:00+08:00",
    status: "sent"
  },
  {
    id: "ntf-005",
    type: "suspension",
    title: "高雄市停課與延後上班",
    cityNames: ["高雄市"],
    issuedAt: "2026-08-20T05:40:00+08:00",
    status: "pending",
    body: "推播佇列處理中。"
  },
  {
    id: "ntf-006",
    type: "typhoon",
    title: "颱風動態更新（模擬失敗）",
    cityNames: ["全台"],
    issuedAt: "2026-08-19T22:10:00+08:00",
    status: "failed",
    body: "通道暫時無法送達，稍後重試。"
  }
];

export const NOTIFICATION_TYPE_LABELS = {
  "weather-alert": "天氣警特報",
  suspension: "停班停課",
  "heavy-rain": "大雨或豪雨",
  typhoon: "颱風"
};

export const NOTIFICATION_STATUS_LABELS = {
  sent: "已送達",
  failed: "失敗",
  pending: "處理中",
  read: "已讀"
};
