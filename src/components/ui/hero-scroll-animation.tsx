import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

interface ScrollImage {
  src: string;
  alt: string;
}

export interface HeroScrollAnimationProps {
  section1Title?: ReactNode;
  section2Title?: ReactNode;
  images?: ScrollImage[];
  footerText?: string;
}

const DEFAULT_IMAGES: ScrollImage[] = [
  { src: 'https://cdn.21st.dev/assets/mirror/ee/eefac89b8a260db8f9246a9edd3258adc8b3935e43e1d0dbb9df16b07a16861c.jpg', alt: 'Selected work preview 1' },
  { src: 'https://cdn.21st.dev/assets/mirror/50/50100b94be1d247209e4a947955830d725b505cdee74462345bbe9c39b4d8969.jpg', alt: 'Selected work preview 2' },
  { src: 'https://cdn.21st.dev/assets/mirror/c7/c7e8e3c5100b589f06ddd1ff6d78099567f9d19a29fc691063b46178ee5b9360.jpg', alt: 'Selected work preview 3' },
  { src: 'https://cdn.21st.dev/assets/mirror/4c/4c20f5c4c21108dac84be488438364890e1bb2eb297a8531539c2a4aa1eecd20.jpg', alt: 'Selected work preview 4' },
];

const Section1: React.FC<SectionProps & { title: ReactNode }> = ({ scrollYProgress, title }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky  font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <h1 className='2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
        {title}
      </h1>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps & { title: ReactNode; images: ScrollImage[] }> = ({ scrollYProgress, title, images }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <article className='container mx-auto relative z-10 '>
        <h1 className='text-6xl leading-[100%] py-10 font-semibold  tracking-tight '>
          {title}
        </h1>
        <div className='grid grid-cols-4 gap-4'>
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading='lazy'
              decoding='async'
              className=' object-cover w-full rounded-md h-full'
            />
          ))}
        </div>
      </article>
    </motion.section>
  );
};

function HeroScrollAnimation({
  section1Title = <>An Hero section Animation <br /> Scroll Please 👇</>,
  section2Title = <>Images That doesn't Make any sense <br /> but still in this section</>,
  images = DEFAULT_IMAGES,
  footerText = 'ui-layout',
}: HeroScrollAnimationProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className='relative h-[200vh] bg-black'>
      <Section1 scrollYProgress={scrollYProgress} title={section1Title} />
      <Section2 scrollYProgress={scrollYProgress} title={section2Title} images={images} />
      <footer className='group bg-[#06060e] '>
        <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
          {footerText}
        </h1>
        <div className='bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
      </footer>
    </main>
  );
}

export default HeroScrollAnimation;
