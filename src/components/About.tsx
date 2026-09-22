import {
  PenTool,
  Sparkles,
  Package,
  MonitorSmartphone,
  Type,
  Code2,
  CheckCircle,
  Star,
  Award,
  Users,
  Calendar,
  TrendingUp,
} from 'lucide-react';
import AboutUsSection, { type AboutService, type AboutStat } from './ui/about-us-section';
import sriyanshPortrait from '../assets/profile/sriyansh-portrait.webp';

const services: AboutService[] = [
  {
    icon: <PenTool className="w-6 h-6" />,
    secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-white/50" />,
    title: 'Branding',
    description: 'Brand identity systems, logos and the visual language that makes a brand memorable — done for TrueBatch, LoundryCo and more.',
    position: 'left',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-white/50" />,
    title: 'Social Media',
    description: 'High-impact content designed to stop the scroll — visuals that carry a brand voice across every platform.',
    position: 'left',
  },
  {
    icon: <Package className="w-6 h-6" />,
    secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-white/50" />,
    title: 'Print & Packaging',
    description: 'Production-ready packaging with real die-lines, bleeds and print specs — not just concepts, work that ships to print.',
    position: 'left',
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-white/50" />,
    title: 'UI / UX',
    description: 'Digital interfaces where visuals meet usability — interfaces designed to feel as good as they look.',
    position: 'right',
  },
  {
    icon: <Type className="w-6 h-6" />,
    secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-white/50" />,
    title: 'Typography',
    description: 'Considered type systems that carry a brand\'s voice, from packaging copy to on-screen headings.',
    position: 'right',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-white/50" />,
    title: 'Web Development',
    description: 'Turning the designs into fast, responsive, real websites — I build the sites that show off the work.',
    position: 'right',
  },
];

const stats: AboutStat[] = [
  { icon: <Calendar />, value: 9, label: 'Months of Creative Work', suffix: '' },
  { icon: <Award />, value: 10, label: 'Design Concepts Created', suffix: '+' },
  { icon: <TrendingUp />, value: 2, label: 'Brands & Companies', suffix: '+' },
  { icon: <Users />, value: 2, label: 'Client & Team Reviews', suffix: '+' },
];

export default function About() {
  return (
    <AboutUsSection
      eyebrow="ABOUT SRIYANSH"
      heading="About Me"
      intro="I'm Sriyansh Nahar — a graphic designer who thinks in colour, type and composition. I craft brand identities, social media design, print & packaging and UI/UX visuals, and I also happen to build the websites that show them off."
      services={services}
      imageSrc={sriyanshPortrait}
      imageAlt="Sriyansh Nahar"
      portfolioHref="#graphic-design"
      portfolioLabel="My Portfolio"
      stats={stats}
      ctaHeading="Ready to bring your brand to life?"
      ctaText="Let's create something beautiful together."
      ctaButtonLabel="Let's Talk"
      ctaHref="#contact"
    />
  );
}
