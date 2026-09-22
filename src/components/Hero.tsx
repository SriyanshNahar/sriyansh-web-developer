import MetroHero from './ui/scroll-locked-video-hero';

const Hero = () => {
  return (
    <div id="home">
      <MetroHero
        title="SRIYANSH NAHAR STUDIO"
        tagline="Brand identity, social media & UI/UX — scroll to see the studio open."
        scrollHint="SCROLL"
        signature={false}
      />
    </div>
  );
};

export default Hero;
