"use client";

import GridComponent from "@/components/GridComponent";
import { motion, delay } from "motion/react";
import { useEffect, useState } from "react";

export default function AspectRatioAnimation() {
  const [aspectRatio, setAspectRatio] = useState(1);
  const [width, setWidth] = useState(100);

  const debouncedAspectRatio = useDebouncedState(aspectRatio);
  const debouncedWidth = useDebouncedState(width);

  return (
    <GridComponent animationName="Aspect Ratio Animation">
      <div id="example">
        <div className="container">
          <motion.div
            layout
            className="box"
            style={{
              aspectRatio: debouncedAspectRatio,
              width: debouncedWidth,
              borderRadius: 20,
            }}
          ></motion.div>
        </div>
        <div className="inputContainer">
          <div>
            <Input
              value={aspectRatio}
              set={(newValue) => setAspectRatio(newValue)}
              min={0.1}
              max={5}
              step={0.1}
            >
              Aspect ratio
            </Input>
            <Input
              value={width}
              set={(newValue) => setWidth(newValue)}
              min={10}
              max={1000}
              step={5}
            >
              Width
            </Input>
          </div>
        </div>
        <StyleSheet />
      </div>
    </GridComponent>
  );
}

interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

function Input({ value, children, set, min = 0, max = 100, step }: InputProps) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        step={step}
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

function useDebouncedState<T>(value: T, duration: number = 0.2): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    return delay(() => setDebouncedValue(value), duration);
  }, [value, duration]);
  return debouncedValue;
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 300px;
                height: 300px;
                gap: 20px;
            }

            .box {
                background-color: #4ff0b7;
                position: relative;
                z-index: 1;
            }

            .inputContainer {
                display: flex;
                flex-direction: row;
                gap: 20px;
                background-color: var(--layer);
                padding: 20px 40px;
                border-radius: 10px;
                position: relative;
                z-index: 2;
            }

            #example {
                display: flex;
                align-items: center;
                flex-direction: column;
            }

            #example input {
                accent-color: #4ff0b7;
                font-family: "Azeret Mono", monospace;
                font-size: 12px;
            }

            #example .inputs {
                display: flex;
                flex-direction: column;
                padding-left: 50px;
            }

            #example label {
                display: flex;
                align-items: center;
                margin: 10px 0;
                font-size: 12px;
            }

            #example label code {
                width: 100px;
            }

            #example input[type="number"] {
                border: 0;
                border-bottom: 1px dotted #4ff0b7;
                color: #4ff0b7;
                margin-left: 10px;
                background: transparent;
            }

            #example input[type="number"]:focus {
                outline: none;
                border-bottom: 2px solid #4ff0b7;
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
                background: #4ff0b7;
                top: -4px;
                position: relative;
            }
        `}</style>
  );
}
