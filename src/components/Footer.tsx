
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.logo}>SRIYANSH NAHAR</h2>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/sriyansh-nahar" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
            <a href="https://www.instagram.com/sriyanshjain_04/?__pwa=1" target="_blank" rel="noreferrer" className={styles.link}>Instagram</a>
            <a href="https://www.facebook.com/share/1B2XeMYrSk/" target="_blank" rel="noreferrer" className={styles.link}>Facebook</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Sriyansh Nahar. All rights reserved.</p>
          <p className={styles.location}>Based in Bhilwara, Rajasthan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
