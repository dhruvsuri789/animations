"use client";

import GridComponent from "@/components/GridComponent";
import { frame, motion, useMotionValue, useSpring } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

export default function PointerAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <GridComponent animationName="Follow Pointer Animation">
      <motion.div
        ref={ref}
        style={{ x, y }}
        className="w-[100px] h-[100px] bg-[#ff0088] rounded-full fixed top-0 left-0 pointer-events-none"
      />
    </GridComponent>
  );
}
