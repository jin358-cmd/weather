/* PMOS Weather v2 mobile: new information architecture, existing live modules preserved. */
(function(){
"use strict";
const mq=window.matchMedia("(max-width: 767px)");
function boot(){
 const app=document.querySelector("main.app"); if(!app||document.getElementById("v2-mobile-shell"))return;
 const shell=document.createElement("div"); shell.id="v2-mobile-shell";shell.className="v2-shell";
 shell.innerHTML='<div class="v2-brand"><span class="v2-orbit">◉</span><div><strong>PMOS <em>WEATHER</em></strong><small>TAIWAN · DISASTER INTELLIGENCE</small></div><span class="v2-live">● LIVE</span></div><div class="v2-head"><div><span class="v2-kicker">即時防災資訊</span><h1>掌握天氣<br><span>守護每一刻</span></h1><p>停班停課、氣象、地震，一眼掌握。</p></div><span class="v2-head-glyph" aria-hidden="true">◎</span></div><nav class="v2-tabs" aria-label="防災資訊快速導覽"><a href="#v2-overview">總覽</a><a href="#v2-typhoon">颱風</a><a href="#v2-earthquake">地震</a><a href="#v2-map">災害地圖</a></nav>';
 app.insertBefore(shell,app.firstChild);
 const overview=document.createElement("div");overview.id="v2-overview";overview.className="v2-group";
 const geo=app.querySelector(".controls"); if(geo){overview.appendChild(makeTitle("01","所在地區","定位與資料更新")); overview.appendChild(geo);}
 const closureTitle=app.querySelector(".visual-break-closure"),closure=app.querySelector(".closure-card"); if(closureTitle)closureTitle.remove();if(closure){overview.appendChild(makeTitle("02","停班停課","官方公告"));overview.appendChild(closure);}
 const weatherTitle=app.querySelector(".visual-break-weather"),weather=app.querySelector(".weather-block");if(weatherTitle)weatherTitle.remove();if(weather){overview.appendChild(makeTitle("03","即時天氣","在地觀測與降雨趨勢"));overview.appendChild(weather);}
 shell.appendChild(overview);
 const typhoon=app.querySelector(".typhoon-card"),tyTitle=app.querySelector(".visual-break-typhoon");
 const tyGroup=document.createElement("section");tyGroup.id="v2-typhoon";tyGroup.className="v2-group";tyGroup.appendChild(makeTitle("04","颱風動態","Windy 即時圖層 · 保留原功能"));if(tyTitle)tyTitle.remove();if(typhoon)tyGroup.appendChild(typhoon);shell.appendChild(tyGroup);
 const eq=app.querySelector(".earthquake-card"),eqTitle=app.querySelector(".visual-break-earthquake");const eqGroup=document.createElement("section");eqGroup.id="v2-earthquake";eqGroup.className="v2-group";eqGroup.appendChild(makeTitle("05","最新地震","震央與有感地震"));if(eqTitle)eqTitle.remove();if(eq)eqGroup.appendChild(eq);shell.appendChild(eqGroup);
 const alerts=app.querySelector(".alert-block"),alertTitle=app.querySelector(".visual-break-alert");const alertsGroup=document.createElement("details");alertsGroup.className="v2-extras";alertsGroup.innerHTML='<summary>通知訂閱與防災提醒 <span>展開設定 ＋</span></summary>';if(alertTitle)alertTitle.remove();if(alerts)alertsGroup.appendChild(alerts);shell.appendChild(alertsGroup);
 const map=app.querySelector(".map-card"),mapTitle=app.querySelector(".visual-break-map");const mapGroup=document.createElement("section");mapGroup.id="v2-map";mapGroup.className="v2-group v2-map-group";mapGroup.appendChild(makeTitle("06","災害監控地圖","原有災害圖層、CCTV 與監控功能"));if(mapTitle)mapTitle.remove();if(map)mapGroup.appendChild(map);shell.appendChild(mapGroup);
 const oldHero=app.querySelector(".hero");if(oldHero)oldHero.classList.add("v2-legacy-hero");
 // Re-use existing location button and listeners by MOVING it, never cloning.
 const locate=oldHero&&oldHero.querySelector(".locate-wrap");if(locate&&geo)geo.insertBefore(locate,geo.firstChild);
 const notes=app.querySelector(".notice-card");if(notes)notes.classList.add("v2-notes");
 // If viewport grows, keep original logic/data operational; this shell is mobile-only.
 // Leaflet often needs an invalidateSize after a DOM move.
 setTimeout(function(){window.dispatchEvent(new Event("resize"));},350);
 mq.addEventListener("change",function(){setTimeout(function(){window.dispatchEvent(new Event("resize"));},160);});
 document.querySelectorAll(".v2-tabs a").forEach(function(a){a.addEventListener("click",function(){document.querySelectorAll(".v2-tabs a").forEach(function(x){x.classList.remove("active")});a.classList.add("active")})});
}
function makeTitle(n,title,sub){const el=document.createElement("div");el.className="v2-section-title";el.innerHTML='<span class="v2-index">'+n+'</span><div><h2>'+title+'</h2><p>'+sub+'</p></div>';return el}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();