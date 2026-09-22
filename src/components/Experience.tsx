import styles from './StudioFloor.module.css';
import { ZoomSliderComp, type ZoomSliderItem } from './ui/zoom-slider';
import trumatchFront from '../assets/design-work/trumatch-front.jpg';
import trumatchBack from '../assets/design-work/trumatch-back.jpg';
import loundryFront from '../assets/design-work/loundry-front.jpg';
import loundryPollingRoll from '../assets/design-work/loundry-polling-roll.jpg';
import vateenGheeFront from '../assets/design-work/vateen-ghee-front.jpg';
import vateenGheeBack from '../assets/design-work/vateen-ghee-back.jpg';

const experienceSlides: ZoomSliderItem[] = [
  { number: '01', src: trumatchFront, title: 'DESIGN FOUNDATION', desc: 'Built a strong eye for composition, branding and visual communication.' },
  { number: '02', src: loundryFront, title: 'BRAND IDENTITY', desc: 'Packaging and brand systems — TrueBatch, LoundryCo, Vateen Ghee Ghar.' },
  { number: '03', src: vateenGheeFront, title: 'WEB & UI/UX', desc: 'Moved into responsive websites, interface design and digital experiences.' },
  { number: '04', src: trumatchBack, title: 'PRINT PRODUCTION', desc: 'Production-ready packaging with die-lines, bleeds and print specs.' },
  { number: '05', src: loundryPollingRoll, title: '3D & CREATIVE WEB', desc: 'Now combining development, motion and immersive web concepts.' },
  { number: '06', src: vateenGheeBack, title: 'CLIENT WORK', desc: 'Real client packaging shipped to print — not just concepts.' },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className={styles.header}>
        <span className="mono-text accent-text">FIRST FLOOR // EXPERIENCE</span>
        <h2>THE JOURNEY<br /><em>SO FAR.</em><small>Experience lives on this floor.</small></h2>
      </div>
      <ZoomSliderComp sliderData={experienceSlides} />
    </section>
  );
}
