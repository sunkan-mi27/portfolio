export const personalInfo = {
  name: "Sunkanmi",
  role: "Full Stack Web Developer",
  tagline:
    "I build clean, fast, and accessible web experiences — from pixel-perfect UI to solid backend systems.",
  email: "oiolasunkanmi27@gmail.com",
  available: true,
  bio: [
    "I'm a full-stack web developer with a background in embroidery and textile design. That creative foundation shapes how I think about interfaces — precision, pattern, and intentionality in every detail.",
    "I completed a full-stack web development programme in 2024 and I'm currently studying Architecture at Caleb University. I build things that are both structurally sound and beautifully crafted.",
  ],
  stats: [
    { label: "Projects Built", value: "10+" },
    { label: "Technologies", value: "12+" },
    { label: "Year Started", value: "2023" },
  ],
  socials: {
    github: "https://github.com/sunkan-mi27",
    linkedin: "https://linkedin.com/in/sunkanmii27",
    twitter: "https://twitter.com/Sunkanmii27",
  },
};

export const projects = [
  {
    id: 1,
    title: "Progress Letter Studio",
    description:
      "🏆 Built for the Unlayer #BuiltWithElements Challenge, Progress Letter Studio is a multi-renderer application powerd by React Elements. It transforms the same data into Web, Email, and Printable Document experiences using reusable templates and a shared rendering architecture.",
    category: "Full Stack",
    tags: ["React Element", "Next.js", "TypeScript", "CSS", "Vercel"],
    github: "https://github.com/sunkan-mi27/progress-letter-studio",
    live: "https://progress-letter-studio.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio CMS",
    description:
      "A headless CMS and portfolio builder with markdown support, image optimisation, and a clean admin dashboard.",
    category: "Full Stack",
    tags: ["React", "Express", "MongoDB", "Cloudinary"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "UI Component Library",
    description:
      "A custom React component library with 30+ components, dark/light mode, and full accessibility support.",
    category: "Frontend",
    tags: ["React", "CSS", "Storybook"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "REST API Boilerplate",
    description:
      "Production-ready Express API with JWT auth, rate limiting, input validation, and PostgreSQL integration.",
    category: "Backend",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    github: "https://github.com/sunkan-mi27/monogram-api",
    live: "#",
    featured: true,
  },
  {
    id: 5,
    title: "LordTaylor Cargo",
    description:
      "🛳 A production logistic platform for a real Lagos-based freight business - customer booking flow, live shipment tracking, an admin operations dashboard, and Flutterwave payment integration with webhook-verified transactions and real-time notifications.",
    category: "Full Stack",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Flutterwave",
    ],
    github: "https://github.com/sunkan-mi27/LordTaylor-Cargo",
    live: "https://lord-taylor-cargo.vercel.app",
    featured: true,
  },
  {
    id: 6,
    title: "ROOM - Visual Workspace Planner",
    description:
      "📐 A spatial-design workspace for creating, arranging and evaluating room layouts with interactive planning tools and spatial intelligence...What makes it standout: Interactive room planning • Drag, resize & rotate furniture • A* circulation analysis • Clearance heatmaps & bottleneck detection • Layout studies & comparison • Walk Around mode • Architectural presentation mode",
    category: "Frontend",
    tags: ["Next.js", "TypeScript", "Zustand", "React Konva", "Tailwind CSS"],
    github: "https://github.com/sunkan-mi27/visual-architecture-studio",
    live: "https://visual-architecture-studio-14puyokwd-sunkanmi.vercel.app",
    featured: true,
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "◈",
    items: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    category: "Backend",
    icon: "◇",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Socket.io",
    ],
  },
  {
    category: "Database",
    icon: "◆",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Database Design",
      "SQL Queries",
    ],
  },
  {
    category: "Tools",
    icon: "◉",
    items: ["Git & GitHub", "VS Code", "Vite", "Postman", "Figma", "Linux CLI"],
  },
];

export const navLinks = [
  { label: "About 👤", href: "#about" },
  { label: "Projects 🛠️", href: "#projects" },
  { label: "Skills ⚡", href: "#skills" },
  { label: "Contact 📩", href: "#contact" },
];
