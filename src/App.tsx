import React, { Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
const GlobalScene=React.lazy(()=>import('./components/GlobalScene'));
const Hero=React.lazy(()=>import('./components/Hero'));
const About=React.lazy(()=>import('./components/About'));
const Experience=React.lazy(()=>import('./components/Experience'));
const Projects=React.lazy(()=>import('./components/Projects'));
const GraphicDesign=React.lazy(()=>import('./components/GraphicDesign'));
const Skills=React.lazy(()=>import('./components/Skills'));
const Contact=React.lazy(()=>import('./components/Contact'));

export default function App(){
 const [loaded,setLoaded]=useState(false);
 useEffect(()=>{const t=window.setTimeout(()=>setLoaded(true),650);return()=>clearTimeout(t)},[]);
 return <div className="studioApp">
  <div className={`cinematicLoader ${loaded?'cinematicLoaderHidden':''}`}><div className="loaderMark">SN</div><div className="loaderLine"><span/></div><p>ENTERING THE STUDIO</p></div>
  <div className="filmGrain"/>
  <Suspense fallback={null}><GlobalScene/></Suspense>
  <Navbar/>
  <main className="buildingJourney"><Suspense fallback={null}>
   <Hero/><About/><Experience/><Projects/><GraphicDesign/><Skills/><Contact/>
  </Suspense></main>
 </div>
}