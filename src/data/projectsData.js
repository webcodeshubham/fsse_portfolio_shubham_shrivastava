export const projects = [
  {
    id: 1,
    title: 'Extramarks Student Learning Dashboard Platform',
    description:
      'Student-facing learning dashboard built with React and Ant Design, enabling students to access courses, learning modules, and subscription content through interactive dashboards.',
    features: [
      'Full-stack integration with REST APIs for course, module, and subscription data',
      'Reusable UI components for dashboards, progress tracking, and catalog views',
      'Redux-based state management for course lists, subscriptions, and real-time learning activity',
      'Optimized frontend performance with memoized components, lazy loading, and efficient API data handling',
    ],
    tech: ['React', 'Ant Design', 'Redux Toolkit', 'REST APIs', 'CSS Modules'],
    github: '',
    live: 'https://www.extramarks.com/',
    image: null,
  },
  {
    id: 2,
    title: 'Extramarks Teacher Assessment & Question Bank System',
    description:
      'Teacher-facing assessment and question bank system that enables creation, management, and evaluation of assessments through connected dashboards.',
    features: [
      'Integrated REST APIs to retrieve assessment sets, question banks, and student results',
      'Asynchronous state handling with Redux Toolkit across filters, forms, and dashboard views',
      'Reusable components for data tables, filters, and form workflows shared across modules',
      'Responsive UI design tuned for complex teacher workflows and large data sets',
    ],
    tech: ['React', 'Ant Design', 'Redux Toolkit', 'REST APIs', 'CSS Modules'],
    github: '',
    live: 'https://www.extramarks.com/',
    image: null,
  },
  {
    id: 3,
    title: 'Product & Order Management System (MERN)',
    description:
      'Full-stack e-commerce management system built on the MERN stack with product catalog management, order processing, inventory tracking, and an AI-powered product assistant.',
    features: [
      'JWT-based authentication with role-based access control for admin and users',
      'RESTful APIs for product CRUD operations, order workflows, and status management',
      'MongoDB schemas for products, orders, and users with Mongoose-based data modeling',
      'React-based admin dashboard for managing products, monitoring orders, and real-time inventory updates',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
    github: 'https://github.com/mernapps3-jpg/ProductOrderManagementApp',
    live: 'https://product-order-management-app-fronte.vercel.app/',
    image: null,
  },
];

export const timelineData = [
  {
    year: '2022',
    role: 'Web Developer',
    company: 'Tech IS India',
    points: [
      'Developed responsive client-facing interfaces using HTML, CSS, JavaScript, and React',
      'Assisted in integrating REST APIs and implementing dynamic data rendering for interactive web applications',
      'Delivered UI modules within project timelines while maintaining cross-browser compatibility and code quality',
      'Collaborated with designers and backend developers across project phases to support full-stack workflows',
    ],
  },
  {
    year: '2023 — Present',
    role: 'Software Developer',
    company: 'ExtraMarks Education',
    points: [
      'Engineered scalable, reusable UI components using React and Ant Design for student and teacher dashboards',
      'Built and consumed backend REST APIs for asynchronous data flows, loading states, and dynamic rendering',
      'Implemented Redux Toolkit state management and data handling across course, assessment, and reporting modules',
      'Collaborated with cross-functional teams to ship production-ready features and leverage AI-assisted tooling',
    ],
  },
  {
    year: 'Mentorship',
    role: 'Instructor / MERN Mentor',
    company: 'Community & Freelance',
    points: [
      'Guided students on full-stack project architecture',
      'Helped debug complex frontend problems and review code',
      'Mentored on React best practices and modern tooling',
    ],
  },
];

export const skills = {
  'Frontend Engineering': [
    { name: 'React (ES6+)', level: 95 },
    { name: 'HTML5, CSS3, JavaScript', level: 92 },
    { name: 'Ant Design / Component Architecture', level: 90 },
    { name: 'Reusable UI Systems & Responsive Design', level: 90 },
  ],
  'Backend Engineering': [
    { name: 'Node.js & Express', level: 88 },
    { name: 'RESTful API Design', level: 90 },
    { name: 'JWT Authentication & Middleware', level: 86 },
    { name: 'Role-Based Access Control (RBAC)', level: 84 },
  ],
  'Database & ORM': [
    { name: 'MongoDB & Mongoose', level: 88 },
    { name: 'Schema Design & Data Modeling', level: 86 },
    { name: 'CRUD Operations', level: 90 },
  ],
  'State & Data Handling': [
    { name: 'Redux Toolkit', level: 92 },
    { name: 'REST API Integration', level: 92 },
    { name: 'Asynchronous Data Handling', level: 90 },
    { name: 'Error & Loading State Management', level: 88 },
  ],
  'Tooling & Workflow': [
    { name: 'Git / GitHub / GitLab', level: 90 },
    { name: 'Postman & Chrome DevTools', level: 88 },
    { name: 'Vite, NPM & SDLC Practices', level: 86 },
  ],
  'Deployment & Hosting': [
    { name: 'Vercel (Frontend)', level: 86 },
    { name: 'Replit (Backend Dev Environment)', level: 82 },
    { name: 'Environment Configuration', level: 84 },
  ],
  'Engineering Fundamentals': [
    { name: 'Rendering Lifecycle & DOM Internals', level: 86 },
    { name: 'Asynchronous Execution Model', level: 88 },
    { name: 'Modular Architecture', level: 86 },
  ],
  'Emerging Technologies': [
    { name: 'TypeScript', level: 80 },
    { name: 'Python & Django (Exploring)', level: 72 },
    { name: 'Next.js & API Integration', level: 74 },
  ],
};

export const socialLinks = {
  github: 'https://github.com/webcodeshubham',
  linkedin: 'https://www.linkedin.com/in/shubhams-2021',
  email: 'theshubhamshri@gmail.com',
  resume: 'https://drive.google.com/file/d/1jYojvEiaFHi8x_0o4E8fBeVWBcEZqxgJ/view?usp=sharing',
};
