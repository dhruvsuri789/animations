"use client";

import GridComponent from "@/components/GridComponent";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { useState } from "react";

/**
 * A toggle switch that demonstrates custom easing functions with both bounce and spring animations.
 */

export default function ToggleAnimation() {
  const [isOn, setIsOn] = useState(true);

  return (
    <GridComponent animationName="Toggle Animation">
      <div className="flex items-center justify-center flex-col">
        <div
          className={cn(
            "w-[100px] h-[200px] bg-[#fff3] flex rounded-[50px] p-[10px] cursor-pointer",
            isOn ? "items-start" : "items-end"
          )}
          onClick={() => setIsOn(!isOn)}
        >
          <motion.div
            className="w-[80px] h-[80px] bg-[#f5f5f5] rounded-[40px] will-change-transform"
            layout
            transition={isOn ? spring : bounce}
          />
        </div>
      </div>
    </GridComponent>
  );
}

/**
 * ================  Constants  =========================
 */

const bounce = {
  duration: 1.2,
  ease: bounceEase,
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

/**
 * ================  Utils  =========================
 */

// From https://easings.net/#easeOutBounce
function bounceEase(x: number) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}
