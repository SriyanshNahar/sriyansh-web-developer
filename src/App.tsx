import React, { Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Hero=React.lazy(()=>import('./components/Hero'));
const About=React.lazy(()=>import('./components/About'));
const Projects=React.lazy(()=>import('./components/Projects'));
const ProjectsIntro=React.lazy(()=>import('./components/ProjectsIntro'));
const GraphicDesign=React.lazy(()=>import('./components/GraphicDesign'));
const Skills=React.lazy(()=>import('./components/Skills'));
const Contact=React.lazy(()=>import('./components/Contact'));

export default function App(){
 const [loaded,setLoaded]=useState(false);
 useEffect(()=>{const t=window.setTimeout(()=>setLoaded(true),650);return()=>clearTimeout(t)},[]);
 return <div className="studioApp">
  <div className={`cinematicLoader ${loaded?'cinematicLoaderHidden':''}`}><div className="loaderMark">SN</div><div className="loaderLine"><span/></div><p>ENTERING THE STUDIO</p></div>
  <div className="filmGrain"/>
  <Navbar/>
  <main className="buildingJourney"><Suspense fallback={null}>
   <Hero/><About/><GraphicDesign/><ProjectsIntro/><Projects/><Skills/><Contact/>
  </Suspense><Footer/></main>
 </div>
}