export type SiteProject = {
  slug: string;
  name: string;
  previewImage?: string;
  previewAlt?: string;
  stack: string[];
  summary: string;
  highlights: string[];
  github: string;
  live?: string;
  status?: string;
};

export const site = {
  identity: {
    name: "Aloshi Tom Shijo",
    title: "B.Tech Computer Science & Engineering Student | Full-Stack Developer",
    location: "Kerala, India",
    email: "aloshitomshijo08@gmail.com",
    phone: "+91 9645291463",
    linkedIn: "https://www.linkedin.com/in/aloshitomshijo/",
    github: "https://github.com/aloshitom10",
    issueLabel: "ISSUE 01 — PORTFOLIO — 2026",
  },
  hero: {
    tagline:
      "I'm Aloshi Tom Shijo — a computer science student and full stack developer who enjoys building practical, creative, and user-focused digital experiences. Always exploring new technologies, learning by building, and solving real-world problems.",
    roles: [
      "> role: full stack developer",
      "> studying: b.tech cse @ sjcet palai, class of 2028",
      "> shipped: projectflow, notes management system",
      "> skills: django, react.js, node.js, express.js, mongodb",
    ],
    ctaPrimary: "View work",
    ctaSecondary: "Get in touch",
  },
  about: {
    story:
      "I'm a passionate developer focused on building modern, functional, and user-friendly digital experiences. I enjoy working across different aspects of development, from creating interactive interfaces to building the systems that power them.\n\nCurrently exploring new technologies, expanding my technical skills, and working on projects that turn ideas into real-world solutions.\n\nI'm always eager to learn, experiment, and take on new challenges.",
    stats: [
      { label: "Expected graduation", value: "2028" },
      { label: "Projects featured", value: "3" },
      { label: "Internship completed", value: "1" },
      { label: "Campus roles", value: "3" },
      { label: "Certificates", value: "3" },
    ],
    marginNote: "Colophon: set in Instrument Serif, Space Grotesk and JetBrains Mono.",
  },
  projects: [
    {
      slug: "kerala-commodity-market",
      name: "Kerala Commodity Market Intelligence",
      stack: ["Next.js", "React", "TypeScript", "Recharts", "Tailwind CSS", "REST APIs"],
      summary:
        "A role-aware market intelligence dashboard for exploring Kerala commodity prices, district comparisons, historical trends, and forecasts.",
      highlights: [
        "Tailored market views for farmers, traders, cooperatives, and consumers",
        "Price summaries, district comparisons, trends, forecasts, and market insights",
        "Malayalam and English interface with cached API data",
      ],
      github: "https://github.com/aloshitom10/Kerala-Commodity-Market-Intelligent-System",
      live: "https://kerala-commodity-market-intelligent.vercel.app",
      status: "Selected project",
    },
    {
      slug: "projectflow",
      name: "ProjectFlow",
      previewImage: "/projectflow-preview.png",
      previewAlt: "Published ProjectFlow login page with project tracking introduction and authentication form.",
      stack: ["Python", "Django", "PostgreSQL", "HTML5", "CSS"],
      summary:
        "A Django project-management workspace for organizing projects, tracking task status and deadlines, and monitoring progress from a focused dashboard.",
      highlights: [
        "Secure registration and login with per-user project ownership",
        "Create and manage projects and tasks with status, priority, and due dates",
        "Dashboard with project statistics and progress indicators",
      ],
      github: "https://github.com/aloshitom10/projectflow",
      live: "https://projectflow-cpo2.onrender.com/",
      status: "Selected project",
    },
    {
      slug: "notes-management-system",
      name: "Notes Management System",
      previewImage: "/notes-preview.png",
      previewAlt: "Published Notes Management App login page with a two-column notes introduction and sign-in form.",
      stack: ["Python", "Django", "SQLite", "HTML", "CSS"],
      summary: "A personal notes workspace for securely creating, finding, and organizing notes by category.",
      highlights: [
        "User registration and authentication",
        "Create, edit, delete, search, and filter notes by category",
        "Dashboard with recently updated notes and responsive styling",
      ],
      github: "https://github.com/aloshitom10/Notes-Management-App",
      live: "https://notes-app-1-luwa.onrender.com/",
      status: "Selected project",
    },
  ] as SiteProject[],
  timeline: [
    {
      date: "06/2026",
      title: "Python Full Stack Intern",
      company: "Acadeno Research & Innovation Centre",
      location: "Kozhikode, Kerala, India",
      type: "Internship",
      description:
        "Developed and shipped full-stack web applications using Python, Django, JavaScript, and Bootstrap. Designed secure authentication flows, built CRUD systems, and delivered responsive interfaces. Key projects include ProjectFlow and Notes Management System — both live in production.",
    },
    {
      date: "08/2026 – Present",
      title: "Design Team Co-Lead",
      company: "CSI SB SJCET",
      location: "Palai, Kerala",
      type: "Design",
      description:
        "Co-lead the design team in creating visual content and digital creatives. Collaborate on event branding, promotional materials, and social media graphics; coordinate design tasks and help maintain consistent visual communication.",
    },
    {
      date: "2026",
      title: "Editorial Team Member",
      company: "Reflections 2026",
      location: "St. Joseph's College of Engineering and Technology",
      type: "Editorial",
      description:
        "Worked with students and faculty to review, organize and publish content for the college magazine.",
    },
    {
      date: "09/2025",
      title: "Event Coordinator",
      company: "PROMPT CRAFT",
      location: "ASTHRA 10.0, SJCET Palai",
      type: "Leadership",
      description:
        "Coordinated PROMPT CRAFT, an AI-powered prompt engineering event during ASTHRA 10.0. Planned event logistics, managed participant coordination, and supported smooth event execution alongside student volunteers and faculty.",
    },
  ],
  toolbox: {
    groups: [
      {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "Java", "C"],
      },
      {
        title: "Frameworks & Libraries",
        skills: ["Django", "React.js", "Node.js", "Express.js", "Bootstrap"],
      },
      {
        title: "Databases",
        skills: ["MongoDB", "PostgreSQL", "SQLite"],
      },
      {
        title: "Web & UI",
        skills: ["HTML5", "CSS3", "Tailwind CSS", "Figma", "UI/UX Design"],
      },
      {
        title: "Developer Tools",
        skills: ["Git", "GitHub", "VS Code"],
      },
      {
        title: "Core Computer Science",
        skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"],
      },
    ],
  },
  credentials: [
    {
      title: "MERN Stack Development",
      organization: "Techmaghi",
      date: "October 2026",
      detail: "Topics: MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      title: "Network Fundamentals",
      organization: "Infosys Springboard",
      date: "September 2026",
      detail: "Topics: Network fundamentals.",
    },
    {
      title: "Java Programming Essentials",
      organization: "Techmaghi",
      date: "December 2025",
      detail: "Topics: Java fundamentals and object-oriented programming.",
    },
  ],
};

export const workCaseStudies: Record<string, { title: string; overview: string; problem: string; approach: string; features: string[]; stack: string[]; learning: string }> = {
  projectflow: {
    title: "ProjectFlow",
    overview:
      "ProjectFlow is a project and task management platform designed to help people organize work, track delivery, and keep communication clear through a clean interface.",
    problem:
      "A student developer needed a structured way to manage multiple projects and tasks without using fragmented tools or spreadsheets.",
    approach:
      "I built a Django web app with authenticated, owner-scoped project and task flows, including status, priority, and due-date tracking. A dashboard brings progress and key project statistics together.",
    features: [
      "Secure registration and login",
      "Per-user project and task data isolation",
      "Project and task CRUD with status, priority, and due dates",
      "Dashboard statistics and progress indicators",
      "Responsive HTML and hand-authored CSS",
    ],
    stack: ["Python", "Django", "PostgreSQL", "HTML5", "CSS"],
    learning:
      "This project strengthened my understanding of app flow design, authentication logic, and building a reliable CRUD system that feels consistent for users.",
  },
  "notes-management-system": {
    title: "Notes Management System",
    overview:
      "A note-taking web app built for organized content management with user-level access and clean browsing.",
    problem:
      "The goal was to create a notes experience where users could save, organize, and retrieve content without the clutter of a more complex platform.",
    approach:
      "I used Django models, views, and templates to build a secure notes workspace with search, category filters, and recently updated notes.",
    features: [
      "User authentication and authorization",
      "Create, edit, and delete notes",
      "Search notes by title and filter by category",
      "Recently updated notes on the dashboard",
      "Responsive HTML and CSS interface",
    ],
    stack: ["Python", "Django", "SQLite", "HTML", "CSS"],
    learning:
      "I learned how to structure content flows and keep a database-driven app intuitive, simple and secure for real usage.",
  },
  "kerala-commodity-market": {
    title: "Kerala Commodity Market Intelligence",
    overview:
      "A Next.js dashboard that brings Kerala commodity prices and market analysis into role-specific views for farmers, traders, cooperatives, and consumers.",
    problem:
      "Market participants need useful price information and comparisons without navigating disconnected data views or tools built for a different role.",
    approach:
      "I built an interactive TypeScript frontend with role selection, Malayalam and English localization, cached API requests, and dedicated routes for prices, trends, district comparisons, insights, and forecasts.",
    features: [
      "Role-tailored dashboards for four market participant types",
      "Commodity price summaries and latest market prices",
      "Historical trend charts and district comparisons",
      "Market insights and forecast visualizations",
      "Malayalam and English interface",
    ],
    stack: ["Next.js", "React", "TypeScript", "Recharts", "Tailwind CSS", "REST APIs"],
    learning:
      "This project expanded my experience with data-rich React interfaces, charting, localization, API integration, and building distinct workflows around different user needs.",
  },
};
