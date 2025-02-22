"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";

export default function TapAnimation() {
  return (
    <GridComponent animationName="Tap Animation">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="w-24 h-24 bg-[#9911ff] rounded-lg cursor-pointer"
      />
    </GridComponent>
  );
}
