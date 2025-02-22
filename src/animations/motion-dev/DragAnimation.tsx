"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";
import { useRef } from "react";

export default function DragAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  return (
    <GridComponent animationName="Drag Animation">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        ref={mainContainerRef}
      >
        <motion.div
          drag
          dragConstraints={mainContainerRef}
          dragElastic={0.2}
          className="w-20 h-20 bg-[#cb39a4] rounded-lg cursor-pointer absolute z-10"
        />

        <motion.div
          className="w-60 h-60 bg-[#732279] rounded-lg z-9"
          ref={containerRef}
        >
          <motion.div
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            className="w-20 h-20 bg-[#dd00ee] rounded-lg cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </GridComponent>
  );
}
