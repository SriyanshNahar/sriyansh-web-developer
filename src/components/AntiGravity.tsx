import { motion } from 'framer-motion';
import styles from './AntiGravity.module.css';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

const AntiGravity = () => {
  const formula = "$F = G \\frac{m_1 m_2}{r^2}$";

  return (
    <section id="anti-gravity" className="section-container">
      <div className={styles.grid}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="mono-text accent-text">The Physics</span>
          <h2>Anti-Gravity</h2>
          
          <div className={styles.formulaContainer}>
            <p className={styles.formulaLabel}>Standard Gravitational Force:</p>
            <div className={styles.formula}>
              <Latex>{formula}</Latex>
            </div>
          </div>

          <p>
            Gravity is classically understood as an attractive force between two masses, modeled by Newton's law of universal gravitation shown above. 
          </p>
          <p>
            <strong>Anti-gravity</strong> refers to a hypothetical phenomenon where an object or place is completely free from the force of gravity. Unlike normal gravity which strictly pulls masses together, theoretical anti-gravity would involve a <em>repulsive force</em>, pushing objects apart and neutralizing the attractive pull. 
          </p>
          <p>
            In our designs, we simulate anti-gravity using smooth interpolations and floating 3D elements, breaking the bounds of strict vertical layouts to create a weightless user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AntiGravity;
