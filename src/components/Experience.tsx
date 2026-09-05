import { motion } from 'framer-motion';
import styles from './StudioFloor.module.css';

const timeline = [
  ['01', 'CREATIVE FOUNDATION', 'Design thinking, visual communication and building a strong creative process.'],
  ['02', 'WEB & UI/UX', 'Modern interfaces, responsive experiences and product-focused web design.'],
  ['03', 'CURRENT JOURNEY', 'Expanding the studio through frontend development, 3D experiences and creative client work.'],
];

export default function Experience() {
  return <section id="experience" className="section-container">
    <div className={styles.header}><span className="mono-text accent-text">FIRST FLOOR // EXPERIENCE</span><h2>THE JOURNEY<br/><em>SO FAR.</em></h2></div>
    <div className={styles.cards}>{timeline.map(([no,title,text],i)=><motion.article key={title} className={styles.card} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}>
      <span>{no}</span><h3>{title}</h3><p>{text}</p>
    </motion.article>)}</div>
  </section>;
}