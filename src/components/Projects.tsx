import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Kallakari',
    category: 'Fashion & Tailoring',
    description: 'Hassle-Free Custom Clothing. Doorstep measurements, premium stitching, fast delivery — tailored exactly for you.',
    tags: ['E-Commerce', 'Fashion', 'Custom'],
    link: 'https://kallakari.in/'
  },
  {
    title: 'Linenry',
    category: 'Fashion & Apparel',
    description: 'A sleek, single-page fashion website dedicated to premium linen apparel and styling.',
    tags: ['Fashion', 'Single Page', 'Web Design'],
    link: 'https://linenry.netlify.app/'
  },
  {
    title: 'Linenry Form',
    category: 'Fashion & Apparel',
    description: 'A dedicated form and intake web application for the Linenry brand.',
    tags: ['Forms', 'UI/UX', 'Web App'],
    link: 'https://linenryform.netlify.app/'
  },
  {
    title: 'Mosto BitCoin',
    category: 'Development Coaches',
    description: 'A cryptocurrency related platform focused on Bitcoin.',
    tags: ['Crypto', 'React', 'Web Design'],
    link: 'https://mosto-bitcoin.netlify.app/'
  },
  {
    title: 'Medicozs',
    category: 'Development Coaches',
    description: 'A comprehensive medical and hospital management web application.',
    tags: ['Healthcare', 'Web App', 'UI/UX'],
    link: 'https://medicoz-hospital.netlify.app/'
  },
  {
    title: 'Gamics Master',
    category: 'Development Coaches',
    description: 'A dynamic gaming platform with interactive features and sleek design.',
    tags: ['Gaming', 'Frontend', 'Design'],
    link: 'https://gamicsmaster.netlify.app/'
  },
  {
    title: 'Nike Jordens',
    category: 'Development Coaches',
    description: 'An e-commerce style landing page specifically built for Nike Jordans.',
    tags: ['E-Commerce', 'Landing Page', 'Sneakers'],
    link: 'https://nikejordene.netlify.app/'
  },
  {
    title: 'AArvi Diamonds Jewellery',
    category: 'Development Coaches',
    description: 'A premium jewelry website showcasing high-end diamond products.',
    tags: ['Jewelry', 'Premium', 'Listing'],
    link: 'https://aarvidiamondsjewellery.netlify.app/'
  },
  {
    title: 'Old Portfolio',
    category: 'Development Coaches',
    description: 'My previous portfolio website showcasing earlier work and designs.',
    tags: ['Portfolio', 'HTML', 'CSS'],
    link: 'https://oldportfolioo.netlify.app/'
  },
  {
    title: 'Hostel Management System',
    category: 'Management Systems',
    description: 'A comprehensive portal where students can view their allocated rooms and fees. Includes a full admin dashboard to manage student additions, price configurations, and automated room allocation. Built as my final year college project.',
    tags: ['Admin Panel', 'Dashboard', 'Full-Stack']
  },
  {
    title: 'Tour and Travel',
    category: 'Booking Platforms',
    description: 'A travel and hotel booking platform inspired by MakeMyTrip (MMT), allowing users to explore and book tours seamlessly.',
    tags: ['Travel', 'Booking', 'E-Commerce']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className={styles.header}>
        <span className="mono-text accent-text">SELECTED WORK / 2026</span>
        <h2 className={styles.heading}>BUILT TO BE<br/><em>REMEMBERED.</em></h2>
        <p className={styles.intro}>A collection of digital products, brand experiences and interfaces shaped around clarity, personality and movement.</p>
      </div>

      <div className={styles.container}>
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className={styles.cardHeader}><span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {project.title} ↗
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
              </div><div className={styles.projectBody}><p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.tags}>{project.tags.map(tag => (<span key={tag} className={styles.tag}>{tag}</span>))}</div>{project.link && <span className={styles.viewProject}>VIEW PROJECT ↗</span>}</div></motion.div>
          ))}
        </div>

        <div className={styles.visualColumn}>
          {/* GlobalScene handles the 3D visual */}
          <div className={styles.reflectionEffect}></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
