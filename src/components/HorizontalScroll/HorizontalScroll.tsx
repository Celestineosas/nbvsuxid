import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"] // optional but improves responsiveness
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="flex w-full px-4 py-5 justify-center items-center bg-anon-dark max-container relative"
    >
      <div className="sticky top-0 overflow-hidden items-center">
        <motion.h1
          style={{ x }}
          className="sm:text-7xl text-5xl font-melodrama text-[#FAF3EC] uppercase whitespace-nowrap"
        >
          Furniture / Interior / Design / Landscape
        </motion.h1>
      </div>
    </section>
  );
};

export default HorizontalScroll;
