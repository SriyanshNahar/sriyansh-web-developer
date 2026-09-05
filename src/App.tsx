import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loaded components for performance optimization
const GlobalScene = React.lazy(() => import('./components/GlobalScene'));
const Hero = React.lazy(() => import('./components/Hero'));
const Stats = React.lazy(() => import('./components/Stats'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalScene />
      </Suspense>
      <Navbar />
      <main>
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
