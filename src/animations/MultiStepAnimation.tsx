"use client";
import { motion } from "motion/react";
import GridComponent from "../components/GridComponent";
import "../styles/MultiStepStyles.css";

/* 
origin-top-left: because by default the origin is center
*/
function MultiStepAnimation() {
  return (
    <GridComponent animationName="Multi-Step Animation">
      <div className="w-[150px] overflow-hidden flex relative flex-col aspect-[2/4] text-white bg-[#41352a] rounded-2xl">
        <div className="h-full fadeout">
          <motion.div
            className="text-[80px] [font-family:monospace] leading-[0.8] inset-1 absolute break-all origin-top-left"
            animate={{
              opacity: [0, 1, 1, 1, 1, 1, 0],
              scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
              scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1],
            }}
          >
            responsive
          </motion.div>
        </div>
        <p className="mt-auto p-2">Make your animations work on all devices</p>
      </div>
    </GridComponent>
  );
}

export default MultiStepAnimation;
