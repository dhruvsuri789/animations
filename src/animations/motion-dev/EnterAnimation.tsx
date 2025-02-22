"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";

export default function EnterAnimation() {
  return (
    <GridComponent animationName="Enter Animation">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          },
        }}
        //Same thing
        // transition={{
        //   duration: 0.4,
        //   scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        // }}
        className="w-24 h-24 bg-[#dd00ee] rounded-[50%]"
      />
    </GridComponent>
  );
}
