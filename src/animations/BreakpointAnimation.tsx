"use client";
import { motion } from "motion/react";
import { useState } from "react";
import GridComponent from "../components/GridComponent";

const BreakpointAnimation = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <GridComponent animationName="Breakpoint Animation">
      <button
        className="bg-white text-black cursor-pointer px-8 py-2 rounded-full absolute top-12 left-1/2 -translate-x-1/2 z-20"
        onClick={() => setIsOpened((open) => !open)}
      >
        {isOpened ? "Close" : "Open"} drawer
      </button>

      <motion.div
        // Use the isOpened boolean for the animations.
        variants={{
          opened: { opacity: 1, "--x": "0%", "--y": "0%" },
          closed: { opacity: 0, "--x": "-100%", "--y": "100%" },
        }}
        initial="closed"
        animate={isOpened ? "opened" : "closed"}
        className="max-sm:translate-y-[--y] md:translate-x-[--x] bg-white w-[90%] overflow-auto md:max-w-[500px] absolute left-[5%] md:left-0 bottom-0 p-5 rounded-tr-2xl rounded-tl-2xl md:rounded-tl-none"
      >
        <Skeleton />
      </motion.div>
    </GridComponent>
  );
};

export default BreakpointAnimation;

const Skeleton = () => (
  <>
    <div className="bg-gray-300 w-[90%] h-[40px] rounded-2xl mb-2" />
    <div className="bg-gray-300 w-[80%] h-[20px] rounded-2xl mb-2" />
    <div className="bg-gray-300 w-[80%] h-[20px] rounded-2xl mb-2" />
    <div className="bg-gray-300 w-[80%] h-[20px] rounded-2xl mb-2" />
    <div className="flex gap-3 mb-12">
      <div className="bg-gray-300 w-[30%] h-[20px] rounded-2xl" />
      <div className="bg-gray-300 w-[30%] h-[20px] rounded-2xl" />
    </div>

    <div className="bg-gray-300 w-[50%] aspect-[5/1] rounded-2xl" />
  </>
);
