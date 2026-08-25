# 停班停課+即時災害通報平台

## 目前首頁

`index.html` 為即時災害通報平台（暮藍靜夜風格）。

- 停班停課、颱風動態、地震通報、鄉鎮天氣
- 訂閱通知、路口／國道 CCTV、災害警示圖
- 災害警示圖圖例對照顯示於地圖上方，可點選聚焦
- `legacy.html` 會導向首頁，保留舊網址

縣市詳情頁：`dashboard.html`

## 全台天氣與停班停課 Dashboard

首頁已升級為公務風格 Dashboard，包含：

- 全台總覽（摘要、警特報、縣市天氣卡、停班停課表）
- 縣市詳情（即時天氣、6 小時／7 天預報、警特報、停班停課）
- 訂閱設定（mock state，預留 API）
- 通知歷史（類型篩選與日期排序）

模組位置：

- 資料：`data/weather.js`、`data/alerts.js`、`data/suspensions.js`、`data/notifications.js`
- Provider：`lib/weather-provider.js`（TypeScript 契約：`lib/weather-provider.ts`）
- 元件：`components/*`
- 入口：`dashboard.html` + `dashboard.js` + `dashboard.css`
- 即時災害通報平台：`index.html`（`legacy.html` 導向此頁）

- 停班停課、颱風動態、地震通報、鄉鎮天氣
- 訂閱通知、路口／國道 CCTV、災害警示圖
- 入口維持 GitHub Pages 靜態部署，腳本為 `app.js` + `styles.css`

這是一個純前端網站，另提供：

- 台灣各縣市即時天氣資訊（溫度、濕度、風速、降雨量）
- 鄉鎮級天氣資訊（體感溫度、降雨機率、雲量、氣壓）
- 未來 12 小時降雨機率
- 降雨預測與 24 小時累積雨量估算
- 停班停課通知整合顯示（連結官方公告來源）
- 全台政府國道 CCTV 交流道監控清單（依所選縣市交流道近距排序）
- 高對比精簡地圖（積淹水／停電／CCTV 圖層）
- AI 災害提醒、颱風分析、地震通報、空氣品質、會員訂閱通知
- 自動更新（15／30／60 分鐘可選）

## 本地啟動

```bash
python3 -m http.server 4173
```

開啟：`http://localhost:4173`

## 公開網站（GitHub Pages）

程式碼已在公開倉庫：https://github.com/jin358-cmd/weather

預期公開網址：

**https://jin358-cmd.github.io/weather/**

### 完整程式碼備份

- 下載 ZIP：https://jin358-cmd.github.io/weather/weather-2026-08-25.zip
- 下載頁：https://jin358-cmd.github.io/weather/download.html
- GitHub 備份資料夾（標註日期）：[`backups/2026-08-25`](https://github.com/jin358-cmd/weather/tree/main/backups/2026-08-25)
- 先前 V1：https://jin358-cmd.github.io/weather/weather-v1.zip

### 訂閱通知（每日天氣預報 Email）

按下「儲存訂閱」後：

1. 系統會立即寄送**訂閱成功通知**到訂閱者信箱（列出已勾選主題與地區）  
2. 若有勾選「每日天氣預報」，同一封信會附上今日預報，之後**每天一次**寄送該地區天氣預報  
3. 首次寄送到新信箱時，請先點選服務商（FormSubmit）的確認信，之後即可穩定收信  
4. **關閉網站後仍可收到背景系統通知**（需允許通知權限；建議「加到主畫面／安裝 PWA」，Chrome 等瀏覽器會以背景定期檢查積淹水／天氣警戒）

伺服器端每日排程（即使用戶未開啟網站也會寄）：

- 工作流程：`.github/workflows/daily-weather-email.yml`（每天約台北時間 07:00）
- 訂閱名單資料庫：`data/subscribers.json`
- 手動登錄訂閱者：Actions → **Register weather subscriber**
- 訂閱名單每日備份：`.github/workflows/daily-subscriber-backup.yml`（每天約台北時間 07:10）
  - 腳本：`scripts/send-subscriber-backup-email.mjs`
  - 備份收件：`jin358@gmail.com`（完整 JSON＋名單摘要）
  - 可手動執行：Actions → **Daily subscriber database backup email**
- 可選強化寄信品質：於 Repo Secrets 設定 `RESEND_API_KEY`（以及可選 `MAIL_FROM`）
- 若使用 FormSubmit：請先對 `jin358@gmail.com` 完成一次啟動確認信

### 一次性啟用（倉庫擁有者必做，約 30 秒）

目前 Actions 無法代替擁有者「第一次」開啟 Pages（權限限制）。請用擁有者帳號完成：

1. 開啟 [Pages 設定](https://github.com/jin358-cmd/weather/settings/pages)
2. **Build and deployment → Source** 選其中一種：
   - **最快**：`Deploy from a branch` → Branch 選 `main` → Folder `/ (root)` → Save  
   - 或：`GitHub Actions`（之後每次推 `main` 會自動部署）
3. 若選 GitHub Actions，請再到 [Actions 權限](https://github.com/jin358-cmd/weather/settings/actions)：
   - Workflow permissions → **Read and write permissions** → Save
4. 開啟 [Actions](https://github.com/jin358-cmd/weather/actions) 手動執行 **Deploy site to GitHub Pages**（或再推一次 `main`）
5. 約 1～2 分鐘後造訪：https://jin358-cmd.github.io/weather/

### 自動部署工作流程

已配置：`.github/workflows/deploy-pages.yml`

- 觸發：推送到 `main`，或手動 `workflow_dispatch`
- 部署目標：GitHub Pages

## CCTV 資料更新

目前網站使用部署時快照資料：`data/freeway_cctv.json`，來源為：

- `https://thbapp.thb.gov.tw/services/cctv/freeway`

積淹水警示圖層資料：

- 測站快照：`data/flood_stations.json`
- 即時水深：`https://opendata.wra.gov.tw/api/v2/1b991bbb-ad85-4e7a-b931-06ce8749d3ed?format=JSON`

颱風分析資料：

- `https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html`
- `https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_WARN.html`

地震通報資料：

- 中央氣象署／測報中心台灣地區有感與顯著有感地震：`https://scweb.cwa.gov.tw/zh-tw/earthquake/data`
- 國家緊急訊息（PWS）通報頁：`https://scweb.cwa.gov.tw/zh-tw/earthquake/pws/{eventId}`
- 官方對照頁：`https://www.cwa.gov.tw/V8/C/E/index.html`
- 備援：USGS FDSN 台灣鄰近區域（僅在氣象署暫時無法連線時）
