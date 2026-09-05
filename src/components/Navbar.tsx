import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  ['Home', '#home'],
  ['Studio', '#about'],
  ['Capabilities', '#skills'],
  ['Work', '#projects'],
  ['Contact', '#contact'],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={styles.navbar + (scrolled ? ' ' + styles.scrolled : '')}>
      <a className={styles.logo} href="#home">SN<span>STUDIO</span></a>
      <nav className={styles.desktopMenu}>
        {links.map(([name, href]) => <a key={name} href={href}>{name}</a>)}
      </nav>
      <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span /><span />
      </button>
      {open && <div className={styles.mobileMenu}>{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}</div>}
    </header>
  );
};

export default Navbar;
