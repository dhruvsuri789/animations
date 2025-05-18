/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

"use client";

import GridComponent from "@/components/GridComponent";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
        <img src={`/cityscape/${id}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function ParallaxAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <GridComponent animationName="Parallax Animation">
      <motion.div
        id="example"
        ref={containerRef}
        className="h-[30rem] overflow-y-scroll w-full"
      >
        {[1, 2, 3, 4, 5].map((image) => (
          <Image key={image} id={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
        <StyleSheet />
      </motion.div>
    </GridComponent>
  );
}

function StyleSheet() {
  return (
    <style>{`
       html {
          scroll-snap-type: y mandatory;
      }

      .img-container {
          height: 100vh;
          width: 400px;
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
      }

      .img-container > div {
          width: 300px;
          height: 400px;
          margin: 20px;
          background: #f5f5f5;
          overflow: hidden;
      }

      .img-container img {
          width: 300px;
          height: 400px;
      }

      @media (max-width: 500px) {
          .img-container > div {
              width: 150px;
              height: 200px;
          }

          .img-container img {
              width: 150px;
              height: 200px;
          }
      }

      .img-container h2 {
          color: #4ff0b7;
          margin: 0;
          font-family: "Azeret Mono", monospace;
          font-size: 50px;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.2;
          position: absolute;
          display: inline-block;
          top: calc(50% - 25px);
          left: calc(50% + 120px);
      }

      .progress {
          position: absolute;
          left: 0;
          right: 0;
          height: 5px;
          background: #4ff0b7;
          bottom: 50px;
          transform: scaleX(0);
      }
  `}</style>
  );
}
