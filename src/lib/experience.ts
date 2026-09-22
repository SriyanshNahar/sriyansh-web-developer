export type ExperienceRole = {
  id: string;
  title: string;
  org: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
};

export const experience: ExperienceRole[] = [
  {
    id: "biometa",
    title: "Web Developer & Digital Marketing / Creative Professional",
    org: "Biometa Polypack",
    location: "Ahmedabad, Gujarat",
    period: "Current role",
    summary:
      "Biometa Polypack manufactures garment bags, courier bags, D-cut grocery carry bags, compostable bags, biohazard bags, and customized packaging. My role combines web development, digital marketing, social content, and creative design to strengthen the company's digital presence.",
    bullets: [
      "Manage and improve the company website — UI/UX, responsive design, product presentation, content structure.",
      "Organize product images and listings for online presentation.",
      "Develop creative content for Instagram, LinkedIn, Facebook, and other platforms.",
      "Plan and execute social content calendars — posts, reels, campaigns, festivals, awareness-day content.",
      "Write concepts and scripts for product reels, UGC-style videos, demos, and BTS content.",
      "Coordinate and plan product shoots — concepts, scripts, shot sequences, requirements.",
      "Create marketing creatives and product visuals in Photoshop, Illustrator, and Figma.",
      "Build product-focused campaigns highlighting quality, durability, customization, and packaging.",
      "Improve website content for SEO, product visibility, and user experience.",
      "Maintain branding consistency across website, social, and marketing materials.",
    ],
  },
  {
    id: "freelance",
    title: "Freelance / Independent Web Developer & Designer",
    org: "Self-employed",
    location: "Remote",
    period: "Ongoing",
    summary:
      "Independent website development, UI/UX design, e-commerce projects, and digital solutions for businesses and personal projects.",
    bullets: [
      "Built responsive websites with HTML, CSS, JavaScript, Bootstrap, Angular, PHP, and MySQL.",
      "Designed website interfaces and user experiences in Figma and Adobe Creative Suite.",
      "Built and customized e-commerce and business websites.",
      "Worked on product listing, presentation, and content structure.",
      "Integrated forms, APIs, WhatsApp workflows, and databases.",
      "Worked on SEO-friendly, performance-focused site structures.",
      "Delivered custom solutions matched to individual business requirements.",
    ],
  },
  {
    id: "oneroof",
    title: "Angular Developer Intern",
    org: "OneRoof Technologies LLP",
    location: "Mulund, Mumbai, Maharashtra",
    period: "Internship — Sept 2024 to Apr 2025",
    summary:
      "Practical experience in modern frontend development and component-based web applications.",
    bullets: [
      "Developed and maintained web interfaces with Angular and TypeScript.",
      "Built reusable Angular components for scalable frontend development.",
      "Implemented responsive and interactive UI components.",
      "Worked with Angular Services, Routing, Forms, HTTP Client, and data binding.",
      "Used RxJS and Observables for asynchronous data and interactions.",
      "Collaborated with developers to troubleshoot UI and functionality issues.",
      "Built real-world understanding of debugging and version-based development workflows.",
    ],
  },
  {
    id: "craftsilicon",
    title: "Web Designer / Software Developer Intern",
    org: "Craft Silicon",
    location: "Ahmedabad, Gujarat",
    period: "Internship — June 2023 to Aug 2023",
    summary:
      "Contributed to design and development of web-based solutions — UI design, frontend development, and database integration.",
    bullets: [
      "Designed responsive, user-friendly interfaces with HTML, CSS, JavaScript, and Bootstrap.",
      "Worked on HealthPlus, a hospital website for an easy healthcare experience.",
      "Built pages for doctor availability, departments, blogs, an online shop, and appointment booking.",
      "Created and refined UI designs in Figma, Photoshop, and Illustrator.",
      "Worked with PHP and MySQL for backend functionality and database integration.",
      "Focused on responsive layouts and cross-browser compatibility.",
      "Collaborated with the dev team to implement and improve site features.",
    ],
  },
];
