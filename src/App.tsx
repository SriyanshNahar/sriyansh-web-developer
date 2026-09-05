import React, { Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const GlobalScene = React.lazy(() => import('./components/GlobalScene'));
const Hero = React.lazy(() => import('./components/Hero'));
const Stats = React.lazy(() => import('./components/Stats'));
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const GraphicDesign = React.lazy(() => import('./components/GraphicDesign'));
const Skills = React.lazy(() => import('./components/Skills'));
const Contact = React.lazy(() => import('./components/Contact'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setLoaded(true), 850); return () => window.clearTimeout(timer); }, []);

  return <>
    <div className={`cinematicLoader ${loaded ? 'cinematicLoaderHidden' : ''}`} aria-hidden="true">
      <div className="loaderMark">SN</div><div className="loaderLine"><span /></div><p>ENTERING SRIYANSH STUDIO</p>
    </div>
    <div className="filmGrain" aria-hidden="true" />
    <Suspense fallback={null}><GlobalScene /></Suspense>
    <Navbar />
    <main>
      <Suspense fallback={<div className="pageFallback">Entering the studio…</div>}>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <GraphicDesign />
        <Skills />
        <Contact />
      </Suspense>
      <Suspense fallback={null}><ScrollToTop /></Suspense>
    </main>
    <Footer />
  </>;
}
export default App;