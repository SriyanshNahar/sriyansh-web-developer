import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollY, { stiffness: 80, damping: 24 });
  const y = useTransform(smooth, [0, 850], [0, -260]);
  const scale = useTransform(smooth, [0, 850], [1, 0.78]);
  const opacity = useTransform(smooth, [0, 700], [1, 0]);
  const panelY = useTransform(smooth, [0, 900], [0, 140]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroShade} />
      <motion.div className={styles.content} style={{ y, scale, opacity }}>
        <motion.div className={styles.eyebrow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          SRIYANSH NAHAR — CREATIVE STUDIO
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .1, type: 'spring', bounce: .15 }}>
          ENTER THE<br />
          <span>THREE FLOOR</span><br />
          <em>STUDIO.</em>
        </motion.h1>

        <motion.div className={styles.bottomCopy} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .75 }}>
          <p>Scroll through the building: client experience on the ground floor, graphic design on floor one, and 3D web experiments above.</p>
          <a href="#projects">ENTER THE STUDIO <b>↘</b></a>
        </motion.div>
      </motion.div>

      <motion.div className={styles.scrollPanel} style={{ y: panelY }}>
        <span>SCROLL TO EXPLORE</span>
        <div className={styles.progress}><i /></div>
        <span>01 / 05</span>
      </motion.div>
    </section>
  );
};

export default Hero;
