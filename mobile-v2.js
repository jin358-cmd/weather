/* PMOS Weather Mobile v2.1: independent, mobile-first information architecture.
   Existing operational modules retain their original nodes and event listeners. */
(function(){
"use strict";
function init(){
 const app=document.querySelector("main.app");
 if(!app||document.getElementById("v2-mobile-shell"))return;
 const shell=document.createElement("div");shell.id="v2-mobile-shell";shell.className="v2-shell";
 shell.innerHTML=`<header class="v2-topbar" id="v2-overview"><div class="v2-mark" aria-hidden="true">◈</div><div class="v2-brandtext"><b>PMOS<span> WEATHER</span></b><small>臺灣即時氣象 · 防災中心</small></div><span class="v2-signal"><i></i> 即時資訊</span></header>
 <div class="v2-quickloc"><span>◎ <b id="v2-place">目前選定地區</b></span><button type="button" id="v2-change-place">變更地區</button></div>
 <nav class="v2-actions" aria-label="防災功能快速導覽"><a href="#v2-notices"><span>▣</span><b>停班停課</b><small>官方公告</small></a><a href="#v2-windy"><span>◎</span><b>颱風動態</b><small>Windy 即時圖層</small></a><a href="#v2-conditions"><span>◉</span><b>天氣現況</b><small>即時觀測</small></a><a href="#v2-earthquake"><span>⌁</span><b>地震資訊</b><small>最新事件</small></a><a href="#v2-monitor"><span>⬡</span><b>災害地圖</b><small>地圖與路口監控</small></a></nav><a class="v2-more-link" href="#v2-more">＋ 訂閱及其他設定 <span>前往設定 ↗</span></a>
 <div class="v2-column" id="v2-content"></div><footer class="v2-bottomline">PMOS WEATHER <span>·</span> 公告以官方最新資料為準</footer>
 <nav class="v2-bottomnav" aria-label="底部導覽"><a href="#v2-notices">▣<span>停班停課</span></a><a href="#v2-windy">◎<span>颱風</span></a><a href="#v2-conditions">☀<span>天氣</span></a><a href="#v2-monitor">⬡<span>地圖</span></a></nav>`;
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
 panel("v2-notices","停班停課","01 / OFFICIAL NOTICES",".closure-card","最新公告依官方資訊更新");
 panel("v2-windy","颱風動態","02 / TYPHOON TRACK",".typhoon-card","保留原 Windy 互動圖層",true);
 panel("v2-conditions","在地天氣","03 / CONDITIONS",".weather-block","觀測與降雨趨勢");
 panel("v2-earthquake","最新地震","04 / EARTHQUAKE",".earthquake-card","近期地震與震央資訊");
 panel("v2-monitor","災害監控地圖","05 / MONITORING MAP",".map-card","保留原圖層、監控與 CCTV",true);
 // Show the actual official notice panel immediately, not a decorative hero or a duplicate summary.
 shell.querySelector(".v2-actions").before(document.getElementById("v2-notices"));
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
  const el=document.getElementById("v2-place");if(el)el.textContent=place||"請選擇地區";
 }
 sync();setInterval(sync,20000);
 // Moving Leaflet containers requires the map to recalculate its viewport.
 setTimeout(()=>window.dispatchEvent(new Event("resize")),650);
 document.querySelectorAll(".v2-actions a,.v2-bottomnav a").forEach(a=>a.addEventListener("click",()=>setTimeout(()=>window.dispatchEvent(new Event("resize")),250)));
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();