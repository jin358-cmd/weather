(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.PmosEditorCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const SCHEMA = 'pmos.weather.visual-editor.v3';
  const MAX_LOGO_DATA_URL = 4_100_000;
  const ELEMENT_KEYS = ['logo', 'closure', 'typhoon', 'weather', 'quake', 'map'];
  const DEVICES = ['desktop', 'mobile'];

  function plainObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  function numberIn(value, min, max, fallback) {
    const number = Number(value);
    return Number.isFinite(number) ? Math.max(min, Math.min(max, number)) : fallback;
  }

  function text(value, max, fallback = '') {
    return typeof value === 'string' ? value.slice(0, max) : fallback;
  }

  function defaultState() {
    return { schema: SCHEMA, savedAt: null, device: 'desktop', layout: { cardGap: 16 }, logo: null, elements: {}, texts: {} };
  }

  function sanitizeTransform(raw) {
    const value = plainObject(raw) ? raw : {};
    const clean = { x: numberIn(value.x, -600, 600, 0), y: numberIn(value.y, -600, 600, 0) };
    if (value.width !== undefined) clean.width = numberIn(value.width, 40, 1400, 240);
    if (value.height !== undefined) clean.height = numberIn(value.height, 32, 1600, 160);
    if (value.fontSize !== undefined) clean.fontSize = numberIn(value.fontSize, 10, 96, 18);
    return clean;
  }

  function validateLogo(raw) {
    if (raw === null || raw === undefined) return null;
    if (!plainObject(raw)) throw new Error('Logo 設定必須是物件');
    const dataUrl = text(raw.dataUrl, MAX_LOGO_DATA_URL + 1);
    const match = /^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(dataUrl);
    if (!match || dataUrl.length > MAX_LOGO_DATA_URL) throw new Error('Logo 必須是 3 MB 內的 PNG、JPEG 或 WebP 原始資料');
    if (match[2].length % 4 !== 0) throw new Error('Logo Base64 資料無效');
    return {
      dataUrl,
      name: text(raw.name, 160, 'uploaded-logo'),
      type: 'image/' + match[1],
      bytes: Math.round(match[2].replace(/=+$/, '').length * 3 / 4),
      sha256: /^[a-f0-9]{64}$/i.test(raw.sha256 || '') ? String(raw.sha256).toLowerCase() : null
    };
  }

  function validateDraft(raw) {
    if (!plainObject(raw) || raw.schema !== SCHEMA) throw new Error('不是支援的 PMOS Visual Editor v3 備份');
    const clean = defaultState();
    clean.savedAt = typeof raw.savedAt === 'string' && !Number.isNaN(Date.parse(raw.savedAt)) ? raw.savedAt : null;
    clean.device = DEVICES.includes(raw.device) ? raw.device : 'desktop';
    clean.layout.cardGap = numberIn(raw.layout && raw.layout.cardGap, 0, 64, 16);
    clean.logo = validateLogo(raw.logo);
    if (raw.elements !== undefined && !plainObject(raw.elements)) throw new Error('elements 格式錯誤');
    for (const [key, value] of Object.entries(raw.elements || {})) {
      if (!/^(logo|closure|typhoon|weather|quake|map|text:[a-z0-9_-]+:[a-z0-9_-]+)$/i.test(key)) continue;
      clean.elements[key] = sanitizeTransform(value);
    }
    if (raw.texts !== undefined && !plainObject(raw.texts)) throw new Error('texts 格式錯誤');
    const entries = Object.entries(raw.texts || {});
    if (entries.length > 100) throw new Error('文字編輯項目過多');
    for (const [key, value] of entries) {
      if (!/^text:[a-z0-9_-]+:[a-z0-9_-]+$/i.test(key) || typeof value !== 'string') continue;
      clean.texts[key] = value.slice(0, 2000);
    }
    return clean;
  }

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function equal(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
  function pushUndo(stack, state, limit = 50) {
    const next = Array.isArray(stack) ? stack.slice() : [];
    const copy = clone(state);
    if (!next.length || !equal(next[next.length - 1], copy)) next.push(copy);
    return next.slice(-limit);
  }
  function buildBackup(state, now) {
    const clean = validateDraft({ ...state, schema: SCHEMA });
    clean.savedAt = now || new Date().toISOString();
    return clean;
  }
  return { SCHEMA, ELEMENT_KEYS, MAX_LOGO_DATA_URL, defaultState, validateDraft, sanitizeTransform, pushUndo, buildBackup, clone, equal };
});
