"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";

const navigation = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
        const currentSection = [...navigation]
          .map(([, id]) => document.getElementById(id))
          .filter((section): section is HTMLElement => section !== null)
          .map((section) => ({
            section,
            distance: Math.abs(section.getBoundingClientRect().top - headerHeight - 48),
          }))
          .filter(({ section }) => {
            const bounds = section.getBoundingClientRect();
            return bounds.top <= headerHeight + 48 && bounds.bottom > headerHeight + 48;
          })
          .sort((a, b) => a.distance - b.distance)
          .at(0);
        setActiveSection(currentSection?.section.id ?? "");
        frame = 0;
      });
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(true);
      }
      if (event.key === "Escape") {
        setMenuOpen(false);
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (paletteOpen && !dialog.open) dialog.showModal();
    if (!paletteOpen && dialog.open) dialog.close();
  }, [paletteOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="#top" className="wordmark" aria-label={`${site.identity.name}, home`}>
            Aloshi<span>.</span>
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
            <button
              className="mobile-menu-button"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
            <ThemeToggle />
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map(([label, id]) => (
              <a
                href={`#${id}`}
                key={id}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <dialog
        className="quick-dialog"
        ref={dialogRef}
        onClose={() => setPaletteOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setPaletteOpen(false);
        }}
        aria-labelledby="quick-dialog-title"
      >
        <div className="quick-dialog__inner">
          <div className="quick-dialog__header">
            <h2 id="quick-dialog-title">Jump to a section</h2>
            <button type="button" className="icon-button" onClick={() => setPaletteOpen(false)} aria-label="Close quick navigation">
              <X size={18} />
            </button>
          </div>
          <nav className="quick-dialog__links" aria-label="Quick navigation">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setPaletteOpen(false)}>
                {label}<ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <p className="mono">Press Esc to close · Ctrl/Cmd + K to open</p>
        </div>
      </dialog>
    </>
  );
}
