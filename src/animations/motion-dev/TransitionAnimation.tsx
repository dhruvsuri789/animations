"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";

export default function TransitionAnimation() {
  return (
    <GridComponent animationName="Transition Animation">
      <motion.div
        className="w-48 h-48 bg-[#9911ff] rounded-[50%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "reverse",
        }}
      />
    </GridComponent>
  );
}
