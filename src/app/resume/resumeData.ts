// -----------------------------------------------------------------------------
// Resume content. Edit this file to update the /resume page.
// Keep it plain data so the page stays easy to maintain.
// -----------------------------------------------------------------------------

export interface ContactLink {
  /** Human readable label, e.g. "GitHub" */
  label: string;
  /** Clean text shown on the page (kept readable in print) */
  display: string;
  /** Full destination URL */
  href: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  stack: string;
}

export interface EducationEntry {
  qualification: string;
  field: string;
  institution: string;
  period: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  links: ContactLink[];
  hero: string;
  summary: string;
  skills: string[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
}

export const resume: ResumeData = {
  name: "Odunayo Ojowa",
  title: "Frontend Engineer",
  tagline: "React • Next.js • TypeScript",
  location: "Lagos, Nigeria",
  email: "ojowaayomide@gmail.com",
  phone: "+234 707 817 2974",
  links: [
    {
      label: "Portfolio",
      display: "hunchoweb.com",
      href: "https://www.hunchoweb.com",
    },
    {
      label: "LinkedIn",
      display: "linkedin.com/in/odunayo-ojowa",
      href: "https://www.linkedin.com/in/odunayo-ojowa-66763b192/",
    },
    {
      label: "GitHub",
      display: "github.com/hunchoweb",
      href: "https://github.com/hunchoweb",
    },
  ],
  hero:
    "Frontend engineer building enterprise SaaS, AI-powered products and premium digital experiences with a focus on performance, scalability and exceptional user experience.",
  summary:
    "Frontend Engineer with 5+ years building SaaS platforms, fintech products and internal tools. I turn complex workflows into fast, reliable interfaces with React, Next.js and TypeScript, combining product thinking with clean, scalable frontend architecture and polished delivery.",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS3",
    "Tailwind CSS",
    "Sass (SCSS)",
    "Redux Toolkit",
    "Zustand",
    "TanStack Query",
    "React Hook Form",
    "GSAP",
    "REST APIs",
    "OpenAPI",
    "Node.js",
    "Git",
    "Sanity CMS",
    "Umbraco CMS",
  ],
  experience: [
    {
      company: "Double Shore",
      role: "Lead Creative Frontend Engineer",
      location: "Portugal",
      period: "Feb 2026 — Present",
      bullets: [
        "Lead development of high-performance corporate and marketing websites using Next.js, React, TypeScript, and Umbraco CMS.",
        "Built a reusable GSAP animation architecture powering 40+ interactive components across desktop and mobile experiences.",
        "Delivered multilingual content, portfolio filtering, progressive loading, ISR, cache invalidation, and frontend performance improvements for international client websites.",
      ],
    },
    {
      company: "Janus Payroll",
      role: "Lead Frontend Engineer",
      location: "Nigeria",
      period: "Sep 2025 — May 2026",
      bullets: [
        "Led frontend development of an enterprise payroll SaaS platform spanning 23 business modules and 100+ production-ready pages.",
        "Architected scalable frontend systems using React, TypeScript, Redux Toolkit, Zustand, TanStack Query, and reusable component patterns.",
        "Built payroll, onboarding, compliance, reporting, PDF payslip generation, notification systems, and employee lifecycle workflows across multiple user roles.",
        "Established engineering standards with TypeScript Strict Mode, ESLint governance, reusable UI patterns, and Vitest coverage for critical flows.",
      ],
    },
    {
      company: "Craneburg Construction",
      role: "Software Engineer",
      location: "Lagos, Nigeria",
      period: "Jun 2024 — Aug 2025",
      bullets: [
        "Designed and built an AI-powered CRM and sales management tool that centralized client profiles, lead tracking, follow-ups, and business development reporting.",
        "Automated internal business development workflows, reducing manual administrative effort and improving visibility across the sales pipeline.",
        "Led redevelopment of the corporate website and supported IT infrastructure, cloud services, access control, and operational technology across departments.",
      ],
    },
    {
      company: "Propslot",
      role: "Web Developer",
      location: "Lagos, Nigeria",
      period: "Mar 2023 — Feb 2024",
      bullets: [
        "Developed responsive customer-facing web applications using Next.js, React, Gatsby, Tailwind CSS, and SCSS.",
        "Built real estate marketing pages, product interactions, and a Book an Apartment workflow that simplified property viewing requests.",
        "Collaborated with designers to translate high-fidelity Figma designs into accessible, responsive, production-ready interfaces.",
      ],
    },
  ],
  projects: [
    {
      name: "Janus Payroll",
      description:
        "Enterprise payroll platform for compliance, reporting, onboarding, and employee lifecycle workflows.",
      stack: "React, TypeScript, Redux Toolkit, TanStack Query",
    },
    {
      name: "NAEGE Member Portal",
      description:
        "Member portal with authentication, registration, events, payments, journals, and admin tools.",
      stack: "Next.js, TypeScript, Paystack, REST APIs",
    },
    {
      name: "Double Shore Website",
      description:
        "Multilingual corporate website with motion systems, portfolio filtering, and headless CMS publishing.",
      stack: "Next.js, GSAP, Umbraco CMS, TypeScript",
    },
  ],
  education: [
    {
      qualification: "Bachelor of Engineering",
      field: "Petroleum Engineering",
      institution: "Federal University of Petroleum Resources, Delta, Nigeria",
      period: "2015 — 2021",
    },
  ],
};
