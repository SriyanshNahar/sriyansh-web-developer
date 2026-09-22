import HeroScrollAnimation from './ui/hero-scroll-animation';
import truebatchFront from '../assets/design-work/truebatch-front.jpg';
import truebatchBack from '../assets/design-work/truebatch-back.jpg';
import loundryco from '../assets/design-work/loundryco.jpg';
import choosekindMailer from '../assets/design-work/choosekind-mailer.jpg';

const ProjectsIntro = () => {
  return (
    <HeroScrollAnimation
      section1Title={<>THINGS I'VE BUILT <br /> IN GRAPHIC. SCROLL 👇</>}
      section2Title={<>Real packaging & brand identity, <br /> shipped to print.</>}
      images={[
        { src: truebatchFront, alt: 'TrueBatch flour packaging design' },
        { src: truebatchBack, alt: 'TrueBatch packaging back panel' },
        { src: loundryco, alt: 'LoundryCo laundry brand poster design' },
        { src: choosekindMailer, alt: 'Choose Kind mailer bag packaging design' },
      ]}
      footerText="GRAPHIC DESIGN"
    />
  );
};

export default ProjectsIntro;
