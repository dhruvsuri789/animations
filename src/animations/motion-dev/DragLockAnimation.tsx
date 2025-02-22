"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";
import { useState } from "react";

export default function DragLockAnimation() {
  const [activeDirection, setActiveDirection] = useState<"x" | "y" | null>(
    null
  );
  return (
    <GridComponent animationName="Drag Lock Animation">
      <Line direction="x" activeDirection={activeDirection} />
      <Line direction="y" activeDirection={activeDirection} />
      <motion.div
        drag
        dragDirectionLock
        onDirectionLock={(direction) => setActiveDirection(direction)}
        onDragEnd={() => setActiveDirection(null)}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
        dragElastic={0.2}
        whileDrag={{ cursor: "grabbing" }}
        className="w-[52px] h-[52px] border border-[#f5f5f5] border-solid absolute"
      />
    </GridComponent>
  );
}

function Line({
  direction,
  activeDirection,
}: {
  direction: "x" | "y";
  activeDirection: "x" | "y" | null;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: activeDirection === direction ? 1 : 0.3 }}
      transition={{ duration: 0.1 }}
      className="w-[300px] h-[1px] border-t border-[#f5f5f5] border-dashed absolute"
      style={{ rotate: direction === "y" ? 90 : 0 }}
    />
  );
}
