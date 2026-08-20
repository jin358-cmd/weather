(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initLenis() {
    if (reduceMotion || typeof Lenis === "undefined") {
      return null;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false
    });

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }

    return lenis;
  }

  function initScrollStory() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray("[data-story-panel]");
    const meterFill = document.querySelector("[data-meter-fill]");
    const meterLabel = document.querySelector("[data-meter-label]");
    const orbs = gsap.utils.toArray(".story__orb");

    if (!panels.length) {
      return;
    }

    const setActivePanel = (index) => {
      panels.forEach((panel, panelIndex) => {
        panel.classList.toggle("is-active", panelIndex === index);
      });
    };

    setActivePanel(0);

    ScrollTrigger.create({
      trigger: ".story",
      start: "top top",
      end: "bottom bottom",
      pin: ".story__pin",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const panelIndex = Math.min(panels.length - 1, Math.floor(progress * panels.length));
        setActivePanel(panelIndex);
        if (meterFill) {
          meterFill.style.width = `${Math.round(progress * 100)}%`;
        }
        if (meterLabel) {
          meterLabel.textContent = `監測進度 ${Math.round(progress * 100)}%`;
        }
        orbs.forEach((orb, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          orb.style.transform = `translate3d(${progress * 40 * direction}px, ${progress * -24}px, 0)`;
        });
      }
    });
  }

  function initAlertCards() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return;
    }

    gsap.from("[data-alert-card]", {
      opacity: 0,
      y: 36,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".alerts__track",
        start: "top 80%"
      }
    });
  }

  function initTimeline() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return;
    }

    const row = document.querySelector("[data-timeline-row]");
    if (!row) {
      return;
    }

    const getScrollDistance = () => Math.max(0, row.scrollWidth - window.innerWidth + 48);

    gsap.to(row, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top top",
        end: () => `+=${Math.max(getScrollDistance(), 400)}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });
  }

  function initHeroAndClosing() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return;
    }

    gsap.from(".hero__content > *", {
      opacity: 0,
      y: 28,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.1
    });

    gsap.to(".hero__radar", {
      rotate: 180,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.from("[data-closing]", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".closing",
        start: "top 75%"
      }
    });
  }

  function init() {
    initLenis();

    if (reduceMotion) {
      document.querySelectorAll("[data-story-panel]").forEach((panel, index) => {
        panel.classList.toggle("is-active", index === 0);
        panel.style.position = "relative";
        panel.style.opacity = index === 0 ? "1" : "0.45";
        panel.style.transform = "none";
      });
      return;
    }

    initHeroAndClosing();
    initScrollStory();
    initAlertCards();
    initTimeline();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
