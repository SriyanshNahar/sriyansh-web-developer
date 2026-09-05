import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillsData = [
  { category: 'Frontend', items: ['Angular', 'TypeScript', 'Tailwind CSS(basic)'] },
  { category: 'Backend & Other', items: ['Node.js', 'PHP', 'MySQL', 'JavaScript'] },
  { category: 'Design', items: ['Figma', 'UI/UX Design', '3D Modeling', 'Web Design'] },
  { category: 'Services', items: ['Online Listing of Product', 'E-commerce Setup', 'SEO'] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className={styles.header}>
        <span className="mono-text accent-text">02 // THE ENGINE</span>
        <h2 className={styles.heading}>TECHNICAL SPECIFICATIONS.</h2>
      </div>

      <div className={styles.layoutGrid}>
        <div className={styles.grid}>
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
              <ul className={styles.skillList}>
                {skillGroup.items.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.bullet}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* GlobalScene handles the 3D visual */}
        <div className={styles.visualContainer}></div>
      </div>
    </section>
  );
};

export default Skills;
