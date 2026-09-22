import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FieldLog from "@/components/FieldLog";
import VisualGallery from "@/components/VisualGallery";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AdaptiveAgent from "@/components/AdaptiveAgent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex-1">
      <div className="noise-overlay pointer-events-none fixed inset-0 z-40 opacity-[0.035]" />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <FieldLog />
        <VisualGallery />
        <Projects />
        <Skills />
        <AdaptiveAgent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
