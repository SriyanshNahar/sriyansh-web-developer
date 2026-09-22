import { ZoomSliderComp, type ZoomSliderItem } from './ui/zoom-slider';
import truebatchFront from '../assets/design-work/truebatch-front.jpg';
import truebatchBack from '../assets/design-work/truebatch-back.jpg';
import loundryco from '../assets/design-work/loundryco.jpg';
import choosekindMailer from '../assets/design-work/choosekind-mailer.jpg';
import vatanDairyBag from '../assets/design-work/vatan-dairy-bag.jpg';

const experienceSlides: ZoomSliderItem[] = [
  { number: '01', src: truebatchFront, title: 'DESIGN FOUNDATION', desc: 'Built a strong eye for composition, branding and visual communication.' },
  { number: '02', src: loundryco, title: 'BRAND IDENTITY', desc: 'Packaging and brand systems — TrueBatch, LoundryCo, Vatan Dairy.' },
  { number: '03', src: vatanDairyBag, title: 'WEB & UI/UX', desc: 'Moved into responsive websites, interface design and digital experiences.' },
  { number: '04', src: truebatchBack, title: 'PRINT PRODUCTION', desc: 'Production-ready packaging with die-lines, bleeds and print specs.' },
  { number: '05', src: choosekindMailer, title: '3D & CREATIVE WEB', desc: 'Now combining development, motion and immersive web concepts.' },
];

export default function Experience() {
  return (
    <section id="experience">
      <ZoomSliderComp sliderData={experienceSlides} />
    </section>
  );
}
