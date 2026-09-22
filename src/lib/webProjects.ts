export type WebProject = {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  filter: "web" | "fashion" | "crypto" | "visual";
  url: string | null;
};

export const webProjects: WebProject[] = [
  {
    id: "linenry",
    index: "01",
    category: "Fashion / Apparel",
    title: "Linenry",
    description: "A quiet, editorial fashion experience for premium linen apparel and styling.",
    tags: ["Fashion", "Single Page", "Web Design"],
    filter: "fashion",
    url: "https://linenry.netlify.app/",
  },
  {
    id: "linenry-form",
    index: "02",
    category: "Web Application",
    title: "Linenry Form",
    description: "A focused intake and customization flow for the Linenry brand.",
    tags: ["Forms", "UI/UX", "Web App"],
    filter: "web",
    url: "https://linenryform.netlify.app/",
  },
  {
    id: "mosto-bitcoin",
    index: "03",
    category: "Crypto Platform",
    title: "Mosto Bitcoin",
    description: "A Bitcoin-focused landing page built around live-feeling data and Web3 visuals.",
    tags: ["Crypto", "React", "Web Design"],
    filter: "crypto",
    url: "https://mosto-bitcoin.netlify.app/",
  },
  {
    id: "medicoz-hospital",
    index: "04",
    category: "Healthcare Management",
    title: "Medicozs Hospital",
    description: "A hospital-site experience covering patients, teams, and scheduling.",
    tags: ["Healthcare", "Web App", "UI/UX"],
    filter: "web",
    url: "https://medicoz-hospital.netlify.app/",
  },
  {
    id: "gamics-master",
    index: "05",
    category: "Gaming Platform",
    title: "Gamics Master",
    description: "A competitive gaming portal with neon energy, tournament listings, and momentum.",
    tags: ["Gaming", "Frontend", "Design"],
    filter: "web",
    url: "https://gamicsmaster.netlify.app/",
  },
  {
    id: "nike-jordans",
    index: "06",
    category: "E-commerce Landing",
    title: "Nike Jordans",
    description: "An immersive product showcase built around sneaker culture.",
    tags: ["E-commerce", "Landing", "Sneakers"],
    filter: "fashion",
    url: "https://nikejordene.netlify.app/",
  },
  {
    id: "aarvi-diamonds",
    index: "07",
    category: "Luxury Jewellery",
    title: "Aarvi Diamonds",
    description: "A polished digital catalog for high-end diamonds and considered reservations.",
    tags: ["Jewelry", "Premium", "Listing"],
    filter: "visual",
    url: "https://aarvidiamondsjewellery.netlify.app/",
  },
  {
    id: "kallakari",
    index: "08",
    category: "Fashion / Tailoring",
    title: "Kallakari",
    description: "A doorstep tailoring and measurement booking platform made to feel personal.",
    tags: ["Custom Clothing", "E-commerce", "Service"],
    filter: "fashion",
    url: "https://kallakari.in/",
  },
  {
    id: "old-portfolio",
    index: "09",
    category: "Archive Work",
    title: "Previous Portfolio",
    description: "An archive of earlier web experiments, visual studies, and design ideas.",
    tags: ["Portfolio", "Archive", "HTML/CSS"],
    filter: "visual",
    url: "https://oldportfolioo.netlify.app/",
  },
  {
    id: "hostel-management",
    index: "10",
    category: "Full-Stack Admin Panel",
    title: "Hostel Management System",
    description: "A final-year project for room allocation, fee calculation, and student management.",
    tags: ["Admin Panel", "Dashboard", "Full-Stack"],
    filter: "web",
    url: null,
  },
  {
    id: "tour-travel",
    index: "11",
    category: "Booking Platform",
    title: "Tour & Travel",
    description: "A travel booking engine with stays and itinerary planning.",
    tags: ["Travel", "Booking", "E-commerce"],
    filter: "web",
    url: null,
  },
];

export const filters = [
  { id: "all", label: "All Signals" },
  { id: "web", label: "Web Builds" },
  { id: "fashion", label: "Fashion" },
  { id: "crypto", label: "Crypto" },
  { id: "visual", label: "Visual Systems" },
] as const;
