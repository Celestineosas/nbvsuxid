import {
    useScroll,
    useTransform,
    motion,
    useMotionTemplate
  } from "framer-motion";
  import { useRef } from "react";
  import { parallex1 } from "../../assets/images"; // your image

  const SECTION_HEIGHT = 800;
  
  export const Parallex = () => {
    return (
      <section
        className="relative w-full"
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      >
        <CenterImage />
        <ParallexImages />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950 to-zinc-950" />
      </section>
    );
  };
  
  const CenterImage = () => {
    const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
    return (
      <motion.div
        ref={ref}
        style={{ opacity }}
        className="sticky top-1/2 -translate-y-1/2 h-screen w-full parallex-section overflow-hidden"
      />
    );
  };
  
  
  const ParallexImages = () => {
    return (
      <div className="relative z-10 flex flex-wrap justify-center gap-6 px-4 sm:px-8">
        <ParallexImage
          className="w-[80px] sm:w-[100px] h-auto"
          alt="parallax"
          start={-100}
          end={150}
          src={parallex1}
        />
        <ParallexImage
          className="w-1/4 sm:w-1/6"
          alt="parallax"
          start={200}
          end={-250}
          src={parallex1}
        />
        <ParallexImage
          className="w-1/4 sm:w-1/6"
          alt="parallax"
          start={-300}
          end={100}
          src={parallex1}
        />
        <ParallexImage
          className="w-1/4 sm:w-1/6"
          alt="parallax"
          start={120}
          end={-180}
          src={parallex1}
        />
        <ParallexImage
          className="w-1/4 sm:w-1/6"
          alt="parallax"
          start={-250}
          end={250}
          src={parallex1}
        />
      </div>
    );
  };
  
  type ParallaxProps = {
    className?: string;
    alt: string;
    start: number;
    end: number;
    src: string;
  };
  
  const ParallexImage = ({ className, alt, start, end, src }: ParallaxProps) => {
    const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: [`${start}px end`, `end ${end * -1}px`]
    });
  
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  
    return (
      <motion.img
        className={className}
        ref={ref}
        alt={alt}
        src={src}
        style={{
          transform,
          opacity
        }}
      />
    );
  };
  