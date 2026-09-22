import HeroScrollAnimation from './ui/hero-scroll-animation';

const ProjectsIntro = () => {
  return (
    <HeroScrollAnimation
      section1Title={<>THINGS I'VE <br /> BUILT. SCROLL 👇</>}
      section2Title={<>Across fashion, health-tech, <br /> gaming and more.</>}
      footerText="DEV WORK"
    />
  );
};

export default ProjectsIntro;
