import { motion } from "motion/react";
import GridComponent from "../components/GridComponent";

export const ScrollViewAnimationV2 = () => {
  return (
    <GridComponent animationName="Scroll View Animation - V2">
      <motion.div
        variants={{
          inView: { transition: { staggerChildren: 0.1 } },
          outOfView: {
            transition: { staggerChildren: 0.1, staggerDirection: -1 },
          },
        }}
        whileInView="inView"
        initial="outOfView"
        animate="outOfView"
        viewport={{ amount: 1 }}
        className="grid grid-cols-4 justify-center gap-4"
      >
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="bg-gray-300 w-20 h-20 rounded-xl"
            variants={{
              inView: { opacity: 1, x: 0 },
              outOfView: { opacity: 0, x: -30 },
            }}
          />
        ))}
      </motion.div>
    </GridComponent>
  );
};

export default ScrollViewAnimationV2;
