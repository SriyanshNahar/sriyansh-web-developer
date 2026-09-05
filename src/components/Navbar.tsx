import { useState, useEffect, useRef } from 'react';
import { Home, User, UserCog, ClipboardList, Info } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const isClickingRef = useRef(false);

  // Reordered to put Contact on the last side
  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Skills', href: '#skills', icon: UserCog },
    { name: 'Projects', href: '#projects', icon: ClipboardList },
    { name: 'Contact', href: '#contact', icon: User },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active tab if we're currently scrolling from a click
      if (isClickingRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      // Special case: Very top of the page
      if (scrollPosition < 100) {
        setActiveTab(0);
        return;
      }

      // Special case: Bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveTab(navLinks.length - 1);
        return;
      }

      // Find the current section
      // We look for the section that is currently crossing the "focus point" (1/3 down the screen)
      const focusPoint = scrollPosition + windowHeight / 3;

      let currentActiveIndex = 0;

      for (let i = 0; i < navLinks.length; i++) {
        const id = navLinks[i].href.substring(1);
        const element = document.getElementById(id);

        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (focusPoint >= offsetTop && focusPoint < offsetTop + offsetHeight) {
            currentActiveIndex = i;
            break;
          }
        }
      }

      setActiveTab(currentActiveIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case they start partway down
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, href: string) => {
    e.preventDefault();
    setActiveTab(index);
    isClickingRef.current = true;

    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset clicking ref after scroll animation completes (~1000ms)
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  return (
    <>


      {/* Floating Navigation (Fixed) */}
      <div className={styles.mobileBottomNav}>
        <ul className={styles.navItems} style={{ '--active-index': activeTab } as React.CSSProperties}>
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = activeTab === index;
            return (
              <li
                key={link.name}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => handleNavClick(e, index, link.href)}
                >
                  <span className={styles.iconWrapper}>
                    <Icon size={24} />
                  </span>
                  <span className={styles.text}>{link.name}</span>
                </a>
              </li>
            );
          })}
          <div className={styles.indicator}>
            <div className={styles.indicatorInner}></div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
