"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";

export default function KeyframeAnimation() {
  return (
    <GridComponent animationName="Keyframe Animation">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="w-24 h-24 bg-[#f5f5f5] rounded-lg"
      />
    </GridComponent>
  );
}
