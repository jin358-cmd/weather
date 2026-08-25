#!/usr/bin/env node
/**
 * Rebuild the cumulative subscriber table and raise the public counter floor.
 * Used by the daily GitHub Actions job; never decreases visits/likes.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SUBSCRIBERS_PATH = path.join(ROOT, "data", "subscribers.json");
const SUBSCRIBERS_CSV_PATH = path.join(ROOT, "data", "subscribers.csv");
const SUBSCRIBERS_MD_PATH = path.join(ROOT, "data", "subscribers.md");
const COUNTERS_PATH = path.join(ROOT, "data", "counters.json");
const ABACUS_BASE = "https://abacus.jasoncameron.dev";
const COUNTER_NAMESPACE = "jin-weather-tw-v1";

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

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
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
    updatedAt: entry.updatedAt || ""
  };
}

function buildCsv(records) {
  const header = ["序號", "Email", "縣市", "鄉鎮", "主題", "緯度", "經度", "更新時間"];
  const rows = records.map((row, index) => [
    index + 1,
    row.email,
    row.city,
    row.township,
    row.topics.join("|"),
    Number.isFinite(row.lat) ? row.lat : "",
    Number.isFinite(row.lon) ? row.lon : "",
    row.updatedAt
  ]);
  return [header, ...rows].map((line) => line.map(csvCell).join(",")).join("\n") + "\n";
}

function buildMarkdown(records) {
  const stamped = taipeiDateTime();
  const lines = [
    "# 訂閱者累計名單",
    "",
    `- 更新時間（台北）：${stamped}`,
    `- 累計筆數：${records.length}`,
    "",
    "| 序號 | Email | 縣市 | 鄉鎮 | 主題 | 更新時間 |",
    "| ---: | --- | --- | --- | --- | --- |"
  ];
  if (!records.length) {
    lines.push("| | （目前無訂閱者） | | | | |");
  } else {
    records.forEach((row, index) => {
      const topics = row.topics.length ? row.topics.join("、") : "-";
      lines.push(
        `| ${index + 1} | ${row.email} | ${row.city || "-"} | ${row.township || "-"} | ${topics} | ${row.updatedAt || "-"} |`
      );
    });
  }
  lines.push("");
  return lines.join("\n");
}

async function fetchAbacus(key) {
  const url = `${ABACUS_BASE}/get/${COUNTER_NAMESPACE}/${encodeURIComponent(key)}`;
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      return { ok: false, status: response.status, value: null };
    }
    const payload = await response.json();
    const value = Number(payload?.value ?? payload?.count);
    return {
      ok: true,
      status: response.status,
      value: Number.isFinite(value) ? Math.max(0, Math.floor(value)) : null
    };
  } catch (error) {
    return { ok: false, status: 0, value: null, error: String(error?.message || error) };
  }
}

async function main() {
  const raw = await readFile(SUBSCRIBERS_PATH, "utf8");
  const payload = JSON.parse(raw);
  const records = (Array.isArray(payload.subscribers) ? payload.subscribers : [])
    .map(normalizeRecord)
    .filter(Boolean)
    .sort((a, b) => String(a.updatedAt).localeCompare(String(b.updatedAt)) || a.email.localeCompare(b.email));

  await writeFile(SUBSCRIBERS_CSV_PATH, buildCsv(records), "utf8");
  await writeFile(SUBSCRIBERS_MD_PATH, buildMarkdown(records), "utf8");

  let counters = { visits: 0, likes: 0 };
  try {
    counters = JSON.parse(await readFile(COUNTERS_PATH, "utf8"));
  } catch {
    /* start from zero floor */
  }
  const visitsRemote = await fetchAbacus("visits");
  const likesRemote = await fetchAbacus("likes");
  const nextCounters = {
    updatedAt: new Date().toISOString(),
    visits: Math.max(Number(counters.visits) || 0, Number(visitsRemote.value) || 0),
    likes: Math.max(Number(counters.likes) || 0, Number(likesRemote.value) || 0),
    source: "abacus.jasoncameron.dev",
    namespace: COUNTER_NAMESPACE,
    note: "全站累進下限。每日工作流程只會上修、不會歸零。"
  };
  await writeFile(COUNTERS_PATH, `${JSON.stringify(nextCounters, null, 2)}\n`, "utf8");

  const report = {
    subscriberCount: records.length,
    csvPath: "data/subscribers.csv",
    markdownPath: "data/subscribers.md",
    counters: nextCounters,
    abacus: {
      visits: visitsRemote,
      likes: likesRemote
    }
  };
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
