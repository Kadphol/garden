export interface ResumeExperience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  impact: string;
  details: string[];
  technologies: string[];
}

export const resume = {
  name: "Kadphol Lenglerdphol",
  role: "Full-Stack Developer",
  location: "Bangkok, Thailand",
  summary:
    "Software developer focused on scalable web applications, frontend architecture, and helping engineering teams deliver better software faster. My work combines hands-on engineering with technical leadership across product, backend, QA, marketing, and data teams.",
  publicLinks: [
    {
      label: "github.com/Kadphol",
      href: "https://github.com/Kadphol",
    },
    {
      label: "linkedin.com/in/kadphol",
      href: "https://www.linkedin.com/in/kadphol",
    },
  ],
  experience: [
    {
      role: "Frontend Developer Team Lead",
      company: "7Solutions Co., Ltd.",
      location: "Bangkok, Thailand",
      start: "Apr 2024",
      end: "Present",
      impact:
        "Lead 10–20 frontend engineers across multiple projects while improving delivery speed, architecture, and product quality.",
      details: [
        "Established engineering practices through code reviews, documentation standards, knowledge-sharing sessions, and cross-department collaboration.",
        "Integrated marketing and analytics tooling into an e-commerce platform, improving data visibility and resolving third-party tracking issues.",
        "Expanded into full-stack Go development for a marketplace platform.",
        "Optimized GitLab CI for a Next.js project, reducing deployment time by approximately 40%.",
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Jest",
        "Zustand",
        "Go",
        "MongoDB",
        "Docker",
        "GCP",
        "Cloudflare",
        "Kafka",
      ],
    },
    {
      role: "Web Developer / OOCA",
      company: "Telemedica Co., Ltd.",
      location: "Bangkok, Thailand",
      start: "Nov 2023",
      end: "Apr 2024",
      impact:
        "Rebuilt and maintained critical telemedicine experiences across counseling, back-office, and e-prescription systems.",
      details: [
        "Redesigned a legacy Vue.js online-counseling application and rebuilt it with Next.js and Agora WebRTC.",
        "Maintained AdonisJS microservice APIs supporting React, Vue.js, and Flutter applications.",
        "Implemented features and resolved defects across the e-prescription web view and API.",
      ],
      technologies: [
        "Next.js",
        "React",
        "Vue.js",
        "AdonisJS",
        "Agora WebRTC",
        "Flutter",
      ],
    },
    {
      role: "Frontend Developer / Web",
      company: "7Solutions Co., Ltd.",
      location: "Bangkok, Thailand",
      start: "Mar 2023",
      end: "Oct 2023",
      impact:
        "Modernized legacy React delivery and introduced maintainable frontend patterns, testing, and mentorship.",
      details: [
        "Overrode legacy Create React App bundler settings to reduce build time by at least 10%.",
        "Refactored legacy React code and delivered reusable, maintainable product features.",
        "Guided junior developers on code quality and maintainability.",
        "Set up a new Next.js, TypeScript, Tailwind CSS, and Zustand project and introduced Jest and React Testing Library.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      role: "Full-Stack Developer / Web",
      company: "Pomelo Fashion",
      location: "Bangkok, Thailand",
      start: "Jun 2022",
      end: "Jan 2023",
      impact:
        "Delivered responsive e-commerce and campaign experiences while reducing technical debt and improving mobile acquisition flows.",
      details: [
        "Collaborated with product, frontend, backend, design, and QA teams to deliver customer-facing objectives.",
        "Implemented responsive acquisition and campaign features supporting a significant new-customer segment.",
        "Used Branch.io deep links and analytics to move mobile-web customers into the mobile app.",
        "Helped reduce measured technical debt from 8.3% to 6.6% through focused refactoring.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Branch.io",
        "LaunchDarkly",
        "Locize",
      ],
    },
    {
      role: "Software Engineer / New SOL",
      company: "KBTG",
      location: "Nonthaburi, Thailand",
      start: "Jun 2021",
      end: "May 2022",
      impact:
        "Built signature capture and retrieval workflows and supported defect investigation for enterprise banking systems.",
      details: [
        "Implemented web pages and APIs for signature capture from uploaded files using jQuery and Spring Boot.",
        "Implemented signature search and viewing workflows using AngularJS and Spring Boot.",
        "Investigated defects and documented regression test cases.",
      ],
      technologies: ["Java", "Spring Boot", "AngularJS", "jQuery", "SQL"],
    },
  ] satisfies ResumeExperience[],
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "King Mongkut’s University of Technology Thonburi",
    start: "Jul 2017",
    end: "Jul 2021",
    distinction: "First Class Honours",
    gpa: "3.76",
  },
  skills: [
    {
      label: "Languages",
      items: ["JavaScript", "TypeScript", "Go", "Java", "SQL", "HTML", "CSS"],
    },
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "Astro",
        "AngularJS",
        "Tailwind CSS",
        "Zustand",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      label: "Platform",
      items: [
        "Node.js",
        "Spring Boot",
        "Docker",
        "GitLab CI",
        "GCP",
        "Cloudflare",
        "Kafka",
        "MongoDB",
      ],
    },
    {
      label: "Communication",
      items: ["English — TOEIC 860", "Thai — Native speaker"],
    },
  ],
} as const;
