/* Mobile UI preview only. Keeps existing data loaders and alerts intact. */
(function () {
  "use strict";
  var mq = window.matchMedia("(max-width: 767px)");
  function init() {
    var app = document.querySelector("main.app");
    if (!app || document.querySelector(".mobile-v2-nav")) return;
    var nav = document.createElement("nav");
    nav.className = "mobile-v2-nav";
    nav.setAttribute("aria-label", "手機快速導覽");
    var groups = [
      {name:"選擇地區", selector:".controls", open:true},
      {name:"停班停課", selector:".visual-break-closure", open:true},
      {name:"鄉鎮天氣", selector:".visual-break-weather", open:true},
      {name:"颱風動態", selector:".visual-break-typhoon", open:false},
      {name:"地震", selector:".visual-break-earthquake", open:false}
    ];
    groups.forEach(function (group, idx) {
      var heading = app.querySelector(group.selector);
      if (!heading) return;
      var target = heading;
      var id = "mobile-v2-section-" + idx;
      target.id = target.id || id;
      var a = document.createElement("a");
      a.href = "#" + target.id;
      a.textContent = group.name;
      nav.appendChild(a);
      if (!heading.classList.contains("visual-break")) return;
      var sections = [];
      var node = heading.nextElementSibling;
      while (node && !node.classList.contains("visual-break") && node.tagName !== "FOOTER") {
        sections.push(node);
        node = node.nextElementSibling;
      }
      var button = document.createElement("button");
      button.type = "button";
      button.className = "mobile-v2-toggle";
      button.textContent = "查看" + group.name + "詳細資訊";
      button.setAttribute("aria-expanded", String(group.open));
      heading.insertAdjacentElement("afterend", button);
      function update() {
        var hide = mq.matches && button.getAttribute("aria-expanded") !== "true";
        sections.forEach(function (el) {el.classList.toggle("mobile-v2-folded", hide);});
      }
      button.addEventListener("click", function () {
        button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "true" ? "false" : "true");
        update();
      });
      a.addEventListener("click", function () {
        button.setAttribute("aria-expanded", "true");
        update();
      });
      mq.addEventListener("change", update);
      update();
    });
    var controls = app.querySelector(".controls");
    if (controls) controls.insertAdjacentElement("beforebegin", nav);
    // Allow all content on large screens, including after resizing from mobile.
    mq.addEventListener("change", function () {
      if (!mq.matches) document.querySelectorAll(".mobile-v2-folded").forEach(function (el) {el.classList.remove("mobile-v2-folded");});
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
