#!/usr/bin/env node
/**
 * Daily backup of subscriber database (data/subscribers.json)
 * emailed to the owner inbox for archival.
 *
 * Delivery order:
 * 1) Resend API when RESEND_API_KEY is set
 * 2) FormSubmit.co AJAX fallback (recipient must activate once)
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SUBSCRIBERS_PATH = path.join(ROOT, "data", "subscribers.json");
const SUBSCRIBERS_CSV_PATH = path.join(ROOT, "data", "subscribers.csv");
const SUBSCRIBERS_MD_PATH = path.join(ROOT, "data", "subscribers.md");
const GITHUB_CONTENTS_CSV =
  "https://api.github.com/repos/jin358-cmd/weather/contents/data/subscribers.csv";
const GITHUB_CONTENTS_JSON =
  "https://api.github.com/repos/jin358-cmd/weather/contents/data/subscribers.json";
// Must match app.js SITE_PUBLIC_URL — subscriber-facing platform link.
const SITE_PUBLIC_URL = "https://jin358-cmd.github.io/weather/";
const BACKUP_TO = process.env.SUBSCRIBER_BACKUP_TO || "jin358@gmail.com";
const FROM_EMAIL = process.env.MAIL_FROM || "停班停課通報 <onboarding@resend.dev>";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

function taipeiDateKey(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function taipeiDateTime(date = new Date()) {
  return new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(date);
}

function normalizeRecord(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const email = String(entry.email || "")
    .trim()
    .toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return null;
  }
  return {
    email,
    topics: Array.isArray(entry.topics) ? entry.topics.map(String) : [],
    city: String(entry.city || "").trim(),
    township: String(entry.township || "").trim(),
    lat: Number(entry.lat),
    lon: Number(entry.lon),
    updatedAt: entry.updatedAt || null
  };
}

async function sendWithResend(toEmail, subject, text) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [toEmail],
      subject,
      text
    })
  });
  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`Resend HTTP ${response.status}: ${raw.slice(0, 240)}`);
  }
  return { provider: "resend", raw };
}

async function sendWithFormSubmit(toEmail, subject, text) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "box",
      _captcha: "false",
      _honey: "",
      message: text,
      platform: SITE_PUBLIC_URL,
      backupType: "subscribers-database"
    })
  });
  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`FormSubmit HTTP ${response.status}: ${raw.slice(0, 240)}`);
  }
  return { provider: "formsubmit", raw };
}

async function sendEmail(toEmail, subject, text) {
  if (RESEND_API_KEY) {
    return sendWithResend(toEmail, subject, text);
  }
  return sendWithFormSubmit(toEmail, subject, text);
}

async function testGithubContents(url, label) {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "jin358-weather-daily-report"
      }
    });
    const raw = await response.text();
    let name = "";
    try {
      name = JSON.parse(raw)?.name || "";
    } catch {
      name = "";
    }
    return {
      label,
      ok: response.ok && Boolean(name),
      status: response.status,
      name: name || "-"
    };
  } catch (error) {
    return {
      label,
      ok: false,
      status: 0,
      name: "-",
      error: String(error?.message || error)
    };
  }
}

function formatConnectionLine(result) {
  const mark = result.ok ? "正常" : "異常";
  const extra = result.error ? `｜${result.error}` : "";
  return `${result.label}：${mark}（HTTP ${result.status}｜${result.name}）${extra}`;
}

function buildBackupBody(payload, records, connectionResults, tablePreview) {
  const dateKey = taipeiDateKey();
  const listLines = records.length
    ? records
        .map((row, index) => {
          const area = [row.city, row.township].filter(Boolean).join("") || "未填地區";
          const topics = row.topics.length ? row.topics.join(",") : "-";
          return `${index + 1}. ${row.email}｜${area}｜主題:${topics}`;
        })
        .join("\n")
    : "（目前無訂閱者）";

  const database = {
    updatedAt: payload.updatedAt || null,
    backedUpAt: new Date().toISOString(),
    count: records.length,
    subscribers: records
  };

  return [
    "【訂閱者資料庫每日備份／連接回報】",
    `備份日期：${dateKey}（台北時間 ${taipeiDateTime()}）`,
    `收件備份信箱：${BACKUP_TO}`,
    `訂閱筆數：${records.length}`,
    `平台：${SITE_PUBLIC_URL}`,
    `資料來源：data/subscribers.json`,
    `累計表格：data/subscribers.csv、data/subscribers.md`,
    "",
    "—— GitHub 上傳連接測試 ——",
    ...connectionResults.map(formatConnectionLine),
    "",
    "—— 訂閱名單摘要 ——",
    listLines,
    "",
    "—— 累計表格預覽 ——",
    tablePreview || "（尚無表格）",
    "",
    "—— 完整資料庫 JSON ——",
    JSON.stringify(database, null, 2),
    "",
    "本信為系統自動每日備份與連接回報，請妥善保存。"
  ].join("\n");
}

async function main() {
  const raw = await readFile(SUBSCRIBERS_PATH, "utf8");
  const payload = JSON.parse(raw);
  const list = Array.isArray(payload.subscribers) ? payload.subscribers : [];
  const records = list.map(normalizeRecord).filter(Boolean);
  let tablePreview = "";
  try {
    tablePreview = await readFile(SUBSCRIBERS_MD_PATH, "utf8");
  } catch {
    try {
      tablePreview = await readFile(SUBSCRIBERS_CSV_PATH, "utf8");
    } catch {
      tablePreview = "（尚未產生表格檔）";
    }
  }

  const connectionResults = await Promise.all([
    testGithubContents(GITHUB_CONTENTS_CSV, "subscribers.csv"),
    testGithubContents(GITHUB_CONTENTS_JSON, "subscribers.json")
  ]);

  const dateKey = taipeiDateKey();
  const allOk = connectionResults.every((item) => item.ok);
  const subject = `【訂閱名單備份】${dateKey}｜${records.length} 筆｜連接${allOk ? "正常" : "異常"}`;
  const body = buildBackupBody(payload, records, connectionResults, tablePreview);
  const result = await sendEmail(BACKUP_TO, subject, body);

  console.log(
    `Subscriber backup emailed to ${BACKUP_TO}: count=${records.length} via ${result.provider} connect=${allOk ? "ok" : "fail"}`
  );
  connectionResults.forEach((item) => {
    console.log(formatConnectionLine(item));
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
