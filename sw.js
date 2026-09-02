const SW_VERSION = "jin-v256-map-daynight";
const PWA_CACHE_NAME = `jin-pwa-${SW_VERSION}`;
const PWA_PRECACHE_URLS = [
  "./",
  "./index.html",
  "./offline.html",
  "./styles.css",
  "./legacy-themes.css",
  "./app.js",
  "./legacy-theme.js",
  "./channel-talk.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/torch-off-96.png",
  "./icons/torch-on-96.png"
];
const CWA_WARNING_MIRROR = "https://r.jina.ai/https://www.cwa.gov.tw/V8/C/P/Warning/W29.html";
const NOTIFY_COOLDOWN_MS = 30 * 60 * 1000;
const COOLDOWN_KEY = "notifyCooldown";
const PREFS_DB = "jin-bg-prefs-v1";
const PREFS_STORE = "prefs";
const PREFS_KEY = "subscription";
const LAST_DIGEST_KEY = "lastDigest";
const LAST_MESSAGES_KEY = "lastMessages";
const WEATHER_STATUS_KEY = "weatherStatus";
const WEATHER_STATUS_NOTIFY_TAG = "jin-weather-status";
const WEATHER_STATUS_PERIODIC_TAG = "jin-weather-status";
const WEATHER_CODE_LABEL = {
  0: "晴朗",
  1: "大致晴",
  2: "局部多雲",
  3: "陰天",
  45: "有霧",
  48: "霧凇",
  51: "毛毛雨",
  53: "小雨",
  55: "中雨",
  56: "凍毛雨",
  57: "凍毛雨偏強",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  66: "凍雨",
  67: "凍雨偏強",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  77: "雪粒",
  80: "陣雨",
  81: "陣雨偏強",
  82: "強烈陣雨",
  85: "陣雪",
  86: "強烈陣雪",
  95: "雷雨",
  96: "雷雨伴冰雹",
  99: "強雷雨伴冰雹"
};
const FLOOD_LATEST_API =
  "https://opendata.wra.gov.tw/api/v2/1b991bbb-ad85-4e7a-b931-06ce8749d3ed?format=JSON";
const FLOOD_SAFE_DEPTH_CM = 15;
const FLOOD_RADIUS_KM = 20;
const POWER_OUTAGE_NOTIFY_RADIUS_KM = 10;
const TAIPOWER_DISASTER_OUTAGE_URL =
  "https://service.taipower.com.tw/data/opendata/apply/file/d006012/001.xml";
const CLOSURE_OFFICIAL_MIRROR = "https://r.jina.ai/https://www.dgpa.gov.tw/typh/daily/nds.html";
const TYPHOON_WARN_MIRROR = "https://r.jina.ai/https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_WARN.html";
const EARTHQUAKE_CWA_LIST_MIRROR =
  "https://r.jina.ai/https://scweb.cwa.gov.tw/zh-tw/earthquake/data";
const EARTHQUAKE_NATIONAL_INTENSITY = 4;
const EARTHQUAKE_RECENT_MS = 168 * 60 * 60 * 1000;

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

function isServiceWorkerScript(url) {
  return url.pathname.endsWith("/sw.js");
}

function isAppShellPath(url) {
  let basePath = "/";
  try {
    basePath = new URL("./", self.registration.scope).pathname;
  } catch {
    basePath = "/";
  }
  const path = url.pathname;
  return (
    path === basePath ||
    path === basePath.replace(/\/$/, "") ||
    path === `${basePath}index.html` ||
    path.endsWith("/index.html")
  );
}

function canCacheResponse(response) {
  return Boolean(
    response &&
      response.ok &&
      !response.redirected &&
      (response.type === "basic" || response.type === "cors")
  );
}

async function asChromeNavigationResponse(response) {
  if (!response) {
    throw new Error("empty navigation response");
  }
  if (!response.redirected && response.type !== "opaqueredirect") {
    return response;
  }
  const body = await response.clone().arrayBuffer();
  const status = response.status >= 200 && response.status < 300 ? response.status : 200;
  return new Response(body, {
    status,
    statusText: response.statusText || "OK",
    headers: response.headers
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(PWA_CACHE_NAME).then(async (cache) => {
      await Promise.all(PWA_PRECACHE_URLS.map((url) => cache.add(url).catch(() => undefined)));
      await self.skipWaiting();
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key.startsWith("jin-pwa-") && key !== PWA_CACHE_NAME).map((key) => caches.delete(key))
      );
      await self.clients.claim();
      const snapshot = await idbGet(WEATHER_STATUS_KEY).catch(() => null);
      if (snapshot?.title) {
        await showWeatherStatusNotification(snapshot);
      }
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }
  const url = new URL(request.url);
  if (isServiceWorkerScript(url)) {
    return;
  }
  const sameOrigin = isSameOrigin(url);
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          const usable = await asChromeNavigationResponse(response);
          if (sameOrigin && isAppShellPath(url) && canCacheResponse(response)) {
            const cache = await caches.open(PWA_CACHE_NAME);
            await cache.put("./index.html", usable.clone()).catch(() => {});
          }
          return usable;
        } catch {
          const cache = await caches.open(PWA_CACHE_NAME);
          return (
            (await cache.match("./index.html")) ||
            (await cache.match("./")) ||
            (await cache.match("./offline.html")) ||
            new Response("目前離線", { headers: { "Content-Type": "text/plain; charset=utf-8" } })
          );
        }
      })()
    );
    return;
  }
  if (!sameOrigin) {
    return;
  }
  event.respondWith(
    caches.match(request).then((cached) => {
      const networked = fetch(request)
        .then((response) => {
          if (canCacheResponse(response)) {
            const copy = response.clone();
            caches.open(PWA_CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
          }
          return response;
        })
        .catch(() => cached);
      return cached || networked;
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  const tag = event.notification?.tag || "";
  const kind = event.notification?.data?.kind || "";
  const isWeatherStatus = tag === WEATHER_STATUS_NOTIFY_TAG || kind === "weather-status";
  if (isWeatherStatus && event.action === "torch-toggle") {
    event.waitUntil(handleWeatherTorchToggle());
    return;
  }
  event.notification.close();
  event.waitUntil(focusOrOpenClient("./"));
});

async function focusOrOpenClient(path = "./") {
  const clientsArr = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  for (const client of clientsArr) {
    if ("focus" in client) {
      await client.focus();
      return client;
    }
  }
  if (self.clients.openWindow) {
    return self.clients.openWindow(path);
  }
  return undefined;
}

async function handleWeatherTorchToggle() {
  const clientsArr = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  if (clientsArr.length) {
    await Promise.all(
      clientsArr.map(async (client) => {
        client.postMessage({ type: "TORCH_TOGGLE" });
        if ("focus" in client) {
          await client.focus();
        }
      })
    );
    return;
  }
  await focusOrOpenClient("./?source=pwa&torch=toggle");
}

async function showWeatherStatusNotification(payload = {}) {
  const snapshot = {
    ...((await idbGet(WEATHER_STATUS_KEY)) || {}),
    ...payload,
    updatedAt: new Date().toISOString()
  };
  await idbSet(WEATHER_STATUS_KEY, snapshot);
  const torchOn = Boolean(snapshot.torchOn);
  const torchAvailable = snapshot.torchAvailable !== false;
  const title = snapshot.title || "天氣讀取中";
  const body = snapshot.body || snapshot.place || "災防通報";
  const icon = new URL("./icons/icon-192.png", self.registration.scope).href;
  const torchIcon = new URL(
    torchOn ? "./icons/torch-on-96.png" : "./icons/torch-off-96.png",
    self.registration.scope
  ).href;
  const base = {
    body,
    tag: WEATHER_STATUS_NOTIFY_TAG,
    silent: false,
    renotify: false,
    requireInteraction: false,
    icon,
    badge: icon,
    data: {
      kind: "weather-status",
      torchOn,
      place: snapshot.place || ""
    }
  };
  const withActions = {
    ...base,
    actions: torchAvailable
      ? [
          {
            action: "torch-toggle",
            title: torchOn ? "關閉手電筒" : "開啟手電筒",
            icon: torchIcon
          }
        ]
      : []
  };
  const attempts = [withActions, base];
  for (const options of attempts) {
    try {
      await self.registration.showNotification(title, options);
      return true;
    } catch {
      /* try a simpler payload */
    }
  }
  return false;
}

async function refreshWeatherStatusFromNetwork() {
  const snapshot = (await idbGet(WEATHER_STATUS_KEY)) || {};
  const lat = Number(snapshot.lat);
  const lon = Number(snapshot.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return false;
  }
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));
  url.searchParams.set("current", "temperature_2m,weather_code");
  url.searchParams.set("timezone", "Asia/Taipei");
  const response = await fetch(url.toString(), { cache: "no-store" });
  if (!response.ok) {
    return false;
  }
  const payload = await response.json();
  const tempRaw = Number(payload.current?.temperature_2m);
  const temperature = Number.isFinite(tempRaw) ? Math.round(tempRaw) : null;
  const status = WEATHER_CODE_LABEL[Number(payload.current?.weather_code)] || "天氣更新中";
  const torchOn = Boolean(snapshot.torchOn);
  const torchAvailable = snapshot.torchAvailable !== false;
  const place = snapshot.place || "所選位置";
  const torchText = torchAvailable ? `｜手電筒 ${torchOn ? "開" : "關"}` : "";
  await showWeatherStatusNotification({
    ...snapshot,
    temperature,
    status,
    title: temperature !== null ? `${temperature}° ${status}` : status,
    body: `${place}${torchText}`
  });
  return true;
}

function openPrefsDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(PREFS_DB, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(PREFS_STORE)) {
        db.createObjectStore(PREFS_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB open failed"));
  });
}

async function idbGet(key) {
  const db = await openPrefsDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PREFS_STORE, "readonly");
    const store = tx.objectStore(PREFS_STORE);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error || new Error("IndexedDB get failed"));
  });
}

async function idbSet(key, value) {
  const db = await openPrefsDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PREFS_STORE, "readwrite");
    const store = tx.objectStore(PREFS_STORE);
    const req = store.put(value, key);
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error || new Error("IndexedDB put failed"));
  });
}

function normalizeTaiwanPlaceText(text) {
  return String(text ?? "").replace(/臺/g, "台").trim();
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getFloodLevel(depthCm) {
  if (depthCm >= 50) return 4;
  if (depthCm >= 30) return 3;
  if (depthCm >= 15) return 2;
  return 1;
}

function getAqiLabel(aqi) {
  if (aqi <= 50) return "良好";
  if (aqi <= 100) return "普通";
  if (aqi <= 150) return "對敏感族群不健康";
  if (aqi <= 200) return "不健康";
  return "非常不健康";
}

function formatFloodStationLabel(station = {}) {
  const name = String(station.name || "")
    .replace(/&#40;/g, "(")
    .replace(/&#41;/g, ")");
  const numberMatch = name.match(/編號\s*([0-9]+)/);
  if (numberMatch) {
    return `編號${numberMatch[1]}`;
  }
  return name || `${station.county || ""}${station.town || ""}` || "感測點";
}

function formatIntensityLabel(value) {
  const intensity = Number(value);
  if (!Number.isFinite(intensity)) {
    return "--";
  }
  if (intensity >= 6.5) return "6強";
  if (intensity >= 6) return "6弱";
  if (intensity >= 5.5) return "5強";
  if (intensity >= 5) return "5弱";
  return String(Math.round(intensity));
}

function formatDateTime(timeMs) {
  return new Date(timeMs).toLocaleString("zh-TW", { hour12: false });
}

function areaMentionsTownship(areaText, townshipName) {
  const area = normalizeTaiwanPlaceText(areaText);
  const town = normalizeTaiwanPlaceText(townshipName);
  if (!area || !town) {
    return false;
  }
  if (area.includes(town)) {
    return true;
  }
  const bare = town.replace(/(區|鄉|鎮|市)$/u, "");
  if (bare.length < 2) {
    return false;
  }
  return [`${bare}區`, `${bare}鄉`, `${bare}鎮`, `${bare}市`].some((token) => area.includes(token));
}

function emptyRecoveryState() {
  return {
    floodSensors: {},
    powerOutages: {},
    waterOutages: {},
    earthquakes: {},
    cityClosures: {},
    hasLandTyphoonWarning: false
  };
}

function isClosureStopMessage(message) {
  const text = String(message || "");
  return text.includes("停止上班") || text.includes("停止上課");
}

function getTaiwanDateParts(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(Number.isNaN(date.getTime()) ? new Date() : date);
  return {
    year: Number(parts.find((part) => part.type === "year")?.value),
    month: Number(parts.find((part) => part.type === "month")?.value),
    day: Number(parts.find((part) => part.type === "day")?.value)
  };
}

function taiwanDateFromYmd(year, month, day) {
  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 4, 0, 0));
}

function addTaiwanDays(value, days) {
  const { year, month, day } = getTaiwanDateParts(value);
  return new Date(Date.UTC(year, month - 1, day + Number(days || 0), 4, 0, 0));
}

function formatClosureDateLabel(value) {
  const { year, month, day } = getTaiwanDateParts(value);
  const weekday = ["日", "一", "二", "三", "四", "五", "六"][taiwanDateFromYmd(year, month, day).getUTCDay()];
  return `${month}月${day}日（${weekday}）`;
}

function parseDgpaNoticeDate(text) {
  const raw = String(text || "");
  const iso = raw.match(/(20\d{2})[/\-](\d{1,2})[/\-](\d{1,2})/);
  if (iso) {
    return taiwanDateFromYmd(iso[1], iso[2], iso[3]);
  }
  const roc = raw.match(/(\d{2,3})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
  if (roc) {
    return taiwanDateFromYmd(Number(roc[1]) + 1911, roc[2], roc[3]);
  }
  const { year, month, day } = getTaiwanDateParts();
  return taiwanDateFromYmd(year, month, day);
}

function extractClosureApplyDates(message, noticeDate) {
  const text = String(message || "");
  if (!isClosureStopMessage(text)) {
    return [];
  }
  const base = noticeDate instanceof Date ? noticeDate : parseDgpaNoticeDate(noticeDate);
  const dates = [];
  const addDate = (date) => {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return;
    }
    const key = `${getTaiwanDateParts(date).month}/${getTaiwanDateParts(date).day}`;
    if (!dates.some((item) => `${getTaiwanDateParts(item).month}/${getTaiwanDateParts(item).day}` === key)) {
      dates.push(date);
    }
  };
  const clauses = text.split(/[。；;\n]/).map((clause) => clause.trim()).filter(Boolean);
  (clauses.length ? clauses : [text]).forEach((clause) => {
    if (!clause || (/照常/.test(clause) && !/停止/.test(clause))) {
      return;
    }
    if (!/停止上班|停止上課|已達停止/.test(clause)) {
      return;
    }
    if (/明天|明日/.test(clause)) {
      addDate(addTaiwanDays(base, 1));
    }
    if (/今天|今日|本日|今[（(]|已達停止/.test(clause)) {
      addDate(base);
    }
  });
  if (!dates.length) {
    addDate(base);
  }
  return dates.sort((a, b) => a.getTime() - b.getTime());
}

function formatClosureNotifyMessage(markdown, message) {
  if (!message) {
    return null;
  }
  const noticeDate = parseDgpaNoticeDate(markdown);
  const dates = extractClosureApplyDates(message, noticeDate);
  const dateText = dates.map((date) => formatClosureDateLabel(date)).join("、");
  return dateText ? `${dateText}：${message}` : message;
}

const TAIWAN_CITY_NAMES = [
  "臺北市",
  "新北市",
  "基隆市",
  "桃園市",
  "新竹市",
  "新竹縣",
  "苗栗縣",
  "臺中市",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義市",
  "嘉義縣",
  "臺南市",
  "高雄市",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "臺東縣",
  "澎湖縣",
  "金門縣",
  "連江縣"
];

function findCitiesInText(text) {
  const hay = normalizeTaiwanPlaceText(text);
  return TAIWAN_CITY_NAMES.filter((city) => hay.includes(normalizeTaiwanPlaceText(city)));
}

function stampSourceLine(source, body) {
  const time = new Date().toLocaleString("zh-TW", { hour12: false, timeZone: "Asia/Taipei" });
  return `${body}（來源：${source}｜${time}）`;
}

function isOfficialWarningCatalogLine(line) {
  return /資料提供\s*:|地震警報由中央氣象署發布|內容包含地震規模及各地方震度/.test(line);
}

function isDroppedNcdrAlertText(text) {
  return /【NCDR\s*示警】|地震警報由中央氣象署發布|內容包含地震規模及各地方震度/.test(String(text || ""));
}

function parseOfficialWarningMarkdown(markdown, cityName, { sourceLabel, keyword }) {
  const city = normalizeTaiwanPlaceText(cityName);
  const lines = String(markdown || "")
    .split(/\n+/)
    .map((line) => line.replace(/^#+\s*/, "").trim())
    .filter((line) => line && !line.startsWith("![") && line.length < 280 && !isOfficialWarningCatalogLine(line));
  const hits = lines.filter((line) => keyword.test(line) && (!city || normalizeTaiwanPlaceText(line).includes(city) || findCitiesInText(line).length > 0));
  const cityHits = city
    ? hits.filter((line) => normalizeTaiwanPlaceText(line).includes(city) || /全[臺台]|各地(?!方)/.test(line))
    : hits;
  const top = (cityHits[0] || hits[0] || "").replace(/\s+/g, " ").slice(0, 140);
  if (!top) {
    return null;
  }
  return stampSourceLine(sourceLabel, top);
}

function eventKeyFromMessage(message, city) {
  const compact = String(message || "")
    .replace(/\d{4}\/\d{1,2}\/\d{1,2}[^\s]*/g, "")
    .replace(/\d{1,2}:\d{2}(?::\d{2})?/g, "")
    .replace(/來源：[^｜|]+[｜|]\s*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 96);
  return `${normalizeTaiwanPlaceText(city)}|${compact}`;
}

async function filterCooldownMessages(messages, city, { force = false } = {}) {
  const lines = (messages || []).map((item) => String(item || "").trim()).filter(Boolean);
  if (force) {
    return lines;
  }
  const now = Date.now();
  const map = (await idbGet(COOLDOWN_KEY)) || {};
  const kept = [];
  lines.forEach((line) => {
    const key = eventKeyFromMessage(line, city);
    if (map[key] && now - Number(map[key]) < NOTIFY_COOLDOWN_MS) {
      return;
    }
    map[key] = now;
    kept.push(line);
  });
  await idbSet(COOLDOWN_KEY, map);
  return kept;
}

function isRecoveryNotificationLine(text) {
  return /消退|解除|已恢復/.test(String(text || ""));
}

const NOTIFY_CATEGORY_ORDER = [
  "closure",
  "flood",
  "typhoon",
  "earthquake",
  "power",
  "water",
  "cwa-warning",
  "weather",
  "air",
  "other"
];

function getNotifyCategoryKey(text = "") {
  const raw = String(text || "");
  if (/停班停課/.test(raw)) {
    return "closure";
  }
  if (/積淹水/.test(raw)) {
    return "flood";
  }
  if (/停電/.test(raw)) {
    return "power";
  }
  if (/停水/.test(raw)) {
    return "water";
  }
  if (/地震/.test(raw)) {
    return "earthquake";
  }
  if (/颱風/.test(raw)) {
    return "typhoon";
  }
  if (/空氣/.test(raw)) {
    return "air";
  }
  if (/氣象署警特報|【氣象署/.test(raw)) {
    return "cwa-warning";
  }
  if (/【天氣】|【降雨】/.test(raw)) {
    return "weather";
  }
  return "other";
}

function mergeNotifyLinesByCategory(lines = []) {
  const groups = new Map();
  (lines || []).forEach((line) => {
    const text = String(line || "").trim();
    if (!text) {
      return;
    }
    const key = getNotifyCategoryKey(text);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    const list = groups.get(key);
    if (!list.includes(text)) {
      list.push(text);
    }
  });
  return NOTIFY_CATEGORY_ORDER.filter((key) => groups.has(key)).flatMap((key) => groups.get(key));
}

function getMergedNotifyBatchTitle(lines = []) {
  const rows = (lines || []).map((line) => String(line || "").trim()).filter(Boolean);
  if (!rows.length) {
    return "災害狀態更新";
  }
  const allRecovery = rows.every(isRecoveryNotificationLine);
  const anyRecovery = rows.some(isRecoveryNotificationLine);
  if (allRecovery) {
    return "災害警戒解除";
  }
  if (anyRecovery) {
    return "災害狀態更新";
  }
  return "災害警戒通知";
}

async function fetchNearbyFloodRows(lat, lon) {
  const [stationsResponse, latestResponse] = await Promise.all([
    fetch("./data/flood_stations.json", { cache: "no-store" }),
    fetch(FLOOD_LATEST_API, { cache: "no-store" })
  ]);
  if (!stationsResponse.ok || !latestResponse.ok) {
    return [];
  }
  const stationsPayload = await stationsResponse.json();
  const latestRows = await latestResponse.json();
  const stationMap = new Map((stationsPayload.stations || []).map((station) => [station.sensorid, station]));
  return (Array.isArray(latestRows) ? latestRows : [])
    .map((row) => {
      const depthCm = Number(row.latestvalue ?? 0);
      if (!(depthCm > 0) || depthCm >= 500) {
        return null;
      }
      const station = stationMap.get(row.sensorid);
      if (!station) {
        return null;
      }
      const rowLat = Number(station.lat);
      const rowLon = Number(station.lon);
      if (!Number.isFinite(rowLat) || !Number.isFinite(rowLon)) {
        return null;
      }
      const distanceKm = getDistanceKm(lat, lon, rowLat, rowLon);
      if (distanceKm > FLOOD_RADIUS_KM) {
        return null;
      }
      return {
        sensorid: row.sensorid,
        depthCm,
        distanceKm,
        level: getFloodLevel(depthCm),
        name: formatFloodStationLabel(station)
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.level - a.level || a.distanceKm - b.distanceKm);
}

function parseDisasterOutageXmlText(xmlText) {
  return String(xmlText || "")
    .split(/<Placemark[\s>]/i)
    .slice(1)
    .map((block) => {
      const coordMatch = block.match(/<coordinates>\s*([0-9.\-]+)\s*,\s*([0-9.\-]+)/i);
      const areaMatch =
        block.match(/name="停電區域"[^>]*>([^<]+)/) ||
        block.match(/<Data name="停電區域">[\s\S]*?<value>([^<]+)/);
      const infoMatch =
        block.match(/name="停電資訊"[^>]*>([^<]+)/) ||
        block.match(/<Data name="停電資訊">[\s\S]*?<value>([^<]+)/);
      const lat = coordMatch ? Number(coordMatch[2]) : NaN;
      const lon = coordMatch ? Number(coordMatch[1]) : NaN;
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
        return null;
      }
      return {
        type: "disaster",
        area: String(areaMatch?.[1] || "").trim() || "未提供區域",
        info: String(infoMatch?.[1] || "災害性停電").trim(),
        lat,
        lon,
        label: String(areaMatch?.[1] || "").trim()
      };
    })
    .filter(Boolean);
}

async function fetchNearbyPowerOutages(lat, lon, city, township) {
  const nearby = [];
  try {
    const response = await fetch(TAIPOWER_DISASTER_OUTAGE_URL, { cache: "no-store" });
    if (response.ok) {
      parseDisasterOutageXmlText(await response.text()).forEach((point) => {
        const distanceKm = getDistanceKm(lat, lon, point.lat, point.lon);
        if (distanceKm <= POWER_OUTAGE_NOTIFY_RADIUS_KM) {
          nearby.push({ ...point, distanceKm });
        }
      });
    }
  } catch {
    /* ignore */
  }
  try {
    const snapshotResponse = await fetch("./data/power_outage_snapshot.json", { cache: "no-store" });
    if (snapshotResponse.ok) {
      const snapshot = await snapshotResponse.json();
      const cityNorm = normalizeTaiwanPlaceText(city);
      const townNorm = normalizeTaiwanPlaceText(township);
      (snapshot.planned || []).forEach((row, index) => {
        const area = normalizeTaiwanPlaceText(row.area);
        if (!area) {
          return;
        }
        const matched =
          (cityNorm && area.includes(cityNorm)) ||
          (townNorm && areaMentionsTownship(area, township));
        if (!matched) {
          return;
        }
        nearby.push({
          type: "planned",
          area: row.area,
          label: row.area,
          info: row.summary || "計畫性停電",
          lat,
          lon,
          distanceKm: 0,
          requestId: row.requestId || `planned-${index}`
        });
      });
    }
  } catch {
    /* ignore */
  }
  nearby.sort((a, b) => {
    const typeOrder = { disaster: 0, planned: 1 };
    return (typeOrder[a.type] ?? 2) - (typeOrder[b.type] ?? 2) || a.distanceKm - b.distanceKm;
  });
  return nearby;
}

function parseWaterOutageCards(markdown, cityName, townshipName) {
  const items = [];
  const cardPattern =
    /停水期間\s*起\s*([0-9/\s:]+)\s*迄\s*([0-9/\s:]+)\s*停水區域\s*([^\n]*?)\s*停水原因\s*([^\n]*?)\s*客服專線[\s\S]*?案件編號\s*([0-9]+)/g;
  let match;
  while ((match = cardPattern.exec(String(markdown || ""))) && items.length < 40) {
    const area = String(match[3] || "").trim();
    const reason = String(match[4] || "").trim();
    const id = String(match[5] || "").trim();
    const start = String(match[1] || "").trim();
    const end = String(match[2] || "").trim();
    if (!id) {
      continue;
    }
    items.push({
      id,
      city: cityName,
      township: townshipName,
      area,
      reason,
      period: `${start}～${end}`,
      summary: `${area}${reason ? `（${reason.slice(0, 36)}）` : ""}`
    });
  }
  return items.filter((item) => areaMentionsTownship(`${item.area} ${item.summary} ${item.reason}`, townshipName));
}

function parseClosureCityMessage(markdown, cityName) {
  const city = normalizeTaiwanPlaceText(cityName);
  if (!city) {
    return null;
  }
  const lines = String(markdown || "")
    .split("\n")
    .map((line) => line.trim());
  if (/無停班停課訊息/.test(String(markdown || ""))) {
    return null;
  }
  for (const line of lines) {
    if (!line || line.startsWith("#") || line.includes("---")) {
      continue;
    }
    const haystack = normalizeTaiwanPlaceText(line);
    if (!haystack.includes(city)) {
      continue;
    }
    if (line.startsWith("|")) {
      const raw = line.split("|").map((cell) => cell.trim()).filter(Boolean);
      if (raw.length < 2) {
        continue;
      }
      if (normalizeTaiwanPlaceText(raw[0]) !== city) {
        continue;
      }
      const message = raw.slice(1).join(" ").trim();
      return message || null;
    }
    const stripped = line.replace(new RegExp(cityName, "g"), "").replace(new RegExp(city, "g"), "").trim();
    return stripped || line;
  }
  return null;
}

function parseEarthquakeRows(markdown) {
  const now = Date.now();
  const rows = [];
  String(markdown || "")
    .split(/\r?\n/)
    .forEach((line) => {
      if (!line.includes("/earthquake/details/") || !line.includes("規模：")) {
        return;
      }
      const metaMatch = line.match(
        /([0-9]{4}-[0-9]{2}-[0-9]{2}\s+[0-9]{2}:[0-9]{2}:[0-9]{2})\s*規模：([0-9.]+)\s*深度：([0-9.]+)\s*\[([^\]]+)\]/
      );
      const intensityMatch = line.match(
        /\|\s*(?:[0-9]{2,3}|!\[[^\]]*\]\([^)]*\))\s*\|\s*([0-9]+(?:\s*[弱強])?)\s*級\s*\|/
      );
      if (!metaMatch) {
        return;
      }
      const timeMs = Date.parse(`${metaMatch[1].replace(" ", "T")}+08:00`);
      const magnitude = Number(metaMatch[2]);
      const intensityText = String(intensityMatch?.[1] || "").replace(/\s+/g, "");
      let intensityValue = Number(intensityText.replace(/[弱強]/g, ""));
      if (intensityText.includes("5強")) intensityValue = 5.5;
      if (intensityText.includes("6強")) intensityValue = 6.5;
      if (intensityText.includes("5弱")) intensityValue = 5;
      if (intensityText.includes("6弱")) intensityValue = 6;
      if (!Number.isFinite(timeMs) || now - timeMs > EARTHQUAKE_RECENT_MS) {
        return;
      }
      rows.push({
        id: `${timeMs}-${magnitude}-${metaMatch[4]}`,
        magnitude,
        intensityText: intensityText || "--",
        intensityValue: Number.isFinite(intensityValue) ? intensityValue : 0,
        place: metaMatch[4],
        timeMs
      });
    });
  rows.sort((a, b) => b.timeMs - a.timeMs);
  return rows;
}

function isNationalEarthquakeAlert(quake) {
  return (
    Number(quake?.intensityValue) >= EARTHQUAKE_NATIONAL_INTENSITY ||
    (Number(quake?.magnitude) >= 5.5 && Number(quake?.intensityValue) >= 4)
  );
}

async function buildBackgroundAlertMessages(prefs) {
  const messages = [];
  const recoveryMessages = [];
  const topics = new Set(
    (prefs?.topics || []).filter((topic) => topic !== "cwa-warning" && topic !== "ncdr-alert")
  );
  const lat = Number(prefs?.lat);
  const lon = Number(prefs?.lon);
  const label = prefs?.label || `${prefs?.city || ""}${prefs?.township || ""}` || "訂閱地區";
  const city = prefs?.city || "";
  const township = prefs?.township || "";
  const prev = {
    ...emptyRecoveryState(),
    ...(prefs?.recoveryState || {})
  };
  const next = emptyRecoveryState();
  next.hasLandTyphoonWarning = Boolean(prev.hasLandTyphoonWarning);

  if (topics.has("weather") && Number.isFinite(lat) && Number.isFinite(lon)) {
    try {
      const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
      endpoint.searchParams.set("latitude", String(lat));
      endpoint.searchParams.set("longitude", String(lon));
      endpoint.searchParams.set("current", "temperature_2m,precipitation,weather_code");
      endpoint.searchParams.set("hourly", "precipitation_probability");
      endpoint.searchParams.set("timezone", "Asia/Taipei");
      endpoint.searchParams.set("forecast_days", "1");
      const response = await fetch(endpoint.toString(), { cache: "no-store" });
      if (response.ok) {
        const payload = await response.json();
        const current = payload.current || {};
        const rainProb = Number(payload.hourly?.precipitation_probability?.[0] ?? 0);
        messages.push(
          `【即時天氣】${label} ${Math.round(Number(current.temperature_2m) || 0)}°C，降雨機率 ${Math.round(rainProb)}%。`
        );
      }
    } catch {
      messages.push(`【即時天氣】${label} 天氣資料暫時無法讀取。`);
    }
  }

  if (topics.has("air") && Number.isFinite(lat) && Number.isFinite(lon)) {
    try {
      const endpoint = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
      endpoint.searchParams.set("latitude", String(lat));
      endpoint.searchParams.set("longitude", String(lon));
      endpoint.searchParams.set("hourly", "us_aqi");
      endpoint.searchParams.set("timezone", "Asia/Taipei");
      endpoint.searchParams.set("forecast_days", "1");
      const response = await fetch(endpoint.toString(), { cache: "no-store" });
      if (response.ok) {
        const payload = await response.json();
        const aqi = Number(payload.hourly?.us_aqi?.[0] ?? 0);
        messages.push(`【空氣品質】${label} AQI ${Math.round(aqi)}，${getAqiLabel(aqi)}。`);
      }
    } catch {
      messages.push(`【空氣品質】${label} 空氣品質資料暫時無法讀取。`);
    }
  }

  next.cityClosures = { ...(prev.cityClosures || {}) };
  if (topics.has("closure")) {
    try {
      const response = await fetch(CLOSURE_OFFICIAL_MIRROR, { cache: "no-store" });
      if (response.ok) {
        const markdown = await response.text();
        const message = parseClosureCityMessage(markdown, city);
        const datedMessage = formatClosureNotifyMessage(markdown, message);
        messages.push(
          stampSourceLine(
            "行政院人事行政總處",
            datedMessage
              ? `【停班停課】${label}：${datedMessage}`
              : `【停班停課】${label}：目前無停班停課狀態`
          )
        );
        const active = isClosureStopMessage(message);
        if (city && prev.cityClosures?.[city]?.active && !active) {
          recoveryMessages.push(
            `【停班停課解除】${label} 已解除停班停課警戒${
              message ? `，目前${message}` : "，目前恢復照常上班上課"
            }。`
          );
        }
        if (city) {
          next.cityClosures[city] = { active, message: message || "" };
        }
      } else {
        messages.push(`【停班停課】${label}：目前無停班停課狀態`);
      }
    } catch {
      messages.push(`【停班停課】${label}：目前無停班停課狀態`);
    }
  }

  if (topics.has("flood") && Number.isFinite(lat) && Number.isFinite(lon)) {
    try {
      const nearby = await fetchNearbyFloodRows(lat, lon);
      const warnings = nearby.filter((point) => point.depthCm >= FLOOD_SAFE_DEPTH_CM);
      const currentWarningSensors = {};
      warnings.forEach((point) => {
        currentWarningSensors[point.sensorid] = {
          areaName: point.name,
          level: point.level,
          depthCm: point.depthCm,
          distanceKm: point.distanceKm
        };
      });
      if (warnings.length) {
        const top = warnings[0];
        messages.push(
          `【積淹水警示】${top.name} 距離約 ${top.distanceKm.toFixed(1)} km，水深 ${top.depthCm} cm（等級 ${top.level}）。`
        );
      } else if (nearby.length) {
        const top = nearby[0];
        messages.push(
          `【積淹水監測】${label} 半徑 ${FLOOD_RADIUS_KM} 公里內有 ${nearby.length} 處感測積水，最近 ${top.name} 水深 ${top.depthCm} cm（未達警戒）。`
        );
      } else {
        messages.push(`【積淹水監測】${label} 半徑 ${FLOOD_RADIUS_KM} 公里內目前無積淹水警戒。`);
      }
      Object.entries(prev.floodSensors || {}).forEach(([sensorid, point]) => {
        if (currentWarningSensors[sensorid]) {
          return;
        }
        recoveryMessages.push(
          `【積淹水消退】${point.areaName} 已消退至安全警戒高度（原水深 ${point.depthCm} cm、等級 ${point.level}），${label} 周邊約 ${Number(point.distanceKm).toFixed(1)} km，請恢復通行並持續留意。`
        );
      });
      Object.entries(currentWarningSensors).forEach(([sensorid, point]) => {
        if (prev.floodSensors?.[sensorid]) {
          return;
        }
        recoveryMessages.push(
          `【積淹水警戒】${point.areaName} 水深 ${point.depthCm} cm（等級 ${point.level}），距離約 ${point.distanceKm.toFixed(1)} km。`
        );
      });
      next.floodSensors = currentWarningSensors;
    } catch {
      next.floodSensors = prev.floodSensors || {};
    }
  } else {
    next.floodSensors = prev.floodSensors || {};
  }

  if (topics.has("power-outage") && Number.isFinite(lat) && Number.isFinite(lon)) {
    try {
      const nearby = await fetchNearbyPowerOutages(lat, lon, city, township);
      if (topics.has("power-outage")) {
        if (!nearby.length) {
          messages.push(`【停電區域】${label} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內目前無停電通報。`);
        } else {
          const summaries = nearby.slice(0, 3).map((point) => {
            const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
            const place = point.label || point.area || "未提供區域";
            return `${place}（${typeLabel}，約 ${Number(point.distanceKm).toFixed(1)} km）`;
          });
          const suffix = nearby.length > 3 ? `等共 ${nearby.length} 處` : `共 ${nearby.length} 處`;
          messages.push(
            `【停電區域】${label} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內${suffix}：${summaries.join("；")}`
          );
        }
      }
      const currentOutages = {};
      nearby.forEach((point) => {
        const key = `${point.type}|${normalizeTaiwanPlaceText(point.area || point.label || "")}|${Number(point.lat).toFixed(4)}|${Number(point.lon).toFixed(4)}`;
        currentOutages[key] = {
          area: point.area,
          type: point.type,
          label: point.label,
          distanceKm: point.distanceKm
        };
      });
      Object.entries(prev.powerOutages || {}).forEach(([, point]) => {
        const stillThere = Object.values(currentOutages).some(
          (item) => item.area === point.area && item.type === point.type
        );
        if (stillThere) {
          return;
        }
        const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
        const place = point.label || point.area || "未提供區域";
        recoveryMessages.push(
          `【停電解除】${place}（${typeLabel}）已恢復供電，${label} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內距離約 ${Number(point.distanceKm).toFixed(1)} km。`
        );
      });
      if (topics.has("power-outage")) {
        Object.entries(currentOutages).forEach(([key, point]) => {
          if (prev.powerOutages?.[key]) {
            return;
          }
          const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
          const place = point.label || point.area || "未提供區域";
          recoveryMessages.push(
            `【停電警戒】${place}（${typeLabel}）距離約 ${Number(point.distanceKm).toFixed(1)} km，請留意供電狀況。`
          );
        });
      }
      next.powerOutages = currentOutages;
    } catch {
      next.powerOutages = prev.powerOutages || {};
    }
  } else {
    next.powerOutages = prev.powerOutages || {};
  }

  if (topics.has("water-outage")) {
    if (!township) {
      messages.push(`【停水監測】${city || label}：請選定鄉鎮市區後再顯示當區停水（不發全縣市通知）。`);
      next.waterOutages = prev.waterOutages || {};
    } else {
      try {
        const encodedCity = encodeURIComponent(city);
        const response = await fetch(
          `https://r.jina.ai/https://web.water.gov.tw/wateroff/city/${encodedCity}/index.html`,
          { cache: "no-store" }
        );
        if (response.ok) {
          const items = parseWaterOutageCards(await response.text(), city, township);
          if (!items.length) {
            messages.push(`【停水監測】${label} 目前無本鄉鎮停水／降壓公告。`);
          } else {
            const top = items[0];
            messages.push(
              `【停水公告】${label}：${top.summary || top.area || "有停水案件"}（${top.period || "期間詳見台水"}）。`
            );
          }
          const currentWater = {};
          items.forEach((item) => {
            currentWater[item.id] = item;
          });
          Object.entries(prev.waterOutages || {}).forEach(([id, item]) => {
            if (currentWater[id]) {
              return;
            }
            if (item?.township && item.township !== township) {
              return;
            }
            recoveryMessages.push(
              `【停水解除】${item.area || item.summary || "本鄉鎮停水案件"} 已恢復供水／降壓解除，請確認用水恢復正常。`
            );
          });
          Object.entries(currentWater).forEach(([id, item]) => {
            if (prev.waterOutages?.[id]) {
              return;
            }
            recoveryMessages.push(
              `【停水警戒】${item.township ? `${item.city || ""}${item.township}` : item.area || "本鄉鎮"}：${item.summary || "有停水／降壓公告"}（${item.period || "期間詳見台水公告"}）。`
            );
          });
          next.waterOutages = currentWater;
        }
      } catch {
        next.waterOutages = prev.waterOutages || {};
      }
    }
  } else {
    next.waterOutages = prev.waterOutages || {};
  }

  if (topics.has("cwa-warning")) {
    try {
      const response = await fetch(CWA_WARNING_MIRROR, { cache: "no-store" });
      if (response.ok) {
        const text = await response.text();
        const parsed = parseOfficialWarningMarkdown(text, city, {
          sourceLabel: "中央氣象署警特報",
          keyword: /特報|警報|注意/
        });
        messages.push(parsed || stampSourceLine("中央氣象署警特報", `【氣象署警特報】${label} 目前無縣市對應警特報`));
      }
    } catch {
      messages.push(stampSourceLine("中央氣象署警特報", `【氣象署警特報】${label} 資料暫時無法讀取`));
    }
  }

  if (topics.has("earthquake")) {
    try {
      const response = await fetch(EARTHQUAKE_CWA_LIST_MIRROR, { cache: "no-store" });
      if (response.ok) {
        const rows = parseEarthquakeRows(await response.text());
        const recentNational = rows.filter((quake) => isNationalEarthquakeAlert(quake));
        if (recentNational.length) {
          const top = recentNational[0];
          messages.push(
            `【地震通報】規模 ${top.magnitude.toFixed(1)}、最大震度 ${top.intensityText}級，${top.place}（${formatDateTime(top.timeMs)}）。請就近掩護並留意餘震。`
          );
        } else if (rows.length) {
          const top = rows[0];
          messages.push(
            `【地震監測】${label} 最新：規模 ${top.magnitude.toFixed(1)}、最大震度 ${formatIntensityLabel(top.intensityValue)}（${formatDateTime(top.timeMs)}），目前未達國家緊急訊息等級。`
          );
        } else {
          messages.push(`【地震監測】${label} 目前無近期台灣地區有感地震通報。`);
        }
        const currentEarthquakes = {};
        recentNational.forEach((quake) => {
          currentEarthquakes[quake.id] = {
            place: quake.place,
            magnitude: quake.magnitude,
            intensityValue: quake.intensityValue,
            timeMs: quake.timeMs
          };
          if (!prev.earthquakes?.[quake.id]) {
            recoveryMessages.push(
              `【地震通報】規模 ${quake.magnitude.toFixed(1)}、最大震度 ${quake.intensityText}級，${quake.place}（${formatDateTime(quake.timeMs)}）。請就近掩護並留意餘震。`
            );
          }
        });
        next.earthquakes = {
          ...(prev.earthquakes || {}),
          ...currentEarthquakes
        };
        const pruneBefore = Date.now() - 7 * 24 * 60 * 60 * 1000;
        Object.entries(next.earthquakes).forEach(([id, quake]) => {
          if (!Number.isFinite(quake?.timeMs) || quake.timeMs < pruneBefore) {
            delete next.earthquakes[id];
          }
        });
      }
    } catch {
      next.earthquakes = prev.earthquakes || {};
    }
  } else {
    next.earthquakes = prev.earthquakes || {};
  }

  try {
    const response = await fetch(TYPHOON_WARN_MIRROR, { cache: "no-store" });
    if (response.ok) {
      const warnText = await response.text();
      const hasWarning = !/目前無發布颱風警報/.test(warnText);
      const hasLandWarning =
        hasWarning && /陸上颱風警報/.test(warnText) && !/解除陸上颱風警報/.test(warnText);
      if (prev.hasLandTyphoonWarning && !hasLandWarning) {
        recoveryMessages.push(
          `【解除颱風警報】中央氣象署已解除陸上颱風警報，${label} 請持續留意後續天氣與防災資訊。`
        );
      }
      next.hasLandTyphoonWarning = hasLandWarning;
    } else {
      next.hasLandTyphoonWarning = Boolean(prev.hasLandTyphoonWarning);
    }
  } catch {
    next.hasLandTyphoonWarning = Boolean(prev.hasLandTyphoonWarning);
  }

  return {
    messages: messages.filter((line) => line && !isDroppedNcdrAlertText(line)),
    recoveryMessages: recoveryMessages.filter((line) => line && !isDroppedNcdrAlertText(line)),
    recoveryState: next
  };
}

async function showSystemNotification(title, body, tag) {
  await self.registration.showNotification(title || "預報訂閱通知", {
    body: body || "",
    tag: tag || `jin-bg-${Date.now()}`,
    renotify: true,
    requireInteraction: true,
    vibrate: [180, 90, 180, 90, 180],
    icon: "./icons/icon-192.png",
    badge: "./icons/icon-192.png",
    data: { source: "background" }
  });
}

async function showNotificationBatch(items = []) {
  const lines = [];
  (items || []).forEach((item) => {
    String(item?.body || "")
      .split(/\n+/)
      .map((line) => line.trim())
      .filter((line) => line && !isDroppedNcdrAlertText(line))
      .forEach((line) => {
        if (!lines.includes(line)) {
          lines.push(line);
        }
      });
  });
  const merged = mergeNotifyLinesByCategory(lines);
  if (!merged.length) {
    return;
  }
  const title =
    items.length === 1 && items[0]?.title
      ? items[0].title
      : getMergedNotifyBatchTitle(merged);
  await showSystemNotification(title, merged.join("\n"), items[0]?.tag || `jin-bg-${Date.now()}`);
}

async function saveSubscriptionDigest(payload = {}) {
  const messages = Array.isArray(payload.messages)
    ? payload.messages.map((item) => String(item || "").trim()).filter(Boolean)
    : String(payload.digest || "")
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
  await idbSet(LAST_DIGEST_KEY, payload.digest || messages.join("\n"));
  await idbSet(LAST_MESSAGES_KEY, messages);
}

async function runBackgroundSubscriptionCheck() {
  const prefs = await idbGet(PREFS_KEY);
  if (!prefs?.email || !Array.isArray(prefs.topics) || !prefs.topics.length) {
    return { checked: false, reason: "no-prefs" };
  }
  const { messages, recoveryMessages, recoveryState } = await buildBackgroundAlertMessages(prefs);
  const recoveryLines = (recoveryMessages || []).filter((line) => isRecoveryNotificationLine(line));
  const digestLines = prefs.notifyArmedByLocate
    ? [
        ...(recoveryMessages || []).filter((line) => !isRecoveryNotificationLine(line)),
        ...(messages || [])
      ]
    : [];
  const outgoing = [...recoveryLines, ...digestLines].filter(Boolean);
  if (!outgoing.length) {
    await idbSet(PREFS_KEY, { ...prefs, recoveryState, updatedAt: new Date().toISOString() });
    return { checked: true, notified: false, reason: prefs.notifyArmedByLocate ? "empty" : "recovery-only-empty" };
  }
  const storedMessages = await idbGet(LAST_MESSAGES_KEY);
  const previousMessages = Array.isArray(storedMessages)
    ? storedMessages
    : String((await idbGet(LAST_DIGEST_KEY)) || "")
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
  const previousSet = new Set(previousMessages);
  const changed = outgoing.filter((line) => !previousSet.has(line));
  const fresh = await filterCooldownMessages(changed, prefs.city || "", { force: false });
  const merged = mergeNotifyLinesByCategory(fresh);
  if (!merged.length) {
    await idbSet(PREFS_KEY, { ...prefs, recoveryState, updatedAt: new Date().toISOString() });
    return { checked: true, notified: false, reason: "unchanged" };
  }
  await showSystemNotification(
    getMergedNotifyBatchTitle(merged),
    merged.join("\n"),
    `jin-bg-${Date.now()}`
  );
  await idbSet(LAST_DIGEST_KEY, outgoing.join("\n"));
  await idbSet(LAST_MESSAGES_KEY, outgoing);
  await idbSet(PREFS_KEY, { ...prefs, recoveryState, updatedAt: new Date().toISOString() });
  return { checked: true, notified: true, count: fresh.length };
}

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SAVE_SUBSCRIPTION_PREFS") {
    event.waitUntil(
      (async () => {
        const incoming = data.payload || null;
        if (!incoming) {
          await idbSet(PREFS_KEY, null);
          return;
        }
        const current = (await idbGet(PREFS_KEY)) || {};
        await idbSet(PREFS_KEY, {
          ...current,
          ...incoming,
          notifyArmedByLocate: Boolean(incoming.notifyArmedByLocate || current.notifyArmedByLocate)
        });
      })()
    );
    return;
  }
  if (data.type === "SAVE_SUBSCRIPTION_DIGEST") {
    event.waitUntil(saveSubscriptionDigest(data.payload || {}));
    return;
  }
  if (data.type === "CLEAR_SUBSCRIPTION_PREFS") {
    event.waitUntil(
      Promise.all([idbSet(PREFS_KEY, null), idbSet(LAST_DIGEST_KEY, ""), idbSet(LAST_MESSAGES_KEY, [])])
    );
    return;
  }
  if (data.type === "RUN_BACKGROUND_CHECK") {
    event.waitUntil(runBackgroundSubscriptionCheck());
    return;
  }
  if (data.type === "SHOW_NOTIFICATION_BATCH") {
    event.waitUntil(showNotificationBatch(data.payload?.items || []));
    return;
  }
  if (data.type === "SHOW_WEATHER_STATUS") {
    event.waitUntil(showWeatherStatusNotification(data.payload || {}));
    return;
  }
  if (data.type === "SET_TORCH_STATE") {
    event.waitUntil(
      (async () => {
        const current = (await idbGet(WEATHER_STATUS_KEY)) || {};
        const torchOn = Boolean(data.payload?.on);
        const torchAvailable = current.torchAvailable !== false;
        const place = current.place || "所選位置";
        const torchText = torchAvailable ? `｜手電筒 ${torchOn ? "開" : "關"}` : "";
        await showWeatherStatusNotification({
          ...current,
          torchOn,
          body: `${place}${torchText}`
        });
      })()
    );
    return;
  }
  if (data.type !== "SHOW_NOTIFICATION") {
    return;
  }
  event.waitUntil(
    self.registration.showNotification(data.title || "預報訂閱通知", {
      body: data.body || "",
      tag: data.tag || `jin-${Date.now()}`,
      renotify: true,
      requireInteraction: true,
      vibrate: [180, 90, 180, 90, 180],
      icon: "./icons/icon-192.png",
      badge: "./icons/icon-192.png",
      data: data.data || {}
    })
  );
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "jin-disaster-check") {
    event.waitUntil(runBackgroundSubscriptionCheck());
  }
  if (event.tag === WEATHER_STATUS_PERIODIC_TAG) {
    event.waitUntil(refreshWeatherStatusFromNetwork());
  }
});

self.addEventListener("sync", (event) => {
  if (event.tag === "jin-disaster-check-once") {
    event.waitUntil(runBackgroundSubscriptionCheck());
  }
});

self.addEventListener("push", (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = { body: event.data?.text?.() || "您有新的訂閱通知" };
  }
  const bodies = Array.isArray(payload.messages)
    ? payload.messages
    : String(payload.body || "您有新的訂閱背景通知，請開啟平台查看。")
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
  event.waitUntil(
    showNotificationBatch([
      {
        title: payload.title || getMergedNotifyBatchTitle(bodies),
        body: mergeNotifyLinesByCategory(bodies).join("\n"),
        tag: payload.tag || `jin-push-${Date.now()}`
      }
    ])
  );
});
