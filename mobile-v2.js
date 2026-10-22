/* PMOS Weather Mobile v2.1: independent, mobile-first information architecture.
   Existing operational modules retain their original nodes and event listeners. */
(function(){
"use strict";
function init(){
 const app=document.querySelector("main.app");
 if(!app||document.getElementById("v2-mobile-shell"))return;
 const shell=document.createElement("div");shell.id="v2-mobile-shell";shell.className="v2-shell";
 shell.innerHTML=`<header class="v2-topbar"><div class="v2-mark" aria-hidden="true">◈</div><div class="v2-brandtext"><b>PMOS<span> WEATHER</span></b><small>臺灣即時氣象 · 防災中心</small></div><span class="v2-signal"><i></i> 即時資訊</span></header>
 <section class="v2-command" id="v2-overview"><div class="v2-command-meta"><span>WEATHER COMMAND CENTER</span><span id="v2-clock">--:--</span></div><h1>現在，值得注意的事。</h1><p class="v2-command-sub">以所在位置為中心，掌握天氣與災防動態。</p><div class="v2-location-row"><span>◎ <b id="v2-place">目前選定地區</b></span><button type="button" id="v2-change-place">變更地區 ↗</button></div>
 <div class="v2-priority"><div><span class="v2-label">停班停課</span><strong id="v2-closure-status">資料同步中</strong><small id="v2-closure-note">以政府公告為準</small></div><div><span class="v2-label">當地天氣</span><strong id="v2-weather-status">資料同步中</strong><small>目前區域天氣</small></div></div>
 <div class="v2-notice">ⓘ 警報與公告以官方最新資料為準，未取得資料時不表示安全。</div></section>
 <nav class="v2-actions" aria-label="主要服務"><a href="#v2-conditions"><span>◉</span><b>天氣現況</b><small>觀測與預報</small></a><a href="#v2-notices"><span>▣</span><b>停班停課</b><small>公告查詢</small></a><a href="#v2-earthquake"><span>⌁</span><b>地震資訊</b><small>最新事件</small></a><a href="#v2-windy"><span>◎</span><b>颱風動態</b><small>Windy</small></a><a href="#v2-monitor"><span>⬡</span><b>災害地圖</b><small>即時監控</small></a><a href="#v2-more"><span>＋</span><b>更多服務</b><small>訂閱及設定</small></a></nav>
 <div class="v2-column" id="v2-content"></div><footer class="v2-bottomline">PMOS WEATHER <span>·</span> 情報更新以來源資料為準</footer>
 <nav class="v2-bottomnav" aria-label="底部導覽"><a href="#v2-overview">⌂<span>首頁</span></a><a href="#v2-conditions">☀<span>天氣</span></a><a href="#v2-windy">◉<span>颱風</span></a><a href="#v2-monitor">⬡<span>地圖</span></a></nav>`;
 app.insertBefore(shell,app.firstChild);
 const column=shell.querySelector("#v2-content");
 function panel(id,title,eyebrow,selector,desc,locked){
  const node=app.querySelector(selector);
  const sec=document.createElement("section");sec.id=id;sec.className="v2-panel"+(locked?" v2-kept":"");
  sec.innerHTML='<div class="v2-panel-head"><div><small>'+eyebrow+'</small><h2>'+title+'</h2></div><span class="v2-panel-symbol" aria-hidden="true">↗</span></div>'+(desc?'<p class="v2-panel-desc">'+desc+'</p>':'');
  if(node)sec.appendChild(node);else sec.insertAdjacentHTML("beforeend",'<p class="v2-empty">此服務暫時無法顯示。</p>');
  column.appendChild(sec);return sec;
 }
 // Only Windy and the hazard-monitoring map retain their original visual components.
 panel("v2-conditions","在地天氣","01 / CONDITIONS",".weather-block","觀測與降雨趨勢");
 panel("v2-notices","停班停課","02 / OFFICIAL NOTICES",".closure-card","最新公告依官方資訊更新");
 panel("v2-earthquake","最新地震","03 / EARTHQUAKE",".earthquake-card","近期地震與震央資訊");
 panel("v2-windy","颱風動態","04 / TYPHOON TRACK",".typhoon-card","保留原 Windy 互動圖層",true);
 panel("v2-monitor","災害監控地圖","05 / MONITORING MAP",".map-card","保留原圖層、監控與 CCTV",true);
 const extra=document.createElement("section");extra.id="v2-more";extra.className="v2-panel";
 extra.innerHTML='<div class="v2-panel-head"><div><small>06 / PREFERENCES</small><h2>個人設定與其他服務</h2></div></div><details class="v2-drawer"><summary>地區與資料更新 <span>展開 ＋</span></summary><div class="v2-drawer-body" id="v2-region-box"></div></details><details class="v2-drawer"><summary>防災通知與訂閱 <span>展開 ＋</span></summary><div class="v2-drawer-body" id="v2-alert-box"></div></details>';
 column.appendChild(extra);
 const controls=app.querySelector(".controls");if(controls)extra.querySelector("#v2-region-box").appendChild(controls);
 const alert=app.querySelector(".alert-block");if(alert)extra.querySelector("#v2-alert-box").appendChild(alert);
 const hero=app.querySelector(".hero");const locate=hero&&hero.querySelector(".locate-wrap");if(locate&&controls)controls.insertBefore(locate,controls.firstChild);
 document.getElementById("v2-change-place").addEventListener("click",()=>{extra.querySelector(".v2-drawer").open=true;extra.scrollIntoView({behavior:"smooth",block:"start"});});
 function sync(){
  const city=document.getElementById("citySelect"),town=document.getElementById("townshipSelect");
  const place=[city?.selectedOptions?.[0]?.textContent,town?.selectedOptions?.[0]?.textContent].filter(x=>x&&!/選擇|請選/.test(x)).join(" · ");
  document.getElementById("v2-place").textContent=place||"請選擇地區";
  const closure=document.getElementById("closureList"),cmeta=document.getElementById("closureMeta");
  const cr=closure?.innerText?.trim()||cmeta?.innerText?.trim()||"資料同步中";
  document.getElementById("v2-closure-status").textContent=cr.slice(0,38);
  const w=app.querySelector(".weather-temp-main");
  const wt=w?.innerText?.trim();document.getElementById("v2-weather-status").textContent=wt?wt.slice(0,18):"查看天氣現況";
  const now=new Intl.DateTimeFormat("zh-TW",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date());
  document.getElementById("v2-clock").textContent=now+" TPE";
 }
 sync();setInterval(sync,20000);
 // Moving Leaflet containers requires the map to recalculate its viewport.
 setTimeout(()=>window.dispatchEvent(new Event("resize")),650);
 document.querySelectorAll(".v2-actions a,.v2-bottomnav a").forEach(a=>a.addEventListener("click",()=>setTimeout(()=>window.dispatchEvent(new Event("resize")),250)));
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();