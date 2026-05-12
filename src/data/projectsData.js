export const projects = [
  {
    id: 1,
    title: "Extramarks Student Learning Dashboard Platform",
    description:
      "Student-facing production platform serving 1 Lac+ students — built with React and Ant Design, enabling access to courses, learning modules, and subscription content through interactive dashboards.",
    features: [
      "Full-stack integration with Node.js/Express REST APIs for course, module, and subscription data flows",
      "Engineered 100+ reusable React components — reducing new module development time by 30%",
      "Redux Toolkit state management for course lists, subscriptions, and real-time learning activity tracking",
      "Optimized frontend performance through memoization, lazy loading, and efficient asynchronous API handling",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "Ant Design",
      "Redux Toolkit",
      "REST APIs",
      "CSS Modules",
    ],
    github: "",
    live: "https://www.extramarks.com/",
    image: null,
  },
  {
    id: 2,
    title: "Extramarks Teacher Assessment & Question Bank System",
    description:
      "Teacher-facing production platform used by 60,000+ educators — enabling creation, management, and evaluation of assessments through full-stack connected dashboards.",
    features: [
      "Integrated Node.js/Express REST APIs to retrieve assessment sets, question banks, and student results",
      "Asynchronous state handling with Redux Toolkit across filters, forms, and dashboard views",
      "Reusable components for data tables, filters, and form workflows shared across 6+ modules",
      "Responsive UI design optimized for complex teacher workflows and large dataset rendering",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "Ant Design",
      "Redux Toolkit",
      "REST APIs",
      "CSS Modules",
    ],
    github: "",
    live: "https://www.extramarks.com/",
    image: null,
  },
  {
    id: 3,
    title: "Product & Order Management System",
    description:
      "Full-stack MERN e-commerce management system with product catalog management, order processing, inventory tracking, JWT authentication, and role-based access control.",
    features: [
      "Architected complete MERN stack application with JWT + bcrypt authentication and role-based access control",
      "Designed MongoDB schemas for products, orders, and users — implemented full CRUD API endpoints with request validation and error handling",
      "Built React-based admin dashboard for managing products, monitoring orders, and real-time inventory updates",
      "Deployed frontend on Vercel and backend on Render with environment configuration and CORS setup",
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "REST APIs",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/mernapps3-jpg/ProductOrderManagementApp",
    live: "https://product-order-management-app-fronte.vercel.app/",
    image: null,
  },
  {
    id: 4,
    title: "User Management & Role-Based Access System",
    description:
      "Full-stack MERN application with JWT authentication, role-based access control (Admin/User), protected REST APIs, automatic admin seeding, and an AI assistant powered by Gemini API.",
    features: [
      "Architected JWT authentication with role-based access control (Admin/User), protected REST APIs, and automatic admin seeding — implementing production-grade security patterns",
      "Built modular Express.js backend with controllers, middleware, validators, and services — designed MongoDB schemas with full CRUD operations and permission enforcement",
      "Integrated Gemini AI API with ChatGPT fallback for admin AI assistant with chat history management",
      "Deployed frontend on Vercel and backend on Render with full environment configuration and CORS setup",
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Gemini AI API",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/mernapps3-jpg/UserManagementApp",
    live: "https://user-management-app-frontend-kappa.vercel.app/",
    image: null,
  },
];

export const timelineData = [
  {
    year: "2022 — 2023",
    role: "Web Developer",
    company: "Tech IS India Pvt. Ltd., Bangalore",
    points: [
      "Developed REST API endpoints using Node.js and Express, built React-based UI across 10+ client projects — handling authentication flows, dynamic data rendering, and database integration end-to-end",
      "Maintained backend API contracts and cross-browser compatible UI within a 50+ member team, consistently delivering full-stack modules on schedule",
      "Collaborated with designers and backend developers to align UI behavior, API contracts, and delivery timelines",
    ],
  },
  {
    year: "2023 — Present",
    role: "Software Developer",
    company: "ExtraMarks Education India Pvt. Ltd., Noida",
    points: [
      "Engineered 100+ reusable React components and Node.js/Express REST APIs — managing complete data flows from backend endpoints to frontend rendering across 6+ dashboard modules serving 50,000+ users, improving load time by 30%",
      "Designed and consumed JWT-secured APIs, implemented MongoDB-backed data schemas, managed Redux Toolkit state architecture, and optimized frontend performance through memoization and lazy loading — accelerated development using AI Tools across full-stack EdTech dashboards",
    ],
  },
  {
    year: "Mentorship",
    role: "Instructor & Freelance Full Stack Developer",
    company: "Newton School, Cuvette & Independent Clients (Remote)",
    points: [
      "Mentored 500+ students in MERN stack development — guiding project implementation, code reviews, and debugging practices",
      "Delivered full-stack web solutions for independent clients — managing end-to-end delivery from requirements to deployment",
      "Introduced mentees to modern tooling (Vite, Git, Postman) and best practices for full-stack project architecture",
    ],
  },
];

export const skills = {
  "Frontend Engineering": [
    { name: "React", level: 95 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "TypeScript", level: 78 },
    { name: "Next.js", level: 74 },
    { name: "HTML5 & CSS3", level: 92 },
    { name: "Tailwind CSS", level: 88 },
  ],
  "Backend Engineering": [
    { name: "Node.js & Express.js", level: 88 },
    { name: "REST API Design", level: 90 },
    { name: "JWT Authentication & bcrypt", level: 86 },
    { name: "Middleware Architecture", level: 84 },
    { name: "Role-Based Access Control", level: 84 },
  ],
  "Database & ORM": [
    { name: "MongoDB & Mongoose", level: 88 },
    { name: "Schema Design & Data Modeling", level: 86 },
    { name: "CRUD Operations", level: 90 },
  ],
  "State & Data Handling": [
    { name: "Redux Toolkit", level: 92 },
    { name: "REST API Integration", level: 92 },
    { name: "Asynchronous Data Handling", level: 90 },
    { name: "Error & Loading State Management", level: 88 },
  ],
  "Deployment & Tools": [
    { name: "Git / GitHub", level: 90 },
    { name: "Vercel", level: 86 },
    { name: "Render", level: 84 },
    { name: "Postman & Chrome DevTools", level: 88 },
    { name: "Vite & NPM", level: 86 },
    { name: "CI/CD Basics", level: 75 },
  ],
  "Engineering Fundamentals": [
    { name: "Event Loop & Async Execution", level: 88 },
    { name: "Virtual DOM & Reconciliation", level: 86 },
    { name: "Browser Rendering", level: 84 },
    { name: "Modular Architecture", level: 86 },
    { name: "Performance Optimization", level: 85 },
  ],
};

export const socialLinks = {
  github: "https://github.com/webcodeshubham",
  linkedin: "https://www.linkedin.com/in/shubhams-2021",
  email: "theshubhamshri@gmail.com",
  resume:
    "https://drive.google.com/file/d/11U3SZWSzqPaR08vT8b3SlHpd5jLWwyAZ/view?usp=sharing",
};
