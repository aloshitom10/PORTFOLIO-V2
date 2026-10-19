"use client";

import { useEffect, useRef } from "react";

interface Group {
  title: string;
  skills: string[];
}

export function ToolboxClient({ groups }: { groups: Group[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  // Track pointer position for radial glow on each skill-group
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const handleMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(".skill-group--animated");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
      const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
      target.style.setProperty("--mx", `${x}%`);
      target.style.setProperty("--my", `${y}%`);
    };
    grid.addEventListener("mousemove", handleMove);
    return () => grid.removeEventListener("mousemove", handleMove);
  }, []);

  // Stagger-reveal chips when their group scrolls into view
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const groups = Array.from(grid.querySelectorAll<HTMLElement>(".skill-group"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const chips = Array.from(
            entry.target.querySelectorAll<HTMLElement>(".skill-chip"),
          );
          chips.forEach((chip, i) => {
            chip.style.transitionDelay = `${i * 55}ms`;
            chip.classList.add("skill-chip--visible");
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    groups.forEach((g) => observer.observe(g));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-shell portfolio-section" id="skills" aria-labelledby="skills-heading">
      <div className="section-heading" data-reveal>
        <p className="section-index mono">03 / Technical arsenal</p>
        <div>
          <h2 id="skills-heading">Tools for the work.</h2>
          <p className="section-subtitle">
            Programming, frameworks, design, tools, and computer science foundations.
          </p>
        </div>
      </div>

      <div className="skills-grid" ref={gridRef}>
        {groups.map((group) => {
          const id = `skill-${group.title.replaceAll(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
          return (
            <section
              className="skill-group skill-group--animated"
              key={group.title}
              data-reveal
              aria-labelledby={id}
            >
              <h3 id={id}>
                <span className="skill-indicator" aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li className="skill-chip" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
