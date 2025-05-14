import { motion } from "framer-motion";
import { ComponentType } from "react";

const Transition = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => (
    <>
      <WrappedComponent {...props} />

      {/* Exit curtain (route leave) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 0, opacity: 0 }}
        exit={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-0 left-0 w-full h-screen bg-anon-dark origin-left z-[60]"
      />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 0, opacity: 0 }}
        exit={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-0 left-0 w-full h-screen bg-[#1e1e1e] origin-left z-[50]"
      />

      {/* Entrance curtain (on mount) */}
      <motion.div
        initial={{ scaleX: 1, opacity: 1 }}
        animate={{ scaleX: 0, opacity: 0 }}
        exit={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-0 left-0 w-full h-screen bg-anon-dark origin-right z-[60]"
      />

      <motion.div
        initial={{ scaleX: 1, opacity: 1 }}
        animate={{ scaleX: 0, opacity: 0 }}
        exit={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-0 left-0 w-full h-screen bg-[#1e1e1e] origin-right z-[50]"
      />
    </>
  );
};

export default Transition;
