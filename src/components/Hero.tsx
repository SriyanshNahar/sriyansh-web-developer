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
          SRIYANSH NAHAR — GRAPHIC DESIGNER
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .1, type: 'spring', bounce: .15 }}>
          I DESIGN<br />
          <span>VISUALS</span><br />
          <em>THAT SPEAK.</em>
        </motion.h1>

        <motion.div className={styles.bottomCopy} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .75 }}>
          <p>Start outside the studio. Then scroll floor by floor through my story, experience, graphic design work, web projects, skills and the rooftop contact space.</p>
          <a href="#about">ENTER THE STUDIO <b>↘</b></a>
        </motion.div>
      </motion.div>

      <motion.div className={styles.scrollPanel} style={{ y: panelY }}>
        <span>SCROLL TO EXPLORE</span>
        <div className={styles.progress}><i /></div>
        <span>01 / 07</span>
      </motion.div>
    </section>
  );
};

export default Hero;
