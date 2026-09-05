import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
const links=[['BUILDING','#home'],['ABOUT','#about'],['EXPERIENCE','#experience'],['PROJECTS','#projects'],['DESIGN','#graphic-design'],['SKILLS','#skills'],['CONTACT','#contact']];
export default function Navbar(){
 const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(scrollY>30);addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 return <header className={styles.navbar+(scrolled?' '+styles.scrolled:'')}><a className={styles.logo} href="#home">SN<span>STUDIO</span></a>
 <nav className={styles.desktopMenu}>{links.map(([n,h])=><a key={n} href={h}>{n}</a>)}</nav>
 <button className={styles.menuButton} onClick={()=>setOpen(!open)} aria-label="Toggle menu"><span/><span/></button>
 {open&&<div className={styles.mobileMenu}>{links.map(([n,h])=><a key={n} href={h} onClick={()=>setOpen(false)}>{n}</a>)}</div>}
 </header>
}