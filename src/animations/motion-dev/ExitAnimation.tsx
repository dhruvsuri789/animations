"use client";

import GridComponent from "@/components/GridComponent";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <GridComponent animationName="Exit Animation">
      <div className="flex flex-col w-24 h-40 relative">
        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="w-24 h-24 bg-[#0cdcf7] rounded-lg"
            />
          ) : null}
        </AnimatePresence>
        <motion.button
          className="bg-[#0cdcf7] rounded-lg px-5 py-2 text-[#0f1115] absolute bottom-0 right-0 left-0"
          onClick={() => setIsVisible(!isVisible)}
          whileTap={{ y: 1 }}
        >
          {isVisible ? "Hide" : "Show"}
        </motion.button>
      </div>
    </GridComponent>
  );
}
