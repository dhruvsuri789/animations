"use client";
import { motion } from "motion/react";
import GridComponent from "../../components/GridComponent";

function CSSVarAnimation() {
  return (
    <GridComponent animationName="CSS Variable Animation">
      <motion.div
        className="bg-white px-4 py-2 text-black"
        // initial={{ "--rotate": "0deg", "--scale": "1" }}
        animate={{ "--rotate": "360deg", "--scale": "2" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: "reverse",
        }}
        style={{
          transform: "rotate(var(--rotate)) scale(var(--scale))",
        }}
      >
        CSS Variables are cool!
      </motion.div>
    </GridComponent>
  );
}

export default CSSVarAnimation;
