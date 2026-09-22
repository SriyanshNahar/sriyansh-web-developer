import HeroScrollAnimation from './ui/hero-scroll-animation';
import trumatchFront from '../assets/design-work/trumatch-front.jpg';
import trumatchBack from '../assets/design-work/trumatch-back.jpg';
import loundryFront from '../assets/design-work/loundry-front.jpg';
import vateenGheeFront from '../assets/design-work/vateen-ghee-front.jpg';

const ProjectsIntro = () => {
  return (
    <HeroScrollAnimation
      section1Title={<>THINGS I'VE BUILT <br /> IN GRAPHIC. SCROLL 👇</>}
      section2Title={<>Real packaging & brand identity, <br /> shipped to print.</>}
      images={[
        { src: trumatchFront, alt: 'TrueBatch flour packaging design' },
        { src: trumatchBack, alt: 'TrueBatch packaging back panel' },
        { src: loundryFront, alt: 'LoundryCo laundry bag packaging design' },
        { src: vateenGheeFront, alt: 'Vateen Ghee Ghar packaging design' },
      ]}
      footerText="GRAPHIC DESIGN"
    />
  );
};

export default ProjectsIntro;
