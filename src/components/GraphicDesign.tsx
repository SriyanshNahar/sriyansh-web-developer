import { motion } from 'framer-motion';
import styles from './StudioFloor.module.css';

const boards = [
  ['BRANDING', 'Identity systems, campaign visuals and memorable brand worlds.'],
  ['SOCIAL MEDIA', 'Scroll-stopping content, launches and visual storytelling.'],
  ['PRINT & PACKAGING', 'Tangible creative work designed with clarity and impact.'],
  ['UI / UX', 'Digital interfaces where design and usability meet.'],
];

export default function GraphicDesign() {
  return <section id="graphic-design" className="section-container">
    <div className={styles.header}><span className="mono-text accent-text">THIRD FLOOR // GRAPHIC DESIGN</span><h2>THE VISUAL<br/><em>GALLERY.</em></h2><p>One floor dedicated to the graphic design side of Sriyansh Studio.</p></div>
    <div className={styles.gallery}>{boards.map(([title,text],i)=><motion.article key={title} className={styles.poster} initial={{opacity:0,rotate:i%2?4:-4,y:40}} whileInView={{opacity:1,rotate:0,y:0}} viewport={{once:true}} transition={{duration:.6}}>
      <div className={styles.posterNumber}>0{i+1}</div><h3>{title}</h3><p>{text}</p><div className={styles.posterLine}/>
    </motion.article>)}</div>
  </section>;
}