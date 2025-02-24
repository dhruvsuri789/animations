"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";
import { useState } from "react";

export default function ToggleAnimationTwo() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <GridComponent animationName="Toggle Animation">
      <button
        className="w-[140px] h-[70px] bg-[#9811ff55] rounded-[50px] flex p-[10px] cursor-pointer"
        style={{
          justifyContent: isOn ? "flex-start" : "flex-end",
        }}
        onClick={toggleSwitch}
      >
        <motion.div
          className="w-[50px] h-[50px] bg-[#9911ff] rounded-full"
          layout
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
      </button>
    </GridComponent>
  );
}
