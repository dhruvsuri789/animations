"use client";

import GridComponent from "@/components/GridComponent";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function NumberAnimation() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <GridComponent animationName="Number Animation">
      <motion.pre className="text-[64px] text-[#4ff0b7]">{rounded}</motion.pre>
    </GridComponent>
  );
}
