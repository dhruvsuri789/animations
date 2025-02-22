"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";

export default function RotateAnimation() {
  return (
    <GridComponent animationName="Rotate Animation">
      <motion.div
        className="w-24 h-24 bg-[#ff0088] rounded-lg"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "loop",
        }}
      />
    </GridComponent>
  );
}
