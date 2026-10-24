"use client";

import { useEffect } from "react";

export function PortfolioEffects() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const progressBar = document.querySelector<HTMLElement>(".scroll-progress");
    const cursorDot = document.querySelector<HTMLElement>(".cursor-dot");
    const cursorRing = document.querySelector<HTMLElement>(".cursor-ring");
    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");

    document.documentElement.classList.add("has-js");

    let pointerFrame = 0;
    let cursorVisible = false;
    const moveCursor = (event: PointerEvent) => {
      if (!cursorDot || !cursorRing) return;
      cursorDot.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorDot.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursorRing.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursorRing.style.setProperty("--cursor-y", `${event.clientY}px`);
      if (!cursorVisible) {
        cursorDot.classList.add("is-visible");
        cursorRing.classList.add("is-visible");
        cursorVisible = true;
      }
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      pointerFrame = window.requestAnimationFrame(() => {
        cursorRing.classList.add("is-settled");
        pointerFrame = 0;
      });
    };
    const hideCursor = () => {
      cursorDot?.classList.remove("is-visible");
      cursorRing?.classList.remove("is-visible", "is-settled");
      cursorVisible = false;
    };

    // Cursor ring expand on interactive elements
    const interactiveEls = document.querySelectorAll<HTMLElement>("a, button, input, textarea, select");
    const ringHoverCleanup: (() => void)[] = [];
    if (cursorRing) {
      interactiveEls.forEach((el) => {
        const enter = () => cursorRing.classList.add("is-hovering");
        const leave = () => cursorRing.classList.remove("is-hovering");
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointerleave", leave);
        ringHoverCleanup.push(() => {
          el.removeEventListener("pointerenter", enter);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }
    const onReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        hideCursor();
        document.documentElement.classList.remove("has-custom-cursor");
      } else if (finePointer.matches) {
        document.documentElement.classList.add("has-custom-cursor");
      }
    };

    if (cursorDot && cursorRing && finePointer.matches && !reducedMotion.matches) {
      window.addEventListener("pointermove", moveCursor, { passive: true });
      document.documentElement.addEventListener("pointerleave", hideCursor);
      reducedMotion.addEventListener("change", onReducedMotionChange);
      document.documentElement.classList.add("has-custom-cursor");
    }

    let progressFrame = 0;
    const updateProgress = () => {
      if (progressFrame) return;
      progressFrame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        progressFrame = 0;
      });
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
        if (progressFrame) window.cancelAnimationFrame(progressFrame);
        if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
        window.removeEventListener("pointermove", moveCursor);
        document.documentElement.removeEventListener("pointerleave", hideCursor);
        reducedMotion.removeEventListener("change", onReducedMotionChange);
        document.documentElement.classList.remove("has-js");
        document.documentElement.classList.remove("has-custom-cursor");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    // Section index counter animation
    const sectionIndexEls = document.querySelectorAll<HTMLElement>(".section-index");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const text = el.textContent ?? "";
          const match = text.match(/^(\d+)/);
          if (!match) return;
          const target = parseInt(match[1], 10);
          const suffix = text.slice(match[0].length);
          let current = 0;
          const step = () => {
            current += 1;
            el.textContent = String(current).padStart(2, "0") + suffix;
            if (current < target) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    sectionIndexEls.forEach((el) => counterObserver.observe(el));

    // Magnetic button effect
    const magneticEls = document.querySelectorAll<HTMLElement>(".button--primary, .header-cta");
    const magneticCleanup: (() => void)[] = [];

    magneticEls.forEach((el) => {
      const onMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.28;
        const dy = (e.clientY - cy) * 0.28;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      magneticCleanup.push(() => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        el.style.transform = "";
      });
    });

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
      magneticCleanup.forEach((fn) => fn());
      ringHoverCleanup.forEach((fn) => fn());
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (progressFrame) window.cancelAnimationFrame(progressFrame);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      window.removeEventListener("pointermove", moveCursor);
      document.documentElement.removeEventListener("pointerleave", hideCursor);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
      document.documentElement.classList.remove("has-js");
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
    </>
  );
}
