export interface ContactLink {
  label: string;
  display: string;
  href: string;
}

export interface ExperienceEntry {
  company: string;
  location: string;
  website?: string;
  websiteUrl?: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  descriptor: string;
  stack: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  items: string;
}

export const cv = {
  name: "Odunayo Ojowa",
  title: "Frontend Engineer",
  tagline:
    "React • Next.js • TypeScript",
  location: "Lagos, Nigeria",
  phone: "+234 707 817 2974",
  email: "ojowaayomide@gmail.com",
  links: [
    {
      label: "LinkedIn",
      display: "linkedin.com/in/odunayo-ojowa",
      href: "https://www.linkedin.com/in/odunayo-ojowa-66763b192/",
    },
    {
      label: "Portfolio",
      display: "hunchoweb.com",
      href: "https://www.hunchoweb.com",
    },
    {
      label: "GitHub",
      display: "github.com/hunchoweb",
      href: "https://github.com/hunchoweb",
    },
  ] satisfies ContactLink[],
  summary: [
    "Frontend Engineer with 5+ years of experience building enterprise SaaS platforms, fintech products, creative web experiences, and internal business tools using React, Next.js, TypeScript, and modern frontend architecture.",
    "Strong background in leading frontend development, building scalable component systems, integrating REST APIs, improving product performance, and turning complex business requirements into clean, responsive, production-ready interfaces.",
    "Experienced across payroll, compliance, business development, real estate, blockchain, and agency environments, with a strong eye for user experience, accessibility, interface quality, and maintainable code.",
  ],
  expertise:
    "Enterprise SaaS Development | Frontend Architecture | Design Systems & Component Libraries | Performance Optimization | Responsive Development | REST API Integration | State Management | Interactive Web Experiences | Accessibility | Cross-functional Collaboration",
  skills: [
    {
      label: "Languages",
      items: "JavaScript (ES6+), TypeScript, HTML5, CSS3",
    },
    {
      label: "Frontend",
      items:
        "React, Next.js, Gatsby, Vite, React Hook Form, TanStack Query, Redux Toolkit, Zustand",
    },
    {
      label: "Styling & Motion",
      items:
        "Tailwind CSS, SCSS/Sass, CSS Modules, GSAP, ScrollTrigger, FLIP, Lenis, Framer Motion",
    },
    {
      label: "APIs & Backend",
      items: "REST APIs, Axios, OpenAPI, FastAPI collaboration, Node.js, Express.js",
    },
    {
      label: "Quality & Tools",
      items:
        "Git, GitHub, ESLint, Vitest, TypeScript Strict Mode, Figma, Postman, Cursor, GitHub Copilot",
    },
    {
      label: "CMS & Data",
      items: "Umbraco CMS, WordPress, PostgreSQL, MySQL, MongoDB, MariaDB",
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      company: "Double Shore",
      location: "Portugal",
      website: "double-shore.com",
      websiteUrl: "https://double-shore.com",
      role: "Lead Creative Frontend Engineer",
      period: "Feb 2026 - Present",
      bullets: [
        "Lead frontend development of high-performance corporate and marketing websites using Next.js, React, TypeScript, and Umbraco CMS, delivering scalable production-ready experiences for international clients.",
        "Architected a reusable animation system with GSAP, ScrollTrigger, FLIP, Lenis, and SplitType, powering 40+ interactive components while maintaining smooth performance across desktop and mobile.",
        "Built a dynamic portfolio experience with intelligent filtering, FLIP-based animations, progressive loading, and multilingual content support for English and Portuguese users.",
        "Optimized performance through ISR, on-demand cache invalidation, code splitting, responsive animation re-initialisation, accessible modals, keyboard navigation, and type-safe OpenAPI integrations.",
      ],
    },
    {
      company: "Janus Payroll",
      location: "Nigeria",
      website: "dev.januspayroll.com",
      websiteUrl: "https://dev.januspayroll.com",
      role: "Lead Frontend Engineer",
      period: "Sep 2025 - May 2026",
      bullets: [
        "Led frontend development of an enterprise payroll SaaS platform spanning 23 business modules and 100+ production pages for employers, managers, accountants, and employees.",
        "Designed scalable frontend architecture with React, TypeScript, Redux Toolkit, Zustand, and TanStack Query, improving maintainability and enabling faster feature delivery across complex product areas.",
        "Built onboarding, payroll processing, compliance, tax remittance, payslip, reporting, and employee lifecycle workflows with reusable components, robust validation, and persistent draft states.",
        "Developed real-time compliance dashboards for PAYE, Pension, NHIS, statutory remittances, alerts, and bulk processing, reducing manual tracking for payroll administrators.",
        "Introduced TypeScript Strict Mode, ESLint governance, error boundaries, API-contract collaboration, and a Vitest suite covering critical payroll, compensation, and UI flows.",
      ],
    },
    {
      company: "Craneburg Construction",
      location: "Lagos, Nigeria",
      role: "Software Engineer / Business Development Technology",
      period: "Jun 2024 - Aug 2025",
      bullets: [
        "Designed and developed an internal AI-powered CRM and sales management platform centralising client profiles, opportunities, follow-ups, communication records, and sales reporting.",
        "Automated business development workflows using AI-assisted processes, reducing manual administration, improving lead visibility, and helping the team respond to opportunities more efficiently.",
        "Led the redesign and development of the company website on WordPress, improving UI clarity, content management, page speed, and internal publishing workflows.",
        "Managed IT infrastructure, cloud services, software deployment, security updates, and user support, maintaining business continuity across departments.",
      ],
    },
    {
      company: "Propslot",
      location: "Lagos, Nigeria",
      role: "Web Developer",
      period: "Mar 2023 - Feb 2024",
      bullets: [
        "Developed responsive customer-facing web applications using Next.js, React, Tailwind CSS, and SCSS, translating Figma designs into production-ready interfaces.",
        "Led frontend implementation of the real estate marketing platform, delivering modern animations and responsive interactions that improved product presentation across desktop and mobile devices.",
        "Built the Book an Apartment experience, creating a seamless scheduling workflow for property viewing requests and improving the customer booking journey.",
        "Developed and deployed the company teaser website using Gatsby, improving page performance, SEO readiness, and loading speed.",
      ],
    },
    {
      company: "NFT NG (Contract)",
      location: "Lagos, Nigeria",
      role: "Frontend & Web3 Developer",
      period: "Nov 2022 - Feb 2023",
      bullets: [
        "Developed responsive frontend interfaces from Figma designs using React, delivering a polished user experience for an NFT marketplace.",
        "Integrated smart contracts with Web3.js, enabling wallet interactions, blockchain transactions, and smoother user flows during the minting process.",
        "Built a Node.js metadata service for NFT collection IDs and Base URI updates, reducing manual metadata handling and improving collection reliability.",
      ],
    },
    {
      company: "Bitmama (Internship)",
      location: "Lagos, Nigeria",
      role: "Frontend Developer Intern",
      period: "Jan 2022 - Oct 2022",
      bullets: [
        "Built responsive user interfaces from Figma designs using React and Tailwind CSS, contributing to production-ready fintech and Web3 products.",
        "Assisted with blockchain integrations using Web3.js and Ethers.js, supporting wallet connections, token transactions, and user feedback flows.",
        "Resolved frontend bugs, validation issues, and error states, improving application stability and reducing user-facing UI defects.",
      ],
    },
    {
      company: "Ministry of Petroleum Resources (Internship)",
      location: "Abuja, Nigeria",
      role: "Petroleum Engineering Intern",
      period: "May 2019 - Nov 2019",
      bullets: [
        "Built Excel-based financial and economic models to evaluate energy project viability, forecast market trends, and support strategic planning.",
        "Prepared structured reports and presentations for internal stakeholders, translating technical analysis into clear decision-support materials.",
      ],
    },
  ] satisfies ExperienceEntry[],
  highlights: [
    "Led frontend development of an enterprise payroll platform spanning 23 business modules and 100+ production pages.",
    "Designed an AI-powered CRM that streamlined business development workflows and centralised sales operations.",
    "Built high-performance multilingual websites with Next.js, GSAP, and Umbraco CMS for international clients.",
    "Delivered products across payroll, fintech, real estate, blockchain, construction, and creative agency environments.",
  ],
  projects: [
    {
      name: "Janus Payroll",
      descriptor: "Enterprise Payroll SaaS",
      stack: "React, TypeScript, Redux Toolkit, TanStack Query",
      description:
        "Led core frontend architecture across payroll, compliance, onboarding, payslip, reporting, and employee lifecycle modules.",
    },
    {
      name: "Double Shore Platform",
      descriptor: "Corporate Experience Website",
      stack: "Next.js, GSAP, Umbraco CMS",
      description:
        "Built interactive multilingual experiences, advanced scroll animations, portfolio filtering, and headless CMS integrations.",
    },
    {
      name: "NAEGE Member Portal",
      descriptor: "Member & Admin Platform",
      stack: "Next.js, React, Paystack",
      description:
        "Built member onboarding, payments, journals, events, admin workflows, and content management features.",
    },
    {
      name: "Personal Portfolio",
      descriptor: "Creative Frontend Portfolio",
      stack: "Next.js, GSAP, TypeScript",
      description:
        "Showcases motion design, frontend engineering, and responsive interactive web experiences.",
    },
  ] satisfies ProjectEntry[],
  education: {
    qualification: "Bachelor of Engineering, Petroleum Engineering",
    institution: "Federal University of Petroleum Resources, Delta, Nigeria",
    period: "2015 - 2021",
  },
};
