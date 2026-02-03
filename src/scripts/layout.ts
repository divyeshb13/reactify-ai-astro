import AOS from "aos";
import Lenis from "lenis";

let lenis: Lenis | null = null;

const initAnimations = () => {
  AOS.init({
    duration: 1000,
    easing: "ease-out-quart",
    once: true,
    offset: 0,
    delay: 100,
  });

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};

const onIdle = (cb: () => void) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(cb, { timeout: 2000 });
  } else {
    setTimeout(cb, 800);
  }
};

window.addEventListener("load", () => {
  onIdle(initAnimations);
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = (e.currentTarget as HTMLAnchorElement)?.getAttribute(
          "href",
        );
        if (!href || href === "#") return;

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement && lenis) {
          lenis.scrollTo(targetElement, {
            offset: 0,
            duration: 1.2,
          });

          if (history.pushState) {
            history.pushState(null, "", href);
          }
        } else if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

  if (window.location.hash) {
    setTimeout(() => {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement && lenis) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1.2,
        });
      } else if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
});
