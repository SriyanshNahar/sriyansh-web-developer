import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className={styles.grid}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono-text accent-text">01 // THE DRIVER</span>
          <h2 className={styles.heading}>DESIGN DRIVEN, <br/>PERFORMANCE FOCUSED.</h2>
          <p className={styles.paragraph}>
            I'm Sriyansh Nahar, a freelance frontend developer and UI/UX designer based in Bhilwara. 
            I specialize in building high-performance, modern web applications that leave a lasting impact.
          </p>

          <div className={styles.educationSection}>
            <h3 className={styles.eduHeading}>Education & Training</h3>
            <div className={styles.educationGrid}>
              <div className={styles.educationCard}>
                <div className={styles.eduDot}></div>
                <div>
                  <h4 className={styles.courseTitle}>MERN Stack Development</h4>
                  <p className={styles.courseDetails}>Grass Solution, Jaipur (Online Mode) • Currently Underway</p>
                </div>
              </div>
              
              <div className={styles.educationCard}>
                <div className={styles.eduDot}></div>
                <div>
                  <h4 className={styles.courseTitle}>BCA (Bachelor of Computer Applications)</h4>
                  <p className={styles.courseDetails}>Sangam University • 2021-2024<br/>Academic Score: 7/9.5 CGPA</p>
                </div>
              </div>

              <div className={styles.educationCard}>
                <div className={styles.eduDot}></div>
                <div>
                  <h4 className={styles.courseTitle}>HSC (Higher Secondary)</h4>
                  <p className={styles.courseDetails}>Central Academy Senior Secondary School • 2020-2021<br/>Academic Score: 63.4%</p>
                </div>
              </div>

              <div className={styles.educationCard}>
                <div className={styles.eduDot}></div>
                <div>
                  <h4 className={styles.courseTitle}>SSC (Secondary School)</h4>
                  <p className={styles.courseDetails}>Central Academy Senior Secondary School • 2018-2019<br/>Academic Score: 50.8%</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Replaced 3D visual with home-page image */}
        <div className={styles.visual}>
          <img src="/home-page.png" alt="Sriyansh Nahar Home Page" className={styles.profileImage} />
        </div>
      </div>
    </section>
  );
};

export default About;
