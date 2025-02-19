import { motion } from "motion/react";
import GridComponent from "../components/GridComponent";

function SquareAnimation() {
  return (
    <GridComponent animationName="Square Animation">
      <motion.div
        className="bg-gray-500 w-24 h-24 rounded-3xl"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: [null, "50%", "100%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: "reverse",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    </GridComponent>
  );
}

export default SquareAnimation;
