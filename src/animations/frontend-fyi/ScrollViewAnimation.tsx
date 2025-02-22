"use client";
import { motion } from "motion/react";
import GridComponent from "../../components/GridComponent";

export const ScrollViewAnimation = () => {
  return (
    <GridComponent animationName="Scroll View Animation">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0, x: -30 }}
        /* 
          - 1 means the full element should be in view before the animation to trigger 
          - This means animation will happen if its slight out of view when leaving and full in view when coming back
          */
        viewport={{ amount: 0.9 }}
        className="w-40 h-40 rounded-3xl bg-[rgba(255,255,255,.3)]"
      />
    </GridComponent>
  );
};

export default ScrollViewAnimation;
