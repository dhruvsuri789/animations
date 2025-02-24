"use client";

import GridComponent from "@/components/GridComponent";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { useState } from "react";

export default function SpringAnimation() {
  const [state, setState] = useState(false);

  return (
    <GridComponent animationName="Spring Animation">
      <div className="flex flex-col items-center justify-center gap-5">
        <motion.div
          className="w-24 h-24 bg-[#4ff0b7] rounded-md"
          style={{
            transform: state
              ? "translateX(100%) rotate(180deg)"
              : "translateX(-100%) rotate(0deg)",
          }}
          transition={{
            type: "spring",
            visualDuration: 0.5,
            bounce: 0.8,
          }}
        />
        <button
          onClick={() => setState(!state)}
          className="bg-[#4ff0b7] text-gray-900 rounded-md px-4 py-2 hover:bg-[#43d89f]"
        >
          Toggle position
        </button>
      </div>
      {/* <div className="example-container">
        <div className="box" data-state={state} />
        <button onClick={() => setState(!state)}>Toggle position</button>

        <style>
          {`
              .example-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 20px;
              }

              .example-container .box {
                  width: 100px;
                  height: 100px;
                  background-color: #4ff0b7;
                  border-radius: 10px;
                  transition: transform ${spring(0.5, 0.8)};
                  transform: translateX(-100%);
              }

              .example-container .box[data-state="true"] {
                  transform: translateX(100%) rotate(180deg);
              }

              .example-container button {
                  background-color: #4ff0b7;
                  color: #0f1115;
                  border-radius: 5px;
                  padding: 10px;
                  margin: 10px;
              }
          `}
        </style>
      </div> */}
    </GridComponent>
  );
}
