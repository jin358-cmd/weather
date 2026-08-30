import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE_PUBLIC_URL = "https://jin358-cmd.github.io/weather/";
const BACKUP_TO = String(process.env.SUBSCRIBER_BACKUP_TO || "jin358@gmail.com").trim();
const RESEND_API_KEY = String(process.env.RESEND_API_KEY || "").trim();
const MAIL_FROM = String(process.env.MAIL_FROM || "").trim();
const GITHUB_TOKEN = String(process.env.GITHUB_TOKEN || "").trim();
const GITHUB_REPOSITORY = String(process.env.GITHUB_REPOSITORY || "jin358-cmd/weather").trim();
const GITHUB_REF_NAME = String(process.env.GITHUB_REF_NAME || "main").trim();
const SKIP_EMAIL = String(process.env.SKIP_EMAIL || "").trim() === "1";
const ROOT = process.cwd();
const REPORT_PATH = join(ROOT, "data", "subscriber-backup-latest.md");

function loadJson(name, fallback) {
  try {
    return JSON.parse(readFileSync(join(ROOT, "data", name), "utf8"));
  } catch {
    return fallback;
  }
}

function loadText(name) {
  try {
    return readFileSync(join(ROOT, "data", name), "utf8");
  } catch {
    return "";
  }
}

function looksLikeCloudflareChallenge(status, text) {
  return (
    status === 403 &&
    /just a moment|cloudflare|cf-mitigated|attention required/i.test(String(text || ""))
  );
}

async function checkGitHubFile(path) {
  const url = `https://api.github.com/repos/${GITHUB_REPOSITORY}/contents/${path}?ref=${encodeURIComponent(GITHUB_REF_NAME)}`;
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "weather-subscriber-backup",
  };
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }
  try {
    const response = await fetch(url, { headers });
    const payload = await response.json().catch(() => ({}));
    return {
      ok: response.ok,
      status: response.status,
      url: typeof payload.html_url === "string" ? payload.html_url : "",
      sha: typeof payload.sha === "string" ? payload.sha.slice(0, 7) : "",
      message: response.ok ? "可讀取" : String(payload.message || `HTTP ${response.status}`),
    };
  } catch (error) {
    return { ok: false, status: 0, url: "", message: error instanceof Error ? error.message : String(error) };
  }
}

function buildBackupBody({ now, subscribers, counters, csv, md, connections }) {
  const count = subscribers.length;
  const lines = subscribers.slice(0, 80).map((item, index) => {
    const city = String(item.city || "").trim() || "未填縣市";
    const topics = Array.isArray(item.topics) ? item.topics.join("、") : "";
    return `${index + 1}. ${item.email}｜${city}｜${topics || "未勾選主題"}`;
  });
  const connectionLines = connections.map((item) =>
    `- ${item.label}：${item.ok ? "成功" : "失敗"}（${item.status || "n/a"}）${item.sha ? ` sha ${item.sha}` : ""}${item.message ? `｜${item.message}` : ""}`
  );

  return [
    "台灣即時資訊 每日訂閱者資料庫備份",
    "",
    `備份時間：${now}`,
    `網站：${SITE_PUBLIC_URL}`,
    `寄送對象：${BACKUP_TO}`,
    `訂閱筆數：${count}`,
    `瀏覽／按讚：${Number(counters.visits || 0)} / ${Number(counters.likes || 0)}`,
    "",
    "GitHub 連線檢查",
    ...connectionLines,
    "",
    "GitHub 備份檔",
    `- CSV：${SITE_PUBLIC_URL}data/subscribers.csv`,
    `- Markdown：${SITE_PUBLIC_URL}data/subscribers.md`,
    `- 最新備份報告：${SITE_PUBLIC_URL}data/subscriber-backup-latest.md`,
    "",
    "本信用途：確認訂閱資料庫與 GitHub 檔案連線，並把當日訂閱清冊寄到管理者信箱。",
    "即使 FormSubmit 被 GitHub Actions IP 擋下，上方 GitHub 檔案仍是完整備份。",
    "",
    "當日訂閱者",
    ...(lines.length ? lines : ["（目前沒有訂閱者）"]),
    subscribers.length > 80 ? `…其餘 ${subscribers.length - 80} 筆已寫入 CSV / Markdown` : "",
    "",
    "subscribers.md",
    md || "（尚無 Markdown 備份）",
    "",
    "subscribers.csv",
    "```csv",
    csv || "email,city,district,topics,createdAt",
    "```",
  ].filter((line, index, list) => !(line === "" && list[index - 1] === "")).join("\n");
}

async function sendWithResend(subject, body) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: MAIL_FROM || "Weather Alerts <alerts@resend.dev>",
      to: [BACKUP_TO],
      subject,
      text: body,
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.message || `Resend HTTP ${response.status}`);
  }
  return payload.id || "resend";
}

async function sendWithFormSubmit(subject, body) {
  const form = new URLSearchParams();
  form.set("email", BACKUP_TO);
  form.set("_subject", subject);
  form.set("message", body);
  form.set("_template", "box");
  form.set("_captcha", "false");

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(BACKUP_TO)}`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Origin: SITE_PUBLIC_URL.replace(/\/$/, ""),
      Referer: SITE_PUBLIC_URL,
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    },
    body: form.toString(),
  });
  const text = await response.text();
  if (looksLikeCloudflareChallenge(response.status, text)) {
    const error = new Error("FormSubmit Cloudflare challenge");
    error.code = "FORMSUBMIT_CLOUDFLARE";
    error.status = response.status;
    throw error;
  }
  if (!response.ok) {
    throw new Error(`FormSubmit HTTP ${response.status}: ${text.slice(0, 240)}`);
  }
  try {
    const payload = JSON.parse(text);
    if (payload.success === "false" || payload.success === false) {
      throw new Error(payload.message || "FormSubmit rejected the backup email");
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`FormSubmit 回傳非 JSON：${text.slice(0, 240)}`);
    }
    throw error;
  }
  return "formsubmit";
}

const now = new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei", hour12: false });
const store = loadJson("subscribers.json", { subscribers: [] });
const counters = loadJson("counters.json", { visits: 0, likes: 0 });
const csv = loadText("subscribers.csv").trim();
const md = loadText("subscribers.md").trim();
const subscribers = Array.isArray(store.subscribers) ? store.subscribers : [];
const connections = [
  { label: "data/subscribers.csv", ...(await checkGitHubFile("data/subscribers.csv")) },
  { label: "data/subscribers.json", ...(await checkGitHubFile("data/subscribers.json")) },
  { label: "data/subscribers.md", ...(await checkGitHubFile("data/subscribers.md")) },
];
const subject = `【台灣即時資訊】每日訂閱者備份 ${now}｜${subscribers.length} 筆`;
const body = buildBackupBody({ now, subscribers, counters, csv, md, connections });

writeFileSync(REPORT_PATH, `${body}\n`, "utf8");
console.log(`wrote ${REPORT_PATH}`);
console.log(`subscriberCount=${subscribers.length}`);
console.log(
  "githubConnections",
  connections.map((item) => `${item.label}:${item.ok ? "ok" : "fail"}:${item.status}`).join(", ")
);

if (SKIP_EMAIL) {
  console.log("SKIP_EMAIL=1；已寫入 GitHub 備份報告，略過寄信");
  process.exit(0);
}

if (!BACKUP_TO) {
  throw new Error("Missing SUBSCRIBER_BACKUP_TO");
}

try {
  const id = RESEND_API_KEY
    ? await sendWithResend(subject, body)
    : await sendWithFormSubmit(subject, body);
  console.log(`subscriber backup email sent via ${RESEND_API_KEY ? "resend" : "formsubmit"}: ${id}`);
} catch (error) {
  if (!RESEND_API_KEY && error && error.code === "FORMSUBMIT_CLOUDFLARE") {
    console.warn(
      "FormSubmit 被 Cloudflare 擋下（GitHub Actions IP）。GitHub 檔案備份已完成，不中斷工作流程。"
    );
    console.warn("若要每天寄到 Gmail，請在 repo Secrets 設定 RESEND_API_KEY（建議）與 MAIL_FROM。");
    process.exit(0);
  }
  throw error;
}
