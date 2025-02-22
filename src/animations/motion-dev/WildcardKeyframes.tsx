"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";

export default function WildcardKeyframes() {
  return (
    <GridComponent animationName="Wildcard Keyframes Animation">
      <motion.div
        className="w-24 h-24 bg-[#0cdcf7] rounded-lg"
        /**
         * Setting the initial keyframe to "null" will use
         * the current value to allow for interruptable keyframes.
         */
        whileHover={{
          scale: [null, 1.1, 1.6],
          transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            ease: ["easeInOut", "easeOut"],
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />
    </GridComponent>
  );
}
