"use client";

import GridComponent from "@/components/GridComponent";
import { motion } from "motion/react";
import { useState } from "react";

interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

function Input({ value, children, set, min = -200, max = 200 }: InputProps) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}

export default function AnimationStates() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <GridComponent animationName="Animation States">
      <div id="example" className="flex items-center">
        <motion.div
          className="w-[200px] h-[200px] rounded-2xl border-[5px] border-dotted border-[#ff0088] pointer-events-none"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
        <div className="flex flex-col pl-[50px]">
          <Input value={x} set={setX}>
            x
          </Input>
          <Input value={y} set={setY}>
            y
          </Input>
          <Input value={rotate} set={setRotate} min={-180} max={180}>
            rotate
          </Input>
        </div>
        <StyleSheet />
      </div>
    </GridComponent>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`

          #example input {
              accent-color: #ff0088;
              font-family: "Azeret Mono", monospace;
          }

          #example label {
              display: flex;
              align-items: center;
              margin: 10px 0;
          }

          #example label code {
              width: 100px;
          }

          #example input[type="number"] {
              border: 0;
              border-bottom: 1px dotted #ff0088;
              color: #ff0088;
              margin-left: 10px;
          }

          #example input[type="number"]:focus {
              outline: none;
              border-bottom: 2px solid #ff0088;
          }

          #example input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
          }

          input[type='range']::-webkit-slider-runnable-track {
              height: 10px;
              -webkit-appearance: none;
              background: var(--layer);
              border: 1px solid var(--border);
              border-radius: 10px;
              margin-top: -1px;
          }

          input[type='range']::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background: #ff0088;
              top: -4px;
              position: relative;
          }
      `}</style>
  );
}
