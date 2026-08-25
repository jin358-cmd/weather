(function () {
  // 弘泰科技 Channel Talk lounge: https://51y0d.channel.io
  const CHANNEL_TALK_PLUGIN_KEY = "f0792141-b167-4021-9c6d-93ef8a8f893d";
  const CHANNEL_TALK_LOUNGE_URL = "https://51y0d.channel.io";
  const FEEDBACK_MAIL = "jin358@gmail.com";
  const BOOT_TIMEOUT_MS = 12000;

  function loadChannelTalkSdk() {
    if (window.ChannelIOInitialized && window.ChannelIO) {
      return;
    }
    if (!window.ChannelIO) {
      const ch = function () {
        ch.c(arguments);
      };
      ch.q = [];
      ch.c = function (args) {
        ch.q.push(args);
      };
      window.ChannelIO = ch;
    }
    function inject() {
      if (window.ChannelIOInitialized) {
        return;
      }
      window.ChannelIOInitialized = true;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
      const first = document.getElementsByTagName("script")[0];
      if (first?.parentNode) {
        first.parentNode.insertBefore(script, first);
      } else {
        document.head.append(script);
      }
    }
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", inject);
      window.addEventListener("load", inject);
    } else {
      inject();
    }
  }

  function openLoungeOrMail() {
    const lounge = window.open(CHANNEL_TALK_LOUNGE_URL, "channelTalkLounge", "noopener,noreferrer");
    if (!lounge) {
      window.location.href = `mailto:${FEEDBACK_MAIL}?subject=${encodeURIComponent("災害通報平台｜即時留言回饋")}`;
    }
  }

  function hideLauncher() {
    try {
      if (typeof window.ChannelIO === "function") {
        window.ChannelIO("hideChannelButton");
        window.ChannelIO("hideMessenger");
      }
    } catch {
      /* ignore */
    }
    const entry = document.getElementById("ch-plugin-entry");
    if (entry) {
      entry.style.setProperty("display", "none", "important");
      entry.setAttribute("hidden", "");
    }
  }

  function getOverlay() {
    return document.querySelector("#channelTalkOverlay");
  }

  function getOverlayFrame() {
    return document.querySelector("#channelTalkOverlayFrame");
  }

  function isOverlayOpen() {
    const overlay = getOverlay();
    return Boolean(overlay && !overlay.hidden);
  }

  function closeChannelTalk() {
    const overlay = getOverlay();
    const frame = getOverlayFrame();
    if (overlay) {
      overlay.hidden = true;
    }
    document.documentElement.classList.remove("channel-talk-open");
    if (frame) {
      frame.removeAttribute("src");
    }
    hideLauncher();
  }

  function openChannelTalkOverlay() {
    const overlay = getOverlay();
    const frame = getOverlayFrame();
    if (!overlay || !frame) {
      openLoungeOrMail();
      return false;
    }
    if (!frame.getAttribute("src")) {
      frame.src = CHANNEL_TALK_LOUNGE_URL;
    }
    overlay.hidden = false;
    document.documentElement.classList.add("channel-talk-open");
    hideLauncher();
    document.querySelector("#channelTalkOverlayClose")?.focus();
    return true;
  }

  function openChannelTalk() {
    hideLauncher();
    if (openChannelTalkOverlay()) {
      return;
    }
    const pluginKey = String(CHANNEL_TALK_PLUGIN_KEY || window.CHANNEL_TALK_PLUGIN_KEY || "").trim();
    if (typeof window.ChannelIO === "function" && window.__channelTalkReady) {
      window.ChannelIO("showMessenger");
      return;
    }
    if (!pluginKey || pluginKey === "YOUR_PLUGIN_KEY") {
      openLoungeOrMail();
      return;
    }
    bootChannelTalk(pluginKey, true);
  }

  function bootChannelTalk(pluginKey, thenShow) {
    if (window.__channelTalkBooting) {
      return;
    }
    loadChannelTalkSdk();
    window.__channelTalkBooting = true;
    const bootWatch = window.setTimeout(() => {
      if (!window.__channelTalkReady) {
        window.__channelTalkBooting = false;
        console.warn("Channel Talk 啟動逾時，留言改開官方對話頁。");
        if (thenShow) {
          openLoungeOrMail();
        }
      }
    }, BOOT_TIMEOUT_MS);
    window.ChannelIO(
      "boot",
      {
        pluginKey,
        appearance: "light",
        zIndex: 2400,
        hideChannelButtonOnBoot: true
      },
      function onBoot(error) {
        window.clearTimeout(bootWatch);
        window.__channelTalkBooting = false;
        window.__channelTalkReady = !error;
        if (error) {
          console.warn("Channel Talk 啟動失敗，留言改開官方對話頁。", error);
          if (thenShow) {
            openLoungeOrMail();
          }
          return;
        }
        hideLauncher();
        if (thenShow) {
          openChannelTalkOverlay();
        }
      }
    );
  }

  function initChannelTalkFooter() {
    const button = document.querySelector("#channelTalkFooterBtn");
    button?.addEventListener("click", (event) => {
      event.preventDefault();
      openChannelTalk();
    });
    document.querySelector("#channelTalkOverlayBackdrop")?.addEventListener("click", (event) => {
      event.preventDefault();
      closeChannelTalk();
    });
    document.querySelector("#channelTalkOverlayClose")?.addEventListener("click", (event) => {
      event.preventDefault();
      closeChannelTalk();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOverlayOpen()) {
        event.preventDefault();
        closeChannelTalk();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChannelTalkFooter);
  } else {
    initChannelTalkFooter();
  }
})();
