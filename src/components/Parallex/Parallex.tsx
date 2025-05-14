import { useScroll, useTransform, motion, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

export const Parallex = () => {
  return (
    <section className="relative w-full sm:h-[500px] h-[410px]">
      <CenterImage />
    </section>
  );
};

const CenterImage = () => {
  const ref = useRef(null);

  // Track the vertical scroll progress
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
  });

  // Use scrollYProgress for smooth scaling (1 to 0.5 scale)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // Map scrollY to background size (adjust background size based on scroll)
  const backgroundSize = useTransform(scrollY, [0, 1], ["170%", "100%"]);

  // Map the scroll progress to clipPath values (adjusting the clipping)
  const clip1 = useTransform(scrollY, [0, 1], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1], [75, 100]);

  // Create the polygon clipPath with motion template
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        clipPath,
        backgroundSize,
      }}
      className="flex top-0 justify-center items-center sm:h-screen h-full w-full parallex-section overflow-hidden"
    >
      <h1 className="sm:text-[18vmax] text-[10vmax] font-melodrama" style={{ color: "white" }}>
        VSUXID
      </h1>
    </motion.div>
  );
};
