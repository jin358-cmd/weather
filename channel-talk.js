(function () {
  // 從 Channel Talk 桌面 → 設定 → 一般設定 → 管理外掛 複製 Plugin Key 貼到這裡。
  const CHANNEL_TALK_PLUGIN_KEY = "";
  const FEEDBACK_MAIL = "jin358@gmail.com";

  function loadChannelTalkSdk() {
    if (window.ChannelIO) {
      return;
    }
    const ch = function () {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function (args) {
      ch.q.push(args);
    };
    window.ChannelIO = ch;
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
    if (document.readyState === "complete") {
      inject();
    } else {
      window.addEventListener("DOMContentLoaded", inject);
      window.addEventListener("load", inject);
    }
  }

  function openFallbackMail() {
    window.location.href = `mailto:${FEEDBACK_MAIL}?subject=${encodeURIComponent("災害通報平台｜即時留言回饋")}`;
  }

  function openChannelTalk() {
    if (typeof window.ChannelIO === "function" && window.__channelTalkReady) {
      window.ChannelIO("showMessenger");
      return;
    }
    openFallbackMail();
  }

  function bootChannelTalk(pluginKey) {
    loadChannelTalkSdk();
    window.ChannelIO(
      "boot",
      {
        pluginKey,
        language: "zh-TW",
        appearance: "light",
        zIndex: 2200,
        hideChannelButtonOnBoot: false
      },
      function onBoot(error) {
        window.__channelTalkReady = !error;
        if (error) {
          console.warn("Channel Talk 啟動失敗，留言改寄 Email。", error);
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
