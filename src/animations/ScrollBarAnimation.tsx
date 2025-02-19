"use client";
import { motion, useScroll, useSpring } from "motion/react";
import GridComponent from "../components/GridComponent";
import { useRef } from "react";

// A small placeholder component to give us some room to scroll.
const Placeholder = () => (
  <div className="bg-slate-300 rounded-lg aspect-video w-[600px] max-w-[80%] opacity-30" />
);

export const ScrollBarAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const scaleX = useSpring(scrollYProgress);

  return (
    <GridComponent animationName="Scroll Bar Animation">
      <div>
        <div className="sticky top-0 p-2 z-10">
          <motion.div
            className="h-3 w-full bg-[#bc9e7a] origin-left"
            style={{ scaleX }}
            // style={{ scaleX: scrollYProgress }}
          />
        </div>
        <div
          className="space-y-2 flex flex-col items-center overflow-y-auto h-[30rem]"
          ref={containerRef}
        >
          <p className="text-white my-6">
            Time to make some progress and start scrolling... 😉
          </p>
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      </div>
    </GridComponent>
  );
};

export default ScrollBarAnimation;
