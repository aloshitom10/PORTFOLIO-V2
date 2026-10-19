"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem("portfolio-theme");
    } catch {
      saved = null;
    }
    if (saved === "ink" || saved === "paper") {
      document.documentElement.dataset.theme = saved;
    }
  }, []);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === "ink" ? "paper" : "ink";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("portfolio-theme", next);
    } catch {
      // no-op fallback
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
    >
      <span aria-hidden="true">◐</span>
      <span className="theme-toggle__label">Theme</span>
    </button>
  );
}
