import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import styles from './Stats.module.css';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2, suffix = '' }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, suffix, inView]);

  return <span ref={nodeRef} className={styles.number}>{from}{suffix}</span>;
};

const Stats = () => {
  return (
    <section id="stats" className="section-container">
      <div className={styles.container}>
        
        {/* Left Big Block */}
        <motion.div 
          className={styles.leftBlock}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.experienceHeader}>
            <Counter from={0} to={9} duration={2} />
            <h2 className={styles.experienceTitle}>MONTHS OF<br/>CREATIVE WORK</h2>
          </div>
          <p className={styles.experienceDesc}>
            Provide expert advice, create websites, edit graphics/photos, handle marketing, and hiring posts to improve performance, efficiency, and online presence.
          </p>
        </motion.div>

        {/* Right Grid Blocks */}
        <div className={styles.rightGrid}>
          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Counter from={0} to={10} suffix="+" />
            <p>PROJECTS & EXPERIENCES</p>
          </motion.div>

          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Counter from={0} to={10} suffix="+" />
            <p>DESIGN CONCEPTS CREATED</p>
          </motion.div>

          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Counter from={0} to={2} suffix="+" />
            <p>CLIENT & TEAM REVIEWS</p>
          </motion.div>

          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Counter from={0} to={2} suffix="+" />
            <p>BRANDS & COMPANIES</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Stats;
