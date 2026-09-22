export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "dev",
    title: "Development & Technology",
    items: [
      "Frontend Web Development", "Responsive Web Design", "HTML5", "CSS3", "JavaScript",
      "TypeScript", "Angular", "Bootstrap", "RxJS & Observables", "Angular Components",
      "Angular Services", "Angular Routing", "Angular Forms", "Data Binding",
      "REST API Integration", "PHP", "MySQL", "Node.js", "Database Management", "Firebase",
      "Git & GitHub", "Website Maintenance & Optimization", "Cross-Browser Compatibility",
      "UI Implementation", "Website Performance Optimization", "SEO-Friendly Development",
    ],
  },
  {
    id: "design",
    title: "Graphic Design & Creative Skills",
    items: [
      "UI/UX Design", "Website Interface Design", "Social Media Creative Design",
      "Product Creative Design", "Product Listing Images", "Branding & Visual Identity",
      "Logo Design & Enhancement", "Marketing Creative Design", "Packaging Design",
      "Advertisement Design", "Banner & Poster Design", "Promotional Creatives",
      "Typography & Font Selection", "Color Theory & Color Management",
      "Image Editing & Retouching", "Background Removal", "Product Image Enhancement",
      "Print-Ready Design", "Digital Marketing Creatives",
    ],
  },
  {
    id: "tools",
    title: "Design Tools",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "CorelDRAW", "Canva"],
  },
  {
    id: "marketing",
    title: "Digital Marketing & Social Media",
    items: [
      "Social Media Management", "Social Media Marketing", "Instagram Marketing",
      "LinkedIn Marketing", "Facebook Marketing", "Content Strategy",
      "Content Calendar Planning", "Reels & Short-Form Content", "UGC Content Planning",
      "Video Content Concepts", "Product Shoot Planning", "Reel Script Writing",
      "Campaign Planning", "Brand Awareness Campaigns", "Product Marketing", "SEO",
      "On-Page SEO", "Keyword Research", "Website Content Planning",
      "Social Media Analytics", "Audience Engagement", "Digital Brand Building",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Product Management",
    items: [
      "E-Commerce Website Development", "Product Listing", "Product Catalog Management",
      "Product Image Optimization", "Product Description Writing", "Product Categorization",
      "Online Store Management", "Bulk Product Upload", "Product Data Management",
      "Order Management Workflows", "Customer Communication", "WhatsApp Business Integration",
      "Marketplace Listing", "Amazon Product Listing", "Flipkart Product Listing",
      "Myntra Product Listing", "Ajio Product Listing", "Meesho Product Listing",
    ],
  },
  {
    id: "sales",
    title: "Sales & Business Skills",
    items: [
      "B2B Sales", "Lead Generation", "Customer Communication", "Client Handling",
      "Product Presentation", "Product Demonstration", "Sales Pitch Preparation",
      "Requirement Gathering", "Client Requirement Analysis", "Follow-Up Management",
      "Customer Relationship Management", "Business Communication", "Negotiation",
      "Proposal Preparation", "Product Pricing Understanding", "Cross-Selling & Upselling",
      "Sales Support", "Market Research", "Competitor Research",
      "Business Development Support", "Customer Retention Strategies",
    ],
  },
  {
    id: "finance",
    title: "Finance & Business Skills",
    items: [
      "Basic Financial Management", "Personal Finance Management", "Budget Planning",
      "Expense Tracking", "Revenue & Cost Understanding", "Profit & Loss Understanding",
      "Cash Flow Basics", "Financial Data Analysis", "Business Cost Analysis",
      "Pricing & Margin Understanding", "Sales & Revenue Tracking",
      "Budget vs. Actual Analysis", "Financial Planning Basics",
      "Investment & Savings Concepts", "SIP & Investment Concepts",
      "Business Financial Decision Support", "Basic Excel-Based Financial Analysis",
    ],
  },
  {
    id: "data",
    title: "Data, Analytics & Productivity",
    items: [
      "Microsoft Excel", "Google Sheets", "Data Organization", "Data Cleaning",
      "Basic Data Analysis", "Reporting & Documentation", "KPI Tracking",
      "Sales Reporting", "Social Media Analytics", "Website Analytics",
      "Product Performance Analysis", "Research & Competitive Analysis",
    ],
  },
  {
    id: "professional",
    title: "Professional & Management Skills",
    items: [
      "Project Management", "Task Management", "Creative Problem Solving",
      "Requirement Analysis", "Team Collaboration", "Client Communication",
      "Time Management", "Decision Making", "Presentation Skills",
      "Business Communication", "Creative Thinking", "Attention to Detail",
      "Research & Analysis", "Cross-Functional Collaboration",
    ],
  },
];

export const coreProfile = {
  titles: [
    "Web Developer", "Frontend Developer", "UI/UX Designer", "Graphic Designer",
    "Digital Marketer", "E-Commerce Professional", "Sales & Business Development",
    "Finance & Business Analysis",
  ],
  summary:
    "I bring together technology, design, marketing, e-commerce, sales, and business knowledge to create practical digital solutions — from developing websites and designing user interfaces to managing product presentation, marketing campaigns, customer communication, and business-oriented digital strategies.",
};
