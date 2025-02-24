"use client";

import GridComponent from "@/components/GridComponent";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef } from "react";

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

export default function ElementScrollAnimation() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <GridComponent animationName="Element Scroll Animation">
      <div id="example" className="self-center">
        <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <motion.ul ref={ref} style={{ maskImage }}>
          <li style={{ background: "#ff0088" }}></li>
          <li style={{ background: "#dd00ee" }}></li>
          <li style={{ background: "#9911ff" }}></li>
          <li style={{ background: "#0d63f8" }}></li>
          <li style={{ background: "#0cdcf7" }}></li>
          <li style={{ background: "#4ff0b7" }}></li>
        </motion.ul>
        <StyleSheet />
      </div>
    </GridComponent>
  );
}

function StyleSheet() {
  return (
    <style>{`
      #example {
        width: 100vw;
        max-width: 400px;
        position: relative;
      }

      #example #progress {
          position: absolute;
          top: -65px;
          left: -15px;
          transform: rotate(-90deg);
      }

      #example .bg {
          stroke: #ff008829;
      }

      #example #progress circle {
          stroke-dashoffset: 0;
          stroke-width: 10%;
          fill: none;
      }

      #progress .indicator {
          stroke: #ff0088;
      }

      #example ul {
          display: flex;
          width: 100%;
          list-style: none;
          height: 220px;
          overflow-x: scroll;
          padding: 20px 0;
          flex: 0 0 200px;
          margin: 0 auto;
          gap: 20px;
      }

      #example ::-webkit-scrollbar {
          height: 5px;
          width: 5px;
          background: #fff3;
          -webkit-border-radius: 1ex;
      }

      #example ::-webkit-scrollbar-thumb {
          background: #ff0088;
          -webkit-border-radius: 1ex;
      }

      #example ::-webkit-scrollbar-corner {
          background: #fff3;
      }

      #example li {
          flex: 0 0 200px;
          background: #ff0088;
      }

  `}</style>
  );
}
