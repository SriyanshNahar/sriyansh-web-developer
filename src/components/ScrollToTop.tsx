import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  
  // Use a spring for smoother progress animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress to the Y position of the "air" to create the wave fill effect.
  // When y is -100px, the wave line is exactly at the bottom of the 50px button (0% full).
  // When y is -150px, the wave line is exactly at the top of the 50px button (100% full).
  const waveY = useTransform(scaleX, [0, 1], [-100, -150]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // Show earlier so the user can see the water filling up from the Home section
      setIsVisible(latest > 50);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    // Play the fast car passing sound once
    const audio = new Audio('/fast-car-passing-sound.mp3');
    audio.volume = 1.0;
    audio.play().catch(() => {});

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={styles.scrollBtn}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
    >
      <motion.div 
        className={styles.airWave} 
        style={{ y: waveY }} 
      />
      <div className={styles.arrow}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </div>
    </motion.button>
  );
};

export default ScrollToTop;
