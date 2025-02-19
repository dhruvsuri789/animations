"use client";
import { motion } from "motion/react";
import GridComponent from "../components/GridComponent";

function GestureAnimation() {
  return (
    <GridComponent animationName="Gesture Animation">
      <motion.button
        className="bg-blue-600 text-slate-200 px-8 h-16 rounded-full cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        /* onTap={() => console.log("tapped")}
        onHoverStart={() => console.log("hovered")}
        onHoverEnd={() => console.log("unhovered")}
        onTapStart={() => console.log("tapped")}
        onTapCancel={() => console.log("untapped")} */
      >
        Hover me!
      </motion.button>
    </GridComponent>
  );
}

export default GestureAnimation;
