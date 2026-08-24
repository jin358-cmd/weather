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

  function openChannelTalk() {
    if (typeof window.ChannelIO === "function" && window.__channelTalkReady) {
      window.ChannelIO("showMessenger");
      return;
    }
    const waitMs = window.__channelTalkBooting ? 8000 : 0;
    if (!waitMs) {
      openLoungeOrMail();
      return;
    }
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (window.__channelTalkReady && typeof window.ChannelIO === "function") {
        window.clearInterval(timer);
        window.ChannelIO("showMessenger");
        return;
      }
      if (!window.__channelTalkBooting || Date.now() - startedAt > waitMs) {
        window.clearInterval(timer);
        if (window.__channelTalkReady && typeof window.ChannelIO === "function") {
          window.ChannelIO("showMessenger");
        } else {
          openLoungeOrMail();
        }
      }
    }, 200);
  }

  function bootChannelTalk(pluginKey) {
    loadChannelTalkSdk();
    window.__channelTalkBooting = true;
    const bootWatch = window.setTimeout(() => {
      if (!window.__channelTalkReady) {
        window.__channelTalkBooting = false;
        console.warn("Channel Talk 啟動逾時，留言改開官方對話頁。");
      }
    }, BOOT_TIMEOUT_MS);
    window.ChannelIO(
      "boot",
      {
        pluginKey,
        appearance: "light",
        zIndex: 2400,
        hideChannelButtonOnBoot: false
      },
      function onBoot(error) {
        window.clearTimeout(bootWatch);
        window.__channelTalkBooting = false;
        window.__channelTalkReady = !error;
        if (error) {
          console.warn("Channel Talk 啟動失敗，留言改開官方對話頁。", error);
          return;
        }
        document.documentElement.classList.add("has-channel-talk");
      }
    );
  }

  function initChannelTalkFooter() {
    const button = document.querySelector("#channelTalkFooterBtn");
    button?.addEventListener("click", (event) => {
      event.preventDefault();
      openChannelTalk();
    });
    const pluginKey = String(CHANNEL_TALK_PLUGIN_KEY || window.CHANNEL_TALK_PLUGIN_KEY || "").trim();
    if (!pluginKey || pluginKey === "YOUR_PLUGIN_KEY") {
      return;
    }
    bootChannelTalk(pluginKey);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChannelTalkFooter);
  } else {
    initChannelTalkFooter();
  }
})();
