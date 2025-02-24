"use client";

import GridComponent from "@/components/GridComponent";
import { motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

const processCircle: React.CSSProperties = {
  strokeDashoffset: 0,
  strokeWidth: 5,
  fill: "none",
};

const progressIcon: React.CSSProperties = {
  ...processCircle,
  transform: "translateX(-100px) rotate(-90deg)",
  stroke: "#ff0088",
};

const progressIconIndicator: React.CSSProperties = {
  ...processCircle,
  strokeDashoffset: 0,
  strokeWidth: 5,
  fill: "none",
};

const progressIconBg: React.CSSProperties = {
  opacity: 0.2,
};

function Item({
  container,
  isContainerReady,
}: {
  container: React.RefObject<HTMLDivElement | null>;
  isContainerReady: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: container.current ? container : undefined,
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="h-full max-h-[400px] flex justify-center items-center">
      {isContainerReady && (
        <div
          ref={ref}
          className="w-[200px] h-[250px] border-2 border-dotted border-[#ff0088] relative"
        >
          <figure className="sticky top-0 p-0 m-0 w-[80px] h-[80px]">
            <svg
              style={progressIcon}
              width="75"
              height="75"
              viewBox="0 0 100 100"
            >
              <circle
                style={progressIconBg}
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="bg"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                style={{
                  ...progressIconIndicator,
                  pathLength: scrollYProgress,
                }}
              />
            </svg>
          </figure>
        </div>
      )}
    </section>
  );
}

export default function TrackElementAnimation() {
  const [isContainerReady, setIsContainerReady] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      setIsContainerReady(true);
    }
  }, [container]);

  return (
    <GridComponent animationName="Track Element Animation">
      <div
        ref={container}
        className="h-[30rem] overflow-y-scroll relative w-full"
      >
        <div className="h-[27rem] text-2xl flex items-center justify-center">
          Scroll Down
        </div>
        {[...Array(12)].map((_, index) => (
          <Item
            key={index}
            container={container}
            isContainerReady={isContainerReady}
          />
        ))}
        <div className="h-[27rem] text-2xl flex items-center justify-center">
          Scroll Up
        </div>
      </div>
    </GridComponent>
  );
}
