import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 90, damping: 28 });
  const contentY = useTransform(smoothScroll, [0, 850], [0, -220]);
  const contentScale = useTransform(smoothScroll, [0, 850], [1, 0.72]);
  const backgroundY = useTransform(smoothScroll, [0, 1000], [0, -420]);
  const opacity = useTransform(smoothScroll, [0, 700], [1, 0]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.orbOne} />
      <div className={styles.orbTwo} />
      <motion.div className={styles.backgroundText} style={{ y: backgroundY }}>
        NAHAR
      </motion.div>

      <motion.div className={styles.sideLabel} style={{ opacity }}>
        <span>01</span>
        <i />
        <span>PORTFOLIO / 2026</span>
      </motion.div>

      <motion.div className={styles.content} style={{ y: contentY, scale: contentScale, opacity }}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <span className={styles.liveDot} />
          Creative Developer • Available for work
        </motion.div>

        <motion.p
          className={styles.kicker}
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.28em' }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          DIGITAL EXPERIENCES / THREE DIMENSIONS
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 80, rotateX: -28 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.15, type: 'spring', bounce: 0.22 }}
        >
          SRIYANSH
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I design digital worlds where code, motion and imagination collide.
        </motion.p>

        <motion.a
          href="#projects"
          className={styles.exploreButton}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span>Explore selected work</span>
          <b>↘</b>
        </motion.a>
      </motion.div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}><div className={styles.wheel} /></div>
        <span>SCROLL TO ENTER</span>
      </div>
    </section>
  );
};

export default Hero;
