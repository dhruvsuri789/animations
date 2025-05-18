/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import GridComponent from "../../components/GridComponent";

export const ScrollStickyAnimation = () => {
  const containeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containeRef,
  });

  const scale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const xRow1 = useTransform(scrollYProgress, [0.15, 0.83], [0, -300]);
  const xRow2 = useTransform(scrollYProgress, [0.15, 0.83], [0, 300]);
  const xRow3 = useTransform(scrollYProgress, [0.15, 0.83], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0.66, 0.72], [1, 0]);

  return (
    <GridComponent
      animationName="Scroll Sticky Animation"
      className="min-h-[calc(100vh-10rem)]"
    >
      <div
        ref={containeRef}
        className="overflow-y-scroll h-[calc(100vh-10rem)]"
      >
        <div className="h-screen" />
        <div className="h-[300vh]">
          <div className="sticky top-1/2 -translate-y-1/2 text-[68px] text-white overflow-clip space-y-4">
            <motion.div
              className="flex gap-6 justify-center items-center"
              style={{ scale, x: xRow1, opacity }}
            >
              <p>HTML</p>
              <Image id={1} />
              <p>CSS</p>
              <Image id={2} />
              <p>JavaScript</p>
              <Image id={3} />
              <p>TypeScript</p>
              <Image id={4} />
            </motion.div>
            <motion.div
              className="flex gap-6 justify-center items-center"
              style={{ scale, x: xRow2, opacity }}
            >
              <p>Svelte</p>
              <Image id={5} />
              <p>Vue</p>
              <Image id={6} />
              <p>React</p>
              <Image id={7} />
              <p>Angular</p>
              <Image id={8} />
            </motion.div>
            <motion.div
              className="flex gap-6 justify-center items-center"
              style={{ scale, x: xRow3, opacity }}
            >
              <p>Accessibility</p>
              <Image id={9} />
              <p>Performance</p>
              <Image id={10} />
              <p>SEO</p>
              <Image id={11} />
              <p>Semantics</p>
              <Image id={12} />
            </motion.div>
          </div>
        </div>
        <div className="h-screen" />
      </div>
    </GridComponent>
  );
};

const Image = ({ id }: { id: number }) => (
  <img
    className="w-16 h-16 shrink-0 rounded-full"
    src={`https://randomuser.me/api/portraits/women/${id}.jpg`}
    alt="Random user picture"
  />
);

export default ScrollStickyAnimation;
