import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundText}>
        NAHAR
      </div>
      
      {/* The 3D model is now handled globally by GlobalScene */}
      <div className={styles.canvasContainer}></div>

      <motion.div className={styles.content} style={{ y: y2 }}>
        <div className={styles.badge}>Creative Developer</div>
        <h1 className={styles.title}>
          SRIYANSH
        </h1>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
